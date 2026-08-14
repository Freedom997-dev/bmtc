import { siteConfig } from "@/lib/site-config";

export type NavItem = { label: string; href: string; external?: boolean };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fuel Card", href: "/fuel-card" },
  { label: "Amenities", href: "/amenities" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: siteConfig.googleBusinessUrl, external: true },
  { label: "Contact", href: "/contact" },
];
