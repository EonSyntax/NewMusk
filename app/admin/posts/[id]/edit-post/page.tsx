import { notFound, redirect } from "next/navigation";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { supabaseAdmin } from "@/lib/supabase/server";
import { updatePost } from "../../actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
  const supabase = await createReadOnlySupabase();

  // 🔐 Auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // 🛡 Role
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (!profile) redirect("/");

  const isSuperAdmin = profile.role === "superAdmin";

  // 📦 Fetch post
  const { data: post } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) return notFound();

  // 🔐 Ownership check
  if (!isSuperAdmin && post.author_id !== user.id) {
    redirect("/admin/posts");
  }

  return (
    <form action={updatePost} className="space-y-6 max-w-3xl">
      <input type="hidden" name="id" value={post.id} />

      <h1 className="text-2xl font-bold">Edit Post</h1>

      <input
        name="title"
        defaultValue={post.title}
        className="w-full border p-2"
        required
      />

      <textarea
        name="content"
        defaultValue={post.content}
        className="w-full border p-2 h-40"
        required
      />

      <select
        name="status"
        defaultValue={post.status}
        className="border p-2"
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button className="bg-black text-white px-6 py-2">
        Update Post
      </button>
    </form>
  );
}