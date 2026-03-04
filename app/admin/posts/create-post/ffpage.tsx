import { supabaseAdmin } from "@/lib/supabase/server";
import { createPost } from "../actions";

export default async function CreatePostPage() {
  const supabase = supabaseAdmin;

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

  return (
    <form action={createPost} className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold">Create Post</h1>

      <input
        name="title"
        placeholder="Post title"
        className="w-full border p-2"
        required
      />

      {/* TEMP textarea – replaced by Tiptap next step */}
      <textarea
        name="content"
        placeholder="Post content"
        className="w-full border p-2 h-40"
        required
      />

      <div>
        <p className="font-semibold mb-2">Categories</p>
        {categories?.map((cat) => (
          <label key={cat.id} className="block">
            <input
              type="checkbox"
              name="categories"
              value={cat.id}
              className="mr-2"
            />
            {cat.name}
          </label>
        ))}
      </div>

      <select name="status" className="border p-2">
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button className="bg-black text-white px-6 py-2">Save Draft</button>
    </form>
  );
}
