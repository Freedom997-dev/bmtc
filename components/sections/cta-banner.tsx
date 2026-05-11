import Link from "next/link";
import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(251,191,36,0.18),_transparent_55%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Pulling in tonight?
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Call ahead, or just roll in. We&apos;re always open.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Questions about parking, fuel, or fleet accounts? Talk to us — we&apos;re
            happy to help before you arrive.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button asChild size="lg" className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:bg-white/5 hover:text-white">
            <Link href="/contact">Contact us →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
