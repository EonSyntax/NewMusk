"use server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const supabase = await createReadOnlySupabase();

  const title = formData.get("title") as string;
  const cover_image = formData.get("cover_image") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;
  const categoryIds = formData.getAll("categories") as string[];

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const slug = slugify(title);

  const { data: post, error } = await supabaseAdmin
    .from("posts")
    .insert({
      title,
      cover_image,
      description,
      slug,
      content,
      author_id: user.id,
      status,
    })
    .select()
    .single();

  if (error) throw error;

  const categories = formData.getAll("categories") as string[];

  await supabaseAdmin
  .from("post_categories")
  .delete()
  .eq("post_id", post.id);

  if (categoryIds.length > 0) {
    const rows = categoryIds.map((catId) => ({
      post_id: post.id,
      category_id: catId,
    }));

    const { error: catError } = await supabaseAdmin
      .from("post_categories")
      .insert(rows);

    if (catError) throw catError;
  }

  return post.id;
}

export async function updatePost(formData: FormData) {
  const supabase = await createReadOnlySupabase();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const cover_image = formData.get("cover_image") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;
  const categoryIds = formData.getAll("categories") as string[];

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const slug = slugify(title);

  // 1️⃣ Update post
  const { error } = await supabaseAdmin
    .from("posts")
    .update({
      title,
      cover_image,
      description,
      slug,
      content,
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;

  // 2️⃣ Delete old category links
  await supabaseAdmin
    .from("post_categories")
    .delete()
    .eq("post_id", id);

  // 3️⃣ Insert new category links
  if (categoryIds.length > 0) {
    const rows = categoryIds.map((catId) => ({
      post_id: id,
      category_id: catId,
    }));

    const { error: catError } = await supabaseAdmin
      .from("post_categories")
      .insert(rows);

    if (catError) throw catError;
  }

  redirect("/admin/posts");
}