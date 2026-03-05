import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { supabaseAdmin } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AddCategoryDrawerClientBridge from "@/app/components/AddCategoryDrawerClientBridge";
import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import PostCountBadge from "@/app/components/postCountBadge";

export default async function AdminCategories() {
  const supabase = await createReadOnlySupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Optional: restrict to admin/superAdmin
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (!profile || (profile.role !== "admin" && profile.role !== "superAdmin")) {
    redirect("/");
  }

  // Fetch categories
  const { data: categories } = await supabaseAdmin
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });
  return (
    <>
      <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        <div className="flex h-screen overflow-hidden">
          {/* <!-- Sidebar Navigation --> */}
          <AdminSidebar />
          {/* <!-- Main Content --> */}
          <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark relative">
            {/* <!-- Header --> */}
            <AdminTopbar page="Categories" />
            {/* <!-- Content Area --> */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-6xl mx-auto space-y-6">
                {/* <!-- Page Title & CTA --> */}
                <AddCategoryDrawerClientBridge />
                {/* <!-- Filter Bar --> */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center">
                  <div className="relative flex-1 min-w-60">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      search
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Search categories..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
                      <span className="material-symbols-outlined text-lg">
                        filter_list
                      </span>
                      Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
                      <span className="material-symbols-outlined text-lg">
                        download
                      </span>
                      Export
                    </button>
                  </div>
                </div>
                {/* <!-- Data Table --> */}
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-sm">
                  <table className="min-w-max w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <th className="px-6 py-4 w-12">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </th>
                        <th className="px-6 py-4">Category Name</th>
                        <th className="px-6 py-4">Slug</th>
                        <th className="px-6 py-4 text-center">Post Count</th>
                        <th className="px-6 py-4 text-center">Featured</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {categories?.map((category) => (
                        <tr
                          key={category.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group"
                        >
                          <td className="px-6 py-4">
                            <input
                              className="rounded border-slate-300 text-primary focus:ring-primary"
                              type="checkbox"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                <img
                                  src="/android-chrome-192x192.png"
                                  alt={category.name}
                                  className="w-4 h-4 rounded-full object-contain"
                                />
                              </div>
                              <span className="font-semibold text-slate-800 dark:text-slate-200">
                                {category.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                              {category.slug}
                            </code>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                              <PostCountBadge categoryId={category.id} />
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                            </button>
                          </td>
                          <td className="px-6 py-4 text-right space-x-2">
                            <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                              <span className="material-symbols-outlined text-lg">
                                edit
                              </span>
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded transition-colors">
                              <span className="material-symbols-outlined text-lg">
                                delete
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {/* <!-- Row 2 --> */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
                              <span className="material-symbols-outlined text-base">
                                palette
                              </span>
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              Design Trends
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                            design-trends
                          </code>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            18 posts
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- Pagination --> */}
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Showing 1 to 4 of 45 categories
                    </p>
                    <div className="flex items-center gap-1">
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">
                          chevron_left
                        </span>
                      </button>
                      <button className="size-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
                        1
                      </button>
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:text-primary text-xs font-bold">
                        2
                      </button>
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:text-primary text-xs font-bold">
                        3
                      </button>
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
