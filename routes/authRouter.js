import { Hono } from "hono";
import { issueJWT } from "../utils/auth";

const auth = new Hono();

auth.get("/sign-up", async (c) => {
  const token = issueJWT("123");
  return c.json({ message: "Hono!", token });
});

auth.get("/sign-in", (c) => {
  return c.json({ message: "Hono!", abc: "abc" });
});

export default auth;
