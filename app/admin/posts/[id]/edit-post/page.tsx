import AdminSidebar from "@/app/components/AdminSidebar";
import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";
import PostEditorForm from "@/app/components/editor/PostEditorForm";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { notFound, redirect } from "next/navigation";
import { updatePost } from "../../actions";
import CoverImageUpload from "@/app/components/editor/CoverImageUpload";
import MobileRightPanel from "@/app/components/MobileRightPanel";
import StatusButtonUpdater from "@/app/components/StatusButtonUpdater";
import TagsInput from "@/app/components/editor/TagsInput";

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
        <main className="flex-1 flex flex-col bg-white dark:bg-background-dark overflow-hidden min-h-0 h-full">
          {/* <!-- Top Header Bar --> */}
          <form
            action={updatePost}
            className="flex-1 flex flex-col min-h-0 h-full"
          >
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
                    Edit Post
                  </span>
                </div>
              </div>
              {/* Hide on mobile, show on md+ screens */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                  </button>
                </div>
                <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                  <div className="text-right">
                    <p className="text-sm font-bold">Elon Jr.</p>
                    <p className="text-xs text-primary font-semibold">
                      Admin Role
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
                    <img
                      alt="User Profile"
                      className="w-full h-full object-cover"
                      data-alt="Portrait of a professional administrator"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdHTB7LB5haZ0ESOAKwtBfgPDpa6jKdP7fOaMdrXwkeRVvm3J8ldShqm3Qmx11LMhL7lbizY2_ed4rENEpPUvhGTsZbpgH2zVGa8LAccxsg7201FNrjuNuIQ-f33adUt23nh5-LgGuQ5JCrwOem-9vLeSm_Fs5GaGpu90rtk-A9OHZKdn4yMH11KyaR9SJ0TDOnnHbDRnYoSN6ov76MLIE64OFJgVRYsl71QfmrNPqjnyEkbxOuxLZJkSNen9AZk1pM1PP50uWCvY"
                    />
                  </div>
                </div>
              </div>
            </header>
            {/* <!-- Editor Container --> */}
            <div className="flex-1 flex overflow-hidden min-h-0">
              {/* <!-- Center: Writing Area --> */}
              <div className="flex-1 overflow-y-auto pb-32">
                <div className="max-w-3xl mx-auto px-2 md:px-0 py-6">
                  {/* <!-- Title Input --> */}
                  <textarea
                    name="title"
                    defaultValue={post.title}
                    className="w-full text-3xl font-grotesk border border-slate-200 dark:border-slate-700 focus:border-slate-800 dark:focus:border-slate-500 focus:outline-none placeholder:text-slate-200 dark:placeholder:text-slate-700 bg-white dark:bg-slate-900 leading-tight p-2 mb-8 caret-slate-900 dark:caret-slate-100 overflow-x-auto whitespace-nowrap"
                    placeholder="Enter post title..."
                    rows={1}
                    required
                    style={{ overflowX: "auto", whiteSpace: "nowrap" }}
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
                        name="description"
                        className="flex-1 text-sm font-inter border border-slate-200 dark:border-slate-700 focus:border-slate-800 dark:focus:border-slate-500 focus:outline-none placeholder:text-slate-300 dark:placeholder:text-slate-700 bg-white dark:bg-slate-900 leading-tight p-2 caret-slate-900 dark:caret-slate-100 overflow-x-auto whitespace-nowrap"
                        placeholder="Write a short description for this post..........20words max"
                        required
                        defaultValue={post.description}
                        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
                      ></textarea>
                    </div>
                  </div>
                  {/* <!-- Editor Toolbar --> */}
                  <PostEditorForm initialContent={post.content} />
                </div>
              </div>
              {/* Mobile right panel toggle button & panel */}
              <MobileRightPanel>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-end">
                    <button
                      id="publish-button"
                      className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      Publish
                    </button>
                  </div>
                  {/* <!-- Publish Box --> */}
                  <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                        Publish Status
                      </h3>
                      <span
                        id="status-badge-mobile"
                        className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold"
                      >
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
                    </div>
                  </div>

                  {/* <!-- Categories & Tags --> */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                        Categories
                      </h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
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
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            id="status-draft-mobile"
                            name="status"
                            value="draft"
                            type="radio"
                            defaultChecked={post.status === "draft"}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-xs">Draft</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            id="status-published-mobile"
                            name="status"
                            value="published"
                            type="radio"
                            defaultChecked={post.status === "published"}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-xs">Publish</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Read Time (Min)
                    </h3>
                    <select
                      name="read_time_minutes"
                      defaultValue={post.read_time_minutes || ""}
                      className="w-fit bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-slate-800 dark:focus:border-slate-500 focus:outline-none"
                      required
                    >
                      <option value="">Select reading time...</option>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30, 45,
                        60,
                      ].map((min) => (
                        <option key={min} value={min}>
                          {min} min
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* TAGS */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Tags
                    </h3>
                    <TagsInput maxTags={10} />
                  </div>
                </div>
              </MobileRightPanel>
              {/* Desktop right panel: hidden on mobile, visible on md+ */}
              <div className="hidden md:block w-80 border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-background-dark/50 overflow-y-auto">
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-end">
                    <button
                      id="publish-button-desktop"
                      className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      Publish
                    </button>
                  </div>
                  {/* <!-- Publish Box --> */}
                  <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                        Publish Status
                      </h3>
                      <span
                        id="status-badge-desktop"
                        className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold"
                      >
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

                  {/* STATUS */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Status
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto no-scrollbar">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          id="status-draft-desktop"
                          name="status"
                          value="draft"
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="radio"
                          defaultChecked={post.status === "draft"}
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Draft
                        </span>
                        <input
                          id="status-published-desktop"
                          name="status"
                          value="published"
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="radio"
                          defaultChecked={post.status === "published"}
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Publish
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* TAGS */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Tags
                    </h3>
                    <TagsInput maxTags={10} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Read Time (Min)
                    </h3>
                    <select
                      name="read_time_minutes"
                      defaultValue={post.read_time_minutes || ""}
                      className="w-fit bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-slate-800 dark:focus:border-slate-500 focus:outline-none"
                      required
                    >
                      <option value="">Select reading time...</option>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30, 45,
                        60,
                      ].map((min) => (
                        <option key={min} value={min}>
                          {min} min
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
      <StatusButtonUpdater />
    </div>
  );
}
