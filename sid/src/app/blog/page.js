"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/blog-components/BlogCard";
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

      <div>
        <BlogCard posts={posts}/>
      </div>
    </main>
  );
};

export default BlogPage;
