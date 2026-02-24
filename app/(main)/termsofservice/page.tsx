import Link from "next/link";
import React from "react";
import { PrintButton } from "../../components/PrintButton";

export default function TOS() {
  return (
    <main className="min-h-screen">
      {/* <!-- Hero Section --> */}
      <section className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Legal Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Last Updated: February 24, 2026
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Document Content --> */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* <!-- Sidebar TOC (Desktop Only) --> */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
            <nav className="flex flex-col space-y-2 border-l-2 border-slate-200 dark:border-slate-800 ml-4">
              <a
                className="pl-4 py-1 text-sm font-medium text-primary border-l-2 border-primary -ml-0.5 hover:text-primary"
                href="#acceptance"
              >
                1. Acceptance of Terms
              </a>
              <a
                className="pl-4 py-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                href="#conduct"
              >
                2. User Conduct
              </a>
              <a
                className="pl-4 py-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                href="#property"
              >
                3. Intellectual Property
              </a>
              <a
                className="pl-4 py-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                href="#liability"
              >
                4. Limitation of Liability
              </a>
              <a
                className="pl-4 py-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                href="#governing"
              >
                5. Governing Law
              </a>
              <a
                className="pl-4 py-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                href="#contact"
              >
                6. Contact Information
              </a>
            </nav>
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-xs font-semibold text-primary uppercase mb-2">
                Need Help?
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Questions about these terms? Contact our legal team.
              </p>
              <Link
                href="/contact"
                className="w-full p-2 bg-primary text-white rounded-lg text-sm font-bold"
              >
                Email Legal
              </Link>
            </div>
          </aside>
          {/* <!-- Main Text Column --> */}
          <article className="lg:col-span-7 prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="mb-12 scroll-mt-28" id="acceptance">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  01
                </span>
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using NewMusk Blogs ("the Service"), you agree
                to be bound by these Terms of Service and all applicable laws
                and regulations. If you do not agree with any of these terms,
                you are prohibited from using or accessing this site.
              </p>
              <p>
                We reserve the right to update or change our Terms of Service at
                any time without prior notice. Your continued use of the Service
                after we post any modifications to the Terms of Service on this
                page will constitute your acknowledgment of the modifications
                and your consent to abide and be bound by the modified Terms of
                Service.
              </p>
            </div>
            <div className="mb-12 scroll-mt-28" id="conduct">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  02
                </span>
                User Conduct
              </h2>
              <p>
                When using NewMusk Blogs, you agree to follow these community
                standards and prohibited activities:
              </p>
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  <strong>Authenticity:</strong> You must provide accurate
                  information when creating an account and represent yourself
                  truthfully.
                </li>
                <li>
                  <strong>Lawful Use:</strong> You may not use the Service for
                  any illegal or unauthorized purpose. You must not violate any
                  laws in your jurisdiction.
                </li>
                <li>
                  <strong>Respectful Engagement:</strong> Harassment, bullying,
                  hate speech, or the distribution of explicit material is
                  strictly prohibited.
                </li>
                <li>
                  <strong>System Integrity:</strong> You shall not attempt to
                  hack, destabilize, or inject malicious code into the NewMusk
                  infrastructure.
                </li>
                <li>
                  <strong>Spam:</strong> Automated posting or sending
                  unsolicited commercial communications is not permitted.
                </li>
              </ol>
            </div>
            <div className="mb-12 scroll-mt-28" id="property">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  03
                </span>
                Intellectual Property
              </h2>
              <p>
                The Service and its original content (excluding content provided
                by users), features, and functionality are and will remain the
                exclusive property of NewMusk Blogs and its licensors.
              </p>
              <p>
                By posting content to NewMusk Blogs, you grant us a
                non-exclusive, worldwide, royalty-free license to use, copy,
                reproduce, process, adapt, modify, publish, transmit, display,
                and distribute such content in any and all media or distribution
                methods.
              </p>
            </div>
            <div className="mb-12 scroll-mt-28" id="liability">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  04
                </span>
                Limitation of Liability
              </h2>
              <p>
                In no event shall NewMusk Blogs, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  Your access to or use of or inability to access or use the
                  Service.
                </li>
                <li>
                  Any conduct or content of any third party on the Service.
                </li>
                <li>Any content obtained from the Service.</li>
                <li>
                  Unauthorized access, use or alteration of your transmissions
                  or content.
                </li>
              </ul>
            </div>
            <div className="mb-12 scroll-mt-28" id="governing">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  05
                </span>
                Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the State of Delaware, United States, without regard
                to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect.
              </p>
            </div>
            <div className="mb-8 scroll-mt-28" id="contact">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 bg-primary/10 text-primary text-sm rounded-full">
                  06
                </span>
                Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white mb-1">
                  NewMusk Legal Department
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  123 Tech Plaza, Suite 400
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  San Francisco, CA 94103
                </p>
                <p className="text-primary font-medium mt-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    mail
                  </span>
                  legal@newmuskblogs.com
                </p>
              </div>
            </div>
          </article>
          {/* <!-- Right Sidebar / CTA --> */}
          <div className="lg:col-span-2 hidden xl:block">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Quick Stats
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">
                      Reading Time
                    </p>
                    <p className="text-sm font-medium">Approx. 8 minutes</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">
                      Version
                    </p>
                    <p className="text-sm font-medium">1.2.0 (2026)</p>
                  </div>
                </div>
              </div>
              <PrintButton icon="print" text="Print Terms" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
