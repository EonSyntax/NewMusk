"use client";

import { useState } from "react";
import { toggleFeaturedPost } from "../admin/posts/actions";

interface FeaturedToggleButtonProps {
  postId: string;
  postTitle: string;
  currentFeatured: string;
}

export default function FeaturedToggleButton({
  postId,
  postTitle,
  currentFeatured,
}: FeaturedToggleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFeatured = currentFeatured === "on";
  const newFeatured = isFeatured ? "off" : "on";
  const actionText = isFeatured ? "unfeature" : "feature";

  const handleToggle = async () => {
    setIsToggling(true);
    setError(null);

    try {
      await toggleFeaturedPost(postId, newFeatured);
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
      {/* Featured Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        disabled={isToggling}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          isFeatured
            ? "bg-primary"
            : "bg-white border border-slate-300 dark:bg-slate-700 dark:border-slate-600"
        } ${isToggling ? "opacity-50" : ""}`}
        title={isFeatured ? "Unfeature post" : "Feature post"}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full  transition-transform ${
            isFeatured ? "translate-x-5 bg-white" : "translate-x-0.5 bg-primary"
          }`}
        ></span>
      </button>

      {/* Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full mx-4 shadow-xl">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  isFeatured
                    ? "bg-orange-100 dark:bg-orange-500/10"
                    : "bg-yellow-100 dark:bg-yellow-500/10"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${
                    isFeatured
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  star
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-center text-slate-900 dark:text-slate-100 mb-2">
              {isFeatured ? "Unfeature" : "Feature"} Post?
            </h2>

            {/* Message */}
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-2">
              You're about to{" "}
              <span className="font-semibold">{actionText}</span> the post{" "}
              <span className="font-semibold">"{postTitle}"</span>.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mb-6">
              Featured status will change from{" "}
              <span className="font-semibold capitalize">
                {currentFeatured}
              </span>{" "}
              to <span className="font-semibold capitalize">{newFeatured}</span>
              .
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
                  isFeatured
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-yellow-600 hover:bg-yellow-700"
                }`}
              >
                {isToggling ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span>
                    {isFeatured ? "Unfeaturing..." : "Featuring..."}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    {isFeatured ? "Unfeature" : "Feature"}
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
