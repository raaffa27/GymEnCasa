import Link from "next/link";
import { CATEGORIAS } from "@/data/categorias";
import { SITE_NAME } from "@/data/config";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-bg-line bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-12 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="font-display text-xl text-ink">
            <span className="text-flame-400">/</span>
            {SITE_NAME}
          </div>
          <p className="text-sm text-ink-mute max-w-sm">
            Comparativas honestas para montar un gimnasio en casa: máquinas,
            bancos, mancuernas, creatina y proteína. Sin humo.
          </p>
        </div>

        <nav aria-label="Categorías" className="text-sm">
          <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-3">
            Categorías
          </h3>
          <ul className="space-y-2">
            {CATEGORIAS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="text-ink-mute hover:text-ink transition-colors"
                >
                  {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Recursos" className="text-sm">
          <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-3">
            Recursos
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-ink-mute hover:text-ink">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/buscar" className="text-ink-mute hover:text-ink">
                Buscar producto
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="text-sm">
          <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-3">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/aviso-afiliados"
                className="text-ink-mute hover:text-ink"
              >
                Aviso de afiliados
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-bg-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <AffiliateDisclosure variant="footer" />
          <p className="text-xs text-ink-dim shrink-0">
            © {new Date().getFullYear()} {SITE_NAME}. Hecho con pesas y café.
          </p>
        </div>
      </div>
    </footer>
  );
}
