import Link from "next/link";
import { CATEGORIAS } from "@/data/categorias";
import { SITE_NAME } from "@/data/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-bg-line">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-xl tracking-tightest font-semibold text-ink hover:text-flame-300 transition-colors"
          aria-label={`${SITE_NAME} — Inicio`}
        >
          <span className="text-flame-400">/</span>
          {SITE_NAME}
        </Link>

        <nav
          aria-label="Categorías"
          className="hidden lg:flex items-center gap-6 text-sm text-ink-mute"
        >
          {CATEGORIAS.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="hover:text-ink transition-colors"
            >
              {c.nombre}
            </Link>
          ))}
          <Link
            href="/blog"
            className="hover:text-ink transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/buscar"
            aria-label="Buscar"
            className="hidden sm:flex items-center gap-2 text-sm text-ink-mute hover:text-ink border border-bg-line rounded-full px-3 py-1.5 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            Buscar
          </Link>
        </div>
      </div>

      {/* Nav móvil — fila horizontal scrolleable bajo el header */}
      <nav
        aria-label="Categorías móvil"
        className="lg:hidden border-t border-bg-line"
      >
        <ul className="flex overflow-x-auto gap-4 px-5 py-2 text-xs text-ink-mute whitespace-nowrap snap-x">
          {CATEGORIAS.map((c) => (
            <li key={c.slug} className="snap-start">
              <Link
                href={`/${c.slug}`}
                className="hover:text-ink transition-colors"
              >
                {c.nombre}
              </Link>
            </li>
          ))}
          <li className="snap-start">
            <Link href="/blog" className="hover:text-ink">
              Blog
            </Link>
          </li>
          <li className="snap-start">
            <Link href="/buscar" className="hover:text-ink">
              Buscar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
