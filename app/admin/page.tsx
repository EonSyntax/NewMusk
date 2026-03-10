import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import { supabaseAdmin } from "@/lib/supabase/server";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import Link from "next/link";

type PostWithRelations = {
  id: string;
  title: string;
  slug: string;
  status: string;
  created_at: string;
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

export default async function AdminPage() {
  // 🔐 Auth check
  const supabase = await createReadOnlySupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 🛡 Fetch current user's profile for role check
  const { data: userProfile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user?.id)
    .single();

  const isSuperAdmin = userProfile?.role === "superAdmin";

  const canModifyPost = (postAuthorId: string) => {
    return isSuperAdmin || postAuthorId === user?.id;
  };

  // Fetch total posts
  const { count: postsCount } = await supabaseAdmin
    .from("posts")
    .select("*", { count: "exact", head: true });

  const totalPosts = postsCount || 0;

  // Fetch total users
  const { data: usersData, error: usersError } =
    await supabaseAdmin.auth.admin.listUsers();

  const totalUsers = usersData?.users?.length || 0;

  // Fetch recent posts (latest 5)
  const { data: recentPosts, error: postsError } = await supabaseAdmin
    .from("posts")
    .select(
      `
      id,
      title,
      slug,
      status,
      created_at,
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
    .limit(5);

  const posts = recentPosts as PostWithRelations[] | null;

  // Date formatting function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar />
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
          {/* Topbar */}
          <AdminTopbar page="Overview" />
          <div className="p-8 space-y-8">
            {/* <!-- Header Stats --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">article</span>
                  </div>
                  <span className="text-xs font-bold text-green-500">+12%</span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Posts
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {totalPosts.toLocaleString()}
                </h3>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </div>
                  <span className="text-xs font-bold text-green-500">
                    +5.4%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Views
                </p>
                <h3 className="text-2xl font-bold mt-1">2.4M</h3>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                    <span className="material-symbols-outlined">
                      chat_bubble
                    </span>
                  </div>
                  <span className="text-xs font-bold text-green-500">
                    +8.2%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Comments
                </p>
                <h3 className="text-2xl font-bold mt-1">12.8k</h3>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <span className="material-symbols-outlined">
                      person_add
                    </span>
                  </div>
                  <span className="text-xs font-bold text-green-500">+15%</span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Users
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {totalUsers.toLocaleString()}
                </h3>
              </div>
            </div>
            {/* <!-- Charts Section --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* <!-- Line Chart Card --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-lg">Post Views Over Time</h4>
                    <p className="text-sm text-slate-500">
                      Engagement trends for current year
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg">
                      Month
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-700 rounded-lg">
                      Week
                    </button>
                  </div>
                </div>
                <div className="relative h-64 w-full flex items-end gap-1">
                  {/* <!-- Simplified Visualization representation --> */}

                  {/* recharts */}
                  <div className="absolute inset-0 flex items-end">
                    <svg
                      className="w-full h-full"
                      preserveAspectRatio="none"
                      viewBox="0 0 400 150"
                    >
                      <path
                        className="fill-primary/10"
                        d="M0,130 Q50,120 80,60 T160,80 T240,40 T320,70 T400,20 L400,150 L0,150 Z"
                      ></path>
                      <path
                        className="stroke-primary"
                        d="M0,130 Q50,120 80,60 T160,80 T240,40 T320,70 T400,20"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex w-full justify-between px-2 pt-64 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>
              {/* <!-- Bar Chart Card --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-lg">Top Categories</h4>
                    <p className="text-sm text-slate-500">
                      Most popular content buckets
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1.5">
                      <span>Technology</span>
                      <span className="text-slate-400">82%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[82%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1.5">
                      <span>Space Exploration</span>
                      <span className="text-slate-400">65%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[65%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1.5">
                      <span>Artificial Intelligence</span>
                      <span className="text-slate-400">48%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[48%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1.5">
                      <span>Renewable Energy</span>
                      <span className="text-slate-400">32%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[32%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1.5">
                      <span>Future of Humanity</span>
                      <span className="text-slate-400">24%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full w-[24%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Recent Activity Table --> */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h4 className="font-bold text-lg">Recent Posts</h4>
                <Link
                  href="/admin/posts"
                  className="text-primary text-sm font-bold hover:underline"
                >
                  View All Posts
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase font-bold tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Post Title</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {posts?.map((post) => (
                      <tr
                        key={post.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                              style={{
                                backgroundImage: post.profiles?.avatar_url
                                  ? `url('${post.profiles.avatar_url}')`
                                  : `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc")`,
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <span className="font-semibold text-sm">
                              {post.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                          {post.post_categories &&
                          post.post_categories.length > 0
                            ? post.post_categories[0].categories.name
                            : "Uncategorized"}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {formatDate(post.created_at)}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              post.status === "published"
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {canModifyPost(post.author_id) ? (
                            <Link
                              href={`/admin/posts/${post.id}/edit-post`}
                              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors inline-block"
                            >
                              <span className="material-symbols-outlined text-slate-400">
                                edit
                              </span>
                            </Link>
                          ) : (
                            <span className="text-xs text-slate-400 italic">
                              Read only
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {(!posts || posts.length === 0) && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-4 text-center text-slate-500"
                        >
                          No posts found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
