"use client";
import React from "react";
import { createCategory } from "../admin/categories/action";

interface AddCategoryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AddCategoryDrawer: React.FC<AddCategoryDrawerProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl transform translate-x-0 transition-transform">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Add New Category</h3>
              <p className="text-xs text-slate-500">
                Create a new organizational group
              </p>
            </div>
            <button
              onClick={onClose}
              className="size-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-colors hover:text-red-500"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          <form action={createCategory}>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Category Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
                  placeholder="e.g. Travel"
                  type="text"
                  name="name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Slug
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs">
                    blog.com/
                  </span>
                  <input
                    className="flex-1 min-w-0 px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-r-lg text-sm focus:ring-primary focus:border-primary"
                    placeholder="travel"
                    type="text"
                    name="slug"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
                  placeholder="Briefly describe what this category covers..."
                  rows={4}
                  name="description"
                ></textarea>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
                    Featured Category
                  </p>
                  <p className="text-xs text-slate-500">
                    Show on homepage sidebar
                  </p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </button>
              </div>
            </div>
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
              <button type="submit" className="flex-1 px-4 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Save Category
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold rounded-lg text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryDrawer;
