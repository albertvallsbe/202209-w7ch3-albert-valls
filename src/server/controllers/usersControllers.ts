import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import CustomError from "../../CustomError/CustomError";
import User from "../../database/models/User";
import type { Credentials, UserTokenPayload } from "../../types";
import { environment } from "../../loadEnvironment";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body as Credentials;

  const user = await User.findOne({ username });

  if (!user) {
    const error = new CustomError(
      "Username not found",
      "Wrong credentials",
      401
    );
    next(error);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    const error = new CustomError(
      "Password is incorrect",
      "Wrong credentials",
      401
    );
    next(error);
    return;
  }

  const tokenPayload: UserTokenPayload = {
    id: user._id.toString(),
    username,
  };

  const token = jwt.sign(tokenPayload, environment.jwtSecret, {
    expiresIn: "2d",
  });

  res.status(200).json({ accessToken: token });
};
