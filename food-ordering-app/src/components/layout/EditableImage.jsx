import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const EditableImage = ({
  link,
  setLink,
  isUploading,
  setIsUploading,
  setPublicId,
}) => {
  async function handleFileChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      setIsUploading(true);

      const uploadPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });

        const res = await response.json();
        setIsUploading(false);
        if (response.ok) {
          setLink(res.url);
          setPublicId(res.public_id);
          resolve();
        } else reject();
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Upload complete",
        error: "Upload error",
      });
    }
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          alt="avatar"
          width={250}
          height={250}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span
          className="border border-gray-300 rounded-lg block p-2 text-center cursor-pointer"
          disabled={isUploading}
        >
          Edit
        </span>
      </label>
    </>
  );
};

export default EditableImage;
