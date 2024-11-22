import { Hono } from "hono";

const user = new Hono();

user.get("/", (c) => {
  return c.json({ message: "Hono!", abc: "abc" });
});

user.get("/:userId", (c) => {
  const { userId } = c.req.param();
  return c.json({ message: "Hono!", userId: userId });
});

export default user;
