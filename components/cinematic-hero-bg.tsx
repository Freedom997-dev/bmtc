"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function CinematicHeroBg({
  videoSrc,
  photoSrc = "/images/hero-marathon-sky.jpg",
}: {
  videoSrc?: string;
  photoSrc?: string;
}) {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;
    const v = document.createElement("video");
    v.src = videoSrc;
    v.preload = "metadata";
    v.onloadedmetadata = () => setVideoReady(true);
    v.onerror = () => setVideoReady(false);
  }, [videoSrc]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-slate-950">
      {photoSrc && (
        <Image
          src={photoSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Diagonal contrast wash — darkens bottom-left where text lives, leaves upper-right photo clean. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-950/50 to-slate-950/10" />

      {/* Top edge subtle darkening to anchor the live pill / nav. */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/40 to-transparent" />

      {/* Bottom fade to slate-950 so the marquee strip transitions cleanly. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Single moving streak (kept) — feels like a passing headlight without overwhelming the photo. */}
      <div className="absolute inset-0">
        <span className="streak streak-2" />
        <span className="streak streak-4" />
      </div>

      {/* Subtle Marathon brand halo at bottom — small chromatic accent. */}
      <div className="absolute -bottom-24 left-1/2 h-48 w-[110%] -translate-x-1/2 rounded-[100%] bg-blue-600/12 blur-3xl" />

      {/* Very subtle grain. */}
      <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />

      {videoSrc && videoReady && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
