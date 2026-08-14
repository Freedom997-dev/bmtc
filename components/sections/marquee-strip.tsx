import {
  Fuel,
  Coffee,
  ParkingSquare,
  Wifi,
  Truck,
  Clock,
} from "lucide-react";
import { Marquee } from "@/components/motion/marquee";

const items = [
  { icon: Clock, label: "Open 24/7" },
  { icon: Fuel, label: "Diesel & Gas" },
  { icon: ParkingSquare, label: "30+ Parking Spots" },
  { icon: Coffee, label: "Hot Coffee Anytime" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Truck, label: "RVs Welcome" },
];

export function MarqueeStrip() {
  return (
    <div className="relative bg-slate-950 text-white border-y border-blue-600/20">
      <Marquee
        duration={36}
        items={items.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 text-red-500" />
            <span>{label}</span>
          </span>
        ))}
      />
    </div>
  );
}
