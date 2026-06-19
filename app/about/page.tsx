import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description: `Get to know ${siteConfig.name} — a full-service travel center built for drivers and travelers.`,
  alternates: { canonical: "/about" },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe and well-lit",
    body: "Cameras, lighting, and on-duty staff every hour of every day.",
  },
  {
    icon: HeartHandshake,
    title: "Local hospitality",
    body: "We treat every driver and family like a neighbor pulling in.",
  },
  {
    icon: Sparkles,
    title: "Spotless facilities",
    body: "Showers, restrooms, and lounge cleaned on a strict rotation — not a marketing line.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden className="absolute inset-0 bg-aurora opacity-50" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37, 99, 235,0.18),_transparent_60%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-400"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              About
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About {siteConfig.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              We&apos;re a full-service travel center on {siteConfig.highway.interstate} —
              built around fast fuel, hot food, clean rest, and parking that&apos;s easy
              to swing into. Whatever brings you to our exit, we&apos;re glad you stopped.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="flex flex-col gap-5">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              Our story
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              A travel center, run like a small town
            </h2>
            <p className="text-base text-muted-foreground">
              Drivers spend a lot of life on the road. We started this travel center
              with one belief — the people who keep America moving deserve a stop
              that actually feels good to pull into. Bright pumps, real food, hot
              showers, and a lot you&apos;re happy to park in. No fuss.
            </p>
            <p className="text-base text-muted-foreground">
              <em>This story is a placeholder.</em> Drop your real history,
              founding year, family background, or ownership notes into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                app/about/page.tsx
              </code>
              .
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/station-dusk.jpg"
              alt="Front of Blue Mountain Travel Center — Marathon canopy with the Eagle Mart store and OPEN 24/7 sign at dusk"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
            Why drivers trust us
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight">
            Quiet operations, loud results
          </h2>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.1}>
            {trustPoints.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="hover-lift group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 hover:border-blue-600/60">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-800 transition-colors group-hover:bg-blue-600/30 dark:text-blue-400">
                      <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Stopping by? Plan your stop.
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Questions about parking, fleet accounts, or large groups? Reach out.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Contact us →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
