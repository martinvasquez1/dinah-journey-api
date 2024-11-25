const ranges = {
  easy: { min: 1, max: 10 },
  medium: { min: 10, max: 50 },
  hard: { min: 50, max: 100 },
  extreme: { min: 100, max: 1000 },
};

export default function generateProblem(difficulty, categories) {
  let num1, num2, correctAnswer, text;

  const range = ranges[difficulty];

  if (!range) {
    throw new Error("Invalid difficulty level");
  }

  num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

  const randomIndex = Math.floor(Math.random() * categories.length);
  const selectedCategory = categories[randomIndex];

  switch (selectedCategory) {
    case "addition":
      correctAnswer = num1 + num2;
      text = `${num1} + ${num2}`;
      break;
    case "subtraction":
      correctAnswer = num1 - num2;
      text = `${num1} - ${num2}`;
      break;
    case "multiplication":
      correctAnswer = num1 * num2;
      text = `${num1} * ${num2}`;
      break;
    case "division":
      num2 = num2 === 0 ? 1 : num2;
      correctAnswer = num1 / num2;
      text = `${num1} / ${num2}`;
      break;
    default:
      throw new Error("Invalid category");
  }

  let choices = new Set();
  choices.add(correctAnswer.toString());

  while (choices.size < 4) {
    const randomChoice = Math.floor(Math.random() * (range.max * 2)) + 1;
    choices.add(randomChoice.toString());
  }

  // Convert set to array and shuffle it
  choices = Array.from(choices).sort(() => Math.random() - 0.5);

  return { text, correctAnswer, choices, category: selectedCategory };
}
