import React from "react";
import { Footer } from "../components/Footer";
import MobileNavbarClient from "../components/navbar/MobileNavbarClient";
import Navbar from "../components/navbar/Navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MobileNavbarClient />
      {children}
      <Footer />
    </>
  );
}
