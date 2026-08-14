import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, googleMapsUrl } from "@/lib/site-config";
import { mainNav } from "@/lib/nav";

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
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  const a = siteConfig.address;

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-md"
            />
            <p className="text-base font-semibold tracking-tight">
              {siteConfig.name}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{siteConfig.shortTagline}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {mainNav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Visit us</p>
          <address className="space-y-2 not-italic text-sm text-muted-foreground">
            <div className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {a.street}
                <br />
                {a.city}, {a.state} {a.zip}
              </span>
            </div>
            <a
              href={googleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Get directions →
            </a>
          </address>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Reach us</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-foreground"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4" />
              <div className="space-y-0.5">
                {dayOrder.map((d) => (
                  <div key={d} className="flex gap-2">
                    <span className="w-9">{dayLabel[d]}</span>
                    <span>{siteConfig.hours[d]}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Built for drivers, by people who appreciate the road.</p>
        </div>
      </div>
    </footer>
  );
}
