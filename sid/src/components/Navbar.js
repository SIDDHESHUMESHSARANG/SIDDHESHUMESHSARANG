"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center md:justify-between px-4 py-5 md:px-6 md:py-6 font-display bg-base-100/90 backdrop-blur border-b border-base-200">
      <button
        type="button"
        className="md:hidden absolute left-4 rotate-270 px-2 py-1 rounded-xl border border-base-300 bg-base-200/70"
        onClick={handleToggleMenu}
        aria-label="Toggle navigation"
      >
        |||
      </button>

      <Link href="/" onClick={handleNavigate}>
        <h2 className="text-base md:text-2xl font-semibold md:font-bold whitespace-nowrap">
          Siddhesh Umesh Sarang
        </h2>
      </Link>

      <NavIcons coloredIcons={false} isOpen={open} onNavigate={handleNavigate} />
    </header>
  );
};

export default Navbar;