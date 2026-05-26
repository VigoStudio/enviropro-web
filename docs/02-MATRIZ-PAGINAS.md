# PASO 2 — Matriz de Páginas y Arquitectura de URLs

> **Objetivo:** definir TODAS las URLs del nuevo sitio antes de codear nada. Esto se vuelve la fuente de verdad para el desarrollo, el sitemap.xml, y la estrategia SEO local.

---

## 2.1 Páginas core (estáticas — siempre presentes)

| URL | Título SEO | Prioridad sitemap | Idioma |
|---|---|---|---|
| `/` | EnviroPro Miami — 24/7 Water, Mold & Fire Damage Restoration | 1.0 | EN |
| `/es/` | EnviroPro Miami — Restauración de Daños por Agua, Moho y Fuego 24/7 | 1.0 | ES |
| `/about` | About EnviroPro — South Florida's Trusted Restoration Experts Since [año] | 0.7 | EN |
| `/es/nosotros` | Sobre EnviroPro — Expertos en Restauración en el Sur de Florida | 0.7 | ES |
| `/contact` | Contact EnviroPro — 24/7 Emergency Restoration Services | 0.9 | EN |
| `/es/contacto` | Contactar EnviroPro — Servicio de Emergencia 24/7 | 0.9 | ES |
| `/service-areas` | Service Areas — South Florida Coverage Map | 0.6 | EN |
| `/es/zonas-de-servicio` | Zonas de Servicio — Cobertura en el Sur de Florida | 0.6 | ES |
| `/gallery` | Before & After Gallery — Real Restoration Projects | 0.6 | EN |
| `/es/galeria` | Galería Antes y Después — Proyectos Reales | 0.6 | ES |
| `/reviews` | Customer Reviews & Testimonials | 0.6 | EN |
| `/es/testimonios` | Reseñas y Testimonios de Clientes | 0.6 | ES |
| `/blog` | Restoration Tips & Resources | 0.5 | EN |
| `/es/blog` | Consejos y Recursos de Restauración | 0.5 | ES |
| `/privacy` | Privacy Policy | 0.1 | EN |
| `/terms` | Terms & Conditions | 0.1 | EN |
| `/es/privacidad` | Política de Privacidad | 0.1 | ES |
| `/es/terminos` | Términos y Condiciones | 0.1 | ES |
| `/404` | Page Not Found | — | — |

**Total páginas core: 18**

---

## 2.2 Páginas de servicio (pilares SEO)

Cada servicio = una página pilar profunda (1500+ palabras, schema `Service`).

| URL EN | URL ES | Schema |
|---|---|---|
| `/services/water-damage-restoration` | `/es/servicios/restauracion-danos-por-agua` | Service |
| `/services/mold-removal-remediation` | `/es/servicios/remocion-y-remediacion-de-moho` | Service |
| `/services/fire-smoke-damage` | `/es/servicios/danos-por-fuego-y-humo` | Service |
| `/services/hurricane-emergency-response` | `/es/servicios/respuesta-emergencia-huracanes` | Service |
| `/services/carpet-upholstery-cleaning` | `/es/servicios/limpieza-alfombras-tapiceria` | Service |

**Total páginas de servicio: 10 (5 EN + 5 ES)**

---

## 2.3 Matriz Programmatic SEO Local (el oro)

Esta es la estrategia que va a generar la mayor cantidad de llamadas orgánicas. Cada celda = una página única optimizada para "[servicio] in [ciudad]".

### Ciudades objetivo (10) — agrupadas por condado

**Miami-Dade County (6):**
- Miami
- Miami Beach
- Coral Gables
- Pinecrest
- Kendall
- Doral
- Hialeah

**Broward County (3):**
- Fort Lauderdale
- Hollywood
- Pembroke Pines

### Matriz 5 servicios × 10 ciudades = 50 páginas locales (EN) + 50 (ES) = **100 páginas locales**

#### Estructura de URL

**Inglés:**
```
/water-damage-restoration-miami
/water-damage-restoration-miami-beach
/water-damage-restoration-coral-gables
...
/mold-removal-miami
/mold-removal-miami-beach
...
```

**Español:**
```
/es/restauracion-danos-por-agua-miami
/es/restauracion-danos-por-agua-miami-beach
...
```

> **Nota estratégica:** URLs sin `/services/` para las páginas locales — más cortas, mejor para SEO local, coinciden con el patrón de búsqueda. Las páginas pilar quedan en `/services/` para diferenciar.

---

## 2.4 Plantilla de página local (lo que tiene cada una de las 100 páginas)

Cada página local debe tener:

1. **H1 dinámico:** "Water Damage Restoration in Miami, FL — 24/7 Emergency Response"
2. **Hero con teléfono local prominente** (Miami / Broward según ciudad)
3. **Schema markup `LocalBusiness` + `Service`** con `areaServed` específico
4. **Mapa Google Maps embebido** centrado en la ciudad
5. **Bloque de contenido único** (mín. 600 palabras): específico de esa ciudad + servicio. Ejemplo: clima, frecuencia de problemas, código postal típico, vecindarios cubiertos. NO duplicar contenido entre páginas.
6. **3-4 testimonios filtrados** de clientes de esa zona (si existen)
7. **Sección FAQs específica** ("How fast do you respond in [city]?", "Do you work with [city] insurance companies?")
8. **CTA repetido 3 veces:** Hero, mitad, final
9. **Trust badges + licencias FL**
10. **Internal linking:** a páginas pilar de servicios + a otras ciudades cercanas

---

## 2.5 Blog — semillas iniciales (post-lanzamiento, no en MVP)

Estos no van en el lanzamiento pero quedan en el roadmap:

| Post | Keyword objetivo |
|---|---|
| "How Fast Should Water Damage Be Cleaned Up?" | "how fast water damage cleanup" |
| "Mold Growth Timeline After Water Damage" | "how long until mold grows after water damage" |
| "Insurance Claim Tips for Hurricane Damage in Florida" | "florida hurricane insurance claim tips" |
| "Black Mold vs Mildew — How to Tell the Difference" | "black mold vs mildew" |
| "What to Do in the First 24 Hours After a Flood" | "first 24 hours after flood what to do" |

---

## 2.6 Conteo total del sitio nuevo

| Tipo | Cantidad |
|---|---|
| Páginas core EN | 9 |
| Páginas core ES | 9 |
| Páginas de servicio EN | 5 |
| Páginas de servicio ES | 5 |
| Páginas locales programáticas EN | 50 |
| Páginas locales programáticas ES | 50 |
| **TOTAL al lanzamiento** | **128 páginas** |

> **Cómo se logra esto sin que tome 6 meses:** las 100 páginas locales se generan vía **Content Collections de Astro + datos en JSON/YAML**. Una sola plantilla `.astro` lee el array de combinaciones servicio×ciudad y genera las 100 páginas en build. Es una de las razones por las que Astro le gana a Next.js aquí.

---

## 2.7 Sitemap.xml y hreflang

- Generar `sitemap.xml` automático con Astro Sitemap integration
- Implementar `hreflang` para cada par EN/ES:
  ```html
  <link rel="alternate" hreflang="en-us" href="https://enviropro.net/water-damage-restoration-miami" />
  <link rel="alternate" hreflang="es-us" href="https://enviropro.net/es/restauracion-danos-por-agua-miami" />
  <link rel="alternate" hreflang="x-default" href="https://enviropro.net/water-damage-restoration-miami" />
  ```
- `robots.txt` permitiendo todo excepto `/admin/` si llegamos a usar Decap CMS

---

## 2.8 Validación con el cliente antes de desarrollar

Antes de escribir una línea de código, llevar al cliente esta lista y confirmar:

1. ✅ ¿Las 10 ciudades cubren bien su área operativa real?
2. ✅ ¿Confirma los 5 servicios? (¿falta alguno? ¿quiere quitar carpet cleaning?)
3. ✅ ¿Sigue Orlando en el alcance o lo quitamos? (el sitio actual lo menciona pero la dirección física es Miami)
4. ✅ ¿Tiene reviews reales por ciudad que pueda compartir?
5. ✅ ¿Tiene fotos antes/después de trabajos reales?
6. ✅ ¿Cuáles son sus aseguradoras partners? (para sección Trust)
