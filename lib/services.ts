import { Fuel, UtensilsCrossed, ShowerHead, ParkingSquare, type LucideIcon } from "lucide-react";

export type Service = {
  id: "fuel" | "food" | "showers" | "parking";
  name: string;
  short: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "fuel",
    name: "Fuel",
    short: "Diesel & gas, 24/7",
    description:
      "High-flow diesel lanes for big rigs and standard pumps for cars, RVs, and pickups — open every hour of every day.",
    bullets: [
      "High-flow diesel for class 8 trucks",
      "Regular, mid, and premium gasoline",
      "DEF at the pump",
      "Fleet cards & EFS welcome",
    ],
    icon: Fuel,
    image: "/images/pumps.jpg",
    imageAlt: "Fuel pumps at Blue Mountain Travel Center",
  },
  {
    id: "food",
    name: "Food",
    short: "Hot meals & quick bites",
    description:
      "A full restaurant for drivers who want to sit down and a convenience store stocked with everything you need on the road.",
    bullets: [
      "Sit-down restaurant with hot meals",
      "Grab-and-go deli, snacks, drinks",
      "Hot coffee around the clock",
      "Convenience store essentials",
    ],
    icon: UtensilsCrossed,
    image: "/images/restaurant.jpg",
    imageAlt: "Restaurant interior with warm lighting",
  },
  {
    id: "showers",
    name: "Showers & Lounge",
    short: "Clean showers + driver lounge",
    description:
      "Private, spotless showers cleaned between every guest, a quiet driver lounge with WiFi and TVs, and on-site laundry.",
    bullets: [
      "Private showers cleaned hourly",
      "Comfortable driver lounge",
      "Free WiFi throughout",
      "On-site laundry machines",
    ],
    icon: ShowerHead,
    image: "/images/showers.jpg",
    imageAlt: "Clean shower facility at Blue Mountain Travel Center",
  },
  {
    id: "parking",
    name: "Truck Parking",
    short: "Overnight parking welcome",
    description:
      "Hundreds of well-lit truck and RV parking spots with overnight stay welcome, security cameras, and easy on/off highway access.",
    bullets: [
      "Hundreds of truck-sized spots",
      "Well-lit lot, security cameras",
      "Overnight stay welcome",
      "RVs and oversized vehicles OK",
    ],
    icon: ParkingSquare,
    image: "/images/parking.jpg",
    imageAlt: "Well-lit truck parking lot at night",
  },
];
