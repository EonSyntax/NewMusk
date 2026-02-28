import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Only protect /admin and subroutes
  if (pathname.startsWith("/admin")) {
    const accessToken = req.cookies.get("sb-access-token")?.value;
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    // Get user
    const { data: userData, error } = await supabase.auth.getUser(accessToken);
    if (error || !userData.user) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    // Get profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", userData.user.id)
      .single();
    if (profileError || !profile) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (!["admin", "superAdmin"].includes(profile.role)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
