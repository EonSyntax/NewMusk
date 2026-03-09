"use server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

  await supabaseAdmin.from("post_categories").delete().eq("post_id", post.id);

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
  await supabaseAdmin.from("post_categories").delete().eq("post_id", id);

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

export async function deletePost(postId: string) {
  const supabase = await createReadOnlySupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  // Fetch the post to check ownership
  const { data: post, error: fetchError } = await supabaseAdmin
    .from("posts")
    .select("author_id")
    .eq("id", postId)
    .single();

  if (fetchError || !post) throw new Error("Post not found");

  // Check if user is superAdmin or post author
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  const isSuperAdmin = profile?.role === "superAdmin";
  const isAuthor = post.author_id === user.id;

  if (!isSuperAdmin && !isAuthor) {
    throw new Error("Unauthorized: You cannot delete this post");
  }

  // Delete post_categories entries first (foreign key constraint)
  await supabaseAdmin.from("post_categories").delete().eq("post_id", postId);

  // Delete the post
  const { error } = await supabaseAdmin.from("posts").delete().eq("id", postId);

  if (error) throw error;

  // Revalidate the posts page to refresh the list
  revalidatePath("/admin/posts");

  return { success: true };
}
