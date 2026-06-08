import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/data/config";
import type { Categoria, Producto } from "@/data/types";
import type { Post } from "./blog";

/**
 * Genera el <script type="application/ld+json"> a inyectar en cada página.
 * El JSON.stringify se hace una sola vez y se devuelve listo para `dangerouslySetInnerHTML`.
 */
export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data, null, 0),
  };
}

const abs = (path = "/") =>
  `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

// ============================================================
//  Organization + WebSite (Home)
// ============================================================

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs("/images/producto-placeholder.svg"),
    sameAs: [],
    description: SITE_DESCRIPTION,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================
//  Breadcrumb
// ============================================================

export function breadcrumbLd(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.href),
    })),
  };
}

// ============================================================
//  Product + ItemList (página de categoría)
// ============================================================

function productLd(p: Producto) {
  return {
    "@type": "Product",
    name: p.nombre,
    brand: { "@type": "Brand", name: p.marca },
    description: p.descripcion,
    image: abs(p.imagen),
    sku: p.slug,
    offers: {
      "@type": "Offer",
      url: p.amazonUrl,
      priceCurrency: "EUR",
      // Precio orientativo: lo expresamos como string sin formatear como número
      // exacto para no engañar a Google con un precio puntual.
      price: p.precioOrientativo,
      availability: "https://schema.org/InStock",
    },
    additionalProperty: p.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.etiqueta,
      value: s.valor,
    })),
  };
}

export function categoryItemListLd(cat: Categoria, productos: Producto[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.nombre,
    description: cat.tagline,
    url: abs(`/${cat.slug}`),
    itemListElement: productos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: productLd(p),
    })),
  };
}

// ============================================================
//  FAQPage
// ============================================================

export function faqPageLd(items: { pregunta: string; respuesta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.pregunta,
      acceptedAnswer: { "@type": "Answer", text: it.respuesta },
    })),
  };
}

// ============================================================
//  Article (blog)
// ============================================================

export function articleLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-ES",
    author: {
      "@type": "Organization",
      name: post.author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(`/blog/${post.slug}`) },
    image: post.cover ? abs(post.cover) : undefined,
  };
}
