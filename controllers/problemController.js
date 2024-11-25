import Problem from "./../models/problemModel.js";
import ProblemService from "./../services/problemService.js";

async function getProblem(c) {
  return c.json({ status: "success" }, 200);
}

async function generateProblem(c) {
  const { difficulty, categories } = await c.req.json();
  const { text, correctAnswer, choices, category } = ProblemService(
    difficulty,
    categories,
  );

  const newProblem = new Problem({
    text,
    difficulty,
    category,
    correctAnswer,
    choices,
  });
  const problem = await newProblem.save();

  return c.json({ status: "success", data: { problem } }, 200);
}

export default { getProblem, generateProblem };
