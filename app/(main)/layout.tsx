import React from "react";
import { Footer } from "../components/Footer";
import MobileNavbarClient from "../components/navbar/MobileNavbarClient";
import Navbar from "../components/navbar/Navbar";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createReadOnlySupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role: string | null = null;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", user.id)
      .single();

    role = profile?.role ?? null;
  }

  return (
    <>
      <Navbar />
      <MobileNavbarClient user={user} role={role} />
      {children}
      <Footer />
    </>
  );
}
