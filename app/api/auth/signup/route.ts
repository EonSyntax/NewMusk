import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase/server";

export async function POST(req: Request) {
  try {
    const { email, password, full_name } = await req.json();
    if (!email || !password || !full_name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    // Create user in Supabase Auth
    const { data: authUser, error: authError } =
      await supabaseAdmin.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name,
          },
        },
      });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .insert({
        user_id: authUser.user?.id,
        full_name,
        role: "normalUser", // default
      });

    if (profileError) {
      return NextResponse.json(
        { error: profileError.message },
        { status: 400 },
      );
    }

    return NextResponse.json({
      message: "Signup successful, confirm in your email to continue",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 },
    );
  }
}
