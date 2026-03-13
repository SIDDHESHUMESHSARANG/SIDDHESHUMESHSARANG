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

  return (
    <>
      <nav className="hidden md:flex flex-row gap-6 items-center">
        <Link href="#about" onClick={(e) => handleClick(e, "#about")}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"}`}
          >
            <User2 className="w-4 h-4" />
            <span className="text-sm">About</span>
          </button>
        </Link>

        <Link href="#projects" onClick={(e) => handleClick(e, "#projects")}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"}`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span className="text-sm">Projects</span>
          </button>
        </Link>

        <Link href="#certs" onClick={(e) => handleClick(e, "#certs")}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"}`}
          >
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm">Certs</span>
          </button>
        </Link>
      </nav>

      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 mx-4 z-30">
          <div className="rounded-3xl border border-primary/20 bg-base-300 shadow-2xl p-3 flex flex-col gap-2">
            <Link
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm"
            >
              <User2 className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link
              href="#certs"
              onClick={(e) => handleClick(e, "#certs")}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm"
            >
              <BadgeCheck className="w-4 h-4" />
              <span>Certifications</span>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavIcons;
