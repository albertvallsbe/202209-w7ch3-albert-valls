import "./loadEnviorments.js";
import debug from "debug";
import chalk from "chalk";
import connectToDb from "./database/index.js";
import startServer from "./server/index.js";
import app from "./server/app.js";

const { PORT: port, MONGO_URL: url } = process.env;

try {
  await connectToDb(url);
  debug(chalk.green("Connected to database"));
  // eslint-disable-next-line no-implicit-coercion, @typescript-eslint/no-unsafe-call
  await startServer(app, +port);
  debug(chalk.green(`Server listening on http://localhost:${port}`));
} catch (error: unknown) {
  debug(chalk.red("Error starting the API", (error as Error).message));
}
