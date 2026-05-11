export const siteConfig = {
  name: "Blue Mountain Travel Center",
  legalName: "Blue Mountain Travel Center LLC",
  tagline: "Your Highway Home — 24/7 Diesel, Food, Showers & Parking",
  shortTagline: "Fuel up. Eat well. Rest easy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bluemountaintravelcenter.com",
  description:
    "Full-service truck stop and travel center in the USA. Diesel, hot food, clean showers, laundry, driver lounge, and 24/7 truck parking.",

  address: {
    street: "TODO: confirm street",
    city: "TODO: confirm city",
    state: "PA",
    zip: "TODO",
    country: "US",
  },

  geo: { lat: 40.1657, lng: -77.6347 },

  phone: "+1-555-555-5555",
  phoneDisplay: "(555) 555-5555",
  email: "info@bluemountaintravelcenter.com",

  hours: {
    monday: "Open 24 hours",
    tuesday: "Open 24 hours",
    wednesday: "Open 24 hours",
    thursday: "Open 24 hours",
    friday: "Open 24 hours",
    saturday: "Open 24 hours",
    sunday: "Open 24 hours",
  },

  highway: {
    interstate: "I-81",
    exit: "TODO: confirm exit / mile marker",
  },

  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },

  whyUs: [
    { title: "300+ truck spots", body: "Spacious, well-lit parking with overnight stay welcome." },
    { title: "Spotless showers", body: "Cleaned hourly — a real shower after a long haul." },
    { title: "Hot food till late", body: "Restaurant + grab-and-go open when the highway is quiet." },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function googleMapsUrl(): string {
  const a = siteConfig.address;
  const q = encodeURIComponent(
    `${siteConfig.name}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function googleMapsEmbedSrc(): string {
  const a = siteConfig.address;
  const q = encodeURIComponent(
    `${siteConfig.name}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`,
  );
  return `https://www.google.com/maps?q=${q}&output=embed`;
}
