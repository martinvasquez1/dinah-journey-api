import { Hono } from "hono";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";

const index = new Hono();

index.route("/users", userRoutes);
index.route("/auth", authRoutes);

export default index;
