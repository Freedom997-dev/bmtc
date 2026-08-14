# 04 — Services Page

**Route:** `/services`
**File:** `app/services/page.tsx`
**Status:** planned

## Goal

Give drivers a complete, scannable breakdown of every service the center offers. Each service has its own focused block.

## Sections

1. **Page hero** — H1 "Services" + tagline
2. **Fuel** — Diesel + gas details, DEF, propane (if offered), bays/lanes count, fleet card acceptance
3. **Food** — Restaurant name(s), cuisine, hours, convenience store / deli, coffee
4. **Lounge** — Driver lounge + WiFi + TVs (no showers/laundry — not available at this location)
5. **Parking & overnight stay** — Number of spots, free vs. reserved, security/lighting, RV welcome
6. **Bottom CTA** — "Questions? Call us" with phone number

Showers and laundry are **not available at this location** and were removed from the service list (2026-08-14). The old combined "Showers & Lounge" card became a standalone **Lounge** service (WiFi + TVs, no shower/laundry copy) — driver lounge stays a core service, not folded into Amenities. "Truck Parking" was renamed to just **Parking**. Fleet fuel card acceptance has its own page at `/fuel-card` (`app/fuel-card/page.tsx`).

Each block: image on one side, copy + bullets on the other (alternating).

## Data dependencies

- `lib/services.ts` — full service descriptions, bullets, image paths

## Content needed from owner

- Fuel brand (Sunoco / Shell / Pilot / independent?)
- Which specific fleet fuel card networks are accepted (EFS, Comdata, Fuelman, TCH, etc.) — placeholder text lives in `app/fuel-card/page.tsx` until confirmed
- Restaurant names on-site
- Parking spot count, free vs. reserved
- Photos of each service area
