import React from "react";

export default function About() {
  return (
    <>
      <header className="max-w-275 mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
            The Future of Thought-Leadership in the Digital Age.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed italic">
            We bring a bold, innovative approach to modern blogging, focusing on
            integrity and the stories that shape our world.
          </p>
        </div>
      </header>
      {/* <!-- Mission & Stats --> */}
      <section className="max-w-275 mx-auto px-6 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span> Our Mission
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-800 dark:text-slate-200">
              <p>
                At NewMusk Blogs, our mission is to redefine digital journalism
                through high-fidelity reporting and uncompromising editorial
                standards. We believe in the power of accurate, bold, and
                community-driven storytelling.
              </p>
              <p>
                In an era of rapid information, we prioritize depth over speed,
                and clarity over noise. Our platform serves as a sanctuary for
                those who seek to understand the "why" behind the headlines.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest mb-2">
                Years of Reporting
              </p>
              <p className="text-4xl font-black text-primary">3+</p>
            </div>
            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest mb-2">
                Active Authors
              </p>
              <p className="text-4xl font-black text-primary">50+</p>
            </div>
            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest mb-2">
                Monthly Readers
              </p>
              <p className="text-4xl font-black text-primary">1M+</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Story Timeline --> */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-24">
        <div className="max-w-275 mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center italic">
            Our Journey
          </h2>
          <div className="relative max-w-2xl mx-auto">
            {/* <!-- Vertical Line --> */}
            <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-primary/20"></div>
            {/* <!-- Milestone 1 --> */}
            <div className="relative mb-16 pl-8 md:pl-0">
              <div className="md:flex items-center justify-between">
                <div className="md:w-5/12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">The First Spark</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    NewMusk Blogs was born in a small studio, driven by a desire
                    for better tech journalism.
                  </p>
                </div>
                <div className="absolute left-1.25 md:left-1/2 md:-ml-2.5 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                <div className="md:w-5/12 text-primary font-bold text-lg md:text-left">
                  JAN 2021
                </div>
              </div>
            </div>
            {/* <!-- Milestone 2 --> */}
            <div className="relative mb-16 pl-8 md:pl-0">
              <div className="md:flex flex-row-reverse items-center justify-between">
                <div className="md:w-5/12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Scaling the Vision</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We expanded our team to 20 writers across four continents,
                    bringing global perspectives.
                  </p>
                </div>
                <div className="absolute left-1.25 md:left-1/2 md:-ml-2.5 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                <div className="md:w-5/12 text-primary font-bold text-lg md:text-right">
                  MAR 2022
                </div>
              </div>
            </div>
            {/* <!-- Milestone 3 --> */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between">
                <div className="md:w-5/12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">A Million Minds</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Reached our first million monthly readers, solidifying our
                    place in digital media.
                  </p>
                </div>
                <div className="absolute left-1.25 md:left-1/2 md:-ml-2.5 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                <div className="md:w-5/12 text-primary font-bold text-lg md:text-left">
                  NOV 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team Section --> */}
      <section className="max-w-275 mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4 tracking-tight">
            Meet the Architects
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto uppercase tracking-widest text-xs">
            The voices behind the vision
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* <!-- Author 1 --> */}
          <div className="group">
            <div className="aspect-4/5 mb-6 overflow-hidden rounded-lg bg-slate-200">
              <img
                alt="Professional headshot of a senior editor"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Professional headshot of male senior editor with glasses"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbodm6MMC2HhoEM_J3VCsVjQGrIehyeFyOsNwQV61zC9-ipQI-JLY-LJjO3pwnDES-Zb2ueee1GOMmA3rFP5LUk4e8yQHv3i-yXRORMklnMmABFkpccdYEvs8wyzjALs9wMtR3FX5bY_GlijEc7vwkIVEKcK7SDwHyCO8EUUCQqssS-8f39DXDh2g4TGSIXT8k-6srMhrd2xmJjj6gEqyCC8ycJ89c67vkbCMFYl3bu71LwMzJKTfrYVQ5Q7ZnDLb3rPE5oVZBZbw"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
              Julian Vance
            </h3>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Editor-in-Chief
            </p>
            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Journalism is the first rough draft of history. My goal is to
              make sure that draft is as accurate as it is inspiring."
            </p>
          </div>
          {/* <!-- Author 2 --> */}
          <div className="group">
            <div className="aspect-4/5 mb-6 overflow-hidden rounded-lg bg-slate-200">
              <img
                alt="Professional headshot of a lead tech writer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Professional headshot of female lead tech writer smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxFm7PgquarynahAEgvOoD4BoMkYotS_eJsp9TYnUp9WkXpWZDCwa8ijqrPGZ7Rn_XOoVCTLVQ30peAP4XjLx22CUhNNWESRPoL02UMJRzUykYgrLhHg1oWyruDjjMx502i8hxstIor5khdyPlBRrmVXDjsylCedrPrkrWyfRvGzAPFth38O-9c4CBntO0y-Xrx4Xw-ACePrOU_DEL2E4kiEq4CgkA6UmPJWoTor53vQktuMoK46r0mzT64vQCvz1lMdkweq4-KjI"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
              Sarah Chen
            </h3>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Lead Tech Analyst
            </p>
            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Deciphering the complexities of AI and emerging tech for the
              everyday reader is my passion and my craft."
            </p>
          </div>
          {/* <!-- Author 3 --> */}
          <div className="group">
            <div className="aspect-4/5 mb-6 overflow-hidden rounded-lg bg-slate-200">
              <img
                alt="Professional headshot of a creative director"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Professional headshot of male creative director in black turtleneck"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSe06hQJKJ2I_UyY6g3klcGfBLO4V4k73tWlx9YaP6SupOLccGFM74_Y3bh4Wp4AnuQBW1BBFgXGVbL_eIVqmJLlZedjaiiKJX2e0JpuqH9npw55HhTb-dcE0ctYCoVjt3K5WDOMYNez2YynBdDffxARddTAhxEaOttmSZkenIWRAshyKvAYUSYV6MF-nOZt7W6-Jhesm4E1yT9FD_7zCts4GpFBhA9O3UevvuwHi0Kc2nwQQExft-eSzig0Ya2Ss1PQ6AbCRbCjI"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
              Marcus Thorne
            </h3>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Creative Director
            </p>
            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">
              "Visual storytelling is the bridge between data and emotion. I
              ensure every pixel serves the narrative."
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Footer / Newsletter CTA --> */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-20">
        <div className="max-w-275 mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">
              mail
            </span>
            <h2 className="text-3xl font-bold mb-4">Stay Informed.</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
              Join over 1 million readers. Get our weekly editorial digest
              delivered directly to your inbox. No fluff, just the stories that
              matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                className="flex-1 max-w-sm px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Join Newsletter
              </button>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 uppercase tracking-widest">
            <p>© 2024 NewMusk Blogs. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
