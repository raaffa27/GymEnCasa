import Link from "next/link";

/**
 * Nota de divulgación de afiliación.
 *
 * Obligatorio mostrarla:
 *  - En el footer (versión "footer" — más breve).
 *  - En cada página con productos de afiliado (versión "inline" — más explícita).
 *
 * Política Amazon Associates §5: la divulgación debe ser clara y visible
 * antes de que el usuario haga clic en cualquier enlace de afiliado.
 */
type Props = { variant?: "footer" | "inline" };

export function AffiliateDisclosure({ variant = "inline" }: Props) {
  if (variant === "footer") {
    return (
      <p className="text-xs text-ink-dim leading-relaxed">
        GymEnCasa participa en el programa de afiliación de Amazon. Algunos
        enlaces de esta web pueden generar una comisión sin coste adicional para
        ti.{" "}
        <Link
          href="/aviso-afiliados"
          className="underline underline-offset-2 hover:text-flame-300"
        >
          Más información
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="border border-bg-line bg-bg-soft/60 rounded-lg px-4 py-3 text-sm text-ink-mute">
      <strong className="text-ink">Divulgación de afiliación.</strong>{" "}
      Esta página contiene enlaces de afiliado de Amazon. Si compras a través de
      ellos, GymEnCasa puede recibir una pequeña comisión, sin coste adicional
      para ti. Solo recomendamos productos que consideramos honestos.{" "}
      <Link
        href="/aviso-afiliados"
        className="underline underline-offset-2 hover:text-flame-300"
      >
        Lee el aviso completo
      </Link>
      .
    </div>
  );
}
