import { notFound } from "next/navigation";

type CategoryParams = {
  category: keyof typeof categories;
};

const categories = {
  health: {
    title: "Health Articles",
    description: "Latest health tips and medical news.",
  },
  tech: {
    title: "Technology News",
    description: "Latest updates in tech world.",
  },
  politics: {
    title: "Political Updates",
    description: "Global political insights.",
  },
  sports: {
    title: "Sports News",
    description: "Latest sports updates and insights.",
  },
  education: {
    title: "Education Insights",
    description: "Latest educational trends and insights.",
  },
  business: {
    title: "Business Insights",
    description: "Latest business trends and insights.",
  },
  entertainment: {
    title: "Entertainment Buzz",
    description: "Movies, music and celebrity news.",
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<CategoryParams>;
}) {
  const { category } = await params;

  const categoryData = categories[category];

  if (!categoryData) {
    notFound();
  }
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* <!-- Category Header & Featured --> */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-tighter">
              {categoryData.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
              {categoryData.description}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex h-10 items-center gap-2 rounded-lg bg-primary text-white px-4 font-medium text-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">
                notifications
              </span>
              Subscribe
            </button>
          </div>
        </div>

        {/* <!-- Featured Card --> */}
        <div className="relative group overflow-hidden rounded-xl bg-slate-900 aspect-21/9">
          <img
            alt="Neuralink"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
            data-alt="Abstract neural network visual representing high technology"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JOcprxor68equdpDeiMdXlRr2S-gRMXIXy2twXsUXPL4foT0mcvjLoBsq2-FswDbYSR515KJn2p24YrtrDXOKUP-59vB5KmdwT2f3UVplP-rS6eB8-ozGTZzetoU-FQIa23s9vzrwKeoftmKJ5-AnsTDAe-51qOAteRF3EIQEc4M5OUkAgT8-euaO2iK1V5KErkwVNYIUCuOJq1OU9EsEVgufGBpD5gdJrxTW6mDxM3eEnBlPgbjXO4cPATj-g_1hnW3wGJyHR0"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 uppercase tracking-widest">
              Featured Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Future of Neuralink: A Deep Dive into Brain-Computer
              Interfaces
            </h2>
            <p className="text-slate-200 text-lg mb-6 line-clamp-2 md:line-clamp-none">
              A comprehensive look at how brain-computer interfaces are evolving
              and what it means for the next phase of human evolution and
              healthcare innovation.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                Read Full Story
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <span className="text-slate-300 text-sm">
                12 min read • May 24, 2024
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* <!-- Main Content Area --> */}
        <div className="lg:w-2/3">
          {/* <!-- Blog Grid --> */}
          <div className="mb-5">
            <label className="flex flex-col w-full h-10">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm ring-1 ring-slate-200">
                <div
                  className="text-slate-400 flex border-none bg-white dark:bg-slate-900 items-center justify-center pl-6 rounded-l-xl"
                  data-icon="search"
                >
                  <span className="material-symbols-outlined text-2xl">
                    search
                  </span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-white dark:bg-slate-900 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-lg font-normal leading-normal"
                  placeholder="Search sports articles, athletes, or events..."
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 font-semibold shadow-md shadow-primary/20">
              <p className="text-sm">All Stories</p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
              <p className="text-sm">Football</p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
              <p className="text-sm">Basketball</p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
              <p className="text-sm">Tennis</p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
              <p className="text-sm">Cricket</p>
            </button>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Sort by:
              </span>
              <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Card 1 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="High tech hardware circuit board close up"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEPEAlsSGryoqMxPSQnavxONWnGpJOXx3uIUwzVq1y2-K6fYoo-oSSHeQl1EgD9BJdmlxZQt6mDiMW8_7sK4xjePV_EPCLhDKJ3GYMWqohjO_CPdjo0mrQTgA_rBDhASPVlE-ePo4pjPw_Jud2PmCv_CIHvQ-ulZPUPevuDsV5H3KFWPuGykAXGWX_JVzJm2Vv8vwg0CE2t6dVMHHN4KU28M1KctUKELdvUA4zoM4BpC2hLfCl5_5PsbET0QIFXOlfr4vDrXsFKL0"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    AI
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                GPT-5: What to Expect from the Next Frontier of LLMs
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                The AI community is buzzing with rumors about the next major
                release from OpenAI. Here is everything we know so far about the
                capabilities and training.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Male author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSSJII3nKUXqE7J9_XGzHF8lgIcQspfwsUUnQQ67bdiBQtWJoR5Zh3ji2KqRCL7RV43wISHvWzgncmgASkgi9qVXEt9sgiVLEtNTPGpatVBUEYwbo3WBBAsXeNZ18l80fqrdjB6Z0R9YG3V9Si99DluaAFYsHrXWC-l949P7soKKPEkmqnBwoxwk4w-YrGWILS9YLFMt0u9SiEytr4K1mUTOOdF-QokDSd4OZWFHrQKAOHqOIpZ1TvOp0hJswkbg8_TYcKkqCf8js"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Marcus Thorne
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 22, 2024</span>
              </div>
            </article>
            {/* <!-- Card 2 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Rocket launch into night sky"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLpycQK7lzZMW0qk1sJD_IDE0Jk1-olyAlD2VbanN-kIybIbuy-7bs9eIjZxaBdjqhNvbfzIokkihJcxbEdjmalB8z68UsnjfK_wG4TKYAjke3KoVc8u2-8Ji9GmeI8B46VLDMrrp8Ha1MtYhsda-FILkYQSXoVok40N1ZDzSWiILI4G3pBCFs-7YumJyygT5MfdyYPJfrVHNfwJq3T52Dnr2NXkDy9bCi1vxOGGAxsnVYVUwgSmsEdfuLDiqTo6mBSe3OMmBT9o"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    Space
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                Starship Flight 5: Setting the Stage for Mars Colonization
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                SpaceX's latest test flight proves that rapid reusability is no
                longer a dream but a rapidly approaching reality for planetary
                exploration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Female author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHWQJGYRuYkgsXYUT5nLjP-nzsKLwWkEoFzXWgKqyjbTBFI9e6yEMdXTdFa_TTQRDONbHc8DpAZhWL624o8FJ8MqANykJe3JqO0t-vBgSWUL7UGGY4UwTSxfrIGk-NnpQ4LVs7fLZ40oF8D4w2-qjtGw0SRt0HF3HFKLInxeTNUpslV7HoejjgF_L9wE9n1hpyjDCAV0cb9w-X_H3BY4bjYqWBWf58nEkHDXLdKoi7UQ6e6f1cYfDGsXkVcNum8SXFqL-JeD9g6k"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Elena Vance
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 20, 2024</span>
              </div>
            </article>
            {/* <!-- Card 3 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Electric car charging station detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhh_bMQyBt0WlJ762ONJ5oJAyuYHP1qlA3Ny9HN94VuMEljf2kwCYnNyeS2mG5UZMNMtehox_JeD0QiFbqc0InDvT0r2x8PiQnEJMLH95DhQJ5CKSdxMEAQwfB5qHeKDhIimEGqqDpAjUnb7v-Ib16d-XzXh9-UTgpMAf2HR25BnObKS18-9AOpvuAerS2T17frdlu1Oai6r2Cky9nQhxZzvsAXSCScxulxOB7kUPRSd3gJHc88l_V8gRSZpFHkTFG2vh6JsK8TNE"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    Tesla
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                Solid-State Batteries: The Holy Grail of EV Longevity?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                New breakthroughs in solid-state chemistry could triple the
                range of current EVs and reduce charging times to under five
                minutes.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Male author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdcOf_jt288F3JgiWF9nABThm_k3viRfPVPzwNx2yuKmCrrbJtDl_5doPlwW0CqTUFwSM_Lbbb4V150Hu7yRGO3HM3Hg233LqoMxxAC-QTK5y9aAibaIl5I2htDkKsT4LVbvyvONJqLVTG7G8Ts8kuUUK4XffmpzAM95S-DJ8L1HyQoe60OflDbMvzdSPA9I130G281P58UtcnNtppHe63kbPxqUTKPdmmrliIZQac_sw3OSsB5Q5JOXA0cImD6bQGHehIpAopgj8"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    David Kim
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 18, 2024</span>
              </div>
            </article>
            {/* <!-- Card 4 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Digital representation of blockchain data"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7H4502nLFFGiSfoiagRZnGQehgJNhDTTVDj-RDVH7ruMt44eQzUemaGyLIVc1NJinF4RWkn8_Y8FP0OJBY2ymmrjBUfFCQTAU1rjtNJ70E2hfxTiIMXxfyLyzRJuS6AOtJfvJGDPnBkbbnaAYfSA_MDWVwae9MGR3YjMSq6EkJdIw1bvBdkCauRDELeCuLYW_jt4wXtNe2Mv_pAG9PCuLEmJl-5SWmolCkey6auroNKJyK5XFyH6fCduFObXN2yrEefp9OPwOqek"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    Web3
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                The Decentralized Web: Beyond the Crypto Hype
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                How decentralized protocols are quietly building a more
                resilient internet, focusing on data privacy and user ownership.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Female author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDas-dlOLgpO7Ley3DVGRPdu_Nb89B-e2-iphEop-PjvmYh8C7kaYMrAfEeKbo3LvMAqtuAPDxiOmPgHtBXoyTAifBboSLImV07On5e1CJS5XUvF23gqz2MSHzuyhSuL4jcwWtqsDIzYkA6mxTfJT_auOWnawYZgBP1ep8H-2Xgxzbw5QLDhkndM4nBIAD7u98ZevRET2ZvdvH3BYYAFI1JKceKMSQ0psuyRcXKK58WXRstmmu-FSU10mokTLt9sl_LnlMlXogkSQ"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Sarah Chen
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 15, 2024</span>
              </div>
            </article>
            {/* <!-- Card 5 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="High tech hardware circuit board close up"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEPEAlsSGryoqMxPSQnavxONWnGpJOXx3uIUwzVq1y2-K6fYoo-oSSHeQl1EgD9BJdmlxZQt6mDiMW8_7sK4xjePV_EPCLhDKJ3GYMWqohjO_CPdjo0mrQTgA_rBDhASPVlE-ePo4pjPw_Jud2PmCv_CIHvQ-ulZPUPevuDsV5H3KFWPuGykAXGWX_JVzJm2Vv8vwg0CE2t6dVMHHN4KU28M1KctUKELdvUA4zoM4BpC2hLfCl5_5PsbET0QIFXOlfr4vDrXsFKL0"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    AI
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                GPT-5: What to Expect from the Next Frontier of LLMs
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                The AI community is buzzing with rumors about the next major
                release from OpenAI. Here is everything we know so far about the
                capabilities and training.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Male author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSSJII3nKUXqE7J9_XGzHF8lgIcQspfwsUUnQQ67bdiBQtWJoR5Zh3ji2KqRCL7RV43wISHvWzgncmgASkgi9qVXEt9sgiVLEtNTPGpatVBUEYwbo3WBBAsXeNZ18l80fqrdjB6Z0R9YG3V9Si99DluaAFYsHrXWC-l949P7soKKPEkmqnBwoxwk4w-YrGWILS9YLFMt0u9SiEytr4K1mUTOOdF-QokDSd4OZWFHrQKAOHqOIpZ1TvOp0hJswkbg8_TYcKkqCf8js"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Marcus Thorne
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 22, 2024</span>
              </div>
            </article>
            {/* <!-- Card 6 --> */}
            <article className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Article Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Rocket launch into night sky"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLpycQK7lzZMW0qk1sJD_IDE0Jk1-olyAlD2VbanN-kIybIbuy-7bs9eIjZxaBdjqhNvbfzIokkihJcxbEdjmalB8z68UsnjfK_wG4TKYAjke3KoVc8u2-8Ji9GmeI8B46VLDMrrp8Ha1MtYhsda-FILkYQSXoVok40N1ZDzSWiILI4G3pBCFs-7YumJyygT5MfdyYPJfrVHNfwJq3T52Dnr2NXkDy9bCi1vxOGGAxsnVYVUwgSmsEdfuLDiqTo6mBSe3OMmBT9o"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider">
                    Space
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                Starship Flight 5: Setting the Stage for Mars Colonization
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                SpaceX's latest test flight proves that rapid reusability is no
                longer a dream but a rapidly approaching reality for planetary
                exploration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="Author"
                      data-alt="Female author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHWQJGYRuYkgsXYUT5nLjP-nzsKLwWkEoFzXWgKqyjbTBFI9e6yEMdXTdFa_TTQRDONbHc8DpAZhWL624o8FJ8MqANykJe3JqO0t-vBgSWUL7UGGY4UwTSxfrIGk-NnpQ4LVs7fLZ40oF8D4w2-qjtGw0SRt0HF3HFKLInxeTNUpslV7HoejjgF_L9wE9n1hpyjDCAV0cb9w-X_H3BY4bjYqWBWf58nEkHDXLdKoi7UQ6e6f1cYfDGsXkVcNum8SXFqL-JeD9g6k"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Elena Vance
                  </span>
                </div>
                <span className="text-xs text-slate-400">May 20, 2024</span>
              </div>
            </article>
          </div>
          {/* <!-- Pagination --> */}
          <div className="flex items-center justify-center gap-2 mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
              1
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
              2
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
              3
            </button>
            <span className="px-2 text-slate-400">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold">
              12
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        {/* <!-- Sidebar --> */}
        <aside className="lg:w-1/3 space-y-12">
          {/* <!-- Trending Stories --> */}
          <section>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                trending_up
              </span>
              Trending Now
            </h4>
            <div className="space-y-6">
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary/20 transition-colors">
                  01
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors leading-snug mb-1">
                    Optimus Gen 2: The End of Physical Labor?
                  </h5>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Robotics • 5m Read
                  </p>
                </div>
              </a>
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary/20 transition-colors">
                  02
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors leading-snug mb-1">
                    Solar Roof V3: Efficiency Gains Explained
                  </h5>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Energy • 8m Read
                  </p>
                </div>
              </a>
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary/20 transition-colors">
                  03
                </span>
                <div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors leading-snug mb-1">
                    Mars Habitat Prototypes: First Look
                  </h5>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Space • 12m Read
                  </p>
                </div>
              </a>
            </div>
          </section>
          {/* <!-- AdSense Placeholder --> */}
          <section className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center min-h-62.5 text-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Advertisement
            </span>
            <div className="bg-slate-200 dark:bg-slate-700 w-full h-40 rounded flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined text-4xl">
                ads_click
              </span>
            </div>
          </section>
          {/* <!-- Popular Tags --> */}
          <section>
            <h4 className="text-lg font-bold mb-6">Popular Topics</h4>
            <div className="flex flex-wrap gap-2">
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #ArtificialIntelligence
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #TeslaBot
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #ColonizeMars
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #CleanEnergy
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #CryptoFuture
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #NeuralLink
              </a>
              <a
                className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all"
                href="#"
              >
                #SelfDriving
              </a>
            </div>
          </section>
          {/* <!-- Newsletter Widget --> */}
          <section className="bg-primary rounded-xl p-8 text-white">
            <h4 className="text-xl font-bold mb-2">Weekly Insight</h4>
            <p className="text-primary-20 text-slate-100 text-sm mb-6">
              Get the most important tech updates delivered to your inbox every
              Sunday.
            </p>
            <form className="space-y-3">
              <input
                className="w-full bg-white/10 border-white/20 rounded-lg text-sm placeholder-white/60 focus:ring-white"
                placeholder="Your email address"
                type="email"
              />
              <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-slate-100 transition-colors">
                Join 50k+ Readers
              </button>
            </form>
          </section>
        </aside>
      </div>
    </main>
  );
}
