"use client";
import React from "react";

export interface PrintButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({
  icon = "print",
  text = "Print Terms",
  onClick,
  className = "w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors",
}) => {
  return (
    <button className={className} onClick={onClick || (() => window.print())}>
      <span className="material-symbols-outlined text-lg">{icon}</span>
      {text}
    </button>
  );
};
