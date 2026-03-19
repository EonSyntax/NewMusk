"use client";
import PopNotification from "./PopNotification";

interface NotificationWrapperProps {
  message: string;
  show: boolean;
}

export default function NotificationWrapper({
  message,
  show,
}: NotificationWrapperProps) {
  if (!show) return null;
  // Responsive: top-right on md+, center on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <PopNotification
      message={message}
      type="success"
      show={show}
      position={isMobile ? "center" : "top-right"}
      duration={3000}
    />
  );
}
