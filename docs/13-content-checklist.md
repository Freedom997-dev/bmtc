# 13 — Content Checklist (for the owner)

This is everything we need from the owner to replace placeholders and ship the site. The site will work with placeholders — but it won't be useful publicly until these are filled in.

---

## Business facts (paste into `lib/site-config.ts`)

- [ ] Full street address (street, city, state, zip)
- [ ] Phone number (and a second number if there's a fuel desk line)
- [ ] Contact email
- [ ] Hours per service (usually 24/7 for the lot/fuel, but the restaurant might differ)
- [ ] Interstate + exit / mile marker
- [ ] Latitude / longitude (we can derive from the address)
- [ ] Social media handles (Facebook, Instagram — optional)

## Branding

- [x] Logo → `public/images/logo.png` (also generates `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`)
- [ ] Brand colors (primary, accent) — or accept the default modern blue + amber
- [ ] Tagline (1 short line) — or accept the placeholder

## Hero video (optional but high impact)

The hero section has a video slot at `public/videos/hero.mp4`. If you drop a file there:

- It auto-plays muted in a loop behind the hero text (mixed at 40% opacity, blended over the animated background)
- Falls back gracefully to the animated CSS background if the file is missing or fails to load
- Recommended specs: 1920×1080, 8–15 seconds, MP4 (H.264), under 8 MB. Footage to look for:
  - Slow-moving aerial of a truck pulling into the lot at dusk
  - First-person POV from the cab approaching the exit
  - Time-lapse of pumps / store / lights at night
  - Drone shot of the facility from above
- Free sources for stock truck/highway footage: Pexels, Pixabay, Coverr (all CC0 / royalty-free)

## Photos

Drop all photos into `public/images/`. Suggested set (the more the better):

- [ ] Hero — the facility at dusk/night, wide shot
- [ ] Fuel pumps / lanes
- [ ] Restaurant interior + a plated meal
- [ ] Convenience store interior
- [ ] Shower stall / driver lounge
- [ ] Truck parking lot (well-lit, ideally at night)
- [ ] Exterior signage / building from the highway
- [ ] 10–20 additional photos for the gallery

JPG is fine. Recommended resolutions: hero ≥ 1920×1080; gallery ≥ 1200×800.

## Service details

- [ ] Fuel brand (Sunoco / Shell / Pilot / independent?)
- [ ] DEF and propane offered? Y/N
- [ ] Fleet card / EFS acceptance (which cards?)
- [ ] Restaurant names on-site
- [ ] Shower count + pricing model (free with fuel? per-use?)
- [ ] Laundry available? Number of machines
- [ ] Truck parking spot count, free vs. reserved
- [ ] RV welcome? Hookups available?
- [ ] CAT scales? Truck wash? Tire service partners?

## About-page copy

- [ ] Founding year / how long in operation
- [ ] Owner / family / company background (1–2 short paragraphs)
- [ ] Mission statement (we can draft, owner edits)

## Testimonials (3 short quotes)

For each: quote, attribution (first name + role / route, e.g., "Mike — OTR driver, I-81").
The owner can collect these from regulars or pull short Google review snippets.

## Optional integrations

- [ ] Resend API key (for the contact form to deliver real email)
- [ ] Google Analytics or Vercel Analytics opt-in
- [ ] Custom domain to attach in Vercel
