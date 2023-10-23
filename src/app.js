#! /usr/bin/env node
import chalk from "chalk";
import gradient from "gradient-string";
import os from "os";
import readlineSync from "readline-sync";
import bot from "./ai/bot.js";
import heading from "./utils/heading.js";
import spinner from "./utils/spinner.js";
import toTitleCase from "./utils/toTitleCase.js";

const username = os.userInfo().username;

(async () => {
  try {
    await heading();

    while (true) {
      const question = readlineSync.question(
        chalk.bold(gradient.atlas(`🙎 ${toTitleCase(username)} : `))
      );

      spinner.start();

      const answer = await bot(question);

      spinner.stop();

      if (question.toLowerCase() === "exit") {
        console.log(chalk.bold(gradient.pastel("🤖 Chatbot : ")) + answer);
        return;
      }

      console.log(chalk.bold(gradient.pastel("🤖 Chatbot : ")) + answer);
    }
  } catch (err) {
    spinner.stop();
    const errMsg = err?.message ? err.message : "Something went wrong";
    console.log(errMsg);
  }
})();
