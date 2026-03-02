import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password, full_name } = await req.json();

    // Basic validation
    if (!email || !password || !full_name) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }


    // 1️⃣ Create auth user (this sends email confirmation)
    const { data: authUser, error:authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: { full_name },
    });

    if (authError) {
  console.error("SIGNUP ERROR FULL:", authError);
  return NextResponse.json(
    {
      error: authError.message,
      code: authError.code,
      status: authError.status,
    },
    { status: 400 }
  );
}

    const userId = authUser.user?.id;
    if (!userId) {
      return NextResponse.json(
        { error: "User creation failed." },
        { status: 400 }
      );
    }

    // 2️⃣ Create profile (service role)
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .insert({
        user_id: authUser.user.id,            // MUST match auth.users.id
        full_name,
        role: "normalUser",
      });

    if (profileError) {
  console.error("PROFILE ERROR FULL:", profileError);
  return NextResponse.json(
    { error: profileError.message },
    { status: 400 }
  );
}

    return NextResponse.json({
      message: "Signup successful. Please check your email to confirm.",
    });
  } catch (err: any) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}