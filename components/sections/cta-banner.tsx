import Link from "next/link";
import { Phone, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";
import { Reveal } from "@/components/motion/reveal";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(37, 99, 235,0.18),_transparent_55%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-40" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between md:py-24 lg:px-8">
        <Reveal direction="right">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-400"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
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
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button
              asChild
              size="lg"
              className="group gap-2 bg-red-600 text-white shadow-[0_0_0_0_rgba(225,27,34,0.6)] transition-shadow hover:bg-red-500 hover:shadow-[0_0_40px_2px_rgba(225,27,34,0.55)]"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Call {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group gap-2 border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Get directions
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-slate-300 hover:bg-white/5 hover:text-white"
            >
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
