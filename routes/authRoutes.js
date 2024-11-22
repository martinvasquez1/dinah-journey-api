import { Hono } from "hono";
import authController from "./../controllers/authController.js";

const auth = new Hono();

auth.post("/sign-up", authController.signUp);
auth.post("/sign-in", authController.signIn);

export default auth;
