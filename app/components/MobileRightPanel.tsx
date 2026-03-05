"use client";
import React, { useState } from "react";

interface MobileRightPanelProps {
  children: React.ReactNode;
}

export default function MobileRightPanel({ children }: MobileRightPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button: visible only on mobile */}
      <button
        className="md:hidden fixed top-4 right-4 z-40 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-lg"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close right panel" : "Open right panel"}
      >
        <span className="material-symbols-outlined">
          {open ? "right_panel_close" : "right_panel_open"}
        </span>
      </button>
      {/* Overlay panel: visible only when open on mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Close right panel overlay"
          />
          <div className="relative w-full max-w-xs h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col">
            {/* Panel content */}
            {children}
            {/* Close button on left side of panel */}
            <button
              className="absolute top-4 left-4 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-lg"
              onClick={() => setOpen(false)}
              aria-label="Close right panel"
            >
              <span className="material-symbols-outlined">
                right_panel_close
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
