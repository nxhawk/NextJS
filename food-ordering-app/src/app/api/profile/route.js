import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "../../../models/User";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUND_NAME,
  api_key: process.env.CLOUNDINARY_API_KEY,
  api_secret: process.env.CLOUNDINARY_API_SECRET,
});

export const PUT = async (req) => {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  //update user name
  const user = await User.findOne({ email });
  if (!data?.public_id) {
    data.public_id = user?.public_id;
  }

  await User.updateOne({ email }, data);
  if (user?.public_id) {
    await cloudinary.uploader.destroy(
      user.public_id,
      function (error, result) {}
    );
  }

  return Response.json(true);
};

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  return Response.json(await User.findOne({ email }));
}
