import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    });

    if (error)
      return NextResponse.json({ error: error.message }, { status: 400 });

    // Set sb-access-token cookie on successful login
    const response = NextResponse.json({
      success: true,
      session: data.session,
    });
    response.cookies.set("sb-access-token", data.session.access_token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      // secure: process.env.NODE_ENV === "production", // Uncomment in production
    });
    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}