import { Hono } from "hono";
import userRoutes from "./userRouter.js";
import authRoutes from "./authRouter.js";

const index = new Hono();

index.route("/users", userRoutes);
index.route("/auth", authRoutes);

export default index;
