import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import React from "react";

export default function AdminPostDashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
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
              <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all self-start">
                <span className="material-symbols-outlined text-lg">add</span>
                <span>Create New Post</span>
              </button>
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
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                          href="#"
                        >
                          The Future of Generative AI in Web Design
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Updated 2 hours ago
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full bg-slate-200"
                            data-alt="Author avatar"
                            style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKunYtTLqhGQwKdWvnxOjPz28HlBRm33ozYi_CaIwq00ZvVu4z3psbXcGHbPOmHUvazJNxkyXetGzEdb2rX5n2LXAMQrp5h8y9OCHRxQWSeekNruBa6txzIDmCTvX9XU8FLtdujoRBn2IiARHoU_-KlvSmZVfE3sG1FlJ0MvOI2oqQFBUFFIKSS2NmHdFa1H9iP87hALzZErK7I3d0aEdrxecM5MzY53bMxdWSgBLjeZfnCufi2Ii9MTGMOtlcqNXzbUWQ7hWv9rg')", "backgroundSize": "cover"}}
                          ></div>
                          <span className="text-sm font-medium">
                            Jordan Lee
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">Technology</td>
                      <td className="p-4 text-center">
                        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary">
                          <span className="inline-block h-3.5 w-3.5 translate-x-5 transform rounded-full bg-white transition"></span>
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          Published
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-right">
                        12.4k
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all"
                            title="Preview"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row 2 --> */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                          href="#"
                        >
                          10 Remote Work Productivity Hacks for 2024
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Created yesterday
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full bg-slate-200"
                            data-alt="Author avatar"
                            style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT6macEywkSQhGap9PpFVef4pCxRE5Lmfhj0z5bONeAmQ5WVifeXhjV636rw3oRINQjcfx_ZQ_7ktAMDbmkwScbOZdimvdVhtlWVWHudeK5xhniFPkXldL_VPc5oXF70jagGvjjPYMytNMXFHm0-hqd6par8KwQYG5Fb5OvTsS827l6As6CHq4_FXRkeEWYxfDLa8gM64tLnUt7_MMlJ8mDWxSCWY6vdLjeeS7nHaUG0W-R8slfKuGDEHzzq0qJAarCr-Mq1aDhxo')", "backgroundSize": "cover" }}
                          ></div>
                          <span className="text-sm font-medium">
                            Sarah Jenkins
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">Lifestyle</td>
                      <td className="p-4 text-center">
                        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                          <span className="inline-block h-3.5 w-3.5 translate-x-1 transform rounded-full bg-white transition"></span>
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400">
                          Draft
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-right text-slate-400">
                        —
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row 3 --> */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                          href="#"
                        >
                          Sustainable Fashion: Why it Matters More Than Ever
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Scheduled for Oct 24, 2023
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full bg-slate-200"
                            data-alt="Author avatar"
                            style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIlXikfEHk73t_B1wCFRRjbY5YIXYn2gYSM8JKDw-Tvv-iA8IS8rVFvvoqhhT4OLcLv4lJBBBmsj9fKtSJI5Q3eJecSQy-KX_F7_4V2LyQL_RMqYyVcPcP92FXB96V_78pQQOQoJ6WqR2ssiLtkrHDzzIbb2BN0seO2i_6PKlaXqFJpr6oqnUKr1EZMzzgzNBfq7GiRDc58zvgObzFbN9p9ONo3Mmng6vlibMXOgILfTRk7GDDuKZxjwoSNj8v3GJHLt1lRLZTA58')", "backgroundSize": "cover"}}
                          ></div>
                          <span className="text-sm font-medium">Mike Chen</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">Business</td>
                      <td className="p-4 text-center">
                        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                          <span className="inline-block h-3.5 w-3.5 translate-x-1 transform rounded-full bg-white transition"></span>
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
                          Scheduled
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-right text-slate-400">
                        —
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row 4 --> */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                          href="#"
                        >
                          Exploring the Hidden Gems of Scandinavia
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Published 3 days ago
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full bg-slate-200"
                            data-alt="Author avatar"
                            style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChXLfp6wuxM9i5auSQcmAMFxYHyGe1xC-y5xvBns1ujKoNR_HDQ62x-1dsS_Dpn7EZyjP13PZNrc1Zel9JTd87EesKQS04UNNP3m7nK0cKXxrVIOUhKAEEYA1O9YFGy7TdUIvIhfuFSuUQm_YnvVoqEAr5xTssl_sr1mO8gmKTGmhztl6Y9kD_I6E0TQWQaMQgWTEnf7giAxxUtprd1spOmqdGieZEr-LgFb3QelsLJuEultX8vKT-x4v0HWhn52DiM0hXHH9oN-0')", "backgroundSize": "cover"}}
                          ></div>
                          <span className="text-sm font-medium">
                            Elena Rossi
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">Lifestyle</td>
                      <td className="p-4 text-center">
                        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary">
                          <span className="inline-block h-3.5 w-3.5 translate-x-5 transform rounded-full bg-white transition"></span>
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          Published
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-right">
                        8.9k
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row 5 --> */}
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="p-4">
                        <a
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                          href="#"
                        >
                          The Rise of Digital Nomads: A Global Shift
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Published 1 week ago
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full bg-slate-200"
                            data-alt="Author avatar"
                            style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg7Y9cZvCXqWDyCsSbFxzcUQgf4fovcTEi7v9OlP_MFQBs4wSWfQvJHM9kBQw-ifmCv0mZPS7yE5pBgGz0XlbGXF38qKMAjE0VvrwP7_l02fABcw0anH2U_thlZ_qI5ejXLntr2xsO_KdgGW0SlTd-v-I0otrlBJI_DrcbapH8u_LfokTL24LgeH4P5zyZYaxWdng-RlCP4lblEq_dLfDaZsViWXD7axA4MNRNHcSBEUa98P-_Xtw07feBMzTyQk3fgsWKsFqGZiY')", "backgroundSize": "cover"}}
                          ></div>
                          <span className="text-sm font-medium">
                            David Stark
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">Business</td>
                      <td className="p-4 text-center">
                        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                          <span className="inline-block h-3.5 w-3.5 translate-x-1 transform rounded-full bg-white transition"></span>
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          Published
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-right">
                        25.1k
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all">
                            <span className="material-symbols-outlined text-[20px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination Footer --> */}
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <span>Showing</span>
                  <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded py-0.5 px-1 focus:ring-primary text-sm font-medium">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  <span>of 124 posts</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors disabled:opacity-50"
                    disabled
                  >
                    <span className="material-symbols-outlined text-lg">
                      chevron_left
                    </span>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-white dark:hover:bg-slate-900 transition-colors">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-white dark:hover:bg-slate-900 transition-colors">
                    3
                  </button>
                  <span className="text-slate-400 px-1">...</span>
                  <button className="w-8 h-8 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-white dark:hover:bg-slate-900 transition-colors">
                    12
                  </button>
                  <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
