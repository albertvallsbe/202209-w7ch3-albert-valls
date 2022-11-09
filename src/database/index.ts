import "../loadEnvironment.js";
import mongoose from "mongoose";
import chalk from "chalk";
import debugCreator from "debug";

const debug = debugCreator(`${process.env.DEBUG}`);

export const connectToDb = async (url: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    await mongoose.connect(url, { dbName: "w7ch3" });
    debug(chalk.yellow("Connect to database"));
  } catch {
    debug(chalk.red("Error to connect to DDBBB"));
  }
};

export default connectToDb;
