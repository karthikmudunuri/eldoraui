import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";

import { clearAll, getEnv, login } from "../utils/get-env";
import {
  ASCII_TEXT,
  ColorFullText,
  message
} from "../utils/logger";

const optionSchema = z.object({
  clear: z.boolean(),
  login: z.string().optional(),
});

const ELDORA_PRO_ENV = getEnv();

export const auth = new Command()
  .addHelpText("before", ELDORA_PRO_ENV ? message : ASCII_TEXT)
  .name("auth")
  .description("For the Eldora UI Pro Users. Authenticate your account.")
  .option("-l, --login <env>", "the secret env to authenticate.")
  .option("-d, --clear", "clear the auth secrets.", false)
  .action(async (opts) => {
    const options = optionSchema.parse(opts);

    switch (true) {
      case options.clear: {
        const isClear = await prompts({
          type: "confirm",
          name: "value",
          message:
            "Are you sure you want to log out and clear the auth secrets?",
          choices: [
            { title: "Yes", value: true },
            { title: "No", value: false },
          ],
        });

        if (isClear.value) {
          clearAll();
          console.log("Logged out ✅");
        }

        break;
      }
      case options.login !== undefined: {
        const isLogined = await login(options.login);
        if (isLogined) {
          console.log(ColorFullText(message));
        }
        break;
      }
      default: {
        console.log(
          ELDORA_PRO_ENV ? message : ASCII_TEXT,
          ColorFullText(!ELDORA_PRO_ENV ? message : ASCII_TEXT),
        );
      }
    }
  });
