# Auron Software — Sitio corporativo

Hub corporativo de **Auron Software** (`auronsuite.com`). Este sitio centraliza a la
empresa: presenta el portfolio de productos, los servicios, la empresa, el blog y el
contacto. **No contiene precios** — cada producto (Auron Suite, Restaurant OS, Hospitality,
Health) tiene su propia landing page con su plan y precio.

## Enfoque

Sitio de **hub empresarial**: presenta a la empresa y su portfolio, no vende productos
individuales. Todo el copy está redactado a nivel compañía.

## Stack

- **React 19** + **Vite 8** + **TypeScript**
- **Tailwind CSS 4** (`@theme` + tokens CSS semánticos en `src/styles/auron.css`)
- **React Router 7** (SPA con rutas `/products`, `/services`, `/about`, `/contact`, `/blog`…)
- **framer-motion** (moción: parallax, spotlight 3D, contadores, marquee)
- **lucide-react** (iconos)

## Estructura

```
src/
  components/   # secciones y UI (hero, hub-mockup, seo, faq, navbar, footer…)
  pages/        # rutas (Home, Products, Services, About, Contact, Blog, Legal)
  lib/          # tema (light/dark), utils
  styles/       # auron.css — design tokens y estilos globales
public/         # favicon, og-image, sitemap.xml, robots.txt, manifest, 404.html, CNAME
dist/           # build de producción
```

## Comandos

El proyecto corre dentro de Docker (node no está instalado localmente).

```bash
# Servidor de desarrollo (contenedor auron-website-dev, puerto 5174)
docker start auron-website-dev

# Build de producción
docker run --rm -v $PWD:/app -w /app node:22-alpine sh -c "npm run build"

# Lint (tsc)
docker run --rm -v $PWD:/app -w /app node:22-alpine sh -c "npm run lint"
```

Tras un build, los archivos generados quedan como root dentro del contenedor; ajusta
propietario si el host lo requiere:

```bash
docker run --rm -v $PWD:/app -w /app node:22-alpine sh -c "chown -R 1000:1000 dist node_modules package-lock.json *.tsbuildinfo"
```

## Sistema de diseño

- Tokens CSS semánticos en `src/styles/auron.css` (temas `.auron-light` / `.auron-dark` por clase).
- Paleta: navy + accent `#1A56DB → #123F9E`, gold `#D97706`.
- Tipografía: **Inter** (cuerpo) + **Fraunces** (acento display en titulares, itálica).
- Radios y sombras definidos por tokens (`--radius-button`, `--auron-shadow-*`, `--auron-glow`).
- Respeta `prefers-reduced-motion`.

## SEO

- Meta por ruta vía `src/components/seo.tsx` (title, description, canonical, OG, robots, JSON-LD).
- `public/sitemap.xml`, `public/robots.txt`, `public/manifest.webmanifest`.
- `public/og-image.png` (1200×630) para preview de redes.
- `public/404.html` = copia de `index.html` (fallback SPA).
- Las páginas legales (`/privacy`, `/terms`, `/security`) están marcadas `noindex`.

## Deploy

El sitio se sirve en **Cloudflare Pages** (conectado al repo de GitHub). Push a `main`
dispara el redeploy automático en `https://auronsuite.com`.

- DNS: `auronsuite.com` apuntando a Cloudflare Pages.
- Google Search Console: verificar el dominio y enviar `https://auronsuite.com/sitemap.xml`.

## Convenciones

- Commits convencionales: `feat:`, `fix:`, `chore:`, `docs:`.
- Sin dependencias nuevas sin justificación.
