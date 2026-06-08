import { PRODUCTOS } from "@/data/productos";
import { CATEGORIAS_POR_SLUG } from "@/data/categorias";
import type { CategoriaSlug, Producto } from "@/data/types";
import { getAmazonUrl } from "./amazon";

/** Devuelve los productos de una categoría con `amazonUrl` ya calculado. */
export function getProductosPorCategoria(slug: CategoriaSlug): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === slug).map((p) => ({
    ...p,
    amazonUrl: getAmazonUrl(p),
  }));
}

/** Decora una lista cualquiera con `amazonUrl`. Útil para destacados/buscador. */
export function withAmazon(productos: Producto[]): Producto[] {
  return productos.map((p) => ({ ...p, amazonUrl: getAmazonUrl(p) }));
}

/** Productos destacados para la home: el primero de cada categoría. */
export function getDestacados(): Producto[] {
  const destacados: Producto[] = [];
  Object.keys(CATEGORIAS_POR_SLUG).forEach((slug) => {
    const primero = PRODUCTOS.find(
      (p) => p.categoria === (slug as CategoriaSlug),
    );
    if (primero) destacados.push(primero);
  });
  return withAmazon(destacados);
}

/** Todos los productos con amazonUrl calculado — útil para el buscador y sitemap. */
export function getTodosProductos(): Producto[] {
  return withAmazon(PRODUCTOS);
}
