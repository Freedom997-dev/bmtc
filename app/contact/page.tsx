import type { Metadata } from "next";
import { Phone, Mail, MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Address, phone, hours, and contact form for ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

const dayOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;
const dayLabel: Record<(typeof dayOrder)[number], string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export default function ContactPage() {
  const a = siteConfig.address;

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
            Contact & Location
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Talk to us. Or just roll in.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            We&apos;re open 24/7 on {siteConfig.highway.interstate}. Call ahead, get
            directions, or send us a quick message below.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="flex flex-col gap-7">
            <div>
              <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
                Get in touch
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                The fastest way is a call
              </h2>
            </div>

            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-800 dark:text-blue-400">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base font-semibold hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-800 dark:text-blue-400">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-semibold hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-800 dark:text-blue-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <address className="text-base font-semibold not-italic">
                    {a.street}
                    <br />
                    {a.city}, {a.state} {a.zip}
                  </address>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="h-auto px-0 text-sm font-medium"
                  >
                    <a
                      href={googleMapsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Get directions
                    </a>
                  </Button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-800 dark:text-blue-400">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours</p>
                  <ul className="mt-1 grid gap-0.5 text-sm">
                    {dayOrder.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="w-20 text-muted-foreground">{dayLabel[d]}</span>
                        <span>{siteConfig.hours[d]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
              Send a message
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              We&apos;ll write back during business hours
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For anything urgent, call us. We&apos;re always open.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
            Find us on the map
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            On {siteConfig.highway.interstate}, {siteConfig.highway.exit}
          </h2>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
