"use client";
import React from "react";
import Link from "next/link";
import TextType from "@/components/react-bits/Typewriter-reactbits";
import { Github, GithubIcon, Instagram } from "lucide-react";

const Page = () => {
  return (
    <div className="page flex flex-col items-center md:items-start md:p-6 mt-5 md:mt-0 min-h-screen">
      <div className="flex gap-5">
        <Link href="/blog">
          <div className="flex items-center gap-2 btn bg-primary/10 border border-primary rounded-3xl w-fit px-6 hover:bg-primary">
            <span className="relative flex size-3">
              <span className="status rounded-full status-success animate-ping absolute inline-flex h-full w-full opacity-75"></span>
              <span className="status rounded-full status-success relative inline-flex size-3"></span>
            </span>
            Visit my blog{" "}
            <span
              className="underline underline-offset-2 font-bold"
              href="/blog"
            >
              Here
            </span>
          </div>
        </Link>

        <Link href="https://github.com/SIDDHESHUMESHSARANG" target="_blank" className="hidden md:flex">
          <div className="flex items-center gap-2 btn bg-primary/10 border border-primary rounded-3xl w-fit px-6 hover:bg-primary">
            <span className="relative flex">
              <Github size={20} />
            </span>
            Follow my Github
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:mt-38 mt-30 p-4 font-bold text-center md:text-left max-w-xs md:max-w-none self-center">
        <h1 className="text-5xl md:text-7xl tracking-tight ">
          Sometimes i just{" "}
        </h1>
        <TextType
          text={["Code", "Debug", "Solve", "Learn"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
          deletingSpeed={50}
          className="text-5xl md:text-7xl text-primary"
        />
      </div>
      <div className="mt-20 md:hidden self-center flex flex-col items-center gap-1 text-xs text-base-content/70 animate-bounce">
        <span>Scroll down</span>
        <span className="text-lg">↓</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 mt-24 md:mt-32 px-4 pb-20">
        <div className="mockup-window border border-primary/20 bg-base-300 w-full max-w-85 md:max-w-md shadow-2xl rounded-3xl shrink-0 transition-transform hover:scale-[1.02]">
          <div className="p-4 md:p-6 bg-base-200 rounded-none border-t border-primary/10 text-[11px] md:text-sm h-full">
            <pre data-prefix="$">
              <code> whoami</code>
            </pre>
            <pre data-prefix=">" className="text-info flex">
              <code className="whitespace-pre-wrap pl-1">
                Siddhesh Umesh Sarang <br />
                <span className="text-base-content/50 text-[10px] md:text-xs">
                  [Developer, CS Major, a chill guy]
                </span>
              </code>
            </pre>

            <pre data-prefix="$" className="mt-3 md:mt-4">
              <code> ls skills/</code>
            </pre>
            <pre data-prefix=">" className="text-success flex">
              <code className="text-wrap pl-1 leading-relaxed">
                next.js mern-stack tailwind daisy-ui python vercel docker git
                ms-office
              </code>
            </pre>

            <pre data-prefix="$" className="mt-3 md:mt-4">
              <code> cat goals.txt</code>
            </pre>
            <pre data-prefix=">" className="text-warning flex">
              <code className="text-wrap pl-1">
                Build cool stuff & stop breaking production.
              </code>
            </pre>

            <pre data-prefix="$" className="mt-3 md:mt-4 animate-pulse">
              <code>
                <span className="bg-primary w-1.5 h-4 md:w-2 md:h-5 inline-block align-middle"></span>
              </code>
            </pre>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/20 p-4 shadow-2xl bg-base-300 flex items-center justify-center w-full max-w-85 md:max-w-md lg:max-w-lg transition-transform hover:scale-[1.02] overflow-hidden">
          <img
            className="w-full h-auto object-contain rounded-2xl"
            src="https://leetcard.jacoblin.cool/sid-08?theme=transparent&font=Poppins&ext=heatmap&border=0"
            alt="LeetCode Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
