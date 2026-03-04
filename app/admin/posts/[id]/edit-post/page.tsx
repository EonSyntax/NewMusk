import AdminSidebar from "@/app/components/AdminSidebar";
import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";
import PostEditorForm from "@/app/components/editor/PostEditorForm";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { notFound, redirect } from "next/navigation";
import { updatePost } from "../../actions";
import CoverImageUpload from "@/app/components/editor/CoverImageUpload";

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
  
    // Fetch selected categories for the post
    const { data: selectedCategories } = await supabaseAdmin
      .from("post_categories")
      .select("category_id")
      .eq("post_id", id);
  
    const selectedIds = selectedCategories?.map((c) => c.category_id) || [];
  
    const { data: categories } = await supabaseAdmin
      .from("categories")
      .select("id, name")
      .order("name");
  
    // 🔐 Ownership check
    if (!isSuperAdmin && post.author_id !== user.id) {
      redirect("/admin/posts");
    }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 flex flex-col bg-white dark:bg-background-dark overflow-hidden">
          {/* <!-- Top Header Bar --> */}
          <form action={updatePost}>
            <input type="hidden" name="id" value={post.id} />
            <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark z-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Link
                    href="/admin/posts"
                    className="text-sm font-medium text-slate-400"
                  >
                    Posts /
                  </Link>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Create New Post
                  </span>
                </div>
                
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Update Post
                </button>
              </div>
            </header>
            {/* <!-- Editor Container --> */}
            <div className="flex-1 flex overflow-hidden">
              {/* <!-- Center: Writing Area --> */}
              <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
                <div className="max-w-3xl mx-auto px-12 py-16">
                  {/* <!-- Title Input --> */}
                  <textarea
                    name="title"
                    defaultValue={post.title}
                    className="w-full text-5xl font-black border-none focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-slate-700 bg-transparent resize-none overflow-hidden leading-tight p-0 mb-8"
                    placeholder="Enter post title..."
                    rows={1}
                    required
                  ></textarea>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <button className="material-symbols-outlined text-slate-400 text-sm">
                        Image
                      </button>
                      <CoverImageUpload initialUrl={post.cover_image} />
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-400 text-sm mt-1">
                        description
                      </span>
                      <textarea
                        className="flex-1 text-sm border-none focus:ring-0 bg-transparent p-0 placeholder:text-slate-400 resize-none"
                        placeholder="Write a short excerpt for this post...20words max"
                        name="description"
                        defaultValue={post.description}
                      ></textarea>
                    </div>
                  </div>
                  {/* <!-- Editor Toolbar --> */}
                  <PostEditorForm initialContent={post.content} />
                </div>
              </div>
              {/* <!-- Right: Side Panels --> */}
              <div className="w-80 border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-background-dark/50 overflow-y-auto no-scrollbar">
                <div className="p-6 space-y-6">
                  {/* <!-- Publish Box --> */}
                  <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                        Publish Status
                      </h3>
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold">
                        DRAFT
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            visibility
                          </span>{" "}
                          Visibility
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          Public
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            calendar_today
                          </span>{" "}
                          Publish Date
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          Immediately
                        </span>
                      </div>
                      <div className="pt-4 flex flex-col gap-2">
                        <button className="w-full py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          Save Draft
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Categories & Tags --> */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                        Categories
                      </h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto no-scrollbar">
                        {categories?.map((cat) => (
                          <label
                            key={cat.id}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <input
                              name="categories"
                              value={cat.id}
                              className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                              type="radio"
                              defaultChecked={selectedIds.includes(cat.id)}
                            />
                            <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                              {cat.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Status
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto no-scrollbar">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          name="status"
                          value="draft"
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="radio"
                          defaultChecked // Optionally, set this if you want "draft" as default
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Draft
                        </span>
                        <input
                          name="status"
                          value="published"
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="radio"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Published
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
