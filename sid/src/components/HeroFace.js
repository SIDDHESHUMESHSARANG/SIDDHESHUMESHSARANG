"use client";

import { useEffect, useState } from "react";

const ASCII_CHARS = " .:-=+*#%@";

export default function AsciiArt() {
  const [ascii, setAscii] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    const renderAscii = () => {
      const img = new Image();
      img.src = "/heroimage.png";
      img.onload = () => {
        if (cancelled) return;

        const width = Math.min(
          80,
          Math.max(44, window.innerWidth < 640 ? 54 : 72),
        );
        const height = Math.max(
          20,
          Math.round((img.naturalHeight / img.naturalWidth) * width * 0.8),
        );

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setStatus("error");
          return;
        }

        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, width, height);

        const pixels = ctx.getImageData(0, 0, width, height).data;
        let output = "";

        for (let y = 0; y < height; y += 1) {
          for (let x = 0; x < width; x += 1) {
            const index = (y * width + x) * 4;
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
            const contrast = Math.max(0, Math.min(1, brightness * 1.15 - 0.05));
            const charIndex = Math.min(
              ASCII_CHARS.length - 1,
              Math.max(0, Math.round(contrast * (ASCII_CHARS.length - 1))),
            );
            output += ASCII_CHARS[charIndex];
          }
          output += "\n";
        }

        if (!cancelled) {
          setAscii(output);
          setStatus("ready");
        }
      };

      img.onerror = () => {
        if (!cancelled) {
          setStatus("error");
        }
      };
    };

    renderAscii();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto rounded-2xl p-0 sm:p-1">
      {status === "ready" ? (
        <pre className="m-0 overflow-hidden whitespace-pre text-[6px] leading-[0.8] text-[#ccc] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono">
          {ascii}
        </pre>
      ) : status === "error" ? (
        <div className="flex min-h-[180px] items-center justify-center rounded-lg border border-dashed border-zinc-700 text-center text-sm text-zinc-400">
          Image unavailable
        </div>
      ) : (
        <div className="flex min-h-[180px] items-center justify-center rounded-lg border border-zinc-800/50 text-sm text-zinc-400">
          Loading ASCII image...
        </div>
      )}
    </div>
  );
}
