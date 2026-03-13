import React from "react";
import Link from "next/link";

const BlogComingSoonPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Coming soon.
        </h1>
        <p className="text-base md:text-lg text-base-content/70">
          I&apos;m currently working on some articles and dev logs.
          Check back here soon for updates.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn rounded-full bg-primary text-primary-content border-none px-6"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogComingSoonPage;

