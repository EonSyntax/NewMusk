"use client";
import { useState } from "react";

export default function SignOutButton() {
  const handleSignOut = async () => {
  await fetch("/api/auth/signout", { method: "POST" });

  // Redirect to home
  window.location.href = "/";
};

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="block w-full text-left px-5 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-b-xl transition-colors font-semibold"
    >
      Sign Out
    </button>
  );
}
