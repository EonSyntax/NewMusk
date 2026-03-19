"use client";
import { useSearchParams } from "next/navigation";
import NotificationWrapper from "./NotificationWrapper";

export default function ClientNotificationBridge() {
  const params = useSearchParams();
  const show = params.get("success") === "1";
  const title = params.get("title");
  const isEdit = params.get("edit") === "1";
  const message = title
    ? `${decodeURIComponent(title)} ${isEdit ? "edited" : "created"} successfully!`
    : "";
  return <NotificationWrapper show={show} message={message} />;
}
