import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guías, comparativas y análisis para montar tu gimnasio en casa, elegir suplementación y entrenar mejor.",
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <section className="mx-auto max-w-3xl px-5 lg:px-8 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-3">
        Blog
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ink tracking-tightest leading-tight">
        Artículos y guías.
      </h1>
      <p className="mt-4 text-ink-mute max-w-xl">
        Pocas publicaciones, escritas con tiempo. Sin clickbait, sin listicles
        de relleno.
      </p>

      <ul className="mt-12 divide-y divide-bg-line border-y border-bg-line">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 hover:bg-bg-card/40 transition-colors px-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim min-w-[6.5rem]">
                {new Date(p.date).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>
                <span className="font-display text-xl md:text-2xl text-ink group-hover:text-flame-300 transition-colors leading-tight block">
                  {p.title}
                </span>
                <span className="block mt-1 text-sm text-ink-mute line-clamp-2">
                  {p.description}
                </span>
              </span>
              <span
                aria-hidden
                className={[
                  "text-xs font-mono",
                  p.stub ? "text-ink-dim" : "text-flame-300",
                ].join(" ")}
              >
                {p.stub ? "Borrador" : "Leer →"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
