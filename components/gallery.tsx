"use client";

import {
  Fuel,
  UtensilsCrossed,
  ShowerHead,
  ParkingSquare,
  ShoppingBasket,
  Coffee,
  Sofa,
  WashingMachine,
  Wifi,
  Truck,
  Mountain,
  Sunrise,
  type LucideIcon,
} from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

type Tile = { icon: LucideIcon; caption: string };

const tiles: Tile[] = [
  { icon: Fuel, caption: "Diesel lanes" },
  { icon: ParkingSquare, caption: "Truck parking" },
  { icon: ShowerHead, caption: "Private showers" },
  { icon: UtensilsCrossed, caption: "Restaurant" },
  { icon: ShoppingBasket, caption: "Convenience store" },
  { icon: Coffee, caption: "24/7 coffee" },
  { icon: Sofa, caption: "Driver lounge" },
  { icon: WashingMachine, caption: "Laundry" },
  { icon: Wifi, caption: "Free WiFi" },
  { icon: Truck, caption: "RV-friendly" },
  { icon: Sunrise, caption: "Dawn departures" },
  { icon: Mountain, caption: "Mountain views" },
];

export function Gallery() {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
      {tiles.map((t, i) => {
        const Icon = t.icon;
        return (
          <StaggerItem key={t.caption}>
            <div
              className={`hover-lift group relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white`}
            >
              <div
                aria-hidden
                className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${
                  i % 3 === 0
                    ? "bg-[radial-gradient(circle_at_30%_30%,_rgba(251,191,36,0.22),_transparent_55%)]"
                    : i % 3 === 1
                      ? "bg-[radial-gradient(circle_at_70%_70%,_rgba(56,189,248,0.18),_transparent_55%)]"
                      : "bg-[radial-gradient(circle_at_50%_30%,_rgba(167,139,250,0.18),_transparent_55%)]"
                }`}
              />
              <div className="relative flex h-full flex-col items-start justify-between p-5">
                <Icon
                  className="h-7 w-7 text-amber-300/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-medium text-slate-200">{t.caption}</p>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
