import { Hono } from "hono";
import issueJWT from "../utils/issueJWT.js";

const auth = new Hono();

auth.post("/sign-up", async (c) => {
  const token = await issueJWT(c, 12345);
  return c.json({ message: "Hono!", token });
});

auth.post("/sign-in", (c) => {
  return c.json({ message: "Hono!", abc: "abc" });
});

export default auth;
