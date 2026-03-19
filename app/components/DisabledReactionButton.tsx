"use client";
import React, { useRef } from "react";

type DisabledReactionButtonProps = {
  count: number;
  direction?: "row" | "col";
};
export default function DisabledReactionButton({
  count,
  direction = "row",
}: DisabledReactionButtonProps) {
  const tipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Show tooltip on focus/hover/tap
  const showTip = () => {
    tipRef.current?.classList.add("!opacity-100");
  };
  const hideTip = () => {
    tipRef.current?.classList.remove("!opacity-100");
  };
  // For mobile: toggle tooltip on click/tap
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (tipRef.current?.classList.contains("!opacity-100")) {
      tipRef.current.classList.remove("!opacity-100");
    } else {
      tipRef.current?.classList.add("!opacity-100");
    }
  };
  return (
    <div
      ref={wrapperRef}
      className={`relative flex select-none ${direction === "col" ? "flex-col items-center" : "flex-row items-center"}`}
      tabIndex={0}
      onFocus={showTip}
      onBlur={hideTip}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onClick={handleWrapperClick}
      aria-label="You must be logged in to react"
      role="button"
      style={{ outline: "none" }}
    >
      <button
        className={`flex ${direction === "col" ? "flex-col" : "flex-row"} items-center gap-2 text-slate-400 font-bold opacity-50 cursor-not-allowed focus:outline-none`}
        disabled
        tabIndex={-1}
        aria-hidden="true"
        type="button"
      >
        <span className="material-symbols-outlined">favorite</span>
        <span>{count}</span>
      </button>
      <div
        ref={tipRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-3 py-2 rounded bg-gray-900 text-white text-xs font-medium opacity-0 transition-opacity pointer-events-auto z-20 shadow-lg whitespace-nowrap select-none"
        style={{ pointerEvents: "auto" }}
      >
        Only logged-in members can react to posts. <br />
        <span className="text-primary font-bold">Sign in</span> to add your
        reaction.
      </div>
    </div>
  );
}
