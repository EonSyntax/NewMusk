import { supabaseAdmin } from "@/lib/supabase/server";

export default async function PostCountBadge({
  categoryId,
}: {
  categoryId: string;
}) {
  const { count } = await supabaseAdmin
    .from("post_categories")
    .select("*", { count: "exact", head: true })
    .eq("category_id", categoryId);

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
      {count ?? 0} posts
    </span>
  );
}