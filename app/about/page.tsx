import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

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
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            About
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            We&apos;re a full-service travel center on {siteConfig.highway.interstate} —
            built around fast fuel, hot food, clean rest, and parking that&apos;s easy
            to swing into. Whatever brings you to our exit, we&apos;re glad you stopped.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
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

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(251,191,36,0.18),_transparent_55%)]"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <Mountain className="h-12 w-12 text-amber-300" />
              <p className="max-w-xs text-pretty text-sm text-slate-300">
                Photo placeholder — replace with a facility or team photo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Why drivers trust us
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight">
            Quiet operations, loud results
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-700 dark:text-amber-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
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
