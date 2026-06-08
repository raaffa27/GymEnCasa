import Link from "next/link";
import Image from "next/image";
import { CATEGORIAS } from "@/data/categorias";

export function CategoryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIAS.map((c, i) => (
        <li
          key={c.slug}
          className={[
            "group",
            // La primera tarjeta ocupa toda la fila grande en lg
            i === 0 ? "lg:col-span-2 lg:row-span-2" : "",
          ].join(" ")}
        >
          <Link
            href={`/${c.slug}`}
            className="relative block h-full overflow-hidden rounded-2xl border border-bg-line bg-bg-card hover:border-flame-500/40 transition-colors"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[260px]">
              <Image
                src={c.imagen}
                alt=""
                role="presentation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
            </div>

            <div className="absolute inset-0 p-5 lg:p-7 flex flex-col justify-end">
              <span className="font-mono text-xs text-flame-300 mb-2">
                {c.icono}&nbsp; Categoría
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-ink leading-tight">
                {c.nombre}
              </h3>
              <p className="mt-2 text-sm text-ink-mute max-w-prose">
                {c.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink group-hover:text-flame-300 transition-colors">
                Ver productos
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
