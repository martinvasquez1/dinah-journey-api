import mongoose from "npm:mongoose";

const { Schema } = mongoose;

const ProblemSchema = new Schema(
  {
    text: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard", "extreme"],
      required: true,
    },
    category: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    choices: { type: [String], required: false },
  },
  { timestamps: true },
);

export default mongoose.model("Problem", ProblemSchema);
