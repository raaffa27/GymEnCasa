import Image from "next/image";
import type { Producto } from "@/data/types";
import { AMAZON_REL } from "@/lib/amazon";

type Props = {
  producto: Producto;
  /** Si es la tarjeta destacada de una sección (más grande). */
  feature?: boolean;
};

export function ProductCard({ producto, feature = false }: Props) {
  return (
    <article
      className={[
        "group relative flex flex-col rounded-2xl border border-bg-line bg-bg-card overflow-hidden",
        "shadow-card transition-transform duration-500 ease-out",
        "hover:-translate-y-1 hover:border-flame-500/40",
        feature ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] bg-bg-soft">
        <Image
          src={producto.imagen}
          alt={producto.imagenAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-ink-dim font-mono">
          {producto.marca}
        </span>
        <span className="absolute top-3 right-3 text-xs font-mono text-flame-300">
          {producto.precioOrientativo}
        </span>
      </div>

      <div className="flex-1 flex flex-col p-5 gap-4">
        <header>
          <h3 className="font-display text-lg leading-tight text-ink">
            {producto.nombre}
          </h3>
          <p className="text-sm text-ink-mute mt-1 line-clamp-3">
            {producto.descripcion}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <ul className="space-y-1">
            {producto.pros.slice(0, 3).map((p) => (
              <li
                key={p}
                className="flex gap-1.5 text-ink-mute leading-snug"
              >
                <span aria-hidden className="text-flame-400 mt-0.5">
                  +
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-1">
            {producto.contras.slice(0, 2).map((c) => (
              <li
                key={c}
                className="flex gap-1.5 text-ink-mute leading-snug"
              >
                <span aria-hidden className="text-ink-dim mt-0.5">
                  −
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {producto.veredicto && (
          <p className="text-sm italic text-ink/90 border-l-2 border-flame-500/60 pl-3">
            {producto.veredicto}
          </p>
        )}

        <a
          href={producto.amazonUrl}
          rel={AMAZON_REL}
          target="_blank"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-flame-grad text-bg font-medium text-sm px-5 py-2.5 shadow-flame hover:brightness-110 active:scale-[0.98] transition"
          aria-label={`Ver precio en Amazon de ${producto.nombre}`}
        >
          Ver precio en Amazon
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}
