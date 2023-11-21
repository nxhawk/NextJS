import { Category } from "@/models/Category";

export const POST = async (req) => {
  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json(categoryDoc);
};

export const PUT = async (req) => {
  const { name, _id } = await req.json();
  await Category.updateOne({ _id }, { name });

  return Response.json(true);
};

export const GET = async () => {
  return Response.json(await Category.find());
};
