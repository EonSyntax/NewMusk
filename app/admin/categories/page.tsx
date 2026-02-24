import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import React from "react";

export default function AdminCategories() {
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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
                      Categories
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      Manage and organize your blog post groupings.
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all text-sm">
                    <span className="material-symbols-outlined">add</span>
                    Add New Category
                  </button>
                </div>
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
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
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
                      {/* <!-- Row 1 --> */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-base">
                                rocket_launch
                              </span>
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              Technology
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                            technology
                          </code>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            24 posts
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
                      {/* <!-- Row 3 --> */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                              <span className="material-symbols-outlined text-base">
                                payments
                              </span>
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              Personal Finance
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                            finance
                          </code>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            42 posts
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
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
                      {/* <!-- Row 4 --> */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-rose-500/10 flex items-center justify-center text-rose-500">
                              <span className="material-symbols-outlined text-base">
                                favorite
                              </span>
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              Lifestyle
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                            lifestyle
                          </code>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            12 posts
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
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
            {/* <!-- Add Category Side Drawer (Visible for demo) --> */}
            <div className="absolute inset-y-0 z-50 right-0 w-full max-w-sm bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl transform translate-x-0 transition-transform">
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Add New Category</h3>
                    <p className="text-xs text-slate-500">
                      Create a new organizational group
                    </p>
                  </div>
                  <button className="size-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-colors hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">
                      close
                    </span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Category Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
                      placeholder="e.g. Travel"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Slug
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs">
                        blog.com/
                      </span>
                      <input
                        className="flex-1 min-w-0 px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-r-lg text-sm focus:ring-primary focus:border-primary"
                        placeholder="travel"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Parent Category
                    </label>
                    <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                      <option>None (Main Category)</option>
                      <option>Technology</option>
                      <option>Design Trends</option>
                      <option>Personal Finance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
                      placeholder="Briefly describe what this category covers..."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
                        Featured Category
                      </p>
                      <p className="text-xs text-slate-500">
                        Show on homepage sidebar
                      </p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                    </button>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
                  <button className="flex-1 px-4 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    Save Category
                  </button>
                  <button className="px-4 py-2.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold rounded-lg text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
