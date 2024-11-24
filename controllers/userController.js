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

async function createUser(c) {
  return c.json({ message: "Get user!" });
}

async function updateUser(c) {
  return c.json({ message: "Get user!" });
}

async function deleteUser(c) {
  return c.json({ message: "Get user!" });
}

export default { getUsers, getUser, createUser, updateUser, deleteUser };
