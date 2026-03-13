import React from "react";
import Link from "next/link";
import {Mail, Github, Instagram, Twitter} from "lucide-react";

const AboutPage = () => {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "siddhesh@example.com";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/sid-08";

  const highlights = [
    {
      label: "Focus",
      value: "Full‑stack apps",
      hint: "Next.js • APIs • Node JS • Express • Vite • & Many more    ",
    },
    {
      label: "Strengths",
      value: "Shipping + debugging",
      hint: "Clean DX, readable code",
    },
    {
      label: "Currently",
      value: "Building & learning",
      hint: "Development, DSA, Machine Learning, Clearing CS Fundamentals",
    },
  ];

  return (
    <div className="page px-4 md:px-6    pb-20 pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="Siddhesh Sarang"
                    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Siddhesh"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  About me
                </h2>
                <p className="text-sm md:text-base text-base-content/70">
                  Developer • CS Major • building useful things on the internet
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-base-300 shadow-2xl overflow-hidden">
              <div className="p-5 md:p-7">
                <p className="text-base md:text-lg leading-relaxed">
                  I’m <span className="font-semibold">Siddhesh Umesh Sarang</span>
                  . I like turning ideas into shipped products—clean UI, solid
                  APIs, and the kind of debugging that ends with a tidy commit.
                  I’m especially into modern web apps with{" "}
                  <span className="text-primary font-semibold">Next.js</span>,
                  and I’m always learning something new along the way.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    className="btn btn-primary rounded-2xl"
                    href="#projects"
                  >
                    See projects
                  </Link>
                  <Link className="btn btn-ghost rounded-2xl" href="/blog">
                    Read the blog
                  </Link>
                  <a
                    className="btn btn-outline rounded-2xl"
                    href={`mailto:${contactEmail}`}
                  >
                    Email me
                  </a>
                </div>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card rounded-3xl border border-primary/20 bg-base-300 shadow-2xl"
              >
                <div className="card-body p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-base-content/70">
                      {h.label}
                    </span>
                    <span className="badge badge-info badge-outline rounded-full">
                      {h.value}
                    </span>
                  </div>
                  <p className="mt-2 text-lg md:text-xl font-semibold">
                    {h.hint}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 rounded-3xl border border-primary/20 bg-base-300 shadow-2xl">
              <div className="p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  What I care about
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-base-200 border border-primary/10 p-4">
                    <p className="font-semibold">Clarity over cleverness</p>
                    <p className="text-sm text-base-content/70 mt-1">
                      Readable code, predictable behavior, fewer “surprises”.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-base-200 border border-primary/10 p-4">
                    <p className="font-semibold">Performance & UX</p>
                    <p className="text-sm text-base-content/70 mt-1">
                      Fast pages, smooth interactions, friendly interfaces.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-base-200 border border-primary/10 p-4">
                    <p className="font-semibold">Good defaults</p>
                    <p className="text-sm text-base-content/70 mt-1">
                      Sensible design systems, consistent components, good
                      states.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-base-200 border border-primary/10 p-4">
                    <p className="font-semibold">Learning by building</p>
                    <p className="text-sm text-base-content/70 mt-1">
                      Small experiments that turn into real features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-3xl border border-primary/20 bg-base-300 shadow-2xl overflow-hidden">
              <div className="p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Trying to contact me?
                </h3>
                <p className="mt-2 text-sm md:text-base text-base-content/70">
                  Checkout these handles and profiles — I&apos;m usually active
                  on at least one of them.
                </p>

                <div className="mt-5 space-y-3 text-sm md:text-base">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base-content/70"><Mail className="w-4 h-4" /></span>
                    <a
                      href="mailto:siddheshsarang0811@gmail.com"
                      className="link link-primary break-all"
                    >
                      siddheshsarang0811@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base-content/70"><Github className="w-4 h-4"/></span>
                    <span className="font-mono text-xs md:text-sm break-all">
                      SIDDHESHUMESHSARANG
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base-content/70"><Twitter className="w-4 h-4" /></span>
                    <span className="font-mono text-xs md:text-sm break-all">
                      iamsid08_
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base-content/70"><Instagram className="w-4 h-4"/></span>
                    <span className="font-mono text-xs md:text-sm break-all">
                      iamsid08
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-base-300 shadow-2xl">
            <div className="p-5 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Want to collaborate?
                </h3>
                <p className="text-sm md:text-base text-base-content/70">
                  I’m open to internships, freelance work, and interesting
                  engineering problems.
                </p>
              </div>

              <div className="stats shadow bg-base-200 border border-primary/10 w-full">
                <div className="stat">
                  <div className="stat-title">Response time</div>
                  <div className="stat-value text-primary text-2xl">Fast</div>
                  <div className="stat-desc">If it’s interesting</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Preferred stack</div>
                  <div className="stat-value text-2xl">Next</div>
                  <div className="stat-desc">+ Tailwind & Daisy UI</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="btn btn-primary rounded-2xl"
                  href={`mailto:${contactEmail}`}
                >
                  Reach out
                </a>
                <a
                  className="btn btn-outline rounded-2xl"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;