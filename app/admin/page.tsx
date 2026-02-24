import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminPage() {
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
                <h3 className="text-2xl font-bold mt-1">1,240</h3>
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
                <h3 className="text-2xl font-bold mt-1">45.2k</h3>
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
                <button className="text-primary text-sm font-bold hover:underline">
                  View All Posts
                </button>
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
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                            data-alt="Abstract blog cover image"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0h86gcfe-ZFq8BXzBjkfEvcVDuK_fZPwZhxWRkjqx_WkXwt4qbWXWDnnlT7JrPYn1qMC8s6wfmqu4BB9S65-LfutaeWEXCbjfHKHHyQHzLkQXdCDvdcpAvSi205IiJQIbt6wsZQJ4Q6XBN38svmQflGdLImPBIvR7ZOmk7q2ng_KwoWcsY_E2Sag1wvqXDA_H3l8mr4frPa6ArRJzE2XsW0sZv81B24T_nh7Ckk6O1JecP1YqiN9jd7O4C8gmENxcATBJXcV5qxw')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <span className="font-semibold text-sm">
                            Starship's Flight to Mars
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        Space
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Oct 12, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                            data-alt="Cyberpunk city illustration"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDR9S5yE_zG_dA2ZIOPI9ZH7M9XCxRYJQKu10QNhN3gS2uUnMgo_IWN_Dq_P5_eElI9xdapGVi2GA1-7MAru4e60-DzOyLgB9vr1GJFxK5YaI7BvdGETAyWsMuLl3w29nBZOGeh0uWPg9lxUqWoULEIlxZA48BvnKrdheiMo9C_-r3APl0XgvuW1XXnkElFhJ4sny_zpOsGUEe89kPqsfhXt1lc_iH2Q32yxw1zn-xHFR6ykQcuh1J_w0rQqrCvLRNdBaCorCHin6U')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <span className="font-semibold text-sm">
                            AI and the Future of Labor
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        Tech
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Oct 10, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                          Draft
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                            data-alt="Solar panels on a roof"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrVXiyJr1_Jg1mSVEM0vKMfM7MIb5xFskowpsjYP5_xnd7I6zH32rpHKuTKZmfG4zuHMHIEt8hBBN0vz6ND0KNpo8cVZV2l4W-2iYZYSs8vSL2QKQ_37R71mJ8gQwVihKC564LPc4GWPsL1GMdBAs8GWNAaU96Ns4CzivFKcdLO7tzm6KvmsQM-ByiFXExCCFM0dT6WrYubMoQQxONgJY4citlt-rzBrC475PmhMPI468KA9Zf7ldtjdfL9WC3b7QU8v-Jtqq_GsE')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <span className="font-semibold text-sm">
                            Solar Windows: Efficiency Gains
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        Energy
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Oct 09, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                            data-alt="Futuristic car design"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqNQqotzxW12fQu4QN5x0r2zCrLdmx8tPL_nFum1xvjLefcY1UhlYngKukMfVXoNMwSLiwKIs6qh54fCRIa4JDd7BdSuDnvzvBwEKERxLVkQzDfoazCbWNBM5A31cwKeGIl3TKJ78QS1ofxvnQ1TXhwdfazHg5A5Z5wz3DU-JL3oNu1EP5Sv3P8zAJgbXcHM3UTehm2fTn9HdiY4WB6ZUPeFD_lWCdp-1KPhMsmNN1w1L7hS8dcCjNECIbgGEHDj8M-LJ-eCnDiM4')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <span className="font-semibold text-sm">
                            Self-Driving Fleets in Cities
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        Future
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Oct 05, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 bg-slate-200 rounded-lg shrink-0"
                            data-alt="Brain computer interface diagram"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkMFgpmj9D3T4CtkybF4tK3s1mqQT91kBMlAKrHc_drzijsDP9ExupwDZroVzSWzdSTf4scyvrCt7kWAQTcqPMhfKVANVaBn9LdAvgHnAXDLYMYG35pDL2rZcMjzajGYoz2zvPJu4PWadv95DHBogeRtMJKyMWalfBFHpAU_qFkxKteH3s8Jw9UCbHWKBnIPmysS3qTPw5kEjIyYTQe1us8hHZIjYBSZFh1eiVvowYkH9411Z1ZHsFpNwqKRLLJU7PkJP04mReBGo')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <span className="font-semibold text-sm">
                            Neural Link: Early Progress
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        Tech
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Oct 01, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                          Draft
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
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
