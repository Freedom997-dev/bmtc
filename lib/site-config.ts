export const siteConfig = {
  name: "Blue Mountain Travel Center",
  legalName: "Blue Mountain Travel Center LLC",
  tagline: "Your Highway Home — 24/7 Diesel, Food, Showers & Parking",
  shortTagline: "Fuel up. Eat well. Rest easy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bmtcplaza.com",
  description:
    "Full-service truck stop and travel center in the USA. Diesel, hot food, clean showers, laundry, driver lounge, and 24/7 truck parking.",

  address: {
    street: "511 PA-61",
    city: "Schuylkill Haven",
    state: "PA",
    zip: "17972",
    country: "US",
  },

  geo: { lat: 40.6448189, lng: -76.1412458 },

  phone: "+1-570-968-4037",
  phoneDisplay: "(570) 968-4037",
  email: "info@bluemountaintravelcenter.com",

  category: "Gas station & convenience store (travel center)",

  rating: { value: 5.0, count: 10, source: "Google" },

  googleBusinessUrl: "https://maps.google.com/?cid=10931707795226198303",

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
    exit: "Exit 116 (PA-901) → PA-61 South",
  },

  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },

  whyUs: [
    { title: "30+ truck spots", body: "Spacious, well-lit parking with overnight stay welcome." },
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
  const { lat, lng } = siteConfig.geo;
  const label = encodeURIComponent(siteConfig.name);
  return `https://www.google.com/maps?q=${lat},${lng}(${label})&z=16&output=embed`;
}
