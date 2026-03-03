"use server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";

export async function createPost(formData: FormData) {
  const supabase = await createReadOnlySupabase();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
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
      slug,
      content,
      author_id: user.id,
      status: "draft",
    })
    .select()
    .single();

  if (error) throw error;

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
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const slug = slugify(title);

  const { error } = await supabaseAdmin
    .from("posts")
    .update({
      title,
      slug,
      content,
      status,
    })
    .eq("id", id);

  if (error) throw error;

  return;
}