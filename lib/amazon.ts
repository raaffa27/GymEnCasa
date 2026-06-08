import { AMAZON_TAG } from "@/data/config";
import type { Producto } from "@/data/types";

/**
 * Centro de control del afiliado.
 *
 * MIENTRAS NO ESTÉS APROBADO EN AMAZON ASSOCIATES:
 *   Devolvemos una URL de búsqueda de Amazon basada en el nombre del producto.
 *   El parámetro ?tag={AMAZON_TAG} se añade igualmente — Amazon lo ignora si
 *   el tag no está activo, así que la URL no se rompe.
 *
 * CUANDO AMAZON TE APRUEBE:
 *   1. Cambia `AMAZON_TAG` en `data/config.ts` por tu tag real (por ejemplo
 *      "gymencasa-21").
 *   2. (Opcional pero recomendado) sustituye esta función por una que
 *      construya enlaces directos al ASIN: añade un campo `asin?: string` a
 *      cada producto en `data/productos.ts` y cambia la URL aquí a
 *      `https://www.amazon.es/dp/${asin}/?tag=${AMAZON_TAG}`.
 *      Mientras un producto no tenga ASIN, mantén el fallback de búsqueda.
 *
 * Ese cambio es UN SOLO punto. Por eso vive aquí.
 */

const AMAZON_ES = "https://www.amazon.es";

export function getAmazonSearchUrl(query: string): string {
  const k = encodeURIComponent(query.trim());
  return `${AMAZON_ES}/s?k=${k}&tag=${AMAZON_TAG}`;
}

export function getAmazonUrl(producto: Producto): string {
  // TODO: sustituir por enlace de afiliado directo al ASIN cuando Amazon
  // Associates apruebe el programa.
  return getAmazonSearchUrl(`${producto.marca} ${producto.nombre}`);
}

/**
 * Atributos `rel` recomendados para enlaces de afiliado.
 *  - sponsored: declara que es una colaboración comercial (exigido por la FTC
 *    y por las políticas de Amazon).
 *  - nofollow: el SEO no debe transferir a Amazon.
 *  - noopener: por seguridad, sigue siendo buena práctica.
 */
export const AMAZON_REL = "sponsored nofollow noopener";
