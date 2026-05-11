# 01 — Site Overview

## Purpose

A marketing website for **Blue Mountain Travel Center LLC** that helps truck drivers and travelers find services, hours, and location, and that ranks well in local search.

## High-level structure

Five pages, all built with Next.js App Router:

| Route | Purpose | Status |
|---|---|---|
| `/` | Home — hero, service highlights, amenities, location, testimonials, CTA | planned |
| `/about` | Story, mission, history | planned |
| `/services` | Detailed breakdown of fuel, food, showers/laundry, parking | planned |
| `/amenities` | Photo gallery + extras (WiFi, ATM, store, lounge) | planned |
| `/contact` | Address, embedded Google Map, hours, phone, contact form | planned |

Shared layout: **Site Header** (logo, nav, "Call Now" button) and **Site Footer** (hours, address, phone, copyright) wrap every page via `app/layout.tsx`.

## Key principles

- **Mobile first.** Most truckers will hit this on a phone.
- **One-tap to call / navigate.** `tel:` and Google Maps deep links on every page.
- **Single source of truth.** All business info lives in `lib/site-config.ts`.
- **Server Components by default.** Only the mobile nav drawer and the contact form are Client Components.
- **No backend DB.** Contact form sends email via Resend Server Action.
- **Accessible.** Semantic HTML, alt text, focus states, ≥ AA contrast.

## What's out of scope

Online booking, accounts, blog/news, multi-language, live fuel prices, loyalty programs. All deferrable to a phase 2 without rework.
