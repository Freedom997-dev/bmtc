"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function Marquee({
  items,
  duration = 30,
  className,
}: {
  items: ReactNode[];
  duration?: number;
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent"
      />
      {/* This ticker is decorative, ambient motion (not essential UI), so it's exempt from prefers-reduced-motion unlike the rest of the site's animations. */}
      <MotionConfig reducedMotion="never">
        <motion.div
          className="flex w-max items-center gap-12 py-4 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white/90"
            >
              {item}
              <span className="text-red-500/70">·</span>
            </span>
          ))}
        </motion.div>
      </MotionConfig>
    </div>
  );
}
