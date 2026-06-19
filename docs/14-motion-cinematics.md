# 14 — Motion & Cinematics

A small motion system that gives the site a contemporary, cinematic feel without becoming a portfolio site.

## Libraries

- **`motion`** (the package formerly known as Framer Motion) — declarative animations with `useReducedMotion`, `useInView`, `useScroll`, `useTransform`
- **`lenis`** — global smooth scroll

Both are Client Components only. The site stays Server Components by default; only the motion wrappers run on the client.

## Reusable primitives — `components/motion/`

| Component | Purpose |
|---|---|
| `<Reveal direction delay>` | Fade + slide-in on viewport entry. Wraps any element. |
| `<StaggerGroup>` + `<StaggerItem>` | A list/grid where children animate in sequence on enter. |
| `<AnimatedNumber value suffix>` | Count up from 0 to `value` when scrolled into view. |
| `<Parallax amount>` | Translate child vertically based on scroll position. |
| `<SmoothScroll />` | Mounted once in `app/layout.tsx`. Sets up `Lenis`. |
| `<Marquee items duration>` | Looping horizontal ticker with edge fade-outs. |

All of them call `useReducedMotion()` and fall back to a still / instant state when the user prefers reduced motion.

## Cinematic hero background — `components/cinematic-hero-bg.tsx`

Layered background for the hero, top-to-bottom:

1. **Static amber radial gradient** at the top — sunrise glow
2. **`bg-aurora`** — three colored radial gradients (cyan / amber / violet) that slowly drift and pulse via 28s `aurora-shift` keyframe
3. **`.streak` × 5** — diagonal light streaks that fly across the viewport every 7–10 s, suggesting headlights / taillights
4. **Amber halo** at bottom — implies a glow on the lot
5. **`bg-grain`** at 6% opacity — subtle film noise via inline SVG `feTurbulence`
6. **Optional `<video>`** at `/videos/hero.mp4` — auto-plays muted loop at 40% opacity with `mix-blend-mode: screen` over the cinematic layer. Drops out cleanly if the file 404s.
7. **Bottom fade** to `slate-950` — blends into the next section

All keyframes live in `app/globals.css`. Reduced-motion media query overrides them globally.

## Where motion is applied

- **Hero** — text & stats fade in stagger, stat numbers count up, live "pulse" dot on the location pill, CTAs glow on hover
- **MarqueeStrip** (new section between Hero and ServicesStrip) — infinite ticker with key amenities
- **ServicesStrip** — cards stagger in, lift + glow on hover, icons scale on hover
- **AboutPreview** — text and decorative panel reveal from opposite sides; decorative panel has subtle parallax
- **ServicesDetail rows** — alternate left/right reveal direction per row
- **AmenitiesGrid** — fast stagger across all amenity tiles, hover lift + icon rotation
- **WhyUs** — stagger group, hover lift
- **LocationPreview** — split reveals (text vs map)
- **Testimonials** — staggered cards
- **CtaBanner** — split reveals, animated aurora background, glowing primary CTA
- **Gallery** (amenities page) — stagger across all tiles, hover scale + rotate on icon
- **Inner pages** — uniform animated hero header (aurora + radial glow) on `/about`, `/services`, `/amenities`, `/contact`

## Tuning the motion

- Adjust `--duration` constants in `components/motion/reveal.tsx` (currently 0.6s reveal, 0.5s stagger items, 0.08s default stagger gap)
- Aurora speed: change `aurora-shift` duration in `app/globals.css` (default 28s)
- Streak speeds: per-streak `animation-duration` and `animation-delay` in `app/globals.css`
- Smooth-scroll feel: tune `lerp` and `duration` in `components/motion/smooth-scroll.tsx`

## Performance notes

- All scroll animations use `IntersectionObserver` via `motion`'s `whileInView` — extremely cheap
- `lenis` runs one `requestAnimationFrame` loop and only mutates `scrollTop` — no layout thrash
- The cinematic background is pure CSS / SVG; no JS frame loop, no canvas, no WebGL
- `prefers-reduced-motion` disables every animation system-wide (no opt-out needed)
- Bundle additions: `motion` ≈ 14 KB gzip, `lenis` ≈ 3 KB gzip
