import { Hono } from "hono";
import { authUser } from "../middlewares/auth.js";
import problemController from "./../controllers/problemController.js";

const user = new Hono();

user.get("/*", authUser);

user.get("/:problemId", problemController.getProblem);
user.post("/", problemController.generateProblem);

export default user;
