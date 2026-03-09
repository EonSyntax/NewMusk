"use client";

import { useState } from "react";
import { deletePost } from "./actions";

interface DeletePostButtonProps {
  postId: string;
  postTitle: string;
}

export default function DeletePostButton({
  postId,
  postTitle,
}: DeletePostButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      await deletePost(postId);
      // Close modal and let the page refresh
      setIsOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all"
        title="Delete"
        disabled={isDeleting}
      >
        <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>

      {/* Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full mx-4 shadow-xl">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-500/10 rounded-full">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl">
                  warning
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-center text-slate-900 dark:text-slate-100 mb-2">
              Delete Post?
            </h2>

            {/* Message */}
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-2">
              Are you sure you want to delete{" "}
              <span className="font-semibold">"{postTitle}"</span>?
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mb-6">
              This action cannot be undone.
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
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span>
                    Deleting...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                    Delete
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
