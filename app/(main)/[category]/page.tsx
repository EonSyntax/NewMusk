import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";

const categories = {
  health: {
    title: "Health Articles",
    description: "Latest health tips and medical news.",
  },
  tech: {
    title: "Technology News",
    description: "Latest updates in tech world.",
  },
  politics: {
    title: "Political Updates",
    description: "Global political insights.",
  },
  sports: {
    title: "Sports News",
    description: "Latest sports updates and insights.",
  },
  education: {
    title: "Education Insights",
    description: "Latest educational trends and insights.",
  },
  business: {
    title: "Business Insights",
    description: "Latest business trends and insights.",
  },
  entertainment: {
    title: "Entertainment Buzz",
    description: "Movies, music and celebrity news.",
  },
};

type CategoryParams = {
  category: keyof typeof categories;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<CategoryParams>;
}) {
  const { category } = await params;

  const categoryData = categories[category];

  if (!categoryData) {
    notFound();
  }

  const { data: posts, error } = await supabaseAdmin
    .from("post_categories")
    .select(
      `
    posts (
      id,
      title,
      slug,
      description,
      cover_image,
      created_at,
      updated_at,
      status,
      author_id,
      read_time_minutes,
      profiles:author_id!inner (
        full_name, avatar_url
      )
    ),
    categories!inner (
      name,
      slug
    )
  `,
    )
    .eq("categories.slug", category)
    .eq("posts.status", "published")
    .order("created_at", { ascending: false });

  const postsList =
    (posts
      ?.map((item: any) => {
        const post = item.posts;
        if (!post) return null;
        // Attach full_name from joined profile, handle null
        return {
          ...post,
          author_name:
            post.profiles && post.profiles.full_name
              ? post.profiles.full_name
              : "Unknown Author",
          author_avatar:
            post.profiles && post.profiles.avatar_url
              ? post.profiles.avatar_url
              : "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc",
        };
      })
      .filter(Boolean) as any[]) || [];
  const latestPost = postsList?.[0] ?? null;

  if (error) {
    console.error(error);
  }

  // console.log(posts); for testing the table relationship and data fetching

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 pt-25 pb-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <!-- Category Header & Featured --> */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <p className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-tighter">
                {categoryData.title}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
                {categoryData.description}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex h-10 items-center gap-2 rounded-lg bg-primary text-white px-4 font-medium text-sm hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-lg">
                  notifications
                </span>
                Subscribe
              </button>
            </div>
          </div>

          {/* <!-- Hero Card --> */}
          {latestPost && (
            <div className="relative group overflow-hidden rounded-xl bg-slate-900 aspect-21/9">
              <img
                alt={latestPost.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                data-alt="Abstract neural network visual representing high technology"
                src={latestPost.cover_image || "/placeholder-cover.jpg"}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 uppercase tracking-widest">
                  Latest {categoryData.title}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {latestPost.title}
                </h2>
                <p className="text-slate-200 text-lg mb-6 line-clamp-2 md:line-clamp-none">
                  {latestPost.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/${category}/${latestPost.slug}`}
                    className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                  >
                    Read Full Story
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-slate-300 text-sm">
                    {latestPost.read_time_minutes || 5} min read •{" "}
                    {new Date(
                      latestPost.updated_at || latestPost.created_at,
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* <!-- Main Content Area --> */}
          <div className="lg:w-2/3">
            {/* <!-- Blog Grid --> */}
            <div className="mb-5">
              <label className="flex flex-col w-full h-10">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm ring-1 ring-slate-200">
                  <div
                    className="text-slate-400 flex border-none bg-white dark:bg-slate-900 items-center justify-center pl-6 rounded-l-xl"
                    data-icon="search"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      search
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-white dark:bg-slate-900 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-lg font-normal leading-normal"
                    placeholder="Search sports articles, athletes, or events..."
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 font-semibold shadow-md shadow-primary/20">
                <p className="text-sm">All Stories</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
                <p className="text-sm">Football</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
                <p className="text-sm">Basketball</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
                <p className="text-sm">Tennis</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
                <p className="text-sm">Cricket</p>
              </button>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  Sort by:
                </span>
                <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {postsList.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/${category}/${post.slug}`} className="block">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={post.cover_image || "/placeholder-cover.jpg"}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                          AI
                        </span>
                      </div>
                    </div>
                  </Link>
                  <Link href={`/${category}/${post.slug}`} className="block">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-blue-500 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                        <img
                          alt="Author"
                          data-alt="Male author portrait"
                          src={post.author_avatar}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {post.author_name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {new Date(
                        post.updated_at || post.created_at,
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            {/* <!-- Pagination --> */}
            <div className="flex items-center justify-center gap-2 mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
              <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
                1
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
                2
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
                12
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          {/* <!-- Sidebar --> */}
          <aside className="lg:w-1/3 space-y-12">
            {/* <!-- Trending Stories --> */}
            <section>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary dark:text-blue-500">
                  trending_up
                </span>
                Trending Now
              </h4>
              <div className="space-y-6">
                <Link className="flex gap-4 group" href="#">
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary transition-colors">
                    01
                  </span>
                  <div>
                    <h5 className="font-bold text-sm group-hover:text-primary dark:group-hover:text-blue-500 transition-colors leading-snug mb-1">
                      {latestPost?.title ||
                        "Optimus Gen 2: The End of Physical Labor?"}
                    </h5>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      Robotics • {latestPost?.read_time_minutes || 5}m Read
                    </p>
                  </div>
                </Link>
                <Link className="flex gap-4 group" href="#">
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary transition-colors">
                    02
                  </span>
                  <div>
                    <h5 className="font-bold text-sm group-hover:text-primary dark:group-hover:text-blue-500 transition-colors leading-snug mb-1">
                      {postsList?.[1]?.title ||
                        "Solar Roof V3: Efficiency Gains Explained"}
                    </h5>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      Energy • {postsList?.[1]?.read_time_minutes || 8}m Read
                    </p>
                  </div>
                </Link>
                <Link className="flex gap-4 group" href="#">
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary transition-colors">
                    03
                  </span>
                  <div>
                    <h5 className="font-bold text-sm group-hover:text-primary dark:group-hover:text-blue-500 transition-colors leading-snug mb-1">
                      {postsList?.[2]?.title ||
                        "Mars Habitat Prototypes: First Look"}
                    </h5>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      Space • {postsList?.[2]?.read_time_minutes || 12}m Read
                    </p>
                  </div>
                </Link>
              </div>
            </section>
            {/* <!-- AdSense Placeholder --> */}
            <section className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center min-h-62.5 text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Advertisement
              </span>
              <div className="bg-slate-200 dark:bg-slate-700 w-full h-40 rounded flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-4xl">
                  ads_click
                </span>
              </div>
            </section>
            {/* <!-- Popular Tags --> */}
            <section>
              <h4 className="text-lg font-bold mb-6">Popular Topics</h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                  href="#"
                >
                  #ArtificialIntelligence
                </Link>
                <Link
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                  href="#"
                >
                  #TeslaBot
                </Link>
                <Link
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                  href="#"
                >
                  #ColonizeMars
                </Link>
                <Link
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                  href="#"
                >
                  #CleanEnergy
                </Link>
              </div>
            </section>
            {/* <!-- Newsletter Widget --> */}
            <section className="bg-primary rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-2">Weekly Insight</h4>
              <p className="text-primary-20 text-slate-100 text-sm mb-6">
                Get the most important tech updates delivered to your inbox
                every Sunday.
              </p>
              <form className="space-y-3">
                <input
                  className="w-full bg-white/10 border-white/20 rounded-lg text-sm placeholder-white/60 focus:ring-white"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-slate-100 transition-colors">
                  Join 50k+ Readers
                </button>
              </form>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
