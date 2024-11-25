import Problem from "./../models/problemModel.js";

async function getProblem(c) {
  return c.json({ status: "success" }, 200);
}

async function generateProblem(c) {
  return c.json({ status: "success" }, 200);
}

export default { getProblem, generateProblem };
