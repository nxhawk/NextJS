import { MenuItem } from "@/models/MenuItem";
import mongoose from "mongoose";

export const POST = async (req) => {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const menuItemDoc = await MenuItem.create(data);
  return Response.json(menuItemDoc);
};
