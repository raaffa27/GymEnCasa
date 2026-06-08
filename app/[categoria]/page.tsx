import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { CATEGORIAS, CATEGORIAS_POR_SLUG } from "@/data/categorias";
import { FAQS_POR_CATEGORIA } from "@/data/faqs";
import { getProductosPorCategoria } from "@/lib/productos";
import type { CategoriaSlug } from "@/data/types";
import { ProductCard } from "@/components/ProductCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Newsletter } from "@/components/Newsletter";
import {
  jsonLd,
  categoryItemListLd,
  faqPageLd,
  breadcrumbLd,
} from "@/lib/seo";

type Params = { categoria: string };

/** Pre-renderiza una página por categoría en build. */
export function generateStaticParams(): Params[] {
  return CATEGORIAS.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = CATEGORIAS_POR_SLUG[categoria as CategoriaSlug];
  if (!cat) return {};
  const title = `${cat.nombre} — comparativa y análisis`;
  return {
    title,
    description: cat.tagline,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: {
      title,
      description: cat.tagline,
      type: "website",
      url: `/${cat.slug}`,
      images: [{ url: cat.imagen }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cat.tagline,
    },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoria } = await params;
  const slug = categoria as CategoriaSlug;
  const cat = CATEGORIAS_POR_SLUG[slug];
  if (!cat) notFound();

  const productos = getProductosPorCategoria(slug);
  const faqs = FAQS_POR_CATEGORIA[slug] ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbLd([
            { name: "Inicio", href: "/" },
            { name: cat.nombre, href: `/${cat.slug}` },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(categoryItemListLd(cat, productos))}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqPageLd(faqs))}
        />
      )}
      {/* Cabecera de categoría */}
      <header className="relative overflow-hidden border-b border-bg-line">
        <div className="absolute inset-0 -z-10 bg-radial-flame" aria-hidden />
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <Image
            src={cat.imagen}
            alt=""
            role="presentation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-4">
            {cat.icono}&nbsp; Categoría
          </p>
          <h1
            className="font-display tracking-tightest leading-[1] text-ink"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            {cat.nombre}
          </h1>
          <p className="mt-6 text-lg text-ink-mute max-w-2xl">{cat.tagline}</p>
        </div>
      </header>

      {/* Intro editorial */}
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <p className="text-lg md:text-xl text-ink-mute leading-relaxed">
          {cat.intro}
        </p>
        <div className="mt-8">
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Tabla comparativa */}
      {productos.length > 1 && (
        <section
          aria-labelledby="comparativa-h"
          className="mx-auto max-w-6xl px-5 lg:px-8 py-12"
        >
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
              Comparativa rápida
            </p>
            <h2
              id="comparativa-h"
              className="font-display text-3xl text-ink tracking-tightest"
            >
              De un vistazo.
            </h2>
          </div>
          <ComparisonTable productos={productos.slice(0, 4)} />
        </section>
      )}

      {/* Tarjetas de producto */}
      <section
        aria-labelledby="analisis-h"
        className="mx-auto max-w-6xl px-5 lg:px-8 py-16"
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
            Análisis uno por uno
          </p>
          <h2
            id="analisis-h"
            className="font-display text-3xl md:text-4xl text-ink tracking-tightest"
          >
            Qué destaca y dónde flojea cada producto.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <div key={p.slug} id={p.slug} className="scroll-mt-24">
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section
          aria-labelledby="faq-h"
          className="mx-auto max-w-3xl px-5 lg:px-8 py-16"
        >
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
              Dudas frecuentes
            </p>
            <h2
              id="faq-h"
              className="font-display text-3xl text-ink tracking-tightest"
            >
              Las preguntas que llegan al inbox.
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </section>
      )}

      {/* Conclusión */}
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
          En resumen
        </p>
        <h2 className="font-display text-3xl text-ink tracking-tightest">
          Cómo elegir sin equivocarte.
        </h2>
        <p className="mt-4 text-ink-mute leading-relaxed">
          No existe "el mejor" producto absoluto en ninguna categoría — existe
          el mejor para tu nivel, tu espacio y tu presupuesto. Si dudas entre
          dos, decide por el que tenga mejor servicio postventa en España: vas a
          usar este material años, no semanas.
        </p>
      </section>

      {/* Newsletter al final */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
        <Newsletter />
      </section>
    </>
  );
}
