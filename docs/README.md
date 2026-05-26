# EnviroPro — Plan de Migración Completo

> **Cliente:** Enviro Pro USA (Miami, FL)
> **Agencia:** VigoStudio.io
> **Cotización:** $5,000 USD
> **Duración estimada:** 4 semanas
> **Stack:** Astro + Tailwind CSS + GSAP (disciplinado) + Cloudflare Pages

---

## Cómo leer este paquete

Los 4 documentos están pensados para leerse en orden. Cada uno es la base del siguiente:

1. **[01-AUDITORIA.md](./01-AUDITORIA.md)** — Estado actual de enviropro.net, qué conservar, qué eliminar
2. **[02-MATRIZ-PAGINAS.md](./02-MATRIZ-PAGINAS.md)** — Las 128 páginas del sitio nuevo y la estrategia programmatic SEO local
3. **[03-WIREFRAME-HOME.md](./03-WIREFRAME-HOME.md)** — Diseño del Home mobile-first orientado a conversión
4. **[04-SETUP-TECNICO.md](./04-SETUP-TECNICO.md)** — Configuración del proyecto Astro lista para empezar

---

## Resumen ejecutivo

### El problema con el sitio actual
- Corre WordPress + Slider Revolution + WooCommerce: lento, frágil, costoso de mantener
- Meta tag `format-detection=no` está **bloqueando que los teléfonos sean tappeables** en móvil (autosabotaje en un negocio de emergencia)
- Cero schema markup, cero SEO local, cero versión en español (en Miami)
- URLs duplicadas (`/water-damage/` y `/enviropro/water-damage/`) = penalización SEO
- Formulario dice "We're currently offline" en un servicio 24/7

### Lo que ganamos con el rediseño
- **Performance**: de Slider Revolution pesado → Astro HTML estático (LCP <1.8s)
- **SEO local**: 100 landing pages programáticas (5 servicios × 10 ciudades × 2 idiomas)
- **Bilingüe completo**: EN/ES con hreflang correcto (Miami es 70%+ hispano)
- **Schema markup**: LocalBusiness + EmergencyService + Service + FAQPage + Review
- **Mobile conversion**: sticky CTA bar, click-to-call sin bloqueos, WhatsApp integration
- **Hosting**: Cloudflare Pages gratis, CDN global, deploy automático desde GitHub
- **Mantenimiento**: tú controlas todo desde el repo, cero plugins que actualizar

---

## Cronograma de 4 semanas

| Semana | Foco | Entregables |
|---|---|---|
| **1** | Discovery + estrategia | Auditoría firmada, matriz de páginas aprobada, brand audit, copy brief, lista de assets a pedir al cliente |
| **2** | Diseño + copy | Wireframes alta fidelidad, sistema de diseño, copy EN y ES de Home + servicios + páginas locales (plantillas) |
| **3** | Desarrollo | Repo Astro, componentes core, Home funcional, páginas de servicios, generación de las 100 páginas locales |
| **4** | SEO + lanzamiento | Schema markup, sitemap, redirects 301, Search Console, Analytics, Core Web Vitals, capacitación cliente, GO LIVE |

---

## Lo que necesitas pedirle al cliente antes de codear

Antes de la semana 2, conseguir:

- [ ] **Logo en SVG** (no PNG)
- [ ] **Brand guidelines** si las hay, o aprobar paleta propuesta
- [ ] **Acceso al sitio actual** (WP admin) para extraer contenido valioso
- [ ] **Acceso a Google Business Profile** (crítico para SEO local)
- [ ] **Acceso a Google Analytics actual** (para no romper conversión tracking)
- [ ] **Acceso a Google Search Console** (para ver qué rankea hoy)
- [ ] **# de licencia Florida DBPR**
- [ ] **Lista real de aseguradoras** con las que trabajan
- [ ] **Lista real de certificaciones** (IICRC, EPA, BBB rating)
- [ ] **Año de fundación** real
- [ ] **Fotos antes/después** de trabajos reales (10-20 sets)
- [ ] **Confirmación de ciudades** servidas realmente
- [ ] **Aprobación de los 5 servicios** propuestos
- [ ] **WhatsApp Business activo** (para el botón)
- [ ] **Email oficial del cliente** (no el de la agencia anterior)

---

## Decisiones clave que tomamos (y por qué)

| Decisión | Por qué |
|---|---|
| **Astro en vez de Next.js** | Sitio mayormente estático, mejor performance, menor complejidad para mantenimiento |
| **GSAP con disciplina** | Animaciones que aportan a conversión, no que distraen del CALL NOW |
| **Sin CMS en MVP** | Contenido cambia poco, Markdown en repo es suficiente. Decap CMS si el cliente lo pide en fase 2 |
| **Cloudflare Pages vs Vercel** | Más generoso en free tier, mejor CDN para tráfico US, integra bien con dominio en CF |
| **Programmatic SEO local** | Donde está el dinero en este nicho: "[servicio] near me" + "[servicio] [ciudad]" |
| **Bilingüe EN/ES desde día 1** | Miami es mercado hispano, competidores no lo hacen, ventaja inmediata |
| **Sin Slider Revolution ni Elementor** | Causa raíz del problema actual, eliminar de origen |

---

## Próximo paso inmediato

Mientras yo terminaba estos documentos, tú estabas en Cloudflare Pages. Cuando vuelvas:

1. Lee la **auditoría** primero (te servirá para la conversación con el cliente)
2. Revisa la **matriz de páginas** y dime si quieres ajustar ciudades o servicios
3. Mira el **wireframe** y dime qué cambiarías
4. Cuando todo esté validado, ejecutamos el **setup técnico** juntos

Cuando estés listo, dime: **"vamos por el setup"** y arrancamos el Prompt 1 para Claude Code.
