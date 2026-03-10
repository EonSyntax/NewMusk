"use client";

import { useState } from "react";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

interface UserDropdownClientProps {
  role: string | null;
  avatarUrl?: string | null;
}

export default function UserDropdownClient({
  role,
  avatarUrl,
}: UserDropdownClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const defaultAvatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc";
  const currentAvatarUrl = avatarUrl || defaultAvatarUrl;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
          data-alt="User profile avatar circular thumbnail"
          style={{
            backgroundImage: `url("${currentAvatarUrl}")`,
          }}
        ></div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 py-2 z-50">
          <Link
            href="/user/profile"
            className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-t-xl transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Go to Profile
          </Link>
          {role === "admin" || role === "superAdmin" ? (
            <Link
              href="/admin"
              className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Go to Admin Page
            </Link>
          ) : null}
          <div onClick={() => setIsOpen(false)}>
            <SignOutButton />
          </div>
        </div>
      )}
    </div>
  );
}
