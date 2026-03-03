"use client";
import React, { useState } from "react";
import AddCategoryDrawer from "@/app/components/AddCategoryDrawer";

const AddCategoryDrawerClientBridge: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          {/* ...existing code for title and description... */}
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Categories
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage and organize your blog post groupings.
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined">add</span>
          New Category
        </button>
      </div>
      <AddCategoryDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AddCategoryDrawerClientBridge;
