import Link from "next/link";
import { Mountain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function AboutPreview() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <Reveal direction="right" className="flex flex-col justify-center gap-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            About us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the drivers who keep America moving
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.name} is a full-service travel center on {siteConfig.highway.interstate}.
            Whether you&apos;re a long-haul trucker, an RV family, or a road-tripper
            taking the long way home — we&apos;re open every hour of every day with the
            fuel, food, and rest you need to keep going.
          </p>
          <div>
            <Button asChild variant="outline" className="group">
              <Link href="/about">
                Learn our story
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal direction="left">
          <Parallax amount={40} className="h-full">
            <div className="relative aspect-[4/3] h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
              <div
                aria-hidden
                className="absolute inset-0 bg-aurora opacity-50"
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <Mountain className="h-14 w-14 text-amber-300" strokeWidth={1.4} />
                <p className="max-w-xs text-pretty text-base text-slate-300">
                  Photo placeholder — drop a facility photo at{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                    /public/images/facility.jpg
                  </code>
                </p>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
