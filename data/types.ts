/**
 * Tipos centrales de la capa de datos.
 *
 * Decisión clave: TODAS las páginas de afiliados se renderizan desde estos
 * tipos. Si quieres añadir un producto nuevo, basta con un objeto más en
 * `productos.ts` — las rutas, tablas comparativas, JSON-LD y sitemap se
 * actualizan solos.
 */

export type CategoriaSlug =
  | "maquinas-gimnasio"
  | "bancos-pesas"
  | "creatina"
  | "proteina-whey"
  | "gimnasio-en-casa";

export interface Categoria {
  /** Slug que aparece en la URL. */
  slug: CategoriaSlug;
  /** Nombre humano para títulos y nav. */
  nombre: string;
  /** Frase corta (≤ 80 chars) para tarjetas y meta description. */
  tagline: string;
  /** 1–2 párrafos editoriales para el intro SEO de la página de categoría. */
  intro: string;
  /** Emoji o glyph único para acompañar la categoría en grids. */
  icono: string;
  /** Path a una imagen de cabecera (SVG/WebP). Puede ser placeholder. */
  imagen: string;
}

export interface SpecFila {
  etiqueta: string;
  valor: string;
}

export interface Producto {
  /** Identificador estable, kebab-case. */
  slug: string;
  /** Nombre comercial completo (usado también para la búsqueda en Amazon). */
  nombre: string;
  /** A qué categoría pertenece. */
  categoria: CategoriaSlug;
  /** Marca o fabricante. */
  marca: string;
  /** Descripción corta editorial (1–2 frases). */
  descripcion: string;
  /** Lista de ventajas (frases cortas, sin "el producto…"). */
  pros: string[];
  /** Lista de inconvenientes honestos. Ningún producto es perfecto. */
  contras: string[];
  /** Specs tipadas para tabla comparativa y schema Product. */
  specs: SpecFila[];
  /** Precio orientativo en euros. Texto libre porque varía mucho. */
  precioOrientativo: string;
  /** Imagen placeholder (SVG genérico o foto neutral). */
  imagen: string;
  /** Texto alternativo para a11y. */
  imagenAlt: string;
  /** URL ya construida vía `lib/amazon.ts`. NO setear a mano. */
  amazonUrl?: string;
  /**
   * Nota editorial breve para mostrar como "veredicto" en la ficha (opcional).
   * Pensado como una sola frase de 12-18 palabras.
   */
  veredicto?: string;
}
