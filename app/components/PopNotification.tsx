"use client";
import React, { useEffect, useState } from "react";

interface PopNotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  position?: "top-right" | "center";
  show: boolean;
  onClose?: () => void;
  duration?: number; // ms
}

export default function PopNotification({
  message,
  type = "success",
  position = "top-right",
  show,
  onClose,
  duration = 3000,
}: PopNotificationProps) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300
        ${
          position === "top-right"
            ? "top-6 right-6 w-[90vw] max-w-100 md:w-[20vw] md:max-w-100"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-sm"
        }
        ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"}
        text-white shadow-lg rounded-lg px-6 py-4 flex items-center justify-between`
      }
      style={{ pointerEvents: "auto" }}
      role="alert"
    >
      <span className="font-semibold text-sm">{message}</span>
      <button
        className="ml-4 text-white/80 hover:text-white text-lg font-bold"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
