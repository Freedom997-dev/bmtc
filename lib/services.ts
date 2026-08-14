import { Fuel, UtensilsCrossed, Sofa, ParkingSquare, type LucideIcon } from "lucide-react";

export type Service = {
  id: "fuel" | "food" | "lounge" | "parking";
  name: string;
  short: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  hasPhoto: boolean;
};

export const services: Service[] = [
  {
    id: "fuel",
    name: "Fuel",
    short: "Marathon diesel & gas, 24/7",
    description:
      "Marathon-branded diesel lanes for big rigs and standard pumps for cars, RVs, and pickups, open every hour of every day, with a price sign you can spot from the highway.",
    bullets: [
      "Marathon diesel for class 8 trucks",
      "Regular, mid, and premium gasoline",
      "Big well-lit price sign on PA-61",
      "Fleet cards welcome",
    ],
    icon: Fuel,
    image: "/images/fuel-marathon-pumps.jpg",
    imageAlt: "Marathon fuel pumps under the canopy at Blue Mountain Travel Center",
    hasPhoto: true,
  },
  {
    id: "food",
    name: "Food & Store",
    short: "Eagle Mart convenience store",
    description:
      "Eagle Mart on-site: coffee, cold drinks, sandwiches, snacks, milk, and ice. Categorized cooler walls for sport drinks, water, dairy, and soda so you can grab what you need fast.",
    bullets: [
      "Hot coffee around the clock",
      "Cold drinks: soda, sport, water, dairy",
      "Cold sandwiches, snacks, ice",
      "Convenience store essentials",
    ],
    icon: UtensilsCrossed,
    image: "/images/store-categories.jpg",
    imageAlt: "Eagle Mart convenience-store beverage wall labeled Coffee, Sport, Water, Dairy, Soda",
    hasPhoto: true,
  },
  {
    id: "lounge",
    name: "Lounge",
    short: "Quiet driver lounge + WiFi",
    description:
      "A quiet driver lounge with free WiFi and TVs to relax and recharge between runs.",
    bullets: [
      "Comfortable driver lounge",
      "Free WiFi throughout",
      "TVs",
      "Quiet space to relax between runs",
    ],
    icon: Sofa,
    image: "/images/lounge.jpg",
    imageAlt: "Driver lounge at Blue Mountain Travel Center",
    hasPhoto: false,
  },
  {
    id: "parking",
    name: "Parking",
    short: "Overnight parking welcome",
    description:
      "30+ well-lit parking spots with overnight stay welcome, security cameras, and easy on/off highway access.",
    bullets: [
      "30+ parking spots",
      "Well-lit lot, security cameras",
      "Overnight stay welcome",
      "RVs and oversized vehicles OK",
    ],
    icon: ParkingSquare,
    image: "/images/parking.jpg",
    imageAlt: "Well-lit parking lot at night",
    hasPhoto: false,
  },
];
