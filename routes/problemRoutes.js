import { Hono } from "hono";
import { authUser } from "../middlewares/auth.js";
import problemController from "./../controllers/problemController.js";

const problem = new Hono();

problem.get("/*", authUser);

problem.get("/:problemId", problemController.getProblem);
problem.post("/", problemController.generateProblem);

export default problem;
