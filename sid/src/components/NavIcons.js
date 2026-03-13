import React from "react";
import Link from "next/link";
import { User2, FolderGit2, BadgeCheck } from "lucide-react";

const NavIcons = ({ coloredIcons = false, isOpen = false, onNavigate }) => {
  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex flex-row gap-6 items-center">
        <Link href="#about" onClick={onNavigate}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${
              coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"
            }`}
          >
            <User2 className="w-4 h-4" />
            <span className="text-sm">About</span>
          </button>
        </Link>

        <Link href="#projects" onClick={onNavigate}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${
              coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span className="text-sm">Projects</span>
          </button>
        </Link>

        <Link href="#certs" onClick={onNavigate}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition ${
              coloredIcons ? "btn btn-secondary" : "hover:bg-base-200"
            }`}
          >
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm">Certs</span>
          </button>
        </Link>
      </nav>

      {/* Mobile dropdown nav */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 mx-4 z-30">
          <div className="rounded-3xl border border-primary/20 bg-base-300 shadow-2xl p-3 flex flex-col gap-2">
            <Link href="#about" onClick={onNavigate}>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm">
                <User2 className="w-4 h-4" />
                <span>About</span>
              </button>
            </Link>
            <Link href="#projects" onClick={onNavigate}>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
              </button>
            </Link>
            <Link href="#certs" onClick={onNavigate}>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-base-200 text-sm">
                <BadgeCheck className="w-4 h-4" />
                <span>Certifications</span>
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavIcons