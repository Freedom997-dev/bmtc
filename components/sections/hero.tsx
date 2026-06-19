import Link from "next/link";
import { Phone, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";
import { CinematicHeroBg } from "@/components/cinematic-hero-bg";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { GoogleRatingBadge } from "@/components/google-rating-badge";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <CinematicHeroBg videoSrc="/videos/hero.mp4" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 md:py-32 lg:py-40 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-200 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <MapPin className="h-3.5 w-3.5" />
              {siteConfig.highway.interstate} · {siteConfig.address.state} · Open right now
            </span>
            <GoogleRatingBadge variant="dark" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Your highway home —{" "}
            <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              24/7 diesel, food, showers & parking
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
            {siteConfig.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group gap-2 bg-blue-600 text-white shadow-[0_0_0_0_rgba(37, 99, 235,0.6)] transition-shadow hover:bg-blue-400 hover:shadow-[0_0_40px_2px_rgba(37, 99, 235,0.45)]"
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
                <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Get directions
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-slate-300 hover:bg-white/5 hover:text-white"
            >
              <Link href="/services">
                See all services
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            <Stat label="Open" value="24 / 7" />
            <NumericStat label="Truck spots" value={300} suffix="+" />
            <Stat label="Showers" value="Hourly clean" />
            <Stat label="WiFi" value="Free" />
          </dl>
        </Reveal>
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

function NumericStat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-wider text-slate-400">{label}</dt>
      <dd className="text-lg font-semibold text-white">
        <AnimatedNumber value={value} suffix={suffix} />
      </dd>
    </div>
  );
}
