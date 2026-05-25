"use client";
import React from "react";
import { Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-8 px-4 md:px-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-300">
            Made with passion by Siddhesh Umesh Sarang
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Modern web experiences, polished interactions, and a love for
            ship-ready engineering.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-200">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-slate-900/80 px-4 py-2 transition hover:border-cyan-400/30 hover:text-white"
            href="https://www.github.com/SIDDHESHUMESHSARANG"
            target="_blank"
          >
            <Github /> GitHub
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-slate-900/80 px-4 py-2 transition hover:border-violet-400/30 hover:text-white"
            href="https://www.linkedin.com/in/siddheshumeshsarang"
            target="_blank"
          >
            <FaLinkedin size={18} /> LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
