import React from "react";
import { PrintButton } from "../../components/PrintButton";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <!-- Hero Header --> */}
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <nav className="flex mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-slate-100">
            Privacy Policy
          </span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-base">
            calendar_today
          </span>
          <p className="text-sm">Last updated: May 24, 2024</p>
          <span className="mx-2">•</span>
          <p className="text-sm">Reading time: 8 min</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* <!-- Sidebar Navigation --> */}
        <aside className="lg:w-72 shrink-0 no-print">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm transition-all border border-primary/20"
                  href="#introduction"
                >
                  <span className="material-symbols-outlined text-xl">
                    info
                  </span>
                  <span>1. Introduction</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#collection"
                >
                  <span className="material-symbols-outlined text-xl">
                    person_search
                  </span>
                  <span>2. Information Collection</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#usage"
                >
                  <span className="material-symbols-outlined text-xl">
                    analytics
                  </span>
                  <span>3. Use of Data</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#cookies"
                >
                  <span className="material-symbols-outlined text-xl">
                    cookie
                  </span>
                  <span>4. Cookies &amp; Tracking</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#third-party"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                  <span>5. Third-Party Disclosure</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#rights"
                >
                  <span className="material-symbols-outlined text-xl">
                    shield_person
                  </span>
                  <span>6. User Rights</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-all"
                  href="#contact"
                >
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                  <span>7. Contact Us</span>
                </a>
              </nav>
            </div>
            <div className="bg-primary p-6 rounded-xl text-white shadow-lg shadow-primary/20">
              <p className="text-sm font-medium opacity-90 mb-3">
                Need a PDF version?
              </p>
              <PrintButton icon="download" text="Download PDF" />
            </div>
          </div>
        </aside>
        {/* <!-- Main Content Area --> */}
        <article className="flex-1 max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert">
          <section className="scroll-mt-24 mb-16" id="introduction">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                1
              </span>
              Introduction
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                Welcome to NewMusk Blogs. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you as to how we look after your personal data when
                you visit our website (regardless of where you visit it from)
                and tell you about your privacy rights and how the law protects
                you.
              </p>
              <p>
                It is important that you read this privacy policy together with
                any other privacy policy or fair processing policy we may
                provide on specific occasions when we are collecting or
                processing personal data about you so that you are fully aware
                of how and why we are using your data.
              </p>
            </div>
          </section>
          <section className="scroll-mt-24 mb-16" id="collection">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                2
              </span>
              Information Collection
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. We
                may collect, use, store and transfer different kinds of personal
                data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>
                    <strong>Identity Data</strong> includes first name, last
                    name, username or similar identifier.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>
                    <strong>Contact Data</strong> includes email address and
                    telephone numbers.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>
                    <strong>Technical Data</strong> includes internet protocol
                    (IP) address, your login data, browser type and version,
                    time zone setting and location.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>
                    <strong>Usage Data</strong> includes information about how
                    you use our website, products and services.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="scroll-mt-24 mb-16" id="usage">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                3
              </span>
              Use of Data
            </h2>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm text-sm">
                  <span className="font-bold block mb-1 text-primary">
                    Personalization
                  </span>
                  To provide content and products that are most relevant to you.
                </li>
                <li className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm text-sm">
                  <span className="font-bold block mb-1 text-primary">
                    Improvement
                  </span>
                  To administer and protect our business and this website.
                </li>
                <li className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm text-sm">
                  <span className="font-bold block mb-1 text-primary">
                    Communication
                  </span>
                  To notify you about changes to our service or policy updates.
                </li>
                <li className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm text-sm">
                  <span className="font-bold block mb-1 text-primary">
                    Legal
                  </span>
                  Where we need to comply with a legal or regulatory obligation.
                </li>
              </ul>
            </div>
          </section>
          <section className="scroll-mt-24 mb-16" id="cookies">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                4
              </span>
              Cookies &amp; Tracking
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Our website uses cookies to distinguish you from other users of
                our website. This helps us to provide you with a good experience
                when you browse our website and also allows us to improve our
                site.
              </p>
              <p>
                You can set your browser to refuse all or some browser cookies,
                or to alert you when websites set or access cookies. If you
                disable or refuse cookies, please note that some parts of this
                website may become inaccessible or not function properly.
              </p>
            </div>
          </section>
          <section className="scroll-mt-24 mb-16" id="third-party">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                5
              </span>
              Third-Party Disclosure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We do not sell, trade, or otherwise transfer to outside parties
              your Personally Identifiable Information unless we provide users
              with advance notice. This does not include website hosting
              partners and other parties who assist us in operating our website,
              conducting our business, or serving our users, so long as those
              parties agree to keep this information confidential.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">
                verified_user
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                  Partner Accountability
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We require all third parties to respect the security of your
                  personal data and to treat it in accordance with the law. We
                  do not allow our third-party service providers to use your
                  personal data for their own purposes.
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-mt-24 mb-16" id="rights">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary text-base font-bold">
                6
              </span>
              User Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">key</span>{" "}
                  Request Access
                </h5>
                <p className="text-sm text-slate-500">
                  You can request a copy of the personal data we hold about you
                  and to check that we are lawfully processing it.
                </p>
              </div>
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>{" "}
                  Request Correction
                </h5>
                <p className="text-sm text-slate-500">
                  You can have any incomplete or inaccurate data we hold about
                  you corrected.
                </p>
              </div>
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">
                    delete
                  </span>{" "}
                  Request Erasure
                </h5>
                <p className="text-sm text-slate-500">
                  You can ask us to delete or remove personal data where there
                  is no good reason for us continuing to process it.
                </p>
              </div>
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">
                    transfer_within_a_station
                  </span>{" "}
                  Request Transfer
                </h5>
                <p className="text-sm text-slate-500">
                  We will provide your personal data in a structured, commonly
                  used, machine-readable format.
                </p>
              </div>
            </div>
          </section>
          <section
            className="scroll-mt-24 pt-8 border-t border-slate-200 dark:border-slate-800"
            id="contact"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              7. Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              If you have any questions about this privacy policy or our privacy
              practices, please contact our data privacy manager in the
              following ways:
            </p>
            <div className="bg-slate-900 dark:bg-black p-8 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-9xl">lock</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        alternate_email
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                        Email Address
                      </p>
                      <p className="text-lg font-semibold">
                        privacy@newmuskblogs.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                        Office
                      </p>
                      <p className="text-lg font-semibold">
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Send Inquiry
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
