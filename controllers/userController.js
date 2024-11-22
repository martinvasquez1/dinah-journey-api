async function getUsers(c) {
  return c.json({ message: "Get users!" });
}

async function getUser(c) {
  return c.json({ message: "Get user!" });
}

export default { getUsers, getUser };
