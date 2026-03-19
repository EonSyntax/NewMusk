import { NextRequest, NextResponse } from "next/server";
import { toggleLoveReaction } from "@/app/(main)/[category]/[slug]/actions";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const { postId, userId } = await req.json();
  // Optionally, validate userId with session
  const result = await toggleLoveReaction({ postId, userId });
  return NextResponse.json(result);
}
