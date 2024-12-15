#!/usr/bin/env node
import { add } from "@/src/commands/add";
import { init } from "@/src/commands/init";
import { posthog } from "@/src/utils/posthog";
import { Command } from "commander";

import { getEnv } from "./utils/get-env";
import { getPackageInfo } from "./utils/get-package-info";
import {
  ASCII_TEXT,
  ColorFullText,
  message,

} from "./utils/logger";

process.on("SIGINT", async () => {
  await posthog.shutdown();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await posthog.shutdown();
  process.exit(0);
});

async function main() {
  const packageInfo = await getPackageInfo();
  const ELDORAUI_PRO_ENV = getEnv();

  const program = new Command()
    .addHelpText("before", ELDORAUI_PRO_ENV ? message : ASCII_TEXT)
    .addHelpText("after", ColorFullText(ELDORAUI_PRO_ENV ? message : ASCII_TEXT))
    .name("eldorauicli")
    .description("Add Eldora UI components to your apps.")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init).addCommand(add);

  // .addCommand(auth).addCommand(project);

  program.parse();
}

main();
