"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay (now on the left) */}
      <div
        className="absolute inset-0 right-0 w-2/12 bg-slate-900/40 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-label="Close mobile menu overlay"
      ></div>
      {/* Drawer (now on the right) */}
      <div className="absolute top-0 right-0 z-50 h-full w-10/12 max-w-sm flex-col bg-background-light dark:bg-background-dark shadow-2xl flex border-l border-slate-200 dark:border-slate-800">
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
        <div className="px-4 py-4">
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
        <div className="flex-1 overflow-y-auto px-2">
          <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Categories
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 bg-primary/10 text-primary transition-colors"
                href="/"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">home</span>
                <p className="text-base font-bold leading-tight truncate">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="/sports"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">
                  sports_esports
                </span>
                <p className="text-base font-medium leading-tight truncate">
                  Sports
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="/tech"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">memory</span>
                <p className="text-base font-medium leading-tight truncate">
                  Tech
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="/health"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">
                  health_and_safety
                </span>
                <p className="text-base font-medium leading-tight truncate">
                  Health
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="/entertainment"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">movie</span>
                <p className="text-base font-medium leading-tight truncate">
                  Entertainment
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-12 items-center gap-4 rounded-xl px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="/politics"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">
                  account_balance
                </span>
                <p className="text-base font-medium leading-tight truncate">
                  Politics
                </p>
              </Link>
            </li>
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
            <div className="w-full flex flex-col gap-4 items-center justify-center">
            <Link href="/login" className="w-50 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">login</span>
            Login
          </Link>

          <Link href="/signup" className="w-50 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">login</span>
            Sign Up
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
