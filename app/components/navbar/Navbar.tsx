import Link from "next/link";
import MobileHamburgerClient from "./MobileHamburgerClient";
import { cookies } from "next/headers";

export default async function Navbar() {
  // Server-side: get access token from cookies
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const isLoggedIn = !!accessToken;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/10">
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
              <div>
                {!isLoggedIn ? (
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
                  <div className="hidden lg:block">
                    <div className="relative group">
                      <button
                        className="focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
                          data-alt="User profile avatar circular thumbnail"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzOUUNHort40txaKgHoskCiy2LZ673dYRegAy_5d8m08PXuzxLboRSrDvOOfBRoY-8nw9upCpJogc93t47S8Ro2HTE0tLnI_vFnsf9RJCB8bA6kHaj3FcmnEM6g0LtLopFklkhhGsK0R4ncMEtW0gv5pxN6-pSLtXc5F9AIJFderU9MXNBW8lMmyMnfEjIrUcVl33RVwLChu2OtP5YDp75o0WzyFvbAw-JEUZUqboe7BPY2oPPWXF936UQwJ-k9QyfaDRu3JXhIGc")',
                          }}
                        ></div>
                      </button>
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all z-50">
                        <Link
                          href="/user/profile"
                          className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-t-xl transition-colors font-semibold"
                        >
                          Go to Profile
                        </Link>
                        <Link
                          href="/admin"
                          className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors font-semibold"
                        >
                          Go to Admin Page
                        </Link>
                        <form action="/api/auth/signout" method="POST">
                          <button
                            type="submit"
                            className="block w-full text-left px-5 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-b-xl transition-colors font-semibold"
                          >
                            Sign Out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
