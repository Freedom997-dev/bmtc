import Link from "next/link";
import { Phone, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.18),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-amber-500/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28 lg:py-32 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-200">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.highway.interstate} · {siteConfig.address.state}
          </span>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your highway home —{" "}
            <span className="text-amber-300">24/7 diesel, food, showers & parking</span>
          </h1>

          <p className="max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
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
              <Link href="/services">See all services →</Link>
            </Button>
          </div>
        </div>

        <dl className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-4">
          <Stat label="Open" value="24 / 7" />
          <Stat label="Truck spots" value="300+" />
          <Stat label="Showers" value="Cleaned hourly" />
          <Stat label="WiFi" value="Free" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-wider text-slate-400">{label}</dt>
      <dd className="text-lg font-semibold text-white">{value}</dd>
    </div>
  );
}
