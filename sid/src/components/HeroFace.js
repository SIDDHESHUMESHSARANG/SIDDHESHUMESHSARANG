"use client";

import { useEffect, useRef, useState } from "react";

const ASCII_CHARS = " .:-=+*#%@";

export default function AsciiArt() {
  const [ascii, setAscii] = useState("");
  const [status, setStatus] = useState("loading");
  const preRef = useRef(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const baseBrightnessRef = useRef(null);
  const baseAsciiRef = useRef("");
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });
  const rafRef = useRef(null);
  const frozenRef = useRef(false);

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
        // store brightness grid and base ascii
        const baseBrightness = new Float32Array(width * height);
        let output = "";

        for (let y = 0; y < height; y += 1) {
          for (let x = 0; x < width; x += 1) {
            const index = (y * width + x) * 4;
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
            const contrast = Math.max(0, Math.min(1, brightness * 1.15 - 0.05));
            baseBrightness[y * width + x] = contrast;
            const charIndex = Math.min(
              ASCII_CHARS.length - 1,
              Math.max(0, Math.round(contrast * (ASCII_CHARS.length - 1))),
            );
            output += ASCII_CHARS[charIndex];
          }
          output += "\n";
        }

        if (!cancelled) {
          widthRef.current = width;
          heightRef.current = height;
          baseBrightnessRef.current = baseBrightness;
          baseAsciiRef.current = output;
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

  useEffect(() => {
    // stop distortion when clicking/tapping outside the ascii area
    const onPointerDown = (ev) => {
      const pre = preRef.current;
      if (!pre) return;
      const path = ev.composedPath ? ev.composedPath() : ev.path || [];
      const clickedInside =
        path && path.length ? path.includes(pre) : pre.contains(ev.target);
      if (!clickedInside) {
        frozenRef.current = true;
        mouseRef.current.inside = false;
        if (baseAsciiRef.current) setAscii(baseAsciiRef.current);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    // animation loop to distort ascii around mouse
    const step = (t) => {
      if (
        frozenRef.current ||
        !baseBrightnessRef.current ||
        !mouseRef.current.inside
      ) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const w = widthRef.current;
      const h = heightRef.current;
      const base = baseBrightnessRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const radius = Math.max(3, Math.min(30, Math.floor((w + h) / 20)));
      const time = t / 1000;

      let out = "";
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = y * w + x;
          const dx = x - mx;
          const dy = y - my;
          const d2 = dx * dx + dy * dy;
          const d = Math.sqrt(d2);
          const effect = Math.exp(-d2 / (2 * radius * radius));
          // add a wavy distortion that oscillates with time and distance
          const wave = Math.sin(time * 6 - d * 0.5) * 0.35;
          let nb = base[idx] + effect * wave;
          // push brightness away from center a bit
          nb = Math.max(0, Math.min(1, nb));
          const charIndex = Math.min(
            ASCII_CHARS.length - 1,
            Math.max(0, Math.round(nb * (ASCII_CHARS.length - 1))),
          );
          out += ASCII_CHARS[charIndex];
        }
        out += "\n";
      }

      setAscii(out);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const pre = preRef.current;
    if (!pre || !baseBrightnessRef.current) return;
    const rect = pre.getBoundingClientRect();
    // compute mouse pos in ascii grid coordinates
    const mx = ((e.clientX - rect.left) / rect.width) * widthRef.current;
    const my = ((e.clientY - rect.top) / rect.height) * heightRef.current;
    mouseRef.current.x = Math.max(0, Math.min(widthRef.current - 1, mx));
    mouseRef.current.y = Math.max(0, Math.min(heightRef.current - 1, my));
  };

  const handleMouseEnter = (e) => {
    // do not unfreeze on hover; require an explicit click/tap to resume
    mouseRef.current.inside = true;
    handleMouseMove(e);
  };

  const handlePointerDown = (e) => {
    // explicit click/tap inside the ascii area should unfreeze and start distortion
    frozenRef.current = false;
    mouseRef.current.inside = true;
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    mouseRef.current.inside = false;
    // reset to base ascii
    if (baseAsciiRef.current) setAscii(baseAsciiRef.current);
  };

  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto rounded-2xl p-0 sm:p-1">
      <pre
        ref={preRef}
        onPointerDown={handlePointerDown}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="m-0 overflow-hidden whitespace-pre text-[6px] leading-[0.8] text-[#ccc] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono"
      >
        {ascii}
      </pre>
    </div>
  );
}
