"use client";
export default function MobileHamburgerClient() {
  return (
    <button
      className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
      aria-label="Open mobile menu"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-mobile-navbar"));
        }
      }}
    >
      <span className="material-symbols-outlined">menu</span>
    </button>
  );
}
