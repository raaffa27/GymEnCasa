import type { Categoria, CategoriaSlug } from "./types";

export const CATEGORIAS: Categoria[] = [
  {
    slug: "maquinas-gimnasio",
    nombre: "Máquinas de gimnasio",
    tagline: "Multiestaciones, jaulas de potencia y máquinas de poleas para casa.",
    intro:
      "Una buena máquina de gimnasio te resuelve docenas de ejercicios sin necesidad de comprar pieza por pieza. En esta sección comparamos multiestaciones, jaulas (power racks), smith machines y poleas pensadas para uso doméstico: lo que aguantan, cuánto ocupan, y si compensa el precio frente a montar el equipo por separado.",
    icono: "▣",
    imagen: "/images/cat-maquinas.svg",
  },
  {
    slug: "bancos-pesas",
    nombre: "Bancos y pesas",
    tagline: "Bancos ajustables, mancuernas, discos y barras olímpicas.",
    intro:
      "El banco y las mancuernas son el corazón de cualquier gimnasio en casa. Aquí analizamos bancos ajustables y plegables (para ahorrar metros), mancuernas regulables, sets de discos olímpicos y barras. El objetivo: que el material te sobreviva años, no que dure dos meses.",
    icono: "≡",
    imagen: "/images/cat-bancos.svg",
  },
  {
    slug: "creatina",
    nombre: "Creatina",
    tagline: "El suplemento mejor respaldado por la ciencia. Comparamos marcas.",
    intro:
      "La creatina monohidratada es, con diferencia, el suplemento deportivo con más evidencia científica detrás. La buena noticia: casi todas las marcas serias usan el mismo ingrediente (a menudo Creapure®). La diferencia está en pureza, precio por dosis y formato. Aquí comparamos las opciones más fiables en España.",
    icono: "◇",
    imagen: "/images/cat-creatina.svg",
  },
  {
    slug: "proteina-whey",
    nombre: "Proteína whey",
    tagline: "Concentrados, aislados e hidrolizados sin marketing barato.",
    intro:
      "La proteína de suero (whey) sigue siendo el suplemento proteico más eficiente en relación calidad/precio. La clave es entender qué tipo necesitas (concentrado, aislado, hidrolizado), cuánta proteína real lleva por scoop, y si los edulcorantes te van a sentar bien. Comparamos sin humo las marcas más serias.",
    icono: "◯",
    imagen: "/images/cat-proteina.svg",
  },
  {
    slug: "gimnasio-en-casa",
    nombre: "Gimnasio en casa",
    tagline: "Setup básico, accesorios y kits para empezar sin gastar de más.",
    intro:
      "Si estás empezando y aún no sabes si vas a entrenar a largo plazo, el peor error es gastar 2.000 € de golpe. En esta sección reunimos lo esencial: esterillas, kettlebells, bandas, TRX, cuerdas, foam rollers y kits de iniciación. Material pequeño, versátil, y que sirve incluso si más adelante completas con una jaula.",
    icono: "✦",
    imagen: "/images/cat-casa.svg",
  },
];

export const CATEGORIAS_POR_SLUG: Record<CategoriaSlug, Categoria> =
  CATEGORIAS.reduce((acc, c) => {
    acc[c.slug] = c;
    return acc;
  }, {} as Record<CategoriaSlug, Categoria>);
