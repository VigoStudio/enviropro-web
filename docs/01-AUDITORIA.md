# PASO 1 — Auditoría de enviropro.net (estado actual)

> **Cliente:** Enviro Pro USA · Miami, FL
> **Negocio:** Servicio de emergencia 24/7 — Water Damage, Mold, Fire/Smoke Damage
> **Cobertura:** South Florida (Dade, Broward, Monroe, Palm Beach) + Orlando
> **Teléfono master:** 1-877-216-6653

---

## 1.1 Hallazgos técnicos (lo que se debe eliminar o arreglar)

### Stack actual detectado
- **WordPress** + **WooCommerce** (innecesario, no venden online)
- **Slider Revolution 6.7.38** (pesado, mata el LCP — confirmado en el código)
- **reCAPTCHA** (peor UX, debe reemplazarse por Cloudflare Turnstile)
- **Lucky Orange** (analytics third-party, ralentiza)
- **Plugin de accesibilidad** mal implementado (toolbar inferior con `javascript:void(0)`)

### Problemas críticos detectados en el HTML
1. **Logo duplicado 4 veces** en el header (`<img>` repetidos del mismo PNG)
2. **Enlaces rotos**: redes sociales apuntan a `#` (no hay perfiles enlazados)
3. **Estructura de URLs duplicada**: existen `/water-damage/` Y `/enviropro/water-damage/` (riesgo SEO grave: contenido duplicado)
4. **Meta tag bloqueando teléfono**: `format-detection: telephone=no` — esto **impide que el móvil reconozca números como tappeables** automáticamente. Para un servicio de emergencia esto es un disparo en el pie.
5. **Viewport no escalable**: `user-scalable=no` — viola WCAG, problema de accesibilidad
6. **Imágenes sin lazy loading nativo ni dimensiones explícitas** (CLS alto)
7. **Sin schema markup detectable** (LocalBusiness, EmergencyService, Service)
8. **Sin Open Graph optimizado** para compartir en WhatsApp/redes
9. **Copyright dice "© 2026"** — desincronizado o erróneo
10. **Email de soporte expuesto en el footer**: `emilio@lighthouseinternetmedia.com` (¡no es siquiera del cliente, es de la agencia anterior!)

### Contenido valioso a preservar (NO perder en migración)
- Testimonio: *Mellissa Clark, Pinecrest, FL*
- Tips de Water Damage (contenido SEO útil)
- Checklist para asociaciones de condominios (contenido único, gold para SEO)
- Logos de asociaciones/partners (5 imágenes en footer)
- Certificación Angie's List
- Dirección física: 14262 SW 140th St, Miami, FL 33186

### URLs actuales a mapear con 301 (CRÍTICO)
| URL vieja | URL nueva propuesta |
|---|---|
| `/water-damage/` | `/services/water-damage` |
| `/enviropro/water-damage/` | 301 → `/services/water-damage` |
| `/mold-damage/` | `/services/mold-removal` |
| `/enviropro/mold-damage/` | 301 → `/services/mold-removal` |
| `/fire-damage/` | `/services/fire-smoke-damage` |
| `/enviropro/fire-damage/` | 301 → `/services/fire-smoke-damage` |
| `/hurricane-emergency-services/` | `/services/hurricane-emergency` |
| `/about-us/` | `/about` |
| `/contact-us/` | `/contact` |
| `/privacy-policy/` | `/privacy` |
| `/terms-conditions/` | `/terms` |

---

## 1.2 Hallazgos de negocio / conversión

### Lo que el sitio actual hace BIEN (conservar el espíritu)
- Teléfono visible arriba con CTA "CALL NOW"
- Tres teléfonos regionales (Miami / Broward / Orlando)
- Mensaje claro: "24/7 Emergency Service"

### Lo que está mal para conversión
- Mensaje del bot de contacto dice **"We're currently offline"** — esto en un servicio 24/7 es contradictorio y mata confianza
- Formulario genérico sin urgencia ("Your Name", "Your Email", "Subject", "Your Message") — debería preguntar tipo de emergencia y ZIP code
- No hay **botón flotante de llamada** en móvil (sticky)
- No hay opción de **WhatsApp** (público latino de Miami lo prefiere)
- Sin **prueba social en el hero** (años de experiencia, # de trabajos, certificaciones visibles)
- Sin **before/after** de trabajos reales (cero galería)
- Sin **reviews de Google embebidas** con schema (oro para SEO local + conversión)
- Sin diferenciación clara por ciudad servida

### Lo que falta y debe agregarse
- **Versión en español** completa (Miami = 70%+ hispano)
- **Página por servicio × ciudad** (programmatic SEO local)
- **Sección de Insurance partners** (las aseguradoras refieren mucho)
- **Sección "Cómo trabajamos"** (proceso 1-2-3: llamar → inspección → mitigación)
- **Sección de FAQs** con schema (gana posiciones en "People Also Ask")
- **Service area map** (mapa visible de cobertura)
- **Sticky CTA bar** en móvil (Llamar / WhatsApp)

---

## 1.3 SEO actual — qué se debe defender y qué se debe expandir

### Keywords que probablemente ya rankean (a defender con 301s)
- `enviropro` (branded)
- `enviro pro miami`
- `water damage miami` (parcial)
- `mold removal pinecrest` (por el testimonio geolocalizado)

### Oportunidades sin explotar (huecos del competidor)
**Servicios × Ubicaciones objetivo (matriz programmatic SEO):**

Servicios (5):
1. Water Damage Restoration
2. Mold Removal & Remediation
3. Fire & Smoke Damage Restoration
4. Hurricane Emergency Response
5. Carpet & Upholstery Cleaning

Ciudades/Áreas (10 prioritarias South Florida):
1. Miami
2. Miami Beach
3. Coral Gables
4. Pinecrest
5. Kendall
6. Doral
7. Hialeah
8. Fort Lauderdale (Broward)
9. Hollywood (Broward)
10. Pembroke Pines (Broward)

= **50 landing pages de SEO local programático** (lo veremos en el Paso 2)

### Tipo de búsquedas que se deben capturar
- "water damage restoration near me"
- "emergency mold removal Miami"
- "24 hour water damage company Broward"
- "flood cleanup Miami Dade"
- "restauración por inundación Miami" (español)
- "remoción de moho cerca de mí" (español)

---

## 1.4 Resumen ejecutivo de la auditoría

| Área | Estado actual | Prioridad de fix |
|---|---|---|
| **Performance** | Pobre — Slider Revolution + WordPress | 🔴 Alta |
| **Mobile UX** | Mala — meta tags que bloquean tel y zoom | 🔴 Crítica |
| **SEO técnico** | Débil — sin schema, URLs duplicadas | 🔴 Alta |
| **SEO local** | Inexistente — sin páginas por ciudad | 🔴 Alta |
| **Conversión** | Mediana — CTA visible pero formulario débil | 🟡 Media |
| **Bilingüe (ES)** | Inexistente | 🔴 Alta |
| **Trust signals** | Mediano — Angie's List visible, sin reviews | 🟡 Media |
| **Contenido** | Bueno — hay material aprovechable | 🟢 Conservar |

**Conclusión:** la migración a Astro + Tailwind no es solo cosmética, es un **rescate técnico**. El sitio actual está saboteando sus propias llamadas con meta tags mal configurados, un slider que mata el LCP, y cero estrategia local SEO.
