"use client";

import Image from "next/image";
import {
  ShowerHead,
  ParkingSquare,
  Coffee,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

type PhotoTile = { kind: "photo"; src: string; alt: string; caption: string };
type IconTile = { kind: "icon"; icon: LucideIcon; caption: string };
type Tile = PhotoTile | IconTile;

const tiles: Tile[] = [
  {
    kind: "photo",
    src: "/images/hero-marathon-sky.jpg",
    alt: "Marathon canopy under wide blue sky at Blue Mountain Travel Center",
    caption: "Open every hour",
  },
  {
    kind: "photo",
    src: "/images/fuel-marathon-pumps.jpg",
    alt: "Marathon fuel pumps at Blue Mountain Travel Center",
    caption: "Marathon pumps",
  },
  {
    kind: "photo",
    src: "/images/station-dusk.jpg",
    alt: "Station at dusk, canopy lit, Eagle Mart on the side",
    caption: "Lit lot at dusk",
  },
  {
    kind: "photo",
    src: "/images/store-categories.jpg",
    alt: "Eagle Mart beverage wall with Coffee, Sport, Water, Dairy, Soda signage",
    caption: "Eagle Mart",
  },
  {
    kind: "photo",
    src: "/images/roadside-sign-sunset.jpg",
    alt: "Marathon roadside price sign at sunset",
    caption: "On PA-61",
  },
  {
    kind: "photo",
    src: "/images/store-beverages.jpg",
    alt: "Fully stocked beverage coolers inside Eagle Mart",
    caption: "Cold drinks",
  },
  {
    kind: "photo",
    src: "/images/eagle-canopy.jpg",
    alt: "Patriotic bunting along the canopy at Blue Mountain Travel Center",
    caption: "American hospitality",
  },
  {
    kind: "photo",
    src: "/images/eagle-canopy-front.jpg",
    alt: "Front view of the fuel canopy with red, white, and blue bunting",
    caption: "Wide and welcoming",
  },
  { kind: "icon", icon: ParkingSquare, caption: "Truck parking" },
  { kind: "icon", icon: ShowerHead, caption: "Private showers" },
  { kind: "icon", icon: Coffee, caption: "24/7 coffee" },
  { kind: "icon", icon: Wifi, caption: "Free WiFi" },
];

const accents = [
  "bg-[radial-gradient(circle_at_30%_30%,_rgba(37, 99, 235,0.22),_transparent_55%)]",
  "bg-[radial-gradient(circle_at_70%_70%,_rgba(56,189,248,0.18),_transparent_55%)]",
  "bg-[radial-gradient(circle_at_50%_30%,_rgba(167,139,250,0.18),_transparent_55%)]",
];

export function Gallery() {
  return (
    <StaggerGroup
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      stagger={0.04}
    >
      {tiles.map((t, i) => (
        <StaggerItem key={`${t.caption}-${i}`}>
          {t.kind === "photo" ? (
            <div className="hover-lift group relative aspect-square overflow-hidden rounded-2xl border border-border bg-slate-950">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
              />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white drop-shadow">
                {t.caption}
              </p>
            </div>
          ) : (
            <IconTileView icon={t.icon} caption={t.caption} accent={accents[i % 3]} />
          )}
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

function IconTileView({
  icon: Icon,
  caption,
  accent,
}: {
  icon: LucideIcon;
  caption: string;
  accent: string;
}) {
  return (
    <div className="hover-lift group relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
      <div aria-hidden className={`absolute inset-0 ${accent}`} />
      <div className="relative flex h-full flex-col items-start justify-between p-5">
        <Icon
          className="h-7 w-7 text-blue-400/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          strokeWidth={1.5}
        />
        <p className="text-sm font-medium text-slate-200">{caption}</p>
      </div>
    </div>
  );
}
