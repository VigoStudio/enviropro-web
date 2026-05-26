---
name: EnviroPro USA
description: South Florida's trusted restoration experts — 36 years, 24/7 emergency response
colors:
  trust-navy: "#1E3A8A"
  trust-navy-hover: "#1E40AF"
  emergency-red: "#DC2626"
  emergency-red-hover: "#B91C1C"
  coastal-amber: "#F59E0B"
  near-black: "#0A0A0A"
  soft-ink: "#404040"
  clean-canvas: "#FAFAFA"
  pale-surface: "#F4F4F5"
  zinc-border: "#E4E4E7"
  success-green: "#16A34A"
typography:
  display:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  btn: "0.625rem"
  card: "1rem"
spacing:
  section: "clamp(4rem, 10vw, 8rem)"
components:
  btn-emergency:
    backgroundColor: "{colors.emergency-red}"
    textColor: "{colors.clean-canvas}"
    rounded: "{rounded.btn}"
    padding: "1rem 1.5rem"
  btn-emergency-hover:
    backgroundColor: "{colors.emergency-red-hover}"
    textColor: "{colors.clean-canvas}"
    rounded: "{rounded.btn}"
    padding: "1rem 1.5rem"
  btn-trust:
    backgroundColor: "{colors.trust-navy}"
    textColor: "{colors.clean-canvas}"
    rounded: "{rounded.btn}"
    padding: "1rem 1.5rem"
  btn-trust-hover:
    backgroundColor: "{colors.trust-navy-hover}"
    textColor: "{colors.clean-canvas}"
    rounded: "{rounded.btn}"
    padding: "1rem 1.5rem"
  service-card:
    backgroundColor: "{colors.clean-canvas}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
---

# Design System: EnviroPro USA

## 1. Overview

**Creative North Star: "The Reliable Contractor"**

Like a contractor who shows up on time, names a fair price, and does exactly what they said they would. The EnviroPro design system doesn't perform credibility — it communicates capability. Every visual decision earns its place the same way a skilled tradesperson earns trust: by being clear, precise, and dependable under pressure.

The palette is built around two primary signals: navy for authority and permanence, red for immediate action. The coastal amber appears rarely — only where credentials need a visual marker (eyebrow labels, certification badges, rating stars). Its rarity is load-bearing; when amber appears, it means something. Neutrals are near-black and off-white, tinted slightly warm, never pure.

This system explicitly rejects the HomeAdvisor/Angi contractor template aesthetic: stock photos of smiling workers in hard hats, orange-yellow CTA gradients, "Get Free Quotes" hero sections, and stacked trust-badge rows. EnviroPro has operated in South Florida for 36 years. The design system's job is not to manufacture credibility — it is to get out of the way and let the credentials speak.

**Key Characteristics:**
- Two-button language: red = call now (emergency), navy = schedule or learn more (considered)
- Manrope at display and headline scale for authoritative, tight-tracked headings
- Inter for body copy — warm, legible, never clinical
- Cards with zinc borders, not floating shadows — work lives on the surface
- Amber used at ≤5% of any surface; it marks authority, not decoration
- Section rhythm driven by generous vertical spacing; horizontal padding stays consistent

## 2. Colors: The Authority Palette

Three deliberate roles — navy for trust, red for urgency, amber for credentials — against a neutral field of near-black ink and off-white surfaces.

### Primary
- **Trust Navy** (`#1E3A8A`): The brand's dominant color. Used on the primary `btn-trust` button, nav logo, header links on hover, and `--color-trust` references throughout. Signals permanence, authority, and local expertise. Hover state shifts to `#1E40AF`.

### Secondary
- **Emergency Red** (`#DC2626`): Reserved exclusively for calls to action that require immediate response — the 24/7 emergency call button, the sticky mobile bar, and urgent hero CTAs. Not used decoratively. Hover state deepens to `#B91C1C`. Every instance of this color says: call this number.

### Tertiary
- **Coastal Amber** (`#F59E0B`): Used at ≤5% of any given surface. Appears on eyebrow labels ("24/7 Emergency Response"), star ratings, certification badges, and `--color-accent` tokens. Its rarity makes it a reliable authority marker. Warning states use a darker step (`#D97706`).

### Neutral
- **Near-Black Ink** (`#0A0A0A`): Primary text color. Not pure black — a fractional warm tint prevents harshness.
- **Soft Ink** (`#404040`): Secondary and body text, captions, supporting copy.
- **Clean Canvas** (`#FAFAFA`): Primary page background and card surfaces. Off-white, never pure.
- **Pale Surface** (`#F4F4F5`): Alternating section backgrounds, sidebar callout boxes.
- **Zinc Border** (`#E4E4E7`): Card borders, dividers, table rules. Never used decoratively.
- **Success Green** (`#16A34A`): Confirmation states, insurance billing confirmation, form success.

### Named Rules
**The Two-Button Rule.** Red means call now. Navy means learn more or schedule. These two signals never swap roles, never share a color, and are never used decoratively. A page with both buttons present communicates a choice: emergency or planned. Honor that distinction on every surface.

**The Amber Rarity Rule.** Amber appears on ≤5% of any screen. If amber is appearing more frequently than navy, something is wrong with the layout's priority. Amber marks credentials; it does not decorate layout.

## 3. Typography

**Display Font:** Manrope (800, 700 weights; fallback: Inter, system-ui, sans-serif)
**Body Font:** Inter (400, 500, 600, 700 weights; fallback: system-ui, -apple-system, sans-serif)

**Character:** Manrope at large scale reads with compressed authority — the tight letter-spacing and high weight contrast make headings feel declarative, not decorative. Inter below gives warmth and legibility at reading lengths. Together they avoid both the clinical coldness of purely geometric sans and the softness of humanist pairings that would undercut the brand's professional positioning.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.15, tracking -0.02em): Hero headlines only. The `h1` on any page. Used once per page, never on section sub-headings.
- **Headline** (700, `clamp(1.75rem, 4vw, 2.5rem)`, line-height 1.2, tracking -0.02em): Section headings (`h2`). Major page divisions.
- **Title** (700, `1.25rem`, line-height 1.3, tracking -0.01em): Card titles, service names, testimonial attribution headers.
- **Body** (400, `1rem`, line-height 1.65): All reading copy. Max line length 65-75ch. Secondary body at 500 weight for lists and callouts.
- **Label** (600, `0.75rem`, line-height 1.4, tracking 0.08em, uppercase): Eyebrow labels above headings (e.g. "24/7 Emergency Response · 36 Years"), category tags, nav items. The uppercase+tracking combo is reserved exclusively for labels; never applied to body or headings.

### Named Rules
**The Single Display Rule.** One `h1` per page, one instance of display-scale type. Section headings use Headline scale, not Display. This is not a constraint — it is what makes the hero headline actually feel like one.

**The Tracking Contract.** Negative letter-spacing belongs to Manrope at display and headline scale. Positive letter-spacing belongs to Inter labels at 0.08em+. No other combination. Positive tracking on Manrope headings or negative tracking on body copy violates the system.

## 4. Elevation

This system uses **minimal ambient shadows** as structural cues, not decoration. The default state is flat. Surfaces are differentiated by background color (Clean Canvas vs. Pale Surface), not elevation. Shadows appear only in two scenarios: card hover states and floating elements (sticky bars, dropdowns).

**The Flat-By-Default Rule.** Surfaces at rest have no box-shadow. A card's identity comes from its `1px zinc border (#E4E4E7)` and its `1rem radius`, not from floating above the page. This choice directly counters the "layered SaaS card aesthetic" anti-reference.

### Shadow Vocabulary
- **Card Ambient** (`0 1px 3px rgb(0 0 0 / 0.08), 0 1px 2px rgb(0 0 0 / 0.04)`): Applied only on card hover states. Subtle lift indicating interactivity.
- **Card Lifted** (`0 10px 30px rgb(0 0 0 / 0.12), 0 4px 8px rgb(0 0 0 / 0.06)`): Active hover state for service cards and CTA containers. Communicates selection without aggression.
- **Sticky Bar** (`0 -4px 12px rgb(0 0 0 / 0.15)`): The sticky mobile emergency bar. Upward shadow only, anchoring it to the viewport bottom edge.

## 5. Components

### Buttons
Two variants, two meanings. They are never interchangeable.

- **Shape:** Rounded corners (0.625rem / 10px), consistent across both variants
- **Emergency (btn-emergency):** Background `#DC2626`, white text, padding `1rem 1.5rem`, inline-flex with 0.5rem icon gap. Hover: background deepens to `#B91C1C`, translateY(-1px), lifted shadow. Pulse animation on hero (scale 1.03, 1.2s yoyo loop) — only in hero context.
- **Trust (btn-trust):** Background `#1E3A8A`, white text, same padding. Hover: background shifts to `#1E40AF`.
- **Focus:** Both variants use `outline: 3px solid #1E3A8A; outline-offset: 2px` on `:focus-visible`. Emergency button focus ring stays navy (not red) for contrast compliance.
- **Never:** outlined/ghost variants, disabled states without explicit opacity, gradient fills.

### Service Cards
- **Corner Style:** Gently rounded (1rem / 16px)
- **Background:** Clean Canvas (`#FAFAFA`)
- **Border:** 1px solid Zinc Border (`#E4E4E7`). On hover, border shifts to Trust Navy (`#1E3A8A`) at 1px.
- **Shadow Strategy:** Flat at rest; Card Ambient shadow on hover only.
- **Internal Padding:** 1.5rem all sides
- **Icon area:** Large emoji or SVG at top (2.5-3rem), followed by Title-scale heading, then body text at Soft Ink.

**The No Side-Stripe Rule.** Cards never use `border-left` greater than 1px as a colored accent. Full border or nothing. A colored left-stripe is a contractor-template pattern — it signals budget template, not 36-year expertise.

### Navigation (Header)
- Sticky, white background, 1px Zinc Border bottom, `box-shadow: 0 1px 3px rgb(0 0 0 / 0.06)`
- Logo: Manrope bold, Trust Navy, 1.25rem
- Nav links: Inter 0.875rem, 500 weight, Near-Black, hover shifts to Trust Navy
- Language toggle (ES/EN): Inter 0.875rem semibold, Soft Ink, 2px/4px padding, hover background Pale Surface
- Emergency CTA: btn-emergency at compact size (py-2.5 px-4 desktop, py-2 px-3 mobile)
- Mobile menu: full-width dropdown, white background, stacked links with 12px/8px vertical padding

### Sticky Mobile Emergency Bar
- Fixed to viewport bottom, hidden on lg+ screens
- Two-column grid: left = call button (Emergency Red), right = WhatsApp or secondary action (Trust Navy)
- `0 -4px 12px rgb(0 0 0 / 0.15)` shadow upward
- Touch targets minimum 44px height (WCAG AA)
- Near-Black background (`#0A0A0A`)

### Testimonial / Quote Block
- White card, 1rem radius, `0 10px 30px rgb(0 0 0 / 0.08)` shadow (elevated by design — it floats as a trust signal)
- Quote text: Inter italic, 1.125rem, Near-Black
- Attribution: Inter semibold 0.875rem (name), Soft Ink regular 0.875rem (city, FL)
- No avatar photos unless real photos are available. Never placeholder/stock faces.

## 6. Do's and Don'ts

### Do:
- **Do** use Emergency Red exclusively for call-to-action elements that trigger emergency response. One color, one meaning.
- **Do** tightly track Manrope headings at -0.02em at display and headline scale. The compression is intentional authority.
- **Do** separate sections with alternating background colors (Clean Canvas / Pale Surface) rather than dividers or extra padding.
- **Do** keep amber (Coastal Amber) to eyebrow labels, star ratings, and certification markers. Its rarity is its power.
- **Do** write phone numbers as clickable `tel:` links with full e164 format. Emergency accessibility is a hard requirement.
- **Do** ensure all text meets WCAG 2.1 AA contrast: 4.5:1 for body, 3:1 for large text. Trust Navy on white passes; Emergency Red on white passes; Coastal Amber on white does NOT pass for body text.
- **Do** use `prefers-reduced-motion` to disable the hero pulse animation. The emergency CTA pulse is a nice-to-have, not a core experience.
- **Do** keep body line length at 65-75ch max. Long measures on legible copy are the mark of a site designed for mobile-only that forgot desktop.

### Don't:
- **Don't** use stock photos of smiling workers in hard hats, orange or yellow background gradients, "Get Free Quotes" banners, or stacked trust-badge rows. This is the HomeAdvisor/Angi aesthetic and it is the explicit anti-reference.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on any card, callout, or list item. Rewrite using full borders, background tints, or leading numbers/icons.
- **Don't** use gradient text (`background-clip: text`). Color emphasis comes from solid single-color choices, weight, or scale contrast.
- **Don't** use glassmorphism — blur cards, frosted panels, or backdrop-filter decorations. This is not a product interface; it is a service that needs to communicate solidity.
- **Don't** add a third button variant. Two variants exist (emergency red, trust navy) because there are exactly two types of conversion on this site. A third "ghost" or "outlined" variant dilutes both.
- **Don't** use Coastal Amber as a background color or for large text areas. It fails WCAG AA contrast against white for body-size text and is reserved as a small mark only.
- **Don't** apply positive letter-spacing to Manrope headings or negative letter-spacing to Inter body. The tracking contract is fixed.
- **Don't** replace real testimonials with placeholder/fabricated quotes. The trust signal of a real customer name and city (Pinecrest, FL) is worth more than a polished fabricated one.
