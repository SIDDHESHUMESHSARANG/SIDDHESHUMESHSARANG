"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );

  return (
    <main className="max-w-2xl mx-auto px-4 py-6 md:py-10 min-h-screen">
      <div className="mb-6 md:mb-8 flex flex-col gap-2 md:gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs md:text-sm opacity-60 hover:opacity-100 transition group w-fit"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold">Latest Posts</h1>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="flex gap-3 md:gap-4 p-4 md:p-6 bg-[#181818] rounded-[2rem] md:rounded-3xl border border-white/5 shadow-2xl transition active:scale-[0.98] md:hover:scale-[1.01]"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center text-base md:text-xl font-bold text-white">
                S
              </div>
            </div>

            <div className="flex flex-col w-full min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 mb-1 md:mb-2 md:justify-between">
                <span className="text-[11px] md:text-sm font-semibold opacity-60 text-white truncate md:ml-2">
                  @siddheshumeshsarang
                </span>
                <span className="text-[11px] md:text-sm text-secondary font-medium">
                  {new Date(post.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <p className="text-lg md:text-3xl font-medium leading-snug text-white/95 whitespace-pre-wrap md:p-4 p-2">
                {post.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
