import { Navbar } from "@/app/components/Navbar";
import React from "react";

export default function UserProfile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* <!-- Sticky Top Navigation --> */}
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-20 py-10">
          {/* <!-- Profile Hero Section --> */}
          <section className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-12">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 md:size-40 border-4 border-white dark:border-slate-900 shadow-xl"
                data-alt="High resolution profile photo of Alex Thorne"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlSX1ANU9qmI5OxZZEv3LmMfY4jhZkKIt-6zCkc_IIaEZhlK1rUYmVANpoNJt44Vk0T1RL6ItqEJTBLLB_kkC-6yuDAAhsf10iFDssXTuQQw0zU6Z7n9c7EMBcDFQPkr18bUkVWdCQNQt9jT5IHgVedy2HXIsE_4sX_FVl3O7mWNqLwlsQT92mqOIWg2cVMC8VlCdtf1RIr1L6OzTnIuzyB5_uqrsMi2wMgfL6yMX_Ku797RSee-57petfK-zGF0W0aVJW0dMJP_c")',
                }}
              ></div>
              <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Alex Thorne
                </h1>
                <div className="flex gap-2 justify-center">
                  <button className="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md">
                    Edit Profile
                  </button>
                  <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-all">
                    Share
                  </button>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Product Designer &amp; Tech Enthusiast
              </p>
              <div className="flex items-center justify-center md:justify-start gap-1 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </section>
          {/* <!-- Stats Ribbon --> */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl text-center transition-transform hover:-translate-y-1">
              <p className="text-primary text-3xl font-bold mb-1">42</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Posts Saved
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl text-center transition-transform hover:-translate-y-1">
              <p className="text-slate-900 dark:text-white text-3xl font-bold mb-1">
                128
              </p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Comments Made
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl text-center transition-transform hover:-translate-y-1">
              <p className="text-slate-900 dark:text-white text-3xl font-bold mb-1">
                Jan '23
              </p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Member Since
              </p>
            </div>
          </section>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* <!-- Main Content Area --> */}
            <div className="flex-1">
              {/* <!-- Tabs --> */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button className="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    bookmark
                  </span>{" "}
                  Bookmarked Articles
                </button>
                <button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    history
                  </span>{" "}
                  Recent Activity
                </button>
                <button className="px-6 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    settings
                  </span>{" "}
                  Settings
                </button>
              </div>
              {/* <!-- Bookmarked Articles Grid --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Card 1 --> */}
                <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                    data-alt="Space rocket launching into atmospheric dusk"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoJfrlj1AKf4rESAbd2yzAr9lqnJat2BZaRtiZPsDFRPOda110bUIYuyTXQDNho0FXTGjVC72_QKyfD9n7-ey_te7tITRQutoHXjz9k5fKLPRhtAVSzlw0l48SMt2N2J62JKnGQsgCG9SgmEQpeeXyTc3fshWZusrjw3-LDLEgq-DJ3jLUWz-zz_MBNZQGC6UAZ6a3Fu9ctydEq9Dlkjl6ajyGPPaB2cdQNIn80AcgdaAiOrq5dhte0paMqRczhM3okVVm3eUgLjY")',
                    }}
                  ></div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                      Space
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      Starship: The Road to Multi-Planetary Life
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                      Analyzing the recent test flights and what they mean for
                      the future of Mars colonization.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        8 min read • 2 days ago
                      </span>
                      <button className="text-primary hover:text-primary/70 transition-colors">
                        <span className="material-symbols-outlined">
                          bookmark_added
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
                {/* <!-- Card 2 --> */}
                <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                    data-alt="AI visualization showing neural networks and data"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAts3Uamm8Y-tOF7BO8yWKKQrTr7ZuWMMFXqbwZThHD8woJZ-Y9W1twrmSP1E18IRg9pWBO3sfiv54o6bCqiCbu6eqqOS9nReiHuT1MPfeMjMBO85evShFD3NCSccmkdEIrO91QRBEa6UnJ0jWFSA7dfGTl5LybCGhYrgYJiVp0-ikXp4gJDFx2GWXH2tEGRNEoV4ZJewsNXISDeXsYfqNMuv4c4T49EEaYMODhzFBOWaFB4q5-8W-KjQO7tNXC0gGVc4YuuWQWugA")',
                    }}
                  ></div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                      Artificial Intelligence
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      Neuralink and the Post-Keyboard Era
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                      How direct brain-computer interfaces are redefining human
                      productivity in 2024.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        12 min read • 1 week ago
                      </span>
                      <button className="text-primary hover:text-primary/70 transition-colors">
                        <span className="material-symbols-outlined">
                          bookmark_added
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
                {/* <!-- Card 3 --> */}
                <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                    data-alt="Futuristic server room with glowing blue lights"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqScH3vWg3-na-gwNTtCL47fsSyvE5OwElMmz7hF6Kj1M_qNUZISrnmpPTI-Z859XapqpKRP7hJFcf-NsvHdxXNBvb9puzcCbCaaJ5hvwZvKTEmhb9WvtdBkIiv9txisO3VLPLYPHDqjPj-oDX-fqZMGXbnKwobIHWYC8jkv4YtiAx4K1pCW_axMYYU-6A0p-G99j0MRRUQex57XTLa6E-uscqWplIVs5fsy1UCBgOrt_UImfHi2uKpd1Gc4l8K_qAbMsOvduhYBY")',
                    }}
                  ></div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                      Technology
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      The Sovereign Cloud: Data Independence
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                      Why tech giants are moving towards regional infrastructure
                      to satisfy local privacy laws.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        5 min read • 3 days ago
                      </span>
                      <button className="text-primary hover:text-primary/70 transition-colors">
                        <span className="material-symbols-outlined">
                          bookmark_added
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
                {/* <!-- Empty State Filler --> */}
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/30 text-center">
                  <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Find more articles to bookmark
                  </p>
                  <button className="mt-4 text-primary font-bold text-sm">
                    Explore Feed
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar Content --> */}
            <aside className="w-full lg:w-80 space-y-10">
              {/* <!-- Following Categories --> */}
              <div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    interests
                  </span>{" "}
                  Following Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    #Technology
                  </a>
                  <a
                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    #AI
                  </a>
                  <a
                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    #Space
                  </a>
                  <a
                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    #Design
                  </a>
                  <a
                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    #FutureOfWork
                  </a>
                  <a
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all rounded-lg text-sm font-semibold"
                    href="#"
                  >
                    + Explore
                  </a>
                </div>
              </div>
              {/* <!-- Profile Quick Actions --> */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  Account Overview
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      person_edit
                    </span>{" "}
                    Edit Profile Information
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      shield_person
                    </span>{" "}
                    Privacy &amp; Security
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      payments
                    </span>{" "}
                    Subscription &amp; Billing
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg text-rose-500">
                      logout
                    </span>{" "}
                    Sign Out
                  </li>
                </ul>
              </div>
              {/* <!-- Newsletter Promo --> */}
              <div className="relative overflow-hidden rounded-xl p-6 bg-primary text-white">
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
                  <p className="text-white/80 text-xs mb-4">
                    Get unlimited access to expert insights and early access to
                    features.
                  </p>
                  <button className="w-full py-2 bg-white text-primary rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors">
                    Go Premium
                  </button>
                </div>
                <div className="absolute -top-10 -right-10 size-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </aside>
          </div>
        </main>
        {/* <!-- Minimal Footer --> */}
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 lg:px-20 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 opacity-50">
              <div className="size-6 flex items-center justify-center bg-slate-400 rounded text-white">
                <span className="material-symbols-outlined text-xs">
                  rocket_launch
                </span>
              </div>
              <span className="text-slate-500 font-bold text-sm tracking-tighter">
                NewMusk Blogs
              </span>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Careers
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Help
              </a>
            </div>
            <div className="flex gap-4">
              <a
                className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all"
                href="#"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a
                className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all"
                href="#"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 text-center text-slate-400 text-xs">
            © 2024 NewMusk Media. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
