import React from "react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300">
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
  );
}
