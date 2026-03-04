"use client";

import { useState } from "react";

type Props = {
  initialUrl?: string;
};

export default function CoverImageUpload({ initialUrl }: Props) {
  const [imageUrl, setImageUrl] = useState(initialUrl || "");
  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageUrl(data.secure_url);
    setUploading(false);
  }

  return (
    <div className="space-y-3">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Cover preview"
          className="w-full h-48 object-cover rounded-lg border"
        />
      )}

      <label className="cursor-pointer inline-block px-4 py-2 bg-slate-200 rounded text-sm">
        {uploading ? "Uploading..." : "Choose Cover Image"}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleUpload(e.target.files[0]);
            }
          }}
        />
      </label>

      {/* Hidden input sent to server */}
      <input type="hidden" name="cover_image" value={imageUrl ?? ""} />
    </div>
  );
}