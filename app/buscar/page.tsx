import type { Metadata } from "next";
import { Buscador } from "@/components/Buscador";
import { getTodosProductos } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Buscar producto",
  description:
    "Encuentra el producto fitness que buscas: máquinas, bancos, mancuernas, creatina, proteína y accesorios.",
  // El buscador es útil al usuario pero no aporta al SEO — no indexar.
  robots: { index: false, follow: true },
};

export default function BuscarPage() {
  const productos = getTodosProductos();
  return (
    <section className="mx-auto max-w-3xl px-5 lg:px-8 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-3">
        Buscador
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ink tracking-tightest leading-tight">
        ¿Qué buscas?
      </h1>
      <p className="mt-4 text-ink-mute">
        Escribe el nombre, la marca o lo que necesites (banco, creatina,
        kettlebell…). Buscamos en {productos.length} productos analizados.
      </p>
      <div className="mt-10">
        <Buscador productos={productos} />
      </div>
    </section>
  );
}
