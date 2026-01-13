import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="OCT" description="OCT documentation and resources">
      <main className="bg-white dark:bg-slate-950">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              OCT
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Official documentation and guides for OCT.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              {/* <Link
                to=""
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link> */}

              {/* <Link
                to=""
                className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition"
              >
                View Docs
              </Link> */}
            </div>
          </div>
        </section>

        {/* Features / Sections */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Introduction
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Learn what OCT is and how it works.
              </p>
              {/* <Link
                to=""
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read more →
              </Link> */}
            </div>

            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Guides
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Step-by-step guides for using OCT.
              </p>
              {/* <Link
                to=""
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read more →
              </Link> */}
            </div>

            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Reference
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                API and technical reference for OCT.
              </p>
              {/* <Link
                to=""
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read more →
              </Link> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
