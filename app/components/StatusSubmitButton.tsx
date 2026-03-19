"use client";
import React, { useEffect, useState } from "react";
import LoadingButton from "./LoadingButton";

interface StatusSubmitButtonProps {
  draftLabel?: string;
  publishLabel?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  statusName?: string;
  id?: string;
  className?: string;
}

export default function StatusSubmitButton({
  draftLabel = "Save Draft",
  publishLabel = "Publish",
  buttonProps = {},
  statusName = "status",
  id,
  className,
}: StatusSubmitButtonProps) {
  const [label, setLabel] = useState(publishLabel);

  useEffect(() => {
    // Find the status radio group in the form
    const form =
      document.getElementById(id || "")?.closest("form") ||
      document.querySelector("form");
    if (!form) return;
    const radios = form.querySelectorAll<HTMLInputElement>(
      `input[name='${statusName}']`,
    );
    const updateLabel = () => {
      const checked = Array.from(radios).find((r) => r.checked);
      setLabel(checked?.value === "draft" ? draftLabel : publishLabel);
    };
    radios.forEach((r) => r.addEventListener("change", updateLabel));
    updateLabel();
    return () =>
      radios.forEach((r) => r.removeEventListener("change", updateLabel));
  }, [draftLabel, publishLabel, statusName, id]);

  return (
    <LoadingButton {...buttonProps} id={id} className={className} type="submit">
      {label}
    </LoadingButton>
  );
}
