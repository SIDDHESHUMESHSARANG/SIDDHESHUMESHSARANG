"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children, about, projects, certs }) => {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  return (
    <html
      lang="en"
      className={poppins.variable}
      data-theme="dark"
      suppressHydrationWarning={true}
      data-qb-installed="true"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Siddhesh Sarang portfolio — modern web apps, certifications, and projects."
        />
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
        <script
          src="https://files.bpcontent.cloud/2025/09/24/14/20250924140524-0KFK0RE8.js"
          defer
        ></script>
      </head>

      <title>Siddhesh Sarang</title>
      <body className={`${poppins.className} min-h-screen`}>
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.14),transparent_20%),linear-gradient(180deg,#020617_0%,#070b16_100%)]" />
        <Navbar />

        {isBlog ? (
          <main className="mt-24 md:mt-28">{children}</main>
        ) : (
          <>
            <section id="hero" className="mt-26 md:mt-20">
              {children}
            </section>
            <section id="about">{about}</section>
            <section id="projects">{projects}</section>
            <section id="certs">{certs}</section>
          </>
        )}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
