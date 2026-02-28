"use client";
import dynamic from "next/dynamic";
const MobileNavbar = dynamic(() => import("./MobileNavbar"), { ssr: false });

import { useEffect, useState, useCallback } from "react";
import MobileNavbarComponent from "./MobileNavbar";

export default function MobileNavbarClient() {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-mobile-navbar", handler);
    return () => window.removeEventListener("open-mobile-navbar", handler);
  }, []);

  return <MobileNavbarComponent open={open} onClose={onClose} />;
}
