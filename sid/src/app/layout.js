"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
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
      className={poppins.variable}
      data-theme="business"
      suppressHydrationWarning={true}
      data-qb-installed="true"
    >
      <head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script src="https://cdn.botpress.cloud"></script>
        <script src="https://files.bpcontent.cloud" defer></script>
      </head>

      <title>Siddhesh Sarang</title>
      <body className={poppins.className}>
        <div className="fixed inset-0 z-[-1] bg-grid-lg mask-radial opacity-100 pointer-events-none" />

        <Navbar />

        {isBlog ? (
          <main className="mt-20 md:mt-24">{children}</main>
        ) : (
          <>
            <section id="hero" className="mt-20 md:mt-24">
              {children}
            </section>
            <section id="about">{about}</section>
            <section id="projects">{projects}</section>
            <section id="certs">{certs}</section>
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
