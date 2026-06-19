import {
  Fuel,
  Coffee,
  ShowerHead,
  ParkingSquare,
  Wifi,
  Truck,
  Clock,
} from "lucide-react";
import { Marquee } from "@/components/motion/marquee";

const items = [
  { icon: Clock, label: "Open 24/7" },
  { icon: Fuel, label: "Diesel & Gas" },
  { icon: ShowerHead, label: "Spotless Showers" },
  { icon: ParkingSquare, label: "300+ Truck Spots" },
  { icon: Coffee, label: "Hot Coffee Anytime" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Truck, label: "RVs Welcome" },
];

export function MarqueeStrip() {
  return (
    <div className="relative bg-slate-950 text-amber-100 border-y border-amber-400/15">
      <Marquee
        duration={36}
        items={items.map(({ icon: Icon, label }) => (
          <span className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 text-amber-400" />
            <span>{label}</span>
          </span>
        ))}
      />
    </div>
  );
}
