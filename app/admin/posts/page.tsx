import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/server";
import { redirect, searchParams as nextSearchParams } from "next/navigation";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import DeletePostButton from "../../components/DeletePostButton";
import VisibilityToggleButton from "../../components/VisibilityToggleButton";
import FeaturedToggleButton from "../../components/FeaturedToggleButton";

// NotificationWrapper import removed; now handled by ClientNotificationBridge
import React, { Suspense } from "react";
import ClientNotificationBridge from "../../components/ClientNotificationBridge";
type PostWithRelations = {
  id: string;
  title: string;
  slug: string;
  status: string;
  featured: string;
  created_at: string;
  updated_at: string | null;
  author_id: string;
  profiles: {
    full_name: string;
    avatar_url: string | null;
  } | null;
  post_categories: {
    categories: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
};

export default async function AdminPostsDashboard() {
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

  // Pagination logic
  const PAGE_SIZE = 10;
  // Read page number from search params (default 1)
  let page = 1;
  if (typeof window === "undefined") {
    // On server, use next/navigation's searchParams
    const url = require("url");
    const reqUrl = url.parse(globalThis.location?.href || "", true);
    if (reqUrl.query && reqUrl.query.page) {
      const parsed = parseInt(reqUrl.query.page as string, 10);
      if (!isNaN(parsed) && parsed > 0) page = parsed;
    }
  }

  // Fallback for environments where above doesn't work (Next.js App Router)
  try {
    const params = nextSearchParams?.();
    if (params && params.get("page")) {
      const parsed = parseInt(params.get("page")!, 10);
      if (!isNaN(parsed) && parsed > 0) page = parsed;
    }
  } catch {}

  // Fetch total count
  const { count: totalPosts } = await supabaseAdmin
    .from("posts")
    .select("id", { count: "exact", head: true });

  // Fetch paginated posts
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select(
      `
    id,
    title,
    slug,
    status,
    featured,
    created_at,
    updated_at,
    author_id,
    profiles (
      full_name,
      avatar_url
    ),
    post_categories (
      categories (
        id,
        name,
        slug
      )
    )
  `,
    )
    .order("created_at", { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  const posts = data as PostWithRelations[] | null;

  const defaultAvatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc";

  const canModifyPost = (postAuthorId: string) => {
    return isSuperAdmin || postAuthorId === user.id;
  };

  // Date formatting function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (error) {
    console.error("POST FETCH ERROR:", error);
    return <p className="text-red-500">Failed to load posts</p>;
  }

  // Extract notification params for client wrapper
  // Use a client bridge to read search params and pass to NotificationWrapper
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Notification for post creation success */}
      <Suspense fallback={null}>
        <ClientNotificationBridge />
      </Suspense>
      <div className="flex h-screen overflow-hidden">
        {/* <!-- Sidebar Navigation --> */}
        <AdminSidebar />
        {/* <!-- Main Content Area --> */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* <!-- Topbar --> */}
          <AdminTopbar page="Posts Management" />
          {/* <!-- Content Body --> */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            {/* <!-- Page Header Actions --> */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-black tracking-tight">Posts</h1>
                <p className="text-slate-500 mt-1">
                  Manage and moderate all blog content from one central hub.
                </p>
              </div>
              <Link
                href="/admin/posts/create-post"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all self-start"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                <span>New Post</span>
              </Link>
            </div>
            {/* <!-- Filter & Search Bar --> */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 mb-6">
              <div className="flex-1 min-w-60 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-slate-400"
                  placeholder="Search by title, author, or tags..."
                  type="text"
                />
              </div>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-medium py-2 pl-4 pr-10 focus:ring-2 focus:ring-primary/20 min-w-35">
                <option>All Categories</option>
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>Business</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-medium py-2 pl-4 pr-10 focus:ring-2 focus:ring-primary/20 min-w-35">
                <option>All Statuses</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Scheduled</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  layers
                </span>
                <span>Bulk Actions</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
            </div>
            {/* <!-- Data Table --> */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                      <th className="p-4 w-10">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                        Featured
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                        Views
                      </th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* <!-- Row 1 --> */}
                    {posts?.map((post) => (
                      <tr
                        key={post.id}
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group"
                      >
                        <td className="p-4">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-4">
                          <a
                            className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                            href={`/admin/posts/${post.id}`}
                          >
                            {post.title}
                          </a>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {formatDate(post.updated_at || post.created_at)}
                          </p>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-full bg-slate-200"
                              data-alt="Author avatar"
                              style={{
                                backgroundImage: `url('${
                                  post.profiles?.avatar_url || defaultAvatarUrl
                                }')`,
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <span className="text-sm font-medium">
                              {post.profiles?.full_name ?? "Unknown"}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-sm">
                          {post.post_categories &&
                          post.post_categories.length > 0 ? (
                            post.post_categories.map((pc: any) => (
                              <span
                                key={pc.categories.id}
                                className="inline-block mr-2 px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded"
                              >
                                {pc.categories.name}
                              </span>
                            ))
                          ) : (
                            <span className="text-slate-400">
                              Uncategorized
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          <FeaturedToggleButton
                            postId={post.id}
                            postTitle={post.title}
                            currentFeatured={post.featured}
                          />
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              post.status === "published"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="p-4 text-sm font-medium text-right">
                          12.4k
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-1">
                            {canModifyPost(post.author_id) ? (
                              <>
                                <Link
                                  href={`/admin/posts/${post.id}/edit-post`}
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[20px]">
                                    edit
                                  </span>
                                </Link>
                                <VisibilityToggleButton
                                  postId={post.id}
                                  postTitle={post.title}
                                  currentStatus={post.status}
                                />
                                <DeletePostButton
                                  postId={post.id}
                                  postTitle={post.title}
                                />
                              </>
                            ) : (
                              <span className="text-xs text-slate-400 italic">
                                Read only
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}

                    {posts?.length === 0 && (
                      <tr>
                        <td
                          colSpan={8}
                          className="p-6 text-center text-gray-500"
                        >
                          No posts found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination Footer --> */}
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <span>Showing</span>
                  <span>{(page - 1) * PAGE_SIZE + 1}</span>
                  <span>-</span>
                  <span>{Math.min(page * PAGE_SIZE, totalPosts ?? 0)}</span>
                  <span>of {totalPosts ?? 0} posts</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Previous page button */}
                  <a
                    href={`?page=${page - 1}`}
                    className={`p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors ${page === 1 ? "pointer-events-none opacity-50" : ""}`}
                    aria-disabled={page === 1}
                  >
                    <span className="material-symbols-outlined text-lg">
                      chevron_left
                    </span>
                  </a>
                  {/* Page numbers (show up to 3 pages before/after current) */}
                  {Array.from(
                    { length: Math.ceil((totalPosts ?? 0) / PAGE_SIZE) },
                    (_, i) => i + 1,
                  )
                    .filter(
                      (p) =>
                        Math.abs(p - page) <= 2 ||
                        p === 1 ||
                        p === Math.ceil((totalPosts ?? 0) / PAGE_SIZE),
                    )
                    .map((p, idx, arr) => (
                      <React.Fragment key={p}>
                        {idx > 0 && p - arr[idx - 1] > 1 && (
                          <span
                            key={`ellipsis-${p}`}
                            className="text-slate-400 px-1"
                          >
                            ...
                          </span>
                        )}
                        <a
                          href={`?page=${p}`}
                          className={`w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center ${p === page ? "bg-primary text-white" : "text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors"}`}
                        >
                          {p}
                        </a>
                      </React.Fragment>
                    ))}
                  {/* Next page button */}
                  <a
                    href={`?page=${page + 1}`}
                    className={`p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors ${page >= Math.ceil((totalPosts ?? 0) / PAGE_SIZE) ? "pointer-events-none opacity-50" : ""}`}
                    aria-disabled={
                      page >= Math.ceil((totalPosts ?? 0) / PAGE_SIZE)
                    }
                  >
                    <span className="material-symbols-outlined text-lg">
                      chevron_right
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
