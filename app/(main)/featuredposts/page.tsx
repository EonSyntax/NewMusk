import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";

export default async function FeaturedPosts() {
  // Fetch all featured posts
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
      read_time_minutes,
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
    .eq("featured", "on")
    .order("created_at", { ascending: false });

  const posts =
    featuredPosts?.map((post: any) => ({
      ...post,
      category: post.post_categories?.[0]?.categories?.name || "Uncategorized",
      categorySlug: post.post_categories?.[0]?.categories?.slug || "",
      author_name: post.profiles?.full_name || "Unknown Author",
      author_avatar: post.profiles?.avatar_url || null,
    })) || [];

  const gridPosts = posts.slice(1);

  return (
    <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
      <div className="mb-16">
        <div className="flex flex-col items-stretch justify-start rounded-2xl md:flex-row md:items-stretch overflow-hidden shadow-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <div
            className="w-full md:w-3/5 bg-center bg-no-repeat aspect-video bg-cover transition-transform hover:scale-105 duration-700"
            data-alt="High-tech stadium lighting during night match"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCQEJHNZD_pDXR19-7ujshMIHUN_cAgX57Uhw77ba7uqpb0UM0Y4WF0Uqxzh8494lpD6wOvxdEdr1bViKo-n9Van66U0Gv-FsY04p6U6Dh2AKAG603NfQ1byYan1eaZXwWOAl3uJtOTIi9geDbFOLdF-3RMqC23AO4Rh3EQzBfg6eNwpTylwTjRTtilkjFM9OrGZ6l847nDJ5Lozk6jlHEeH-aTViI8VHYKIMV9Ua1PCSlVD5fwjqBvg_Ruq8zY459zQFuBPjh0eA")`,
            }}
          ></div>
          <div className="flex w-full md:w-2/5 flex-col justify-center gap-4 p-8 lg:p-12 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
                FEATURED STORIES
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold leading-tight tracking-tight">
              Our Picks For You
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
              Curated by our editorial team, these featured articles represent
              the most compelling and insightful content from across our
              platform, carefully selected to provide our readers with
              exceptional depth and perspective.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <img
                  alt="Author Alex Rivera"
                  className="w-10 h-10 rounded-full border-2 border-primary/20"
                  data-alt="Author profile picture of Alex Rivera"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlxPCfplK36vJ-c09ETZ7_mPWeBTjVxFz2w0bHEdsTyPxgohaTSJArimIzMKeZewurDsAiUyCfivnV-hS-m2HgfEO9xyBo27EFV0NI9CPH8Hu4iGX11_2p6KdzZP0zJBJ_I_gVK6Iv5mtuCbmmMjhVAr55j06aAZ7LAh2t2XAncStCDbL_-br7CTK73AT6H1846lebNWEkq-eBPgYXgsXgWDMb2B2J9hsNhF8tVzgN-T80uVtAWtzz44HpQhNJcH1T_B_QIDJL3xI"
                />
                <div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                    Alex Rivera
                  </p>
                  <p className="text-slate-500 text-xs">Biomechanics Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl font-bold tracking-tight">Featured Stories</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {gridPosts.length > 0 ? (
          gridPosts.map((post) => (
            <Link
              key={post.id}
              href={`/${post.categorySlug}/${post.slug}`}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="aspect-16/10 overflow-hidden rounded-2xl">
                <div
                  className="w-full h-full bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url("${post.cover_image || "/placeholder-image.jpg"}")`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h5 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h5>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-400 text-xs font-medium">
                    {post.read_time_minutes
                      ? `${post.read_time_minutes} min read`
                      : "Read time unavailable"}
                  </span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-slate-500">
              No additional featured posts available.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
