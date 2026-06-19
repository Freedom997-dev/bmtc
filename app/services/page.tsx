import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServicesDetail } from "@/components/sections/services-detail";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Diesel, food, showers, laundry, driver lounge, and 24/7 truck parking at ${siteConfig.name}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
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
            Services
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Everything you need under one roof
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Fuel, food, rest, and parking — done right and open 24/7.
          </p>
        </div>
      </section>

      <ServicesDetail />

      <section className="bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Questions about fleet accounts or bulk fuel?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              We&apos;re happy to talk through fleet pricing, fuel cards, and stopover
              arrangements for crews.
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
