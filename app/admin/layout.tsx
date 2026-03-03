export const dynamic = "force-dynamic";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase/server";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createReadOnlySupabase();

  // 1️⃣ Auth check
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // 2️⃣ Role check (SERVICE ROLE → bypass RLS)
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (!profile || !["admin", "superAdmin"].includes(profile.role)) {
    redirect("/");
  }

  return <>{children}</>;
}