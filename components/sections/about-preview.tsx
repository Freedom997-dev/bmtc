import Link from "next/link";
import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function AboutPreview() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="flex flex-col justify-center gap-5">
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
            <Button asChild variant="outline">
              <Link href="/about">Learn our story →</Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(251,191,36,0.18),_transparent_55%)]"
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <Mountain className="h-12 w-12 text-amber-300" />
            <p className="max-w-xs text-pretty text-base text-slate-300">
              Photo placeholder — drop a facility photo at{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                /public/images/facility.jpg
              </code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
