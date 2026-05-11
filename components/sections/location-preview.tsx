import { Navigation, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapEmbed } from "@/components/map-embed";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";

export function LocationPreview() {
  const a = siteConfig.address;

  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-5 md:py-20 lg:px-8">
        <div className="md:col-span-2 flex flex-col justify-center gap-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Find us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Easy on, easy off
          </h2>
          <p className="text-base text-muted-foreground">
            Take {siteConfig.highway.interstate} to {siteConfig.highway.exit}. The
            lot is well-lit, wide-aisled, and built for trucks of every size.
          </p>
          <address className="space-y-1 not-italic">
            <p className="flex items-start gap-2 text-base font-medium">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
              <span>
                {a.street}
                <br />
                {a.city}, {a.state} {a.zip}
              </span>
            </p>
          </address>
          <div>
            <Button asChild className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300">
              <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-3">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
