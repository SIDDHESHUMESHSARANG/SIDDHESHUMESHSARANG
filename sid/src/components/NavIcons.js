"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { User2, FolderGit2, BadgeCheck } from "lucide-react";

const NavIcons = ({
  coloredIcons = false,
  isOpen = false,
  onNavigate,
  show = true,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e, targetHash) => {
    onNavigate();

    if (window.location.hash === targetHash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push("/", { scroll: false });
    }
  };

  if (!show || pathname.startsWith("/blog")) return null;

  const itemClass = coloredIcons
    ? "btn btn-ghost btn-sm rounded-full border border-cyan-500/10 bg-slate-900/70 text-slate-100"
    : "btn btn-ghost btn-sm rounded-full text-slate-200 hover:bg-slate-800/80";

  return (
    <>
      <nav className="hidden md:flex flex-row gap-3 items-center">
        <Link href="#about" onClick={(e) => handleClick(e, "#about")}>
          <button className={itemClass}>
            <User2 className="w-4 h-4" />
            <span className="text-sm">About</span>
          </button>
        </Link>

        <Link href="#projects" onClick={(e) => handleClick(e, "#projects")}>
          <button className={itemClass}>
            <FolderGit2 className="w-4 h-4" />
            <span className="text-sm">Projects</span>
          </button>
        </Link>

        <Link href="#certs" onClick={(e) => handleClick(e, "#certs")}>
          <button className={itemClass}>
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm">Certs</span>
          </button>
        </Link>
      </nav>

      {isOpen && (
        <nav className="md:hidden absolute top-20 left-4 right-4 z-30">
          <div className="rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-slate-950/40 p-4 backdrop-blur-xl flex flex-col gap-2">
            <Link
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <User2 className="w-4 h-4" />
                <span>About</span>
              </div>
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
              </div>
            </Link>
            <Link
              href="#certs"
              onClick={(e) => handleClick(e, "#certs")}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                <span>Certifications</span>
              </div>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavIcons;
