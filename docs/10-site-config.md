# 10 — Site Config (single source of truth)

**File:** `lib/site-config.ts`
**Status:** planned — placeholder values until owner confirms

## Goal

One typed object that every page, header, footer, JSON-LD block, and metadata helper reads from. Changing a business fact = editing one file = the whole site updates.

## Shape (TypeScript)

```ts
export const siteConfig = {
  name: "Blue Mountain Travel Center",
  legalName: "Blue Mountain Travel Center LLC",
  tagline: "Your Highway Home — 24/7 Diesel, Food, Showers & Parking",
  url: "https://bluemountaintravelcenter.com",        // production URL
  description: "Full-service truck stop on ... offering diesel, hot food, clean showers, and 24/7 parking.",
  address: {
    street: "TODO: confirm street",
    city: "TODO: confirm city",
    state: "TODO: confirm state",                     // 2-letter (e.g., "PA")
    zip: "TODO: confirm zip",
    country: "US",
  },
  geo: { lat: 0, lng: 0 },                            // for JSON-LD + map embed
  phone: "+1-555-555-5555",                           // E.164 for tel:
  phoneDisplay: "(555) 555-5555",                     // pretty for UI
  email: "info@bluemountaintravelcenter.com",
  hours: {                                            // 24/7 by default for truck stops
    monday: "Open 24 hours",
    tuesday: "Open 24 hours",
    wednesday: "Open 24 hours",
    thursday: "Open 24 hours",
    friday: "Open 24 hours",
    saturday: "Open 24 hours",
    sunday: "Open 24 hours",
  },
  highway: {
    interstate: "TODO: e.g., I-81",
    exit: "TODO: exit / mile marker",
  },
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
```

## Consumers

Everything reads from this:

- `app/layout.tsx` — metadata + JSON-LD
- `components/layout/site-header.tsx` — name, phone
- `components/layout/site-footer.tsx` — name, address, hours, phone, email, social
- `components/structured-data.tsx` — LocalBusiness JSON-LD
- `components/map-embed.tsx` — geo + address for the Google Maps URL
- `app/sitemap.ts`, `app/robots.ts` — uses `url`
- `app/opengraph-image.tsx` — name, tagline

## Rule

**Never hard-code a business fact anywhere else.** If you find one, move it here.
