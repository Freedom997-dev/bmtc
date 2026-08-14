import {
  Wifi,
  Banknote,
  ShoppingBasket,
  Sofa,
  PawPrint,
  Clock,
  ShieldCheck,
  Truck,
  Coffee,
  type LucideIcon,
} from "lucide-react";

export type Amenity = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export const amenities: Amenity[] = [
  { id: "wifi", name: "Free WiFi", icon: Wifi },
  { id: "atm", name: "ATM on-site", icon: Banknote },
  { id: "store", name: "Convenience store", icon: ShoppingBasket },
  { id: "lounge", name: "Driver lounge", icon: Sofa },
  { id: "pets", name: "Pet-friendly area", icon: PawPrint },
  { id: "open", name: "Open 24/7", icon: Clock },
  { id: "secure", name: "Well-lit, monitored lot", icon: ShieldCheck },
  { id: "rv", name: "RVs welcome", icon: Truck },
  { id: "coffee", name: "Hot coffee 24/7", icon: Coffee },
];
