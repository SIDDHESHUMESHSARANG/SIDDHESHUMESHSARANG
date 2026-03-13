import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children, about, projects, certs }) => {
  return (
    <html
      className={poppins.variable}
      data-theme="business"
      suppressHydrationWarning="true"
      data-qb-installed="true"
    >
      <head>
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
        <script
          src="https://files.bpcontent.cloud/2025/09/24/14/20250924140524-0KFK0RE8.js"
          defer
        ></script>
      </head>

      <title>Siddhesh Sarang</title>
      <body className={poppins.className}>
        <div className="fixed inset-0 z-[-1] bg-grid-lg mask-radial opacity-100 pointer-events-none" />

        <Navbar />
        <section id="hero" className="mt-20 md:mt-24">
          {children}
        </section>
        <section id="about">{about}</section>
        <section id="projects">{projects}</section>
        <section id="certs">{certs}</section>
      </body>
    </html>
  );
};

export default RootLayout;
