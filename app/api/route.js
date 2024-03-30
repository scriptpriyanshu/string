import { connectDB } from "@/lib/config/db";
import todoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  const todos = await todoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await todoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(request) {
  const mongoID = await request.nextUrl.searchParams.get("mongoID");
  await todoModel.findByIdAndDelete(mongoID);
  return NextResponse.json({ msg: "Todo Deleted" });
}

export async function PUT(request) {
  const mongoID = await request.nextUrl.searchParams.get("mongoID");
  await todoModel.findByIdAndUpdate(mongoID, {
    $set:{isCompleted:true}
  });
  return NextResponse.json({ msg: "Todo Completed" });
}
