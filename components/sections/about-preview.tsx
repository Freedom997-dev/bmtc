import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function AboutPreview() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <Reveal direction="right" className="flex flex-col justify-center gap-5">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
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
            <div className="relative aspect-[4/3] h-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/station-dusk.jpg"
                alt="Blue Mountain Travel Center at dusk — Marathon station with the Eagle Mart store"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-transparent"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
