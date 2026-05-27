# EnviroPro — Project State

## Business context

- **Client**: Enviro Pro USA, Miami FL — 24/7 emergency restoration (water, mold, fire)
- **Phone**: 1-877-216-6653 (`+18772166653`)
- **Address**: 14262 SW 140th St, Miami, FL 33186
- **Agency**: VigoStudio.io
- **Stack**: Astro v6.3.7 + Tailwind v4 + GSAP + Cloudflare Pages
- **Repo**: `/Users/andrestipan/enviropro-web`

## Brand colors (approved 2026-05-26)

- Emergency red: `#DC2626` (never change)
- Brand blue: `#4384BF` (`--color-trust`)
- Brand green: `#17B794` (`--color-green`)

## Completed features

- [x] Homepage EN (`/`) — dark hero, bento services, testimonial, insurance, CTA
- [x] Homepage ES (`/es/`) — full Spanish translation, same design
- [x] Header — frosted glass (Apple-style backdrop-blur), bilingual, responsive logo
- [x] Language switcher — bidirectional slug map (not simple prefix)
- [x] Contact EN (`/contact`) + ES (`/es/contacto`) — Google Maps with real address
- [x] About EN (`/about`) + ES (`/es/nosotros`)
- [x] Hero video background — CloudFront MP4 with dark overlay
- [x] Favicon — EnviroPro PNG logo (replaces Astro default)
- [x] CLAUDE.md — permanent project instructions at repo root
- [x] `docs/` — planning docs (audit, page matrix, wireframes, setup)

## Pending pages (priority order)

1. Service pillars (10 pages): water / mold / fire / hurricane / carpet × EN + ES
2. `/service-areas` + `/es/areas-de-servicio`
3. `/404`
4. 100 programmatic local SEO pages (5 services × 10 cities × 2 langs)

## Key architectural rules

- Single data source: `src/data/business.ts`
- Tailwind v4: tokens in `@theme {}` in `src/styles/global.css` — no config file
- GSAP: no `DOMContentLoaded` wrapper (Astro ES modules are already deferred)
- Language switcher slug map lives in `src/components/Header.astro` — update when adding page pairs
- Bilingual routing: EN at `/`, ES under `/es/` with translated slugs
