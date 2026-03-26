import React from 'react'

const BlogCard = ({posts}) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-4 md:gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="flex gap-3 md:gap-4 p-4 md:p-6 bg-[#181818] rounded-[2rem] md:rounded-3xl border border-white/5 shadow-2xl transition active:scale-[0.98] md:hover:scale-[1.01]"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center text-base md:text-xl font-bold text-white">
                S8
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

          
              <p className="text-xl md:text-3xl font-medium leading-snug text-white/95 whitespace-pre-wrap md:p-4 p-2">
                {post.title}
              </p>

              <p className="leading-snug text-white/60 whitespace-pre-wrap md:p-4 p-2 text-sm md:text-lg">
                {post.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogCard