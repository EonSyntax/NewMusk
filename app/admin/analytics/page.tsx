import AdminSidebar from "@/app/components/AdminSidebar";
import AdminTopbar from "@/app/components/AdminTopbar";
import React from "react";

export default function AdminAnalytics() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen overflow-hidden">
        {/* <!-- Sidebar --> */}
        <AdminSidebar />
        {/* <!-- Main Content --> */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* <!-- Header --> */}
          <AdminTopbar page="Analytics" />
          {/* <!-- Dashboard Body --> */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {/* <!-- Title & Filter Section --> */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  Analytics Overview
                </h2>
                <p className="text-slate-500 font-medium mt-1">
                  Real-time performance data for your blog network.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                  7D
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-primary text-white shadow-md shadow-primary/20">
                  30D
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                  90D
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    calendar_today
                  </span>
                  Custom
                </button>
              </div>
            </div>
            {/* <!-- KPI Cards --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* <!-- Card 1 --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Total Views
                    </p>
                    <h3 className="text-2xl font-black mt-1">128.4K</h3>
                  </div>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +12.5%
                  </span>
                </div>
                <div className="mt-4 h-12 w-full bg-primary/5 rounded flex items-end overflow-hidden">
                  {/* <!-- Visual trend line placeholder --> */}
                  <div className="w-full h-full bg-primary/10 relative">
                    <svg
                      className="absolute bottom-0 left-0 w-full h-8"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path
                        className="text-primary/20"
                        d="M0,20 L10,15 L20,18 L30,12 L40,14 L50,8 L60,10 L70,4 L80,7 L90,2 L100,5 L100,20 L0,20"
                        fill="currentColor"
                      ></path>
                      <path
                        className="text-primary"
                        d="M0,20 L10,15 L20,18 L30,12 L40,14 L50,8 L60,10 L70,4 L80,7 L90,2 L100,5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Avg. Engagement
                    </p>
                    <h3 className="text-2xl font-black mt-1">4.2%</h3>
                  </div>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +0.8%
                  </span>
                </div>
                <div className="mt-4 h-12 w-full bg-primary/5 rounded flex items-end overflow-hidden">
                  <div className="w-full h-full bg-primary/10 relative">
                    <svg
                      className="absolute bottom-0 left-0 w-full h-8"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path
                        className="text-primary/20"
                        d="M0,20 L10,12 L20,10 L30,15 L40,12 L50,14 L60,8 L70,6 L80,10 L90,5 L100,8 L100,20 L0,20"
                        fill="currentColor"
                      ></path>
                      <path
                        className="text-primary"
                        d="M0,20 L10,12 L20,10 L30,15 L40,12 L50,14 L60,8 L70,6 L80,10 L90,5 L100,8"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Estimated Revenue
                    </p>
                    <h3 className="text-2xl font-black mt-1">$1,240.50</h3>
                  </div>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +5.2%
                  </span>
                </div>
                <div className="mt-4 h-12 w-full bg-primary/5 rounded flex items-end overflow-hidden">
                  <div className="w-full h-full bg-primary/10 relative">
                    <svg
                      className="absolute bottom-0 left-0 w-full h-8"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path
                        className="text-primary/20"
                        d="M0,18 L10,14 L20,16 L30,10 L40,12 L50,6 L60,8 L70,2 L80,5 L90,1 L100,4 L100,20 L0,20"
                        fill="currentColor"
                      ></path>
                      <path
                        className="text-primary"
                        d="M0,18 L10,14 L20,16 L30,10 L40,12 L50,6 L60,8 L70,2 L80,5 L90,1 L100,4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- Card 4 --> */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Active Subscribers
                    </p>
                    <h3 className="text-2xl font-black mt-1">12,840</h3>
                  </div>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +15.7%
                  </span>
                </div>
                <div className="mt-4 h-12 w-full bg-primary/5 rounded flex items-end overflow-hidden">
                  <div className="w-full h-full bg-primary/10 relative">
                    <svg
                      className="absolute bottom-0 left-0 w-full h-8"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path
                        className="text-primary/20"
                        d="M0,15 L10,13 L20,14 L30,11 L40,12 L50,10 L60,9 L70,7 L80,6 L90,4 L100,2 L100,20 L0,20"
                        fill="currentColor"
                      ></path>
                      <path
                        className="text-primary"
                        d="M0,15 L10,13 L20,14 L30,11 L40,12 L50,10 L60,9 L70,7 L80,6 L90,4 L100,2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Main Charts Row --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* <!-- Total Views Over Time --> */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-lg font-bold">Total Views over Time</h4>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-primary"></span>
                      <span>Current Period</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="size-2 rounded-full bg-slate-300"></span>
                      <span>Previous Period</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 w-full relative">
                  <div className="absolute inset-0 flex items-end justify-between px-2 opacity-10">
                    <div className="w-1 bg-slate-400 h-full"></div>
                    <div className="w-1 bg-slate-400 h-full"></div>
                    <div className="w-1 bg-slate-400 h-full"></div>
                    <div className="w-1 bg-slate-400 h-full"></div>
                    <div className="w-1 bg-slate-400 h-full"></div>
                    <div className="w-1 bg-slate-400 h-full"></div>
                  </div>
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 1000 200"
                  >
                    <path
                      d="M0,150 Q100,100 200,120 T400,80 T600,100 T800,40 T1000,60 L1000,200 L0,200"
                      fill="url(#grad)"
                    ></path>
                    <path
                      d="M0,150 Q100,100 200,120 T400,80 T600,100 T800,40 T1000,60"
                      fill="none"
                      stroke="#5100ff"
                      stroke-width="3"
                    ></path>
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgba(81, 0, 255, 0.2)"
                          stopOpacity={1}
                        ></stop>
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgba(81, 0, 255, 0)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>01 Oct</span>
                  <span>07 Oct</span>
                  <span>14 Oct</span>
                  <span>21 Oct</span>
                  <span>28 Oct</span>
                  <span>31 Oct</span>
                </div>
              </div>
              {/* <!-- Views per Category --> */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="text-lg font-bold mb-8">Views per Category</h4>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="relative size-48 mx-auto flex items-center justify-center">
                    {/* <!-- Semi-circular doughnut simulation --> */}
                    <svg
                      className="size-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="stroke-slate-100 dark:stroke-slate-800"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-width="4"
                      ></path>
                      <path
                        className="stroke-primary"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-dasharray="45, 100"
                        stroke-width="4"
                      ></path>
                      <path
                        className="stroke-indigo-400"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-dasharray="25, 100"
                        stroke-dashoffset="-45"
                        stroke-width="4"
                      ></path>
                      <path
                        className="stroke-purple-300"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-dasharray="15, 100"
                        stroke-dashoffset="-70"
                        stroke-width="4"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black">45%</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Tech
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-semibold">
                          Technology
                        </span>
                      </div>
                      <span className="text-xs font-bold">45.2k</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-indigo-400">
                        <div className="size-2 rounded-full bg-indigo-400"></div>
                        <span className="text-xs font-semibold">Lifestyle</span>
                      </div>
                      <span className="text-xs font-bold">25.1k</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-purple-300">
                        <div className="size-2 rounded-full bg-purple-300"></div>
                        <span className="text-xs font-semibold">Finance</span>
                      </div>
                      <span className="text-xs font-bold">15.8k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Secondary Data Row --> */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* <!-- Top Performing Posts --> */}
              <div className="xl:col-span-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-8 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
                  <h4 className="text-lg font-bold">Top Performing Posts</h4>
                  <button className="text-primary text-xs font-bold hover:underline">
                    View All Posts
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase font-black tracking-widest text-slate-400">
                      <tr>
                        <th className="px-8 py-4">Post Detail</th>
                        <th className="px-8 py-4">Category</th>
                        <th className="px-8 py-4">Views</th>
                        <th className="px-8 py-4">Engagement</th>
                        <th className="px-8 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-8 py-4">
                          <div className="flex items-center gap-4">
                            <div className="size-10 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                              <img
                                alt="Tech post thumbnail"
                                className="size-full object-cover"
                                data-alt="Close up of a futuristic glowing microchip circuit"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgMpf6lrCh8P7BYWrxfqQMNiGFcxn5-ePT8P3abO3rtBXBK8RKjhElWfTclHgrPwyymF12L8VCHHaCKtOLhFEqn2I8E45bm-cnG2WmLNWcOoLe-DNoMY0U0w4C5OJEL_ExpOO0CEVUBnxOgtJ1jb5QW_GNcGh3TnlrJBz2KZM2qRxU82iZQkj48tA8WhA1kRwcUdrog362wHCGvpLWo4JRA-mOe7laf9a_LMMaKQUZH1ARwpPktw9KPDZaTbJhPrqxQQn2giVvXmY"
                              />
                            </div>
                            <p className="text-sm font-bold truncate max-w-60">
                              The Future of Generative AI in Creative Writing
                            </p>
                          </div>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-[10px] font-black uppercase px-2 py-1 rounded-md bg-primary/10 text-primary">
                            Tech
                          </span>
                        </td>
                        <td className="px-8 py-4 text-sm font-bold">42,830</td>
                        <td className="px-8 py-4 text-sm font-bold text-green-500">
                          8.2%
                        </td>
                        <td className="px-8 py-4">
                          <div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-8 py-4">
                          <div className="flex items-center gap-4">
                            <div className="size-10 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                              <img
                                alt="Finance post thumbnail"
                                className="size-full object-cover"
                                data-alt="Stock market graph displayed on a professional tablet screen"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIuW6a6AcgauYgFwmNdjmL3getp4j8EMPO4RFK2kOIV0pcdDTSbj2KcZU4-VVWF_5_h0yHeW0yiZiTXrwxnpQt0hdLiKbkKvYrh86hB0LNh-6Q53rpBbbja7wsdRa9TzWLqTqklGvxjs0B6N2oZ4vrE84p0JLQpqiQlTzjujQdDGiSRo7puT-0R2u8UMtMxu4lPGvjq2HzFBpCYdo3XO7FcipVhfUZomvU-X_LH0hC6Ns_RpyNej1BDrveaH7g4dnpVnuAjvo0kGc"
                              />
                            </div>
                            <p className="text-sm font-bold truncate max-w-60">
                              10 Investment Strategies for the Next Decade
                            </p>
                          </div>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-[10px] font-black uppercase px-2 py-1 rounded-md bg-purple-100 text-purple-600">
                            Finance
                          </span>
                        </td>
                        <td className="px-8 py-4 text-sm font-bold">31,215</td>
                        <td className="px-8 py-4 text-sm font-bold text-green-500">
                          6.4%
                        </td>
                        <td className="px-8 py-4">
                          <div className="size-2 rounded-full bg-green-500"></div>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-8 py-4">
                          <div className="flex items-center gap-4">
                            <div className="size-10 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                              <img
                                alt="Lifestyle post thumbnail"
                                className="size-full object-cover"
                                data-alt="Peaceful person meditating outdoors in a sunny park"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSPLZiUwhHqSE9G7kcMtfarJskmcyHb9X-P5KCet348gKrzKVGt6__m6z9pyFHDHwf5EyqQvcPMn4KO12YdsxFerNKHzJdvOXGmudcjQh3DkoZ50X0HNrA66082-0oVqowu2fDRsHrpRsswM7xVWxd4K9ZZHMZXOjunzSv5tKjV0BVlcDz27trbKrC5x4N3ZxiOfotx-Nd0pbXLhQtwJK2fCnxW5-bmB0u-1TPwQBg8WsoOKhyWmIPcJwU2nhtYfUoIjNZmDS1TL0"
                              />
                            </div>
                            <p className="text-sm font-bold truncate max-w-60">
                              How to Maintain Focus in a Distracted World
                            </p>
                          </div>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-[10px] font-black uppercase px-2 py-1 rounded-md bg-indigo-100 text-indigo-600">
                            Lifestyle
                          </span>
                        </td>
                        <td className="px-8 py-4 text-sm font-bold">18,500</td>
                        <td className="px-8 py-4 text-sm font-bold text-slate-400">
                          3.1%
                        </td>
                        <td className="px-8 py-4">
                          <div className="size-2 rounded-full bg-green-500"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Revenue / AdSense Placeholder --> */}
              <div className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/20 flex flex-col justify-between overflow-hidden relative group">
                {/* <!-- Abstract Background Decoration --> */}
                <div className="absolute -right-4 -top-4 size-32 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -left-4 -bottom-4 size-24 bg-black/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-white/80">
                      monetization_on
                    </span>
                    <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest">
                      Revenue Forecast
                    </h4>
                  </div>
                  <h3 className="text-3xl font-black mb-2">$4,850.00</h3>
                  <p className="text-white/60 text-xs font-medium">
                    Projected earnings for November based on current CPM trends.
                  </p>
                </div>
                <div className="relative z-10 mt-8 space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md">
                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                      <span>AdSense Linked</span>
                      <span className="text-green-300">Active</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-300 w-full"></div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white text-primary rounded-lg text-xs font-black shadow-lg shadow-black/10 hover:bg-slate-50 transition-colors">
                    VIEW DETAILED REPORT
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Bottom Metrics --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Traffic Sources --> */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold mb-6">Traffic Sources</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Search Engines</span>
                      <span>52%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[52%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Social Media</span>
                      <span>28%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[28%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Direct Traffic</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[15%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Referrals</span>
                      <span>5%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[5%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Scroll Depth / Engagement Metrics --> */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold mb-6">User Behavior</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Avg. Read Time
                    </p>
                    <p className="text-xl font-black mt-1">4m 32s</p>
                    <p className="text-[10px] text-green-500 font-bold mt-1">
                      +12s vs LY
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Scroll Depth
                    </p>
                    <p className="text-xl font-black mt-1">78%</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-1">
                      Stable
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Bounce Rate
                    </p>
                    <p className="text-xl font-black mt-1">42%</p>
                    <p className="text-[10px] text-red-400 font-bold mt-1">
                      +2% vs LY
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Shares/Post
                    </p>
                    <p className="text-xl font-black mt-1">12.4</p>
                    <p className="text-[10px] text-green-500 font-bold mt-1">
                      +4.2 vs LY
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Geo Distribution (Simple Map placeholder) --> */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="text-lg font-bold mb-6">Audience Location</h4>
                <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                  {/* <!-- SVG Map Visualization --> */}
                  <img
                    alt="Audience Map"
                    className="w-full h-auto opacity-50 dark:opacity-20"
                    data-location="Global"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_QOJrG1hRfhWt30QzTEAuKZ64jG5G-MKdwB1XosSgBQsfvScSh8J5eZxjHwx57cAfRFUhwMEaZU1OmgsvCmO2B5ov7rZvBB6fLBZCfBVy6m4liZCmkqv3sc2e5fUp0G7SM6GomORHM3Gv_zu4LMQ_3CfQNzogomKNC8gWtF4T79m32HoDQp1-nykPQQ7XoDlSo83WTiZbw1V741d3owwwkmeWNbW6o01lMIFYjBoiXV87mMgK4vBolfPMzcTqv3grT9bTkkRWNo"
                  />
                  <div className="absolute top-1/2 left-1/3 size-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_rgba(81,0,255,1)]"></div>
                  <div className="absolute top-1/3 right-1/4 size-2 bg-primary/60 rounded-full shadow-[0_0_8px_rgba(81,0,255,0.6)]"></div>
                  <div className="absolute bottom-1/3 right-1/2 size-2 bg-primary/40 rounded-full shadow-[0_0_8px_rgba(81,0,255,0.4)]"></div>
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-primary"></div>
                      <span className="text-[10px] font-bold uppercase">
                        Top: USA (42%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
