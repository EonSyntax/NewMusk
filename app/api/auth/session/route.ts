import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase/server";

export async function GET(req: NextRequest) {
  // Get sb-access-token from cookies
  const accessToken = req.cookies.get("sb-access-token")?.value;
  if (!accessToken) {
    return NextResponse.json({ session: null });
  }
  // Get user from access token
  const { data: userData, error } =
    await supabaseAdmin.auth.getUser(accessToken);
  if (error || !userData.user) {
    return NextResponse.json({ session: null });
  }
  // Return a minimal session object (customize as needed)
  return NextResponse.json({ session: { user: userData.user } });
}
