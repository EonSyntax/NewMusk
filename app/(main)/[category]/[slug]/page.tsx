import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";
import { getLoveReaction } from "./actions";
import FavoriteButtonClient from "@/app/components/FavoriteButtonClient";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";

type Params = {
  category: string;
  slug: string;
};

export default async function BlogDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;

  // console.log("Category:", category);
  // console.log("Slug:", slug);

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select(
      `
    id,
    title,
    slug,
    description,
    content,
    cover_image,
    created_at,
    updated_at,
    tags,
    profiles!author_id (
      full_name, avatar_url
    ),
    post_categories!inner (
      categories!inner (
        name,
        slug
      )
    )
  `,
    )
    .eq("slug", slug)
    .eq("status", "published")
    .eq("post_categories.categories.slug", category)
    .single();

  const post = data
    ? {
        ...data,
        categories: data.post_categories?.map((p: any) => p.categories) || [],
      }
    : null;

  // console.log("Post:", post);
  // console.log("Error:", error);

  if (error || !post) {
    notFound();
  }

  // Get current user
  const supabase = await createReadOnlySupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch logged-in user's avatar_url
  let userAvatarUrl: string | null = null;
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("avatar_url")
      .eq("user_id", user.id)
      .single();
    userAvatarUrl =
      profile?.avatar_url ||
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc";
  }

  // --- VIEW TRACKING LOGIC ---
  // Get IP address (for SSR, you may need to pass from middleware or headers)
  let ipAddress = null;
  if (!user) {
    // Try to get IP from headers if available (SSR only, else leave null)
    // ipAddress = headers().get('x-forwarded-for') || null;
    // For now, leave as null for anonymous
  }

  // Check if a view exists in the last hour for this user or IP
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  let viewFilter: Record<string, any> = { post_id: post.id };
  if (user) {
    viewFilter.user_id = user.id;
  } else if (ipAddress) {
    viewFilter.ip_address = ipAddress;
  }
  const { count: recentViewCount } = await supabaseAdmin
    .from("post_views")
    .select("*", { count: "exact", head: true })
    .match(viewFilter)
    .gte("created_at", oneHourAgo);

  if (!recentViewCount || recentViewCount === 0) {
    // Insert new view
    await supabaseAdmin.from("post_views").insert([
      {
        post_id: post.id,
        user_id: user ? user.id : null,
        ip_address: ipAddress,
      },
    ]);
    // Increment views in posts table
    await supabaseAdmin.rpc("increment_post_views", { postid: post.id });
  }

  // Get love state for this user and post
  let initialLoved = false;
  if (user) {
    initialLoved = await getLoveReaction({ postId: post.id, userId: user.id });
  }
  // Get love count for this post
  const { count: initialLoveCount } = await supabaseAdmin
    .from("post_reactions")
    .select("*", { count: "exact", head: true })
    .eq("post_id", post.id)
    .eq("reaction", "love");

  return (
    <main className="w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* <!-- Hero Section --> */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          data-alt={`${post.title} cover image`}
          src={post.cover_image || "/placeholder-cover.jpg"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-6 pb-16 w-full text-white">
          <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-6 uppercase tracking-widest">
            {post.categories?.[0]?.name || "Uncategorized"}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                <img
                  alt="Author"
                  data-alt="Male author portrait"
                  src={
                    (post.profiles as any)?.avatar_url ||
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc"
                  }
                />
              </div>
              <span className="text-sm">
                {(post.profiles as any)?.full_name || "Elon Musk Jr."}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                calendar_today
              </span>
              <span className="text-sm">
                {new Date(
                  post.updated_at || post.created_at,
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                schedule
              </span>
              <span className="text-sm">12 min read</span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content Layout --> */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        {/* <!-- Left Sidebar: Engagement --> */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
          <div className="flex flex-col items-center gap-8">
            {user && (
              <FavoriteButtonClient
                postId={post.id}
                userId={user.id}
                initialLoved={initialLoved}
                initialLoveCount={initialLoveCount || 0}
              />
            )}
            {!user && (
              <>
                {(() => {
                  const DisabledReactionButton =
                    require("@/app/components/DisabledReactionButton").default;
                  return (
                    <DisabledReactionButton
                      count={initialLoveCount || 0}
                      direction="col"
                    />
                  );
                })()}
              </>
            )}
            <div className="w-px h-12 bg-slate-400"></div>
            <div className="flex flex-col gap-4">
              {/* Social Share Buttons */}
              {(() => {
                const baseUrl =
                  process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
                const postUrl = `${baseUrl}/${category}/${slug}`;
                const shareText = `${post.title} - ${post.description}`;
                // Dynamically import the client share button
                const ShareButtonClient =
                  require("@/app/components/ShareButtonClient").default;
                return (
                  <>
                    {/* Twitter (X) */}
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </Link>
                    {/* WhatsApp */}
                    <Link
                      href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + postUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#0fb500] hover:text-white transition-all"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" />
                        <path
                          fill="currentColor"
                          d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        />
                      </svg>
                    </Link>
                    {/* Facebook */}
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                      </svg>
                    </Link>
                    {/* Web Share API (Generic) as client component */}
                    <ShareButtonClient
                      title={post.title}
                      description={post.description}
                      url={postUrl}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#46025a] hover:text-white transition-all"
                    />
                  </>
                );
              })()}
            </div>
          </div>
        </aside>
        {/* <!-- Main Content Area --> */}
        <article className="lg:col-span-8 prose prose-slate max-w-none">
          <div
            className="space-y-8 text-gray-950 leading-relaxed text-lg font-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* <!-- Engagement Bar (Mobile) --> */}
          <div className="lg:hidden flex items-center justify-between py-8 border-t border-b border-slate-200 my-8">
            <div className="flex items-center gap-4">
              {user && (
                <FavoriteButtonClient
                  postId={post.id}
                  userId={user.id}
                  initialLoved={initialLoved}
                  initialLoveCount={initialLoveCount || 0}
                />
              )}
              {!user && (
                <>
                  {(() => {
                    const DisabledReactionButton =
                      require("@/app/components/DisabledReactionButton").default;
                    return (
                      <DisabledReactionButton count={initialLoveCount || 0} />
                    );
                  })()}
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400">SHARE</span>
              <div className="flex gap-2">
                {(() => {
                  const baseUrl =
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://yourdomain.com";
                  const postUrl = `${baseUrl}/${category}/${slug}`;
                  const shareText = `${post.title} - ${post.description}`;
                  const ShareButtonClient =
                    require("@/app/components/ShareButtonClient").default;
                  return (
                    <>
                      {/* Twitter (X) */}
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                      </Link>
                      {/* WhatsApp */}
                      <Link
                        href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + postUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#0fb500] hover:text-white transition-all"
                      >
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" />
                          <path
                            fill="currentColor"
                            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                          />
                        </svg>
                      </Link>
                      {/* Facebook */}
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white transition-all"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                      </Link>
                      {/* Web Share API (Generic) as client component */}
                      <ShareButtonClient
                        title={post.title}
                        description={post.description}
                        url={postUrl}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#46025a] hover:text-white transition-all"
                      />
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* <!-- Tags Section --> */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <section className="mt-16">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string, idx: number) => (
                  <span
                    key={tag + idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* <!-- Comments Section --> */}
          <section className="mt-20 border-t border-slate-200 pt-16">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-bold text-gray-950">
                Discussion (24)
              </h3>
              {/* <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <span>Sort by:</span>
                <button className="flex items-center gap-1 text-primary">
                  Newest{" "}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
              </div> */}
            </div>
            {/* <!-- Comment Input --> */}
            <div className="mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Avatar of a female user"
                    src={
                      userAvatarUrl ??
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc"
                    }
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <textarea
                    className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary bg-white text-gray-950 placeholder:text-slate-400 p-4"
                    placeholder="Join the discussion..."
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Threaded Comments --> */}
            <div className="space-y-8">
              {/* <!-- Single Comment --> */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Avatar of a female user"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuMTByTt6BUFm7eAyftZCZgMhySC2YPTnYs8QjwmCp0JVYMoT-1PGU9wHZP51x-j-Q9Px3oMkf6aK9efjqr6PB9yLvAe6mhAXnafLuZqd5I9JyIzLv8X745DdU8M0k1ydSBCx-D5RVdr1oyP2cDTuyrqcErtKDxl_KUjDMQhTojReNaBG2Vst67kLoR8J_xSbBTpn5vJXRwwv76bDlNj0Xzot8BAzHm1cNfSQ9xqwkblBci4vj2dPqt0hj_gAT3Uk-Cc7DYFEyYmkr"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-950">
                      Sarah Miller
                    </span>
                    <span className="text-xs text-slate-400">
                      • 2 hours ago
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">
                    Excellent breakdown. The section on event-driven
                    architecture is particularly relevant as we move away from
                    static databases toward real-time streams.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        thumb_up
                      </span>{" "}
                      12
                    </button>
                    <button className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-wider">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Single Comment (Nested) --> */}
              <div className="ml-14 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Avatar of a male user"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDRBD0DbTadD0VZ8_6kRnT5L75yA871my1PZiw3ymEhpJf9lAg8RQK45ppJ4WCQwDwkSd7Yf-21Z52tILJGjA2A3EUb520UaSW_XIJX42pHZffKneFVVRQv8XKtYdZn_pHbP113On_Vk9hf3XIOdXyzx_rBc1PqyAkizZgR9gTF-IGm8Vepo3yIAIiQ51ijgDPW1DbK_J_SoDKzaYuB0AyQuUDNDD3MnhmyRsuKhXTOtu-Voz37CP_8d-TVV2CTEJHnPY0JhyrYzyX"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-950">
                      Marcus Holloway
                    </span>
                    <span className="text-xs text-slate-400">• 1 hour ago</span>
                  </div>
                  <p className="text-slate-600 mb-3">
                    Agreed, Sarah. I'm curious if David has any thoughts on the
                    latency trade-offs for small-scale implementations?
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined text-sm">
                        thumb_up
                      </span>{" "}
                      3
                    </button>
                    <button className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-wider">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 mt-12 text-sm font-bold text-primary border-2 border-dashed border-slate-200 rounded-xl hover:bg-slate-50 transition-colors uppercase tracking-widest">
              Load 14 more comments
            </button>
          </section>
        </article>
        {/* <!-- Right Sidebar: Related --> */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-12">
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
              More Insights
            </h5>
            <div className="space-y-8">
              <a className="group block" href="#">
                <p className="text-xs font-bold text-primary uppercase mb-2">
                  Strategy
                </p>
                <h6 className="text-base font-bold text-gray-950 group-hover:text-primary transition-colors leading-tight">
                  The ROI of API-First Development
                </h6>
              </a>
              <a className="group block" href="#">
                <p className="text-xs font-bold text-primary uppercase mb-2">
                  Cloud
                </p>
                <h6 className="text-base font-bold text-gray-950 group-hover:text-primary transition-colors leading-tight">
                  Hybrid Integration Models: A 2024 Guide
                </h6>
              </a>
              <a className="group block" href="#">
                <p className="text-xs font-bold text-primary uppercase mb-2">
                  Technical
                </p>
                <h6 className="text-base font-bold text-gray-950 group-hover:text-primary transition-colors leading-tight">
                  Securing Endpoints in Global Networks
                </h6>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-white">
            <h5 className="text-lg font-bold mb-4">Stay Integrated</h5>
            <p className="text-sm text-slate-400 mb-6">
              Get weekly insights on digital transformation and architecture
              directly in your inbox.
            </p>
            <input
              className="w-full bg-white/10 border-none rounded-lg text-sm mb-4 placeholder:text-slate-500"
              placeholder="Email Address"
              type="email"
            />
            <button className="w-full bg-primary text-gray-950 font-bold py-2 rounded-lg text-sm hover:shadow-[0_0_15px_rgba(186,217,85,0.4)] transition-all">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { category, slug } = await params;
  const { data: post } = await supabaseAdmin
    .from("posts")
    .select(
      `
      title,
      description,
      cover_image,
      profiles!author_id ( full_name )
    `,
    )
    .eq("slug", slug)
    .single();

  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  const postUrl = `${baseUrl}/${category}/${slug}`;

  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      images: [
        {
          url: post.cover_image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover_image],
    },
  };
}
