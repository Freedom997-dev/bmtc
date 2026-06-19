"use client";

import { useEffect, useState } from "react";

export function CinematicHeroBg({ videoSrc }: { videoSrc?: string }) {
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
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.20),_transparent_60%)]" />
      <div className="absolute inset-0 bg-aurora opacity-70" />
      <div className="absolute inset-0">
        <span className="streak streak-1" />
        <span className="streak streak-2" />
        <span className="streak streak-3" />
        <span className="streak streak-4" />
        <span className="streak streak-5" />
      </div>

      <div className="absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-amber-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />

      {videoSrc && videoReady && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
    </div>
  );
}
