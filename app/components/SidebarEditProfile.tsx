"use client";

import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";

interface SidebarEditProfileProps {
  currentName: string;
  currentCountry: string;
  updateProfile: (formData: FormData) => Promise<void>;
}

export default function SidebarEditProfile({
  currentName,
  currentCountry,
  updateProfile,
}: SidebarEditProfileProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors w-full"
      >
        <span className="material-symbols-outlined text-lg">person_edit</span>
        <span>Edit Profile Information</span>
      </button>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md mx-4"
          >
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Edit Profile
            </h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateProfile(formData);
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  defaultValue={currentName}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  defaultValue={currentCountry}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
