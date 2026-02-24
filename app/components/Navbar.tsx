import Link from "next/link";
import React from "react";

// Navbar Component
export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="">
            <img src="/images/newmusk.png" alt="NewMusk Blogs Logo" className="h-12 w-full" />
          </Link>
          {/* Categories */}
          <nav className="hidden lg:flex space-x-6">
            {[
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
            <button className="p-2 text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login" className="px-4 py-2 text-sm font-semibold hover:bg-slate-100 rounded-lg transition-colors">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
