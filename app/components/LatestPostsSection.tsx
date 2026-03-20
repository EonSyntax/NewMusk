"use client";
import Link from "next/link";
import { useState } from "react";

interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string | null;
  created_at: string;
  author_name: string;
  category: string;
  categorySlug: string;
  formattedDate: string;
}

export default function LatestPostsSection({ posts }: { posts: Post[] }) {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? posts : posts.slice(0, 5);
  const hasMorePosts = posts.length > 5;

  return (
    <div className="lg:col-span-8 space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Latest Updates</h2>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>
      <div className="space-y-6">
        {displayedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.categorySlug}/${post.slug}`}
            className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-full sm:w-48 h-32 shrink-0 bg-slate-200 rounded-lg overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={post.cover_image || "/placeholder-image.jpg"}
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="text-primary">{post.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{post.formattedDate}</span>
              </div>
              <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-2">
                {post.description}
              </p>
            </div>
          </Link>
        ))}

        {/* Loading Skeleton State */}
        <div className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-100 rounded-xl opacity-60">
          <div className="w-full sm:w-48 h-32 shrink-0 bg-slate-200 rounded-lg skeleton"></div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-16 h-3 bg-slate-200 rounded skeleton"></div>
              <div className="w-24 h-3 bg-slate-200 rounded skeleton"></div>
            </div>
            <div className="w-3/4 h-5 bg-slate-200 rounded skeleton"></div>
            <div className="w-full h-4 bg-slate-200 rounded skeleton"></div>
            <div className="w-1/2 h-4 bg-slate-200 rounded skeleton"></div>
          </div>
        </div>
      </div>
      {hasMorePosts && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors"
        >
          Load More Stories
        </button>
      )}
    </div>
  );
}
