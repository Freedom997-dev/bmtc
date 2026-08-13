# Findings — 2026-08-11

Ordered by impact. Verified against the actual repo (build run, files read),
not inferred from the change log.

---

## 1. Malformed Tailwind arbitrary-value classes silently disable glow/gradient effects (8 files)

**Severity:** Medium — visual, not functional. No error anywhere (build/lint/TS all pass), which is why it shipped.

**Root cause:** An HTML `class` attribute splits on whitespace. Tailwind's
`bg-[...]` / `shadow-[...]` arbitrary-value syntax requires spaces to be
written as `_` inside the brackets. These classes instead contain a **literal
space** after the first `rgba()` argument, e.g. `rgba(37, 99, 235,0.18)`
instead of `rgba(37,99,235,0.18)` or `rgba(37,_99,_235,0.18)`. The browser
sees `bg-[radial-gradient(...rgba(37,` as one (non-existent) class and `99,`
as another, so the intended utility never matches any generated CSS — the
effect is simply absent, with no console error.

**Where it appears:**
| File | Line | Effect lost |
|---|---|---|
| `app/about/page.tsx` | 40 | Hero radial glow |
| `app/amenities/page.tsx` | 21 | Hero radial glow |
| `app/contact/page.tsx` | 42 | Hero radial glow |
| `app/services/page.tsx` | 20 | Hero radial glow |
| `components/sections/cta-banner.tsx` | 12, 36 | Background radial glow + button hover shadow |
| `components/sections/service-detail-row.tsx` | 68 | Icon radial glow |
| `components/sections/location-preview.tsx` | 51 | Button hover shadow |
| `components/gallery.tsx` | 73 | Gradient tile #1 of 3 |

**Fix:** replace the literal space with `_` (or drop it — `rgba` doesn't need
a space after commas). E.g.:
```diff
- bg-[radial-gradient(ellipse_at_top,_rgba(37, 99, 235,0.18),_transparent_60%)]
+ bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.18),_transparent_60%)]
```
A repo-wide search/replace of `", 99, 235"` → `",99,235"` catches all 8
instances in one pass (verify each afterward — `service-detail-row.tsx` and
`gallery.tsx` use a different gradient shape so check the surrounding syntax
still matches).

**Likely origin:** the 2026-05-21 "Marathon brand retheme" changelog entry
describes a bulk `sed` swap of `amber-*` → `blue-*` classes; the RGB triplet
for the new blue (`37, 99, 235`) was probably introduced with copy-pasted
spacing from a non-Tailwind context (e.g. a design tool's CSS export) and
never adjusted for arbitrary-value syntax.

---

## 2. Structured-data `image` field points to a file that doesn't exist

**Severity:** Medium — affects SEO rich-result eligibility, not the visible page.

**File:** `components/structured-data.tsx:15`
```ts
image: `${siteConfig.url}/images/hero.jpg`,
```
`public/images/` contains `hero-marathon-sky.jpg`, not `hero.jpg`. This URL
is embedded in the site's `LocalBusiness`/`GasStation`/`TruckStop` JSON-LD —
Google's Rich Results Test and any crawler that fetches `image` directly will
get a 404. This is separate from `app/opengraph-image.tsx` (which is fine —
Next generates that route dynamically); this is an independent, incorrect
hard-coded path.

**Fix:** point it at an existing file, e.g. `/images/hero-marathon-sky.jpg`.

---

## 3. Unconfirmed hours published as a hard commitment (contradicts `CLAUDE.md`)

**Severity:** Medium — business/trust risk, not code risk.

`CLAUDE.md`'s business-facts table lists **Hours: TBD — likely 24/7 — Needs
owner confirmation**, and the project rule states: *"Never invent business
details — leave `TODO: confirm with owner` markers in `lib/site-config.ts`
until the owner confirms."*

But `lib/site-config.ts:30-38` hard-codes `"Open 24 hours"` for all seven
days with no `TODO` marker, and this value is:
- shown in the footer on every page,
- baked into the `LocalBusiness` JSON-LD `openingHoursSpecification`
  (`components/structured-data.tsx:30-45`) as `00:00`–`23:59`, which Google
  will index and may surface directly in search results / Google Business
  Profile-adjacent panels.

If the actual hours differ even slightly (e.g. the store closes but the fuel
island stays open, or vice versa), a driver could show up to a locked door
having trusted the site — worse for a "diesel near me" audience than no
hours shown at all.

**Fix:** either get the owner to confirm 24/7 explicitly, or replace with a
neutral placeholder + `TODO` comment per the CLAUDE.md rule, and drop the
`openingHoursSpecification` block until confirmed (a missing field is safer
than a wrong one in schema.org).

---

## 4. Placeholder email published as real contact info (same pattern as #3)

**Severity:** Medium — business/trust risk.

`CLAUDE.md` lists **Email: TBD — Needs owner confirmation**, but
`lib/site-config.ts:22` hard-codes `info@bluemountaintravelcenter.com` with
no `TODO`, and it's live as a clickable `mailto:` link in the footer
(`components/layout/site-footer.tsx:92-97`) and as the JSON-LD `email` field.
If this inbox doesn't exist or isn't monitored, customer messages silently
vanish. It's also the default `to` address for the contact form's Resend
fallback (`app/actions/contact.ts:28`) when `CONTACT_TO_EMAIL` isn't set.

**Fix:** confirm with the owner before launch, or gate it behind an explicit
`TODO` + fall back to phone-only contact until confirmed.

---

## 5. Stale "placeholder" copy on the Amenities page

**Severity:** Low — content/copy only.

`app/amenities/page.tsx:48-57` tells visitors:
> "These are placeholder tiles for now — drop real photos into
> `/public/images/gallery/` and update `components/gallery.tsx`..."

But per the 2026-05-21 changelog ("Gallery rebuilt with 8 real photos...")
and `components/gallery.tsx`, the gallery already uses 8 real owner-provided
photos from `/public/images/` (not `/public/images/gallery/`, which doesn't
exist). This is leftover scaffold copy that was never removed when real
photos landed — it's showing site visitors an internal dev note.

**Fix:** delete or rewrite that paragraph now that real photos are in place.

---

## 6. Address missing directional suffix vs. confirmed value

**Severity:** Low — data consistency.

`CLAUDE.md`'s table lists the confirmed street as **"511 PA-61 S"** (with
"S" for South, matching the highway-access note "PA-61 South" right below
it). `lib/site-config.ts:11` has `street: "511 PA-61"` — missing the `S`.
This propagates to the footer address, Google Maps search link
(`googleMapsUrl()`), and JSON-LD `streetAddress`. Not necessarily wrong (USPS
may not require the suffix), but it doesn't match the value CLAUDE.md marked
"Confirmed," so it's worth a quick owner/USPS check rather than assuming.

---

## 7. `npm audit` reports 17 vulnerabilities (2 low, 3 moderate, 12 high), untriaged

**Severity:** Needs triage — not evaluated for exploitability here.

Ran during this review after `npm install` (dependencies weren't installed
in the working tree). Given this is a static marketing site with a single
server action (Resend email) and no user auth/database, actual exposure is
likely low, but the 12 "high" findings should be looked at at least once —
run `npm audit` for details and `npm audit fix` for the non-breaking subset
before launch.

---

## 8. `.env.local.example` referenced in `CLAUDE.md` but missing from the repo

**Severity:** Low — developer experience only.

The 2026-05-11 changelog entry lists `.env.local.example` as part of the
initial scaffold, but it isn't in the repo root. Someone setting up the
project locally has no documented list of the env vars the code actually
reads: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
`CONTACT_FROM_EMAIL` (all referenced in `lib/site-config.ts` and
`app/actions/contact.ts`).

**Fix:** add it back with those four keys documented.

---

## What's solid (worth noting, not just bugs)

- **Build/lint/TS all pass cleanly** — no regressions from recent theme/motion work.
- **Contact form**: honeypot field for spam (`app/actions/contact.ts:23-25`), zod validation shared between client and server, graceful "not configured yet, call us" fallback when `RESEND_API_KEY` is absent — good defensive design for a site that may launch before email is wired up.
- **Accessibility basics**: footer address uses semantic `<address>`, form fields use `<Label htmlFor>` pairing, mobile nav sheet has `aria-label`, images have descriptive `alt` text.
- **SEO plumbing**: per-page `metadata` + canonical URLs, `sitemap.ts`/`robots.ts` present and correct, `prefers-reduced-motion` respected throughout the motion primitives.
