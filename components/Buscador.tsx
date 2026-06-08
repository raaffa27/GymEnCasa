"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Producto } from "@/data/types";
import { CATEGORIAS_POR_SLUG } from "@/data/categorias";
import { AMAZON_REL } from "@/lib/amazon";

type Props = {
  productos: Producto[];
};

/**
 * Buscador client-side sobre la lista completa de productos.
 *
 * Decisión: no se hidrata nada hasta que el usuario teclea. El componente
 * vive en una página /buscar dedicada, no en cada página de categoría, para
 * no inflar el bundle inicial.
 *
 * Algoritmo: matching simple sobre nombre + marca + descripción + categoría.
 * Para 26 productos no necesitamos Fuse.js — basta `includes` normalizado.
 */
export function Buscador({ productos }: Props) {
  const [q, setQ] = useState("");

  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

  const resultados = useMemo(() => {
    const query = norm(q.trim());
    if (query.length < 2) return [] as Producto[];
    return productos.filter((p) => {
      const haystack = norm(
        [
          p.nombre,
          p.marca,
          p.descripcion,
          CATEGORIAS_POR_SLUG[p.categoria].nombre,
        ].join(" "),
      );
      return haystack.includes(query);
    });
  }, [q, productos]);

  return (
    <div className="space-y-8">
      <div className="relative">
        <label htmlFor="buscador-input" className="sr-only">
          Buscar producto
        </label>
        <input
          id="buscador-input"
          type="search"
          placeholder="Banco ajustable, creatina, Bowflex…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          className="w-full rounded-full bg-bg-card border border-bg-line text-ink px-6 py-4 text-lg placeholder:text-ink-dim focus:outline-none focus:border-flame-400"
        />
        {q.length > 0 && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-dim hover:text-ink"
            aria-label="Limpiar búsqueda"
          >
            ×
          </button>
        )}
      </div>

      <p className="text-sm text-ink-dim" aria-live="polite">
        {q.trim().length < 2
          ? "Escribe al menos 2 letras."
          : `${resultados.length} resultado${
              resultados.length === 1 ? "" : "s"
            }`}
      </p>

      <ul className="grid gap-3">
        {resultados.map((p) => (
          <li
            key={p.slug}
            className="flex gap-4 rounded-xl border border-bg-line bg-bg-card p-4 hover:border-flame-500/40 transition-colors"
          >
            <div className="relative size-20 shrink-0 rounded-lg overflow-hidden bg-bg-soft">
              <Image
                src={p.imagen}
                alt={p.imagenAlt}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-flame-300">
                {p.marca}
              </p>
              <Link
                href={`/${p.categoria}#${p.slug}`}
                className="font-display text-base text-ink hover:text-flame-300 transition-colors"
              >
                {p.nombre}
              </Link>
              <p className="text-xs text-ink-mute line-clamp-2 mt-1">
                {p.descripcion}
              </p>
            </div>
            <a
              href={p.amazonUrl}
              rel={AMAZON_REL}
              target="_blank"
              className="shrink-0 self-center rounded-full bg-flame-grad text-bg text-xs font-medium px-3 py-2"
            >
              Amazon →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
