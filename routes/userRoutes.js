import { Hono } from "hono";
import { authUser } from "../middlewares/auth.js";
import userController from "./../controllers/userController.js";

const user = new Hono();

user.get("/*", authUser);

user.get("/", userController.getUsers);
user.get("/:userId", userController.getUser);
user.put("/:userId", userController.updateUser);
user.delete("/:userId", userController.deleteUser);

export default user;
