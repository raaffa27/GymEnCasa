export type FAQItem = {
  pregunta: string;
  respuesta: string;
};

type Props = {
  items: FAQItem[];
  /** Si la primera debe abrirse por defecto (recomendado: true). */
  abrirPrimera?: boolean;
};

/**
 * Accordion semántico — usa `<details>` nativo: 0 JS, accesible por defecto,
 * funciona sin hidratación, SEO indexable y compatible con view-source.
 *
 * Marcado con `itemScope` para FAQPage JSON-LD si lo activamos a nivel de
 * página (lo hacemos en seo.ts).
 */
export function FAQAccordion({ items, abrirPrimera = true }: Props) {
  return (
    <div className="rounded-2xl border border-bg-line bg-bg-card divide-y divide-bg-line">
      {items.map((item, i) => (
        <details
          key={item.pregunta}
          {...(abrirPrimera && i === 0 ? { open: true } : {})}
          className="group p-5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-display text-base md:text-lg text-ink">
            <span>{item.pregunta}</span>
            <span
              aria-hidden
              className="shrink-0 size-7 flex items-center justify-center rounded-full border border-bg-line text-ink-mute transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 text-sm md:text-base text-ink-mute leading-relaxed">
            {item.respuesta}
          </div>
        </details>
      ))}
    </div>
  );
}
