"use client";
import React, { useState } from "react";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  // Helper for closing sidebar on link click
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 shadow-md border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
        onClick={() => setOpen(true)}
        aria-label="Open admin sidebar"
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* Overlay and Sidebar for mobile */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            onClick={handleClose}
            aria-label="Close admin sidebar overlay"
          ></div>
          {/* Sidebar Drawer */}
          <aside className="fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300">
            <div className="flex justify-between items-center p-2 mb-5">
              <img
                className="h-12 w-auto"
                alt="NewMusk Blogs logo"
                src="/images/newmusk.png"
                style={{ objectFit: "contain" }}
              />
              <button
                className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                onClick={handleClose}
                aria-label="Close admin sidebar"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest text-center mb-2">
              Blogs Admin
            </p>
            <nav className="flex-1 px-4 pb-4 space-y-1">
              <a
                className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold transition-colors"
                href="/admin"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span>Overview</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                href="/admin/posts"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">description</span>
                <span>Posts</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                href="/admin/categories"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">category</span>
                <span>Categories</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                href="/admin/users"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">group</span>
                <span>Users</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                href="/admin/analytics"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">analytics</span>
                <span>Analytics</span>
              </a>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <a
                className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                href="/admin/settings"
                onClick={handleClose}
              >
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </a>
              <button className="w-full flex items-center justify-between gap-3 px-3 py-2.5 mt-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">contrast</span>
                  <span>Dark Mode</span>
                </div>
                <div className="w-8 h-4 bg-slate-300 dark:bg-primary rounded-full relative">
                  <div className="absolute left-1 top-1 bg-white w-2 h-2 rounded-full dark:translate-x-4 transition-transform"></div>
                </div>
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col transition-all duration-300">
        <div className=" p-2 mb-5 flex flex-col items-center gap-1">
          <img
            className="h-12 w-auto"
            alt="NewMusk Blogs logo"
            src="/images/newmusk.png"
            style={{ objectFit: "contain" }}
          />
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
            Blogs Admin
          </p>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold transition-colors"
            href="/admin"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            href="/admin/posts"
          >
            <span className="material-symbols-outlined">description</span>
            <span>Posts</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            href="/admin/categories"
          >
            <span className="material-symbols-outlined">category</span>
            <span>Categories</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            href="/admin/users"
          >
            <span className="material-symbols-outlined">group</span>
            <span>Users</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            href="/admin/analytics"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Analytics</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            href="/admin/settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
          <button className="w-full flex items-center justify-between gap-3 px-3 py-2.5 mt-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">contrast</span>
              <span>Dark Mode</span>
            </div>
            <div className="w-8 h-4 bg-slate-300 dark:bg-primary rounded-full relative">
              <div className="absolute left-1 top-1 bg-white w-2 h-2 rounded-full dark:translate-x-4 transition-transform"></div>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}
