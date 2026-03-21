import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";
import LatestPostsSection from "../components/LatestPostsSection";

export default async function Home() {
  // Fetch latest 5 featured posts
  const { data: featuredPosts, error } = await supabaseAdmin
    .from("posts")
    .select(
      `
      id,
      title,
      slug,
      description,
      cover_image,
      created_at,
      status,
      featured,
      post_categories (
        categories (
          name,
          slug
        )
      )
    `,
    )
    .eq("status", "published")
    .eq("featured", "on")
    .order("created_at", { ascending: false })
    .limit(4);

  const posts =
    featuredPosts?.map((post: any) => ({
      ...post,
      category: post.post_categories?.[0]?.categories?.name || "Uncategorized",
      categorySlug: post.post_categories?.[0]?.categories?.slug || "",
    })) || [];

  // Fetch the 10 latest posts for the latest updates section
  const { data: latestPostsData } = await supabaseAdmin
    .from("posts")
    .select(
      `
      id,
      title,
      slug,
      description,
      cover_image,
      created_at,
      profiles:author_id!inner (
        full_name,
        avatar_url
      ),
      post_categories (
        categories (
          name,
          slug
        )
      )
    `,
    )
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(10);

  const latestPosts =
    latestPostsData?.map((post: any) => ({
      ...post,
      author_name: post.profiles?.full_name || "Unknown Author",
      avatar_url: post.profiles?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc",
      category: post.post_categories?.[0]?.categories?.name || "Uncategorized",
      categorySlug: post.post_categories?.[0]?.categories?.slug || "",
      formattedDate: new Date(post.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    })) || [];

  // Get the latest post for the hero section
  const heroPost = latestPosts[0];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 pt-25 pb-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner Ad */}
      <div className="w-full h-24 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl overflow-hidden">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
          Advertisement
        </span>
        <div className="text-slate-400 text-sm italic">
          728 x 90 Leaderboard Ad Space
        </div>
      </div>

      {/* Hero Section: Top Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 group cursor-pointer">
          {heroPost ? (
            <Link href={`/${heroPost.categorySlug}/${heroPost.slug}`}>
              <div className="relative aspect-21/15 overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                  alt={heroPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={
                    heroPost.cover_image ||
                    "https://via.placeholder.com/800x300"
                  }
                />
                <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20 text-white space-y-4">
                  <span className="inline-block px-3 py-1 bg-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    Latest Story
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                    {heroPost.title}
                  </h1>
                  <p className="text-slate-200 text-sm sm:text-lg max-w-2xl line-clamp-2">
                    {heroPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      {new Date(heroPost.created_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                          <img
                            alt="Author"
                            data-alt="Male author portrait"
                            src={heroPost.avatar_url}
                          />
                        </div>
                        {heroPost.author_name}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="relative aspect-21/9 overflow-hidden rounded-xl shadow-lg bg-slate-200 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <span className="material-symbols-outlined text-6xl mb-4">
                  article
                </span>
                <p className="text-lg font-medium">No posts available</p>
              </div>
            </div>
          )}
        </div>

        {/* Trending Sidebar */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary dark:text-blue-500">
              trending_up
            </span>
            <h2 className="text-xl font-bold">Trending Now</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title:
                  "Global Markets React to Unprecedented Interest Rate Shifts",
                category: "Business",
                reads: "45k",
              },
              {
                num: "02",
                title: "Olympic 2028: New Sports Added to the Official Roster",
                category: "Sports",
                reads: "32k",
              },
              {
                num: "03",
                title: "Mars Settlement Mission Enters Final Testing Phase",
                category: "Technology",
                reads: "28k",
              },
              {
                num: "04",
                title: "The Longevity Diet: How to Add 10 Years to Your Life",
                category: "Health",
                reads: "21k",
              },
            ].map((item) => (
              <Link key={item.num} className="flex gap-4 group" href="#">
                <span className="text-3xl font-black text-primary/20 dark:text-slate-800 group-hover:text-primary transition-colors">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary/20 dark:group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 italic">
                    {item.category} • {item.reads} reads
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b-2 border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-2xl font-bold">Featured Stories</h2>
          <Link
            className="text-sm font-bold text-primary dark:text-blue-500 hover:underline"
            href="/featuredposts"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/${post.categorySlug}/${post.slug}`}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={post.cover_image || "/placeholder-image.jpg"}
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-primary dark:text-blue-500 uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500">
                No featured posts available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Main Content + Sidebar Ad */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Latest Posts */}
        <LatestPostsSection posts={latestPosts.slice(0)} />
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Sidebar Ad */}
          <div className="w-full min-h-100 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl p-6 text-center">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
              Advertisement
            </span>
            <div className="text-slate-400 text-sm mb-4">
              Vertical Sidebar Ad Space
            </div>
            <div className="w-32 h-32 bg-slate-300 rounded-lg opacity-40"></div>
          </div>

          {/* Newsletter */}
          <div className="bg-primary p-8 rounded-xl text-white space-y-4 shadow-xl shadow-primary/20">
            <h3 className="text-2xl font-bold leading-tight">
              Stay ahead of the curve.
            </h3>
            <p className="text-primary-100 text-sm">
              Join 50,000+ professionals receiving daily insights into tech,
              finance, and global politics.
            </p>
            <form className="space-y-3 pt-2">
              <input
                className="w-full px-4 py-3 bg-white rounded-lg text-slate-900 focus:ring-4 focus:ring-white/20 border-none"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors"
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-[10px] text-primary-200/60 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </aside>
      </div>

      {/* Category Highlights */}
      <section className="space-y-12">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold border-l-4 border-primary dark:border-blue-500 pl-4">
              Categories
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
              {
                name: "Sports",
                slug: "sports",
                title: "Explore Our Sports Coverage",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq38KD2h_vEKD5znZhwOlQGI4t3jcGxc4NEqUa68ETX1rXYI7NkihXw9eIVHa4qi-lxTSS0AUL-r5_W_MhtOwtCzgkMKDW8sNJnJlLUka7WrdPTbq3A-A4xUc91m8Rn_z52f0MGaHHogJkpmVEkI5-xFGSYgoXnOgqUalyKncwI85dO1GYnrZxNqZjk2I98MesNDbb5T04NkixzTcJw4YAvdqYkuHMryra-lMdJ4_G939eiexm6ZIeNGNjJpoqXlM2jJddo8lkTjo",
              },
              {
                name: "Politics",
                slug: "politics",
                title: "Explore Our Politics Discoveries",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG77aT5aO4jYvsPuB9Pg3nLqkgNYy1Unep4NjwjEGDmm3RLfdU-keu8vofCZmNjumD5XBSxpV7eOXwaqBuTAhgBlZvoYJ0zpOz-03KIPtlKo8MwinOAQkb0P2gE8MF7rrymq7chjNNwmPWf_tmiFue-c1SMqYlWJJNsMZUpD135QyumkxjQi2cwcbkC1mF86Uo4BWTkLwJSw1maajZnJnZRTfvYk7voa2TqtbAEf3nUse8zYMrxvGuHYCoTviiB7fn9_LGjq1Cd_Q",
              },
              {
                name: "Education",
                slug: "education",
                title: "Explore Our Education Insights",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcC70Vvke8789J8udWlpNPXdtYpAy8ooq6Q8V8Nb61HUQmfqgS8nqmHj6GIJ0eRP3cUQJqGJcproPCN-oum2w0yx-3AoKFpI0iQWXqGmZI-j9p82cLfc4ENlDzcxQqut2p6WnQW9Wr3kaw4BVu-lA3F3t7ML2g2SRB_HwVkWMo8iQnYXTPf0eB0rd9TYx7OZ-B8mZk_aDXVNlKUbJa4-nv_strH6RBAe5V1BdOx9plKncW-AiK5N2_kaXiEN-r5upI8vi848CPZLg",
              },
              {
                name: "Technology",
                slug: "tech",
                title: "Explore Our Technology Innovations",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG77aT5aO4jYvsPuB9Pg3nLqkgNYy1Unep4NjwjEGDmm3RLfdU-keu8vofCZmNjumD5XBSxpV7eOXwaqBuTAhgBlZvoYJ0zpOz-03KIPtlKo8MwinOAQkb0P2gE8MF7rrymq7chjNNwmPWf_tmiFue-c1SMqYlWJJNsMZUpD135QyumkxjQi2cwcbkC1mF86Uo4BWTkLwJSw1maajZnJnZRTfvYk7voa2TqtbAEf3nUse8zYMrxvGuHYCoTviiB7fn9_LGjq1Cd_Q",
              },
              {
                name: "Business",
                slug: "business",
                title: "Explore Our Business Insights",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq38KD2h_vEKD5znZhwOlQGI4t3jcGxc4NEqUa68ETX1rXYI7NkihXw9eIVHa4qi-lxTSS0AUL-r5_W_MhtOwtCzgkMKDW8sNJnJlLUka7WrdPTbq3A-A4xUc91m8Rn_z52f0MGaHHogJkpmVEkI5-xFGSYgoXnOgqUalyKncwI85dO1GYnrZxNqZjk2I98MesNDbb5T04NkixzTcJw4YAvdqYkuHMryra-lMdJ4_G939eiexm6ZIeNGNjJpoqXlM2jJddo8lkTjo",
              },
              {
                name: "Health",
                slug: "health",
                title: "Explore Our Health Discoveries",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcC70Vvke8789J8udWlpNPXdtYpAy8ooq6Q8V8Nb61HUQmfqgS8nqmHj6GIJ0eRP3cUQJqGJcproPCN-oum2w0yx-3AoKFpI0iQWXqGmZI-j9p82cLfc4ENlDzcxQqut2p6WnQW9Wr3kaw4BVu-lA3F3t7ML2g2SRB_HwVkWMo8iQnYXTPf0eB0rd9TYx7OZ-B8mZk_aDXVNlKUbJa4-nv_strH6RBAe5V1BdOx9plKncW-AiK5N2_kaXiEN-r5upI8vi848CPZLg",
              },
              {
                name: "Entertainment",
                slug: "entertainment",
                title: "Explore Our Entertainment World",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq38KD2h_vEKD5znZhwOlQGI4t3jcGxc4NEqUa68ETX1rXYI7NkihXw9eIVHa4qi-lxTSS0AUL-r5_W_MhtOwtCzgkMKDW8sNJnJlLUka7WrdPTbq3A-A4xUc91m8Rn_z52f0MGaHHogJkpmVEkI5-xFGSYgoXnOgqUalyKncwI85dO1GYnrZxNqZjk2I98MesNDbb5T04NkixzTcJw4YAvdqYkuHMryra-lMdJ4_G939eiexm6ZIeNGNjJpoqXlM2jJddo8lkTjo",
              },
            ].map((card, index) => (
              <Link
                key={index}
                href={`/${card.slug}`}
                className="shrink-0 w-120 group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-4/3">
                  <img
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={card.src}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 text-white">
                    <h4 className="font-bold leading-snug">{card.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <div className="w-full h-32 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
          Advertisement
        </span>
        <div className="text-slate-400 text-sm italic">
          Large Horizontal Ad Space
        </div>
      </div>
    </main>
    </div>
    
  );
}
