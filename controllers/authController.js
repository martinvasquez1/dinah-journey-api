import issueJWT from "./../utils/issueJWT.js";

async function signUp(c) {
  const token = await issueJWT(c, 12345);
  return c.json({ message: "Hono!", token });
}

async function signIn(c) {
  return c.json({ message: "Hono!", abc: "abc" });
}

export default { signUp, signIn };
