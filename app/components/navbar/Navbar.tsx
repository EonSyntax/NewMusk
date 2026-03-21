import Link from "next/link";
import MobileHamburgerClient from "./MobileHamburgerClient";
import UserDropdownClient from "./UserDropdownClient";
import { createReadOnlySupabase } from "@/lib/supabase/layoutServer";
import { ThemeSwitcher } from "../theme/theme-switcher";

export default async function Navbar() {
  const supabase = await createReadOnlySupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role: string | null = null;
  let avatarUrl: string | null = null;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, avatar_url")
      .eq("user_id", user.id)
      .single();

    role = profile?.role ?? null;
    avatarUrl = profile?.avatar_url ?? null;
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-white/50 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="">
              <img
                src="/images/newmusk.png"
                alt="NewMusk Blogs Logo"
                className="h-12 w-full"
              />
            </Link>
            {/* Categories */}
            <nav className="hidden lg:flex space-x-6">
              {/* ...existing code... */}
              {[
                { name: "Home", href: "/" },
                { name: "Sports", href: "/sports" },
                { name: "Politics", href: "/politics" },
                { name: "Education", href: "/education" },
                { name: "Technology", href: "/tech" },
                { name: "Business", href: "/business" },
                { name: "Health", href: "/health" },
                { name: "Entertainment", href: "/entertainment" },
              ].map((category) => (
                <Link
                  key={category.name}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href={category.href}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Hamburger for mobile (client) */}
              <button className="p-2 text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <MobileHamburgerClient />
              <div className="flex items-center justify-center">
                {!user ? (
                  <div className="hidden sm:flex items-center gap-2">
                    <Link
                      href="/login"
                      className="px-4 py-2 text-sm font-semibold hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <UserDropdownClient role={role} avatarUrl={avatarUrl} />
                )}
                <div className="hidden lg:block">
                <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
