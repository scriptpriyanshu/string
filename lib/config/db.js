import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://anybeethero:psh123...@cluster0.6lyitki.mongodb.net/todo-app"
  );
  console.log("db connected");
};
