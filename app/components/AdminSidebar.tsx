"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleClose = () => setOpen(false);

  const navLinks = [
    { href: "/admin", icon: "dashboard", label: "Overview" },
    { href: "/admin/posts", icon: "description", label: "Posts" },
    { href: "/admin/categories", icon: "category", label: "Categories" },
    { href: "/admin/users", icon: "group", label: "Users" },
    { href: "/admin/analytics", icon: "analytics", label: "Analytics" },
  ];

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
              <Link href="/">
                <img
                  className="h-12 w-auto"
                  alt="NewMusk Blogs logo"
                  src="/images/newmusk.png"
                  style={{ objectFit: "contain" }}
                />
              </Link>

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
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                    href={item.href}
                    onClick={handleClose}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
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
              <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                <div className="text-right">
                  <p className="text-sm font-bold">Elon Jr.</p>
                  <p className="text-xs text-primary font-semibold">
                    Admin Role
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
                  <img
                    alt="User Profile"
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a professional administrator"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdHTB7LB5haZ0ESOAKwtBfgPDpa6jKdP7fOaMdrXwkeRVvm3J8ldShqm3Qmx11LMhL7lbizY2_ed4rENEpPUvhGTsZbpgH2zVGa8LAccxsg7201FNrjuNuIQ-f33adUt23nh5-LgGuQ5JCrwOem-9vLeSm_Fs5GaGpu90rtk-A9OHZKdn4yMH11KyaR9SJ0TDOnnHbDRnYoSN6ov76MLIE64OFJgVRYsl71QfmrNPqjnyEkbxOuxLZJkSNen9AZk1pM1PP50uWCvY"
                  />
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col transition-all duration-300">
        <Link href="/" className=" p-2 mb-5 flex flex-col items-center gap-1">
          <img
            className="h-12 w-auto"
            alt="NewMusk Blogs logo"
            src="/images/newmusk.png"
            style={{ objectFit: "contain" }}
          />
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
            Blogs Admin
          </p>
        </Link>
        <nav className="flex-1 px-4 pb-4 space-y-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
                href={item.href}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            );
          })}
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
