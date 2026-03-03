"use server";

import { supabaseAdmin } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!name || !slug) return;

  await supabaseAdmin.from("categories").insert({
    name,
    slug,
  });

  revalidatePath("/admin/categories");
}