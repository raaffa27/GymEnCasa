# GymEnCasa

Web profesional de afiliación para Amazon Associates, especializada en montar un gimnasio en casa: máquinas, bancos, suplementación y accesorios. Construida con **Next.js 15 (App Router) + TypeScript + Tailwind + MDX**, lista para desplegar en Vercel.

---

## Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript** (`strict: true`)
- **Tailwind CSS** con paleta `flame` (acento naranja/amarillo) sobre fondo dark warm
- **MDX** para el blog vía `next-mdx-remote/rsc` + `gray-matter` para frontmatter
- **next/image** + **next/font** (Fraunces + Inter + JetBrains Mono)
- **JSON-LD Schema.org**: `Organization`, `WebSite`, `BreadcrumbList`, `ItemList`/`Product`, `FAQPage`, `Article`
- Sin dependencias innecesarias (sin librerías de animación, sin UI kits)

## Arrancar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

`npm run build` debe pasar **sin errores de TypeScript**.

## Estructura de carpetas

```
GymEnCasa/
├── app/
│   ├── layout.tsx                 ← raíz, fuentes, metadata global
│   ├── page.tsx                   ← home
│   ├── globals.css                ← Tailwind + tokens + prose-fitness
│   ├── sitemap.ts                 ← dinámico
│   ├── robots.ts                  ← dinámico
│   ├── [categoria]/page.tsx       ← /maquinas-gimnasio, /bancos-pesas, …
│   ├── blog/
│   │   ├── page.tsx               ← índice del blog
│   │   └── [slug]/page.tsx        ← artículo MDX dinámico
│   ├── buscar/page.tsx
│   └── aviso-afiliados/page.tsx
├── components/                    ← Header, Footer, Hero, ProductCard,
│                                    ComparisonTable, FAQAccordion,
│                                    CategoryGrid, Newsletter, Buscador,
│                                    AffiliateDisclosure
├── data/                          ← capa de datos tipada (fuente única de verdad)
│   ├── types.ts                   ← Producto, Categoria, CategoriaSlug
│   ├── config.ts                  ← SITE_*, AMAZON_TAG
│   ├── categorias.ts              ← 5 categorías
│   ├── productos.ts               ← 26 productos
│   └── faqs.ts                    ← FAQ por categoría
├── lib/
│   ├── amazon.ts                  ← construcción centralizada de URLs Amazon
│   ├── productos.ts               ← helpers (porCategoria, destacados, todos)
│   ├── blog.ts                    ← lectura MDX desde content/blog/
│   └── seo.ts                     ← helpers JSON-LD
├── content/blog/                  ← 5 .mdx (2 completos + 3 stubs)
├── public/images/                 ← placeholders SVG editoriales
├── next.config.mjs                ← MDX + remotePatterns para next/image
├── tailwind.config.ts             ← paleta flame + animaciones
├── tsconfig.json                  ← strict, alias `@/*`
└── package.json
```

## Cómo añadir contenido (sin tocar páginas)

### Añadir un producto

Edita `data/productos.ts` y empuja un objeto al array `PRODUCTOS`. Aparece automáticamente en su página de categoría, en el buscador y en el sitemap.

### Añadir una categoría

1. Añade el slug al tipo `CategoriaSlug` en `data/types.ts`.
2. Añade la entrada en `CATEGORIAS` en `data/categorias.ts`.
3. (Opcional) Añade FAQs en `data/faqs.ts`.

Next.js genera la ruta `/{nuevo-slug}` en el siguiente `build`. **No hay que tocar `app/`.**

### Añadir un artículo de blog

Crea un archivo nuevo en `content/blog/{slug}.mdx` con frontmatter:

```mdx
---
title: "Título del artículo"
description: "Resumen para meta description (~155 chars)."
date: "2026-06-15"
author: "Redacción GymEnCasa"
tags: ["tag1", "tag2"]
cover: "/images/cat-casa.svg"
stub: false   # true si todavía no está terminado
---

Cuerpo del artículo en MDX…
```

Aparece automáticamente en `/blog`, en sitemap, y con su propio JSON-LD `Article`.

## 🔑 Constante del tag de Amazon Afiliados

**Archivo:** `data/config.ts`

```ts
export const AMAZON_TAG = "PENDIENTE-21";
```

### Mientras no estés aprobado

La función `getAmazonUrl(producto)` en `lib/amazon.ts` construye URLs de **búsqueda** de Amazon (`https://www.amazon.es/s?k=…&tag=PENDIENTE-21`). Los enlaces funcionan: llevan al usuario al listado de Amazon, donde puede ver el producto real. Amazon ignora el `tag=PENDIENTE-21` mientras no esté activo.

### Cuando Amazon te apruebe

1. Sustituye el valor de `AMAZON_TAG` en `data/config.ts` por tu tag real (ej. `"gymencasa-21"`).
2. **Eso es todo.** Las 26 URLs del catálogo + las del buscador + las de la tabla comparativa se regeneran solas en el siguiente build.

### Migrar a enlaces directos al ASIN (opcional, recomendado a medio plazo)

Para que los enlaces lleven directos al producto exacto (mejor conversión que la búsqueda), añade un campo `asin?: string` a cada producto en `data/productos.ts` y cambia `lib/amazon.ts`:

```ts
export function getAmazonUrl(producto: Producto): string {
  if (producto.asin) {
    return `https://www.amazon.es/dp/${producto.asin}/?tag=${AMAZON_TAG}`;
  }
  return getAmazonSearchUrl(`${producto.marca} ${producto.nombre}`);
}
```

Los productos sin ASIN siguen llevando a la búsqueda. Puedes ir migrando uno a uno sin romper nada.

### Atributos `rel` de los enlaces

`lib/amazon.ts` exporta `AMAZON_REL = "sponsored nofollow noopener"`. Todo botón a Amazon usa este `rel` automáticamente (cumplimiento políticas Amazon Associates + FTC).

## Cumplimiento Amazon Associates

- **`/aviso-afiliados`** — página de divulgación completa.
- **`<AffiliateDisclosure variant="footer" />`** en el footer (cada página).
- **`<AffiliateDisclosure variant="inline" />`** en cada página de categoría, antes del primer enlace a Amazon (política §5 Amazon Associates).
- Todos los enlaces a Amazon llevan `rel="sponsored nofollow noopener"` + `target="_blank"`.

## SEO

- `generateMetadata` por página (Home, Categoría, Blog index, Blog post, Buscar, Aviso).
- **JSON-LD**:
  - Home → `Organization` + `WebSite` (con `SearchAction` para sitelinks).
  - Categoría → `BreadcrumbList` + `ItemList` (con `Product` y specs) + `FAQPage`.
  - Blog post → `BreadcrumbList` + `Article`.
- `app/sitemap.ts` y `app/robots.ts` dinámicos.
- `/buscar` con `noindex` (útil al usuario, no aporta SEO).
- `canonical` en cada categoría y artículo.

## Deploy en Vercel

1. Sube el repositorio a GitHub (o GitLab/Bitbucket).
2. Entra en [vercel.com/new](https://vercel.com/new) y conecta el repo.
3. Vercel detecta Next.js automáticamente — no toques nada en los settings.
4. Configura tu dominio personalizado y actualiza `SITE_URL` en `data/config.ts` (importante: la URL canónica, OG, sitemap y JSON-LD dependen de esto).
5. Pulsa **Deploy**.

### Variables de entorno (opcional)

De momento la web no requiere ninguna variable de entorno. Cuando conectes Newsletter a un proveedor real (ConvertKit, Resend, Mailchimp), añade su API key en Vercel → Settings → Environment Variables y modifica el `onSubmit` del componente `components/Newsletter.tsx`.

## Mantenimiento

- **Productos**: revisa precios cada 3-4 meses. Si un producto baja mucho de calidad o cambia de fabricante, edita o retira el objeto en `data/productos.ts`.
- **Blog**: los stubs (`stub: true`) se muestran en `/blog` etiquetados como "Borrador" y se sitemapean con prioridad baja. Quita el flag cuando los completes.
- **Tag Amazon**: cuando te aprueben, sigue las instrucciones de la sección 🔑 anterior.

---

Hecho con pesas y café.
