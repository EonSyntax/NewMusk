"use client";
import Link from "next/link";
import React, { useState } from "react";

const catego = [
  { name: "Home", href: "/", icon: "home" },
  { name: "Sports", href: "/sports", icon: "sports_esports" },
  { name: "Tech", href: "/tech", icon: "memory" },
  { name: "Health", href: "/health", icon: "health_and_safety" },
  { name: "Entertainment", href: "/entertainment", icon: "movie" },
  { name: "Politics", href: "/politics", icon: "account_balance" },
];

const MobileNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
        onClick={onClose}
        aria-label="Close mobile menu overlay"
      ></div>
      {/* Drawer */}
      <div className="fixed top-0 right-0 z-[110] h-full w-10/12 max-w-sm flex flex-col bg-slate-100 dark:bg-background-dark shadow-2xl border-l border-slate-200 dark:border-slate-800">
        {/* Top App Bar Section */}
        <div className="flex items-center p-4 justify-between border-b border-slate-100 dark:border-slate-800">
          <Link href="/" className="">
            <img
              src="/images/newmusk.png"
              alt="NewMusk Blogs Logo"
              className="h-12 w-full"
            />
          </Link>
          <button
            className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Search Bar Section */}
        <div className="px-4 py-4 bg-slate-100">
          <label className="flex flex-col w-full group">
            <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-100 dark:bg-slate-800 border border-transparent focus-within:border-primary/50 transition-all">
              <div className="flex items-center justify-center pl-4 text-slate-400">
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Search articles..."
                value=""
                readOnly
              />
            </div>
          </label>
        </div>
        {/* Navigation Links */}
        <div className="flex-1 bg-slate-100 px-2 block lg:hidden">
          <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Categories
          </p>
          <ul className="flex flex-col gap-1">
            {catego.map((category, idx) => (
              <li key={category.name}>
                <Link
                  className={`flex h-12 items-center gap-4 rounded-xl px-4 ${idx === 0 ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"}`}
                  href={category.href}
                  onClick={onClose}
                  passHref
                >
                  <span className="material-symbols-outlined">
                    {category.icon}
                  </span>
                  <p
                    className={`text-base font-${idx === 0 ? "bold" : "medium"} leading-tight truncate`}
                  >
                    {category.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-4 border-t border-slate-100 dark:border-slate-800 mx-4"></div>
          <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Account
          </p>
          <div className="flex flex-col gap-1 pb-8">
            <Link
              className="flex items-center gap-4 px-4 min-h-14 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
              href="/user/profile"
              onClick={onClose}
              passHref
            >
              <div className="flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
                  person
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold leading-normal truncate">
                  Profile
                </p>
                <p className="text-sm text-slate-500 truncate">
                  Manage your preferences
                </p>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </Link>
            <Link
              className="flex items-center gap-4 px-4 min-h-14 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
              href="#"
              onClick={onClose}
              passHref
            >
              <div className="flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
                  notifications
                </span>
              </div>
              <p className="text-base font-semibold leading-normal flex-1 truncate">
                Notifications
              </p>
              <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                3
              </div>
            </Link>
            <div className="w-full flex flex-col gap-4 items-center justify-center mt-4">
              <Link
                href="/login"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                onClick={onClose}
                passHref
              >
                <span className="material-symbols-outlined text-lg">login</span>
                Login
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Action Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/50">
          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
