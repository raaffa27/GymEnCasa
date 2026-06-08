import type { Metadata } from "next";
import { SITE_NAME } from "@/data/config";

export const metadata: Metadata = {
  title: "Aviso de afiliados",
  description:
    "Cómo funciona la afiliación de Amazon en GymEnCasa, qué comisión recibimos y qué garantizamos en nuestras recomendaciones.",
  robots: { index: true, follow: true },
};

export default function AvisoAfiliadosPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 lg:px-8 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-3">
        Cumplimiento
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ink tracking-tightest leading-tight">
        Aviso de afiliados
      </h1>

      <div className="prose-fitness mt-10">
        <p>
          <strong>{SITE_NAME}</strong> participa en el programa de afiliación
          Amazon Associates (Amazon Afiliados). Esto significa que algunos
          enlaces que ves en esta web llevan a páginas de productos en{" "}
          <em>amazon.es</em> y pueden generarnos una comisión si decides
          comprar.
        </p>

        <h2>Qué supone esto para ti</h2>
        <p>
          <strong>Cero coste adicional.</strong> El precio que pagas en Amazon
          es exactamente el mismo, hagas clic en nuestro enlace o no. La
          comisión la asume Amazon de su margen, no se añade a tu factura.
        </p>

        <h2>Qué supone para nosotros</h2>
        <p>
          La comisión que generan estos enlaces es lo que nos permite seguir
          escribiendo comparativas en profundidad, probar producto y mantener
          la web sin meter publicidad invasiva, pop-ups ni vender tu correo a
          nadie.
        </p>

        <h2>Cómo recomendamos</h2>
        <ul>
          <li>
            Solo recomendamos productos que consideramos honestos en su
            relación calidad/precio.
          </li>
          <li>
            Cada ficha lleva <strong>pros y contras reales</strong>. Si una
            mancuerna pesa más de lo que su asa puede aguantar cómodamente, lo
            decimos.
          </li>
          <li>
            No aceptamos pago por aparecer en una comparativa ni por subir
            ranking. Ningún producto está aquí "patrocinado".
          </li>
          <li>
            Si descubrimos que un producto que recomendamos baja de calidad,
            actualizamos o retiramos la entrada.
          </li>
        </ul>

        <h2>Identificación de los enlaces</h2>
        <p>
          Todos los enlaces de afiliado de esta web están marcados técnicamente
          con los atributos <code>rel="sponsored nofollow noopener"</code>,
          conforme a las directrices de Amazon Associates y de la Comisión
          Federal de Comercio de EE. UU. (FTC). Visualmente, los enlaces a
          Amazon aparecen como botones con la indicación{" "}
          <em>"Ver precio en Amazon"</em>.
        </p>

        <h2>Cómo contactar</h2>
        <p>
          Si detectas un enlace roto, un precio absurdamente desactualizado o
          una recomendación que ya no se sostiene, escríbenos. La idea de esta
          web es exactamente lo contrario al SEO churn: hacer poco y bien y
          mantenerlo en el tiempo.
        </p>

        <hr />

        <p className="text-sm text-ink-dim">
          Última actualización del aviso: {new Date().toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}.
        </p>
      </div>
    </article>
  );
}
