import { Hono } from "hono";
import { authUser } from "../middlewares/auth.js";

const user = new Hono();

user.get("/*", authUser);

user.get("/", (c) => {
  return c.json({ message: "Hono!", abc: "abc" });
});

user.get("/:userId", (c) => {
  const { userId } = c.req.param();
  return c.json({ message: "Hono!", userId: userId });
});

export default user;
