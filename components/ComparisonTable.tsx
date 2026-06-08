import type { Producto } from "@/data/types";
import { AMAZON_REL } from "@/lib/amazon";

type Props = {
  productos: Producto[];
  /** Cuántas specs comparar (en orden de aparición). Default 4. */
  filasMax?: number;
};

/**
 * Tabla comparativa "primer pase" — la fila destacada arriba (precio +
 * marca), filas de specs en el medio, CTA Amazon en el footer.
 *
 * Móvil: se vuelve scroll horizontal con la columna del nombre sticky.
 */
export function ComparisonTable({ productos, filasMax = 4 }: Props) {
  if (productos.length === 0) return null;

  // Tomamos las primeras N specs del primer producto como ejes de comparación.
  // Cada producto rellena su valor o "—" si no tiene esa spec.
  const ejes = productos[0].specs.slice(0, filasMax).map((s) => s.etiqueta);

  return (
    <div className="relative overflow-x-auto rounded-2xl border border-bg-line bg-bg-card">
      <table className="w-full text-sm min-w-[640px]">
        <caption className="sr-only">
          Comparativa rápida entre los productos analizados
        </caption>
        <thead>
          <tr className="border-b border-bg-line">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-bg-card text-left p-4 text-xs uppercase tracking-widest text-ink-dim font-mono font-normal"
            >
              Modelo
            </th>
            {productos.map((p) => (
              <th
                key={p.slug}
                scope="col"
                className="p-4 text-left font-display text-base text-ink"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-flame-300/90 mb-1">
                  {p.marca}
                </div>
                {p.nombre}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-bg-line">
            <th
              scope="row"
              className="sticky left-0 z-10 bg-bg-card text-left p-4 text-xs uppercase tracking-widest text-ink-dim font-mono font-normal"
            >
              Precio orientativo
            </th>
            {productos.map((p) => (
              <td key={p.slug} className="p-4 text-flame-300 font-mono">
                {p.precioOrientativo}
              </td>
            ))}
          </tr>

          {ejes.map((eje) => (
            <tr key={eje} className="border-b border-bg-line/60">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-bg-card text-left p-4 text-xs uppercase tracking-widest text-ink-dim font-mono font-normal"
              >
                {eje}
              </th>
              {productos.map((p) => {
                const s = p.specs.find((x) => x.etiqueta === eje);
                return (
                  <td
                    key={p.slug}
                    className="p-4 text-ink-mute leading-snug"
                  >
                    {s ? s.valor : "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th
              scope="row"
              className="sticky left-0 z-10 bg-bg-card p-4"
              aria-label="Enlace a Amazon"
            />
            {productos.map((p) => (
              <td key={p.slug} className="p-4">
                <a
                  href={p.amazonUrl}
                  rel={AMAZON_REL}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-flame-grad text-bg text-xs font-medium px-4 py-2 hover:brightness-110 transition"
                >
                  Ver en Amazon
                  <span aria-hidden>→</span>
                </a>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
