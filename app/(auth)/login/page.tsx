"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.error) alert(data.error);
    else alert("Login successful!");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-grotesk text-slate-900 dark:text-slate-100 min-h-screen relative">
      {/* Floating Go to Home Button */}
      <Link
        href="/"
        className="fixed top-6 right-6 z-50 bg-primary text-white px-5 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all font-bold flex items-center gap-1"
        style={{ textDecoration: "none" }}
        aria-label="Go to Home"
      >
        <span className="material-symbols-outlined text-lg">home</span>
        Home
      </Link>
      <div className="flex min-h-screen">
        {/* <!-- Left Side: Hero Image (Hidden on mobile) --> */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 z-10 bg-linear-to-br from-primary/80 to-background-dark/90"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            data-alt="Futuristic digital neural network glowing in space"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKKWRwXXb7sS_qIRqdlhYOfmWrWRsBvERaANoJuldPGbaFdvarPQQq6AgVf9X3Nt1d0fwHdJbtGjf3vik1rNsH9fVuKkVrs58Bq30kVMppFueiLIZU0UL7S0U4iyR2yVK9GQ51ePGt3rQHaffQfwIQ9-TL2h2_hWbktWY3EVftzcRqUBnw5dhS6ET4EUz2scdZf8a1ZDnzTqoPCz3HcX98eJUwQU_Frc7CuusKydwKDiXBXiNgE7k7UwoekuRNamOSWudMsyKNjiQ')",
              backgroundPosition: "center -60px",
            }}
          ></div>
          <div className="relative z-20 flex flex-col justify-center px-20 text-white">
            <div className="flex justify-center">
              <img
                className="h-16 w-auto"
                alt="NewMusk Blogs logo"
                src="/images/newmusk.png"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-5xl font-black leading-tight mb-4">
              The future of blogging starts here.
            </h1>
            <p className="text-xl text-slate-200 font-light max-w-xl">
              Join the world's most innovative community of entertainment,
              sports, business, health, politics, tech and education
              enthusiasts.
            </p>
          </div>
        </div>
        {/* <!-- Right Side: Login Form --> */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-110 space-y-8">
            {/* <!-- Mobile Logo (Only visible on small screens) --> */}
            <div className="lg:hidden flex justify-center mb-2">
              <div className="flex justify-center">
                <img
                  className="h-16 w-auto"
                  alt="NewMusk Blogs logo"
                  src="/images/newmusk.png"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Welcome back
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Please enter your details to sign in.
              </p>
            </div>
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background-light dark:bg-background-dark text-slate-500 uppercase tracking-wider font-semibold text-xs">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-3 group">
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Google
                </span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-3 group">
                <svg
                  className="size-5 text-slate-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Twitter
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    autoComplete="email"
                    className="appearance-none block w-full px-4 py-3.5 border border-slate-200 dark:border-slate-800 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="current-password"
                      className="appearance-none block w-full px-4 py-3.5 border border-slate-200 dark:border-slate-800 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="ml-2 block text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    className="font-semibold text-primary hover:text-primary/80 transition-colors"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-lg shadow-primary/20"
                  type="submit"
                >
                  Sign in to your account
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{" "}
              <a
                className="font-bold text-primary hover:text-primary/80 transition-colors"
                href="/signup"
              >
                Join the future
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
