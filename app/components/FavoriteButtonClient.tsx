"use client";
import { useState, useTransition } from "react";

export default function FavoriteButtonClient({
  postId,
  userId,
  initialLoved,
  initialLoveCount,
}: {
  postId: string;
  userId: string;
  initialLoved: boolean;
  initialLoveCount: number;
}) {
  const [loved, setLoved] = useState(initialLoved);
  const [loveCount, setLoveCount] = useState(initialLoveCount);
  const [isPending, startTransition] = useTransition();

  async function toggleLove() {
    startTransition(async () => {
      const res = await fetch("/api/toggle-love", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });
      const data = await res.json();
      setLoved(data.loved);
      setLoveCount(data.loveCount);
    });
  }

  return (
    <div
      className="flex flex-col items-center gap-1 group cursor-pointer"
      onClick={toggleLove}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-red-50 transition-colors ${loved ? "bg-red-50" : ""}`}
      >
        <span
          className={`material-symbols-outlined transition-colors ${loved ? "text-red-500" : "text-slate-400"}`}
          style={
            loved
              ? { WebkitTextStroke: 0, fontVariationSettings: '"FILL" 1' }
              : { fontVariationSettings: '"FILL" 0' }
          }
        >
          favorite
        </span>
      </div>
      <span className="text-xs font-bold text-slate-500">{loveCount}</span>
    </div>
  );
}
