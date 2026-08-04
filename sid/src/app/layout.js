"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const RootLayout = ({ children, about, projects, certs }) => {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  return (
    <html
      lang="en"
      className={sora.variable}
      data-theme="abyss"
      suppressHydrationWarning={true}
      data-qb-installed="true"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Siddhesh Umesh Sarang portfolio — modern web apps, certifications, and projects."
        />
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
        <script
          src="https://files.bpcontent.cloud/2025/09/24/14/20250924140524-0KFK0RE8.js"
          defer
        ></script>
      </head>

      <title>Siddhesh Sarang</title>
      <body
        className={`${sora.className} min-h-screen bg-base-100 text-base-content`}
      >
        <Navbar />

        {isBlog ? (
          <main className="mt-24 md:mt-28">{children}</main>
        ) : (
          <>
            <section id="hero" className="">
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
