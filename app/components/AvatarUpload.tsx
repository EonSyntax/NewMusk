"use client";

import { useState } from "react";

type Props = {
  currentAvatarUrl: string;
  updateAvatar: (formData: FormData) => Promise<void>;
};

export default function AvatarUpload({
  currentAvatarUrl,
  updateAvatar,
}: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    const updateFormData = new FormData();
    updateFormData.append("avatar_url", data.secure_url);
    await updateAvatar(updateFormData);
    setUploading(false);
  }

  return (
    <button
      className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-900 flex items-center justify-center disabled:opacity-50"
      disabled={uploading}
      onClick={() => document.getElementById("avatar-input")?.click()}
    >
      <span className="material-symbols-outlined text-sm">
        {uploading ? "hourglass_empty" : "edit"}
      </span>
      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleUpload(e.target.files[0]);
          }
        }}
      />
    </button>
  );
}
