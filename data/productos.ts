import type { Producto } from "./types";

/**
 * Catálogo de productos.
 *
 * Reglas:
 * - Cada producto vive UNA vez aquí. Las páginas se generan a partir de esta lista.
 * - Los datos son orientativos y editoriales. Precios y specs cambian — revisar
 *   periódicamente o cuando lleguen quejas.
 * - El campo `amazonUrl` se rellena dinámicamente en `lib/amazon.ts`; no setearlo
 *   a mano aquí.
 */

const PLACEHOLDER = "/images/producto-placeholder.svg";

export const PRODUCTOS: Producto[] = [
  // ============================================================
  // MÁQUINAS DE GIMNASIO
  // ============================================================
  {
    slug: "bh-fitness-global-gym-plus",
    nombre: "BH Fitness Global Gym Plus G119",
    categoria: "maquinas-gimnasio",
    marca: "BH Fitness",
    descripcion:
      "Multiestación doméstica con press de pecho, poleas altas y bajas, curl de bíceps y press de piernas. La opción todo-en-uno más popular en España.",
    pros: [
      "Más de 30 ejercicios en una sola máquina",
      "Estructura sólida que aguanta uso intensivo casero",
      "Soporta hasta 100 kg de carga real",
      "Marca con servicio técnico en España",
    ],
    contras: [
      "Ocupa cerca de 2 metros cuadrados",
      "Las poleas tienen recorrido más corto que en gimnasios comerciales",
    ],
    specs: [
      { etiqueta: "Carga máxima", valor: "100 kg" },
      { etiqueta: "Peso del usuario", valor: "Hasta 130 kg" },
      { etiqueta: "Medidas (LxAxA)", valor: "207 × 113 × 207 cm" },
      { etiqueta: "Peso aproximado", valor: "150 kg" },
      { etiqueta: "Garantía", valor: "2 años" },
    ],
    precioOrientativo: "1.099 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Multiestación BH Fitness Global Gym Plus en gimnasio doméstico",
    veredicto:
      "Si tienes espacio y quieres una sola máquina que lo cubra todo, es la apuesta segura.",
  },
  {
    slug: "bodytone-cr40-power-rack",
    nombre: "Bodytone CR40 Power Rack",
    categoria: "maquinas-gimnasio",
    marca: "Bodytone",
    descripcion:
      "Jaula de potencia de acero para sentadilla, press banca y dominadas. La base seria para quien quiere entrenar con barra olímpica en casa.",
    pros: [
      "Acero reforzado, aguanta cargas reales (>200 kg)",
      "Barra de dominadas integrada",
      "Compatible con discos olímpicos de 50 mm",
      "Ganchos de seguridad para entrenar solo",
    ],
    contras: [
      "Requiere techo de al menos 2,20 m",
      "Sin polea de cable (opcional, se compra aparte)",
    ],
    specs: [
      { etiqueta: "Carga máxima", valor: "250 kg" },
      { etiqueta: "Altura", valor: "215 cm" },
      { etiqueta: "Footprint", valor: "120 × 130 cm" },
      { etiqueta: "Material", valor: "Acero 60×60 mm, 2,5 mm grosor" },
      { etiqueta: "Compatibilidad", valor: "Discos olímpicos 50 mm" },
    ],
    precioOrientativo: "599 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Power Rack Bodytone CR40 con barra olímpica",
    veredicto:
      "Para quien quiere entrenar de verdad: peso libre, dominadas y progresión sin límite artificial.",
  },
  {
    slug: "atx-prx-740-smith-machine",
    nombre: "ATX PRX-740 Smith Machine",
    categoria: "maquinas-gimnasio",
    marca: "ATX",
    descripcion:
      "Smith Machine de uso semiprofesional con barra guiada y soporte para discos. Más seguridad que el peso libre puro, sobre todo si entrenas solo.",
    pros: [
      "Barra guiada con bloqueo rápido a cualquier altura",
      "Construcción robusta marca alemana",
      "Permite movimientos asistidos sin compañero",
    ],
    contras: [
      "Precio alto frente a power racks equivalentes",
      "La trayectoria guiada no entrena la estabilidad como la barra libre",
    ],
    specs: [
      { etiqueta: "Carga máxima", valor: "300 kg" },
      { etiqueta: "Recorrido de barra", valor: "190 cm" },
      { etiqueta: "Peso", valor: "175 kg" },
      { etiqueta: "Garantía", valor: "10 años estructura" },
    ],
    precioOrientativo: "1.499 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Smith Machine ATX PRX-740 vista frontal",
    veredicto:
      "Excelente para entrenar solo con cargas altas y seguridad, no para puristas del peso libre.",
  },
  {
    slug: "xiaomi-walkingpad-c2",
    nombre: "Xiaomi WalkingPad C2",
    categoria: "maquinas-gimnasio",
    marca: "Xiaomi (Kingsmith)",
    descripcion:
      "Cinta de andar plegable y silenciosa pensada para caminar mientras trabajas o entre series. No es para correr.",
    pros: [
      "Se pliega y cabe debajo del sofá",
      "Silenciosa, perfecta para pisos",
      "Control por app y mando remoto",
      "Velocidad hasta 6 km/h (caminar rápido)",
    ],
    contras: [
      "No vale para correr (máximo 6 km/h)",
      "Banda estrecha, no recomendable si calzas más del 45",
    ],
    specs: [
      { etiqueta: "Velocidad máxima", valor: "6 km/h" },
      { etiqueta: "Carga máxima usuario", valor: "100 kg" },
      { etiqueta: "Plegada", valor: "82 × 55 × 13 cm" },
      { etiqueta: "Potencia", valor: "746 W" },
    ],
    precioOrientativo: "399 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Cinta plegable Xiaomi WalkingPad C2 desplegada",
    veredicto:
      "Genial para sumar pasos en casa; no la compres pensando en correr.",
  },
  {
    slug: "bodytone-ds25-indoor-cycling",
    nombre: "Bodytone DS25 Indoor Cycling",
    categoria: "maquinas-gimnasio",
    marca: "Bodytone",
    descripcion:
      "Bicicleta de spinning con volante de inercia de 22 kg y resistencia mecánica. Pensada para clases en casa estilo Peloton sin el coste de Peloton.",
    pros: [
      "Volante de 22 kg, sensación de pedalada estable",
      "Sillín y manillar regulables en 4 ejes",
      "Soporte para móvil/tablet",
      "Compatible con Kinomap y Zwift (vía sensor aparte)",
    ],
    contras: [
      "Resistencia mecánica, no magnética: hay que mantener",
      "Sin pantalla integrada (depende del móvil)",
    ],
    specs: [
      { etiqueta: "Volante de inercia", valor: "22 kg" },
      { etiqueta: "Carga máxima", valor: "130 kg" },
      { etiqueta: "Resistencia", valor: "Por fricción regulable" },
      { etiqueta: "Pedales", valor: "SPD/jaula compatibles" },
    ],
    precioOrientativo: "459 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Bicicleta indoor cycling Bodytone DS25",
    veredicto:
      "Mejor compromiso precio/sensación para entrenar HIIT y rodajes ligeros en casa.",
  },

  // ============================================================
  // BANCOS Y PESAS
  // ============================================================
  {
    slug: "adidas-performance-banco-ajustable",
    nombre: "Adidas Performance Banco Ajustable",
    categoria: "bancos-pesas",
    marca: "Adidas",
    descripcion:
      "Banco regulable en 6 posiciones (declinado, plano, inclinado vertical). Tapizado denso y patas con apoyo amplio.",
    pros: [
      "6 ángulos cubren todos los press y aperturas",
      "Tapizado firme que no se hunde con el tiempo",
      "Base ancha: estable incluso con cargas pesadas",
      "Marca conocida con respaldo de servicio",
    ],
    contras: [
      "No es plegable, ocupa unos 130 cm en plano",
      "Sin soporte de barra integrado",
    ],
    specs: [
      { etiqueta: "Posiciones de respaldo", valor: "6 (-10° a 80°)" },
      { etiqueta: "Carga máxima", valor: "135 kg usuario + carga" },
      { etiqueta: "Medidas en plano", valor: "133 × 56 × 48 cm" },
      { etiqueta: "Peso", valor: "21 kg" },
    ],
    precioOrientativo: "189 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Banco ajustable Adidas Performance en posición inclinada",
    veredicto:
      "Calidad/precio sobresaliente para entrenamiento serio en casa.",
  },
  {
    slug: "domyos-ba-500-banco-plegable",
    nombre: "Domyos BA 500 Banco Plegable",
    categoria: "bancos-pesas",
    marca: "Domyos (Decathlon)",
    descripcion:
      "Banco musculación plegable y ajustable. Pensado para guardar tras entrenar y para press, remo y curl con mancuernas.",
    pros: [
      "Se pliega en 30 segundos para guardar",
      "Cinco posiciones de respaldo",
      "Precio agresivo para iniciación",
      "Garantía Decathlon de 10 años en estructura",
    ],
    contras: [
      "Carga máxima inferior a bancos no plegables",
      "Sin asiento ajustable: en inclinado el cuerpo resbala un poco",
    ],
    specs: [
      { etiqueta: "Carga máxima", valor: "300 kg total" },
      { etiqueta: "Posiciones", valor: "5" },
      { etiqueta: "Plegado", valor: "112 × 32 × 30 cm" },
      { etiqueta: "Peso", valor: "13 kg" },
    ],
    precioOrientativo: "129 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Banco plegable Domyos BA 500 plegado y desplegado",
    veredicto:
      "El plegable con mejor relación calidad/precio si entrenas en salón o habitación.",
  },
  {
    slug: "bowflex-selecttech-552i",
    nombre: "Bowflex SelectTech 552i Mancuernas Ajustables",
    categoria: "bancos-pesas",
    marca: "Bowflex",
    descripcion:
      "Par de mancuernas regulables de 2 a 24 kg con dial giratorio. Sustituyen 15 pares de mancuernas tradicionales.",
    pros: [
      "Cambias de peso en 2 segundos girando un dial",
      "Sustituyen 15 pares de mancuernas: brutal ahorro de espacio",
      "Acabados premium",
      "Saltos de 2 kg en 2 kg (rango fino útil para hombros/bíceps)",
    ],
    contras: [
      "Precio elevado por par",
      "Más voluminosas que una mancuerna fija del mismo peso",
      "No conviene tirarlas al suelo: hay que dejarlas con cuidado",
    ],
    specs: [
      { etiqueta: "Rango por mancuerna", valor: "2 – 24 kg" },
      { etiqueta: "Incremento mínimo", valor: "2 kg" },
      { etiqueta: "Equivalente", valor: "15 pares de mancuernas" },
      { etiqueta: "Base incluida", valor: "Sí" },
    ],
    precioOrientativo: "549 € (par)",
    imagen: PLACEHOLDER,
    imagenAlt: "Mancuernas ajustables Bowflex SelectTech 552i con dial",
    veredicto:
      "Si tu cuello de botella es el espacio, son la mejor inversión posible.",
  },
  {
    slug: "cap-barbell-olympic-220cm",
    nombre: "CAP Barbell Barra Olímpica 220 cm",
    categoria: "bancos-pesas",
    marca: "CAP Barbell",
    descripcion:
      "Barra olímpica de 20 kg con manguitos rodantes y marcas IPF. Pensada para sentadilla, peso muerto y press en cualquier power rack estándar.",
    pros: [
      "20 kg reales, manguitos rodantes con casquillos de bronce",
      "Resistencia declarada 320 kg",
      "Compatible con cualquier disco olímpico 50 mm",
      "Marcas IPF para coger agarre simétrico",
    ],
    contras: [
      "No tiene knurl central (peor para sentadilla con barra alta)",
      "Acabado cromado no aguanta tan bien al aire libre",
    ],
    specs: [
      { etiqueta: "Longitud", valor: "220 cm" },
      { etiqueta: "Peso", valor: "20 kg" },
      { etiqueta: "Resistencia", valor: "320 kg" },
      { etiqueta: "Diámetro manguito", valor: "50 mm" },
    ],
    precioOrientativo: "189 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Barra olímpica CAP Barbell 220 cm sobre rack",
    veredicto:
      "Una barra honesta para empezar en serio sin gastar 400 € en una premium.",
  },
  {
    slug: "set-discos-olimpicos-bumper-100kg",
    nombre: "Set Discos Olímpicos Bumper 100 kg",
    categoria: "bancos-pesas",
    marca: "Powertec",
    descripcion:
      "Set de discos olímpicos de goma (bumper) que admite caída al suelo sin daños. Incluye 2×20, 2×15, 2×10, 2×5 kg.",
    pros: [
      "Goma firme: se pueden dejar caer (útil en peso muerto)",
      "Diámetro estándar 450 mm para sentadilla cómoda",
      "Set escalonado: cubre desde 20 hasta 100 kg",
      "Protegen el suelo de tu casa",
    ],
    contras: [
      "Discos de goma ocupan más grosor que los de hierro",
      "El precio por kilo es más alto que los discos de hierro pelados",
    ],
    specs: [
      { etiqueta: "Total", valor: "100 kg" },
      { etiqueta: "Composición", valor: "2×20 + 2×15 + 2×10 + 2×5 kg" },
      { etiqueta: "Material", valor: "Goma virgen + núcleo de acero" },
      { etiqueta: "Diámetro", valor: "450 mm" },
    ],
    precioOrientativo: "399 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Set discos olímpicos bumper apilados",
    veredicto:
      "Si vas a hacer peso muerto en casa, los bumpers protegen el suelo y la barra.",
  },

  // ============================================================
  // CREATINA
  // ============================================================
  {
    slug: "hsn-creapure-creatina",
    nombre: "HSN Creatina Monohidratada Creapure",
    categoria: "creatina",
    marca: "HSN",
    descripcion:
      "Creatina Creapure® alemana sin sabor. La marca española mejor valorada en relación calidad/precio.",
    pros: [
      "Creapure®: el patrón oro de pureza, fabricado en Alemania",
      "Sin sabor — se disuelve en cualquier bebida",
      "Sin aditivos ni cargas",
      "Precio por dosis muy competitivo",
    ],
    contras: [
      "Sin sabor literal: en agua sola no engancha al paladar",
      "El polvo es muy fino y se dispersa si vibras la bote",
    ],
    specs: [
      { etiqueta: "Tipo", valor: "Monohidrato Creapure®" },
      { etiqueta: "Dosis estándar", valor: "3-5 g/día" },
      { etiqueta: "Formato", valor: "500 g / 1 kg" },
      { etiqueta: "Sabor", valor: "Neutro" },
    ],
    precioOrientativo: "29 € (500 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote de creatina HSN Creapure 500 g",
    veredicto:
      "Si no quieres pensarlo, esta es la elección por defecto en España.",
  },
  {
    slug: "optimum-nutrition-creatine-powder",
    nombre: "Optimum Nutrition Creatine Powder",
    categoria: "creatina",
    marca: "Optimum Nutrition",
    descripcion:
      "Creatina monohidratada micronizada de una de las marcas más conocidas del mundo. Reconocida por consistencia entre lotes.",
    pros: [
      "Micronizada: se disuelve mejor que la convencional",
      "Marca con auditorías constantes",
      "Disponible en formatos grandes",
    ],
    contras: [
      "Más cara por kilo que opciones europeas equivalentes",
      "No declara Creapure® explícitamente",
    ],
    specs: [
      { etiqueta: "Tipo", valor: "Monohidrato micronizado" },
      { etiqueta: "Formato", valor: "317 g / 600 g" },
      { etiqueta: "Sabor", valor: "Neutro" },
      { etiqueta: "Origen", valor: "EE.UU." },
    ],
    precioOrientativo: "32 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote Optimum Nutrition Creatine Powder",
    veredicto:
      "Marca segura si valoras trayectoria y disponibilidad global.",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    nombre: "MyProtein Creatina Monohidratada",
    categoria: "creatina",
    marca: "MyProtein",
    descripcion:
      "Versión de gran consumo: barata, sin aditivos y con sabores opcionales. La opción de iniciación más popular.",
    pros: [
      "Precio por kilo de los más bajos del mercado",
      "Versiones con sabor (fresa, naranja) si el neutro te aburre",
      "Ofertas frecuentes — útil para stock",
    ],
    contras: [
      "No es Creapure®: variabilidad entre lotes según planta",
      "Los sabores llevan edulcorantes que algunos prefieren evitar",
    ],
    specs: [
      { etiqueta: "Tipo", valor: "Monohidrato" },
      { etiqueta: "Formato", valor: "250 g a 1 kg" },
      { etiqueta: "Sabor", valor: "Neutro y con sabor" },
    ],
    precioOrientativo: "22 € (500 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bolsa MyProtein Creatina Monohidratada",
    veredicto:
      "Para empezar sin gastar de más; cuando te enganches, sube a Creapure®.",
  },
  {
    slug: "prozis-creatine-creapure",
    nombre: "Prozis Creatine 100% Creapure",
    categoria: "creatina",
    marca: "Prozis",
    descripcion:
      "Creatina Creapure® portuguesa, sin aditivos. Alternativa directa a HSN con envío rápido.",
    pros: [
      "Creapure® declarado en etiqueta",
      "Sin aditivos ni edulcorantes",
      "Buen precio en ofertas (suscripción)",
    ],
    contras: [
      "Stock variable: a veces tarda en llegar el formato grande",
      "Marca menos conocida fuera de Iberia",
    ],
    specs: [
      { etiqueta: "Tipo", valor: "Monohidrato Creapure®" },
      { etiqueta: "Formato", valor: "300 g / 1 kg" },
      { etiqueta: "Sabor", valor: "Neutro" },
    ],
    precioOrientativo: "27 € (500 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote Prozis Creatine 100% Creapure",
    veredicto:
      "Alternativa sólida a HSN si buscas Creapure® con envío peninsular rápido.",
  },
  {
    slug: "bulk-creapure",
    nombre: "Bulk Creapure Creatine Monohydrate",
    categoria: "creatina",
    marca: "Bulk",
    descripcion:
      "Marca británica con auditorías independientes. Creapure® puro en formato neutral.",
    pros: [
      "Creapure® de Alemania con certificación visible",
      "Lotes auditados por terceros",
      "Web con análisis publicados",
    ],
    contras: [
      "Envío desde UK con tiempos algo más largos",
      "Algo más cara que opciones ibéricas",
    ],
    specs: [
      { etiqueta: "Tipo", valor: "Monohidrato Creapure®" },
      { etiqueta: "Formato", valor: "500 g / 1 kg" },
      { etiqueta: "Sabor", valor: "Neutro" },
    ],
    precioOrientativo: "31 € (500 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bolsa Bulk Creapure Creatine Monohydrate",
    veredicto:
      "La opción más transparente sobre análisis y trazabilidad.",
  },

  // ============================================================
  // PROTEÍNA WHEY
  // ============================================================
  {
    slug: "optimum-gold-standard-whey",
    nombre: "Optimum Nutrition Gold Standard 100% Whey",
    categoria: "proteina-whey",
    marca: "Optimum Nutrition",
    descripcion:
      "El best-seller histórico de la categoría. Concentrado + aislado, sabor consistente y solubilidad excelente.",
    pros: [
      "24 g de proteína por scoop, perfil aminoacídico completo",
      "Sabores muy logrados (Double Rich Chocolate sigue siendo top)",
      "Se disuelve sin grumos",
      "Disponibilidad permanente — sin sustos de stock",
    ],
    contras: [
      "Más cara por kilo que marcas españolas equivalentes",
      "Lleva lecitina y aroma artificial (no es zero-aditivos)",
    ],
    specs: [
      { etiqueta: "Proteína por scoop", valor: "24 g (30 g servicio)" },
      { etiqueta: "Tipo", valor: "Concentrado + aislado" },
      { etiqueta: "Formato", valor: "907 g / 2,27 kg / 4,54 kg" },
      { etiqueta: "Sabores", valor: "20+" },
    ],
    precioOrientativo: "39 € (907 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote Optimum Nutrition Gold Standard Whey 907 g",
    veredicto:
      "Si quieres una whey de confianza sin investigar, es la apuesta segura.",
  },
  {
    slug: "myprotein-impact-whey",
    nombre: "MyProtein Impact Whey Protein",
    categoria: "proteina-whey",
    marca: "MyProtein",
    descripcion:
      "Concentrado de suero con buena relación precio/proteína. Catálogo de sabores enorme y promociones constantes.",
    pros: [
      "21 g de proteína por scoop a precio agresivo",
      "Catálogo de más de 30 sabores (incluido Stevia)",
      "Suele estar de oferta — gestionarse con cupones merece la pena",
    ],
    contras: [
      "Calidad de sabores irregular entre referencias",
      "Algunos sabores con sucralosa marcada",
    ],
    specs: [
      { etiqueta: "Proteína por scoop", valor: "21 g (25 g servicio)" },
      { etiqueta: "Tipo", valor: "Concentrado" },
      { etiqueta: "Formato", valor: "250 g a 5 kg" },
      { etiqueta: "Sabores", valor: "30+" },
    ],
    precioOrientativo: "30 € (1 kg)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bolsa MyProtein Impact Whey Protein 1 kg",
    veredicto:
      "La elección clásica para presupuesto contenido. Compra siempre con cupón.",
  },
  {
    slug: "hsn-evowhey-2",
    nombre: "HSN EvoWhey Protein 2.0",
    categoria: "proteina-whey",
    marca: "HSN",
    descripcion:
      "Concentrado de suero ultrafiltrado fabricado en Granada. Sabores moderados y composición muy limpia.",
    pros: [
      "22 g de proteína por scoop",
      "Producido en España con etiqueta clara",
      "Sabores menos azucarados que la competencia",
      "Suscripción con descuentos recurrentes",
    ],
    contras: [
      "Menos opciones de tamaños grandes (>2 kg)",
      "Solubilidad correcta pero no excepcional",
    ],
    specs: [
      { etiqueta: "Proteína por scoop", valor: "22 g (30 g servicio)" },
      { etiqueta: "Tipo", valor: "Concentrado ultrafiltrado" },
      { etiqueta: "Formato", valor: "500 g / 1 kg / 2 kg" },
      { etiqueta: "Sabores", valor: "10+" },
    ],
    precioOrientativo: "29 € (1 kg)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote HSN EvoWhey Protein 2.0 1 kg",
    veredicto:
      "La whey española de referencia: trazabilidad clara y sabores discretos.",
  },
  {
    slug: "bulk-whey-protein-80",
    nombre: "Bulk Whey Protein 80 (Concentrado)",
    categoria: "proteina-whey",
    marca: "Bulk",
    descripcion:
      "Concentrado 80% sin aromas, edulcorantes ni colorantes en su versión Pure. Para quien prioriza composición sobre sabor.",
    pros: [
      "Versión Pure: solo proteína de suero",
      "Versiones con sabor también disponibles",
      "Auditorías de lote publicadas online",
    ],
    contras: [
      "La Pure tiene sabor neutro intenso — no es para todos",
      "Envío desde UK puede tardar",
    ],
    specs: [
      { etiqueta: "Proteína por scoop", valor: "23 g (30 g servicio)" },
      { etiqueta: "Tipo", valor: "Concentrado 80%" },
      { etiqueta: "Formato", valor: "500 g a 2,5 kg" },
      { etiqueta: "Sabores", valor: "Pure + 15 saborizadas" },
    ],
    precioOrientativo: "32 € (1 kg)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bolsa Bulk Whey Protein 80 1 kg",
    veredicto:
      "Para puristas que valoran etiqueta limpia y análisis publicados.",
  },
  {
    slug: "prozis-100-real-whey",
    nombre: "Prozis 100% Real Whey",
    categoria: "proteina-whey",
    marca: "Prozis",
    descripcion:
      "Concentrado portugués con buena relación calidad/precio y sabores muy logrados, sobre todo los de pastel.",
    pros: [
      "Sabores de repostería destacados (cheesecake fresa, brownie)",
      "Buenas ofertas con suscripción",
      "Envío rápido en España",
    ],
    contras: [
      "Algunos sabores llevan edulcorantes evidentes",
      "Información nutricional menos detallada que competencia top",
    ],
    specs: [
      { etiqueta: "Proteína por scoop", valor: "22 g (30 g servicio)" },
      { etiqueta: "Tipo", valor: "Concentrado" },
      { etiqueta: "Formato", valor: "400 g / 900 g / 2 kg" },
      { etiqueta: "Sabores", valor: "20+" },
    ],
    precioOrientativo: "27 € (900 g)",
    imagen: PLACEHOLDER,
    imagenAlt: "Bote Prozis 100% Real Whey 900 g",
    veredicto:
      "Si los sabores postre son tu debilidad, es la más golosa de la lista.",
  },

  // ============================================================
  // GIMNASIO EN CASA (ACCESORIOS)
  // ============================================================
  {
    slug: "esterilla-yoga-adidas-5mm",
    nombre: "Adidas Yoga Mat 5mm",
    categoria: "gimnasio-en-casa",
    marca: "Adidas",
    descripcion:
      "Esterilla de yoga y entrenamiento funcional con 5 mm de grosor. Suficiente amortiguación para abdominales y plancha sin perder estabilidad.",
    pros: [
      "5 mm: equilibrio entre amortiguación y estabilidad",
      "Material denso, no se descama con el uso",
      "Antideslizante por ambas caras",
      "Correa de transporte incluida",
    ],
    contras: [
      "Marca por superficie con la luz directa",
      "Olor a goma los primeros días (se va aireando)",
    ],
    specs: [
      { etiqueta: "Grosor", valor: "5 mm" },
      { etiqueta: "Medidas", valor: "173 × 61 cm" },
      { etiqueta: "Material", valor: "TPE / NBR" },
      { etiqueta: "Peso", valor: "0,8 kg" },
    ],
    precioOrientativo: "39 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Esterilla de yoga Adidas 5mm enrollada",
    veredicto:
      "Una esterilla seria sin entrar en marcas premium de 80+ €.",
  },
  {
    slug: "kettlebell-domyos-12kg",
    nombre: "Domyos Kettlebell 12 kg Hierro Fundido",
    categoria: "gimnasio-en-casa",
    marca: "Domyos (Decathlon)",
    descripcion:
      "Kettlebell de hierro fundido con asa cómoda y base plana. Peso de entrada útil para swing, goblet squat y press.",
    pros: [
      "Hierro fundido en una sola pieza: sin soldaduras",
      "Asa lisa y amplia, no daña las manos",
      "Base plana: estable en push-ups y planchas con peso",
    ],
    contras: [
      "Acabado pintado se descascarilla con tiempo",
      "12 kg puede quedarse corto rápido para swing",
    ],
    specs: [
      { etiqueta: "Peso", valor: "12 kg" },
      { etiqueta: "Material", valor: "Hierro fundido" },
      { etiqueta: "Diámetro asa", valor: "32 mm" },
      { etiqueta: "Otros pesos", valor: "4, 6, 8, 10, 12, 16, 20 kg" },
    ],
    precioOrientativo: "29 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Kettlebell Domyos 12 kg de hierro fundido",
    veredicto:
      "Para empezar con swings y goblets en casa es difícil pedir más por menos.",
  },
  {
    slug: "letsfit-bandas-elasticas-set",
    nombre: "Letsfit Bandas Elásticas Resistencia (Set 5)",
    categoria: "gimnasio-en-casa",
    marca: "Letsfit",
    descripcion:
      "Set de 5 bandas de látex con resistencias progresivas (10 a 50 lb). Pensadas para activación, asistencia en dominadas o entrenamiento entero si viajas.",
    pros: [
      "5 resistencias cubren desde activación hasta cargas serias",
      "Látex de capas, no rompe fácil",
      "Incluye bolsa de transporte: cabe en cualquier mochila",
      "Útiles también para movilidad y rehabilitación",
    ],
    contras: [
      "Las bandas más gruesas pueden pinzar la piel sin camiseta",
      "El látex envejece con luz solar directa",
    ],
    specs: [
      { etiqueta: "Cantidad", valor: "5 bandas" },
      { etiqueta: "Resistencias", valor: "10 / 20 / 30 / 40 / 50 lb" },
      { etiqueta: "Material", valor: "Látex natural en capas" },
    ],
    precioOrientativo: "29 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Set Letsfit de bandas elásticas de cinco resistencias",
    veredicto:
      "Indispensable. Si viajas o no puedes con cargas, son una solución entera.",
  },
  {
    slug: "trx-suspension-trainer-go",
    nombre: "TRX Suspension Trainer GO",
    categoria: "gimnasio-en-casa",
    marca: "TRX",
    descripcion:
      "El sistema de suspensión original en su versión portátil. Anclas en cualquier puerta o barra y entrenas cuerpo entero con tu propio peso.",
    pros: [
      "Marca original: la calidad del nylon y los herrajes se nota",
      "Una sola unidad para entrenamiento completo (más de 300 ejercicios)",
      "Versión GO: 0,6 kg y bolsa pequeña, perfecto para viajes",
      "Ancla de puerta segura incluida",
    ],
    contras: [
      "Caro frente a clones genéricos",
      "Para progresar mucho hay que variar la posición con cabeza, no se añade peso",
    ],
    specs: [
      { etiqueta: "Peso", valor: "0,6 kg" },
      { etiqueta: "Longitud máxima", valor: "2,4 m" },
      { etiqueta: "Carga máxima usuario", valor: "159 kg" },
      { etiqueta: "Incluye", valor: "Ancla de puerta + bolsa" },
    ],
    precioOrientativo: "129 €",
    imagen: PLACEHOLDER,
    imagenAlt: "TRX Suspension Trainer GO en su bolsa de transporte",
    veredicto:
      "La opción seria si quieres calidad de marca. Para viajeros, sin debate.",
  },
  {
    slug: "triggerpoint-grid-foam-roller",
    nombre: "TriggerPoint GRID Foam Roller",
    categoria: "gimnasio-en-casa",
    marca: "TriggerPoint",
    descripcion:
      "Rodillo de espuma con superficie multipatrón. Para liberación miofascial pre y post entrenamiento. Estándar en fisios.",
    pros: [
      "Densidad firme sin ser agresiva",
      "Patrones de superficie distintos: imitan dedos, palma y nudillos",
      "Tubo interno hueco: ligero pero rígido",
      "Aguanta años de uso intensivo",
    ],
    contras: [
      "Más caro que un foam roller de espuma básica",
      "Si nunca has rodado, los primeros días duele bastante",
    ],
    specs: [
      { etiqueta: "Longitud", valor: "33 cm" },
      { etiqueta: "Diámetro", valor: "14 cm" },
      { etiqueta: "Carga máxima", valor: "227 kg" },
      { etiqueta: "Material", valor: "EVA sobre tubo ABS" },
    ],
    precioOrientativo: "45 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Foam roller TriggerPoint GRID",
    veredicto:
      "Una vez pruebas un GRID, los rollers blandos te parecen juguetes.",
  },
  {
    slug: "crossrope-cuerda-saltar-lastrada",
    nombre: "Crossrope Cuerda Saltar Lastrada",
    categoria: "gimnasio-en-casa",
    marca: "Crossrope",
    descripcion:
      "Sistema de cuerdas intercambiables (¼ lb a 2 lb) con asas de rodamientos premium. Para HIIT real y trabajo de cardio en muy poco espacio.",
    pros: [
      "Cuerdas intercambiables: cambias resistencia en 5 segundos",
      "Rodamientos suaves — no se tuerce la cuerda al girar",
      "Cuerpo más activado por el peso, no solo cardio",
    ],
    contras: [
      "Precio muy por encima de cuerdas básicas",
      "Necesita techo alto: no es para pisos con vigas bajas",
    ],
    specs: [
      { etiqueta: "Cuerdas incluidas", valor: "¼ lb + ½ lb (variable)" },
      { etiqueta: "Asas", valor: "Aluminio con rodamientos" },
      { etiqueta: "Longitud", valor: "Ajustable por modelo" },
    ],
    precioOrientativo: "99 €",
    imagen: PLACEHOLDER,
    imagenAlt: "Cuerda de saltar lastrada Crossrope",
    veredicto:
      "Para HIIT serio en 3 m². Si saltas una vez al mes, no la necesitas.",
  },
];

// ============================================================
// Índice por slug — útil en páginas de detalle / referencias cruzadas
// ============================================================
export const PRODUCTOS_POR_SLUG: Record<string, Producto> = PRODUCTOS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, Producto>,
);
