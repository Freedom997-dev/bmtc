import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Fuel, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fuel Card",
  description: `Fleet fuel cards accepted at ${siteConfig.name} on ${siteConfig.highway.interstate}.`,
  alternates: { canonical: "/fuel-card" },
};

export default function FuelCardPage() {
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
            Fuel Card
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Fleet cards welcome at the pump
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Running a fleet or driving under a company account? We accept major
            fleet fuel cards at {siteConfig.name}, right on {siteConfig.highway.interstate}.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="flex flex-col gap-5">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Fuel up, no cash or personal card needed
            </h2>
            <p className="text-base text-muted-foreground">
              Swipe your fleet fuel card at the pump or inside at the register,
              same as you would at any major travel center. Our Marathon diesel
              lanes are built for class 8 trucks, and our team can help with any
              card questions on-site.
            </p>
            <p className="text-base text-muted-foreground">
              <em>
                Accepted fuel card networks are a placeholder pending owner
                confirmation.
              </em>{" "}
              Drop the real list of accepted networks (EFS, Comdata, Fuelman,
              TCH, etc.) into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                app/fuel-card/page.tsx
              </code>
              .
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="hover-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-800 dark:text-blue-400">
                <Fuel className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Marathon diesel, 24/7
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Well-lit lanes built for big rigs, open every hour of every
                  day.
                </p>
              </div>
            </div>
            <div className="hover-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-800 dark:text-blue-400">
                <CreditCard className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Fleet accounts welcome
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Have questions about fleet pricing or a specific card
                  network? Call ahead and we&apos;ll walk you through it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Questions about your fuel card?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Call ahead and we&apos;ll confirm your card works before you
              pull in.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4" />
                Call {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact us →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
