import Image from "next/image";
import { Navigation, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapEmbed } from "@/components/map-embed";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";
import { Reveal } from "@/components/motion/reveal";

export function LocationPreview() {
  const a = siteConfig.address;

  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-5 md:py-24 lg:px-8">
        <Reveal direction="right" className="md:col-span-2 flex flex-col justify-center gap-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Find us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Easy on, easy off</h2>
          <p className="text-base text-muted-foreground">
            Take {siteConfig.highway.interstate} to {siteConfig.highway.exit}. Watch
            for the lit Marathon price sign — that&apos;s us.
          </p>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/roadside-sign-sunset.jpg"
              alt="Marathon roadside price sign visible from PA-61 at sunset"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"
            />
          </div>

          <address className="space-y-1 not-italic">
            <p className="flex items-start gap-2 text-base font-medium">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-700" />
              <span>
                {a.street}
                <br />
                {a.city}, {a.state} {a.zip}
              </span>
            </p>
          </address>
          <div>
            <Button
              asChild
              className="group gap-2 bg-blue-600 text-white shadow-[0_0_0_0_rgba(37, 99, 235,0.6)] transition-shadow hover:bg-blue-400 hover:shadow-[0_0_30px_2px_rgba(37, 99, 235,0.45)]"
            >
              <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Get directions
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal direction="left" className="md:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <MapEmbed />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
