import bcrypt from "npm:bcryptjs";
import User from "./../models/userModel.js";
import issueJWT from "./../utils/issueJWT.js";

async function signUp(c) {
  const { username, email, password } = await c.req.json();

  let hashedPassword;
  hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  const savedUser = await newUser.save();
  const token = await issueJWT(c, savedUser._id);

  return c.json({ status: "success", data: { user: newUser, token } }, 200);
}

async function signIn(c) {
  return c.json({ message: "Hono!", abc: "abc" }, 200);
}

export default { signUp, signIn };
