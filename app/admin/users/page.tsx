import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import { supabaseAdmin } from "@/lib/supabase/server";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";

export default async function AdminUsers() {
  const supabase = await createReadOnlySupabase();

  // 🔐 Auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // 🛡 Role
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  const isSuperAdmin = profile?.role === "superAdmin";
  // Fetch all users from auth
  const { data: usersData, error: usersError } =
    await supabaseAdmin.auth.admin.listUsers();
  if (usersError) throw usersError;

  // Fetch all profiles
  const { data: profiles, error: profilesError } = await supabaseAdmin
    .from("profiles")
    .select("user_id, full_name, role, avatar_url");
  if (profilesError) throw profilesError;

  // Fetch posts count per author
  const { data: postsData, error: postsError } = await supabaseAdmin
    .from("posts")
    .select("author_id");
  if (postsError) throw postsError;

  const postsCount =
    postsData?.reduce(
      (acc, post) => {
        acc[post.author_id] = (acc[post.author_id] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ) || {};

  // Combine data
  const defaultAvatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc";

  const users = usersData.users.map((user) => {
    const profile = profiles?.find((p) => p.user_id === user.id);
    const posts = postsCount[user.id] || 0;
    return {
      id: user.id,
      email: user.email,
      name: profile?.full_name || user.email?.split("@")[0] || "Unknown",
      role: profile?.role || "normalUser",
      avatarUrl: profile?.avatar_url || defaultAvatarUrl,
      posts,
    };
  });

  const activeAuthorsCount = users.filter(
    (user) => user.role === "admin" || user.role === "superAdmin",
  ).length;

  const getRoleSpan = (role: string) => {
    if (role === "superAdmin") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-primary/10 text-yellow-600 border border-primary/20">
          Super Admin
        </span>
      );
    } else if (role === "admin") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-primary/10 text-primary border border-primary/20">
          Admin
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
          Reader
        </span>
      );
    }
  };
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* <!-- Sidebar --> */}
        <AdminSidebar />
        {/* <!-- Main Content --> */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <AdminTopbar page="Users Moderation" />
          <div className="p-8 space-y-6">
            {/* <!-- Stats Summary --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500 font-medium">
                    Total Users
                  </span>
                  <span className="material-symbols-outlined text-primary text-xl">
                    group
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">{users.length}</h3>
                  <span className="text-xs font-bold text-emerald-500 flex items-center">
                    +12%{" "}
                    <span className="material-symbols-outlined text-xs">
                      trending_up
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500 font-medium">
                    Active Authors
                  </span>
                  <span className="material-symbols-outlined text-primary text-xl">
                    edit_note
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">{activeAuthorsCount}</h3>
                  <span className="text-xs font-bold text-emerald-500 flex items-center">
                    +5%{" "}
                    <span className="material-symbols-outlined text-xs">
                      trending_up
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500 font-medium">
                    Pending Reviews
                  </span>
                  <span className="material-symbols-outlined text-orange-500 text-xl">
                    hourglass_empty
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">0</h3>
                  <span className="text-xs font-bold text-emerald-500 flex items-center">
                    0%{" "}
                    <span className="material-symbols-outlined text-orange-500 text-xs">
                      trending_up
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Search and Filters --> */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-primary/10 focus:ring-primary focus:border-primary text-sm"
                  placeholder="Search users by name, email, or ID..."
                  type="text"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                <select className="rounded-lg border-primary/10 bg-white dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary pr-10">
                  <option>All Roles</option>
                  <option>Admin</option>
                  <option>SuperAdmin</option>
                  <option>Member</option>
                </select>
                <select className="rounded-lg border-primary/10 bg-white dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary pr-10">
                  <option>Status: All</option>
                  <option>Active</option>
                  <option>Suspended</option>
                </select>
                <button className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-primary/10 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>
            {/* <!-- Table Container --> */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-primary/5">
                    <tr>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <input
                          className="rounded border-primary/20 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        User
                      </th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Role
                      </th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
                        Posts
                      </th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="p-4">
                          <input
                            className="rounded border-primary/20 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="size-10 rounded-full overflow-hidden bg-slate-100"
                              data-alt={`${user.name} profile picture`}
                            >
                              <img alt="User" src={user.avatarUrl} />
                            </div>
                            <div>
                              <p className="text-sm font-bold">{user.name}</p>
                              <p className="text-xs text-slate-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">{getRoleSpan(user.role)}</td>
                        <td className="p-4 text-center">
                          <span className="text-sm font-medium">
                            {user.posts}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            Active
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {isSuperAdmin ? (
                              <>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-orange-500 transition-colors"
                                  title="Suspend"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    block
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </>
                            ) : (
                              <span className="text-xs text-slate-400 font-medium">
                                Super Admin Only
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <div className="p-4 border-t border-primary/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Showing 1-{Math.min(10, users.length)} of {users.length} users
                </span>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-slate-400 hover:text-primary disabled:opacity-30 disabled:hover:text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_left
                    </span>
                  </button>
                  <button className="size-8 rounded flex items-center justify-center text-xs font-bold bg-primary text-white">
                    1
                  </button>
                  <button className="size-8 rounded flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                    2
                  </button>
                  <button className="size-8 rounded flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                    3
                  </button>
                  <span className="px-2 text-slate-400 text-xs">...</span>
                  <button className="size-8 rounded flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                    129
                  </button>
                  <button className="p-2 text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Action Context Banner --> */}
            {/* <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Selected 2 users. You can perform batch operations on them.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                  Change Role
                </button>
                <button className="px-3 py-1.5 text-xs font-bold rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors">
                  Suspend Selection
                </button>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
