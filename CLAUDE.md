# CLAUDE.md — EnviroPro USA

Proyecto de migración de WordPress a Astro para **Enviro Pro USA** (Miami, FL).
Agencia: VigoStudio.io. Stack: Astro v6 + Tailwind v4 + GSAP + Cloudflare Pages.

---

## Contexto del negocio

- **Servicio:** Restauración de emergencia 24/7 — Water Damage, Mold, Fire/Smoke, Hurricane, Impact Windows
- **Cobertura:** Miami-Dade, Broward, Orlando
- **Teléfono master:** 1-877-216-6653 (siempre leer desde `src/data/business.ts`)
- **Dirección:** 14262 SW 140th St, Miami, FL 33186
- **Objetivo de conversión #1:** llamadas al `tel:` — todo lo demás es secundario
- **Mercado:** Miami es 70%+ hispano; el sitio es bilingüe EN/ES desde el día uno

---

## Reglas de arquitectura

### Fuente de datos única
Toda información del negocio (teléfonos, dirección, geo, aseguradoras, certificaciones) vive en `src/data/business.ts`. **Nunca hardcodear** datos del negocio en componentes o páginas.

### Routing bilingüe (manual, no i18n automático)
- Inglés: rutas en `/` (raíz)
- Español: rutas bajo `/es/`
- Los slugs SE TRADUCEN — no se prefijan mecánicamente:
  - `/contact` ↔ `/es/contacto`
  - `/about` ↔ `/es/nosotros`
  - `/services` ↔ `/es/servicios`
  - `/service-areas` ↔ `/es/areas-de-servicio`
- El mapa completo de slugs EN↔ES vive en `src/components/Header.astro` (`enToEs`). Actualizarlo cada vez que se agregue una página nueva.
- Cada página debe pasar `lang` y `pathname` a `BaseLayout`.

### Layouts y SEO
- `BaseLayout.astro` inyecta Header, Footer, StickyMobileBar, y el schema JSON-LD de LocalBusiness + EmergencyService.
- Props requeridas: `title`, `description`, `lang`, `pathname`.
- hreflang y canonical se calculan automáticamente desde `lang` + `pathname`.
- Para schema específico de página usar el slot `page-schema`.

---

## Tailwind v4 — tokens CSS

Este proyecto usa Tailwind v4 con `@theme` en `src/styles/global.css`. **No hay `tailwind.config.mjs`.**
Los tokens se referencian como `var(--color-trust)`, `var(--color-emergency)`, etc.

Colores principales:
- `--color-trust: #1E3A8A` — acciones consideradas, navegación, botón secundario
- `--color-emergency: #DC2626` — llamadas de emergencia, CTA principal, sticky bar
- `--color-accent: #F59E0B` — eyebrows, estrellas, badges (máx. 5% de cualquier superficie)
- `--color-ink: #0A0A0A` — texto principal
- `--color-surface: #FAFAFA` — fondo de página y tarjetas

Clases utilitarias definidas: `.btn-emergency`, `.btn-trust`, `.container-x`, `.section-y`.

---

## Regla de dos botones (INVIOLABLE)

- **Rojo (`btn-emergency`)** = llamar ahora, emergencia. Solo para `tel:` links.
- **Azul (`btn-trust`)** = agendar, aprender más, formulario. No urgente.
- Nunca intercambiar sus roles. Nunca crear una tercera variante.

---

## GSAP — uso disciplinado

- **Máximo 4 animaciones por página**, solo en el hero.
- Siempre chequear `prefers-reduced-motion`: si es `true`, setear `opacity: 1` y `transform: none` directamente sin GSAP.
- **No envolver GSAP en `DOMContentLoaded`** — los `<script>` de Astro son módulos ES (diferidos) y el evento ya habrá disparado. Ejecutar GSAP directamente.
- No usar: parallax, hero video autoplay, partículas, ScrollTrigger en above-the-fold.
- Las clases `.gsap-fade-in` y `.gsap-slide-up` inician con `opacity: 0` via CSS global — GSAP o el branch de `prefersReduced` deben resetearlas siempre.

---

## Diseño — reglas del sistema (ver DESIGN.md para detalle completo)

- **Tipografía display:** Manrope 800/700, tracking `-0.02em`. Solo para `h1` y `h2`.
- **Un solo `h1` por página** (Display scale). Secciones usan Headline scale (`h2`).
- **Cards:** bordes zinc `1px solid var(--color-border)`, `border-radius: 1rem`. Sin sombra en reposo — solo en hover. Sin `border-left` > 1px como acento de color.
- **No usar:** gradient text, glassmorphism, emoji como iconos de servicio (usar números o SVG), fotos de stock de trabajadores sonrientes con cascos.
- **Secciones alternas:** Clean Canvas (`#FAFAFA`) y Pale Surface (`#F4F4F5`) — no usar divisores ni padding extra para separar.

---

## Páginas existentes (estado actual)

| Ruta | Archivo | Estado |
|---|---|---|
| `/` | `src/pages/index.astro` | ✅ Diseño nuevo (impeccable) |
| `/es/` | `src/pages/es/index.astro` | ✅ Diseño nuevo (paridad con EN) |
| `/about` | `src/pages/about.astro` | ✅ |
| `/es/nosotros` | `src/pages/es/nosotros.astro` | ✅ |
| `/contact` | `src/pages/contact.astro` | ✅ |
| `/es/contacto` | `src/pages/es/contacto.astro` | ✅ |
| `/services` | `src/pages/services/index.astro` | ✅ |

---

## Páginas pendientes (según plan docs/)

El sitio final tiene 128 páginas. Las prioridades inmediatas:

1. **Páginas pilar de servicios** (10 páginas: 5 EN + 5 ES):
   - `/services/water-damage-restoration` ↔ `/es/servicios/restauracion-danos-por-agua`
   - `/services/mold-removal-remediation` ↔ `/es/servicios/remocion-y-remediacion-de-moho`
   - `/services/fire-smoke-damage` ↔ `/es/servicios/danos-por-fuego-y-humo`
   - `/services/hurricane-emergency-response` ↔ `/es/servicios/respuesta-emergencia-huracanes`
   - `/services/carpet-upholstery-cleaning` ↔ `/es/servicios/limpieza-alfombras-tapiceria`

2. **Páginas locales programáticas** (100 páginas via `getStaticPaths`):
   - Matriz: 5 servicios × 10 ciudades × 2 idiomas
   - Ciudades: Miami, Miami Beach, Coral Gables, Pinecrest, Kendall, Doral, Hialeah, Fort Lauderdale, Hollywood, Pembroke Pines
   - URL pattern EN: `/water-damage-restoration-miami`
   - URL pattern ES: `/es/restauracion-danos-por-agua-miami`

3. **Páginas core faltantes:** `/service-areas`, `/es/areas-de-servicio`, `/404`

---

## SEO — reglas permanentes

- Los `tel:` links usan formato e164: `href="tel:+18772166653"`. **Nunca** `format-detection: telephone=no`.
- Schema markup: LocalBusiness + EmergencyService ya en BaseLayout. Cada página de servicio necesita schema `Service`. Páginas locales necesitan `areaServed`.
- El sitemap se genera automáticamente con `@astrojs/sitemap`. No editar manualmente.
- Las 301 redirects del WordPress viejo van en `public/_redirects` (ver `docs/04-SETUP-TECNICO.md`).
- Nunca contenido duplicado entre páginas locales — cada una necesita texto único específico de esa ciudad.

---

## Lo que NO va en el MVP

No implementar sin aprobación explícita del cliente:
- CMS (Decap/Contentful/etc.)
- Blog posts con contenido real
- Booking online de citas
- Chat en vivo
- Integración CRM
- Galería con lightbox complejo
- App PWA

---

## Deploy

- **Hosting:** Cloudflare Pages (conectado a rama `main` de GitHub)
- **Build:** `npm run build` → `dist/`
- **Dev:** `npm run dev` → localhost:4321
- **No hacer push a `main`** sin que `npm run build` pase sin errores primero.
- El dominio de producción `enviropro.net` apunta al WordPress viejo — no cambiar DNS hasta aprobación del cliente.

---

## Archivos clave de referencia

- `src/data/business.ts` — fuente de verdad del negocio
- `src/styles/global.css` — tokens Tailwind v4, clases utilitarias
- `src/layouts/BaseLayout.astro` — layout principal con SEO y schema
- `src/components/Header.astro` — nav bilingüe + mapa de slugs EN↔ES
- `DESIGN.md` — sistema de diseño completo con tokens y reglas visuales
- `PRODUCT.md` — perfil del usuario, principios de diseño, anti-referencias
- `docs/` — plan completo: auditoría, matriz de páginas, wireframes, setup técnico
