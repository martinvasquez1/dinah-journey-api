import mongoose from "npm:mongoose";

export default async function connectDB() {
  const MONGO_URI = Deno.env.get("MONGO_URI");

  if (!MONGO_URI) {
    console.error("No MongoDB URI.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.error("Connected to MongoDB.");
  } catch (e) {
    console.error("MongoDB connection error: ", e);
    process.exit(1);
  }
}
