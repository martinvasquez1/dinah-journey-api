import User from "./../models/userModel.js";

async function getUsers(c) {
  const users = await User.find().sort({ username: 1 }).exec();
  return c.json({ status: "success", data: { users } }, 200);
}

async function getUser(c) {
  return c.json({ message: "Get user!" });
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
