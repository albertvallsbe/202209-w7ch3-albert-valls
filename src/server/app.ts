import cors from "cors";
import express from "express";
import morgan from "morgan";
import { notFoundError, generalError } from "./middlewares/errors.js";
import usersRouter from "./routes/userRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/users", cors(), usersRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
