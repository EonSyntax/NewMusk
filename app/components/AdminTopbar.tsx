import Link from "next/link";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { supabaseAdmin } from "@/lib/supabase/server";

interface AdminTopbarProps {
  page: string;
}

export default async function AdminTopbar({ page }: AdminTopbarProps) {
  // Get current user
  const supabase = await createReadOnlySupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch user profile with full_name, role, and avatar_url
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("full_name, role, avatar_url")
    .eq("user_id", user?.id)
    .single();

  const fullName = profile?.full_name || "User";
  const defaultAvatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc";
  const avatarUrl = profile?.avatar_url || defaultAvatarUrl;

  // Format role display
  const formatRole = (role: string | null | undefined) => {
    if (!role) return "Admin";
    if (role === "admin") return "Admin";
    if (role === "superAdmin") return "SuperAdmin";
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const userRole = formatRole(profile?.role);

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <nav className="flex text-sm font-medium text-slate-500 ml-8 md:ml-0">
          <Link href="/admin">Admin</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            {page}
          </span>
        </nav>
      </div>
      {/* Hide on mobile, show on md+ screens */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500"
            placeholder="Search data..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right">
            <p className="text-sm font-bold">{fullName}</p>
            <p className="text-xs text-primary font-semibold">{userRole}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              data-alt="Portrait of a professional administrator"
              src={avatarUrl}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
