import "../../loadEnvironment.js";
import debugCreator from "debug";
import chalk from "chalk";
import type { Request, Response, NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("user:server:middlewares:errors");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    "Endpoint not found",
    "Endpoint not found",
    404
  );
  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const publicMessage = error.publicMessage || "General pete";

  debug(chalk.red(error.message));

  res.status(statusCode).json({ error: publicMessage });
};
