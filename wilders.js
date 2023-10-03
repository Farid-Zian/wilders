import chalk from "chalk";

const wilders = [
  chalk.red("Farid"),
  chalk.green("Marie"),
  chalk.blue("Florence"),
  chalk.yellow("Fred"),
];

console.log("Noms des collègues Wilder :");
wilders.forEach((name) => console.log(name));
