"use client";
import React from "react";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText?: string;
  icon?: React.ReactNode;
}

export default function LoadingButton({
  children,
  loadingText = "Saving...",
  icon,
  ...props
}: LoadingButtonProps) {
  const [loading, setLoading] = React.useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // Attach form submit event listener once
  React.useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const form = btn.closest("form");
    if (!form) return;
    const handleSubmit = () => setLoading(true);
    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  // Fallback: reset loading after 8 seconds
  React.useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <button
      ref={btnRef}
      {...props}
      disabled={loading || props.disabled}
      className={
        (props.className || "") +
        (loading ? " opacity-70 cursor-not-allowed" : "")
      }
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span
            className="material-symbols-outlined animate-spin"
            style={{
              display: "inline-block",
            }}
          >
            hourglass_empty
          </span>
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
