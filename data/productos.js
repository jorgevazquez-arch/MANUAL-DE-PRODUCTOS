// ============================================================
//  DATA: Catálogo de productos - El Girasol
//  Define la variable global `productos` (array de objetos).
//  Edítalo con cualquier editor de texto; cada producto sigue
//  el mismo formato: { id, code, name, packageContent, category, image,
//  shortDesc, ingredients, serving, timing, intakeInstructions,
//  benefits[], benefitSummary, researchNote?, contraindications, foodInteractions, interactions }
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
    shortDesc: "Magnesio en polvo para ayudar al funcionamiento de músculos y nervios y reducir el cansancio cuando falta este mineral.",
    ingredients: "Cloruro de magnesio hexahidratado (MgCl₂·6H₂O), con trazas de calcio, hierro y vitamina A.",
    serving: "4 g (1 cucharada dosificadora)",
    timing: "Una vez al día, preferentemente con alimentos",
    intakeInstructions: "Disolver 4 g en 200-250 ml de agua o jugo. Consumir con alimentos.",
    benefits: [
      "Ayuda a que músculos y nervios funcionen bien y a obtener energía de los alimentos con el magnesio del cloruro de magnesio.",
      "También contiene pequeñas cantidades de calcio, hierro y vitamina A."
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
    benefitSummary: "Bienestar digestivo tradicional con orégano",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Coconut-y-Oregano1.jpg",
    shortDesc: "Aceite de coco y orégano en cápsulas. El orégano se usa tradicionalmente para el bienestar digestivo y contiene compuestos que ayudan al cuidado de las células.",
    ingredients: "Aceite de coco virgen extra en polvo (300 mg), ácido láurico (100 mg), orégano en polvo estandarizado al 70 % de carvacrol (100 mg) por cápsula.",
    serving: "1 cápsula",
    timing: "Una vez al día, con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos y un vaso de agua.",
    benefits: [
      "Se usa para el bienestar del estómago con orégano y su carvacrol. El aceite de coco y el ácido láurico aportan la parte grasa de la mezcla."
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
    shortDesc: "Colágeno en polvo con vitamina C y biotina para complementar el cuidado de la piel y las articulaciones. Se mezcla con bebidas o alimentos.",
    ingredients: "Colágeno hidrolizado (péptidos de bajo peso molecular), vitamina C (ácido ascórbico), biotina.",
    serving: "10 g (1 cucharada)",
    timing: "Una vez al día, en ayunas o entre comidas",
    intakeInstructions: "Disolver 10 g (1 cucharada) en 200-300 ml de agua, jugo o bebida fría o templada. Consumir una vez al día.",
    benefits: [
      "Ayuda a cuidar piel y articulaciones: el colágeno aporta proteína y la vitamina C ayuda a formar el colágeno del cuerpo.",
      "La biotina ayuda a mantener la piel en buen estado y a aprovechar los alimentos."
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
    image: "https://investigacioncbg.com/wp-content/uploads/2026/11/complejobyarandanoportada.webp",
    shortDesc: "Vitaminas B con arándano para ayudar a obtener energía de los alimentos, cuidar los nervios y reducir el cansancio por falta de estas vitaminas.",
    ingredients: "Vitaminas B1, B2, B3, B5, B6, B7, B9, B12; extracto de arándano (Vaccinium myrtillus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda a obtener energía de los alimentos con vitaminas B1, B2, B3, B5, B6 y B7. Las B1, B6 y B12 también cuidan el funcionamiento de los nervios.",
      "Las B9 y B12 ayudan a formar glóbulos rojos. El arándano aporta antioxidantes para cuidar las células."
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
    shortDesc: "Vitaminas B, arándanos y ginseng siberiano para complementar la alimentación en etapas de mayor actividad y apoyar la vitalidad.",
    ingredients: "Arándanos (blueberry, cranberry), vitaminas B1, B2, B5, B6, B9, B12, biotina, vitaminas A, C, D, ginseng siberiano (Eleutherococcus senticosus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda a obtener energía de los alimentos con vitaminas B1, B2, B5, B6 y biotina. El ginseng siberiano se usa para la vitalidad en días de mayor actividad.",
      "Las vitaminas B6, B9 y B12 ayudan al funcionamiento de los nervios y a formar glóbulos rojos.",
      "Los arándanos blueberry y cranberry y la vitamina C aportan antioxidantes. La vitamina A cuida la piel y la vitamina D ayuda a mantener huesos y músculos."
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
    benefitSummary: "Arándano para complementar el cuidado urinario",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CRANBERRY-URY.jpg",
    shortDesc: "Arándano rojo en cápsulas para complementar el cuidado de las vías urinarias. Una opción práctica para incorporar este fruto a la rutina.",
    ingredients: "Extracto en polvo del fruto de arándano rojo (Vaccinium vitis-idaea) 1000 mg.",
    serving: "1 cápsula",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos. Acompañar con una ingesta adecuada de agua.",
    benefits: [
      "Aporta extracto de arándano rojo para complementar el cuidado diario de las vías urinarias."
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
    shortDesc: "Creatina en polvo para apoyar la fuerza y el rendimiento en esfuerzos cortos e intensos, junto con una rutina de entrenamiento.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cuchara medidora)",
    timing: "Una vez al día, preferentemente después del entrenamiento",
    intakeInstructions: "Mezclar 5 g (1 cuchara) en 200-250 ml de agua o bebida de elección. Consumir una vez al día.",
    benefits: [
      "Apoya el rendimiento en esfuerzos cortos y repetidos con creatina monohidratada, que ayuda a reponer energía rápida para los músculos durante el entrenamiento."
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
    shortDesc: "Creatina en polvo para apoyar la fuerza y mantener el rendimiento durante series cortas y repetidas de ejercicio.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cucharada rasa)",
    timing: "Preferentemente después del entrenamiento",
    intakeInstructions: "Disolver 5 g (1 cucharada) en 250 ml de agua o jugo. Consumir preferentemente después del entrenamiento.",
    benefits: [
      "Apoya fuerza y rendimiento en esfuerzos cortos y repetidos con creatina monohidratada, acompañada de entrenamiento y alimentación suficientes."
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
    shortDesc: "Cuachalalate y tepezcohuite en una sola fórmula. Son plantas de uso tradicional mexicano para acompañar el bienestar del estómago.",
    ingredients: "Cuachalalate (Amphipterygium adstringens) corteza 750 mg, Tepezcohuite (Mimosa tenuiflora) corteza 750 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Se usa para el bienestar del estómago con cortezas de cuachalalate y tepezcohuite."
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
    shortDesc: "Mezcla de plantas y vitaminas B para complementar el cuidado del corazón y la circulación junto con alimentación y actividad física.",
    ingredients: "Ajo deodorizado, zapote blanco, alpiste, enebro, té verde, extracto de olivo, semilla de uva, vitaminas B1, B6, B12.",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Complementa el cuidado del corazón con ajo deodorizado y olivo. La semilla de uva y el té verde aportan antioxidantes para cuidar las células.",
      "La vitamina B1 ayuda al corazón a funcionar bien. Las B6 y B12 ayudan a aprovechar los alimentos y a formar glóbulos rojos.",
      "Zapote blanco, alpiste y enebro completan la mezcla de plantas."
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
    benefitSummary: "Cúrcuma para pesadez digestiva y aporte antioxidante",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CURCUMA-POLVO.png",
    shortDesc: "Cúrcuma en polvo de uso tradicional para aliviar la pesadez y los gases después de comer. También aporta antioxidantes, sustancias que ayudan a proteger las células del daño diario.",
    ingredients: "Cúrcuma en polvo orgánica (Curcuma longa) 100%.",
    serving: "3 g (1 cucharadita)",
    timing: "Con alimentos que contengan grasas (para mejorar la absorción)",
    intakeInstructions: "Mezclar 3 g (1 cucharadita) en bebidas, jugos, té o alimentos. Consumir una vez al día.",
    benefits: [
      "La cúrcuma orgánica se usa para el bienestar del estómago después de comer y aporta antioxidantes."
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
    benefitSummary: "Cúrcuma y jengibre para bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcuma-y-Moringa1-1.jpg",
    shortDesc: "La cúrcuma y el jengibre tienen uso tradicional para molestias digestivas leves, como pesadez y gases. La moringa añade compuestos vegetales antioxidantes.",
    ingredients: "Raíz de cúrcuma (Curcuma longa) 900 mg, raíz de jengibre (Zingiber officinale) 300 mg, hoja de moringa (Moringa oleifera) 300 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
    benefits: [
      "Cúrcuma y jengibre se usan para el bienestar del estómago después de comer. La moringa aporta antioxidantes para cuidar las células."
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
    benefitSummary: "Cúrcuma para pesadez digestiva y aporte antioxidante",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/curcuma.jpg",
    shortDesc: "Raíz de cúrcuma en cápsulas para acompañar el bienestar del estómago después de comer. Su uso tradicional se enfoca en molestias digestivas leves, como pesadez, gases y sensación de digestión lenta. También contiene compuestos vegetales que complementan el aporte antioxidante de la alimentación. Esta presentación utiliza la raíz en polvo y se distingue de la curcumina concentrada, cuyo enfoque dentro del catálogo es el cuidado de las articulaciones.",
    researchNote: {
      "focus": "Pesadez, gases y digestión lenta",
      "text": "Bienestar del estómago después de comer: la raíz de cúrcuma se utiliza tradicionalmente para acompañar molestias leves como pesadez, gases y digestión lenta. La EMA recoge este uso digestivo de preparaciones de cúrcuma. Estas cápsulas aportan 1,000 mg de raíz en polvo por porción, una presentación que permite incorporarla a la rutina. La información seleccionada se centra en la comodidad digestiva y en el uso de la raíz, que da identidad a este producto.",
      "sources": [
        {
          "title": "EMA: raíz de cúrcuma y uso tradicional para molestias digestivas",
          "url": "https://www.ema.europa.eu/en/medicines/herbal/curcumae-longae-rhizoma"
        }
      ]
    },
    ingredients: "Raíz de cúrcuma (Curcuma longa) en polvo 1000 mg por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
    benefits: [
      "Bienestar después de comer: la raíz de cúrcuma tiene uso tradicional para acompañar molestias digestivas leves, como pesadez, gases y sensación de digestión lenta.",
      "Permite incorporar la raíz de cúrcuma en cápsulas, con 1,000 mg de polvo por porción, dentro de la rutina de cuidado digestivo."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-COCO.webp",
    shortDesc: "Aceite de coco de sabor y olor neutros para cocinar, hornear y preparar distintas recetas.",
    ingredients: "Aceite de coco orgánico RBD (Refinado, Blanqueado y Desodorizado).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para cocinar a altas temperaturas",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos.",
    benefits: [
      "Aporta grasa y energía para preparar alimentos con aceite de coco RBD, refinado, blanqueado y desodorizado. Su sabor neutro facilita su uso en distintas recetas."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-COCO-ORGANICO.webp",
    shortDesc: "Aceite de coco extra virgen con aroma y sabor natural para cocinar. En uso externo puede ayudar a suavizar la piel y el cabello.",
    ingredients: "Aceite de coco extra virgen orgánico (prensado en frío).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para frituras, horneado y uso cosmético",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos. Recomendado para cuidado de la piel y cabello.",
    benefits: [
      "Aporta grasa y energía con aceite de coco extra virgen prensado en frío. Su aroma y sabor complementan recetas dulces o saladas."
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
    shortDesc: "Orégano en gotas con aceite de oliva. Se usa tradicionalmente como complemento del bienestar digestivo y permite medir la porción con gotero.",
    ingredients: "Aceite esencial de orégano (Origanum vulgare), con aceite base vegetal (oliva).",
    serving: "0.75 ml (3 gotas)",
    timing: "Con alimentos",
    intakeInstructions: "Diluir 0.75 ml (3 gotas) en agua, jugo o infusión. Tomar con alimentos.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con aceite esencial de orégano. El aceite de oliva sirve como base para diluirlo y distribuirlo en la preparación."
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
    shortDesc: "Ácido alfa lipoico para complementar el cuidado de las células y participar en los procesos con los que el cuerpo obtiene energía.",
    ingredients: "Ácido alfa lipóico (ácido tióctico) 300 mg por porción.",
    serving: "2 cápsulas (300 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Aporta ácido alfa lipóico o tióctico para cuidar las células y ayudar al cuerpo a obtener energía de los alimentos."
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
    shortDesc: "Colágeno con ácido hialurónico, omega 3, arándano y sábila para complementar el cuidado de la piel y las articulaciones.",
    ingredients: "Colágeno hidrolizado tipo 1 (9 g), arándano azul (800 mg), aloe vera (280 mg), omega 3 (400 mg EPA/DHA), ácido hialurónico (200 mg), vitamina E (50 mg) por porción.",
    serving: "15 g (1 cuchara)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 15 g en 200-300 ml de agua, jugo o bebida vegetal. Consumir una vez al día.",
    benefits: [
      "Ayuda a cuidar piel y articulaciones con proteína del colágeno tipo 1. El ácido hialurónico complementa el cuidado de la hidratación de la piel.",
      "El arándano azul y la vitamina E aportan antioxidantes. El omega 3 EPA/DHA aporta grasas para las células y el aloe vera completa la mezcla."
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
    benefitSummary: "Posible apoyo al cuidado de la grasa corporal con ejercicio",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/unnamed-1.jpg",
    shortDesc: "Ácido linoleico conjugado procedente de aceite de cártamo, utilizado como complemento dentro de planes de alimentación y ejercicio orientados al cuidado de la grasa corporal. Su función se explica como un posible apoyo a los objetivos de composición corporal, junto con entrenamiento y consumo suficiente de proteína. Para la capacitación conviene distinguir reducción de grasa, pérdida de peso y mantenimiento muscular: son objetivos diferentes y no deben presentarse como un resultado automático de las cápsulas.",
    ingredients: "Ácido linoleico conjugado (CLA) de alta pureza, procedente de aceite de cártamo.",
    serving: "3 cápsulas (2.4 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Puede acompañar los objetivos de cuidado de la grasa corporal dentro de un plan de alimentación y ejercicio.",
      "Aporta ácido linoleico conjugado CLA procedente de aceite de cártamo como complemento de las grasas de la alimentación."
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
    benefitSummary: "Vitalidad y bienestar femenino tradicional",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Aguaje1.jpg",
    shortDesc: "Aguaje, fenogreco y dos variedades de maca para acompañar el bienestar femenino y la vitalidad, desde su uso tradicional.",
    ingredients: "Aguaje (Mauritia flexuosa) 750 mg, fenogreco (Trigonella foenum-graecum) 375 mg, maca negra (Lepidium meyenii) 250 mg, maca amarilla (Lepidium meyenii) 125 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Acompaña la vitalidad femenina con maca negra y maca amarilla. El aguaje y el fenogreco completan el aporte vegetal."
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
    benefitSummary: "Ajo negro y moringa para antioxidantes, con vitaminas B",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/AJO-NEGRO-MORINGA1.jpg",
    shortDesc: "Combina ajo negro y hoja de moringa para complementar el aporte de compuestos vegetales y antioxidantes. La moringa amplía la composición de la fórmula y la distingue del ajo negro solo. Incluye vitaminas B1, B2 y B6, que participan en el aprovechamiento de alimentos y el funcionamiento de los nervios, además de una pequeña cantidad de vitamina C. El cuidado antioxidante tiene prioridad, seguido del aporte nutricional y las funciones complementarias de las vitaminas.",
    ingredients: "Hoja de moringa (250 mg), bulbo de ajo negro (249 mg), vitamina C (0.5 mg), vitaminas B1, B2, B6 por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Cuidado antioxidante: ajo negro y moringa complementan el aporte de compuestos vegetales para cuidar las células.",
      "Las vitaminas B1, B2 y B6 ayudan a obtener energía de los alimentos y al funcionamiento de los nervios.",
      "Incluye una pequeña cantidad de vitamina C como acompañante de la mezcla."
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
    benefitSummary: "Bienestar tradicional en cambios de temporada",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Ajo-Negro-Propoleo1.jpg",
    shortDesc: "Ajo negro y propóleo en cápsulas, usados tradicionalmente para acompañar el bienestar en los cambios de temporada.",
    ingredients: "Extracto de propóleo estandarizado en flavonoides (250 mg), bulbo de ajo negro (250 mg) por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Acompaña el cuidado en cambios de temporada con propóleo para la comodidad de la garganta, y ajo negro, que añade antioxidantes."
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
    benefitSummary: "Ajo negro para cuidado cardiovascular y antioxidante",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ajo-negro.jpg",
    shortDesc: "Ajo fermentado en cápsulas para complementar el cuidado cardiovascular y el aporte de antioxidantes de la alimentación. Sus compuestos vegetales acompañan el cuidado de las células y dan a esta fórmula su enfoque principal. Incluye pequeñas cantidades de vitaminas C y B6, que se mencionan como acompañantes. Se distingue de otras mezclas porque su ingrediente central es el ajo negro; sus funciones deben explicarse según la preparación y porción utilizadas.",
    ingredients: "Ajo negro (Allium sativum fermentado) 1.5 g, vitamina C 0.62 mg, vitamina B6 0.03 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Cuidado cardiovascular: el ajo negro complementa una alimentación orientada al cuidado del corazón.",
      "Cuidado celular: los compuestos vegetales del ajo negro complementan el aporte de antioxidantes.",
      "Incluye pequeñas cantidades de vitaminas C y B6 como acompañantes de la fórmula."
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
    shortDesc: "Proteína de clara de huevo con vitaminas y minerales para completar la alimentación y ayudar al mantenimiento y recuperación de los músculos.",
    ingredients: "Albúmina de huevo pasteurizada, vitaminas (C, E, B1, B2, B3, B6, B12, A, D3, ácido fólico), minerales (potasio, fósforo, calcio, magnesio, hierro, zinc, cobre, yodo).",
    serving: "30 g (1 medida)",
    timing: "Dos o tres veces al día",
    intakeInstructions: "Mezclar 30 g (1 medida) en jugos, leche, licuados o agua. Tomar dos o tres veces al día.",
    benefits: [
      "Ayuda a cuidar y recuperar los músculos con proteína de albúmina de huevo. Vitaminas B1, B2, B3, B6, B12 y ácido fólico ayudan a obtener energía y a formar glóbulos rojos.",
      "Potasio, fósforo, calcio, magnesio y vitamina D3 ayudan a músculos y huesos. Hierro y cobre ayudan a transportar oxígeno en la sangre y yodo al funcionamiento de la tiroides.",
      "Vitaminas C y E aportan antioxidantes. Vitamina A y zinc ayudan a cuidar la piel y las defensas."
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
    shortDesc: "Espirulina en polvo para enriquecer bebidas y alimentos con los nutrientes de esta alga y variar la alimentación.",
    ingredients: "Alga espirulina orgánica (Arthrospira platensis) 100%.",
    serving: "10 g (2 cucharadas)",
    timing: "En ayunas o con alimentos",
    intakeInstructions: "Mezclar 10 g (2 cucharadas) en agua, jugos, licuados o espolvorear sobre ensaladas. Consumir una vez al día.",
    benefits: [
      "Complementa una alimentación variada con espirulina orgánica y sus componentes naturales. El polvo permite añadirla a bebidas o alimentos."
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
    benefitSummary: "Espirulina, vitaminas y minerales para complementar la alimentación",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Alga-Spirulina-Organica1.jpg",
    shortDesc: "Espirulina en cápsulas con vitaminas y minerales para complementar la alimentación de forma práctica, sin el sabor del alga.",
    ingredients: "Alga espirulina orgánica (1,135 mg), calcio (150 mg), magnesio (150 mg), vitamina E (15 mg), hierro (8 mg), vitaminas B1, B2, B6, B12, zinc, cobre, vitamina A por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Complementa la alimentación con espirulina. Vitaminas B1, B2, B6 y B12 ayudan a obtener energía y al funcionamiento de los nervios.",
      "Calcio y magnesio ayudan a cuidar músculos y huesos. Hierro y cobre ayudan a formar glóbulos rojos.",
      "Zinc y vitamina A ayudan a cuidar la piel y las defensas. La vitamina E aporta antioxidantes."
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
    shortDesc: "Bebida de sábila con arándano y vitamina C para complementar el bienestar digestivo y el cuidado de las defensas.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de arándano (Vaccinium macrocarpon), vitamina C (27 mg por porción).",
    serving: "90 ml",
    timing: "En ayunas o antes de la primera comida",
    intakeInstructions: "Agitar bien. Consumir 90 ml al día, preferentemente en ayunas o antes de la primera comida.",
    benefits: [
      "Arándano y aloe vera complementan el cuidado diario. La sábila se usa para el bienestar digestivo y la vitamina C apoya las defensas y aporta antioxidantes."
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
    shortDesc: "Bebida de sábila de sabor tropical con vitamina C para complementar la rutina digestiva y el cuidado de las defensas.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), vitamina C (30 mg por porción), saborizantes naturales tropicales.",
    serving: "100 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar bien. Tomar 100 ml al día, preferentemente en ayunas o entre comidas.",
    benefits: [
      "La vitamina C apoya las defensas y aporta antioxidantes. El aloe vera se usa para el bienestar digestivo y los saborizantes tropicales dan sabor a la bebida."
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
    benefitSummary: "Cuidado digestivo y aprovechamiento de los alimentos",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/ZN-–-AMP-ON-–-60-caps-600-mg-–-Render-–-V2-–-Marzo2026-2.jpg",
    shortDesc: "Mezcla de plantas, fibra, bacterias benéficas y minerales para complementar el cuidado digestivo y el aprovechamiento de los alimentos.",
    ingredients: "α-Glucosil hesperidina (300 mg), inulina de agave (300 mg), Gynostemma pentaphyllum (200 mg), ácido clorogénico (200 mg), ácido alfa lipoico (100 mg), Bifidobacterium lactis (1 billón UFC), zinc (2.5 mg), cromo picolinato (25 µg) por porción.",
    serving: "2 cápsulas (1.2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda al cuidado intestinal con Bifidobacterium lactis. La inulina de agave aporta fibra que alimenta a las bacterias buenas del intestino.",
      "El cromo picolinato y el zinc ayudan a aprovechar los alimentos. El ácido alfa lipoico y la α-glucosil hesperidina aportan antioxidantes.",
      "Gynostemma pentaphyllum y ácido clorogénico completan la mezcla para el cuidado de la alimentación."
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
    benefitSummary: "Cuidado de las articulaciones y facilidad de movimiento",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ARTMUUB_1-1.webp",
    shortDesc: "Fórmula para acompañar el cuidado de las articulaciones y mantener la comodidad al moverse. Combina colágeno, cartílago de tiburón, glucosamina y condroitina como ingredientes principales de su enfoque articular. La vitamina C ayuda al cuerpo a formar colágeno, mientras que magnesio y vitamina D complementan el cuidado de huesos y músculos. También incluye omega 3, vitamina E y zinc para el cuidado celular, además de fibra como aporte digestivo secundario.",
    researchNote: {
      "focus": "Articulaciones y comodidad al moverse",
      "text": "Cuidado de las articulaciones y comodidad al moverse: la fórmula reúne colágeno, cartílago de tiburón, glucosamina y condroitina dentro de su enfoque articular. En estudios con preparados específicos de colágeno se han observado mejoras en dolor y función de rodilla. La vitamina C ayuda al cuerpo a formar colágeno, mientras que magnesio y vitamina D acompañan el cuidado de huesos y músculos. Omega 3, vitamina E y zinc complementan el cuidado celular, y la fibra queda como apoyo digestivo secundario. Las fuentes permiten conocer las funciones y preparaciones estudiadas de sus ingredientes.",
      "sources": [
        {
          "title": "Colágeno hidrolizado: ensayo en personas con artrosis de rodilla",
          "url": "https://pubmed.ncbi.nlm.nih.gov/39839727/"
        },
        {
          "title": "Glucosamina y condroitina: ensayo clínico sobre dolor y función de rodilla",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27477804/"
        },
        {
          "title": "NIH ODS: vitamina C y formación de colágeno",
          "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
        }
      ]
    },
    ingredients: "Colágeno, cartílago de tiburón, glucosamina y condroitina (cantidades individuales no especificadas). Aporte por porción: proteínas (9 g), omega-3 (EPA 280 mg, DHA 210 mg, DPA 210 mg), vitamina C (390 mg), magnesio (150 mg), vitamina E (99.9 mg), zinc (9.9 mg), vitamina D (9.9 mg, posible error: mcg), fibra (4.4 g).",
    serving: "30 g",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Disolver 30 g (2 cucharadas) en 300-400 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Cuidado articular y comodidad al moverse: combina colágeno, cartílago de tiburón, glucosamina y condroitina. En ensayos con preparados específicos de colágeno se han observado mejoras en dolor y función de rodilla.",
      "Formación de colágeno: la vitamina C ayuda al cuerpo a formar este componente de los tejidos.",
      "Movimiento y cuidado de huesos y músculos: magnesio y vitamina D complementan el aporte nutricional de la fórmula.",
      "Cuidado celular: omega 3 EPA, DHA y DPA, vitamina E y zinc completan el aporte de grasas y antioxidantes. La fibra queda como apoyo adicional al movimiento del intestino."
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
    shortDesc: "Glucosamina, condroitina y MSM para complementar el cuidado de las articulaciones y acompañar una rutina de movimiento.",
    ingredients: "Glucosamina (sulfato) 600 mg, condroitina (sulfato) 500 mg, MSM 400 mg por porción.",
    serving: "2 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Puede ayudar a mantener la comodidad y el movimiento de las articulaciones con glucosamina, condroitina y MSM."
    ],
    contraindications: "Personas con alergia a crustáceos (glucosamina), mujeres embarazadas, personas con diabetes o asma deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede cambiar el azúcar en la sangre de personas con diabetes. También consultar si el cliente toma medicamentos para evitar coágulos."
  },

  // ================================================================
  //  32. ASHWAGANDA ROOT (120 cápsulas de 500 mg)
  // ================================================================
  {
    id: 32,
    code: "7500645000418",
    name: "ASHWAGANDA ROOT",
    benefitSummary: "Raíz de ashwagandha en polvo para calma y descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/11/ASHWAGANDHAROOT.jpg",
    shortDesc: "Raíz de ashwagandha en polvo como único ingrediente, en un envase con 120 cápsulas de 500 mg cada una. Su uso tradicional se orienta a acompañar la calma ante el estrés cotidiano y la rutina de descanso. Esta presentación conserva la raíz molida como preparación vegetal. El enfoque de la ficha es la relajación y el bienestar durante etapas de mayor exigencia diaria.",
    researchNote: {
      "focus": "Uso tradicional de raíz de ashwagandha en polvo para calma y descanso",
      "sources": [
        {
          "title": "NIH: raíz de ashwagandha, usos tradicionales y diferencias entre preparaciones",
          "url": "https://ods.od.nih.gov/factsheets/Ashwagandha-HealthProfessional/"
        }
      ]
    },
    ingredients: "Raíz de ashwagandha (Withania somnifera) en polvo, 500 mg por cápsula. Único ingrediente declarado.",
    serving: "1 cápsula (500 mg) al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos. Cada cápsula contiene 500 mg de raíz de ashwagandha en polvo. El envase contiene 120 porciones y rinde 120 días.",
    benefits: [
      "Calma cotidiana: la raíz de ashwagandha en polvo se utiliza tradicionalmente para acompañar la respuesta al estrés y la relajación.",
      "Rutina de descanso: su uso tradicional también acompaña la preparación para dormir cuando la tensión del día dificulta relajarse."
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la tiroides, enfermedades autoinmunes, úlcera gástrica o bajo tratamiento con ansiolíticos, hipnóticos, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Puede dar sueño y aumentar el efecto de medicamentos para la ansiedad o para dormir. También consultar si usa tratamientos para la diabetes o para disminuir la actividad de las defensas."
  },

  // ================================================================
  //  33. ASHWAGANDHA (60 cápsulas vegetales)
  // ================================================================
  {
    id: 33,
    code: "7503026253410",
    name: "ASHWAGANDHA",
    benefitSummary: "Calma y descanso con raíz de ashwagandha y pimienta negra",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/11/ASHWAGANDHA.jpg",
    shortDesc: "Raíz de ashwagandha con extracto de pimienta negra en un envase de 60 cápsulas vegetales. Cada cápsula aporta 995 mg de raíz y 5 mg de extracto de pimienta negra, fuente de piperina. El enfoque es acompañar la calma ante el estrés cotidiano y la rutina de descanso desde el uso tradicional de la raíz. La pimienta negra complementa la fórmula como fuente de piperina.",
    researchNote: {
      "focus": "Uso tradicional de raíz de ashwagandha para calma y descanso, acompañada de pimienta negra",
      "sources": [
        {
          "title": "NIH: raíz de ashwagandha, usos tradicionales y preparaciones",
          "url": "https://ods.od.nih.gov/factsheets/Ashwagandha-HealthProfessional/"
        },
        {
          "title": "BfR: piperina en suplementos, finalidad e interacciones",
          "url": "https://www.bfr.bund.de/en/service/frequently-asked-questions/topic/benefits-and-risks-of-micronutrient-supplements-in-older-age/"
        }
      ]
    },
    ingredients: "Por cápsula (1 g): raíz de ashwagandha (Withania somnifera), 995 mg; extracto de pimienta negra (Piper nigrum L.), 5 mg, fuente de piperina. Cápsula vegetal. La etiqueta no declara la cantidad de piperina pura.",
    serving: "1 cápsula (1 g)",
    timing: "Con alimentos, por la mañana o antes de dormir",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos. El envase contiene 60 porciones y rinde 60 días con este consumo diario.",
    benefits: [
      "Calma cotidiana: la raíz de ashwagandha se utiliza tradicionalmente para acompañar la respuesta al estrés y favorecer la relajación.",
      "Rutina de descanso: el uso tradicional de la raíz también acompaña la preparación para dormir cuando cuesta relajarse al terminar el día.",
      "Complemento de la fórmula: la pimienta negra aporta piperina, empleada en suplementos para favorecer el aprovechamiento de ciertos compuestos."
    ],
    contraindications: "No recomendado durante embarazo o lactancia. Consultar a médico si se toman medicamentos para la tiroides, diabetes o inmunosupresores.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "Consultar si el cliente usa medicamentos para la tiroides, la diabetes o para disminuir la actividad de las defensas. La piperina puede modificar la absorción y los niveles de algunos medicamentos; revisar la combinación con su médico o farmacéutico."
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
    shortDesc: "Astaxantina para complementar el cuidado de las células, la piel y los ojos frente al desgaste diario.",
    ingredients: "Astaxantina 250 mg (de Haematococcus pluvialis), en cápsula blanda con aceite base.",
    serving: "1 cápsula",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día con una comida que contenga grasas.",
    benefits: [
      "Aporta astaxantina de Haematococcus pluvialis, un antioxidante para cuidar las células. El aceite base permite preparar la cápsula blanda."
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
    shortDesc: "Proteína de res con creatina y taurina para completar la alimentación y ayudar al mantenimiento y recuperación de los músculos.",
    ingredients: "Proteína de carne hidrolizada (23 g por porción), creatina natural (7,600 mg), taurina (3,000 mg), perfil de aminoácidos completo.",
    serving: "33 g (1 medida)",
    timing: "Antes o después del entrenamiento",
    intakeInstructions: "Diluir 33 g en 240-300 ml de agua fría o leche. Tomar antes o después del entrenamiento.",
    benefits: [
      "Ayuda a cuidar y recuperar los músculos con proteína de carne hidrolizada. La creatina ayuda a rendir en esfuerzos cortos y repetidos.",
      "La taurina completa la fórmula para el entrenamiento."
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
    benefitSummary: "Complemento del cuidado del azúcar y las grasas",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/10/BERBERINE1-1.jpg",
    shortDesc: "Berberina con zinc para complementar un plan de alimentación y ejercicio enfocado en el cuidado del azúcar y las grasas en la sangre.",
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
      "Complementa el cuidado del azúcar y las grasas en la sangre con berberina HCL. El zinc del glicinato ayuda a aprovechar los alimentos."
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
    shortDesc: "Mezcla de plantas y L-carnitina para complementar la alimentación y acompañar una rutina de actividad física.",
    ingredients: "L-carnitina, polvo de raíz de India Lotus, Tejocote, Nopal, Café verde, Clorofila, Piña, Toronja, Apio, Alcachofa.",
    serving: "1 cápsula (500 mg)",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
    benefits: [
      "Complementa la alimentación de personas activas con L-carnitina, que ayuda al cuerpo a usar grasas para obtener energía, y café verde.",
      "Nopal, piña y alcachofa acompañan el cuidado digestivo. Apio, toronja y clorofila completan el aporte vegetal.",
      "La mezcla también contiene raíz de India Lotus y tejocote."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CAFECONMORINGA.webp",
    shortDesc: "Café con moringa y hongos de uso tradicional. Una bebida para variar la rutina y ayudar a mantenerse alerta.",
    ingredients: "Café arábico, moringa, Reishi, Shiitake, Maitake, stevia, sustituto de crema.",
    serving: "20 g (1 sobre, rinde 3 tazas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar el contenido de un sobre en agua caliente, disolver y disfrutar. Cada sobre rinde 3 tazas.",
    benefits: [
      "Ayuda a estar más despierto con la cafeína del café arábico. Moringa, Reishi, Shiitake y Maitake completan la mezcla de plantas y hongos.",
      "La stevia da dulzor y el sustituto de crema da una textura cremosa."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/cafe.jpg",
    shortDesc: "Café con canela, clavo y anís para disfrutar el sabor tradicional del café de olla y ayudar a mantenerse alerta.",
    ingredients: "Café tostado en grano (Coffea arabica), especias tradicionales (canela, clavo, anís estrella).",
    serving: "15 g (2 cucharadas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 15 g en 200-250 ml de agua caliente. Mezclar bien. Endulzar al gusto.",
    benefits: [
      "Ayuda a estar más despierto por la cafeína del café tostado arábico. Canela, clavo y anís estrella aportan aromas y compuestos vegetales que complementan la bebida tradicional."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CAFESOLUBLE.jpg",
    shortDesc: "Café soluble con hongos y arándanos en sobres para preparar una bebida práctica y ayudar a mantenerse alerta.",
    ingredients: "Café soluble, extracto de Ganoderma (500 mg), extracto de Shiitake (500 mg), mezcla de arándanos (cranberry, bilberry, blueberry) 2 mg por sobre.",
    serving: "1 sobre (4.5 g)",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Disolver 1 sobre en 200-250 ml de agua caliente. Endulzar al gusto.",
    benefits: [
      "Ayuda a estar más despierto con la cafeína del café soluble. Ganoderma y Shiitake complementan la bebida con hongos.",
      "Incluye pequeñas cantidades de arándanos cranberry, bilberry y blueberry."
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
    shortDesc: "Canela y cromo con vitaminas y minerales para ayudar al cuerpo a aprovechar los alimentos y complementar el cuidado del azúcar en la sangre.",
    ingredients: "Canela (950 mg), vitamina C (300 mg), potasio (200 mg), fósforo (200 mg), vitamina E (200 mg), calcio (100 mg), hierro (20 mg), vitaminas B1 (15 mg), B2 (14.9 mg), picolinato de cromo (200 mcg), vitamina B12 (12 mcg) por porción.",
    serving: "2 cápsulas (2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda a aprovechar los alimentos con cromo y vitaminas B1, B2 y B12. La canela completa la mezcla para el cuidado del azúcar.",
      "Potasio, fósforo y calcio ayudan al cuidado de músculos y huesos. Hierro ayuda a transportar oxígeno y vitaminas C y E aportan antioxidantes."
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
    shortDesc: "Caralluma en cápsulas, una planta de uso tradicional para acompañar el control del apetito junto con alimentación y ejercicio.",
    ingredients: "Extracto de Caralluma fimbriata (partes aéreas) 500 mg por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Antes de las comidas",
    intakeInstructions: "Tomar 1 cápsula al día antes de las comidas principales.",
    benefits: [
      "Contiene Caralluma fimbriata, una planta que se usa como complemento de la alimentación para el cuidado del apetito."
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
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/carsyl.png",
    shortDesc: "Mezcla de plantas de uso tradicional para acompañar el bienestar digestivo y el confort después de comer.",
    ingredients: "Hoja de cardo mariano, hojas de boldo, ruibarbo, cuasia, diente de león (extractos en proporción no especificada).",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Acompaña el bienestar del estómago con boldo, cuasia y diente de león. Cardo mariano y ruibarbo completan la mezcla de plantas."
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
    shortDesc: "Castaño de Indias para complementar el cuidado de la circulación de las piernas y ayudar con la sensación de pesadez.",
    ingredients: "Extracto de castaño de Indias (Aesculus hippocastanum) 400 mg por cápsula.",
    serving: "2 cápsulas (800 mg)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas tres veces al día, antes de los alimentos.",
    benefits: [
      "Puede ayudar a aliviar la sensación de piernas pesadas con extracto de castaño de Indias."
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
    benefitSummary: "Cromo para el aprovechamiento de los alimentos",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0001s_0002_Presentacion-blanco.jpg",
    shortDesc: "Cromo y L-carnitina para complementar el aprovechamiento de los alimentos y el cuidado del azúcar en la sangre.",
    ingredients: "L-carnitina tartrato (100 mg), polinicotinato de cromo (aporte de 20.32 mcg de cromo elemental) por cápsula.",
    serving: "1 cápsula (400 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Ayuda a aprovechar los alimentos con cromo procedente de polinicotinato. La L-carnitina tartrato participa en el uso de grasas para obtener energía."
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
    shortDesc: "Magnesio en polvo con colágeno para apoyar músculos, nervios y huesos y complementar la nutrición de los tejidos.",
    ingredients: "Citrato de magnesio (aporte de 500 mg de magnesio elemental por porción), colágeno hidrolizado (1.5 g por porción).",
    serving: "10 g (1 cucharada)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 10 g en 200-300 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Ayuda al funcionamiento de músculos y nervios con magnesio del citrato. El colágeno hidrolizado aporta proteína para cuidar la piel y las articulaciones."
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
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/potassium.jpg",
    shortDesc: "Potasio en cápsulas para apoyar músculos y nervios y ayudar al equilibrio de agua y minerales del cuerpo.",
    ingredients: "Citrato de potasio 750 mg (aporte de 240.24 mg de potasio elemental) por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda a músculos y nervios a funcionar bien y a mantener el equilibrio de agua con potasio del citrato de potasio."
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
    benefitSummary: "Clorofila para una bebida refrescante",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CLOROFILALIQUIDA.jpg",
    shortDesc: "Clorofila líquida para mezclar con agua y variar las bebidas de la rutina con una sensación refrescante.",
    ingredients: "Clorofilina sódico-cúprica (extracto de clorofila), agua purificada, estabilizantes.",
    serving: "15 ml (3 cucharaditas)",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Diluir 15 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Aporta clorofilina sódico-cúprica para preparar una bebida. El agua purificada la diluye y los estabilizantes mantienen la mezcla uniforme."
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
    benefitSummary: "Bebida refrescante con hierbabuena y matcha",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CLOROFILA1.webp",
    shortDesc: "Clorofila con hierbabuena, menta y matcha para preparar una bebida refrescante. Las plantas tienen uso tradicional digestivo.",
    ingredients: "Extracto de clorofila (10 ml), extracto de hierbabuena (5 ml), extracto de menta piperita (2.5 ml), extracto de té matcha (2.5 ml) por porción.",
    serving: "20 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar antes de usar. Diluir 20 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Hierbabuena y menta piperita dan frescura y se usan para el bienestar digestivo. Té matcha aporta antioxidantes y clorofila da color a la bebida."
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
    shortDesc: "Magnesio en cápsulas con vitaminas C y D y calcio para apoyar músculos, nervios y huesos.",
    ingredients: "Magnesio elemental (240 mg), vitamina C (10 mg), calcio (4 mg), vitamina D (4 mg – probable error: 4 mcg) por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda al funcionamiento de los músculos y al cuidado de los huesos con magnesio y calcio. La vitamina C ayuda a formar colágeno.",
      "Contiene vitamina D. Consultar la etiqueta para confirmar la cantidad."
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
  benefitSummary: "Alivio de molestias e inflamación y cuidado circulatorio",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MOROIZY.jpg",
  shortDesc: "Fórmula para acompañar el alivio de molestias e inflamación y complementar el cuidado circulatorio. Reúne sauce blanco, de uso tradicional calmante, analgésico y desinflamatorio, con hamamelis y corteza de ajo. El sauce blanco también se utiliza para molestias articulares y comodidad al moverse. Las vitaminas C y E aportan antioxidantes, el zinc complementa el cuidado de los tejidos y la B12 ayuda a formar glóbulos rojos y aprovechar los alimentos para obtener energía.",
  researchNote: {
    "focus": "Molestias e inflamación, con cuidado circulatorio complementario",
    "text": "Apoyo para aliviar molestias y acompañar el cuidado circulatorio: el sauce blanco tiene uso tradicional calmante, analgésico y desinflamatorio, especialmente para molestias articulares leves. Hamamelis y corteza de ajo completan la mezcla de orientación circulatoria. La vitamina C participa en la formación de colágeno para los tejidos, y la vitamina E aporta antioxidantes. B12 y zinc complementan el cuidado nutricional de la fórmula. Las fuentes enlazadas explican los usos tradicionales del sauce y las funciones nutricionales que ayudan a entender el aporte de cada ingrediente.",
    "sources": [
      {
        "title": "EMA: corteza de sauce, usos y precauciones",
        "url": "https://www.ema.europa.eu/en/medicines/herbal/salicis-cortex"
      },
      {
        "title": "NIH ODS: vitamina C y mantenimiento de tejidos",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      }
    ]
  },
  ingredients: "Sauce blanco (Salix alba), corteza de ajo, hamamelis, vitamina C, vitamina E, vitamina B12, zinc.",
  serving: "3 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Alivio de molestias e inflamación: el sauce blanco tiene uso tradicional calmante, analgésico y desinflamatorio, especialmente para molestias articulares leves y comodidad al moverse.",
    "Cuidado circulatorio: hamamelis y corteza de ajo completan la mezcla de plantas. La vitamina C ayuda a formar colágeno para mantener los tejidos y vasos sanguíneos.",
    "Protección celular: las vitaminas C y E aportan antioxidantes y el zinc complementa el cuidado de los tejidos.",
    "Energía y vitalidad: la vitamina B12 ayuda a aprovechar los alimentos, formar glóbulos rojos y reducir el cansancio causado por falta de esta vitamina."
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
  benefitSummary: "Inositol para bienestar femenino y aprovechamiento del azúcar",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO1.png",
  shortDesc: "Dos formas de inositol con arándano para complementar el bienestar femenino y el cuidado del azúcar en la sangre.",
  ingredients: "Myo-Inositol (1900 mg), D-Chiro-Inositol (50 mg), polvo de fruto de arándano azul (50 mg) por porción.",
  serving: "4 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Complementa el cuidado del azúcar y el bienestar femenino con myo-inositol y D-chiro-inositol. El arándano azul aporta antioxidantes para cuidar las células."
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
  benefitSummary: "Inositol para bienestar femenino y aprovechamiento del azúcar",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO-INOSITOL-POWDER1.jpg",
  shortDesc: "Inositol en polvo para complementar el bienestar femenino y el aprovechamiento del azúcar. Se mezcla con la bebida indicada.",
  ingredients: "Myo-Inositol (4000 mg), D-Chiro-Inositol (100 mg) por porción.",
  serving: "4.1 g (1 cucharada)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 4.1 g en agua, jugo o bebida vegetal. Consumir una vez al día.",
  benefits: [
    "Complementa el cuidado del azúcar y el bienestar femenino con myo-inositol y D-chiro-inositol en proporción 40:1."
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
  benefitSummary: "Curcumina: posible ayuda para dolor y rigidez articular",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcumina1-1.jpg",
  shortDesc: "Fórmula con extracto concentrado de cúrcuma para acompañar la comodidad y el movimiento de las articulaciones, especialmente cuando hay molestias y rigidez. La vitamina C ayuda al cuerpo a formar colágeno para sus tejidos, mientras que la pimienta negra favorece el aprovechamiento de la curcumina. Su diferencia frente a la cúrcuma en polvo está en la concentración del extracto y en los ingredientes que complementan su enfoque articular.",
  researchNote: {
    "focus": "Comodidad y movimiento de las articulaciones",
    "text": "Comodidad y movimiento de las articulaciones: los curcuminoides se han estudiado por su interés en el alivio de molestias articulares. Algunos ensayos con preparaciones específicas han observado mejoras en dolor y función física de personas con artrosis de rodilla. Esta fórmula combina extracto de cúrcuma al 95 % con vitamina C, que participa en la formación de colágeno, y pimienta negra, que favorece el aprovechamiento de la curcumina. El conjunto de ingredientes orienta la explicación hacia el cuidado articular y el mantenimiento de los tejidos.",
    "sources": [
      {
        "title": "Curcuminoides: ensayo clínico sobre dolor y función en artrosis de rodilla",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24853120/"
      },
      {
        "title": "NCCIH: cúrcuma, diferencias entre preparaciones y precauciones",
        "url": "https://www.nccih.nih.gov/health/turmeric"
      },
      {
        "title": "NIH ODS: vitamina C y formación de colágeno",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      }
    ]
  },
  ingredients: "Curcumina al 95% de curcuminoides (1050 mg), vitamina C (300 mg), pimienta negra (20 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
  benefits: [
    "Comodidad y movimiento articular: los curcuminoides se han investigado para molestias de las articulaciones. En ensayos con preparaciones específicas se han observado mejoras en dolor y función física de personas con artrosis de rodilla.",
    "Cuidado de los tejidos: la vitamina C ayuda al cuerpo a formar colágeno y complementa el enfoque articular de la fórmula.",
    "Aprovechamiento de la curcumina: la pimienta negra acompaña el extracto de cúrcuma al 95 % y favorece su absorción."
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
  benefitSummary: "Vitamina D para huesos y músculos; vitamina C para defensas",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/D3-1000u-1.jpg",
  shortDesc: "Vitamina D3 de 1000 UI con vitamina C y equinácea para apoyar defensas, huesos y músculos y ayudar a absorber el calcio.",
  ingredients: "Por cápsula de 1000 mg: Vitamina C (como ácido ascórbico) 300 mg, Vitamina D3 (como colecalciferol) 1000 UI / 25 mcg, Equinácea (Echinacea purpurea) 200 mg y excipiente c.b.p.",
  serving: "1 cápsula (1000 mg) al día",
  timing: "Por la mañana o con alimentos, preferentemente con una comida que contenga grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos, preferentemente por la mañana. No exceder la porción diaria recomendada.",
  benefits: [
    "Apoya las defensas con vitaminas C y D3. La equinácea acompaña el cuidado en cambios de temporada.",
    "Complementa el mantenimiento de huesos y músculos con vitamina D3 y la formación de colágeno con vitamina C."
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
  benefitSummary: "Plantas para acompañar el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSCLASICO.webp",
  shortDesc: "Mezcla de plantas como sábila, lino y nopal para acompañar el bienestar digestivo junto con hábitos de alimentación y consumo de agua.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, bromelina.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Acompaña el bienestar digestivo con lino y nopal como fuentes vegetales de fibra, aloe vera y milenrama de uso tradicional, y bromelina como enzima que descompone proteínas.",
    "Guaraná, naranjo, alisma y lima completan la mezcla vegetal."
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
  benefitSummary: "Plantas y tés para acompañar el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPLUS.webp",
  shortDesc: "Mezcla de plantas y tés para acompañar el bienestar digestivo dentro de una rutina de alimentación y actividad física.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, zarzaparrilla, diente de león, té rojo, té blanco.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Acompaña el bienestar digestivo con lino, nopal, aloe vera y milenrama. El diente de león y la zarzaparrilla completan la mezcla de uso tradicional.",
    "Guaraná, té rojo y té blanco pueden aportar cafeína. Naranjo, alisma y lima añaden otros componentes vegetales."
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
  benefitSummary: "Cansancio asociado al estrés y vitalidad diaria",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Diola-Rose1-1.jpg",
  shortDesc: "Fórmula centrada en el cansancio asociado al estrés y el apoyo a la vitalidad durante la actividad diaria. La rhodiola aporta su uso tradicional para aliviar temporalmente la sensación de fatiga y debilidad en etapas de exigencia. El citrato de magnesio complementa el funcionamiento muscular y nervioso y la obtención de energía de los alimentos. El polen de abeja se incorpora en pequeña cantidad a la mezcla.",
  researchNote: {
    "focus": "Cansancio asociado al estrés y vitalidad diaria",
    "sources": [
      {
        "title": "EMA: uso tradicional de rhodiola para cansancio asociado al estrés",
        "url": "https://www.ema.europa.eu/en/medicines/herbal/rhodiolae-roseae-rhizoma-et-radix"
      },
      {
        "title": "NIH: magnesio, músculos, nervios y producción de energía",
        "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
      },
      {
        "title": "NCCIH: rhodiola, usos y precauciones",
        "url": "https://www.nccih.nih.gov/health/rhodiola"
      }
    ]
  },
  ingredients: "Citrato de magnesio (aporte de magnesio elemental ≈ 70 mg) (500 mg), Rhodiola Rosea (extracto de raíz estandarizado en rosavinas y salidrósido) (450 mg), polen de abeja en polvo (50 mg).",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para resultados óptimos en la adaptación al estrés y la vitalidad, se recomienda un uso continuo de al menos 4-8 semanas.",
  benefits: [
    "Vitalidad ante el estrés: la rhodiola se utiliza tradicionalmente para aliviar temporalmente el cansancio y la sensación de debilidad asociados al estrés.",
    "Energía y funcionamiento muscular: el magnesio del citrato ayuda a aprovechar los alimentos y al funcionamiento de músculos y nervios.",
    "Complemento de la fórmula: el polen de abeja se incluye en pequeña cantidad dentro de la mezcla centrada en rhodiola y magnesio."
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
  benefitSummary: "Plantas para acompañar el bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Mezcla de plantas, frutas y jengibre para acompañar el bienestar digestivo y complementar una alimentación variada.",
  ingredients: "Hojas de té, papaya, toronja, malva, espirulina, jengibre.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Acompaña el bienestar digestivo con jengibre y malva. Papaya y toronja añaden componentes de frutas, mientras las hojas de té y la espirulina completan el aporte vegetal."
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
  shortDesc: "Enzimas con papaya y hierbabuena para ayudar a descomponer los alimentos y favorecer el confort después de comidas pesadas.",
  ingredients: "Papaya (400 mg), papaina (180 mg), bromelina (170 mg), fosfato de calcio (100 mg), amilasa (50 mg), pancreatina (50 mg), lipasa (30 mg), hierbabuena (20 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 2 cápsulas antes de las comidas principales.",
  benefits: [
    "Ayuda a descomponer alimentos: papaína, bromelina y enzimas de la papaya actúan sobre proteínas, amilasa sobre almidones y lipasa sobre grasas. La pancreatina aporta una mezcla de enzimas digestivas.",
    "Acompaña el bienestar después de comer con hierbabuena de uso tradicional. El fosfato de calcio completa el aporte mineral."
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
  shortDesc: "Vitamina C con equinácea para apoyar las defensas y acompañar el cuidado diario en los cambios de temporada.",
  ingredients: "Equinácea (200 mg), vitamina C (300 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya las defensas con vitamina C, mientras la equinácea acompaña el cuidado tradicional en cambios de temporada."
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
  shortDesc: "Vitaminas, minerales, proteína y otros ingredientes para complementar el cuidado de la piel, el cabello y las uñas.",
  ingredients: "Concentrado de proteína de soya, vitaminas (A, B1, B3, B5, B7, B9, C, D, E), selenio, aminoácidos (L-cisteína, L-metionina, L-leucina, L-valina, L-lisina), colágeno, queratina, sílice, ácido hialurónico.",
  serving: "3 cápsulas al día",
  timing: "Preferentemente con alimentos para mejorar la absorción",
  intakeInstructions: "Tomar 3 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Aporta materiales para cuidar piel, cabello y uñas con proteína de soya, colágeno, queratina y aminoácidos L-cisteína, L-metionina, L-leucina, L-valina y L-lisina.",
    "Vitaminas A, B1, B3, B5, B7 y B9 ayudan a cuidar la piel y a aprovechar los alimentos. Vitamina C ayuda a formar colágeno y D a cuidar los huesos.",
    "Vitamina E y selenio aportan antioxidantes. Ácido hialurónico y sílice completan el cuidado de la piel."
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
  shortDesc: "Fenogreco en cápsulas, una semilla de uso tradicional para complementar la alimentación y acompañar el bienestar digestivo.",
  ingredients: "Fenogreco (Trigonella foenum-graecum) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Acompaña el bienestar digestivo tradicional con fenogreco en polvo. Sus componentes vegetales complementan la alimentación."
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
  shortDesc: "Proteína de chícharo y arroz con inositoles y vitamina D para ayudar a conservar los músculos y complementar la alimentación sin proteína de leche.",
  ingredients: "Proteína de chícharo, proteína de arroz, inulina de agave, myo-inositol, D-chiro inositol, ácido hialurónico, bisglicinato de zinc, vitamina D3, stevia, canela.",
  serving: "34 g (1 medida)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 250-300 ml de agua o bebida vegetal. Tomar una vez al día.",
  benefits: [
    "Apoya el cuidado de los músculos con proteínas de chícharo y arroz. Vitamina D3 y bisglicinato de zinc complementan el funcionamiento de los músculos y el cuidado de la piel y otros tejidos.",
    "Acompaña la nutrición femenina con myo-inositol y D-chiro-inositol. El ácido hialurónico completa el cuidado de la piel.",
    "La inulina de agave aporta fibra que alimenta a las bacterias buenas del intestino. Canela y stevia dan sabor y dulzor."
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
  benefitSummary: "Plantas de uso tradicional para bienestar digestivo",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FlorEssence1.webp",
  shortDesc: "Mezcla líquida de ocho plantas de uso tradicional para acompañar el bienestar digestivo.",
  ingredients: "Bardana (1135 mg), acedera (573 mg), olmo (143 mg), kelp (53 mg), cardo santo (53 mg), berro (53 mg), trébol rojo (53 mg), ruibarbo (37 mg) por 100 ml.",
  serving: "56 ml (una o dos veces al día)",
  timing: "Por la noche antes de acostarse y por la mañana 1 hora antes del primer alimento",
  intakeInstructions: "Agitar antes de usar. Diluir en igual cantidad de agua purificada. Tomar a sorbos lentamente.",
  benefits: [
    "Acompaña el bienestar digestivo tradicional con bardana, acedera, olmo y ruibarbo. Cardo santo y berro complementan la mezcla de plantas.",
    "Kelp y trébol rojo amplían la composición vegetal."
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
  benefitSummary: "Hongos de uso tradicional para complementar la alimentación",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Fungone1.jpg",
  shortDesc: "Mezcla de siete hongos de uso tradicional para complementar la alimentación. Su composición no permite prometer mejoras de memoria o de las defensas.",
  ingredients: "Hongo Reishi (Ganoderma lucidum), hongo Maitake (Grifola frondosa), hongo Chaga (Inonotus obliquus), hongo Shiitake (Lentinula edodes), hongo Cordyceps (Cordyceps sinensis), hongo Turkey Tail (Trametes versicolor), hongo Melena de León (Hericium erinaceus) en polvo.",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Complementa la alimentación con una mezcla de hongos: Reishi, Maitake, Chaga, Shiitake, Cordyceps, Turkey Tail y Melena de León."
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
  benefitSummary: "Relajación con apoyo nutricional para los nervios",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GABA1.jpg",
  shortDesc: "Fórmula con GABA, vitaminas B5 y B12, zinc y selenio, orientada a acompañar la relajación en etapas de tensión cotidiana. El GABA oral puede apoyar la calma, mientras que la vitamina B12 contribuye al funcionamiento de los nervios y la B5 ayuda a obtener energía de los alimentos. El zinc y el selenio complementan el cuidado de las células y el funcionamiento de las defensas.",
  researchNote: {
    "focus": "Relajación con apoyo nutricional para los nervios",
    "sources": [
      {
        "title": "GABA oral: ensayo exploratorio sobre relajación y respuesta al estrés",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16971751/"
      },
      {
        "title": "NIH: vitamina B5 y energía de los alimentos",
        "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-Consumer/"
      },
      {
        "title": "NIH: vitamina B12 y funcionamiento nervioso",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
      },
      {
        "title": "NIH: zinc y función inmunitaria",
        "url": "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/"
      },
      {
        "title": "NIH: selenio y protección frente al daño oxidativo",
        "url": "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/"
      }
    ]
  },
  ingredients: "GABA (1200 mg), zinc (20 mg), selenio (100 mcg), vitamina B5 (20 mg), vitamina B12 (12 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Calma cotidiana: el GABA oral puede acompañar la relajación en etapas de tensión y mayor exigencia.",
    "Apoyo a los nervios y la energía: la vitamina B12 contribuye al funcionamiento nervioso y la B5 ayuda a aprovechar los alimentos.",
    "Cuidado celular y defensas: el zinc y el selenio complementan la protección antioxidante y el funcionamiento normal del sistema inmunitario."
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
  benefitSummary: "Fórmula laxante pendiente de validación",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/gentilax.webp",
  shortDesc: "Producto laxante cuya ficha declara fenolftaleína. Requiere validar la fórmula y su seguridad antes de recomendarlo para el estreñimiento.",
  ingredients: "Fenolftaleína 60 mg por tableta.",
  serving: "1-2 tabletas (según indicación médica)",
  timing: "Antes de acostarse",
  intakeInstructions: "Tomar 1-2 tabletas antes de acostarse, según indicación médica. No usar por más de una semana.",
  benefits: [
    "Contiene fenolftaleína, un laxante que estimula el intestino. Consultar a un profesional antes de usarlo."
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
  benefitSummary: "Cuidado cognitivo, circulatorio y antioxidante",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ginko.jpg",
  shortDesc: "Fórmula de ginkgo biloba con ajo, lecitina de soya, vitamina C y resveratrol, orientada al cuidado cognitivo, circulatorio y antioxidante. El ginkgo aporta su orientación al cuidado de la memoria y su uso tradicional circulatorio; el ajo complementa el cuidado cardiovascular. La lecitina aporta fosfolípidos para las células, mientras que la vitamina C y el resveratrol completan el perfil antioxidante de la mezcla.",
  researchNote: {
    "focus": "Cuidado cognitivo, circulatorio y antioxidante de una fórmula con cinco ingredientes",
    "sources": [
      {
        "title": "NCCIH: ginkgo, usos y precauciones",
        "url": "https://www.nccih.nih.gov/health/ginkgo"
      },
      {
        "title": "NCCIH: ajo y cuidado cardiovascular",
        "url": "https://www.nccih.nih.gov/health/garlic"
      },
      {
        "title": "NIH: colina y fosfolípidos de las membranas celulares",
        "url": "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/"
      },
      {
        "title": "NIH: vitamina C y función antioxidante",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      },
      {
        "title": "MSK: resveratrol, actividad experimental y precauciones",
        "url": "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/resveratrol"
      }
    ]
  },
  ingredients: "Ajo (Allium sativum), Ginkgo biloba, lecitina de soya, vitamina C (ácido ascórbico) y resveratrol. Ingredientes en el orden declarado en la etiqueta.",
  serving: "3 cápsulas (1 porción)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos. El envase contiene 30 porciones y rinde 30 días con una porción diaria.",
  benefits: [
    "Cuidado cognitivo: el ginkgo se emplea en preparaciones para la memoria; la lecitina de soya aporta fosfolípidos para las membranas celulares.",
    "Cuidado cardiovascular: el ajo se utiliza como complemento del cuidado del corazón y acompaña el enfoque circulatorio tradicional del ginkgo.",
    "Cuidado antioxidante: la vitamina C contribuye a proteger las células; el resveratrol aporta un compuesto vegetal con actividad antioxidante experimental."
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la coagulación, epilepsia o bajo tratamiento con anticoagulantes, antiagregantes, antidepresivos ISRS o anticonvulsivantes deben consultar a un profesional de la salud. No consumir en caso de alergia a la soya o a alguno de sus ingredientes.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "El ajo y el ginkgo pueden aumentar el riesgo de sangrado al combinarse con medicamentos para evitar coágulos, incluidos anticoagulantes y antiagregantes. El resveratrol también requiere revisar esa combinación con su médico o farmacéutico."
},

// 71. GLUTAMINE FEAR (300 g)
{
  id: 71,
  code: "7503021404244",
  name: "GLUTAMINE FEAR",
  benefitSummary: "Glutamina para complementar la nutrición",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Glutamina_1_46f39ebf-7ea9-40eb-9fe2-91c439e45717.webp",
  shortDesc: "Glutamina en polvo para complementar la alimentación de personas activas. Es uno de los componentes que el cuerpo utiliza para formar proteínas.",
  ingredients: "L-Glutamina pura (5000 mg por porción).",
  serving: "5 g (1 medida)",
  timing: "Post-entreno o antes de dormir",
  intakeInstructions: "Diluir 5 g en 200-250 ml de agua fría. Consumir después del entrenamiento o antes de dormir.",
  benefits: [
    "Complementa la alimentación con L-glutamina, aminoácido utilizado para formar proteínas y por células del intestino."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/gluta.jpg",
  shortDesc: "Glutatión con vitamina C para complementar el cuidado de las células frente al desgaste diario.",
  ingredients: "Vitamina C (250 mg), glutatión (100 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Ayuda a cuidar las células con glutatión y vitamina C. La vitamina C también apoya las defensas y ayuda a formar colágeno."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GOJI.webp",
  shortDesc: "Goji con linaza y otras plantas para complementar la alimentación y acompañar el bienestar digestivo.",
  ingredients: "Semilla de baya de Goji, linaza, raíz de lima, malva, lecitina de soya.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Acompaña el bienestar intestinal con linaza como fuente vegetal de fibra y malva de uso tradicional. Semilla de goji, raíz de lima y lecitina de soya completan el aporte vegetal y de grasas."
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
  benefitSummary: "Goji y plantas para complementar la alimentación",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GOJI1.jpg",
  shortDesc: "Goji con una mezcla de plantas y otros ingredientes para complementar la alimentación dentro de una rutina de cuidado general.",
  ingredients: "Bayas de Goji, pingüica, raíz de diente de león, extractos cítricos, ácido clorogénico, BHB.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta antioxidantes del goji, los extractos cítricos y el ácido clorogénico. Pingüica y diente de león se usan para el cuidado urinario.",
    "También contiene BHB como parte de la mezcla."
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
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/correjidos_0000_freepik__reflective-red-plastic-bottle-gently-tapered-shoul__80768.jpg",
  shortDesc: "Goji, mango africano, linaza, piña y papaya con vitaminas y minerales para complementar la alimentación y el bienestar digestivo.",
  ingredients: "Bayas de Goji (Lycium barbarum), mango africano (Irvingia gabonensis), linaza (Linum usitatissimum), raíz de lima, piña (Ananas comosus), papaya (Carica papaya), lecitina de soya, vitamina C, vitamina E, vitamina B12 (cianocobalamina) (6 µg), magnesio elemental (9 mg), calcio elemental (8 mg).",
  serving: "1 cápsula al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Acompaña el bienestar digestivo con linaza, piña y papaya. Goji, mango africano, raíz de lima y lecitina de soya completan la mezcla vegetal.",
    "Las vitaminas C y E aportan antioxidantes y la B12 ayuda al funcionamiento de los nervios y a formar glóbulos rojos. Incluye pequeñas cantidades de magnesio y calcio."
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
  shortDesc: "Ciruela pasa, tamarindo, papaya, sábila y manzana para acompañar la regularidad y el confort intestinal.",
  ingredients: "Ciruela pasa, tamarindo, papaya, sábila, manzana.",
  serving: "1 tableta (300 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 tableta al día con alimentos.",
  benefits: [
    "Acompaña el movimiento del intestino con ciruela pasa, tamarindo, papaya y manzana. La sábila completa la mezcla para el bienestar digestivo."
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
  shortDesc: "Hercampuri en cápsulas, una planta de uso tradicional andino para acompañar el confort después de comer.",
  ingredients: "Hercampuri (Gentianella alborosea) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día antes de las comidas principales.",
  benefits: [
    "Acompaña el bienestar digestivo tradicional con hercampuri en polvo."
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
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/HPRPros.jpg",
  shortDesc: "Mezcla de plantas con zinc y selenio para complementar el cuidado de la próstata y las vías urinarias masculinas.",
  ingredients: "Arándano (125 mg), semilla de calabaza (100 mg), ciruelo africano (90 mg), equinácea (90 mg), cúrcuma (75 mg), zinc (20 mg), selenio (100 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Acompaña el cuidado de la próstata y la comodidad al orinar con semilla de calabaza y ciruelo africano. El arándano completa el aporte vegetal.",
    "Zinc y selenio ayudan a cuidar las células. Equinácea y cúrcuma completan la mezcla de plantas."
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
  benefitSummary: "Inositol para el aprovechamiento del azúcar",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Inositol1.jpg",
  shortDesc: "Inositol en cápsulas para complementar el cuidado del azúcar en la sangre y el bienestar femenino.",
  ingredients: "Myo-inositol 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el cuidado del azúcar con myo-inositol."
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
  shortDesc: "Isoflavonas de soya con plantas y vitaminas para acompañar el bienestar femenino durante la menopausia.",
  ingredients: "Arándano rojo (636 mg), camote silvestre (600 mg), vitamina E (150 mg), isoflavonas de soya (90 mg), vitamina B1 (15 mg), vitamina A (900 mcg), vitamina B12 (12 mcg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Puede ayudar con las molestias de la menopausia con isoflavonas de soya. Camote silvestre y arándano rojo completan la mezcla vegetal.",
    "Las vitaminas A y E cuidan la piel y las B1 y B12 ayudan al funcionamiento de los nervios."
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
  shortDesc: "Jengibre en cápsulas para acompañar el bienestar del estómago y ayudar con las náuseas en algunas situaciones.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo 1000 mg por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "El jengibre se usa para el bienestar del estómago y puede ayudar con algunas molestias de náusea."
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
  shortDesc: "Aceite de krill con omega 3 para complementar el cuidado del corazón, el cerebro y los ojos.",
  ingredients: "Aceite de krill (1.2 g) con EPA (400 mg), DHA (200 mg), fosfolípidos (300 mg), astaxantina (30 mg) por cápsula.",
  serving: "1 cápsula (1.2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el cuidado del corazón con EPA y DHA del aceite de krill. Sus fosfolípidos aportan grasas para las células y la astaxantina aporta antioxidantes."
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
  benefitSummary: "Arginina para complementar una rutina activa",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-ARGININA-1.jpg",
  shortDesc: "Arginina y ornitina para complementar la nutrición de personas activas y los procesos que ayudan a relajar los vasos sanguíneos.",
  ingredients: "L-Arginina (2550 mg), L-Ornitina (150 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Antes del entrenamiento",
  intakeInstructions: "Tomar 3 cápsulas antes de la actividad física.",
  benefits: [
    "Complementa la alimentación para el ejercicio con L-arginina, que participa en la circulación de la sangre, y L-ornitina, que ayuda al cuerpo a procesar las proteínas."
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
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Carnitina1.webp",
  shortDesc: "Cafeína y guaraná con L-carnitina y otros ingredientes para ayudar a mantenerse alerta y acompañar el entrenamiento.",
  ingredients: "L-Carnitina tartrato (240 mg), extracto de guaraná (200 mg), cafeína (180 mg), L-tirosina (80 mg), extracto de Garcinia (50 mg), pimienta cayena (50 mg), vitamina B5 (20 mg), pimienta negra (5 mg), cromo (40 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Antes del desayuno y antes de la comida",
  intakeInstructions: "Tomar 2 cápsulas antes del desayuno y 2 antes de la comida (4 cápsulas al día).",
  benefits: [
    "Ayuda a estar más despierto para entrenar con cafeína y guaraná. L-carnitina tartrato y vitamina B5 ayudan a usar los alimentos para obtener energía.",
    "L-tirosina, garcinia, pimienta cayena, pimienta negra y cromo completan la fórmula para personas activas."
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
  benefitSummary: "Cuidado de la capa que recubre el estómago",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZN-–-ZINC-L-CARNOSINE-–-30-caps-–-Render-–-V2-–-Marzo2026.jpg",
  shortDesc: "Zinc con carnosina, jengibre y fibra para complementar el cuidado de la capa que recubre el estómago y el confort digestivo.",
  ingredients: "Zinc L-carnosina (50 mg, aporta 15 mg de zinc elemental), jengibre en polvo (50 mg), inulina de agave c.s.p. por cápsula.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el cuidado de la capa que protege el estómago con zinc L-carnosina. El jengibre acompaña el bienestar digestivo y la inulina de agave aporta fibra."
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
  benefitSummary: "Cuidado visual: confirmar ingredientes en etiqueta",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/leucaps.jpg",
  shortDesc: "Fórmula para el cuidado visual cuya composición necesita confirmarse: la tienda y el catálogo registran ingredientes distintos. Revisar la etiqueta antes de recomendarla.",
  ingredients: "Extracto de flor de cempasúchil estandarizado en luteína y zeaxantina.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
  benefits: [
    "Ayuda a complementar el cuidado de la vista con luteína y zeaxantina del extracto de cempasúchil."
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
  benefitSummary: "Exigencia mental y cuidado antioxidante",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-TYROSINE1.webp",
  shortDesc: "Tirosina con arándano azul y vitamina C para complementar la alimentación durante etapas de mayor exigencia mental. La tirosina aporta material para producir dopamina y noradrenalina, que participan en la atención y la respuesta al estrés. La vitamina C complementa el cuidado antioxidante de las células y el arándano añade sus compuestos vegetales. Su orientación combina aporte de tirosina y cuidado celular durante la actividad diaria.",
  researchNote: {
    "focus": "Exigencia mental y cuidado antioxidante",
    "sources": [
      {
        "title": "L-tirosina: ensayo sobre memoria de trabajo bajo estrés por frío",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17585971/"
      },
      {
        "title": "NIH: vitamina C y protección antioxidante",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      }
    ]
  },
  ingredients: "L-Tirosina (350 mg), polvo de arándano azul (100 mg), vitamina C (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoyo durante la exigencia mental: la L-tirosina aporta material para producir dopamina y noradrenalina, que participan en la atención.",
    "Cuidado celular: la vitamina C aporta protección antioxidante; el arándano azul complementa la mezcla con sus compuestos vegetales."
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
  shortDesc: "Maca negra en polvo, de uso tradicional para acompañar la vitalidad y el bienestar sexual.",
  ingredients: "Maca negra (Lepidium meyenii) en polvo 4 g por porción.",
  serving: "4 g (1 cucharada)",
  timing: "Con alimentos",
  intakeInstructions: "Disolver 4 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Acompaña la vitalidad de uso tradicional con maca negra en polvo, como complemento de la alimentación."
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
  shortDesc: "Maca, jengibre y damiana para acompañar la vitalidad y el bienestar sexual desde su uso tradicional.",
  ingredients: "Raíz de maca (500 mg), raíz de jengibre (300 mg), hoja de damiana (200 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Acompaña la vitalidad con maca y damiana. El jengibre complementa el bienestar del estómago."
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
  shortDesc: "Maca amarilla, roja y negra con pimienta negra para acompañar la vitalidad y el bienestar sexual desde su uso tradicional.",
  ingredients: "Maca amarilla (600 mg), maca roja (450 mg), maca negra (435 mg), pimienta negra (15 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Maca amarilla, roja y negra se usan para la vitalidad. La pimienta negra completa la mezcla."
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
  benefitSummary: "Tres fuentes de magnesio para músculos, nervios y energía",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/blend.jpg",
  shortDesc: "Combina citrato, gluconato y óxido de magnesio para complementar el aporte de este mineral. El magnesio ayuda al funcionamiento de músculos y nervios y participa en la obtención de energía de los alimentos. Su enfoque es el apoyo general a estas funciones, especialmente cuando la alimentación aporta poco magnesio. Las tres sales son fuentes del mismo mineral; para comparar esta presentación con otras debemos revisar cuánto magnesio elemental aporta la porción.",
  researchNote: {
    "focus": "Aporte general de magnesio para músculos, nervios y energía",
    "text": "Apoyo a músculos, nervios y energía diaria: el magnesio participa en la contracción muscular, el funcionamiento de los nervios y la producción de energía a partir de los alimentos. Magnesio Blend reúne citrato, gluconato y óxido como tres fuentes del mineral en una cápsula. Su función principal es complementar el aporte de magnesio de la alimentación y acompañar estas funciones cotidianas. Las fuentes explican el papel nutricional del mineral y cómo se interpreta su aporte elemental.",
    "sources": [
      {
        "title": "NIH ODS: funciones, formas y aporte elemental de magnesio",
        "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
      }
    ]
  },
  ingredients: "Citrato de magnesio (150 mg), gluconato de magnesio (150 mg), óxido de magnesio (150 mg) por cápsula.",
  serving: "1 cápsula (aprox. 500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Funcionamiento muscular y nervioso: el magnesio ayuda a la contracción de los músculos y al buen funcionamiento de los nervios.",
    "Energía diaria: participa en la producción de energía a partir de los alimentos y complementa el aporte de magnesio de la alimentación.",
    "Reúne citrato, gluconato y óxido como tres fuentes de magnesio en una cápsula."
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
  shortDesc: "Magnesio con vitamina B6 para apoyar músculos y nervios y ayudar al cuerpo a obtener energía de los alimentos.",
  ingredients: "Malato de magnesio dibásico (1300 mg, aporta 200 mg de magnesio elemental), avena (20 mg), vitamina B6 como P-5-P (2 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Ayuda al funcionamiento de músculos y nervios con magnesio del malato dibásico y vitamina B6 como P-5-P. Incluye una pequeña cantidad de avena."
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
  benefitSummary: "Magnesio y B6 para músculos y actividad diaria",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual1.jpg",
  shortDesc: "Fórmula de magnesio y vitamina B6 para acompañar el funcionamiento muscular y el aprovechamiento de energía durante la actividad diaria. Combina citrato y bisglicinato de magnesio, mientras que la B6 complementa el funcionamiento de los nervios y el uso de nutrientes. Incluye una pequeña cantidad de inulina como fibra. Su orientación diurna se explica como apoyo nutricional para las actividades cotidianas, sin confundirlo con una bebida energética o un estimulante.",
  researchNote: {
    "focus": "Funcionamiento muscular y aprovechamiento de energía durante el día",
    "text": "Apoyo muscular y aprovechamiento de energía para la actividad diaria: el magnesio ayuda a músculos y nervios a funcionar bien, mientras que la vitamina B6 participa en el uso de los nutrientes. La fórmula AM combina citrato y bisglicinato de magnesio con B6 para acompañar estas funciones durante el día. La inulina añade un aporte secundario de fibra. Su enfoque se entiende desde la nutrición cotidiana, el movimiento y la obtención de energía de los alimentos.",
    "sources": [
      {
        "title": "NIH ODS: magnesio y funciones musculares y energéticas",
        "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
      },
      {
        "title": "NIH ODS: vitamina B6 y aprovechamiento de nutrientes",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/"
      }
    ]
  },
  ingredients: "Citrato de magnesio (1800 mg), bisglicinato de magnesio (500 mg), vitamina B6 (5 mg), inulina (100 mg) por porción.",
  serving: "4 cápsulas (2.4 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Apoyo muscular durante el día: el magnesio del citrato y el bisglicinato ayuda a músculos y nervios a funcionar bien.",
    "Aprovechamiento de energía: magnesio y vitamina B6 participan en el uso de los nutrientes y la obtención de energía de los alimentos para la actividad cotidiana.",
    "La inulina añade una pequeña cantidad de fibra como aporte complementario."
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
  benefitSummary: "Relajación y preparación para el descanso nocturno",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual-PM1.jpg",
  shortDesc: "Fórmula de noche para acompañar la relajación y la preparación para dormir. Combina L-teanina y manzanilla con glicina y 5-HTP dentro de su orientación al descanso. El magnesio del bisglicinato y el citrato, junto con la vitamina B6, complementa el funcionamiento de músculos y nervios. La inulina aporta una pequeña cantidad de fibra como componente secundario de la mezcla.",
  researchNote: {
    "focus": "Calma y preparación para el descanso nocturno",
    "text": "Calma y preparación para el descanso nocturno: esta fórmula combina magnesio con L-teanina, glicina, manzanilla y 5-HTP. Un ensayo con 200 mg diarios de L-teanina durante cuatro semanas observó mejoras en algunos aspectos del sueño; otro ensayo con bisglicinato de magnesio encontró mejoras en indicadores de descanso. Estas investigaciones sobre ingredientes ayudan a explicar la orientación nocturna de la fórmula. La vitamina B6 complementa el funcionamiento de los nervios y la inulina aporta una pequeña cantidad de fibra.",
    "sources": [
      {
        "title": "L-teanina: ensayo con 200 mg diarios y medidas de sueño",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31623400/"
      },
      {
        "title": "Bisglicinato de magnesio: ensayo en adultos con dificultades para descansar",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40918053/"
      }
    ]
  },
  ingredients: "Bisglicinato de magnesio (500 mg), citrato de magnesio (400 mg), glicina (450 mg), L-teanina (200 mg), extracto de manzanilla (100 mg), 5-HTP (25 mg), vitamina B6 (2 mg), inulina (100 mg) por porción.",
  serving: "3 cápsulas (1.8 g)",
  timing: "Por la noche, 30-60 min antes de dormir",
  intakeInstructions: "Tomar 3 cápsulas por la noche.",
  benefits: [
    "Relajación antes de dormir: la L-teanina y la manzanilla acompañan la calma; la glicina complementa la fórmula nocturna.",
    "Apoyo al descanso: el 5-HTP participa en la formación de serotonina y melatonina; la vitamina B6 apoya el funcionamiento nervioso.",
    "Funcionamiento muscular y nervioso: el bisglicinato y el citrato aportan magnesio para la actividad normal de músculos y nervios.",
    "Aporte complementario de fibra: la inulina se incluye en una pequeña cantidad dentro de una fórmula centrada en el descanso."
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
  benefitSummary: "Complemento de hábitos para el cuidado del peso",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/mango-africano.jpg",
  shortDesc: "Mezcla de mango africano y otras plantas para acompañar la alimentación y la actividad física en el cuidado del peso.",
  ingredients: "Mango africano (150 mg), pinguica (75 mg), diente de león (75 mg), ácido clorogénico (75 mg), extractos cítricos (50 mg), BHB (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa la alimentación para el cuidado del peso con mango africano, extractos cítricos y ácido clorogénico.",
    "Pingüica y diente de león se usan para el cuidado urinario. La mezcla también contiene BHB."
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
  shortDesc: "Proteína de suero de leche con carbohidratos para sumar calorías, completar la alimentación y acompañar la ganancia de músculo con ejercicio.",
  ingredients: "Proteína de suero de leche, carbohidratos, fibra, grasas saludables.",
  serving: "245 g (1 medida)",
  timing: "Antes o después del entrenamiento",
  intakeInstructions: "Diluir 245 g en 500-700 ml de agua o leche. Tomar antes o después del entrenamiento.",
  benefits: [
    "Complementa el aporte de calorías para la ganancia muscular con carbohidratos y grasas, mientras la proteína de suero aporta aminoácidos para los músculos. La fibra acompaña el movimiento del intestino dentro del mismo plan de alimentación y entrenamiento."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Matcha.jpg",
  shortDesc: "Té verde en polvo con antioxidantes naturales y cafeína, que ayuda a mantenerse alerta. Se puede preparar en bebidas y recetas.",
  ingredients: "Matcha orgánico en polvo (Camellia sinensis) 100%.",
  serving: "2.5 g (1 cucharada)",
  timing: "Por la mañana o al inicio de la jornada",
  intakeInstructions: "Mezclar 2.5 g en 240 ml de agua caliente (70-80°C) y batir hasta obtener espuma.",
  benefits: [
    "Ayuda a estar más despierto con cafeína del matcha orgánico. El té verde en polvo también aporta antioxidantes a la bebida."
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
  benefitSummary: "Cuidado de la memoria con apoyo al funcionamiento nervioso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MELENA-LEON1.jpg",
  shortDesc: "Fórmula orientada al cuidado de la memoria y el funcionamiento nervioso, con extracto de melena de león, L-treonato de magnesio y quinoa. Un ensayo con una preparación de melena de león observó mejoras cognitivas en adultos con deterioro leve. El magnesio complementa el funcionamiento de los nervios y la quinoa se incorpora en pequeña cantidad. Su enfoque reúne cuidado cognitivo y aporte nutricional del mineral.",
  researchNote: {
    "focus": "Cuidado de la memoria con apoyo al funcionamiento nervioso",
    "sources": [
      {
        "title": "Melena de león: ensayo en adultos con deterioro cognitivo leve",
        "url": "https://pubmed.ncbi.nlm.nih.gov/18844328/"
      },
      {
        "title": "NIH: magnesio y funcionamiento muscular y nervioso",
        "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
      }
    ]
  },
  ingredients: "Melena de León (Hericium erinaceus) extracto (500 mg), L-Treonato de magnesio (450 mg), quinoa en polvo (50 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Cuidado de la memoria: un ensayo con una preparación de melena de león observó mejoras cognitivas en adultos con deterioro leve.",
    "Funcionamiento nervioso: el magnesio del L-treonato contribuye a la actividad normal de los nervios; la quinoa complementa la mezcla en pequeña cantidad."
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
  shortDesc: "Miel de abeja para endulzar alimentos y bebidas, aportar energía y dar una sensación de suavidad en la garganta.",
  ingredients: "Miel de abeja multiflora 100% natural.",
  serving: "20 g (1 cucharada)",
  timing: "A cualquier hora",
  intakeInstructions: "Consumir 20 g al día como edulcorante en bebidas o alimentos.",
  benefits: [
    "Endulza alimentos y bebidas y aporta energía con miel multiflora. También puede ayudar a suavizar la garganta."
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
  benefitSummary: "Moringa para complementar la alimentación",
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0003s_0002_Presentacion_blanco.webp",
  shortDesc: "Moringa en cápsulas para incorporar compuestos vegetales antioxidantes y complementar una alimentación variada.",
  ingredients: "Hoja de moringa (Moringa oleifera) orgánica en polvo 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día (una antes de cada comida).",
  benefits: [
    "Complementa una alimentación variada con hoja de moringa orgánica y sus componentes vegetales."
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
  benefitSummary: "Coenzima Q10 para el cuidado de las células",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-UBIQUINOL-KANEKA-30-CAPS–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Ubiquinol, una forma de coenzima Q10, para complementar el cuidado de las células y los procesos con los que el cuerpo produce energía.",
  ingredients: "Ubiquinol (Kaneka QH®) 120 mg, aceite de triglicéridos de cadena media (MCT) 250 mg, lecitina de girasol 25 mg, vitamina E (alfa tocoferol) 10 mg, extracto de romero 5 mg, dióxido de silicio 5 mg por cápsula.",
  serving: "1 cápsula (415 mg)",
  timing: "Con alimentos que contengan grasas (desayuno o comida)",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasa (huevo, aguacate, nueces).",
  benefits: [
    "Ayuda al cuerpo a obtener energía con ubiquinol, una forma de coenzima Q10. Vitamina E y romero ayudan a conservar el aceite.",
    "El aceite MCT y la lecitina de girasol mantienen el ubiquinol mezclado. El dióxido de silicio facilita la preparación de la cápsula."
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
  shortDesc: "Fórmula para articulaciones con colágeno tipo II y boswellia. El extracto de cúrcuma se incluye por su posible ayuda para disminuir dolor y rigidez, y la vitamina C ayuda a formar colágeno.",
  ingredients: "Boswellia serrata extracto (400 mg), extracto de cúrcuma al 95% de curcuminoides (300 mg), vitamina C (100 mg), ácido hialurónico (100 mg), colágeno tipo II no desnaturalizado UC-II® (40 mg), piperina (5 mg) por cápsula.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (1 con el desayuno y 1 con la cena).",
  benefits: [
    "Puede ayudar a mantener la comodidad y el movimiento de las articulaciones con colágeno tipo II UC-II®, boswellia y curcumina.",
    "Vitamina C ayuda a formar colágeno y ácido hialurónico complementa el cuidado articular. La piperina ayuda al aprovechamiento de algunos ingredientes."
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
  benefitSummary: "Sabor y variedad para las comidas",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ManzanaVinagre.jpg",
  shortDesc: "Vinagre de manzana líquido para dar sabor a aderezos y comidas y variar la alimentación cotidiana.",
  ingredients: "Vinagre de sidra de manzana (ácido acético natural 5%) con la 'madre'.",
  serving: "15 ml (1 cucharada sopera)",
  timing: "Antes de las comidas principales",
  intakeInstructions: "Diluir 15 ml en un vaso de agua (200-250 ml) y beber antes de las comidas. No consumir puro.",
  benefits: [
    "Da sabor ácido a aderezos y comidas con vinagre de sidra de manzana y su ácido acético. Contiene la madre del vinagre."
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, reflujo severo, gastritis crónica, o bajo tratamiento con antidiabéticos, diuréticos ahorradores de potasio o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Consultar antes de combinar con medicamentos para controlar el azúcar, eliminar líquidos o evitar coágulos."
},

// 104. Vinagre Sidra de Manzana (90 caps, en cápsulas con cúrcuma, jengibre, canela y pimienta negra)
{
  id: 104,
  code: "7503026253090",
  name: "VINAGRE DE SIDRA DE MANZANA (90 CÁPSULAS)",
  benefitSummary: "Apoyo digestivo tradicional para pesadez y gases",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/VINAGRE1.jpg",
  shortDesc: "Combina vinagre de sidra de manzana en polvo con especias de uso tradicional digestivo. Jengibre y cúrcuma acompañan la comodidad del estómago después de comer, mientras que canela y pimienta negra completan la fórmula. El enfoque inicial es pesadez y bienestar digestivo. Para ampliar su explicación hacia el cuidado del azúcar y las grasas necesitamos conocer el aporte de ácido acético de la presentación, además de la cantidad de vinagre en polvo.",
  ingredients: "Vinagre de sidra de manzana en polvo (900 mg), cúrcuma (300 mg), jengibre (180 mg), canela (115 mg), pimienta negra (5 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Pesadez después de comer: jengibre y cúrcuma se usan tradicionalmente para acompañar la comodidad del estómago.",
    "El vinagre de sidra de manzana en polvo, la canela y la pimienta negra completan la mezcla de uso digestivo."
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
  benefitSummary: "Nutrición y energía para el hombre activo",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/VitaRX-1.jpg",
  shortDesc: "Vitaminas, minerales y plantas para complementar la alimentación del hombre activo y ayudar a aprovechar la energía de los alimentos.",
  ingredients: "Creatina (120 mg), arginina (108 mg), vitamina C (90 mg), maca negra (66 mg), BCAA's (48 mg), ginseng (30 mg), vitamina K (30 mg), vitaminas B1, B2, B5, B6, B12, vitamina E, magnesio, calcio, cobre, zinc, hierro, vitamina A, biotina, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa la alimentación del hombre activo con creatina, arginina y BCAA. Maca negra y ginseng se usan para la vitalidad.",
    "Las vitaminas B1, B2, B5, B6, B12 y biotina ayudan a aprovechar los alimentos. Hierro y cobre ayudan a transportar oxígeno en la sangre.",
    "Magnesio, calcio y vitaminas D3 y K ayudan a cuidar músculos y huesos. Vitaminas A y C y zinc apoyan las defensas y la vitamina E aporta antioxidantes."
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
  shortDesc: "Plantas de uso tradicional con zinc y magnesio para complementar la nutrición y el cuidado masculino.",
  ingredients: "Magnesio (70 mg), Tribulus (50 mg), fenogreco (50 mg), damiana (30 mg), Cnidium (30 mg), maca negra (25 mg), L-arginina (25 mg), Mucuna Pruriens (25 mg), avena (25 mg), longjack (25 mg), semilla de calabaza (25 mg), ciruelo africano (25 mg), zinc (10 mg), selenio (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el cuidado masculino con magnesio para músculos y nervios, zinc para la función reproductiva y selenio para cuidar las células.",
    "Tribulus, fenogreco, damiana, Cnidium, maca negra, Mucuna pruriens y longjack se usan para la vitalidad masculina.",
    "Semilla de calabaza y ciruelo africano acompañan el cuidado urinario. L-arginina y avena completan la mezcla."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/2VitaRX.jpg",
  shortDesc: "Vitaminas y minerales con colágeno y plantas para complementar la alimentación y el cuidado de piel y cabello.",
  ingredients: "Colágeno (150 mg), maca amarilla (100 mg), arándano (75 mg), vitamina C (60 mg), semilla de uva (35 mg), vitamina E (14 mg), vitaminas B1, B2, B5, B6, ácido hialurónico, calcio, magnesio, zinc, cobre, hierro, vitamina A, biotina, vitamina K, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Ayuda a cuidar la piel con colágeno, vitamina C y ácido hialurónico. Arándano, semilla de uva y vitamina E aportan antioxidantes.",
    "Vitaminas B1, B2, B5, B6 y biotina ayudan a aprovechar los alimentos. Hierro y cobre ayudan a formar glóbulos rojos. Maca amarilla se usa para la vitalidad.",
    "Vitamina A y zinc ayudan a cuidar la piel. Calcio, magnesio y vitaminas D3 y K ayudan a cuidar huesos y músculos."
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
  shortDesc: "Vitamina C de 1000 mg por cápsula para apoyar las defensas, la formación de colágeno y el cuidado de las células.",
  ingredients: "Vitamina C (como ácido ascórbico) 1000 mg, complejo de bioflavonoides cítricos 100 mg, polvo de rutina (de Sophora japonica) 25 mg por cápsula.",
  serving: "1 cápsula (aprox. 1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día.",
  benefits: [
    "Apoya las defensas y la formación de colágeno con vitamina C. El complejo de bioflavonoides cítricos y la rutina de Sophora japonica complementan el aporte de antioxidantes."
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
  benefitSummary: "Cuidado de huesos, músculos y defensas",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/D3-1.jpg",
  shortDesc: "Vitamina D3 con magnesio, K2 y zinc para apoyar el cuidado de huesos y músculos y el funcionamiento de las defensas.",
  ingredients: "Aceite de pulpa de coco en polvo (450 mg), óxido de magnesio (200 mg, aporta 120 mg de Mg elemental), óxido de zinc (20 mg, aporta 16 mg de Zn elemental), vitamina K2 (30 mcg), vitamina D3 (10 mcg / 400 UI) por cápsula.",
  serving: "1 cápsula (1.1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "Ayuda a cuidar los huesos con vitamina D3, que ayuda a absorber calcio, y K2. El magnesio también ayuda al funcionamiento de los músculos.",
    "Zinc y vitamina D3 apoyan las defensas. El aceite de pulpa de coco en polvo completa la mezcla."
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
  benefitSummary: "Vitamina E para el cuidado de las células",
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/vitamina-e-1000-1200mg-zennaturamx-457200.webp",
  shortDesc: "Vitamina E con aceite de germen de trigo para complementar el cuidado de las células frente al desgaste diario.",
  ingredients: "Vitamina E (dl-alfa tocoferol acetato) 66 mg (66 UI), aceite de germen de trigo.",
  serving: "1 perla (1200 mg)",
  timing: "Durante la comida principal",
  intakeInstructions: "Tomar 1 perla al día durante la comida principal.",
  benefits: [
    "La vitamina E aporta antioxidantes para cuidar las células. El aceite de germen de trigo sirve de base para preparar la cápsula."
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
  shortDesc: "Proteína de suero de leche sabor choconuez para completar la proteína diaria y apoyar el mantenimiento y desarrollo de los músculos.",
  ingredients: "Proteína hidrolizada de suero de leche (25 g de proteína por porción).",
  serving: "35 g (1 scoop)",
  timing: "Dentro de los 45 minutos post-entreno",
  intakeInstructions: "Mezclar 35 g con 240 ml de agua y agitar. Consumir post-entreno o entre comidas.",
  benefits: [
    "Apoya el cuidado y recuperación de los músculos con proteína hidrolizada de suero de leche, que aporta aminoácidos como complemento de la alimentación y el entrenamiento."
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
  shortDesc: "Proteína de suero de leche para completar la alimentación y apoyar el mantenimiento y desarrollo de los músculos.",
  ingredients: "Aislado de suero de leche al 90% (Microfiltración de Flujo Cruzado).",
  serving: "23 g (1 porción)",
  timing: "Post-entreno",
  intakeInstructions: "Tomar 23 g en 350 ml de agua o leche baja en grasa después del entrenamiento.",
  benefits: [
    "Apoya el cuidado y recuperación de los músculos con aislado de proteína de suero de leche al 90 %, que complementa el aporte diario de aminoácidos."
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
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-WHEY-PROEIN-ISOLATE-90-–1.02-KG–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Proteína de suero de leche con 29 g de proteína por porción para completar la alimentación y acompañar la recuperación después del ejercicio.",
  ingredients: "Aislado de proteína de suero de leche (29 g de proteína por porción).",
  serving: "34 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 240 ml de agua o bebida de su preferencia. Tomar una vez al día.",
  benefits: [
    "Apoya el cuidado y recuperación de los músculos con aislado de proteína de suero de leche y sus 29 g de proteína declarados por porción, dentro de un plan de alimentación y entrenamiento."
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
  benefitSummary: "Vitaminas A y C para defensas y cuidado celular",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Ximo-1.jpg",
  shortDesc: "Mezcla de plantas con vitaminas A y C para complementar la alimentación, las defensas y el cuidado de las células.",
  ingredients: "Espirulina (140 mg), raíz de tejocote (120 mg), piña (70 mg), nopal (70 mg), vitamina C (50 mg), vitamina A (900 mcg) por cápsula.",
  serving: "1 cápsula (450 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Ayuda a las defensas con vitaminas A y C. La espirulina complementa la alimentación, y piña y nopal acompañan el cuidado digestivo.",
    "La mezcla también contiene raíz de tejocote."
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
  shortDesc: "Preparación tradicional de yumel en gotas. Su utilidad para cálculos o colesterol no está demostrada y requiere valoración antes de recomendarla.",
  ingredients: "Guatteria gaumeri TM (Tintura Madre) 100 ml por 100 ml.",
  serving: "20 gotas en ¼ de vaso con agua",
  timing: "Tres veces al día, antes de los alimentos",
  intakeInstructions: "Mezclar 20 gotas en un cuarto de vaso con agua natural. Tomar 3 veces al día antes de los alimentos.",
  benefits: [
    "Preparación de yumel Guatteria gaumeri en gotas. Consultar su uso con un profesional."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/NAC1.jpg",
  shortDesc: "NAC en cápsulas para ayudar al cuerpo a formar glutatión, una sustancia que participa en el cuidado de las células.",
  ingredients: "N-Acetilcisteína (NAC) 1000 mg por porción (2 cápsulas).",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Ayuda a cuidar las células con NAC, que el cuerpo usa para producir su propio antioxidante, el glutatión."
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
  benefitSummary: "Ingredientes para el cuidado de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2024/02/nad.jpg",
  shortDesc: "Combina NAD, resveratrol y acai como complemento del cuidado de las células; no se ha demostrado que esta fórmula alargue la vida.",
  ingredients: "NAD (300 mg), estearato de magnesio (100 mg), resveratrol (50 mg), baya de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa la alimentación con NAD. Resveratrol y baya de acai aportan antioxidantes para cuidar las células.",
    "El estearato de magnesio facilita la preparación de la cápsula."
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
  benefitSummary: "Plantas y cuidado de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides_0008s_0002_Presentacion-blanco.jpg",
  shortDesc: "Neem y nopal con ácido alfa lipoico para complementar la alimentación y el cuidado de las células.",
  ingredients: "Neem (750 mg), nopal (600 mg), ácido alfa lipoico (150 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Complementa el cuidado de la alimentación con nopal y neem. El ácido alfa lipoico aporta antioxidantes para cuidar las células."
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
  benefitSummary: "Ingredientes para el cuidado de las células",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/09/NMN-1.png",
  shortDesc: "NMN con resveratrol y otros ingredientes como complemento del cuidado de las células; sus beneficios sobre el envejecimiento aún se estudian.",
  ingredients: "β-Nicotinamida mononucleótido (NMN) 300 mg, trans-resveratrol 100 mg, astrágalo 100 mg, quercetina 45 mg, extracto de pimienta negra 5 mg por cápsula.",
  serving: "1 cápsula (550 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa la alimentación con NMN. Trans-resveratrol y quercetina aportan antioxidantes para cuidar las células.",
    "El astrágalo se usa para la vitalidad. El extracto de pimienta negra ayuda al aprovechamiento de algunos ingredientes."
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
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Omega-Nano.png",
  shortDesc: "Omega 3 de pescado con EPA, DHA y vitamina E para complementar el cuidado del corazón, el cerebro y los ojos.",
  ingredients: "Aceite de salmón concentrado (Omega 3 total 2998.8 mg: EPA 1198.8 mg, DHA 601.2 mg), vitamina E (α-tocoferol) 100.8 mg por porción.",
  serving: "3 softgels (3.6 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 softgels al día con alimentos.",
  benefits: [
    "Complementa el cuidado del corazón con EPA y DHA del aceite de salmón. La vitamina E añade antioxidantes para cuidar las células y ayuda a proteger las grasas de la preparación."
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
  shortDesc: "Aceite de salmón con omega 3 y vitamina E para complementar el cuidado del corazón, el cerebro y los ojos.",
  ingredients: "Aceite de salmón (1000 mg), vitamina E (150 mg), EPA (180 mg), DHA (150 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el cuidado del corazón con EPA y DHA del aceite de salmón. La vitamina E añade antioxidantes para cuidar las células y ayuda a proteger las grasas de la preparación."
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
  shortDesc: "Aceite de pescado con omega 3 para apoyar el funcionamiento del corazón y complementar el cuidado del cerebro.",
  ingredients: "Aceite de pescado concentrado EPAX® (3000 mg), EPA (900 mg), DHA (600 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Con desayuno rico en grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con el desayuno.",
  benefits: [
    "Complementa el cuidado del corazón con grasas EPA y DHA del aceite de pescado concentrado EPAX®."
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
  benefitSummary: "Hongos y plantas para complementar la alimentación y el bienestar digestivo",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Mezcla de reishi y shiitake con plantas para complementar la alimentación. Los hongos contienen beta-glucanos; el té verde y el ajo aportan compuestos antioxidantes. Jengibre y diente de león acompañan el bienestar digestivo. El diente de león también tiene uso tradicional como apoyo diurético y hepatobiliar, para favorecer la eliminación de orina y la secreción de bilis, que ayuda a digerir grasas. Polen de flores y guanábana completan la mezcla. Durante un tratamiento oncológico, consulta al oncólogo antes de incorporarlo, porque los extractos y suplementos pueden interferir con algunos tratamientos.",
  researchNote: {
    "text": "Complemento de hongos y plantas para la alimentación y el bienestar digestivo: reishi y shiitake aportan componentes propios de los hongos, como beta-glucanos; té verde y ajo complementan el aporte de antioxidantes. El diente de león acompaña el uso tradicional digestivo, diurético y hepatobiliar. En modelos experimentales, extractos específicos de algunos de estos ingredientes se han investigado por sus efectos sobre el crecimiento y la muerte celular programada, incluida la apoptosis, de células cancerosas. Este apartado describe investigación sobre ingredientes con preparaciones y concentraciones definidas. Su incorporación durante tratamiento oncológico requiere revisión del oncólogo.",
    "sources": [
      {
        "title": "Diente de león: estudio en células y modelos animales de cáncer de colon",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27564258/"
      },
      {
        "title": "Té verde: estudio sobre apoptosis en células cancerosas en laboratorio",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9600345/"
      },
      {
        "title": "Reishi: estudio de un preparado específico en células tumorales",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31637001/"
      },
      {
        "title": "Guanábana: información del Memorial Sloan Kettering Cancer Center",
        "url": "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/graviola"
      }
    ],
    "focus": "Hongos y plantas para complementar la alimentación y el bienestar digestivo"
  },
  ingredients: "Extractos de diente de león, guanábana, shiitake, reishi, té verde, jengibre, ajo, polen de flores (cantidades no especificadas).",
  serving: "2 tabletas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 tabletas al día con alimentos.",
  benefits: [
    "Aporte de hongos: reishi y shiitake contienen componentes naturales como beta-glucanos y complementan la mezcla alimentaria.",
    "Compuestos antioxidantes: té verde y ajo aportan componentes vegetales a la fórmula.",
    "Bienestar digestivo: jengibre y diente de león se usan tradicionalmente para acompañar la comodidad del estómago.",
    "Apoyo diurético: el diente de león se usa tradicionalmente para favorecer la eliminación de orina.",
    "Apoyo hepatobiliar: el diente de león tiene uso tradicional para favorecer la secreción de bilis, que participa en la digestión de las grasas.",
    "Investigación de sus ingredientes: en modelos experimentales, extractos específicos de diente de león, té verde, reishi y guanábana se han investigado por sus efectos sobre el crecimiento y la muerte celular programada, incluida la apoptosis, de células cancerosas. Estos hallazgos corresponden a ingredientes con preparaciones y concentraciones definidas; su incorporación durante tratamiento requiere revisión del oncólogo.",
    "Complemento vegetal: polen de flores y guanábana completan la mezcla de ingredientes."
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (polen) o a alguno de los componentes, o bajo tratamiento con anticoagulantes, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud. Por el diente de león, no usar sin valoración médica si hay cálculos u obstrucción de las vías biliares, enfermedad del hígado o indicación de restringir líquidos.",
  foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
  interactions: "Durante quimioterapia, radioterapia u otro tratamiento oncológico, no iniciar este suplemento sin revisión del oncólogo: sus extractos pueden interferir con algunos tratamientos. Revisar también su combinación con anticoagulantes, inmunosupresores, antidiabéticos y diuréticos. El polen puede causar una reacción alérgica en personas sensibles."
},

// 125. PÉPTIDOS COLÁGENO HIDROLIZADO (1 kg, polvo de colágeno hidrolizado bovino puro)
{
  id: 125,
  code: "7500645000296",
  name: "PÉPTIDOS COLÁGENO HIDROLIZADO",
  benefitSummary: "Nutrición para el cuidado de piel y articulaciones",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/PeptidosColagenoHidrolizado.jpg",
  shortDesc: "Colágeno en polvo para complementar la alimentación y el cuidado de la piel y las articulaciones.",
  ingredients: "Péptidos de colágeno hidrolizado bovino 100%.",
  serving: "10 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 10 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Complementa el cuidado de piel y articulaciones con péptidos de colágeno bovino, que aportan materiales para cuidar la piel y los músculos."
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
  shortDesc: "Colágeno con ácido hialurónico para complementar el cuidado de la piel, su hidratación y las articulaciones.",
  ingredients: "Péptidos de colágeno hidrolizado bovino (10.5 g), ácido hialurónico (500 mg) por porción.",
  serving: "11 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 11 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Aporta proteína de péptidos de colágeno bovino para cuidar piel y articulaciones. El ácido hialurónico complementa el cuidado de la hidratación de la piel."
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
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/petalos-de-rosa-1.jpg",
  shortDesc: "Vitamina C con zinc, rosa y naranja para apoyar las defensas, la formación de colágeno y el cuidado de la piel.",
  ingredients: "Vitamina C (300 mg), zinc (10 mg), cromo (22 µg), polvo de fruto de naranja, polvo de pétalos de rosa por cápsula.",
  serving: "1 cápsula (1000 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Ayuda a las defensas y al cuidado de la piel con vitamina C y zinc. Vitamina C también ayuda a formar colágeno y cromo a aprovechar los alimentos.",
    "Polvo de naranja y pétalos de rosa completan el aporte vegetal."
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
  benefitSummary: "Músculos y equilibrio de agua y minerales",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Potassium-Dual1.jpg",
  shortDesc: "Potasio con magnesio, calcio y vitamina B6 para apoyar músculos y nervios y el equilibrio de agua y minerales del cuerpo.",
  ingredients: "Citrato de potasio (1400 mg), cloruro de potasio (150 mg), potasio elemental (500 mg), citrato de magnesio (200 mg), citrato de calcio (200 mg), calcio elemental (40 mg), cloro (75 mg), vitamina B6 (2 mg), inulina de raíz de achicoria (100 mg) por porción.",
  serving: "3 cápsulas (2.05 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Ayuda a músculos y nervios a funcionar bien y a mantener el equilibrio de agua con potasio del citrato y cloruro, y cloro.",
    "Magnesio del citrato, calcio del citrato y vitamina B6 complementan el cuidado de músculos y nervios. Incluye una pequeña cantidad de inulina de achicoria como fibra."
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
  shortDesc: "Probióticos con inulina para complementar el equilibrio de las bacterias del intestino y el bienestar digestivo.",
  ingredients: "Lactobacillus acidophilus (48.67 billones UFC, 365 mg), Lactobacillus sporogenes (8 billones UFC, 60 mg), Lactobacillus rhamnosus (3.33 billones UFC, 60 mg), inulina de agave (20 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Complementa el cuidado intestinal con Lactobacillus acidophilus, Lactobacillus sporogenes y Lactobacillus rhamnosus, bacterias que se usan como probióticos.",
    "Incluye una pequeña cantidad de inulina de agave, fibra que alimenta a las bacterias buenas del intestino."
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
  benefitSummary: "Equilibrio intestinal y apoyo a las defensas",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0009s_0002_Presentacion-blanco-1.jpg",
  shortDesc: "Probióticos con vitamina C y arándano para complementar el bienestar digestivo y apoyar las defensas.",
  ingredients: "Mezcla probiótica (60 billones UFC, 925 mg), vitamina C (55 mg), arándano rojo en polvo (10 mg), inulina de achicoria (10 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Complementa el cuidado intestinal con probióticos y una pequeña cantidad de fibra de inulina de achicoria.",
    "La vitamina C apoya las defensas. Incluye una pequeña cantidad de arándano rojo para completar la mezcla femenina."
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
  shortDesc: "Mezcla de probióticos con inulina para complementar el equilibrio intestinal y el bienestar digestivo.",
  ingredients: "Bifidobacterium longum ssp. Longum SP 54 (25 billones UFC, 61.3 mg), Bifidobacterium longum ssp. Infantis SP 37 (25 billones UFC, 61.3 mg), Lactobacillus acidophilus LA3 (25 billones UFC, 61.3 mg), Lactobacillus delbrueckii ssp. Bulgaricus SP 96 (25 billones UFC, 61.3 mg), Lactobacillus casei BGP 93 (25 billones UFC, 61.3 mg), Lactobacillus plantarum BG 112 (25 billones UFC, 61.3 mg), Streptococcus thermophilus SP 4 (25 billones UFC, 61.3 mg), inulina de agave (10 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Complementa el cuidado intestinal con Bifidobacterium longum ssp. longum SP 54, Bifidobacterium longum ssp. infantis SP 37, Lactobacillus acidophilus LA3 y Lactobacillus delbrueckii ssp. bulgaricus SP 96.",
    "Incluye Lactobacillus casei BGP 93, Lactobacillus plantarum BG 112 y Streptococcus thermophilus SP 4. La inulina de agave añade una pequeña cantidad de fibra."
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
  benefitSummary: "Bienestar digestivo y aprovechamiento de alimentos",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-PROBITY-RENDER-V2-AGOSTO2026.jpeg",
  shortDesc: "Mezcla de plantas, carnitina, cromo y una enzima digestiva para complementar el cuidado digestivo y el aprovechamiento de los alimentos.",
  ingredients: "Acetil L-carnitina, extracto de té verde, chá de bugre, vinagre de manzana, alcachofa, papaína, ciruela pasa, jamaica, lúpulo, espirulina, cromo (cantidades no especificadas).",
  serving: "1 cápsula (750 mg, aunque el nombre indica 600 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Acompaña el bienestar digestivo con alcachofa y ciruela pasa. La papaína ayuda a digerir proteínas. Vinagre de manzana, jamaica y lúpulo completan la mezcla.",
    "Acetil L-carnitina y cromo ayudan a usar los alimentos para obtener energía. Té verde, chá de bugre y espirulina completan el aporte vegetal."
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
  benefitSummary: "Plantas y grasas para complementar la alimentación",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ProHiman.jpg",
  shortDesc: "Linaza y malva con grasas omega 3, 6 y 9 para complementar la alimentación y el bienestar digestivo.",
  ingredients: "Raíz de lima, linaza, malva, complejo de omegas 3,6,9, lecitina de soya (cantidades no especificadas).",
  serving: "1 cápsula (200 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Complementa el bienestar digestivo con linaza como fuente vegetal de fibra y malva de uso tradicional. Raíz de lima, lecitina de soya y omegas 3, 6 y 9 completan la mezcla vegetal y de grasas."
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
  shortDesc: "Proteína vegetal de chícharo y arroz sabor cacao para completar la alimentación y apoyar el mantenimiento y desarrollo muscular.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), cacao en polvo por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Ayuda a cuidar y recuperar los músculos con proteínas de chícharo y arroz y BCAA.",
    "Los probióticos acompañan el cuidado intestinal y el cacao aporta sabor y antioxidantes."
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
  shortDesc: "Proteína vegetal de chícharo y arroz sabor vainilla para completar la alimentación y apoyar los músculos y la recuperación después del ejercicio.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), extracto natural de vainilla y stevia por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Ayuda a cuidar y recuperar los músculos con proteínas de chícharo y arroz y BCAA.",
    "Los probióticos acompañan el cuidado intestinal. Vainilla natural y stevia dan sabor y dulzor."
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
  benefitSummary: "Coenzima Q10 y aprovechamiento de la energía",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/05/COENZIMA-Q10.png",
  shortDesc: "Coenzima Q10 con vitamina B6 para complementar el cuidado de las células y ayudar a aprovechar la energía de los alimentos.",
  ingredients: "Baya dorada (200 mg), coenzima Q10 (120 mg), harina de arroz (120 mg), vitamina B6 (10 mg), silicato de calcio (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "Ayuda al cuerpo a obtener energía con coenzima Q10 y vitamina B6. La baya dorada completa el aporte vegetal.",
    "Harina de arroz da volumen y silicato de calcio evita que el polvo se apelmace."
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
  benefitSummary: "Uso tradicional para la vitalidad femenina",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RAIZ-SHATAVARI1-2.jpg",
  shortDesc: "Shatavari, schisandra y jalea real, ingredientes de uso tradicional para acompañar el bienestar y la vitalidad femenina.",
  ingredients: "Polvo de raíz de shatavari (500 mg), polvo de fruto de schisandra (350 mg), jalea real en polvo (50 mg), estearato de magnesio (100 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Shatavari y schisandra se usan para acompañar la vitalidad femenina. La jalea real completa el aporte alimentario.",
    "El estearato de magnesio facilita la preparación de la cápsula."
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
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RESVERATROL1.jpg",
  shortDesc: "Resveratrol, semilla de uva, acai y vitamina C para complementar el cuidado de las células frente al desgaste diario.",
  ingredients: "Resveratrol (250 mg), extracto de semilla de uva (150 mg), vitamina C (50 mg), extracto de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aporta antioxidantes de resveratrol, semilla de uva, acai y vitamina C para cuidar las células. La vitamina C también ayuda a las defensas y a formar colágeno."
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
  shortDesc: "Mezcla de plantas de uso tradicional para el bienestar urinario, con zinc y selenio para complementar el cuidado de las células.",
  ingredients: "Palo azul, cola de caballo, cabellos de elote (estimado 300 mg cada uno), zinc (~10 mg), selenio (~55 µg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos. Mantener hidratación adecuada.",
  benefits: [
    "Acompaña el cuidado urinario tradicional con palo azul, cola de caballo y cabellos de elote. Zinc y selenio complementan el cuidado nutricional celular."
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
  shortDesc: "Bebida de sábila, nopal y cuachalalate de uso tradicional digestivo, con vitamina C para complementar el cuidado de las células.",
  ingredients: "Agua purificada, pulpa de sábila, pulpa de nopal, corteza de cuachalalate, ácido cítrico, ácido ascórbico (vitamina C), benzoato de sodio. Sin aloína.",
  serving: "30 ml (3 veces al día)",
  timing: "Antes de cada alimento",
  intakeInstructions: "Tomar 30 ml 3 veces al día, antes de cada alimento. Agitar antes de usar. Refrigerar después de abrir.",
  benefits: [
    "Sábila, nopal y cuachalalate se usan para el bienestar digestivo. El ácido ascórbico añade vitamina C.",
    "Agua purificada diluye los ingredientes, ácido cítrico ajusta la acidez y benzoato de sodio conserva la bebida."
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
  benefitSummary: "Comodidad del estómago, gases y pesadez después de comer",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/SDOMACHUS.jpg",
  shortDesc: "Fórmula para acompañar la comodidad del estómago y el bienestar después de comer. Combina aloe vera, cardamomo, jengibre y colpachi, plantas de uso tradicional digestivo, con agave azul. Magnesio y vitaminas B6 y B12 complementan el funcionamiento de músculos y nervios, mientras que zinc y selenio acompañan el cuidado celular. Su explicación destaca molestias concretas como gases y pesadez, distinguiéndolas de enfermedades como gastritis o colitis.",
  ingredients: "Aloe vera (500 mg), cardamomo (500 mg), jengibre (250 mg), agave azul (100 mg), magnesio (100 mg), vitamina B6 (10 mg), colpachi, vitamina B12, zinc, selenio por porción.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Bienestar después de comer: aloe vera, cardamomo, jengibre y colpachi se usan tradicionalmente para acompañar la comodidad del estómago, los gases y la pesadez. El agave azul completa la mezcla vegetal.",
    "Magnesio y vitaminas B6 y B12 ayudan al funcionamiento de músculos y nervios. Zinc y selenio complementan el cuidado de las células."
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
  benefitSummary: "Selenio para defensas, tiroides y cuidado celular",
  category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SELENIO.webp",
  shortDesc: "Selenio para apoyar las defensas, el funcionamiento de la tiroides y el cuidado de cabello, uñas y células.",
  ingredients: "Levadura de selenio (aporta 100 mcg de selenio por tableta), estearato de magnesio, celulosa microcristalina, fosfato dibásico de calcio.",
  serving: "1 tableta (500 mg)",
  timing: "Una vez al día",
  intakeInstructions: "Tomar una tableta al día.",
  benefits: [
    "El selenio de levadura ayuda a las defensas, al funcionamiento de la tiroides y al cuidado de las células.",
    "Estearato de magnesio, celulosa microcristalina y fosfato dibásico de calcio ayudan a dar forma a la tableta."
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
  shortDesc: "Mezcla de plantas con zinc y vitaminas B6 y D3 para complementar la nutrición y la vitalidad masculina.",
  ingredients: "Shilajit (300 mg), tongkat ali (300 mg), maca (300 mg), tribulus terrestris (279 mg), vitamina B6 (10 mg), zinc (10 mg), vitamina D3 (10 mcg) por porción.",
  serving: "2 cápsulas (1.2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Shilajit, tongkat ali, maca y tribulus terrestris se usan para la vitalidad masculina.",
    "El zinc apoya la función reproductiva normal. La vitamina B6 ayuda a obtener energía de los alimentos y la D3 al funcionamiento de los músculos."
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
  shortDesc: "La ficha lo presenta para el estreñimiento ocasional, pero declara fenolftaleína. Revisar la etiqueta y la seguridad antes de recomendarlo.",
  ingredients: "Fenolftaleína amarilla SM 100 mg por tableta.",
  serving: "1-2 tabletas (según indicación)",
  timing: "Por la noche al acostarse",
  intakeInstructions: "Tomar 1-2 tabletas por la noche al acostarse. No usar por más de una semana.",
  benefits: [
    "Contiene fenolftaleína amarilla SM, un laxante que estimula el intestino. Consultar a un profesional antes de usarlo."
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
  benefitSummary: "Cuidado celular, metabolismo de las grasas y apoyo a la memoria",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/SOY-LECITIN1.jpg",
  shortDesc: "Combina lecitina de soya y colina para apoyar el manejo de las grasas, el funcionamiento del hígado y el cuidado de las células. La lecitina aporta fosfolípidos, materiales que forman la cubierta de las células del cerebro y otros órganos. La colina también ayuda a producir acetilcolina, que participa en la memoria y el aprendizaje. El jengibre acompaña la comodidad del estómago y la inulina de agave aporta fibra para las bacterias buenas del intestino.",
  researchNote: {
    "focus": "Manejo de grasas, hígado y función cerebral",
    "text": "Apoyo al manejo de las grasas, al hígado y a la función cerebral: la colina participa en el transporte de grasas desde el hígado y, junto con los fosfolípidos de la lecitina, aporta materiales para la cubierta de las células. También permite producir acetilcolina, que el cerebro utiliza en la memoria y el aprendizaje. La fórmula combina lecitina de soya con colina bitartrato, mientras que jengibre e inulina acompañan el bienestar digestivo. Estas funciones nutricionales explican el interés de sus ingredientes dentro del enfoque del producto.",
    "sources": [
      {
        "title": "NIH ODS: colina, metabolismo de grasas, hígado y función cerebral",
        "url": "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/"
      }
    ]
  },
  ingredients: "Lecitina de soya (1200 mg), colina bitartrato (100 mg), jengibre en polvo (50 mg), inulina de agave c.s.p. por porción.",
  serving: "2 cápsulas (1.3 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Cuidado de las células: la lecitina de soya aporta fosfolípidos, materiales que forman la cubierta de las células del cerebro, el hígado y otros órganos.",
    "Metabolismo de las grasas e hígado: la colina participa en el transporte y aprovechamiento de las grasas y apoya el funcionamiento normal del hígado.",
    "Memoria y aprendizaje: la colina del bitartrato y de la lecitina ayuda a producir acetilcolina, que el cerebro utiliza en estas funciones.",
    "Bienestar digestivo: el jengibre acompaña la comodidad del estómago y la inulina de agave aporta fibra que alimenta a las bacterias buenas del intestino."
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
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Pinalimte1.webp",
  shortDesc: "Infusión de piña, linaza y distintos tés para acompañar la rutina después de comer y sumar antioxidantes de las plantas.",
  ingredients: "Pulpa de piña (20%), linaza (20%), té verde (20%), té rojo (20%), té blanco (20%).",
  serving: "1 sobre (3 g) en 200 ml de agua caliente",
  timing: "Preferentemente por la noche",
  intakeInstructions: "Colocar un sobre en agua caliente (65°C), esperar 3-5 minutos, endulzar al gusto. Tomar una taza al día.",
  benefits: [
    "Infusión de piña y linaza para acompañar una rutina de bienestar digestivo. Los tés verde, rojo y blanco aportan cafeína y antioxidantes."
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
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TIAMINA-ALEXYAC.webp",
  shortDesc: "Vitamina B1 y otros nutrientes para ayudar a aprovechar la energía de los alimentos, con cafeína y guaraná para mantenerse alerta.",
  ingredients: "Vitamina B1 (tiamina), vitamina E, ácido fólico, CoQ10, cafeína, jalea real, polen de flores, lecitina de soya, miel de abeja, guaraná, gluconato de calcio, sulfato de magnesio.",
  serving: "1-2 tabletas (500 mg c/u)",
  timing: "Según indicación",
  intakeInstructions: "Tomar de 1 a 2 tabletas al día.",
  benefits: [
    "Ayuda a obtener energía de los alimentos con tiamina B1 y coenzima Q10. Ácido fólico ayuda a formar glóbulos rojos.",
    "Cafeína y guaraná ayudan a estar más despierto. Vitamina E, lecitina de soya, jalea real y polen de flores completan la mezcla.",
    "Calcio del gluconato y magnesio del sulfato ayudan a músculos y nervios. Miel de abeja aporta dulzor y energía."
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
  shortDesc: "Hierba del sapo en cápsulas, de uso tradicional como complemento del bienestar digestivo.",
  ingredients: "Hierba del Sapo (Eryngium carlinae) en polvo 100% (1.5 g por porción).",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Reúne hierba del sapo en polvo que se usa para el bienestar digestivo."
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
  benefitSummary: "Funcionamiento nervioso y protección antioxidante",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TREONATO-MAGNESIO1.jpg",
  shortDesc: "Magnesio en forma de L-treonato con vitamina C para complementar el funcionamiento nervioso y el cuidado antioxidante de las células. El magnesio participa en la transmisión de señales entre los nervios y en la actividad muscular. La vitamina C acompaña la protección celular y la formación de colágeno. La ficha también declara una cantidad mínima de vitamina D, que permanece como componente secundario de la fórmula.",
  researchNote: {
    "focus": "Funcionamiento nervioso y protección antioxidante",
    "sources": [
      {
        "title": "NIH: magnesio y funcionamiento muscular y nervioso",
        "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
      },
      {
        "title": "NIH: vitamina C y protección antioxidante",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      },
      {
        "title": "L-treonato: ensayo con una preparación específica y medidas cognitivas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41601871/"
      }
    ]
  },
  ingredients: "L-Treonato de magnesio (288 mg), vitamina C (137.06 mg), vitamina D (0.01 mcg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Funcionamiento nervioso: el magnesio del L-treonato participa en la transmisión de señales entre los nervios y la actividad normal de los músculos.",
    "Protección celular y tejidos: la vitamina C aporta antioxidantes y contribuye a formar el colágeno del cuerpo."
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
  benefitSummary: "Relajación y transición al descanso",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TRIPTOFANO1.jpg",
  shortDesc: "Fórmula para acompañar la relajación y la preparación para dormir, con L-triptófano, teanina y azahar. El triptófano aporta material para producir serotonina y melatonina, mientras que la teanina complementa el uso tradicional relajante del azahar. La vitamina D3 añade apoyo nutricional para músculos, huesos y defensas. Su enfoque combina calma y descanso con estos aportes complementarios en una cápsula.",
  researchNote: {
    "focus": "Relajación y transición al descanso",
    "sources": [
      {
        "title": "L-triptófano: participación en la producción de serotonina y melatonina",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8496306/"
      },
      {
        "title": "L-teanina: ensayo sobre estrés y aspectos del sueño",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31623400/"
      },
      {
        "title": "NIH: vitamina D, músculos, huesos y función inmunitaria",
        "url": "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
      }
    ]
  },
  ingredients: "L-Triptófano (300 mg), azahar (100 mg), teanina (100 mg), vitamina D3 (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de dormir o con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente antes de dormir.",
  benefits: [
    "Calma antes de acostarse: la teanina complementa el uso tradicional del azahar para ayudar a relajarse y prepararse para dormir.",
    "Ciclo de sueño: el L-triptófano aporta material para producir serotonina y melatonina, que participan en la regulación del descanso.",
    "Apoyo nutricional complementario: la vitamina D3 contribuye al funcionamiento de músculos y defensas y al mantenimiento de los huesos."
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
  benefitSummary: "Fibra y apoyo al bienestar digestivo",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZenGreen1.jpg",
  shortDesc: "Fibra con vegetales, probióticos y enzimas para complementar el equilibrio intestinal y ayudar a digerir los alimentos.",
  ingredients: "Inulina (1500 mg), FOS (1000 mg), fibra de acacia (500 mg), espinaca (200 mg), apio (200 mg), pepino (200 mg), nopal (200 mg), piña (300 mg), alfalfa (100 mg), extracto de té verde (200 mg), extracto de aloe vera (200 mg), cúrcuma (200 mg), jengibre (150 mg), extracto de alcachofa (100 mg), guaraná (100 mg), clorofila (50 mg), pimienta negra (5 mg), bromelina (30 mg), papaína (30 mg), enzimas vegetales (40 mg), Lactobacillus rhamnosus GG (3×10⁶ UFC), Bifidobacterium bifidum (2×10⁶ UFC) por porción.",
  serving: "1 medida (6 g)",
  timing: "Preferentemente por la mañana en ayunas o con el desayuno",
  intakeInstructions: "Disolver 1 medida (6 g) en 250-300 ml de agua fría o zumo, removiendo hasta disolución completa. Consumir una vez al día.",
  benefits: [
    "Aporta fibra para el cuidado intestinal con inulina, FOS y acacia. Incluye los probióticos Lactobacillus rhamnosus GG y Bifidobacterium bifidum.",
    "Bromelina, papaína y otras enzimas vegetales ayudan a digerir los alimentos. Jengibre, cúrcuma, alcachofa y aloe vera se usan para el bienestar digestivo.",
    "Espinaca, apio, pepino, nopal, piña y alfalfa completan el aporte vegetal. Té verde y guaraná pueden aportar cafeína. La mezcla incluye clorofila y pimienta negra."
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
  shortDesc: "Zinc para apoyar las defensas y el cuidado de piel, cabello y uñas, con jengibre de uso tradicional digestivo.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo (400 mg), zinc elemental (20 mg, como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "El zinc ayuda a las defensas y al cuidado de la piel. El jengibre se usa para el bienestar del estómago."
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
  benefitSummary: "Zinc para defensas, piel, cabello y uñas",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZINCYAVENA_1.webp",
  shortDesc: "Zinc para apoyar las defensas y el cuidado de piel, cabello, uñas y células.",
  ingredients: "Zinc elemental 20 mg (como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Ayuda a las defensas y al cuidado de piel, cabello y uñas con zinc de gluconato, citrato u óxido."
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
    benefitSummary: "Calcio y vitamina D para huesos y músculos",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CALCIUM-CITRATE1.jpg",
    shortDesc: "Calcio con vitamina D3 para complementar el cuidado de huesos y dientes y apoyar el funcionamiento de los músculos.",
    ingredients: "Citrato de calcio (1,000 mg por porción), extracto de avena (Avena sativa L.) (20 mg), vitamina D3 (colecalciferol) (10 µg / 400 UI).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día, acompañadas de alimentos y un vaso de agua. Puede dividirse en una o dos tomas según preferencia.",
    benefits: [
      "Apoya el mantenimiento de huesos y el funcionamiento de los músculos con calcio del citrato y vitamina D3, que participa en su absorción. El extracto de avena completa la fórmula en cantidad pequeña."
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
    shortDesc: "Miel y propóleo con plantas de uso tradicional respiratorio, mentol y vitamina C para dar confort a la garganta y apoyar las defensas.",
    ingredients: "Miel de abeja, propóleo, extractos de: eucalipto (Eucalyptus), bugambilia (Bougainvillea), gordolobo (Verbascum thapsus), fenogreco (Trigonella foenum-graecum), saúco (Sambucus), malva (Malva sylvestris), mentol, esencia de miel, vitamina C (ácido ascórbico).",
    serving: "12 ml (1 cucharada) cada 4 horas",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos y niños mayores de 10 años: Tomar 1 cucharada (12 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
      "Acompaña la comodidad de la garganta con miel y propóleo. Gordolobo, bugambilia, fenogreco, saúco y malva complementan el cuidado de la garganta.",
      "Eucalipto y mentol aportan sensación de frescura. La vitamina C acompaña las defensas y la esencia de miel el sabor."
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
    shortDesc: "Miel y propóleo con ajo negro, plantas y vitamina C para dar confort a la garganta y complementar el cuidado de las defensas.",
    ingredients: "Miel de abeja, propóleo, extractos de: gordolobo (Verbascum thapsus), ajo negro (Allium nigrum), orégano (Origanum vulgare), bugambilia (Bougainvillea), fenogreco (Trigonella foenum-graecum), eucalipto (Eucalyptus), saúco (Sambucus), malva rosa (Alcea rosea), mentol, vitamina C (ácido ascórbico).",
    serving: "20 ml (2 vasos dosificadores) cada 4 horas (adultos)",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 2 vasos dosificadores (20 ml) cada 4 horas. Niños: Tomar 1 vaso dosificador (10 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
      "Acompaña la comodidad de la garganta con miel y propóleo. Gordolobo, bugambilia, fenogreco, saúco y malva rosa completan el cuidado de la garganta.",
      "Ajo negro y orégano añaden compuestos vegetales. Eucalipto y mentol dan sensación de frescura y vitamina C acompaña las defensas."
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
    shortDesc: "Glucosamina y MSM para el cuidado articular, con vitaminas y minerales para huesos y músculos. La cúrcuma aporta antioxidantes y se incorpora por su posible ayuda con las molestias de las articulaciones.",
    ingredients: "Metilsulfonilmetano (MSM) (125 mg), glucosamina (100 mg), cúrcuma (Curcuma longa) (100 mg), nogal (Juglans regia) (50 mg), vitamina C (30 mg), calcio (40 mg), magnesio (30 mg), vitamina B2 (riboflavina) (2 mg), vitamina B6 (piridoxina) (2 mg), zinc (10 mg), hierro (5 mg), potasio (5 mg), vitamina B12 (cianocobalamina) (100 µg), fósforo (0.9 mg).",
    serving: "1 cápsula al día",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente después de los alimentos, acompañada de agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "MSM, glucosamina y cúrcuma acompañan el cuidado de las articulaciones. Nogal completa la mezcla vegetal y vitamina C ayuda a formar colágeno.",
      "Calcio, magnesio, potasio y fósforo ayudan al funcionamiento de músculos y huesos. Zinc ayuda a cuidar la piel.",
      "Vitaminas B2, B6 y B12 e hierro ayudan a aprovechar los alimentos y a formar glóbulos rojos para la actividad diaria."
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
    shortDesc: "Proteína vegetal sabor cacao para completar la alimentación y apoyar los músculos, con probióticos como complemento digestivo.",
    ingredients: "Concentrado de proteína vegetal (chícharo y arroz integral), cocoa, aminoácidos de cadena ramificada (leucina, isoleucina y valina), sabor natural cacao, sal rosa del Himalaya, probióticos (Lactobacillus acidophilus y Bifidobacterium bifidum) y stevia (Stevia rebaudiana).",
    serving: "1 medida (39.5 g) al día",
    timing: "Dentro de los 60 minutos posteriores al entrenamiento o como colación proteica",
    intakeInstructions: "Mezclar 1 medida (39.5 g) con 350 ml de agua fría o leche vegetal. Agitar en shaker durante 20-30 segundos hasta disolver. Se recomienda consumir de 1 a 2 porciones al día, dependiendo de las necesidades proteicas y nivel de actividad física.",
    benefits: [
      "Ayuda a cuidar y recuperar los músculos con proteínas de chícharo y arroz integral y BCAA leucina, isoleucina y valina.",
      "Lactobacillus acidophilus y Bifidobacterium bifidum acompañan el cuidado intestinal. Cocoa, sabor natural cacao, sal rosa y stevia dan sabor y dulzor."
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
    benefitSummary: "Nutrición para personas activas",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VITARX-NANO1.png",
    shortDesc: "Vitaminas y minerales para complementar la alimentación de personas activas y apoyar las defensas, los músculos y el aprovechamiento de energía.",
    ingredients: "Glicina, ácido ascórbico (vitamina C), glutamina, carbonato de calcio, fosfato de potasio, sulfato de magnesio, niacina (vitamina B3), D-tocoferol acetato (vitamina E), pantotenato de calcio (vitamina B5), sulfato ferroso, riboflavina (vitamina B2), tiamina (vitamina B1), óxido de zinc, sulfato de manganeso, gluconato de cobre, retinol palmitato (vitamina A), ácido fólico, biotina, filoquinona (vitamina K), colecalciferol (vitamina D3) y cianocobalamina (vitamina B12).",
    serving: "3 cápsulas al día",
    timing: "1 cápsula antes de cada alimento (distribuir con las comidas principales)",
    intakeInstructions: "Tomar 3 cápsulas al día (1 antes de cada alimento) para optimizar la absorción de vitaminas liposolubles. No exceder la porción diaria recomendada.",
    benefits: [
      "Complementa la alimentación para el ejercicio con glicina y glutamina. Vitaminas B1, B2, B3, B5, B12, biotina y ácido fólico ayudan a obtener energía y a formar glóbulos rojos.",
      "Calcio del carbonato, potasio y fósforo del fosfato, magnesio del sulfato y vitaminas D3 y K ayudan a cuidar músculos y huesos.",
      "Hierro y cobre ayudan a transportar oxígeno y manganeso a cuidar los huesos. Vitaminas A y C y zinc apoyan las defensas y vitamina E aporta antioxidantes."
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
        category: "nutricional",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MCTOIL-BIRDMAN.webp",
        shortDesc: "Aceite de coco tipo MCT para sumar grasas que el cuerpo puede usar como energía y enriquecer bebidas y comidas.",
        ingredients: "Ésteres de ácidos grasos de cadena media (ácido caprílico 98%) extraído de aceite de coco.",
        serving: "1 cucharada sopera (15 ml) al día",
        timing: "Puede tomarse en cualquier momento, solo o añadido a café, batidos o comidas",
        intakeInstructions: "Tomar 1 cucharada sopera (15 ml) al día, solo o añadido a café, batidos, ensaladas o comidas. Para quienes son nuevos en MCT, se recomienda comenzar con 1/2 cucharada (7.5 ml) y aumentar gradualmente para evitar molestias digestivas. Agitar antes de usar.",
        benefits: [
          "Complementa el aporte de energía con grasas MCT de aceite de coco, principalmente ácido caprílico."
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
    benefitSummary: "Antioxidantes vegetales y apoyo para estar alerta",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VGREEN.png",
    shortDesc: "Té verde y otras plantas para complementar el cuidado de las células, con guaraná que contiene cafeína y ayuda a mantenerse alerta.",
    ingredients: "Polvo de hoja de té verde (Camellia sinensis) (620 mg), polvo de raíz de zarzaparrilla (Smilax aristolochiaefolia) (100 mg), polvo de hoja de toronjil (Melissa officinalis) (100 mg), mezcla HGO: polvo de hoja de damiana de campo (Turnera diffusa), polvo de semilla de guaraná (Paullinia cupana) (10 mg), polvo de raíz de rodiola rosea (Rhodiola rosea) (3.4 mg), polvo de flor de castilla, polvo de fruto de schisandra (Schisandra chinensis).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Tomar 2 cápsulas al día, de preferencia por la mañana, acompañadas de suficiente agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "Puede ayudar a estar más despierto con té verde y guaraná. Rhodiola, schisandra y damiana de campo se usan para la vitalidad.",
      "El toronjil se usa para la calma y el bienestar digestivo. Zarzaparrilla y flor de castilla completan la mezcla."
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
        benefitSummary: "Estrés cotidiano, relajación y funcionamiento muscular",
        category: "nervioso",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/RENDER-ASHWA-MAG-COMPLEX-1.jpeg",
        shortDesc: "Fórmula para acompañar el manejo del estrés cotidiano y la relajación, con ashwagandha, L-teanina y magnesio. La ashwagandha puede ayudar con la sensación de tensión y la teanina complementa la orientación hacia la calma. El magnesio del bisglicinato contribuye al funcionamiento normal de músculos y nervios. Su enfoque combina apoyo ante la exigencia diaria con el aporte nutricional del mineral.",
        researchNote: {
          "focus": "Estrés cotidiano, relajación y funcionamiento muscular",
          "sources": [
            {
              "title": "NIH: ashwagandha, estrés, descanso y precauciones",
              "url": "https://ods.od.nih.gov/factsheets/Ashwagandha-HealthProfessional/"
            },
            {
              "title": "L-teanina: ensayo sobre estrés y aspectos del sueño",
              "url": "https://pubmed.ncbi.nlm.nih.gov/31623400/"
            },
            {
              "title": "NIH: magnesio, músculos, nervios y producción de energía",
              "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
            }
          ]
        },
        ingredients: "Extracto de Ashwagandha (Withania somnifera) estandarizado al 2.5% de withanólidos (600 mg por porción diaria), L-Teanina (200 mg por porción diaria), Bisglicinato de Magnesio (aporta 225 mg de magnesio elemental por porción diaria).",
        serving: "Porción diaria por confirmar en la etiqueta vigente",
        timing: "Preferentemente con alimentos",
    intakeInstructions: "Confirmar la porción diaria con la etiqueta vigente o el fabricante antes de indicar una dosis: la ficha registra 1 cápsula en uso sugerido y 3 cápsulas como porción completa.",
        benefits: [
          "Manejo del estrés: la ashwagandha puede ayudar a reducir la sensación de tensión en etapas de mayor exigencia cotidiana.",
          "Relajación: la L-teanina puede acompañar la calma y complementa el enfoque de la ashwagandha dentro de la fórmula.",
          "Funcionamiento muscular y nervioso: el magnesio del bisglicinato contribuye a la actividad normal de músculos y nervios y al aprovechamiento de energía."
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
    shortDesc: "Bebida de sábila, nopal y cuachalalate de uso tradicional digestivo, con vitamina C para apoyar las defensas.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de nopal (Opuntia ficus-indica), extracto de cuachalalate (Amphipterygium adstringens), ácido ascórbico (vitamina C).",
    serving: "90 ml al día",
    timing: "Preferentemente en ayunas o entre comidas",
    intakeInstructions: "Agitar bien el envase antes de cada uso. Consumir 90 ml al día (un vaso dosificador), preferentemente en ayunas o entre comidas. Puede tomarse solo o mezclado con agua si se desea un sabor más suave. No exceder la porción diaria recomendada. Una vez abierto, consumir en un plazo de 1 mes.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con aloe vera, nopal y cuachalalate. La vitamina C complementa el cuidado de tejidos y las defensas."
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
    benefitSummary: "Té verde con antioxidantes y cafeína",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-VERDE--scaled.png",
    shortDesc: "Té verde para preparar una bebida con antioxidantes naturales y cafeína, que ayuda a mantenerse alerta.",
    ingredients: "Hojas de té verde (Camellia sinensis).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml) y dejar infusionar 3-5 minutos. Retirar el sobre y disfrutar.",
    benefits: [
      "Ayuda a estar más despierto con cafeína de las hojas de té verde y complementa el aporte de antioxidantes de la alimentación."
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
    benefitSummary: "Vitamina D3 para huesos, músculos y defensas",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2024/02/D3.jpg",
    shortDesc: "Vitamina D3 de 5000 UI para apoyar huesos, músculos y defensas cuando se requiere esta cantidad. Su elección necesita valoración profesional.",
    ingredients: "Vitamina D3 (colecalciferol) (125 µg / 5000 UI), aceite de olivo (Olea europaea) (400 mg), avena en polvo (Avena sativa) (100 mg).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos que contengan grasas para optimizar la absorción. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Apoya huesos, músculos y defensas con vitamina D3. El aceite de olivo actúa como base de aceite de la preparación y la avena completa la mezcla en cantidad pequeña."
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
    shortDesc: "Gel de uso externo con árnica y mentol para acompañar el masaje y dar frescura y confort en zonas con tensión muscular.",
    ingredients: "Agua, extracto de árnica (Heterotheca inuloides), salicilato de metilo, glucosamina, trietanolamina, ácido esteárico, carbomero, glicerina, monoesterato de sorbitan, aceite mineral, mentol natural, alcohol, parafina, alcohol bencílico, DMDM hidantoína, fenoxietanol, hidroxiacetofenona, color azul #1.",
    serving: "Aplicación tópica según necesidad",
    timing: "Según necesidad, 2-3 veces al día",
    intakeInstructions: "Aplicar una cantidad suficiente de gel sobre la zona afectada. Masajear suavemente hasta que se absorba completamente. Repetir 2-3 veces al día según sea necesario. Lavar las manos después de cada aplicación. Uso exclusivamente tópico, no ingerir.",
    benefits: [
      "Acompaña el masaje y la comodidad en la zona del masaje con salicilato de metilo, mentol y extracto de árnica. La glucosamina completa la preparación.",
      "La glicerina ayuda a retener humedad. Aceite mineral, parafina, ácido esteárico y monoestearato de sorbitan dan suavidad y consistencia. Agua y alcohol sirven para diluir los ingredientes, y carbomero y trietanolamina ajustan el gel.",
      "Alcohol bencílico, DMDM hidantoína, fenoxietanol e hidroxiacetofenona conservan la preparación. Azul #1 aporta color y no un efecto sobre el dolor."
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
    shortDesc: "Mezcla de plantas con zinc y vitamina E para complementar el cuidado masculino y el bienestar de la próstata.",
    ingredients: "Polen de flores, Omega 3 (150 mg), vitamina E (50 mg), zinc (20 mg), licopeno (10 mg), vitamina B6 (10 mg), polen de flores, pelos de elote, perejil, buchu, pygeum (en cantidades no especificadas).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Acompaña el cuidado de la próstata y la comodidad al orinar con pygeum y polen de flores. Pelos de elote, perejil y buchu se usan para el cuidado urinario.",
      "Omega 3 aporta grasas para las células, licopeno y vitamina E aportan antioxidantes, y zinc y vitamina B6 complementan el cuidado masculino."
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
    benefitSummary: "Infusión tradicional para la calma y el descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-7-AZAHARES-scaled.png",
    shortDesc: "Infusión de plantas y flores para acompañar una pausa de tranquilidad y la rutina nocturna. Reúne pasiflora, toronjil, tila y azahar con yerbaniz, zapote blanco y flor de manita, dentro de una mezcla herbolaria de uso tradicional para los nervios y el descanso. La manzanilla y la hierbabuena complementan su aroma y sabor. Su enfoque es una bebida reconfortante al terminar el día.",
    researchNote: {
      "focus": "Infusión tradicional para la calma y el descanso",
      "sources": [
        {
          "title": "EMA: uso tradicional de la pasiflora para estrés leve y sueño",
          "url": "https://www.ema.europa.eu/en/medicines/herbal/passiflorae-herba"
        },
        {
          "title": "UNAM: investigación sobre zapote blanco y su uso tradicional",
          "url": "https://www.dgcs.unam.mx/boletin/bdboletin/2015_607.html"
        },
        {
          "title": "UAM: yerbaniz y su uso en la medicina tradicional mexicana",
          "url": "https://repositorio.xoc.uam.mx/jspui/handle/123456789/26351"
        },
        {
          "title": "UTEP: flor de manita, usos tradicionales y precauciones",
          "url": "https://www.utep.edu/herbal-safety/hechos-herbarios/hojas-de-datos-a-base-de-hierbas/flor-de-manita.html"
        }
      ]
    },
    ingredients: "Yerbaniz (Tagetes lucida), flor de manzanilla (Chamaemelum nobile), zapote blanco (Casimiroa edulis), hojas de naranja/flor de azahar (Citrus aurantium), hierbabuena (Mentha spicata), pasiflora (Passiflora incarnata), flor de toronjil (Melissa officinalis), flor de manita (Chiranthodendron pentadactylon), flor de tila (Tilia alba).",
    serving: "1 sobre (1.5 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Colocar la bolsita en una taza, agregar agua caliente (200 ml) a 65°C, dejar infusionar 3-5 minutos, retirar la bolsita y disfrutar.",
    benefits: [
      "Calma cotidiana: la pasiflora aporta su uso tradicional para aliviar el estrés leve y acompañar la preparación para dormir.",
      "Rutina de descanso: toronjil, tila y azahar forman parte de la combinación herbolaria tradicional orientada a la tranquilidad.",
      "Pausa reconfortante: manzanilla e hierbabuena aportan aroma y sabor para disfrutar la infusión al terminar el día.",
      "Tradición relajante: yerbaniz, zapote blanco y flor de manita completan la mezcla utilizada tradicionalmente para los nervios y el descanso."
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
    shortDesc: "Infusión con eucalipto, gordolobo y otras plantas de uso tradicional respiratorio para dar confort a la garganta.",
    ingredients: "Eucalipto (Eucalyptus), tejocote (Crataegus mexicana), gordolobo (Verbascum thapsus), tabachín (Caesalpinia pulcherrima), sáuco (Sambucus nigra), propóleo.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Acompaña la comodidad de la garganta con propóleo y plantas de uso tradicional respiratorio: eucalipto, gordolobo y saúco. Tejocote y tabachín completan la infusión."
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
    benefitSummary: "Infusión de árnica mexicana: confirmar indicaciones de uso oral",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-ARNICA-scaled.png",
    shortDesc: "Infusión elaborada con hojas de árnica mexicana, identificada en el catálogo como Heterotheca inuloides. Esta identidad es importante porque existen plantas diferentes conocidas como árnica y preparaciones destinadas a usos distintos. Antes de ampliar sus funciones debemos confirmar las indicaciones de esta presentación para beber. La explicación interna debe distinguir este té de las pomadas y geles de árnica utilizados para masaje y molestias locales.",
    ingredients: "Hojas de árnica (Heterotheca inuloides Cass.).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Infusión de árnica mexicana Heterotheca inuloides. Consultar su uso por vía oral con un profesional."
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
    benefitSummary: "Cuachalalate de uso tradicional para molestias del estómago",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-CUACHALALTE-scaled.png",
    shortDesc: "Infusión de corteza de cuachalalate utilizada tradicionalmente para acompañar el bienestar del estómago. Dentro de la herbolaria mexicana se asocia con el cuidado de molestias estomacales que suelen describirse como irritación o gastritis. Para la formación del vendedor, conviene distinguir gastritis, gases y colitis, porque son situaciones diferentes. Su orientación es el uso tradicional para molestias del estómago, evitando presentarlo como solución para cualquier problema digestivo.",
    ingredients: "Corteza de cuachalalate (Amphipterygium adstringens).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Bienestar del estómago: la corteza de cuachalalate se usa tradicionalmente para acompañar el cuidado de molestias estomacales.",
      "En la herbolaria mexicana se utiliza tradicionalmente para molestias descritas como irritación o gastritis."
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
    shortDesc: "Infusión de sen para ayudar a evacuar en casos de estreñimiento ocasional. Su uso debe ser breve y conforme a la etiqueta.",
    ingredients: "Hojas de sen (Senna alexandrina).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día (uso ocasional)",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar. Uso ocasional, no prolongar por más de 7 días consecutivos.",
    benefits: [
      "Ayuda a evacuar en casos de estreñimiento ocasional con hojas de sen, que estimulan el movimiento del intestino."
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
    benefitSummary: "Jengibre y canela con té verde para digestión y antioxidantes",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CANELA-scaled.png",
    shortDesc: "Infusión que combina jengibre y canela con té verde para acompañar el bienestar digestivo y ofrecer una bebida con antioxidantes. El jengibre tiene uso tradicional para molestias leves del estómago, mientras que la canela aporta su sabor y componentes vegetales. El té verde añade antioxidantes y puede aportar cafeína. Esta combinación se distingue del té de jengibre y cúrcuma por la presencia del té verde y su carácter de bebida para el día.",
    ingredients: "Té verde (Camellia sinensis), raíz de jengibre (Zingiber officinale), canela (Cinnamomum verum).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Bienestar digestivo: el jengibre se usa tradicionalmente para acompañar la comodidad del estómago y la canela completa la mezcla de especias.",
      "Antioxidantes y cafeína: el té verde complementa la bebida con antioxidantes y puede ayudar a estar más despierto."
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
    benefitSummary: "Infusión para pesadez y gases después de comer",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CURCUMA-scaled.png",
    shortDesc: "Infusión de dos raíces utilizadas tradicionalmente para acompañar la comodidad del estómago después de comer. El jengibre y la cúrcuma se reúnen para el bienestar digestivo, especialmente ante pesadez y gases. Puede integrarse como bebida caliente dentro de la rutina posterior a los alimentos. Su enfoque principal es digestivo, distinguiendo esta infusión de los extractos concentrados de curcumina que se utilizan en fórmulas de orientación articular.",
    ingredients: "Raíz de jengibre (Zingiber officinale), raíz de cúrcuma (Curcuma longa).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Pesadez y gases: jengibre y cúrcuma se usan tradicionalmente para acompañar la comodidad del estómago después de comer.",
      "Permite incorporar ambas raíces en una infusión caliente dentro de la rutina después de los alimentos."
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
    shortDesc: "Infusión de manzanilla sin cafeína para acompañar el bienestar digestivo y una rutina de relajación.",
    ingredients: "Flores de manzanilla (Chamaemelum nobile) orgánicas.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche o después de las comidas",
    intakeInstructions: "Calentar agua hasta punto de ebullición. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Acompaña el bienestar después de comer y una pausa de calma con flores de manzanilla de uso tradicional."
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
    shortDesc: "Infusión de plantas de uso tradicional para el bienestar urinario y la eliminación de líquidos; no trata enfermedades de los riñones.",
    ingredients: "Pingüica (Arctostaphylos pungens), palo azul (Cyclolepis genistoides), pelo de elote (Zea mays L.), cola de caballo (Equisetum arvense).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
      "Pingüica, palo azul, pelo de elote y cola de caballo se usan para acompañar el cuidado urinario."
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
    benefitSummary: "Quercetina para el cuidado de las células",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/QUERCETIN.png",
    shortDesc: "Quercetina en cápsulas como complemento del cuidado de las células frente al desgaste diario.",
    ingredients: "Quercetina (3,3′,4′,5,7-pentahidroxiflavona) (1000 mg por porción).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas diariamente (1000 mg de quercetina), de preferencia con los alimentos. Consumir diariamente. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Aporta quercetina, un antioxidante para complementar el cuidado de las células."
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
    shortDesc: "Jarabe con aceite de hígado de bacalao y plantas de uso tradicional respiratorio; sus vitaminas A y D apoyan las defensas, la visión y los huesos.",
    ingredients: "Aceite de hígado de bacalao (vitaminas A y D), hipofosfitos de sodio, calcio, potasio, magnesio y hierro, extractos de eucalipto, saúco, lobaria pulmonaria, gordolobo y cassia fístula.",
    serving: "Adultos: 15 ml, 3 veces al día",
    timing: "Según necesidad, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 1 copita de 15 ml, 3 veces al día. Jóvenes: Tomar 1 copita de 15 ml, 2 veces al día. Niños: Tomar media copita, 3 veces al día. Agitar antes de usar.",
    benefits: [
      "Complementa el cuidado de huesos y defensas con vitaminas A y D del aceite de hígado de bacalao.",
      "Incluye hipofosfitos de sodio, calcio, potasio, magnesio y hierro como sales minerales.",
      "Eucalipto, saúco, lobaria pulmonaria y gordolobo se usan para el confort de garganta. Cassia fístula completa la mezcla de plantas."
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
    benefitSummary: "Complemento nutricional con inositol",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-PURE-INOSITOL-RENDER-V2-AGOSTO2026.jpeg",
    shortDesc: "Inositol en polvo para complementar el cuidado nutricional; participa en la comunicación entre las células y el aprovechamiento de nutrientes.",
    ingredients: "Inositol (100% puro).",
    serving: "5 g al día (1 cucharadita)",
    timing: "Preferentemente acompañado de algún alimento",
    intakeInstructions: "Disolver 5 g (aproximadamente una cucharadita) en un vaso de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente acompañado de algún alimento. No exceder la porción diaria recomendada.",
    benefits: [
      "Aporta inositol para complementar la alimentación y el cuidado del azúcar."
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
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BISGLICINATO-MAGNESIO.png",
    shortDesc: "Magnesio en forma de bisglicinato para apoyar músculos y nervios y ayudar a reducir el cansancio cuando falta este mineral.",
    ingredients: "Bisglicinato de magnesio (aporta 400 mg de magnesio elemental por porción), inulina de agave (20 mg).",
    serving: "4 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 4 cápsulas al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
      "Apoya músculos, nervios y obtención de energía con magnesio del bisglicinato. La inulina de agave añade fibra en cantidad pequeña."
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
    benefitSummary: "Masaje y cuidado de la piel",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MOROIZY.png",
    shortDesc: "Gel de uso externo con plantas para acompañar el masaje y el cuidado de la piel en las zonas donde se aplica.",
    ingredients: "Extractos de castaño de indias (Aesculus hippocastanum), hamamelis (Hamamelis virginiana), centella asiática (Centella asiatica), saúco (Sambucus), árnica (Arnica montana), manzanilla (Chamaemelum), ginkgo biloba (Ginkgo biloba), carbomero, silicato de metilo.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la zona afectada de 2 a 3 veces al día, masajeando suavemente hasta su absorción. Uso exclusivamente tópico, no ingerir. Evitar contacto con ojos y mucosas. Si se presenta irritación, suspender su uso.",
    benefits: [
      "Acompaña el masaje y el cuidado de la piel con castaño de Indias, hamamelis, centella asiática y ginkgo biloba. Saúco, árnica y manzanilla completan la mezcla de plantas.",
      "El carbomero da consistencia al gel. El ingrediente registrado como silicato de metilo debe confirmarse en la etiqueta."
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
    benefitSummary: "Masaje y confort de piernas cansadas",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CT-O.png",
    shortDesc: "Gel de uso externo con plantas para acompañar el masaje y dar confort a las piernas cansadas.",
    ingredients: "Agua, extracto de castaño de indias (Aesculus hippocastanum), extracto de hamamelis (Hamamelis virginiana), extracto de centella asiática (Centella asiatica), extracto de ginkgo biloba (Ginkgo biloba), salicilato de metilo, carbómero.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la piel limpia y seca de las zonas deseadas (como piernas o zonas de tensión) y realizar un masaje suave con movimientos circulares ascendentes hasta su completa absorción. Se recomienda aplicar de 2 a 3 veces al día. Uso exclusivamente tópico, no ingerir.",
    benefits: [
      "Acompaña el confort de piernas cansadas mediante masaje y salicilato de metilo. Castaño de Indias, hamamelis, centella asiática y ginkgo biloba complementan el uso tópico tradicional.",
      "El agua sirve de vehículo y el carbómero mantiene la consistencia del gel."
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
    benefitSummary: "Vitaminas C y D con zinc para las defensas",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Zenmun1.jpg",
    shortDesc: "Vitaminas C y D, zinc y plantas para apoyar las defensas y el cuidado diario de las células.",
    ingredients: "Bayas de Saúco (Sambucus nigra), Equinácea (Echinacea purpurea), Ajo Negro (Allium sativum fermentado), Vitamina C (ácido ascórbico) (300 mg), Vitamina D3 (colecalciferol) (10 mcg / 400 UI), Zinc (elemental) (20 mg).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (&gt;3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "Apoya las defensas con vitaminas C y D3 y zinc. Saúco, equinácea y ajo negro complementan el cuidado tradicional en cambios de temporada con compuestos vegetales."
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
    benefitSummary: "Astrágalo y vitalidad de uso tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ASTRAGALO.png",
    shortDesc: "Astrágalo en cápsulas, una planta usada tradicionalmente para acompañar la vitalidad y el bienestar general.",
    ingredients: "Extracto de raíz de Astrágalo (Astragalus membranaceus) (320 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Astrágalo al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Acompaña el bienestar y la vitalidad de uso tradicional con extracto de raíz de astrágalo."
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
    shortDesc: "Calostro bovino en cápsulas como complemento de la alimentación; se estudia su apoyo al bienestar intestinal.",
    ingredients: "Calostro bovino liofilizado (200 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Calostro Bovino al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Complementa la alimentación con calostro bovino liofilizado y sus componentes naturales."
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
    benefitSummary: "Calostro, plantas y hongos como complemento nutricional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CELULAS-MADRE.png",
    shortDesc: "Mezcla de calostro, reishi, astrágalo, espirulina y FO-TI para complementar la alimentación. El nombre comercial no significa que contenga células madre.",
    ingredients: "Calostro bovino (150 mg), Astrágalo (Astragalus lucidum) (50 mg), Hongo Reishi (Ganoderma lucidum) (50 mg), Alga Espirulina (Spirulina maxima) (30 mg), FO-TI (Polygonum multiflorum) (25 mg).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Células Madre al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
      "Complementa la alimentación con calostro bovino y espirulina. Astrágalo y Reishi completan la mezcla para el bienestar general.",
      "También contiene FO-TI. Consultar con un profesional antes de usarlo."
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
    shortDesc: "Propóleo, mentol y equinácea en gotas para dar frescura y acompañar el cuidado tradicional de la garganta.",
    ingredients: "Propóleo, mentol natural, equinácea (Echinacea purpurea).",
    serving: "20 gotas (1 ml) al día",
    timing: "Con o sin alimentos",
    intakeInstructions: "Añadir 20 gotas (1 ml) del extracto en agua, jugo o tomar directamente. Una vez al día. Agitar antes de usar. No exceder la dosis diaria recomendada.",
    benefits: [
      "Propóleo se usa para la comodidad de la garganta y mentol natural da frescura. Equinácea completa la mezcla para el cuidado en cambios de temporada."
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
    shortDesc: "Infusión de cenizo y toronjil para acompañar una pausa de relajación y el bienestar digestivo tradicional.",
    ingredients: "Cenizo (Leucophyllum frutescens), Toronjil (Agastache mexicana).",
    serving: "1 bolsita (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Preparar una taza con agua caliente, agregar una bolsita de té y dejar reposar de 3 a 5 minutos. Tomar 1 taza al día, preferentemente por la noche. No exceder la dosis diaria recomendada.",
    benefits: [
      "Acompaña una pausa de bienestar con cenizo y toronjil de uso tradicional. El toronjil se usa para calma y bienestar del estómago."
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
    benefitSummary: "Plantas y fibra para bienestar digestivo",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASS-LX.png",
    shortDesc: "Mezcla de plantas, frutas e inulina para complementar la alimentación y el bienestar digestivo.",
    ingredients: "Forskolina (Extracto de la raíz de Coleus forskohlii), Fruto de Ciruela (Prunus domestica), Fruto de Tamarindo (Tamarindus indica), Inulina (Fibra prebiótica), Fruto de Papaya (Carica papaya), Penca de Nopal (Opuntia ficus-indica), Semilla de Linaza (Linum usitatissimum).",
    serving: "1 tableta al día",
    timing: "Preferentemente antes de la comida principal",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente antes de la comida principal, con un vaso de agua.",
    benefits: [
      "Acompaña el movimiento del intestino con inulina como fibra que alimenta a las bacterias buenas del intestino y linaza, nopal, ciruela, tamarindo y papaya como componentes vegetales.",
      "La forskolina de Coleus forskohlii completa la mezcla."
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
    shortDesc: "Creatina en polvo para apoyar la fuerza y el rendimiento en esfuerzos cortos e intensos. Incluye minerales y vitaminas, con sabor limón.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Lima Limón Natural, Ácido Málico, Stevia (Stevia rebaudiana), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "Ayuda a rendir en esfuerzos cortos y repetidos con creatina monohidratada. Sal rosa, minerales del lago salado de Utah y glicinato de magnesio complementan el aporte para los músculos.",
      "Vitamina C de amla y vitamina E aportan antioxidantes. Vitamina D3 ayuda a huesos y músculos y B12 al funcionamiento de los nervios y a formar glóbulos rojos.",
      "Alulosa y stevia dan dulzor. Ácidos cítrico y málico y sabor natural lima limón dan sabor a la bebida."
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
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NEUROCEBRYL-COMPUESTO.webp",
    shortDesc: "Vitaminas B y otros nutrientes en una presentación líquida para ayudar a aprovechar la energía de los alimentos y cuidar los nervios.",
    ingredients: "Vitaminas del complejo B: Clorhidrato de Tiamina (B1) 15 mg, Riboflavina 5' Fosfato (B2) 18 mg, Clorhidrato de Piridoxina (B6) 10 mg, Cianocobalamina (B12) 12 µg, Niacinamida (B3) 20 mg, Ácido Pantoténico (B5) 20 mg, Ácido Fólico 400 µg. Vitaminas antioxidantes: Ácido Ascórbico (C) 50 mg, Alfatocoferol (E) 60 mg, Palmitato de Vitamina A 1000 UI, Colecalciferol (D3) 10 µg. Minerales y otros: Gluconato de Calcio 100 mg, Jalea Real Fresca 5 mg, Inositol 15 mg.",
    serving: "Adultos: 1 ampolleta al día. Niños: 1 ampolleta cada tercer día.",
    timing: "Oral, directamente",
    intakeInstructions: "Ingerir directamente el contenido de la ampolleta. EN NINGÚN CASO DEBERÁ INYECTARSE.",
    benefits: [
      "Ayuda a obtener energía de los alimentos con vitaminas B1, B2, B3, B5 y B6. Ácido fólico y B12 ayudan a formar glóbulos rojos.",
      "Vitaminas C y E aportan antioxidantes, vitamina A cuida la piel, y D3 y calcio del gluconato ayudan a cuidar huesos y músculos.",
      "Jalea real e inositol completan el aporte de la fórmula."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NAC-NOW.webp",
    shortDesc: "NAC con selenio para complementar el cuidado de las células. El NAC ayuda al cuerpo a formar glutatión, una de sus sustancias de protección.",
    ingredients: "N-Acetil Cisteína (NAC), L-Selenometionina (Selenio). Hipromelosa (cápsula de celulosa), Estearato de magnesio (fuente vegetal), Dióxido de silicio y Ácido cítrico.",
    serving: "1 cápsula, 2 veces al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 1 cápsula, 2 veces al día, con el estómago vacío o según indicación de un profesional de la salud.",
    benefits: [
      "Ayuda a cuidar las células con NAC, que el cuerpo usa para producir glutatión, y selenio de L-selenometionina.",
      "Hipromelosa forma la cápsula. Estearato de magnesio y dióxido de silicio ayudan a prepararla y ácido cítrico ajusta la acidez."
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
    shortDesc: "Bebida de soya en polvo con proteína, vitaminas y minerales para complementar la alimentación.",
    ingredients: "Proteína aislada de soya, aceite vegetal, jarabe de maíz, maltodextrina, sucralosa, fosfato de calcio, citrato de potasio, sulfato ferroso, sulfato de zinc, yodato de potasio, sulfato de magnesio, palmitato de vitamina A, acetato de dl-alfa tocoferol (Vitamina E), ácido ascórbico (Vitamina C), niacinamida, tiamina, riboflavina, piridoxina, ácido fólico, ácido pantoténico, cianocobalamina, mono y diglicéridos, estearato de sodio, estearoil lactilato de sodio, saborizante artificial.",
    serving: "3 cucharadas soperas al ras (aprox. 25 g) + 200 ml de agua = 250 ml de bebida",
    timing: "Cualquier momento del día",
    intakeInstructions: "Verter 3 cucharadas soperas al ras (aprox. 25 g) en un vaso. Añadir agua potable a temperatura ambiente hasta llenar el vaso (250 ml). Remover vigorosamente.",
    benefits: [
      "Aporta proteína y energía con proteína aislada de soya, aceite vegetal, jarabe de maíz y maltodextrina.",
      "Calcio del fosfato, potasio del citrato y magnesio del sulfato ayudan a músculos y huesos. Hierro ayuda a formar glóbulos rojos, zinc a las defensas y yodo a la tiroides.",
      "Vitamina A cuida la piel y vitaminas C y E aportan antioxidantes. B1 tiamina, B2 riboflavina, B3 niacinamida, B5 ácido pantoténico, B6 piridoxina, B9 ácido fólico y B12 cianocobalamina ayudan a aprovechar los alimentos.",
      "Sucralosa y saborizante artificial dan sabor. Mono y diglicéridos, estearato de sodio y estearoil lactilato de sodio mantienen uniforme la bebida."
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
    benefitSummary: "Apoyo al cuidado de la glucosa y energía diaria",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DYNEEM-GREENLIFE.webp",
    shortDesc: "Dos fórmulas para apoyar el cuidado de la glucosa y ayudar a obtener energía de los alimentos: una mezcla de plantas de uso tradicional y otra de vitaminas, minerales y jalea real.",
    ingredients: "Frasco 1: Neem (Azadirachta indica), Tecomate (Tecoma stans), Guarumbo (Cecropia obtusifolia), Nopal (Opuntia ficus-indica), Guayule (Parthenium argentatum), Eucalipto (Eucalyptus globulus), Sábila (Aloe vera), Zarzaparrilla (Smilax aristolochiifolia), Damiana de California (Turnera diffusa), Yerba del Sapo (Eryngium carlinae), Ajo (Allium sativum). Frasco 2: Palmitato de Vitamina A, Vitamina D3, Vitamina E, Vitaminas B1, B2, B6, B12, Vitamina C, Ácido fólico, Niacinamida, Fosfato dicálcico, Sulfato ferroso, Sulfato de zinc, Sulfato de cobre, Sulfato de manganeso, Sulfato de potasio, Sulfato de magnesio, Picolinato de cromo, Jalea real liofilizada.",
    serving: "Frasco 1: 1 cápsula, 3 veces al día. Frasco 2: 1 cápsula por la mañana y 1 por la tarde.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula del Frasco 1, 3 veces al día. Tomar 1 cápsula del Frasco 2 por la mañana y 1 por la tarde.",
    benefits: [
      "Cuidado de la glucosa: mezcla de plantas de uso tradicional con neem, tecomate, guarumbo y nopal. También incluye guayule, eucalipto, sábila, zarzaparrilla, damiana de California, yerba del sapo y ajo.",
      "Energía diaria: las vitaminas B1, B2, B6, B12, ácido fólico y niacinamida ayudan a obtener energía de los alimentos. Hierro y cobre ayudan a formar glóbulos rojos.",
      "Calcio del fosfato dicálcico, magnesio, potasio y vitamina D3 ayudan a músculos y huesos. Vitaminas A y C y zinc apoyan las defensas.",
      "Vitamina E y manganeso cuidan las células, cromo ayuda a aprovechar los alimentos y jalea real completa el aporte alimentario."
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
    benefitSummary: "Plantas y fibra para complementar el bienestar digestivo",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPREMIER.webp",
    shortDesc: "Mezcla de plantas e inulina para acompañar el bienestar digestivo y los hábitos de alimentación.",
    ingredients: "Matake (Grifola frondosa), Cayena, Cúrcuma (Curcuma longa), Espirulina (Arthrospira platensis), Arándano (Vaccinium myrtillus), Moringa (Moringa oleifera), Enebro (Juniperus communis), Olivo (Olea europaea), Inulina, Naranjo amargo (Citrus aurantium).",
    serving: "1 cápsula al día",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas, con un vaso de agua.",
    benefits: [
      "Acompaña el bienestar intestinal con inulina. Cúrcuma complementa el bienestar del estómago tradicional, y espirulina, moringa y Matake amplían el aporte vegetal y de hongos.",
      "Arándano y olivo añaden compuestos vegetales. Cayena, enebro y naranjo amargo completan la fórmula."
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
    shortDesc: "Infusión con piña, linaza y distintos tés para variar las bebidas y acompañar una rutina después de comer.",
    ingredients: "Pulpa de piña (16%), linaza (14%), té verde, té rojo y té blanco (14% cada uno), aguaje peruano (14%) y corazón de alcachofa (14%).",
    serving: "1 sobre (1 taza) al día, preferentemente por la noche",
    timing: "Por la noche",
    intakeInstructions: "Colocar agua caliente a 65°C en una taza, agregar la bolsita y reposar de 3 a 5 minutos. Endulzar al gusto. Si es la primera vez, comenzar con la mitad de la dosis.",
    benefits: [
      "Infusión de piña, linaza y alcachofa para acompañar el bienestar digestivo. Tés verde, rojo y blanco aportan cafeína y antioxidantes. Aguaje peruano completa la mezcla vegetal."
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
    shortDesc: "Sábila con vitamina C en una bebida para acompañar el bienestar digestivo tradicional y apoyar las defensas.",
    ingredients: "Pulpa de sábila (Aloe barbadensis, Mill.), Vitamina C (Ácido Ascórbico).",
    serving: "60 ml (2 copitas), 3 veces al día",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 60 ml (2 copitas), 3 veces al día, antes de cada alimento. Refrigerar después de abrir.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con pulpa de sábila. La vitamina C complementa el cuidado de tejidos y las defensas."
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
    benefitSummary: "Plantas de uso tradicional urinario y digestivo",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DMasterPlatinum1.webp",
    shortDesc: "Mezcla de plantas, entre ellas gayuba, té verde y jamaica, de uso tradicional para el bienestar urinario y digestivo.",
    ingredients: "Gayuba (Arctostaphylos uva-ursi), Té verde (Camellia sinensis), Uva (Vitis vinifera), Manzana (Malus domestica), Jamaica (Hibiscus sabdariffa), Cacao (Theobroma cacao), Linaza (Linum usitatissimum), Sábila (Aloe vera).",
    serving: "1 cápsula al día",
    timing: "Por la mañana, después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana, después de los alimentos, con abundante agua.",
    benefits: [
      "Acompaña el bienestar digestivo con linaza y sábila. Té verde, uva, manzana, jamaica y cacao completan el aporte vegetal.",
      "Gayuba se usa para el cuidado de las vías urinarias."
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
    shortDesc: "Mezcla de linaza, sábila, nopal y otras plantas para acompañar el bienestar digestivo y la alimentación diaria.",
    ingredients: "Semilla de linaza (Linum usitatissimum), Sábila (Aloe vera), Nopal (Opuntia ficus-indica), Té verde (Camellia sinensis), Fibra de piña (Ananas comosus), Malva (Malva sylvestris), Raíz de lima (Citrus x aurantiifolia).",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua.",
    benefits: [
      "Acompaña el bienestar intestinal con linaza, nopal y fibra de piña. Sábila y malva complementan el bienestar digestivo.",
      "Té verde y raíz de lima completan la mezcla de plantas."
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
    shortDesc: "Cuatecomate con eucalipto y gordolobo en una presentación líquida de uso tradicional para el confort de la garganta. Contiene alcohol.",
    ingredients: "Frutos de Cuatecomate (Crescentia sp.), Hojas de Eucalipto (Eucalyptus globulus), Flores de Gordolobo (Gnaphalium sp.), Agua, Sacarosa, Alcohol (1.9%).",
    serving: "10 ml (2 cucharadas soperas)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 10 ml (2 cucharadas soperas) después de los alimentos. No es recomendable para niños.",
    benefits: [
      "Acompaña la comodidad de la garganta con cuatecomate, eucalipto y gordolobo de uso tradicional respiratorio. El agua sirve de vehículo y la sacarosa aporta dulzor y carbohidratos.",
      "El alcohol al 1.9 % forma parte de la preparación."
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
    shortDesc: "Calostro bovino con plantas como complemento de la alimentación; se estudia el calostro por su relación con el bienestar intestinal.",
    ingredients: "Calostro Bovino Seco (1,000 mg), InmunEnhancer™ (Arabinogalactano de Alerce) (200 mg), Hoja de Olivo (Extracto, min. 6% Oleuropeína) (200 mg), Raíz de Astrágalo (Astragalus membranaceus) (100 mg), Eleuthero (Raíz de Eleuterococo) (100 mg).",
    serving: "2 cápsulas al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 2 cápsulas al día, preferiblemente con el estómago vacío para una mejor absorción.",
    benefits: [
      "Complementa la alimentación con calostro bovino e InmunEnhancer™, fibra de arabinogalactano de alerce.",
      "Olivo, astrágalo y eleuthero o eleuterococo completan la mezcla de plantas para el bienestar general."
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
    shortDesc: "Pomada de uso externo para ayudar a proteger y suavizar zonas de piel seca. Incluye ácido salicílico, alquitrán de hulla y extractos vegetales.",
    ingredients: "Vaselina, Propilenglicol, Alquitrán de hulla, Ácido Salicílico, Extracto de Nogal (Juglans sp.), Extracto de Orégano (Lippia sp.), Tomillo (Thymus vulgaris), Saúco (Sambucus sp.), Romero (Rosmarinus officinalis), Mastuerzo (Tropaeolum majus), Saponaria (Saponaria officinalis), Loeselia (Loeselia mexicana), Metilparabeno, Propilparabeno.",
    serving: "Aplicación tópica según necesidad",
    timing: "Por la noche",
    intakeInstructions: "Lavar la zona afectada, secar perfectamente y aplicar una cantidad generosa de Pomada Nopsor, dejándola actuar durante la noche. Uso externo únicamente.",
    benefits: [
      "Acompaña el cuidado de la piel con descamación con ácido salicílico y alquitrán de hulla. Vaselina y propilenglicol ayudan a conservar la humedad.",
      "Nogal, orégano, tomillo, saúco, romero, mastuerzo, saponaria y loeselia completan la mezcla de plantas. Metilparabeno y propilparabeno conservan la pomada."
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
      shortDesc: "Cartílago de tiburón en cápsulas como complemento nutricional orientado al cuidado de las articulaciones.",
      ingredients: "100% Cartílago de Tiburón en polvo. Sin excipientes ni aditivos.",
      serving: "3 cápsulas antes de cada comida (9 cápsulas al día)",
      timing: "Antes de cada alimento (desayuno, comida y cena)",
      intakeInstructions: "Tomar 3 cápsulas antes de cada alimento (desayuno, comida y cena) = 9 cápsulas al día. Recomendado a partir de 12 años.",
      benefits: [
        "Complementa el aporte alimentario con cartílago de tiburón en polvo, sin excipientes ni aditivos."
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
    shortDesc: "Levadura de cerveza en tabletas para complementar la alimentación sin añadir levadura a las comidas.",
    ingredients: "Levadura de cerveza (Saccharomyces cerevisiae), Avicel, Estearato de magnesio.",
    serving: "3 tabletas antes de cada comida (9 tabletas al día)",
    timing: "Antes de cada comida",
    intakeInstructions: "Tomar 3 tabletas antes de cada comida (desayuno, comida y cena) = 9 tabletas al día. Recomendado a partir de 12 años.",
    benefits: [
      "Complementa la alimentación con levadura de cerveza. Avicel y estearato de magnesio ayudan a dar forma a la tableta."
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
    shortDesc: "Aceites de pescado, sacha inchi y linaza con vitamina E para complementar el consumo de omega 3 y el cuidado del corazón.",
    ingredients: "Aceite de pescado (EPA/DHA), Aceite de Sacha Inchi (Plukenetia volubilis) prensado en frío, Aceite de linaza (Linum usitatissimum) prensado en frío, Vitamina E (Alfa tocoferol).",
    serving: "1 cápsula, 3 veces al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, 3 veces al día, de preferencia con los alimentos. Recomendado a partir de 18 años.",
    benefits: [
      "Complementa el cuidado del corazón con EPA y DHA del aceite de pescado. Aceites de sacha inchi y linaza añaden grasas vegetales, incluido ALA.",
      "La vitamina E añade antioxidantes para cuidar las células y ayuda a proteger los aceites de la preparación."
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
    benefitSummary: "Conciliación del sueño y rutina de descanso nocturno",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/2MR.png",
    shortDesc: "Fórmula nocturna para acompañar la conciliación del sueño y establecer una rutina de descanso. La melatonina participa en la regulación del horario de sueño, mientras que el L-triptófano aporta material para producir serotonina y melatonina. La rhodiola complementa la mezcla desde su uso tradicional para el cansancio asociado al estrés.",
    researchNote: {
      focus: "Conciliación del sueño y rutina de descanso nocturno",
      sources: [
        { title: "NCCIH: melatonina y horario de sueño", url: "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know" },
        { title: "L-triptófano como precursor de serotonina y melatonina", url: "https://pubmed.ncbi.nlm.nih.gov/8496306/" },
        { title: "NCCIH: rhodiola, usos tradicionales y precauciones", url: "https://www.nccih.nih.gov/health/rhodiola" }
      ]
    },
    ingredients: "L-Triptófano (295 mg), Rhodiola rosea (200 mg), Melatonina (5 mg).",
    serving: "1 cápsula al día",
    timing: "Por la noche después de cenar",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche después de cenar, o según indicación de un especialista.",
    benefits: [
      "Conciliación del sueño: la melatonina (5 mg) acompaña el inicio del sueño y ayuda a regular su horario.",
      "Apoyo al descanso: el L-triptófano (295 mg) aporta material para producir serotonina y melatonina, que participan en el ciclo de sueño.",
      "Cansancio asociado al estrés: Rhodiola rosea (200 mg) se usa tradicionalmente para acompañar la vitalidad en etapas de mayor exigencia."
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años.",
    foodInteractions: "La ficha no indica precauciones específicas con alimentos.",
    interactions: "La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo. La rhodiola puede dificultar el sueño en algunas personas; si ocurre, consultar con un profesional para revisar su uso."
  },

  // 208. CÁPSULAS DE ACEITE DE ORÉGANO
  {
    id: 208,
    code: "7503008731042",
    name: "CÁPSULAS DE ACEITE DE ORÉGANO",
    benefitSummary: "Orégano: compuestos vegetales y bienestar digestivo tradicional",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/OREGANO-ORGANICO.png",
    shortDesc: "Aceite de orégano con aceite de oliva en cápsulas para acompañar el bienestar digestivo tradicional, sin el sabor intenso del aceite.",
    ingredients: "Aceite de orégano orgánico (Lippia graveolens), Aceite de oliva.",
    serving: "Adultos: 1 cápsula, hasta 3 veces al día. Niños mayores de 7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, hasta 3 veces al día (adultos) o 1 cápsula al día (niños mayores de 7 años). Tomar suficiente agua.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con aceite de orégano orgánico. El aceite de oliva sirve como base de aceite para diluirlo y distribuirlo."
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
    shortDesc: "Creatina en polvo para apoyar la fuerza y el rendimiento en esfuerzos cortos e intensos. Incluye minerales y vitaminas, con sabor limonada rosa.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Fresa Limón Natural, Stevia (Stevia rebaudiana), Extracto de Betacarotenos (Blakeslea trispora), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "Ayuda a rendir en esfuerzos cortos y repetidos con creatina monohidratada. Sal rosa, minerales del lago salado de Utah y glicinato de magnesio complementan el aporte para los músculos.",
      "Vitamina C de amla y vitamina E aportan antioxidantes. D3 ayuda a huesos y músculos y B12 al funcionamiento de los nervios y a formar glóbulos rojos.",
      "Alulosa y stevia dan dulzor. Ácido cítrico y sabor natural fresa limón dan sabor y los betacarotenos de Blakeslea trispora aportan color."
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
    benefitSummary: "Uso tradicional para el cuidado del azúcar",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PATA-DE-VACA.png",
    shortDesc: "Planta utilizada tradicionalmente para acompañar el cuidado del azúcar en la sangre. Esta presentación permite incorporar pata de vaca en cápsulas como complemento de la alimentación y del seguimiento habitual de la glucosa. Su fórmula contiene 300 mg de pata de vaca por cápsula; el excipiente completa el volumen de la preparación.",
    ingredients: "Pata de Vaca (Bauhinia forticata) 300 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Pata de Vaca al día, con alimentos.",
    benefits: [
      "Pata de vaca se usa como complemento de la alimentación para el cuidado del azúcar. El excipiente da volumen a la cápsula."
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
    shortDesc: "Palo azul y uva ursi en cápsulas, plantas de uso tradicional para acompañar el bienestar urinario.",
    ingredients: "Palo Azul (Cyclolepis genistoides) 150 mg, Uva Ursi (Arctostaphylos uva-ursi) 150 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Palo Azul Uva Ursi al día.",
    benefits: [
      "Palo azul y uva ursi se usan para acompañar el cuidado urinario. El excipiente da volumen a la cápsula."
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
    benefitSummary: "Zinc para defensas, piel, cabello y uñas",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GLUCONATO-DE-ZINC-PROSA.png",
    shortDesc: "Zinc para apoyar las defensas y el cuidado de la piel, el cabello y las uñas.",
    ingredients: "Gluconato de zinc (aporta 20 mg de zinc elemental), Estearato de magnesio, Celulosa microcristalina, Fosfato dibásico de calcio.",
    serving: "1 tableta al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
      "Ayuda a las defensas y al cuidado de piel, cabello y uñas con zinc del gluconato.",
      "Estearato de magnesio, celulosa microcristalina y fosfato dibásico de calcio ayudan a dar forma a la tableta."
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
    shortDesc: "Mezcla de siete plantas de uso tradicional para acompañar el bienestar urinario y digestivo.",
    ingredients: "Chanca Piedra (Phyllanthus niruri), Yumel (Guatteria gaumeri), Cola de Caballo (Equisetum arvense), Perejil (Petroselinum crispum), Hierba del Sapo (Eryngium carlinae), Cardo Mariano (Silybum marianum), Taray (Tamarix gallica).",
    serving: "3 tabletas al día (1 antes de cada alimento)",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 3 tabletas al día: 1 tableta antes de cada alimento principal (desayuno, comida y cena).",
    benefits: [
      "Chanca piedra, cola de caballo, perejil y taray se usan para acompañar el cuidado urinario. Yumel, hierba del sapo y cardo mariano completan la mezcla digestiva."
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
    shortDesc: "Bebida de alpiste en polvo para variar las bebidas de la alimentación. Su fórmula incluye azúcar y otros carbohidratos.",
    ingredients: "Harina de alpiste (Phalaris canariensis), Maltodextrina, Azúcar, Goma xantana.",
    serving: "10 g (2 cucharadas) en 100 ml de agua",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 10 g (aproximadamente 2 cucharadas) en 100 ml de agua, mezclar hasta obtener una consistencia homogénea y consumir de inmediato.",
    benefits: [
      "Permite variar la alimentación con harina de alpiste. Maltodextrina y azúcar añaden carbohidratos y energía, mientras la goma xantana da consistencia a la bebida."
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
    benefitSummary: "L-carnitina para complementar la alimentación de personas activas",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-CARNITINA-PROWINNER.png",
    shortDesc: "L-carnitina en cápsulas para complementar la alimentación de personas activas; participa en el uso de grasas como energía.",
    ingredients: "L-Carnitina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "Complementa la alimentación de personas activas con L-carnitina, que ayuda al cuerpo a usar grasas para obtener energía."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-OREGANO-Y-COCO-CAPS.png",
    shortDesc: "Aceites de orégano y coco en cápsulas para acompañar el bienestar digestivo tradicional, sin su sabor intenso.",
    ingredients: "Aceite de coco (Cocos nucifera), Aceite esencial de orégano (Lippia graveolens).",
    serving: "Adultos: 1 cápsula, hasta 2 veces al día. Niños >7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente. Beber suficiente agua.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con aceite esencial de orégano. El aceite de coco actúa como base de aceite para diluirlo."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-LISINA-PROWINNER.png",
    shortDesc: "Lisina en cápsulas para complementar el aporte de un nutriente necesario para formar y mantener las proteínas del cuerpo.",
    ingredients: "L-Lisina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "Complementa la formación de proteínas con L-lisina, aminoácido esencial que el cuerpo necesita obtener de la alimentación para mantener sus tejidos."
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
    benefitSummary: "Apoyo al descanso y formación de serotonina",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/5-htp.png",
    shortDesc: "Cápsulas con 100 mg de 5-HTP como ingrediente activo, orientadas al apoyo del descanso. El cuerpo lo utiliza para formar serotonina, que interviene en el estado de ánimo y sirve de paso para producir melatonina. Un ensayo en adultos mayores con dificultades para descansar observó mejoras en la calidad del sueño con esa cantidad diaria. La celulosa microcristalina completa la cápsula como excipiente.",
    researchNote: {
      "focus": "Apoyo al descanso y formación de serotonina",
      "sources": [
        {
          "title": "5-HTP: ensayo con 100 mg diarios en adultos mayores y calidad del sueño",
          "url": "https://pubmed.ncbi.nlm.nih.gov/38309227/"
        },
        {
          "title": "MSK: 5-HTP, formación de serotonina e interacciones",
          "url": "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/5-htp-01"
        }
      ]
    },
    ingredients: "5-HTP (5-Hidroxitriptófano) 100 mg, Celulosa microcristalina c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con las comidas",
    intakeInstructions: "Tomar 1 cápsula (500 mg) al día, preferiblemente con las comidas, o según indicación de un especialista.",
    benefits: [
      "Apoyo al ciclo de sueño: el 5-HTP participa en la formación de serotonina y, a partir de ella, de melatonina.",
      "Calidad del descanso: un ensayo en adultos mayores observó mejoras con 100 mg diarios de 5-HTP en quienes dormían mal.",
      "Participación en el ánimo: la serotonina que el cuerpo produce a partir del 5-HTP interviene en la regulación del estado de ánimo."
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
    shortDesc: "Proteína vegetal en polvo para completar la alimentación y apoyar el mantenimiento y desarrollo de los músculos. Alternativa a la proteína de leche.",
    ingredients: "Proteína de guisante orgánica, Proteína de arroz orgánica, Proteína de calabaza orgánica, Proteína de sésamo orgánico, Aislado de proteína de soya, Proteína de girasol, Proteína de almendras, Cacao orgánico, Saborizante natural a chocolate, Sal marina, Mezcla de enzimas (Bromelina, Papaina, Proteasa), Aceite de coco orgánico, Stevia orgánica, Goma xantana, Lecitina de girasol, Ácido málico.",
    serving: "1 cucharada (30 g) en 360 ml de agua",
    timing: "Antes y/o después del entrenamiento",
    intakeInstructions: "Mezclar 1 cucharada (30 g) en 360 ml de agua y licuar. Consumir antes y/o después del entrenamiento.",
    benefits: [
      "Apoya el cuidado de los músculos con proteínas de guisante, arroz, calabaza, sésamo, soya, girasol y almendras. La variedad de fuentes complementa el aporte de aminoácidos.",
      "Bromelina, papaína y proteasa ayudan a descomponer proteínas. El aceite de coco añade grasa y energía al conjunto.",
      "Cacao, sabor natural a chocolate, sal marina, stevia y ácido málico ajustan el sabor. Goma xantana y lecitina de girasol facilitan textura y mezcla."
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
    shortDesc: "Proteína de suero en polvo con L-carnitina para completar el consumo de proteína y acompañar la recuperación después de entrenar.",
    ingredients: "Aislado de Proteína de Suero de leche Ionizada y Micro-filtrada, Péptidos de bajo peso molecular y Parcialmente Hidrolizados de Suero de Leche y Soya. L-Carnitina, Valina, Lisina, Iso-Leucina, Cloruro de Sodio, Sabor Natural y Artificial a Vainilla, Goma Xantana, Enzimas (Proteasa y Peptidasa), Sucralosa.",
    serving: "1-2 medidas (30 g cada una) en 360 ml de agua",
    timing: "Post-entreno o entre comidas",
    intakeInstructions: "Mezclar de 1 a 2 medidas (30 g cada una) en 360 ml de tu bebida favorita. Agitar hasta disolver.",
    benefits: [
      "Apoya el cuidado y recuperación de los músculos con aislado de suero y péptidos de suero y soya. Valina, lisina e isoleucina complementan el aporte de aminoácidos.",
      "Proteasa y peptidasa descomponen proteínas. L-carnitina participa en el uso de grasas como energía.",
      "Cloruro de sodio aporta sal. Sabores natural y artificial a vainilla y sucralosa dan sabor, y goma xantana mejora la textura de la bebida."
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
    benefitSummary: "Plantas y vitamina B12 como complemento de la alimentación",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SukunaiKirosMax1-1.webp",
    shortDesc: "Mezcla de plantas y vitamina B12 para acompañar el bienestar digestivo y complementar la alimentación.",
    ingredients: "Semilla de Linaza (Linum usitatissimum), Raíz de Lima (Citrus x aurantiifolia), Flor y hoja de Malva (Malva sylvestris), Mango Africano (Irvingia gabonensis), Lecitina de Soya, Polvo de fruto de Piña (Ananas comosus), Polvo de fruto de Papaya (Carica papaya), Cianocobalamina (Vitamina B12), Carbonato de Calcio, Estearato de Magnesio, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día con un vaso de agua. No exceder la porción indicada.",
    benefits: [
      "Acompaña el bienestar intestinal con linaza y malva. Piña y papaya añaden componentes de fruta, mientras raíz de lima, mango africano y lecitina de soya completan la mezcla vegetal.",
      "La cianocobalamina o vitamina B12 complementa funcionamiento de los nervios y formación de glóbulos rojos. El carbonato de calcio añade una fuente mineral.",
      "Estearato de magnesio y dióxido de silicio ayudan a preparar el producto."
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
    shortDesc: "Linaza con frutas y nopal en polvo para complementar el consumo de fibra y apoyar la regularidad intestinal.",
    ingredients: "Piña (Ananas comosus), Linaza (Linum usitatissimum) - Linaza Canadiense, Toronja (Citrus paradisi), Naranja (Citrus sinensis), Nopal (Opuntia ficus-indica).",
    serving: "2 cucharadas soperas (7.8 g) antes de cada comida",
    timing: "Antes de cada comida (3 veces al día)",
    intakeInstructions: "Mezclar 2 cucharadas soperas (7.8 g) con agua, jugo o añadir a preparaciones. Tomar 3 veces al día antes de las comidas.",
    benefits: [
      "Complementa el bienestar intestinal con linaza canadiense y nopal como fuentes vegetales de fibra. Piña, toronja y naranja aportan componentes de fruta al conjunto."
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
    benefitSummary: "Uso tradicional para el cuidado del azúcar y bienestar digestivo",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/WEREKE.webp",
    shortDesc: "Mezcla de plantas de la herbolaria mexicana cuyo ingrediente principal, el wereke, tiene uso tradicional relacionado con el cuidado del azúcar. Incluye nopal, tamarindo y manzanilla para acompañar el bienestar digestivo, junto con otras raíces y cortezas de la fórmula. El wereke da a esta mezcla su enfoque tradicional para el cuidado del azúcar, mientras que sus acompañantes complementan el bienestar del estómago y el intestino.",
    ingredients: "Wereke (Maximowiczia sonorae) - Raíz, Gatuña (Guaiacum sp.) - Planta, Guayacán amarillo (Guaiacum coulteri) - Corteza, Tamarindo (Tamarindus indica) - Fruto, Nopal (Opuntia ficus-indica) - Penca, Raíz de Zacate de perro (Cynodon dactylon) - Raíz, Raíz de Coanacaxtle - Raíz, Manzanilla (Matricaria chamomilla) - Flor.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día, después de los alimentos.",
    benefits: [
      "Cuidado del azúcar: el wereke se usa tradicionalmente para acompañar el cuidado de la glucosa. Gatuña, guayacán amarillo y raíz de zacate de perro completan la mezcla de plantas.",
      "Bienestar digestivo: tamarindo, nopal y manzanilla acompañan la comodidad del estómago y el intestino.",
      "La mezcla también contiene raíz de coanacaxtle."
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
    shortDesc: "Aceite de orégano con aceite de oliva en gotas para acompañar el bienestar digestivo tradicional.",
    ingredients: "Aceite de orégano (Lippia graveolens) 100% natural, estandarizado al 80% de carvacrol, aceite de oliva.",
    serving: "Adultos: 4 a 12 gotas, 2 veces al día. Niños >6 años: 1 a 2 gotas, 1-2 veces al día. Niños 2-6 años: 1 gota al día.",
    timing: "Con alimentos",
    intakeInstructions: "Diluir las gotas en agua, jugo o leche. No usar en menores de 2 años.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con aceite de orégano y su carvacrol. El aceite de oliva sirve como base de aceite para diluirlo y distribuirlo."
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
    shortDesc: "Vitamina B12 en pastillas para apoyar el funcionamiento de los nervios y la formación de la sangre, especialmente cuando falta esta vitamina.",
    ingredients: "Cianocobalamina, Metilcobalamina y Dibencozida (Vitaminas B12). Fructosa, celulosa, ácido cítrico, estearato de magnesio (fuente vegetal), sabor a fresa natural y lecitina de soya.",
    serving: "1 pastilla al día",
    timing: "Cualquier momento del día",
    intakeInstructions: "Masticar la pastilla o disolverla completamente en la boca (sublingual o debajo de la lengua) hasta que se deshaga. No tragar entera.",
    benefits: [
      "Apoya funcionamiento de los nervios y formación de glóbulos rojos con tres formas de vitamina B12: cianocobalamina, metilcobalamina y dibencozida.",
      "Fructosa y sabor natural a fresa dan sabor. Celulosa, estearato de magnesio y lecitina de soya dan consistencia y ayudan a preparar el producto, mientras ácido cítrico ajusta la preparación."
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
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CARSYLGREENJARABE.webp",
    shortDesc: "Jarabe de boldo, cardo mariano y otras plantas de uso tradicional para acompañar el bienestar después de comer.",
    ingredients: "Boldo (Peumus boldus), Cardo Mariano (Silybum marianum), Cusura (Quassia amara), Diente de León (Taraxacum officinale), Anagirida (Styphnolobium), Marrubio (Marrubium vulgare).",
    serving: "3 ml (una cucharadita) al día",
    timing: "Preferentemente antes de las comidas principales",
    intakeInstructions: "Agitar bien antes de usar. Administrar directamente o diluido en un poco de agua. Tomar 3 ml (una cucharadita) al día, preferentemente antes de las comidas principales.",
    benefits: [
      "Acompaña el bienestar del estómago con boldo, cusura y diente de león de uso tradicional. Cardo mariano, anagirida y marrubio completan la mezcla de plantas."
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
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3K2.avif",
    shortDesc: "Vitaminas D3 y K2 para ayudar a absorber el calcio y mantener los huesos. La vitamina D también apoya los músculos y las defensas.",
    ingredients: "Vitamina D3 (Colecalciferol) 25 mcg, Vitamina K2 (Menaquinona-4) 45 mcg, Harina de Arroz, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida que contenga grasas para una óptima absorción. Solo para adultos.",
    benefits: [
      "Apoya el cuidado de los huesos con vitamina D3 para absorción de calcio y vitamina K2 como menaquinona-4 para funcionamiento de proteínas del hueso.",
      "Harina de arroz da volumen, hipromelosa forma la cápsula, dióxido de silicio ayuda a preparar el producto y palmitato de ascorbilo ayuda a conservar la preparación."
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
    benefitSummary: "Nutrición para las células que recubren el intestino",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/L-GLUTAMINE-NAG.jpg",
    shortDesc: "Glutamina con zinc, fibra y otros ingredientes para complementar la nutrición de las células que recubren el intestino. Polvo sabor frambuesa-limón.",
    ingredients: "Inulina de agave (2.58 g), L-Glutamina (2 g), N-Acetil-D-Glucosamina (NAG) (800 mg, origen no crustáceo), Aloe vera en polvo (100 mg), Zinc L-carnosina (100 mg, aporta 21 mg de zinc elemental), Vitamina D3 (10 µg), Sabor frambuesa-limón, Ácido cítrico, Glucósidos de esteviol.",
    serving: "1 scoop (6 g) al día",
    timing: "Con alimentos, preferentemente con la comida principal",
    intakeInstructions: "Mezclar 1 scoop (6 g) en 250 ml de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente con alimentos.",
    benefits: [
      "Complementa el cuidado del intestino con L-glutamina y N-acetil-D-glucosamina NAG. Zinc L-carnosina acompaña el cuidado de la capa que protege el estómago.",
      "Inulina de agave aporta fibra, aloe vera se usa para el bienestar digestivo y vitamina D3 apoya las defensas.",
      "Sabor frambuesa-limón, ácido cítrico y glucósidos de esteviol dan sabor y dulzor a la bebida."
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
    shortDesc: "Citrato de magnesio en cápsulas para apoyar los músculos, los nervios y el aprovechamiento de la energía de los alimentos.",
    ingredients: "Citrato de magnesio (750 mg por porción de 3 cápsulas), excipientes c.b.p. (celulosa microcristalina, estearato de magnesio, dióxido de silicio).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos para mejorar la absorción. No exceder la dosis diaria recomendada.",
    benefits: [
      "Ayuda al funcionamiento de músculos y nervios y a obtener energía con magnesio del citrato.",
      "Celulosa microcristalina, estearato de magnesio y dióxido de silicio ayudan a preparar las cápsulas."
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
    benefitSummary: "Magnesio para músculos, nervios y rutina de relajación",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/GLICINATO1.webp",
    shortDesc: "Aporta magnesio en forma de glicinato para ayudar al funcionamiento de músculos y nervios. Puede incorporarse a una rutina de relajación y preparación para el descanso, manteniendo su función principal como complemento del aporte de magnesio. Incluye tallo de brócoli y los ingredientes necesarios para preparar la cápsula. Se distingue del Magnesium PM porque este último combina magnesio con otros ingredientes destinados específicamente a acompañar la calma y la rutina nocturna.",
    researchNote: {
      "focus": "Músculos y nervios dentro de una rutina de relajación",
      "text": "Funcionamiento muscular y nervioso dentro de una rutina de relajación: el magnesio del glicinato complementa el aporte de este mineral y acompaña el cuidado de músculos y nervios. En adultos con dificultades para descansar, un ensayo con bisglicinato de magnesio observó mejoras en algunos indicadores de sueño. Este interés se integra como acompañamiento de una rutina de preparación para el descanso. El tallo de brócoli completa la mezcla vegetal, mientras que estearato de magnesio, excipientes y cápsula vegetal permiten preparar y contener la fórmula.",
      "sources": [
        {
          "title": "Bisglicinato de magnesio: ensayo en adultos con dificultades para descansar",
          "url": "https://pubmed.ncbi.nlm.nih.gov/40918053/"
        },
        {
          "title": "NIH ODS: funciones del magnesio y lectura del aporte elemental",
          "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
        }
      ]
    },
    ingredients: "Glicinato de magnesio (250 mg), Estearato de magnesio (150 mg), Tallo de Brócoli en polvo (Brassica oleracea var. Italica) (100 mg), excipientes c.b.p. 500 mg (cápsula vegetal).",
    serving: "1 cápsula al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche acompañada de un vaso de agua. No exceder la dosis diaria recomendada.",
    benefits: [
      "Funcionamiento muscular y nervioso: el magnesio del glicinato ayuda a músculos y nervios a funcionar bien y complementa el aporte de este mineral.",
      "Rutina de relajación: puede incorporarse a la preparación para el descanso. En un ensayo con bisglicinato que aportaba 250 mg de magnesio elemental al día durante cuatro semanas se observaron mejoras en algunos indicadores de sueño.",
      "El tallo de brócoli completa la mezcla vegetal. Estearato de magnesio y excipientes ayudan a preparar el producto, y la cápsula vegetal contiene la fórmula."
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
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/OMEGA-KIDS.avif",
    shortDesc: "Omega 3 de pescado con vitamina E en gomitas para complementar la alimentación infantil y el cuidado del cerebro y los ojos. Para la edad indicada en la etiqueta.",
    ingredients: "Aceite de Salmón Noruego, Vitamina E, Azúcar, Glucosa, Grenetina, Agua, Ácido Cítrico, Saborizante. Contiene derivados de pescado.",
    serving: "4 gomitas al día (8 g)",
    timing: "Después de los alimentos, preferentemente por la mañana",
    intakeInstructions: "Ingerir 4 gomitas una vez al día, después de los alimentos, de preferencia por la mañana. Masticar bien antes de tragar. Recomendado a partir de 6 años.",
    benefits: [
      "Complementa la alimentación infantil con grasas omega del aceite de salmón noruego y vitamina E para cuidar las células.",
      "Azúcar y glucosa aportan dulzor y carbohidratos. Grenetina y agua dan forma a la gomita, y ácido cítrico y saborizante ajustan el sabor."
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
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3-K2-NOW.avif",
    shortDesc: "Vitamina K2 con alfalfa para complementar la alimentación y ayudar al mantenimiento de los huesos.",
    ingredients: "Vitamina K2 (Menaquinona-4 / MK-4) 100 mcg, Polvo de Alfalfa (Partes aéreas) 250 mg, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Harina de Arroz, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida con grasas (como aguacate, frutos secos o aceites) para mejorar la absorción. Solo para adultos.",
    benefits: [
      "Apoya el mantenimiento de huesos con vitamina K2 como MK-4, que participa en el funcionamiento de proteínas óseas. El polvo de alfalfa completa la mezcla vegetal.",
      "Hipromelosa forma la cápsula, harina de arroz da volumen, dióxido de silicio ayuda a preparar el producto y palmitato de ascorbilo ayuda a conservar la preparación."
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
    benefitSummary: "Fórmula pendiente de revisión de seguridad",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/tonico-indio-tzapotlatena-1l.webp",
    shortDesc: "Tónico de plantas cuya ficha declara Aristolochia. La fórmula requiere revisión de seguridad antes de recomendar su consumo.",
    ingredients: "Extractos hidroalcohólicos de: Aristolochia sp., Calea zacatechichi, Cymbia scolymus, Juliana adstringens, Medicago sativa, Peumus boldus, Selaginella lepidophylla, Senecio vulneraria, Turnera diffusa.",
    serving: "10 ml (1 copita) al día",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 1 copita (10 ml), equivalente a 2 cucharadas soperas, antes de los alimentos.",
    benefits: [
      "Contiene Aristolochia sp., Calea zacatechichi, Cymbia scolymus, Juliana adstringens, Medicago sativa, Peumus boldus, Selaginella lepidophylla, Senecio vulneraria y Turnera diffusa.",
      "Consultar a un profesional antes de usar esta mezcla de plantas en alcohol."
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
    shortDesc: "Cacao puro en polvo para dar sabor a bebidas y recetas, con fibra y compuestos propios del cacao que ayudan al cuidado de las células.",
    ingredients: "100% Cacao en polvo (Criollo de Tabasco, México).",
    serving: "1 cucharada (5 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Mezclar 1 cucharada sopera (5 g) en leche, agua, bebidas vegetales (batidos/smoothies), o utilizar para preparaciones de repostería.",
    benefits: [
      "Aporta sabor y componentes vegetales del cacao criollo de Tabasco a bebidas y recetas. Su fibra y antioxidantes complementan una alimentación variada según la porción utilizada."
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
    shortDesc: "Sen con malva para facilitar la evacuación en casos de estreñimiento ocasional.",
    ingredients: "Hoja de sen (Cassia angustifolia), Malva (Malva sylvestris), Lactosa USP, Estearato de Magnesio.",
    serving: "2 capletas al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 2 capletas al día, preferentemente por la noche, con un vaso lleno de agua. No exceder la dosis diaria recomendada.",
    benefits: [
      "Ayuda a evacuar en casos de estreñimiento ocasional con hoja de sen. Malva acompaña el bienestar intestinal.",
      "Lactosa USP y estearato de magnesio ayudan a dar forma a la capleta."
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
    benefitSummary: "Vitaminas para complementar la alimentación infantil",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACTIKROLL.jpg",
    shortDesc: "Vitaminas B con jalea real en jarabe para complementar la alimentación infantil y apoyar el aprovechamiento de la energía de los alimentos.",
    ingredients: "Agua Purificada, Sacarosa, Fructosa, Glicerofosfato de Sodio, Jalea Real, Ácido Glutámico, Nicotinamida (B3), Pantotenato de Calcio (B5), Clorhidrato de piridoxina (B6), Riboflavina 5 fosfato (B2), Clorhidrato de tiamina (B1), Ácido Fólico, Cianocobalamina (B12), Propilenglicol, Ácido Cítrico, Metilparabeno sódico, Propilparabeno sódico, Sabor crema vainilla y Sabor tutifruti.",
    serving: "Niños 1-6 años: ½ cucharadita (2.5 ml) 3 veces al día. Niños >6 años: 1 cucharadita (5.0 ml) 3 veces al día.",
    timing: "Con alimentos",
    intakeInstructions: "Agítese antes de usarse. Utilizar el vaso dosificador incluido. Niños de 1 a 6 años: ½ cucharadita (2.5 ml), 3 veces al día. Niños mayores de 6 años: 1 cucharadita (5.0 ml), 3 veces al día.",
    benefits: [
      "Complementa la alimentación infantil con vitaminas B1, B2, B3, B5 y B6 para obtener energía. B12 y ácido fólico ayudan a formar glóbulos rojos.",
      "Ácido glutámico y jalea real completan el aporte alimentario. El glicerofosfato de sodio añade sales a la mezcla.",
      "Sacarosa y fructosa dan dulzor. Agua purificada y propilenglicol mantienen los ingredientes mezclados. Ácido cítrico ajusta la acidez.",
      "Metilparabeno sódico y propilparabeno sódico conservan la preparación. Los sabores crema vainilla y tutifruti dan sabor."
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
    benefitSummary: "Nopal como complemento de la alimentación",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/NOPAL-PROSA.avif",
    shortDesc: "Nopal en cápsulas para complementar la alimentación e incorporar este ingrediente de uso tradicional digestivo.",
    ingredients: "Nopal en polvo (Opuntia ficus) 100% puro. Sin excipientes de relleno.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
      "Complementa el aporte vegetal de la alimentación con nopal en polvo, fuente natural de fibra cuya cantidad depende de la porción."
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
    shortDesc: "Sábila y nopal en cápsulas para acompañar el bienestar digestivo tradicional.",
    ingredients: "Hoja de Sábila en polvo (Aloe vera, L.), Penca de Nopal en polvo (Opuntia ficus indica).",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
      "Acompaña el bienestar digestivo con nopal como fuente vegetal de fibra y sábila de uso tradicional."
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
    shortDesc: "Ajo en cápsulas para complementar una alimentación orientada al cuidado del corazón, sin añadir su sabor a las comidas.",
    ingredients: "Bulbo de Ajo deshidratado en polvo (Allium sativum, L.) 100% puro.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos. En personas con sensibilidad gástrica, acompañar con alimentos sólidos.",
    benefits: [
      "Complementa una alimentación orientada al cuidado del corazón con ajo deshidratado en polvo y sus compuestos vegetales."
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
    shortDesc: "Vitaminas B con magnesio para ayudar a obtener energía de los alimentos y apoyar los músculos y los nervios.",
    ingredients: "Vitamina B1 (Tiamina) 324 µg, Vitamina B2 (Riboflavina) 500 µg, Vitamina B6 (Piridoxina) 412 µg, Vitamina B12 (Cobalamina) 1.3 µg, Magnesio 40 mg, Celulosa Microcristalina.",
    serving: "1 tableta al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
      "Ayuda a obtener energía y al funcionamiento de los nervios con vitaminas B1, B2 y B6. B12 ayuda a formar glóbulos rojos y magnesio al funcionamiento de músculos y nervios.",
      "Celulosa microcristalina da consistencia a la preparación."
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
    shortDesc: "Crema facial con goji, aceites, sábila y ácido hialurónico para hidratar y suavizar la piel. Su ficha declara FPS 45.",
    ingredients: "Bayas de Goji, Aceite de Argán, Extracto de Aloe Vera, Extracto de Avena, Extracto de Aguacate, Ácido Hialurónico, Colágeno, Filtros Solares (Benzofenona 3, Octil Metoxi cinamato, Octil Salicilato), base cosmética c.b.p.",
    serving: "Aplicación tópica según necesidad",
    timing: "Mañana y noche",
    intakeInstructions: "Aplicar diariamente por la mañana y por la noche sobre el rostro y el cuello, siempre sobre la piel limpia y seca. Untar con suaves masajes circulares para favorecer la absorción. Uso externo exclusivamente.",
    benefits: [
      "Ayuda a mantener la piel hidratada y suave con aceites de argán y aguacate, aloe vera y avena. Ácido hialurónico retiene humedad y colágeno acondiciona la piel.",
      "Goji aporta ingredientes vegetales y la base cosmética facilita la aplicación. Benzofenona 3, octil metoxicinamato y octil salicilato son filtros solares. Consultar el FPS indicado en la etiqueta."
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
    benefitSummary: "Aceite de oliva en perlas para complementar el aporte de grasas",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACEITA-DE-OLIVA.webp",
    shortDesc: "Presentación en perlas para complementar el aporte de grasas de la alimentación. El aceite de oliva contiene grasas que el cuerpo utiliza como fuente de energía y como parte de sus células; la gelatina permite contenerlo en una cápsula blanda. Para desarrollar su enfoque cardiovascular o cerebral debemos revisar qué tipo de aceite contiene y cuánto aporta cada perla. La explicación debe distinguir esta cantidad del aceite utilizado habitualmente en la alimentación.",
    ingredients: "Aceite de Oliva (Olea europaea) 100% puro. Cápsula blanda de gelatina.",
    serving: "1 perla al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 perla de Aceite de Oliva al día. No exceder la porción máxima recomendada.",
    benefits: [
      "Aporte de grasas: el aceite de oliva complementa las grasas de la alimentación, que el cuerpo utiliza para obtener energía y mantener sus células.",
      "La gelatina forma la cápsula blanda para contener el aceite."
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
    shortDesc: "Levadura de cerveza en polvo para complementar la alimentación con proteína, fibra y vitaminas B.",
    ingredients: "Levadura de Cerveza desecada y desamargada 100% pura (Saccharomyces cerevisiae). Puede contener Soya.",
    serving: "1 cucharada (8 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 cucharada (8 g) a su líquido favorito (agua, jugo, leche, té), o espolvorear sobre sopas, frutas o verduras.",
    benefits: [
      "Complementa la alimentación con levadura de cerveza desecada y desamargada. Puede contener soya."
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
    shortDesc: "Fibra de achicoria para alimentar bacterias beneficiosas del intestino y apoyar la regularidad intestinal. Se mezcla con alimentos y bebidas.",
    ingredients: "Oligofructosa, Fructanos de Achicoria.",
    serving: "1 a 2 cucharadas (7.5 g a 15 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 o 2 cucharadas (7.5 g a 15 g) de Prebian a bebidas o alimentos. No usar en bebidas carbonatadas. Sugerencias: té, café, agua natural, fruta, cereal, smoothies, repostería y jugos.",
    benefits: [
      "Acompaña el cuidado intestinal con oligofructosa y fructanos de achicoria, fibras que sirven de alimento a bacterias intestinales."
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
    shortDesc: "Jarabe con propóleo y plantas como gordolobo, eucalipto y menta, de uso tradicional para el confort de la garganta.",
    ingredients: "Agua, Jarabe de Frutas (Fructuosa), Glucosa, Propóleo, Sauco, Gordolobo (Hoja, Flor, Raíz), Cebolla Morada, Equinácea, Limón Deshidratado, Ajo, Eucalipto, Bugambilia Flor, Malva Silvestre, Tomillo Semilla, Romero y Menta.",
    serving: "Adultos: 1 cucharada sopera (10 ml). Niños: 1 cucharadita cafetera (5 ml).",
    timing: "Cualquier momento del día",
    intakeInstructions: "Adultos: Tomar 1 cucharada sopera (10 ml) como suplemento alimenticio. Niños: Tomar 1 cucharadita cafetera (5 ml). Puede tomarse con té de preferencia.",
    benefits: [
      "Acompaña la comodidad de la garganta con propóleo, saúco, gordolobo y malva silvestre. Cebolla morada, ajo, bugambilia y tomillo completan el cuidado de la garganta.",
      "Eucalipto, romero y menta añaden sensación aromática de frescura, y limón deshidratado complementa el sabor.",
      "Agua, jarabe de frutas con fructosa y glucosa forman el vehículo dulce y aportan carbohidratos."
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
    shortDesc: "Hongos chaga y reishi con L-carnitina y probióticos para complementar la alimentación y acompañar el bienestar intestinal.",
    ingredients: "Hongo Chaga (Inonotus obliquus), Hongo Reishi (Ganoderma lucidum), L-Carnitina, Probióticos (mezcla de cepas), Celulosa microcristalina, Estearato de magnesio, Dióxido de silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua. No exceder la porción indicada.",
    benefits: [
      "Complementa la alimentación con hongos Chaga y Reishi. L-carnitina ayuda al cuerpo a usar grasas para obtener energía y los probióticos acompañan el cuidado intestinal.",
      "Celulosa microcristalina, estearato de magnesio y dióxido de silicio facilitan la preparación de las cápsulas."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/FORTI-OSITOS.webp",
    shortDesc: "Vitaminas y minerales en gomitas para complementar la alimentación infantil y apoyar las defensas, los huesos y el aprovechamiento de la energía.",
    ingredients: "Vitamina C (ácido ascórbico), Vitamina A (retinol), Vitamina D (colecalciferol), Zinc, Vitaminas B1, B2, B3, B6, B12, Ácido Fólico, Calcio, L-Lisina, Omega 3, Sucralosa, gelificantes, sabores (fresa y piña), colorantes.",
    serving: "2 gomitas al día",
    timing: "Preferentemente con el desayuno o el almuerzo",
    intakeInstructions: "Masticar completamente cada gomita antes de tragar. No tragar enteras para evitar riesgos de atragantamiento en infantes.",
    benefits: [
      "Complementa la alimentación infantil con vitaminas C, A y D y zinc para las defensas. Calcio y vitamina D ayudan a cuidar los huesos.",
      "Vitaminas B1, B2, B3, B6, B12 y ácido fólico ayudan a aprovechar los alimentos y a formar glóbulos rojos. L-lisina aporta material para formar proteínas y omega 3 grasas para las células.",
      "Sucralosa, sabores fresa y piña, gelificantes y colorantes dan dulzor, sabor y forma a las gomitas."
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
    shortDesc: "Vitaminas y minerales en gomitas para complementar la alimentación infantil y apoyar los nervios, los huesos y las defensas.",
    ingredients: "Ácido Glutámico, L-Lisina, Vitaminas B1, B2, B3, B6, B12, Ácido Fólico, Vitamina C, Zinc, Calcio, Omega 3, Sucralosa, gelificantes, sabores (fresa y zarzamora), colorantes.",
    serving: "2 gomitas al día",
    timing: "Preferentemente con el desayuno o el almuerzo",
    intakeInstructions: "Masticar completamente cada gomita antes de tragar. No tragar enteras para evitar riesgos de atragantamiento en infantes.",
    benefits: [
      "Complementa la alimentación infantil con vitaminas B1, B2, B3, B6, B12 y ácido fólico para aprovechar los alimentos y formar glóbulos rojos. Ácido glutámico y L-lisina completan el aporte alimentario.",
      "Vitamina C y zinc apoyan las defensas, calcio ayuda a los huesos y omega 3 aporta grasas para las células.",
      "Sucralosa, gelificantes, sabores fresa y zarzamora y colorantes dan dulzor, textura y sabor."
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
    shortDesc: "Vitaminas con calcio en una presentación líquida de sabor frutal para complementar la alimentación infantil y apoyar los huesos.",
    ingredients: "Calcio (de gluconato y lactato de calcio), Vitamina D (colecalciferol), Vitamina A (palmitato de retinilo), Vitamina C (ácido ascórbico), Vitamina E (acetato de d-alfa tocoferol), Vitaminas B1, B2, B3, B6, B12, Extractos acuosos de zanahoria, cilantro, berro, menta, espinaca, manzanilla, Jugos de frutas concentrados (algarroba, albaricoque, piña, uva, maracuyá, manzana, limón), Goma guar, Goma xantana.",
    serving: "10 ml (1 vasito dosificador) al día",
    timing: "Preferentemente antes del desayuno o de una comida principal",
    intakeInstructions: "Agitar vigorosamente antes de usar. Utilizar el vasito dosificador incluido. No consumir directamente de la botella. Refrigerar después de abrir y consumir en 4 semanas.",
    benefits: [
      "Complementa la alimentación infantil con calcio del gluconato y lactato y vitamina D para huesos y músculos. Vitamina A cuida la piel y vitaminas C y E aportan antioxidantes.",
      "Vitaminas B1, B2, B3, B6 y B12 ayudan a aprovechar los alimentos. Zanahoria, cilantro, berro, menta, espinaca y manzanilla completan el aporte vegetal.",
      "Jugos de algarroba, albaricoque, piña, uva, maracuyá, manzana y limón dan sabor. Goma guar y goma xantana dan consistencia a la bebida."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/FLORADIX-FRUITY.webp",
    shortDesc: "Hierro con vitaminas en una presentación líquida para apoyar la formación de la sangre y reducir el cansancio cuando falta hierro.",
    ingredients: "Hierro (de gluconato ferroso) 7.5 mg, Vitamina C (ácido ascórbico), Vitaminas B1, B2, B6, B12, Extracto acuoso de levadura, Extractos de zanahoria, espinaca, grama, alga marina, hibisco, Frutos de alcaravea (Carum carvi), Concentrados de jugos de fruta (pera, uva, grosella, zarzamora, cereza, naranja, remolacha, limón, manzana), Algarroba, Miel, Extracto de germen de trigo (contiene gluten).",
    serving: "Adultos: 10 ml dos veces al día. Niños (6-12 años): 10 ml una vez al día.",
    timing: "30 minutos antes de las comidas (desayuno y comida), en ayunas",
    intakeInstructions: "Agitar vigorosamente antes de usar. Utilizar el vasito dosificador. No consumir directamente de la botella. Refrigerar después de abrir y consumir en 4 semanas.",
    benefits: [
      "Ayuda a formar glóbulos rojos y transportar oxígeno con hierro del gluconato ferroso. La vitamina C ayuda a absorber hierro y la B12 a formar glóbulos rojos.",
      "Vitaminas B1, B2 y B6 ayudan a aprovechar los alimentos. Extractos de levadura, germen de trigo, zanahoria, espinaca, grama, alga marina, hibisco y alcaravea completan la mezcla.",
      "Pera, uva, grosella, zarzamora, cereza, naranja, remolacha, limón, manzana, algarroba y miel dan sabor a la bebida."
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
    shortDesc: "Calostro bovino en polvo para complementar la alimentación; se estudia su relación con el bienestar intestinal. Se incorpora a preparaciones frías.",
    ingredients: "Calostro bovino en polvo (4000 mg por porción), estandarizado al 20% de Inmunoglobulinas G (IgG). Contiene trazas de IgA, IgM, lactoferrina, factores de crecimiento (IGF-1, IGF-2, TGF-β, EGF), polipéptidos ricos en prolina (PRPs) y oligosacáridos.",
    serving: "4 g (1 scoop, 4 medidas del dosificador) al día",
    timing: "En ayunas (30 minutos antes del desayuno) o antes de dormir",
    intakeInstructions: "Mezclar 4 g (4 scoops) en 100-150 ml de agua natural, leche de almendras o batido frío. Agitar hasta disolver. No mezclar con líquidos calientes (superiores a 45-50°C) para no desnaturalizar las inmunoglobulinas.",
    benefits: [
      "Complementa la alimentación con proteínas del calostro bovino: inmunoglobulinas IgG, IgA e IgM, lactoferrina y PRPs. Sus oligosacáridos aportan otros componentes de la leche.",
      "También contiene pequeñas cantidades de factores de crecimiento IGF-1, IGF-2, TGF-β y EGF."
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
    shortDesc: "Bebida para antes de entrenar con guaraná, vitaminas, minerales y otros ingredientes orientados a la alerta y el rendimiento físico.",
    ingredients: "L-Citrulina, Citrulina Malato, Beta Alanina, Remolacha roja en polvo, Extracto de Guaraná (Paullinia cupana), L-Tirosina, L-Teanina, Triglicéridos de Cadena Media (MCT), Vitamina B6 (piridoxina), Vitamina B12 (cianocobalamina), Vitamina C (ácido ascórbico), Calcio, Sodio, Pimienta negra en polvo, Ácido cítrico, Saborizante, Dióxido de silicio, Silicato de calcio, Sucralosa, Acesulfame K.",
    serving: "7 g (1 cucharada dosificadora) al día",
    timing: "15-30 minutos antes del entrenamiento",
    intakeInstructions: "Mezclar 7 g (1 cucharada) en 300 ml de agua fría. Agitar vigorosamente en shaker. Consumir 15-30 minutos antes del entrenamiento. No consumir entre 4 y 6 horas antes de dormir.",
    benefits: [
      "Complementa la alimentación para entrenar con L-citrulina, citrulina malato, remolacha y beta alanina.",
      "Guaraná ayuda a estar más despierto. L-tirosina y L-teanina acompañan la concentración. MCT y vitaminas B6 y B12 complementan el aporte para la actividad física.",
      "Calcio y sodio aportan minerales y vitamina C antioxidantes. La pimienta negra ayuda al aprovechamiento de algunos ingredientes.",
      "Ácido cítrico, saborizante, sucralosa y acesulfame K dan sabor y dulzor. Dióxido de silicio y silicato de calcio evitan que el polvo se apelmace."
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
    benefitSummary: "Tres plantas de uso tradicional digestivo",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/MORINGA-ROMERO-HOJAS-DE-GUAYABA.jpg",
    shortDesc: "Moringa, romero y hoja de guayaba en cápsulas para acompañar el bienestar digestivo tradicional y complementar la alimentación con ingredientes vegetales.",
    ingredients: "Hojas de Moringa (Moringa oleifera) en polvo, Hojas de Romero (Salvia rosmarinus) en polvo, Hojas de Guayaba (Psidium guajava L.) en polvo, Cápsula vegetal.",
    serving: "1 cápsula al día",
    timing: "15-30 minutos antes o durante la comida más pesada del día (rica en carbohidratos)",
    intakeInstructions: "Ingerir 1 cápsula con un vaso de agua natural (200 ml). No exceder la dosis recomendada.",
    benefits: [
      "Acompaña el bienestar digestivo tradicional con moringa, romero y hoja de guayaba. Sus compuestos vegetales se reúnen en una cápsula vegetal que contiene la mezcla."
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
    shortDesc: "Yumel en gotas, una planta usada tradicionalmente para acompañar el bienestar digestivo después de comidas con grasa.",
    ingredients: "Extracto líquido de corteza de Guatteria gaumeri (Yumel), Vehículo de extracción (base hidroalcohólica o glicerinada).",
    serving: "20 gotas, 3 veces al día (máximo 60 gotas diarias)",
    timing: "15-20 minutos antes de los alimentos (desayuno, comida y cena)",
    intakeInstructions: "Diluir 20 gotas en medio vaso de agua purificada (100-150 ml). No consumir sublingual puro. No exceder la dosis sugerida.",
    benefits: [
      "Extracto líquido de yumel para uso tradicional digestivo. La base de alcohol o glicerina permite preparar y diluir el extracto."
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
    shortDesc: "Perlas de menta y propóleo para dar frescura a la boca y acompañar el confort de la garganta.",
    ingredients: "Extracto de Propóleo, Extracto de Menta (Mentha sp.), Sacarosa (perlas de azúcar).",
    serving: "1 porción (3 g, aproximadamente 30 perlas), 1-4 veces al día",
    timing: "A demanda, ante pérdida de confort faríngeo",
    intakeInstructions: "Colocar las perlas en la boca y permitir que se disuelvan lentamente con la saliva. No masticar ni tragar enteras.",
    benefits: [
      "Acompaña la frescura y la comodidad de la garganta con menta y propóleo de uso tradicional. La sacarosa forma las perlas y aporta dulzor y carbohidratos."
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
    benefitSummary: "Pasiflora de uso tradicional para calma y descanso",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PASIFLORINA.jpg",
    shortDesc: "Pasiflora en perlas para acompañar la tranquilidad ante el estrés cotidiano y la preparación para dormir, según su uso tradicional. Su enfoque se concentra en la relajación con un solo ingrediente vegetal activo. La sacarosa funciona como base de las perlas y aporta dulzor; el efecto relajante se atribuye al uso tradicional de la pasiflora. Cada porción contiene 3 g de azúcar.",
    researchNote: {
      "focus": "Pasiflora de uso tradicional para calma y descanso",
      "sources": [
        {
          "title": "EMA: pasiflora de uso tradicional para estrés leve y descanso",
          "url": "https://www.ema.europa.eu/en/medicines/herbal/passiflorae-herba"
        },
        {
          "title": "NCCIH: pasiflora, sueño y precauciones de uso",
          "url": "https://www.nccih.nih.gov/health/passionflower"
        }
      ]
    },
    ingredients: "Extracto de Pasiflora (Passiflora incarnata), Sacarosa (perlas de azúcar).",
    serving: "1 porción (3 g, aproximadamente 30 perlas), 1-3 veces al día",
    timing: "30-45 minutos antes de acostarse (para sueño) o en el momento de mayor exigencia mental (para estrés)",
    intakeInstructions: "Colocar las perlas bajo la lengua y dejar que se disuelvan con la saliva (vía sublingual). Alternativamente, masticar o tragar con medio vaso de agua.",
    benefits: [
      "Calma ante el estrés cotidiano: la pasiflora se utiliza tradicionalmente para aliviar síntomas leves de tensión y favorecer la relajación.",
      "Preparación para dormir: el uso tradicional de la pasiflora también acompaña la rutina de descanso cuando cuesta relajarse al acostarse."
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
    shortDesc: "Vitaminas B y otros nutrientes en jarabe para ayudar a obtener energía de los alimentos y apoyar el funcionamiento de los nervios.",
    ingredients: "Vitamina B1 (tiamina), Vitamina B6 (piridoxina), Vitamina B12 (cianocobalamina), Ácido Pantoténico (B5), Ácido Glutámico, Vitamina C, Vitamina E, Vitamina D, Extracto de hoja de espinaca, Extracto de semilla de maíz, Agua bidestilada.",
    serving: "Adultos: 5 ml (1 cucharadita) 4 veces al día (total 20 ml). Niños (4-12 años): 5 ml 2 veces al día (total 10 ml).",
    timing: "Espaciar las tomas; al menos dos de ellas deben coincidir con alimentos principales (desayuno y comida)",
    intakeInstructions: "Agitar bien antes de usar. Utilizar la cucharita dosificadora.",
    benefits: [
      "Ayuda a obtener energía de los alimentos y al funcionamiento de los nervios con vitaminas B1, B5, B6 y B12. Ácido glutámico completa el aporte alimentario.",
      "Vitaminas C y E aportan antioxidantes y vitamina D ayuda a músculos y huesos. Espinaca y semilla de maíz completan la mezcla vegetal y agua bidestilada diluye los ingredientes."
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
    shortDesc: "Gel de uso externo con mentol, alcanfor y plantas para facilitar el masaje y dar confort en zonas con molestias musculares o articulares.",
    ingredients: "Salicilato de Metilo, Mentol, Alcanfor, Trementina, Aceites esenciales de Eucalipto y Guayacol, Extracto de Árnica (Arnica montana), Extracto de Garra del Diablo (Harpagophytum procumbens), Extracto de Castaño de Indias (Aesculus hippocastanum), Extracto de Centella Asiática, Extracto de Romero, Ajo, Cebolla, Apio, Yodo Orgánico, Clorofila, Éter, Aceite de Almendras, Vaselina, Carbomero, Liquigerm, Emulsificantes, Neutralizadores.",
    serving: "Aplicación tópica según necesidad, 2-3 veces al día",
    timing: "Mañana, mediodía y noche (o según necesidad)",
    intakeInstructions: "Aplicar la cantidad necesaria para cubrir la zona afectada y dar un masaje circular y ascendente durante 20 minutos o hasta su completa absorción. Lavar las manos exhaustivamente con agua y jabón después de cada aplicación. Uso exclusivamente tópico.",
    benefits: [
      "Acompaña el masaje y comodidad en la zona del masaje con salicilato de metilo, mentol, alcanfor y trementina. Aceites esenciales de eucalipto y guayacol y extractos de árnica y garra del diablo completan la preparación de uso tópico.",
      "Castaño de Indias, centella asiática y romero complementan el uso tradicional para cuidado de piel. Ajo, cebolla, apio, yodo orgánico y clorofila completan la mezcla.",
      "Aceite de almendras y vaselina dan suavidad. Éter sirve como disolvente, carbomero da consistencia, emulsificantes y neutralizadores estabilizan el gel y Liquigerm cumple una función de conservación."
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
    benefitSummary: "Vitalidad y bienestar durante la menopausia",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/FACTOR-WOMEN-YPENZA.webp",
    shortDesc: "Mezcla de plantas y vitaminas para acompañar el bienestar femenino, la vitalidad y algunos malestares durante la menopausia.",
    ingredients: "Isoflavonas de Soya (Glycine max), Dong Quai (Angelica sinensis), Black Cohosh (Actaea racemosa), Maca (Lepidium meyenii), Damiana de California (Turnera diffusa), Garañona (Castilleja tenuiflora), Butcher's Broom (Ruscus aculeatus), Castaño de Indias (Aesculus hippocastanum L.), Uva Roja (Vitis vinifera), Ginseng (Panax ginseng), Guaraná (Paullinia cupana), Acai (Euterpe oleracea mart), Canela (Cinnamomum zeylanicum), Semilla de Calabaza (Cucurbita pepo L.), Zarzaparrilla (Smilax aspera), Perejil (Petroselinum crispum), Vitamina B12 (cianocobalamina) 3 µg, Vitamina E (DL-Alfa Tocoferol) 5 mg, Jalea Real Liofilizada, Polen en polvo.",
    serving: "2 cápsulas al día (1400 mg)",
    timing: "Por la mañana o al mediodía, siempre acompañadas de alimentos (evitar en ayunas)",
    intakeInstructions: "Ingerir 2 cápsulas con un vaso grande de agua (mínimo 250 ml). No consumir por la noche (puede causar insomnio por Guaraná y Ginseng).",
    benefits: [
      "Puede ayudar con molestias de la menopausia con isoflavonas de soya y black cohosh. Dong quai, maca, damiana de California y garañona completan la mezcla femenina.",
      "Ginseng y guaraná se usan para la vitalidad. B12 ayuda a formar glóbulos rojos y al funcionamiento de los nervios. Vitamina E, uva roja y acai aportan antioxidantes.",
      "Butcher's broom o rusco y castaño de Indias se usan para el cuidado de la circulación. Canela, semilla de calabaza, zarzaparrilla, perejil, jalea real y polen completan la mezcla."
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
    shortDesc: "Anís, jengibre y canela en una presentación líquida de uso tradicional para el confort digestivo y durante el ciclo menstrual.",
    ingredients: "Fruto de Anís (Pimpinella anisum), Raíz de Jengibre (Zingiber officinale), Corteza de Canela (Cinnamomum ceylanicum), Agua purificada, Benzoato de Sodio (conservador), Ácido Cítrico (estabilizador).",
    serving: "15 ml (1 cucharada sopera), 1 a 3 veces al día",
    timing: "15-20 minutos antes de los alimentos, en ayunas",
    intakeInstructions: "Agitar antes de usar. Medir 15 ml con el vaso o la cuchara dosificadora del producto; no usar una cuchara doméstica. Puede tomarse puro o diluido en 200-250 ml de agua (tibia o ambiente).",
    benefits: [
      "Acompaña el bienestar del estómago y el uso tradicional durante el ciclo menstrual con anís, jengibre y canela.",
      "Agua purificada sirve de vehículo, benzoato de sodio conserva y ácido cítrico estabiliza la preparación."
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
    shortDesc: "Vitaminas, minerales y otros nutrientes en ampolletas bebibles para complementar la alimentación y apoyar la energía, los nervios y la formación de la sangre.",
    ingredients: "Ácido Glutámico 500 mg, L-Glutamina 100 mg, Lecitina de Soya 500 mg, Vitamina B1 (tiamina) 800 µg, Vitamina B2 (riboflavina) 840 µg, Vitamina B3 (niacina) 11 mg, Vitamina B6 (piridoxina) 930 µg, Ácido Fólico (B9) 380 µg, Vitamina B12 (cobalamina) 2.1 µg, Calcio 300 mg, Magnesio 248 mg, Hierro 17 mg, Zinc 10 mg, Selenio 41 µg, L-Arginina 100 mg, L-Lisina 100 mg, Omega 3, 6, 9 100 mg, Vitamina A 568 µg, Vitamina C 60 mg, Vitamina D 5.6 µg, Vitamina E 11 µg.",
    serving: "1 ampolleta (10 ml) al día",
    timing: "Por la mañana, durante o inmediatamente después del desayuno (nunca en ayunas)",
    intakeInstructions: "Agitar vigorosamente antes de abrir. Diluir el contenido en 100-150 ml de agua o jugo de cítricos. No consumir por la tarde/noche.",
    benefits: [
      "Ayuda a obtener energía y al funcionamiento de los nervios con vitaminas B1, B2, B3 y B6. Ácido fólico B9, B12 e hierro ayudan a formar glóbulos rojos.",
      "Ácido glutámico, L-glutamina, L-arginina y L-lisina aportan materiales para formar proteínas. Lecitina de soya y omegas 3, 6 y 9 aportan grasas para las células.",
      "Calcio, magnesio y vitamina D ayudan a músculos y huesos. Vitaminas A y C y zinc apoyan las defensas y vitamina E y selenio aportan antioxidantes."
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
    benefitSummary: "Calcio para huesos y cuidado intestinal",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/11/BARIA-SURE.webp",
    shortDesc: "Calcio con probióticos e inulina en polvo para apoyar los huesos y acompañar el bienestar intestinal. Sabor fresa.",
    ingredients: "Citrato de Calcio (~1500 mg por porción), Concentrado de Proteína de Suero de Leche (WPC), 15 Cepas Probióticas (mezcla patentada de Lactobacillus, Bifidobacterium y Bacillus coagulans), Inulina de Agave, Saborizante natural a fresa, Edulcorante (sin azúcar añadido).",
    serving: "15 g (aproximadamente 2 cucharadas dosificadoras) al día",
    timing: "Puede tomarse con o sin alimentos. Se sugiere con alimentos ligeros por la mañana o media tarde.",
    intakeInstructions: "Disolver 15 g en 240-250 ml de agua purificada o leche (animal o vegetal). Mezclar vigorosamente hasta homogeneizar. No mezclar en líquidos calientes.",
    benefits: [
      "Ayuda a cuidar los huesos con calcio del citrato y aporta proteína de suero WPC para los músculos. La inulina de agave aporta fibra.",
      "Los probióticos Lactobacillus, Bifidobacterium y Bacillus coagulans acompañan el cuidado intestinal.",
      "Sabor natural a fresa y edulcorante dan sabor y dulzor."
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
    category: "otros",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PLATA-COLOIDAL.webp",
    shortDesc: "Plata coloidal en agua. No tiene beneficios demostrados por consumo oral y no es una opción para reforzar las defensas.",
    ingredients: "Plata elemental (Ag⁰ + Ag⁺) en suspensión coloidal (10 ppm), Agua purificada.",
    serving: "Adultos: ½ a 1 cucharadita (2.5-5 ml) de 1 a 2 veces al día. Niños: ¼ a ½ cucharadita (1.25-2.5 ml) de 1 a 2 veces al día.",
    timing: "En ayunas (30 min antes o 2 h después de alimentos)",
    intakeInstructions: "Mantener bajo la lengua 30-60 segundos antes de tragar (vía sublingual). No usar utensilios metálicos; emplear plástico, vidrio o cerámica.",
    benefits: [
      "Contiene plata elemental Ag⁰ y Ag⁺ diluida en agua purificada. Evitar su consumo por vía oral."
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
    shortDesc: "Vitamina B5 en cápsulas para ayudar a aprovechar la energía de los alimentos y complementar el aporte de esta vitamina.",
    ingredients: "Ácido Pantoténico (como Pantotenato de Calcio) 500 mg, Calcio 45 mg, Hipromelosa (cápsula vegetal), Ácido Esteárico (vegetal).",
    serving: "1 cápsula al día",
    timing: "Preferentemente por la mañana o al mediodía, junto con una comida o justo después de comer",
    intakeInstructions: "Ingerir la cápsula con un vaso completo de agua natural. No exceder la dosis recomendada sin supervisión profesional.",
    benefits: [
      "Apoya la obtención de energía de los alimentos con vitamina B5 del pantotenato de calcio. El calcio declarado complementa el aporte mineral para músculos y huesos.",
      "Hipromelosa forma la cápsula y ácido esteárico vegetal ayuda a preparar el producto."
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
    shortDesc: "Zeolita en cápsulas. Sus posibles beneficios digestivos y su seguridad necesitan confirmación; no se ha demostrado que esta fórmula elimine metales del cuerpo.",
    ingredients: "Zeolita (Clinoptilolita) 320 mg, Cápsula vegetal.",
    serving: "1 cápsula al día",
    timing: "Con el estómago vacío, preferentemente 30-60 minutos antes del desayuno o justo antes de dormir",
    intakeInstructions: "Ingerir la cápsula entera con un vaso grande de agua (mínimo 250-300 ml). No exceder la dosis recomendada sin supervisión profesional.",
    benefits: [
      "Contiene zeolita o clinoptilolita en cápsula vegetal. Consultar a un profesional antes de usarla por vía oral."
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
    shortDesc: "Tlanchalagua con otras plantas de la herbolaria mexicana para acompañar el bienestar digestivo tradicional.",
    ingredients: "Tlanchalagua (Erythraea stricta, L.), Cocolmeca (Smilax cardifolia, L.), Tejocote (Crataegus mexicana, L.), Lima (Citrus Limetta, L.), Té Limón (Cymbopogon nardus, L.).",
    serving: "2 cápsulas tres veces al día, antes de los alimentos",
    timing: "Antes de los alimentos principales (desayuno, comida y cena)",
    intakeInstructions: "Tomar 2 cápsulas con un vaso de agua natural. Verificar lote y fecha de caducidad impresos en el envase.",
    benefits: [
      "Tlanchalagua, cocolmeca, tejocote, lima y té limón forman una mezcla de plantas de uso tradicional para el bienestar digestivo."
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
    benefitSummary: "Uso tradicional para vitalidad, cansancio y debilidad",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/PANAX-GINSENG.avif",
    shortDesc: "Ginseng rojo en ampolletas bebibles para acompañar la vitalidad en etapas de cansancio y sensación de debilidad, según su uso tradicional. La raíz de Panax ginseng es el ingrediente que define este enfoque. La miel aporta dulzor y una pequeña cantidad de carbohidratos, y el agua purificada sirve de base líquida. La presentación permite consumir la porción directamente o diluida, como indica su ficha.",
    researchNote: {
      "focus": "Uso tradicional para vitalidad, cansancio y debilidad",
      "sources": [
        {
          "title": "EMA: uso tradicional de raíz de ginseng para fatiga y debilidad",
          "url": "https://www.ema.europa.eu/en/medicines/herbal/ginseng-radix"
        }
      ]
    },
    ingredients: "Raíz de Panax ginseng (Ginseng Rojo) 2400 mg por ampolla, Miel (0.51 g de carbohidratos), Agua purificada.",
    serving: "1 ampolla (10 ml) al día",
    timing: "Preferentemente por la mañana, en ayunas o con el desayuno",
    intakeInstructions: "Agitar vigorosamente antes de abrir. Consumir directamente del vial o diluir en 100 ml de agua natural a temperatura ambiente. No exceder la dosis recomendada.",
    benefits: [
      "Vitalidad diaria: la raíz de Panax ginseng se utiliza tradicionalmente para aliviar el cansancio y la sensación de debilidad."
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
    shortDesc: "Aceite de rosa mosqueta para suavizar la piel seca y ayudar a conservar su humedad.",
    ingredients: "Aceite de Rosa Mosqueta (Rosa moschata) 100% puro, obtenido por prensado en frío. Contiene ácido linoleico (40-50%), ácido linolénico (30-35%), ácido oleico (15-20%), trazas de ácido trans-retinoico, tocoferoles (Vitamina E) y fitoesteroles.",
    serving: "Aplicación tópica según necesidad, 1-3 veces al día",
    timing: "Preferentemente en la rutina nocturna. Si se usa de día, acompañar con protector solar.",
    intakeInstructions: "Aplicar 2-4 gotas sobre la zona deseada y masajear suavemente con movimientos circulares hasta la absorción total. Uso exclusivamente tópico. No ingerir.",
    benefits: [
      "Ayuda a suavizar la piel y conservar su humedad con ácidos linoleico, linolénico y oleico del aceite de rosa mosqueta.",
      "Los fitoesteroles acondicionan la piel y los tocoferoles o vitamina E ayudan a conservar el aceite. Contiene trazas de ácido trans-retinoico."
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
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/JUGO-NONI-scaled.jpg",
    shortDesc: "Noni en una presentación líquida para acompañar el bienestar general según su uso tradicional.",
    ingredients: "Jugo de Noni (Morinda citrifolia), Extracto Seco de Fruto de Noni, Agua Desmineralizada, Goma Xantana, Ácido Cítrico, Sabor y Colorante Artificial Uva, Sorbato de Potasio, Benzoato de Sodio, Stevia (Stevia rebaudiana).",
    serving: "30 ml (2 cucharadas soperas), 1 a 2 veces al día",
    timing: "Preferentemente en ayunas, 30 minutos antes del desayuno",
    intakeInstructions: "Agitar vigorosamente antes de servir. Puede consumirse puro o diluido en 150 ml de agua o jugo bajo en azúcar. No exceder la dosis recomendada. Una vez abierto, mantener refrigerado.",
    benefits: [
      "Permite incorporar componentes vegetales del jugo y extracto seco de fruto de noni.",
      "Agua desmineralizada sirve de vehículo y goma xantana da textura. Ácido cítrico ajusta acidez, stevia da dulzor, sabor y colorante artificial uva ajustan la presentación, y sorbato de potasio y benzoato de sodio conservan la mezcla."
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
    benefitSummary: "Cúrcuma y jengibre para pesadez y gases",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/curcuma-1.jpg",
    shortDesc: "Cúrcuma y jengibre en cápsulas de uso tradicional digestivo. La cúrcuma se usa para aliviar pesadez y gases y aporta antioxidantes que ayudan a proteger las células.",
    ingredients: "Polvo de raíz de Cúrcuma (Curcuma longa), Polvo de raíz de Jengibre (Zingiber officinale), excipientes (cápsula vegetal o gelatinosa).",
    serving: "3 cápsulas al día (1 antes de cada alimento principal)",
    timing: "Con alimentos que contengan grasas saludables",
    intakeInstructions: "Tomar 1 cápsula antes del desayuno, comida y cena, con un vaso de agua. Consumir junto con alimentos grasos para mejorar la absorción. No exceder la dosis diaria recomendada.",
    benefits: [
      "Cúrcuma y jengibre se usan para el bienestar del estómago después de comer. Los excipientes y la cápsula vegetal o gelatinosa ayudan a contener y dar forma a la mezcla."
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
    benefitSummary: "Calma y cuidado de la atención y la memoria",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-–-BACOPA-ALBIZIA–-V0–-SEPT2026.jpeg",
    shortDesc: "Fórmula para acompañar la calma y el cuidado de la atención y la memoria durante la actividad diaria. Combina albizia de uso tradicional para la tranquilidad con L-teanina, mientras que la bacopa en polvo aporta su uso tradicional para el cuidado de la memoria. El magnesio del bisglicinato complementa el funcionamiento de músculos y nervios. La gelatina y el agua purificada forman la cápsula.",
    researchNote: {
      "focus": "Calma y cuidado de la atención y la memoria",
      "sources": [
        {
          "title": "Albizia: contexto tradicional e investigación experimental",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4889836/"
        },
        {
          "title": "Bacopa: ensayo con extracto estandarizado sobre memoria",
          "url": "https://pubmed.ncbi.nlm.nih.gov/18611150/"
        },
        {
          "title": "L-teanina: ensayo sobre estrés y aspectos del sueño",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31623400/"
        },
        {
          "title": "NIH: magnesio y funcionamiento muscular y nervioso",
          "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
        }
      ]
    },
    ingredients: "Por porción de 2 cápsulas (900 mg): extracto seco de Albizia (Albizia julibrissin, 1:1) 300 mg; partes aéreas de Bacopa monnieri en polvo 200 mg; L-teanina 100 mg; bisglicinato de magnesio 300 mg (aporta 42 mg de magnesio elemental). Excipientes: gelatina y agua purificada.",
    serving: "2 cápsulas (900 mg)",
    timing: "Por la mañana o al mediodía, con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos, preferentemente acompañados de grasas saludables. No exceder la porción diaria recomendada.",
    benefits: [
      "Calma cotidiana: la Albizia aporta su uso tradicional para la tranquilidad y la L-teanina complementa la orientación relajante de la mezcla.",
      "Cuidado de la memoria: la Bacopa monnieri en polvo aporta su uso tradicional para acompañar la memoria y la atención.",
      "Funcionamiento nervioso y muscular: el magnesio del bisglicinato contribuye a la actividad normal de músculos y nervios."
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
    benefitSummary: "Calma y vitalidad ante el estrés y el cansancio mental",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/09/ZN-–-RHODIOLA-ALBIZIA–-V0–-SEPT2026.jpeg",
    shortDesc: "Fórmula para acompañar la calma y la vitalidad en etapas de estrés y cansancio mental. Combina el uso tradicional de la albizia para la tranquilidad con L-teanina, mientras que la rhodiola aporta su uso tradicional para la fatiga asociada al estrés. El magnesio del bisglicinato complementa el funcionamiento de músculos y nervios. La ficha orienta su consumo por la mañana o al mediodía.",
    researchNote: {
      "focus": "Calma y vitalidad ante el estrés y el cansancio mental",
      "sources": [
        {
          "title": "Albizia: contexto de uso tradicional e investigación experimental",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4889836/"
        },
        {
          "title": "L-teanina: ensayo sobre estrés y aspectos del sueño",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31623400/"
        },
        {
          "title": "EMA: uso tradicional de rhodiola para cansancio asociado al estrés",
          "url": "https://www.ema.europa.eu/en/medicines/herbal/rhodiolae-roseae-rhizoma-et-radix"
        },
        {
          "title": "NIH: magnesio, músculos, nervios y producción de energía",
          "url": "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
        }
      ]
    },
    ingredients: "Por porción de 2 cápsulas (900 mg): extracto seco de Albizia (Albizia julibrissin, 1:1) 300 mg; extracto de raíz de Rhodiola rosea 200 mg, estandarizado al 3 % de salidrósidos (aporta 6 mg); L-teanina 100 mg; bisglicinato de magnesio 300 mg (aporta 42 mg de magnesio elemental). Excipientes: gelatina y agua purificada.",
    serving: "2 cápsulas (900 mg)",
    timing: "Por la mañana o al mediodía, con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos, preferentemente acompañados de grasas saludables. Evitar la toma cerca de la hora de dormir. No exceder la porción diaria recomendada.",
    benefits: [
      "Calma cotidiana: la Albizia aporta su uso tradicional para la tranquilidad y la L-teanina complementa la orientación relajante de la mezcla.",
      "Vitalidad mental: la Rhodiola rosea se utiliza tradicionalmente para aliviar el cansancio en días de estrés y la sensación de debilidad.",
      "Funcionamiento nervioso y muscular: el magnesio del bisglicinato contribuye a la actividad normal de músculos y nervios."
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
    benefitSummary: "Bienestar durante la menopausia",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/10/COHOSH-NEGRO.jpg",
    shortDesc: "Cohosh negro con isoflavonas de soja para acompañar el bienestar durante la menopausia y algunos malestares como los bochornos.",
    ingredients: "Por cápsula (500 mg): mezcla de extracto de raíz y rizoma de cohosh negro (Actaea racemosa) e isoflavonas de soja (Glycine max). La ficha no especifica la cantidad individual de cada ingrediente.",
    serving: "3 cápsulas (1,500 mg de mezcla)",
    timing: "Con alimentos, distribuido durante el día",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos y un vaso de agua, según la ficha del producto. No exceder la porción indicada.",
    benefits: [
      "Puede ayudar con molestias de la menopausia con cohosh negro e isoflavonas de soja."
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
    shortDesc: "Extracto de hojas de guanábana con vitamina C para apoyar las defensas y el cuidado de las células. El beneficio nutricional descrito corresponde a la vitamina C.",
    ingredients: "Extracto acuoso de hojas de guanábana (cantidad no especificada), vitamina C (60 mg por 60 mL), agua purificada, ácidos cítrico y tartárico, stevia (12 mg por 60 mL), saborizante de guanábana, dióxido de titanio, color caramelo, benzoato de sodio y sorbato de potasio; según la ficha técnica recibida.",
    serving: "30 mL (1 oz) por toma; la ficha recibida indica 2 tomas al día (60 mL al día).",
    timing: "Confirmar el horario de consumo en la etiqueta vigente.",
    intakeInstructions: "Agitar antes de usar. La ficha recibida indica 30 mL dos veces al día y refrigerar después de abrir; confirmar modo de empleo y conservación en la etiqueta del envase actual.",
    yieldInfo: {
        durationDays: 16.6667,
        note: "Aprox. 17 días: envase de 1 L con consumo de 60 mL al día (2 tomas de 30 mL)."
    },
    benefits: [
      "Apoya las defensas y la formación de colágeno con vitamina C. El extracto acuoso de hojas de guanábana completa el aporte vegetal.",
      "Agua purificada sirve para diluir la mezcla. Ácidos cítrico y tartárico ajustan acidez, stevia da dulzor y saborizante de guanábana, dióxido de titanio y color caramelo ajustan sabor y apariencia.",
      "Benzoato de sodio y sorbato de potasio conservan la preparación."
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
  32: "120 cápsulas de 500 mg",
  33: "60 cápsulas vegetales",
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
