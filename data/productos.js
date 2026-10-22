// ============================================================
//  DATA: Catálogo de productos - El Girasol
//  Define la variable global `productos` (array de objetos).
//  Edítalo con cualquier editor de texto; cada producto sigue
//  el mismo formato: { id, code, name, packageContent, category, image,
//  shortDesc, ingredients, serving, timing, intakeInstructions,
//  benefits[], benefitSummary, contraindications, foodInteractions, interactions }
//  ⚠️ El 'id' debe ser único y NUNCA reutilizarse en otro producto.
//  Después de editar, abre validate.html para revisar errores.
// ============================================================

window.manualData = window.manualData || {};
window.manualData.productos = [
  // ================================================================
  //  1. CLORURO DE MAGNESIO 250 gr
  // ================================================================
  {
    id: 1,
    code: "7503021404145",
    name: "CLORURO DE MAGNESIO 250 gr",
    benefitSummary: "Magnesio para músculos, nervios y energía",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CLORURO-MAGNESIO-250.jpg",
    shortDesc: "Suplemento de magnesio en polvo de alta biodisponibilidad, contribuye a la función muscular y nerviosa y a la reducción del cansancio.",
    ingredients: "Cloruro de magnesio hexahidratado (MgCl₂·6H₂O), con trazas de calcio, hierro y vitamina A.",
    serving: "4 g (1 cucharada dosificadora)",
    timing: "Una vez al día, preferentemente con alimentos",
    intakeInstructions: "Disolver 4 g en 200-250 ml de agua o jugo. Consumir con alimentos.",
    benefits: [
      "Ayuda a aprovechar los alimentos para producir energía",
      "Contribuye a reducir el cansancio cuando falta magnesio",
      "Apoya el movimiento normal de los músculos",
      "Participa en el buen funcionamiento de los nervios",
      "Ayuda a mantener los huesos en buen estado"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos de la conducción cardíaca, o bajo tratamiento con diuréticos, antibióticos (tetraciclinas, quinolonas) o bifosfonatos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para eliminar líquidos (diuréticos), ciertos antibióticos o tratamientos para los huesos llamados bisfosfonatos. Un profesional debe indicar cómo separar las tomas."
  },

  // ================================================================
  //  2. COCONUT + OREGANO OIL (60 cápsulas)
  // ================================================================
  {
    id: 2,
    code: "7500645001439",
    name: "COCONUT + OREGANO OIL (60 cápsulas)",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Coconut-y-Oregano1.jpg",
    shortDesc: "Combinación de aceite de coco virgen extra y orégano estandarizado en carvacrol, para apoyo digestivo y antioxidante.",
    ingredients: "Aceite de coco virgen extra en polvo (300 mg), ácido láurico (100 mg), orégano en polvo estandarizado al 70 % de carvacrol (100 mg) por cápsula.",
    serving: "1 cápsula",
    timing: "Una vez al día, con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos y un vaso de agua.",
    benefits: [
      "Combina aceite de coco y orégano en una sola cápsula",
      "El coco aporta grasas que el cuerpo puede usar como energía",
      "El orégano aporta compuestos con actividad antioxidante",
      "Su enfoque es complementar el cuidado digestivo",
      "Permite incorporar estos ingredientes sin su sabor intenso"
    ],
    contraindications: "No recomendado durante el embarazo o lactancia sin consulta médica. Personas con alergia a plantas de la familia Lamiaceae (menta, tomillo, albahaca) deben consultar a su profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  3. COLÁGENO HIDROLIZADO 500 g
  // ================================================================
  {
    id: 3,
    code: "7503016797153",
    name: "COLÁGENO HIDROLIZADO 500 g",
    benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/colageno-hidrolizado.png",
    shortDesc: "Péptidos de colágeno hidrolizado en polvo, enriquecido con vitamina C y biotina, para apoyar la piel, articulaciones y tejido conectivo.",
    ingredients: "Colágeno hidrolizado (péptidos de bajo peso molecular), vitamina C (ácido ascórbico), biotina.",
    serving: "10 g (1 cucharada)",
    timing: "Una vez al día, en ayunas o entre comidas",
    intakeInstructions: "Disolver 10 g (1 cucharada) en 200-300 ml de agua, jugo o bebida fría o templada. Consumir una vez al día.",
    benefits: [
      "Aporta proteína para complementar la alimentación",
      "Ofrece materiales que el cuerpo utiliza para mantener sus tejidos",
      "Puede apoyar la hidratación y elasticidad de la piel con uso constante",
      "Complementa el cuidado de las articulaciones",
      "Se integra fácilmente en bebidas o alimentos"
    ],
    contraindications: "Personas con alergia a la proteína bovina o porcina, o bajo tratamiento con anticoagulantes, deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
  },

  // ================================================================
  //  4. COMPLEJO B ARÁNDANO (90 cápsulas)
  // ================================================================
  {
    id: 4,
    code: "7503021404671",
    name: "COMPLEJO B CON ARANDANO (90 cápsulas)",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/COMPLEJO-B-CON-ARANDANO-C90-CAPS-ZN.png",
    shortDesc: "Complejo de vitaminas del grupo B con extracto de arándano, para el metabolismo energético, la función neurológica y la protección celular.",
    ingredients: "Vitaminas B1, B2, B3, B5, B6, B7, B9, B12; extracto de arándano (Vaccinium myrtillus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Apoya el funcionamiento normal de los nervios",
      "Contribuye a disminuir el cansancio por falta de estas vitaminas",
      "Participa en la formación normal de glóbulos rojos",
      "El arándano complementa el aporte de antioxidantes"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos o controlar el azúcar en la sangre."
  },

  // ================================================================
  //  5. COMPLEJO B Y GINSENG (60 cápsulas)
  // ================================================================
  {
    id: 5,
    code: "7503024738087",
    name: "COMPLEJO B Y GINSENG 60 caps",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/complejo-y-ginseng.jpg",
    shortDesc: "Complejo de vitaminas B con arándanos, vitaminas A, C, D y ginseng siberiano, para energía, vitalidad y protección celular.",
    ingredients: "Arándanos (blueberry, cranberry), vitaminas B1, B2, B5, B6, B9, B12, biotina, vitaminas A, C, D, ginseng siberiano (Eleutherococcus senticosus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Las vitaminas B ayudan al cuerpo a aprovechar la energía de la comida",
      "Complementa la alimentación en etapas de mayor actividad",
      "El ginseng se usa tradicionalmente como apoyo a la vitalidad",
      "Apoya el funcionamiento del sistema nervioso",
      "Aporta ingredientes antioxidantes para el cuidado de las células"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
  },

  // ================================================================
  //  6. CRANBERRY URY, ARANDANO ROJO 1000 mg
  // ================================================================
  {
    id: 6,
    code: "7500645000517",
    name: "CRANBERRY URY, ARANDANO ROJO 1000 mg",
    benefitSummary: "Bienestar urinario y plantas de uso tradicional",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CRANBERRY-URY.jpg",
    shortDesc: "Extracto de arándano rojo (Vaccinium vitis-idaea) en cápsulas, para apoyar la salud del tracto urinario.",
    ingredients: "Extracto en polvo del fruto de arándano rojo (Vaccinium vitis-idaea) 1000 mg.",
    serving: "1 cápsula",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos. Acompañar con una ingesta adecuada de agua.",
    benefits: [
      "Su ingrediente principal es el arándano rojo",
      "Se utiliza como complemento del cuidado de las vías urinarias",
      "Aporta compuestos vegetales con actividad antioxidante",
      "Su enfoque es el bienestar urinario cotidiano",
      "Permite incorporar arándano en una presentación práctica"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con antecedentes de cálculos renales de oxalato o bajo tratamiento con anticoagulantes (warfarina) deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma warfarina, un medicamento para evitar coágulos. También se deben revisar otros medicamentos que el hígado procesa por la misma vía; el médico o farmacéutico puede identificarlos."
  },

  // ================================================================
  //  7. CREATINA BIRDMAN (450 g)
  // ================================================================
  {
    id: 7,
    code: "7503025737355",
    name: "CREATINA MONOHIDRATADA BIRDMAN",
    benefitSummary: "Creatina para esfuerzos cortos, fuerza y entrenamiento",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CreatinaBirdman1.webp",
    shortDesc: "Creatina monohidratada pura en polvo, para mejorar el rendimiento físico en ejercicios de alta intensidad y corta duración.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cuchara medidora)",
    timing: "Una vez al día, preferentemente después del entrenamiento",
    intakeInstructions: "Mezclar 5 g (1 cuchara) en 200-250 ml de agua o bebida de elección. Consumir una vez al día.",
    benefits: [
      "Ayuda a rendir mejor en esfuerzos cortos e intensos",
      "Apoya la fuerza en ejercicios como pesas y sprints",
      "Ayuda a sostener el rendimiento en series repetidas",
      "Puede favorecer la ganancia muscular junto con entrenamiento",
      "Complementa una rutina deportiva constante"
    ],
    contraindications: "Personas con patologías renales preexistentes deben consultar a su médico antes de iniciar la suplementación.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  8. CREATINA NANO FEAR (500 g)
  // ================================================================
  {
    id: 8,
    code: "7500645000555",
    name: "CREATINA NANO FEAR",
    benefitSummary: "Creatina para esfuerzos cortos, fuerza y entrenamiento",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Imagen-de-WhatsApp-2025-07-25-a-las-19.18.36_5cced7d4.jpg",
    shortDesc: "Creatina monohidratada de alta pureza en polvo, para optimizar el rendimiento deportivo y la recuperación muscular.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cucharada rasa)",
    timing: "Preferentemente después del entrenamiento",
    intakeInstructions: "Disolver 5 g (1 cucharada) en 250 ml de agua o jugo. Consumir preferentemente después del entrenamiento.",
    benefits: [
      "Apoya la fuerza en entrenamientos de alta intensidad",
      "Ayuda a rendir en esfuerzos breves y repetidos",
      "Puede acompañar el aumento de masa muscular con ejercicio",
      "Permite complementar la creatina que el cuerpo produce",
      "Se puede integrar a una rutina diaria de entrenamiento"
    ],
    contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico antes de usar este producto.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  9. CUACHALALATE + TEPEZCOHUITE (90 cápsulas)
  // ================================================================
  {
    id: 9,
    code: "7503026253540",
    name: "CUACHALALATE + TEPEZCOHUITE",
    benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/cuachalalate1.jpg",
    shortDesc: "Combinación de cortezas de cuachalalate y tepezcohuite, de la medicina tradicional mexicana, para el bienestar digestivo y dérmico.",
    ingredients: "Cuachalalate (Amphipterygium adstringens) corteza 750 mg, Tepezcohuite (Mimosa tenuiflora) corteza 750 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Combina dos plantas de uso tradicional mexicano",
      "Se utiliza como complemento del bienestar digestivo",
      "El cuachalalate tiene uso tradicional para el confort estomacal",
      "Aporta compuestos vegetales para complementar la alimentación",
      "Reúne ambos ingredientes en una sola presentación"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica activa, obstrucción biliar o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para evitar coágulos o para el dolor y la inflamación."
  },

  // ================================================================
  //  10. CUORE 90 caps 500 mg
  // ================================================================
  {
    id: 10,
    code: "7503024738216",
    name: "CUORE",
    benefitSummary: "Complemento nutricional para el cuidado del corazón",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CUORE1.jpg",
    shortDesc: "Fórmula botánica y vitamínica para apoyar la salud cardiovascular y el bienestar general.",
    ingredients: "Ajo deodorizado, zapote blanco, alpiste, enebro, té verde, extracto de olivo, semilla de uva, vitaminas B1, B6, B12.",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Está orientado al cuidado del corazón y la circulación",
      "Complementa la alimentación con ingredientes antioxidantes",
      "Apoya el cuidado cotidiano de las células",
      "Se integra a hábitos de alimentación y actividad física",
      "Su enfoque es el bienestar cardiovascular general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
  },

  // ================================================================
  //  11. CURCUMA POWDER (250 g)
  // ================================================================
  {
    id: 11,
    code: "7503021404763",
    name: "CURCUMA POWDER",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CURCUMA-POLVO.png",
    shortDesc: "Cúrcuma orgánica en polvo, rica en curcuminoides, con actividad antioxidante y de apoyo a la salud articular y digestiva.",
    ingredients: "Cúrcuma en polvo orgánica (Curcuma longa) 100%.",
    serving: "3 g (1 cucharadita)",
    timing: "Con alimentos que contengan grasas (para mejorar la absorción)",
    intakeInstructions: "Mezclar 3 g (1 cucharadita) en bebidas, jugos, té o alimentos. Consumir una vez al día.",
    benefits: [
      "Permite incorporar cúrcuma a bebidas y comidas",
      "Aporta compuestos vegetales con actividad antioxidante",
      "Se usa tradicionalmente como complemento digestivo",
      "Puede acompañar el cuidado de las articulaciones",
      "Su formato en polvo facilita variar las preparaciones"
    ],
    contraindications: "Personas con obstrucción de vías biliares, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para evitar coágulos, reducir la formación de coágulos con las plaquetas o controlar el azúcar. También revisar otros tratamientos que procesa el hígado."
  },

  // ================================================================
  //  12. CURCUMA, JENGIBRE Y MORINGA 90 caps
  // ================================================================
  {
    id: 12,
    code: "7503021404527",
    name: "CURCUMA, JENGIBRE Y MORINGA",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcuma-y-Moringa1-1.jpg",
    shortDesc: "Combinación de cúrcuma, jengibre y moringa en cápsulas, para apoyo antioxidante, antiinflamatorio y nutricional.",
    ingredients: "Raíz de cúrcuma (Curcuma longa) 900 mg, raíz de jengibre (Zingiber officinale) 300 mg, hoja de moringa (Moringa oleifera) 300 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
    benefits: [
      "Reúne cúrcuma, jengibre y moringa",
      "El jengibre tiene uso tradicional para el confort digestivo",
      "La cúrcuma aporta compuestos antioxidantes",
      "La moringa complementa el aporte de ingredientes vegetales",
      "Combina cuidado digestivo y nutrición en una sola fórmula"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para evitar coágulos, reducir la formación de coágulos con las plaquetas o controlar el azúcar. También revisar otros tratamientos que procesa el hígado."
  },

  // ================================================================
  //  13. CÚRCUMA (60 cápsulas)
  // ================================================================
  {
    id: 13,
    code: "7503021404183",
    name: "CÚRCUMA",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/curcuma.jpg",
    shortDesc: "Raíz de cúrcuma en polvo en cápsulas, con propiedades antioxidantes y de apoyo al bienestar general.",
    ingredients: "Raíz de cúrcuma (Curcuma longa) en polvo 1000 mg por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
    benefits: [
      "Aporta cúrcuma en una presentación fácil de usar",
      "Contiene compuestos vegetales con actividad antioxidante",
      "Tiene uso tradicional como complemento digestivo",
      "Puede acompañar el cuidado de las articulaciones",
      "Facilita incorporar la especia sin preparar una bebida"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, como anticoagulantes o antiagregantes, o para controlar el azúcar en la sangre."
  },

  // ================================================================
  //  14. ACEITE DE COCO 1 L (El Girasol)
  // ================================================================
  {
    id: 14,
    code: "7503021714091",
    name: "ACEITE DE COCO 1 L",
    benefitSummary: "Aceite de coco para cocinar y aportar energía",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-COCO.webp",
    shortDesc: "Aceite de coco comestible orgánico, RBD (Refinado, Blanqueado y Desodorizado), sin olor ni sabor, para uso culinario.",
    ingredients: "Aceite de coco orgánico RBD (Refinado, Blanqueado y Desodorizado).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para cocinar a altas temperaturas",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos.",
    benefits: [
      "Aporta grasa para cocinar y complementar la alimentación",
      "Su sabor neutro permite usarlo en distintas recetas",
      "Es útil para cocinar, hornear y preparar alimentos",
      "Aporta energía como otros aceites de cocina",
      "Su presentación grande resulta práctica para uso frecuente"
    ],
    contraindications: "Consumir con moderación como parte de una dieta variada y equilibrada.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  15. ACEITE DE COCO ORGÁNICO 420 ml (El Girasol)
  // ================================================================
  {
    id: 15,
    code: "7503021709882",
    name: "ACEITE DE COCO ORGÁNICO 420 ml",
    benefitSummary: "Aceite de coco para cocinar y aportar energía",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-COCO-ORGANICO.webp",
    shortDesc: "Aceite de coco extra virgen orgánico, sin refinar, para uso culinario y cosmético, con aroma y sabor natural.",
    ingredients: "Aceite de coco extra virgen orgánico (prensado en frío).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para frituras, horneado y uso cosmético",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos. Recomendado para cuidado de la piel y cabello.",
    benefits: [
      "Conserva el aroma y sabor característico del coco",
      "Aporta grasa para complementar distintas recetas",
      "Se puede incorporar a bebidas, postres y preparaciones de cocina",
      "En uso externo ayuda a suavizar piel y cabello",
      "Permite usar un mismo ingrediente en cocina y cuidado personal"
    ],
    contraindications: "Consumir con moderación. Para uso cosmético, realizar prueba de sensibilidad en la piel.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  16. ACEITE DE ORÉGANO (20 ml)
  // ================================================================
  {
    id: 16,
    code: "7500645001118",
    name: "ACEITE DE ORÉGANO (20 ml)",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ACEITE-OREGANO1.jpg",
    shortDesc: "Aceite esencial de orégano en gotas, rico en carvacrol y timol, para apoyo respiratorio y digestivo.",
    ingredients: "Aceite esencial de orégano (Origanum vulgare), con aceite base vegetal (oliva).",
    serving: "0.75 ml (3 gotas)",
    timing: "Con alimentos",
    intakeInstructions: "Diluir 0.75 ml (3 gotas) en agua, jugo o infusión. Tomar con alimentos.",
    benefits: [
      "Aporta compuestos antioxidantes propios del orégano",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "Permite incorporar orégano en formato líquido",
      "El gotero facilita medir la cantidad indicada en la etiqueta",
      "Su sabor concentrado permite identificarlo como extracto, no como bebida"
    ],
    contraindications: "No administrar a menores de 12 años. Mujeres embarazadas o en lactancia, personas con gastritis, úlceras, enfermedades hepáticas o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
  },

  // ================================================================
  //  17. ÁCIDO ALFA LIPÓICO (60 cápsulas)
  // ================================================================
  {
    id: 17,
    code: "7503029679408",
    name: "ÁCIDO ALFA LIPÓICO",
    benefitSummary: "Cuidado antioxidante de las células",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ACIDO-ALFA-LIPICO.jpg",
    shortDesc: "Suplemento de ácido alfa lipóico, potente antioxidante y cofactor del metabolismo energético mitocondrial.",
    ingredients: "Ácido alfa lipóico (ácido tióctico) 300 mg por porción.",
    serving: "2 cápsulas (300 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Aporta un antioxidante que participa en el cuidado celular",
      "Ayuda a proteger las células frente al desgaste diario",
      "Participa en los procesos con los que el cuerpo obtiene energía",
      "Complementa el cuidado nutricional del metabolismo",
      "Su aporte se centra en ácido alfa lipoico"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con deficiencia de tiamina, diabetes, hipoglucemia o bajo tratamiento con antidiabéticos o quimioterápicos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede hacer que el azúcar en la sangre baje más de lo esperado al combinarse con tratamientos para la diabetes. También consultar si el cliente usa medicamentos para la tiroides."
  },

  // ================================================================
  //  18. ÁCIDO HIALURÓNICO (polvo, con colágeno y omega-3)
  // ================================================================
  {
    id: 18,
    code: "7503026253755",
    name: "ÁCIDO HIALURÓNICO",
    benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ACIDO-HIALURONICO1.webp",
    shortDesc: "Suplemento en polvo que combina colágeno hidrolizado, ácido hialurónico, omega-3, arándano y aloe vera para la salud de la piel y articulaciones.",
    ingredients: "Colágeno hidrolizado tipo 1 (9 g), arándano azul (800 mg), aloe vera (280 mg), omega 3 (400 mg EPA/DHA), ácido hialurónico (200 mg), vitamina E (50 mg) por porción.",
    serving: "15 g (1 cuchara)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 15 g en 200-300 ml de agua, jugo o bebida vegetal. Consumir una vez al día.",
    benefits: [
      "Combina colágeno y ácido hialurónico para el cuidado de la piel",
      "Puede apoyar la hidratación y elasticidad de la piel",
      "Aporta proteína que ayuda a mantener los tejidos",
      "Complementa el cuidado de las articulaciones",
      "Incluye omega 3 y antioxidantes como parte de la fórmula"
    ],
    contraindications: "Personas con alergia a pescados (omega-3) o a alguno de los componentes, o bajo tratamiento anticoagulante deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
  },

  // ================================================================
  //  19. ÁCIDO LINOLEICO CONJUGADO (CLA) – NanoFear (80 cápsulas)
  // ================================================================
  {
    id: 19,
    code: "7503016797832",
    name: "ÁCIDO LINOLEICO CONJUGADO (CLA)",
    benefitSummary: "Complemento de alimentación y actividad física",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/unnamed-1.jpg",
    shortDesc: "Ácido linoleico conjugado (CLA) en cápsulas, para apoyar la composición corporal y el metabolismo lipídico.",
    ingredients: "Ácido linoleico conjugado (CLA) de alta pureza, procedente de aceite de cártamo.",
    serving: "3 cápsulas (2.4 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Aporta CLA, un tipo de grasa presente en algunos alimentos",
      "Se utiliza como complemento de rutinas de composición corporal",
      "Puede acompañar un plan de alimentación y ejercicio",
      "Su enfoque es complementar la dieta de personas activas",
      "Permite incorporar CLA sin modificar las comidas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades hepáticas o renales deben consultar a su médico antes de usar este producto.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  20. AGUAJE COMPLEX (90 cápsulas)
  // ================================================================
  {
    id: 20,
    code: "7500645000753",
    name: "AGUAJE COMPLEX",
    benefitSummary: "Bienestar femenino y cambios de etapa",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Aguaje1.jpg",
    shortDesc: "Combinación de aguaje, fenogreco, maca negra y maca amarilla, para el equilibrio hormonal femenino y la vitalidad.",
    ingredients: "Aguaje (Mauritia flexuosa) 750 mg, fenogreco (Trigonella foenum-graecum) 375 mg, maca negra (Lepidium meyenii) 250 mg, maca amarilla (Lepidium meyenii) 125 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Combina ingredientes botánicos orientados al bienestar femenino",
      "Se utiliza tradicionalmente como apoyo a la vitalidad",
      "Puede acompañar una rutina de autocuidado durante cambios hormonales",
      "Aporta compuestos vegetales que complementan la alimentación",
      "Su presentación facilita incorporar la mezcla a la rutina"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales sensibles a estrógenos (fibromas, endometriosis, cáncer de mama) o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Contiene compuestos vegetales que pueden tener efectos parecidos a los estrógenos, hormonas del cuerpo. Consultar antes de combinar con tratamientos hormonales."
  },

  // ================================================================
  //  21. AJO NEGRO + MORINGA (90 cápsulas)
  // ================================================================
  {
    id: 21,
    code: "7503021404855",
    name: "AJO NEGRO + MORINGA",
    benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/AJO-NEGRO-MORINGA1.jpg",
    shortDesc: "Combinación de ajo negro fermentado y moringa, con vitaminas C y B, para apoyo inmunológico y cardiovascular.",
    ingredients: "Hoja de moringa (250 mg), bulbo de ajo negro (249 mg), vitamina C (0.5 mg), vitaminas B1, B2, B6 por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Reúne ajo negro y moringa en una sola fórmula",
      "Aporta compuestos vegetales con actividad antioxidante",
      "Complementa el cuidado nutricional del corazón",
      "Permite incorporar ambos ingredientes sin prepararlos",
      "Su enfoque es el bienestar general y la alimentación variada"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al ajo o a la moringa, con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
  },

  // ================================================================
  //  22. AJO NEGRO CON PROPÓLEO (90 cápsulas)
  // ================================================================
  {
    id: 22,
    code: "7503021404862",
    name: "AJO NEGRO CON PROPÓLEO",
    benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Ajo-Negro-Propoleo1.jpg",
    shortDesc: "Combinación de ajo negro y extracto de propóleo, para el apoyo del sistema inmunológico y la salud respiratoria.",
    ingredients: "Extracto de propóleo estandarizado en flavonoides (250 mg), bulbo de ajo negro (250 mg) por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Combina ajo negro y propóleo",
      "Aporta compuestos antioxidantes de origen vegetal y apícola",
      "Se utiliza tradicionalmente para el bienestar en cambios de temporada",
      "Complementa una rutina de cuidado general",
      "Permite incorporar los dos ingredientes en cápsulas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (miel, propóleo, polen) o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con anticoagulantes o antiagregantes: ambos se usan para reducir la formación de coágulos."
  },

  // ================================================================
  //  23. AJO NEGRO (90 cápsulas)
  // ================================================================
  {
    id: 23,
    code: "7503021404558",
    name: "AJO NEGRO",
    benefitSummary: "Complemento nutricional para el cuidado del corazón",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ajo-negro.jpg",
    shortDesc: "Ajo negro fermentado y envejecido, con vitaminas C y B6, para apoyo cardiovascular e inmunológico.",
    ingredients: "Ajo negro (Allium sativum fermentado) 1.5 g, vitamina C 0.62 mg, vitamina B6 0.03 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Aporta compuestos antioxidantes del ajo negro",
      "Complementa el cuidado nutricional del corazón",
      "Permite consumir ajo sin incorporarlo a las comidas",
      "Su fórmula se centra en un ingrediente vegetal",
      "Acompaña hábitos de alimentación y actividad física"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al ajo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
  },

  // ================================================================
  //  24. ALBÚMINA DE HUEVO PROWINNER (500 g)
  // ================================================================
  {
    id: 24,
    code: "7501062912209",
    name: "ALBÚMINA DE HUEVO PROWINNER",
    benefitSummary: "Proteína para músculos y recuperación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/AlbuminadeHuevo_1.webp",
    shortDesc: "Proteína de clara de huevo pasteurizada, en polvo, rica en aminoácidos esenciales y vitaminas, ideal para deportistas.",
    ingredients: "Albúmina de huevo pasteurizada, vitaminas (C, E, B1, B2, B3, B6, B12, A, D3, ácido fólico), minerales (potasio, fósforo, calcio, magnesio, hierro, zinc, cobre, yodo).",
    serving: "30 g (1 medida)",
    timing: "Dos o tres veces al día",
    intakeInstructions: "Mezclar 30 g (1 medida) en jugos, leche, licuados o agua. Tomar dos o tres veces al día.",
    benefits: [
      "Aporta proteína de huevo para completar la alimentación",
      "Ayuda al mantenimiento y desarrollo de los músculos",
      "Proporciona los componentes que el cuerpo usa para formar proteína",
      "Puede apoyar la recuperación después del ejercicio",
      "Ofrece una alternativa de proteína sin lactosa"
    ],
    contraindications: "Personas con alergias al huevo o soya deben evitar su consumo. Mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  25. ALGA ESPIRULINA EN POLVO (250 g)
  // ================================================================
  {
    id: 25,
    code: "7503021404831",
    name: "ALGA ESPIRULINA EN POLVO",
    benefitSummary: "Espirulina para complementar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ALGAESPIRULINA.png",
    shortDesc: "Espirulina orgánica en polvo, superalimento rico en proteínas, vitaminas, minerales y antioxidantes.",
    ingredients: "Alga espirulina orgánica (Arthrospira platensis) 100%.",
    serving: "10 g (2 cucharadas)",
    timing: "En ayunas o con alimentos",
    intakeInstructions: "Mezclar 10 g (2 cucharadas) en agua, jugos, licuados o espolvorear sobre ensaladas. Consumir una vez al día.",
    benefits: [
      "Permite añadir espirulina a bebidas y alimentos",
      "Aporta nutrientes propios de esta alga",
      "Contiene compuestos con actividad antioxidante",
      "Complementa una alimentación de origen vegetal",
      "Su formato en polvo facilita incorporarla a distintas recetas"
    ],
    contraindications: "Personas con alergia a la espirulina, trastornos de la tiroides, gota, fenilcetonuria o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o disminuir la actividad de las defensas, como los usados después de un trasplante."
  },

  // ================================================================
  //  26. ALGA ESPIRULINA ORGANICA 180 caps 500 mg
  // ================================================================
  {
    id: 26,
    code: "7503021404848",
    name: "ALGA ESPIRULINA ORGANICA",
    benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Alga-Spirulina-Organica1.jpg",
    shortDesc: "Espirulina orgánica en cápsulas, enriquecida con vitaminas y minerales, para apoyo nutricional completo.",
    ingredients: "Alga espirulina orgánica (1,135 mg), calcio (150 mg), magnesio (150 mg), vitamina E (15 mg), hierro (8 mg), vitaminas B1, B2, B6, B12, zinc, cobre, vitamina A por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Aporta espirulina en cápsulas",
      "Complementa la alimentación con nutrientes de origen vegetal",
      "Contiene compuestos antioxidantes propios del alga",
      "Permite consumirla sin su sabor característico",
      "Es una opción práctica para incorporar espirulina a la rutina"
    ],
    contraindications: "Personas con alergia a la espirulina, trastornos de la tiroides, gota, fenilcetonuria o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o disminuir la actividad de las defensas, como los usados después de un trasplante."
  },

  // ================================================================
  //  27. ALOE VERA CON ARÁNDANO (990 ml)
  // ================================================================
  {
    id: 27,
    code: "7503016797030",
    name: "ALOE VERA CON ARANDANO",
    benefitSummary: "Bienestar urinario y plantas de uso tradicional",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/AloeVeraArandano.jpg",
    shortDesc: "Bebida de aloe vera con arándano y vitamina C, para el bienestar digestivo y la salud del tracto urinario.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de arándano (Vaccinium macrocarpon), vitamina C (27 mg por porción).",
    serving: "90 ml",
    timing: "En ayunas o antes de la primera comida",
    intakeInstructions: "Agitar bien. Consumir 90 ml al día, preferentemente en ayunas o antes de la primera comida.",
    benefits: [
      "Combina sábila y arándano en una bebida",
      "Se utiliza como complemento del bienestar digestivo",
      "La vitamina C contribuye al funcionamiento de las defensas",
      "La vitamina C también ayuda al cuidado de las células",
      "El arándano complementa el enfoque de bienestar urinario"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "En exceso, la sábila puede acelerar las evacuaciones o causar diarrea. Respetar la porción indicada."
  },

  // ================================================================
  //  28. ALOE VERA LIQUIDO TROPICAL (1 L)
  // ================================================================
  {
    id: 28,
    code: "7503016797337",
    name: "ALOE VERA LIQUIDO TROPICAL",
    benefitSummary: "Sábila y vitamina C en una bebida",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/correjidos_0003_freepik__isolate-only-the-bottle-frontal-symmetrical-studio__56412-1.jpg",
    shortDesc: "Bebida de aloe vera con vitamina C y sabor tropical, para hidratación y bienestar digestivo.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), vitamina C (30 mg por porción), saborizantes naturales tropicales.",
    serving: "100 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar bien. Tomar 100 ml al día, preferentemente en ayunas o entre comidas.",
    benefits: [
      "Permite incorporar sábila en una bebida de sabor tropical",
      "Complementa la rutina de bienestar digestivo",
      "La vitamina C apoya las defensas del organismo",
      "La vitamina C aporta protección antioxidante",
      "Ofrece una presentación líquida para quien prefiere evitar cápsulas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "En exceso, la sábila puede acelerar las evacuaciones o causar diarrea. Respetar la porción indicada."
  },

  // ================================================================
  //  29. AMP-ON 60 caps 600 mg
  // ================================================================
  {
    id: 29,
    code: "7500645001460",
    name: "AMP-ON 60 caps 600mg",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/ZN-–-AMP-ON-–-60-caps-600-mg-–-Render-–-V2-–-Marzo2026-2.jpg",
    shortDesc: "Complejo metabólico con α-glucosil hesperidina, inulina, Gynostemma, ácido clorogénico, ALA, probiótico y minerales.",
    ingredients: "α-Glucosil hesperidina (300 mg), inulina de agave (300 mg), Gynostemma pentaphyllum (200 mg), ácido clorogénico (200 mg), ácido alfa lipoico (100 mg), Bifidobacterium lactis (1 billón UFC), zinc (2.5 mg), cromo picolinato (25 µg) por porción.",
    serving: "2 cápsulas (1.2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Su fórmula está orientada al aprovechamiento de azúcares y grasas",
      "Complementa un plan de alimentación y actividad física",
      "Incluye probióticos, bacterias que pueden apoyar el equilibrio intestinal",
      "Aporta ingredientes antioxidantes para el cuidado celular",
      "Reúne apoyo nutricional y digestivo en una sola fórmula"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal o hepática, o bajo tratamiento con antidiabéticos, antihipertensivos o anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El cromo y el zinc pueden cambiar el efecto o la absorción de algunos medicamentos. Si el cliente usa un tratamiento, revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  30. Artmuub 1.1 kg
  // ================================================================
  {
    id: 30,
    code: "7503025069791",
    name: "ARTMUUB 1.1 kg",
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ARTMUUB_1-1.webp",
    shortDesc: "Suplemento en polvo multinutriente con proteínas, omega-3, vitaminas (C, E, D), minerales (magnesio, zinc) y fibra.",
    ingredients: "Proteínas (9 g), omega-3 (EPA 280 mg, DHA 210 mg, DPA 210 mg), vitamina C (390 mg), magnesio (150 mg), vitamina E (99.9 mg), zinc (9.9 mg), vitamina D (9.9 mg, posible error: mcg), fibra (4.4 g) por porción.",
    serving: "30 g",
    timing: "En ayunas o como reemplazo de comida",
    intakeInstructions: "Disolver 30 g (2 cucharadas) en 300-400 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Complementa la alimentación con proteína y otros nutrientes",
      "La proteína ayuda a conservar los músculos",
      "La fibra contribuye al bienestar digestivo y la sensación de llenura",
      "Aporta vitaminas y minerales para funciones normales del cuerpo",
      "Su formato en polvo facilita preparar una porción"
    ],
    contraindications: "Personas con alergia a pescados (omega-3), trastornos de coagulación, enfermedad renal o hepática, o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para evitar coágulos, controlar el azúcar o eliminar líquidos (diuréticos)."
  },

  // ================================================================
  //  31. Artmuub 200 caps
  // ================================================================
  {
    id: 31,
    code: "7503029679736",
    name: "ARTMUUB 200 CAPS",
    benefitSummary: "Cuidado articular y nutrición para el movimiento",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ARTMUUB1.png",
    shortDesc: "Fórmula articular con glucosamina, condroitina y MSM, para el mantenimiento del cartílago y la movilidad articular.",
    ingredients: "Glucosamina (sulfato) 600 mg, condroitina (sulfato) 500 mg, MSM 400 mg por porción.",
    serving: "2 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Aporta ingredientes orientados al cuidado de las articulaciones",
      "Complementa la nutrición de los tejidos que permiten el movimiento",
      "Puede acompañar una rutina para mantener la movilidad",
      "Su enfoque es el bienestar articular cotidiano",
      "Se integra a hábitos de movimiento y alimentación"
    ],
    contraindications: "Personas con alergia a crustáceos (glucosamina), mujeres embarazadas, personas con diabetes o asma deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede cambiar el azúcar en la sangre de personas con diabetes. También consultar si el cliente toma medicamentos para evitar coágulos."
  },

  // ================================================================
  //  32. ASHWAGANDA ROOT (60 cápsulas)
  // ================================================================
  {
    id: 32,
    code: "7500645000418",
    name: "ASHWAGANDA ROOT",
    benefitSummary: "Calma, bienestar mental y rutina de descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ASHWAGANDA-ROOT1.webp",
    shortDesc: "Extracto y polvo de raíz de ashwagandha, adaptógeno para manejo del estrés, sueño y vitalidad.",
    ingredients: "Extracto de raíz de ashwagandha (600 mg, estandarizado al 5% withanólidos), polvo de raíz de ashwagandha (700 mg) por porción.",
    serving: "2 cápsulas (1.3 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "La ashwagandha puede apoyar la respuesta al estrés cotidiano",
      "Puede ayudar a favorecer la relajación",
      "Puede acompañar una mejor rutina de descanso",
      "Su enfoque combina calma y bienestar mental",
      "Se utiliza como apoyo en etapas de mayor demanda diaria"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la tiroides, enfermedades autoinmunes, úlcera gástrica o bajo tratamiento con ansiolíticos, hipnóticos, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede dar sueño y aumentar el efecto de medicamentos para la ansiedad o para dormir. También consultar si usa tratamientos para la diabetes o para disminuir la actividad de las defensas."
  },

  // ================================================================
  //  33. ASHWAGANDHA (tabletas, 60 tabletas)
  // ================================================================
  {
    id: 33,
    code: "7503026253410",
    name: "ASHWAGANDHA",
    benefitSummary: "Calma, bienestar mental y rutina de descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/2ProductosComprimidos.jpg",
    shortDesc: "Extracto estandarizado de ashwagandha en tabletas, adaptógeno para estrés, sueño y equilibrio emocional.",
    ingredients: "Extracto de raíz de ashwagandha (500 mg, estandarizado al 5% withanólidos), celulosa microcristalina, estearato magnésico.",
    serving: "1 tableta (600 mg)",
    timing: "Con alimentos, por la mañana o antes de dormir",
    intakeInstructions: "Tomar 1 tableta al día con alimentos.",
    benefits: [
      "Puede ayudar a manejar la sensación de estrés cotidiano",
      "Puede favorecer la calidad del descanso",
      "Apoya una rutina orientada a la calma y la concentración",
      "Permite incorporar ashwagandha en tabletas",
      "Su enfoque es el equilibrio entre actividad y descanso"
    ],
    contraindications: "No recomendado durante embarazo o lactancia. Consultar a médico si se toman medicamentos para la tiroides, diabetes o inmunosupresores.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para la tiroides, la diabetes o para disminuir la actividad de las defensas."
  },

  // ================================================================
  //  34. ASTAXANTINA 250 mg (30 perlas)
  // ================================================================
  {
    id: 34,
    code: "7500645001101",
    name: "ASTAXANTINA",
    benefitSummary: "Cuidado antioxidante de las células",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2025/01/astaxantina.jpg",
    shortDesc: "Astaxantina de microalga Haematococcus pluvialis, potente antioxidante para la salud de la piel, ojos y articulaciones.",
    ingredients: "Astaxantina 250 mg (de Haematococcus pluvialis), en cápsula blanda con aceite base.",
    serving: "1 cápsula",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día con una comida que contenga grasas.",
    benefits: [
      "Aporta astaxantina, un antioxidante",
      "Ayuda al cuidado de las células frente al desgaste diario",
      "Complementa el cuidado de la piel",
      "Acompaña el bienestar de los ojos",
      "Se integra a una rutina de cuidado general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la microalga o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, tratar la presión arterial o disminuir la actividad de las defensas."
  },

  // ================================================================
  //  35. BEEF FEAR 500 gr (NanoFear)
  // ================================================================
  {
    id: 35,
    code: "646437080682",
    name: "BEEF FEAR",
    benefitSummary: "Proteína para músculos y recuperación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/BEEF-FEAR-CHOCO-5001.png",
    shortDesc: "Proteína de carne hidrolizada en polvo, rica en aminoácidos, creatina y taurina, para recuperación y fuerza muscular.",
    ingredients: "Proteína de carne hidrolizada (23 g por porción), creatina natural (7,600 mg), taurina (3,000 mg), perfil de aminoácidos completo.",
    serving: "33 g (1 medida)",
    timing: "Antes o después del entrenamiento",
    intakeInstructions: "Diluir 33 g en 240-300 ml de agua fría o leche. Tomar antes o después del entrenamiento.",
    benefits: [
      "Aporta proteína de res para completar la alimentación",
      "Ayuda a mantener y desarrollar los músculos",
      "Ofrece componentes necesarios para formar proteína muscular",
      "Puede apoyar la recuperación después de entrenar",
      "Es una alternativa a las proteínas de suero de leche"
    ],
    contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  36. BERBERINA (120 cápsulas)
  // ================================================================
  {
    id: 36,
    code: "7500645000524",
    name: "BERBERINA",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/10/BERBERINE1-1.jpg",
    shortDesc: "Berberina HCI, alcaloide natural para apoyar el metabolismo de la glucosa y lípidos.",
    ingredients: "Por porción de 2 cápsulas (1.01 g): berberina HCL 1,000 mg y zinc 1 mg (procedente de 5 mg de glicinato de zinc).",
    serving: "2 cápsulas (1.01 g)",
    timing: "Con alimentos",
    intakeInstructions: "Consultar la etiqueta para conocer el modo de empleo. La porción de la información nutrimental es de 2 cápsulas (1.01 g).",
    nutritionFacts: {
      servingSize: "2 cápsulas (1.01 g)",
      servingsPerContainer: "30",
      rows: [
        { nutrient: "Contenido energético", perServing: "0.12 kcal / 0.49 kJ", per100g: "12 kcal / 49 kJ" },
        { nutrient: "Proteínas", perServing: "0 g", per100g: "0 g" },
        { nutrient: "Grasas totales (lípidos)", perServing: "0 g", per100g: "0 g" },
        { nutrient: "Carbohidratos (hidratos de carbono)", perServing: "0.03 g", per100g: "3 g" },
        { nutrient: "Sodio", perServing: "0 mg", per100g: "0 mg" },
        { nutrient: "Berberina HCL", perServing: "1,000 mg", per100g: "99 g" },
        { nutrient: "Zinc", perServing: "1 mg", per100g: "100 mg" }
      ],
      note: "El zinc corresponde a 5 mg de glicinato de zinc por porción."
    },
    yieldInfo: {
      servingsPerContainer: 30,
      servingsPerDay: 1,
      note: "Rendimiento de 30 días: 30 porciones de 2 cápsulas, a 1 porción al día."
    },
    benefits: [
      "Se utiliza como complemento del cuidado del metabolismo",
      "Puede apoyar el manejo de azúcares como parte de hábitos saludables",
      "También se estudia como apoyo al manejo de grasas en la sangre",
      "Aporta zinc, necesario para funciones normales del organismo",
      "Su fórmula combina berberina y zinc en una sola porción"
    ],
    contraindications: "No administrar a menores de 18 años. Mujeres embarazadas o en lactancia, personas con enfermedad hepática o renal, o bajo tratamiento con antidiabéticos, antihipertensivos, anticoagulantes o ciclosporina deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para el azúcar, la presión o los coágulos. También requiere revisión si el cliente toma ciclosporina, usada para disminuir la actividad de las defensas."
  },

  // ================================================================
  //  37. BPASS Bio Life 500 mg (El Girasol)
  // ================================================================
  {
    id: 37,
    code: "7508304671641",
    name: "BPASS Bio Life 500 mg",
    benefitSummary: "Complemento de alimentación y actividad física",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BPASS1.webp",
    shortDesc: "Fórmula exclusiva con 10 ingredientes naturales, incluyendo L-carnitina, para apoyo metabólico y energético.",
    ingredients: "L-carnitina, polvo de raíz de India Lotus, Tejocote, Nopal, Café verde, Clorofila, Piña, Toronja, Apio, Alcachofa.",
    serving: "1 cápsula (500 mg)",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
    benefits: [
      "Combina plantas y L-carnitina para complementar una rutina activa",
      "La L-carnitina participa en el uso de grasas como energía",
      "Aporta ingredientes vegetales con actividad antioxidante",
      "Puede acompañar un plan de alimentación y ejercicio",
      "Su enfoque es el apoyo nutricional al metabolismo"
    ],
    contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  38. CAFÉ CON MORINGA (El Girasol, 22 sobres)
  // ================================================================
  {
    id: 38,
    code: "7508304686836",
    name: "CAFE CON MORINGA 22 sobres",
    benefitSummary: "Una bebida con antioxidantes y cafeína",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CAFECONMORINGA.webp",
    shortDesc: "Bebida en polvo con café arábico, moringa, hongos medicinales (Reishi, Shiitake, Maitake) y stevia.",
    ingredients: "Café arábico, moringa, Reishi, Shiitake, Maitake, stevia, sustituto de crema.",
    serving: "20 g (1 sobre, rinde 3 tazas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar el contenido de un sobre en agua caliente, disolver y disfrutar. Cada sobre rinde 3 tazas.",
    benefits: [
      "Combina el sabor del café con moringa y hongos",
      "La cafeína del café ayuda a mantenerse alerta",
      "Aporta compuestos antioxidantes del café y las plantas",
      "Los sobres facilitan preparar una porción",
      "Es una alternativa para variar la bebida de café habitual"
    ],
    contraindications: "NO CONSUMIR EN EMBARAZO. Personas intolerantes a los componentes deben evitarlo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Contiene cafeína. Las personas sensibles pueden sentir nerviosismo o dificultad para dormir; revisar si corresponde su consumo."
  },

  // ================================================================
  //  39. CAFÉ DE OLLA 600 g (ZENnatura)
  // ================================================================
  {
    id: 39,
    code: "7503025069005",
    name: "CAFE DE OLLA 600 g",
    benefitSummary: "Una bebida con antioxidantes y cafeína",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/cafe.jpg",
    shortDesc: "Mezcla de café tostado con especias tradicionales, sin azúcares añadidos, baja en carbohidratos.",
    ingredients: "Café tostado en grano (Coffea arabica), especias tradicionales (canela, clavo, anís estrella).",
    serving: "15 g (2 cucharadas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 15 g en 200-250 ml de agua caliente. Mezclar bien. Endulzar al gusto.",
    benefits: [
      "Ofrece el sabor tradicional del café de olla",
      "La cafeína ayuda a mantenerse alerta",
      "El café y las especias aportan compuestos antioxidantes",
      "Puede disfrutarse como bebida dentro de la rutina diaria",
      "Permite preparar café de olla sin elaborar la mezcla desde cero"
    ],
    contraindications: "Personas sensibles a la cafeína, hipertensión no controlada, trastornos de ansiedad o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La cafeína puede cambiar el efecto de algunos medicamentos. Revisar la combinación si el cliente sigue un tratamiento."
  },

  // ================================================================
  //  40. CAFÉ SOLUBLE 30 sobres (con hongos y arándanos)
  // ================================================================
  {
    id: 40,
    code: "7500645000814",
    name: "CAFE SOLUBLE 30 sobres",
    benefitSummary: "Una bebida con antioxidantes y cafeína",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CAFESOLUBLE.jpg",
    shortDesc: "Café soluble con extractos de Ganoderma, Shiitake y mezcla de arándanos, para energía y soporte inmune.",
    ingredients: "Café soluble, extracto de Ganoderma (500 mg), extracto de Shiitake (500 mg), mezcla de arándanos (cranberry, bilberry, blueberry) 2 mg por sobre.",
    serving: "1 sobre (4.5 g)",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Disolver 1 sobre en 200-250 ml de agua caliente. Endulzar al gusto.",
    benefits: [
      "Combina café con hongos de uso tradicional",
      "La cafeína contribuye a mantenerse alerta",
      "El café aporta compuestos antioxidantes",
      "Los sobres facilitan llevar y preparar una porción",
      "Es una opción para variar el café cotidiano"
    ],
    contraindications: "Personas sensibles a la cafeína, hipertensión, trastornos de ansiedad, alergia a hongos o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La cafeína puede cambiar el efecto de algunos medicamentos. Revisar la combinación si el cliente sigue un tratamiento."
  },

  // ================================================================
  //  41. CANELA CROMO 1 g (120 cápsulas)
  // ================================================================
  {
    id: 41,
    code: "7503021404633",
    name: "CANELA CROMO",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CANELA-CROMO1.jpg",
    shortDesc: "Complejo de canela y picolinato de cromo con vitaminas y minerales, para el metabolismo de la glucosa.",
    ingredients: "Canela (950 mg), vitamina C (300 mg), potasio (200 mg), fósforo (200 mg), vitamina E (200 mg), calcio (100 mg), hierro (20 mg), vitaminas B1 (15 mg), B2 (14.9 mg), picolinato de cromo (200 mcg), vitamina B12 (12 mcg) por porción.",
    serving: "2 cápsulas (2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "El cromo ayuda al cuerpo a aprovechar los alimentos",
      "Contribuye al mantenimiento normal de la glucosa",
      "La canela aporta compuestos vegetales antioxidantes",
      "Complementa una alimentación orientada al cuidado metabólico",
      "Reúne canela y cromo en una sola fórmula"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la canela, enfermedad renal o hepática, o bajo tratamiento con antidiabéticos, anticoagulantes o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El cromo puede cambiar el efecto de medicamentos para controlar el azúcar. Consultar antes de combinarlos."
  },

  // ================================================================
  //  42. CARA LLUMA 500 mg (30 cápsulas)
  // ================================================================
  {
    id: 42,
    code: "7503025069043",
    name: "CARA LLUMA",
    benefitSummary: "Complemento de alimentación y actividad física",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CARALLUMA1.jpg",
    shortDesc: "Extracto de Caralluma fimbriata, planta tradicional para apoyar el control del apetito y el peso.",
    ingredients: "Extracto de Caralluma fimbriata (partes aéreas) 500 mg por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Antes de las comidas",
    intakeInstructions: "Tomar 1 cápsula al día antes de las comidas principales.",
    benefits: [
      "La caralluma se utiliza tradicionalmente para acompañar el control del apetito",
      "Puede complementar hábitos orientados a la sensación de llenura",
      "Se integra a un plan de alimentación y ejercicio",
      "Su enfoque es apoyar una rutina de control de peso",
      "Ofrece el ingrediente vegetal en cápsulas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede causar molestias leves en el estómago o el intestino."
  },

  // ================================================================
  //  43. CARSYL GREEN (60 cápsulas)
  // ================================================================
  {
    id: 43,
    code: "7503016797115",
    name: "CARSYL GREEN",
    benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/carsyl.png",
    shortDesc: "Fórmula botánica con cardo mariano, boldo, ruibarbo, cuasia y diente de león, para apoyo hepático y digestivo.",
    ingredients: "Hoja de cardo mariano, hojas de boldo, ruibarbo, cuasia, diente de león (extractos en proporción no especificada).",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Combina plantas de uso tradicional digestivo",
      "Se utiliza como complemento del cuidado del hígado",
      "Puede acompañar el confort después de las comidas",
      "Su enfoque es el bienestar digestivo cotidiano",
      "Permite incorporar la mezcla botánica en cápsulas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, enfermedad hepática grave o bajo tratamiento con anticoagulantes, diuréticos o medicamentos para la diabetes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El ruibarbo puede acelerar las evacuaciones. Consultar si el cliente toma medicamentos para evitar coágulos o eliminar líquidos."
  },

  // ================================================================
  //  44. CASTAÑO DE INDIAS 400 mg (El Girasol, 150 cápsulas)
  // ================================================================
  {
    id: 44,
    code: "7501734412877",
    name: "CASTAÑO DE INDIAS",
    benefitSummary: "Circulación y confort de las piernas",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CASTANODEINDIAS.webp",
    shortDesc: "Extracto de castaño de Indias (Aesculus hippocastanum), rico en escina, para apoyo a la circulación venosa.",
    ingredients: "Extracto de castaño de Indias (Aesculus hippocastanum) 400 mg por cápsula.",
    serving: "2 cápsulas (800 mg)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas tres veces al día, antes de los alimentos.",
    benefits: [
      "Se utiliza como complemento del cuidado de la circulación de las piernas",
      "Puede apoyar el confort cuando se sienten piernas pesadas",
      "Su enfoque es el bienestar de las venas",
      "Acompaña hábitos como caminar y evitar largos periodos inmóvil",
      "Ofrece castaño de indias en una presentación práctica"
    ],
    contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
  },

  // ================================================================
  //  45. CHROMIUM (60 cápsulas, 400 mg)
  // ================================================================
  {
    id: 45,
    code: "7503026253601",
    name: "CHROMIUM",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0001s_0002_Presentacion-blanco.jpg",
    shortDesc: "L-carnitina tartrato y polinicotinato de cromo para apoyo al metabolismo energético y la función celular.",
    ingredients: "L-carnitina tartrato (100 mg), polinicotinato de cromo (aporte de 20.32 mcg de cromo elemental) por cápsula.",
    serving: "1 cápsula (400 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Su fórmula está orientada al aprovechamiento de los alimentos",
      "El cromo participa en el manejo normal de la glucosa",
      "Complementa una rutina de cuidado metabólico",
      "Acompaña hábitos de alimentación y actividad física",
      "Permite incorporar los nutrientes de la fórmula en cápsulas"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con diabetes, enfermedad renal, trastornos de la tiroides o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para controlar el azúcar o evitar coágulos."
  },

  // ================================================================
  //  46. CITRATO DE MAGNESIO POWDER 500 g
  // ================================================================
  {
    id: 46,
    code: "7500645001033",
    name: "CITRATO DE MAGNESIO POWDER 500 gr",
    benefitSummary: "Magnesio y colágeno para complementar la nutrición",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0001s_0002_Presentacion-blanco.jpg",
    shortDesc: "Citrato de magnesio en polvo con colágeno hidrolizado, para apoyo muscular, óseo y de la piel.",
    ingredients: "Citrato de magnesio (aporte de 500 mg de magnesio elemental por porción), colágeno hidrolizado (1.5 g por porción).",
    serving: "10 g (1 cucharada)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 10 g en 200-300 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Aporta magnesio para el funcionamiento normal de músculos y nervios",
      "Contribuye al aprovechamiento de los alimentos para obtener energía",
      "Ayuda a mantener los huesos en buen estado",
      "Incluye colágeno para complementar la nutrición de los tejidos",
      "Su formato en polvo facilita mezclarlo con una bebida"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para eliminar líquidos (diuréticos), ciertos antibióticos o tratamientos para los huesos llamados bisfosfonatos. Un profesional debe indicar cómo separar las tomas."
  },

  // ================================================================
  //  47. CITRATO DE POTASIO 90 caps 500 mg
  // ================================================================
  {
    id: 47,
    code: "7503029679002",
    name: "CITRATO DE POTASIO",
    benefitSummary: "Potasio para músculos y equilibrio de minerales",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/potassium.jpg",
    shortDesc: "Suplemento de potasio en forma de citrato, para el equilibrio electrolítico y la función muscular.",
    ingredients: "Citrato de potasio 750 mg (aporte de 240.24 mg de potasio elemental) por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Aporta potasio, un mineral necesario para los músculos",
      "Apoya la comunicación normal entre nervios y músculos",
      "Contribuye a mantener una presión arterial normal",
      "Participa en el equilibrio de agua y minerales del cuerpo",
      "Complementa el aporte de potasio de la alimentación"
    ],
    contraindications: "Personas con enfermedad renal, insuficiencia cardíaca, hipertensión no controlada o bajo tratamiento con diuréticos ahorradores de potasio o inhibidores de la ECA deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para la presión o para eliminar líquidos que hacen que el cuerpo retenga potasio. La combinación puede aumentar demasiado el potasio; el médico o farmacéutico debe revisar el tratamiento."
  },

  // ================================================================
  //  48. CLOROFILA LÍQUIDA 500 ml
  // ================================================================
  {
    id: 48,
    code: "7503016797139",
    name: "CLOROFILA LIQUIDA 500 ml",
    benefitSummary: "Clorofila para preparar una bebida refrescante",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CLOROFILALIQUIDA.jpg",
    shortDesc: "Solución de clorofila líquida, para apoyo a la depuración fisiológica y la salud intestinal.",
    ingredients: "Clorofilina sódico-cúprica (extracto de clorofila), agua purificada, estabilizantes.",
    serving: "15 ml (3 cucharaditas)",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Diluir 15 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Permite incorporar clorofila en una bebida",
      "Puede dar una sensación refrescante en la boca",
      "Su presentación facilita mezclarla con agua",
      "Es una alternativa para variar las bebidas de la rutina",
      "Su aporte se centra en clorofila líquida"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con problemas hepáticos o biliares, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede cambiar el color de las evacuaciones a verde. La ficha lo describe como un efecto esperado de la clorofila."
  },

  // ================================================================
  //  49. CLOROFILA LÍQUIDA Y HIERBABUENA (500 ml)
  // ================================================================
  {
    id: 49,
    code: "7503029679118",
    name: "CLOROFILA LÍQUIDA Y HIERBABUENA (500 ml)",
    benefitSummary: "Clorofila para preparar una bebida refrescante",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CLOROFILA1.webp",
    shortDesc: "Clorofila líquida con hierbabuena, menta piperita y té matcha, para bienestar digestivo y antioxidante.",
    ingredients: "Extracto de clorofila (10 ml), extracto de hierbabuena (5 ml), extracto de menta piperita (2.5 ml), extracto de té matcha (2.5 ml) por porción.",
    serving: "20 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar antes de usar. Diluir 20 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Combina clorofila, hierbabuena y matcha",
      "La hierbabuena aporta sabor y sensación refrescante",
      "Tiene un enfoque de bienestar digestivo tradicional",
      "El matcha aporta compuestos antioxidantes",
      "Se mezcla con agua para preparar una bebida"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, problemas hepáticos o biliares, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede cambiar el color de las evacuaciones a verde. La ficha lo describe como un efecto esperado de la clorofila."
  },

  // ================================================================
  //  50. CLORURO DE MAGNESIO 100 CAPS ZN
  // ================================================================
  {
    id: 50,
    code: "7503021404602",
    name: "CLORURO DE MAGNESIO",
    benefitSummary: "Magnesio para músculos, nervios y energía",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/cloruro.jpg",
    shortDesc: "Cloruro de magnesio en cápsulas con vitamina C, calcio y vitamina D, para función muscular y nerviosa.",
    ingredients: "Magnesio elemental (240 mg), vitamina C (10 mg), calcio (4 mg), vitamina D (4 mg – probable error: 4 mcg) por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Aporta magnesio para el movimiento normal de los músculos",
      "Apoya el funcionamiento de los nervios",
      "Ayuda a aprovechar los alimentos para producir energía",
      "Contribuye al mantenimiento de los huesos",
      "Incluye vitaminas C y D para complementar la fórmula"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con medicamentos para eliminar líquidos (diuréticos), ciertos antibióticos o tratamientos para los huesos llamados bisfosfonatos. Un profesional debe indicar cómo separar las tomas."
  },
  // 51. MOROIZY 90 caps 500 mg
{
  id: 51,
  code: "7503021404961",
  name: "MOROIZY",
  benefitSummary: "Cuidado articular y nutrición para el movimiento",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MOROIZY.jpg",
  shortDesc: "Fórmula botánica y vitamínica que combina extractos de plantas tradicionalmente utilizadas para el bienestar articular, la circulación y la función inmune.",
  ingredients: "Sauce blanco (Salix alba), corteza de ajo, hamamelis, vitamina C, vitamina E, vitamina B12, zinc.",
  serving: "3 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Su fórmula está orientada al bienestar de las articulaciones",
    "Aporta ingredientes vegetales con actividad antioxidante",
    "Complementa una rutina de cuidado del movimiento",
    "Puede acompañar hábitos para mantener la movilidad",
    "Reúne ingredientes botánicos en una sola presentación"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la aspirina o a los salicilatos, trastornos de coagulación, úlcera gástrica, o bajo tratamiento con anticoagulantes, antiagregantes plaquetarios, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para evitar coágulos o controlar el azúcar en la sangre."
},

// 52. MYO + D-CHIRO Inositol 500 mg (90 caps)
{
  id: 52,
  code: "7500645000838",
  name: "MYO + D-CHIRO INOSITOL 500 mg",
  benefitSummary: "Apoyo nutricional al bienestar metabólico",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO1.png",
  shortDesc: "Fórmula con Myo-Inositol y D-Chiro-Inositol en proporción 40:1, con arándano azul, para el equilibrio hormonal y metabólico.",
  ingredients: "Myo-Inositol (1900 mg), D-Chiro-Inositol (50 mg), polvo de fruto de arándano azul (50 mg) por porción.",
  serving: "4 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Combina dos formas de inositol en proporción 40:1",
    "Se utiliza como complemento del bienestar hormonal femenino",
    "Puede apoyar la regularidad menstrual en algunos contextos",
    "Participa en la forma en que las células responden a la insulina",
    "Acompaña hábitos de alimentación y actividad física"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos, anticoagulantes o medicamentos que afectan los niveles de glucosa deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para controlar el azúcar o evitar coágulos."
},

// 53. MYO + D-CHIRO INOSITOL POWDER 300g - 40:1
{
  id: 53,
  code: "7500645001071",
  name: "MYO + D-CHIRO INOSITOL POWDER 300g - 40:1",
  benefitSummary: "Apoyo nutricional al bienestar metabólico",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO-INOSITOL-POWDER1.jpg",
  shortDesc: "Polvo puro de inositol en proporción 40:1 (Myo 4000 mg, D-Chiro 100 mg por porción), sin excipientes.",
  ingredients: "Myo-Inositol (4000 mg), D-Chiro-Inositol (100 mg) por porción.",
  serving: "4.1 g (1 cucharada)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 4.1 g en agua, jugo o bebida vegetal. Consumir una vez al día.",
  benefits: [
    "Aporta dos formas de inositol en proporción 40:1",
    "Se utiliza como apoyo nutricional del bienestar hormonal femenino",
    "Participa en procesos relacionados con el manejo de la glucosa",
    "Su formato en polvo facilita mezclar la porción indicada",
    "Complementa una rutina de cuidado metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos o medicamentos que afectan la glucosa deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para la diabetes, porque la combinación puede cambiar el control del azúcar en la sangre."
},

// 54. Curcumina (90 caps, con piperina y vitamina C)
{
  id: 54,
  code: "7503026253557",
  name: "CURCUMINA",
  benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcumina1-1.jpg",
  shortDesc: "Extracto de cúrcuma al 95% de curcuminoides, con pimienta negra y vitamina C para mejorar la biodisponibilidad.",
  ingredients: "Curcumina al 95% de curcuminoides (1050 mg), vitamina C (300 mg), pimienta negra (20 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
  benefits: [
    "Aporta los compuestos característicos de la cúrcuma",
    "Contribuye al cuidado antioxidante de las células",
    "Puede acompañar el bienestar de las articulaciones",
    "Tiene uso tradicional como complemento digestivo",
    "Incluye pimienta negra para complementar la fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes, antiagregantes plaquetarios, antidiabéticos o medicamentos metabolizados por CYP3A4 deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para evitar coágulos o controlar el azúcar. También revisar otros tratamientos que procesa el hígado."
},

// 55. D3 1000 IU / 1000 UI + Vitamina C & Equinácea (30 cápsulas)
{
  id: 55,
  code: "7503029679101",
  name: "D3 1000 UI + VITAMINA C & EQUINÁCEA",
  benefitSummary: "Vitamina C para defensas, colágeno y cuidado celular",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/D3-1000u-1.jpg",
  shortDesc: "Suplemento alimenticio en presentación de 30 cápsulas con vitamina C, vitamina D3 y equinácea, formulado como apoyo nutricional para la función inmunológica y el bienestar estacional.",
  ingredients: "Por cápsula de 1000 mg: Vitamina C (como ácido ascórbico) 300 mg, Vitamina D3 (como colecalciferol) 1000 UI / 25 mcg, Equinácea (Echinacea purpurea) 200 mg y excipiente c.b.p.",
  serving: "1 cápsula (1000 mg) al día",
  timing: "Por la mañana o con alimentos, preferentemente con una comida que contenga grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos, preferentemente por la mañana. No exceder la porción diaria recomendada.",
  benefits: [
    "La vitamina C apoya el funcionamiento de las defensas",
    "La vitamina D ayuda a absorber el calcio",
    "La vitamina D también contribuye al cuidado de huesos y músculos",
    "La vitamina C ayuda al cuidado antioxidante de las células",
    "La equinácea tiene uso tradicional en cambios de temporada"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con hipercalcemia, sarcoidosis, enfermedad renal grave, alergia a la equinácea (Asteraceae) o bajo tratamiento con anticoagulantes, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "Tomar con alimentos. Una comida con algo de grasa ayuda a aprovechar la vitamina D3. La vitamina C puede causar molestias de estómago en personas sensibles.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o disminuir la actividad de las defensas."
},

// 56. DEMOGRASS CLÁSICO (30 cápsulas)
{
  id: 56,
  code: "7501172019331",
  name: "DEMOGRASS CLÁSICO",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSCLASICO.webp",
  shortDesc: "Mezcla de 9 ingredientes naturales con alta fibra, para apoyar la salud digestiva y el bienestar general.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, bromelina.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Combina fibra e ingredientes vegetales",
    "Se utiliza como complemento del bienestar digestivo",
    "La fórmula incluye ingredientes como bromelina",
    "Puede acompañar hábitos de alimentación ordenada",
    "Su enfoque es el cuidado digestivo dentro de una rutina saludable"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a un médico antes de usar.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 57. Demograss Plus (30 cápsulas, 14 ingredientes)
{
  id: 57,
  code: "7501172018228",
  name: "DEMOGRASS PLUS",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPLUS.webp",
  shortDesc: "Mezcla de 14 ingredientes naturales, incluyendo tés y plantas tradicionales, alta en fibra, para apoyo digestivo.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, zarzaparrilla, diente de león, té rojo, té blanco.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Reúne varias plantas en una sola fórmula",
    "Aporta ingredientes vegetales y fibra",
    "Se utiliza como complemento del bienestar digestivo",
    "Incluye compuestos vegetales con actividad antioxidante",
    "Puede acompañar un plan de alimentación y actividad física"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades crónicas deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 58. DIOLA ROSE (90 caps)
{
  id: 58,
  code: "7500645000791",
  name: "DIOLA ROSE",
  benefitSummary: "Calma, bienestar mental y rutina de descanso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Diola-Rose1-1.jpg",
  shortDesc: "Fórmula sinérgica que combina Rhodiola Rosea (450 mg), un adaptógeno que apoya la resistencia al estrés físico y mental, con citrato de magnesio (500 mg) de alta biodisponibilidad y polen de abeja (50 mg) para promover la vitalidad y la recuperación.",
  ingredients: "Citrato de magnesio (aporte de magnesio elemental ≈ 70 mg) (500 mg), Rhodiola Rosea (extracto de raíz estandarizado en rosavinas y salidrósido) (450 mg), polen de abeja en polvo (50 mg).",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para resultados óptimos en la adaptación al estrés y la vitalidad, se recomienda un uso continuo de al menos 4-8 semanas.",
  benefits: [
    "La rhodiola puede apoyar la adaptación al estrés cotidiano",
    "Puede acompañar la vitalidad en etapas de mayor actividad",
    "El magnesio ayuda al funcionamiento normal de músculos y nervios",
    "El magnesio contribuye al aprovechamiento de la energía",
    "Combina ingredientes para el bienestar físico y mental"
  ],
  contraindications: "No consumir por menores de 12 años. No consumir durante el embarazo o lactancia. Producto elaborado en líneas que procesan derivados de soya, leche, pescado y crustáceos. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 59. DT Green (15 caps)
{
  id: 59,
  code: "7503016797207",
  name: "DT GREEN",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica con té, papaya, toronja, malva, espirulina y jengibre, para apoyo a la depuración y digestión.",
  ingredients: "Hojas de té, papaya, toronja, malva, espirulina, jengibre.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Reúne plantas y enzimas en una sola fórmula",
    "Tiene un enfoque de bienestar digestivo",
    "Aporta compuestos vegetales antioxidantes",
    "Se utiliza tradicionalmente como complemento del cuidado del hígado",
    "Permite incorporar la mezcla botánica en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o medicamentos metabolizados por CYP3A4 deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La fórmula incluye toronja, que puede cambiar el efecto de muchos medicamentos. Si el cliente toma alguno, revisar la combinación antes de usar."
},

// 60. Endis (90 caps, enzimas digestivas)
{
  id: 60,
  code: "7503021404657",
  name: "ENDIS",
  benefitSummary: "Enzimas para descomponer alimentos y apoyar la digestión",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ENENDIS.png",
  shortDesc: "Fórmula enzimática con papaya, papaina, bromelina, amilasa, lipasa, pancreatina y hierbabuena, para apoyo digestivo.",
  ingredients: "Papaya (400 mg), papaina (180 mg), bromelina (170 mg), fosfato de calcio (100 mg), amilasa (50 mg), pancreatina (50 mg), lipasa (30 mg), hierbabuena (20 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 2 cápsulas antes de las comidas principales.",
  benefits: [
    "Las enzimas ayudan a descomponer los alimentos durante la digestión",
    "Incluye enzimas para proteínas, grasas y carbohidratos",
    "Puede apoyar el confort después de comer",
    "La hierbabuena complementa el enfoque digestivo",
    "Está orientado a personas que buscan apoyo con comidas pesadas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la papaya, piña, menta, úlcera gástrica activa, pancreatitis aguda o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar el riesgo de sangrado si se combina con medicamentos para evitar coágulos."
},

// 61. EQUINACEA Y VITAMINA C 500 mg (90 caps)
{
  id: 61,
  code: "7503029679057",
  name: "EQUINACEA Y VITAMINA C",
  benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Equinacea1.jpg",
  shortDesc: "Combinación de equinácea y vitamina C para fortalecer las defensas naturales del organismo.",
  ingredients: "Equinácea (200 mg), vitamina C (300 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "La vitamina C contribuye al funcionamiento de las defensas",
    "También ayuda al cuidado antioxidante de las células",
    "Contribuye a reducir el cansancio por falta de vitamina C",
    "La equinácea tiene uso tradicional en cambios de temporada",
    "Reúne una vitamina y un ingrediente botánico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a plantas de la familia Asteraceae o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de usar si el cliente toma medicamentos que disminuyen la actividad de las defensas, como algunos tratamientos después de un trasplante."
},

// PRODUCTO 62 - EVEAUX 500 mg
{
  id: 62,
  code: "7503021404589",
  name: "EVEAUX 500 mg",
  benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/eveaux.jpg",
  shortDesc: "Suplemento integral con vitaminas, minerales, aminoácidos esenciales, colágeno, queratina, sílice y ácido hialurónico, diseñado para apoyar la salud de la piel, el cabello y las uñas.",
  ingredients: "Concentrado de proteína de soya, vitaminas (A, B1, B3, B5, B7, B9, C, D, E), selenio, aminoácidos (L-cisteína, L-metionina, L-leucina, L-valina, L-lisina), colágeno, queratina, sílice, ácido hialurónico.",
  serving: "3 cápsulas al día",
  timing: "Preferentemente con alimentos para mejorar la absorción",
  intakeInstructions: "Tomar 3 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Complementa el cuidado de piel, cabello y uñas",
    "La biotina contribuye al mantenimiento del cabello y la piel",
    "La vitamina C ayuda a formar colágeno",
    "El ácido hialurónico complementa el cuidado de la hidratación de la piel",
    "Las vitaminas C y E ayudan al cuidado antioxidante"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 63. Fenogreco (90 caps)
{
  id: 63,
  code: "7503026253885",
  name: "FENOGRECO",
  benefitSummary: "Apoyo nutricional al bienestar metabólico",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/fenogreco-1.jpg",
  shortDesc: "Semilla de fenogreco en polvo, rica en fibra y saponinas, para apoyo digestivo y metabólico.",
  ingredients: "Fenogreco (Trigonella foenum-graecum) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Aporta fenogreco, una semilla de uso tradicional",
    "Contiene fibra y otros compuestos vegetales",
    "Se utiliza como complemento del bienestar digestivo",
    "También se estudia por su relación con el manejo de la glucosa",
    "Puede acompañar una alimentación orientada al cuidado metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a legumbres o bajo tratamiento con antidiabéticos, anticoagulantes o hormonales deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para el azúcar, para evitar coágulos o tratamientos hormonales."
},

// 64. FITMINGO 510 GR VAINILLA (proteína vegetal)
{
  id: 64,
  code: "7503037273384",
  name: "FITMINGO 510 GR VAINILLA",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FITMINGO_LISTINGS_VAINILLA510_01_1.webp",
  shortDesc: "Proteína vegetal de chícharo y arroz, enriquecida con inositoles, ácido hialurónico y vitamina D3, sin alérgenos comunes.",
  ingredients: "Proteína de chícharo, proteína de arroz, inulina de agave, myo-inositol, D-chiro inositol, ácido hialurónico, bisglicinato de zinc, vitamina D3, stevia, canela.",
  serving: "34 g (1 medida)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 250-300 ml de agua o bebida vegetal. Tomar una vez al día.",
  benefits: [
    "Aporta proteína vegetal para completar la alimentación",
    "Ayuda al mantenimiento de los músculos",
    "Incluye inositoles como parte de la fórmula",
    "La vitamina D contribuye al cuidado de los huesos",
    "Ofrece una alternativa a las proteínas de origen lácteo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al coco o trazas de almendra deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene coco y puede tener trazas de almendra. Revisar si el cliente tiene alergia a estos alimentos."
},

// 66. FLOR ESSENCE (500 ml, remedio herbolario)
{
  id: 66,
  code: "61998080702",
  name: "FLOR-ESSENCE",
  benefitSummary: "Mezcla de ingredientes tradicionales para el bienestar general",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FlorEssence1.webp",
  shortDesc: "Remedio herbolario con ocho hierbas tradicionales (bardana, acedera, olmo, kelp, cardo santo, berro, trébol rojo, ruibarbo), para el fortalecimiento de las defensas naturales.",
  ingredients: "Bardana (1135 mg), acedera (573 mg), olmo (143 mg), kelp (53 mg), cardo santo (53 mg), berro (53 mg), trébol rojo (53 mg), ruibarbo (37 mg) por 100 ml.",
  serving: "56 ml (una o dos veces al día)",
  timing: "Por la noche antes de acostarse y por la mañana 1 hora antes del primer alimento",
  intakeInstructions: "Agitar antes de usar. Diluir en igual cantidad de agua purificada. Tomar a sorbos lentamente.",
  benefits: [
    "Combina ocho hierbas de uso tradicional",
    "Se utiliza como complemento del bienestar digestivo",
    "Aporta compuestos vegetales con actividad antioxidante",
    "Permite incorporar la mezcla en formato líquido",
    "Su enfoque es el bienestar general desde la herbolaria tradicional"
  ],
  contraindications: "No administrar en pacientes con trasplantes, hipersensibilidad a los componentes, obstrucción intestinal, inflamación aguda, problemas de tiroides, embarazo, lactancia o niños menores de 10 años.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede causar cólicos o molestias en el estómago y el intestino. Si el cliente recibe radioterapia o quimioterapia, consultar con su equipo médico antes de usar."
},

// 67. FUNGONE
{
  id: 67,
  code: "7503026253618",
  name: "FUNGONE",
  benefitSummary: "Mezcla de ingredientes tradicionales para el bienestar general",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Fungone1.jpg",
  shortDesc: "Fórmula avanzada que combina siete hongos medicinales (Reishi, Maitake, Chaga, Shiitake, Cordyceps, Turkey Tail y Melena de León) para apoyar el sistema inmunológico, la función cognitiva y la vitalidad.",
  ingredients: "Hongo Reishi (Ganoderma lucidum), hongo Maitake (Grifola frondosa), hongo Chaga (Inonotus obliquus), hongo Shiitake (Lentinula edodes), hongo Cordyceps (Cordyceps sinensis), hongo Turkey Tail (Trametes versicolor), hongo Melena de León (Hericium erinaceus) en polvo.",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Reúne distintos hongos de uso tradicional",
    "Aporta compuestos propios de los hongos de la fórmula",
    "Se estudian como apoyo al funcionamiento de las defensas",
    "Combina ingredientes orientados a la vitalidad y el bienestar mental",
    "Facilita incorporar varios hongos en una sola presentación"
  ],
  contraindications: "Mujeres embarazadas, en periodo de lactancia, personas con alergia a los hongos, trastornos autoinmunitarios, o bajo tratamiento inmunosupresor o anticoagulante deben consultar a un profesional de la salud antes de consumirlo.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 68. GABA (30 caps)
{
  id: 68,
  code: "7503021404695",
  name: "GABA",
  benefitSummary: "Calma, bienestar mental y rutina de descanso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GABA1.jpg",
  shortDesc: "Suplemento de GABA con zinc, selenio, vitamina B5 y B12, para apoyo a la relajación y función neurológica.",
  ingredients: "GABA (1200 mg), zinc (20 mg), selenio (100 mcg), vitamina B5 (20 mg), vitamina B12 (12 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Su enfoque es favorecer una rutina de relajación",
    "Puede acompañar el descanso al final del día",
    "Aporta GABA y los nutrientes indicados en la fórmula",
    "Se utiliza como complemento del bienestar mental",
    "Permite incorporar el ingrediente en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas bajo tratamiento con ansiolíticos, hipnóticos o anticonvulsivantes, o con condiciones médicas deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar el sueño o la sedación al combinarse con medicamentos para la ansiedad, para dormir o para controlar convulsiones."
},

// 69. GENTILAX (laxante con fenolftaleína) - se incluye pero con advertencia
{
  id: 69,
  code: "7501737500038",
  name: "GENTILAX",
  benefitSummary: "Apoyo ocasional a la evacuación",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/gentilax.webp",
  shortDesc: "Laxante estimulante a base de fenolftaleína, para alivio del estreñimiento ocasional. Uso bajo prescripción médica.",
  ingredients: "Fenolftaleína 60 mg por tableta.",
  serving: "1-2 tabletas (según indicación médica)",
  timing: "Antes de acostarse",
  intakeInstructions: "Tomar 1-2 tabletas antes de acostarse, según indicación médica. No usar por más de una semana.",
  benefits: [
    "Es un producto orientado al estreñimiento ocasional",
    "Ayuda a estimular el movimiento del intestino",
    "Su finalidad es facilitar la evacuación cuando corresponde su uso",
    "La etiqueta indica cómo ajustar la toma",
    "El beneficio se limita al uso ocasional indicado"
  ],
  contraindications: "No administrar en casos de dolor abdominal de origen desconocido, obstrucción intestinal, embarazo, lactancia, o en menores de 8 años sin prescripción médica.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Usarlo durante demasiado tiempo puede hacer que el intestino dependa del laxante y alterar las sales y minerales del cuerpo. Respetar el tiempo de uso indicado."
},

// 70. Ginkgo Biloba (90 caps)
{
  id: 70,
  code: "7503026253502",
  name: "GINKGO BILOBA",
  benefitSummary: "Complemento del cuidado de la atención y la memoria",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ginko.jpg",
  shortDesc: "Extracto estandarizado de Ginkgo biloba, para apoyar la función cognitiva, la memoria y la circulación.",
  ingredients: "Extracto de Ginkgo biloba (estandarizado a 24% flavonoides glicósidos y 6% terpenlactonas).",
  serving: "3 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Se utiliza como complemento del cuidado de la memoria",
    "Puede acompañar tareas que requieren atención",
    "Tiene uso tradicional para el bienestar circulatorio",
    "Aporta compuestos vegetales con actividad antioxidante",
    "Su enfoque combina bienestar mental y circulación"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la coagulación, epilepsia o bajo tratamiento con anticoagulantes, antiagregantes, antidepresivos ISRS o anticonvulsivantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar el riesgo de sangrado con medicamentos para evitar coágulos, incluidos anticoagulantes y antiagregantes."
},

// 71. GLUTAMINE FEAR (300 g)
{
  id: 71,
  code: "7503021404244",
  name: "GLUTAMINE FEAR",
  benefitSummary: "Glutamina para complementar la nutrición",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Glutamina_1_46f39ebf-7ea9-40eb-9fe2-91c439e45717.webp",
  shortDesc: "L-Glutamina en polvo de alta pureza, para la recuperación muscular y el soporte del sistema inmune.",
  ingredients: "L-Glutamina pura (5000 mg por porción).",
  serving: "5 g (1 medida)",
  timing: "Post-entreno o antes de dormir",
  intakeInstructions: "Diluir 5 g en 200-250 ml de agua fría. Consumir después del entrenamiento o antes de dormir.",
  benefits: [
    "Aporta glutamina, un componente de las proteínas",
    "Complementa la alimentación de personas físicamente activas",
    "La glutamina participa en el mantenimiento de distintos tejidos",
    "También sirve como fuente de energía para algunas células",
    "Su formato en polvo facilita incorporarla a una bebida"
  ],
  contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede tener trazas de alimentos que causan alergia porque se fabrica en instalaciones compartidas. Revisar la etiqueta si el cliente tiene alergias."
},

// 72. GLUTATHIONE BLEND 500 mg (120 caps)
{
  id: 72,
  code: "7500645000456",
  name: "GLUTATHIONE BLEND",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/gluta.jpg",
  shortDesc: "Combinación de glutatión reducido y vitamina C, para la protección celular y la desintoxicación.",
  ingredients: "Vitamina C (250 mg), glutatión (100 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina ingredientes orientados al cuidado antioxidante",
    "El glutatión participa en la protección normal de las células",
    "Complementa los sistemas antioxidantes del cuerpo",
    "Su enfoque es el cuidado celular cotidiano",
    "Permite reunir los ingredientes de la fórmula en una sola toma"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes, quimioterapia o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para evitar coágulos, recibe quimioterapia o toma tratamientos que disminuyen la actividad de las defensas."
},

// 73. GOJI TRIM® 500 mg BIO LIFE (30 caps)
{
  id: 73,
  code: "690939403401",
  name: "GOJI TRIM 500 mg BIO LIFE",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GOJI.webp",
  shortDesc: "Suplemento a base de semillas de baya de Goji, con linaza, raíz de lima, malva y lecitina de soya, para apoyo nutricional.",
  ingredients: "Semilla de baya de Goji, linaza, raíz de lima, malva, lecitina de soya.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta goji y otros ingredientes vegetales",
    "Contiene compuestos con actividad antioxidante",
    "Su fórmula tiene un enfoque de bienestar digestivo",
    "Complementa la alimentación con una mezcla de plantas",
    "Permite incorporar goji en una presentación práctica"
  ],
  contraindications: "Contiene soya. Consultar a médico si se tienen alergias o condiciones médicas.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 74. GOJI (30 caps)
{
  id: 74,
  code: "7506022814081",
  name: "GOJI",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GOJI1.jpg",
  shortDesc: "Extracto de baya de Goji con pingüica, diente de león, extractos cítricos, ácido clorogénico y BHB, para apoyo metabólico.",
  ingredients: "Bayas de Goji, pingüica, raíz de diente de león, extractos cítricos, ácido clorogénico, BHB.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta compuestos antioxidantes propios del goji",
    "Complementa una alimentación variada",
    "Su enfoque es el cuidado celular y el bienestar general",
    "Permite incorporar goji sin preparar el fruto",
    "Ofrece ingredientes de origen vegetal en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a frutas de la familia Solanaceae o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para evitar coágulos: la vitamina K de la fórmula puede cambiar su efecto."
},

// 75. GOJIZEN MAX (ACTUALIZADO)
{
  id: 75,
  code: "7503025069036",
  name: "GOJIZEN MAX",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/correjidos_0000_freepik__reflective-red-plastic-bottle-gently-tapered-shoul__80768.jpg",
  shortDesc: "Suplemento alimenticio que combina una mezcla botánica de bayas de Goji, mango africano, linaza, piña y papaya con micronutrientes esenciales (vitamina B12, magnesio y calcio) para apoyar el bienestar general y el metabolismo.",
  ingredients: "Bayas de Goji (Lycium barbarum), mango africano (Irvingia gabonensis), linaza (Linum usitatissimum), raíz de lima, piña (Ananas comosus), papaya (Carica papaya), lecitina de soya, vitamina C, vitamina E, vitamina B12 (cianocobalamina) (6 µg), magnesio elemental (9 mg), calcio elemental (8 mg).",
  serving: "1 cápsula al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Combina goji, mango africano, linaza, piña y papaya",
    "Incluye ingredientes vegetales con enfoque digestivo",
    "La piña y la papaya contienen enzimas propias de estas frutas",
    "Las vitaminas C y E complementan el cuidado antioxidante",
    "Reúne varios ingredientes en una sola fórmula"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 76. GREEN LX 300 mg (50 tabletas)
{
  id: 76,
  code: "7503016797597",
  name: "GREEN LX",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GREEEN-XL.jpg",
  shortDesc: "Fórmula botánica con ciruela pasa, tamarindo, papaya, sábila y manzana, para apoyar el tránsito intestinal regular.",
  ingredients: "Ciruela pasa, tamarindo, papaya, sábila, manzana.",
  serving: "1 tableta (300 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 tableta al día con alimentos.",
  benefits: [
    "Está orientado al bienestar y la regularidad intestinal",
    "Combina ingredientes vegetales con enfoque digestivo",
    "Puede acompañar hábitos de alimentación y consumo de agua",
    "Su objetivo práctico es favorecer el confort intestinal",
    "Permite incorporar la mezcla en tabletas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción intestinal, enfermedad inflamatoria intestinal activa o bajo tratamiento con diuréticos, antiarrítmicos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La sábila puede acelerar las evacuaciones o causar diarrea."
},

// 77. HERCAMPURRI 500 mg (90 caps)
{
  id: 77,
  code: "7503026253908",
  name: "HERCAMPURI",
  benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/HERCAMPURRI.jpg",
  shortDesc: "Suplemento de hercampuri (Gentianella alborosea), planta andina tradicional para el apoyo digestivo.",
  ingredients: "Hercampuri (Gentianella alborosea) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día antes de las comidas principales.",
  benefits: [
    "El hercampuri tiene uso tradicional digestivo",
    "Se utiliza para acompañar el confort después de las comidas",
    "Su sabor amargo es característico de la planta",
    "Tradicionalmente se relaciona con el cuidado del hígado y la bilis",
    "Ofrece el ingrediente botánico en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, gastritis hiperácida, enfermedad de la vesícula biliar u obstrucción biliar deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos que modifican la producción de ácido del estómago."
},

// 78. HPR PROS GREEN ZEN (120 caps)
{
  id: 78,
  code: "7500645000340",
  name: "HPR PROS",
  benefitSummary: "Bienestar prostático y cuidado masculino",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/HPRPros.jpg",
  shortDesc: "Fórmula para la salud del tracto urinario y función inmune, con arándano, semilla de calabaza, ciruelo africano, equinácea, cúrcuma, zinc y selenio.",
  ingredients: "Arándano (125 mg), semilla de calabaza (100 mg), ciruelo africano (90 mg), equinácea (90 mg), cúrcuma (75 mg), zinc (20 mg), selenio (100 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Su enfoque es el bienestar prostático masculino",
    "Combina ingredientes para complementar el cuidado urinario",
    "Aporta antioxidantes y minerales de la fórmula",
    "Puede integrarse a una rutina de autocuidado masculino",
    "Reúne ingredientes botánicos y nutricionales"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal, hepática, trastornos autoinmunes o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El zinc en cantidades altas puede hacer que el cuerpo absorba menos cobre. Revisar si el cliente ya toma otros suplementos con zinc."
},

// 79. INOSITOL POWDER (120 caps)
{
  id: 79,
  code: "7500645000395",
  name: "INOSITOL POWDER",
  benefitSummary: "Apoyo nutricional al bienestar metabólico",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Inositol1.jpg",
  shortDesc: "Myo-inositol en cápsulas, para apoyar el metabolismo de la glucosa y el equilibrio hormonal.",
  ingredients: "Myo-inositol 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta inositol para complementar la alimentación",
    "Participa en la comunicación normal entre las células",
    "Interviene en procesos relacionados con la respuesta a la insulina",
    "Se utiliza como complemento del bienestar metabólico",
    "Permite incorporar inositol en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos o medicamentos que afectan el estado de ánimo deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para la diabetes, porque la combinación puede cambiar el control del azúcar en la sangre."
},

// 80. ISOFLAVONAS DE SOYA 500 mg (90 caps)
{
  id: 80,
  code: "7503021404503",
  name: "ISOFLAVONAS DE SOYA 500 mg",
  benefitSummary: "Bienestar femenino y cambios de etapa",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ISOFLAVONAS1.webp",
  shortDesc: "Fórmula con isoflavonas de soya, camote silvestre, arándano rojo, vitaminas A, E, B1, B12, para el bienestar femenino y equilibrio hormonal.",
  ingredients: "Arándano rojo (636 mg), camote silvestre (600 mg), vitamina E (150 mg), isoflavonas de soya (90 mg), vitamina B1 (15 mg), vitamina A (900 mcg), vitamina B12 (12 mcg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Aporta isoflavonas de soya",
    "Se utiliza como complemento del bienestar durante la menopausia",
    "Puede ayudar con algunos malestares de esa etapa en ciertas personas",
    "Acompaña una rutina de cuidado femenino",
    "Permite incorporar los compuestos de la soya en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la soya, antecedentes de cáncer de mama o endometrio, o bajo tratamiento hormonal deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Las isoflavonas pueden tener efectos parecidos a los estrógenos, hormonas del cuerpo. Consultar si el cliente tiene una condición sensible a las hormonas."
},

// 81. JENGIBRE 500 mg (60 caps)
{
  id: 81,
  code: "7503021404176",
  name: "JENGIBRE",
  benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/JENGIBRE.jpg",
  shortDesc: "Raíz de jengibre en polvo en cápsulas, para apoyo digestivo y alivio de náuseas.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo 1000 mg por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Tiene uso tradicional para el confort del estómago",
    "Puede ayudar con la sensación de náusea en ciertos contextos",
    "Se utiliza para acompañar la digestión después de comer",
    "Aporta compuestos antioxidantes del jengibre",
    "Permite incorporar la raíz sin su sabor intenso"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, gastritis, reflujo severo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
},

// 82. Krill Oil (80 cápsulas)
{
  id: 82,
  code: "7500645000463",
  name: "KRILL OIL",
  benefitSummary: "Complemento nutricional para el cuidado del corazón",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/krill-1.jpg",
  shortDesc: "Aceite de krill concentrado en EPA, DHA, fosfolípidos y astaxantina, para apoyo cardiovascular y cerebral.",
  ingredients: "Aceite de krill (1.2 g) con EPA (400 mg), DHA (200 mg), fosfolípidos (300 mg), astaxantina (30 mg) por cápsula.",
  serving: "1 cápsula (1.2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta omega 3 de origen marino",
    "El omega 3 complementa el cuidado del corazón",
    "El DHA es un componente importante del cerebro y los ojos",
    "Incluye astaxantina como ingrediente antioxidante",
    "Permite incorporar grasas marinas a la alimentación"
  ],
  contraindications: "Personas con alergia a crustáceos o mariscos, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
},

// 83. L-ARGININA NANO FEAR 850MG (100 cápsulas)
{
  id: 83,
  code: "7503021404596",
  name: "L-ARGININA NANO FEAR 850MG",
  benefitSummary: "Arginina como complemento de una rutina activa",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-ARGININA-1.jpg",
  shortDesc: "L-Arginina con L-Ornitina, para mejorar el flujo sanguíneo y el rendimiento deportivo.",
  ingredients: "L-Arginina (2550 mg), L-Ornitina (150 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Antes del entrenamiento",
  intakeInstructions: "Tomar 3 cápsulas antes de la actividad física.",
  benefits: [
    "Aporta arginina, un componente de las proteínas",
    "Participa en la producción de sustancias que relajan los vasos sanguíneos",
    "Se utiliza como complemento de rutinas deportivas",
    "Acompaña la nutrición de personas físicamente activas",
    "Combina arginina y ornitina en una sola fórmula"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, hipotensión arterial, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 84. L-CARNITINA, GUARANÁ Y GARCINIA (100 cápsulas)
{
  id: 84,
  code: "7501062913671",
  name: "L-CARNITINA, GUARANÁ Y GARCINIA",
  benefitSummary: "Energía y alerta para acompañar el entrenamiento",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Carnitina1.webp",
  shortDesc: "Fórmula termogénica con L-carnitina, guaraná, cafeína, Garcinia, cayena y extractos vegetales, para apoyo al metabolismo y la oxidación de grasas.",
  ingredients: "L-Carnitina tartrato (240 mg), extracto de guaraná (200 mg), cafeína (180 mg), L-tirosina (80 mg), extracto de Garcinia (50 mg), pimienta cayena (50 mg), vitamina B5 (20 mg), pimienta negra (5 mg), cromo (40 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Antes del desayuno y antes de la comida",
  intakeInstructions: "Tomar 2 cápsulas antes del desayuno y 2 antes de la comida (4 cápsulas al día).",
  benefits: [
    "La cafeína y el guaraná ayudan a mantenerse alerta",
    "Puede apoyar la energía percibida antes de la actividad física",
    "La L-carnitina participa en el uso de grasas como energía",
    "El cromo contribuye al manejo normal de la glucosa",
    "Complementa una rutina de alimentación y ejercicio"
  ],
  contraindications: "Personas con hipertensión, enfermedades cardíacas, hepáticas o renales, sensibilidad a la cafeína, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar los efectos de otros estimulantes, como mayor nerviosismo o dificultad para dormir. Revisar otros productos con cafeína."
},

// 85. L-CARNOSINE ZINC (30 cápsulas)
{
  id: 85,
  code: "7500645001521",
  name: "L-CARNOSINE ZINC",
  benefitSummary: "Nutrición para el cuidado de la capa digestiva",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZN-–-ZINC-L-CARNOSINE-–-30-caps-–-Render-–-V2-–-Marzo2026.jpg",
  shortDesc: "Quelato de zinc con L-carnosina, jengibre e inulina de agave, para el confort digestivo y la salud de las mucosas.",
  ingredients: "Zinc L-carnosina (50 mg, aporta 15 mg de zinc elemental), jengibre en polvo (50 mg), inulina de agave c.s.p. por cápsula.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Su enfoque es el cuidado de la capa que recubre el estómago",
    "El zinc contribuye al mantenimiento normal de los tejidos",
    "El jengibre tiene uso tradicional para el confort digestivo",
    "La inulina es una fibra que sirve de alimento a bacterias intestinales",
    "Reúne apoyo nutricional y digestivo en una sola fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con condiciones médicas deben consultar a un especialista.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El exceso de zinc puede hacer que el cuerpo absorba menos cobre. Revisar otros suplementos que el cliente ya consuma."
},

// 86. Leucaps (60 cápsulas, luteína y zeaxantina)
{
  id: 86,
  code: "7503025069401",
  name: "LEUCAPS",
  benefitSummary: "Luteína y zeaxantina para el cuidado visual",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/leucaps.jpg",
  shortDesc: "Extracto de flor de cempasúchil (Tagetes erecta) rico en luteína y zeaxantina, para la salud ocular.",
  ingredients: "Extracto de flor de cempasúchil estandarizado en luteína y zeaxantina.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
  benefits: [
    "Aporta luteína y zeaxantina para complementar el cuidado visual",
    "Estos componentes se encuentran naturalmente en la retina",
    "Contribuye al cuidado antioxidante de los ojos",
    "Su enfoque es el bienestar visual cotidiano",
    "Permite incorporar estos pigmentos vegetales en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a plantas de la familia Asteraceae o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
},

// 87. L-TIROSINA 500 mg (60 caps)
{
  id: 87,
  code: "7503026253076",
  name: "L-TIROSINA",
  benefitSummary: "Complemento del cuidado de la atención y la memoria",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-TYROSINE1.webp",
  shortDesc: "L-Tirosina con arándano azul y vitamina C, para apoyo cognitivo y reducción del estrés.",
  ingredients: "L-Tirosina (350 mg), polvo de arándano azul (100 mg), vitamina C (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "La tirosina participa en la formación de mensajeros del cerebro",
    "Se utiliza como complemento en tareas de atención",
    "Puede acompañar el desempeño mental en situaciones de demanda",
    "La vitamina C contribuye al cuidado antioxidante",
    "El arándano complementa el aporte de compuestos vegetales"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con fenilcetonuria, trastornos de la tiroides o bajo tratamiento con inhibidores de la MAO, levodopa, anticoagulantes o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si usa ciertos antidepresivos llamados IMAO, levodopa para el Parkinson, medicamentos para evitar coágulos o para controlar el azúcar."
},

// 88. MACA NEGRA (polvo, 150 g)
{
  id: 88,
  code: "7503021404893",
  name: "MACA NEGRA",
  benefitSummary: "Vitalidad y uso tradicional",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MACANEGRA.webp",
  shortDesc: "Raíz de maca negra en polvo, adaptógeno andino para la vitalidad y el equilibrio hormonal.",
  ingredients: "Maca negra (Lepidium meyenii) en polvo 4 g por porción.",
  serving: "4 g (1 cucharada)",
  timing: "Con alimentos",
  intakeInstructions: "Disolver 4 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "La maca tiene uso tradicional como apoyo a la vitalidad",
    "Puede acompañar etapas de mayor actividad física y mental",
    "Se utiliza como complemento del bienestar sexual",
    "Aporta maca negra en polvo para mezclar con alimentos",
    "Permite variar la alimentación con un ingrediente vegetal"
  ],
  contraindications: "No consumir durante el embarazo ni lactancia. Personas con trastornos hormonales sensibles o bajo tratamiento médico deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
},

// 89. MACA, JENGIBRE Y DAMIANA 500 mg (60 caps)
{
  id: 89,
  code: "7503021404213",
  name: "MACA, JENGIBRE Y DAMIANA",
  benefitSummary: "Vitalidad y uso tradicional",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/maca-1.jpg",
  shortDesc: "Combinación de maca, jengibre y damiana para la vitalidad, el equilibrio hormonal y el bienestar sexual.",
  ingredients: "Raíz de maca (500 mg), raíz de jengibre (300 mg), hoja de damiana (200 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "La maca y la damiana tienen uso tradicional para la vitalidad",
    "Puede acompañar una rutina de bienestar sexual",
    "El jengibre complementa el enfoque digestivo",
    "Reúne tres ingredientes vegetales en una sola fórmula",
    "Su enfoque es el bienestar y la energía cotidiana"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales sensibles o bajo tratamiento con antidiabéticos, anticoagulantes o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para controlar el azúcar, evitar coágulos o tratar la presión arterial."
},

// 90. Maca (90 caps, mezcla de amarilla, roja y negra)
{
  id: 90,
  code: "7503029679941",
  name: "MACA 90 CAPS",
  benefitSummary: "Vitalidad y uso tradicional",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/maca.jpg",
  shortDesc: "Mezcla de maca amarilla, roja y negra con pimienta negra, para energía, equilibrio hormonal y vitalidad.",
  ingredients: "Maca amarilla (600 mg), maca roja (450 mg), maca negra (435 mg), pimienta negra (15 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Combina maca amarilla, roja y negra",
    "Tiene uso tradicional como apoyo a la vitalidad",
    "Puede acompañar una rutina de actividad física",
    "Se utiliza como complemento del bienestar sexual",
    "Permite incorporar las tres variedades sin preparar el polvo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales o bajo tratamiento médico deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para la presión arterial o para evitar coágulos."
},

// 91. Magnesio Blend (120 caps, citrato, gluconato, óxido)
{
  id: 91,
  code: "7500645000425",
  name: "MAGNESIO BLEND",
  benefitSummary: "Magnesio para músculos, nervios y energía",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/blend.jpg",
  shortDesc: "Mezcla de tres formas de magnesio (citrato, gluconato, óxido) para una absorción optimizada.",
  ingredients: "Citrato de magnesio (150 mg), gluconato de magnesio (150 mg), óxido de magnesio (150 mg) por cápsula.",
  serving: "1 cápsula (aprox. 500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta magnesio en tres formas distintas",
    "Ayuda al funcionamiento normal de los músculos",
    "Apoya el funcionamiento de los nervios",
    "Contribuye a reducir el cansancio por falta de magnesio",
    "Participa en el equilibrio de agua y minerales del cuerpo"
  ],
  contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para eliminar líquidos (diuréticos), ciertos antibióticos o tratamientos para los huesos llamados bisfosfonatos. Un profesional debe indicar cómo separar las tomas."
},

// 92. MAGNESIUM MALATE (60 caps)
{
  id: 92,
  code: "7500645001491",
  name: "MAGNESIUM MALATE",
  benefitSummary: "Magnesio para músculos, nervios y energía",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesio-Malate1.jpg",
  shortDesc: "Malato de magnesio dibásico con avena y vitamina B6 activa (P-5-P), para energía y función neuromuscular.",
  ingredients: "Malato de magnesio dibásico (1300 mg, aporta 200 mg de magnesio elemental), avena (20 mg), vitamina B6 como P-5-P (2 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "El magnesio contribuye al funcionamiento de músculos y nervios",
    "Ayuda a aprovechar los alimentos para producir energía",
    "La vitamina B6 también participa en el uso de la energía",
    "Puede complementar la alimentación en etapas de mayor actividad",
    "Aporta magnesio en forma de malato"
  ],
  contraindications: "Consultar a médico en caso de embarazo, lactancia o condiciones médicas.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 93. MagnesiumAM600mg (120 caps, citrato + bisglicinato)
{
  id: 93,
  code: "7500645001453",
  name: "MAGNESIUM AM 600mg",
  benefitSummary: "Magnesio para músculos, nervios y energía",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual1.jpg",
  shortDesc: "Magnesio dual (citrato y bisglicinato) con vitamina B6 e inulina, para apoyo energético y muscular.",
  ingredients: "Citrato de magnesio (1800 mg), bisglicinato de magnesio (500 mg), vitamina B6 (5 mg), inulina (100 mg) por porción.",
  serving: "4 cápsulas (2.4 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Combina dos formas de magnesio",
    "Apoya el funcionamiento normal de los músculos",
    "Contribuye al buen funcionamiento de los nervios",
    "Ayuda a aprovechar los alimentos para obtener energía",
    "La inulina complementa la fórmula con fibra"
  ],
  contraindications: "Consultar a médico si se tienen enfermedades renales o se está embarazada.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Algunos medicamentos pueden cambiar la cantidad de magnesio que el cuerpo absorbe. El médico o farmacéutico debe revisar la combinación y los horarios."
},

// 94. Magnesium PM 600mg (90 caps, fórmula nocturna)
{
  id: 94,
  code: "7500645001538",
  name: "MAGNESIUM PM 600mg",
  benefitSummary: "Calma, bienestar mental y rutina de descanso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual-PM1.jpg",
  shortDesc: "Magnesio dual (bisglicinato y citrato) con glicina, L-teanina, manzanilla, 5-HTP y vitamina B6, para el descanso nocturno.",
  ingredients: "Bisglicinato de magnesio (500 mg), citrato de magnesio (400 mg), glicina (450 mg), L-teanina (200 mg), extracto de manzanilla (100 mg), 5-HTP (25 mg), vitamina B6 (2 mg), inulina (100 mg) por porción.",
  serving: "3 cápsulas (1.8 g)",
  timing: "Por la noche, 30-60 min antes de dormir",
  intakeInstructions: "Tomar 3 cápsulas por la noche.",
  benefits: [
    "Está pensado para acompañar una rutina de descanso",
    "La teanina y la manzanilla se utilizan para favorecer la relajación",
    "El magnesio contribuye al funcionamiento normal de los nervios",
    "Incluye glicina y otros ingredientes relacionados con el descanso",
    "Reúne varios componentes en una fórmula nocturna"
  ],
  contraindications: "No se recomienda su uso simultáneo con medicamentos antidepresivos, ansiolíticos o inductores del sueño sin consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar el efecto de medicamentos para dormir o relajarse. También requiere revisión si el cliente toma antidepresivos."
},

// 95. MANGO AFRICANO (30 caps)
{
  id: 95,
  code: "7500645000531",
  name: "MANGO AFRICANO (30 cápsulas)",
  benefitSummary: "Complemento de alimentación y actividad física",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/mango-africano.jpg",
  shortDesc: "Extracto de Irvingia gabonensis con ácido clorogénico, BHB y otros extractos, para apoyo metabólico.",
  ingredients: "Mango africano (150 mg), pinguica (75 mg), diente de león (75 mg), ácido clorogénico (75 mg), extractos cítricos (50 mg), BHB (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina mango africano y otros ingredientes vegetales",
    "Se utiliza como complemento de hábitos de cuidado del peso",
    "Aporta compuestos vegetales antioxidantes",
    "Puede acompañar un plan de alimentación y actividad física",
    "Su enfoque es el bienestar metabólico general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hepáticos o bajo tratamiento con antidiabéticos, anticoagulantes o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para controlar el azúcar, evitar coágulos o eliminar líquidos."
},

// 96. MASS FEAR 8 LBS (ganador de masa)
{
  id: 96,
  code: "7500645001187",
  name: "MASS FEAR 8 LBS",
  benefitSummary: "Calorías y proteína para acompañar la ganancia muscular",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MASS-FEAR-CHOCOLATE-NUT4-1.png",
  shortDesc: "Ganador de masa con proteína de suero y carbohidratos, para aumento de peso y recuperación muscular.",
  ingredients: "Proteína de suero de leche, carbohidratos, fibra, grasas saludables.",
  serving: "245 g (1 medida)",
  timing: "Antes o después del entrenamiento",
  intakeInstructions: "Diluir 245 g en 500-700 ml de agua o leche. Tomar antes o después del entrenamiento.",
  benefits: [
    "Aporta calorías para quien necesita aumentar su consumo de energía",
    "Ofrece proteína para mantener y desarrollar los músculos",
    "Los carbohidratos ayudan a reponer energía después del ejercicio",
    "Facilita sumar alimento en una bebida",
    "Puede acompañar una rutina de aumento de masa muscular"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 97. MATCHA ORGÁNICO 100 g
{
  id: 97,
  code: "7503026253861",
  name: "MATCHA ORGÁNICO 100g",
  benefitSummary: "Una bebida con antioxidantes y cafeína",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Matcha.jpg",
  shortDesc: "Té verde matcha orgánico en polvo, rico en antioxidantes y L-teanina, para energía y claridad mental.",
  ingredients: "Matcha orgánico en polvo (Camellia sinensis) 100%.",
  serving: "2.5 g (1 cucharada)",
  timing: "Por la mañana o al inicio de la jornada",
  intakeInstructions: "Mezclar 2.5 g en 240 ml de agua caliente (70-80°C) y batir hasta obtener espuma.",
  benefits: [
    "El matcha aporta antioxidantes propios del té verde",
    "Su cafeína ayuda a mantenerse alerta",
    "Contiene teanina, un componente natural del té",
    "Se puede incorporar a bebidas y recetas",
    "Es una alternativa para variar el café u otras bebidas con cafeína"
  ],
  contraindications: "Personas sensibles a la cafeína, hipertensión, trastornos de ansiedad, embarazo o lactancia deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede tener trazas de soya, pescado y crustáceos por su fabricación en instalaciones compartidas. Revisar si el cliente tiene alergia a estos alimentos."
},

// 98. Melena de León (90 caps)
{
  id: 98,
  code: "7500645000852",
  name: "MELENA DE LEÓN",
  benefitSummary: "Complemento del cuidado de la atención y la memoria",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MELENA-LEON1.jpg",
  shortDesc: "Extracto de hongo Melena de León con L-Treonato de Magnesio y quinoa, para la función cognitiva y la memoria.",
  ingredients: "Melena de León (Hericium erinaceus) extracto (500 mg), L-Treonato de magnesio (450 mg), quinoa en polvo (50 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "La melena de león se estudia como apoyo al bienestar mental",
    "Su enfoque es complementar el cuidado de memoria y concentración",
    "El magnesio contribuye al funcionamiento normal de los nervios",
    "Combina un hongo y un mineral en una sola fórmula",
    "Puede acompañar hábitos de descanso y actividad mental"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a hongos, trastornos autoinmunes o bajo tratamiento con anticoagulantes o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para evitar coágulos o para disminuir la actividad de las defensas."
},

// 99. MIEL MULTIFLORA (560 g)
{
  id: 99,
  code: "7503021404954",
  name: "MIEL MULTIFLORA",
  benefitSummary: "Miel para endulzar y suavizar la garganta",
    category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MIEL-MULTIFLORA.png",
  shortDesc: "Miel de abeja 100% natural, sin aditivos, para sustituir el azúcar refinado en bebidas y alimentos.",
  ingredients: "Miel de abeja multiflora 100% natural.",
  serving: "20 g (1 cucharada)",
  timing: "A cualquier hora",
  intakeInstructions: "Consumir 20 g al día como edulcorante en bebidas o alimentos.",
  benefits: [
    "Endulza bebidas y alimentos con sabor a miel",
    "Aporta energía a través de sus azúcares naturales",
    "Puede dar una sensación de suavidad en la garganta",
    "Se puede incorporar a infusiones y recetas",
    "Permite variar el sabor de la alimentación cotidiana"
  ],
  contraindications: "No administrar a menores de 1 año (riesgo de botulismo). Personas con diabetes o alergia a productos apícolas deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene azúcares. Tenerlo en cuenta dentro de la alimentación, especialmente si el cliente debe controlar su consumo de azúcar."
},

// 100. MORINGA ORGÁNICA (90 caps)
{
  id: 100,
  code: "7503021404565",
  name: "MORINGA ORGÁNICA",
  benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0003s_0002_Presentacion_blanco.webp",
  shortDesc: "Hoja de moringa orgánica en polvo, superalimento rico en nutrientes y antioxidantes.",
  ingredients: "Hoja de moringa (Moringa oleifera) orgánica en polvo 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día (una antes de cada comida).",
  benefits: [
    "Aporta hoja de moringa en cápsulas",
    "Contiene nutrientes y compuestos propios de la planta",
    "Ofrece compuestos vegetales con actividad antioxidante",
    "Complementa una alimentación variada",
    "Permite incorporar moringa sin preparar sus hojas"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. Personas con alergia, trastornos de la tiroides o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
  },
// 101. UBIQUINOL KANEKA (30 cápsulas, 120 mg de ubiquinol)
{
  id: 101,
  code: "7500645001576",
  name: "UBIQUINOL KANEKA",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-UBIQUINOL-KANEKA-30-CAPS–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Suplemento de ubiquinol (Coenzima Q10 en su forma reducida activa) de Kaneka®, con MCT, vitamina E y extracto de romero para máxima absorción y estabilidad.",
  ingredients: "Ubiquinol (Kaneka QH®) 120 mg, aceite de triglicéridos de cadena media (MCT) 250 mg, lecitina de girasol 25 mg, vitamina E (alfa tocoferol) 10 mg, extracto de romero 5 mg, dióxido de silicio 5 mg por cápsula.",
  serving: "1 cápsula (415 mg)",
  timing: "Con alimentos que contengan grasas (desayuno o comida)",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasa (huevo, aguacate, nueces).",
  benefits: [
    "Aporta ubiquinol, una forma de coenzima Q10",
    "Participa en los procesos con los que las células producen energía",
    "Contribuye al cuidado antioxidante",
    "Se utiliza como complemento del bienestar cardiovascular",
    "Incluye una base de aceite en la fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad hepática o renal, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma warfarina, un medicamento para evitar coágulos, porque puede cambiar su efecto."
},

// 102. UC-II® Collagen Boswellia Curcumin (60 caps, fórmula articular)
{
  id: 102,
  code: "7500645001507",
  name: "UC-II® Collagen Boswellia Curcumin",
  benefitSummary: "Cuidado articular y nutrición para el movimiento",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Boswelia1.jpg",
  shortDesc: "Fórmula articular avanzada con colágeno tipo II no desnaturalizado (UC-II®), Boswellia, cúrcuma, ácido hialurónico, vitamina C y piperina.",
  ingredients: "Boswellia serrata extracto (400 mg), extracto de cúrcuma al 95% de curcuminoides (300 mg), vitamina C (100 mg), ácido hialurónico (100 mg), colágeno tipo II no desnaturalizado UC-II® (40 mg), piperina (5 mg) por cápsula.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (1 con el desayuno y 1 con la cena).",
  benefits: [
    "Su enfoque principal es el confort de las articulaciones",
    "Puede acompañar una rutina para conservar la movilidad",
    "La vitamina C contribuye a formar colágeno",
    "Combina colágeno tipo II y ácido hialurónico",
    "La cúrcuma y la boswellia complementan la fórmula botánica"
  ],
  contraindications: "No recomendado durante el embarazo o lactancia. Personas alérgicas al cartílago de pollo o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con anticoagulantes o antiagregantes: ambos se usan para reducir la formación de coágulos."
},

// 103. Vinagre de Manzana (500 ml, líquido)
{
  id: 103,
  code: "7503025069890",
  name: "VINAGRE DE MANZANA",
  benefitSummary: "Vinagre de manzana para variar la alimentación",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ManzanaVinagre.jpg",
  shortDesc: "Vinagre de sidra de manzana líquido, fermentado artesanal, con la 'madre' (bacterias del ácido acético, pectina y enzimas), sin azúcares añadidos.",
  ingredients: "Vinagre de sidra de manzana (ácido acético natural 5%) con la 'madre'.",
  serving: "15 ml (1 cucharada sopera)",
  timing: "Antes de las comidas principales",
  intakeInstructions: "Diluir 15 ml en un vaso de agua (200-250 ml) y beber antes de las comidas. No consumir puro.",
  benefits: [
    "Aporta el sabor ácido característico del vinagre de manzana",
    "Se puede integrar a aderezos y preparaciones",
    "Ofrece una opción para variar los sabores de la comida",
    "Se estudia su relación con la respuesta de glucosa después de comer",
    "Complementa hábitos de alimentación dentro de un plan equilibrado"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, reflujo severo, gastritis crónica, o bajo tratamiento con antidiabéticos, diuréticos ahorradores de potasio o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para controlar el azúcar, eliminar líquidos o evitar coágulos."
},

// 104. Vinagre Sidra de Manzana (90 caps, en cápsulas con cúrcuma, jengibre, canela y pimienta negra)
{
  id: 104,
  code: "7500645000432",
  name: "VINAGRE SIDRA DE MANZANA",
  benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/VINAGRE1.jpg",
  shortDesc: "Vinagre de sidra de manzana en polvo concentrado en cápsulas, combinado con cúrcuma, jengibre, canela y pimienta negra para potenciar su acción.",
  ingredients: "Vinagre de sidra de manzana en polvo (900 mg), cúrcuma (300 mg), jengibre (180 mg), canela (115 mg), pimienta negra (5 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Permite incorporar vinagre de manzana sin su sabor ácido",
    "Incluye jengibre, canela y cúrcuma",
    "Estas especias tienen uso tradicional digestivo",
    "Aporta compuestos vegetales con actividad antioxidante",
    "Su enfoque combina alimentación y bienestar digestivo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, reflujo severo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o tratar la presión arterial."
},

// 105. VITA RX MENS (120 caps, multivitamínico y mineral para hombres)
{
  id: 105,
  code: "7500645000333",
  name: "VITA RX MENS",
  benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/VitaRX-1.jpg",
  shortDesc: "Fórmula integral para hombres con creatina, arginina, BCAA's, maca negra, ginseng, vitaminas y minerales para energía, rendimiento y vitalidad.",
  ingredients: "Creatina (120 mg), arginina (108 mg), vitamina C (90 mg), maca negra (66 mg), BCAA's (48 mg), ginseng (30 mg), vitamina K (30 mg), vitaminas B1, B2, B5, B6, B12, vitamina E, magnesio, calcio, cobre, zinc, hierro, vitamina A, biotina, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Las vitaminas B ayudan a obtener energía de los alimentos",
    "Aporta vitaminas y minerales para complementar la alimentación",
    "La vitamina C contribuye al funcionamiento de las defensas",
    "Incluye ingredientes asociados tradicionalmente con la vitalidad",
    "Está orientado a la nutrición del hombre activo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad hepática, renal o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene vitamina K, que puede cambiar el efecto de algunos medicamentos para evitar coágulos."
},

// 106. VITA RX TESTO (120 caps, fórmula para la vitalidad masculina y equilibrio hormonal)
{
  id: 106,
  code: "7500645000401",
  name: "VITA RX TESTO",
  benefitSummary: "Nutrición y vitalidad masculina",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides_0001s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica y mineral para el bienestar masculino, con Tribulus, fenogreco, maca negra, L-arginina, zinc, selenio y extractos tradicionales.",
  ingredients: "Magnesio (70 mg), Tribulus (50 mg), fenogreco (50 mg), damiana (30 mg), Cnidium (30 mg), maca negra (25 mg), L-arginina (25 mg), Mucuna Pruriens (25 mg), avena (25 mg), longjack (25 mg), semilla de calabaza (25 mg), ciruelo africano (25 mg), zinc (10 mg), selenio (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "El zinc contribuye a la función reproductiva normal",
    "El magnesio apoya el funcionamiento muscular",
    "Combina plantas de uso tradicional para la vitalidad masculina",
    "Puede acompañar una rutina de bienestar sexual",
    "Complementa el cuidado nutricional masculino"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades hepáticas, hormonales o bajo tratamiento médico (especialmente hormonales) deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con tratamientos hormonales."
},

// 107. VITA RX WOMENS (120 caps, multivitamínico y mineral para mujeres)
{
  id: 107,
  code: "7500645000326",
  name: "VITA RX WOMENS",
  benefitSummary: "Nutrición para piel, cabello y cuidado femenino",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/2VitaRX.jpg",
  shortDesc: "Fórmula completa para mujeres con colágeno, maca amarilla, arándano, ácido hialurónico, vitaminas y minerales para la salud de la piel, cabello, uñas y bienestar general.",
  ingredients: "Colágeno (150 mg), maca amarilla (100 mg), arándano (75 mg), vitamina C (60 mg), semilla de uva (35 mg), vitamina E (14 mg), vitaminas B1, B2, B5, B6, ácido hialurónico, calcio, magnesio, zinc, cobre, hierro, vitamina A, biotina, vitamina K, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "La biotina contribuye al mantenimiento de piel y cabello",
    "La vitamina C ayuda a formar colágeno",
    "Incluye vitaminas y minerales para complementar la alimentación",
    "Las vitaminas C y E aportan cuidado antioxidante",
    "Su enfoque reúne nutrición y cuidado personal femenino"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene vitamina K, que puede cambiar el efecto de algunos medicamentos para evitar coágulos."
},

// 108. Vitamina C-1000 NOW (100 caps, 1000 mg de vitamina C con bioflavonoides)
{
  id: 108,
  code: "73373900690",
  name: "VITAMINA C-1000 NOW",
  benefitSummary: "Vitamina C para defensas, colágeno y cuidado celular",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VITAMINAC-1000.jpg",
  shortDesc: "Vitamina C (ácido ascórbico) en alta concentración (1000 mg por cápsula) con complejo de bioflavonoides cítricos (100 mg) y rutina (25 mg), para apoyo inmunológico y antioxidante.",
  ingredients: "Vitamina C (como ácido ascórbico) 1000 mg, complejo de bioflavonoides cítricos 100 mg, polvo de rutina (de Sophora japonica) 25 mg por cápsula.",
  serving: "1 cápsula (aprox. 1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día.",
  benefits: [
    "La vitamina C contribuye al funcionamiento de las defensas",
    "Ayuda a formar colágeno para piel, encías y otros tejidos",
    "Favorece la absorción del hierro de alimentos vegetales",
    "Contribuye a reducir el cansancio por falta de vitamina C",
    "Ayuda al cuidado antioxidante de las células"
  ],
  contraindications: "Solo para adultos. Consultar a médico si se está embarazada o lactando, o si se toman medicamentos.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Las cantidades altas de vitamina C requieren revisión si el cliente toma medicamentos para evitar coágulos o recibe quimioterapia."
},

// 109. Vitamina D3 + Magnesio, K2 y Zinc (60 caps)
{
  id: 109,
  code: "7500645000067",
  name: "VITAMINA D3 + MAGNESIO, K2 Y ZINC",
  benefitSummary: "Nutrientes para el mantenimiento de los huesos",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/D3-1.jpg",
  shortDesc: "Fórmula sinérgica de vitamina D3, magnesio, vitamina K2, zinc y aceite de coco en polvo para la salud ósea, inmunológica y cardiovascular.",
  ingredients: "Aceite de pulpa de coco en polvo (450 mg), óxido de magnesio (200 mg, aporta 120 mg de Mg elemental), óxido de zinc (20 mg, aporta 16 mg de Zn elemental), vitamina K2 (30 mcg), vitamina D3 (10 mcg / 400 UI) por cápsula.",
  serving: "1 cápsula (1.1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "La vitamina D ayuda a absorber el calcio",
    "Las vitaminas D y K contribuyen al mantenimiento de los huesos",
    "El magnesio apoya el funcionamiento normal de los músculos",
    "El zinc contribuye al funcionamiento de las defensas",
    "Reúne varios nutrientes para el cuidado óseo y muscular"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con hipercalcemia, sarcoidosis, enfermedad renal grave o bajo tratamiento con anticoagulantes cumarínicos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La vitamina K puede cambiar el efecto de algunos medicamentos para evitar coágulos. Consultar antes de combinar."
},

// 110. Vitamina E 1000 Greenlife (60 perlas)
{
  id: 110,
  code: "7503016797535",
  name: "VITAMINA E 1000 GREENLIFE",
  benefitSummary: "Vitamina E y cuidado antioxidante",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/vitamina-e-1000-1200mg-zennaturamx-457200.webp",
  shortDesc: "Vitamina E en alta concentración (66 mg = 66 UI por perla) con aceite de germen de trigo, como antioxidante liposoluble para la protección celular y la salud de la piel.",
  ingredients: "Vitamina E (dl-alfa tocoferol acetato) 66 mg (66 UI), aceite de germen de trigo.",
  serving: "1 perla (1200 mg)",
  timing: "Durante la comida principal",
  intakeInstructions: "Tomar 1 perla al día durante la comida principal.",
  benefits: [
    "Aporta vitamina E para complementar la alimentación",
    "Ayuda a proteger las células frente al desgaste diario",
    "Complementa el cuidado antioxidante de la dieta",
    "Se presenta en una base de aceite",
    "Su enfoque es el aporte de vitamina E"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa anticoagulantes, medicamentos que ayudan a evitar coágulos. La combinación puede cambiar el efecto del tratamiento."
},

// 111. WHEY CHOCONUEZ NANOFEAR (proteína hidrolizada de suero de leche, 500 g)
{
  id: 111,
  code: "7500645001132",
  name: "WHEY CHOCONUEZ NANOFEAR",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/WHEY-PROTEIN-500-VAINILLA-CANELA1.png",
  shortDesc: "Proteína hidrolizada de suero de leche en polvo, de rápida absorción, sin grasas ni carbohidratos, con alto contenido de aminoácidos esenciales y BCAA's.",
  ingredients: "Proteína hidrolizada de suero de leche (25 g de proteína por porción).",
  serving: "35 g (1 scoop)",
  timing: "Dentro de los 45 minutos post-entreno",
  intakeInstructions: "Mezclar 35 g con 240 ml de agua y agitar. Consumir post-entreno o entre comidas.",
  benefits: [
    "Aporta proteína de suero de leche",
    "Ayuda a mantener y desarrollar los músculos",
    "Ofrece componentes que el cuerpo necesita para formar proteína",
    "Puede apoyar la recuperación después de entrenar",
    "Su sabor choconuez facilita variar los batidos"
  ],
  contraindications: "Personas con alergia a lácteos, enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 112. WHEY PROTEIN HARDER (1 kg, aislado de suero al 90% sin carbohidratos)
{
  id: 112,
  code: "7503026253731",
  name: "WHEY PROTEIN HARDER",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/WP-HARDER.png",
  shortDesc: "Aislado de suero de leche al 90% (96% de proteína por 100 g), sin carbohidratos, sin lactosa, sin edulcorantes, sin saborizantes.",
  ingredients: "Aislado de suero de leche al 90% (Microfiltración de Flujo Cruzado).",
  serving: "23 g (1 porción)",
  timing: "Post-entreno",
  intakeInstructions: "Tomar 23 g en 350 ml de agua o leche baja en grasa después del entrenamiento.",
  benefits: [
    "Aporta proteína concentrada de suero de leche",
    "Ayuda al mantenimiento y desarrollo muscular",
    "Facilita completar la proteína diaria en una bebida",
    "Puede acompañar la recuperación después del ejercicio",
    "Su fórmula sencilla permite combinarla con otros alimentos"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. Personas con intolerancia a la leche deben evitar su consumo.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 113. WPI 90 (WHEY PROTEIN ISOLATE 90, 1.02 kg)
{
  id: 113,
  code: "7503026253731",
  name: "WPI 90 (WHEY PROTEIN ISOLATE 90)",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-WHEY-PROEIN-ISOLATE-90-–1.02-KG–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Aislado de proteína de suero de leche al 90%, con 29 g de proteína por porción, menos de 1 g de grasa y 0.5 g de carbohidratos.",
  ingredients: "Aislado de proteína de suero de leche (29 g de proteína por porción).",
  serving: "34 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 240 ml de agua o bebida de su preferencia. Tomar una vez al día.",
  benefits: [
    "Aporta 29 g de proteína por porción según la ficha",
    "Ayuda a mantener y desarrollar los músculos",
    "Ofrece una opción con poca grasa y carbohidratos",
    "Facilita completar la proteína de la alimentación",
    "Puede acompañar una rutina de recuperación deportiva"
  ],
  contraindications: "Alérgicos a la proteína de leche deben evitar su consumo. Consultar a médico en caso de enfermedades renales o hepáticas.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 114. Ximo (30 caps, 450 mg, fórmula botánica con espirulina, tejocote, piña, nopal, vitaminas C y A)
{
  id: 114,
  code: "7503021404725",
  name: "XIMO",
  benefitSummary: "Ingredientes vegetales y bienestar digestivo",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Ximo-1.jpg",
  shortDesc: "Fórmula botánica y vitamínica con espirulina, raíz de tejocote, piña, nopal, vitamina C y vitamina A, para apoyo a la desintoxicación y el metabolismo.",
  ingredients: "Espirulina (140 mg), raíz de tejocote (120 mg), piña (70 mg), nopal (70 mg), vitamina C (50 mg), vitamina A (900 mcg) por cápsula.",
  serving: "1 cápsula (450 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina plantas con vitaminas A y C",
    "La vitamina C contribuye al funcionamiento de las defensas",
    "Las vitaminas de la fórmula complementan el cuidado celular",
    "Aporta ingredientes vegetales en cápsulas",
    "Puede acompañar hábitos de alimentación y actividad física"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La raíz de tejocote puede bajar el azúcar en la sangre. Revisar si el cliente usa medicamentos para la diabetes."
},

// 115. Yumel (Yumel Simila, solución oral homeopática de Guatteria gaumeri)
{
  id: 115,
  code: "7502221950681",
  name: "YUMEL SIMILA",
  benefitSummary: "Yumel: preparación tradicional por valorar",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Yumel1.webp",
  shortDesc: "Preparación homeopática en tintura madre de Guatteria gaumeri, de uso tradicional mexicano. Su eficacia clínica para cálculos o colesterol no está establecida.",
  ingredients: "Guatteria gaumeri TM (Tintura Madre) 100 ml por 100 ml.",
  serving: "20 gotas en ¼ de vaso con agua",
  timing: "Tres veces al día, antes de los alimentos",
  intakeInstructions: "Mezclar 20 gotas en un cuarto de vaso con agua natural. Tomar 3 veces al día antes de los alimentos.",
  benefits: [
    "Es una preparación tradicional de yumel en gotas",
    "El gotero facilita medir la cantidad indicada en su etiqueta",
    "Permite incorporar el extracto sin preparar la corteza",
    "Su utilidad debe valorarse según la etiqueta y la orientación profesional"
  ],
  contraindications: "Hipersensibilidad a los componentes, embarazo, lactancia, búsqueda de embarazo, menores de 15 años o enfermedad hepática. Consultar a un profesional antes de usar; evitar el uso continuo sin seguimiento.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Las combinaciones con medicamentos no están suficientemente estudiadas. Revisar con un profesional si usa tratamientos para el colesterol, medicamentos que procesa el hígado o para evitar coágulos. También consultar si tiene una cirugía programada."
},

// 116. NAC N-AcetylCysteine 500 mg ZN (60 caps, 500 mg de N-Acetilcisteína por cápsula)
{
  id: 116,
  code: "7500645000777",
  name: "NAC N-AcetylCysteine 500 mg ZN",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/NAC1.jpg",
  shortDesc: "N-Acetilcisteína (NAC) en cápsulas de 500 mg, precursor del glutatión, para la protección celular y el apoyo antioxidante.",
  ingredients: "N-Acetilcisteína (NAC) 1000 mg por porción (2 cápsulas).",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Aporta NAC, un ingrediente que el cuerpo usa para formar glutatión",
    "El glutatión participa en el cuidado antioxidante de las células",
    "Complementa la nutrición orientada al cuidado celular",
    "Su fórmula se centra en N-acetilcisteína",
    "Permite incorporar NAC en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica o bajo tratamiento con anticoagulantes, nitroglicerina o medicamentos que afectan la función hepática deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para evitar coágulos o con nitroglicerina, utilizada para algunos problemas del corazón."
},

// 117. NAD + Resveratrol (90 caps, 300 mg de NAD, 50 mg de resveratrol, 50 mg de acai)
{
  id: 117,
  code: "7500645000869",
  name: "NAD + Resveratrol",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2024/02/nad.jpg",
  shortDesc: "Combinación de NAD (nicotinamida adenina dinucleótido), resveratrol y baya de acai, para el soporte de la energía celular, la longevidad y la protección antioxidante.",
  ingredients: "NAD (300 mg), estearato de magnesio (100 mg), resveratrol (50 mg), baya de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina NAD con resveratrol y acai",
    "El NAD participa en procesos normales de uso de energía",
    "El resveratrol y el acai aportan compuestos antioxidantes",
    "Su enfoque es complementar el cuidado celular",
    "Reúne los ingredientes en una sola presentación"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes, antidiabéticos o medicamentos que afectan la presión arterial deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El resveratrol puede cambiar la forma en que el cuerpo procesa algunos medicamentos a través del hígado. Si el cliente sigue un tratamiento, revisar la combinación con su médico o farmacéutico."
},

// 118. NEEM CON NOPAL (9 caps, 3 porciones, combina neem, nopal y ácido alfa lipoico)
{
  id: 118,
  code: "7503025069593",
  name: "NEEM CON NOPAL",
  benefitSummary: "Apoyo nutricional al bienestar metabólico",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides_0008s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula sinérgica con neem, nopal y ácido alfa lipoico, para apoyo a la desintoxicación, el control glucémico y la protección celular.",
  ingredients: "Neem (750 mg), nopal (600 mg), ácido alfa lipoico (150 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Combina neem, nopal y ácido alfa lipoico",
    "Aporta ingredientes vegetales para complementar la alimentación",
    "El ácido alfa lipoico participa en el cuidado antioxidante",
    "Tiene un enfoque de bienestar digestivo y metabólico",
    "Permite incorporar la mezcla en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática grave, o bajo tratamiento con antidiabéticos, antihipertensivos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "No usar durante el embarazo: la ficha advierte que el neem puede provocar la pérdida del embarazo."
},

// 119. NMN Advanced Resveratrol 550 mg ZN (30 caps, NMN, resveratrol, astrágalo, quercetina, piperina)
{
  id: 119,
  code: "7500645001354",
  name: "NMN ADVANCED RESVERATROL",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/09/NMN-1.png",
  shortDesc: "Fórmula avanzada de NMN (β-Nicotinamida mononucleótido) con trans-resveratrol, astrágalo, quercetina y pimienta negra, para la vitalidad celular y el envejecimiento saludable.",
  ingredients: "β-Nicotinamida mononucleótido (NMN) 300 mg, trans-resveratrol 100 mg, astrágalo 100 mg, quercetina 45 mg, extracto de pimienta negra 5 mg por cápsula.",
  serving: "1 cápsula (550 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina NMN con resveratrol y otros ingredientes vegetales",
    "El NMN participa en rutas relacionadas con el NAD del cuerpo",
    "El resveratrol y la quercetina aportan compuestos antioxidantes",
    "Su enfoque es el cuidado nutricional de las células",
    "Permite incorporar estos ingredientes en una sola fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de usar si el cliente tiene una enfermedad del hígado o de los riñones. Respetar la porción indicada."
},

// 120. OMEGA 3 NANO FEAR (90 softgels, aceite de salmón concentrado con EPA 1198.8 mg y DHA 601.2 mg por porción)
{
  id: 120,
  code: "7503016797849",
  name: "OMEGA 3 NANO FEAR",
  benefitSummary: "Complemento nutricional para el cuidado del corazón",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Omega-Nano.png",
  shortDesc: "Aceite de salmón concentrado en softgels, con alto contenido de EPA (1198.8 mg) y DHA (601.2 mg) por porción, y vitamina E como antioxidante.",
  ingredients: "Aceite de salmón concentrado (Omega 3 total 2998.8 mg: EPA 1198.8 mg, DHA 601.2 mg), vitamina E (α-tocoferol) 100.8 mg por porción.",
  serving: "3 softgels (3.6 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 softgels al día con alimentos.",
  benefits: [
    "Aporta omega 3 de pescado",
    "El EPA y el DHA complementan el cuidado del corazón",
    "El DHA es importante para el cerebro",
    "El DHA también forma parte de la retina de los ojos",
    "Incluye vitamina E como ingrediente antioxidante"
  ],
  contraindications: "Personas con trastornos hemorrágicos, en tratamiento anticoagulante, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede hacer que un sangrado tarde más en detenerse si se combina con medicamentos para evitar coágulos."
},

// 122. OMEGA 3 SALMON OIL 1g ZN (120 caps, aceite de salmón con EPA 180 mg y DHA 150 mg por cápsula)
{
  id: 122,
  code: "7500645000036",
  name: "OMEGA 3 SALMON OIL",
  benefitSummary: "Complemento nutricional para el cuidado del corazón",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/OMEGA3-1.jpg",
  shortDesc: "Aceite de salmón en cápsulas de 1 g, con EPA (180 mg), DHA (150 mg) y vitamina E, para el mantenimiento de la salud cardiovascular, cerebral y ocular.",
  ingredients: "Aceite de salmón (1000 mg), vitamina E (150 mg), EPA (180 mg), DHA (150 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Permite incorporar aceite de salmón en cápsulas",
    "Aporta EPA y DHA, dos tipos de omega 3",
    "Complementa el cuidado nutricional del corazón",
    "El DHA forma parte del cerebro y los ojos",
    "Incluye vitamina E en la fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al pescado, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede hacer que un sangrado tarde más en detenerse si se combina con medicamentos para evitar coágulos."
},

// 123. OMEGA NORDIC 3000 (90 caps, aceite de pescado concentrado EPAX® con EPA 900 mg y DHA 600 mg por porción)
{
  id: 123,
  code: "7500645001644",
  name: "OMEGA NORDIC 3000",
  benefitSummary: "Complemento nutricional para el cuidado del corazón",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ZN-%E2%80%93-UOMEGA-NORDIC-3000-90-CAPS%E2%80%93-RENDER%E2%80%93-V1%E2%80%93-MAYO2026.jpeg",
  shortDesc: "Aceite de pescado concentrado EPAX® con 3000 mg de aceite por porción, aportando 900 mg de EPA y 600 mg de DHA, de alta pureza.",
  ingredients: "Aceite de pescado concentrado EPAX® (3000 mg), EPA (900 mg), DHA (600 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Con desayuno rico en grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con el desayuno.",
  benefits: [
    "Aporta aceite de pescado concentrado",
    "Ofrece EPA y DHA para complementar la alimentación",
    "Los omega 3 participan en el funcionamiento normal del corazón",
    "El DHA es un componente importante del cerebro",
    "Permite incorporar grasas marinas sin preparar pescado"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al pescado, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede hacer que un sangrado tarde más en detenerse si se combina con medicamentos para evitar coágulos."
},

// 124. ON-C-LEN 750 mg (60 tabletas, fórmula botánica con diente de león, guanábana, shiitake, reishi, té verde, jengibre, ajo, polen)
{
  id: 124,
  code: "7500645000807",
  name: "ON-C-LEN",
  benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica con extractos de diente de león, guanábana, hongos shiitake y reishi, té verde, jengibre, ajo y polen de flores, para el fortalecimiento de las defensas naturales.",
  ingredients: "Extractos de diente de león, guanábana, shiitake, reishi, té verde, jengibre, ajo, polen de flores (cantidades no especificadas).",
  serving: "2 tabletas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 tabletas al día con alimentos.",
  benefits: [
    "Combina hongos y plantas de uso tradicional",
    "Incluye shiitake y reishi",
    "El té verde, el jengibre y el ajo aportan compuestos antioxidantes",
    "Su enfoque es complementar el bienestar general",
    "Reúne varios ingredientes vegetales en tabletas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (polen) o a alguno de los componentes, o bajo tratamiento con anticoagulantes, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El polen puede causar una reacción alérgica en personas sensibles. Revisar si el cliente tiene alergia a productos de polen."
},

// 125. PÉPTIDOS COLÁGENO HIDROLIZADO (1 kg, polvo de colágeno hidrolizado bovino puro)
{
  id: 125,
  code: "7500645000296",
  name: "PÉPTIDOS COLÁGENO HIDROLIZADO",
  benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/PeptidosColagenoHidrolizado.jpg",
  shortDesc: "Polvo de péptidos de colágeno hidrolizado bovino de alta pureza, sin grasas ni azúcares, para la salud de la piel, articulaciones y tejido conectivo.",
  ingredients: "Péptidos de colágeno hidrolizado bovino 100%.",
  serving: "10 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 10 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Aporta proteína de colágeno para complementar la alimentación",
    "Ofrece componentes que el cuerpo utiliza para mantener tejidos",
    "Puede apoyar la hidratación y elasticidad de la piel",
    "Complementa el cuidado de las articulaciones",
    "Su polvo se puede incorporar a distintas bebidas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la proteína bovina o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Si el cliente tiene problemas de riñón, su médico debe valorar la cantidad de proteína que puede consumir. Evitar exceder la porción indicada."
},

// 126. PÉPTIDOS DE COLÁGENO HIDROLIZADO + ÁCIDO HIALURÓNICO (990 g, colágeno + ácido hialurónico)
{
  id: 126,
  code: "7500645000302",
  name: "PÉPTIDOS DE COLÁGENO HIDROLIZADO + ÁCIDO HIALURÓNICO",
  benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ColagenoHidrolizado.jpg",
  shortDesc: "Polvo de péptidos de colágeno hidrolizado bovino (10.5 g) con ácido hialurónico (500 mg) por porción, para la hidratación y elasticidad de la piel y la salud articular.",
  ingredients: "Péptidos de colágeno hidrolizado bovino (10.5 g), ácido hialurónico (500 mg) por porción.",
  serving: "11 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 11 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Combina colágeno con ácido hialurónico",
    "Puede apoyar la hidratación y elasticidad de la piel",
    "Aporta proteína para complementar la alimentación",
    "Complementa el cuidado de las articulaciones",
    "Permite incorporar ambos ingredientes en una bebida"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la proteína bovina o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Si el cliente tiene problemas de riñón, su médico debe valorar la cantidad de proteína que puede consumir. Evitar exceder la porción indicada."
},

// 127. PETALOS DE ROSA CON VIT C (90 caps, 1000 mg, con vitamina C, zinc, cromo, rosa y naranja)
{
  id: 127,
  code: "7503029679378",
  name: "PETALOS DE ROSA CON VIT C",
  benefitSummary: "Vitamina C para defensas, colágeno y cuidado celular",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/petalos-de-rosa-1.jpg",
  shortDesc: "Fórmula con pétalos de rosa, naranja, vitamina C (300 mg), zinc (10 mg) y cromo (22 µg) para la protección celular, la función inmunológica y la salud de la piel.",
  ingredients: "Vitamina C (300 mg), zinc (10 mg), cromo (22 µg), polvo de fruto de naranja, polvo de pétalos de rosa por cápsula.",
  serving: "1 cápsula (1000 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "La vitamina C contribuye al funcionamiento de las defensas",
    "Ayuda a formar colágeno para mantener los tejidos",
    "El zinc contribuye al cuidado normal de la piel",
    "El cromo participa en el manejo normal de la glucosa",
    "La rosa y la naranja complementan el aporte vegetal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal, trastornos de la tiroides o bajo tratamiento con antidiabéticos, anticoagulantes o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El cromo puede cambiar el efecto de medicamentos para controlar el azúcar. Consultar antes de combinarlos."
},

// 128. POTASSIUM DUAL COMPLEX (90 caps, citrato y cloruro de potasio, magnesio, calcio, vitamina B6 e inulina)
{
  id: 128,
  code: "7500645001477",
  name: "POTASSIUM DUAL COMPLEX",
  benefitSummary: "Potasio para músculos y equilibrio de minerales",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Potassium-Dual1.jpg",
  shortDesc: "Complejo de potasio dual (citrato y cloruro) con 500 mg de potasio elemental por porción, magnesio, calcio, vitamina B6 e inulina, para el equilibrio electrolítico y la función neuromuscular.",
  ingredients: "Citrato de potasio (1400 mg), cloruro de potasio (150 mg), potasio elemental (500 mg), citrato de magnesio (200 mg), citrato de calcio (200 mg), calcio elemental (40 mg), cloro (75 mg), vitamina B6 (2 mg), inulina de raíz de achicoria (100 mg) por porción.",
  serving: "3 cápsulas (2.05 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Aporta potasio para el funcionamiento de los músculos",
    "Participa en la comunicación entre nervios y músculos",
    "Contribuye al equilibrio de agua y minerales del cuerpo",
    "El magnesio complementa el cuidado muscular",
    "Reúne potasio, calcio y magnesio en una sola fórmula"
  ],
  contraindications: "Personas con alteraciones renales severas o uso de diuréticos ahorradores de potasio deben consultar a su médico antes de consumirlo.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma ciertos medicamentos para la presión o para eliminar líquidos que pueden aumentar el potasio. El médico o farmacéutico debe revisar la combinación."
},

// 129. Probióticos 60 Billones 500MG (60 caps, 60 billones UFC con L. acidophilus, L. sporogenes, L. rhamnosus e inulina)
{
  id: 129,
  code: "7503029679729",
  name: "PROBIOTICOS 60 BILLONES 500MG",
  benefitSummary: "Probióticos para complementar el equilibrio intestinal",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/pro.jpg",
  shortDesc: "Probióticos de alta concentración (60 billones UFC por cápsula) con tres cepas (L. acidophilus, L. sporogenes, L. rhamnosus) e inulina de agave, para el equilibrio de la microbiota intestinal.",
  ingredients: "Lactobacillus acidophilus (48.67 billones UFC, 365 mg), Lactobacillus sporogenes (8 billones UFC, 60 mg), Lactobacillus rhamnosus (3.33 billones UFC, 60 mg), inulina de agave (20 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Aporta bacterias utilizadas para complementar el equilibrio intestinal",
    "Se utiliza como apoyo al bienestar digestivo",
    "La inulina sirve de alimento a ciertas bacterias del intestino",
    "Permite incorporar probióticos en cápsulas",
    "Su utilidad depende de las bacterias incluidas y de cada persona"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de usar si el cliente toma medicamentos que disminuyen la actividad de las defensas, como algunos tratamientos después de un trasplante."
},

// 130. PROBIOTICOS 60 BILLONES MUJERES ZN (60 caps, 60 billones UFC con probióticos, vitamina C, arándano rojo e inulina)
{
  id: 130,
  code: "7500645001057",
  name: "PROBIOTICOS 60 BILLONES MUJERES ZN",
  benefitSummary: "Probióticos para complementar el equilibrio intestinal",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0009s_0002_Presentacion-blanco-1.jpg",
  shortDesc: "Probióticos de alta concentración (60 billones UFC) con vitamina C, arándano rojo e inulina, diseñados para el bienestar digestivo e inmunológico de la mujer.",
  ingredients: "Mezcla probiótica (60 billones UFC, 925 mg), vitamina C (55 mg), arándano rojo en polvo (10 mg), inulina de achicoria (10 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Combina probióticos con vitamina C y arándano",
    "Los probióticos se utilizan como apoyo al equilibrio intestinal",
    "La vitamina C contribuye al funcionamiento de las defensas",
    "El arándano complementa el enfoque de bienestar femenino",
    "Reúne ingredientes digestivos y nutricionales en una sola fórmula"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de usar si el cliente toma medicamentos que disminuyen la actividad de las defensas, como algunos tratamientos después de un trasplante."
},

// 131. Probióticos 100 Billones 500MG ZN (60 caps, 100 billones UFC con 7 cepas e inulina)
{
  id: 131,
  code: "7500645000449",
  name: "Probióticos 100 Billones 500MG ZN",
  benefitSummary: "Probióticos para complementar el equilibrio intestinal",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/probioticos-2.jpg",
  shortDesc: "Probióticos de ultra alta concentración (100 billones UFC) con 7 cepas (Bifidobacterium, Lactobacillus, Streptococcus thermophilus) e inulina de agave, en cápsulas de liberación retardada.",
  ingredients: "Bifidobacterium longum ssp. Longum SP 54 (25 billones UFC, 61.3 mg), Bifidobacterium longum ssp. Infantis SP 37 (25 billones UFC, 61.3 mg), Lactobacillus acidophilus LA3 (25 billones UFC, 61.3 mg), Lactobacillus delbrueckii ssp. Bulgaricus SP 96 (25 billones UFC, 61.3 mg), Lactobacillus casei BGP 93 (25 billones UFC, 61.3 mg), Lactobacillus plantarum BG 112 (25 billones UFC, 61.3 mg), Streptococcus thermophilus SP 4 (25 billones UFC, 61.3 mg), inulina de agave (10 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Combina distintos tipos de bacterias usadas como probióticos",
    "Se utiliza para complementar el equilibrio intestinal",
    "Puede acompañar el bienestar digestivo según cada persona",
    "Incluye inulina, una fibra que alimenta ciertas bacterias intestinales",
    "Permite incorporar la mezcla en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de usar si el cliente toma medicamentos que disminuyen la actividad de las defensas, como algunos tratamientos después de un trasplante."
},

// 132. PROBITY 30 caps 600 mg (fórmula multibotánica con acetil L-carnitina, té verde, chá de bugre, vinagre de manzana, etc.)
{
  id: 132,
  code: "7503021404060",
  name: "PROBITY",
  benefitSummary: "Complemento de alimentación y actividad física",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-PROBITY-RENDER-V2-AGOSTO2026.jpeg",
  shortDesc: "Fórmula multibotánica con acetil L-carnitina, té verde, chá de bugre, vinagre de manzana, alcachofa, papaína, ciruela pasa, jamaica, lúpulo, espirulina y cromo, para el metabolismo energético y el bienestar general.",
  ingredients: "Acetil L-carnitina, extracto de té verde, chá de bugre, vinagre de manzana, alcachofa, papaína, ciruela pasa, jamaica, lúpulo, espirulina, cromo (cantidades no especificadas).",
  serving: "1 cápsula (750 mg, aunque el nombre indica 600 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina plantas, carnitina y una enzima digestiva",
    "La papaína ayuda a descomponer proteínas durante la digestión",
    "El té verde aporta compuestos antioxidantes",
    "El cromo contribuye al manejo normal de la glucosa",
    "Su enfoque combina bienestar digestivo y cuidado metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, trastornos de coagulación o bajo tratamiento con antidiabéticos, antihipertensivos, anticoagulantes o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene cafeína del té verde. Puede aumentar el efecto de otros estimulantes."
},

// 133. ProHiman (30 caps, 200 mg, con raíz de lima, linaza, malva, omegas 3,6,9, lecitina de soya)
{
  id: 133,
  code: "7503016797863",
  name: "PROHIMAN",
  benefitSummary: "Fibra y complemento del bienestar intestinal",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ProHiman.jpg",
  shortDesc: "Fórmula con raíz de lima, linaza, malva, complejo de omegas 3,6,9 y lecitina de soya, para el confort digestivo y el metabolismo.",
  ingredients: "Raíz de lima, linaza, malva, complejo de omegas 3,6,9, lecitina de soya (cantidades no especificadas).",
  serving: "1 cápsula (200 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina linaza, malva y otros ingredientes",
    "Tiene un enfoque de confort digestivo",
    "Incluye grasas omega 3, 6 y 9",
    "La lecitina complementa el aporte de grasas de la fórmula",
    "Permite incorporar la mezcla en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la soya o a la linaza, con obstrucción intestinal o bajo tratamiento anticoagulante deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha advierte que la vitamina K de la linaza puede cambiar el efecto de medicamentos para evitar coágulos. Revisar la combinación antes de usar."
},

// 134. PROTEÍNA VEGANA EN POLVO SABOR CACAO HABITS (488 g, proteína de chícharo y arroz, BCAA, probióticos)
{
  id: 134,
  code: "7501468148738",
  name: "PROTEÍNA VEGANA EN POLVO SABOR CACAO HABITS",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/7501468148738_1.webp",
  shortDesc: "Proteína vegana en polvo sabor cacao, a base de chícharo y arroz integral, con 22.3 g de proteína, 6 g de BCAA's y 610 millones de UFC de probióticos por porción.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), cacao en polvo por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Aporta proteína vegetal de chícharo y arroz",
    "Ayuda a mantener y desarrollar los músculos",
    "Facilita completar la proteína de la alimentación",
    "Incluye probióticos como complemento digestivo",
    "Su sabor cacao permite variar los batidos sin usar proteína láctea"
  ],
  contraindications: "Personas con condiciones médicas preexistentes, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 135. PROTEÍNA VEGANA VAINILLA HABITS (488 g, proteína de chícharo y arroz, BCAA, probióticos, vainilla)
{
  id: 135,
  code: "7501468148721",
  name: "PROTEÍNA VEGANA VAINILLA HABITS",
  benefitSummary: "Proteína para músculos y recuperación",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/habitsvainilla1.webp",
  shortDesc: "Proteína vegana en polvo sabor vainilla, a base de chícharo y arroz integral, con 22.3 g de proteína, 6 g de BCAA's y 610 millones de UFC de probióticos por porción.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), extracto natural de vainilla y stevia por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Aporta proteína vegetal de chícharo y arroz",
    "Ayuda al mantenimiento de la masa muscular",
    "Puede acompañar la recuperación después del ejercicio",
    "Incluye probióticos como parte de la fórmula",
    "Su sabor vainilla facilita combinarla con frutas y bebidas"
  ],
  contraindications: "Personas con condiciones médicas preexistentes, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 136. Q10 (Coenzima Q10, 30 caps, con baya dorada, vitamina B6)
{
  id: 136,
  code: "7503021404879",
  name: "Q10 (Coenzima Q10)",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/05/COENZIMA-Q10.png",
  shortDesc: "Coenzima Q10 (120 mg) con baya dorada (200 mg) y vitamina B6 (10 mg) para el apoyo a la energía celular y la función cardiovascular.",
  ingredients: "Baya dorada (200 mg), coenzima Q10 (120 mg), harina de arroz (120 mg), vitamina B6 (10 mg), silicato de calcio (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "La coenzima Q10 participa en la producción de energía de las células",
    "Aporta ingredientes con actividad antioxidante",
    "La vitamina B6 ayuda a aprovechar la energía de los alimentos",
    "Se utiliza como complemento del cuidado cardiovascular",
    "Combina Q10, una vitamina y un ingrediente vegetal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes o hipotensores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para evitar coágulos o bajar la presión arterial."
},

// 137. Raíz de Shatavari + Schisandra 1000 mg ZN (60 caps, shatavari, schisandra, jalea real)
{
  id: 137,
  code: "7500645000845",
  name: "RAÍZ DE SHATAVARI * SCHISANDRA 1000 mg ZN",
  benefitSummary: "Bienestar femenino y cambios de etapa",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RAIZ-SHATAVARI1-2.jpg",
  shortDesc: "Fórmula adaptógena con raíz de shatavari (500 mg), schisandra (350 mg) y jalea real (50 mg), para el equilibrio hormonal, la vitalidad y la adaptación al estrés.",
  ingredients: "Polvo de raíz de shatavari (500 mg), polvo de fruto de schisandra (350 mg), jalea real en polvo (50 mg), estearato de magnesio (100 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina shatavari, schisandra y jalea real",
    "Tiene uso tradicional como apoyo a la vitalidad",
    "Su enfoque es el bienestar femenino",
    "La schisandra se utiliza tradicionalmente en etapas de demanda",
    "Permite incorporar los ingredientes en una sola presentación"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (jalea real), trastornos hormonales sensibles o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, controlar el azúcar o disminuir la actividad de las defensas, como los usados después de un trasplante."
},

// 138. RESVERATROL 500 mg ZN (120 caps, resveratrol, semilla de uva, vitamina C, acai)
{
  id: 138,
  code: "7500645000760",
  name: "RESVERATROL 500 mg ZN",
  benefitSummary: "Cuidado antioxidante de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RESVERATROL1.jpg",
  shortDesc: "Fórmula antioxidante con resveratrol (250 mg), extracto de semilla de uva (150 mg), vitamina C (50 mg) y acai (50 mg), para la protección celular y la salud cardiovascular.",
  ingredients: "Resveratrol (250 mg), extracto de semilla de uva (150 mg), vitamina C (50 mg), extracto de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina resveratrol, semilla de uva, acai y vitamina C",
    "Aporta compuestos antioxidantes de distintos orígenes",
    "La vitamina C contribuye a proteger las células",
    "Complementa el cuidado nutricional del corazón",
    "Su enfoque es el cuidado celular cotidiano"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antiagregantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El resveratrol puede cambiar la forma en que el cuerpo procesa algunos medicamentos a través del hígado. Si el cliente sigue un tratamiento, revisar la combinación con su médico o farmacéutico."
},

// 139. Rinichi (90 caps, 500 mg, palo azul, cola de caballo, cabellos de elote, zinc, selenio)
{
  id: 139,
  code: "7503021404541",
  name: "RINICHI",
  benefitSummary: "Bienestar urinario y plantas de uso tradicional",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/rinichi.jpg",
  shortDesc: "Fórmula tradicional con palo azul, cola de caballo, cabellos de elote, zinc y selenio para el apoyo a la función renal y del tracto urinario.",
  ingredients: "Palo azul, cola de caballo, cabellos de elote (estimado 300 mg cada uno), zinc (~10 mg), selenio (~55 µg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos. Mantener hidratación adecuada.",
  benefits: [
    "Combina plantas de uso tradicional para el bienestar urinario",
    "Incluye palo azul, cola de caballo y cabellos de elote",
    "Se utiliza tradicionalmente para acompañar la eliminación de líquidos",
    "El zinc y el selenio complementan el cuidado antioxidante",
    "Reúne la mezcla de plantas en cápsulas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal crónica, insuficiencia cardíaca, hipertensión no controlada o bajo tratamiento con diuréticos, litio o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para eliminar líquidos o tratar la presión arterial."
},

// 140. Sábila con Nopal y Cuachalalate 1L (PROSA, líquido)
{
  id: 140,
  code: "7501734422104",
  name: "SÁBILA CON NOPAL Y CUACHALALATE 1L",
  benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Sabila_NopalyCuachalalate1.webp",
  shortDesc: "Suplemento líquido con sábila, nopal, cuachalalate y vitamina C, sin aloína, para el bienestar digestivo y el apoyo a la función inmunológica.",
  ingredients: "Agua purificada, pulpa de sábila, pulpa de nopal, corteza de cuachalalate, ácido cítrico, ácido ascórbico (vitamina C), benzoato de sodio. Sin aloína.",
  serving: "30 ml (3 veces al día)",
  timing: "Antes de cada alimento",
  intakeInstructions: "Tomar 30 ml 3 veces al día, antes de cada alimento. Agitar antes de usar. Refrigerar después de abrir.",
  benefits: [
    "Combina sábila, nopal y cuachalalate en una bebida",
    "Tiene un enfoque de bienestar digestivo tradicional",
    "La vitamina C contribuye al cuidado antioxidante",
    "Permite incorporar los ingredientes sin preparar las plantas",
    "Ofrece una alternativa líquida a las cápsulas"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 141. SDOMACHUS 500 mg (60 caps, fórmula digestiva con aloe vera, cardamomo, jengibre, agave, magnesio, B6, colpachi, B12, zinc, selenio)
{
  id: 141,
  code: "7503021404572",
  name: "SDOMACHUS 500 mg",
  benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/SDOMACHUS.jpg",
  shortDesc: "Fórmula botánica y mineral para el bienestar digestivo con aloe vera, cardamomo, jengibre, agave, magnesio, vitamina B6, colpachi, B12, zinc y selenio.",
  ingredients: "Aloe vera (500 mg), cardamomo (500 mg), jengibre (250 mg), agave azul (100 mg), magnesio (100 mg), vitamina B6 (10 mg), colpachi, vitamina B12, zinc, selenio por porción.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Combina ingredientes orientados al confort del estómago",
    "El jengibre y el cardamomo tienen uso tradicional digestivo",
    "La fibra de agave complementa el aporte intestinal",
    "Las vitaminas B ayudan a obtener energía de los alimentos",
    "Los minerales de la fórmula complementan la nutrición"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos, diuréticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Las cantidades altas de sábila pueden acelerar las evacuaciones o causar diarrea."
},

// 142. Selenio 90 tabs 100 mcg (PRONACEN, selenio en levadura)
{
  id: 142,
  code: "7503000733686",
  name: "SELENIO PRONACEN",
  benefitSummary: "Minerales para defensas y cuidado celular",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SELENIO.webp",
  shortDesc: "Suplemento de selenio en levadura (100 mcg por tableta), con alta biodisponibilidad, para la protección celular y la función inmunológica y tiroidea.",
  ingredients: "Levadura de selenio (aporta 100 mcg de selenio por tableta), estearato de magnesio, celulosa microcristalina, fosfato dibásico de calcio.",
  serving: "1 tableta (500 mg)",
  timing: "Una vez al día",
  intakeInstructions: "Tomar una tableta al día.",
  benefits: [
    "El selenio contribuye al funcionamiento de las defensas",
    "Participa en el funcionamiento normal de la tiroides",
    "Ayuda al cuidado antioxidante de las células",
    "Contribuye al mantenimiento normal de cabello y uñas",
    "Aporta selenio a partir de levadura"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 143. Shilajit & Tongkat Ali Blend (60 caps, shilajit, tongkat ali, maca, tribulus, zinc, B6, D3)
{
  id: 143,
  code: "7500645001002",
  name: "SHILAJIT & TONGKAT ALI BLEND",
  benefitSummary: "Nutrición y vitalidad masculina",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/SHILAJIT1.jpg",
  shortDesc: "Fórmula para la vitalidad masculina con shilajit, tongkat ali, maca, tribulus terrestris, zinc, vitamina B6 y D3, para el equilibrio hormonal y la energía.",
  ingredients: "Shilajit (300 mg), tongkat ali (300 mg), maca (300 mg), tribulus terrestris (279 mg), vitamina B6 (10 mg), zinc (10 mg), vitamina D3 (10 mcg) por porción.",
  serving: "2 cápsulas (1.2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Combina plantas usadas tradicionalmente para la vitalidad",
    "El zinc contribuye a la función reproductiva normal",
    "La vitamina B6 ayuda a aprovechar la energía de los alimentos",
    "La vitamina D contribuye al funcionamiento muscular",
    "Complementa el cuidado nutricional masculino"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a algún componente, trastornos hepáticos o renales, o bajo tratamiento con hormonas, anticoagulantes o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha advierte que el shilajit sin purificar puede contener metales pesados. Verificar la calidad y el origen del producto."
},

// 144. SIMILAXOL (50 tabletas, laxante homeopático con fenolftaleína amarilla SM)
{
  id: 144,
  code: "75020286",
  name: "SIMILAXOL",
  benefitSummary: "Revisar fórmula y seguridad antes de recomendar",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SIMILAXOL.webp",
  shortDesc: "Medicamento homeopático laxante a base de fenolftaleína amarilla SM (100 mg por tableta), para el alivio del estreñimiento ocasional.",
  ingredients: "Fenolftaleína amarilla SM 100 mg por tableta.",
  serving: "1-2 tabletas (según indicación)",
  timing: "Por la noche al acostarse",
  intakeInstructions: "Tomar 1-2 tabletas por la noche al acostarse. No usar por más de una semana.",
  benefits: [
    "La ficha lo presenta como un producto para estreñimiento ocasional",
    "Su uso busca facilitar la evacuación",
    "La elección del producto depende de su etiqueta vigente",
    "La fórmula requiere valoración profesional antes de recomendarse"
  ],
  contraindications: "No administrar en casos de dolor abdominal agudo, diarrea, embarazo, lactancia, o en menores de 5 años sin prescripción médica.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El uso prolongado puede hacer que el intestino dependa del producto para evacuar. La fórmula también requiere revisión profesional antes de recomendarse."
},

// 145. SOY LECITHIN + CHOLINE (30 caps, lecitina de soya 1200 mg, colina bitartrato 100 mg, jengibre, inulina)
{
  id: 145,
  code: "7500645001484",
  name: "SOY LECITHIN + CHOLINE",
  benefitSummary: "Colina para el funcionamiento normal del hígado",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/SOY-LECITIN1.jpg",
  shortDesc: "Suplemento de lecitina de soya (1200 mg) y colina bitartrato (100 mg) con jengibre e inulina, para el metabolismo lipídico y la función hepática.",
  ingredients: "Lecitina de soya (1200 mg), colina bitartrato (100 mg), jengibre en polvo (50 mg), inulina de agave c.s.p. por porción.",
  serving: "2 cápsulas (1.3 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "La colina participa en el funcionamiento normal del hígado",
    "Ayuda al cuerpo a utilizar las grasas de los alimentos",
    "La lecitina aporta componentes de las células",
    "El jengibre complementa el enfoque digestivo",
    "La inulina añade fibra a la fórmula"
  ],
  contraindications: "Personas con alergia a la soya no deben consumir este producto. Mujeres embarazadas o en lactancia deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 146. Té Piñalim (30 sobres de 3 g, piña, linaza, té verde, té rojo, té blanco)
{
  id: 146,
  code: "7502217902526",
  name: "TÉ PIÑALIM (Infusión)",
  benefitSummary: "Piña, linaza y té en una infusión",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Pinalimte1.webp",
  shortDesc: "Infusión herbal con piña, linaza, té verde, té rojo y té blanco, orgánica y kosher, para el bienestar digestivo y antioxidante.",
  ingredients: "Pulpa de piña (20%), linaza (20%), té verde (20%), té rojo (20%), té blanco (20%).",
  serving: "1 sobre (3 g) en 200 ml de agua caliente",
  timing: "Preferentemente por la noche",
  intakeInstructions: "Colocar un sobre en agua caliente (65°C), esperar 3-5 minutos, endulzar al gusto. Tomar una taza al día.",
  benefits: [
    "Combina piña, linaza y tres tipos de té",
    "Aporta compuestos antioxidantes propios del té",
    "Ofrece una bebida para acompañar la rutina después de comer",
    "Permite variar el sabor de las bebidas cotidianas",
    "Los sobres facilitan preparar una taza"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La ficha no reporta combinaciones problemáticas importantes. Si el cliente toma medicamentos, conviene revisar la combinación con su médico o farmacéutico."
},

// 147. Tiamina 3000 Alexyac (100 tabletas, fórmula premium con tiamina, cafeína, guaraná, jalea real, polen, etc.)
{
  id: 147,
  code: "7503024065572",
  name: "TIAMINA 3000 ALEXYAC",
  benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TIAMINA-ALEXYAC.webp",
  shortDesc: "Fórmula premium con vitamina B1 (tiamina), vitamina E, ácido fólico, CoQ10, cafeína, guaraná, jalea real, polen, lecitina de soya, miel y minerales.",
  ingredients: "Vitamina B1 (tiamina), vitamina E, ácido fólico, CoQ10, cafeína, jalea real, polen de flores, lecitina de soya, miel de abeja, guaraná, gluconato de calcio, sulfato de magnesio.",
  serving: "1-2 tabletas (500 mg c/u)",
  timing: "Según indicación",
  intakeInstructions: "Tomar de 1 a 2 tabletas al día.",
  benefits: [
    "La vitamina B1 ayuda a aprovechar los alimentos para producir energía",
    "La cafeína y el guaraná ayudan a mantenerse alerta",
    "El ácido fólico participa en la formación normal de la sangre",
    "La vitamina E complementa el cuidado antioxidante",
    "Está orientado a complementar la vitalidad y la nutrición"
  ],
  contraindications: "No se use durante el embarazo y lactancia. Contiene cafeína y guaraná, evitar en personas sensibles. Consultar a médico si se tiene intolerancia a los ingredientes.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "La cafeína puede aumentar el efecto de otros estimulantes y cambiar el de algunos medicamentos. Revisar la combinación si el cliente sigue un tratamiento."
},

// 148. TO ADZEN / HIERBA DE SAPO 500 mg (90 caps, hierba del sapo en polvo)
{
  id: 148,
  code: "7503026253892",
  name: "TO ADZEN / HIERBA DE SAPO 500 mg",
  benefitSummary: "Hierba del sapo y uso tradicional digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0006s_0002_Presentacion-blanco.jpg",
  shortDesc: "Suplemento de hierba del sapo (Eryngium carlinae) en polvo, planta tradicional mexicana para el apoyo digestivo, diurético y metabólico.",
  ingredients: "Hierba del Sapo (Eryngium carlinae) en polvo 100% (1.5 g por porción).",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Aporta hierba del sapo en cápsulas",
    "Tiene uso tradicional dentro de la herbolaria mexicana",
    "Se utiliza como complemento del bienestar digestivo",
    "Su enfoque tradicional también incluye el cuidado metabólico",
    "Permite incorporar la planta sin preparar una infusión"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal, hipotensión, diabetes, o bajo tratamiento con diuréticos, antihipertensivos o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Puede aumentar la eliminación de líquidos. Consultar si el cliente tiene alteraciones de las sales y minerales del cuerpo."
},

// 149. Treonato de magnesio (60 caps, L-treonato de magnesio, té verde, vitaminas C y D)
{
  id: 149,
  code: "7500645000746",
  name: "TREONATO DE MAGNESIO",
  benefitSummary: "Complemento del cuidado de la atención y la memoria",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TREONATO-MAGNESIO1.jpg",
  shortDesc: "L-Treonato de magnesio (288 mg por porción, aporta 36 mg de magnesio elemental), vitamina C y vitamina D, para la función cognitiva y la salud neurológica.",
  ingredients: "L-Treonato de magnesio (288 mg), vitamina C (137.06 mg), vitamina D (0.01 mcg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Aporta magnesio en forma de treonato",
    "El magnesio contribuye al funcionamiento normal de los nervios",
    "Se estudia como complemento del bienestar mental",
    "La vitamina C contribuye al cuidado antioxidante",
    "Combina un mineral con vitaminas"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con insuficiencia renal o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar si el cliente usa medicamentos para evitar coágulos, controlar el azúcar o eliminar líquidos (diuréticos)."
},

// 150. TRIPTOFANO TEANINA 500 mg (30 caps, L-triptófano, azahar, teanina, vitamina D3)
{
  id: 150,
  code: "7503025069852",
  name: "TRIPTOFANO TEANINA 500 mg",
  benefitSummary: "Calma, bienestar mental y rutina de descanso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TRIPTOFANO1.jpg",
  shortDesc: "Fórmula para la relajación y el sueño con L-triptófano (300 mg), azahar (100 mg), teanina (100 mg) y vitamina D3 (10 mcg), para el bienestar emocional y el descanso.",
  ingredients: "L-Triptófano (300 mg), azahar (100 mg), teanina (100 mg), vitamina D3 (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de dormir o con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente antes de dormir.",
  benefits: [
    "Combina triptófano, teanina y azahar",
    "El triptófano participa en la formación de mensajeros relacionados con ánimo y descanso",
    "La teanina y el azahar se utilizan para favorecer la relajación",
    "Puede acompañar una rutina de descanso",
    "Su enfoque es el bienestar emocional y la calma"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos hepáticos o bajo tratamiento con antidepresivos (ISRS, IMAO), ansiolíticos, hipnóticos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede dar sueño. Evitar conducir después de consumirlo."
},
// 151. Zen Greens 200G (polvo verde con prebióticos, vegetales, enzimas y probióticos)
{
  id: 151,
  code: "7500645001446",
  name: "ZEN GREENS 200G",
  benefitSummary: "Fibra y complemento del bienestar intestinal",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZenGreen1.jpg",
  shortDesc: "Suplemento en polvo que combina fibras prebióticas (inulina, FOS, fibra de acacia), vegetales verdes deshidratados, extractos botánicos, enzimas digestivas y probióticos para apoyar el bienestar digestivo y la vitalidad cotidiana.",
  ingredients: "Inulina (1500 mg), FOS (1000 mg), fibra de acacia (500 mg), espinaca (200 mg), apio (200 mg), pepino (200 mg), nopal (200 mg), piña (300 mg), alfalfa (100 mg), extracto de té verde (200 mg), extracto de aloe vera (200 mg), cúrcuma (200 mg), jengibre (150 mg), extracto de alcachofa (100 mg), guaraná (100 mg), clorofila (50 mg), pimienta negra (5 mg), bromelina (30 mg), papaína (30 mg), enzimas vegetales (40 mg), Lactobacillus rhamnosus GG (3×10⁶ UFC), Bifidobacterium bifidum (2×10⁶ UFC) por porción.",
  serving: "1 medida (6 g)",
  timing: "Preferentemente por la mañana en ayunas o con el desayuno",
  intakeInstructions: "Disolver 1 medida (6 g) en 250-300 ml de agua fría o zumo, removiendo hasta disolución completa. Consumir una vez al día.",
  benefits: [
    "Aporta fibra para complementar la alimentación",
    "Parte de esa fibra sirve de alimento a bacterias intestinales",
    "Incluye probióticos para complementar el equilibrio intestinal",
    "Las enzimas de la fórmula ayudan a descomponer alimentos",
    "Reúne vegetales y otros ingredientes en una bebida"
  ],
  contraindications: "No recomendado durante el embarazo o la lactancia sin consulta médica. Personas sensibles a la cafeína (presente en guaraná y té verde) deben tener precaución. Personas con trastornos hepáticos o que toman anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Contiene aproximadamente 10 a 15 mg de cafeína por porción. Puede aumentar el efecto de otros estimulantes."
},

// 152. Zinc con Ginger (zinc 20 mg + jengibre 400 mg por cápsula)
{
  id: 152,
  code: "7503029679163",
  name: "ZINC CON GINGER",
  benefitSummary: "Zinc para defensas y jengibre para confort digestivo",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ZincYJengibre.jpg",
  shortDesc: "Fórmula sinérgica que combina zinc (20 mg elemental) con raíz de jengibre (400 mg), para apoyar la función inmunológica, la protección celular y el bienestar digestivo.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo (400 mg), zinc elemental (20 mg, como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "El zinc contribuye al funcionamiento de las defensas",
    "Ayuda al mantenimiento normal de piel, cabello y uñas",
    "Participa en el uso de proteínas, grasas y carbohidratos",
    "El jengibre tiene uso tradicional para el confort digestivo",
    "Combina un mineral y un ingrediente vegetal"
  ],
  contraindications: "No administrar a menores de 12 años. Mujeres embarazadas o en lactancia, personas con alergia al jengibre, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El exceso de zinc puede reducir la absorción de cobre. La ficha indica dejar al menos 2 horas entre este producto y el calcio, el hierro o la fibra."
},

// 153. ZINC (zinc elemental 20 mg por cápsula)
{
  id: 153,
  code: "7500645000319",
  name: "ZINC",
  benefitSummary: "Minerales para defensas y cuidado celular",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZINCYAVENA_1.webp",
  shortDesc: "Suplemento de zinc elemental (20 mg por cápsula) para apoyar la función inmunológica, la protección celular, el metabolismo de macronutrientes y el mantenimiento de la piel, cabello y uñas.",
  ingredients: "Zinc elemental 20 mg (como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Contribuye al funcionamiento normal de las defensas",
    "Ayuda al mantenimiento de piel, cabello y uñas",
    "Participa en el uso normal de los nutrientes",
    "Contribuye al cuidado antioxidante de las células",
    "Apoya la función reproductiva normal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antibióticos, penicilamina o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Las cantidades altas de zinc pueden reducir la absorción de cobre. La ficha indica dejar al menos 2 horas entre este producto y el calcio, el hierro o la fibra."
}
,
// PRODUCTO 154 - Calcium Citrate 510 mg
{
    id: 154,
    code: "7500645001514",
    name: "CALCIUM CITRATE 510 mg",
    benefitSummary: "Nutrientes para el mantenimiento de los huesos",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CALCIUM-CITRATE1.jpg",
    shortDesc: "Suplemento de calcio altamente biodisponible con vitamina D3 y extracto de avena, ideal para el mantenimiento óseo y muscular.",
    ingredients: "Citrato de calcio (1,000 mg por porción), extracto de avena (Avena sativa L.) (20 mg), vitamina D3 (colecalciferol) (10 µg / 400 UI).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día, acompañadas de alimentos y un vaso de agua. Puede dividirse en una o dos tomas según preferencia.",
    benefits: [
      "Aporta calcio para mantener huesos y dientes",
      "La vitamina D ayuda a absorber el calcio",
      "El calcio también participa en el funcionamiento muscular",
      "Contribuye a la comunicación normal entre los nervios",
      "Complementa el aporte de calcio de la alimentación"
    ],
    contraindications: "Personas con hipercalcemia, insuficiencia renal o que tomen digitálicos deben consultar a su médico antes de consumirlo. No recomendado en caso de hipersensibilidad a alguno de sus componentes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 155 - HONIG ABAGREEN VERDE
{
    id: 155,
    code: "7503016797009",
    name: "HONIG ABANGREEN LIMON",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABANGREENVERDE.png",
    shortDesc: "Fórmula líquida a base de miel, propóleo y extractos botánicos con vitamina C, diseñada para apoyar la función respiratoria y las defensas naturales.",
    ingredients: "Miel de abeja, propóleo, extractos de: eucalipto (Eucalyptus), bugambilia (Bougainvillea), gordolobo (Verbascum thapsus), fenogreco (Trigonella foenum-graecum), saúco (Sambucus), malva (Malva sylvestris), mentol, esencia de miel, vitamina C (ácido ascórbico).",
    serving: "12 ml (1 cucharada) cada 4 horas",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos y niños mayores de 10 años: Tomar 1 cucharada (12 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
      "La miel aporta una sensación de suavidad en la garganta",
      "El mentol ofrece una sensación refrescante",
      "La vitamina C contribuye al funcionamiento de las defensas",
      "Incluye plantas de uso tradicional respiratorio",
      "Combina miel, propóleo e ingredientes botánicos"
    ],
    contraindications: "No administrar a menores de 1 año (riesgo de botulismo infantil por la miel). Personas con alergia a productos apícolas (miel, propóleo, polen) o a alguno de los componentes. No consumir durante el embarazo o periodo de lactancia sin consultar a un profesional de la salud. Contiene azúcares naturales; consumir con moderación en caso de diabetes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 156 - HONIG ABAGREEN ROJO
{
    id: 156,
    code: "7503024738094",
    name: "HONIG ABANGREEN AJO NEGRO",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABANGREEN-ROJO.png",
    shortDesc: "Fórmula líquida a base de miel, propóleo, ajo negro y extractos botánicos con vitamina C, para el apoyo respiratorio y las defensas inmunológicas.",
    ingredients: "Miel de abeja, propóleo, extractos de: gordolobo (Verbascum thapsus), ajo negro (Allium nigrum), orégano (Origanum vulgare), bugambilia (Bougainvillea), fenogreco (Trigonella foenum-graecum), eucalipto (Eucalyptus), saúco (Sambucus), malva rosa (Alcea rosea), mentol, vitamina C (ácido ascórbico).",
    serving: "20 ml (2 vasos dosificadores) cada 4 horas (adultos)",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 2 vasos dosificadores (20 ml) cada 4 horas. Niños: Tomar 1 vaso dosificador (10 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
      "La miel ayuda a suavizar la sensación en la garganta",
      "El mentol aporta frescura",
      "La vitamina C contribuye al funcionamiento de las defensas",
      "El ajo negro aporta compuestos antioxidantes",
      "Incluye plantas de uso tradicional para el bienestar respiratorio"
    ],
    contraindications: "No administrar a menores de 1 año (riesgo de botulismo infantil por la miel). Personas con alergia a productos apícolas (miel, propóleo, polen) o a alguno de los componentes. Mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de consumirlo. Contiene azúcares naturales; consumir con moderación en caso de diabetes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
}
,
// PRODUCTO 157 - NUYO
{
    id: 157,
    code: "7503021404206",
    name: "NUYO",
    benefitSummary: "Cuidado articular y nutrición para el movimiento",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-NUYO-RENDER-V3-AGOSTO2026.jpeg",
    shortDesc: "Suplemento alimenticio integral con glucosamina, MSM, cúrcuma, nogal, vitaminas y minerales, diseñado para apoyar la salud articular, la función cognitiva y el equilibrio metabólico.",
    ingredients: "Metilsulfonilmetano (MSM) (125 mg), glucosamina (100 mg), cúrcuma (Curcuma longa) (100 mg), nogal (Juglans regia) (50 mg), vitamina C (30 mg), calcio (40 mg), magnesio (30 mg), vitamina B2 (riboflavina) (2 mg), vitamina B6 (piridoxina) (2 mg), zinc (10 mg), hierro (5 mg), potasio (5 mg), vitamina B12 (cianocobalamina) (100 µg), fósforo (0.9 mg).",
    serving: "1 cápsula al día",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente después de los alimentos, acompañada de agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "Su enfoque principal es complementar el cuidado articular",
      "La vitamina C contribuye a formar colágeno",
      "El calcio y el magnesio apoyan huesos y músculos",
      "Las vitaminas B participan en el uso de la energía",
      "La cúrcuma complementa el aporte de ingredientes antioxidantes"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 158 - PROTEÍNA CACAO HIGH PERFORMANCE
{
    id: 158,
    code: "7501468149636",
    name: "PROTEÍNA CACAO HIGH PERFORMANCE",
    benefitSummary: "Proteína para músculos y recuperación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/HABITHP.webp",
    shortDesc: "Proteína vegana de alto rendimiento con 30g de proteína, 6g de BCAAs, probióticos (770M UFC) y electrolitos, diseñada para atletas y personas activas.",
    ingredients: "Concentrado de proteína vegetal (chícharo y arroz integral), cocoa, aminoácidos de cadena ramificada (leucina, isoleucina y valina), sabor natural cacao, sal rosa del Himalaya, probióticos (Lactobacillus acidophilus y Bifidobacterium bifidum) y stevia (Stevia rebaudiana).",
    serving: "1 medida (39.5 g) al día",
    timing: "Dentro de los 60 minutos posteriores al entrenamiento o como colación proteica",
    intakeInstructions: "Mezclar 1 medida (39.5 g) con 350 ml de agua fría o leche vegetal. Agitar en shaker durante 20-30 segundos hasta disolver. Se recomienda consumir de 1 a 2 porciones al día, dependiendo de las necesidades proteicas y nivel de actividad física.",
    benefits: [
      "Aporta proteína vegetal para completar la alimentación",
      "Ayuda a mantener y desarrollar los músculos",
      "Incluye los componentes necesarios para formar proteína",
      "Añade probióticos como complemento digestivo",
      "Su sabor cacao ofrece una alternativa a los batidos lácteos"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica (especialmente renal o hepática) deben consultar a su profesional de la salud antes de consumir este producto. Este producto es fabricado en instalaciones que también procesan lácteos y derivados de soya.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 159 - VITA RX NANO FEAR
{
    id: 159,
    code: "7503016797627",
    name: "VITA RX NANO FEAR",
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VITARX-NANO1.png",
    shortDesc: "Suplemento multivitamínico y mineral de alta densidad nutricional con 100% de la Ingesta Diaria Recomendada de vitaminas esenciales, complementado con glicina y glutamina para atletas y personas activas.",
    ingredients: "Glicina, ácido ascórbico (vitamina C), glutamina, carbonato de calcio, fosfato de potasio, sulfato de magnesio, niacina (vitamina B3), D-tocoferol acetato (vitamina E), pantotenato de calcio (vitamina B5), sulfato ferroso, riboflavina (vitamina B2), tiamina (vitamina B1), óxido de zinc, sulfato de manganeso, gluconato de cobre, retinol palmitato (vitamina A), ácido fólico, biotina, filoquinona (vitamina K), colecalciferol (vitamina D3) y cianocobalamina (vitamina B12).",
    serving: "3 cápsulas al día",
    timing: "1 cápsula antes de cada alimento (distribuir con las comidas principales)",
    intakeInstructions: "Tomar 3 cápsulas al día (1 antes de cada alimento) para optimizar la absorción de vitaminas liposolubles. No exceder la porción diaria recomendada.",
    benefits: [
      "Aporta vitaminas y minerales para complementar la dieta",
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Las vitaminas C y D contribuyen al funcionamiento de las defensas",
      "El calcio y el magnesio apoyan huesos y músculos",
      "Reúne varios nutrientes para personas activas"
    ],
    contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de usar este producto. No exceder la dosis diaria indicada.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

 // PRODUCTO 160 - MCT OIL BIRDMAN
{
        id: 160,
        code: "7503025737362",
        name: "MCT OIL BIRDMAN",
        benefitSummary: "Grasas tipo MCT para complementar la energía",
        category: "metabolismo",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MCTOIL-BIRDMAN.webp",
        shortDesc: "Triglicéridos de cadena media (MCT) de alta pureza con ácido caprílico (C8) al 98%, extraído de aceite de coco, diseñado para proporcionar energía rápida y apoyar la cetosis.",
        ingredients: "Ésteres de ácidos grasos de cadena media (ácido caprílico 98%) extraído de aceite de coco.",
        serving: "1 cucharada sopera (15 ml) al día",
        timing: "Puede tomarse en cualquier momento, solo o añadido a café, batidos o comidas",
        intakeInstructions: "Tomar 1 cucharada sopera (15 ml) al día, solo o añadido a café, batidos, ensaladas o comidas. Para quienes son nuevos en MCT, se recomienda comenzar con 1/2 cucharada (7.5 ml) y aumentar gradualmente para evitar molestias digestivas. Agitar antes de usar.",
        benefits: [
          "Aporta grasas que el cuerpo puede usar como energía",
          "Ofrece una opción para complementar dietas con pocos carbohidratos",
          "Se puede añadir a bebidas y preparaciones",
          "Su fórmula se centra en aceite de coco tipo C8",
          "Facilita aumentar el aporte de grasa de una comida"
        ],
        contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de usar este producto. No exceder la dosis diaria indicada.",
        foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
        interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
    },

    // PRODUCTO 161 - VGREEN
  {
    id: 161,
    code: "7503016797498",
    name: "VGREEN",
    benefitSummary: "Complemento de alimentación y actividad física",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VGREEN.png",
    shortDesc: "Suplemento a base de té verde, guaraná, rodiola, schisandra, damiana, zarzaparrilla y toronjil, diseñado para apoyar la vitalidad, el equilibrio emocional y la protección celular.",
    ingredients: "Polvo de hoja de té verde (Camellia sinensis) (620 mg), polvo de raíz de zarzaparrilla (Smilax aristolochiaefolia) (100 mg), polvo de hoja de toronjil (Melissa officinalis) (100 mg), mezcla HGO: polvo de hoja de damiana de campo (Turnera diffusa), polvo de semilla de guaraná (Paullinia cupana) (10 mg), polvo de raíz de rodiola rosea (Rhodiola rosea) (3.4 mg), polvo de flor de castilla, polvo de fruto de schisandra (Schisandra chinensis).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Tomar 2 cápsulas al día, de preferencia por la mañana, acompañadas de suficiente agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "El té verde aporta compuestos antioxidantes",
      "El guaraná contiene cafeína, que ayuda a mantenerse alerta",
      "Combina plantas usadas tradicionalmente para la vitalidad",
      "Puede acompañar una rutina de alimentación y actividad física",
      "Reúne varios ingredientes botánicos en cápsulas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

    // PRODUCTO 163 - ASHWA + MAG COMPLEX
    {
        id: 163,
        code: "7500645001668",
        name: "ASHWA + MAG COMPLEX",
        benefitSummary: "Calma, bienestar mental y rutina de descanso",
        category: "nervioso",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/RENDER-ASHWA-MAG-COMPLEX-1.jpeg",
        shortDesc: "Suplemento que combina extracto estandarizado de Ashwagandha (600 mg), L-Teanina (200 mg) y Bisglicinato de Magnesio (225 mg de magnesio elemental) para apoyar la respuesta al estrés, la relajación funcional y el sistema nervioso.",
        ingredients: "Extracto de Ashwagandha (Withania somnifera) estandarizado al 2.5% de withanólidos (600 mg por porción diaria), L-Teanina (200 mg por porción diaria), Bisglicinato de Magnesio (aporta 225 mg de magnesio elemental por porción diaria).",
        serving: "3 cápsulas al día (porción diaria completa)",
        timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. La porción diaria completa (3 cápsulas) proporciona 600 mg de Ashwagandha, 200 mg de L-Teanina y 225 mg de magnesio elemental. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
        benefits: [
          "La ashwagandha puede apoyar la respuesta al estrés cotidiano",
          "La teanina se utiliza como complemento de la relajación",
          "El magnesio contribuye al funcionamiento de los nervios",
          "También apoya el movimiento normal de los músculos",
          "Su enfoque es acompañar una rutina de calma y descanso"
        ],
        contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula. Personas con hipertiroidismo, trastornos autoinmunitarios o bajo tratamiento farmacológico (sedantes, ansiolíticos, hipoglucemiantes, antihipertensivos) deben consultar a un profesional de la salud antes de consumirlo.",
        foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
        interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
    }
    ,

// PRODUCTO 164 - ALOE VERA NOPAL CON CUACHALALATE
{
    id: 164,
    code: "7503016797634",
    name: "ALOE VERA NOPAL CON CUACHALALATE",
    benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/AloeCuachalalate.jpg",
    shortDesc: "Bebida funcional que combina aloe vera, nopal y cuachalalate, tres plantas de reconocido uso tradicional en México, enriquecida con vitamina C para apoyar la salud gastrointestinal, el bienestar metabólico y la hidratación.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de nopal (Opuntia ficus-indica), extracto de cuachalalate (Amphipterygium adstringens), ácido ascórbico (vitamina C).",
    serving: "90 ml al día",
    timing: "Preferentemente en ayunas o entre comidas",
    intakeInstructions: "Agitar bien el envase antes de cada uso. Consumir 90 ml al día (un vaso dosificador), preferentemente en ayunas o entre comidas. Puede tomarse solo o mezclado con agua si se desea un sabor más suave. No exceder la porción diaria recomendada. Una vez abierto, consumir en un plazo de 1 mes.",
    benefits: [
      "Combina sábila, nopal y cuachalalate",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "La vitamina C contribuye al funcionamiento de las defensas",
      "También complementa el cuidado antioxidante de las células",
      "Permite incorporar las plantas en una bebida preparada"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 165 - TÉ VERDE
{
    id: 165,
    code: "7503024738278",
    name: "TÉ VERDE",
    benefitSummary: "Una bebida con antioxidantes y cafeína",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-VERDE--scaled.png",
    shortDesc: "Infusión elaborada con hojas de té verde (Camellia sinensis) 100% puras, reconocido por su alto contenido de catequinas y su perfil antioxidante.",
    ingredients: "Hojas de té verde (Camellia sinensis).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml) y dejar infusionar 3-5 minutos. Retirar el sobre y disfrutar.",
    benefits: [
      "Aporta compuestos antioxidantes propios del té verde",
      "Su cafeína ayuda a mantenerse alerta",
      "Contiene teanina de forma natural",
      "Permite preparar una bebida para distintos momentos del día",
      "Los sobres facilitan llevar y preparar una taza"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Contiene cafeína de forma natural. Consumir con precaución en personas sensibles a la cafeína.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 166 - D3 5000 UI
{
    id: 166,
    code: "7500645000821",
    name: "D3 5000 UI",
    benefitSummary: "Nutrientes para el mantenimiento de los huesos",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2024/02/D3.jpg",
    shortDesc: "Suplemento de vitamina D3 (5000 UI) en cápsula blanda con aceite de olivo y avena en polvo como vehículo lipídico para optimizar su absorción.",
    ingredients: "Vitamina D3 (colecalciferol) (125 µg / 5000 UI), aceite de olivo (Olea europaea) (400 mg), avena en polvo (Avena sativa) (100 mg).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos que contengan grasas para optimizar la absorción. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "La vitamina D ayuda a absorber calcio y fósforo",
      "Contribuye al mantenimiento de huesos y dientes",
      "Apoya el funcionamiento normal de los músculos",
      "Contribuye al funcionamiento de las defensas",
      "Permite complementar la vitamina D cuando corresponde su uso"
    ],
    contraindications: "No consumir durante el embarazo o lactancia sin supervisión médica. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 167 - FIX UZEN
{
    id: 167,
    code: "7503025069647",
    name: "FIX UZEN",
    benefitSummary: "Masaje, frescura y confort local",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FIX-UZEN-scaled.png",
    shortDesc: "Gel tópico formulado con extracto de árnica, salicilato de metilo, glucosamina y mentol natural, diseñado para el alivio de molestias musculares y articulares.",
    ingredients: "Agua, extracto de árnica (Heterotheca inuloides), salicilato de metilo, glucosamina, trietanolamina, ácido esteárico, carbomero, glicerina, monoesterato de sorbitan, aceite mineral, mentol natural, alcohol, parafina, alcohol bencílico, DMDM hidantoína, fenoxietanol, hidroxiacetofenona, color azul #1.",
    serving: "Aplicación tópica según necesidad",
    timing: "Según necesidad, 2-3 veces al día",
    intakeInstructions: "Aplicar una cantidad suficiente de gel sobre la zona afectada. Masajear suavemente hasta que se absorba completamente. Repetir 2-3 veces al día según sea necesario. Lavar las manos después de cada aplicación. Uso exclusivamente tópico, no ingerir.",
    benefits: [
      "Facilita el masaje de zonas con sensación de tensión",
      "El mentol aporta una sensación refrescante",
      "Los ingredientes de uso externo pueden dar confort local",
      "Incluye árnica en la fórmula",
      "Su textura permite aplicarlo directamente sobre la piel"
    ],
    contraindications: "No se use en menores de 12 años. Evitar contacto con ojos, mucosas y heridas abiertas. Si se presenta irritación o reacción alérgica, suspender su uso y consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 168 - HPR PROS GREEN
{
    id: 168,
    code: "'7503016797382",
    name: "HPR PROS GREEN",
    benefitSummary: "Bienestar prostático y cuidado masculino",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/HPR-PROSGREEN-LIFE.png",
    shortDesc: "Suplemento con polen de flores, pelo de elote, perejil, Omega 3, buchu, pygeum, licopeno, vitaminas B6 y E, y zinc, diseñado para el bienestar prostático y general.",
    ingredients: "Polen de flores, Omega 3 (150 mg), vitamina E (50 mg), zinc (20 mg), licopeno (10 mg), vitamina B6 (10 mg), polen de flores, pelos de elote, perejil, buchu, pygeum (en cantidades no especificadas).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Su enfoque es complementar el bienestar prostático",
      "Combina pygeum y otros ingredientes vegetales",
      "El zinc contribuye a la función reproductiva normal",
      "La vitamina E y el licopeno complementan el cuidado antioxidante",
      "Reúne nutrientes e ingredientes botánicos para el cuidado masculino"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con alergia a productos apícolas (polen) deben evitar su consumo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 169 - TÉ 7 AZAHARES
{
    id: 169,
    code: "7503024738261",
    name: "TÉ 7 AZAHARES",
    benefitSummary: "Infusión para una pausa y una rutina de calma",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-7-AZAHARES-scaled.png",
    shortDesc: "Infusión herbal compuesta por 9 ingredientes botánicos de reconocido uso tradicional en México (yerbaniz, manzanilla, zapote blanco, azahar, hierbabuena, pasiflora, toronjil, flor de manita y tila) para favorecer la relajación y el bienestar.",
    ingredients: "Yerbaniz (Tagetes lucida), flor de manzanilla (Chamaemelum nobile), zapote blanco (Casimiroa edulis), hojas de naranja/flor de azahar (Citrus aurantium), hierbabuena (Mentha spicata), pasiflora (Passiflora incarnata), flor de toronjil (Melissa officinalis), flor de manita (Chiranthodendron pentadactylon), flor de tila (Tilia alba).",
    serving: "1 sobre (1.5 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Colocar la bolsita en una taza, agregar agua caliente (200 ml) a 65°C, dejar infusionar 3-5 minutos, retirar la bolsita y disfrutar.",
    benefits: [
      "Tiene uso tradicional para favorecer la relajación",
      "Puede acompañar una rutina de descanso",
      "Permite hacer una pausa con una bebida caliente",
      "Su mezcla de flores y hierbas aporta aroma suave",
      "Ofrece una opción sin cafeína según la ficha"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 170 - TÉ ABANGREEN
{
    id: 170,
    code: "7503024738339",
    name: "TÉ ABANGREEN",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-ABANGREEN-scaled.png",
    shortDesc: "Infusión herbal que combina eucalipto, tejocote, gordolobo, tabachín, sáuco y propóleo, plantas de reconocido uso tradicional para el bienestar respiratorio.",
    ingredients: "Eucalipto (Eucalyptus), tejocote (Crataegus mexicana), gordolobo (Verbascum thapsus), tabachín (Caesalpinia pulcherrima), sáuco (Sambucus nigra), propóleo.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Combina plantas de uso tradicional respiratorio",
      "Una bebida caliente puede dar confort en la garganta",
      "El eucalipto aporta su aroma característico",
      "El saúco y el propóleo complementan la mezcla",
      "Los sobres facilitan preparar una taza"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con alergia a productos apícolas (propóleo) deben evitar su consumo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 171 - TÉ ÁRNICA
{
    id: 171,
    code: "7503024738285",
    name: "TÉ ÁRNICA",
    benefitSummary: "Árnica mexicana: uso tradicional por valorar",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-ARNICA-scaled.png",
    shortDesc: "Infusión herbal elaborada con hojas de árnica mexicana (Heterotheca inuloides), una planta de reconocido uso tradicional en la herbolaria mexicana para el bienestar general.",
    ingredients: "Hojas de árnica (Heterotheca inuloides Cass.).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Permite preparar una infusión de árnica mexicana",
      "Conserva el sabor y aroma característicos de la planta",
      "Tiene una larga tradición dentro de la herbolaria mexicana",
      "Su ficha describe un uso tradicional, con beneficios clínicos por confirmar"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 172 - TÉ CUACHALALATE
{
    id: 172,
    code: "7503024738254",
    name: "TÉ CUACHALALATE",
    benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-CUACHALALTE-scaled.png",
    shortDesc: "Infusión elaborada con corteza de cuachalalate (Amphipterygium adstringens), una planta medicinal de reconocido uso tradicional en México para el bienestar general.",
    ingredients: "Corteza de cuachalalate (Amphipterygium adstringens).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Permite preparar una infusión de cuachalalate",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "Su fórmula se centra en la corteza de esta planta",
      "Ofrece una opción sin cafeína según la ficha",
      "Los sobres facilitan preparar una taza"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 173 - TÉ HOJA SEN
{
    id: 173,
    code: "7503024738247",
    name: "TÉ HOJA SEN",
    benefitSummary: "Apoyo ocasional a la evacuación",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-HOJA-SEN-scaled.png",
    shortDesc: "Infusión elaborada con hojas de sen (Senna alexandrina), una planta de reconocido uso tradicional por sus propiedades digestivas. Uso ocasional.",
    ingredients: "Hojas de sen (Senna alexandrina).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día (uso ocasional)",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar. Uso ocasional, no prolongar por más de 7 días consecutivos.",
    benefits: [
      "El sen ayuda a estimular el movimiento del intestino",
      "Su uso se dirige al estreñimiento ocasional",
      "Puede facilitar la evacuación cuando corresponde su uso",
      "Permite preparar la planta en forma de infusión",
      "Su beneficio se limita al uso ocasional indicado en la etiqueta"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Uso ocasional (máximo 7 días consecutivos). Personas con afecciones gastrointestinales deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 174 - TÉ JENGIBRE CANELA
{
    id: 174,
    code: "7503025069395",
    name: "TÉ JENGIBRE CANELA",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CANELA-scaled.png",
    shortDesc: "Infusión que combina té verde, jengibre y canela, tres ingredientes de reconocido uso tradicional por sus propiedades digestivas y antioxidantes.",
    ingredients: "Té verde (Camellia sinensis), raíz de jengibre (Zingiber officinale), canela (Cinnamomum verum).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "El jengibre tiene uso tradicional para acompañar la digestión",
      "El té verde aporta compuestos antioxidantes",
      "La canela da sabor y aroma a la bebida",
      "Puede disfrutarse después de las comidas",
      "Combina té y especias en un sobre"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Contiene cafeína de forma natural. Consumir con precaución en personas sensibles a la cafeína.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 175 - TÉ JENGIBRE Y CÚRCUMA
{
    id: 175,
    code: "7503024738308",
    name: "TÉ JENGIBRE Y CÚRCUMA",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CURCUMA-scaled.png",
    shortDesc: "Infusión herbal que combina jengibre y cúrcuma, dos plantas de reconocido uso tradicional por sus propiedades digestivas y antioxidantes.",
    ingredients: "Raíz de jengibre (Zingiber officinale), raíz de cúrcuma (Curcuma longa).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "El jengibre tiene uso tradicional para el confort digestivo",
      "La cúrcuma aporta compuestos antioxidantes",
      "Ofrece una bebida cálida para después de comer",
      "Combina dos especias sin preparar las raíces",
      "Es una alternativa sin cafeína según la ficha"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 176 - TÉ MANZANILLA
{
    id: 176,
    code: "7503026253311",
    name: "TÉ MANZANILLA",
    benefitSummary: "Infusión para una pausa y una rutina de calma",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-MANZANILLA-1-scaled.png",
    shortDesc: "Infusión herbal 100% orgánica compuesta por flores de manzanilla (Chamaemelum nobile), reconocida por sus propiedades digestivas y relajantes. Sin cafeína.",
    ingredients: "Flores de manzanilla (Chamaemelum nobile) orgánicas.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche o después de las comidas",
    intakeInstructions: "Calentar agua hasta punto de ebullición. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Tiene uso tradicional para el confort después de comer",
      "Puede acompañar una rutina de relajación",
      "Ofrece una bebida sin cafeína",
      "Su aroma suave ayuda a crear un momento de pausa",
      "Los sobres facilitan preparar una taza"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 177 - TÉ RINICHI
{
    id: 177,
    code: "7503024738353",
    name: "TÉ RINICHI",
    benefitSummary: "Bienestar urinario y plantas de uso tradicional",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-RINICHI-scaled.png",
    shortDesc: "Infusión herbal que combina pingüica, palo azul, pelo de elote y cola de caballo, cuatro plantas de reconocido uso tradicional en la herbolaria mexicana para el bienestar renal y urinario.",
    ingredients: "Pingüica (Arctostaphylos pungens), palo azul (Cyclolepis genistoides), pelo de elote (Zea mays L.), cola de caballo (Equisetum arvense).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Combina plantas de uso tradicional para el bienestar urinario",
      "Incluye palo azul, pingüica y cabellos de elote",
      "Se utiliza tradicionalmente para acompañar la eliminación de líquidos",
      "Permite incorporar las plantas como infusión",
      "Los sobres evitan preparar la mezcla desde cero"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con problemas renales o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 178 - QUERCETIN
{
    id: 178,
    code: "7503029679767",
    name: "QUERCETIN",
    benefitSummary: "Cuidado antioxidante de las células",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/QUERCETIN.png",
    shortDesc: "Suplemento de quercetina (1000 mg por porción), un flavonoide natural con actividad antioxidante y moduladora de la respuesta inflamatoria, en cápsulas veganas libres de gluten.",
    ingredients: "Quercetina (3,3′,4′,5,7-pentahidroxiflavona) (1000 mg por porción).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas diariamente (1000 mg de quercetina), de preferencia con los alimentos. Consumir diariamente. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Aporta quercetina, un compuesto presente en distintas plantas",
      "Tiene actividad antioxidante",
      "Complementa el cuidado nutricional de las células",
      "Se estudia su relación con las defensas del organismo",
      "Permite incorporar quercetina en cápsulas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 179 - BACAO GREEN JARABE
{
    id: 179,
    code: "7503016797054",
    name: "BACAO GREEN JARABE",
    benefitSummary: "Vitaminas A y D con plantas de uso tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BACAO-JARABE.png",
    shortDesc: "Jarabe tradicional con aceite de hígado de bacalao (fuente de vitaminas A y D), hipofosfitos minerales y extractos botánicos (eucalipto, saúco, gordolobo) para el apoyo respiratorio y la nutrición general.",
    ingredients: "Aceite de hígado de bacalao (vitaminas A y D), hipofosfitos de sodio, calcio, potasio, magnesio y hierro, extractos de eucalipto, saúco, lobaria pulmonaria, gordolobo y cassia fístula.",
    serving: "Adultos: 15 ml, 3 veces al día",
    timing: "Según necesidad, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 1 copita de 15 ml, 3 veces al día. Jóvenes: Tomar 1 copita de 15 ml, 2 veces al día. Niños: Tomar media copita, 3 veces al día. Agitar antes de usar.",
    benefits: [
      "Aporta vitaminas A y D a partir de aceite de hígado de bacalao",
      "La vitamina A contribuye al mantenimiento de la visión",
      "La vitamina D ayuda a absorber el calcio",
      "Ambas vitaminas contribuyen al funcionamiento de las defensas",
      "Incluye plantas de uso tradicional respiratorio"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 1 año. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente pescado).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 180 - PURE INOSITOL POWDER
{
    id: 180,
    code: "7502002826105",
    name: "PURE INOSITOL POWDER",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-PURE-INOSITOL-RENDER-V2-AGOSTO2026.jpeg",
    shortDesc: "Polvo de inositol 100% puro (5 g por porción), un compuesto del complejo de vitamina B que participa en la señalización celular, el metabolismo lipídico y el bienestar general. Libre de gluten y aditivos.",
    ingredients: "Inositol (100% puro).",
    serving: "5 g al día (1 cucharadita)",
    timing: "Preferentemente acompañado de algún alimento",
    intakeInstructions: "Disolver 5 g (aproximadamente una cucharadita) en un vaso de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente acompañado de algún alimento. No exceder la porción diaria recomendada.",
    benefits: [
      "Aporta inositol en polvo",
      "Participa en la comunicación normal entre las células",
      "Se utiliza como complemento del bienestar metabólico",
      "Su fórmula de un solo ingrediente facilita identificar su aporte",
      "Se puede mezclar con una bebida"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 181 - MAGNESIUM BISGLYCINATE
{
    id: 181,
    code: "7500645001606",
    name: "MAGNESIUM BISGLYCINATE",
    benefitSummary: "Magnesio para músculos, nervios y energía",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BISGLICINATO-MAGNESIO.png",
    shortDesc: "Suplemento de magnesio en forma de bisglicinato (400 mg de magnesio elemental por porción), una forma quelada de alta biodisponibilidad que favorece la función muscular y nerviosa, con inulina de agave como prebiótico.",
    ingredients: "Bisglicinato de magnesio (aporta 400 mg de magnesio elemental por porción), inulina de agave (20 mg).",
    serving: "4 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 4 cápsulas al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "El magnesio contribuye al funcionamiento de los músculos",
      "Apoya el funcionamiento normal de los nervios",
      "Ayuda a obtener energía de los alimentos",
      "Contribuye a reducir el cansancio por falta de magnesio",
      "Aporta magnesio en forma de bisglicinato"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 182 - MOROIZY GEL
{
    id: 182,
    code: "7503026253700",
    name: "MOROIZY GEL",
    benefitSummary: "Masaje, frescura y confort local",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MOROIZY.png",
    shortDesc: "Gel tópico formulado con extractos botánicos (castaño de indias, hamamelis, centella asiática, saúco, árnica, manzanilla y ginkgo biloba) para el cuidado de la piel y el confort general. Uso externo.",
    ingredients: "Extractos de castaño de indias (Aesculus hippocastanum), hamamelis (Hamamelis virginiana), centella asiática (Centella asiatica), saúco (Sambucus), árnica (Arnica montana), manzanilla (Chamaemelum), ginkgo biloba (Ginkgo biloba), carbomero, silicato de metilo.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la zona afectada de 2 a 3 veces al día, masajeando suavemente hasta su absorción. Uso exclusivamente tópico, no ingerir. Evitar contacto con ojos y mucosas. Si se presenta irritación, suspender su uso.",
    benefits: [
      "Facilita el masaje de las zonas donde se aplica",
      "Ofrece una sensación refrescante sobre la piel",
      "La manzanilla complementa el cuidado de la piel",
      "Incluye árnica y otros extractos botánicos",
      "Su presentación en gel facilita la aplicación local"
    ],
    contraindications: "Uso exclusivamente externo/tópico (no ingerir). Evitar contacto con ojos y mucosas. Si se presenta irritación o reacción alérgica, suspender su uso.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 183 - CT-O
{
    id: 183,
    code: "7503026253717",
    name: "CT-O",
    benefitSummary: "Masaje, frescura y confort local",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CT-O.png",
    shortDesc: "Gel corporal con extractos botánicos (castaño de indias, hamamelis, centella asiática, ginkgo biloba) y salicilato de metilo, diseñado para el cuidado de la piel y el confort general. Uso tópico.",
    ingredients: "Agua, extracto de castaño de indias (Aesculus hippocastanum), extracto de hamamelis (Hamamelis virginiana), extracto de centella asiática (Centella asiatica), extracto de ginkgo biloba (Ginkgo biloba), salicilato de metilo, carbómero.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la piel limpia y seca de las zonas deseadas (como piernas o zonas de tensión) y realizar un masaje suave con movimientos circulares ascendentes hasta su completa absorción. Se recomienda aplicar de 2 a 3 veces al día. Uso exclusivamente tópico, no ingerir.",
    benefits: [
      "Está orientado al confort de piernas cansadas",
      "Facilita acompañar el masaje de las piernas",
      "Ofrece una sensación refrescante sobre la piel",
      "Incluye castaño de indias y hamamelis",
      "Su formato en gel facilita aplicarlo por zonas"
    ],
    contraindications: "Uso exclusivamente externo/tópico (no ingerir). Evitar contacto con ojos y mucosas. Si se presenta irritación o reacción alérgica, suspender su uso.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
}
,
// PRODUCTO 184 - ZENMUN
{
    id: 184,
    code: "7503029679156",
    name: "ZENMUN",
    benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Zenmun1.jpg",
    shortDesc: "Fórmula avanzada para fortalecer las defensas naturales del organismo, con bayas de saúco, equinácea, ajo negro, vitamina C (300 mg), vitamina D3 (400 UI) y zinc (20 mg), ideal para épocas de cambios estacionales.",
    ingredients: "Bayas de Saúco (Sambucus nigra), Equinácea (Echinacea purpurea), Ajo Negro (Allium sativum fermentado), Vitamina C (ácido ascórbico) (300 mg), Vitamina D3 (colecalciferol) (10 mcg / 400 UI), Zinc (elemental) (20 mg).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (&gt;3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "Las vitaminas C y D contribuyen al funcionamiento de las defensas",
      "El zinc también participa en la función normal del sistema de defensas",
      "La vitamina C aporta cuidado antioxidante",
      "Incluye saúco, equinácea y ajo negro",
      "Combina nutrientes y plantas para complementar el cuidado diario"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia, personas con alergia a plantas de la familia Asteraceae (equinácea), al ajo o a alguno de los componentes, con enfermedades autoinmunes, o bajo tratamiento con inmunosupresores, anticoagulantes (warfarina) o antidiabéticos deben consultar a un profesional de la salud antes de consumirlo. La vitamina D3 en dosis elevadas puede acumularse; no exceder la dosis recomendada sin supervisión médica.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
}
,
// PRODUCTO 185 - ASTRÁGALO
{
    id: 185,
    code: "7502214013263",
    name: "ASTRÁGALO",
    benefitSummary: "Ingredientes vegetales para complementar el cuidado diario",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ASTRAGALO.png",
    shortDesc: "Suplemento de Astrágalo (Astragalus membranaceus), una planta adaptógena de la medicina tradicional china con polisacáridos y flavonoides que apoyan la función inmunológica y la vitalidad.",
    ingredients: "Extracto de raíz de Astrágalo (Astragalus membranaceus) (320 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Astrágalo al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Aporta astrágalo, una planta de uso tradicional",
      "Se utiliza tradicionalmente como apoyo a la vitalidad",
      "Contiene compuestos vegetales con actividad antioxidante",
      "Se estudia su relación con el funcionamiento de las defensas",
      "Su enfoque es complementar el bienestar general"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 186 - CALOSTRO BOVINO
{
    id: 186,
    code: "7502214013317",
    name: "CALOSTRO BOVINO",
    benefitSummary: "Calostro como complemento nutricional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CALOSTRO-BOVINO.png",
    shortDesc: "Suplemento de calostro bovino liofilizado (200 mg por cápsula), una fuente natural de inmunoglobulinas, factores de crecimiento y lactoferrina para el apoyo inmunológico y la salud celular.",
    ingredients: "Calostro bovino liofilizado (200 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Calostro Bovino al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Aporta calostro bovino en cápsulas",
      "Contiene componentes propios del calostro",
      "Se estudia como complemento del bienestar intestinal",
      "Su fórmula permite incorporar calostro sin preparar una bebida",
      "Su utilidad depende de la cantidad y composición del producto"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente derivados lácteos).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 187 - CÉLULAS MADRE
{
    id: 187,
    code: "7502214013270",
    name: "CÉLULAS MADRE",
    benefitSummary: "Mezcla de ingredientes tradicionales para el bienestar general",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CELULAS-MADRE.png",
    shortDesc: "Fórmula avanzada que combina calostro bovino (150 mg), astrágalo (50 mg), hongo reishi (50 mg), espirulina (30 mg) y FO-TI (25 mg) para el apoyo inmunológico, la vitalidad y el equilibrio orgánico.",
    ingredients: "Calostro bovino (150 mg), Astrágalo (Astragalus lucidum) (50 mg), Hongo Reishi (Ganoderma lucidum) (50 mg), Alga Espirulina (Spirulina maxima) (30 mg), FO-TI (Polygonum multiflorum) (25 mg).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Células Madre al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Aporta calostro, hongos y plantas de la fórmula",
      "La espirulina complementa el aporte de ingredientes nutritivos",
      "Incluye compuestos vegetales con actividad antioxidante",
      "Su enfoque es el bienestar general y la vitalidad",
      "Su composición corresponde a una mezcla nutricional y botánica"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente derivados lácteos y hongos).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 188 - EXTRACTO DE PROPÓLEO ABAGREEN
{
    id: 188,
    code: "7503016797375",
    name: "EXTRACTO DE PROPÓLEO ABAGREEN",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABAGREEN-GOTERO.png",
    shortDesc: "Extracto líquido de propóleo en gotero, combinado con mentol natural y equinácea, para el apoyo de las defensas naturales y el bienestar respiratorio.",
    ingredients: "Propóleo, mentol natural, equinácea (Echinacea purpurea).",
    serving: "20 gotas (1 ml) al día",
    timing: "Con o sin alimentos",
    intakeInstructions: "Añadir 20 gotas (1 ml) del extracto en agua, jugo o tomar directamente. Una vez al día. Agitar antes de usar. No exceder la dosis diaria recomendada.",
    benefits: [
      "El mentol aporta una sensación refrescante",
      "El propóleo contiene compuestos antioxidantes",
      "La equinácea tiene uso tradicional en cambios de temporada",
      "El gotero facilita medir la cantidad indicada",
      "Reúne propóleo e ingredientes botánicos en formato líquido"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No administrar en menores de 3 años. Personas con alergia a productos apícolas (propóleo, miel) o a plantas de la familia Asteraceae (equinácea) deben evitar su consumo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// PRODUCTO 189 - TÉ JOUNKINS LAX
{
    id: 189,
    code: "7501090510439",
    name: "TÉ JOUNKINS LAX",
    benefitSummary: "Infusión para una pausa y una rutina de calma",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JOUNKINS.png",
    shortDesc: "Infusión herbal tradicional con Cenizo (Leucophyllum frutescens) y Toronjil (Agastache mexicana), una mezcla original para el bienestar digestivo y la relajación.",
    ingredients: "Cenizo (Leucophyllum frutescens), Toronjil (Agastache mexicana).",
    serving: "1 bolsita (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Preparar una taza con agua caliente, agregar una bolsita de té y dejar reposar de 3 a 5 minutos. Tomar 1 taza al día, preferentemente por la noche. No exceder la dosis diaria recomendada.",
    benefits: [
      "El toronjil tiene uso tradicional para favorecer la relajación",
      "La mezcla se utiliza como complemento del bienestar digestivo",
      "Puede acompañar una pausa al final del día",
      "Su aroma herbal hace agradable la preparación",
      "Los sobres facilitan preparar una taza"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

  // 190. DEMOGRASS LX+
{
    id: 190,
    code: "7502214011542",
    name: "DEMOGRASS LX+",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASS-LX.png",
    shortDesc: "Suplemento con 7 extractos botánicos y fibras naturales: forskolina, ciruela, tamarindo, inulina, papaya, nopal y linaza.",
    ingredients: "Forskolina (Extracto de la raíz de Coleus forskohlii), Fruto de Ciruela (Prunus domestica), Fruto de Tamarindo (Tamarindus indica), Inulina (Fibra prebiótica), Fruto de Papaya (Carica papaya), Penca de Nopal (Opuntia ficus-indica), Semilla de Linaza (Linum usitatissimum).",
    serving: "1 tableta al día",
    timing: "Preferentemente antes de la comida principal",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente antes de la comida principal, con un vaso de agua.",
    benefits: [
      "Combina plantas, frutas e inulina",
      "La inulina es una fibra que alimenta ciertas bacterias del intestino",
      "Su enfoque es complementar el bienestar digestivo",
      "Incluye ciruela, tamarindo, papaya, nopal y linaza",
      "Puede acompañar hábitos de alimentación y consumo de agua"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

  // 191. CREATINA REFRESHER LEMON TWIST
{
    id: 191,
    code: "7503037273957",
    name: "CREATINA REFRESHER LEMON TWIST",
    benefitSummary: "Creatina para esfuerzos cortos, fuerza y entrenamiento",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CREATINAREFRESHER-BM.webp",
    shortDesc: "Bebida en polvo con 5 g de creatina monohidratada, electrolitos y vitaminas. Sabor Lemon Twist, sin azúcar.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Lima Limón Natural, Ácido Málico, Stevia (Stevia rebaudiana), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "La creatina ayuda a rendir en esfuerzos cortos e intensos",
      "Puede apoyar la fuerza junto con entrenamiento",
      "Incluye minerales que participan en la función muscular",
      "Aporta vitaminas para complementar la alimentación",
      "Su sabor limón facilita integrarla a una bebida de entrenamiento"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica (especialmente renal o hepática) deben consultar a su profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

  // 192. NEUROCEBRYL COMPUESTO
  {
    id: 192,
    code: "7578945632172",
    name: "NEUROCEBRYL COMPUESTO",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NEUROCEBRYL-COMPUESTO.webp",
    shortDesc: "Suplemento líquido multivitamínico con complejo B, vitaminas antioxidantes (A, C, D3, E), calcio, jalea real e inositol.",
    ingredients: "Vitaminas del complejo B: Clorhidrato de Tiamina (B1) 15 mg, Riboflavina 5' Fosfato (B2) 18 mg, Clorhidrato de Piridoxina (B6) 10 mg, Cianocobalamina (B12) 12 µg, Niacinamida (B3) 20 mg, Ácido Pantoténico (B5) 20 mg, Ácido Fólico 400 µg. Vitaminas antioxidantes: Ácido Ascórbico (C) 50 mg, Alfatocoferol (E) 60 mg, Palmitato de Vitamina A 1000 UI, Colecalciferol (D3) 10 µg. Minerales y otros: Gluconato de Calcio 100 mg, Jalea Real Fresca 5 mg, Inositol 15 mg.",
    serving: "Adultos: 1 ampolleta al día. Niños: 1 ampolleta cada tercer día.",
    timing: "Oral, directamente",
    intakeInstructions: "Ingerir directamente el contenido de la ampolleta. EN NINGÚN CASO DEBERÁ INYECTARSE.",
    benefits: [
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Contribuyen al funcionamiento normal de los nervios",
      "Las vitaminas de la fórmula complementan el cuidado celular",
      "Reúne varios nutrientes en una sola presentación",
      "Su formato líquido ofrece una alternativa a tabletas y cápsulas"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 193. NAC NOW
  {
    id: 193,
    code: "733739000859",
    name: "NAC NOW",
    benefitSummary: "Cuidado antioxidante de las células",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NAC-NOW.webp",
    shortDesc: "N-Acetil Cisteína (NAC) 600 mg con Selenio 25 mcg. Precursor del glutatión para la protección celular.",
    ingredients: "N-Acetil Cisteína (NAC), L-Selenometionina (Selenio). Hipromelosa (cápsula de celulosa), Estearato de magnesio (fuente vegetal), Dióxido de silicio y Ácido cítrico.",
    serving: "1 cápsula, 2 veces al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 1 cápsula, 2 veces al día, con el estómago vacío o según indicación de un profesional de la salud.",
    benefits: [
      "Aporta NAC, un ingrediente usado para formar glutatión",
      "El glutatión participa en el cuidado antioxidante de las células",
      "Complementa la nutrición orientada al cuidado celular",
      "Permite incorporar N-acetilcisteína en cápsulas",
      "Su aporte principal es el NAC de la fórmula"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos o padece alguna enfermedad.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 194. LECHE DE SOYA SYMKEN
  {
    id: 194,
    code: "661951732107",
    name: "LECHE DE SOYA SYMKEN",
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/LECHE-DE-SOYA-SYMKEN.webp",
    shortDesc: "Bebida instantánea en polvo a base de proteína aislada de soya, adicionada con vitaminas y minerales.",
    ingredients: "Proteína aislada de soya, aceite vegetal, jarabe de maíz, maltodextrina, sucralosa, fosfato de calcio, citrato de potasio, sulfato ferroso, sulfato de zinc, yodato de potasio, sulfato de magnesio, palmitato de vitamina A, acetato de dl-alfa tocoferol (Vitamina E), ácido ascórbico (Vitamina C), niacinamida, tiamina, riboflavina, piridoxina, ácido fólico, ácido pantoténico, cianocobalamina, mono y diglicéridos, estearato de sodio, estearoil lactilato de sodio, saborizante artificial.",
    serving: "3 cucharadas soperas al ras (aprox. 25 g) + 200 ml de agua = 250 ml de bebida",
    timing: "Cualquier momento del día",
    intakeInstructions: "Verter 3 cucharadas soperas al ras (aprox. 25 g) en un vaso. Añadir agua potable a temperatura ambiente hasta llenar el vaso (250 ml). Remover vigorosamente.",
    benefits: [
      "Aporta proteína vegetal de soya",
      "Ayuda a completar la proteína de la alimentación",
      "Incluye vitaminas y minerales",
      "Ofrece una alternativa a las bebidas de origen lácteo",
      "Su formato en polvo permite preparar la cantidad deseada"
    ],
    contraindications: "Contiene soya.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 195. DYNEEM
  {
    id: 195,
    code: "7503016797221",
    name: "DYNEEM",
    yieldInfo: {
      durationDays: 30,
      note: "Frasco 1: 90 cápsulas ÷ 3 al día = 30 días. Frasco 2: 60 cápsulas ÷ 2 al día = 30 días. Los dos frascos se consumen en paralelo."
    },
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DYNEEM-GREENLIFE.webp",
    shortDesc: "Suplemento en dos frascos: Frasco 1 (hierbas) y Frasco 2 (vitaminas, minerales y jalea real).",
    ingredients: "Frasco 1: Neem (Azadirachta indica), Tecomate (Tecoma stans), Guarumbo (Cecropia obtusifolia), Nopal (Opuntia ficus-indica), Guayule (Parthenium argentatum), Eucalipto (Eucalyptus globulus), Sábila (Aloe vera), Zarzaparrilla (Smilax aristolochiifolia), Damiana de California (Turnera diffusa), Yerba del Sapo (Eryngium carlinae), Ajo (Allium sativum). Frasco 2: Palmitato de Vitamina A, Vitamina D3, Vitamina E, Vitaminas B1, B2, B6, B12, Vitamina C, Ácido fólico, Niacinamida, Fosfato dicálcico, Sulfato ferroso, Sulfato de zinc, Sulfato de cobre, Sulfato de manganeso, Sulfato de potasio, Sulfato de magnesio, Picolinato de cromo, Jalea real liofilizada.",
    serving: "Frasco 1: 1 cápsula, 3 veces al día. Frasco 2: 1 cápsula por la mañana y 1 por la tarde.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula del Frasco 1, 3 veces al día. Tomar 1 cápsula del Frasco 2 por la mañana y 1 por la tarde.",
    benefits: [
      "Combina una fórmula de plantas con otra de nutrientes",
      "Las vitaminas B ayudan a aprovechar la energía de los alimentos",
      "Sus vitaminas y minerales complementan la alimentación",
      "El zinc y la vitamina C contribuyen al funcionamiento de las defensas",
      "Presenta por separado los dos grupos de ingredientes"
    ],
    contraindications: "No consumir durante el embarazo o período de lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 196. DEMOGRASS PREMIER
  {
    id: 196,
    code: "7501172019348",
    name: "DEMOGRASS PREMIER",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPREMIER.webp",
    shortDesc: "Suplemento con 10 ingredientes botánicos: matake, cayena, cúrcuma, espirulina, arándano, moringa, enebro, olivo, inulina y naranjo amargo.",
    ingredients: "Matake (Grifola frondosa), Cayena, Cúrcuma (Curcuma longa), Espirulina (Arthrospira platensis), Arándano (Vaccinium myrtillus), Moringa (Moringa oleifera), Enebro (Juniperus communis), Olivo (Olea europaea), Inulina, Naranjo amargo (Citrus aurantium).",
    serving: "1 cápsula al día",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas, con un vaso de agua.",
    benefits: [
      "Combina distintos ingredientes vegetales",
      "Tiene un enfoque de bienestar digestivo",
      "Aporta compuestos vegetales antioxidantes",
      "Puede acompañar un plan de alimentación y actividad física",
      "Reúne la mezcla en una presentación práctica"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 197. TÉ PIÑALIM PLUS
  {
    id: 197,
    code: "7502217905350",
    name: "TÉ PIÑALIM PLUS",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-PINALIM-PLUS.webp",
    shortDesc: "Infusión herbal con piña, linaza, tés verde, rojo y blanco, aguaje peruano y corazón de alcachofa. USDA Organic, Kosher.",
    ingredients: "Pulpa de piña (16%), linaza (14%), té verde, té rojo y té blanco (14% cada uno), aguaje peruano (14%) y corazón de alcachofa (14%).",
    serving: "1 sobre (1 taza) al día, preferentemente por la noche",
    timing: "Por la noche",
    intakeInstructions: "Colocar agua caliente a 65°C en una taza, agregar la bolsita y reposar de 3 a 5 minutos. Endulzar al gusto. Si es la primera vez, comenzar con la mitad de la dosis.",
    benefits: [
      "Combina piña, linaza y distintos tés",
      "Los tés aportan compuestos antioxidantes",
      "Ofrece una bebida para acompañar la rutina después de comer",
      "Puede sustituir otras bebidas si se prepara sin azúcar",
      "Los sobres facilitan preparar una porción"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 198. SÁBILA 1 LT PROSA
  {
    id: 198,
    code: "7501734420100",
    name: "SÁBILA 1 LT PROSA",
    benefitSummary: "Sábila y vitamina C en una bebida",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SABILA-PROSA.webp",
    shortDesc: "Suplemento líquido de pulpa de sábila sin aloína, enriquecido con vitamina C.",
    ingredients: "Pulpa de sábila (Aloe barbadensis, Mill.), Vitamina C (Ácido Ascórbico).",
    serving: "60 ml (2 copitas), 3 veces al día",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 60 ml (2 copitas), 3 veces al día, antes de cada alimento. Refrigerar después de abrir.",
    benefits: [
      "Permite incorporar sábila en una bebida",
      "Su enfoque es el bienestar digestivo tradicional",
      "La vitamina C contribuye al funcionamiento de las defensas",
      "También ayuda al cuidado antioxidante de las células",
      "Ofrece una alternativa líquida para quien evita cápsulas"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 199. D MASTER PLATINUM
  {
    id: 199,
    code: "690939301219",
    name: "D MASTER PLATINUM",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DMasterPlatinum1.webp",
    shortDesc: "Suplemento con 8 extractos vegetales: gayuba, té verde, uva, manzana, jamaica, cacao, linaza y sábila.",
    ingredients: "Gayuba (Arctostaphylos uva-ursi), Té verde (Camellia sinensis), Uva (Vitis vinifera), Manzana (Malus domestica), Jamaica (Hibiscus sabdariffa), Cacao (Theobroma cacao), Linaza (Linum usitatissimum), Sábila (Aloe vera).",
    serving: "1 cápsula al día",
    timing: "Por la mañana, después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana, después de los alimentos, con abundante agua.",
    benefits: [
      "Combina plantas de uso tradicional",
      "Su ficha orienta la mezcla al bienestar urinario y digestivo",
      "Aporta compuestos vegetales antioxidantes",
      "Puede acompañar hábitos generales de autocuidado",
      "Reúne varios ingredientes en cápsulas"
    ],
    contraindications: "No consumir durante el embarazo. No tomarlo personas muy nerviosas. No tomarlo personas que estén tomando medicamentos. No tomarlo personas diabéticas e hipertensas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 200. D MASTER
  {
    id: 200,
    code: "690939301226",
    name: "D MASTER",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DMaster1.webp",
    shortDesc: "Suplemento con 7 extractos y fibras vegetales: linaza, sábila, nopal, té verde, fibra de piña, malva y raíz de lima.",
    ingredients: "Semilla de linaza (Linum usitatissimum), Sábila (Aloe vera), Nopal (Opuntia ficus-indica), Té verde (Camellia sinensis), Fibra de piña (Ananas comosus), Malva (Malva sylvestris), Raíz de lima (Citrus x aurantiifolia).",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua.",
    benefits: [
      "Aporta una mezcla de ingredientes vegetales",
      "Su enfoque es complementar el bienestar digestivo",
      "Incluye compuestos antioxidantes de las plantas",
      "Puede acompañar un plan de alimentación y actividad física",
      "Permite incorporar la mezcla sin preparar las plantas"
    ],
    contraindications: "No consumir durante el embarazo. No usar si es intolerante o sensible a los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 201. CUATECOMATE
  {
    id: 201,
    code: "7501735610036",
    name: "CUATECOMATE",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Cuartecomate1.webp",
    shortDesc: "Solución líquida de extractos vegetales (Cuatecomate, Eucalipto, Gordolobo) con 1.9% de alcohol.",
    ingredients: "Frutos de Cuatecomate (Crescentia sp.), Hojas de Eucalipto (Eucalyptus globulus), Flores de Gordolobo (Gnaphalium sp.), Agua, Sacarosa, Alcohol (1.9%).",
    serving: "10 ml (2 cucharadas soperas)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 10 ml (2 cucharadas soperas) después de los alimentos. No es recomendable para niños.",
    benefits: [
      "Combina cuatecomate y otros ingredientes tradicionales",
      "Tiene uso tradicional para el confort de la garganta",
      "Su presentación líquida permite medir una porción",
      "La miel y los ingredientes dulces aportan sabor",
      "Puede incorporarse a una rutina de cuidado estacional según la etiqueta"
    ],
    contraindications: "No consumir durante el embarazo y lactancia. No es recomendable para niños. Contiene 1.9% de alcohol.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 202. SUPER COLOSTRUM NOW
  {
    id: 202,
    code: "733739032164",
    name: "SUPER COLOSTRUM NOW",
    benefitSummary: "Calostro como complemento nutricional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SUPER-CALOSTRUM-NOW.webp",
    shortDesc: "Calostro bovino seco (1,000 mg) con InmunEnhancer™, hoja de olivo, astrágalo y eleuthero.",
    ingredients: "Calostro Bovino Seco (1,000 mg), InmunEnhancer™ (Arabinogalactano de Alerce) (200 mg), Hoja de Olivo (Extracto, min. 6% Oleuropeína) (200 mg), Raíz de Astrágalo (Astragalus membranaceus) (100 mg), Eleuthero (Raíz de Eleuterococo) (100 mg).",
    serving: "2 cápsulas al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 2 cápsulas al día, preferiblemente con el estómago vacío para una mejor absorción.",
    benefits: [
      "Aporta calostro bovino en cápsulas",
      "Contiene componentes propios del calostro",
      "Se estudia como complemento del bienestar intestinal",
      "Permite incorporar calostro sin su sabor característico",
      "Su enfoque es el apoyo nutricional complementario"
    ],
    contraindications: "Contiene leche. No fabricado con trigo, gluten, soja, huevo, pescado o marisco.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 203. NOPSOR POMADA
  {
    id: 203,
    code: "7504023954027",
    name: "NOPSOR POMADA",
    benefitSummary: "Hidratación, suavidad y cuidado de la piel",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/POMADA-NOPSOR.jpg",
    shortDesc: "Pomada tópica con alquitrán de hulla, ácido salicílico y extractos vegetales.",
    ingredients: "Vaselina, Propilenglicol, Alquitrán de hulla, Ácido Salicílico, Extracto de Nogal (Juglans sp.), Extracto de Orégano (Lippia sp.), Tomillo (Thymus vulgaris), Saúco (Sambucus sp.), Romero (Rosmarinus officinalis), Mastuerzo (Tropaeolum majus), Saponaria (Saponaria officinalis), Loeselia (Loeselia mexicana), Metilparabeno, Propilparabeno.",
    serving: "Aplicación tópica según necesidad",
    timing: "Por la noche",
    intakeInstructions: "Lavar la zona afectada, secar perfectamente y aplicar una cantidad generosa de Pomada Nopsor, dejándola actuar durante la noche. Uso externo únicamente.",
    benefits: [
      "Ayuda a mantener la piel hidratada",
      "Puede dar confort cuando hay resequedad",
      "Su base ayuda a proteger la superficie de la piel",
      "Facilita el cuidado local de áreas resecas",
      "Su formato en pomada permite aplicarla por zonas"
    ],
    contraindications: "Uso externo únicamente. Evitar el contacto con ojos y mucosas. Sólo para un periodo máximo de 4 días. No usar en niños menores de 3 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 204. CARTÍLAGO PRONAT
  {
      id: 204,
      code: "7501062946013",
      name: "CARTÍLAGO PRONAT",
      benefitSummary: "Cuidado articular y nutrición para el movimiento",
      category: "locomotor",
      image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CARTILAGO.png",
      shortDesc: "100% Cartílago de Tiburón puro en cápsulas. Rico en proteínas, colágeno, glucosamina, condroitina, calcio, fósforo, magnesio y zinc.",
      ingredients: "100% Cartílago de Tiburón en polvo. Sin excipientes ni aditivos.",
      serving: "3 cápsulas antes de cada comida (9 cápsulas al día)",
      timing: "Antes de cada alimento (desayuno, comida y cena)",
      intakeInstructions: "Tomar 3 cápsulas antes de cada alimento (desayuno, comida y cena) = 9 cápsulas al día. Recomendado a partir de 12 años.",
      benefits: [
        "Aporta ingredientes orientados al cuidado articular",
        "El calcio y el fósforo contribuyen al mantenimiento de los huesos",
        "El zinc contribuye al funcionamiento de las defensas",
        "Complementa la nutrición relacionada con el movimiento",
        "Reúne cartílago y minerales en cápsulas"
      ],
      contraindications: "Contiene derivados de pescado (tiburón). No consumir si se es alérgico a los productos del mar. No se recomienda en menores de 12 años. Consultar con un profesional de la salud si se está embarazada, en período de lactancia o bajo tratamiento médico.",
      foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
      interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 205. LEVADURA DE CERVEZA PRONAT
  {
    id: 205,
    code: "7501062910113",
    name: "LEVADURA DE CERVEZA",
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/LEVADURA.png",
    shortDesc: "Levadura de cerveza (Saccharomyces cerevisiae) en tabletas. Rica en proteínas, fibra, fósforo y vitaminas del complejo B.",
    ingredients: "Levadura de cerveza (Saccharomyces cerevisiae), Avicel, Estearato de magnesio.",
    serving: "3 tabletas antes de cada comida (9 tabletas al día)",
    timing: "Antes de cada comida",
    intakeInstructions: "Tomar 3 tabletas antes de cada comida (desayuno, comida y cena) = 9 tabletas al día. Recomendado a partir de 12 años.",
    benefits: [
      "Aporta levadura de cerveza en tabletas",
      "Complementa la alimentación con componentes propios de la levadura",
      "Las vitaminas B presentes participan en el uso de la energía",
      "Permite incorporar levadura sin añadirla a las comidas",
      "Su enfoque es el complemento nutricional diario"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 206. OMEGA MAXIMUM PRONAT
  {
    id: 206,
    code: "7501062912827",
    name: "OMEGA MAXIMUM PRONAT",
    benefitSummary: "Complemento nutricional para el cuidado del corazón",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/OMEGA-MAXIMUM.png",
    shortDesc: "Combinación de aceite de pescado (EPA/DHA), aceite de Sacha Inchi y aceite de linaza. Con vitamina E.",
    ingredients: "Aceite de pescado (EPA/DHA), Aceite de Sacha Inchi (Plukenetia volubilis) prensado en frío, Aceite de linaza (Linum usitatissimum) prensado en frío, Vitamina E (Alfa tocoferol).",
    serving: "1 cápsula, 3 veces al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, 3 veces al día, de preferencia con los alimentos. Recomendado a partir de 18 años.",
    benefits: [
      "Combina grasas de origen marino y vegetal",
      "Aporta omega 3 para complementar la alimentación",
      "El EPA y el DHA participan en el funcionamiento del corazón",
      "El DHA es un componente del cerebro y los ojos",
      "Incluye vitamina E como ingrediente antioxidante"
    ],
    contraindications: "Contiene derivados de pescado.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 207. 2MR
  {
    id: 207,
    code: "7503021404916",
    name: "2MR",
    benefitSummary: "Calma, bienestar mental y rutina de descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/2MR.png",
    shortDesc: "Combinación de L-Triptófano (295 mg), Rhodiola rosea (200 mg) y Melatonina (5 mg) por cápsula.",
    ingredients: "L-Triptófano (295 mg), Rhodiola rosea (200 mg), Melatonina (5 mg).",
    serving: "1 cápsula al día",
    timing: "Por la noche después de cenar",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche después de cenar, o según indicación de un especialista.",
    benefits: [
      "La melatonina ayuda a regular el horario de sueño",
      "Puede facilitar conciliar el sueño cuando corresponde su uso",
      "El triptófano participa en la formación de mensajeros relacionados con el descanso",
      "La rhodiola complementa el enfoque de bienestar mental",
      "Reúne ingredientes orientados a una rutina de descanso"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 208. CÁPSULAS DE ACEITE DE ORÉGANO
  {
    id: 208,
    code: "7503008731042",
    name: "CÁPSULAS DE ACEITE DE ORÉGANO",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/OREGANO-ORGANICO.png",
    shortDesc: "Aceite de orégano orgánico (Lippia graveolens) con aceite de oliva. Libre de OMG.",
    ingredients: "Aceite de orégano orgánico (Lippia graveolens), Aceite de oliva.",
    serving: "Adultos: 1 cápsula, hasta 3 veces al día. Niños mayores de 7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, hasta 3 veces al día (adultos) o 1 cápsula al día (niños mayores de 7 años). Tomar suficiente agua.",
    benefits: [
      "Aporta aceite de orégano en cápsulas",
      "Contiene compuestos antioxidantes propios del orégano",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "Permite incorporarlo sin el sabor intenso del aceite",
      "Su formato facilita llevar la porción indicada"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 209. CREATINA REFRESHER PINK
  {
    id: 209,
    code: "7503057040911",
    name: "CREATINA REFRESHER PINK",
    benefitSummary: "Creatina para esfuerzos cortos, fuerza y entrenamiento",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CREATINA-REFRESHER-PINK.png",
    shortDesc: "Bebida en polvo con 5 g de creatina monohidratada, electrolitos y vitaminas. Sabor Pink Lemonade, sin azúcar.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Fresa Limón Natural, Stevia (Stevia rebaudiana), Extracto de Betacarotenos (Blakeslea trispora), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "La creatina ayuda a rendir en esfuerzos cortos e intensos",
      "Puede apoyar la fuerza junto con entrenamiento",
      "Incluye minerales que participan en la función muscular",
      "Aporta vitaminas para complementar la alimentación",
      "Su sabor permite variar la bebida de entrenamiento"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica deben consultar a su profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 210. PATA DE VACA
  {
    id: 210,
    code: "7502214013294",
    name: "PATA DE VACA",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PATA-DE-VACA.png",
    shortDesc: "Suplemento con Bauhinia forticata (300 mg por cápsula). Para el bienestar metabólico.",
    ingredients: "Pata de Vaca (Bauhinia forticata) 300 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Pata de Vaca al día, con alimentos.",
    benefits: [
      "Aporta pata de vaca en cápsulas",
      "Tiene uso tradicional en el cuidado metabólico",
      "Contiene compuestos vegetales que complementan la alimentación",
      "Su enfoque también incluye el bienestar digestivo tradicional",
      "Permite incorporar la planta sin preparar una infusión"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 211. PALO AZUL UVA URSI
  {
    id: 211,
    code: "7502214013218",
    name: "PALO AZUL UVA URSI",
    benefitSummary: "Bienestar urinario y plantas de uso tradicional",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PALO-AZUL.png",
    shortDesc: "Combinación de Palo Azul (Cyclolepis genistoides) y Uva Ursi (Arctostaphylos uva-ursi). 150 mg de cada extracto.",
    ingredients: "Palo Azul (Cyclolepis genistoides) 150 mg, Uva Ursi (Arctostaphylos uva-ursi) 150 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Palo Azul Uva Ursi al día.",
    benefits: [
      "Combina palo azul y uva ursi",
      "Tiene uso tradicional para el bienestar urinario",
      "Se utiliza tradicionalmente para acompañar la eliminación de líquidos",
      "Reúne ambos ingredientes botánicos en cápsulas",
      "Su enfoque es el cuidado urinario complementario"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 212. GLUCONATO DE ZINC PRONACEN
  {
    id: 212,
    code: "7503000733662",
    name: "GLUCONATO DE ZINC PRONACEN",
    benefitSummary: "Minerales para defensas y cuidado celular",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GLUCONATO-DE-ZINC-PROSA.png",
    shortDesc: "Suplemento de zinc en forma de gluconato. 20 mg de zinc elemental por tableta.",
    ingredients: "Gluconato de zinc (aporta 20 mg de zinc elemental), Estearato de magnesio, Celulosa microcristalina, Fosfato dibásico de calcio.",
    serving: "1 tableta al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
      "El zinc contribuye al funcionamiento de las defensas",
      "Ayuda al mantenimiento normal de piel, cabello y uñas",
      "Participa en la formación normal de proteínas",
      "Contribuye al cuidado antioxidante de las células",
      "Permite complementar el zinc de la alimentación"
    ],
    contraindications: "La ingesta excesiva de Zinc (más de 40 mg al día en adultos) puede interferir con la absorción de cobre.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 213. CHA-CHA STONE
  {
    id: 213,
    code: "7501170130021",
    name: "CHA-HA STONE",
    benefitSummary: "Bienestar urinario y plantas de uso tradicional",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CHA-CHA-STONE.png",
    shortDesc: "Suplemento con 7 extractos de plantas: Chanca Piedra, Yumel, Cola de Caballo, Perejil, Hierba del Sapo, Cardo Mariano y Taray.",
    ingredients: "Chanca Piedra (Phyllanthus niruri), Yumel (Guatteria gaumeri), Cola de Caballo (Equisetum arvense), Perejil (Petroselinum crispum), Hierba del Sapo (Eryngium carlinae), Cardo Mariano (Silybum marianum), Taray (Tamarix gallica).",
    serving: "3 tabletas al día (1 antes de cada alimento)",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 3 tabletas al día: 1 tableta antes de cada alimento principal (desayuno, comida y cena).",
    benefits: [
      "Combina plantas de uso tradicional urinario",
      "Su enfoque incluye el bienestar digestivo",
      "Se utiliza tradicionalmente para acompañar la eliminación de líquidos",
      "Permite incorporar varios ingredientes vegetales en tabletas",
      "Complementa una rutina de cuidado general"
    ],
    contraindications: "No consumir durante el embarazo o período de lactancia. No usar si es intolerante o sensible a los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 214. BEBIDA DE ALPISTLE
  {
    id: 214,
    code: "7503026253656",
    name: "BEBIDA DE ALPISTE",
    benefitSummary: "Una bebida vegetal para variar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BEBIDA-DE-ALPISTLE.png",
    shortDesc: "Bebida instantánea en polvo con harina de alpiste, maltodextrina y goma xantana.",
    ingredients: "Harina de alpiste (Phalaris canariensis), Maltodextrina, Azúcar, Goma xantana.",
    serving: "10 g (2 cucharadas) en 100 ml de agua",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 10 g (aproximadamente 2 cucharadas) en 100 ml de agua, mezclar hasta obtener una consistencia homogénea y consumir de inmediato.",
    benefits: [
      "Ofrece una bebida preparada con ingredientes vegetales",
      "Aporta energía a través de los carbohidratos de la fórmula",
      "Permite variar las bebidas de la alimentación",
      "Su presentación en polvo facilita medir una porción",
      "Se puede integrar a distintas preparaciones"
    ],
    contraindications: "Puede contener trazas de soya, almendra y coco.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 215. L-CARNITINA PROWINNER
  {
    id: 215,
    code: "7501062913671",
    name: "L-CARNITINA PROWINNER",
    benefitSummary: "Complemento de alimentación y actividad física",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-CARNITINA-PROWINNER.png",
    shortDesc: "L-Carnitina 100% pura en cápsulas de 450 mg. Para el metabolismo energético.",
    ingredients: "L-Carnitina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "La L-carnitina participa en el uso de grasas como energía",
      "Complementa la alimentación de personas físicamente activas",
      "Su fórmula se centra en L-carnitina",
      "Permite incorporar el ingrediente sin preparar una bebida",
      "Puede acompañar un plan de alimentación y entrenamiento"
    ],
    contraindications: "No recomendado en menores de 6 años ni en mujeres embarazadas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 216. ACEITE DE ORÉGANO Y COCO
  {
    id: 216,
    code: "7503008731387",
    name: "ACEITE DE ORÉGANO Y COCO",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-OREGANO-Y-COCO-CAPS.png",
    shortDesc: "Combinación de aceite de coco y aceite esencial de orégano. Libre de OMG.",
    ingredients: "Aceite de coco (Cocos nucifera), Aceite esencial de orégano (Lippia graveolens).",
    serving: "Adultos: 1 cápsula, hasta 2 veces al día. Niños >7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente. Beber suficiente agua.",
    benefits: [
      "Combina aceite de orégano y coco",
      "El coco aporta grasas que el cuerpo puede usar como energía",
      "El orégano contiene compuestos antioxidantes",
      "Tiene un enfoque tradicional de bienestar digestivo",
      "Las cápsulas permiten evitar el sabor intenso de los aceites"
    ],
    contraindications: "No recomendado en mujeres embarazadas o en período de lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 217. L-LISINA PROWINNER
  {
    id: 217,
    code: "7501062912735",
    name: "L-LISINA PROWINNER",
    benefitSummary: "Lisina para la formación de proteínas",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-LISINA-PROWINNER.png",
    shortDesc: "L-Lisina 100% pura en cápsulas de 450 mg. Aminoácido esencial para la formación de proteínas.",
    ingredients: "L-Lisina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "Aporta lisina, un componente que el cuerpo necesita obtener de la dieta",
      "Participa en la formación de proteínas",
      "Ayuda a cubrir necesidades nutricionales de crecimiento y mantenimiento",
      "Complementa la alimentación de personas activas",
      "Su fórmula permite incorporar lisina en cápsulas"
    ],
    contraindications: "No recomendado en menores de 6 años ni en mujeres embarazadas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 218. 5-HTP
  {
    id: 218,
    code: "7500645000043",
    name: "5-HTP",
    benefitSummary: "Calma, bienestar mental y rutina de descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/5-htp.png",
    shortDesc: "5-Hidroxitriptófano (100 mg) precursor de la serotonina. Libre de gluten y aditivos.",
    ingredients: "5-HTP (5-Hidroxitriptófano) 100 mg, Celulosa microcristalina c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con las comidas",
    intakeInstructions: "Tomar 1 cápsula (500 mg) al día, preferiblemente con las comidas, o según indicación de un especialista.",
    benefits: [
      "Aporta 5-HTP, un ingrediente usado para formar serotonina",
      "La serotonina participa en procesos relacionados con ánimo y descanso",
      "Se estudia como complemento del bienestar emocional",
      "Su enfoque incluye acompañar una rutina de descanso",
      "Permite identificar el aporte de 5-HTP de la fórmula"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. Interacciona con antidepresivos (ISRS) y otros medicamentos serotoninérgicos.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de combinar con antidepresivos, incluidos los llamados ISRS e IMAO, o con otros medicamentos que aumentan la serotonina, una sustancia que participa en el estado de ánimo y otras funciones."
  },

  // 219. VEGI PROTEIN NANO FEAR
  {
    id: 219,
    code: "7503021404794",
    name: "VEGI PROTEIN NANO FEAR",
    benefitSummary: "Proteína para músculos y recuperación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VEGI-PROTEIN-NANO-FEAR.png",
    shortDesc: "Proteína vegana orgánica con mezcla de guisante, arroz, calabaza, sésamo, soya, girasol y almendras. 25 g de proteína por porción.",
    ingredients: "Proteína de guisante orgánica, Proteína de arroz orgánica, Proteína de calabaza orgánica, Proteína de sésamo orgánico, Aislado de proteína de soya, Proteína de girasol, Proteína de almendras, Cacao orgánico, Saborizante natural a chocolate, Sal marina, Mezcla de enzimas (Bromelina, Papaina, Proteasa), Aceite de coco orgánico, Stevia orgánica, Goma xantana, Lecitina de girasol, Ácido málico.",
    serving: "1 cucharada (30 g) en 360 ml de agua",
    timing: "Antes y/o después del entrenamiento",
    intakeInstructions: "Mezclar 1 cucharada (30 g) en 360 ml de agua y licuar. Consumir antes y/o después del entrenamiento.",
    benefits: [
      "Aporta proteína vegetal para completar la alimentación",
      "Ayuda al mantenimiento y desarrollo muscular",
      "Ofrece componentes necesarios para formar proteína",
      "Incluye enzimas como complemento digestivo",
      "Ofrece una alternativa a las proteínas de suero de leche"
    ],
    contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 220. ISOFEAR
  {
    id: 220,
    code: "646437080118",
    name: "ISOFEAR",
    benefitSummary: "Proteína para músculos y recuperación",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Isofear_Chocolate_2kg_1_4c878549-63bf-435f-8a4d-0c2b9d51ebf6.webp",
    shortDesc: "Aislado de proteína de suero hidrolizada. 25 g de proteína, 0 g de carbohidratos y grasas por porción.",
    ingredients: "Aislado de Proteína de Suero de leche Ionizada y Micro-filtrada, Péptidos de bajo peso molecular y Parcialmente Hidrolizados de Suero de Leche y Soya. L-Carnitina, Valina, Lisina, Iso-Leucina, Cloruro de Sodio, Sabor Natural y Artificial a Vainilla, Goma Xantana, Enzimas (Proteasa y Peptidasa), Sucralosa.",
    serving: "1-2 medidas (30 g cada una) en 360 ml de agua",
    timing: "Post-entreno o entre comidas",
    intakeInstructions: "Mezclar de 1 a 2 medidas (30 g cada una) en 360 ml de tu bebida favorita. Agitar hasta disolver.",
    benefits: [
      "Aporta proteína de suero para complementar la dieta",
      "Ayuda al mantenimiento y desarrollo de los músculos",
      "Puede acompañar la recuperación después de entrenar",
      "Facilita sumar proteína en una bebida",
      "Incluye L-carnitina como parte de la fórmula"
    ],
    contraindications: "No debe ser consumido por personas con hipersensibilidad a los ingredientes. Alérgenos: SOYA, LÁCTEOS, HUEVO, TRIGO, NUEZ Y CACAHUATE.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 221. SUKUNAI KIROS MAX
  {
    id: 221,
    code: "7502243203727",
    name: "SUKUNAI KIROS MAX",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SukunaiKirosMax1-1.webp",
    shortDesc: "Suplemento con 7 extractos vegetales (linaza, raíz de lima, malva, mango africano, piña, papaya, lecitina de soya) y vitamina B12, magnesio y calcio.",
    ingredients: "Semilla de Linaza (Linum usitatissimum), Raíz de Lima (Citrus x aurantiifolia), Flor y hoja de Malva (Malva sylvestris), Mango Africano (Irvingia gabonensis), Lecitina de Soya, Polvo de fruto de Piña (Ananas comosus), Polvo de fruto de Papaya (Carica papaya), Cianocobalamina (Vitamina B12), Carbonato de Calcio, Estearato de Magnesio, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día con un vaso de agua. No exceder la porción indicada.",
    benefits: [
      "Combina plantas e ingredientes con enfoque digestivo",
      "Incluye enzimas que participan en la descomposición de alimentos",
      "Aporta vitaminas y minerales de la fórmula",
      "Puede acompañar hábitos de alimentación ordenada",
      "Reúne varios ingredientes en cápsulas"
    ],
    contraindications: "No consumir durante el embarazo. Contiene soya (lecitina).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 222. PIÑALINAZA
  {
    id: 222,
    code: "7503006152023",
    name: "PIÑALINAZA",
    benefitSummary: "Fibra y complemento del bienestar intestinal",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Pinalinaza1.webp",
    shortDesc: "Suplemento en polvo con linaza canadiense, piña, toronja, naranja y nopal. Rico en fibra y Omega 3, 6 y 9.",
    ingredients: "Piña (Ananas comosus), Linaza (Linum usitatissimum) - Linaza Canadiense, Toronja (Citrus paradisi), Naranja (Citrus sinensis), Nopal (Opuntia ficus-indica).",
    serving: "2 cucharadas soperas (7.8 g) antes de cada comida",
    timing: "Antes de cada comida (3 veces al día)",
    intakeInstructions: "Mezclar 2 cucharadas soperas (7.8 g) con agua, jugo o añadir a preparaciones. Tomar 3 veces al día antes de las comidas.",
    benefits: [
      "Aporta fibra para complementar la alimentación",
      "La fibra contribuye a la regularidad intestinal",
      "Puede ayudar a aumentar la sensación de llenura",
      "Incluye grasas procedentes de la linaza",
      "Su polvo se puede incorporar a distintas preparaciones"
    ],
    contraindications: "No está indicado para mujeres embarazadas y niños menores de 12 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 223. WEREKE PROSA
  {
    id: 223,
    code: "7501734412846",
    name: "WEREKE PROSA",
    benefitSummary: "Apoyo nutricional al bienestar metabólico",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/WEREKE.webp",
    shortDesc: "Suplemento con 8 extractos vegetales de uso tradicional mexicano, incluyendo Wereke, Gatuña, Guayacán, Tamarindo, Nopal y Manzanilla.",
    ingredients: "Wereke (Maximowiczia sonorae) - Raíz, Gatuña (Guaiacum sp.) - Planta, Guayacán amarillo (Guaiacum coulteri) - Corteza, Tamarindo (Tamarindus indica) - Fruto, Nopal (Opuntia ficus-indica) - Penca, Raíz de Zacate de perro (Cynodon dactylon) - Raíz, Raíz de Coanacaxtle - Raíz, Manzanilla (Matricaria chamomilla) - Flor.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día, después de los alimentos.",
    benefits: [
      "Combina wereke y otras plantas de uso tradicional",
      "Su enfoque es el bienestar digestivo y metabólico",
      "Permite incorporar ingredientes de la herbolaria mexicana",
      "Se integra a hábitos de alimentación y actividad física",
      "Reúne la mezcla botánica en cápsulas"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 224. ACEITE DE ORÉGANO GOTAS ORE
  {
    id: 224,
    code: "7503008731202",
    name: "ACEITE DE ORÉGANO GOTAS ORE",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-OREGANO-GOTERO-20-ML.webp",
    shortDesc: "Aceite de orégano 100% natural estandarizado al 80% de carvacrol.",
    ingredients: "Aceite de orégano (Lippia graveolens) 100% natural, estandarizado al 80% de carvacrol, aceite de oliva.",
    serving: "Adultos: 4 a 12 gotas, 2 veces al día. Niños >6 años: 1 a 2 gotas, 1-2 veces al día. Niños 2-6 años: 1 gota al día.",
    timing: "Con alimentos",
    intakeInstructions: "Diluir las gotas en agua, jugo o leche. No usar en menores de 2 años.",
    benefits: [
      "Aporta aceite de orégano con carvacrol",
      "Contiene compuestos vegetales con actividad antioxidante",
      "Tiene uso tradicional como complemento digestivo",
      "El gotero facilita medir la cantidad indicada",
      "Permite incorporar el aceite sin preparar la planta"
    ],
    contraindications: "No usar durante el embarazo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 225. B12 NOW
  {
    id: 225,
    code: "733739004598",
    name: "B12 NOW",
    benefitSummary: "Vitamina B12 para nervios y formación de la sangre",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/B12-NOW.webp",
    shortDesc: "Vitamina B12 2,000 mcg en pastillas sublinguales. Combinación de cianocobalamina, metilcobalamina y dibencozida.",
    ingredients: "Cianocobalamina, Metilcobalamina y Dibencozida (Vitaminas B12). Fructosa, celulosa, ácido cítrico, estearato de magnesio (fuente vegetal), sabor a fresa natural y lecitina de soya.",
    serving: "1 pastilla al día",
    timing: "Cualquier momento del día",
    intakeInstructions: "Masticar la pastilla o disolverla completamente en la boca (sublingual o debajo de la lengua) hasta que se deshaga. No tragar entera.",
    benefits: [
      "La vitamina B12 ayuda al funcionamiento de los nervios",
      "Participa en la formación normal de glóbulos rojos",
      "Ayuda a obtener energía de los alimentos",
      "Contribuye a reducir el cansancio por falta de B12",
      "Permite complementar el aporte de esta vitamina en la dieta"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos o padece alguna condición médica.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },
    
  // 226. CARSYL GREEN JARABE 80 ML
  {
    id: 226,
    code: "7503016797122",
    name: "CARSYL GREEN JARABE 80 ML",
    benefitSummary: "Plantas de uso tradicional para el bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CARSYLGREENJARABE.webp",
    shortDesc: "Jarabe con 6 extractos botánicos: Boldo, Cardo Mariano, Cusura, Diente de León, Anagirida y Marrubio. Para el bienestar digestivo y hepático.",
    ingredients: "Boldo (Peumus boldus), Cardo Mariano (Silybum marianum), Cusura (Quassia amara), Diente de León (Taraxacum officinale), Anagirida (Styphnolobium), Marrubio (Marrubium vulgare).",
    serving: "3 ml (una cucharadita) al día",
    timing: "Preferentemente antes de las comidas principales",
    intakeInstructions: "Agitar bien antes de usar. Administrar directamente o diluido en un poco de agua. Tomar 3 ml (una cucharadita) al día, preferentemente antes de las comidas principales.",
    benefits: [
      "Incluye cardo mariano y otros ingredientes vegetales",
      "Tiene uso tradicional como complemento del cuidado del hígado",
      "Su enfoque es el bienestar digestivo",
      "Puede acompañar el confort después de las comidas",
      "Su presentación líquida ofrece una alternativa a las cápsulas"
    ],
    contraindications: "No especificado. Consultar lote y fecha de caducidad en el envase.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },
// 245. VITAMINA D3 & K2 NOW
{
    id: 245,
    code: "733739003690",
    name: "VITAMINA D3 & K2 NOW",
    benefitSummary: "Nutrientes para el mantenimiento de los huesos",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3K2.avif",
    shortDesc: "Combinación sinérgica de Vitamina D3 (25 mcg / 1,000 IU) y Vitamina K2 (45 mcg, MK-4). Vegano, Non-GMO y libre de alérgenos. Apoya la salud ósea y cardiovascular.",
    ingredients: "Vitamina D3 (Colecalciferol) 25 mcg, Vitamina K2 (Menaquinona-4) 45 mcg, Harina de Arroz, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida que contenga grasas para una óptima absorción. Solo para adultos.",
    benefits: [
      "La vitamina D ayuda a absorber el calcio",
      "Las vitaminas D y K contribuyen al mantenimiento de los huesos",
      "La vitamina D apoya el funcionamiento de los músculos",
      "También contribuye al funcionamiento de las defensas",
      "Combina dos vitaminas relacionadas con el cuidado óseo"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos (especialmente anticoagulantes o para la presión arterial) o padece alguna condición médica.",
    foodInteractions: "Tomar con una comida que incluya algo de grasa, como aguacate, huevo o aceite de oliva, para que el cuerpo aproveche mejor el producto.",
    interactions: "Consultar si el cliente toma warfarina u otros anticoagulantes similares, medicamentos para evitar coágulos."
},
// 246. L-GLUTAMINE + NAG
{
    id: 246,
    code: "7500645001583",
    name: "L-GLUTAMINE + NAG",
    benefitSummary: "Nutrición para el cuidado de la capa digestiva",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/L-GLUTAMINE-NAG.jpg",
    shortDesc: "Fórmula en polvo para el soporte de la mucosa digestiva y la barrera intestinal. Combina L-Glutamina, NAG, Zinc L-carnosina, Aloe vera, Vitamina D3 e Inulina de agave. Sabor frambuesa-limón.",
    ingredients: "Inulina de agave (2.58 g), L-Glutamina (2 g), N-Acetil-D-Glucosamina (NAG) (800 mg, origen no crustáceo), Aloe vera en polvo (100 mg), Zinc L-carnosina (100 mg, aporta 21 mg de zinc elemental), Vitamina D3 (10 µg), Sabor frambuesa-limón, Ácido cítrico, Glucósidos de esteviol.",
    serving: "1 scoop (6 g) al día",
    timing: "Con alimentos, preferentemente con la comida principal",
    intakeInstructions: "Mezclar 1 scoop (6 g) en 250 ml de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente con alimentos.",
    benefits: [
      "Su enfoque es el cuidado de la capa que recubre el intestino",
      "La glutamina sirve de alimento a algunas células intestinales",
      "El zinc contribuye al mantenimiento normal de los tejidos",
      "La inulina aporta fibra para complementar la alimentación",
      "Incluye sábila y otros ingredientes de enfoque digestivo"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

    // 227. CITRATO DE MAGNESIO 90 CAPS
{
    id: 227,
    code: "7503026253991",
    name: "CITRATO DE MAGNESIO 90 CAPS",
    benefitSummary: "Magnesio para músculos, nervios y energía",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/CITRATO-MAGNESIO1-1.jpg",
    shortDesc: "Suplemento de citrato de magnesio, forma orgánica de alta biodisponibilidad y excelente tolerancia digestiva. 500 mg por cápsula.",
    ingredients: "Citrato de magnesio (750 mg por porción de 3 cápsulas), excipientes c.b.p. (celulosa microcristalina, estearato de magnesio, dióxido de silicio).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos para mejorar la absorción. No exceder la dosis diaria recomendada.",
    benefits: [
      "El magnesio ayuda al funcionamiento normal de los músculos",
      "Apoya el funcionamiento de los nervios",
      "Ayuda a obtener energía de los alimentos",
      "Contribuye a mantener los huesos en buen estado",
      "Participa en el equilibrio de agua y minerales del cuerpo"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes de la fórmula.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},
    
    // 228. GLICINATO DE MAGNESIO 90 CAPS
{
    id: 228,
    code: "7500645000876",
    name: "GLICINATO DE MAGNESIO 90 CAPS",
    benefitSummary: "Magnesio para músculos, nervios y energía",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/GLICINATO1.webp",
    shortDesc: "Suplemento de glicinato de magnesio, forma quelada de alta biodisponibilidad y excelente tolerancia digestiva, combinado con tallo de brócoli en polvo. Libre de gluten y lactosa.",
    ingredients: "Glicinato de magnesio (250 mg), Estearato de magnesio (150 mg), Tallo de Brócoli en polvo (Brassica oleracea var. Italica) (100 mg), excipientes c.b.p. 500 mg (cápsula vegetal).",
    serving: "1 cápsula al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche acompañada de un vaso de agua. No exceder la dosis diaria recomendada.",
    benefits: [
      "Aporta magnesio en forma de glicinato",
      "Contribuye al funcionamiento de músculos y nervios",
      "Ayuda a aprovechar la energía de los alimentos",
      "Apoya el mantenimiento de los huesos",
      "Incluye brócoli como ingrediente vegetal de la fórmula"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

    // 229. OMEGA INFANTIL PRONAT
{
    id: 229,
    code: "7501062914722",
    name: "OMEGA INFANTIL PRONAT",
    benefitSummary: "Omega 3 para complementar la alimentación infantil",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/OMEGA-KIDS.avif",
    shortDesc: "Suplemento en gomitas masticables con aceite de salmón noruego (EPA 152 mg, DHA 96 mg) y vitamina E. Ideal para niños a partir de 6 años.",
    ingredients: "Aceite de Salmón Noruego, Vitamina E, Azúcar, Glucosa, Grenetina, Agua, Ácido Cítrico, Saborizante. Contiene derivados de pescado.",
    serving: "4 gomitas al día (8 g)",
    timing: "Después de los alimentos, preferentemente por la mañana",
    intakeInstructions: "Ingerir 4 gomitas una vez al día, después de los alimentos, de preferencia por la mañana. Masticar bien antes de tragar. Recomendado a partir de 6 años.",
    benefits: [
      "Aporta omega 3 en una presentación masticable",
      "El DHA forma parte del cerebro",
      "El DHA también es importante para los ojos",
      "Permite incorporar aceite de pescado en gomitas",
      "Su presentación está orientada a la edad indicada en la etiqueta"
    ],
    contraindications: "Contiene derivados de pescado. Contiene un desecante NO INGERIBLE dentro del frasco. No especificado para alergias.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 230. VITAMINA K2
{
    id: 230,
    name: "VITAMINA K2",
    benefitSummary: "Nutrientes para el mantenimiento de los huesos",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3-K2-NOW.avif",
    shortDesc: "Vitamina K2 (MK-4) 100 mcg con polvo de alfalfa. Vegano, Non-GMO y Kosher. Apoya la salud ósea y cardiovascular.",
    ingredients: "Vitamina K2 (Menaquinona-4 / MK-4) 100 mcg, Polvo de Alfalfa (Partes aéreas) 250 mg, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Harina de Arroz, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida con grasas (como aguacate, frutos secos o aceites) para mejorar la absorción. Solo para adultos.",
    benefits: [
      "La vitamina K participa en el mantenimiento de los huesos",
      "Interviene en el funcionamiento de proteínas relacionadas con el calcio",
      "También contribuye a la coagulación normal de la sangre",
      "Permite complementar la vitamina K de la alimentación",
      "Su fórmula aporta vitamina K2"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos anticoagulantes (como warfarina) o padece alguna condición médica.",
    foodInteractions: "Tomar con una comida que incluya algo de grasa, como aguacate, huevo o aceite de oliva, para que el cuerpo aproveche mejor el producto.",
    interactions: "Consultar si el cliente toma warfarina u otros anticoagulantes similares, medicamentos para evitar coágulos."
},

// 231. TÓNICO INDIO TZAPOTLATENA
{
    id: 231,
    code: "7501735661014",
    name: "TÓNICO INDIO TZAPOTLATENA",
    benefitSummary: "Plantas tradicionales para digestión y bienestar",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/tonico-indio-tzapotlatena-1l.webp",
    shortDesc: "Elixir herbal con 9 extractos de plantas (Boldo, Damiana, Alfalfa, Calea zacatechichi, Aristolochia, etc.). Inspirado en la tradición de los guerreros aztecas.",
    ingredients: "Extractos hidroalcohólicos de: Aristolochia sp., Calea zacatechichi, Cymbia scolymus, Juliana adstringens, Medicago sativa, Peumus boldus, Selaginella lepidophylla, Senecio vulneraria, Turnera diffusa.",
    serving: "10 ml (1 copita) al día",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 1 copita (10 ml), equivalente a 2 cucharadas soperas, antes de los alimentos.",
    benefits: [
      "Combina plantas de uso tradicional digestivo",
      "El boldo complementa el enfoque de bienestar después de comer",
      "Incluye ingredientes tradicionalmente asociados con la vitalidad",
      "El toronjil y otras plantas pueden acompañar una rutina de calma",
      "Su formato líquido permite incorporar la mezcla sin preparar las plantas"
    ],
    contraindications: "Contiene alcohol (extracto hidroalcohólico). Consultar con médico en caso de embarazo, lactancia o condiciones médicas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 232. CACAO ORGÁNICO EN POLVO CULTO
{
    id: 232,
    code: "7500000000000",
    name: "CACAO ORGÁNICO EN POLVO CULTO",
    benefitSummary: "Cacao: sabor, fibra y compuestos antioxidantes",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/CACAO-ORGANICO-EN-POLVO.jpg",
    shortDesc: "100% Cacao en polvo criollo de Tabasco. Sin azúcares añadidos, conservadores ni aditivos. Rico en teobromina, flavonoides y fibra.",
    ingredients: "100% Cacao en polvo (Criollo de Tabasco, México).",
    serving: "1 cucharada (5 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Mezclar 1 cucharada sopera (5 g) en leche, agua, bebidas vegetales (batidos/smoothies), o utilizar para preparaciones de repostería.",
    benefits: [
      "Aporta el sabor del cacao puro a bebidas y recetas",
      "Contiene compuestos antioxidantes propios del cacao",
      "Aporta fibra para complementar la alimentación",
      "La teobromina tiene un efecto estimulante suave",
      "Permite preparar bebidas y postres ajustando el dulzor al gusto"
    ],
    contraindications: "Contiene cafeína natural. Consumir con moderación en personas sensibles a la cafeína.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 233. DIETERS DRINK
{
    id: 233,
    code: "7501730103168",
    name: "DIETERS DRINK",
    benefitSummary: "Apoyo ocasional a la evacuación",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/DIETERS-DRINK.jpg",
    shortDesc: "Suplemento en capletas con hoja de sen y malva. Para el apoyo al tránsito intestinal y el confort digestivo.",
    ingredients: "Hoja de sen (Cassia angustifolia), Malva (Malva sylvestris), Lactosa USP, Estearato de Magnesio.",
    serving: "2 capletas al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 2 capletas al día, preferentemente por la noche, con un vaso lleno de agua. No exceder la dosis diaria recomendada.",
    benefits: [
      "El sen estimula el movimiento del intestino",
      "Su uso se dirige al estreñimiento ocasional",
      "Puede facilitar la evacuación cuando corresponde su uso",
      "La malva complementa la fórmula con componentes vegetales",
      "Su beneficio se limita al uso ocasional indicado en la etiqueta"
    ],
    contraindications: "Evitar su uso en caso de embarazo, lactancia, problemas gastrointestinales severos o si se está tomando algún medicamento.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 234. ACTIKROLL PARA NIÑOS
{
    id: 234,
    code: "714908101065",
    name: "ACTIKROLL PARA NIÑOS",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACTIKROLL.jpg",
    shortDesc: "Jarabe multivitamínico con jalea real, ácido glutámico, vitaminas del complejo B y glicerofosfato de sodio. Para niños de 1 a 6 años y mayores.",
    ingredients: "Agua Purificada, Sacarosa, Fructosa, Glicerofosfato de Sodio, Jalea Real, Ácido Glutámico, Nicotinamida (B3), Pantotenato de Calcio (B5), Clorhidrato de piridoxina (B6), Riboflavina 5 fosfato (B2), Clorhidrato de tiamina (B1), Ácido Fólico, Cianocobalamina (B12), Propilenglicol, Ácido Cítrico, Metilparabeno sódico, Propilparabeno sódico, Sabor crema vainilla y Sabor tutifruti.",
    serving: "Niños 1-6 años: ½ cucharadita (2.5 ml) 3 veces al día. Niños >6 años: 1 cucharadita (5.0 ml) 3 veces al día.",
    timing: "Con alimentos",
    intakeInstructions: "Agítese antes de usarse. Utilizar el vaso dosificador incluido. Niños de 1 a 6 años: ½ cucharadita (2.5 ml), 3 veces al día. Niños mayores de 6 años: 1 cucharadita (5.0 ml), 3 veces al día.",
    benefits: [
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Contribuyen al funcionamiento normal de los nervios",
      "El ácido fólico participa en la formación de nuevas células",
      "Complementa la alimentación con los nutrientes de la fórmula",
      "Su formato líquido está orientado a la edad indicada en la etiqueta"
    ],
    contraindications: "Contiene azúcares añadidos (40 g/100 ml). Cepillar los dientes después de cada toma. Consumir en las dosis recomendadas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 235. NOPAL PROSA
{
    id: 235,
    code: "7501734412006",
    name: "NOPAL PROSA",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/NOPAL-PROSA.avif",
    shortDesc: "Nopal en polvo 100% puro en cápsulas de 400 mg. Rico en fibra soluble e insoluble, flavonoides, betalaínas, vitaminas y minerales.",
    ingredients: "Nopal en polvo (Opuntia ficus) 100% puro. Sin excipientes de relleno.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
      "Aporta nopal en cápsulas",
      "El nopal contiene fibra y otros componentes vegetales",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "También se utiliza en rutinas de cuidado metabólico",
      "Permite incorporar nopal sin añadirlo a las comidas"
    ],
    contraindications: "No especificado. Tomar con abundante agua para evitar molestias digestivas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 236. SÁBILA Y NOPAL PROSA
{
    id: 236,
    code: "7501734412402",
    name: "SÁBILA Y NOPAL PROSA",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/SABILA-Y-NOPAL-PROSA.avif",
    shortDesc: "Combinación de hoja de sábila en polvo y penca de nopal en polvo. Dos plantas tradicionales para el bienestar digestivo y metabólico.",
    ingredients: "Hoja de Sábila en polvo (Aloe vera, L.), Penca de Nopal en polvo (Opuntia ficus indica).",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
      "Combina sábila y nopal",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "Aporta componentes vegetales propios de ambas plantas",
      "Se utiliza para acompañar hábitos de cuidado metabólico",
      "Permite incorporar los dos ingredientes en cápsulas"
    ],
    contraindications: "No especificado. Tomar con abundante agua para evitar molestias digestivas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 237. AJO 150 CAPS PROSA
{
    id: 237,
    code: "7501734410200",
    name: "AJO 150 CAPS PROSA",
    benefitSummary: "Complemento nutricional para el cuidado del corazón",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/AJO-PROSA.avif",
    shortDesc: "Bulbo de ajo deshidratado en polvo 100% puro en cápsulas de 500 mg. Rico en compuestos sulfurados (alicina), vitaminas y minerales.",
    ingredients: "Bulbo de Ajo deshidratado en polvo (Allium sativum, L.) 100% puro.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos. En personas con sensibilidad gástrica, acompañar con alimentos sólidos.",
    benefits: [
      "Aporta ajo en polvo",
      "Contiene compuestos propios de este ingrediente vegetal",
      "Complementa una alimentación orientada al cuidado del corazón",
      "Tiene un enfoque de cuidado antioxidante",
      "Permite incorporar ajo sin su sabor en las comidas"
    ],
    contraindications: "El ajo en ayunas o en grandes dosis puede causar ligeras molestias gástricas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 238. COMPLEJO B MULTIVITAMINICO YPENZA
{
    id: 238,
    code: "7502214015403",
    name: "COMPLEJO B MULTIVITAMINICO YPENZA",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/COMPLEJO-B-YPENZA.jpg",
    shortDesc: "Complejo de vitaminas B (B1, B2, B6, B12) y magnesio en tabletas de 500 mg. Apoya el metabolismo energético y la función nerviosa.",
    ingredients: "Vitamina B1 (Tiamina) 324 µg, Vitamina B2 (Riboflavina) 500 µg, Vitamina B6 (Piridoxina) 412 µg, Vitamina B12 (Cobalamina) 1.3 µg, Magnesio 40 mg, Celulosa Microcristalina.",
    serving: "1 tableta al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Las vitaminas B1, B6 y B12 apoyan el funcionamiento de los nervios",
      "El magnesio contribuye al movimiento normal de los músculos",
      "Ayuda a complementar el aporte de vitaminas B de la dieta",
      "Reúne vitaminas y un mineral en una sola tableta"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 239. CREMA FACIAL NUTRITIVA DE BAYAS DE GOJI
{
    id: 239,
    code: "7503021404787",
    name: "CREMA FACIAL NUTRITIVA DE BAYAS DE GOJI",
    benefitSummary: "Hidratación, suavidad y cuidado de la piel",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/BAYAS-DE-GOJI.jpg",
    shortDesc: "Crema facial con FPS 45, bayas de goji, aceite de argán, ácido hialurónico, colágeno, aloe vera, avena y aguacate. Nutrición profunda y protección solar.",
    ingredients: "Bayas de Goji, Aceite de Argán, Extracto de Aloe Vera, Extracto de Avena, Extracto de Aguacate, Ácido Hialurónico, Colágeno, Filtros Solares (Benzofenona 3, Octil Metoxi cinamato, Octil Salicilato), base cosmética c.b.p.",
    serving: "Aplicación tópica según necesidad",
    timing: "Mañana y noche",
    intakeInstructions: "Aplicar diariamente por la mañana y por la noche sobre el rostro y el cuello, siempre sobre la piel limpia y seca. Untar con suaves masajes circulares para favorecer la absorción. Uso externo exclusivamente.",
    benefits: [
      "Ayuda a mantener la piel hidratada",
      "Aporta una sensación de suavidad",
      "El ácido hialurónico ayuda a retener humedad en la piel",
      "Incluye goji y vitamina E como ingredientes antioxidantes",
      "Complementa una rutina de cuidado facial"
    ],
    contraindications: "Uso externo exclusivamente. Evitar el contacto con los ojos. En caso de irritación, suspender su uso. Realizar prueba en una pequeña zona de la piel si se tiene piel sensible.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 240. ACEITE DE OLIVA DEMOGRASS 60 CAPS
{
    id: 240,
    code: "7502214019647",
    name: "ACEITE DE OLIVA DEMOGRASS 60 CAPS",
    benefitSummary: "Aceite de oliva en perlas",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACEITA-DE-OLIVA.webp",
    shortDesc: "Aceite de oliva 100% puro en perlas de 1.4 g. Alto contenido de ácidos grasos monoinsaturados (72.8 g/100 g) para la salud cardiovascular.",
    ingredients: "Aceite de Oliva (Olea europaea) 100% puro. Cápsula blanda de gelatina.",
    serving: "1 perla al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 perla de Aceite de Oliva al día. No exceder la porción máxima recomendada.",
    benefits: [
      "Aporta aceite de oliva en perlas",
      "Contiene grasas presentes en este aceite",
      "Complementa el aporte de grasas de la alimentación",
      "Incluye compuestos propios del aceite de oliva",
      "Permite incorporarlo sin añadir aceite a las comidas"
    ],
    contraindications: "No especificado",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 241. LEVADURA DE CERVEZA 300g PRONAT
{
    id: 241,
    code: "7501062910113",
    name: "LEVADURA DE CERVEZA 300g PRONAT",
    benefitSummary: "Nutrientes para complementar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/LEVADURA-CERVEZA-300-G-PRONAT.webp",
    shortDesc: "Levadura de cerveza desecada y desamargada 100% pura en polvo. Rica en proteínas (39 g/100 g), fibra (22 g/100 g) y vitaminas del complejo B.",
    ingredients: "Levadura de Cerveza desecada y desamargada 100% pura (Saccharomyces cerevisiae). Puede contener Soya.",
    serving: "1 cucharada (8 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 cucharada (8 g) a su líquido favorito (agua, jugo, leche, té), o espolvorear sobre sopas, frutas o verduras.",
    benefits: [
      "Aporta levadura de cerveza en polvo",
      "Complementa la alimentación con nutrientes propios de la levadura",
      "Las vitaminas B presentes ayudan a aprovechar la energía",
      "Incluye fibra para complementar la dieta",
      "Se puede añadir a distintas bebidas y comidas"
    ],
    contraindications: "Puede contener Soya.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 242. PREBIAN
{
    id: 242,
    code: "7500464128416",
    name: "PREBIAN",
    benefitSummary: "Fibra y complemento del bienestar intestinal",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/PREBIAN.jpg",
    shortDesc: "Fibras prebióticas solubles (oligofructosa y fructanos de achicoria) 100% puras. Inodoro, insípido, sin gluten, vegano y bajo índice glucémico.",
    ingredients: "Oligofructosa, Fructanos de Achicoria.",
    serving: "1 a 2 cucharadas (7.5 g a 15 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 o 2 cucharadas (7.5 g a 15 g) de Prebian a bebidas o alimentos. No usar en bebidas carbonatadas. Sugerencias: té, café, agua natural, fruta, cereal, smoothies, repostería y jugos.",
    benefits: [
      "Aporta fibra para complementar la alimentación",
      "Sirve de alimento a ciertas bacterias beneficiosas del intestino",
      "Puede contribuir a la regularidad intestinal",
      "Puede aumentar la sensación de llenura",
      "Su sabor discreto facilita mezclarla con alimentos y bebidas"
    ],
    contraindications: "No usar en bebidas carbonatadas (puede generar gas o efervescencia excesiva).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 243. PULMOBRON MIEL
{
    id: 243,
    code: "7506022802583",
    name: "PULMOBRON MIEL",
    benefitSummary: "Confort de garganta y uso tradicional respiratorio",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/PULMOBRON.webp",
    shortDesc: "Jarabe natural con miel, propóleo y 14 extractos vegetales (sauco, gordolobo, equinácea, eucalipto, tomillo, romero, menta, etc.). Para el bienestar respiratorio.",
    ingredients: "Agua, Jarabe de Frutas (Fructuosa), Glucosa, Propóleo, Sauco, Gordolobo (Hoja, Flor, Raíz), Cebolla Morada, Equinácea, Limón Deshidratado, Ajo, Eucalipto, Bugambilia Flor, Malva Silvestre, Tomillo Semilla, Romero y Menta.",
    serving: "Adultos: 1 cucharada sopera (10 ml). Niños: 1 cucharadita cafetera (5 ml).",
    timing: "Cualquier momento del día",
    intakeInstructions: "Adultos: Tomar 1 cucharada sopera (10 ml) como suplemento alimenticio. Niños: Tomar 1 cucharadita cafetera (5 ml). Puede tomarse con té de preferencia.",
    benefits: [
      "La miel puede dar una sensación de suavidad en la garganta",
      "Combina plantas de uso tradicional respiratorio",
      "La menta y el eucalipto aportan sensación de frescura",
      "Incluye propóleo y equinácea",
      "Su presentación permite medir la porción indicada"
    ],
    contraindications: "No consumir en menores de 3 años ni en mujeres embarazadas. Puede cristalizarse; calentar al baño maría para recuperar su estado original.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
},

// 244. SUKUNAI KIROS BLUE
{
    id: 244,
    code: "7508304644010",
    name: "SUKUNAI KIROS BLUE",
    benefitSummary: "Mezcla de ingredientes tradicionales para el bienestar general",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/SUKUNAIKIROSBLEU.webp",
    shortDesc: "Combinación de Hongo Chaga, Hongo Reishi, L-Carnitina y Probióticos. Para el apoyo al sistema inmunológico, el metabolismo energético y la salud digestiva.",
    ingredients: "Hongo Chaga (Inonotus obliquus), Hongo Reishi (Ganoderma lucidum), L-Carnitina, Probióticos (mezcla de cepas), Celulosa microcristalina, Estearato de magnesio, Dióxido de silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua. No exceder la porción indicada.",
    benefits: [
      "Combina hongos, L-carnitina y probióticos",
      "Los probióticos se utilizan como apoyo al equilibrio intestinal",
      "La L-carnitina participa en el uso de grasas como energía",
      "Los hongos aportan componentes propios de estos ingredientes",
      "Reúne ingredientes nutricionales y botánicos para personas activas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia sin autorización profesional. Consultar si se toman anticoagulantes, inmunosupresores o medicamentos de uso crónico.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar antes de recomendarlo si el cliente usa medicamentos que disminuyen las defensas, para evitar coágulos o cualquier tratamiento de uso continuo."
},

  // 247. FORTI OSITOS
  {
    id: 247,
    code: "7506021101113",
    name: "FORTI OSITOS",
    benefitSummary: "Nutrientes para complementar la alimentación infantil",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/FORTI-OSITOS.webp",
    shortDesc: "Gomitas pediátricas con vitaminas A, C, D, complejo B, zinc, calcio, L-lisina y Omega 3. Sin azúcar, sabores fresa y piña.",
    ingredients: "Vitamina C (ácido ascórbico), Vitamina A (retinol), Vitamina D (colecalciferol), Zinc, Vitaminas B1, B2, B3, B6, B12, Ácido Fólico, Calcio, L-Lisina, Omega 3, Sucralosa, gelificantes, sabores (fresa y piña), colorantes.",
    serving: "2 gomitas al día",
    timing: "Preferentemente con el desayuno o el almuerzo",
    intakeInstructions: "Masticar completamente cada gomita antes de tragar. No tragar enteras para evitar riesgos de atragantamiento en infantes.",
    benefits: [
      "Las vitaminas A, C y D contribuyen al funcionamiento de las defensas",
      "El calcio y la vitamina D apoyan el cuidado de los huesos",
      "Las vitaminas B ayudan a aprovechar la energía de los alimentos",
      "Complementa la alimentación con varios nutrientes",
      "Las gomitas ofrecen una alternativa masticable para la edad indicada"
    ],
    contraindications: "No administrar a niños menores de 3 años sin supervisión médica. Contraindicado en caso de alergia a alguno de los componentes. Precaución en fenilcetonuria. Supervisar el masticado completo para evitar atragantamiento.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Evitar tomarlo al mismo tiempo que grandes cantidades de té u otras bebidas similares: pueden reducir la absorción del zinc."
  },

  // 248. FORT Q OSITOS
  {
    id: 248,
    code: "75060221101120",
    name: "FORTI Q OSITOS",
    benefitSummary: "Nutrientes para complementar la alimentación infantil",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/FORTI-Q-OSITOS-.webp",
    shortDesc: "Gomitas pediátricas con Ácido Glutámico, L-Lisina, complejo B, vitamina C, zinc, calcio y Omega 3. Sin azúcar, sabores fresa y zarzamora.",
    ingredients: "Ácido Glutámico, L-Lisina, Vitaminas B1, B2, B3, B6, B12, Ácido Fólico, Vitamina C, Zinc, Calcio, Omega 3, Sucralosa, gelificantes, sabores (fresa y zarzamora), colorantes.",
    serving: "2 gomitas al día",
    timing: "Preferentemente con el desayuno o el almuerzo",
    intakeInstructions: "Masticar completamente cada gomita antes de tragar. No tragar enteras para evitar riesgos de atragantamiento en infantes.",
    benefits: [
      "Las vitaminas B contribuyen al funcionamiento de los nervios",
      "Ayudan al cuerpo a obtener energía de los alimentos",
      "El calcio complementa el cuidado de los huesos",
      "El zinc y la vitamina C contribuyen al funcionamiento de las defensas",
      "Su presentación masticable facilita incorporarlo según la edad indicada"
    ],
    contraindications: "No administrar a niños menores de 3 años sin supervisión médica. Contraindicado en caso de alergia a alguno de los componentes. Precaución en fenilcetonuria. Supervisar el masticado completo para evitar atragantamiento.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Evitar tomarlo al mismo tiempo que grandes cantidades de té u otras bebidas similares: pueden reducir la absorción del zinc."
  },

  // 249. KINDERVITAL FRUITY
  {
    id: 249,
    code: "4004148341977",
    name: "KINDERVITAL FRUITY",
    benefitSummary: "Nutrientes para complementar la alimentación infantil",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/KINDERVITAL.webp",
    shortDesc: "Tónico multivitamínico pediátrico con calcio, vitaminas A, C, D, E, complejo B y extractos botánicos. Sabor frutal, sin colorantes artificiales.",
    ingredients: "Calcio (de gluconato y lactato de calcio), Vitamina D (colecalciferol), Vitamina A (palmitato de retinilo), Vitamina C (ácido ascórbico), Vitamina E (acetato de d-alfa tocoferol), Vitaminas B1, B2, B3, B6, B12, Extractos acuosos de zanahoria, cilantro, berro, menta, espinaca, manzanilla, Jugos de frutas concentrados (algarroba, albaricoque, piña, uva, maracuyá, manzana, limón), Goma guar, Goma xantana.",
    serving: "10 ml (1 vasito dosificador) al día",
    timing: "Preferentemente antes del desayuno o de una comida principal",
    intakeInstructions: "Agitar vigorosamente antes de usar. Utilizar el vasito dosificador incluido. No consumir directamente de la botella. Refrigerar después de abrir y consumir en 4 semanas.",
    benefits: [
      "Aporta calcio para mantener huesos y dientes",
      "La vitamina D ayuda a absorber el calcio",
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Incluye vitaminas para complementar la alimentación infantil",
      "Su formato líquido y sabor frutal ofrecen una alternativa a las tabletas"
    ],
    contraindications: "Contraindicado en hipercalcemia, hipercalciuria, litiasis renal, hiperparatiroidismo. Precaución en alergias a plantas de la familia umbelíferas (cilantro) o asteráceas (manzanilla).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El calcio puede hacer que se absorban menos algunos antibióticos y la levotiroxina, usada para la tiroides. La ficha pide separar 2 a 3 horas de esos antibióticos y 4 horas de la levotiroxina; confirmar el horario con el médico o farmacéutico. No tomar al mismo tiempo que el hierro."
  },

  // 250. FLORADIX + H FRUITY
  {
    id: 250,
    code: "4004148350528",
    name: "FLORADIX + H FRUITY",
    benefitSummary: "Hierro para formación de la sangre y transporte de oxígeno",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/FLORADIX-FRUITY.webp",
    shortDesc: "Tónico líquido con hierro gluconato, vitaminas del complejo B, vitamina C y extractos botánicos. Para el soporte de la oxigenación celular y la eritropoyesis.",
    ingredients: "Hierro (de gluconato ferroso) 7.5 mg, Vitamina C (ácido ascórbico), Vitaminas B1, B2, B6, B12, Extracto acuoso de levadura, Extractos de zanahoria, espinaca, grama, alga marina, hibisco, Frutos de alcaravea (Carum carvi), Concentrados de jugos de fruta (pera, uva, grosella, zarzamora, cereza, naranja, remolacha, limón, manzana), Algarroba, Miel, Extracto de germen de trigo (contiene gluten).",
    serving: "Adultos: 10 ml dos veces al día. Niños (6-12 años): 10 ml una vez al día.",
    timing: "30 minutos antes de las comidas (desayuno y comida), en ayunas",
    intakeInstructions: "Agitar vigorosamente antes de usar. Utilizar el vasito dosificador. No consumir directamente de la botella. Refrigerar después de abrir y consumir en 4 semanas.",
    benefits: [
      "El hierro participa en la formación normal de glóbulos rojos",
      "Ayuda al transporte de oxígeno en el cuerpo",
      "Contribuye a reducir el cansancio cuando falta hierro",
      "La vitamina C favorece la absorción del hierro",
      "Su formato líquido permite medir la porción indicada"
    ],
    contraindications: "Contiene germen de trigo (gluten). Contraindicado en enfermedad celíaca o sensibilidad al gluten. Contraindicado en hemocromatosis, hemosiderosis, talasemias o anemias sideroblásticas. Consultar en úlceras y gastritis activa.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El hierro puede reducir la absorción de levotiroxina para la tiroides, ciertos tratamientos para los huesos, levodopa para el Parkinson y algunos antibióticos. La ficha pide dejar al menos 4 horas de separación; confirmar el horario con el médico o farmacéutico. Evitar tomarlo junto con café, té, leche o vino tinto, porque se puede absorber menos hierro."
  },

  // 251. COLOSTRUM POWDER
  {
    id: 251,
    code: "198715573923",
    name: "COLOSTRUM POWDER",
    benefitSummary: "Calostro como complemento nutricional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/COLOSTRUM-HUMBLE.jpg",
    shortDesc: "Calostro bovino en polvo estandarizado al 20% de IgG (800 mg por porción). Grass-fed, sin aditivos. Para el soporte de la mucosa intestinal y la inmunidad local.",
    ingredients: "Calostro bovino en polvo (4000 mg por porción), estandarizado al 20% de Inmunoglobulinas G (IgG). Contiene trazas de IgA, IgM, lactoferrina, factores de crecimiento (IGF-1, IGF-2, TGF-β, EGF), polipéptidos ricos en prolina (PRPs) y oligosacáridos.",
    serving: "4 g (1 scoop, 4 medidas del dosificador) al día",
    timing: "En ayunas (30 minutos antes del desayuno) o antes de dormir",
    intakeInstructions: "Mezclar 4 g (4 scoops) en 100-150 ml de agua natural, leche de almendras o batido frío. Agitar hasta disolver. No mezclar con líquidos calientes (superiores a 45-50°C) para no desnaturalizar las inmunoglobulinas.",
    benefits: [
      "Aporta calostro bovino en polvo",
      "Contiene componentes propios del calostro, incluidas proteínas",
      "Se estudia como complemento del bienestar intestinal",
      "Su fórmula permite incorporarlo a preparaciones frías",
      "Ofrece una alternativa al calostro en cápsulas"
    ],
    contraindications: "Contiene derivados de leche. Contraindicado en alergia a la proteína de la leche de vaca (APLV). Precaución en intolerancia severa a la lactosa. Consultar en inmunosupresión clínica (trasplantes).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos que disminuyen la actividad de las defensas, como ciclosporina o tacrolimus."
  },

  // 252. BLOOM PRE-WORKOUT
  {
    id: 252,
    code: "7502293530705",
    name: "BLOOM PRE-WORKOUT",
    benefitSummary: "Energía y alerta para acompañar el entrenamiento",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/BLOOM-PRE-WORK-LIMONADA.avif",
    shortDesc: "Suplemento pre-entreno con L-Citrulina, Beta Alanina, Guaraná, L-Tirosina, L-Teanina, MCT, vitaminas B6, B12, C y electrolitos. Sabor Limonada Rosa.",
    ingredients: "L-Citrulina, Citrulina Malato, Beta Alanina, Remolacha roja en polvo, Extracto de Guaraná (Paullinia cupana), L-Tirosina, L-Teanina, Triglicéridos de Cadena Media (MCT), Vitamina B6 (piridoxina), Vitamina B12 (cianocobalamina), Vitamina C (ácido ascórbico), Calcio, Sodio, Pimienta negra en polvo, Ácido cítrico, Saborizante, Dióxido de silicio, Silicato de calcio, Sucralosa, Acesulfame K.",
    serving: "7 g (1 cucharada dosificadora) al día",
    timing: "15-30 minutos antes del entrenamiento",
    intakeInstructions: "Mezclar 7 g (1 cucharada) en 300 ml de agua fría. Agitar vigorosamente en shaker. Consumir 15-30 minutos antes del entrenamiento. No consumir entre 4 y 6 horas antes de dormir.",
    benefits: [
      "La cafeína del guaraná ayuda a mantenerse alerta",
      "Está orientado a complementar la rutina antes de entrenar",
      "La citrulina y la beta alanina se estudian para el rendimiento deportivo",
      "Los minerales participan en el funcionamiento muscular",
      "Su formato en polvo facilita preparar una porción"
    ],
    contraindications: "Contraindicado en hipertensión, arritmias, enfermedad coronaria, infarto previo, ansiedad, trastornos de pánico, esquizofrenia, embarazo, lactancia y menores de 15 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha indica no combinar con medicamentos para la presión, para dilatar los vasos sanguíneos como sildenafil, ciertos antidepresivos llamados IMAO, tratamientos para alteraciones del ritmo del corazón u otras fuentes de cafeína. Evitar el alcohol. Revisar el tratamiento antes de recomendar."
  },

  // 253. MORINGA, ROMERO Y HOJA DE GUAYABA
  {
    id: 253,
    code: "7502214011368",
    name: "MORINGA, ROMERO Y HOJA DE GUAYABA",
    benefitSummary: "Tres plantas para complementar el bienestar digestivo",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/MORINGA-ROMERO-HOJAS-DE-GUAYABA.jpg",
    shortDesc: "Fórmula botánica con Moringa, Romero y Hoja de Guayaba. Para el soporte metabólico, la gestión glucémica y la protección antioxidante.",
    ingredients: "Hojas de Moringa (Moringa oleifera) en polvo, Hojas de Romero (Salvia rosmarinus) en polvo, Hojas de Guayaba (Psidium guajava L.) en polvo, Cápsula vegetal.",
    serving: "1 cápsula al día",
    timing: "15-30 minutos antes o durante la comida más pesada del día (rica en carbohidratos)",
    intakeInstructions: "Ingerir 1 cápsula con un vaso de agua natural (200 ml). No exceder la dosis recomendada.",
    benefits: [
      "Combina moringa, romero y hoja de guayaba",
      "Aporta compuestos vegetales con actividad antioxidante",
      "Tiene uso tradicional como complemento del bienestar digestivo",
      "Se estudian sus ingredientes en relación con el manejo de la glucosa",
      "Permite incorporar las tres plantas sin preparar una infusión"
    ],
    contraindications: "Contraindicado en embarazo y lactancia (efectos emenagogos y abortivos). No usar en menores de 12 años. Precaución en hipoglucemia, anemia ferropénica (taninos).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "No combinar con insulina u otros medicamentos para la diabetes: el azúcar podría bajar demasiado. También consultar si usa litio o medicamentos para eliminar líquidos. La ficha pide separar al menos 3 horas del hierro, zinc o calcio."
  },

  // 254. YUMEL TASAY INKA
  {
    id: 254,
    code: "",
    name: "YUMEL TASAY INKA",
    benefitSummary: "Yumel y uso tradicional para la digestión",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/YUMEL-TASAY-INKA-scaled.jpg",
    shortDesc: "Extracto líquido de corteza de Guatteria gaumeri (Yumel). Para la homeostasis lipídica y el soporte hepato-biliar.",
    ingredients: "Extracto líquido de corteza de Guatteria gaumeri (Yumel), Vehículo de extracción (base hidroalcohólica o glicerinada).",
    serving: "20 gotas, 3 veces al día (máximo 60 gotas diarias)",
    timing: "15-20 minutos antes de los alimentos (desayuno, comida y cena)",
    intakeInstructions: "Diluir 20 gotas en medio vaso de agua purificada (100-150 ml). No consumir sublingual puro. No exceder la dosis sugerida.",
    benefits: [
      "Aporta extracto de yumel en gotas",
      "Tiene uso tradicional como complemento digestivo",
      "Se utiliza tradicionalmente para acompañar la digestión de grasas",
      "El gotero facilita medir la porción indicada",
      "Permite incorporar el extracto sin preparar la corteza"
    ],
    contraindications: "Contraindicado en insuficiencia hepática, cirrosis, hepatitis viral activa, transaminasas elevadas, obstrucción biliar severa, embarazo y lactancia. No usar en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha indica no combinar con medicamentos para el colesterol, como estatinas o fibratos, uso continuo de paracetamol, tratamientos orales para hongos u otros medicamentos que puedan dañar el hígado. Evitar alcohol y jugo de toronja. Revisar la combinación con un profesional."
  },

  // 255. PRO PROPÓLEO Y MENTA
  {
    id: 255,
    code: "7501735620080",
    name: "PRO PROPÓLEO Y MENTA",
    benefitSummary: "Menta y propóleo para frescura y confort de garganta",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PRO-PROLEO-Y-MENTA.jpg",
    shortDesc: "Perlas botánicas con extracto de propóleo y menta. Para el confort orofaríngeo y el soporte local de las mucosas.",
    ingredients: "Extracto de Propóleo, Extracto de Menta (Mentha sp.), Sacarosa (perlas de azúcar).",
    serving: "1 porción (3 g, aproximadamente 30 perlas), 1-4 veces al día",
    timing: "A demanda, ante pérdida de confort faríngeo",
    intakeInstructions: "Colocar las perlas en la boca y permitir que se disuelvan lentamente con la saliva. No masticar ni tragar enteras.",
    benefits: [
      "La menta aporta una sensación refrescante en la boca",
      "La disolución de las perlas acompaña el confort de la garganta",
      "El propóleo aporta compuestos propios de este ingrediente apícola",
      "Permite incorporar menta y propóleo sin preparar una bebida",
      "Su presentación facilita llevar una porción"
    ],
    contraindications: "Contraindicado en alergias a productos apícolas (propóleo, miel, polen). Contraindicado en diabetes mellitus (3 g de sacarosa por porción). No administrar a infantes menores de 4 años (riesgo de atragantamiento).",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa anticoagulantes como warfarina, especialmente si consume cantidades altas de este producto. Evitar tomarlo al mismo tiempo que bebidas muy calientes."
  },

  // 256. PASIFLORINA
  {
    id: 256,
    code: "7501735620479",
    name: "PASIFLORINA",
    benefitSummary: "Calma, bienestar mental y rutina de descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PASIFLORINA.jpg",
    shortDesc: "Perlas botánicas con extracto de Pasiflora (Passiflora incarnata). Para la relajación, la reducción del estrés y el apoyo al sueño.",
    ingredients: "Extracto de Pasiflora (Passiflora incarnata), Sacarosa (perlas de azúcar).",
    serving: "1 porción (3 g, aproximadamente 30 perlas), 1-3 veces al día",
    timing: "30-45 minutos antes de acostarse (para sueño) o en el momento de mayor exigencia mental (para estrés)",
    intakeInstructions: "Colocar las perlas bajo la lengua y dejar que se disuelvan con la saliva (vía sublingual). Alternativamente, masticar o tragar con medio vaso de agua.",
    benefits: [
      "La pasiflora tiene uso tradicional para favorecer la relajación",
      "Puede acompañar una rutina de descanso",
      "Su enfoque es el bienestar y la calma al final del día",
      "Las perlas ofrecen una alternativa a cápsulas e infusiones",
      "Permite incorporar pasiflora en una presentación pequeña"
    ],
    contraindications: "Contraindicado en diabetes mellitus (3 g de sacarosa por porción). Contraindicado en embarazo (alcaloides con actividad estimulante uterina). Precaución en conducción y maquinaria pesada.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede aumentar el sueño y la sedación de medicamentos para dormir, para la ansiedad y de algunos antidepresivos. No combinar con alcohol. Evitar cantidades altas de cafeína."
  },

  // 257. TIAMINA JARABE GN+VIDA
  {
    id: 257,
    code: "7502217901222",
    name: "TIAMINA JARABE GN+VIDA",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/TIAMINA-scaled.jpg",
    shortDesc: "Jarabe con Complejo B (B1, B6, B12, B5), Ácido Glutámico, vitaminas C, D, E y extracto de espinaca y maíz. Para el soporte cognitivo y energético.",
    ingredients: "Vitamina B1 (tiamina), Vitamina B6 (piridoxina), Vitamina B12 (cianocobalamina), Ácido Pantoténico (B5), Ácido Glutámico, Vitamina C, Vitamina E, Vitamina D, Extracto de hoja de espinaca, Extracto de semilla de maíz, Agua bidestilada.",
    serving: "Adultos: 5 ml (1 cucharadita) 4 veces al día (total 20 ml). Niños (4-12 años): 5 ml 2 veces al día (total 10 ml).",
    timing: "Espaciar las tomas; al menos dos de ellas deben coincidir con alimentos principales (desayuno y comida)",
    intakeInstructions: "Agitar bien antes de usar. Utilizar la cucharita dosificadora.",
    benefits: [
      "La vitamina B1 ayuda a obtener energía de los alimentos",
      "Las vitaminas B6 y B12 apoyan el funcionamiento de los nervios",
      "La B12 participa en la formación normal de glóbulos rojos",
      "Incluye otras vitaminas para complementar la alimentación",
      "Su formato en jarabe permite medir la porción indicada"
    ],
    contraindications: "Precaución en trastornos convulsivos (epilepsia, esquizofrenia). Contraindicado en hipervitaminosis D. No usar en menores de 4 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La vitamina B6 puede reducir el efecto de la levodopa, usada para el Parkinson. Algunos medicamentos para eliminar líquidos aumentan la pérdida de vitamina B1, y los antiácidos pueden reducir la absorción de B12. No tomar con té negro, café o alcohol."
  },

  // 258. GEL CORPORAL XIHUITL
  {
    id: 258,
    code: "7502214012076",
    name: "GEL CORPORAL XIHUITL",
    benefitSummary: "Masaje, frescura y confort local",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/XIHUITL.jpg",
    shortDesc: "Gel tópico con salicilato de metilo, mentol, alcanfor, trementina, extractos de árnica, garra del diablo, castaño de indias y centella asiática. Para el alivio de molestias musculares y articulares.",
    ingredients: "Salicilato de Metilo, Mentol, Alcanfor, Trementina, Aceites esenciales de Eucalipto y Guayacol, Extracto de Árnica (Arnica montana), Extracto de Garra del Diablo (Harpagophytum procumbens), Extracto de Castaño de Indias (Aesculus hippocastanum), Extracto de Centella Asiática, Extracto de Romero, Ajo, Cebolla, Apio, Yodo Orgánico, Clorofila, Éter, Aceite de Almendras, Vaselina, Carbomero, Liquigerm, Emulsificantes, Neutralizadores.",
    serving: "Aplicación tópica según necesidad, 2-3 veces al día",
    timing: "Mañana, mediodía y noche (o según necesidad)",
    intakeInstructions: "Aplicar la cantidad necesaria para cubrir la zona afectada y dar un masaje circular y ascendente durante 20 minutos o hasta su completa absorción. Lavar las manos exhaustivamente con agua y jabón después de cada aplicación. Uso exclusivamente tópico.",
    benefits: [
      "Facilita el masaje de zonas con molestias locales",
      "El mentol y el alcanfor aportan sensación de frío o calor",
      "Sus ingredientes de uso externo pueden dar confort local",
      "Incluye árnica y otros extractos botánicos",
      "El gel permite aplicar el producto directamente sobre la piel"
    ],
    contraindications: "Contraindicado sobre heridas abiertas, quemaduras, úlceras, excoriaciones o piel recién rasurada. No cubrir con vendas oclusivas ni aplicar calor externo. Contraindicado en embarazo y lactancia, alergia a la aspirina/AINEs, y menores de 12 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Usarlo durante mucho tiempo o sobre zonas extensas de piel puede aumentar el efecto de anticoagulantes como warfarina. Consultar antes si el cliente usa esos medicamentos."
  },

  // 259. FW FACTOR WOMEN
  {
    id: 259,
    code: "7502214011009",
    name: "FW FACTOR WOMEN",
    benefitSummary: "Bienestar femenino y cambios de etapa",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/01/Factor-Women.png",
    shortDesc: "Suplemento con 20 ingredientes bioactivos para la fisiología femenina: Isoflavonas de soya, Dong Quai, Black Cohosh, Maca, Guaraná, Ginseng, Rusco, Castaño de Indias, Jalea Real, Polen, vitaminas B12 y E.",
    ingredients: "Isoflavonas de Soya (Glycine max), Dong Quai (Angelica sinensis), Black Cohosh (Actaea racemosa), Maca (Lepidium meyenii), Damiana de California (Turnera diffusa), Garañona (Castilleja tenuiflora), Butcher's Broom (Ruscus aculeatus), Castaño de Indias (Aesculus hippocastanum L.), Uva Roja (Vitis vinifera), Ginseng (Panax ginseng), Guaraná (Paullinia cupana), Acai (Euterpe oleracea mart), Canela (Cinnamomum zeylanicum), Semilla de Calabaza (Cucurbita pepo L.), Zarzaparrilla (Smilax aspera), Perejil (Petroselinum crispum), Vitamina B12 (cianocobalamina) 3 µg, Vitamina E (DL-Alfa Tocoferol) 5 mg, Jalea Real Liofilizada, Polen en polvo.",
    serving: "2 cápsulas al día (1400 mg)",
    timing: "Por la mañana o al mediodía, siempre acompañadas de alimentos (evitar en ayunas)",
    intakeInstructions: "Ingerir 2 cápsulas con un vaso grande de agua (mínimo 250 ml). No consumir por la noche (puede causar insomnio por Guaraná y Ginseng).",
    benefits: [
      "Su enfoque es complementar el bienestar femenino",
      "Las isoflavonas y el cohosh se estudian para algunos malestares de la menopausia",
      "La vitamina B12 ayuda a aprovechar la energía de los alimentos",
      "El guaraná aporta cafeína para mantenerse alerta",
      "Combina nutrientes y plantas usadas tradicionalmente para la vitalidad"
    ],
    contraindications: "Contraindicado en cánceres hormonodependientes (mama, ovario, útero ER+), endometriosis severa, miomas uterinos no controlados, enfermedad hepática, embarazo y lactancia, y menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha indica no combinar con terapia de reemplazo hormonal, anticonceptivos, medicamentos para evitar coágulos como warfarina, heparina o aspirina, ni con medicamentos que puedan dañar el hígado. También pide separar al menos 4 horas de cualquier medicamento. Revisar con el médico o farmacéutico: separar horarios no elimina todos los riesgos."
  },

  // 260. COMPUESTO VEGETAL DE LYDIA
  {
    id: 260,
    code: "7501735650353",
    name: "COMPUESTO VEGETAL DE LYDIA",
    benefitSummary: "Confort digestivo y uso tradicional durante el ciclo menstrual",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/COMPUESTO-DE-LYDIA.jpg",
    shortDesc: "Tónico herbolaria con extractos de anís, jengibre y canela. Para el soporte pélvico femenino, el confort digestivo y la reducción de la tensión abdominal.",
    ingredients: "Fruto de Anís (Pimpinella anisum), Raíz de Jengibre (Zingiber officinale), Corteza de Canela (Cinnamomum ceylanicum), Agua purificada, Benzoato de Sodio (conservador), Ácido Cítrico (estabilizador).",
    serving: "15 ml (1 cucharada sopera), 1 a 3 veces al día",
    timing: "15-20 minutos antes de los alimentos, en ayunas",
    intakeInstructions: "Agitar antes de usar. Medir 15 ml con el vaso o la cuchara dosificadora del producto; no usar una cuchara doméstica. Puede tomarse puro o diluido en 200-250 ml de agua (tibia o ambiente).",
    benefits: [
      "El anís tiene uso tradicional para el confort digestivo",
      "Puede acompañar el bienestar cuando hay sensación de gases",
      "El jengibre complementa el enfoque digestivo",
      "Se utiliza tradicionalmente para el confort durante el ciclo menstrual",
      "Su presentación líquida permite medir la porción indicada"
    ],
    contraindications: "Contraindicado en embarazo (efectos emenagogos), lactancia y menores de edad. Precaución en úlcera péptica y trastornos de sangrado.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede aumentar el efecto de medicamentos para evitar coágulos, como warfarina o aspirina, y de tratamientos para el azúcar, como insulina o metformina. Consultar antes de combinar."
  },

  // 261. ÁCIDO GLUTÁMICO, ÁCIDO FÓLICO Y TIAMINA
  {
    id: 261,
    code: "7502217900034",
    name: "ÁCIDO GLUTÁMICO, ÁCIDO FÓLICO Y TIAMINA",
    benefitSummary: "Vitaminas B para energía y funcionamiento de los nervios",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ACIDO-GLUTAMICO.jpg",
    shortDesc: "Ampolletas líquidas con 22 nutrientes: Ácido Glutámico, L-Glutamina, Complejo B completo, Calcio, Magnesio, Hierro, Zinc, Selenio, L-Arginina, L-Lisina, Omega 3, 6, 9, Lecitina de soya y vitaminas A, C, D, E.",
    ingredients: "Ácido Glutámico 500 mg, L-Glutamina 100 mg, Lecitina de Soya 500 mg, Vitamina B1 (tiamina) 800 µg, Vitamina B2 (riboflavina) 840 µg, Vitamina B3 (niacina) 11 mg, Vitamina B6 (piridoxina) 930 µg, Ácido Fólico (B9) 380 µg, Vitamina B12 (cobalamina) 2.1 µg, Calcio 300 mg, Magnesio 248 mg, Hierro 17 mg, Zinc 10 mg, Selenio 41 µg, L-Arginina 100 mg, L-Lisina 100 mg, Omega 3, 6, 9 100 mg, Vitamina A 568 µg, Vitamina C 60 mg, Vitamina D 5.6 µg, Vitamina E 11 µg.",
    serving: "1 ampolleta (10 ml) al día",
    timing: "Por la mañana, durante o inmediatamente después del desayuno (nunca en ayunas)",
    intakeInstructions: "Agitar vigorosamente antes de abrir. Diluir el contenido en 100-150 ml de agua o jugo de cítricos. No consumir por la tarde/noche.",
    benefits: [
      "Las vitaminas B ayudan a obtener energía de los alimentos",
      "Contribuyen al funcionamiento normal de los nervios",
      "El hierro y el ácido fólico participan en la formación normal de la sangre",
      "Los minerales complementan el aporte nutricional",
      "Las ampolletas ofrecen una alternativa líquida a las tabletas"
    ],
    contraindications: "Contraindicado en epilepsia, trastornos convulsivos, esquizofrenia, hemocromatosis, enfermedad renal, embarazo y lactancia.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La vitamina B6 puede reducir el efecto de la levodopa, usada para el Parkinson. El calcio, magnesio y hierro pueden hacer que se absorban menos algunos antibióticos y la levotiroxina para la tiroides. La ficha pide separar las tomas al menos 3 a 4 horas; confirmar el horario con el médico o farmacéutico."
  },

  // 262. BARIA SURE CITRATO DE CALCIO + PROBIÓTICOS
  {
    id: 262,
    code: "7502214013522",
    name: "BARIA SURE CITRATO DE CALCIO + PROBIÓTICOS",
    benefitSummary: "Calcio para huesos y complemento digestivo",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/01/Baria-Sure-Fresa-1.1kg.png",
    shortDesc: "Suplemento en polvo con citrato de calcio (~1500 mg por porción), 15 cepas probióticas, inulina de agave y proteína de suero (WPC). Sabor fresa, sin azúcar añadido.",
    ingredients: "Citrato de Calcio (~1500 mg por porción), Concentrado de Proteína de Suero de Leche (WPC), 15 Cepas Probióticas (mezcla patentada de Lactobacillus, Bifidobacterium y Bacillus coagulans), Inulina de Agave, Saborizante natural a fresa, Edulcorante (sin azúcar añadido).",
    serving: "15 g (aproximadamente 2 cucharadas dosificadoras) al día",
    timing: "Puede tomarse con o sin alimentos. Se sugiere con alimentos ligeros por la mañana o media tarde.",
    intakeInstructions: "Disolver 15 g en 240-250 ml de agua purificada o leche (animal o vegetal). Mezclar vigorosamente hasta homogeneizar. No mezclar en líquidos calientes.",
    benefits: [
      "Aporta calcio para mantener huesos y dientes",
      "El calcio también participa en el funcionamiento muscular",
      "Los probióticos complementan el enfoque de bienestar intestinal",
      "La inulina es una fibra que alimenta ciertas bacterias del intestino",
      "Reúne apoyo nutricional óseo y digestivo en un polvo"
    ],
    contraindications: "Contiene WPC (proteína de suero). Contraindicado en alergia a la proteína de la leche de vaca. Contraindicado en hipercalcemia e hiperparatiroidismo.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha pide separar al menos 4 horas de la levotiroxina para la tiroides y ciertos tratamientos para los huesos. También indica separar 2 a 3 horas de algunos antibióticos; confirmar los horarios con el médico o farmacéutico. Evitar mezclarlo con alimentos que dificultan la absorción del calcio."
  },

  // 263. PLATA COLOIDAL BLU SILVER
  {
    id: 263,
    code: "7503015606012",
    name: "PLATA COLOIDAL BLU SILVER",
    benefitSummary: "Sin beneficios demostrados por consumo oral",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PLATA-COLOIDAL.webp",
    shortDesc: "Suspensión acuosa de plata coloidal a 10 ppm. Para el apoyo inmunológico estacional y la higiene de mucosas, de forma episódica.",
    ingredients: "Plata elemental (Ag⁰ + Ag⁺) en suspensión coloidal (10 ppm), Agua purificada.",
    serving: "Adultos: ½ a 1 cucharadita (2.5-5 ml) de 1 a 2 veces al día. Niños: ¼ a ½ cucharadita (1.25-2.5 ml) de 1 a 2 veces al día.",
    timing: "En ayunas (30 min antes o 2 h después de alimentos)",
    intakeInstructions: "Mantener bajo la lengua 30-60 segundos antes de tragar (vía sublingual). No usar utensilios metálicos; emplear plástico, vidrio o cerámica.",
    benefits: [
      "Su ficha declara plata en suspensión acuosa",
      "No hay beneficios demostrados de consumir plata coloidal",
      "La plata no es un nutriente necesario para el cuerpo",
      "Su utilidad y seguridad requieren revisión antes de recomendarla"
    ],
    contraindications: "No consumir de forma continua o vitalicia (riesgo de argiria). Contraindicado en embarazo, lactancia, insuficiencia renal o hepática, e hipersensibilidad a la plata.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede reducir la absorción de algunos antibióticos, levotiroxina para la tiroides y penicilamina. La ficha pide separar al menos 4 horas de cualquier medicamento, pero esto no demuestra que sea seguro consumir plata coloidal. Revisar antes de recomendar."
  },

  // 264. Ácido Pantoténico (B-5)
  {
    id: 264,
    code: "733739004864",
    name: "ÁCIDO PANTOTÉNICO (B-5)",
    benefitSummary: "Vitamina B5 para aprovechar la energía de los alimentos",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ACIDO-PANTOTENICO.webp",
    shortDesc: "Vitamina B-5 en alta concentración (500 mg por cápsula). Precursor de Coenzima A para el metabolismo energético, la síntesis lipídica y la función suprarrenal.",
    ingredients: "Ácido Pantoténico (como Pantotenato de Calcio) 500 mg, Calcio 45 mg, Hipromelosa (cápsula vegetal), Ácido Esteárico (vegetal).",
    serving: "1 cápsula al día",
    timing: "Preferentemente por la mañana o al mediodía, junto con una comida o justo después de comer",
    intakeInstructions: "Ingerir la cápsula con un vaso completo de agua natural. No exceder la dosis recomendada sin supervisión profesional.",
    benefits: [
      "La vitamina B5 ayuda a obtener energía de los alimentos",
      "Participa en el uso de las grasas de la dieta",
      "Contribuye al desempeño mental normal",
      "Ayuda a complementar el aporte de vitamina B5",
      "Su fórmula se centra en ácido pantoténico"
    ],
    contraindications: "Las megaporciones (500 mg) no han sido validadas para la seguridad fetal. Requiere consulta médica en embarazo y lactancia. Precaución en hemofilia e insuficiencia renal crónica.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "El calcio puede hacer que se absorban menos ciertos antibióticos. La vitamina B5 puede competir con la biotina y el ácido alfa lipoico por su absorción. Evitar cantidades muy altas durante mucho tiempo; la ficha advierte que podrían reducir la disponibilidad de biotina."
  },

  // 265. Zeolita
  {
    id: 265,
    code: "7502214013409",
    name: "ZEOLITA",
    benefitSummary: "Beneficios y seguridad pendientes de confirmar",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZEOLITA.avif",
    shortDesc: "Suplemento de clinoptilolita (zeolita) en cápsulas. Mineral microporoso con capacidad de adsorción e intercambio catiónico para el soporte gastrointestinal.",
    ingredients: "Zeolita (Clinoptilolita) 320 mg, Cápsula vegetal.",
    serving: "1 cápsula al día",
    timing: "Con el estómago vacío, preferentemente 30-60 minutos antes del desayuno o justo antes de dormir",
    intakeInstructions: "Ingerir la cápsula entera con un vaso grande de agua (mínimo 250-300 ml). No exceder la dosis recomendada sin supervisión profesional.",
    benefits: [
      "Aporta clinoptilolita, un tipo de mineral llamado zeolita",
      "Las propiedades de capturar sustancias se estudian principalmente en laboratorio",
      "No está demostrado que esta fórmula elimine metales del cuerpo",
      "Su utilidad y seguridad requieren revisión antes de recomendarla"
    ],
    contraindications: "Contraindicado en embarazo, lactancia, menores de 12 años, íleo paralítico, obstrucción intestinal severa, estreñimiento crónico no tratado e insuficiencia renal grave.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede atrapar algunos medicamentos y reducir su absorción, como litio, ciertos antibióticos, cisplatino y medicamentos diseñados para actuar durante varias horas. La ficha pide dejar al menos 2 horas de diferencia. También puede reducir la absorción de hierro, zinc, calcio, magnesio y multivitamínicos; confirmar la combinación con un profesional."
  },

  // 266. TLANCHALAGUA PROSA
  {
    id: 266,
    code: "7501734411603",
    name: "TLANCHALAGUA PROSA",
    benefitSummary: "Ingredientes vegetales y bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/TLANCHALAGUA-scaled.webp",
    shortDesc: "Suplemento en cápsulas con una mezcla de cinco plantas medicinales mexicanas: Tlanchalagua, Cocolmeca, Tejocote, Lima y Té Limón. Para el bienestar digestivo y la depuración fisiológica.",
    ingredients: "Tlanchalagua (Erythraea stricta, L.), Cocolmeca (Smilax cardifolia, L.), Tejocote (Crataegus mexicana, L.), Lima (Citrus Limetta, L.), Té Limón (Cymbopogon nardus, L.).",
    serving: "2 cápsulas tres veces al día, antes de los alimentos",
    timing: "Antes de los alimentos principales (desayuno, comida y cena)",
    intakeInstructions: "Tomar 2 cápsulas con un vaso de agua natural. Verificar lote y fecha de caducidad impresos en el envase.",
    benefits: [
      "Combina plantas de la herbolaria mexicana",
      "La tlanchalagua tiene uso tradicional digestivo",
      "El tejocote y otras plantas aportan compuestos vegetales",
      "Su enfoque es el bienestar digestivo tradicional",
      "Permite incorporar la mezcla en cápsulas"
    ],
    contraindications: "No especificado. Consultar a un profesional de la salud en caso de embarazo, lactancia o condiciones médicas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo."
  },

  // 267. Premium Panax Ginseng
  {
    id: 267,
    code: "61835819069",
    name: "PREMIUM PANAX GINSENG",
    benefitSummary: "Vitalidad y uso tradicional",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PANAX-GINSENG.avif",
    shortDesc: "Extracto líquido de Ginseng Rojo (Panax ginseng) con 8 años de maduración. Adaptógeno para la energía, la vitalidad y la resistencia al estrés.",
    ingredients: "Raíz de Panax ginseng (Ginseng Rojo) 2400 mg por ampolla, Miel (0.51 g de carbohidratos), Agua purificada.",
    serving: "1 ampolla (10 ml) al día",
    timing: "Preferentemente por la mañana, en ayunas o con el desayuno",
    intakeInstructions: "Agitar vigorosamente antes de abrir. Consumir directamente del vial o diluir en 100 ml de agua natural a temperatura ambiente. No exceder la dosis recomendada.",
    benefits: [
      "El ginseng tiene uso tradicional como apoyo a la vitalidad",
      "Puede acompañar etapas de mayor actividad física y mental",
      "Se estudia como apoyo frente a la sensación de fatiga",
      "Su presentación líquida evita preparar la raíz",
      "Las ampolletas permiten llevar la porción indicada"
    ],
    contraindications: "Contraindicado en embarazo, lactancia, menores de 18 años, hipertensión arterial severa no controlada, trastornos hemorrágicos y patologías autoinmunes hiperactivas.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para el azúcar, porque podría bajar demasiado, o para evitar coágulos, por el riesgo de sangrado. También revisar antidepresivos, incluidos los llamados IMAO. Evitar combinar con bebidas con mucha cafeína."
  },

  // 268. Aceite Rosa Mosqueta
  {
    id: 268,
    code: "7503021404053",
    name: "ACEITE DE ROSA MOSQUETA",
    benefitSummary: "Hidratación, suavidad y cuidado de la piel",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ACEITE-DE-ROSA-MOSQUETA.webp",
    shortDesc: "Aceite vegetal puro obtenido por prensado en frío de las semillas de Rosa moschata. Rico en ácidos grasos esenciales (Omega-6 y Omega-3) y vitamina E. Para la regeneración cutánea y el cuidado de la piel.",
    ingredients: "Aceite de Rosa Mosqueta (Rosa moschata) 100% puro, obtenido por prensado en frío. Contiene ácido linoleico (40-50%), ácido linolénico (30-35%), ácido oleico (15-20%), trazas de ácido trans-retinoico, tocoferoles (Vitamina E) y fitoesteroles.",
    serving: "Aplicación tópica según necesidad, 1-3 veces al día",
    timing: "Preferentemente en la rutina nocturna. Si se usa de día, acompañar con protector solar.",
    intakeInstructions: "Aplicar 2-4 gotas sobre la zona deseada y masajear suavemente con movimientos circulares hasta la absorción total. Uso exclusivamente tópico. No ingerir.",
    benefits: [
      "Ayuda a suavizar la piel seca",
      "Aporta grasas que ayudan a conservar la humedad de la piel",
      "Complementa el cuidado de la barrera protectora de la piel",
      "Puede mejorar la apariencia de zonas resecas con uso constante",
      "Permite aplicar unas gotas en las áreas indicadas"
    ],
    contraindications: "Contraindicado en acné activo severo, rosácea pustulosa o pieles altamente seborreicas. No aplicar sobre heridas abiertas, quemaduras de tercer grado o tejido sin epitelizar.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa cremas recetadas con derivados de vitamina A, como retinoides, o tratamientos fuertes para renovar la piel. No mezclar directamente con peróxido de benzoilo, usado en algunos tratamientos para el acné."
  },

// 269. JUGO DE NONI
{
    id: 269,
    code: "7503025069500",
    name: "JUGO DE NONI",
    benefitSummary: "Noni como complemento de origen vegetal",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/JUGO-NONI-scaled.jpg",
    shortDesc: "Suspensión botánica acuosa de Noni (Morinda citrifolia) con extracto seco concentrado. Rico en iridoides, escopoletina y polisacáridos. Apoyo antioxidante e inmunológico.",
    ingredients: "Jugo de Noni (Morinda citrifolia), Extracto Seco de Fruto de Noni, Agua Desmineralizada, Goma Xantana, Ácido Cítrico, Sabor y Colorante Artificial Uva, Sorbato de Potasio, Benzoato de Sodio, Stevia (Stevia rebaudiana).",
    serving: "30 ml (2 cucharadas soperas), 1 a 2 veces al día",
    timing: "Preferentemente en ayunas, 30 minutos antes del desayuno",
    intakeInstructions: "Agitar vigorosamente antes de servir. Puede consumirse puro o diluido en 150 ml de agua o jugo bajo en azúcar. No exceder la dosis recomendada. Una vez abierto, mantener refrigerado.",
    benefits: [
      "Aporta jugo de noni en una presentación líquida",
      "Contiene compuestos vegetales con actividad antioxidante",
      "Se utiliza tradicionalmente como complemento del bienestar general",
      "Permite incorporar noni sin preparar el fruto",
      "Su formato facilita medir la porción indicada"
    ],
    contraindications: "Contraindicado en insuficiencia renal crónica (alto contenido de potasio), hepatopatías (riesgo de toxicidad hepática idiosincrática), embarazo y lactancia. Personas con hipertensión o bajo tratamiento con diuréticos ahorradores de potasio deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si usa medicamentos que pueden aumentar el potasio, como espironolactona, losartán o captopril, o anticoagulantes como warfarina. La ficha indica no mezclar con bebidas lácteas en la misma toma y separar 2 horas del hierro o calcio."
},

// 270. CÚRCUMA & JENGIBRE
{
    id: 270,
    code: "753025069838",
    name: "CÚRCUMA & JENGIBRE",
    benefitSummary: "Especias para bienestar digestivo y aporte antioxidante",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/curcuma-1.jpg",
    shortDesc: "Combinación de polvo de raíz de cúrcuma y jengibre en cápsulas. Apoyo a la modulación inflamatoria, confort digestivo y protección antioxidante. 90 cápsulas de 500 mg.",
    ingredients: "Polvo de raíz de Cúrcuma (Curcuma longa), Polvo de raíz de Jengibre (Zingiber officinale), excipientes (cápsula vegetal o gelatinosa).",
    serving: "3 cápsulas al día (1 antes de cada alimento principal)",
    timing: "Con alimentos que contengan grasas saludables",
    intakeInstructions: "Tomar 1 cápsula antes del desayuno, comida y cena, con un vaso de agua. Consumir junto con alimentos grasos para mejorar la absorción. No exceder la dosis diaria recomendada.",
    benefits: [
      "El jengibre tiene uso tradicional para el confort digestivo",
      "La cúrcuma aporta compuestos antioxidantes",
      "Puede acompañar el cuidado de las articulaciones",
      "Combina dos especias en una sola fórmula",
      "Permite incorporarlas sin su sabor característico"
    ],
    contraindications: "Contraindicado en embarazo y lactancia. Personas con trastornos de la coagulación o bajo tratamiento con anticoagulantes (warfarina, AAS) deben evitar su uso. Consultar en caso de obstrucción biliar o litiasis biliar.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para evitar coágulos, incluidos anticoagulantes y antiagregantes. También revisar otros tratamientos que procesa el hígado."
},

// 271. ALBIZIA + BACOPA
{
    id: 271,
    code: "",
    name: "ALBIZIA + BACOPA",
    benefitSummary: "Complemento del cuidado de la atención y la memoria",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-–-BACOPA-ALBIZIA–-V0–-SEPT2026.jpeg",
    shortDesc: "Suplemento de Albizia, Bacopa, L-teanina y magnesio, orientado al apoyo de la concentración y la calma. Envase con 60 cápsulas.",
    ingredients: "Por porción de 2 cápsulas (900 mg): extracto seco de Albizia (Albizia julibrissin, 1:1) 300 mg; partes aéreas de Bacopa monnieri en polvo 200 mg; L-teanina 100 mg; bisglicinato de magnesio 300 mg (aporta 42 mg de magnesio elemental). Excipientes: gelatina y agua purificada.",
    serving: "2 cápsulas (900 mg)",
    timing: "Por la mañana o al mediodía, con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos, preferentemente acompañados de grasas saludables. No exceder la porción diaria recomendada.",
    benefits: [
      "La bacopa se estudia como apoyo a la memoria y la atención",
      "La teanina puede acompañar una rutina de calma",
      "El magnesio contribuye al funcionamiento normal de los nervios",
      "La albizia tiene uso tradicional para el bienestar emocional",
      "Su enfoque combina concentración y relajación"
    ],
    contraindications: "No usar en menores de 18 años, durante el embarazo o la lactancia, ni en caso de hipersensibilidad a sus ingredientes. Personas con trastornos tiroideos o antecedentes de úlcera deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha recomienda tomarlo con una comida que incluya grasas saludables, como aguacate, nueces o aceite de oliva.",
    interactions: "Consultar si usa medicamentos que cambian la acción de la acetilcolina, una sustancia que transmite mensajes entre los nervios, o tratamientos para depresión, sueño o ansiedad. El magnesio puede reducir la absorción de ciertos antibióticos y tratamientos para los huesos; un profesional debe indicar cómo separar las tomas."
},

// 272. ALBIZIA + RHODIOLA
{
    id: 272,
    code: "",
    name: "ALBIZIA + RHODIOLA",
    benefitSummary: "Bienestar mental ante la demanda cotidiana",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-–-RHODIOLA-ALBIZIA–-V0–-SEPT2026.jpeg",
    shortDesc: "Suplemento de Albizia, Rhodiola, L-teanina y magnesio, orientado al apoyo frente al estrés y la fatiga mental. Envase con 60 cápsulas.",
    ingredients: "Por porción de 2 cápsulas (900 mg): extracto seco de Albizia (Albizia julibrissin, 1:1) 300 mg; extracto de raíz de Rhodiola rosea 200 mg, estandarizado al 3 % de salidrósidos (aporta 6 mg); L-teanina 100 mg; bisglicinato de magnesio 300 mg (aporta 42 mg de magnesio elemental). Excipientes: gelatina y agua purificada.",
    serving: "2 cápsulas (900 mg)",
    timing: "Por la mañana o al mediodía, con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos, preferentemente acompañados de grasas saludables. Evitar la toma cerca de la hora de dormir. No exceder la porción diaria recomendada.",
    benefits: [
      "La rhodiola puede apoyar la respuesta al estrés cotidiano",
      "Puede acompañar la vitalidad en etapas de mayor demanda",
      "La teanina se utiliza como complemento de la relajación",
      "El magnesio contribuye al funcionamiento de los nervios",
      "Su enfoque combina claridad mental y calma"
    ],
    contraindications: "No usar en menores de 18 años, durante el embarazo o la lactancia, ni en caso de hipersensibilidad a sus ingredientes. Evitar en personas con trastorno bipolar. Consultar a un profesional de la salud si se padece alguna condición médica.",
    foodInteractions: "La ficha recomienda tomarlo con una comida que incluya grasas saludables, como aguacate, nueces o aceite de oliva.",
    interactions: "Consultar si usa antidepresivos, medicamentos para la presión o para dormir. La ficha menciona posibles interacciones de la rhodiola con antidepresivos y losartán. El magnesio puede reducir la absorción de ciertos antibióticos y tratamientos para los huesos; un profesional debe indicar cómo separar las tomas."
},

// 273. COHOSH NEGRO CON ISOFLAVONAS
{
    id: 273,
    code: "",
    name: "COHOSH NEGRO CON ISOFLAVONAS",
    benefitSummary: "Bienestar femenino y cambios de etapa",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/10/COHOSH-NEGRO.jpg",
    shortDesc: "Combinación de cohosh negro y isoflavonas de soja para apoyar el bienestar femenino durante el climaterio. Envase con 90 cápsulas.",
    ingredients: "Por cápsula (500 mg): mezcla de extracto de raíz y rizoma de cohosh negro (Actaea racemosa) e isoflavonas de soja (Glycine max). La ficha no especifica la cantidad individual de cada ingrediente.",
    serving: "3 cápsulas (1,500 mg de mezcla)",
    timing: "Con alimentos, distribuido durante el día",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos y un vaso de agua, según la ficha del producto. No exceder la porción indicada.",
    benefits: [
      "Se utiliza como complemento del bienestar durante la menopausia",
      "El cohosh y las isoflavonas se estudian para algunos malestares de esa etapa",
      "Puede ayudar con los bochornos en ciertas personas",
      "Su enfoque es acompañar el bienestar femenino durante esa transición",
      "Reúne ambos ingredientes en cápsulas"
    ],
    contraindications: "No usar durante el embarazo o la lactancia. Personas con antecedentes o enfermedades hepáticas, condiciones sensibles a hormonas, alergia a la soja o bajo tratamiento médico deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "La ficha recomienda tomarlo con alimentos. No detalla otras precauciones con comidas o bebidas.",
    interactions: "Consultar antes de combinar con medicamentos, tratamientos hormonales u otros suplementos con compuestos vegetales parecidos a los estrógenos. También revisar si el cliente tiene antecedentes de problemas del hígado."
},

// 274. EXTRACTO LÍQUIDO DE GUANÁBANA CON VITAMINA C
{
    id: 274,
    code: "",
    name: "EXTRACTO LÍQUIDO DE GUANÁBANA CON VITAMINA C",
    benefitSummary: "Vitamina C para defensas y cuidado celular",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/10/GUANABANA.webp",
    shortDesc: "Extracto líquido de hojas de guanábana con vitamina C. Presentación de 1 L; la ficha recibida indica 60 mg de vitamina C por cada 60 mL.",
    ingredients: "Extracto acuoso de hojas de guanábana (cantidad no especificada), vitamina C (60 mg por 60 mL), agua purificada, ácidos cítrico y tartárico, stevia (12 mg por 60 mL), saborizante de guanábana, dióxido de titanio, color caramelo, benzoato de sodio y sorbato de potasio; según la ficha técnica recibida.",
    serving: "30 mL (1 oz) por toma; la ficha recibida indica 2 tomas al día (60 mL al día).",
    timing: "Confirmar el horario de consumo en la etiqueta vigente.",
    intakeInstructions: "Agitar antes de usar. La ficha recibida indica 30 mL dos veces al día y refrigerar después de abrir; confirmar modo de empleo y conservación en la etiqueta del envase actual.",
    yieldInfo: {
        durationDays: 16.6667,
        note: "Aprox. 17 días: envase de 1 L con consumo de 60 mL al día (2 tomas de 30 mL)."
    },
    benefits: [
      "La vitamina C contribuye al funcionamiento normal de las defensas",
      "También ayuda al cuidado antioxidante de las células",
      "Participa en la formación normal de colágeno",
      "Favorece la absorción del hierro de alimentos vegetales",
      "Combina vitamina C y extracto de hojas de guanábana en una bebida"
    ],
    contraindications: "La ficha recibida recomienda evitar su uso durante el embarazo y la lactancia, y en menores de 18 años; también señala precaución en personas con Parkinson o parkinsonismo. La seguridad de suplementos de Annona muricata, especialmente con uso prolongado, no está establecida con suficiente evidencia. Confirmar advertencias con la etiqueta vigente y un profesional de la salud.",
    foodInteractions: "La etiqueta compartida no detalla qué precauciones tomar al combinarlo con alimentos.",
    interactions: "Consultar si el cliente toma medicamentos para la presión o el azúcar. La ficha no indica cuánto extracto de hojas contiene; revisar con un profesional antes de combinarlo con cualquier tratamiento."
},

];

// Contenido declarado por envase. Se aplica a todos los productos para que
// el catálogo y el cálculo de rendimiento usen la misma fuente de datos.
const productPackageContents = {
  1: "250 g",
  2: "60 cápsulas",
  3: "500 g",
  4: "90 cápsulas",
  5: "60 cápsulas",
  6: "90 cápsulas",
  7: "450 g",
  8: "500 g",
  9: "90 cápsulas",
  10: "90 cápsulas",
  11: "250 g",
  12: "90 cápsulas",
  13: "60 cápsulas",
  14: "1 L",
  15: "420 ml",
  16: "19.5 ml",
  17: "60 cápsulas",
  18: "Polvo (peso no especificado)",
  19: "80 cápsulas",
  20: "90 cápsulas",
  21: "90 cápsulas",
  22: "90 cápsulas",
  23: "90 cápsulas",
  24: "500 g",
  25: "250 g",
  26: "180 cápsulas",
  27: "990 ml",
  28: "1 L",
  29: "60 cápsulas",
  30: "1.1 kg",
  31: "200 cápsulas",
  32: "60 cápsulas",
  33: "60 tabletas",
  34: "30 cápsulas",
  35: "500 g",
  36: "60 cápsulas",
  37: "30 cápsulas",
  38: "22 sobres",
  39: "600 g",
  40: "30 sobres",
  41: "120 cápsulas",
  42: "30 cápsulas",
  43: "60 cápsulas",
  44: "150 cápsulas",
  45: "60 cápsulas",
  46: "500 g",
  47: "90 cápsulas",
  48: "500 ml",
  49: "500 ml",
  50: "100 cápsulas",
  51: "90 cápsulas",
  52: "90 cápsulas",
  53: "300 g",
  54: "90 cápsulas",
  55: "30 cápsulas",
  56: "30 cápsulas",
  57: "30 cápsulas",
  58: "90 cápsulas",
  59: "15 cápsulas",
  60: "90 cápsulas",
  61: "90 cápsulas",
  62: "90 cápsulas",
  63: "90 cápsulas",
  64: "510 g",
  66: "500 ml",
  67: "60 cápsulas",
  68: "30 cápsulas",
  69: "50 tabletas",
  70: "90 cápsulas",
  71: "300 g",
  72: "120 cápsulas",
  73: "30 cápsulas",
  74: "30 cápsulas",
  75: "30 cápsulas",
  76: "50 tabletas",
  77: "90 cápsulas",
  78: "120 cápsulas",
  79: "120 cápsulas",
  80: "90 cápsulas",
  81: "60 cápsulas",
  82: "80 cápsulas",
  83: "100 cápsulas",
  84: "100 cápsulas",
  85: "30 cápsulas",
  86: "60 cápsulas",
  87: "60 cápsulas",
  88: "150 g",
  89: "60 cápsulas",
  90: "90 cápsulas",
  91: "120 cápsulas",
  92: "60 cápsulas",
  93: "120 cápsulas",
  94: "90 cápsulas",
  95: "30 cápsulas",
  96: "8 lb (3.63 kg)",
  97: "100 g",
  98: "90 cápsulas",
  99: "560 g",
  100: "90 cápsulas",
  101: "30 cápsulas",
  102: "60 cápsulas",
  103: "500 ml",
  104: "90 cápsulas",
  105: "120 cápsulas",
  106: "120 cápsulas",
  107: "120 cápsulas",
  108: "100 cápsulas",
  109: "60 cápsulas",
  110: "60 perlas",
  111: "500 g",
  112: "1 kg",
  113: "1.02 kg",
  114: "30 cápsulas",
  115: "30 ml",
  116: "60 cápsulas",
  117: "90 cápsulas",
  118: "9 cápsulas",
  119: "30 cápsulas",
  120: "90 softgels",
  122: "120 cápsulas",
  123: "90 cápsulas",
  124: "60 tabletas",
  125: "1 kg",
  126: "990 g",
  127: "90 cápsulas",
  128: "90 cápsulas",
  129: "60 cápsulas",
  130: "60 cápsulas",
  131: "60 cápsulas",
  132: "30 cápsulas",
  133: "30 cápsulas",
  134: "488 g",
  135: "488 g",
  136: "30 cápsulas",
  137: "60 cápsulas",
  138: "120 cápsulas",
  139: "90 cápsulas",
  140: "1 L",
  141: "60 cápsulas",
  142: "90 tabletas",
  143: "60 cápsulas",
  144: "50 tabletas",
  145: "30 cápsulas",
  146: "30 sobres",
  147: "100 tabletas",
  148: "90 cápsulas",
  149: "60 cápsulas",
  150: "30 cápsulas",
  151: "200 g",
  152: "90 cápsulas",
  153: "90 cápsulas",
  154: "60 cápsulas",
  155: "240 ml",
  156: "240 ml",
  157: "30 cápsulas",
  158: "578 g",
  159: "90 cápsulas",
  160: "420 ml",
  161: "60 cápsulas",
  163: "30 cápsulas",
  164: "990 ml",
  165: "30 sobres",
  166: "90 cápsulas",
  167: "240 g",
  168: "60 cápsulas",
  169: "30 bolsitas de té",
  170: "30 sobres",
  171: "30 sobres",
  172: "30 sobres",
  173: "30 sobres",
  174: "30 sobres",
  175: "30 sobres",
  176: "30 sobres",
  177: "30 sobres",
  178: "60 cápsulas",
  179: "340 ml",
  180: "50 g",
  181: "120 cápsulas",
  182: "Gel tópico (cantidad no especificada)",
  183: "240 g",
  184: "60 cápsulas",
  185: "30 cápsulas",
  186: "30 cápsulas",
  187: "30 cápsulas",
  188: "30 ml",
  189: "30 bolsitas de té",
  190: "30 tabletas",
  191: "300 g",
  192: "10 ampolletas",
  193: "100 cápsulas",
  194: "1080 g",
  195: "150 cápsulas (2 frascos: 90 + 60)",
  196: "30 cápsulas",
  197: "30 sobres",
  198: "1 L",
  199: "15 cápsulas",
  200: "30 cápsulas",
  201: "1 L",
  202: "90 cápsulas",
  203: "125 g",
  204: "135 cápsulas (90 + 45 gratis)",
  205: "250 tabletas (150 g)",
  206: "90 cápsulas (117 g)",
  207: "30 cápsulas",
  208: "65 cápsulas",
  209: "300 g",
  210: "30 cápsulas",
  211: "30 cápsulas",
  212: "90 tabletas",
  213: "90 tabletas",
  214: "500 g",
  215: "90 cápsulas",
  216: "50 cápsulas",
  217: "90 cápsulas",
  218: "30 cápsulas",
  219: "1.77 kg",
  220: "5 lb (2.27 kg)",
  221: "30 cápsulas",
  222: "500 g",
  223: "150 cápsulas",
  224: "20 ml",
  225: "100 pastillas",
  226: "120 ml",
  227: "90 cápsulas",
  228: "90 cápsulas",
  229: "120 gomitas",
  230: "100 cápsulas",
  231: "1 L",
  232: "Presentación variable (peso no especificado)",
  233: "120 capletas",
  234: "250 ml",
  235: "150 cápsulas",
  236: "150 cápsulas",
  237: "150 cápsulas",
  238: "60 tabletas",
  239: "120 g",
  240: "60 perlas",
  241: "300 g",
  242: "150 g",
  243: "220 ml",
  244: "30 cápsulas",
  245: "100 cápsulas",
  246: "180 g",
  247: "110 gomitas aprox.",
  248: "110 gomitas aprox.",
  249: "250 ml",
  250: "250 ml",
  251: "120 g",
  252: "175 g",
  253: "30 cápsulas",
  254: "30 ml",
  255: "30 g",
  256: "30 g",
  257: "340 ml",
  258: "Gel tópico (cantidad no especificada)",
  259: "60 cápsulas",
  260: "355 ml",
  261: "10 ampolletas de 10 ml",
  262: "1.1 kg",
  263: "500 ml",
  264: "100 cápsulas",
  265: "30 cápsulas",
  266: "150 cápsulas (45 g)",
  267: "30 ampolletas de 10 ml",
  268: "30 ml",
  269: "1 L",
  270: "90 cápsulas",
  271: "60 cápsulas",
  272: "60 cápsulas",
  273: "90 cápsulas (45 g)",
  274: "1 L"
};

window.manualData.productos.forEach((product) => {
  product.packageContent = productPackageContents[product.id] || "Cantidad no especificada";
});
