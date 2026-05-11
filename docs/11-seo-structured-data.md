# 11 — SEO & Structured Data

**Files:**
- `app/layout.tsx` — root metadata + JSON-LD injection
- `app/sitemap.ts` — generates `/sitemap.xml`
- `app/robots.ts` — generates `/robots.txt`
- `app/opengraph-image.tsx` — auto-generated OG image
- `components/structured-data.tsx` — JSON-LD `LocalBusiness` schema

**Status:** planned

## Goal

Rank well for **local searches** like:

- "truck stop near [city]"
- "diesel near me"
- "[interstate] travel center"
- "showers truck stop [city]"

## Per-page metadata

Every page exports a `Metadata` object from Next.js. Pattern:

```ts
export const metadata: Metadata = {
  title: "Services | Blue Mountain Travel Center",
  description: "Diesel, hot food, clean showers, and 24/7 truck parking at Blue Mountain Travel Center.",
  alternates: { canonical: "/services" },
};
```

Title template in root layout: `%s | Blue Mountain Travel Center`.

## JSON-LD `LocalBusiness` schema

Injected once in root layout via `<script type="application/ld+json">`. Includes:

- `@type`: `["LocalBusiness", "GasStation", "TruckStop"]`
- `name`, `legalName`, `url`, `telephone`, `email`
- `address` (PostalAddress)
- `geo` (GeoCoordinates)
- `openingHoursSpecification` (array, one per day)
- `priceRange`
- `image` (hero photo URL)
- `amenityFeature` (array — WiFi, Showers, Parking, etc.)

## Open Graph / Twitter

- `app/opengraph-image.tsx` generates a 1200×630 PNG with brand colors + name + tagline
- Twitter card uses the same image (`summary_large_image`)

## Other SEO essentials

- `sitemap.ts` lists all five pages with `lastModified`
- `robots.ts` allows all crawlers, points to sitemap
- All images via `next/image` with descriptive `alt`
- Heading hierarchy is strict: one `<h1>` per page
