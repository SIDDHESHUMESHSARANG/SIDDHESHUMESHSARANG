'use client';
import React from 'react'
import { Github } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-10 bg-base-100/10 backdrop-blur flex flex-col md:flex-row md:gap-0 gap-4 justify-between border border-t-primary border-l-0 border-r-0 border-b-0">
      <p className="">Made with 🧠 by SIDDHESHUMESHSARANG</p>
      <div className="flex flex-col md:flex-row md:gap-10 gap-2">
        <Link
          className="flex gap-2 text-secondary hover:text-primary transition-colors"
          href="https://www.github.com/SIDDHESHUMESHSARANG"
          target="_blank"
        >
          <Github /> Follow my Github
        </Link>
        <Link
          className="flex gap-2 text-secondary hover:text-primary transition-colors"
          href="https://www.linkedin.com/in/siddheshumeshsarang"
          target="_blank"
        >
          <FaLinkedin size={20} /> Connect on LinkedIn
        </Link>
      </div>
    </footer>
  );
}

export default Footer