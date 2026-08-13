import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AmenitiesGrid } from "@/components/sections/amenities-grid";
import { Gallery } from "@/components/gallery";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Amenities & Gallery",
  description: `WiFi, ATM, store, lounge, laundry, and more at ${siteConfig.name}.`,
  alternates: { canonical: "/amenities" },
};

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden className="absolute inset-0 bg-aurora opacity-50" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37, 99, 235,0.18),_transparent_60%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-400"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
            Amenities & Gallery
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The small things that make a stop worth it
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Free WiFi, hot coffee, clean lounges, a friendly store, and a parking
            lot that&apos;s wide enough for the rig you actually drive.
          </p>
        </div>
      </section>

      <AmenitiesGrid title="Amenities at a glance" subtitle="Everything you can count on, every visit." />

      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mb-8 flex flex-col gap-2">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              Gallery
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A look around the center
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground">
              These are placeholder tiles for now. Drop real photos into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                /public/images/gallery/
              </code>{" "}
              and update <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                components/gallery.tsx
              </code>{" "}
              to swap them in.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Plan your stop
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              We&apos;ll keep the lights on and the coffee fresh.
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
