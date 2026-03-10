"use client";

import { useState } from "react";
import { togglePostVisibility } from "../admin/posts/actions";

interface VisibilityToggleButtonProps {
  postId: string;
  postTitle: string;
  currentStatus: string;
}

export default function VisibilityToggleButton({
  postId,
  postTitle,
  currentStatus,
}: VisibilityToggleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPublished = currentStatus === "published";
  const newStatus = isPublished ? "draft" : "published";
  const actionText = isPublished ? "hide" : "publish";

  const handleToggle = async () => {
    setIsToggling(true);
    setError(null);

    try {
      await togglePostVisibility(postId, newStatus);
      // Close modal and let the page refresh
      setIsOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <>
      {/* Visibility Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all"
        title={isPublished ? "Hide post" : "Publish post"}
        disabled={isToggling}
      >
        <span className="material-symbols-outlined text-[20px]">
          {isPublished ? "visibility" : "visibility_off"}
        </span>
      </button>

      {/* Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full mx-4 shadow-xl">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  isPublished
                    ? "bg-orange-100 dark:bg-orange-500/10"
                    : "bg-emerald-100 dark:bg-emerald-500/10"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${
                    isPublished
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {isPublished ? "visibility_off" : "visibility"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-center text-slate-900 dark:text-slate-100 mb-2">
              Change Post Visibility?
            </h2>

            {/* Message */}
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-2">
              You're about to{" "}
              <span className="font-semibold">{actionText}</span> the post{" "}
              <span className="font-semibold">"{postTitle}"</span>.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mb-6">
              Status will change from{" "}
              <span className="font-semibold capitalize">{currentStatus}</span>{" "}
              to <span className="font-semibold capitalize">{newStatus}</span>.
            </p>

            {/* Error Message */}
            {error && (
              <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 p-2 rounded mb-4">
                {error}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                disabled={isToggling}
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleToggle}
                disabled={isToggling}
                className={`flex-1 px-4 py-2 text-white text-sm font-bold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2 ${
                  isPublished
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {isToggling ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span>
                    {isPublished ? "Hiding..." : "Publishing..."}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">
                      {isPublished ? "visibility_off" : "visibility"}
                    </span>
                    {isPublished ? "Hide" : "Publish"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
