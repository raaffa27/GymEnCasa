import type { CategoriaSlug } from "./types";

type FAQ = { pregunta: string; respuesta: string };

/** FAQs específicas por categoría — alimentan también el JSON-LD FAQPage. */
export const FAQS_POR_CATEGORIA: Record<CategoriaSlug, FAQ[]> = {
  "maquinas-gimnasio": [
    {
      pregunta: "¿Cuánto espacio necesito para una multiestación en casa?",
      respuesta:
        "Para una multiestación tipo BH Global Gym o equivalente, calcula 2,5 m × 2 m de planta y al menos 2,10 m de alto. Para una jaula de potencia con dominadas, súmale 20-30 cm de altura por encima del rack para no chocar.",
    },
    {
      pregunta: "¿Multiestación o power rack: qué compensa más?",
      respuesta:
        "Si entrenas hipertrofia general y quieres variedad sin pensar (poleas, press, curl), la multiestación. Si tu objetivo es fuerza con barra (sentadilla, peso muerto, press banca) y vas a progresar en cargas, el power rack escala muchísimo mejor.",
    },
    {
      pregunta: "¿El suelo de mi piso aguanta una jaula con discos?",
      respuesta:
        "Una jaula vacía pesa 80-120 kg. Sumándole 100 kg de discos y tu peso, hablamos de 300-350 kg estáticos sobre 1,5 m². Cualquier forjado moderno aguanta sin problema. En pisos antiguos consulta al administrador y usa esterillas de goma de 20 mm para repartir.",
    },
    {
      pregunta: "¿Las cintas plegables sirven para correr?",
      respuesta:
        "Las cintas plegables tipo Xiaomi WalkingPad están pensadas para caminar (hasta 6 km/h). Si quieres correr en casa, necesitas una cinta con motor de mínimo 2 CV y banda de 130 cm o más — entran ya en otro rango de precio y de tamaño.",
    },
  ],

  "bancos-pesas": [
    {
      pregunta: "¿Banco ajustable fijo o banco plegable?",
      respuesta:
        "Plegable si vives en piso pequeño y entrenas en salón: ahorras metros y los 30 € extra de un buen plegable se recuperan en cómodidad. Fijo si tienes una habitación dedicada y vas a mover cargas grandes (>120 kg en press): la base más ancha de un fijo es más estable.",
    },
    {
      pregunta: "¿Mancuernas ajustables (Bowflex) o set tradicional?",
      respuesta:
        "Las ajustables ganan en espacio (sustituyen 15 pares) y en facilidad para hacer drop sets. Las tradicionales ganan en durabilidad y son más cómodas de soltar al suelo. Si tu cuello de botella es el espacio, ajustables sin debate.",
    },
    {
      pregunta: "¿Discos olímpicos bumper o de hierro?",
      respuesta:
        "Bumper si vas a hacer peso muerto y dejarlos caer (protegen el suelo y la barra). Hierro si solo haces press y sentadilla controlada con descenso lento — son más baratos por kilo. Lo ideal en casa: bumpers en los discos grandes (20, 15, 10 kg) y hierro en los pequeños (5, 2.5 kg).",
    },
    {
      pregunta: "¿Qué barra olímpica comprar para empezar?",
      respuesta:
        "Una barra de 20 kg, 220 cm, resistencia declarada de al menos 300 kg y manguitos rodantes. Por debajo de 150 € hay opciones honestas (CAP Barbell, Bodytone). Por encima de 350 € entras en barras tipo Rogue/Eleiko que no merecen la pena salvo que compitas.",
    },
  ],

  creatina: [
    {
      pregunta: "¿Cuánta creatina debería tomar al día?",
      respuesta:
        "La pauta estándar respaldada por evidencia es 3-5 g/día de monohidrato, todos los días, sin fase de carga. La fase de carga (20 g/día durante 5 días) acelera la saturación pero no aporta beneficios extra a medio plazo.",
    },
    {
      pregunta: "¿Hay que ciclarla?",
      respuesta:
        "No. La creatina es uno de los suplementos con más evidencia de seguridad a largo plazo. Estudios de más de 5 años con dosis diaria no muestran efectos adversos en personas sanas. Si tienes patología renal previa, consulta a un médico.",
    },
    {
      pregunta: "¿Creapure® es realmente mejor que otras creatinas?",
      respuesta:
        "Creapure® es una marca registrada de creatina monohidratada fabricada en Alemania con controles de pureza muy estrictos (>99,9%). En la práctica, otras creatinas serias también superan el 99% de pureza. La diferencia justifica el sobreprecio si valoras trazabilidad; el rendimiento real es prácticamente igual.",
    },
    {
      pregunta: "¿Con o sin azúcar?",
      respuesta:
        "El mito de que necesita un pico de insulina para absorberse está sobrevalorado. Con agua, café, batido o zumo absorbes bien. Importa más la regularidad que el vehículo.",
    },
  ],

  "proteina-whey": [
    {
      pregunta: "¿Cuánta proteína necesito al día?",
      respuesta:
        "Para hipertrofia y mantenimiento muscular, 1,6-2,2 g por kilo de peso corporal al día (proteína total, no solo en polvo). Para una persona de 75 kg eso son unos 120-165 g/día. El polvo se usa para cubrir los huecos que la comida real no llega, no para sustituirla.",
    },
    {
      pregunta: "¿Concentrado, aislado o hidrolizado?",
      respuesta:
        "Concentrado (70-80% proteína): mejor relación calidad/precio para la mayoría. Aislado (>90%, sin lactosa): si te sienta mal el concentrado o cuidas mucho macros. Hidrolizado: digestión más rápida pero precio difícil de justificar salvo casos muy específicos.",
    },
    {
      pregunta: "¿Cuándo tomar la proteína?",
      respuesta:
        "Cuando te encaje. La ventana 'anabólica' postentrenamiento es mucho más amplia (4-6 horas) que el mito de los '30 minutos'. Lo importante es repartir la proteína total del día en 3-5 ingestas. Pre, intra o post-entreno: cualquiera vale.",
    },
    {
      pregunta: "¿La whey me sentará mal si soy intolerante a la lactosa?",
      respuesta:
        "El concentrado (5-10% lactosa) puede dar molestias. El aislado (<1%) es casi siempre tolerable. Si la duda persiste, prueba antes con 10 g y ve subiendo. Las proteínas vegetales (guisante, arroz) son una alternativa sin lactosa con perfil comparable.",
    },
  ],

  "gimnasio-en-casa": [
    {
      pregunta: "¿Cuánto cuesta montar un gimnasio en casa básico?",
      respuesta:
        "Por 150-200 € tienes una esterilla, una kettlebell, bandas elásticas y un TRX o cuerda — suficiente para meses de progreso. Por 400-600 € sumas mancuernas ajustables y un banco plegable, ya entrenas fuerza completa. A partir de 1.500 € entras en jaulas + barra + discos.",
    },
    {
      pregunta: "¿Qué compro primero si no sé por dónde empezar?",
      respuesta:
        "Una esterilla decente y una kettlebell de 12-16 kg. Con eso ya haces swings, goblet squat, presses, remos, planchas con peso, abdominales. Es el material con mejor 'progresión por euro' del mercado. El resto se construye encima.",
    },
    {
      pregunta: "¿Las bandas elásticas sustituyen a las pesas?",
      respuesta:
        "No del todo, pero llegan más lejos de lo que parece. Son ideales para activación, asistencia en dominadas, trabajo de movilidad y entrenamiento de cuerpo entero en viajes. Para hipertrofia seria, las pesas son insustituibles.",
    },
    {
      pregunta: "¿Necesito una esterilla cara?",
      respuesta:
        "No, pero sí una que dure. Una esterilla de 5 mm con material denso (TPE o NBR) por 30-40 € te aguanta años. Las de 2 € de chino se descaman en un mes y huelen mal.",
    },
  ],
};
