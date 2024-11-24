import bcrypt from "npm:bcryptjs";
import issueJWT from "./../utils/issueJWT.js";
import User from "./../models/userModel.js";

async function signUp(c) {
  const { username, email, password } = await c.req.json();

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  const user = await newUser.save();
  const token = await issueJWT(c, user._id);

  return c.json({ status: "success", data: { user, token } }, 200);
}

async function signIn(c) {
  const { email, password } = await c.req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      status: "fail",
      data: { message: "Invalid email or password." },
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({
      status: "fail",
      data: { message: "Invalid email or password" },
    });
  }

  const token = await issueJWT(c, user._id);

  return c.json({ status: "success", data: { user, token } }, 200);
}

export default { signUp, signIn };
