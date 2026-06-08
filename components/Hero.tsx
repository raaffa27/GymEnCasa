import Link from "next/link";

type Props = {
  kicker?: string;
  titulo: React.ReactNode;
  subtitulo: string;
  ctaPrimario?: { href: string; label: string };
  ctaSecundario?: { href: string; label: string };
};

/**
 * Hero "warm gradient mesh" inspirado en el archetype Dark Warm de la skill,
 * pero adaptado a tono fitness con el acento naranja-flame.
 *
 * Sin librerías: el mesh es 3 radial-gradient apilados con animación drift.
 * En `prefers-reduced-motion: reduce` el drift se desactiva pero el mesh
 * sigue visible (no se entrega un fondo plano feo).
 */
export function Hero({
  kicker,
  titulo,
  subtitulo,
  ctaPrimario,
  ctaSecundario,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-bg-line">
      {/* Mesh gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-80 animate-meshDrift"
        style={{
          background: `
            radial-gradient(40% 60% at 18% 30%, rgba(255, 138, 31, 0.32) 0%, transparent 60%),
            radial-gradient(45% 55% at 82% 25%, rgba(229, 79, 0, 0.28) 0%, transparent 55%),
            radial-gradient(60% 50% at 50% 90%, rgba(255, 181, 71, 0.22) 0%, transparent 60%)
          `,
          filter: "blur(70px) saturate(140%)",
        }}
      />
      {/* Capa sutil de grano */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-20 md:py-32">
        {kicker && (
          <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-6 animate-fadeUp">
            {kicker}
          </p>
        )}
        <h1
          className="font-display tracking-tightest leading-[0.98] text-ink animate-fadeUp"
          style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.4rem)" }}
        >
          {titulo}
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-ink-mute max-w-2xl animate-fadeUp"
          style={{ animationDelay: "0.12s" }}
        >
          {subtitulo}
        </p>

        {(ctaPrimario || ctaSecundario) && (
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fadeUp"
            style={{ animationDelay: "0.22s" }}
          >
            {ctaPrimario && (
              <Link
                href={ctaPrimario.href}
                className="inline-flex items-center gap-2 rounded-full bg-flame-grad text-bg font-medium px-6 py-3 shadow-flame hover:brightness-110 transition"
              >
                {ctaPrimario.label}
                <span aria-hidden>→</span>
              </Link>
            )}
            {ctaSecundario && (
              <Link
                href={ctaSecundario.href}
                className="inline-flex items-center gap-2 rounded-full border border-bg-line text-ink hover:border-flame-400/60 px-6 py-3 transition"
              >
                {ctaSecundario.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
