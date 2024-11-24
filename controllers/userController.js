import bcrypt from "npm:bcryptjs";
import User from "./../models/userModel.js";

async function getUsers(c) {
  const users = await User.find().sort({ username: 1 }).exec();
  return c.json({ status: "success", data: { users } }, 200);
}

async function getUser(c) {
  const { userId } = await c.req.param();
  const user = await User.findById(userId).exec();

  if (!user) {
    handleNotFoundError(req, res, "User");
    return;
  }

  return c.json({ status: "success", data: { user } }, 200);
}

async function updateUser(c) {
  const { userId } = await c.req.param();
  const { username, email, password } = await c.req.json();

  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const payload = new User({
    username,
    email,
    ...(hashedPassword && { password: hashedPassword }),
    _id: userId,
  });

  const user = await User.findByIdAndUpdate(userId, payload, { new: true });

  if (!user) {
    return c.json(
      { status: "fail", data: { userId: "userId does not exist" } },
      404
    );
  }

  return c.json({ status: "success", data: { user } }, 200);
}

async function deleteUser(c) {
  const { userId } = await c.req.param();
  const user = await User.findByIdAndDelete(userId).exec();

  if (!user) {
    return c.json(
      { status: "fail", data: { userId: "userId does not exist" } },
      404
    );
  }

  return c.json({ status: "success", data: { user } }, 200);
}

export default { getUsers, getUser, updateUser, deleteUser };
