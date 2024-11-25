import { Hono } from "hono";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
import problemsRoutes from "./problemRoutes.js";

const index = new Hono();

index.route("/auth", authRoutes);
index.route("/users", userRoutes);
index.route("/problems", problemsRoutes);

export default index;
