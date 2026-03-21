"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="md:p-5"
    >
      {theme === "dark" ? (
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: '"FILL" 0' }}
        >
          light_mode
        </span>
      ) : (
        <span
          className="material-symbols-outlined text-gray-950"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          dark_mode
        </span>
      )}
    </button>
  );
}
