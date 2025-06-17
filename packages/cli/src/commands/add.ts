import { existsSync, promises as fs } from "fs";
import path from "path";
import { generateDistinctId } from "@/src/utils/distinct-id";
import { getConfig } from "@/src/utils/get-config";
import { getEnv } from "@/src/utils/get-env";
import { getPackageManager } from "@/src/utils/get-package-manager";
import { handleError } from "@/src/utils/handle-error";
import {
  ASCII_TEXT,
  ColorFullText,
  logger,
  message,
} from "@/src/utils/logger";
import { posthog } from "@/src/utils/posthog";
import {
  fetchTree,
  fetchTreeFromShadcn,
  getItemTargetPath,
  getRegistryBaseColor,
  getRegistryIndexEldoraUI,
  getRegistryIndexShadcn,
  resolveTreeWithShadcn,
} from "@/src/utils/registry";
import { transform } from "@/src/utils/transformers";
import chalk from "chalk";
import { Command } from "commander";
import { execa } from "execa";
import ora from "ora";
import prompts from "prompts";
import { z } from "zod";

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  pro: z.boolean(),
  example: z.boolean(),
  shadcn: z.boolean(),
  path: z.string().optional(),
});

const EldoraUI_PRO_ENV = getEnv();

export const add = new Command()
  .name("add")
  .description("Add ui components to your project")
  .argument("[components...]", "the components to add")
  .option("-y, --yes", "skip confirmation prompt.", true)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .option("-a, --all", "add all available components", true)
  .addHelpText("after", ColorFullText(EldoraUI_PRO_ENV ? message : ASCII_TEXT))
  .option("-e, --example", "include available examples & demos", false)
  .option("-s, --shadcn", "include available components from shadcn-ui", false)
  .option("-p, --path <path>", "the path to add the component to.")
  .action(async (components, opts) => {
    console.log(
      EldoraUI_PRO_ENV ? message : ASCII_TEXT,
      ColorFullText(!EldoraUI_PRO_ENV ? message : ASCII_TEXT),
    );
    try {
      const options = addOptionsSchema.parse({
        components,
        ...opts,
      });

      const cwd = path.resolve(options.cwd);

      if (!existsSync(cwd)) {
        logger.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }

      const config = await getConfig(cwd);
      if (!config) {
        logger.warn(
          `Configuration is missing. Please run ${chalk.green(
            `init`,
          )} to create a components.json file.`,
        );
        process.exit(1);
      }

      if (options.pro && !EldoraUI_PRO_ENV) {
        logger.warn("You're not authenticated to add Eldora UI components");
        return;
      }

      const registryIndex = !options.shadcn
        ? await getRegistryIndexEldoraUI(options.pro)
        : [];
      const shadcnRegistryIndex = await getRegistryIndexShadcn();

      let selectedComponents = options.all
        ? (options.shadcn ? shadcnRegistryIndex : registryIndex).map(
            (entry) => entry.name,
          )
        : options.components;

      if (!options.components?.length && !options.all) {
        const filterIndex = (): typeof registryIndex =>
          registryIndex.filter((e) => {
            const type = e.type.split(":")[1] as string;
            if (options.pro) return type === "blocks";

            if (options.example) return type === "example";

            return type === "eldoraui";
          });

        const multiselectChoice = options.shadcn
          ? shadcnRegistryIndex
          : filterIndex();
        const { components } = await prompts({
          type: "multiselect",
          name: "components",
          message: "Which components would you like to add?",
          hint: "Space to select. A to toggle all. Enter to submit.",
          instructions: false,
          choices: multiselectChoice.map((entry) => ({
            title: entry.name,
            value: entry.name,
            selected: options.all
              ? true
              : options.components?.includes(entry.name),
          })),
        });
        selectedComponents = components;
      }

      if (!selectedComponents?.length) {
        logger.warn("No components selected. Exiting.");
        process.exit(0);
      }

      // const tree = await resolveTree(registryIndex, selectedComponents)
      const { eldorauiTree, shadcnTree } = await resolveTreeWithShadcn(
        shadcnRegistryIndex,
        registryIndex,
        selectedComponents,
        options.shadcn,
      );

      const eldorauiPayload = await fetchTree(eldorauiTree, EldoraUI_PRO_ENV);
      const shadcnPayload = await fetchTreeFromShadcn(config.style, shadcnTree);
      const baseColor = await getRegistryBaseColor(config.tailwind.baseColor);

      if (!eldorauiPayload.length && !shadcnPayload.length) {
        logger.warn("Selected components not found. Exiting.");
        process.exit(0);
      } else {
        eldorauiPayload.length !== 0 &&
          logger.info(`Found ${eldorauiPayload.length}x Eldora UI components.`);
        shadcnPayload.length !== 0 &&
          logger.info(`Found ${shadcnPayload.length}x Shadcn UI components.`);
      }

      const totalPayload = [...eldorauiPayload, ...shadcnPayload];

      if (!options.yes) {
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          message: `Ready to install components and dependencies. Proceed?`,
          initial: true,
        });

        if (!proceed) {
          process.exit(0);
        }
      }

      const spinner = ora(`Installing components...`).start();
      for (const item of totalPayload) {
        spinner.text = `Installing ${item.name}...`;
        const targetDir = await getItemTargetPath(
          config,
          item,
          options.path ? path.resolve(cwd, options.path) : undefined,
        );

        if (!targetDir) {
          continue;
        }

        if (!existsSync(targetDir)) {
          await fs.mkdir(targetDir, { recursive: true });
        }

        const existingComponent = item.files.filter((file) =>
          existsSync(path.resolve(targetDir, file.name)),
        );

        if (existingComponent.length && !options.overwrite) {
          if (selectedComponents.includes(item.name)) {
            spinner.stop();
            const { overwrite } = await prompts({
              type: "confirm",
              name: "overwrite",
              message: `Component ${item.name} already exists. Would you like to overwrite?`,
              initial: false,
            });

            if (!overwrite) {
              logger.info(
                `Skipped ${item.name}. To overwrite, run with the ${chalk.green(
                  "--overwrite",
                )} flag.`,
              );
              continue;
            }

            spinner.start(`Installing ${item.name}...`);
          } else {
            continue;
          }
        }

        for (const file of item.files) {
          let filePath = path.resolve(targetDir, file.name);

          // Run transformers.
          const content = await transform({
            filename: file.name,
            raw: file.content,
            config,
            baseColor,
          });

          if (!config.tsx) {
            filePath = filePath.replace(/\.tsx$/, ".jsx");
            filePath = filePath.replace(/\.ts$/, ".js");
          }

          await fs.writeFile(filePath, content);
        }

        const packageManager = await getPackageManager(cwd);

        // Install dependencies.
        if (item.dependencies?.length) {
          try {
            await execa(
              packageManager,
              [
                packageManager === "npm" ? "install" : "add",
                ...item.dependencies,
              ],
              {
                cwd,
              },
            );
          } catch (error) {
            logger.warn(
              `\nFailed to install dependencies for ${
                item.name
              }.\n\t-${item.dependencies.join("\n\t- ")}\n\nReason: ${error}`,
            );
          }
        }

        // Install devDependencies.
        if (item.devDependencies?.length) {
          try {
            await execa(
              packageManager,
              [
                packageManager === "npm" ? "install" : "add",
                "-D",
                ...item.devDependencies,
              ],
              {
                cwd,
              },
            );
          } catch (error) {
            logger.warn(
              `\nFailed to install devDependencies for ${
                item.name
              }.\n\t-${item.devDependencies.join(
                "\n\t- ",
              )}\n\nReason: ${error}`,
            );
          }
        }
      }

      posthog.capture({
        event: "cli_add",
        distinctId: generateDistinctId(),
        properties: {
          components: selectedComponents,
          style: config.style,
          baseColor: config.tailwind.baseColor,
        },
      });

      spinner.succeed(`Done.`);
    } catch (error) {
      handleError(error);
    }
  });
