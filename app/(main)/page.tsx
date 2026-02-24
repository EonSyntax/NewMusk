
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header Banner Ad */}
      <div className="w-full h-24 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl overflow-hidden">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
          Advertisement
        </span>
        <div className="text-slate-400 text-sm italic">
          728 x 90 Leaderboard Ad Space
        </div>
      </div>

      {/* Hero Section: Top Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 group cursor-pointer">
          <div className="relative aspect-21/9 overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img
              alt="Top Story"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-2dL3PiLaWSbAdr2SlnCfR7U8Ccz3lQdvcEQtYXNVBm8IZlPRklDbWwYZPN83k3ypVDBXhlzMGKNYT9jYJOc3Jegh6EeX4JSqPijPFY07M92KGjyRNi42I1oHBXIJk4YLjy5NvWKrlOmpW2CHIl1TNuIYSVteThAmpbal3Zjkihc8XA6lMTaiuhAh77wjgnDcqSSe6BHL3-XqDXiCCgWlgjYV6prP8fC5vnzumB1lvt8lYEZm2QfIAUZQ92g4HQjV9QpkPKLkzs"
            />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20 text-white space-y-4">
              <span className="inline-block px-3 py-1 bg-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Must Read
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                The Quantum Leap: Silicon Valley's Next Big Bet on AGI
              </h1>
              <p className="text-slate-200 text-sm sm:text-lg max-w-2xl line-clamp-2">
                Inside the top-secret labs where researchers are bridging the
                gap between artificial intelligence and human cognition,
                potentially rewriting the rules of modern physics.
              </p>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  2 hours ago
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    person
                  </span>
                  Elena Vance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Sidebar */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">
              trending_up
            </span>
            <h2 className="text-xl font-bold">Trending Now</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title:
                  "Global Markets React to Unprecedented Interest Rate Shifts",
                category: "Business",
                reads: "45k",
              },
              {
                num: "02",
                title: "Olympic 2028: New Sports Added to the Official Roster",
                category: "Sports",
                reads: "32k",
              },
              {
                num: "03",
                title: "Mars Settlement Mission Enters Final Testing Phase",
                category: "Technology",
                reads: "28k",
              },
              {
                num: "04",
                title: "The Longevity Diet: How to Add 10 Years to Your Life",
                category: "Health",
                reads: "21k",
              },
            ].map((item) => (
              <a key={item.num} className="flex gap-4 group" href="#">
                <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary/20 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 italic">
                    {item.category} • {item.reads} reads
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2">
          <h2 className="text-2xl font-bold">Featured Stories</h2>
          <a
            className="text-sm font-bold text-primary hover:underline"
            href="#"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              alt: "Digital charts and stock market data on a dark screen",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3wzgJxGGdBXpLJVeA9voKkYQgevyU0-mrUpBf1lBu9A_ISDR-1NsYQUEKR3HthCY0HsryAvdXT1n60K-83B3lSzZTryOs1FBdruH9r8-4a_S1qDAhVpxDM978ck-yYPx8rAYtJO8Uh_8Bo7UvND3lnoK8ht5wqDSkVcMDEAl9-_ebVgfWO86zGpAmGVSIigh2TJ9OPpRw74TGkqrbPN0RBtO90l6HWl_JOofHWvJDZc5C6Y6jSRU3sPBAT1lk2AMyWyMh0LtdkC8",
              category: "Business",
              title: "The Future of Decentralized Finance",
              description:
                "Exploring how blockchain is disrupting traditional banking ecosystems globally.",
            },
            {
              alt: "Doctor holding a futuristic transparent medical tablet",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_3hImwVZAV3oD94gpVTxund9zV4vflaeElocpwyNkMSuYM-PWW-hBigqcmgfvAfK-H3aqtwe-sTxezLYX6PcViIwdfy-D0oj8ho8qHOQG-yxtOEpPPE7o6Iev4rUhfHU240OIoJo614cN6HHd6Iai6z60IYwvVHNVfLmqQa0-fbnQYCJmOyyag7cp8c_mq2OSZ8WETZykENNlzcU24gpKPq2WsDcEo4lA_aVsZtm-bslxXd3L5Ymxrdm9EdYI41uVQv06pX__E5Q",
              category: "Health",
              title: "AI Diagnostics: A New Era of Care",
              description:
                "Medical professionals are now using neural networks for early cancer detection.",
            },
            {
              alt: "Athlete running on an urban street at sunset",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsJ5PnK-6M1zswB_cvKi1a0dsb8toJ5FUsbY_iiCMc7DrQXKVz4CukGZtGUGE012bpunU5KzGhUYRrxCE0vAQcw24-EEf1aHSJuGNwvRAkwsuVAQ_Ofs_6OLL4ZJLm2zya6TGGGZKIYWIcgXreLpWAREPs-ITP2kOkksJN9q5_QF3g_B07C8-eZqXlvVdN5tyjiavkaL26cASPuNmClmNcuZa_2IKx6lIz9Uhd8ld2l4enYZd1QC3higTB6o0bzMcUHjf56JoWQvQ",
              category: "Sports",
              title: "Wearable Tech in Professional Athletics",
              description:
                "How data-driven coaching is breaking world records across disciplines.",
            },
            {
              alt: "Modern university classroom with large windows and bright lights",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFjA9XBfx-XUm-RIA_PPLd0vkT0vUJhsx5sdLGC8bN6fi8HF599SoOR12hNszkjXc0vQNdmUH1vpyGAIuVbD3uG1dBsV4eDrhMY_9EqmTgymJ2QvhcHSG4sWPl8_3F1tU9hxkl2i4XTOjlz5wxDIcHM2cX7oUWBuYdiWtHOuy3y9SeHyr8j9Et5Q0JiVIwcZ98Euy3k9sFhSRT3zPKw6_5gFi5fyaQX6miL1yesiFRXfASLircQ9inaBKSZW7EL3DtS12dWBVSC18",
              category: "Education",
              title: "Reimagining Higher Ed in 2026",
              description:
                "Hybrid learning environments are becoming the standard for top universities.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={card.src}
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase">
                  {card.category}
                </span>
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content + Sidebar Ad */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Latest Posts */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Latest Updates</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                category: "POLITICS",
                date: "MAY 14, 2026",
                title:
                  "Legislative Changes Predicted to Affect Freelance Workforce",
                description:
                  "New labor laws are currently under review in the senate that could redefine employment status for millions.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2UYPsjCXU5oHjn1Arxob6tA_Bc_q_HGhd7LlWd9OtJrIIC1hk_lTCgM9HpeZ2xxmZwjtKuyfIhRWZBZmoNyJUfP-HRvHd1yYdb_cRpStezNiXnARVz53oSMKnBKrthHLoo7eZLiK9Tpfy7B16lGRFfdOm1njtiJjA_sz8GnJDmb7kfV7ClZFxkC5mKTZvfHTd6LScGysUvcaso1US8Qye-L4xCvrhaY33SMlsynYILwhKTom45YFQkK0YRzz0fzvvsbseh9aT0U",
              },
              {
                category: "HEALTH",
                date: "MAY 13, 2026",
                title: "Groundbreaking Research in Regenerative Medicine",
                description:
                  "Scientists have successfully repaired spinal tissues using synthetic scaffolding techniques.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD69ridq4JFXGdViuTfpYLfF89BhpUQpN-zIxtgaJNMPZvvEzR0IntnIL3XeXPSNPO2JQbCRVZzvbtOtvD0g5CTC48zCdeRxmOhY9G_JBaqy3T1zLnsKrvd0aKCCHx83gJhQePy7YfFSRu3dUpaKa8jdYVPaaQ-Qlongid4d8msoN1Q1GX-wn1-YZb9MY3qkngc-em-sY6ZVR-zgwmPoKEdQTIxAYbGrc7Mm2iuvIfkbA6eAVpwwpJgfW9Aj6F6zUSDLgE76jjr42s",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-full sm:w-48 h-32 shrink-0 bg-slate-200 rounded-lg overflow-hidden">
                  <img
                    alt="Latest"
                    className="w-full h-full object-cover"
                    src={post.img}
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="text-primary">{post.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Loading Skeleton State */}
            <div className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-100 rounded-xl opacity-60">
              <div className="w-full sm:w-48 h-32 shrink-0 bg-slate-200 rounded-lg skeleton"></div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-slate-200 rounded skeleton"></div>
                  <div className="w-24 h-3 bg-slate-200 rounded skeleton"></div>
                </div>
                <div className="w-3/4 h-5 bg-slate-200 rounded skeleton"></div>
                <div className="w-full h-4 bg-slate-200 rounded skeleton"></div>
                <div className="w-1/2 h-4 bg-slate-200 rounded skeleton"></div>
              </div>
            </div>
          </div>
          <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors">
            Load More Stories
          </button>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Sidebar Ad */}
          <div className="w-full min-h-100 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl p-6 text-center">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
              Advertisement
            </span>
            <div className="text-slate-400 text-sm mb-4">
              Vertical Sidebar Ad Space
            </div>
            <div className="w-32 h-32 bg-slate-300 rounded-lg opacity-40"></div>
          </div>

          {/* Newsletter */}
          <div className="bg-primary p-8 rounded-xl text-white space-y-4 shadow-xl shadow-primary/20">
            <h3 className="text-2xl font-bold leading-tight">
              Stay ahead of the curve.
            </h3>
            <p className="text-primary-100 text-sm">
              Join 50,000+ professionals receiving daily insights into tech,
              finance, and global politics.
            </p>
            <form className="space-y-3 pt-2">
              <input
                className="w-full px-4 py-3 bg-white rounded-lg text-slate-900 focus:ring-4 focus:ring-white/20 border-none"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors"
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-[10px] text-primary-200/60 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </aside>
      </div>

      {/* Category Highlights */}
      <section className="space-y-12">
        {/* Tech Row */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Technology
            </h2>
            <a
              className="text-sm font-bold text-primary group flex items-center gap-1"
              href="#"
            >
              Explore Tech
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                alt: "Open laptop on a desk showing code",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq38KD2h_vEKD5znZhwOlQGI4t3jcGxc4NEqUa68ETX1rXYI7NkihXw9eIVHa4qi-lxTSS0AUL-r5_W_MhtOwtCzgkMKDW8sNJnJlLUka7WrdPTbq3A-A4xUc91m8Rn_z52f0MGaHHogJkpmVEkI5-xFGSYgoXnOgqUalyKncwI85dO1GYnrZxNqZjk2I98MesNDbb5T04NkixzTcJw4YAvdqYkuHMryra-lMdJ4_G939eiexm6ZIeNGNjJpoqXlM2jJddo8lkTjo",
                title: "The Chips Act: 2 Years Later",
              },
              {
                alt: "Engineer working with a robotic arm in a lab",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG77aT5aO4jYvsPuB9Pg3nLqkgNYy1Unep4NjwjEGDmm3RLfdU-keu8vofCZmNjumD5XBSxpV7eOXwaqBuTAhgBlZvoYJ0zpOz-03KIPtlKo8MwinOAQkb0P2gE8MF7rrymq7chjNNwmPWf_tmiFue-c1SMqYlWJJNsMZUpD135QyumkxjQi2cwcbkC1mF86Uo4BWTkLwJSw1maajZnJnZRTfvYk7voa2TqtbAEf3nUse8zYMrxvGuHYCoTviiB7fn9_LGjq1Cd_Q",
                title: "Robotics in Manufacturing Surge",
              },
              {
                alt: "Green binary code lines on a black screen",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcC70Vvke8789J8udWlpNPXdtYpAy8ooq6Q8V8Nb61HUQmfqgS8nqmHj6GIJ0eRP3cUQJqGJcproPCN-oum2w0yx-3AoKFpI0iQWXqGmZI-j9p82cLfc4ENlDzcxQqut2p6WnQW9Wr3kaw4BVu-lA3F3t7ML2g2SRB_HwVkWMo8iQnYXTPf0eB0rd9TYx7OZ-B8mZk_aDXVNlKUbJa4-nv_strH6RBAe5V1BdOx9plKncW-AiK5N2_kaXiEN-r5upI8vi848CPZLg",
                title: "Cybersecurity in the Age of AI",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-4/3"
              >
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={card.src}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h4 className="font-bold leading-snug">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <div className="w-full h-32 bg-slate-200/50 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
          Advertisement
        </span>
        <div className="text-slate-400 text-sm italic">
          Large Horizontal Ad Space
        </div>
      </div>
    </main>
  );
}
