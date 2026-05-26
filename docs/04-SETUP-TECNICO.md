# PASO 4 — Setup Técnico del Proyecto Astro (Antigravity Edition)

> **Objetivo:** que en menos de 30 minutos tengas el repo corriendo en local con la estructura completa, listo para llenar contenido. Este setup asume que usas **Antigravity** (el IDE agéntico de Google basado en VS Code) como editor principal. Todo lo que aplica a VS Code aplica a Antigravity sin cambios, salvo lo indicado.

---

## 4.1 Pre-requisitos a instalar en tu Mac

Antes de tocar nada del proyecto, asegúrate de tener:

```bash
# Verifica en la terminal integrada de Antigravity (View → Terminal):
node -v     # Debe ser v20 o superior
npm -v      # Debe ser v10 o superior
git --version
```

Si te falta algo:
- **Node.js LTS**: https://nodejs.org/ (descarga la versión LTS, no la Current)
- **Git**: ya viene en Mac, si no: `xcode-select --install`
- **Antigravity**: ya lo tienes descargado ✅
- **Claude Code** (opcional pero recomendado): se instala dentro de Antigravity, ver §4.1.1
- **GitHub Desktop** (opcional, alternativa simple a Git por terminal): https://desktop.github.com/

### 4.1.1 Configuración de Antigravity para este proyecto

Antigravity hereda toda la arquitectura de VS Code, así que las extensiones son las mismas. Abre Antigravity y verifica:

**Extensiones a instalar** (panel lateral izquierdo → ícono de extensiones, o `Cmd+Shift+X`):

1. **Astro** (de `astro-build`) — syntax highlighting, IntelliSense de Astro
2. **Tailwind CSS IntelliSense** (de `bradlc`) — autocompletado de clases Tailwind
3. **Prettier - Code formatter** (de `Prettier`) — autoformat al guardar
4. **GitLens** (de `GitKraken`) — historial Git visual (muy útil para tu nivel)
5. **TypeScript Vue Plugin** — ya viene integrado, solo verificar que esté activo
6. **Error Lens** (de `Alexander`) — muestra errores inline, ayuda enorme cuando aprendes

**Configuración mínima** (Antigravity → `Cmd+,` → buscar y activar):
- ✅ `Format On Save` (formato automático al guardar)
- ✅ `Default Formatter`: Prettier
- ✅ `Files: Auto Save`: `afterDelay` con 1000ms
- ✅ `Editor: Tab Size`: 2

### 4.1.2 ¿Agente nativo de Antigravity o Claude Code?

Tienes dos opciones para el agente IA que escribirá código contigo:

**Opción A — Agente nativo de Antigravity (Gemini)**
- Ya viene integrado, cero setup adicional
- Botón visible en la barra lateral derecha
- Bueno para tareas simples y exploración
- Limitación: no tiene contexto de los planes que armamos en este chat

**Opción B — Claude Code en la terminal de Antigravity** (recomendado)
- Instalar con: `npm install -g @anthropic-ai/claude-code`
- Luego correr `claude` en la terminal integrada de Antigravity
- Continúa la conversación con el "cerebro" que armó el plan
- Lee y edita archivos directamente desde la terminal

Mi sugerencia: instala Claude Code para este proyecto (continuidad), y reserva el agente de Antigravity para tareas rápidas exploratorias donde no necesitas el contexto del plan.

---

## 4.2 Estructura de carpetas final del proyecto

```
enviropro-web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _redirects                  ← redirecciones Cloudflare Pages
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── gallery/
│       └── logos/
├── src/
│   ├── assets/                     ← imágenes optimizadas por Astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── StickyMobileBar.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro
│   │   ├── ServiceCard.astro
│   │   ├── ProcessSteps.astro
│   │   ├── ServiceAreas.astro
│   │   ├── ReviewsBlock.astro
│   │   ├── InsuranceLogos.astro
│   │   ├── FAQ.astro
│   │   ├── CTABanner.astro
│   │   ├── LangToggle.astro
│   │   └── seo/
│   │       ├── BaseSEO.astro
│   │       ├── LocalBusinessSchema.astro
│   │       ├── ServiceSchema.astro
│   │       └── FAQSchema.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServicePageLayout.astro
│   │   └── LocalPageLayout.astro
│   ├── content/                    ← Content Collections de Astro
│   │   ├── config.ts
│   │   ├── services/
│   │   │   ├── water-damage.md
│   │   │   ├── mold-removal.md
│   │   │   ├── fire-smoke.md
│   │   │   ├── hurricane.md
│   │   │   └── carpet-cleaning.md
│   │   ├── cities/
│   │   │   ├── miami.json
│   │   │   ├── miami-beach.json
│   │   │   ├── coral-gables.json
│   │   │   └── ... (10 archivos)
│   │   ├── reviews/
│   │   │   └── *.md
│   │   └── faqs/
│   │       └── home.json
│   ├── data/
│   │   ├── business.ts             ← teléfonos, dirección, redes
│   │   ├── navigation.ts
│   │   └── i18n.ts                 ← traducciones EN/ES
│   ├── pages/
│   │   ├── index.astro             ← Home EN
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── service-areas.astro
│   │   ├── gallery.astro
│   │   ├── reviews.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── 404.astro
│   │   ├── services/
│   │   │   └── [slug].astro        ← genera 5 páginas pilar
│   │   ├── [service]-[city].astro  ← genera 50 páginas locales
│   │   └── es/
│   │       ├── index.astro
│   │       ├── nosotros.astro
│   │       ├── contacto.astro
│   │       └── ... (espejo en español)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
├── .env.example
└── README.md
```

---

## 4.3 Comandos para crear el proyecto base

Abre terminal en tu carpeta de proyectos y ejecuta:

```bash
# 1. Crear proyecto Astro
npm create astro@latest enviropro-web -- --template minimal --typescript strict --no-install --no-git --skip-houston

# 2. Entrar al proyecto
cd enviropro-web

# 3. Instalar dependencias base
npm install

# 4. Agregar integraciones que vamos a usar
npx astro add tailwind sitemap

# 5. Instalar GSAP (lo usaremos con disciplina, solo donde aporta)
npm install gsap

# 6. Instalar utilidades
npm install @astrojs/check astro-icon
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss

# 7. Probar que arranca
npm run dev
```

Abrir http://localhost:4321 (Astro usa 4321 por defecto, no 3000).

---

## 4.4 Archivos de configuración listos para copiar

### `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://enviropro.net',
  integrations: [
    tailwind({
      applyBaseStyles: false, // usamos nuestro global.css
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-US',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
});
```

### `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta EnviroPro
        emergency: {
          50: '#FEF2F2',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
        },
        trust: {
          50: '#F0F9FF',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        ink: {
          900: '#0F172A',
          700: '#334155',
          500: '#64748B',
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
```

### `src/data/business.ts`

```typescript
// Single source of truth para toda la info del negocio.
// Cambia aquí y se actualiza en todo el sitio.

export const business = {
  name: 'EnviroPro',
  legalName: 'Enviro Pro USA',
  tagline: {
    en: 'Water, Mold & Fire Damage Restoration in South Florida',
    es: 'Restauración de Daños por Agua, Moho y Fuego en el Sur de Florida',
  },
  phones: {
    tollFree: '1-877-216-6653',
    tollFreeRaw: '18772166653',
    miami: '305-992-6186',
    miamiRaw: '13059926186',
    broward: '954-317-0109',
    browardRaw: '19543170109',
    orlando: '407-358-6388',
    orlandoRaw: '14073586388',
  },
  whatsapp: '13059926186', // sin + ni espacios, listo para wa.me/
  email: 'info@enviropro.net', // confirmar con cliente
  address: {
    street: '14262 SW 140th St',
    city: 'Miami',
    state: 'FL',
    zip: '33186',
    country: 'US',
  },
  geo: {
    latitude: 25.6431,
    longitude: -80.4267,
  },
  hours: '24/7 Emergency Service',
  founded: 2016, // confirmar con cliente
  licenseFL: 'XXXXXX', // pedir al cliente
  social: {
    facebook: 'https://facebook.com/enviroprousa',
    instagram: '', // pedir
    google: '', // URL del Google Business Profile
  },
  ratings: {
    google: { stars: 4.9, count: 200 }, // confirmar números reales
  },
};

export const cities = [
  { slug: 'miami', name: 'Miami', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'miami-beach', name: 'Miami Beach', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'coral-gables', name: 'Coral Gables', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'pinecrest', name: 'Pinecrest', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'kendall', name: 'Kendall', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'doral', name: 'Doral', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'hialeah', name: 'Hialeah', county: 'Miami-Dade', phone: 'miami' },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale', county: 'Broward', phone: 'broward' },
  { slug: 'hollywood', name: 'Hollywood', county: 'Broward', phone: 'broward' },
  { slug: 'pembroke-pines', name: 'Pembroke Pines', county: 'Broward', phone: 'broward' },
] as const;

export const services = [
  {
    slug: 'water-damage-restoration',
    slugEs: 'restauracion-danos-por-agua',
    name: { en: 'Water Damage Restoration', es: 'Restauración por Daños de Agua' },
    icon: 'droplet',
  },
  {
    slug: 'mold-removal',
    slugEs: 'remocion-de-moho',
    name: { en: 'Mold Removal & Remediation', es: 'Remoción y Remediación de Moho' },
    icon: 'shield-alert',
  },
  {
    slug: 'fire-smoke-damage',
    slugEs: 'danos-por-fuego-y-humo',
    name: { en: 'Fire & Smoke Damage', es: 'Daños por Fuego y Humo' },
    icon: 'flame',
  },
  {
    slug: 'hurricane-emergency',
    slugEs: 'emergencia-huracanes',
    name: { en: 'Hurricane Emergency Response', es: 'Respuesta de Emergencia Huracanes' },
    icon: 'wind',
  },
  {
    slug: 'carpet-cleaning',
    slugEs: 'limpieza-de-alfombras',
    name: { en: 'Carpet & Upholstery Cleaning', es: 'Limpieza de Alfombras y Tapicería' },
    icon: 'sparkles',
  },
] as const;
```

### `public/_redirects` (CRÍTICO para SEO — no perder ranking del sitio viejo)

```
# Redirecciones 301 desde URLs viejas de WordPress
/water-damage/                          /services/water-damage-restoration   301
/enviropro/water-damage/                /services/water-damage-restoration   301
/mold-damage/                           /services/mold-removal               301
/enviropro/mold-damage/                 /services/mold-removal               301
/fire-damage/                           /services/fire-smoke-damage          301
/enviropro/fire-damage/                 /services/fire-smoke-damage          301
/hurricane-emergency-services/          /services/hurricane-emergency        301
/about-us/                              /about                               301
/contact-us/                            /contact                             301
/privacy-policy/                        /privacy                             301
/terms-conditions/                      /terms                               301
/enviropro/about-us/                    /about                               301
```

### `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://enviropro.net/sitemap-index.xml
```

---

## 4.5 Prompts listos para el agente IA

> **Cómo usar:** abre tu carpeta `enviropro-web` en Antigravity. Tienes dos opciones para ejecutar estos prompts:
>
> **Opción A (recomendada) — Claude Code:** abre la terminal integrada (`Ctrl+ñ` o `View → Terminal`), ejecuta `claude` y pega cada prompt en orden. Claude Code lee y escribe archivos del proyecto directamente.
>
> **Opción B — Agente Gemini de Antigravity:** abre el panel de agente (barra lateral derecha), pega el prompt. Antes del primer prompt, pásale como contexto los archivos `01-AUDITORIA.md`, `02-MATRIZ-PAGINAS.md` y `03-WIREFRAME-HOME.md` para que tenga el plan completo.
>
> Los prompts funcionan con cualquiera de los dos agentes — están escritos de forma neutral.

### Prompt 1 — Estructura base
```
Estoy en un proyecto Astro recién creado con Tailwind y Sitemap ya instalados.

Necesito que crees la estructura de carpetas y archivos base según este plan:
[pegar sección 4.2 de este documento]

Crea:
1. Todas las carpetas vacías necesarias
2. src/data/business.ts con el contenido que te paso aparte
3. src/styles/global.css con reset moderno + variables de fuentes (Inter, Manrope desde Google Fonts via @fontsource o link)
4. src/layouts/BaseLayout.astro con el head completo, meta tags SEO, Open Graph, slot para schema markup, slot principal, header y footer
5. .env.example con las variables de entorno que vamos a necesitar (Google Maps API key, formulario endpoint, etc.)

No generes aún los componentes ni las páginas. Solo el esqueleto.
```

### Prompt 2 — Componente Header con sticky bar
```
Crea src/components/Header.astro con estas reglas:

- Sticky top con backdrop-blur
- Logo a la izquierda (placeholder /images/logo.svg)
- Nav desktop: Services dropdown, Areas dropdown, About, Reviews, Contact
- En móvil: hamburguesa + teléfono visible + toggle EN/ES
- Botón "CALL NOW" rojo prominente (color emergency-500 de Tailwind)
- Acepta prop `lang: 'en' | 'es'`
- Lee teléfonos desde src/data/business.ts
- Cero JavaScript pesado: solo un poco de Alpine.js o vanilla para el menú móvil
- Touch targets mínimo 48px
- No usar el meta tag format-detection=no
```

### Prompt 3 — Hero con animaciones GSAP disciplinadas
```
Crea src/components/Hero.astro siguiendo el wireframe que te paso:
[pegar sección 3.3 del wireframe]

Reglas estrictas:
- GSAP importado solo en este componente, lazy
- 4 animaciones MÁXIMO: fade-in H1, stagger viñetas, pulse del CTA, fade-in CTA secundario
- No usar ScrollTrigger aquí (es above the fold)
- Imagen de fondo: <picture> con AVIF + WebP + JPG fallback, loading="eager", fetchpriority="high"
- Dos botones: Call (rojo) y WhatsApp (verde) — el de WhatsApp abre wa.me/[número] en _blank
- Acepta prop `lang` y `phone` (cuál mostrar)
- H1 dinámico según prop `city` (opcional, para reutilizar en páginas locales)
```

### Prompt 4 — Página local programática
```
Crea src/pages/[service]-[city].astro que use Astro's getStaticPaths para generar 50 páginas combinando los 5 servicios y las 10 ciudades de src/data/business.ts.

Cada página debe:
- Tener H1 dinámico "{Service Name} in {City}, FL — 24/7 Emergency"
- Schema markup LocalBusiness + Service con areaServed = ciudad
- Mostrar el teléfono regional correcto (Miami o Broward según la ciudad)
- Tener mapa estático de Google Maps Embed centrado en la ciudad
- Llamar al componente <Hero> con la prop city
- Internal linking a las otras 4 ciudades del mismo condado
- 600 palabras mínimo de contenido único (de momento pon placeholders {{CONTENIDO_UNICO_AQUI}} para que yo los llene después)
- Canonical correcto
- hreflang con su par en español
```

### Prompt 5 — Sitemap, hreflang y verificaciones SEO
```
1. Verifica que astro.config.mjs tiene sitemap configurado con i18n para en/es
2. Crea src/components/seo/BaseSEO.astro que reciba {title, description, image, lang, canonical, alternates} y genere todos los meta tags + Open Graph + Twitter Cards + hreflang
3. Modifica BaseLayout.astro para usar BaseSEO en su <head>
4. Crea src/components/seo/LocalBusinessSchema.astro que reciba props (service, city, etc.) y devuelva un <script type="application/ld+json">
5. Verifica que public/robots.txt y public/_redirects estén en su lugar
```

---

## 4.6 Workflow Git + Deploy a Cloudflare Pages (paso a paso desde Antigravity)

### 4.6.1 Configurar Git globalmente (solo la primera vez)

En la terminal integrada de Antigravity:

```bash
# Identificarte ante Git (usa tu nombre real y email de GitHub)
git config --global user.name "Andrés Tipán"
git config --global user.email "atipan@vigostudio.io"

# Establecer "main" como nombre por defecto (no "master")
git config --global init.defaultBranch main

# Verificar que quedó bien
git config --global --list
```

### 4.6.2 Crear cuenta de GitHub (si no la tienes aún)

1. Ve a https://github.com/signup
2. Username sugerido: `vigostudio` o `andrestipan` (algo profesional, será visible)
3. Email: el mismo que usaste arriba
4. Plan gratuito es suficiente
5. Verifica el email

### 4.6.3 Autenticación de Git con GitHub (la parte que confunde a todos)

GitHub ya no acepta contraseñas tradicionales para Git. Tienes dos opciones:

**Opción A — Personal Access Token (más rápido):**
1. En GitHub: `Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token`
2. Note: "EnviroPro local"
3. Expiration: 90 days
4. Scopes: marca `repo` (todo el grupo) y `workflow`
5. Copia el token (empieza con `ghp_...`) — solo se ve una vez
6. Cuando Git te pida password, pega el token en lugar de tu contraseña

**Opción B — GitHub CLI (más limpio, recomendado):**
```bash
# Instalar gh con Homebrew (si no tienes brew: https://brew.sh)
brew install gh

# Autenticarte
gh auth login
# Sigue las instrucciones: GitHub.com → HTTPS → Login with browser
```

### 4.6.4 Crear el repositorio y subir el código

Desde la terminal de Antigravity, **estando dentro de la carpeta del proyecto**:

```bash
# Verificar que estás en la carpeta correcta
pwd
# Debería terminar en /enviropro-web

# 1. Inicializar Git en el proyecto
git init

# 2. Crear .gitignore (asegúrate que existe e incluye node_modules, dist, .env)
# Astro ya lo crea automáticamente, verifica con: cat .gitignore

# 3. Agregar todos los archivos al staging
git add .

# 4. Primer commit
git commit -m "feat: initial Astro setup for EnviroPro"

# 5. Crear el repo remoto en GitHub (con gh CLI — Opción B)
gh repo create enviropro-web --private --source=. --remote=origin --push

# O manualmente (Opción A):
# 5a. Crear repo en https://github.com/new → nombre: enviropro-web → Private → NO marcar nada más
# 5b. Conectar y subir:
git remote add origin https://github.com/TU-USUARIO/enviropro-web.git
git branch -M main
git push -u origin main
```

> **¿Privado o público?** Privado para proyectos de cliente. Público solo si quieres mostrarlo en portafolio (con permiso del cliente).

### 4.6.5 Workflow diario en Antigravity

Una vez configurado, tu flujo de trabajo diario será:

**Desde la interfaz de Antigravity (panel "Source Control" en barra lateral izquierda):**
1. Haces cambios en archivos
2. Los ves en la pestaña "Source Control" con su diff
3. Escribes mensaje de commit
4. Click en ✓ para commit
5. Click en `...` → Push (o sincronizar)

**Desde terminal (más control):**
```bash
git status              # Ver qué cambió
git add .               # Stagear todo
git commit -m "feat: agregar componente Hero"  # Commit con mensaje claro
git push                # Subir a GitHub
```

**Convención de mensajes de commit** (te ayuda a ti y a Cloudflare):
- `feat:` para nuevas funcionalidades
- `fix:` para correcciones
- `style:` para cambios visuales
- `docs:` para documentación
- `refactor:` para reorganización de código
- `perf:` para mejoras de rendimiento

### 4.6.6 Deploy a Cloudflare Pages

**Una vez que tu repo está en GitHub:**

1. En Cloudflare Dashboard → `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`
2. Autoriza Cloudflare a leer tu GitHub (te pedirá permiso, acepta solo el repo `enviropro-web`)
3. Selecciona el repo `enviropro-web`
4. Configuración del build:
   - **Project name:** `enviropro-web`
   - **Production branch:** `main`
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** dejar vacío (`/`)
5. Environment variables: agregar las que estén en `.env.example` (solo las que apliquen en producción)
6. `Save and Deploy`

**Tiempo del primer deploy:** 2-4 minutos. Cloudflare te dará una URL tipo `enviropro-web.pages.dev`.

### 4.6.7 Conectar el dominio real (cuando el cliente apruebe)

> ⚠️ **No hacer esto hasta tener aprobación del cliente**. El dominio actual `enviropro.net` está apuntando al WordPress viejo y si cambias el DNS antes de tiempo, tumbas el sitio en producción.

Cuando llegue el momento:
1. Cloudflare Pages → tu proyecto → `Custom domains` → `Set up a custom domain`
2. Ingresa `enviropro.net`
3. Cloudflare te dará records DNS (CNAME o A records)
4. Actualiza el DNS donde esté registrado el dominio actual (probablemente GoDaddy o similar)
5. Esperar propagación (1-24 horas)
6. SSL automático activado por Cloudflare

### 4.6.8 Preview deploys automáticos (la magia de Cloudflare Pages)

Cada vez que hagas `git push` a una rama que **no sea main**, Cloudflare crea un preview deploy automático con su propia URL. Esto sirve para:
- Mostrar cambios al cliente antes de pasarlos a producción
- Probar features sin tocar el sitio vivo

Ejemplo:
```bash
git checkout -b feature/nueva-galeria
# ... haces cambios ...
git push -u origin feature/nueva-galeria
# Cloudflare crea: https://nueva-galeria.enviropro-web.pages.dev
```

---

## 4.7 Checklist de salud del proyecto (a verificar antes de mostrarle al cliente)

- [ ] `npm run dev` arranca sin warnings
- [ ] `npm run build` completa sin errores
- [ ] Lighthouse local: Performance 95+, SEO 100, Accessibility 100
- [ ] `tel:` links funcionan en preview móvil (DevTools)
- [ ] Sitemap accesible en `/sitemap-index.xml`
- [ ] robots.txt accesible
- [ ] hreflang correcto en al menos una página EN y su par ES
- [ ] Schema markup validado en https://validator.schema.org/
- [ ] Open Graph validado en https://www.opengraph.xyz/
- [ ] Links del footer no van a `#`
- [ ] Imágenes optimizadas (WebP, dimensiones explícitas)
- [ ] 404.astro existe y se ve bien
- [ ] Sticky mobile bar aparece en scroll y no tapa contenido

---

## 4.8 Lo que NO va en este MVP (Roadmap fase 2)

Para mantener el alcance del proyecto de $5K controlado, **excluir explícitamente**:

- Decap CMS (lo agregamos en una fase 2 si el cliente lo necesita)
- Blog con posts (estructura sí, contenido viene después)
- Booking online de citas (que sigan llamando — convierte mejor)
- Chat en vivo
- Integraciones con CRM
- Galería con lightbox complejo (basta con grid de imágenes)
- Versión AMP
- App PWA

Si el cliente pide alguna de estas, **cotizar aparte** como fase 2.
