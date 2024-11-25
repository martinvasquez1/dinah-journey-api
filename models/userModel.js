import mongoose from "npm:mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 32,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      minLength: 5,
      maxLength: 256,
      unique: true,
      required: true,
    },
    password: { type: String, minLength: 3, maxLength: 512, required: true },
    profilePicture: { type: String },
    bio: { type: String, default: "This is a boring bio...", maxLength: 512 },
    role: {
      type: String,
      enum: ["basic", "admin"],
      default: "basic",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
