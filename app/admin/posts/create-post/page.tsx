import AdminSidebar from "@/app/components/AdminSidebar";
import React from "react";

export default function CreatePostPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 flex flex-col bg-white dark:bg-background-dark overflow-hidden">
          {/* <!-- Top Header Bar --> */}
          <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark z-10">
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-400">
                  Posts /
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Create New Post
                </span>
              </div>
              <div className="ml-4 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">
                  cloud_done
                </span>
                SAVED
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Preview
              </button>
              <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                Publish
              </button>
            </div>
          </header>
          {/* <!-- Editor Container --> */}
          <div className="flex-1 flex overflow-hidden">
            {/* <!-- Center: Writing Area --> */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
              <div className="max-w-3xl mx-auto px-12 py-16">
                {/* <!-- Title Input --> */}
                <textarea
                  className="w-full text-5xl font-black border-none focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-slate-700 bg-transparent resize-none overflow-hidden leading-tight p-0 mb-8"
                  placeholder="Enter post title..."
                  rows={1}
                ></textarea>
                {/* <!-- Metadata Fields --> */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm">
                      link
                    </span>
                    <input
                      className="flex-1 text-sm border-none focus:ring-0 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-1 text-slate-500 italic"
                      placeholder="post-slug-url-here"
                      type="text"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm mt-1">
                      description
                    </span>
                    <textarea
                      className="flex-1 text-sm border-none focus:ring-0 bg-transparent p-0 placeholder:text-slate-400 resize-none"
                      placeholder="Write a short excerpt for this post..."
                    ></textarea>
                    <span className="material-symbols-outlined text-slate-400 text-sm mt-1">
                      description
                    </span>
                    <textarea
                      className="flex-1 text-sm border-none focus:ring-0 bg-transparent p-0 placeholder:text-slate-400 resize-none"
                      placeholder="Write a short excerpt for this post..."
                    ></textarea>
                  </div>
                </div>
                {/* <!-- Editor Toolbar --> */}
                <div className="sticky top-4 mb-8 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-1 z-20">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">
                      format_bold
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">
                      format_italic
                    </span>
                  </button>
                  <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <span className="material-symbols-outlined">format_h1</span>
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <span className="material-symbols-outlined">format_h2</span>
                  </button>
                  <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">link</span>
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">image</span>
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">code</span>
                  </button>
                  <div className="flex-1"></div>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">
                      format_list_bulleted
                    </span>
                  </button>
                </div>
                {/* <!-- Content Area --> */}
                <div
                  className="editor-content prose dark:prose-invert max-w-none text-lg leading-relaxed text-slate-700 dark:text-slate-300 min-h-125"
                  // contentEditable="true"
                  data-placeholder="Start writing your story here..."
                >
                  <p className="text-slate-300 dark:text-slate-600 italic">
                    Type '/' for commands...
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Right: Side Panels --> */}
            <div className="w-80 border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-background-dark/50 overflow-y-auto no-scrollbar">
              <div className="p-6 space-y-6">
                {/* <!-- Publish Box --> */}
                <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                      Publish Status
                    </h3>
                    <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold">
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
                    <div className="pt-4 flex flex-col gap-2">
                      <button className="w-full py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Save Draft
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Featured Image --> */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1">
                    Featured Image
                  </h3>
                  <div className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors overflow-hidden">
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-slate-400 mb-2">
                        add_photo_alternate
                      </span>
                      <span className="text-[10px] font-medium text-slate-500">
                        Click to upload image
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
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          defaultChecked
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Technology
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Lifestyle
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                          Business
                        </span>
                      </label>
                      <button className="text-[10px] font-bold text-primary flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>{" "}
                        ADD NEW
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3">
                      Tags
                    </h3>
                    <div className="relative">
                      <input
                        className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pr-10 focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Add tags..."
                        type="text"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">
                        keyboard_return
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded flex items-center gap-1">
                        SAAS{" "}
                        <span className="material-symbols-outlined text-[12px] cursor-pointer">
                          close
                        </span>
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded flex items-center gap-1">
                        UI DESIGN{" "}
                        <span className="material-symbols-outlined text-[12px] cursor-pointer">
                          close
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- SEO Settings --> */}
                <div className="pt-2">
                  <button className="w-full flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest px-1 mb-3 group">
                    SEO Settings
                    <span className="material-symbols-outlined text-sm group-hover:text-primary">
                      expand_more
                    </span>
                  </button>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Meta Title
                      </label>
                      <input
                        className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="SEO optimized title..."
                        type="text"
                      />
                      <div className="flex justify-end mt-1">
                        <span className="text-[10px] text-slate-400">
                          0 / 60
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Meta Description
                      </label>
                      <textarea
                        className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                        placeholder="Enter meta description..."
                        rows={3}
                      ></textarea>
                      <div className="flex justify-end mt-1">
                        <span className="text-[10px] text-slate-400">
                          0 / 160
                        </span>
                      </div>
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
