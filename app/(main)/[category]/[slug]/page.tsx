import React from "react";

export default function BlogDetails() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* <!-- Article Main Column --> */}
        <article className="lg:col-span-8">
          {/* <!-- Breadcrumbs --> */}
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <a className="hover:text-primary transition-colors" href="#">
              Tech
            </a>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-white truncate">
              The Future of Neural Interfaces
            </span>
          </nav>
          {/* <!-- Category Tag --> */}
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Neurotechnology
          </span>
          {/* <!-- Title --> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            The Future of Neural Interfaces: Bridging Mind and Machine
          </h1>
          {/* <!-- Author & Meta --> */}
          <div className="flex items-center justify-between py-6 border-y border-slate-200 dark:border-slate-800 mb-8">
            <div className="flex items-center gap-4">
              <img
                alt="Author"
                className="w-12 h-12 rounded-full border-2 border-primary/20"
                data-alt="Portrait of a professional male tech writer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUnMI1QrM9_2T1CJwUs7TPEywUBBYm0GlKoDcR0W5g8ZKrjEp7WNWZqzLzSMncupVn1jlyttrcPTrrSiIbW0Bsj9U9REKhNlIxuiULSANkmg9mSWSUEgK-VScvR7O81ORP-qihOJM58rxXnUTbW1qOfvW0_NfIR_jkWeln6rfp2cmlQJ97uIGOCy2MKj21_7xXjrPALTuhKwWBs_09WjdKqyFdstZZ90IoogFaXnRZSVhKVjqz_TWeIoYRs8c-t-p2GhLMrDxrTBc"
              />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Alex Thorne
                </p>
                <p className="text-sm text-slate-500">
                  May 24, 2024 • 8 min read
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-all">
                Follow
              </button>
            </div>
          </div>
          {/* <!-- Featured Image --> */}
          <div className="mb-10 group relative">
            <img
              className="w-full aspect-video object-cover rounded-xl shadow-2xl"
              data-alt="Abstract visualization of high-tech neural network connections"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcH_iLXG5NEga3QcR169Yxht7uElueeW45ciySQ8wgHYQI-4zsg5ZY2UMWR29uZi4tzXJS212i0HVwasF4vrizTFW0wHBkVWGRmRNY90YJgKhWqE_cu8qk57KJIXC4Q4SOdgtDA7IzfDAmB4FR0INaJ-iVfM1UMeZR3fs3WPIUSBeAMl1q_xMR4HllpWivCCqcBcbUjxGEnn7dgxhc7H94peyKPL1kozhrF5IYrbRzRHDR8cSDZ56rqmg-YSsXdPqEyCRHQPlfC3M"
            />
            <p className="mt-4 text-center text-sm italic text-slate-500">
              Conceptual rendering of high-density neural interface arrays.
              Source: MuskVision Lab.
            </p>
          </div>
          {/* <!-- Article Body --> */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              In the quiet corners of research labs across the globe, a
              revolution is stirring—one that doesn't just change how we use
              computers, but how we integrate with them. Neural interfaces, once
              the realm of cyberpunk novels, are rapidly becoming our new
              biological reality.
            </p>
            <p>
              The latest breakthroughs in high-bandwidth brain-computer
              interfaces (BCIs) suggest a future where the latency between
              thought and digital action effectively disappears. Imagine
              controlling your entire smart home, drafting complex emails, or
              even "feeling" the texture of virtual objects through direct
              neural feedback.
            </p>
            {/* <!-- In-article Ad --> */}
            <div className="my-12 p-8 bg-slate-100 dark:bg-slate-800/50 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Advertisement
              </p>
              <h3 className="text-xl font-bold mb-2">
                Upgrade Your Digital Cognitive Suite
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Experience the next level of focus with NeuroFlow Pro. 20% off
                for Musk Blog readers.
              </p>
              <button className="px-6 py-2 bg-slate-900 dark:bg-primary text-white font-bold rounded-lg text-sm">
                Learn More
              </button>
            </div>
            <h2>The Architecture of Thought</h2>
            <p>
              The core challenge remains the 'signal-to-noise' ratio. Our brains
              are incredibly loud environments, electrically speaking. New
              CMOS-based sensor arrays are now reaching densities that allow us
              to isolate individual neuron firings with unprecedented clarity.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl font-medium text-slate-800 dark:text-slate-200">
              "We aren't just building tools; we are building the next
              evolutionary step of human communication. The bottleneck of
              language is about to be broken."
            </blockquote>
            <p>
              As we look toward 2030, the integration of AI models directly into
              the neural loop could provide real-time cognitive enhancement,
              memory offloading, and instantaneous translation across languages
              without a single spoken word.
            </p>
          </div>
          {/* <!-- Interaction Bar --> */}
          <div className="flex items-center justify-between py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors group">
                <span className="material-symbols-outlined group-hover:fill-current">
                  favorite
                </span>
                <span className="font-bold">2.4k</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="font-bold">148</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400 uppercase">
                Share:
              </span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">
                    link
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Tag Cloud --> */}
          <div className="flex flex-wrap gap-2 mb-16">
            <a
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
              href="#"
            >
              #Neuralink
            </a>
            <a
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
              href="#"
            >
              #AI
            </a>
            <a
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
              href="#"
            >
              #FutureTech
            </a>
            <a
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
              href="#"
            >
              #BioHacking
            </a>
          </div>
          {/* <!-- Comments Section --> */}
          <section className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-black mb-8">Discussions (148)</h3>
            {/* <!-- Comment Input --> */}
            <div className="flex gap-4 mb-10">
              <img
                className="w-10 h-10 rounded-full"
                data-alt="Default user avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9TWAi3OfnIQxAiMWnnx9z2LO_YYPFcCg_kRt2NqgV0Mp8bmxr4v29LjIYKhnvnAGhhrEjI1V3ehnv_qRzw_SCqVt8Y9zN2MgZpxRArYp3mk9rs0jORManZTQRX1oxgoLzwt9Gdw-qeT0wBHkZmA5mTQQYkebrspUL0lWhTQHwRFuU5seIlIqn5GRv2ilCTXonqNno5UR6PZCF5qdA0OCoWeciMqpykQtViqDwlAPLXr5wlUo31IorZ24MbkHlP2A8fNFp1ZTGyzQ"
              />
              <div className="flex-1">
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-primary focus:border-primary resize-none h-24 mb-3"
                  placeholder="Join the discussion..."
                ></textarea>
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Existing Comments --> */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  data-alt="Avatar of a male commenter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8wyapb1UHXuqjQVYZRfIkMNL1__9Lk49IB18knuVeHkmrm_EdlTHvg2C8WKZ22MrpAJzoUa-9GTiaUxZPGbpt_gClTw-p0zC88NqiHDEVAH5bTzyLMUDZPnkROCGA-VKwSiDq_jHbZh9qSAX6ITrTwTh-K7t5HCKvumPj7cDjeLNzpiXAh1KuG_9purBsEO4_Ywf4vXvndPVQycQIajyuciiUQWcCDrkxfnE9w3mHnxUi9hDlawYlIKNzeAMALvlJVGkt-tCRImM"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold">Julian V.</span>
                    <span className="text-xs text-slate-500">2 hours ago</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    The security implications of BCIs are huge. Imagine a
                    'man-in-the-middle' attack on your literal brain signals.
                  </p>
                  <button className="text-sm font-bold text-primary hover:underline">
                    Reply
                  </button>
                </div>
              </div>
              <div className="flex gap-4 ml-12">
                <img
                  className="w-10 h-10 rounded-full"
                  data-alt="Avatar of a female commenter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu5Cm7g0uPXaSBlRMS5v_vPT8Y7mL1xK0xxdDzop-6FeQLUfh0ifXuz4WlB7NHIjIF2buuPiC4XyeTl_ZLDB4yvqN7yI-zg0JOzwjK8Oq-dLS9poJA1uPl0Ce6g6xWTX5BLkxozYUOyc_2PhoXXTRAZlQhpFHh4jG5rok2w5t52wjLj6rrVgJlrdDWnduDPhCK9NnUCVyWuPh_9YMQvkTWPhvi8mK_z4m6LgOgp-n-NsYvjFRiwRnWXudUNN5cR4SF49o9tkLSUS8"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold">Sarah Chen</span>
                    <span className="text-xs text-slate-500">1 hour ago</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    Exactly! We'll need a biological firewall before this goes
                    mainstream.
                  </p>
                  <button className="text-sm font-bold text-primary hover:underline">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* <!-- Sidebar --> */}
        <aside className="lg:col-span-4 space-y-12">
          {/* <!-- Trending Now --> */}
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                trending_up
              </span>
              Trending Now
            </h4>
            <div className="space-y-6">
              <a className="group flex gap-4" href="#">
                <span className="text-3xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary transition-colors">
                  01
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors">
                    SpaceX Announces Mars Colony Phase 1
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Space • 15 min read
                  </p>
                </div>
              </a>
              <a className="group flex gap-4" href="#">
                <span className="text-3xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary transition-colors">
                  02
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors">
                    Tesla Bot Reaches Human Dexterity
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Robotics • 12 min read
                  </p>
                </div>
              </a>
              <a className="group flex gap-4" href="#">
                <span className="text-3xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary transition-colors">
                  03
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors">
                    The Rise of Sovereign AI Nations
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    AI • 18 min read
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- Sticky Ad --> */}
          <div className="sticky top-24">
            <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-3/4 relative flex items-center justify-center p-8 text-center border border-slate-700">
              <div className="z-10">
                <span className="inline-block px-2 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                  Sponsored
                </span>
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">
                  Master the Future of Code
                </h4>
                <p className="text-slate-400 text-sm mb-8">
                  Join the 10-week AI Engineering Bootcamp starting this July.
                </p>
                <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-black opacity-60"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                data-alt="Abstract tech code on a monitor display"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9_VD4xIAGSLEk3WBb7fGu5IYzuEK3g5Q_Bv6BIKjHr7Ays1lwAx1l2Xz8glzQpzY7GS2NsgLVofA7nD6rQW8TeEm5ilWTbR6XOCHJFrqSQCrtV9jQx4WsDZjfASZz_81M4xWNjcbLUGbFzW3fX46pGXWjXhwTywk4txcdyIEAOkeUdR_Ld8uV0zMLCAyiIKzJpBzCIz832Y4pCdFOiB-Vw6yMjIg_ytHzdqEXnDVRf0CJd3v5g48D6emvFRz3mDZE_0Yp9hhSdyE"
              />
            </div>
          </div>
        </aside>
      </div>
      {/* <!-- Recommended / Related Section --> */}
      <section className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">
              Recommended for You
            </h2>
            <p className="text-slate-500">
              Selected based on your reading history
            </p>
          </div>
          <a
            className="text-primary font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            View all Tech
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Related Card 1 --> */}
          <a className="group" href="#">
            <div className="overflow-hidden rounded-xl mb-4 shadow-lg">
              <img
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="A glowing blue brain silhouette illustration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdnkk7mZfRe7ve9-VRNqlIBeJE0DCFkPmfsLLqbxBrWMMjeqf0dBP0LQuaQHg8fTOeVbcCAjQE_qlZQfVomxifZB0ZErbf7uiebVEDJMRH0kXc04NOKtQJ-DGPkyPIl1LKHn9VriLep2pmIuXDUb9xiyvy-7zKud6Rn4r9587sRQY_fJzEpbIKt54P8_esk0cp-oRcw-4d2a9TRp64xrEEStWVcNqN22vhdF1ctP0N_ixSlDxwCld5HcV4uzw_6lwnudmgafi0FwU"
              />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Cognition
            </span>
            <h4 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors leading-snug">
              The Ethics of Synthetic Memory Implants
            </h4>
            <p className="text-sm text-slate-500 mt-2 line-clamp-2">
              How far can we go in modifying our past experiences through
              digital augmentation?
            </p>
          </a>
          {/* <!-- Related Card 2 --> */}
          <a className="group" href="#">
            <div className="overflow-hidden rounded-xl mb-4 shadow-lg">
              <img
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Cybernetic hand reaching for a human hand"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3GVbcDnIKF7NrlYDnCeP6YMShcHGq_nLl2NEbLwP662HX2Od51BPeBkfrQobCRibV4zOmk2jZ4S8MDi06CcyTDxZJsXN_C4guRzsESMToyTIuf55KD8PSOaZoSiAgelglrxZ0FDvGTj9Qrz2LKX1DCT5Hos_cW39qZW-NxXigIIHY2GFim0FKIDX4zqFpz-_c33XUj-x13RYhcybtD5so6-SIJYz7FAIT12-zZvvDdURcgtMtmVW-h0JLbRIMjX2UNmubnbt0Lhk"
              />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Robotics
            </span>
            <h4 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors leading-snug">
              Human-Centric Design in Autonomous Droids
            </h4>
            <p className="text-sm text-slate-500 mt-2 line-clamp-2">
              Creating empathy through movement and responsive visual feedback
              in robots.
            </p>
          </a>
          {/* <!-- Related Card 3 --> */}
          <a className="group" href="#">
            <div className="overflow-hidden rounded-xl mb-4 shadow-lg">
              <img
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Satellite image of Earth showing data network lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0yQDf4GIC4l7opgWrZVfjhMiYsLvf5RN3Wxm8Ilc8pVo-l13GzM3Q5b1KTpBIY8dN09HWtScznKWjFial6jWxQuTBZ--e5V07XoccExuHxx2SiuooumIpDwogxwATD8AW-xXjA7SPQx-E0RyREqR4ZeBOH3_-kW1bWIKK7BOAeKZLBnwsvYDBcyqiMAMLoJxnQCveQHxeWoxpHeqSzZgO6FHhM09WGEBbxyPsvVChQaJ-J5bAZWA2iw9MnSFCtAc3UHIHdtvGPfY"
              />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Innovation
            </span>
            <h4 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors leading-snug">
              The Internet of Everything: 6G and Beyond
            </h4>
            <p className="text-sm text-slate-500 mt-2 line-clamp-2">
              A look into the infrastructure that will power our increasingly
              connected planet.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
