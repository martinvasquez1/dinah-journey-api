import mongoose from "npm:mongoose";

const { Schema } = mongoose;

const ProgressSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalScore: { type: Number, default: 0 },
    solvedCount: { type: Number, default: 0 },
    correctCount: { type: Number, default: 0 },
    incorrectCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Progress", ProgressSchema);
