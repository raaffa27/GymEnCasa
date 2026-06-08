import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { getDestacados } from "@/lib/productos";
import { getPostsPublicados } from "@/lib/blog";
import { jsonLd, organizationLd, websiteLd } from "@/lib/seo";

export default function HomePage() {
  const destacados = getDestacados();
  const posts = getPostsPublicados().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(organizationLd())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(websiteLd())}
      />
      <Hero
        kicker="Gimnasio en casa · 2026"
        titulo={
          <>
            GymEnCasa: <em className="not-italic text-flame-400">todo</em> para
            <br /> crear tu gimnasio perfecto.
          </>
        }
        subtitulo="Comparativas y análisis honestos de máquinas, bancos y suplementación. Sin frases vacías, sin productos sin probar, sin enlaces a basura."
        ctaPrimario={{ href: "#destacados", label: "Ver mejores productos" }}
        ctaSecundario={{ href: "/blog", label: "Leer el blog" }}
      />

      <section
        aria-labelledby="categorias-h"
        className="mx-auto max-w-6xl px-5 lg:px-8 py-20"
      >
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
              Por categoría
            </p>
            <h2
              id="categorias-h"
              className="font-display text-3xl md:text-4xl text-ink tracking-tightest"
            >
              Empieza por lo que necesitas.
            </h2>
          </div>
          <Link
            href="/buscar"
            className="hidden md:inline-flex items-center gap-2 text-sm text-ink-mute hover:text-ink"
          >
            O busca un producto concreto
            <span aria-hidden>→</span>
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section
        id="destacados"
        aria-labelledby="destacados-h"
        className="mx-auto max-w-6xl px-5 lg:px-8 py-20 border-t border-bg-line"
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
            Lo mejor de cada categoría
          </p>
          <h2
            id="destacados-h"
            className="font-display text-3xl md:text-4xl text-ink tracking-tightest"
          >
            Cinco productos. Un análisis por cada uno.
          </h2>
          <p className="mt-3 text-ink-mute max-w-2xl">
            Si solo tuvieras tiempo para mirar una opción por sección, estos son
            los que recomendaríamos a un amigo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section
          aria-labelledby="blog-h"
          className="mx-auto max-w-6xl px-5 lg:px-8 py-20 border-t border-bg-line"
        >
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-2">
                Del blog
              </p>
              <h2
                id="blog-h"
                className="font-display text-3xl md:text-4xl text-ink tracking-tightest"
              >
                Artículos recientes
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm text-ink-mute hover:text-ink"
            >
              Ver todos →
            </Link>
          </div>

          <ul className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl border border-bg-line bg-bg-card overflow-hidden hover:border-flame-500/40 transition-colors"
                >
                  <div className="p-5 flex flex-col h-full">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-flame-300 mb-3">
                      {new Date(p.date).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="font-display text-xl text-ink leading-tight group-hover:text-flame-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-mute line-clamp-3 flex-1">
                      {p.description}
                    </p>
                    <span className="mt-4 text-sm text-ink-mute group-hover:text-flame-300">
                      Leer →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
        <Newsletter />
      </section>
    </>
  );
}
