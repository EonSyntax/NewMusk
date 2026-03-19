"use server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { revalidatePath } from "next/cache";

// Toggle love reaction for a post by a user
export async function toggleLoveReaction({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  // Check if user already has a love reaction for this post
  const { data: existing, error } = await supabaseAdmin
    .from("post_reactions")
    .select("id, reaction")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  let newReaction = "";
  if (!existing || existing.reaction !== "love") {
    // Add or update to love
    newReaction = "love";
    if (existing) {
      await supabaseAdmin
        .from("post_reactions")
        .update({ reaction: "love" })
        .eq("id", existing.id);
    } else {
      await supabaseAdmin
        .from("post_reactions")
        .insert({ post_id: postId, user_id: userId, reaction: "love" });
    }
  } else {
    // Remove love (set to blank)
    await supabaseAdmin
      .from("post_reactions")
      .update({ reaction: "" })
      .eq("id", existing.id);
  }

  // Count all love reactions for this post
  const { count } = await supabaseAdmin
    .from("post_reactions")
    .select("*", { count: "exact", head: true })
    .eq("post_id", postId)
    .eq("reaction", "love");

  // Update posts table's reaction column
  await supabaseAdmin
    .from("posts")
    .update({ reaction: count || 0 })
    .eq("id", postId);

  revalidatePath(`/`); // Optionally revalidate homepage or post page
  return { loved: newReaction === "love", loveCount: count || 0 };
}

// Get love reaction for a user and post
export async function getLoveReaction({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const { data } = await supabaseAdmin
    .from("post_reactions")
    .select("reaction")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();
  return data?.reaction === "love";
}
