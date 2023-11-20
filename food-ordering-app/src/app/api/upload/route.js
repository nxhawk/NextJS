import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUND_NAME,
  api_key: process.env.CLOUNDINARY_API_KEY,
  api_secret: process.env.CLOUNDINARY_API_SECRET,
});

export const POST = async (req) => {
  const data = await req.formData();
  let response = "error";
  if (data.get("file")) {
    // upload file
    const file = data.get("file");

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = await Buffer.concat(chunks).toString("base64");
    const dataURI = "data:" + file.type + ";base64," + buffer;

    await cloudinary.uploader.upload(dataURI, function (error, result) {
      if (error) return;

      response = { url: result.url, public_id: result.public_id };
    });
  }
  return Response.json(response);
};
