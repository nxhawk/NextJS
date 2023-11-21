import { Category } from "@/models/Category";
import mongoose from "mongoose";

export const POST = async (req) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json(categoryDoc);
};

export const PUT = async (req) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name, _id } = await req.json();
  await Category.updateOne({ _id }, { name });

  return Response.json(true);
};

export const GET = async () => {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(await Category.find());
};
