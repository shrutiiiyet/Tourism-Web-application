import chalk from "chalk";

export const logger = {
  info: (message, ...args) => {
    console.log(chalk.blue("[INFO]"), message, ...args);
  },

  warn: (message, ...args) => {
    console.warn(chalk.yellow("[WARN]"), message, ...args);
  },

  error: (message, ...args) => {
    console.error(chalk.red("[ERROR]"), message, ...args);
  },

  debug: (message, ...args) => {
    if (process.env.DEBUG === "true") {
      console.log(chalk.magenta("[DEBUG]"), message, ...args);
    }
  },
};