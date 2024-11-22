import { Hono } from "hono";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const index = new Hono();

index.route("/users", userRouter);
index.route("/auth", authRouter);

export default index;
