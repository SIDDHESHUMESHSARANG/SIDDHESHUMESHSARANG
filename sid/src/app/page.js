import React from "react";
import Link from "next/link";
import TextType from "@/components/react-bits/Typewriter-reactbits";
import { Github, TextCursor } from "lucide-react";
import HeroFace from "@/components/HeroFace";

const Page = () => {
  return (
    <div className="page flex flex-col items-center md:items-start md:p-6 mt-5 md:mt-0 min-h-screen">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6 md:mt-24 mt-16 p-4 font-bold text-center md:text-left max-w-5xl w-full self-center">
          <div className="w-full flex justify-center md:justify-start md:w-auto">
            <HeroFace />
          </div>
          <div className="flex flex-col items-center md:items-start md:mt-10">
            <h1 className="text-5xl md:text-7xl tracking-tight">
              Hi! This is{" "}
            </h1>
            <TextType
              text={["Siddhesh"]}
              typingSpeed={100}
              initialDelay={1000}
              pauseDuration={1000}
              showCursor
              cursorCharacter={"_"}
              deletingSpeed={100}
              className="text-5xl md:text-7xl text-primary"
            />
            <div className="mt-25 flex flex-col items-center gap-1 text-xs text-base-content/70 animate-bounce">
              <span>Scroll down</span>
              <span className="text-lg">↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
