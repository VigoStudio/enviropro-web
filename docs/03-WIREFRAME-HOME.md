# PASO 3 — Wireframe del Home (Mobile-First, Conversión-First)

> **Principio guía:** cada sección debe responder a una pregunta del visitante en pánico. Si una sección no aporta a la llamada telefónica, se elimina o se mueve abajo. **El éxito se mide en `tel:` clicks, no en scroll depth.**

---

## 3.1 Estructura general — 9 secciones máximo

```
┌─────────────────────────────────┐
│ 0. STICKY TOP BAR (siempre)     │  ← teléfono + idioma EN/ES
├─────────────────────────────────┤
│ 1. HERO                         │  ← promesa + CTA llamada
├─────────────────────────────────┤
│ 2. TRUST BAR                    │  ← licencias, seguros, años
├─────────────────────────────────┤
│ 3. SERVICIOS (3 tarjetas)       │  ← Water / Mold / Fire
├─────────────────────────────────┤
│ 4. CÓMO TRABAJAMOS (3 pasos)    │  ← reduce fricción mental
├─────────────────────────────────┤
│ 5. SERVICE AREAS (mapa)         │  ← "sí servimos en mi ciudad"
├─────────────────────────────────┤
│ 6. RESEÑAS GOOGLE               │  ← prueba social fresca
├─────────────────────────────────┤
│ 7. SEGUROS Y CERTIFICACIONES    │  ← reduce fricción de pago
├─────────────────────────────────┤
│ 8. FAQ                          │  ← + schema FAQPage
├─────────────────────────────────┤
│ 9. CTA FINAL + FOOTER           │  ← última oportunidad
├─────────────────────────────────┤
│ STICKY MOBILE BAR (siempre)     │  ← Call / WhatsApp flotante
└─────────────────────────────────┘
```

---

## 3.2 Sección 0 — Sticky Top Bar (header)

**Móvil (siempre visible al hacer scroll):**
```
[≡] EnviroPro    📞 877-216-6653    [EN|ES]
```

**Desktop:**
```
EnviroPro  |  Services ▾  Areas ▾  About  Reviews  Contact  |  📞 877-216-6653 [CALL NOW]
```

**Detalles técnicos:**
- Sticky con backdrop-blur (Tailwind: `backdrop-blur-md bg-white/90`)
- Click en teléfono = `<a href="tel:18772166653">` (sin meta `format-detection=no`, eso fuera)
- Toggle idioma persistente en localStorage
- Click en logo → "/" (no `/index.html`)

---

## 3.3 Sección 1 — HERO (la sección más importante del sitio)

### Versión MÓVIL (priority: load <1.5s)

```
┌─────────────────────────────────┐
│ 🟥 EMERGENCY? CALL NOW ↓        │  ← micro-banner urgencia
├─────────────────────────────────┤
│                                 │
│   Water, Mold & Fire            │
│   Damage Restoration            │  ← H1 grande, claro
│   in South Florida              │
│                                 │
│   ✓ 24/7 Emergency Response     │  ← 3 viñetas, no párrafo
│   ✓ Licensed & Insured          │
│   ✓ Insurance Approved          │
│                                 │
│   ┌─────────────────────────┐   │
│   │ 📞 CALL 877-216-6653    │   │  ← botón grande rojo
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ 💬 WhatsApp Us          │   │  ← secundario verde
│   └─────────────────────────┘   │
│                                 │
│   ⭐⭐⭐⭐⭐ 4.9 · 200+ reviews   │  ← prueba social
│                                 │
└─────────────────────────────────┘
[imagen de fondo: técnico en acción, comprimida WebP, 80kb max]
```

### Versión DESKTOP

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Water, Mold & Fire Damage         [imagen / video sutil  │
│  Restoration in South Florida       de equipo trabajando] │
│                                                            │
│  Fast. Certified. Available 24/7.                          │
│                                                            │
│  ✓ Response in 60 minutes or less                          │
│  ✓ Licensed, Bonded & Insured (FL Lic #...)                │
│  ✓ Works with all major insurance carriers                 │
│                                                            │
│  ┌────────────────────┐  ┌──────────────────┐              │
│  │ 📞 CALL 877-216... │  │ 💬 Get Free Quote│              │
│  └────────────────────┘  └──────────────────┘              │
│                                                            │
│  ⭐⭐⭐⭐⭐ 4.9 · 200+ reviews on Google                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Animaciones GSAP en el Hero (las únicas que apruebo)
1. **H1 fade-in + slide-up** al cargar (delay 100ms, duration 600ms)
2. **Viñetas con stagger** (cada una entra 100ms después de la anterior)
3. **Botón CALL NOW** con micro-pulse infinito sutil (`scale 1 → 1.02 → 1`, 2s loop)
4. **Counter animado** en stats si se usan ("2,500+ jobs completed")

**No usar:** parallax pesado, hero video autoplay, animaciones de fondo distrayentes, partículas, scroll-triggered scenes con timeline largo. Todo eso le quita atención al CALL NOW.

**Implementación:** GSAP solo importado en Home, lazy-loaded después del LCP. ScrollTrigger plugin solo si lo necesitamos para los contadores.

---

## 3.4 Sección 2 — Trust Bar

```
┌────────────────────────────────────────────────────────────┐
│   [IICRC] [Angie's List] [BBB A+] [Lic. FL] [25 Years]     │
└────────────────────────────────────────────────────────────┘
```
- Banda horizontal con logos en grayscale, color en hover
- En móvil: scroll horizontal o grid 2x3
- Schema: `Organization` con `award`, `hasCredential`

---

## 3.5 Sección 3 — Servicios (3 tarjetas grandes)

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 💧 Water    │  │ 🦠 Mold     │  │ 🔥 Fire     │
│ Damage      │  │ Removal     │  │ & Smoke     │
│             │  │             │  │             │
│ Floods,     │  │ Inspection, │  │ Cleanup,    │
│ leaks,      │  │ testing,    │  │ deodorize,  │
│ extraction  │  │ remediation │  │ restore     │
│             │  │             │  │             │
│ Learn more →│  │ Learn more →│  │ Learn more →│
└─────────────┘  └─────────────┘  └─────────────┘
```
- 3 tarjetas en desktop, 1 columna en móvil
- Cada tarjeta enlaza a su página pilar de servicio
- Hover/tap: elevación suave (Tailwind `hover:shadow-xl transition`)
- **No usar GSAP aquí**, basta con Tailwind transitions

---

## 3.6 Sección 4 — Cómo Trabajamos (3 pasos)

```
   ①              ②              ③
  CALL          ASSESS         RESTORE
  
  Llámanos      Inspección     Limpieza,
  24/7 al       gratuita en    secado y
  877-216-...   60 minutos     restauración
```
- Pasos numerados grandes (4xl/5xl)
- Línea conectora animada (SVG draw on scroll — GSAP ScrollTrigger sí aquí)
- Reduce la fricción mental: "¿qué pasa si llamo?"

---

## 3.7 Sección 5 — Service Areas (mapa)

```
┌────────────────────────────────────────────────────────────┐
│  We Serve South Florida                                    │
│                                                            │
│  [Mapa de Google con pins en Miami, Broward, etc.]         │
│                                                            │
│  Miami · Miami Beach · Coral Gables · Pinecrest · Kendall  │
│  Doral · Hialeah · Fort Lauderdale · Hollywood · Pembroke  │
│                                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Don't see your city? Call us.   │                       │
│  └─────────────────────────────────┘                       │
└────────────────────────────────────────────────────────────┘
```
- Mapa estático (imagen) o Google Maps Embed (no JS API, ahorra peso)
- Cada nombre de ciudad enlaza a su página local programática
- Internal linking poderoso para las 50 páginas locales

---

## 3.8 Sección 6 — Reseñas (Google Reviews reales)

```
┌────────────────────────────────────────────────────────────┐
│  ⭐⭐⭐⭐⭐ 4.9 on Google · 200+ reviews                      │
│                                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ ⭐⭐⭐⭐⭐ │  │ ⭐⭐⭐⭐⭐ │  │ ⭐⭐⭐⭐⭐ │                  │
│  │ "They..."│  │ "Fast..."│  │ "Saved.."│                  │
│  │ Melissa C│  │ John D.  │  │ Maria L. │                  │
│  │ Pinecrest│  │ Doral    │  │ Hialeah  │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                            │
│  [See all 200+ reviews on Google]                          │
└────────────────────────────────────────────────────────────┘
```
- Carrusel sutil en móvil, grid en desktop
- Schema `Review` + `AggregateRating`
- Idealmente conectado a Google Places API o reseñas exportadas

---

## 3.9 Sección 7 — Insurance & Certifications

```
We Work With Your Insurance:
[State Farm] [Allstate] [Citizens] [Universal] [Tower Hill] ...

Certified By:
[IICRC] [EPA] [Florida DBPR]
```
- Quita la fricción "¿me lo cubre el seguro?"
- Logos en grayscale + color en hover

---

## 3.10 Sección 8 — FAQ (con schema FAQPage)

Acordeón con 6-8 preguntas reales:
1. How fast do you respond?
2. Do you work with my insurance?
3. Is your work guaranteed?
4. Are you licensed in Florida?
5. ¿Atienden en español? *(no, en español hay que ponerlo bien)*
6. Do you provide free estimates?
7. What areas do you cover?
8. What should I do while I wait for you?

Cada Q&A renderizada como `<details>` HTML nativo (cero JS) + script `application/ld+json` con FAQPage.

---

## 3.11 Sección 9 — CTA Final + Footer

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│      Don't Wait. Every Minute Costs You More.              │
│                                                            │
│      ┌─────────────────────────────┐                       │
│      │ 📞 CALL NOW 877-216-6653    │                       │
│      └─────────────────────────────┘                       │
│                                                            │
└────────────────────────────────────────────────────────────┘

[Footer estándar: logo, links, dirección, social, copyright]
```

---

## 3.12 Sticky Mobile Bar (solo móvil, siempre visible al hacer scroll)

```
┌────────────────────────────────────────────┐
│  📞 CALL          💬 WhatsApp              │
└────────────────────────────────────────────┘
```
- Fixed bottom, alto contraste
- Aparece después de scrollear 300px (no tapa el hero inicial)
- Una de las decisiones de mayor impacto en conversión móvil

---

## 3.13 Reglas de diseño visual

| Elemento | Decisión |
|---|---|
| **Paleta principal** | Rojo emergencia (#DC2626 o similar) + Azul confianza (#0EA5E9) + Blanco |
| **Tipografía display** | Inter o Manrope (gratis, performante) |
| **Tipografía body** | Misma familia, peso 400/500 |
| **Tamaño H1 móvil** | 32-40px |
| **Tamaño botón CTA** | mín. 48x48px touch target (WCAG) |
| **Contraste mínimo** | 4.5:1 (botones rojos sobre blanco) |
| **Dark mode** | NO en MVP — un sitio de emergencia no necesita |
| **Imágenes** | Solo WebP/AVIF, lazy loading nativo, dimensiones explícitas |
| **Iconos** | Lucide icons (vienen con Astro fácilmente) |

---

## 3.14 Métricas objetivo Lighthouse al lanzar

| Métrica | Objetivo |
|---|---|
| **Performance móvil** | 95+ |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 100 |
| **LCP** | <1.8s |
| **CLS** | <0.05 |
| **INP** | <200ms |
