"use client";
import React, { useState } from "react";
import AddCategoryDrawer from "@/app/components/AddCategoryDrawer";

const AddCategoryDrawerClientBridge: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 

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
          onClick={() => setShowModal(true)} // Comment this line to enable the drawer instead of the modal
          // onClick={() => setOpen(true)} // Uncomment this line to enable the drawer instead of the modal
        >
          <span className="material-symbols-outlined">add</span>
          New Category
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          {/* Modal Content */}
          <div className="relative z-50 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-md mx-4">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-3xl">
                  info
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                Feature Temporarily Disabled
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Please contact your developer to create new categories. This
                functionality is intentionally disabled.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <AddCategoryDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AddCategoryDrawerClientBridge;
