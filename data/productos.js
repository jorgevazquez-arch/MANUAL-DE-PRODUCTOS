// ============================================================
//  DATA: Catálogo de productos - El Girasol
//  Define la variable global `productos` (array de objetos).
//  Edítalo con cualquier editor de texto; cada producto sigue
//  el mismo formato: { id, code, name, category, image,
//  shortDesc, ingredients, serving, timing, intakeInstructions,
//  benefits[], contraindications, foodInteractions, interactions }
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
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CLORURO-MAGNESIO-250.jpg",
    shortDesc: "Suplemento de magnesio en polvo de alta biodisponibilidad, contribuye a la función muscular y nerviosa y a la reducción del cansancio.",
    ingredients: "Cloruro de magnesio hexahidratado (MgCl₂·6H₂O), con trazas de calcio, hierro y vitamina A.",
    serving: "4 g (1 cucharada dosificadora)",
    timing: "Una vez al día, preferentemente con alimentos",
    intakeInstructions: "Disolver 4 g en 200-250 ml de agua o jugo. Consumir con alimentos.",
    benefits: [
      "Contribuye a la reducción del cansancio y la fatiga",
      "Apoya el funcionamiento normal de los músculos",
      "Mantiene la salud ósea",
      "Participa en la producción de energía",
      "Favorece la función nerviosa",
      "Ayuda al equilibrio electrolítico"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos de la conducción cardíaca, o bajo tratamiento con diuréticos, antibióticos (tetraciclinas, quinolonas) o bifosfonatos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con diuréticos, antibióticos (tetraciclinas, quinolonas) y bifosfonatos."
  },

  // ================================================================
  //  2. COCONUT + OREGANO OIL (60 cápsulas)
  // ================================================================
  {
    id: 2,
    code: "7500645001439",
    name: "COCONUT + OREGANO OIL (60 cápsulas)",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Coconut-y-Oregano1.jpg",
    shortDesc: "Combinación de aceite de coco virgen extra y orégano estandarizado en carvacrol, para apoyo digestivo y antioxidante.",
    ingredients: "Aceite de coco virgen extra en polvo (300 mg), ácido láurico (100 mg), orégano en polvo estandarizado al 70 % de carvacrol (100 mg) por cápsula.",
    serving: "1 cápsula",
    timing: "Una vez al día, con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos y un vaso de agua.",
    benefits: [
      "Apoya la salud digestiva",
      "Aporta antioxidantes naturales",
      "Contribuye al bienestar general",
      "Proporciona ácidos grasos de cadena media (MCT)",
      "Favorece la función inmunológica",
      "Ayuda a mantener la salud de la piel"
    ],
    contraindications: "No recomendado durante el embarazo o lactancia sin consulta médica. Personas con alergia a plantas de la familia Lamiaceae (menta, tomillo, albahaca) deben consultar a su profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  3. COLÁGENO HIDROLIZADO 500 g
  // ================================================================
  {
    id: 3,
    code: "7503016797153",
    name: "COLÁGENO HIDROLIZADO 500 g",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/colageno-hidrolizado.png",
    shortDesc: "Péptidos de colágeno hidrolizado en polvo, enriquecido con vitamina C y biotina, para apoyar la piel, articulaciones y tejido conectivo.",
    ingredients: "Colágeno hidrolizado (péptidos de bajo peso molecular), vitamina C (ácido ascórbico), biotina.",
    serving: "10 g (1 cucharada)",
    timing: "Una vez al día, en ayunas o entre comidas",
    intakeInstructions: "Disolver 10 g (1 cucharada) en 200-300 ml de agua, jugo o bebida fría o templada. Consumir una vez al día.",
    benefits: [
      "Mejora la hidratación, elasticidad y densidad de la piel",
      "Contribuye al mantenimiento de las articulaciones",
      "Apoya la salud del cabello y las uñas",
      "Aporta aminoácidos esenciales",
      "Favorece la producción de colágeno endógeno",
      "Ayuda a la recuperación del tejido conectivo"
    ],
    contraindications: "Personas con alergia a la proteína bovina o porcina, o bajo tratamiento con anticoagulantes, deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes."
  },

  // ================================================================
  //  4. COMPLEJO B ARÁNDANO (90 cápsulas)
  // ================================================================
  {
    id: 4,
    code: "7503021404671",
    name: "COMPLEJO B CON ARANDANO (90 cápsulas)",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/COMPLEJO-B-CON-ARANDANO-C90-CAPS-ZN.png",
    shortDesc: "Complejo de vitaminas del grupo B con extracto de arándano, para el metabolismo energético, la función neurológica y la protección celular.",
    ingredients: "Vitaminas B1, B2, B3, B5, B6, B7, B9, B12; extracto de arándano (Vaccinium myrtillus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Contribuye al metabolismo energético normal",
      "Apoya la función neurológica y la salud mental",
      "Ayuda a la reducción del cansancio y la fatiga",
      "Protege las células frente al estrés oxidativo",
      "Favorece la formación de glóbulos rojos",
      "Contribuye a la salud visual"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes y antidiabéticos."
  },

  // ================================================================
  //  5. COMPLEJO B Y GINSENG (60 cápsulas)
  // ================================================================
  {
    id: 5,
    code: "7503024738087",
    name: "COMPLEJO B Y GINSENG 60 caps",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/complejo-y-ginseng.jpg",
    shortDesc: "Complejo de vitaminas B con arándanos, vitaminas A, C, D y ginseng siberiano, para energía, vitalidad y protección celular.",
    ingredients: "Arándanos (blueberry, cranberry), vitaminas B1, B2, B5, B6, B9, B12, biotina, vitaminas A, C, D, ginseng siberiano (Eleutherococcus senticosus).",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la función cognitiva y la concentración",
      "Contribuye al metabolismo energético",
      "Favorece la reducción del cansancio",
      "Protege las células del estrés oxidativo",
      "Ayuda a la salud urinaria (cranberry)",
      "Apoya la función inmunológica"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
  },

  // ================================================================
  //  6. CRANBERRY URY, ARANDANO ROJO 1000 mg
  // ================================================================
  {
    id: 6,
    code: "7500645000517",
    name: "CRANBERRY URY, ARANDANO ROJO 1000 mg",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CRANBERRY-URY.jpg",
    shortDesc: "Extracto de arándano rojo (Vaccinium vitis-idaea) en cápsulas, para apoyar la salud del tracto urinario.",
    ingredients: "Extracto en polvo del fruto de arándano rojo (Vaccinium vitis-idaea) 1000 mg.",
    serving: "1 cápsula",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos. Acompañar con una ingesta adecuada de agua.",
    benefits: [
      "Apoya la salud del tracto urinario",
      "Reduce la adherencia bacteriana en la vejiga",
      "Aporta antioxidantes naturales",
      "Ayuda a la eliminación de líquidos",
      "Contribuye al bienestar general",
      "Favorece la salud de la mujer"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con antecedentes de cálculos renales de oxalato o bajo tratamiento con anticoagulantes (warfarina) deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes (warfarina) y medicamentos metabolizados por CYP2C9."
  },

  // ================================================================
  //  7. CREATINA BIRDMAN (450 g)
  // ================================================================
  {
    id: 7,
    code: "7503025737355",
    name: "CREATINA MONOHIDRATADA BIRDMAN",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CreatinaBirdman1.webp",
    shortDesc: "Creatina monohidratada pura en polvo, para mejorar el rendimiento físico en ejercicios de alta intensidad y corta duración.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cuchara medidora)",
    timing: "Una vez al día, preferentemente después del entrenamiento",
    intakeInstructions: "Mezclar 5 g (1 cuchara) en 200-250 ml de agua o bebida de elección. Consumir una vez al día.",
    benefits: [
      "Mejora el rendimiento en ejercicios de alta intensidad",
      "Aumenta la fuerza y potencia muscular",
      "Favorece la recuperación muscular",
      "Contribuye al aumento de masa magra",
      "Ayuda a la hidratación celular",
      "Es una ayuda ergogénica respaldada científicamente"
    ],
    contraindications: "Personas con patologías renales preexistentes deben consultar a su médico antes de iniciar la suplementación.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  8. CREATINA NANO FEAR (500 g)
  // ================================================================
  {
    id: 8,
    code: "7500645000555",
    name: "CREATINA NANO FEAR",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Imagen-de-WhatsApp-2025-07-25-a-las-19.18.36_5cced7d4.jpg",
    shortDesc: "Creatina monohidratada de alta pureza en polvo, para optimizar el rendimiento deportivo y la recuperación muscular.",
    ingredients: "Creatina monohidratada 100% pura.",
    serving: "5 g (1 cucharada rasa)",
    timing: "Preferentemente después del entrenamiento",
    intakeInstructions: "Disolver 5 g (1 cucharada) en 250 ml de agua o jugo. Consumir preferentemente después del entrenamiento.",
    benefits: [
      "Aumenta la fuerza y potencia muscular",
      "Mejora el rendimiento en ejercicios de alta intensidad",
      "Favorece la recuperación muscular",
      "Contribuye a la síntesis de proteínas",
      "Apoya la hidratación celular",
      "Es una ayuda ergogénica de máxima calidad"
    ],
    contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico antes de usar este producto.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  9. CUACHALALATE + TEPEZCOHUITE (90 cápsulas)
  // ================================================================
  {
    id: 9,
    code: "7503026253540",
    name: "CUACHALALATE + TEPEZCOHUITE",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/cuachalalate1.jpg",
    shortDesc: "Combinación de cortezas de cuachalalate y tepezcohuite, de la medicina tradicional mexicana, para el bienestar digestivo y dérmico.",
    ingredients: "Cuachalalate (Amphipterygium adstringens) corteza 750 mg, Tepezcohuite (Mimosa tenuiflora) corteza 750 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la salud digestiva y la mucosa gástrica",
      "Contribuye a la regeneración de la piel",
      "Aporta propiedades antiinflamatorias",
      "Ayuda a la cicatrización de tejidos",
      "Es de origen botánico tradicional mexicano",
      "Favorece el bienestar general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica activa, obstrucción biliar o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes y antiinflamatorios."
  },

  // ================================================================
  //  10. CUORE 90 caps 500 mg
  // ================================================================
  {
    id: 10,
    code: "7503024738216",
    name: "CUORE",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CUORE1.jpg",
    shortDesc: "Fórmula botánica y vitamínica para apoyar la salud cardiovascular y el bienestar general.",
    ingredients: "Ajo deodorizado, zapote blanco, alpiste, enebro, té verde, extracto de olivo, semilla de uva, vitaminas B1, B6, B12.",
    serving: "3 cápsulas",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la salud cardiovascular",
      "Contribuye al metabolismo energético",
      "Aporta antioxidantes naturales",
      "Favorece la circulación",
      "Ayuda a la función neurológica",
      "Protege las células del estrés oxidativo"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
  },

  // ================================================================
  //  11. CURCUMA POWDER (250 g)
  // ================================================================
  {
    id: 11,
    code: "7503021404763",
    name: "CURCUMA POWDER",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CURCUMA-POLVO.png",
    shortDesc: "Cúrcuma orgánica en polvo, rica en curcuminoides, con actividad antioxidante y de apoyo a la salud articular y digestiva.",
    ingredients: "Cúrcuma en polvo orgánica (Curcuma longa) 100%.",
    serving: "3 g (1 cucharadita)",
    timing: "Con alimentos que contengan grasas (para mejorar la absorción)",
    intakeInstructions: "Mezclar 3 g (1 cucharadita) en bebidas, jugos, té o alimentos. Consumir una vez al día.",
    benefits: [
      "Apoya la salud articular y digestiva",
      "Aporta potentes antioxidantes",
      "Contribuye a la protección celular",
      "Ayuda al bienestar general",
      "Es orgánica y libre de aditivos",
      "Favorece la función metabólica"
    ],
    contraindications: "Personas con obstrucción de vías biliares, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antiagregantes plaquetarios, antidiabéticos y medicamentos metabolizados por CYP3A4."
  },

  // ================================================================
  //  12. CURCUMA, JENGIBRE Y MORINGA 90 caps
  // ================================================================
  {
    id: 12,
    code: "7503021404527",
    name: "CURCUMA, JENGIBRE Y MORINGA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcuma-y-Moringa1-1.jpg",
    shortDesc: "Combinación de cúrcuma, jengibre y moringa en cápsulas, para apoyo antioxidante, antiinflamatorio y nutricional.",
    ingredients: "Raíz de cúrcuma (Curcuma longa) 900 mg, raíz de jengibre (Zingiber officinale) 300 mg, hoja de moringa (Moringa oleifera) 300 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
    benefits: [
      "Aporta antioxidantes y compuestos antiinflamatorios",
      "Apoya la salud articular y digestiva",
      "Contribuye a la protección celular",
      "Favorece el metabolismo energético",
      "Es rica en nutrientes esenciales",
      "Ayuda al bienestar general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antiagregantes plaquetarios, antidiabéticos y medicamentos metabolizados por CYP3A4."
  },

  // ================================================================
  //  13. CÚRCUMA (60 cápsulas)
  // ================================================================
  {
    id: 13,
    code: "7503021404183",
    name: "CÚRCUMA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/curcuma.jpg",
    shortDesc: "Raíz de cúrcuma en polvo en cápsulas, con propiedades antioxidantes y de apoyo al bienestar general.",
    ingredients: "Raíz de cúrcuma (Curcuma longa) en polvo 1000 mg por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
    benefits: [
      "Aporta antioxidantes naturales",
      "Apoya la salud digestiva",
      "Contribuye a la protección celular",
      "Ayuda al bienestar general",
      "Es de origen vegetal",
      "Favorece la función hepática"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antiagregantes plaquetarios y antidiabéticos."
  },

  // ================================================================
  //  14. ACEITE DE COCO 1 L (El Girasol)
  // ================================================================
  {
    id: 14,
    code: "7503021714091",
    name: "ACEITE DE COCO 1 L",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-COCO.webp",
    shortDesc: "Aceite de coco comestible orgánico, RBD (Refinado, Blanqueado y Desodorizado), sin olor ni sabor, para uso culinario.",
    ingredients: "Aceite de coco orgánico RBD (Refinado, Blanqueado y Desodorizado).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para cocinar a altas temperaturas",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos.",
    benefits: [
      "Alta estabilidad térmica para frituras",
      "Sin olor ni sabor, no altera los alimentos",
      "Fuente de energía concentrada",
      "Larga vida útil por su resistencia a la oxidación",
      "Versátil en la cocina",
      "Orgánico y sin OGM"
    ],
    contraindications: "Consumir con moderación como parte de una dieta variada y equilibrada.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  15. ACEITE DE COCO ORGÁNICO 420 ml (El Girasol)
  // ================================================================
  {
    id: 15,
    code: "7503021709882",
    name: "ACEITE DE COCO ORGÁNICO 420 ml",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-COCO-ORGANICO.webp",
    shortDesc: "Aceite de coco extra virgen orgánico, sin refinar, para uso culinario y cosmético, con aroma y sabor natural.",
    ingredients: "Aceite de coco extra virgen orgánico (prensado en frío).",
    serving: "14 g (1 cucharada)",
    timing: "Apto para frituras, horneado y uso cosmético",
    intakeInstructions: "Utilizar para preparar, freír o cocinar alimentos. Recomendado para cuidado de la piel y cabello.",
    benefits: [
      "Conserva el aroma y sabor natural del coco",
      "Alta estabilidad térmica",
      "Versátil en cocina y cosmética",
      "Fuente de MCT y ácido láurico",
      "Orgánico y sin OGM",
      "Hidratante natural para piel y cabello"
    ],
    contraindications: "Consumir con moderación. Para uso cosmético, realizar prueba de sensibilidad en la piel.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  16. ACEITE DE ORÉGANO (20 ml)
  // ================================================================
  {
    id: 16,
    code: "7500645001118",
    name: "ACEITE DE ORÉGANO (20 ml)",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ACEITE-OREGANO1.jpg",
    shortDesc: "Aceite esencial de orégano en gotas, rico en carvacrol y timol, para apoyo respiratorio y digestivo.",
    ingredients: "Aceite esencial de orégano (Origanum vulgare), con aceite base vegetal (oliva).",
    serving: "0.75 ml (3 gotas)",
    timing: "Con alimentos",
    intakeInstructions: "Diluir 0.75 ml (3 gotas) en agua, jugo o infusión. Tomar con alimentos.",
    benefits: [
      "Apoya la salud respiratoria",
      "Contribuye a la salud digestiva",
      "Aporta antioxidantes naturales",
      "Ayuda al bienestar general",
      "Tiene uso tradicional",
      "Es de origen vegetal"
    ],
    contraindications: "No administrar a menores de 12 años. Mujeres embarazadas o en lactancia, personas con gastritis, úlceras, enfermedades hepáticas o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes."
  },

  // ================================================================
  //  17. ÁCIDO ALFA LIPÓICO (60 cápsulas)
  // ================================================================
  {
    id: 17,
    code: "7503029679408",
    name: "ÁCIDO ALFA LIPÓICO",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ACIDO-ALFA-LIPOICO1.webp",
    shortDesc: "Suplemento de ácido alfa lipóico, potente antioxidante y cofactor del metabolismo energético mitocondrial.",
    ingredients: "Ácido alfa lipóico (ácido tióctico) 300 mg por porción.",
    serving: "2 cápsulas (300 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Potente antioxidante hidro y liposoluble",
      "Regenera otros antioxidantes (vitamina C, E, glutatión)",
      "Apoya el metabolismo energético",
      "Contribuye a la protección celular",
      "Participa en la función mitocondrial",
      "Ayuda al bienestar metabólico"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con deficiencia de tiamina, diabetes, hipoglucemia o bajo tratamiento con antidiabéticos o quimioterápicos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede disminuir los niveles de azúcar en sangre; interactúa con antidiabéticos y medicamentos para la tiroides."
  },

  // ================================================================
  //  18. ÁCIDO HIALURÓNICO (polvo, con colágeno y omega-3)
  // ================================================================
  {
    id: 18,
    code: "7503026253755",
    name: "ÁCIDO HIALURÓNICO",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ACIDO-HIALURONICO1.webp",
    shortDesc: "Suplemento en polvo que combina colágeno hidrolizado, ácido hialurónico, omega-3, arándano y aloe vera para la salud de la piel y articulaciones.",
    ingredients: "Colágeno hidrolizado tipo 1 (9 g), arándano azul (800 mg), aloe vera (280 mg), omega 3 (400 mg EPA/DHA), ácido hialurónico (200 mg), vitamina E (50 mg) por porción.",
    serving: "15 g (1 cuchara)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 15 g en 200-300 ml de agua, jugo o bebida vegetal. Consumir una vez al día.",
    benefits: [
      "Mejora la hidratación y elasticidad de la piel",
      "Apoya la salud de las articulaciones",
      "Aporta antioxidantes y omega-3",
      "Contribuye a la regeneración del colágeno",
      "Favorece la función inmunológica",
      "Ayuda al bienestar general"
    ],
    contraindications: "Personas con alergia a pescados (omega-3) o a alguno de los componentes, o bajo tratamiento anticoagulante deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes."
  },

  // ================================================================
  //  19. ÁCIDO LINOLEICO CONJUGADO (CLA) – NanoFear (80 cápsulas)
  // ================================================================
  {
    id: 19,
    code: "7503016797832",
    name: "ÁCIDO LINOLEICO CONJUGADO (CLA)",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/unnamed-1.jpg",
    shortDesc: "Ácido linoleico conjugado (CLA) en cápsulas, para apoyar la composición corporal y el metabolismo lipídico.",
    ingredients: "Ácido linoleico conjugado (CLA) de alta pureza, procedente de aceite de cártamo.",
    serving: "3 cápsulas (2.4 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la reducción de grasa corporal",
      "Contribuye al mantenimiento de la masa muscular magra",
      "Modula el metabolismo lipídico",
      "Ayuda a la recuperación muscular",
      "Es un ácido graso esencial",
      "Favorece la composición corporal"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades hepáticas o renales deben consultar a su médico antes de usar este producto.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  20. AGUAJE COMPLEX (90 cápsulas)
  // ================================================================
  {
    id: 20,
    code: "7500645000753",
    name: "AGUAJE COMPLEX",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Aguaje1.jpg",
    shortDesc: "Combinación de aguaje, fenogreco, maca negra y maca amarilla, para el equilibrio hormonal femenino y la vitalidad.",
    ingredients: "Aguaje (Mauritia flexuosa) 750 mg, fenogreco (Trigonella foenum-graecum) 375 mg, maca negra (Lepidium meyenii) 250 mg, maca amarilla (Lepidium meyenii) 125 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya el equilibrio hormonal femenino",
      "Contribuye a la vitalidad y energía",
      "Ayuda a la salud de la piel y el cabello",
      "Favorece el bienestar durante la menopausia",
      "Es de origen botánico tradicional",
      "Ayuda al confort hormonal"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales sensibles a estrógenos (fibromas, endometriosis, cáncer de mama) o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Contiene fitoestrógenos; puede interactuar con tratamientos hormonales."
  },

  // ================================================================
  //  21. AJO NEGRO + MORINGA (90 cápsulas)
  // ================================================================
  {
    id: 21,
    code: "7503021404855",
    name: "AJO NEGRO + MORINGA",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/AJO-NEGRO-MORINGA1.jpg",
    shortDesc: "Combinación de ajo negro fermentado y moringa, con vitaminas C y B, para apoyo inmunológico y cardiovascular.",
    ingredients: "Hoja de moringa (250 mg), bulbo de ajo negro (249 mg), vitamina C (0.5 mg), vitaminas B1, B2, B6 por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Apoya el sistema inmunológico",
      "Contribuye a la salud cardiovascular",
      "Aporta antioxidantes y vitaminas",
      "Ayuda a la reducción del cansancio",
      "Favorece el metabolismo energético",
      "Es de origen vegetal"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al ajo o a la moringa, con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
  },

  // ================================================================
  //  22. AJO NEGRO CON PROPÓLEO (90 cápsulas)
  // ================================================================
  {
    id: 22,
    code: "7503021404862",
    name: "AJO NEGRO CON PROPÓLEO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Ajo-Negro-Propoleo1.jpg",
    shortDesc: "Combinación de ajo negro y extracto de propóleo, para el apoyo del sistema inmunológico y la salud respiratoria.",
    ingredients: "Extracto de propóleo estandarizado en flavonoides (250 mg), bulbo de ajo negro (250 mg) por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Apoya el sistema inmunológico",
      "Contribuye a la salud de las vías respiratorias",
      "Aporta antioxidantes naturales",
      "Ayuda a la defensa del organismo",
      "Es de origen apícola y vegetal",
      "Favorece el bienestar general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (miel, propóleo, polen) o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes y antiagregantes plaquetarios."
  },

  // ================================================================
  //  23. AJO NEGRO (90 cápsulas)
  // ================================================================
  {
    id: 23,
    code: "7503021404558",
    name: "AJO NEGRO",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ajo-negro.jpg",
    shortDesc: "Ajo negro fermentado y envejecido, con vitaminas C y B6, para apoyo cardiovascular e inmunológico.",
    ingredients: "Ajo negro (Allium sativum fermentado) 1.5 g, vitamina C 0.62 mg, vitamina B6 0.03 mg por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la salud cardiovascular",
      "Contribuye a la función inmunológica",
      "Aporta antioxidantes y compuestos azufrados",
      "Ayuda a la reducción del cansancio",
      "Mejora la biodisponibilidad",
      "Es de origen vegetal"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al ajo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
  },

  // ================================================================
  //  24. ALBÚMINA DE HUEVO PROWINNER (500 g)
  // ================================================================
  {
    id: 24,
    code: "7501062912209",
    name: "ALBÚMINA DE HUEVO PROWINNER",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/AlbuminadeHuevo_1.webp",
    shortDesc: "Proteína de clara de huevo pasteurizada, en polvo, rica en aminoácidos esenciales y vitaminas, ideal para deportistas.",
    ingredients: "Albúmina de huevo pasteurizada, vitaminas (C, E, B1, B2, B3, B6, B12, A, D3, ácido fólico), minerales (potasio, fósforo, calcio, magnesio, hierro, zinc, cobre, yodo).",
    serving: "30 g (1 medida)",
    timing: "Dos o tres veces al día",
    intakeInstructions: "Mezclar 30 g (1 medida) en jugos, leche, licuados o agua. Tomar dos o tres veces al día.",
    benefits: [
      "Fuente de proteína de alto valor biológico (VB > 100)",
      "Aporta aminoácidos esenciales para la recuperación muscular",
      "Enriquecida con vitaminas y minerales",
      "Baja en grasa y carbohidratos",
      "Libre de lactosa",
      "Ideal para deportistas y atletas"
    ],
    contraindications: "Personas con alergias al huevo o soya deben evitar su consumo. Mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  25. ALGA ESPIRULINA EN POLVO (250 g)
  // ================================================================
  {
    id: 25,
    code: "7503021404831",
    name: "ALGA ESPIRULINA EN POLVO",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ALGAESPIRULINA.png",
    shortDesc: "Espirulina orgánica en polvo, superalimento rico en proteínas, vitaminas, minerales y antioxidantes.",
    ingredients: "Alga espirulina orgánica (Arthrospira platensis) 100%.",
    serving: "10 g (2 cucharadas)",
    timing: "En ayunas o con alimentos",
    intakeInstructions: "Mezclar 10 g (2 cucharadas) en agua, jugos, licuados o espolvorear sobre ensaladas. Consumir una vez al día.",
    benefits: [
      "Fuente concentrada de proteínas de alta calidad",
      "Rica en vitaminas del grupo B, hierro, calcio y magnesio",
      "Aporta antioxidantes y clorofila",
      "Apoya el sistema inmunológico",
      "Contribuye al metabolismo energético",
      "Es orgánica y vegana"
    ],
    contraindications: "Personas con alergia a la espirulina, trastornos de la tiroides, gota, fenilcetonuria o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos e inmunosupresores."
  },

  // ================================================================
  //  26. ALGA ESPIRULINA ORGANICA 180 caps 500 mg
  // ================================================================
  {
    id: 26,
    code: "7503021404848",
    name: "ALGA ESPIRULINA ORGANICA",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Alga-Spirulina-Organica1.jpg",
    shortDesc: "Espirulina orgánica en cápsulas, enriquecida con vitaminas y minerales, para apoyo nutricional completo.",
    ingredients: "Alga espirulina orgánica (1,135 mg), calcio (150 mg), magnesio (150 mg), vitamina E (15 mg), hierro (8 mg), vitaminas B1, B2, B6, B12, zinc, cobre, vitamina A por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Aporta una amplia gama de nutrientes esenciales",
      "Apoya el sistema inmunológico",
      "Contribuye al metabolismo energético",
      "Protege las células del estrés oxidativo",
      "Ayuda a la salud de la piel y el cabello",
      "Es orgánica y de origen vegetal"
    ],
    contraindications: "Personas con alergia a la espirulina, trastornos de la tiroides, gota, fenilcetonuria o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos e inmunosupresores."
  },

  // ================================================================
  //  27. ALOE VERA CON ARÁNDANO (990 ml)
  // ================================================================
  {
    id: 27,
    code: "7503016797030",
    name: "ALOE VERA CON ARANDANO",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/AloeVeraArandano.jpg",
    shortDesc: "Bebida de aloe vera con arándano y vitamina C, para el bienestar digestivo y la salud del tracto urinario.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de arándano (Vaccinium macrocarpon), vitamina C (27 mg por porción).",
    serving: "90 ml",
    timing: "En ayunas o antes de la primera comida",
    intakeInstructions: "Agitar bien. Consumir 90 ml al día, preferentemente en ayunas o antes de la primera comida.",
    benefits: [
      "Apoya la salud digestiva",
      "Contribuye a la salud del tracto urinario",
      "Aporta vitamina C antioxidante",
      "Ayuda a la hidratación",
      "Es 100% natural",
      "Favorece el bienestar general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El aloe vera puede tener efecto laxante en exceso."
  },

  // ================================================================
  //  28. ALOE VERA LIQUIDO TROPICAL (1 L)
  // ================================================================
  {
    id: 28,
    code: "7503016797337",
    name: "ALOE VERA LIQUIDO TROPICAL",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/correjidos_0003_freepik__isolate-only-the-bottle-frontal-symmetrical-studio__56412-1.jpg",
    shortDesc: "Bebida de aloe vera con vitamina C y sabor tropical, para hidratación y bienestar digestivo.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), vitamina C (30 mg por porción), saborizantes naturales tropicales.",
    serving: "100 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar bien. Tomar 100 ml al día, preferentemente en ayunas o entre comidas.",
    benefits: [
      "Apoya la hidratación y el bienestar digestivo",
      "Contribuye a la salud de la piel",
      "Aporta vitamina C antioxidante",
      "Es bajo en calorías",
      "Sabor tropical refrescante",
      "Favorece el equilibrio fisiológico"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El aloe vera puede tener efecto laxante en exceso."
  },

  // ================================================================
  //  29. AMP-ON 60 caps 600 mg
  // ================================================================
  {
    id: 29,
    code: "7500645001460",
    name: "AMP-ON 60 caps 600mg",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/ZN-–-AMP-ON-–-60-caps-600-mg-–-Render-–-V2-–-Marzo2026-2.jpg",
    shortDesc: "Complejo metabólico con α-glucosil hesperidina, inulina, Gynostemma, ácido clorogénico, ALA, probiótico y minerales.",
    ingredients: "α-Glucosil hesperidina (300 mg), inulina de agave (300 mg), Gynostemma pentaphyllum (200 mg), ácido clorogénico (200 mg), ácido alfa lipoico (100 mg), Bifidobacterium lactis (1 billón UFC), zinc (2.5 mg), cromo picolinato (25 µg) por porción.",
    serving: "2 cápsulas (1.2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Apoya el metabolismo de la glucosa y lípidos",
      "Contribuye a la sensibilidad a la insulina",
      "Aporta antioxidantes y cofactores enzimáticos",
      "Favorece la salud intestinal con probióticos",
      "Ayuda al bienestar metabólico",
      "Es una fórmula sin estimulantes agresivos"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal o hepática, o bajo tratamiento con antidiabéticos, antihipertensivos o anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El cromo y el zinc pueden interactuar con medicamentos."
  },

  // ================================================================
  //  30. Artmuub 1.1 kg
  // ================================================================
  {
    id: 30,
    code: "7503025069791",
    name: "ARTMUUB 1.1 kg",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ARTMUUB_1-1.webp",
    shortDesc: "Suplemento en polvo multinutriente con proteínas, omega-3, vitaminas (C, E, D), minerales (magnesio, zinc) y fibra.",
    ingredients: "Proteínas (9 g), omega-3 (EPA 280 mg, DHA 210 mg, DPA 210 mg), vitamina C (390 mg), magnesio (150 mg), vitamina E (99.9 mg), zinc (9.9 mg), vitamina D (9.9 mg, posible error: mcg), fibra (4.4 g) por porción.",
    serving: "30 g",
    timing: "En ayunas o como reemplazo de comida",
    intakeInstructions: "Disolver 30 g (2 cucharadas) en 300-400 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Apoya el metabolismo energético",
      "Contribuye a la función cognitiva y cardiovascular",
      "Aporta proteínas y fibra para la saciedad",
      "Fortalece el sistema inmunológico",
      "Ayuda a la salud ósea y muscular",
      "Es una nutrición completa en polvo"
    ],
    contraindications: "Personas con alergia a pescados (omega-3), trastornos de coagulación, enfermedad renal o hepática, o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, antidiabéticos y diuréticos."
  },

  // ================================================================
  //  31. Artmuub 200 caps
  // ================================================================
  {
    id: 31,
    code: "7503029679736",
    name: "ARTMUUB 200 CAPS",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ARTMUUB1.png",
    shortDesc: "Fórmula articular con glucosamina, condroitina y MSM, para el mantenimiento del cartílago y la movilidad articular.",
    ingredients: "Glucosamina (sulfato) 600 mg, condroitina (sulfato) 500 mg, MSM 400 mg por porción.",
    serving: "2 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la salud del cartílago articular",
      "Contribuye a la movilidad y flexibilidad",
      "Ayuda a la reparación del tejido conectivo",
      "Reduce el desgaste articular",
      "Es una fórmula condroprotectora",
      "Favorece el bienestar músculo-esquelético"
    ],
    contraindications: "Personas con alergia a crustáceos (glucosamina), mujeres embarazadas, personas con diabetes o asma deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede afectar la glucemia en diabéticos; interactúa con anticoagulantes."
  },

  // ================================================================
  //  32. ASHWAGANDA ROOT (60 cápsulas)
  // ================================================================
  {
    id: 32,
    code: "7500645000418",
    name: "ASHWAGANDA ROOT",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ASHWAGANDA-ROOT1.webp",
    shortDesc: "Extracto y polvo de raíz de ashwagandha, adaptógeno para manejo del estrés, sueño y vitalidad.",
    ingredients: "Extracto de raíz de ashwagandha (600 mg, estandarizado al 5% withanólidos), polvo de raíz de ashwagandha (700 mg) por porción.",
    serving: "2 cápsulas (1.3 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Ayuda a manejar el estrés y la ansiedad",
      "Contribuye a la calidad del sueño",
      "Apoya la función cognitiva",
      "Favorece el equilibrio físico y mental",
      "Es un adaptógeno tradicional",
      "Ayuda a la vitalidad general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la tiroides, enfermedades autoinmunes, úlcera gástrica o bajo tratamiento con ansiolíticos, hipnóticos, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede causar somnolencia; interactúa con medicamentos ansiolíticos, hipnóticos, inmunosupresores y antidiabéticos."
  },

  // ================================================================
  //  33. ASHWAGANDHA (tabletas, 60 tabletas)
  // ================================================================
  {
    id: 33,
    code: "7503026253410",
    name: "ASHWAGANDHA",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/2ProductosComprimidos.jpg",
    shortDesc: "Extracto estandarizado de ashwagandha en tabletas, adaptógeno para estrés, sueño y equilibrio emocional.",
    ingredients: "Extracto de raíz de ashwagandha (500 mg, estandarizado al 5% withanólidos), celulosa microcristalina, estearato magnésico.",
    serving: "1 tableta (600 mg)",
    timing: "Con alimentos, por la mañana o antes de dormir",
    intakeInstructions: "Tomar 1 tableta al día con alimentos.",
    benefits: [
      "Reduce el estrés y la respuesta al cortisol",
      "Mejora la calidad del sueño",
      "Apoya la memoria y concentración",
      "Favorece el equilibrio emocional",
      "Aumenta la energía y resistencia física",
      "Apoya el sistema inmunológico"
    ],
    contraindications: "No recomendado durante embarazo o lactancia. Consultar a médico si se toman medicamentos para la tiroides, diabetes o inmunosupresores.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con medicamentos para la tiroides, diabetes e inmunosupresores."
  },

  // ================================================================
  //  34. ASTAXANTINA 250 mg (30 perlas)
  // ================================================================
  {
    id: 34,
    code: "7500645001101",
    name: "ASTAXANTINA",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2025/01/astaxantina.jpg",
    shortDesc: "Astaxantina de microalga Haematococcus pluvialis, potente antioxidante para la salud de la piel, ojos y articulaciones.",
    ingredients: "Astaxantina 250 mg (de Haematococcus pluvialis), en cápsula blanda con aceite base.",
    serving: "1 cápsula",
    timing: "Con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día con una comida que contenga grasas.",
    benefits: [
      "Potente antioxidante (superior a vitamina E)",
      "Protege la piel del daño oxidativo",
      "Apoya la salud ocular",
      "Contribuye a la salud articular",
      "Favorece la función cardiovascular",
      "Ayuda al envejecimiento saludable"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la microalga o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con anticoagulantes, inmunosupresores y medicamentos para la presión arterial."
  },

  // ================================================================
  //  35. BEEF FEAR 500 gr (NanoFear)
  // ================================================================
  {
    id: 35,
    code: "646437080682",
    name: "BEEF FEAR",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/BEEF-FEAR-CHOCO-5001.png",
    shortDesc: "Proteína de carne hidrolizada en polvo, rica en aminoácidos, creatina y taurina, para recuperación y fuerza muscular.",
    ingredients: "Proteína de carne hidrolizada (23 g por porción), creatina natural (7,600 mg), taurina (3,000 mg), perfil de aminoácidos completo.",
    serving: "33 g (1 medida)",
    timing: "Antes o después del entrenamiento",
    intakeInstructions: "Diluir 33 g en 240-300 ml de agua fría o leche. Tomar antes o después del entrenamiento.",
    benefits: [
      "Alta concentración de proteína de carne hidrolizada",
      "Aporta creatina y taurina naturales",
      "Perfil completo de aminoácidos",
      "Bajo en grasa y carbohidratos",
      "Favorece la recuperación muscular",
      "Ideal para atletas de alto rendimiento"
    ],
    contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  36. BERBERINA (120 cápsulas)
  // ================================================================
  {
    id: 36,
    code: "7500645000524",
    name: "BERBERINA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/08/ber.jpg",
    shortDesc: "Berberina HCI, alcaloide natural para apoyar el metabolismo de la glucosa y lípidos.",
    ingredients: "Berberina HCI 500 mg por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Apoya el metabolismo de la glucosa",
      "Contribuye a la sensibilidad a la insulina",
      "Ayuda a mantener niveles saludables de lípidos",
      "Modula la microbiota intestinal",
      "Es un alcaloide natural",
      "Favorece el bienestar metabólico"
    ],
    contraindications: "No administrar a menores de 18 años. Mujeres embarazadas o en lactancia, personas con enfermedad hepática o renal, o bajo tratamiento con antidiabéticos, antihipertensivos, anticoagulantes o ciclosporina deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con antidiabéticos, antihipertensivos, anticoagulantes y ciclosporina."
  },

  // ================================================================
  //  37. BPASS Bio Life 500 mg (El Girasol)
  // ================================================================
  {
    id: 37,
    code: "7508304671641",
    name: "BPASS Bio Life 500 mg",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BPASS1.webp",
    shortDesc: "Fórmula exclusiva con 10 ingredientes naturales, incluyendo L-carnitina, para apoyo metabólico y energético.",
    ingredients: "L-carnitina, polvo de raíz de India Lotus, Tejocote, Nopal, Café verde, Clorofila, Piña, Toronja, Apio, Alcachofa.",
    serving: "1 cápsula (500 mg)",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
    benefits: [
      "Apoya el metabolismo energético",
      "Contribuye a la utilización de grasas",
      "Aporta antioxidantes de plantas",
      "Ayuda a la saciedad",
      "Es una fórmula sinérgica natural",
      "Favorece el bienestar general"
    ],
    contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  38. CAFÉ CON MORINGA (El Girasol, 22 sobres)
  // ================================================================
  {
    id: 38,
    code: "7508304686836",
    name: "CAFE CON MORINGA 22 sobres",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CAFECONMORINGA.webp",
    shortDesc: "Bebida en polvo con café arábico, moringa, hongos medicinales (Reishi, Shiitake, Maitake) y stevia.",
    ingredients: "Café arábico, moringa, Reishi, Shiitake, Maitake, stevia, sustituto de crema.",
    serving: "20 g (1 sobre, rinde 3 tazas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar el contenido de un sobre en agua caliente, disolver y disfrutar. Cada sobre rinde 3 tazas.",
    benefits: [
      "Combina el sabor del café con superalimentos",
      "Aporta antioxidantes y compuestos bioactivos",
      "Contiene hongos medicinales tradicionales",
      "Sin gluten ni soya",
      "Edulcorado con stevia natural",
      "Favorece el bienestar general"
    ],
    contraindications: "NO CONSUMIR EN EMBARAZO. Personas intolerantes a los componentes deben evitarlo.",
    foodInteractions: "No especificado",
    interactions: "Contiene cafeína; evitar en personas sensibles."
  },

  // ================================================================
  //  39. CAFÉ DE OLLA 600 g (ZENnatura)
  // ================================================================
  {
    id: 39,
    code: "7503025069005",
    name: "CAFE DE OLLA 600 g",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/cafe.jpg",
    shortDesc: "Mezcla de café tostado con especias tradicionales, sin azúcares añadidos, baja en carbohidratos.",
    ingredients: "Café tostado en grano (Coffea arabica), especias tradicionales (canela, clavo, anís estrella).",
    serving: "15 g (2 cucharadas)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 15 g en 200-250 ml de agua caliente. Mezclar bien. Endulzar al gusto.",
    benefits: [
      "Sabor tradicional de café de olla sin azúcar",
      "Bajo en carbohidratos (0.3 g por porción)",
      "Aporta antioxidantes del café y especias",
      "Ayuda a la concentración",
      "Es versátil y reconfortante",
      "Favorece el bienestar general"
    ],
    contraindications: "Personas sensibles a la cafeína, hipertensión no controlada, trastornos de ansiedad o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "La cafeína puede interactuar con ciertos medicamentos."
  },

  // ================================================================
  //  40. CAFÉ SOLUBLE 30 sobres (con hongos y arándanos)
  // ================================================================
  {
    id: 40,
    code: "7500645000814",
    name: "CAFE SOLUBLE 30 sobres",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CAFESOLUBLE.jpg",
    shortDesc: "Café soluble con extractos de Ganoderma, Shiitake y mezcla de arándanos, para energía y soporte inmune.",
    ingredients: "Café soluble, extracto de Ganoderma (500 mg), extracto de Shiitake (500 mg), mezcla de arándanos (cranberry, bilberry, blueberry) 2 mg por sobre.",
    serving: "1 sobre (4.5 g)",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Disolver 1 sobre en 200-250 ml de agua caliente. Endulzar al gusto.",
    benefits: [
      "Combina café con hongos adaptógenos",
      "Aporta antioxidantes y polifenoles",
      "Apoya el sistema inmunológico",
      "Ayuda a la concentración",
      "Sin azúcares añadidos",
      "Favorece el bienestar integral"
    ],
    contraindications: "Personas sensibles a la cafeína, hipertensión, trastornos de ansiedad, alergia a hongos o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "La cafeína puede interactuar con ciertos medicamentos."
  },

  // ================================================================
  //  41. CANELA CROMO 1 g (120 cápsulas)
  // ================================================================
  {
    id: 41,
    code: "7503021404633",
    name: "CANELA CROMO",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CANELA-CROMO1.jpg",
    shortDesc: "Complejo de canela y picolinato de cromo con vitaminas y minerales, para el metabolismo de la glucosa.",
    ingredients: "Canela (950 mg), vitamina C (300 mg), potasio (200 mg), fósforo (200 mg), vitamina E (200 mg), calcio (100 mg), hierro (20 mg), vitaminas B1 (15 mg), B2 (14.9 mg), picolinato de cromo (200 mcg), vitamina B12 (12 mcg) por porción.",
    serving: "2 cápsulas (2 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Apoya el metabolismo de la glucosa",
      "Mejora la sensibilidad a la insulina",
      "Aporta vitaminas y minerales esenciales",
      "Ayuda a reducir antojos de azúcar",
      "Protege las células del estrés oxidativo",
      "Favorece el bienestar metabólico"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la canela, enfermedad renal o hepática, o bajo tratamiento con antidiabéticos, anticoagulantes o antihipertensivos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El cromo interactúa con antidiabéticos; la vitamina K (no presente) con anticoagulantes."
  },

  // ================================================================
  //  42. CARA LLUMA 500 mg (30 cápsulas)
  // ================================================================
  {
    id: 42,
    code: "7503025069043",
    name: "CARA LLUMA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CARALLUMA1.jpg",
    shortDesc: "Extracto de Caralluma fimbriata, planta tradicional para apoyar el control del apetito y el peso.",
    ingredients: "Extracto de Caralluma fimbriata (partes aéreas) 500 mg por cápsula.",
    serving: "1 cápsula (500 mg)",
    timing: "Antes de las comidas",
    intakeInstructions: "Tomar 1 cápsula al día antes de las comidas principales.",
    benefits: [
      "Ayuda a reducir el apetito",
      "Contribuye al control del peso",
      "Aumenta la sensación de saciedad",
      "Es de origen vegetal tradicional",
      "Apoya el metabolismo",
      "Favorece un estilo de vida saludable"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede causar molestias gastrointestinales leves."
  },

  // ================================================================
  //  43. CARSYL GREEN (60 cápsulas)
  // ================================================================
  {
    id: 43,
    code: "7503016797115",
    name: "CARSYL GREEN",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/carsyl.png",
    shortDesc: "Fórmula botánica con cardo mariano, boldo, ruibarbo, cuasia y diente de león, para apoyo hepático y digestivo.",
    ingredients: "Hoja de cardo mariano, hojas de boldo, ruibarbo, cuasia, diente de león (extractos en proporción no especificada).",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Apoya la función hepática",
      "Contribuye a la digestión y secreción biliar",
      "Ayuda al bienestar digestivo",
      "Es de origen botánico tradicional",
      "Favorece la depuración fisiológica",
      "Apoya el sistema digestivo"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, enfermedad hepática grave o bajo tratamiento con anticoagulantes, diuréticos o medicamentos para la diabetes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El ruibarbo puede tener efecto laxante; interactúa con anticoagulantes y diuréticos."
  },

  // ================================================================
  //  44. CASTAÑO DE INDIAS 400 mg (El Girasol, 150 cápsulas)
  // ================================================================
  {
    id: 44,
    code: "7501734412877",
    name: "CASTAÑO DE INDIAS",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CASTANODEINDIAS.webp",
    shortDesc: "Extracto de castaño de Indias (Aesculus hippocastanum), rico en escina, para apoyo a la circulación venosa.",
    ingredients: "Extracto de castaño de Indias (Aesculus hippocastanum) 400 mg por cápsula.",
    serving: "2 cápsulas (800 mg)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas tres veces al día, antes de los alimentos.",
    benefits: [
      "Apoya la circulación venosa",
      "Contribuye al tono venoso",
      "Ayuda a reducir la permeabilidad capilar",
      "Tiene acción antiinflamatoria",
      "Es de origen botánico tradicional",
      "Favorece el bienestar vascular"
    ],
    contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "No especificado",
    interactions: "No se conocen interacciones significativas."
  },

  // ================================================================
  //  45. CHROMIUM (60 cápsulas, 400 mg)
  // ================================================================
  {
    id: 45,
    code: "7503026253601",
    name: "CHROMIUM",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0001s_0002_Presentacion-blanco.jpg",
    shortDesc: "L-carnitina tartrato y polinicotinato de cromo para apoyo al metabolismo energético y la función celular.",
    ingredients: "L-carnitina tartrato (100 mg), polinicotinato de cromo (aporte de 20.32 mcg de cromo elemental) por cápsula.",
    serving: "1 cápsula (400 mg)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
    benefits: [
      "Apoya el metabolismo energético",
      "Contribuye al transporte de ácidos grasos",
      "Potencia la acción de la insulina",
      "Ayuda a la reducción del cansancio",
      "Es una fórmula sinérgica",
      "Favorece el bienestar metabólico"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con diabetes, enfermedad renal, trastornos de la tiroides o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "El cromo interactúa con antidiabéticos y anticoagulantes."
  },

  // ================================================================
  //  46. CITRATO DE MAGNESIO POWDER 500 g
  // ================================================================
  {
    id: 46,
    code: "7500645001033",
    name: "CITRATO DE MAGNESIO POWDER 500 gr",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0001s_0002_Presentacion-blanco.jpg",
    shortDesc: "Citrato de magnesio en polvo con colágeno hidrolizado, para apoyo muscular, óseo y de la piel.",
    ingredients: "Citrato de magnesio (aporte de 500 mg de magnesio elemental por porción), colágeno hidrolizado (1.5 g por porción).",
    serving: "10 g (1 cucharada)",
    timing: "Con alimentos",
    intakeInstructions: "Disolver 10 g en 200-300 ml de agua, jugo o leche vegetal. Consumir una vez al día.",
    benefits: [
      "Aporta magnesio de alta biodisponibilidad",
      "Contribuye a la función muscular y nerviosa",
      "Apoya la salud ósea",
      "Incluye colágeno para piel y articulaciones",
      "Bajo en calorías y carbohidratos",
      "Favorece el bienestar general"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con diuréticos, antibióticos (tetraciclinas, quinolonas) y bifosfonatos."
  },

  // ================================================================
  //  47. CITRATO DE POTASIO 90 caps 500 mg
  // ================================================================
  {
    id: 47,
    code: "7503029679002",
    name: "CITRATO DE POTASIO",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/potassium.jpg",
    shortDesc: "Suplemento de potasio en forma de citrato, para el equilibrio electrolítico y la función muscular.",
    ingredients: "Citrato de potasio 750 mg (aporte de 240.24 mg de potasio elemental) por porción.",
    serving: "3 cápsulas (1.5 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
    benefits: [
      "Contribuye al equilibrio electrolítico",
      "Apoya la función muscular y nerviosa",
      "Ayuda a mantener la presión arterial normal",
      "Es una forma orgánica de alta biodisponibilidad",
      "Favorece el bienestar general",
      "Complementa la dieta en casos de pérdida de líquidos"
    ],
    contraindications: "Personas con enfermedad renal, insuficiencia cardíaca, hipertensión no controlada o bajo tratamiento con diuréticos ahorradores de potasio o inhibidores de la ECA deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con diuréticos ahorradores de potasio, inhibidores de la ECA y ARA II."
  },

  // ================================================================
  //  48. CLOROFILA LÍQUIDA 500 ml
  // ================================================================
  {
    id: 48,
    code: "7503016797139",
    name: "CLOROFILA LIQUIDA 500 ml",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/CLOROFILALIQUIDA.jpg",
    shortDesc: "Solución de clorofila líquida, para apoyo a la depuración fisiológica y la salud intestinal.",
    ingredients: "Clorofilina sódico-cúprica (extracto de clorofila), agua purificada, estabilizantes.",
    serving: "15 ml (3 cucharaditas)",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Diluir 15 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Apoya la depuración fisiológica",
      "Contribuye a la salud intestinal",
      "Ayuda a refrescar el aliento",
      "Es baja en calorías y azúcares",
      "Aporta antioxidantes",
      "Favorece el bienestar general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con problemas hepáticos o biliares, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede teñir las heces de verde, fenómeno inofensivo."
  },

  // ================================================================
  //  49. CLOROFILA LÍQUIDA Y HIERBABUENA (500 ml)
  // ================================================================
  {
    id: 49,
    code: "7503029679118",
    name: "CLOROFILA LÍQUIDA Y HIERBABUENA (500 ml)",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CLOROFILA1.webp",
    shortDesc: "Clorofila líquida con hierbabuena, menta piperita y té matcha, para bienestar digestivo y antioxidante.",
    ingredients: "Extracto de clorofila (10 ml), extracto de hierbabuena (5 ml), extracto de menta piperita (2.5 ml), extracto de té matcha (2.5 ml) por porción.",
    serving: "20 ml",
    timing: "En ayunas o entre comidas",
    intakeInstructions: "Agitar antes de usar. Diluir 20 ml en un vaso de agua, jugo o infusión. Tomar una vez al día.",
    benefits: [
      "Apoya la digestión y el bienestar intestinal",
      "Aporta antioxidantes de clorofila y matcha",
      "Favorece la depuración fisiológica",
      "Efecto refrescante y carminativo",
      "Sin calorías ni azúcares",
      "Favorece el equilibrio general"
    ],
    contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, problemas hepáticos o biliares, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede teñir las heces de verde, fenómeno inofensivo."
  },

  // ================================================================
  //  50. CLORURO DE MAGNESIO 100 CAPS ZN
  // ================================================================
  {
    id: 50,
    code: "7503021404602",
    name: "CLORURO DE MAGNESIO",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/cloruro.jpg",
    shortDesc: "Cloruro de magnesio en cápsulas con vitamina C, calcio y vitamina D, para función muscular y nerviosa.",
    ingredients: "Magnesio elemental (240 mg), vitamina C (10 mg), calcio (4 mg), vitamina D (4 mg – probable error: 4 mcg) por porción.",
    serving: "2 cápsulas (1 g)",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
    benefits: [
      "Aporta magnesio de alta biodisponibilidad",
      "Contribuye a la función muscular y nerviosa",
      "Ayuda a reducir el cansancio",
      "Apoya la salud ósea",
      "Incluye vitamina C y D",
      "Favorece el bienestar general"
    ],
    contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con diuréticos, antibióticos (tetraciclinas, quinolonas) y bifosfonatos."
  },
  // 51. MOROIZY 90 caps 500 mg
{
  id: 51,
  code: "7503021404961",
  name: "MOROIZY",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MOROIZY.jpg",
  shortDesc: "Fórmula botánica y vitamínica que combina extractos de plantas tradicionalmente utilizadas para el bienestar articular, la circulación y la función inmune.",
  ingredients: "Sauce blanco (Salix alba), corteza de ajo, hamamelis, vitamina C, vitamina E, vitamina B12, zinc.",
  serving: "3 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la salud articular",
    "Contribuye a la función inmune",
    "Aporta antioxidantes",
    "Ayuda a la circulación",
    "Favorece la recuperación muscular",
    "Es de origen botánico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la aspirina o a los salicilatos, trastornos de coagulación, úlcera gástrica, o bajo tratamiento con anticoagulantes, antiagregantes plaquetarios, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antiagregantes plaquetarios, antidiabéticos."
},

// 52. MYO + D-CHIRO Inositol 500 mg (90 caps)
{
  id: 52,
  code: "7500645000838",
  name: "MYO + D-CHIRO INOSITOL 500 mg",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO1.png",
  shortDesc: "Fórmula con Myo-Inositol y D-Chiro-Inositol en proporción 40:1, con arándano azul, para el equilibrio hormonal y metabólico.",
  ingredients: "Myo-Inositol (1900 mg), D-Chiro-Inositol (50 mg), polvo de fruto de arándano azul (50 mg) por porción.",
  serving: "4 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Apoya el equilibrio hormonal femenino",
    "Contribuye a la sensibilidad a la insulina",
    "Ayuda a la regularidad del ciclo menstrual",
    "Protege las células del estrés oxidativo",
    "Es una combinación fisiológica (40:1)",
    "Favorece el bienestar metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos, anticoagulantes o medicamentos que afectan los niveles de glucosa deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos y anticoagulantes."
},

// 53. MYO + D-CHIRO INOSITOL POWDER 300g - 40:1
{
  id: 53,
  code: "7500645001071",
  name: "MYO + D-CHIRO INOSITOL POWDER 300g - 40:1",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MYO-DCHIRO-INOSITOL-POWDER1.jpg",
  shortDesc: "Polvo puro de inositol en proporción 40:1 (Myo 4000 mg, D-Chiro 100 mg por porción), sin excipientes.",
  ingredients: "Myo-Inositol (4000 mg), D-Chiro-Inositol (100 mg) por porción.",
  serving: "4.1 g (1 cucharada)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 4.1 g en agua, jugo o bebida vegetal. Consumir una vez al día.",
  benefits: [
    "Proporción fisiológica 40:1 de inositoles",
    "Apoya el metabolismo de la glucosa",
    "Contribuye al equilibrio hormonal",
    "100% puro, sin aditivos",
    "Favorece la salud ovárica",
    "Ayuda al bienestar metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos o medicamentos que afectan la glucosa deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos."
},

// 54. Curcumina (90 caps, con piperina y vitamina C)
{
  id: 54,
  code: "7503026253557",
  name: "CURCUMINA",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Curcumina1-1.jpg",
  shortDesc: "Extracto de cúrcuma al 95% de curcuminoides, con pimienta negra y vitamina C para mejorar la biodisponibilidad.",
  ingredients: "Curcumina al 95% de curcuminoides (1050 mg), vitamina C (300 mg), pimienta negra (20 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos que contengan grasas saludables.",
  benefits: [
    "Alta concentración de curcuminoides",
    "Potente actividad antioxidante",
    "Apoya la salud articular y digestiva",
    "Mejora la biodisponibilidad con piperina",
    "Protege las células del estrés oxidativo",
    "Contribuye al bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción biliar, cálculos biliares, trastornos de coagulación o bajo tratamiento con anticoagulantes, antiagregantes plaquetarios, antidiabéticos o medicamentos metabolizados por CYP3A4 deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antiagregantes plaquetarios, antidiabéticos y fármacos metabolizados por CYP3A4."
},

// 55. D3 1000u 30 caps (con vitamina C, equinácea)
{
  id: 55,
  code: "7503029679101",
  name: "D3 1000u 30 caps",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/D3-1000u-1.jpg",
  shortDesc: "Complejo de defensa estacional con vitamina D3, vitamina C y equinácea, para fortalecer las defensas naturales.",
  ingredients: "Vitamina D3 (125 mcg, aunque se anuncia como 1000 UI, posible error), vitamina C (300 mg), equinácea (300 mg) por porción.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya el sistema inmunológico",
    "Contribuye a la salud ósea y muscular",
    "Aporta vitamina C antioxidante",
    "Ayuda a reducir el cansancio",
    "Fórmula de defensa estacional",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con hipercalcemia, sarcoidosis, enfermedad renal grave, alergia a la equinácea (Asteraceae) o bajo tratamiento con anticoagulantes, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, inmunosupresores y antidiabéticos."
},

// 56. DEMOGRASS CLÁSICO (30 cápsulas)
{
  id: 56,
  code: "7501172019331",
  name: "DEMOGRASS CLÁSICO",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSCLASICO.webp",
  shortDesc: "Mezcla de 9 ingredientes naturales con alta fibra, para apoyar la salud digestiva y el bienestar general.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, bromelina.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Aporta fibra dietética",
    "Apoya la salud digestiva",
    "Contribuye a la saciedad",
    "Contiene enzimas y plantas tradicionales",
    "Bajo en calorías",
    "Favorece el bienestar general"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a un médico antes de usar.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 57. Demograss Plus (30 cápsulas, 14 ingredientes)
{
  id: 57,
  code: "7501172018228",
  name: "DEMOGRASS PLUS",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPLUS.webp",
  shortDesc: "Mezcla de 14 ingredientes naturales, incluyendo tés y plantas tradicionales, alta en fibra, para apoyo digestivo.",
  ingredients: "Aloe vera, guaraná, naranjo, lino, alisma, lima, milenrama, nopal, zarzaparrilla, diente de león, té rojo, té blanco.",
  serving: "1 cápsula (500 mg)",
  timing: "En ayunas",
  intakeInstructions: "Tomar 1 cápsula al día en ayunas.",
  benefits: [
    "Alto contenido de fibra",
    "Apoya la salud digestiva",
    "Contribuye a la depuración",
    "Rico en polifenoles y antioxidantes",
    "Sin grasas ni sodio",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades crónicas deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 58. DIOLA ROSE (90 caps)
{
  id: 58,
  code: "7500645000791",
  name: "DIOLA ROSE",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Diola-Rose1-1.jpg",
  shortDesc: "Fórmula sinérgica que combina Rhodiola Rosea (450 mg), un adaptógeno que apoya la resistencia al estrés físico y mental, con citrato de magnesio (500 mg) de alta biodisponibilidad y polen de abeja (50 mg) para promover la vitalidad y la recuperación.",
  ingredients: "Citrato de magnesio (aporte de magnesio elemental ≈ 70 mg) (500 mg), Rhodiola Rosea (extracto de raíz estandarizado en rosavinas y salidrósido) (450 mg), polen de abeja en polvo (50 mg).",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para resultados óptimos en la adaptación al estrés y la vitalidad, se recomienda un uso continuo de al menos 4-8 semanas.",
  benefits: [
    "Rhodiola Rosea como adaptógeno que apoya la resistencia al estrés físico y mental",
    "Ayuda a reducir la fatiga y mejorar el rendimiento cognitivo",
    "Citrato de magnesio que contribuye a la función muscular y nerviosa",
    "Favorece el equilibrio electrolítico y la reducción del cansancio",
    "Polen de abeja que aporta nutrientes para la vitalidad y recuperación",
    "Fórmula con mínimo aporte calórico (0.60 kcal por porción)"
  ],
  contraindications: "No consumir por menores de 12 años. No consumir durante el embarazo o lactancia. Producto elaborado en líneas que procesan derivados de soya, leche, pescado y crustáceos. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "No especificado",
  interactions: "No especificado"
},

// 59. DT Green (15 caps)
{
  id: 59,
  code: "7503016797207",
  name: "DT GREEN",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0000s_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica con té, papaya, toronja, malva, espirulina y jengibre, para apoyo a la depuración y digestión.",
  ingredients: "Hojas de té, papaya, toronja, malva, espirulina, jengibre.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la depuración del organismo",
    "Contribuye a la salud digestiva",
    "Aporta antioxidantes y enzimas",
    "Ayuda a la función hepática",
    "Es de origen natural",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o medicamentos metabolizados por CYP3A4 deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "La toronja puede interactuar con numerosos fármacos."
},

// 60. Endis (90 caps, enzimas digestivas)
{
  id: 60,
  code: "7503021404657",
  name: "ENDIS",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ENENDIS.png",
  shortDesc: "Fórmula enzimática con papaya, papaina, bromelina, amilasa, lipasa, pancreatina y hierbabuena, para apoyo digestivo.",
  ingredients: "Papaya (400 mg), papaina (180 mg), bromelina (170 mg), fosfato de calcio (100 mg), amilasa (50 mg), pancreatina (50 mg), lipasa (30 mg), hierbabuena (20 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 2 cápsulas antes de las comidas principales.",
  benefits: [
    "Facilita la digestión de proteínas, carbohidratos y grasas",
    "Reduce la sensación de pesadez",
    "Aporta enzimas de origen vegetal y animal",
    "Contiene hierbabuena para el confort digestivo",
    "Ayuda a la absorción de nutrientes",
    "Favorece el bienestar gastrointestinal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la papaya, piña, menta, úlcera gástrica activa, pancreatitis aguda o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede aumentar el riesgo de sangrado con anticoagulantes."
},

// 61. EQUINACEA Y VITAMINA C 500 mg (90 caps)
{
  id: 61,
  code: "7503029679057",
  name: "EQUINACEA Y VITAMINA C",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Equinacea1.jpg",
  shortDesc: "Combinación de equinácea y vitamina C para fortalecer las defensas naturales del organismo.",
  ingredients: "Equinácea (200 mg), vitamina C (300 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Fortalecimiento del sistema inmunológico",
    "Aporta vitamina C antioxidante",
    "Ayuda a reducir el cansancio",
    "Tradicionalmente usado en cambios estacionales",
    "Fórmula sinérgica",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a plantas de la familia Asteraceae o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con inmunosupresores."
},

// PRODUCTO 62 - EVEAUX 500 mg
{
  id: 62,
  code: "7503021404589",
  name: "EVEAUX 500 mg",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/eveaux.jpg",
  shortDesc: "Suplemento integral con vitaminas, minerales, aminoácidos esenciales, colágeno, queratina, sílice y ácido hialurónico, diseñado para apoyar la salud de la piel, el cabello y las uñas.",
  ingredients: "Concentrado de proteína de soya, vitaminas (A, B1, B3, B5, B7, B9, C, D, E), selenio, aminoácidos (L-cisteína, L-metionina, L-leucina, L-valina, L-lisina), colágeno, queratina, sílice, ácido hialurónico.",
  serving: "3 cápsulas al día",
  timing: "Preferentemente con alimentos para mejorar la absorción",
  intakeInstructions: "Tomar 3 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Apoya la salud de la piel, el cabello y las uñas",
    "Biotina que contribuye al mantenimiento de la piel y el cabello",
    "Vitaminas C y E con actividad antioxidante para la protección celular",
    "Aminoácidos esenciales que contribuyen a la síntesis de colágeno y queratina",
    "Ácido hialurónico que favorece la hidratación y elasticidad de la piel",
    "Fórmula integral con vitaminas, minerales y compuestos estructurales"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "No especificado",
  interactions: "No especificado"
},

// 63. Fenogreco (90 caps)
{
  id: 63,
  code: "7503026253885",
  name: "FENOGRECO",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/fenogreco-1.jpg",
  shortDesc: "Semilla de fenogreco en polvo, rica en fibra y saponinas, para apoyo digestivo y metabólico.",
  ingredients: "Fenogreco (Trigonella foenum-graecum) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la digestión y el metabolismo",
    "Contribuye al mantenimiento de niveles normales de glucosa",
    "Rico en fibra soluble",
    "Ayuda a la salud hormonal",
    "Es de origen vegetal",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a legumbres o bajo tratamiento con antidiabéticos, anticoagulantes o hormonales deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos, anticoagulantes y hormonales."
},

// 64. FITMINGO 510 GR VAINILLA (proteína vegetal)
{
  id: 64,
  code: "7503037273384",
  name: "FITMINGO 510 GR VAINILLA",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FITMINGO_LISTINGS_VAINILLA510_01_1.webp",
  shortDesc: "Proteína vegetal de chícharo y arroz, enriquecida con inositoles, ácido hialurónico y vitamina D3, sin alérgenos comunes.",
  ingredients: "Proteína de chícharo, proteína de arroz, inulina de agave, myo-inositol, D-chiro inositol, ácido hialurónico, bisglicinato de zinc, vitamina D3, stevia, canela.",
  serving: "34 g (1 medida)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 250-300 ml de agua o bebida vegetal. Tomar una vez al día.",
  benefits: [
    "Proteína completa de origen vegetal",
    "Alto contenido de BCAA's",
    "Incluye inositoles para equilibrio metabólico",
    "Aporta ácido hialurónico para articulaciones",
    "Vitamina D3 para salud ósea",
    "Sin soya, gluten, lácteos ni azúcares añadidos"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al coco o trazas de almendra deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "Contiene coco y trazas de almendra."
},

// 66. FLOR ESSENCE (500 ml, remedio herbolario)
{
  id: 66,
  code: "61998080702",
  name: "FLOR-ESSENCE",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FlorEssence1.webp",
  shortDesc: "Remedio herbolario con ocho hierbas tradicionales (bardana, acedera, olmo, kelp, cardo santo, berro, trébol rojo, ruibarbo), para el fortalecimiento de las defensas naturales.",
  ingredients: "Bardana (1135 mg), acedera (573 mg), olmo (143 mg), kelp (53 mg), cardo santo (53 mg), berro (53 mg), trébol rojo (53 mg), ruibarbo (37 mg) por 100 ml.",
  serving: "56 ml (una o dos veces al día)",
  timing: "Por la noche antes de acostarse y por la mañana 1 hora antes del primer alimento",
  intakeInstructions: "Agitar antes de usar. Diluir en igual cantidad de agua purificada. Tomar a sorbos lentamente.",
  benefits: [
    "Fortalecimiento de las defensas naturales",
    "Apoyo a la función digestiva y hepática",
    "Aporta compuestos antioxidantes",
    "Tradicionalmente usado como depurativo",
    "Mezcla de hierbas de uso ancestral",
    "Favorece el bienestar general"
  ],
  contraindications: "No administrar en pacientes con trasplantes, hipersensibilidad a los componentes, obstrucción intestinal, inflamación aguda, problemas de tiroides, embarazo, lactancia o niños menores de 10 años.",
  foodInteractions: "No especificado",
  interactions: "Puede producir espasmos gastrointestinales. Consultar con médico en caso de radioterapia o quimioterapia."
},

// 67. FUNGONE
{
  id: 67,
  code: "7503026253618",
  name: "FUNGONE",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Fungone1.jpg",
  shortDesc: "Fórmula avanzada que combina siete hongos medicinales (Reishi, Maitake, Chaga, Shiitake, Cordyceps, Turkey Tail y Melena de León) para apoyar el sistema inmunológico, la función cognitiva y la vitalidad.",
  ingredients: "Hongo Reishi (Ganoderma lucidum), hongo Maitake (Grifola frondosa), hongo Chaga (Inonotus obliquus), hongo Shiitake (Lentinula edodes), hongo Cordyceps (Cordyceps sinensis), hongo Turkey Tail (Trametes versicolor), hongo Melena de León (Hericium erinaceus) en polvo.",
  serving: "2 cápsulas al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Combina siete hongos medicinales de reconocido prestigio",
    "Apoya el sistema inmunológico con beta-glucanos y polisacáridos",
    "Favorece la función cognitiva y la salud neurológica (Melena de León)",
    "Contribuye a la vitalidad y la energía celular (Cordyceps)",
    "Poderoso perfil antioxidante (Chaga, Reishi)",
    "Promueve el equilibrio del organismo y la respuesta al estrés"
  ],
  contraindications: "Mujeres embarazadas, en periodo de lactancia, personas con alergia a los hongos, trastornos autoinmunitarios, o bajo tratamiento inmunosupresor o anticoagulante deben consultar a un profesional de la salud antes de consumirlo.",
  foodInteractions: "No especificado",
  interactions: "No especificado"
},

// 68. GABA (30 caps)
{
  id: 68,
  code: "7503021404695",
  name: "GABA",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GABA1.jpg",
  shortDesc: "Suplemento de GABA con zinc, selenio, vitamina B5 y B12, para apoyo a la relajación y función neurológica.",
  ingredients: "GABA (1200 mg), zinc (20 mg), selenio (100 mcg), vitamina B5 (20 mg), vitamina B12 (12 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la relajación y el equilibrio neuronal",
    "Contribuye a la reducción del estrés",
    "Mejora la calidad del sueño",
    "Aporta micronutrientes esenciales",
    "Favorece la función cognitiva",
    "Ayuda al bienestar mental"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas bajo tratamiento con ansiolíticos, hipnóticos o anticonvulsivantes, o con condiciones médicas deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede potenciar el efecto de ansiolíticos, hipnóticos y anticonvulsivantes."
},

// 69. GENTILAX (laxante con fenolftaleína) - se incluye pero con advertencia
{
  id: 69,
  code: "7501737500038",
  name: "GENTILAX",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/gentilax.webp",
  shortDesc: "Laxante estimulante a base de fenolftaleína, para alivio del estreñimiento ocasional. Uso bajo prescripción médica.",
  ingredients: "Fenolftaleína 60 mg por tableta.",
  serving: "1-2 tabletas (según indicación médica)",
  timing: "Antes de acostarse",
  intakeInstructions: "Tomar 1-2 tabletas antes de acostarse, según indicación médica. No usar por más de una semana.",
  benefits: [
    "Alivio efectivo del estreñimiento ocasional",
    "Acción en 6-12 horas",
    "Dosificación flexible",
    "Uso esporádico",
    "Bajo supervisión médica"
  ],
  contraindications: "No administrar en casos de dolor abdominal de origen desconocido, obstrucción intestinal, embarazo, lactancia, o en menores de 8 años sin prescripción médica.",
  foodInteractions: "No especificado",
  interactions: "El uso prolongado puede causar dependencia y alteraciones electrolíticas."
},

// 70. Ginkgo Biloba (90 caps)
{
  id: 70,
  code: "7503026253502",
  name: "GINKGO BILOBA",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ginko.jpg",
  shortDesc: "Extracto estandarizado de Ginkgo biloba, para apoyar la función cognitiva, la memoria y la circulación.",
  ingredients: "Extracto de Ginkgo biloba (estandarizado a 24% flavonoides glicósidos y 6% terpenlactonas).",
  serving: "3 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la función cognitiva y la memoria",
    "Mejora la microcirculación",
    "Protege las células del estrés oxidativo",
    "Uso tradicional en problemas circulatorios",
    "Contribuye al bienestar neurológico",
    "Ayuda a la concentración"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de la coagulación, epilepsia o bajo tratamiento con anticoagulantes, antiagregantes, antidepresivos ISRS o anticonvulsivantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede aumentar el riesgo de sangrado con anticoagulantes y antiagregantes."
},

// 71. GLUTAMINE FEAR (300 g)
{
  id: 71,
  code: "7503021404244",
  name: "GLUTAMINE FEAR",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Glutamina_1_46f39ebf-7ea9-40eb-9fe2-91c439e45717.webp",
  shortDesc: "L-Glutamina en polvo de alta pureza, para la recuperación muscular y el soporte del sistema inmune.",
  ingredients: "L-Glutamina pura (5000 mg por porción).",
  serving: "5 g (1 medida)",
  timing: "Post-entreno o antes de dormir",
  intakeInstructions: "Diluir 5 g en 200-250 ml de agua fría. Consumir después del entrenamiento o antes de dormir.",
  benefits: [
    "Aminoácido condicionalmente esencial",
    "Apoya la recuperación muscular",
    "Contribuye a la función inmunológica",
    "Ayuda al equilibrio del nitrógeno",
    "Sin carbohidratos ni grasas",
    "Alta pureza"
  ],
  contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "Puede contener trazas de alérgenos por procesamiento en instalaciones compartidas."
},

// 72. GLUTATHIONE BLEND 500 mg (120 caps)
{
  id: 72,
  code: "7500645000456",
  name: "GLUTATHIONE BLEND",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/gluta.jpg",
  shortDesc: "Combinación de glutatión reducido y vitamina C, para la protección celular y la desintoxicación.",
  ingredients: "Vitamina C (250 mg), glutatión (100 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Potente antioxidante celular",
    "Apoya la desintoxicación hepática",
    "Regenera la vitamina C y E",
    "Contribuye a la función inmunológica",
    "Protege las células del estrés oxidativo",
    "Fórmula sinérgica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes, quimioterapia o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, quimioterapia e inmunosupresores."
},

// 73. GOJI TRIM® 500 mg BIO LIFE (30 caps)
{
  id: 73,
  code: "690939403401",
  name: "GOJI TRIM 500 mg BIO LIFE",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GOJI.webp",
  shortDesc: "Suplemento a base de semillas de baya de Goji, con linaza, raíz de lima, malva y lecitina de soya, para apoyo nutricional.",
  ingredients: "Semilla de baya de Goji, linaza, raíz de lima, malva, lecitina de soya.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Fuente de antioxidantes y nutrientes",
    "Apoya la salud digestiva e inmunológica",
    "Aporta fibra y minerales",
    "Tradicionalmente usado como tónico",
    "Ayuda al bienestar general",
    "Contiene soya"
  ],
  contraindications: "Contiene soya. Consultar a médico si se tienen alergias o condiciones médicas.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 74. GOJI (30 caps)
{
  id: 74,
  code: "7506022814081",
  name: "GOJI",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GOJI1.jpg",
  shortDesc: "Extracto de baya de Goji con pingüica, diente de león, extractos cítricos, ácido clorogénico y BHB, para apoyo metabólico.",
  ingredients: "Bayas de Goji, pingüica, raíz de diente de león, extractos cítricos, ácido clorogénico, BHB.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Rico en antioxidantes y polisacáridos",
    "Apoya el metabolismo energético",
    "Contribuye al bienestar digestivo",
    "Ayuda a la depuración fisiológica",
    "Es de origen vegetal",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a frutas de la familia Solanaceae o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes (vitamina K)."
},

// 75. GOJIZEN MAX (ACTUALIZADO)
{
  id: 75,
  code: "7503025069036",
  name: "GOJIZEN MAX",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/correjidos_0000_freepik__reflective-red-plastic-bottle-gently-tapered-shoul__80768.jpg",
  shortDesc: "Suplemento alimenticio que combina una mezcla botánica de bayas de Goji, mango africano, linaza, piña y papaya con micronutrientes esenciales (vitamina B12, magnesio y calcio) para apoyar el bienestar general y el metabolismo.",
  ingredients: "Bayas de Goji (Lycium barbarum), mango africano (Irvingia gabonensis), linaza (Linum usitatissimum), raíz de lima, piña (Ananas comosus), papaya (Carica papaya), lecitina de soya, vitamina C, vitamina E, vitamina B12 (cianocobalamina) (6 µg), magnesio elemental (9 mg), calcio elemental (8 mg).",
  serving: "1 cápsula al día",
  timing: "Preferentemente con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
  benefits: [
    "Mezcla botánica con bayas de Goji, mango africano, linaza, piña y papaya",
    "Apoya el bienestar general y el metabolismo",
    "Aporta enzimas digestivas naturales (bromelina y papaína)",
    "Contiene vitamina C y E con actividad antioxidante",
    "Fibra botánica que favorece el tránsito intestinal",
    "Fórmula con mínimo aporte calórico (1 kcal por porción)"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
  foodInteractions: "No especificado",
  interactions: "No especificado"
},

// 76. GREEN LX 300 mg (50 tabletas)
{
  id: 76,
  code: "7503016797597",
  name: "GREEN LX",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/GREEEN-XL.jpg",
  shortDesc: "Fórmula botánica con ciruela pasa, tamarindo, papaya, sábila y manzana, para apoyar el tránsito intestinal regular.",
  ingredients: "Ciruela pasa, tamarindo, papaya, sábila, manzana.",
  serving: "1 tableta (300 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 tableta al día con alimentos.",
  benefits: [
    "Apoya la regularidad intestinal",
    "Contribuye al confort digestivo",
    "Fuente de fibra y enzimas",
    "Ayuda a la sensación de ligereza",
    "De origen natural",
    "Favorece el bienestar digestivo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con obstrucción intestinal, enfermedad inflamatoria intestinal activa o bajo tratamiento con diuréticos, antiarrítmicos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El aloe vera puede tener efecto laxante."
},

// 77. HERCAMPURRI 500 mg (90 caps)
{
  id: 77,
  code: "7503026253908",
  name: "HERCAMPURI",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/HERCAMPURRI.jpg",
  shortDesc: "Suplemento de hercampuri (Gentianella alborosea), planta andina tradicional para el apoyo digestivo.",
  ingredients: "Hercampuri (Gentianella alborosea) en polvo 1500 mg por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día antes de las comidas principales.",
  benefits: [
    "Estimula la digestión y secreción biliar",
    "Ayuda a aliviar digestiones pesadas",
    "Tradicionalmente usado en los Andes",
    "Apoya la función hepática",
    "Es de origen vegetal",
    "Favorece el bienestar digestivo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, gastritis hiperácida, enfermedad de la vesícula biliar u obstrucción biliar deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con medicamentos que afectan la secreción gástrica."
},

// 78. HPR PROS GREEN ZEN (120 caps)
{
  id: 78,
  code: "7500645000340",
  name: "HPR PROS",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/HPRPros.jpg",
  shortDesc: "Fórmula para la salud del tracto urinario y función inmune, con arándano, semilla de calabaza, ciruelo africano, equinácea, cúrcuma, zinc y selenio.",
  ingredients: "Arándano (125 mg), semilla de calabaza (100 mg), ciruelo africano (90 mg), equinácea (90 mg), cúrcuma (75 mg), zinc (20 mg), selenio (100 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la salud del tracto urinario",
    "Contribuye a la función prostática",
    "Fortalece el sistema inmunológico",
    "Aporta antioxidantes y minerales",
    "Fórmula integral para la salud masculina",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal, hepática, trastornos autoinmunes o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El zinc en dosis altas puede interferir con la absorción de cobre."
},

// 79. INOSITOL POWDER (120 caps)
{
  id: 79,
  code: "7500645000395",
  name: "INOSITOL POWDER",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Inositol1.jpg",
  shortDesc: "Myo-inositol en cápsulas, para apoyar el metabolismo de la glucosa y el equilibrio hormonal.",
  ingredients: "Myo-inositol 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la señalización de la insulina",
    "Contribuye al metabolismo de los carbohidratos",
    "Ayuda al equilibrio hormonal",
    "Es un pseudovitamínico del complejo B",
    "Favorece el bienestar metabólico",
    "Fórmula sencilla y pura"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antidiabéticos o medicamentos que afectan el estado de ánimo deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos."
},

// 80. ISOFLAVONAS DE SOYA 500 mg (90 caps)
{
  id: 80,
  code: "7503021404503",
  name: "ISOFLAVONAS DE SOYA 500 mg",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ISOFLAVONAS1.webp",
  shortDesc: "Fórmula con isoflavonas de soya, camote silvestre, arándano rojo, vitaminas A, E, B1, B12, para el bienestar femenino y equilibrio hormonal.",
  ingredients: "Arándano rojo (636 mg), camote silvestre (600 mg), vitamina E (150 mg), isoflavonas de soya (90 mg), vitamina B1 (15 mg), vitamina A (900 mcg), vitamina B12 (12 mcg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Apoya el equilibrio hormonal femenino",
    "Contribuye a la salud de la piel y el cabello",
    "Ayuda a aliviar síntomas de la menopausia",
    "Aporta antioxidantes y vitaminas",
    "Favorece la salud del tracto urinario",
    "Es de origen vegetal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la soya, antecedentes de cáncer de mama o endometrio, o bajo tratamiento hormonal deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Las isoflavonas pueden tener efectos estrogénicos; supervisar en casos de sensibilidad hormonal."
},

// 81. JENGIBRE 500 mg (60 caps)
{
  id: 81,
  code: "7503021404176",
  name: "JENGIBRE",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/JENGIBRE.jpg",
  shortDesc: "Raíz de jengibre en polvo en cápsulas, para apoyo digestivo y alivio de náuseas.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo 1000 mg por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la digestión y alivia las náuseas",
    "Contribuye a la función carminativa",
    "Aporta antioxidantes y compuestos antiinflamatorios",
    "Tradicionalmente usado para el confort estomacal",
    "Es de origen vegetal",
    "Favorece el bienestar digestivo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, gastritis, reflujo severo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
},

// 82. Krill Oil (80 cápsulas)
{
  id: 82,
  code: "7500645000463",
  name: "KRILL OIL",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/krill-1.jpg",
  shortDesc: "Aceite de krill concentrado en EPA, DHA, fosfolípidos y astaxantina, para apoyo cardiovascular y cerebral.",
  ingredients: "Aceite de krill (1.2 g) con EPA (400 mg), DHA (200 mg), fosfolípidos (300 mg), astaxantina (30 mg) por cápsula.",
  serving: "1 cápsula (1.2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Fuente de omega-3 de alta biodisponibilidad",
    "Apoya la función cardiovascular y cerebral",
    "Contiene astaxantina antioxidante",
    "Fosfolípidos para mejor absorción",
    "Ayuda a mantener niveles normales de triglicéridos",
    "Favorece la salud ocular y cognitiva"
  ],
  contraindications: "Personas con alergia a crustáceos o mariscos, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes."
},

// 83. L-ARGININA NANO FEAR 850MG (100 cápsulas)
{
  id: 83,
  code: "7503021404596",
  name: "L-ARGININA NANO FEAR 850MG",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-ARGININA-1.jpg",
  shortDesc: "L-Arginina con L-Ornitina, para mejorar el flujo sanguíneo y el rendimiento deportivo.",
  ingredients: "L-Arginina (2550 mg), L-Ornitina (150 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Antes del entrenamiento",
  intakeInstructions: "Tomar 3 cápsulas antes de la actividad física.",
  benefits: [
    "Precursor del óxido nítrico",
    "Mejora la vasodilatación y el flujo sanguíneo",
    "Apoya el rendimiento y la recuperación muscular",
    "Ayuda a la síntesis de creatina",
    "Reduce la fatiga muscular",
    "Fórmula con L-Ornitina sinérgica"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, hipotensión arterial, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 84. L-CARNITINA, GUARANÁ Y GARCINIA (100 cápsulas)
{
  id: 84,
  code: "7501062913671",
  name: "L-CARNITINA, GUARANÁ Y GARCINIA",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Carnitina1.webp",
  shortDesc: "Fórmula termogénica con L-carnitina, guaraná, cafeína, Garcinia, cayena y extractos vegetales, para apoyo al metabolismo y la oxidación de grasas.",
  ingredients: "L-Carnitina tartrato (240 mg), extracto de guaraná (200 mg), cafeína (180 mg), L-tirosina (80 mg), extracto de Garcinia (50 mg), pimienta cayena (50 mg), vitamina B5 (20 mg), pimienta negra (5 mg), cromo (40 mcg) por porción.",
  serving: "2 cápsulas (1.5 g)",
  timing: "Antes del desayuno y antes de la comida",
  intakeInstructions: "Tomar 2 cápsulas antes del desayuno y 2 antes de la comida (4 cápsulas al día).",
  benefits: [
    "Potente termogénico natural",
    "Apoya la oxidación de ácidos grasos",
    "Aumenta el gasto energético",
    "Mejora el enfoque y la energía",
    "Contiene extractos de plantas y cafeína",
    "Favorece la composición corporal"
  ],
  contraindications: "Personas con hipertensión, enfermedades cardíacas, hepáticas o renales, sensibilidad a la cafeína, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "Puede potenciar los efectos de estimulantes."
},

// 85. L-CARNOSINE ZINC (30 cápsulas)
{
  id: 85,
  code: "7500645001521",
  name: "L-CARNOSINE ZINC",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZN-–-ZINC-L-CARNOSINE-–-30-caps-–-Render-–-V2-–-Marzo2026.jpg",
  shortDesc: "Quelato de zinc con L-carnosina, jengibre e inulina de agave, para el confort digestivo y la salud de las mucosas.",
  ingredients: "Zinc L-carnosina (50 mg, aporta 15 mg de zinc elemental), jengibre en polvo (50 mg), inulina de agave c.s.p. por cápsula.",
  serving: "1 cápsula",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la integridad de la mucosa digestiva",
    "Contribuye a la función inmunológica",
    "Aporta zinc de alta biodisponibilidad",
    "Incluye jengibre para el confort gástrico",
    "Inulina prebiótica para la microbiota",
    "Favorece el bienestar gastrointestinal"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con condiciones médicas deben consultar a un especialista.",
  foodInteractions: "No especificado",
  interactions: "El zinc en exceso puede interferir con la absorción de cobre."
},

// 86. Leucaps (60 cápsulas, luteína y zeaxantina)
{
  id: 86,
  code: "7503025069401",
  name: "LEUCAPS",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/leucaps.jpg",
  shortDesc: "Extracto de flor de cempasúchil (Tagetes erecta) rico en luteína y zeaxantina, para la salud ocular.",
  ingredients: "Extracto de flor de cempasúchil estandarizado en luteína y zeaxantina.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos que contengan grasas.",
  benefits: [
    "Apoya la salud de la mácula y la retina",
    "Filtra la luz azul dañina",
    "Actúa como antioxidante ocular",
    "Contribuye a la función visual normal",
    "De origen vegetal",
    "Favorece la salud visual a largo plazo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a plantas de la familia Asteraceae o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes."
},

// 87. L-TIROSINA 500 mg (60 caps)
{
  id: 87,
  code: "7503026253076",
  name: "L-TIROSINA",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/L-TYROSINE1.webp",
  shortDesc: "L-Tirosina con arándano azul y vitamina C, para apoyo cognitivo y reducción del estrés.",
  ingredients: "L-Tirosina (350 mg), polvo de arándano azul (100 mg), vitamina C (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Precursor de neurotransmisores (dopamina, noradrenalina)",
    "Apoya la función cognitiva y el estado de ánimo",
    "Ayuda a la respuesta al estrés",
    "Aporta antioxidantes de arándano y vitamina C",
    "Favorece la concentración",
    "Fórmula sinérgica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con fenilcetonuria, trastornos de la tiroides o bajo tratamiento con inhibidores de la MAO, levodopa, anticoagulantes o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con inhibidores de la MAO, levodopa, anticoagulantes y antidiabéticos."
},

// 88. MACA NEGRA (polvo, 150 g)
{
  id: 88,
  code: "7503021404893",
  name: "MACA NEGRA",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MACANEGRA.webp",
  shortDesc: "Raíz de maca negra en polvo, adaptógeno andino para la vitalidad y el equilibrio hormonal.",
  ingredients: "Maca negra (Lepidium meyenii) en polvo 4 g por porción.",
  serving: "4 g (1 cucharada)",
  timing: "Con alimentos",
  intakeInstructions: "Disolver 4 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Adaptógeno natural para la energía",
    "Apoya el equilibrio hormonal",
    "Mejora la función sexual y la fertilidad",
    "Aumenta la resistencia física",
    "Tradicionalmente usado en los Andes",
    "Favorece el bienestar general"
  ],
  contraindications: "No consumir durante el embarazo ni lactancia. Personas con trastornos hormonales sensibles o bajo tratamiento médico deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
},

// 89. MACA, JENGIBRE Y DAMIANA 500 mg (60 caps)
{
  id: 89,
  code: "7503021404213",
  name: "MACA, JENGIBRE Y DAMIANA",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/maca-1.jpg",
  shortDesc: "Combinación de maca, jengibre y damiana para la vitalidad, el equilibrio hormonal y el bienestar sexual.",
  ingredients: "Raíz de maca (500 mg), raíz de jengibre (300 mg), hoja de damiana (200 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Apoya la vitalidad y la energía",
    "Contribuye al equilibrio hormonal",
    "Favorece la función sexual",
    "Ayuda a la digestión y circulación",
    "Es de origen vegetal",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales sensibles o bajo tratamiento con antidiabéticos, anticoagulantes o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos, anticoagulantes y antihipertensivos."
},

// 90. Maca (90 caps, mezcla de amarilla, roja y negra)
{
  id: 90,
  code: "7503029679941",
  name: "MACA 90 CAPS",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/maca.jpg",
  shortDesc: "Mezcla de maca amarilla, roja y negra con pimienta negra, para energía, equilibrio hormonal y vitalidad.",
  ingredients: "Maca amarilla (600 mg), maca roja (450 mg), maca negra (435 mg), pimienta negra (15 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Combinación de las tres variedades de maca",
    "Apoya la energía y la resistencia",
    "Contribuye al equilibrio hormonal",
    "Mejora la función sexual y cognitiva",
    "Con pimienta negra para mejor absorción",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hormonales o bajo tratamiento médico deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antihipertensivos y anticoagulantes."
},

// 91. Magnesio Blend (120 caps, citrato, gluconato, óxido)
{
  id: 91,
  code: "7500645000425",
  name: "MAGNESIO BLEND",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/blend.jpg",
  shortDesc: "Mezcla de tres formas de magnesio (citrato, gluconato, óxido) para una absorción optimizada.",
  ingredients: "Citrato de magnesio (150 mg), gluconato de magnesio (150 mg), óxido de magnesio (150 mg) por cápsula.",
  serving: "1 cápsula (aprox. 500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina tres formas de magnesio",
    "Contribuye a la función muscular y nerviosa",
    "Ayuda a reducir el cansancio",
    "Apoya el equilibrio electrolítico",
    "Mejora la biodisponibilidad",
    "Favorece el bienestar general"
  ],
  contraindications: "Personas con enfermedad renal grave, trastornos cardíacos o bajo tratamiento con diuréticos, antibióticos o bifosfonatos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con diuréticos, antibióticos (tetraciclinas, quinolonas) y bifosfonatos."
},

// 92. MAGNESIUM MALATE (60 caps)
{
  id: 92,
  code: "7500645001491",
  name: "MAGNESIUM MALATE",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesio-Malate1.jpg",
  shortDesc: "Malato de magnesio dibásico con avena y vitamina B6 activa (P-5-P), para energía y función neuromuscular.",
  ingredients: "Malato de magnesio dibásico (1300 mg, aporta 200 mg de magnesio elemental), avena (20 mg), vitamina B6 como P-5-P (2 mg) por porción.",
  serving: "2 cápsulas",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Magnesio de alta biodisponibilidad",
    "Aporta ácido málico para producción de energía",
    "Vitamina B6 activa para el metabolismo",
    "Apoya la función muscular y nerviosa",
    "Contribuye a la reducción del cansancio",
    "Favorece el bienestar general"
  ],
  contraindications: "Consultar a médico en caso de embarazo, lactancia o condiciones médicas.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 93. MagnesiumAM600mg (120 caps, citrato + bisglicinato)
{
  id: 93,
  code: "7500645001453",
  name: "MAGNESIUM AM 600mg",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual1.jpg",
  shortDesc: "Magnesio dual (citrato y bisglicinato) con vitamina B6 e inulina, para apoyo energético y muscular.",
  ingredients: "Citrato de magnesio (1800 mg), bisglicinato de magnesio (500 mg), vitamina B6 (5 mg), inulina (100 mg) por porción.",
  serving: "4 cápsulas (2.4 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 4 cápsulas al día con alimentos.",
  benefits: [
    "Dos formas de magnesio de alta absorción",
    "Aporta aproximadamente 600 mg de magnesio elemental",
    "Vitamina B6 para potenciar la absorción",
    "Inulina prebiótica para la salud intestinal",
    "Apoya la función muscular y energética",
    "Favorece el bienestar general"
  ],
  contraindications: "Consultar a médico si se tienen enfermedades renales o se está embarazada.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con medicamentos que afectan la absorción de magnesio."
},

// 94. Magnesium PM 600mg (90 caps, fórmula nocturna)
{
  id: 94,
  code: "7500645001538",
  name: "MAGNESIUM PM 600mg",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Magnesium-Dual-PM1.jpg",
  shortDesc: "Magnesio dual (bisglicinato y citrato) con glicina, L-teanina, manzanilla, 5-HTP y vitamina B6, para el descanso nocturno.",
  ingredients: "Bisglicinato de magnesio (500 mg), citrato de magnesio (400 mg), glicina (450 mg), L-teanina (200 mg), extracto de manzanilla (100 mg), 5-HTP (25 mg), vitamina B6 (2 mg), inulina (100 mg) por porción.",
  serving: "3 cápsulas (1.8 g)",
  timing: "Por la noche, 30-60 min antes de dormir",
  intakeInstructions: "Tomar 3 cápsulas por la noche.",
  benefits: [
    "Fórmula nocturna para el descanso",
    "Magnesio de alta absorción",
    "Contiene glicina, L-teanina y manzanilla relajantes",
    "5-HTP precursor de serotonina",
    "Vitamina B6 e inulina para apoyo digestivo",
    "Favorece la calidad del sueño"
  ],
  contraindications: "No se recomienda su uso simultáneo con medicamentos antidepresivos, ansiolíticos o inductores del sueño sin consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede potenciar el efecto de sedantes y antidepresivos."
},

// 95. MANGO AFRICANO (30 caps)
{
  id: 95,
  code: "7500645000531",
  name: "MANGO AFRICANO (30 cápsulas)",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/mango-africano.jpg",
  shortDesc: "Extracto de Irvingia gabonensis con ácido clorogénico, BHB y otros extractos, para apoyo metabólico.",
  ingredients: "Mango africano (150 mg), pinguica (75 mg), diente de león (75 mg), ácido clorogénico (75 mg), extractos cítricos (50 mg), BHB (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya el metabolismo energético",
    "Aporta antioxidantes y compuestos bioactivos",
    "Tradicionalmente usado para control de peso",
    "BHB como fuente energética alternativa",
    "Fórmula sinérgica",
    "Favorece el bienestar metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos hepáticos o bajo tratamiento con antidiabéticos, anticoagulantes o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos, anticoagulantes y diuréticos."
},

// 96. MASS FEAR 8 LBS (ganador de masa)
{
  id: 96,
  code: "7500645001187",
  name: "MASS FEAR 8 LBS",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MASS-FEAR-CHOCOLATE-NUT4-1.png",
  shortDesc: "Ganador de masa con proteína de suero y carbohidratos, para aumento de peso y recuperación muscular.",
  ingredients: "Proteína de suero de leche, carbohidratos, fibra, grasas saludables.",
  serving: "245 g (1 medida)",
  timing: "Antes o después del entrenamiento",
  intakeInstructions: "Diluir 245 g en 500-700 ml de agua o leche. Tomar antes o después del entrenamiento.",
  benefits: [
    "Alta densidad energética (907 kcal por porción)",
    "42 g de proteína por porción",
    "180 g de carbohidratos para recuperación",
    "Bajo en grasas saturadas",
    "Ayuda a la ganancia de masa muscular",
    "Favorece la recuperación y el rendimiento"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 97. MATCHA ORGÁNICO 100 g
{
  id: 97,
  code: "7503026253861",
  name: "MATCHA ORGÁNICO 100g",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Matcha.jpg",
  shortDesc: "Té verde matcha orgánico en polvo, rico en antioxidantes y L-teanina, para energía y claridad mental.",
  ingredients: "Matcha orgánico en polvo (Camellia sinensis) 100%.",
  serving: "2.5 g (1 cucharada)",
  timing: "Por la mañana o al inicio de la jornada",
  intakeInstructions: "Mezclar 2.5 g en 240 ml de agua caliente (70-80°C) y batir hasta obtener espuma.",
  benefits: [
    "Alto contenido de catequinas antioxidantes",
    "L-teanina para relajación y enfoque",
    "Cafeína natural para energía sostenida",
    "Apoya la protección celular",
    "Tradicionalmente usado en la ceremonia del té",
    "Favorece el bienestar general"
  ],
  contraindications: "Personas sensibles a la cafeína, hipertensión, trastornos de ansiedad, embarazo o lactancia deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede contener trazas de soya, pescado y crustáceos por procesamiento compartido."
},

// 98. Melena de León (90 caps)
{
  id: 98,
  code: "7500645000852",
  name: "MELENA DE LEÓN",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/MELENA-LEON1.jpg",
  shortDesc: "Extracto de hongo Melena de León con L-Treonato de Magnesio y quinoa, para la función cognitiva y la memoria.",
  ingredients: "Melena de León (Hericium erinaceus) extracto (500 mg), L-Treonato de magnesio (450 mg), quinoa en polvo (50 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Estimula el factor de crecimiento nervioso (NGF)",
    "Apoya la memoria y la concentración",
    "Aporta magnesio de alta biodisponibilidad cerebral",
    "Protege las células del estrés oxidativo",
    "Tradicionalmente usado en la medicina asiática",
    "Favorece la salud neurológica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a hongos, trastornos autoinmunes o bajo tratamiento con anticoagulantes o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes e inmunosupresores."
},

// 99. MIEL MULTIFLORA (560 g)
{
  id: 99,
  code: "7503021404954",
  name: "MIEL MULTIFLORA",
    category: "nutricional",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MIEL-MULTIFLORA.png",
  shortDesc: "Miel de abeja 100% natural, sin aditivos, para sustituir el azúcar refinado en bebidas y alimentos.",
  ingredients: "Miel de abeja multiflora 100% natural.",
  serving: "20 g (1 cucharada)",
  timing: "A cualquier hora",
  intakeInstructions: "Consumir 20 g al día como edulcorante en bebidas o alimentos.",
  benefits: [
    "Edulcorante natural sin azúcares añadidos",
    "Aporta energía de rápida absorción",
    "Contiene enzimas y antioxidantes",
    "Tradicionalmente usado para calmar la tos",
    "100% natural, sin procesamiento",
    "Favorece el bienestar general"
  ],
  contraindications: "No administrar a menores de 1 año (riesgo de botulismo). Personas con diabetes o alergia a productos apícolas deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Consumir con moderación por su contenido de azúcares."
},

// 100. MORINGA ORGÁNICA (90 caps)
{
  id: 100,
  code: "7503021404565",
  name: "MORINGA ORGÁNICA",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0003s_0002_Presentacion_blanco.webp",
  shortDesc: "Hoja de moringa orgánica en polvo, superalimento rico en nutrientes y antioxidantes.",
  ingredients: "Hoja de moringa (Moringa oleifera) orgánica en polvo 500 mg por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de las comidas",
  intakeInstructions: "Tomar 3 cápsulas al día (una antes de cada comida).",
  benefits: [
    "Fuente concentrada de vitaminas, minerales y proteínas",
    "Apoya el sistema inmunológico",
    "Protege las células del estrés oxidativo",
    "Ayuda a la nutrición celular",
    "100% orgánica",
    "Favorece el bienestar general"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. Personas con alergia, trastornos de la tiroides o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
  },
// 101. UBIQUINOL KANEKA (30 cápsulas, 120 mg de ubiquinol)
{
  id: 101,
  code: "7500645001576",
  name: "UBIQUINOL KANEKA",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-UBIQUINOL-KANEKA-30-CAPS–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Suplemento de ubiquinol (Coenzima Q10 en su forma reducida activa) de Kaneka®, con MCT, vitamina E y extracto de romero para máxima absorción y estabilidad.",
  ingredients: "Ubiquinol (Kaneka QH®) 120 mg, aceite de triglicéridos de cadena media (MCT) 250 mg, lecitina de girasol 25 mg, vitamina E (alfa tocoferol) 10 mg, extracto de romero 5 mg, dióxido de silicio 5 mg por cápsula.",
  serving: "1 cápsula (415 mg)",
  timing: "Con alimentos que contengan grasas (desayuno o comida)",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasa (huevo, aguacate, nueces).",
  benefits: [
    "Forma activa de la Coenzima Q10, no requiere conversión",
    "Potente antioxidante que protege las células del daño oxidativo",
    "Apoya la salud cardiovascular y la función endotelial",
    "Aumenta la energía celular (producción de ATP)",
    "Ideal para personas mayores de 40 años o que toman estatinas",
    "Alta biodisponibilidad gracias a la matriz lipídica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad hepática o renal, o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud antes de consumirlo.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes (warfarina)."
},

// 102. UC-II® Collagen Boswellia Curcumin (60 caps, fórmula articular)
{
  id: 102,
  code: "7500645001507",
  name: "UC-II® Collagen Boswellia Curcumin",
  category: "locomotor",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Boswelia1.jpg",
  shortDesc: "Fórmula articular avanzada con colágeno tipo II no desnaturalizado (UC-II®), Boswellia, cúrcuma, ácido hialurónico, vitamina C y piperina.",
  ingredients: "Boswellia serrata extracto (400 mg), extracto de cúrcuma al 95% de curcuminoides (300 mg), vitamina C (100 mg), ácido hialurónico (100 mg), colágeno tipo II no desnaturalizado UC-II® (40 mg), piperina (5 mg) por cápsula.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día (1 con el desayuno y 1 con la cena).",
  benefits: [
    "Colágeno tipo II nativo que induce tolerancia oral",
    "Boswellia y cúrcuma con actividad antioxidante y moduladora",
    "Ácido hialurónico para la lubricación articular",
    "Vitamina C como cofactor en la síntesis de colágeno",
    "Piperina para mejorar la biodisponibilidad",
    "Apoya la movilidad y el confort articular"
  ],
  contraindications: "No recomendado durante el embarazo o lactancia. Personas alérgicas al cartílago de pollo o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes y antiagregantes plaquetarios."
},

// 103. Vinagre de Manzana (500 ml, líquido)
{
  id: 103,
  code: "7503025069890",
  name: "VINAGRE DE MANZANA",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ManzanaVinagre.jpg",
  shortDesc: "Vinagre de sidra de manzana líquido, fermentado artesanal, con la 'madre' (bacterias del ácido acético, pectina y enzimas), sin azúcares añadidos.",
  ingredients: "Vinagre de sidra de manzana (ácido acético natural 5%) con la 'madre'.",
  serving: "15 ml (1 cucharada sopera)",
  timing: "Antes de las comidas principales",
  intakeInstructions: "Diluir 15 ml en un vaso de agua (200-250 ml) y beber antes de las comidas. No consumir puro.",
  benefits: [
    "Modula la respuesta glucémica postprandial",
    "Apoya la digestión y la sensación de saciedad",
    "Contiene ácido acético y compuestos fenólicos",
    "Preserva la 'madre' con enzimas y probióticos naturales",
    "Bajo en calorías y sin azúcares añadidos",
    "Favorece el bienestar metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, reflujo severo, gastritis crónica, o bajo tratamiento con antidiabéticos, diuréticos ahorradores de potasio o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con antidiabéticos, diuréticos y anticoagulantes."
},

// 104. Vinagre Sidra de Manzana (90 caps, en cápsulas con cúrcuma, jengibre, canela y pimienta negra)
{
  id: 104,
  code: "7500645000432",
  name: "VINAGRE SIDRA DE MANZANA",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/VINAGRE1.jpg",
  shortDesc: "Vinagre de sidra de manzana en polvo concentrado en cápsulas, combinado con cúrcuma, jengibre, canela y pimienta negra para potenciar su acción.",
  ingredients: "Vinagre de sidra de manzana en polvo (900 mg), cúrcuma (300 mg), jengibre (180 mg), canela (115 mg), pimienta negra (5 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Vinagre de manzana en formato práctico sin el sabor ácido",
    "Sinergia con especias con actividad antioxidante y metabólica",
    "Apoya la digestión y la modulación glucémica",
    "Cúrcuma y jengibre con propiedades antiinflamatorias",
    "Canela y pimienta negra mejoran la biodisponibilidad",
    "Favorece el bienestar metabólico"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica, reflujo severo, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos y antihipertensivos."
},

// 105. VITA RX MENS (120 caps, multivitamínico y mineral para hombres)
{
  id: 105,
  code: "7500645000333",
  name: "VITA RX MENS",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/VitaRX-1.jpg",
  shortDesc: "Fórmula integral para hombres con creatina, arginina, BCAA's, maca negra, ginseng, vitaminas y minerales para energía, rendimiento y vitalidad.",
  ingredients: "Creatina (120 mg), arginina (108 mg), vitamina C (90 mg), maca negra (66 mg), BCAA's (48 mg), ginseng (30 mg), vitamina K (30 mg), vitaminas B1, B2, B5, B6, B12, vitamina E, magnesio, calcio, cobre, zinc, hierro, vitamina A, biotina, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya el rendimiento físico y la energía",
    "Combina aminoácidos, adaptógenos y vitaminas",
    "Contribuye al metabolismo energético",
    "Favorece la función inmunológica y reproductiva",
    "Ayuda a la reducción del cansancio",
    "Fórmula completa para el hombre activo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad hepática, renal o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Contiene vitamina K, que puede interferir con anticoagulantes."
},

// 106. VITA RX TESTO (120 caps, fórmula para la vitalidad masculina y equilibrio hormonal)
{
  id: 106,
  code: "7500645000401",
  name: "VITA RX TESTO",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides_0001s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica y mineral para el bienestar masculino, con Tribulus, fenogreco, maca negra, L-arginina, zinc, selenio y extractos tradicionales.",
  ingredients: "Magnesio (70 mg), Tribulus (50 mg), fenogreco (50 mg), damiana (30 mg), Cnidium (30 mg), maca negra (25 mg), L-arginina (25 mg), Mucuna Pruriens (25 mg), avena (25 mg), longjack (25 mg), semilla de calabaza (25 mg), ciruelo africano (25 mg), zinc (10 mg), selenio (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la vitalidad y el equilibrio hormonal masculino",
    "Combina plantas adaptógenas y minerales esenciales",
    "Contribuye a la función reproductiva",
    "Ayuda a la reducción del cansancio",
    "Favorece la función sexual",
    "Fórmula tradicional y científica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedades hepáticas, hormonales o bajo tratamiento médico (especialmente hormonales) deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con tratamientos hormonales."
},

// 107. VITA RX WOMENS (120 caps, multivitamínico y mineral para mujeres)
{
  id: 107,
  code: "7500645000326",
  name: "VITA RX WOMENS",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/2VitaRX.jpg",
  shortDesc: "Fórmula completa para mujeres con colágeno, maca amarilla, arándano, ácido hialurónico, vitaminas y minerales para la salud de la piel, cabello, uñas y bienestar general.",
  ingredients: "Colágeno (150 mg), maca amarilla (100 mg), arándano (75 mg), vitamina C (60 mg), semilla de uva (35 mg), vitamina E (14 mg), vitaminas B1, B2, B5, B6, ácido hialurónico, calcio, magnesio, zinc, cobre, hierro, vitamina A, biotina, vitamina K, vitamina D3 por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya la salud de la piel, cabello y uñas",
    "Contribuye al equilibrio hormonal femenino",
    "Aporta colágeno y ácido hialurónico",
    "Favorece la salud del tracto urinario",
    "Rico en antioxidantes y vitaminas",
    "Fórmula integral para la mujer"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Contiene vitamina K, que puede interferir con anticoagulantes."
},

// 108. Vitamina C-1000 NOW (100 caps, 1000 mg de vitamina C con bioflavonoides)
{
  id: 108,
  code: "73373900690",
  name: "VITAMINA C-1000 NOW",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VITAMINAC-1000.jpg",
  shortDesc: "Vitamina C (ácido ascórbico) en alta concentración (1000 mg por cápsula) con complejo de bioflavonoides cítricos (100 mg) y rutina (25 mg), para apoyo inmunológico y antioxidante.",
  ingredients: "Vitamina C (como ácido ascórbico) 1000 mg, complejo de bioflavonoides cítricos 100 mg, polvo de rutina (de Sophora japonica) 25 mg por cápsula.",
  serving: "1 cápsula (aprox. 1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día.",
  benefits: [
    "Alta concentración de vitamina C (1000 mg)",
    "Contribuye al funcionamiento normal del sistema inmunológico",
    "Protege las células del estrés oxidativo",
    "Incluye bioflavonoides y rutina para potenciar la absorción",
    "Apoya la síntesis de colágeno",
    "Ayuda a reducir el cansancio"
  ],
  contraindications: "Solo para adultos. Consultar a médico si se está embarazada o lactando, o si se toman medicamentos.",
  foodInteractions: "No especificado",
  interactions: "La vitamina C en dosis altas puede interactuar con anticoagulantes y quimioterapia."
},

// 109. Vitamina D3 + Magnesio, K2 y Zinc (60 caps)
{
  id: 109,
  code: "7500645000067",
  name: "VITAMINA D3 + MAGNESIO, K2 Y ZINC",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/D3-1.jpg",
  shortDesc: "Fórmula sinérgica de vitamina D3, magnesio, vitamina K2, zinc y aceite de coco en polvo para la salud ósea, inmunológica y cardiovascular.",
  ingredients: "Aceite de pulpa de coco en polvo (450 mg), óxido de magnesio (200 mg, aporta 120 mg de Mg elemental), óxido de zinc (20 mg, aporta 16 mg de Zn elemental), vitamina K2 (30 mcg), vitamina D3 (10 mcg / 400 UI) por cápsula.",
  serving: "1 cápsula (1.1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "Vitamina D3 para la función muscular e inmunológica",
    "Magnesio como cofactor para activar la vitamina D",
    "Vitamina K2 para dirigir el calcio a los huesos",
    "Zinc para la función inmunológica",
    "Aceite de coco para mejorar la absorción de vitaminas liposolubles",
    "Apoya la salud ósea y cardiovascular"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con hipercalcemia, sarcoidosis, enfermedad renal grave o bajo tratamiento con anticoagulantes cumarínicos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "La vitamina K puede interactuar con anticoagulantes."
},

// 110. Vitamina E 1000 Greenlife (60 perlas)
{
  id: 110,
  code: "7503016797535",
  name: "VITAMINA E 1000 GREENLIFE",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/vitamina-e-1000-1200mg-zennaturamx-457200.webp",
  shortDesc: "Vitamina E en alta concentración (66 mg = 66 UI por perla) con aceite de germen de trigo, como antioxidante liposoluble para la protección celular y la salud de la piel.",
  ingredients: "Vitamina E (dl-alfa tocoferol acetato) 66 mg (66 UI), aceite de germen de trigo.",
  serving: "1 perla (1200 mg)",
  timing: "Durante la comida principal",
  intakeInstructions: "Tomar 1 perla al día durante la comida principal.",
  benefits: [
    "Vitamina E de alta concentración",
    "Protege las células del daño oxidativo",
    "Apoya la salud de la piel y las mucosas",
    "Contribuye a la función inmunológica",
    "Vehículo en aceite de germen de trigo para mejor absorción",
    "Favorece el envejecimiento saludable"
  ],
  contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes."
},

// 111. WHEY CHOCONUEZ NANOFEAR (proteína hidrolizada de suero de leche, 500 g)
{
  id: 111,
  code: "7500645001132",
  name: "WHEY CHOCONUEZ NANOFEAR",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/WHEY-PROTEIN-500-VAINILLA-CANELA1.png",
  shortDesc: "Proteína hidrolizada de suero de leche en polvo, de rápida absorción, sin grasas ni carbohidratos, con alto contenido de aminoácidos esenciales y BCAA's.",
  ingredients: "Proteína hidrolizada de suero de leche (25 g de proteína por porción).",
  serving: "35 g (1 scoop)",
  timing: "Dentro de los 45 minutos post-entreno",
  intakeInstructions: "Mezclar 35 g con 240 ml de agua y agitar. Consumir post-entreno o entre comidas.",
  benefits: [
    "Proteína hidrolizada de rápida absorción",
    "Alto valor biológico (BV > 150)",
    "Perfil completo de aminoácidos esenciales y BCAA",
    "Cero grasas y cero carbohidratos",
    "Ideal para la ventana anabólica post-entreno",
    "Favorece la recuperación y el crecimiento muscular"
  ],
  contraindications: "Personas con alergia a lácteos, enfermedades hepáticas o renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 112. WHEY PROTEIN HARDER (1 kg, aislado de suero al 90% sin carbohidratos)
{
  id: 112,
  code: "7503026253731",
  name: "WHEY PROTEIN HARDER",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/WP-HARDER.png",
  shortDesc: "Aislado de suero de leche al 90% (96% de proteína por 100 g), sin carbohidratos, sin lactosa, sin edulcorantes, sin saborizantes.",
  ingredients: "Aislado de suero de leche al 90% (Microfiltración de Flujo Cruzado).",
  serving: "23 g (1 porción)",
  timing: "Post-entreno",
  intakeInstructions: "Tomar 23 g en 350 ml de agua o leche baja en grasa después del entrenamiento.",
  benefits: [
    "96% de proteína por 100 g de producto",
    "Sin carbohidratos, sin lactosa",
    "Sin colorantes, saborizantes ni edulcorantes",
    "Alta pureza y perfil completo de aminoácidos",
    "Ideal para definición y dietas estrictas",
    "Favorece la recuperación muscular"
  ],
  contraindications: "No consumir durante el embarazo o lactancia. Personas con intolerancia a la leche deben evitar su consumo.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 113. WPI 90 (WHEY PROTEIN ISOLATE 90, 1.02 kg)
{
  id: 113,
  code: "7503026253731",
  name: "WPI 90 (WHEY PROTEIN ISOLATE 90)",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZN-–-WHEY-PROEIN-ISOLATE-90-–1.02-KG–-RENDER–-V1–-MAYO2026.jpeg",
  shortDesc: "Aislado de proteína de suero de leche al 90%, con 29 g de proteína por porción, menos de 1 g de grasa y 0.5 g de carbohidratos.",
  ingredients: "Aislado de proteína de suero de leche (29 g de proteína por porción).",
  serving: "34 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 34 g en 240 ml de agua o bebida de su preferencia. Tomar una vez al día.",
  benefits: [
    "Alta concentración de proteína (29 g por scoop)",
    "Bajo en grasa (0.7 g) y carbohidratos (0.5 g)",
    "Perfil completo de aminoácidos esenciales",
    "Alta digestibilidad y baja en lactosa",
    "Ideal para definición y recuperación",
    "Proceso de microfiltración en frío"
  ],
  contraindications: "Alérgicos a la proteína de leche deben evitar su consumo. Consultar a médico en caso de enfermedades renales o hepáticas.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 114. Ximo (30 caps, 450 mg, fórmula botánica con espirulina, tejocote, piña, nopal, vitaminas C y A)
{
  id: 114,
  code: "7503021404725",
  name: "XIMO",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/Ximo-1.jpg",
  shortDesc: "Fórmula botánica y vitamínica con espirulina, raíz de tejocote, piña, nopal, vitamina C y vitamina A, para apoyo a la desintoxicación y el metabolismo.",
  ingredients: "Espirulina (140 mg), raíz de tejocote (120 mg), piña (70 mg), nopal (70 mg), vitamina C (50 mg), vitamina A (900 mcg) por cápsula.",
  serving: "1 cápsula (450 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya los procesos naturales de desintoxicación",
    "Contribuye al metabolismo energético",
    "Aporta antioxidantes y nutrientes",
    "Favorece la sensación de ligereza",
    "Combina plantas tradicionales y vitaminas",
    "Fórmula baja en calorías"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, o bajo tratamiento con anticoagulantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "La raíz de tejocote puede tener efectos hipoglucemiantes."
},

// 115. Yumel (Yumel Simila, solución oral homeopática de Guatteria gaumeri)
{
  id: 115,
  code: "7502221950681",
  name: "YUMEL SIMILA",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Yumel1.webp",
  shortDesc: "Medicamento homeopático a base de Guatteria gaumeri (Tintura Madre) para el apoyo en trastornos renales, vesicales y colesterol elevado.",
  ingredients: "Guatteria gaumeri TM (Tintura Madre) 100 ml por 100 ml.",
  serving: "20 gotas en ¼ de vaso con agua",
  timing: "Tres veces al día, antes de los alimentos",
  intakeInstructions: "Mezclar 20 gotas en un cuarto de vaso con agua natural. Tomar 3 veces al día antes de los alimentos.",
  benefits: [
    "Apoyo en el manejo de trastornos renales y vesicales",
    "Tradicionalmente usado para cálculos renales y biliares",
    "Puede contribuir en casos de colesterol elevado",
    "Preparación homeopática con tintura madre",
    "Fácil administración en gotas",
    "Uso supervisado por médico homeópata"
  ],
  contraindications: "Hipersensibilidad a los componentes, embarazo, lactancia, niños menores de 15 años (consultar a médico homeópata).",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 116. NAC N-AcetylCysteine 500 mg ZN (60 caps, 500 mg de N-Acetilcisteína por cápsula)
{
  id: 116,
  code: "7500645000777",
  name: "NAC N-AcetylCysteine 500 mg ZN",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/NAC1.jpg",
  shortDesc: "N-Acetilcisteína (NAC) en cápsulas de 500 mg, precursor del glutatión, para la protección celular y el apoyo antioxidante.",
  ingredients: "N-Acetilcisteína (NAC) 1000 mg por porción (2 cápsulas).",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Precursor directo del glutatión, antioxidante maestro",
    "Protege las células del estrés oxidativo",
    "Apoya la función inmunológica",
    "Ayuda a la salud de las vías respiratorias",
    "Sin rellenos ni excipientes",
    "Alta pureza (1000 mg por porción)"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con úlcera gástrica o bajo tratamiento con anticoagulantes, nitroglicerina o medicamentos que afectan la función hepática deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes y nitroglicerina."
},

// 117. NAD + Resveratrol (90 caps, 300 mg de NAD, 50 mg de resveratrol, 50 mg de acai)
{
  id: 117,
  code: "7500645000869",
  name: "NAD + Resveratrol",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2024/02/nad.jpg",
  shortDesc: "Combinación de NAD (nicotinamida adenina dinucleótido), resveratrol y baya de acai, para el soporte de la energía celular, la longevidad y la protección antioxidante.",
  ingredients: "NAD (300 mg), estearato de magnesio (100 mg), resveratrol (50 mg), baya de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "NAD+ para el metabolismo energético y la reparación del ADN",
    "Resveratrol activador de sirtuinas",
    "Acai con antioxidantes y antocianinas",
    "Apoya la salud celular y la longevidad",
    "Favorece la función mitocondrial",
    "Protege las células del estrés oxidativo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes, antidiabéticos o medicamentos que afectan la presión arterial deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El resveratrol puede interactuar con medicamentos metabolizados por CYP3A4."
},

// 118. NEEM CON NOPAL (9 caps, 3 porciones, combina neem, nopal y ácido alfa lipoico)
{
  id: 118,
  code: "7503025069593",
  name: "NEEM CON NOPAL",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides_0008s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula sinérgica con neem, nopal y ácido alfa lipoico, para apoyo a la desintoxicación, el control glucémico y la protección celular.",
  ingredients: "Neem (750 mg), nopal (600 mg), ácido alfa lipoico (150 mg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Neem con propiedades depurativas y hepatoprotectoras",
    "Nopal con fibra para la regulación glucémica",
    "Ácido alfa lipoico como antioxidante mitocondrial",
    "Apoya los procesos naturales de desintoxicación",
    "Contribuye al bienestar metabólico",
    "Fórmula de plantas tradicionales"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática grave, o bajo tratamiento con antidiabéticos, antihipertensivos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El neem puede ser abortivo; no usar durante el embarazo."
},

// 119. NMN Advanced Resveratrol 550 mg ZN (30 caps, NMN, resveratrol, astrágalo, quercetina, piperina)
{
  id: 119,
  code: "7500645001354",
  name: "NMN ADVANCED RESVERATROL",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/09/NMN-1.png",
  shortDesc: "Fórmula avanzada de NMN (β-Nicotinamida mononucleótido) con trans-resveratrol, astrágalo, quercetina y pimienta negra, para la vitalidad celular y el envejecimiento saludable.",
  ingredients: "β-Nicotinamida mononucleótido (NMN) 300 mg, trans-resveratrol 100 mg, astrágalo 100 mg, quercetina 45 mg, extracto de pimienta negra 5 mg por cápsula.",
  serving: "1 cápsula (550 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "NMN como precursor directo del NAD+",
    "Trans-resveratrol y quercetina como antioxidantes sinérgicos",
    "Astrágalo adaptógeno para la inmunidad",
    "Piperina para mejorar la biodisponibilidad",
    "Apoya la energía celular y la longevidad",
    "Protege las células del estrés oxidativo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El NMN es seguro en dosis moderadas; supervisar en enfermedades hepáticas o renales."
},

// 120. OMEGA 3 NANO FEAR (90 softgels, aceite de salmón concentrado con EPA 1198.8 mg y DHA 601.2 mg por porción)
{
  id: 120,
  code: "7503016797849",
  name: "OMEGA 3 NANO FEAR",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Omega-Nano.png",
  shortDesc: "Aceite de salmón concentrado en softgels, con alto contenido de EPA (1198.8 mg) y DHA (601.2 mg) por porción, y vitamina E como antioxidante.",
  ingredients: "Aceite de salmón concentrado (Omega 3 total 2998.8 mg: EPA 1198.8 mg, DHA 601.2 mg), vitamina E (α-tocoferol) 100.8 mg por porción.",
  serving: "3 softgels (3.6 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 3 softgels al día con alimentos.",
  benefits: [
    "Alta concentración de EPA y DHA (2:1)",
    "Vitamina E para proteger los ácidos grasos",
    "Apoya la salud cardiovascular y cerebral",
    "Contribuye al mantenimiento de triglicéridos",
    "Favorece la función cognitiva y visual",
    "Omega-3 de alta pureza y biodisponibilidad"
  ],
  contraindications: "Personas con trastornos hemorrágicos, en tratamiento anticoagulante, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "Puede prolongar el tiempo de sangrado con anticoagulantes."
},

// 122. OMEGA 3 SALMON OIL 1g ZN (120 caps, aceite de salmón con EPA 180 mg y DHA 150 mg por cápsula)
{
  id: 122,
  code: "7500645000036",
  name: "OMEGA 3 SALMON OIL",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/OMEGA3-1.jpg",
  shortDesc: "Aceite de salmón en cápsulas de 1 g, con EPA (180 mg), DHA (150 mg) y vitamina E, para el mantenimiento de la salud cardiovascular, cerebral y ocular.",
  ingredients: "Aceite de salmón (1000 mg), vitamina E (150 mg), EPA (180 mg), DHA (150 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Aceite de salmón natural con EPA y DHA",
    "Vitamina E como antioxidante",
    "Apoya la salud cardiovascular",
    "Contribuye a la función cerebral",
    "Ayuda a la salud visual",
    "Bajo en calorías y sin carbohidratos"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al pescado, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede prolongar el tiempo de sangrado con anticoagulantes."
},

// 123. OMEGA NORDIC 3000 (90 caps, aceite de pescado concentrado EPAX® con EPA 900 mg y DHA 600 mg por porción)
{
  id: 123,
  code: "7500645001644",
  name: "OMEGA NORDIC 3000",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ZN-%E2%80%93-UOMEGA-NORDIC-3000-90-CAPS%E2%80%93-RENDER%E2%80%93-V1%E2%80%93-MAYO2026.jpeg",
  shortDesc: "Aceite de pescado concentrado EPAX® con 3000 mg de aceite por porción, aportando 900 mg de EPA y 600 mg de DHA, de alta pureza.",
  ingredients: "Aceite de pescado concentrado EPAX® (3000 mg), EPA (900 mg), DHA (600 mg) por porción.",
  serving: "3 cápsulas (3 g)",
  timing: "Con desayuno rico en grasas",
  intakeInstructions: "Tomar 3 cápsulas al día con el desayuno.",
  benefits: [
    "Aceite de pescado de alta concentración (EPAX®)",
    "Proporción EPA:DHA 3:2",
    "Apoya la función cardíaca y vascular",
    "Contribuye a la función cerebral",
    "Alta pureza y control de metales pesados",
    "Favorece la salud articular y general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia al pescado, trastornos de coagulación o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede prolongar el tiempo de sangrado con anticoagulantes."
},

// 124. ON-C-LEN 750 mg (60 tabletas, fórmula botánica con diente de león, guanábana, shiitake, reishi, té verde, jengibre, ajo, polen)
{
  id: 124,
  code: "7500645000807",
  name: "ON-C-LEN",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Productos7_0005s_0002_Presentacion-blanco.jpg",
  shortDesc: "Fórmula botánica con extractos de diente de león, guanábana, hongos shiitake y reishi, té verde, jengibre, ajo y polen de flores, para el fortalecimiento de las defensas naturales.",
  ingredients: "Extractos de diente de león, guanábana, shiitake, reishi, té verde, jengibre, ajo, polen de flores (cantidades no especificadas).",
  serving: "2 tabletas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 tabletas al día con alimentos.",
  benefits: [
    "Combina plantas y hongos con actividad inmunomoduladora",
    "Hongos shiitake y reishi ricos en β-glucanos",
    "Diente de león y guanábana con compuestos bioactivos",
    "Té verde, jengibre y ajo como antioxidantes",
    "Polen de flores como fuente de nutrientes",
    "Apoya las defensas naturales del organismo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (polen) o a alguno de los componentes, o bajo tratamiento con anticoagulantes, inmunosupresores o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El polen puede producir reacciones alérgicas en individuos sensibles."
},

// 125. PÉPTIDOS COLÁGENO HIDROLIZADO (1 kg, polvo de colágeno hidrolizado bovino puro)
{
  id: 125,
  code: "7500645000296",
  name: "PÉPTIDOS COLÁGENO HIDROLIZADO",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/PeptidosColagenoHidrolizado.jpg",
  shortDesc: "Polvo de péptidos de colágeno hidrolizado bovino de alta pureza, sin grasas ni azúcares, para la salud de la piel, articulaciones y tejido conectivo.",
  ingredients: "Péptidos de colágeno hidrolizado bovino 100%.",
  serving: "10 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 10 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Péptidos de colágeno de bajo peso molecular (1000-5000 Da)",
    "Alta biodisponibilidad y absorción",
    "Apoya la hidratación y elasticidad de la piel",
    "Contribuye a la salud articular y ósea",
    "Sin grasas, azúcares ni aditivos",
    "Favorece la regeneración del tejido conectivo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la proteína bovina o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El consumo excesivo de proteínas puede sobrecargar la función renal."
},

// 126. PÉPTIDOS DE COLÁGENO HIDROLIZADO + ÁCIDO HIALURÓNICO (990 g, colágeno + ácido hialurónico)
{
  id: 126,
  code: "7500645000302",
  name: "PÉPTIDOS DE COLÁGENO HIDROLIZADO + ÁCIDO HIALURÓNICO",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ColagenoHidrolizado.jpg",
  shortDesc: "Polvo de péptidos de colágeno hidrolizado bovino (10.5 g) con ácido hialurónico (500 mg) por porción, para la hidratación y elasticidad de la piel y la salud articular.",
  ingredients: "Péptidos de colágeno hidrolizado bovino (10.5 g), ácido hialurónico (500 mg) por porción.",
  serving: "11 g (1 cuchara)",
  timing: "En ayunas o entre comidas",
  intakeInstructions: "Disolver 11 g en agua, jugo o batido. Consumir una vez al día.",
  benefits: [
    "Colágeno hidrolizado con ácido hialurónico",
    "Ácido hialurónico para la retención de agua en la piel",
    "Sinergia para la hidratación y firmeza cutánea",
    "Apoya la salud de las articulaciones",
    "Bajo en calorías y sin azúcares",
    "Favorece la elasticidad y turgencia de la piel"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la proteína bovina o bajo tratamiento con anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El consumo excesivo de proteínas puede sobrecargar la función renal."
},

// 127. PETALOS DE ROSA CON VIT C (90 caps, 1000 mg, con vitamina C, zinc, cromo, rosa y naranja)
{
  id: 127,
  code: "7503029679378",
  name: "PETALOS DE ROSA CON VIT C",
  category: "piel",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/petalos-de-rosa-1.jpg",
  shortDesc: "Fórmula con pétalos de rosa, naranja, vitamina C (300 mg), zinc (10 mg) y cromo (22 µg) para la protección celular, la función inmunológica y la salud de la piel.",
  ingredients: "Vitamina C (300 mg), zinc (10 mg), cromo (22 µg), polvo de fruto de naranja, polvo de pétalos de rosa por cápsula.",
  serving: "1 cápsula (1000 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Vitamina C para el sistema inmunológico y la piel",
    "Zinc para la reparación celular",
    "Cromo para el metabolismo de la glucosa",
    "Pétalos de rosa y naranja con antioxidantes",
    "Protege las células del estrés oxidativo",
    "Apoya la función inmunológica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal, trastornos de la tiroides o bajo tratamiento con antidiabéticos, anticoagulantes o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El cromo puede interactuar con antidiabéticos."
},

// 128. POTASSIUM DUAL COMPLEX (90 caps, citrato y cloruro de potasio, magnesio, calcio, vitamina B6 e inulina)
{
  id: 128,
  code: "7500645001477",
  name: "POTASSIUM DUAL COMPLEX",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Potassium-Dual1.jpg",
  shortDesc: "Complejo de potasio dual (citrato y cloruro) con 500 mg de potasio elemental por porción, magnesio, calcio, vitamina B6 e inulina, para el equilibrio electrolítico y la función neuromuscular.",
  ingredients: "Citrato de potasio (1400 mg), cloruro de potasio (150 mg), potasio elemental (500 mg), citrato de magnesio (200 mg), citrato de calcio (200 mg), calcio elemental (40 mg), cloro (75 mg), vitamina B6 (2 mg), inulina de raíz de achicoria (100 mg) por porción.",
  serving: "3 cápsulas (2.05 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Doble fuente de potasio (citrato + cloruro)",
    "Aporta 500 mg de potasio elemental",
    "Magnesio y calcio para la función neuromuscular",
    "Vitamina B6 como cofactor",
    "Inulina prebiótica para la salud digestiva",
    "Apoya el equilibrio hidroelectrolítico"
  ],
  contraindications: "Personas con alteraciones renales severas o uso de diuréticos ahorradores de potasio deben consultar a su médico antes de consumirlo.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con diuréticos ahorradores de potasio e inhibidores de la ECA."
},

// 129. Probióticos 60 Billones 500MG (60 caps, 60 billones UFC con L. acidophilus, L. sporogenes, L. rhamnosus e inulina)
{
  id: 129,
  code: "7503029679729",
  name: "PROBIOTICOS 60 BILLONES 500MG",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/03/pro.jpg",
  shortDesc: "Probióticos de alta concentración (60 billones UFC por cápsula) con tres cepas (L. acidophilus, L. sporogenes, L. rhamnosus) e inulina de agave, para el equilibrio de la microbiota intestinal.",
  ingredients: "Lactobacillus acidophilus (48.67 billones UFC, 365 mg), Lactobacillus sporogenes (8 billones UFC, 60 mg), Lactobacillus rhamnosus (3.33 billones UFC, 60 mg), inulina de agave (20 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "60 billones de UFC por cápsula",
    "Cepas con respaldo científico",
    "L. sporogenes es formador de esporas, resistente al ácido",
    "Inulina como prebiótico",
    "Apoya la salud digestiva e inmunológica",
    "Favorece el equilibrio de la microbiota"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con inmunosupresores."
},

// 130. PROBIOTICOS 60 BILLONES MUJERES ZN (60 caps, 60 billones UFC con probióticos, vitamina C, arándano rojo e inulina)
{
  id: 130,
  code: "7500645001057",
  name: "PROBIOTICOS 60 BILLONES MUJERES ZN",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0009s_0002_Presentacion-blanco-1.jpg",
  shortDesc: "Probióticos de alta concentración (60 billones UFC) con vitamina C, arándano rojo e inulina, diseñados para el bienestar digestivo e inmunológico de la mujer.",
  ingredients: "Mezcla probiótica (60 billones UFC, 925 mg), vitamina C (55 mg), arándano rojo en polvo (10 mg), inulina de achicoria (10 mg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "Alta concentración de probióticos (60 billones UFC)",
    "Vitamina C para el sistema inmunológico",
    "Arándano rojo para la salud del tracto urinario",
    "Inulina como prebiótico",
    "Fórmula específica para mujeres",
    "Apoya la salud digestiva y femenina"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con inmunosupresores."
},

// 131. Probióticos 100 Billones 500MG ZN (60 caps, 100 billones UFC con 7 cepas e inulina)
{
  id: 131,
  code: "7500645000449",
  name: "Probióticos 100 Billones 500MG ZN",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/08/probioticos-2.jpg",
  shortDesc: "Probióticos de ultra alta concentración (100 billones UFC) con 7 cepas (Bifidobacterium, Lactobacillus, Streptococcus thermophilus) e inulina de agave, en cápsulas de liberación retardada.",
  ingredients: "Bifidobacterium longum ssp. Longum SP 54 (25 billones UFC, 61.3 mg), Bifidobacterium longum ssp. Infantis SP 37 (25 billones UFC, 61.3 mg), Lactobacillus acidophilus LA3 (25 billones UFC, 61.3 mg), Lactobacillus delbrueckii ssp. Bulgaricus SP 96 (25 billones UFC, 61.3 mg), Lactobacillus casei BGP 93 (25 billones UFC, 61.3 mg), Lactobacillus plantarum BG 112 (25 billones UFC, 61.3 mg), Streptococcus thermophilus SP 4 (25 billones UFC, 61.3 mg), inulina de agave (10 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos. Refrigerar después de abrir.",
  benefits: [
    "100 billones de UFC por cápsula",
    "7 cepas probióticas de alta calidad",
    "Liberación retardada para proteger las bacterias",
    "Inulina como prebiótico",
    "Apoya la salud digestiva e inmunológica",
    "Ideal para periodos de estrés o antibióticos"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con inmunosupresión grave o bajo tratamiento con inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con inmunosupresores."
},

// 132. PROBITY 30 caps 600 mg (fórmula multibotánica con acetil L-carnitina, té verde, chá de bugre, vinagre de manzana, etc.)
{
  id: 132,
  code: "7503021404060",
  name: "PROBITY",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/probity-1.jpg",
  shortDesc: "Fórmula multibotánica con acetil L-carnitina, té verde, chá de bugre, vinagre de manzana, alcachofa, papaína, ciruela pasa, jamaica, lúpulo, espirulina y cromo, para el metabolismo energético y el bienestar general.",
  ingredients: "Acetil L-carnitina, extracto de té verde, chá de bugre, vinagre de manzana, alcachofa, papaína, ciruela pasa, jamaica, lúpulo, espirulina, cromo (cantidades no especificadas).",
  serving: "1 cápsula (750 mg, aunque el nombre indica 600 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Combina aminoácidos, plantas y enzimas",
    "Acetil L-carnitina para la energía celular",
    "Té verde y alcachofa con acción antioxidante",
    "Vinagre de manzana y papaína para la digestión",
    "Chá de bugre y jamaica para el metabolismo",
    "Cromo para el metabolismo de la glucosa"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, trastornos de coagulación o bajo tratamiento con antidiabéticos, antihipertensivos, anticoagulantes o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El té verde contiene cafeína; puede interactuar con estimulantes."
},

// 133. ProHiman (30 caps, 200 mg, con raíz de lima, linaza, malva, omegas 3,6,9, lecitina de soya)
{
  id: 133,
  code: "7503016797863",
  name: "PROHIMAN",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ProHiman.jpg",
  shortDesc: "Fórmula con raíz de lima, linaza, malva, complejo de omegas 3,6,9 y lecitina de soya, para el confort digestivo y el metabolismo.",
  ingredients: "Raíz de lima, linaza, malva, complejo de omegas 3,6,9, lecitina de soya (cantidades no especificadas).",
  serving: "1 cápsula (200 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Raíz de lima y malva para el confort digestivo",
    "Linaza con fibra y ácidos grasos",
    "Complejo de omegas 3,6,9 para la salud cardiovascular",
    "Lecitina de soya para el metabolismo lipídico",
    "Favorece el tránsito intestinal",
    "Apoya la sensación de ligereza"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a la soya o a la linaza, con obstrucción intestinal o bajo tratamiento anticoagulante deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "La linaza contiene vitamina K, que puede interactuar con anticoagulantes."
},

// 134. PROTEÍNA VEGANA EN POLVO SABOR CACAO HABITS (488 g, proteína de chícharo y arroz, BCAA, probióticos)
{
  id: 134,
  code: "7501468148738",
  name: "PROTEÍNA VEGANA EN POLVO SABOR CACAO HABITS",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/7501468148738_1.webp",
  shortDesc: "Proteína vegana en polvo sabor cacao, a base de chícharo y arroz integral, con 22.3 g de proteína, 6 g de BCAA's y 610 millones de UFC de probióticos por porción.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), cacao en polvo por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Proteína completa de origen vegetal",
    "Aporta 22.3 g de proteína por porción",
    "6 g de BCAA's para la recuperación muscular",
    "Probióticos para la salud digestiva",
    "Sin azúcares añadidos, sin gluten",
    "100% natural y vegana"
  ],
  contraindications: "Personas con condiciones médicas preexistentes, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 135. PROTEÍNA VEGANA VAINILLA HABITS (488 g, proteína de chícharo y arroz, BCAA, probióticos, vainilla)
{
  id: 135,
  code: "7501468148721",
  name: "PROTEÍNA VEGANA VAINILLA HABITS",
  category: "deportivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/habitsvainilla1.webp",
  shortDesc: "Proteína vegana en polvo sabor vainilla, a base de chícharo y arroz integral, con 22.3 g de proteína, 6 g de BCAA's y 610 millones de UFC de probióticos por porción.",
  ingredients: "Proteína de chícharo y arroz (22.3 g), BCAA's (6 g), probióticos (610 millones UFC), extracto natural de vainilla y stevia por porción.",
  serving: "30.5 g (1 scoop)",
  timing: "Post-entreno o entre comidas",
  intakeInstructions: "Mezclar 30.5 g con 250-300 ml de agua o bebida vegetal.",
  benefits: [
    "Proteína completa de origen vegetal",
    "Aporta 22.3 g de proteína por porción",
    "6 g de BCAA's para la recuperación muscular",
    "Probióticos para la salud digestiva",
    "Sin azúcares añadidos, sin gluten",
    "Sabor a vainilla natural"
  ],
  contraindications: "Personas con condiciones médicas preexistentes, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 136. Q10 (Coenzima Q10, 30 caps, con baya dorada, vitamina B6)
{
  id: 136,
  code: "7503021404879",
  name: "Q10 (Coenzima Q10)",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2025/05/COENZIMA-Q10.png",
  shortDesc: "Coenzima Q10 (120 mg) con baya dorada (200 mg) y vitamina B6 (10 mg) para el apoyo a la energía celular y la función cardiovascular.",
  ingredients: "Baya dorada (200 mg), coenzima Q10 (120 mg), harina de arroz (120 mg), vitamina B6 (10 mg), silicato de calcio (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos que contengan grasas",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos que contengan grasas.",
  benefits: [
    "Coenzima Q10 para la producción de ATP",
    "Baya dorada con antioxidantes y vitamina C",
    "Vitamina B6 para el metabolismo energético",
    "Apoya la función cardiovascular",
    "Protege las células del estrés oxidativo",
    "Fórmula con ingredientes naturales"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con anticoagulantes o hipotensores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes y hipotensores."
},

// 137. Raíz de Shatavari + Schisandra 1000 mg ZN (60 caps, shatavari, schisandra, jalea real)
{
  id: 137,
  code: "7500645000845",
  name: "RAÍZ DE SHATAVARI * SCHISANDRA 1000 mg ZN",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RAIZ-SHATAVARI1-2.jpg",
  shortDesc: "Fórmula adaptógena con raíz de shatavari (500 mg), schisandra (350 mg) y jalea real (50 mg), para el equilibrio hormonal, la vitalidad y la adaptación al estrés.",
  ingredients: "Polvo de raíz de shatavari (500 mg), polvo de fruto de schisandra (350 mg), jalea real en polvo (50 mg), estearato de magnesio (100 mg) por cápsula.",
  serving: "1 cápsula (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Shatavari para el equilibrio hormonal femenino",
    "Schisandra como adaptógeno",
    "Jalea real como tónico energético",
    "Apoya la función reproductiva",
    "Ayuda a la adaptación al estrés",
    "Fórmula tradicional y científica"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a productos de la colmena (jalea real), trastornos hormonales sensibles o bajo tratamiento con anticoagulantes, antidiabéticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos e inmunosupresores."
},

// 138. RESVERATROL 500 mg ZN (120 caps, resveratrol, semilla de uva, vitamina C, acai)
{
  id: 138,
  code: "7500645000760",
  name: "RESVERATROL 500 mg ZN",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/RESVERATROL1.jpg",
  shortDesc: "Fórmula antioxidante con resveratrol (250 mg), extracto de semilla de uva (150 mg), vitamina C (50 mg) y acai (50 mg), para la protección celular y la salud cardiovascular.",
  ingredients: "Resveratrol (250 mg), extracto de semilla de uva (150 mg), vitamina C (50 mg), extracto de acai (50 mg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Resveratrol activador de sirtuinas",
    "Semilla de uva rica en OPC",
    "Vitamina C para la protección celular",
    "Acai con antocianinas y antioxidantes",
    "Apoya la salud cardiovascular",
    "Protege las células del estrés oxidativo"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con trastornos de coagulación o bajo tratamiento con anticoagulantes, antiagregantes, antidiabéticos o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El resveratrol puede interactuar con medicamentos metabolizados por CYP3A4."
},

// 139. Rinichi (90 caps, 500 mg, palo azul, cola de caballo, cabellos de elote, zinc, selenio)
{
  id: 139,
  code: "7503021404541",
  name: "RINICHI",
  category: "clinico",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/rinichi.jpg",
  shortDesc: "Fórmula tradicional con palo azul, cola de caballo, cabellos de elote, zinc y selenio para el apoyo a la función renal y del tracto urinario.",
  ingredients: "Palo azul, cola de caballo, cabellos de elote (estimado 300 mg cada uno), zinc (~10 mg), selenio (~55 µg) por porción.",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos. Mantener hidratación adecuada.",
  benefits: [
    "Plantas tradicionales con acción diurética y depurativa",
    "Palo azul y cola de caballo para la salud renal",
    "Cabellos de elote con propiedades antiinflamatorias",
    "Zinc y selenio para la protección celular",
    "Apoya el bienestar del tracto urinario",
    "Fórmula basada en la herbolaria mexicana"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal crónica, insuficiencia cardíaca, hipertensión no controlada o bajo tratamiento con diuréticos, litio o antihipertensivos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con diuréticos y antihipertensivos."
},

// 140. Sábila con Nopal y Cuachalalate 1L (PROSA, líquido)
{
  id: 140,
  code: "7501734422104",
  name: "SÁBILA CON NOPAL Y CUACHALALATE 1L",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Sabila_NopalyCuachalalate1.webp",
  shortDesc: "Suplemento líquido con sábila, nopal, cuachalalate y vitamina C, sin aloína, para el bienestar digestivo y el apoyo a la función inmunológica.",
  ingredients: "Agua purificada, pulpa de sábila, pulpa de nopal, corteza de cuachalalate, ácido cítrico, ácido ascórbico (vitamina C), benzoato de sodio. Sin aloína.",
  serving: "30 ml (3 veces al día)",
  timing: "Antes de cada alimento",
  intakeInstructions: "Tomar 30 ml 3 veces al día, antes de cada alimento. Agitar antes de usar. Refrigerar después de abrir.",
  benefits: [
    "Sábila, nopal y cuachalalate de la herbolaria mexicana",
    "Sin aloína para un consumo seguro",
    "Vitamina C para la protección celular",
    "Apoya la salud digestiva",
    "Certificación Kosher",
    "Favorece el bienestar general"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 141. SDOMACHUS 500 mg (60 caps, fórmula digestiva con aloe vera, cardamomo, jengibre, agave, magnesio, B6, colpachi, B12, zinc, selenio)
{
  id: 141,
  code: "7503021404572",
  name: "SDOMACHUS 500 mg",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/SDOMACHUS.jpg",
  shortDesc: "Fórmula botánica y mineral para el bienestar digestivo con aloe vera, cardamomo, jengibre, agave, magnesio, vitamina B6, colpachi, B12, zinc y selenio.",
  ingredients: "Aloe vera (500 mg), cardamomo (500 mg), jengibre (250 mg), agave azul (100 mg), magnesio (100 mg), vitamina B6 (10 mg), colpachi, vitamina B12, zinc, selenio por porción.",
  serving: "2 cápsulas (2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Aloe vera y cardamomo para el confort digestivo",
    "Jengibre con propiedades carminativas",
    "Agave como fibra prebiótica",
    "Magnesio y vitaminas B para el metabolismo",
    "Zinc y selenio como antioxidantes",
    "Apoya la función digestiva y general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, enfermedad renal o hepática, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos, diuréticos o inmunosupresores deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El aloe vera en dosis altas puede tener efecto laxante."
},

// 142. Selenio 90 tabs 100 mcg (PRONACEN, selenio en levadura)
{
  id: 142,
  code: "7503000733686",
  name: "SELENIO PRONACEN",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SELENIO.webp",
  shortDesc: "Suplemento de selenio en levadura (100 mcg por tableta), con alta biodisponibilidad, para la protección celular y la función inmunológica y tiroidea.",
  ingredients: "Levadura de selenio (aporta 100 mcg de selenio por tableta), estearato de magnesio, celulosa microcristalina, fosfato dibásico de calcio.",
  serving: "1 tableta (500 mg)",
  timing: "Una vez al día",
  intakeInstructions: "Tomar una tableta al día.",
  benefits: [
    "Selenio en forma orgánica de levadura",
    "Alta biodisponibilidad (70-80%)",
    "Contribuye a la protección celular",
    "Apoya la función inmunológica y tiroidea",
    "Dosis de 100 mcg por tableta",
    "Favorece la salud general"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 143. Shilajit & Tongkat Ali Blend (60 caps, shilajit, tongkat ali, maca, tribulus, zinc, B6, D3)
{
  id: 143,
  code: "7500645001002",
  name: "SHILAJIT & TONGKAT ALI BLEND",
  category: "hormonal",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/SHILAJIT1.jpg",
  shortDesc: "Fórmula para la vitalidad masculina con shilajit, tongkat ali, maca, tribulus terrestris, zinc, vitamina B6 y D3, para el equilibrio hormonal y la energía.",
  ingredients: "Shilajit (300 mg), tongkat ali (300 mg), maca (300 mg), tribulus terrestris (279 mg), vitamina B6 (10 mg), zinc (10 mg), vitamina D3 (10 mcg) por porción.",
  serving: "2 cápsulas (1.2 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Shilajit y tongkat ali para la vitalidad",
    "Maca y tribulus para el equilibrio hormonal",
    "Zinc para la función reproductiva",
    "Vitaminas B6 y D3 para el bienestar",
    "Apoya la energía y la función sexual",
    "Fórmula adaptógena y mineral"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a algún componente, trastornos hepáticos o renales, o bajo tratamiento con hormonas, anticoagulantes o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El shilajit debe ser de alta pureza; puede contener metales pesados si no está purificado."
},

// 144. SIMILAXOL (50 tabletas, laxante homeopático con fenolftaleína amarilla SM)
{
  id: 144,
  code: "75020286",
  name: "SIMILAXOL",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SIMILAXOL.webp",
  shortDesc: "Medicamento homeopático laxante a base de fenolftaleína amarilla SM (100 mg por tableta), para el alivio del estreñimiento ocasional.",
  ingredients: "Fenolftaleína amarilla SM 100 mg por tableta.",
  serving: "1-2 tabletas (según indicación)",
  timing: "Por la noche al acostarse",
  intakeInstructions: "Tomar 1-2 tabletas por la noche al acostarse. No usar por más de una semana.",
  benefits: [
    "Alivio del estreñimiento ocasional",
    "Acción en 6-12 horas",
    "Dosificación sencilla",
    "Preparación homeopática SM",
    "Indicado para adultos y niños mayores de 5 años",
    "Uso bajo supervisión médica"
  ],
  contraindications: "No administrar en casos de dolor abdominal agudo, diarrea, embarazo, lactancia, o en menores de 5 años sin prescripción médica.",
  foodInteractions: "No especificado",
  interactions: "El uso prolongado puede causar dependencia."
},

// 145. SOY LECITHIN + CHOLINE (30 caps, lecitina de soya 1200 mg, colina bitartrato 100 mg, jengibre, inulina)
{
  id: 145,
  code: "7500645001484",
  name: "SOY LECITHIN + CHOLINE",
  category: "metabolismo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/SOY-LECITIN1.jpg",
  shortDesc: "Suplemento de lecitina de soya (1200 mg) y colina bitartrato (100 mg) con jengibre e inulina, para el metabolismo lipídico y la función hepática.",
  ingredients: "Lecitina de soya (1200 mg), colina bitartrato (100 mg), jengibre en polvo (50 mg), inulina de agave c.s.p. por porción.",
  serving: "2 cápsulas (1.3 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Lecitina de soya rica en fosfolípidos",
    "Colina para el metabolismo hepático",
    "Jengibre para el confort digestivo",
    "Inulina como prebiótico",
    "Apoya la función hepática y la memoria",
    "Fuente de colina natural"
  ],
  contraindications: "Personas con alergia a la soya no deben consumir este producto. Mujeres embarazadas o en lactancia deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 146. Té Piñalim (30 sobres de 3 g, piña, linaza, té verde, té rojo, té blanco)
{
  id: 146,
  code: "7502217902526",
  name: "TÉ PIÑALIM (Infusión)",
  category: "laxantes",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/Pinalimte1.webp",
  shortDesc: "Infusión herbal con piña, linaza, té verde, té rojo y té blanco, orgánica y kosher, para el bienestar digestivo y antioxidante.",
  ingredients: "Pulpa de piña (20%), linaza (20%), té verde (20%), té rojo (20%), té blanco (20%).",
  serving: "1 sobre (3 g) en 200 ml de agua caliente",
  timing: "Preferentemente por la noche",
  intakeInstructions: "Colocar un sobre en agua caliente (65°C), esperar 3-5 minutos, endulzar al gusto. Tomar una taza al día.",
  benefits: [
    "Mezcla de piña, linaza y tres tipos de té",
    "0 kcal, sin azúcares ni grasas",
    "Orgánico y con certificación Kosher",
    "Fuente de antioxidantes y fibra",
    "Apoya la digestión y el bienestar",
    "Fácil preparación"
  ],
  contraindications: "Personas con enfermedades crónicas, mujeres embarazadas o en lactancia deben consultar a su médico.",
  foodInteractions: "No especificado",
  interactions: "No se conocen interacciones significativas."
},

// 147. Tiamina 3000 Alexyac (100 tabletas, fórmula premium con tiamina, cafeína, guaraná, jalea real, polen, etc.)
{
  id: 147,
  code: "7503024065572",
  name: "TIAMINA 3000 ALEXYAC",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TIAMINA-ALEXYAC.webp",
  shortDesc: "Fórmula premium con vitamina B1 (tiamina), vitamina E, ácido fólico, CoQ10, cafeína, guaraná, jalea real, polen, lecitina de soya, miel y minerales.",
  ingredients: "Vitamina B1 (tiamina), vitamina E, ácido fólico, CoQ10, cafeína, jalea real, polen de flores, lecitina de soya, miel de abeja, guaraná, gluconato de calcio, sulfato de magnesio.",
  serving: "1-2 tabletas (500 mg c/u)",
  timing: "Según indicación",
  intakeInstructions: "Tomar de 1 a 2 tabletas al día.",
  benefits: [
    "Tiamina para el metabolismo energético",
    "Cafeína y guaraná como estimulantes",
    "Jalea real, polen y miel como tónicos",
    "CoQ10 y vitamina E como antioxidantes",
    "Ácido fólico para la formación de glóbulos rojos",
    "Fórmula premium para la vitalidad"
  ],
  contraindications: "No se use durante el embarazo y lactancia. Contiene cafeína y guaraná, evitar en personas sensibles. Consultar a médico si se tiene intolerancia a los ingredientes.",
  foodInteractions: "No especificado",
  interactions: "La cafeína puede interactuar con estimulantes y medicamentos."
},

// 148. TO ADZEN / HIERBA DE SAPO 500 mg (90 caps, hierba del sapo en polvo)
{
  id: 148,
  code: "7503026253892",
  name: "TO ADZEN / HIERBA DE SAPO 500 mg",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Slides-MarketPlaces4-1_0006s_0002_Presentacion-blanco.jpg",
  shortDesc: "Suplemento de hierba del sapo (Eryngium carlinae) en polvo, planta tradicional mexicana para el apoyo digestivo, diurético y metabólico.",
  ingredients: "Hierba del Sapo (Eryngium carlinae) en polvo 100% (1.5 g por porción).",
  serving: "3 cápsulas (1.5 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 3 cápsulas al día con alimentos.",
  benefits: [
    "Hierba del Sapo con uso tradicional mexicano",
    "Apoya la función digestiva",
    "Efecto diurético y depurativo",
    "Contribuye al control metabólico",
    "100% puro, sin excipientes",
    "Favorece el bienestar general"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con enfermedad renal, hipotensión, diabetes, o bajo tratamiento con diuréticos, antihipertensivos o antidiabéticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede tener efectos diuréticos; usar con precaución en desequilibrios electrolíticos."
},

// 149. Treonato de magnesio (60 caps, L-treonato de magnesio, té verde, vitaminas C y D)
{
  id: 149,
  code: "7500645000746",
  name: "TREONATO DE MAGNESIO",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TREONATO-MAGNESIO1.jpg",
  shortDesc: "L-Treonato de magnesio (288 mg por porción, aporta 36 mg de magnesio elemental) con extracto de té verde, vitamina C y vitamina D, para la función cognitiva y la salud neurológica.",
  ingredients: "L-Treonato de magnesio (288 mg), té verde (100 mg), vitamina C (137.06 mg), vitamina D (0.01 mcg) por porción.",
  serving: "2 cápsulas (1 g)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 2 cápsulas al día con alimentos.",
  benefits: [
    "Forma de magnesio que atraviesa la barrera hematoencefálica",
    "Apoya la plasticidad sináptica y la memoria",
    "Té verde con antioxidantes",
    "Vitamina C para la protección celular",
    "Vitamina D para la absorción del magnesio",
    "Favorece la función cognitiva"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con insuficiencia renal o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Puede interactuar con anticoagulantes, antidiabéticos y diuréticos."
},

// 150. TRIPTOFANO TEANINA 500 mg (30 caps, L-triptófano, azahar, teanina, vitamina D3)
{
  id: 150,
  code: "7503025069852",
  name: "TRIPTOFANO TEANINA 500 mg",
  category: "nervioso",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/TRIPTOFANO1.jpg",
  shortDesc: "Fórmula para la relajación y el sueño con L-triptófano (300 mg), azahar (100 mg), teanina (100 mg) y vitamina D3 (10 mcg), para el bienestar emocional y el descanso.",
  ingredients: "L-Triptófano (300 mg), azahar (100 mg), teanina (100 mg), vitamina D3 (10 mcg) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Antes de dormir o con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día, preferentemente antes de dormir.",
  benefits: [
    "L-Triptófano precursor de serotonina y melatonina",
    "Teanina para la relajación sin somnolencia",
    "Azahar con propiedades calmantes",
    "Vitamina D3 para el equilibrio del estado de ánimo",
    "Apoya la calidad del sueño",
    "Favorece el bienestar emocional"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes, trastornos hepáticos o bajo tratamiento con antidepresivos (ISRS, IMAO), ansiolíticos, hipnóticos o anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
    interactions: "Puede causar somnolencia; evitar conducir después de su consumo."
},
// 151. Zen Greens 200G (polvo verde con prebióticos, vegetales, enzimas y probióticos)
{
  id: 151,
  code: "7500645001446",
  name: "ZEN GREENS 200G",
  category: "digestivo",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/05/ZenGreen1.jpg",
  shortDesc: "Suplemento en polvo que combina fibras prebióticas (inulina, FOS, fibra de acacia), vegetales verdes deshidratados, extractos botánicos, enzimas digestivas y probióticos para apoyar el bienestar digestivo y la vitalidad cotidiana.",
  ingredients: "Inulina (1500 mg), FOS (1000 mg), fibra de acacia (500 mg), espinaca (200 mg), apio (200 mg), pepino (200 mg), nopal (200 mg), piña (300 mg), alfalfa (100 mg), extracto de té verde (200 mg), extracto de aloe vera (200 mg), cúrcuma (200 mg), jengibre (150 mg), extracto de alcachofa (100 mg), guaraná (100 mg), clorofila (50 mg), pimienta negra (5 mg), bromelina (30 mg), papaína (30 mg), enzimas vegetales (40 mg), Lactobacillus rhamnosus GG (3×10⁶ UFC), Bifidobacterium bifidum (2×10⁶ UFC) por porción.",
  serving: "1 medida (6 g)",
  timing: "Preferentemente por la mañana en ayunas o con el desayuno",
  intakeInstructions: "Disolver 1 medida (6 g) en 250-300 ml de agua fría o zumo, removiendo hasta disolución completa. Consumir una vez al día.",
  benefits: [
    "Aporta fibras prebióticas que estimulan el crecimiento de bacterias beneficiosas",
    "Contiene vegetales verdes ricos en clorofila, fibra y minerales alcalinizantes",
    "Incluye enzimas digestivas (bromelina, papaína) para facilitar la digestión",
    "Proporciona probióticos vivos para el equilibrio de la microbiota intestinal",
    "Combina extractos botánicos con actividad antioxidante y metabólica",
    "Favorece el bienestar digestivo y la vitalidad general"
  ],
  contraindications: "No recomendado durante el embarazo o la lactancia sin consulta médica. Personas sensibles a la cafeína (presente en guaraná y té verde) deben tener precaución. Personas con trastornos hepáticos o que toman anticoagulantes deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "Contiene cafeína (aprox. 10-15 mg por dosis); puede interactuar con estimulantes."
},

// 152. Zinc con Ginger (zinc 20 mg + jengibre 400 mg por cápsula)
{
  id: 152,
  code: "7503029679163",
  name: "ZINC CON GINGER",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2022/04/ZincYJengibre.jpg",
  shortDesc: "Fórmula sinérgica que combina zinc (20 mg elemental) con raíz de jengibre (400 mg), para apoyar la función inmunológica, la protección celular y el bienestar digestivo.",
  ingredients: "Raíz de jengibre (Zingiber officinale) en polvo (400 mg), zinc elemental (20 mg, como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Zinc para el funcionamiento normal del sistema inmunológico",
    "Contribuye a la protección de las células frente al estrés oxidativo",
    "Jengibre con propiedades digestivas y carminativas",
    "Apoya el metabolismo de los macronutrientes",
    "Ayuda al mantenimiento de la piel, cabello y uñas",
    "Fórmula sinérgica para el bienestar general"
  ],
  contraindications: "No administrar a menores de 12 años. Mujeres embarazadas o en lactancia, personas con alergia al jengibre, trastornos de coagulación o bajo tratamiento con anticoagulantes, antidiabéticos o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El zinc puede interferir con la absorción de cobre si se consume en exceso. Separar la toma de calcio, hierro o fibra al menos 2 horas."
},

// 153. ZINC (zinc elemental 20 mg por cápsula)
{
  id: 153,
  code: "7500645000319",
  name: "ZINC",
  category: "inmune",
  image: "https://investigacioncbg.com/wp-content/uploads/2026/06/ZINCYAVENA_1.webp",
  shortDesc: "Suplemento de zinc elemental (20 mg por cápsula) para apoyar la función inmunológica, la protección celular, el metabolismo de macronutrientes y el mantenimiento de la piel, cabello y uñas.",
  ingredients: "Zinc elemental 20 mg (como gluconato, citrato u óxido) por cápsula.",
  serving: "1 cápsula (500 mg)",
  timing: "Con alimentos",
  intakeInstructions: "Tomar 1 cápsula al día con alimentos.",
  benefits: [
    "Apoya el funcionamiento normal del sistema inmunológico",
    "Contribuye a la protección de las células frente al estrés oxidativo",
    "Participa en el metabolismo normal de los macronutrientes",
    "Ayuda al mantenimiento de la piel, cabello y uñas",
    "Cofactor de más de 300 enzimas",
    "Fórmula sencilla y de alta pureza"
  ],
  contraindications: "Mujeres embarazadas o en lactancia, personas con alergia a alguno de los componentes o bajo tratamiento con antibióticos, penicilamina o diuréticos deben consultar a un profesional de la salud.",
  foodInteractions: "No especificado",
  interactions: "El zinc en dosis altas puede interferir con la absorción de cobre. Separar la toma de calcio, hierro o fibra al menos 2 horas."
}
,
// PRODUCTO 154 - Calcium Citrate 510 mg
{
    id: 154,
    code: "7500645001514",
    name: "CALCIUM CITRATE 510 mg",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/05/CALCIUM-CITRATE1.jpg",
    shortDesc: "Suplemento de calcio altamente biodisponible con vitamina D3 y extracto de avena, ideal para el mantenimiento óseo y muscular.",
    ingredients: "Citrato de calcio (1,000 mg por porción), extracto de avena (Avena sativa L.) (20 mg), vitamina D3 (colecalciferol) (10 µg / 400 UI).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día, acompañadas de alimentos y un vaso de agua. Puede dividirse en una o dos tomas según preferencia.",
    benefits: [
        "Apoya la mineralización y mantenimiento óseo",
        "Contribuye al funcionamiento normal de los músculos",
        "Favorece la transmisión nerviosa",
        "Vitamina D3 que estimula la absorción intestinal del calcio",
        "Fórmula con citrato de calcio, ideal para personas con baja producción de ácido gástrico",
        "Extracto de avena que complementa el bienestar general"
    ],
    contraindications: "Personas con hipercalcemia, insuficiencia renal o que tomen digitálicos deben consultar a su médico antes de consumirlo. No recomendado en caso de hipersensibilidad a alguno de sus componentes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 155 - HONIG ABAGREEN VERDE
{
    id: 155,
    code: "7503016797009",
    name: "HONIG ABANGREEN LIMON",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABANGREENVERDE.png",
    shortDesc: "Fórmula líquida a base de miel, propóleo y extractos botánicos con vitamina C, diseñada para apoyar la función respiratoria y las defensas naturales.",
    ingredients: "Miel de abeja, propóleo, extractos de: eucalipto (Eucalyptus), bugambilia (Bougainvillea), gordolobo (Verbascum thapsus), fenogreco (Trigonella foenum-graecum), saúco (Sambucus), malva (Malva sylvestris), mentol, esencia de miel, vitamina C (ácido ascórbico).",
    serving: "12 ml (1 cucharada) cada 4 horas",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos y niños mayores de 10 años: Tomar 1 cucharada (12 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
        "Apoya la función respiratoria",
        "Favorece las defensas naturales del organismo",
        "Vitamina C que contribuye a la protección celular",
        "Miel con propiedades emolientes para la garganta",
        "Propóleo con compuestos fenólicos y flavonoides",
        "Extractos botánicos con uso tradicional en bienestar respiratorio"
    ],
    contraindications: "No administrar a menores de 1 año (riesgo de botulismo infantil por la miel). Personas con alergia a productos apícolas (miel, propóleo, polen) o a alguno de los componentes. No consumir durante el embarazo o periodo de lactancia sin consultar a un profesional de la salud. Contiene azúcares naturales; consumir con moderación en caso de diabetes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 156 - HONIG ABAGREEN ROJO
{
    id: 156,
    code: "7503024738094",
    name: "HONIG ABANGREEN AJO NEGRO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABANGREEN-ROJO.png",
    shortDesc: "Fórmula líquida a base de miel, propóleo, ajo negro y extractos botánicos con vitamina C, para el apoyo respiratorio y las defensas inmunológicas.",
    ingredients: "Miel de abeja, propóleo, extractos de: gordolobo (Verbascum thapsus), ajo negro (Allium nigrum), orégano (Origanum vulgare), bugambilia (Bougainvillea), fenogreco (Trigonella foenum-graecum), eucalipto (Eucalyptus), saúco (Sambucus), malva rosa (Alcea rosea), mentol, vitamina C (ácido ascórbico).",
    serving: "20 ml (2 vasos dosificadores) cada 4 horas (adultos)",
    timing: "Cada 4 horas, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 2 vasos dosificadores (20 ml) cada 4 horas. Niños: Tomar 1 vaso dosificador (10 ml) cada 4 horas. Agitar bien el envase antes de cada uso. No exceder la porción diaria recomendada.",
    benefits: [
        "Apoya la función respiratoria y las defensas naturales",
        "Ajo negro con compuestos azufrados y alta capacidad antioxidante",
        "Vitamina C que contribuye a la función normal del sistema inmunitario",
        "Miel y propóleo con propiedades emolientes y antioxidantes",
        "Extractos botánicos con uso tradicional en bienestar respiratorio",
        "Fórmula 100% natural"
    ],
    contraindications: "No administrar a menores de 1 año (riesgo de botulismo infantil por la miel). Personas con alergia a productos apícolas (miel, propóleo, polen) o a alguno de los componentes. Mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de consumirlo. Contiene azúcares naturales; consumir con moderación en caso de diabetes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
}
,
// PRODUCTO 157 - NUYO
{
    id: 157,
    code: "7503021404206",
    name: "NUYO",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NUYO.png",
    shortDesc: "Suplemento alimenticio integral con glucosamina, MSM, cúrcuma, nogal, vitaminas y minerales, diseñado para apoyar la salud articular, la función cognitiva y el equilibrio metabólico.",
    ingredients: "Metilsulfonilmetano (MSM) (125 mg), glucosamina (100 mg), cúrcuma (Curcuma longa) (100 mg), nogal (Juglans regia) (50 mg), vitamina C (30 mg), calcio (40 mg), magnesio (30 mg), vitamina B2 (riboflavina) (2 mg), vitamina B6 (piridoxina) (2 mg), zinc (10 mg), hierro (5 mg), potasio (5 mg), vitamina B12 (cianocobalamina) (100 µg), fósforo (0.9 mg).",
    serving: "1 cápsula al día",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente después de los alimentos, acompañada de agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
        "Apoya la salud articular y la integridad del cartílago",
        "Contribuye al mantenimiento de la función cognitiva",
        "Favorece el equilibrio metabólico general",
        "Aporta azufre biodisponible para la formación de colágeno y tejidos conectivos",
        "Fórmula antioxidante con cúrcuma y nogal",
        "Complejo vitamínico-mineral que contribuye al metabolismo energético y la protección celular"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 158 - PROTEÍNA CACAO HIGH PERFORMANCE
{
    id: 158,
    code: "7501468149636",
    name: "PROTEÍNA CACAO HIGH PERFORMANCE",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/HABITHP.webp",
    shortDesc: "Proteína vegana de alto rendimiento con 30g de proteína, 6g de BCAAs, probióticos (770M UFC) y electrolitos, diseñada para atletas y personas activas.",
    ingredients: "Concentrado de proteína vegetal (chícharo y arroz integral), cocoa, aminoácidos de cadena ramificada (leucina, isoleucina y valina), sabor natural cacao, sal rosa del Himalaya, probióticos (Lactobacillus acidophilus y Bifidobacterium bifidum) y stevia (Stevia rebaudiana).",
    serving: "1 medida (39.5 g) al día",
    timing: "Dentro de los 60 minutos posteriores al entrenamiento o como colación proteica",
    intakeInstructions: "Mezclar 1 medida (39.5 g) con 350 ml de agua fría o leche vegetal. Agitar en shaker durante 20-30 segundos hasta disolver. Se recomienda consumir de 1 a 2 porciones al día, dependiendo de las necesidades proteicas y nivel de actividad física.",
    benefits: [
        "30 g de proteína vegetal por porción",
        "6 g de aminoácidos de cadena ramificada (BCAAs)",
        "770 millones de UFC de probióticos (Lactobacillus acidophilus y Bifidobacterium bifidum)",
        "Electrolitos que apoyan la hidratación y función neuromuscular",
        "Perfil completo de aminoácidos esenciales",
        "Sin gluten, sin OGM, sin lácteos, sin soya y sin ingredientes artificiales"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica (especialmente renal o hepática) deben consultar a su profesional de la salud antes de consumir este producto. Este producto es fabricado en instalaciones que también procesan lácteos y derivados de soya.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 159 - VITA RX NANO FEAR
{
    id: 159,
    code: "7503016797627",
    name: "VITA RX NANO FEAR",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VITARX-NANO1.png",
    shortDesc: "Suplemento multivitamínico y mineral de alta densidad nutricional con 100% de la Ingesta Diaria Recomendada de vitaminas esenciales, complementado con glicina y glutamina para atletas y personas activas.",
    ingredients: "Glicina, ácido ascórbico (vitamina C), glutamina, carbonato de calcio, fosfato de potasio, sulfato de magnesio, niacina (vitamina B3), D-tocoferol acetato (vitamina E), pantotenato de calcio (vitamina B5), sulfato ferroso, riboflavina (vitamina B2), tiamina (vitamina B1), óxido de zinc, sulfato de manganeso, gluconato de cobre, retinol palmitato (vitamina A), ácido fólico, biotina, filoquinona (vitamina K), colecalciferol (vitamina D3) y cianocobalamina (vitamina B12).",
    serving: "3 cápsulas al día",
    timing: "1 cápsula antes de cada alimento (distribuir con las comidas principales)",
    intakeInstructions: "Tomar 3 cápsulas al día (1 antes de cada alimento) para optimizar la absorción de vitaminas liposolubles. No exceder la porción diaria recomendada.",
    benefits: [
        "100% de la Ingesta Diaria Recomendada de vitaminas esenciales (A, D3, E, C, B1, B2, B3, B5, B6, B12, K, ácido fólico y biotina)",
        "Apoya el metabolismo energético y la función inmunológica",
        "Contribuye a la protección celular frente al estrés oxidativo",
        "Favorece la salud ósea y la función neuromuscular",
        "Glicina y glutamina que apoyan la recuperación muscular",
        "Fórmula completa para el rendimiento deportivo y la salud general"
    ],
    contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de usar este producto. No exceder la dosis diaria indicada.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

 // PRODUCTO 160 - MCT OIL BIRDMAN
{
        id: 160,
        code: "7503025737362",
        name: "MCT OIL BIRDMAN",
        category: "metabolismo",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MCTOIL-BIRDMAN.webp",
        shortDesc: "Triglicéridos de cadena media (MCT) de alta pureza con ácido caprílico (C8) al 98%, extraído de aceite de coco, diseñado para proporcionar energía rápida y apoyar la cetosis.",
        ingredients: "Ésteres de ácidos grasos de cadena media (ácido caprílico 98%) extraído de aceite de coco.",
        serving: "1 cucharada sopera (15 ml) al día",
        timing: "Puede tomarse en cualquier momento, solo o añadido a café, batidos o comidas",
        intakeInstructions: "Tomar 1 cucharada sopera (15 ml) al día, solo o añadido a café, batidos, ensaladas o comidas. Para quienes son nuevos en MCT, se recomienda comenzar con 1/2 cucharada (7.5 ml) y aumentar gradualmente para evitar molestias digestivas. Agitar antes de usar.",
        benefits: [
            "Ácido caprílico (C8) al 98%, el MCT más ketogénico",
            "Proporciona energía rápida y eficiente al cerebro y los músculos",
            "Apoya la cetosis en dietas cetogénicas y bajas en carbohidratos",
            "No eleva los niveles de glucosa en sangre",
            "Favorece el enfoque y la claridad mental",
            "Sin carbohidratos, sin proteínas y sin sodio"
        ],
        contraindications: "Personas con enfermedades hepáticas o renales, mujeres embarazadas o en periodo de lactancia deben consultar a su médico antes de usar este producto. No exceder la dosis diaria indicada.",
        foodInteractions: "No especificado",
        interactions: "No especificado"
    },

    // PRODUCTO 161 - VGREEN
  {
    id: 161,
    code: "7503016797498",
    name: "VGREEN",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VGREEN.png",
    shortDesc: "Suplemento a base de té verde, guaraná, rodiola, schisandra, damiana, zarzaparrilla y toronjil, diseñado para apoyar la vitalidad, el equilibrio emocional y la protección celular.",
    ingredients: "Polvo de hoja de té verde (Camellia sinensis) (620 mg), polvo de raíz de zarzaparrilla (Smilax aristolochiaefolia) (100 mg), polvo de hoja de toronjil (Melissa officinalis) (100 mg), mezcla HGO: polvo de hoja de damiana de campo (Turnera diffusa), polvo de semilla de guaraná (Paullinia cupana) (10 mg), polvo de raíz de rodiola rosea (Rhodiola rosea) (3.4 mg), polvo de flor de castilla, polvo de fruto de schisandra (Schisandra chinensis).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Tomar 2 cápsulas al día, de preferencia por la mañana, acompañadas de suficiente agua. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
      "Té verde con alto contenido de catequinas para la protección celular",
      "Guaraná como estimulante natural que favorece la vitalidad",
      "Rodiola y schisandra como plantas adaptógenas que apoyan la respuesta al estrés",
      "Damiana, zarzaparrilla y toronjil para el bienestar general",
      "Fórmula con mínimo aporte calórico (0.9 kcal por porción)",
      "Sin grasas ni sodio añadidos"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

    // PRODUCTO 163 - ASH + MAG COMPLEX
    {
        id: 163,
        code: "7500645001668",
        name: "ASH + MAG COMPLEX",
        category: "nervioso",
        image: "https://investigacioncbg.com/wp-content/uploads/2026/07/RENDER-ASHWA-MAG-COMPLEX-1.jpeg",
        shortDesc: "Suplemento que combina extracto estandarizado de Ashwagandha (600 mg), L-Teanina (200 mg) y Bisglicinato de Magnesio (225 mg de magnesio elemental) para apoyar la respuesta al estrés, la relajación funcional y el sistema nervioso.",
        ingredients: "Extracto de Ashwagandha (Withania somnifera) estandarizado al 2.5% de withanólidos (600 mg por porción diaria), L-Teanina (200 mg por porción diaria), Bisglicinato de Magnesio (aporta 225 mg de magnesio elemental por porción diaria).",
        serving: "3 cápsulas al día (porción diaria completa)",
        timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. La porción diaria completa (3 cápsulas) proporciona 600 mg de Ashwagandha, 200 mg de L-Teanina y 225 mg de magnesio elemental. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), se recomienda consultar con un profesional de la salud.",
        benefits: [
            "Ashwagandha como adaptógeno que apoya la respuesta al estrés",
            "L-Teanina que favorece la relajación sin somnolencia",
            "Magnesio de alta biodisponibilidad (bisglicinato) que contribuye a la función nerviosa y muscular",
            "Ayuda a reducir el cansancio y la fatiga",
            "Fórmula que promueve el equilibrio emocional y la concentración",
            "Combinación sinérgica para el bienestar del sistema nervioso"
        ],
        contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula. Personas con hipertiroidismo, trastornos autoinmunitarios o bajo tratamiento farmacológico (sedantes, ansiolíticos, hipoglucemiantes, antihipertensivos) deben consultar a un profesional de la salud antes de consumirlo.",
        foodInteractions: "No especificado",
        interactions: "No especificado"
    }
    ,

// PRODUCTO 164 - ALOE VERA NOPAL CON CUACHALALATE
{
    id: 164,
    code: "7503016797634",
    name: "ALOE VERA NOPAL CON CUACHALALATE",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2022/04/AloeCuachalalate.jpg",
    shortDesc: "Bebida funcional que combina aloe vera, nopal y cuachalalate, tres plantas de reconocido uso tradicional en México, enriquecida con vitamina C para apoyar la salud gastrointestinal, el bienestar metabólico y la hidratación.",
    ingredients: "Jugo de aloe vera (Aloe barbadensis), jugo de nopal (Opuntia ficus-indica), extracto de cuachalalate (Amphipterygium adstringens), ácido ascórbico (vitamina C).",
    serving: "90 ml al día",
    timing: "Preferentemente en ayunas o entre comidas",
    intakeInstructions: "Agitar bien el envase antes de cada uso. Consumir 90 ml al día (un vaso dosificador), preferentemente en ayunas o entre comidas. Puede tomarse solo o mezclado con agua si se desea un sabor más suave. No exceder la porción diaria recomendada. Una vez abierto, consumir en un plazo de 1 mes.",
    benefits: [
        "Aloe vera que apoya la salud gastrointestinal y la hidratación",
        "Nopal con fibra que contribuye al bienestar metabólico",
        "Cuachalalate con uso tradicional para la salud digestiva y la cicatrización de tejidos",
        "Vitamina C con actividad antioxidante que protege las células",
        "Bebida baja en calorías (27 kcal por porción)",
        "Fórmula con plantas mexicanas de reconocido uso tradicional"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes de la fórmula.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 165 - TÉ VERDE
{
    id: 165,
    code: "7503024738278",
    name: "TÉ VERDE",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-VERDE--scaled.png",
    shortDesc: "Infusión elaborada con hojas de té verde (Camellia sinensis) 100% puras, reconocido por su alto contenido de catequinas y su perfil antioxidante.",
    ingredients: "Hojas de té verde (Camellia sinensis).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la mañana",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml) y dejar infusionar 3-5 minutos. Retirar el sobre y disfrutar.",
    benefits: [
        "Alto contenido de catequinas y flavonoides con actividad antioxidante",
        "Contribuye a la protección celular frente al estrés oxidativo",
        "Tradicionalmente utilizado para apoyar el metabolismo energético",
        "Contiene teanina que promueve la relajación sin somnolencia",
        "Estimulante suave por su contenido natural de cafeína",
        "100% hojas puras, sin mezclas ni aditivos"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Contiene cafeína de forma natural. Consumir con precaución en personas sensibles a la cafeína.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 166 - D3 5000 UI
{
    id: 166,
    code: "7500645000821",
    name: "D3 5000 UI",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2024/02/D3.jpg",
    shortDesc: "Suplemento de vitamina D3 (5000 UI) en cápsula blanda con aceite de olivo y avena en polvo como vehículo lipídico para optimizar su absorción.",
    ingredients: "Vitamina D3 (colecalciferol) (125 µg / 5000 UI), aceite de olivo (Olea europaea) (400 mg), avena en polvo (Avena sativa) (100 mg).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos que contengan grasas",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos que contengan grasas para optimizar la absorción. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
        "5000 UI de vitamina D3 por cápsula",
        "Contribuye a la absorción del calcio y el fósforo",
        "Apoya el mantenimiento de los huesos y dientes",
        "Favorece la función muscular normal",
        "Contribuye a la función inmunológica",
        "Aceite de olivo que facilita la absorción de la vitamina liposoluble"
    ],
    contraindications: "No consumir durante el embarazo o lactancia sin supervisión médica. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 167 - FIX UZEN
{
    id: 167,
    code: "7503025069647",
    name: "FIX UZEN",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/FIX-UZEN-scaled.png",
    shortDesc: "Gel tópico formulado con extracto de árnica, salicilato de metilo, glucosamina y mentol natural, diseñado para el alivio de molestias musculares y articulares.",
    ingredients: "Agua, extracto de árnica (Heterotheca inuloides), salicilato de metilo, glucosamina, trietanolamina, ácido esteárico, carbomero, glicerina, monoesterato de sorbitan, aceite mineral, mentol natural, alcohol, parafina, alcohol bencílico, DMDM hidantoína, fenoxietanol, hidroxiacetofenona, color azul #1.",
    serving: "Aplicación tópica según necesidad",
    timing: "Según necesidad, 2-3 veces al día",
    intakeInstructions: "Aplicar una cantidad suficiente de gel sobre la zona afectada. Masajear suavemente hasta que se absorba completamente. Repetir 2-3 veces al día según sea necesario. Lavar las manos después de cada aplicación. Uso exclusivamente tópico, no ingerir.",
    benefits: [
        "Extracto de árnica para el alivio de contusiones y molestias musculares",
        "Salicilato de metilo que proporciona sensación de calor y alivio local",
        "Glucosamina como soporte para la salud articular",
        "Mentol natural con efecto refrescante y calmante",
        "Fácil aplicación y rápida absorción",
        "Fórmula tópica de uso externo"
    ],
    contraindications: "No se use en menores de 12 años. Evitar contacto con ojos, mucosas y heridas abiertas. Si se presenta irritación o reacción alérgica, suspender su uso y consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 168 - HPR PROS GREEN
{
    id: 168,
    code: "'7503016797382",
    name: "HPR PROS GREEN",
    category: "hormonal",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/HPR-PROSGREEN-LIFE.png",
    shortDesc: "Suplemento con polen de flores, pelo de elote, perejil, Omega 3, buchu, pygeum, licopeno, vitaminas B6 y E, y zinc, diseñado para el bienestar prostático y general.",
    ingredients: "Polen de flores, Omega 3 (150 mg), vitamina E (50 mg), zinc (20 mg), licopeno (10 mg), vitamina B6 (10 mg), polen de flores, pelos de elote, perejil, buchu, pygeum (en cantidades no especificadas).",
    serving: "1 cápsula al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos. No exceder la dosis diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
        "Pygeum y zinc para el bienestar prostático",
        "Omega 3 que contribuye al mantenimiento de la función cardíaca",
        "Licopeno y vitaminas E y C con actividad antioxidante",
        "Polen de flores como fuente natural de nutrientes",
        "Fórmula baja en calorías (0.52 kcal por porción)",
        "Línea GREEN LIFE con ingredientes botánicos"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con alergia a productos apícolas (polen) deben evitar su consumo.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 169 - TÉ 7 AZAHARES
{
    id: 169,
    code: "7503024738261",
    name: "TÉ 7 AZAHARES",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-7-AZAHARES-scaled.png",
    shortDesc: "Infusión herbal compuesta por 9 ingredientes botánicos de reconocido uso tradicional en México (yerbaniz, manzanilla, zapote blanco, azahar, hierbabuena, pasiflora, toronjil, flor de manita y tila) para favorecer la relajación y el bienestar.",
    ingredients: "Yerbaniz (Tagetes lucida), flor de manzanilla (Chamaemelum nobile), zapote blanco (Casimiroa edulis), hojas de naranja/flor de azahar (Citrus aurantium), hierbabuena (Mentha spicata), pasiflora (Passiflora incarnata), flor de toronjil (Melissa officinalis), flor de manita (Chiranthodendron pentadactylon), flor de tila (Tilia alba).",
    serving: "1 sobre (1.5 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Colocar la bolsita en una taza, agregar agua caliente (200 ml) a 65°C, dejar infusionar 3-5 minutos, retirar la bolsita y disfrutar.",
    benefits: [
        "Mezcla de 9 plantas de la herbolaria mexicana",
        "Tradicionalmente utilizada para favorecer la relajación",
        "Apoya el bienestar emocional y la calidad del sueño",
        "Sin cafeína, ideal para consumir por la noche",
        "Aroma y sabor suave de flores y hierbas",
        "Fórmula 100% natural sin aditivos"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 170 - TÉ ABANGREEN
{
    id: 170,
    code: "7503024738339",
    name: "TÉ ABANGREEN",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-ABANGREEN-scaled.png",
    shortDesc: "Infusión herbal que combina eucalipto, tejocote, gordolobo, tabachín, sáuco y propóleo, plantas de reconocido uso tradicional para el bienestar respiratorio.",
    ingredients: "Eucalipto (Eucalyptus), tejocote (Crataegus mexicana), gordolobo (Verbascum thapsus), tabachín (Caesalpinia pulcherrima), sáuco (Sambucus nigra), propóleo.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Eucalipto para el bienestar respiratorio",
        "Gordolobo con uso tradicional en vías respiratorias",
        "Sáuco con perfil antioxidante",
        "Propóleo con compuestos fenólicos y flavonoides",
        "Mezcla de plantas medicinales mexicanas",
        "Sin cafeína, ideal para cualquier momento del día"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con alergia a productos apícolas (propóleo) deben evitar su consumo.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 171 - TÉ ÁRNICA
{
    id: 171,
    code: "7503024738285",
    name: "TÉ ÁRNICA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-ARNICA-scaled.png",
    shortDesc: "Infusión herbal elaborada con hojas de árnica mexicana (Heterotheca inuloides), una planta de reconocido uso tradicional en la herbolaria mexicana para el bienestar general.",
    ingredients: "Hojas de árnica (Heterotheca inuloides Cass.).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Árnica mexicana (Heterotheca inuloides) de uso tradicional",
        "Planta nativa de México utilizada desde la época prehispánica",
        "Contiene flavonoides con actividad antioxidante",
        "Sin cafeína, sin aditivos ni conservadores",
        "100% hojas puras sin mezclas",
        "Apoya el bienestar general a través de su uso tradicional"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 172 - TÉ CUACHALALATE
{
    id: 172,
    code: "7503024738254",
    name: "TÉ CUACHALALATE",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-CUACHALALTE-scaled.png",
    shortDesc: "Infusión elaborada con corteza de cuachalalate (Amphipterygium adstringens), una planta medicinal de reconocido uso tradicional en México para el bienestar general.",
    ingredients: "Corteza de cuachalalate (Amphipterygium adstringens).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Cuachalalate, árbol endémico de México",
        "Planta de uso tradicional en la herbolaria mexicana",
        "Contiene triterpenos con propiedades tradicionales",
        "Sin cafeína, sin aditivos ni conservadores",
        "100% corteza pura sin mezclas",
        "Apoya el bienestar general a través de su uso tradicional"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 173 - TÉ HOJA SEN
{
    id: 173,
    code: "7503024738247",
    name: "TÉ HOJA SEN",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-HOJA-SEN-scaled.png",
    shortDesc: "Infusión elaborada con hojas de sen (Senna alexandrina), una planta de reconocido uso tradicional por sus propiedades digestivas. Uso ocasional.",
    ingredients: "Hojas de sen (Senna alexandrina).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día (uso ocasional)",
    timing: "Preferentemente por la noche antes de dormir",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar. Uso ocasional, no prolongar por más de 7 días consecutivos.",
    benefits: [
        "Hoja de sen de uso tradicional para el bienestar digestivo",
        "Contiene sennósidos que estimulan suavemente la motilidad intestinal",
        "Sin cafeína, sin aditivos ni conservadores",
        "100% hojas puras sin mezclas",
        "Uso ocasional para el bienestar digestivo",
        "Fórmula sencilla y natural"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Uso ocasional (máximo 7 días consecutivos). Personas con afecciones gastrointestinales deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 174 - TÉ JENGIBRE CANELA
{
    id: 174,
    code: "7503025069395",
    name: "TÉ JENGIBRE CANELA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CANELA-scaled.png",
    shortDesc: "Infusión que combina té verde, jengibre y canela, tres ingredientes de reconocido uso tradicional por sus propiedades digestivas y antioxidantes.",
    ingredients: "Té verde (Camellia sinensis), raíz de jengibre (Zingiber officinale), canela (Cinnamomum verum).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Té verde con catequinas y flavonoides antioxidantes",
        "Jengibre tradicionalmente utilizado para apoyar la digestión",
        "Canela con aroma y sabor característico y perfil antioxidante",
        "Infusión cálida y especiada",
        "Sin aditivos ni conservadores",
        "Ideal después de las comidas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Contiene cafeína de forma natural. Consumir con precaución en personas sensibles a la cafeína.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 175 - TÉ JENGIBRE Y CÚRCUMA
{
    id: 175,
    code: "7503024738308",
    name: "TÉ JENGIBRE Y CÚRCUMA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JENGIBRE-CURCUMA-scaled.png",
    shortDesc: "Infusión herbal que combina jengibre y cúrcuma, dos plantas de reconocido uso tradicional por sus propiedades digestivas y antioxidantes.",
    ingredients: "Raíz de jengibre (Zingiber officinale), raíz de cúrcuma (Curcuma longa).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Jengibre con gingeroles para el bienestar digestivo",
        "Cúrcuma con curcuminoides de actividad antioxidante",
        "Combinación sinérgica de dos especias tradicionales",
        "Sin cafeína, sin aditivos ni conservadores",
        "Infusión cálida y aromática",
        "Ideal después de las comidas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 176 - TÉ MANZANILLA
{
    id: 176,
    code: "7503026253311",
    name: "TÉ MANZANILLA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-MANZANILLA-1-scaled.png",
    shortDesc: "Infusión herbal 100% orgánica compuesta por flores de manzanilla (Chamaemelum nobile), reconocida por sus propiedades digestivas y relajantes. Sin cafeína.",
    ingredients: "Flores de manzanilla (Chamaemelum nobile) orgánicas.",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche o después de las comidas",
    intakeInstructions: "Calentar agua hasta punto de ebullición. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "100% orgánica, sin pesticidas ni fertilizantes sintéticos",
        "Tradicionalmente utilizada para apoyar la digestión",
        "Favorece la relajación y el descanso",
        "100% libre de cafeína",
        "Flores de manzanilla seleccionadas por su calidad y aroma",
        "Sin aditivos ni conservadores"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 177 - TÉ RINICHI
{
    id: 177,
    code: "7503024738353",
    name: "TÉ RINICHI",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-RINICHI-scaled.png",
    shortDesc: "Infusión herbal que combina pingüica, palo azul, pelo de elote y cola de caballo, cuatro plantas de reconocido uso tradicional en la herbolaria mexicana para el bienestar renal y urinario.",
    ingredients: "Pingüica (Arctostaphylos pungens), palo azul (Cyclolepis genistoides), pelo de elote (Zea mays L.), cola de caballo (Equisetum arvense).",
    serving: "1 sobre (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente después de las comidas",
    intakeInstructions: "Calentar agua a 65°C. Colocar el sobre en una taza, agregar agua caliente (200 ml), dejar infusionar 3-5 minutos, retirar el sobre y disfrutar.",
    benefits: [
        "Pingüica con uso tradicional diurético",
        "Pelo de elote para apoyar la función renal",
        "Cola de caballo rica en sílice y flavonoides",
        "Palo azul de la herbolaria mexicana",
        "Sin cafeína, sin aditivos ni conservadores",
        "Fórmula con plantas medicinales mexicanas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. Personas con problemas renales o bajo tratamiento médico deben consultar a un profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 178 - QUERCETIN
{
    id: 178,
    code: "7503029679767",
    name: "QUERCETIN",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/QUERCETIN.png",
    shortDesc: "Suplemento de quercetina (1000 mg por porción), un flavonoide natural con actividad antioxidante y moduladora de la respuesta inflamatoria, en cápsulas veganas libres de gluten.",
    ingredients: "Quercetina (3,3′,4′,5,7-pentahidroxiflavona) (1000 mg por porción).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas diariamente (1000 mg de quercetina), de preferencia con los alimentos. Consumir diariamente. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
        "Flavonoide natural con actividad antioxidante",
        "Neutraliza especies reactivas de oxígeno (ROS)",
        "Apoya el equilibrio de la respuesta inmunológica",
        "Favorece la función endotelial y la elasticidad vascular",
        "Cápsulas veganas y libres de gluten",
        "Fórmula pura sin aditivos"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 179 - BACAO GREEN JARABE
{
    id: 179,
    code: "7503016797054",
    name: "BACAO GREEN JARABE",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BACAO-JARABE.png",
    shortDesc: "Jarabe tradicional con aceite de hígado de bacalao (fuente de vitaminas A y D), hipofosfitos minerales y extractos botánicos (eucalipto, saúco, gordolobo) para el apoyo respiratorio y la nutrición general.",
    ingredients: "Aceite de hígado de bacalao (vitaminas A y D), hipofosfitos de sodio, calcio, potasio, magnesio y hierro, extractos de eucalipto, saúco, lobaria pulmonaria, gordolobo y cassia fístula.",
    serving: "Adultos: 15 ml, 3 veces al día",
    timing: "Según necesidad, con o sin alimentos",
    intakeInstructions: "Adultos: Tomar 1 copita de 15 ml, 3 veces al día. Jóvenes: Tomar 1 copita de 15 ml, 2 veces al día. Niños: Tomar media copita, 3 veces al día. Agitar antes de usar.",
    benefits: [
        "Aceite de hígado de bacalao con vitaminas A y D para la función inmunológica",
        "Hipofosfitos minerales para el metabolismo energético",
        "Extractos de eucalipto, saúco y gordolobo con uso tradicional respiratorio",
        "Apoya la salud ósea y la función muscular",
        "Fórmula tradicional de uso familiar",
        "Ingredientes 100% naturales"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 1 año. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente pescado).",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 180 - PURE INOSITOL POWDER
{
    id: 180,
    code: "7502002826105",
    name: "PURE INOSITOL POWDER",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PURE-INOSITOL-POWDER.png",
    shortDesc: "Polvo de inositol 100% puro (5 g por porción), un compuesto del complejo de vitamina B que participa en la señalización celular, el metabolismo lipídico y el bienestar general. Libre de gluten y aditivos.",
    ingredients: "Inositol (100% puro).",
    serving: "5 g al día (1 cucharadita)",
    timing: "Preferentemente acompañado de algún alimento",
    intakeInstructions: "Disolver 5 g (aproximadamente una cucharadita) en un vaso de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente acompañado de algún alimento. No exceder la porción diaria recomendada.",
    benefits: [
        "100% inositol puro, sin excipientes ni aditivos",
        "Participa en la señalización celular y el metabolismo lipídico",
        "Apoya el bienestar general y el equilibrio metabólico",
        "Libre de gluten y sin organismos genéticamente modificados (NON-GMO)",
        "Mínimo aporte calórico (3.1 kcal por porción)",
        "Fórmula versátil para mezclar con bebidas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 181 - MAGNESIUM BISGLYCINATE
{
    id: 181,
    code: "7500645001606",
    name: "MAGNESIUM BISGLYCINATE",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BISGLICINATO-MAGNESIO.png",
    shortDesc: "Suplemento de magnesio en forma de bisglicinato (400 mg de magnesio elemental por porción), una forma quelada de alta biodisponibilidad que favorece la función muscular y nerviosa, con inulina de agave como prebiótico.",
    ingredients: "Bisglicinato de magnesio (aporta 400 mg de magnesio elemental por porción), inulina de agave (20 mg).",
    serving: "4 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 4 cápsulas al día, preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (>3 meses), consultar con un profesional de la salud.",
    benefits: [
        "400 mg de magnesio elemental por porción (alta biodisponibilidad)",
        "Forma bisglicinato quelada con glicina para mejor absorción",
        "Contribuye a la reducción del cansancio y la fatiga",
        "Apoya el funcionamiento normal de los músculos y el sistema nervioso",
        "Inulina de agave como prebiótico para la salud intestinal",
        "Excelente tolerancia digestiva"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 18 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 182 - MOROIZY GEL
{
    id: 182,
    code: "7503026253700",
    name: "MOROIZY GEL",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/MOROIZY.png",
    shortDesc: "Gel tópico formulado con extractos botánicos (castaño de indias, hamamelis, centella asiática, saúco, árnica, manzanilla y ginkgo biloba) para el cuidado de la piel y el confort general. Uso externo.",
    ingredients: "Extractos de castaño de indias (Aesculus hippocastanum), hamamelis (Hamamelis virginiana), centella asiática (Centella asiatica), saúco (Sambucus), árnica (Arnica montana), manzanilla (Chamaemelum), ginkgo biloba (Ginkgo biloba), carbomero, silicato de metilo.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la zona afectada de 2 a 3 veces al día, masajeando suavemente hasta su absorción. Uso exclusivamente tópico, no ingerir. Evitar contacto con ojos y mucosas. Si se presenta irritación, suspender su uso.",
    benefits: [
        "Castaño de indias y hamamelis para el cuidado de la piel",
        "Centella asiática para la regeneración y reparación de tejidos",
        "Árnica para el alivio de molestias musculares y contusiones",
        "Manzanilla con propiedades calmantes y suavizantes",
        "Ginkgo biloba con perfil antioxidante",
        "Fórmula de rápida absorción y sensación refrescante"
    ],
    contraindications: "Uso exclusivamente externo/tópico (no ingerir). Evitar contacto con ojos y mucosas. Si se presenta irritación o reacción alérgica, suspender su uso.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 183 - CT-O
{
    id: 183,
    code: "7503026253717",
    name: "CT-O",
    category: "locomotor",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CT-O.png",
    shortDesc: "Gel corporal con extractos botánicos (castaño de indias, hamamelis, centella asiática, ginkgo biloba) y salicilato de metilo, diseñado para el cuidado de la piel y el confort general. Uso tópico.",
    ingredients: "Agua, extracto de castaño de indias (Aesculus hippocastanum), extracto de hamamelis (Hamamelis virginiana), extracto de centella asiática (Centella asiatica), extracto de ginkgo biloba (Ginkgo biloba), salicilato de metilo, carbómero.",
    serving: "Aplicación tópica según necesidad",
    timing: "2-3 veces al día",
    intakeInstructions: "Aplicar sobre la piel limpia y seca de las zonas deseadas (como piernas o zonas de tensión) y realizar un masaje suave con movimientos circulares ascendentes hasta su completa absorción. Se recomienda aplicar de 2 a 3 veces al día. Uso exclusivamente tópico, no ingerir.",
    benefits: [
        "Castaño de indias para el confort de piernas cansadas",
        "Hamamelis para el cuidado de la piel",
        "Centella asiática para la regeneración de tejidos",
        "Ginkgo biloba con perfil antioxidante",
        "Salicilato de metilo con sensación refrescante y calmante",
        "Gel de rápida absorción y fácil aplicación"
    ],
    contraindications: "Uso exclusivamente externo/tópico (no ingerir). Evitar contacto con ojos y mucosas. Si se presenta irritación o reacción alérgica, suspender su uso.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
}
,
// PRODUCTO 184 - ZENMUN
{
    id: 184,
    code: "7503029679156",
    name: "ZENMUN",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/06/Zenmun1.jpg",
    shortDesc: "Fórmula avanzada para fortalecer las defensas naturales del organismo, con bayas de saúco, equinácea, ajo negro, vitamina C (300 mg), vitamina D3 (400 UI) y zinc (20 mg), ideal para épocas de cambios estacionales.",
    ingredients: "Bayas de Saúco (Sambucus nigra), Equinácea (Echinacea purpurea), Ajo Negro (Allium sativum fermentado), Vitamina C (ácido ascórbico) (300 mg), Vitamina D3 (colecalciferol) (10 mcg / 400 UI), Zinc (elemental) (20 mg).",
    serving: "2 cápsulas al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 2 cápsulas al día (porción completa), preferentemente con alimentos. No exceder la porción diaria recomendada. Para un uso prolongado (&gt;3 meses), se recomienda consultar con un profesional de la salud.",
    benefits: [
        "Bayas de saúco con actividad antiviral y antioxidante",
        "Equinácea que estimula la respuesta inmunológica",
        "Ajo negro con compuestos azufrados biodisponibles",
        "Vitamina C (300 mg) que contribuye a la función normal del sistema inmunitario",
        "Vitamina D3 (400 UI) que modula la respuesta inmune",
        "Zinc (20 mg) esencial para la función de las células inmunitarias"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia, personas con alergia a plantas de la familia Asteraceae (equinácea), al ajo o a alguno de los componentes, con enfermedades autoinmunes, o bajo tratamiento con inmunosupresores, anticoagulantes (warfarina) o antidiabéticos deben consultar a un profesional de la salud antes de consumirlo. La vitamina D3 en dosis elevadas puede acumularse; no exceder la dosis recomendada sin supervisión médica.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
}
,
// PRODUCTO 185 - ASTRÁGALO
{
    id: 185,
    code: "7502214013263",
    name: "ASTRÁGALO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ASTRAGALO.png",
    shortDesc: "Suplemento de Astrágalo (Astragalus membranaceus), una planta adaptógena de la medicina tradicional china con polisacáridos y flavonoides que apoyan la función inmunológica y la vitalidad.",
    ingredients: "Extracto de raíz de Astrágalo (Astragalus membranaceus) (320 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Astrágalo al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
        "Planta adaptógena de la medicina tradicional china",
        "Polisacáridos que contribuyen a la modulación de la respuesta inmunológica",
        "Flavonoides con propiedades antioxidantes que apoyan la salud celular",
        "Astragalósidos con actividad biológica estudiada",
        "Apoya la vitalidad y la resistencia frente a factores de estrés",
        "Fórmula tradicional para el equilibrio orgánico"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 186 - CALOSTRO BOVINO
{
    id: 186,
    code: "7502214013317",
    name: "CALOSTRO BOVINO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CALOSTRO-BOVINO.png",
    shortDesc: "Suplemento de calostro bovino liofilizado (200 mg por cápsula), una fuente natural de inmunoglobulinas, factores de crecimiento y lactoferrina para el apoyo inmunológico y la salud celular.",
    ingredients: "Calostro bovino liofilizado (200 mg por cápsula).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Calostro Bovino al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
        "Inmunoglobulinas (IgG, IgA, IgM) para el mantenimiento de la función inmunológica",
        "Factores de crecimiento (IGF-1, TGF-β) que participan en la regeneración celular",
        "Lactoferrina con propiedades moduladoras de la respuesta inmunológica",
        "Fuente natural de nutrientes y compuestos bioactivos",
        "Apoya la salud celular y tisular",
        "Fibra dietética que contribuye a la salud digestiva"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente derivados lácteos).",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 187 - CÉLULAS MADRE
{
    id: 187,
    code: "7502214013270",
    name: "CÉLULAS MADRE",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CELULAS-MADRE.png",
    shortDesc: "Fórmula avanzada que combina calostro bovino (150 mg), astrágalo (50 mg), hongo reishi (50 mg), espirulina (30 mg) y FO-TI (25 mg) para el apoyo inmunológico, la vitalidad y el equilibrio orgánico.",
    ingredients: "Calostro bovino (150 mg), Astrágalo (Astragalus lucidum) (50 mg), Hongo Reishi (Ganoderma lucidum) (50 mg), Alga Espirulina (Spirulina maxima) (30 mg), FO-TI (Polygonum multiflorum) (25 mg).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Adultos y niños mayores de 12 años: Tomar 1 cápsula de Células Madre al día, con alimentos. No exceder la dosis diaria recomendada.",
    benefits: [
        "Calostro bovino con inmunoglobulinas y factores de crecimiento",
        "Astrágalo con polisacáridos inmunomoduladores",
        "Hongo Reishi con beta-glucanos y triterpenos",
        "Espirulina como fuente de nutrientes y antioxidantes",
        "FO-TI con uso tradicional en la medicina china",
        "Fórmula integral para la vitalidad y el equilibrio orgánico"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes (especialmente derivados lácteos y hongos).",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 188 - EXTRACTO DE PROPÓLEO ABAGREEN
{
    id: 188,
    code: "7503016797375",
    name: "EXTRACTO DE PROPÓLEO ABAGREEN",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ABAGREEN-GOTERO.png",
    shortDesc: "Extracto líquido de propóleo en gotero, combinado con mentol natural y equinácea, para el apoyo de las defensas naturales y el bienestar respiratorio.",
    ingredients: "Propóleo, mentol natural, equinácea (Echinacea purpurea).",
    serving: "20 gotas (1 ml) al día",
    timing: "Con o sin alimentos",
    intakeInstructions: "Añadir 20 gotas (1 ml) del extracto en agua, jugo o tomar directamente. Una vez al día. Agitar antes de usar. No exceder la dosis diaria recomendada.",
    benefits: [
        "Propóleo con flavonoides y ácidos fenólicos con propiedades antioxidantes",
        "Equinácea reconocida en la herbolaria tradicional para el apoyo inmunológico",
        "Mentol natural que aporta sensación refrescante y confort respiratorio",
        "Formato líquido en gotero para fácil administración",
        "Fórmula tradicional para el cuidado diario",
        "Apoya el bienestar general y las defensas naturales"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No administrar en menores de 3 años. Personas con alergia a productos apícolas (propóleo, miel) o a plantas de la familia Asteraceae (equinácea) deben evitar su consumo.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// PRODUCTO 189 - TÉ JOUNKINS LAX
{
    id: 189,
    code: "7501090510439",
    name: "TÉ JOUNKINS LAX",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-JOUNKINS.png",
    shortDesc: "Infusión herbal tradicional con Cenizo (Leucophyllum frutescens) y Toronjil (Agastache mexicana), una mezcla original para el bienestar digestivo y la relajación.",
    ingredients: "Cenizo (Leucophyllum frutescens), Toronjil (Agastache mexicana).",
    serving: "1 bolsita (2 g) / 1 taza de infusión al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Preparar una taza con agua caliente, agregar una bolsita de té y dejar reposar de 3 a 5 minutos. Tomar 1 taza al día, preferentemente por la noche. No exceder la dosis diaria recomendada.",
    benefits: [
        "Cenizo con uso tradicional en la herbolaria mexicana para el bienestar digestivo",
        "Toronjil con propiedades relajantes y agradable sabor cítrico",
        "Mezcla original con tradición desde 1976",
        "Bebida aromática y reconfortante",
        "Apoya la relajación y el descanso",
        "Fórmula herbal tradicional mexicana"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda su consumo en menores de 12 años. No se consuma si es intolerante o sensible a cualquiera de los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

  // 190. DEMOGRASS LX+
{
    id: 190,
    code: "7502214011542",
    name: "DEMOGRASS LX+",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASS-LX.png",
    shortDesc: "Suplemento con 7 extractos botánicos y fibras naturales: forskolina, ciruela, tamarindo, inulina, papaya, nopal y linaza.",
    ingredients: "Forskolina (Extracto de la raíz de Coleus forskohlii), Fruto de Ciruela (Prunus domestica), Fruto de Tamarindo (Tamarindus indica), Inulina (Fibra prebiótica), Fruto de Papaya (Carica papaya), Penca de Nopal (Opuntia ficus-indica), Semilla de Linaza (Linum usitatissimum).",
    serving: "1 tableta al día",
    timing: "Preferentemente antes de la comida principal",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente antes de la comida principal, con un vaso de agua.",
    benefits: [
      "Apoyo al metabolismo energético",
      "Bienestar digestivo",
      "Equilibrio de la microbiota (inulina prebiótica)",
      "Bajo aporte calórico"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

  // 191. CREATINA REFRESHER LEMON TWIST
{
    id: 191,
    code: "7503037273957",
    name: "CREATINA REFRESHER LEMON TWIST",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CREATINAREFRESHER-BM.webp",
    shortDesc: "Bebida en polvo con 5 g de creatina monohidratada, electrolitos y vitaminas. Sabor Lemon Twist, sin azúcar.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Lima Limón Natural, Ácido Málico, Stevia (Stevia rebaudiana), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "5 g de creatina monohidratada por porción",
      "Electrolitos: 522 mg de sodio, 170 mg de potasio, 61 mg de magnesio",
      "Vitaminas C, D, E y B12",
      "0 kcal, 0 azúcares"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica (especialmente renal o hepática) deben consultar a su profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

  // 192. NEUROCEBRYL COMPUESTO
  {
    id: 192,
    code: "7578945632172",
    name: "NEUROCEBRYL COMPUESTO",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NEUROCEBRYL-COMPUESTO.webp",
    shortDesc: "Suplemento líquido multivitamínico con complejo B, vitaminas antioxidantes (A, C, D3, E), calcio, jalea real e inositol.",
    ingredients: "Vitaminas del complejo B: Clorhidrato de Tiamina (B1) 15 mg, Riboflavina 5' Fosfato (B2) 18 mg, Clorhidrato de Piridoxina (B6) 10 mg, Cianocobalamina (B12) 12 µg, Niacinamida (B3) 20 mg, Ácido Pantoténico (B5) 20 mg, Ácido Fólico 400 µg. Vitaminas antioxidantes: Ácido Ascórbico (C) 50 mg, Alfatocoferol (E) 60 mg, Palmitato de Vitamina A 1000 UI, Colecalciferol (D3) 10 µg. Minerales y otros: Gluconato de Calcio 100 mg, Jalea Real Fresca 5 mg, Inositol 15 mg.",
    serving: "Adultos: 1 ampolleta al día. Niños: 1 ampolleta cada tercer día.",
    timing: "Oral, directamente",
    intakeInstructions: "Ingerir directamente el contenido de la ampolleta. EN NINGÚN CASO DEBERÁ INYECTARSE.",
    benefits: [
      "Metabolismo energético",
      "Protección antioxidante",
      "Función nerviosa",
      "Fórmula líquida de fácil absorción"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 193. NAC NOW
  {
    id: 193,
    code: "733739000859",
    name: "NAC NOW",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/NAC-NOW.webp",
    shortDesc: "N-Acetil Cisteína (NAC) 600 mg con Selenio 25 mcg. Precursor del glutatión para la protección celular.",
    ingredients: "N-Acetil Cisteína (NAC), L-Selenometionina (Selenio). Hipromelosa (cápsula de celulosa), Estearato de magnesio (fuente vegetal), Dióxido de silicio y Ácido cítrico.",
    serving: "1 cápsula, 2 veces al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 1 cápsula, 2 veces al día, con el estómago vacío o según indicación de un profesional de la salud.",
    benefits: [
      "Precursor del glutatión, el principal antioxidante intracelular",
      "Protección celular contra el estrés oxidativo",
      "Apoyo a la función inmunológica",
      "Salud del sistema respiratorio"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos o padece alguna enfermedad.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 194. LECHE DE SOYA SYMKEN
  {
    id: 194,
    code: "661951732107",
    name: "LECHE DE SOYA SYMKEN",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/LECHE-DE-SOYA-SYMKEN.webp",
    shortDesc: "Bebida instantánea en polvo a base de proteína aislada de soya, adicionada con vitaminas y minerales.",
    ingredients: "Proteína aislada de soya, aceite vegetal, jarabe de maíz, maltodextrina, sucralosa, fosfato de calcio, citrato de potasio, sulfato ferroso, sulfato de zinc, yodato de potasio, sulfato de magnesio, palmitato de vitamina A, acetato de dl-alfa tocoferol (Vitamina E), ácido ascórbico (Vitamina C), niacinamida, tiamina, riboflavina, piridoxina, ácido fólico, ácido pantoténico, cianocobalamina, mono y diglicéridos, estearato de sodio, estearoil lactilato de sodio, saborizante artificial.",
    serving: "3 cucharadas soperas al ras (aprox. 25 g) + 200 ml de agua = 250 ml de bebida",
    timing: "Cualquier momento del día",
    intakeInstructions: "Verter 3 cucharadas soperas al ras (aprox. 25 g) en un vaso. Añadir agua potable a temperatura ambiente hasta llenar el vaso (250 ml). Remover vigorosamente.",
    benefits: [
      "Fuente de proteína vegetal (6.5 g por porción)",
      "Sin colesterol",
      "Enriquecido con vitaminas y minerales"
    ],
    contraindications: "Contiene soya.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 195. DYNEEM
  {
    id: 195,
    code: "7503016797221",
    name: "DYNEEM",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DYNEEM-GREENLIFE.webp",
    shortDesc: "Suplemento en dos frascos: Frasco 1 (hierbas) y Frasco 2 (vitaminas, minerales y jalea real).",
    ingredients: "Frasco 1: Neem (Azadirachta indica), Tecomate (Tecoma stans), Guarumbo (Cecropia obtusifolia), Nopal (Opuntia ficus-indica), Guayule (Parthenium argentatum), Eucalipto (Eucalyptus globulus), Sábila (Aloe vera), Zarzaparrilla (Smilax aristolochiifolia), Damiana de California (Turnera diffusa), Yerba del Sapo (Eryngium carlinae), Ajo (Allium sativum). Frasco 2: Palmitato de Vitamina A, Vitamina D3, Vitamina E, Vitaminas B1, B2, B6, B12, Vitamina C, Ácido fólico, Niacinamida, Fosfato dicálcico, Sulfato ferroso, Sulfato de zinc, Sulfato de cobre, Sulfato de manganeso, Sulfato de potasio, Sulfato de magnesio, Picolinato de cromo, Jalea real liofilizada.",
    serving: "Frasco 1: 1 cápsula, 3 veces al día. Frasco 2: 1 cápsula por la mañana y 1 por la tarde.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula del Frasco 1, 3 veces al día. Tomar 1 cápsula del Frasco 2 por la mañana y 1 por la tarde.",
    benefits: [
      "Bienestar metabólico",
      "Nutrición integral",
      "Apoyo a la función inmunológica"
    ],
    contraindications: "No consumir durante el embarazo o período de lactancia.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 196. DEMOGRASS PREMIER
  {
    id: 196,
    code: "7501172019348",
    name: "DEMOGRASS PREMIER",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DEMOGRASSPREMIER.webp",
    shortDesc: "Suplemento con 10 ingredientes botánicos: matake, cayena, cúrcuma, espirulina, arándano, moringa, enebro, olivo, inulina y naranjo amargo.",
    ingredients: "Matake (Grifola frondosa), Cayena, Cúrcuma (Curcuma longa), Espirulina (Arthrospira platensis), Arándano (Vaccinium myrtillus), Moringa (Moringa oleifera), Enebro (Juniperus communis), Olivo (Olea europaea), Inulina, Naranjo amargo (Citrus aurantium).",
    serving: "1 cápsula al día",
    timing: "En ayunas",
    intakeInstructions: "Tomar 1 cápsula al día en ayunas, con un vaso de agua.",
    benefits: [
      "Bienestar metabólico",
      "Protección celular",
      "Salud digestiva",
      "Sinergia botánica"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 197. TÉ PIÑALIM PLUS
  {
    id: 197,
    code: "7502217905350",
    name: "TÉ PIÑALIM PLUS",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/TE-PINALIM-PLUS.webp",
    shortDesc: "Infusión herbal con piña, linaza, tés verde, rojo y blanco, aguaje peruano y corazón de alcachofa. USDA Organic, Kosher.",
    ingredients: "Pulpa de piña (16%), linaza (14%), té verde, té rojo y té blanco (14% cada uno), aguaje peruano (14%) y corazón de alcachofa (14%).",
    serving: "1 taza al día (preferentemente por la noche)",
    timing: "Por la noche",
    intakeInstructions: "Colocar agua caliente a 65°C en una taza, agregar la bolsita y reposar de 3 a 5 minutos. Endulzar al gusto. Si es la primera vez, comenzar con la mitad de la dosis.",
    benefits: [
      "Bienestar digestivo",
      "Protección celular",
      "Equilibrio metabólico",
      "Bebida natural sin calorías ni azúcares"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 198. SÁBILA 1 LT PROSA
  {
    id: 198,
    code: "7501734420100",
    name: "SÁBILA 1 LT PROSA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SABILA-PROSA.webp",
    shortDesc: "Suplemento líquido de pulpa de sábila sin aloína, enriquecido con vitamina C.",
    ingredients: "Pulpa de sábila (Aloe barbadensis, Mill.), Vitamina C (Ácido Ascórbico).",
    serving: "60 ml (2 copitas), 3 veces al día",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 60 ml (2 copitas), 3 veces al día, antes de cada alimento. Refrigerar después de abrir.",
    benefits: [
      "Hidratación y bienestar celular",
      "Bienestar digestivo",
      "Protección antioxidante (Vitamina C)",
      "Bajo aporte calórico"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 199. D MASTER PLATINUM
  {
    id: 199,
    code: "690939301219",
    name: "D MASTER PLATINUM",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DMasterPlatinum1.webp",
    shortDesc: "Suplemento con 8 extractos vegetales: gayuba, té verde, uva, manzana, jamaica, cacao, linaza y sábila.",
    ingredients: "Gayuba (Arctostaphylos uva-ursi), Té verde (Camellia sinensis), Uva (Vitis vinifera), Manzana (Malus domestica), Jamaica (Hibiscus sabdariffa), Cacao (Theobroma cacao), Linaza (Linum usitatissimum), Sábila (Aloe vera).",
    serving: "1 cápsula al día",
    timing: "Por la mañana, después de los alimentos",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana, después de los alimentos, con abundante agua.",
    benefits: [
      "Bienestar urinario",
      "Protección celular",
      "Equilibrio digestivo",
      "Sinergia herbal"
    ],
    contraindications: "No consumir durante el embarazo. No tomarlo personas muy nerviosas. No tomarlo personas que estén tomando medicamentos. No tomarlo personas diabéticas e hipertensas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 200. D MASTER
  {
    id: 200,
    code: "690939301226",
    name: "D MASTER",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/DMaster1.webp",
    shortDesc: "Suplemento con 7 extractos y fibras vegetales: linaza, sábila, nopal, té verde, fibra de piña, malva y raíz de lima.",
    ingredients: "Semilla de linaza (Linum usitatissimum), Sábila (Aloe vera), Nopal (Opuntia ficus-indica), Té verde (Camellia sinensis), Fibra de piña (Ananas comosus), Malva (Malva sylvestris), Raíz de lima (Citrus x aurantiifolia).",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua.",
    benefits: [
      "Bienestar digestivo",
      "Equilibrio metabólico",
      "Protección celular",
      "Sinergia herbal"
    ],
    contraindications: "No consumir durante el embarazo. No usar si es intolerante o sensible a los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 201. CUATECOMATE
  {
    id: 201,
    code: "7501735610036",
    name: "CUATECOMATE",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Cuartecomate1.webp",
    shortDesc: "Solución líquida de extractos vegetales (Cuatecomate, Eucalipto, Gordolobo) con 1.9% de alcohol.",
    ingredients: "Frutos de Cuatecomate (Crescentia sp.), Hojas de Eucalipto (Eucalyptus globulus), Flores de Gordolobo (Gnaphalium sp.), Agua, Sacarosa, Alcohol (1.9%).",
    serving: "10 ml (2 cucharadas soperas)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 10 ml (2 cucharadas soperas) después de los alimentos. No es recomendable para niños.",
    benefits: [
      "Bienestar respiratorio",
      "Bienestar digestivo",
      "Fórmula tradicional"
    ],
    contraindications: "No consumir durante el embarazo y lactancia. No es recomendable para niños. Contiene 1.9% de alcohol.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 202. SUPER COLOSTRUM NOW
  {
    id: 202,
    code: "733739032164",
    name: "SUPER COLOSTRUM NOW",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SUPER-CALOSTRUM-NOW.webp",
    shortDesc: "Calostro bovino seco (1,000 mg) con InmunEnhancer™, hoja de olivo, astrágalo y eleuthero.",
    ingredients: "Calostro Bovino Seco (1,000 mg), InmunEnhancer™ (Arabinogalactano de Alerce) (200 mg), Hoja de Olivo (Extracto, min. 6% Oleuropeína) (200 mg), Raíz de Astrágalo (Astragalus membranaceus) (100 mg), Eleuthero (Raíz de Eleuterococo) (100 mg).",
    serving: "2 cápsulas al día",
    timing: "Con el estómago vacío",
    intakeInstructions: "Tomar 2 cápsulas al día, preferiblemente con el estómago vacío para una mejor absorción.",
    benefits: [
      "Apoyo a la función inmunológica",
      "Salud celular y tisular",
      "Equilibrio intestinal",
      "Sinergia botánica"
    ],
    contraindications: "Contiene leche. No fabricado con trigo, gluten, soja, huevo, pescado o marisco.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 203. NOPSOR POMADA
  {
    id: 203,
    code: "7504023954027",
    name: "NOPSOR POMADA",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/POMADA-NOPSOR.jpg",
    shortDesc: "Pomada tópica con alquitrán de hulla, ácido salicílico y extractos vegetales.",
    ingredients: "Vaselina, Propilenglicol, Alquitrán de hulla, Ácido Salicílico, Extracto de Nogal (Juglans sp.), Extracto de Orégano (Lippia sp.), Tomillo (Thymus vulgaris), Saúco (Sambucus sp.), Romero (Rosmarinus officinalis), Mastuerzo (Tropaeolum majus), Saponaria (Saponaria officinalis), Loeselia (Loeselia mexicana), Metilparabeno, Propilparabeno.",
    serving: "Aplicación tópica según necesidad",
    timing: "Por la noche",
    intakeInstructions: "Lavar la zona afectada, secar perfectamente y aplicar una cantidad generosa de Pomada Nopsor, dejándola actuar durante la noche. Uso externo únicamente.",
    benefits: [
      "Alivio de la picazón y enrojecimiento",
      "Descamación controlada",
      "Hidratación y barrera cutánea"
    ],
    contraindications: "Uso externo únicamente. Evitar el contacto con ojos y mucosas. Sólo para un periodo máximo de 4 días. No usar en niños menores de 3 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 204. CARTÍLAGO PRONAT
  {
      id: 204,
      code: "7501062946013",
      name: "CARTÍLAGO PRONAT",
      category: "locomotor",
      image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CARTILAGO.png",
      shortDesc: "100% Cartílago de Tiburón puro en cápsulas. Rico en proteínas, colágeno, glucosamina, condroitina, calcio, fósforo, magnesio y zinc.",
      ingredients: "100% Cartílago de Tiburón en polvo. Sin excipientes ni aditivos.",
      serving: "3 cápsulas antes de cada comida (9 cápsulas al día)",
      timing: "Antes de cada alimento (desayuno, comida y cena)",
      intakeInstructions: "Tomar 3 cápsulas antes de cada alimento (desayuno, comida y cena) = 9 cápsulas al día. Recomendado a partir de 12 años.",
      benefits: [
          "Soporte articular: aporta glucosamina y condroitina naturales",
          "Salud ósea: rico en calcio y fósforo",
          "Función inmunológica: el zinc contribuye al sistema inmunológico",
          "Bienestar general: perfil nutricional completo"
      ],
      contraindications: "Contiene derivados de pescado (tiburón). No consumir si se es alérgico a los productos del mar. No se recomienda en menores de 12 años. Consultar con un profesional de la salud si se está embarazada, en período de lactancia o bajo tratamiento médico.",
      foodInteractions: "No especificado",
      interactions: "No especificado"
  },

  // 205. LEVADURA DE CERVEZA PRONAT
  {
    id: 205,
    code: "7501062910113",
    name: "LEVADURA DE CERVEZA",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/LEVADURA.png",
    shortDesc: "Levadura de cerveza (Saccharomyces cerevisiae) en tabletas. Rica en proteínas, fibra, fósforo y vitaminas del complejo B.",
    ingredients: "Levadura de cerveza (Saccharomyces cerevisiae), Avicel, Estearato de magnesio.",
    serving: "3 tabletas antes de cada comida (9 tabletas al día)",
    timing: "Antes de cada comida",
    intakeInstructions: "Tomar 3 tabletas antes de cada comida (desayuno, comida y cena) = 9 tabletas al día. Recomendado a partir de 12 años.",
    benefits: [
      "Metabolismo energético",
      "Salud digestiva",
      "Salud ósea",
      "Bienestar general"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 206. OMEGA MAXIMUM PRONAT
  {
    id: 206,
    code: "7501062912827",
    name: "OMEGA MAXIMUM PRONAT",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/OMEGA-MAXIMUM.png",
    shortDesc: "Combinación de aceite de pescado (EPA/DHA), aceite de Sacha Inchi y aceite de linaza. Con vitamina E.",
    ingredients: "Aceite de pescado (EPA/DHA), Aceite de Sacha Inchi (Plukenetia volubilis) prensado en frío, Aceite de linaza (Linum usitatissimum) prensado en frío, Vitamina E (Alfa tocoferol).",
    serving: "1 cápsula, 3 veces al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, 3 veces al día, de preferencia con los alimentos. Recomendado a partir de 18 años.",
    benefits: [
      "Salud cardiovascular",
      "Perfil lipídico completo",
      "Protección antioxidante",
      "Bienestar general"
    ],
    contraindications: "Contiene derivados de pescado.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 207. 2MR
  {
    id: 207,
    code: "7503021404916",
    name: "2MR",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/2MR.png",
    shortDesc: "Combinación de L-Triptófano (295 mg), Rhodiola rosea (200 mg) y Melatonina (5 mg) por cápsula.",
    ingredients: "L-Triptófano (295 mg), Rhodiola rosea (200 mg), Melatonina (5 mg).",
    serving: "1 cápsula al día",
    timing: "Por la noche después de cenar",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche después de cenar, o según indicación de un especialista.",
    benefits: [
      "Precursor de serotonina (L-Triptófano)",
      "Adaptógeno (Rhodiola rosea)",
      "Regulación del ciclo sueño-vigilia (Melatonina)"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 208. CÁPSULAS DE ACEITE DE ORÉGANO
  {
    id: 208,
    code: "7503008731042",
    name: "CÁPSULAS DE ACEITE DE ORÉGANO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/OREGANO-ORGANICO.png",
    shortDesc: "Aceite de orégano orgánico (Lippia graveolens) con aceite de oliva. Libre de OMG.",
    ingredients: "Aceite de orégano orgánico (Lippia graveolens), Aceite de oliva.",
    serving: "Adultos: 1 cápsula, hasta 3 veces al día. Niños mayores de 7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula, hasta 3 veces al día (adultos) o 1 cápsula al día (niños mayores de 7 años). Tomar suficiente agua.",
    benefits: [
      "Bienestar respiratorio",
      "Salud digestiva",
      "Protección celular"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 209. CREATINA REFRESHER PINK
  {
    id: 209,
    code: "7503057040911",
    name: "CREATINA REFRESHER PINK",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CREATINA-REFRESHER-PINK.png",
    shortDesc: "Bebida en polvo con 5 g de creatina monohidratada, electrolitos y vitaminas. Sabor Pink Lemonade, sin azúcar.",
    ingredients: "Creatina Monohidratada, Alulosa, Sal Rosa del Himalaya, Concentrado de Minerales del Lago Salado de Utah, Glicinato de Magnesio, Ácido Cítrico, Sabor Fresa Limón Natural, Stevia (Stevia rebaudiana), Extracto de Betacarotenos (Blakeslea trispora), Extracto Natural de Vitamina C de Amla (Phyllanthus emblica L.), Vitamina E, Vitamina D3 (Colecalciferol de Origen Vegetal), Vitamina B12.",
    serving: "1 cucharada medidora (10 g) en 500 ml de agua",
    timing: "Antes o durante el entrenamiento",
    intakeInstructions: "Disolver 1 cucharada medidora (10 g) en 500 ml de agua. Agitar hasta disolución completa. Consumir antes o durante el entrenamiento.",
    benefits: [
      "5 g de creatina monohidratada por porción",
      "Electrolitos: 523 mg de sodio, 174.5 mg de potasio, 61 mg de magnesio",
      "Vitaminas C, D, E y B12",
      "0 kcal, 0 azúcares"
    ],
    contraindications: "Mujeres embarazadas, en periodo de lactancia o personas con alguna condición médica deben consultar a su profesional de la salud.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 210. PATA DE VACA
  {
    id: 210,
    code: "7502214013294",
    name: "PATA DE VACA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PATA-DE-VACA.png",
    shortDesc: "Suplemento con Bauhinia forticata (300 mg por cápsula). Para el bienestar metabólico.",
    ingredients: "Pata de Vaca (Bauhinia forticata) 300 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Pata de Vaca al día, con alimentos.",
    benefits: [
      "Apoyo al bienestar metabólico",
      "Salud celular",
      "Bienestar digestivo",
      "Equilibrio general"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 211. PALO AZUL UVA URSI
  {
    id: 211,
    code: "7502214013218",
    name: "PALO AZUL UVA URSI",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/PALO-AZUL.png",
    shortDesc: "Combinación de Palo Azul (Cyclolepis genistoides) y Uva Ursi (Arctostaphylos uva-ursi). 150 mg de cada extracto.",
    ingredients: "Palo Azul (Cyclolepis genistoides) 150 mg, Uva Ursi (Arctostaphylos uva-ursi) 150 mg, excipiente c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula de Palo Azul Uva Ursi al día.",
    benefits: [
      "Apoyo al sistema urinario",
      "Sinergia herbal",
      "Bienestar metabólico"
    ],
    contraindications: "No consumir durante el embarazo o lactancia.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 212. GLUCONATO DE ZINC PRONACEN
  {
    id: 212,
    code: "7503000733662",
    name: "GLUCONATO DE ZINC PRONACEN",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/GLUCONATO-DE-ZINC-PROSA.png",
    shortDesc: "Suplemento de zinc en forma de gluconato. 20 mg de zinc elemental por tableta.",
    ingredients: "Gluconato de zinc (aporta 20 mg de zinc elemental), Estearato de magnesio, Celulosa microcristalina, Fosfato dibásico de calcio.",
    serving: "1 tableta al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
      "Función inmunológica",
      "Salud de la piel",
      "Crecimiento y desarrollo",
      "Metabolismo celular"
    ],
    contraindications: "La ingesta excesiva de Zinc (más de 40 mg al día en adultos) puede interferir con la absorción de cobre.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 213. CHA-CHA STONE
  {
    id: 213,
    code: "7501170130021",
    name: "CHA-HA STONE",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CHA-CHA-STONE.png",
    shortDesc: "Suplemento con 7 extractos de plantas: Chanca Piedra, Yumel, Cola de Caballo, Perejil, Hierba del Sapo, Cardo Mariano y Taray.",
    ingredients: "Chanca Piedra (Phyllanthus niruri), Yumel (Guatteria gaumeri), Cola de Caballo (Equisetum arvense), Perejil (Petroselinum crispum), Hierba del Sapo (Eryngium carlinae), Cardo Mariano (Silybum marianum), Taray (Tamarix gallica).",
    serving: "3 tabletas al día (1 antes de cada alimento)",
    timing: "Antes de cada alimento",
    intakeInstructions: "Tomar 3 tabletas al día: 1 tableta antes de cada alimento principal (desayuno, comida y cena).",
    benefits: [
      "Apoyo al sistema urinario",
      "Bienestar digestivo y hepático",
      "Equilibrio hidrosalino",
      "Sinergia herbal"
    ],
    contraindications: "No consumir durante el embarazo o período de lactancia. No usar si es intolerante o sensible a los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 214. BEBIDA DE ALPISTLE
  {
    id: 214,
    code: "7503026253656",
    name: "BEBIDA DE ALPISTE",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/BEBIDA-DE-ALPISTLE.png",
    shortDesc: "Bebida instantánea en polvo con harina de alpiste, maltodextrina y goma xantana.",
    ingredients: "Harina de alpiste (Phalaris canariensis), Maltodextrina, Azúcar, Goma xantana.",
    serving: "10 g (2 cucharadas) en 100 ml de agua",
    timing: "Cualquier momento del día",
    intakeInstructions: "Disolver 10 g (aproximadamente 2 cucharadas) en 100 ml de agua, mezclar hasta obtener una consistencia homogénea y consumir de inmediato.",
    benefits: [
      "Fuente de nutrientes de origen vegetal",
      "Carbohidratos de absorción rápida (maltodextrina)",
      "Textura agradable (goma xantana)"
    ],
    contraindications: "Puede contener trazas de soya, almendra y coco.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 215. L-CARNITINA PROWINNER
  {
    id: 215,
    code: "7501062913671",
    name: "L-CARNITINA PROWINNER",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-CARNITINA-PROWINNER.png",
    shortDesc: "L-Carnitina 100% pura en cápsulas de 450 mg. Para el metabolismo energético.",
    ingredients: "L-Carnitina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "Metabolismo energético",
      "Rendimiento físico",
      "Función cardiovascular",
      "Bienestar general"
    ],
    contraindications: "No recomendado en menores de 6 años ni en mujeres embarazadas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 216. ACEITE DE ORÉGANO Y COCO
  {
    id: 216,
    code: "7503008731387",
    name: "ACEITE DE ORÉGANO Y COCO",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-DE-OREGANO-Y-COCO-CAPS.png",
    shortDesc: "Combinación de aceite de coco y aceite esencial de orégano. Libre de OMG.",
    ingredients: "Aceite de coco (Cocos nucifera), Aceite esencial de orégano (Lippia graveolens).",
    serving: "Adultos: 1 cápsula, hasta 2 veces al día. Niños >7 años: 1 cápsula al día.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente. Beber suficiente agua.",
    benefits: [
      "Sinergia de aceites",
      "Apoyo metabólico",
      "Bienestar general",
      "Libre de OMG"
    ],
    contraindications: "No recomendado en mujeres embarazadas o en período de lactancia.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 217. L-LISINA PROWINNER
  {
    id: 217,
    code: "7501062912735",
    name: "L-LISINA PROWINNER",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/L-LISINA-PROWINNER.png",
    shortDesc: "L-Lisina 100% pura en cápsulas de 450 mg. Aminoácido esencial para la formación de proteínas.",
    ingredients: "L-Lisina 100% pura.",
    serving: "Niños >12 años: 1 caps, 2 veces/día. Adultos no deportistas: 1 caps con cada comida. Adultos deportistas: 2 caps con cada comida.",
    timing: "Con alimentos",
    intakeInstructions: "Tomar según la dosificación correspondiente a la edad y nivel de actividad física, con alimentos.",
    benefits: [
      "Formación de proteínas estructurales",
      "Metabolismo del calcio",
      "Función inmunológica",
      "Recuperación y crecimiento"
    ],
    contraindications: "No recomendado en menores de 6 años ni en mujeres embarazadas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 218. 5-HTP
  {
    id: 218,
    code: "7500645000043",
    name: "5-HTP",
    category: "nervioso",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/5-htp.png",
    shortDesc: "5-Hidroxitriptófano (100 mg) precursor de la serotonina. Libre de gluten y aditivos.",
    ingredients: "5-HTP (5-Hidroxitriptófano) 100 mg, Celulosa microcristalina c.b.p. 500 mg.",
    serving: "1 cápsula al día",
    timing: "Con las comidas",
    intakeInstructions: "Tomar 1 cápsula (500 mg) al día, preferiblemente con las comidas, o según indicación de un especialista.",
    benefits: [
      "Precursor de serotonina",
      "Regulación del estado de ánimo",
      "Sueño y apetito",
      "Bienestar general"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. Interacciona con antidepresivos (ISRS) y otros medicamentos serotoninérgicos.",
    foodInteractions: "No especificado",
    interactions: "Puede interactuar con antidepresivos (ISRS, IMAO) y otros medicamentos que aumentan la serotonina."
  },

  // 219. VEGI PROTEIN NANO FEAR
  {
    id: 219,
    code: "7503021404794",
    name: "VEGI PROTEIN NANO FEAR",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/VEGI-PROTEIN-NANO-FEAR.png",
    shortDesc: "Proteína vegana orgánica con mezcla de guisante, arroz, calabaza, sésamo, soya, girasol y almendras. 25 g de proteína por porción.",
    ingredients: "Proteína de guisante orgánica, Proteína de arroz orgánica, Proteína de calabaza orgánica, Proteína de sésamo orgánico, Aislado de proteína de soya, Proteína de girasol, Proteína de almendras, Cacao orgánico, Saborizante natural a chocolate, Sal marina, Mezcla de enzimas (Bromelina, Papaina, Proteasa), Aceite de coco orgánico, Stevia orgánica, Goma xantana, Lecitina de girasol, Ácido málico.",
    serving: "1 cucharada (30 g) en 360 ml de agua",
    timing: "Antes y/o después del entrenamiento",
    intakeInstructions: "Mezclar 1 cucharada (30 g) en 360 ml de agua y licuar. Consumir antes y/o después del entrenamiento.",
    benefits: [
      "25 g de proteína por porción",
      "Perfil completo de aminoácidos",
      "9,228 mg de BCAA's por porción",
      "Enzimas digestivas para mejor absorción",
      "Bajo índice glucémico"
    ],
    contraindications: "Personas con enfermedades hepáticas, renales, mujeres embarazadas o en lactancia deben consultar a su médico.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 220. ISOFEAR
  {
    id: 220,
    code: "646437080118",
    name: "ISOFEAR",
    category: "deportivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Isofear_Chocolate_2kg_1_4c878549-63bf-435f-8a4d-0c2b9d51ebf6.webp",
    shortDesc: "Aislado de proteína de suero hidrolizada. 25 g de proteína, 0 g de carbohidratos y grasas por porción.",
    ingredients: "Aislado de Proteína de Suero de leche Ionizada y Micro-filtrada, Péptidos de bajo peso molecular y Parcialmente Hidrolizados de Suero de Leche y Soya. L-Carnitina, Valina, Lisina, Iso-Leucina, Cloruro de Sodio, Sabor Natural y Artificial a Vainilla, Goma Xantana, Enzimas (Proteasa y Peptidasa), Sucralosa.",
    serving: "1-2 medidas (30 g cada una) en 360 ml de agua",
    timing: "Post-entreno o entre comidas",
    intakeInstructions: "Mezclar de 1 a 2 medidas (30 g cada una) en 360 ml de tu bebida favorita. Agitar hasta disolver.",
    benefits: [
      "25 g de proteína por porción",
      "0 g de carbohidratos y grasas",
      "19.6 g de BCAA's por 100 g",
      "Proteína hidrolizada de rápida absorción",
      "Con L-Carnitina"
    ],
    contraindications: "No debe ser consumido por personas con hipersensibilidad a los ingredientes. Alérgenos: SOYA, LÁCTEOS, HUEVO, TRIGO, NUEZ Y CACAHUATE.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 221. SUKUNAI KIROS MAX
  {
    id: 221,
    code: "7502243203727",
    name: "SUKUNAI KIROS MAX",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/SukunaiKirosMax1-1.webp",
    shortDesc: "Suplemento con 7 extractos vegetales (linaza, raíz de lima, malva, mango africano, piña, papaya, lecitina de soya) y vitamina B12, magnesio y calcio.",
    ingredients: "Semilla de Linaza (Linum usitatissimum), Raíz de Lima (Citrus x aurantiifolia), Flor y hoja de Malva (Malva sylvestris), Mango Africano (Irvingia gabonensis), Lecitina de Soya, Polvo de fruto de Piña (Ananas comosus), Polvo de fruto de Papaya (Carica papaya), Cianocobalamina (Vitamina B12), Carbonato de Calcio, Estearato de Magnesio, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche, con un vaso de agua",
    intakeInstructions: "Tomar 1 cápsula al día con un vaso de agua. No exceder la porción indicada.",
    benefits: [
      "Bienestar digestivo: fibras y enzimas",
      "Perfil nutricional: Vitamina B12, Magnesio y Calcio",
      "Sinergia botánica: 7 extractos vegetales"
    ],
    contraindications: "No consumir durante el embarazo. Contiene soya (lecitina).",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 222. PIÑALINAZA
  {
    id: 222,
    code: "7503006152023",
    name: "PIÑALINAZA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/Pinalinaza1.webp",
    shortDesc: "Suplemento en polvo con linaza canadiense, piña, toronja, naranja y nopal. Rico en fibra y Omega 3, 6 y 9.",
    ingredients: "Piña (Ananas comosus), Linaza (Linum usitatissimum) - Linaza Canadiense, Toronja (Citrus paradisi), Naranja (Citrus sinensis), Nopal (Opuntia ficus-indica).",
    serving: "2 cucharadas soperas (7.8 g) antes de cada comida",
    timing: "Antes de cada comida (3 veces al día)",
    intakeInstructions: "Mezclar 2 cucharadas soperas (7.8 g) con agua, jugo o añadir a preparaciones. Tomar 3 veces al día antes de las comidas.",
    benefits: [
      "Alto contenido de fibra dietética (25.89 g por 100 g)",
      "Aporte de Omega 3, 6 y 9",
      "Apoya la salud digestiva y el tránsito intestinal"
    ],
    contraindications: "No está indicado para mujeres embarazadas y niños menores de 12 años.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 223. WEREKE PROSA
  {
    id: 223,
    code: "7501734412846",
    name: "WEREKE PROSA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/WEREKE.webp",
    shortDesc: "Suplemento con 8 extractos vegetales de uso tradicional mexicano, incluyendo Wereke, Gatuña, Guayacán, Tamarindo, Nopal y Manzanilla.",
    ingredients: "Wereke (Maximowiczia sonorae) - Raíz, Gatuña (Guaiacum sp.) - Planta, Guayacán amarillo (Guaiacum coulteri) - Corteza, Tamarindo (Tamarindus indica) - Fruto, Nopal (Opuntia ficus-indica) - Penca, Raíz de Zacate de perro (Cynodon dactylon) - Raíz, Raíz de Coanacaxtle - Raíz, Manzanilla (Matricaria chamomilla) - Flor.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Después de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día, después de los alimentos.",
    benefits: [
      "Bienestar digestivo",
      "Equilibrio metabólico",
      "Aporte de fibras y carbohidratos complejos"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 224. ACEITE DE ORÉGANO GOTAS ORE
  {
    id: 224,
    code: "7503008731202",
    name: "ACEITE DE ORÉGANO GOTAS ORE",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/ACEITE-OREGANO-GOTERO-20-ML.webp",
    shortDesc: "Aceite de orégano 100% natural estandarizado al 80% de carvacrol.",
    ingredients: "Aceite de orégano (Lippia graveolens) 100% natural, estandarizado al 80% de carvacrol, aceite de oliva.",
    serving: "Adultos: 4 a 12 gotas, 2 veces al día. Niños >6 años: 1 a 2 gotas, 1-2 veces al día. Niños 2-6 años: 1 gota al día.",
    timing: "Con alimentos",
    intakeInstructions: "Diluir las gotas en agua, jugo o leche. No usar en menores de 2 años.",
    benefits: [
      "80% de carvacrol",
      "Bienestar respiratorio",
      "Protección celular",
      "Bienestar digestivo"
    ],
    contraindications: "No usar durante el embarazo.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },

  // 225. B12 NOW
  {
    id: 225,
    code: "733739004598",
    name: "B12 NOW",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/B12-NOW.webp",
    shortDesc: "Vitamina B12 2,000 mcg en pastillas sublinguales. Combinación de cianocobalamina, metilcobalamina y dibencozida.",
    ingredients: "Cianocobalamina, Metilcobalamina y Dibencozida (Vitaminas B12). Fructosa, celulosa, ácido cítrico, estearato de magnesio (fuente vegetal), sabor a fresa natural y lecitina de soya.",
    serving: "1 pastilla al día",
    timing: "Cualquier momento del día",
    intakeInstructions: "Masticar la pastilla o disolverla completamente en la boca (sublingual o debajo de la lengua) hasta que se deshaga. No tragar entera.",
    benefits: [
      "2,000 mcg de Vitamina B12",
      "Tres formas activas",
      "Salud del sistema nervioso",
      "Producción de energía"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos o padece alguna condición médica.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },
    
  // 226. CARSYL GREEN JARABE 80 ML
  {
    id: 226,
    code: "7503016797122",
    name: "CARSYL GREEN JARABE 80 ML",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/07/CARSYLGREENJARABE.webp",
    shortDesc: "Jarabe con 6 extractos botánicos: Boldo, Cardo Mariano, Cusura, Diente de León, Anagirida y Marrubio. Para el bienestar digestivo y hepático.",
    ingredients: "Boldo (Peumus boldus), Cardo Mariano (Silybum marianum), Cusura (Quassia amara), Diente de León (Taraxacum officinale), Anagirida (Styphnolobium), Marrubio (Marrubium vulgare).",
    serving: "3 ml (una cucharadita) al día",
    timing: "Preferentemente antes de las comidas principales",
    intakeInstructions: "Agitar bien antes de usar. Administrar directamente o diluido en un poco de agua. Tomar 3 ml (una cucharadita) al día, preferentemente antes de las comidas principales.",
    benefits: [
        "Apoyo a la función hepática (silimarina del Cardo Mariano)",
        "Bienestar digestivo",
        "Efecto depurativo",
        "Sinergia botánica de 6 extractos"
    ],
    contraindications: "No especificado. Consultar lote y fecha de caducidad en el envase.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
  },
// 245. VITAMINA D3 & K2 NOW
{
    id: 245,
    code: "733739003690",
    name: "VITAMINA D3 & K2 NOW",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3K2.avif",
    shortDesc: "Combinación sinérgica de Vitamina D3 (25 mcg / 1,000 IU) y Vitamina K2 (45 mcg, MK-4). Vegano, Non-GMO y libre de alérgenos. Apoya la salud ósea y cardiovascular.",
    ingredients: "Vitamina D3 (Colecalciferol) 25 mcg, Vitamina K2 (Menaquinona-4) 45 mcg, Harina de Arroz, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida que contenga grasas para una óptima absorción. Solo para adultos.",
    benefits: [
        "Salud ósea: la D3 mejora la absorción de calcio y la K2 lo dirige a los huesos",
        "Salud cardiovascular: la K2 previene la calcificación de las arterias",
        "Sinergia liposoluble: ambas vitaminas se absorben mejor con grasas",
        "Libre de alérgenos: no contiene gluten, soja, lácteos, huevo, pescado ni frutos secos"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos (especialmente anticoagulantes o para la presión arterial) o padece alguna condición médica.",
    foodInteractions: "Tomar con alimentos que contengan grasas para mejorar la absorción.",
    interactions: "Puede interactuar con anticoagulantes cumarínicos (warfarina)."
},
// 246. L-GLUTAMINE + NAG
{
    id: 246,
    code: "7500645001583",
    name: "L-GLUTAMINE + NAG",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/L-GLUTAMINE-NAG.jpg",
    shortDesc: "Fórmula en polvo para el soporte de la mucosa digestiva y la barrera intestinal. Combina L-Glutamina, NAG, Zinc L-carnosina, Aloe vera, Vitamina D3 e Inulina de agave. Sabor frambuesa-limón.",
    ingredients: "Inulina de agave (2.58 g), L-Glutamina (2 g), N-Acetil-D-Glucosamina (NAG) (800 mg, origen no crustáceo), Aloe vera en polvo (100 mg), Zinc L-carnosina (100 mg, aporta 21 mg de zinc elemental), Vitamina D3 (10 µg), Sabor frambuesa-limón, Ácido cítrico, Glucósidos de esteviol.",
    serving: "1 scoop (6 g) al día",
    timing: "Con alimentos, preferentemente con la comida principal",
    intakeInstructions: "Mezclar 1 scoop (6 g) en 250 ml de agua, jugo o bebida de tu preferencia. Consumir 1 vez al día, preferentemente con alimentos.",
    benefits: [
        "Soporte nutricional para la mucosa digestiva y la barrera intestinal",
        "L-Glutamina como combustible principal de los enterocitos",
        "NAG (N-Acetil-D-Glucosamina) precursor de mucina y glicoproteínas",
        "Zinc L-carnosina para la conservación de la barrera gastrointestinal",
        "Aloe vera para el bienestar y confort gastrointestinal",
        "Vitamina D3 para el mantenimiento de la integridad epitelial",
        "Inulina de agave como fibra prebiótica y vehículo funcional"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

    // 227. CITRATO DE MAGNESIO 90 CAPS
{
    id: 227,
    code: "7503026253991",
    name: "CITRATO DE MAGNESIO 90 CAPS",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/CITRATO-MAGNESIO1-1.jpg",
    shortDesc: "Suplemento de citrato de magnesio, forma orgánica de alta biodisponibilidad y excelente tolerancia digestiva. 500 mg por cápsula.",
    ingredients: "Citrato de magnesio (750 mg por porción de 3 cápsulas), excipientes c.b.p. (celulosa microcristalina, estearato de magnesio, dióxido de silicio).",
    serving: "1 cápsula al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente con alimentos para mejorar la absorción. No exceder la dosis diaria recomendada.",
    benefits: [
        "Contribuye a la reducción del cansancio y la fatiga",
        "Apoya el funcionamiento normal de los músculos",
        "Favorece el equilibrio electrolítico",
        "Ayuda al mantenimiento de los huesos",
        "Forma de magnesio de alta biodisponibilidad y excelente tolerancia digestiva"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes de la fórmula.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},
    
    // 228. GLICINATO DE MAGNESIO 90 CAPS
{
    id: 228,
    code: "7500645000876",
    name: "GLICINATO DE MAGNESIO 90 CAPS",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/04/GLICINATO1.webp",
    shortDesc: "Suplemento de glicinato de magnesio, forma quelada de alta biodisponibilidad y excelente tolerancia digestiva, combinado con tallo de brócoli en polvo. Libre de gluten y lactosa.",
    ingredients: "Glicinato de magnesio (250 mg), Estearato de magnesio (150 mg), Tallo de Brócoli en polvo (Brassica oleracea var. Italica) (100 mg), excipientes c.b.p. 500 mg (cápsula vegetal).",
    serving: "1 cápsula al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 1 cápsula al día, preferentemente por la noche acompañada de un vaso de agua. No exceder la dosis diaria recomendada.",
    benefits: [
        "Contribuye a la reducción del cansancio y la fatiga",
        "Apoya el funcionamiento normal de los músculos",
        "Favorece el equilibrio electrolítico",
        "Ayuda al mantenimiento de los huesos",
        "Alta biodisponibilidad y excelente tolerancia digestiva",
        "Aporta compuestos bioactivos del brócoli con perfil antioxidante"
    ],
    contraindications: "No consumir durante el embarazo o lactancia. No se recomienda en menores de 18 años. No consumir si es intolerante o sensible a los ingredientes.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

    // 229. OMEGA INFANTIL PRONAT
{
    id: 229,
    code: "7501062914722",
    name: "OMEGA INFANTIL PRONAT",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/OMEGA-KIDS.avif",
    shortDesc: "Suplemento en gomitas masticables con aceite de salmón noruego (EPA 152 mg, DHA 96 mg) y vitamina E. Ideal para niños a partir de 6 años.",
    ingredients: "Aceite de Salmón Noruego, Vitamina E, Azúcar, Glucosa, Grenetina, Agua, Ácido Cítrico, Saborizante. Contiene derivados de pescado.",
    serving: "4 gomitas al día (8 g)",
    timing: "Después de los alimentos, preferentemente por la mañana",
    intakeInstructions: "Ingerir 4 gomitas una vez al día, después de los alimentos, de preferencia por la mañana. Masticar bien antes de tragar. Recomendado a partir de 6 años.",
    benefits: [
        "Desarrollo cognitivo: el DHA es componente clave del cerebro y la retina",
        "Salud visual: el DHA contribuye a la función visual normal",
        "Modulación inflamatoria: EPA y DHA participan en la respuesta inflamatoria",
        "Formato infantil: gomitas masticables con sabor agradable"
    ],
    contraindications: "Contiene derivados de pescado. Contiene un desecante NO INGERIBLE dentro del frasco. No especificado para alergias.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 230. VITAMINA K2
{
    id: 230,
    name: "VITAMINA K2",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/D3-K2-NOW.avif",
    shortDesc: "Vitamina K2 (MK-4) 100 mcg con polvo de alfalfa. Vegano, Non-GMO y Kosher. Apoya la salud ósea y cardiovascular.",
    ingredients: "Vitamina K2 (Menaquinona-4 / MK-4) 100 mcg, Polvo de Alfalfa (Partes aéreas) 250 mg, Hipromelosa (cápsula de celulosa), Palmitato de Ascorbilo, Harina de Arroz, Dióxido de Silicio.",
    serving: "1 cápsula al día",
    timing: "Con una comida que contenga grasas",
    intakeInstructions: "Tomar 1 cápsula al día, acompañada de una comida con grasas (como aguacate, frutos secos o aceites) para mejorar la absorción. Solo para adultos.",
    benefits: [
        "Salud ósea: activa la osteocalcina para fijar el calcio en los huesos",
        "Salud cardiovascular: previene la calcificación de los vasos sanguíneos",
        "Alta biodisponibilidad: forma MK-4 biológicamente activa",
        "Sin alérgenos comunes: libre de trigo, gluten, soja, leche, huevo, pescado"
    ],
    contraindications: "Consulte a su médico si está embarazada, en período de lactancia, tomando medicamentos anticoagulantes (como warfarina) o padece alguna condición médica.",
    foodInteractions: "Tomar con alimentos que contengan grasas para mejorar la absorción.",
    interactions: "Puede interactuar con anticoagulantes cumarínicos (warfarina)."
},

// 231. TÓNICO INDIO TZAPOTLATENA
{
    id: 231,
    code: "7501735661014",
    name: "TÓNICO INDIO TZAPOTLATENA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/tonico-indio-tzapotlatena-1l.webp",
    shortDesc: "Elixir herbal con 9 extractos de plantas (Boldo, Damiana, Alfalfa, Calea zacatechichi, Aristolochia, etc.). Inspirado en la tradición de los guerreros aztecas.",
    ingredients: "Extractos hidroalcohólicos de: Aristolochia sp., Calea zacatechichi, Cymbia scolymus, Juliana adstringens, Medicago sativa, Peumus boldus, Selaginella lepidophylla, Senecio vulneraria, Turnera diffusa.",
    serving: "10 ml (1 copita) al día",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 1 copita (10 ml), equivalente a 2 cucharadas soperas, antes de los alimentos.",
    benefits: [
        "Bienestar digestivo: boldo y otras plantas apoyan la función digestiva y hepática",
        "Vitalidad y tónico: damiana y alfalfa son reconocidas como tónicos generales",
        "Relajación: Calea zacatechichi utilizada tradicionalmente para favorecer el descanso",
        "Equilibrio general: combinación de 9 extractos"
    ],
    contraindications: "Contiene alcohol (extracto hidroalcohólico). Consultar con médico en caso de embarazo, lactancia o condiciones médicas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 232. CACAO ORGÁNICO EN POLVO CULTO
{
    id: 232,
    code: "7500000000000",
    name: "CACAO ORGÁNICO EN POLVO CULTO",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/CACAO-ORGANICO-EN-POLVO.jpg",
    shortDesc: "100% Cacao en polvo criollo de Tabasco. Sin azúcares añadidos, conservadores ni aditivos. Rico en teobromina, flavonoides y fibra.",
    ingredients: "100% Cacao en polvo (Criollo de Tabasco, México).",
    serving: "1 cucharada (5 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Mezclar 1 cucharada sopera (5 g) en leche, agua, bebidas vegetales (batidos/smoothies), o utilizar para preparaciones de repostería.",
    benefits: [
        "Protección antioxidante: flavonoides que neutralizan radicales libres",
        "Energía y concentración: teobromina con efecto estimulante suave",
        "Salud cardiovascular: flavonoides asociados al bienestar circulatorio",
        "Bienestar digestivo: alto contenido de fibra dietética (32 g/100 g)",
        "Versatilidad culinaria: ideal para bebidas, batidos y repostería"
    ],
    contraindications: "Contiene cafeína natural. Consumir con moderación en personas sensibles a la cafeína.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 233. DIETERS DRINK
{
    id: 233,
    code: "7501730103168",
    name: "DIETERS DRINK",
    category: "laxantes",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/DIETERS-DRINK.jpg",
    shortDesc: "Suplemento en capletas con hoja de sen y malva. Para el apoyo al tránsito intestinal y el confort digestivo.",
    ingredients: "Hoja de sen (Cassia angustifolia), Malva (Malva sylvestris), Lactosa USP, Estearato de Magnesio.",
    serving: "2 capletas al día",
    timing: "Preferentemente por la noche",
    intakeInstructions: "Tomar 2 capletas al día, preferentemente por la noche, con un vaso lleno de agua. No exceder la dosis diaria recomendada.",
    benefits: [
        "Tránsito intestinal: el sen estimula la motilidad intestinal",
        "Confort digestivo: la malva aporta mucílagos que calman la mucosa intestinal",
        "Bajo aporte calórico: 2 kcal por porción, sin azúcares",
        "Uso nocturno: administración por la noche para efecto natural por la mañana"
    ],
    contraindications: "Evitar su uso en caso de embarazo, lactancia, problemas gastrointestinales severos o si se está tomando algún medicamento.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 234. ACTIKROLL PARA NIÑOS
{
    id: 234,
    code: "714908101065",
    name: "ACTIKROLL PARA NIÑOS",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACTIKROLL.jpg",
    shortDesc: "Jarabe multivitamínico con jalea real, ácido glutámico, vitaminas del complejo B y glicerofosfato de sodio. Para niños de 1 a 6 años y mayores.",
    ingredients: "Agua Purificada, Sacarosa, Fructosa, Glicerofosfato de Sodio, Jalea Real, Ácido Glutámico, Nicotinamida (B3), Pantotenato de Calcio (B5), Clorhidrato de piridoxina (B6), Riboflavina 5 fosfato (B2), Clorhidrato de tiamina (B1), Ácido Fólico, Cianocobalamina (B12), Propilenglicol, Ácido Cítrico, Metilparabeno sódico, Propilparabeno sódico, Sabor crema vainilla y Sabor tutifruti.",
    serving: "Niños 1-6 años: ½ cucharadita (2.5 ml) 3 veces al día. Niños >6 años: 1 cucharadita (5.0 ml) 3 veces al día.",
    timing: "Con alimentos",
    intakeInstructions: "Agítese antes de usarse. Utilizar el vaso dosificador incluido. Niños de 1 a 6 años: ½ cucharadita (2.5 ml), 3 veces al día. Niños mayores de 6 años: 1 cucharadita (5.0 ml), 3 veces al día.",
    benefits: [
        "Metabolismo energético: vitaminas del complejo B",
        "Función nerviosa: ácido glutámico y vitaminas B1, B6 y B12",
        "Crecimiento y desarrollo: jalea real y ácido fólico",
        "Fórmula pediátrica: dosis adaptadas y sabores agradables"
    ],
    contraindications: "Contiene azúcares añadidos (40 g/100 ml). Cepillar los dientes después de cada toma. Consumir en las dosis recomendadas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 235. NOPAL PROSA
{
    id: 235,
    code: "7501734412006",
    name: "NOPAL PROSA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/NOPAL-PROSA.avif",
    shortDesc: "Nopal en polvo 100% puro en cápsulas de 400 mg. Rico en fibra soluble e insoluble, flavonoides, betalaínas, vitaminas y minerales.",
    ingredients: "Nopal en polvo (Opuntia ficus) 100% puro. Sin excipientes de relleno.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
        "Bienestar digestivo: fibra que contribuye al tránsito intestinal",
        "Equilibrio metabólico: reconocido por su enfoque en la regulación de la glucosa",
        "Saciedad: fibra soluble que ayuda a controlar el apetito",
        "Sin aditivos: 100% polvo de nopal puro"
    ],
    contraindications: "No especificado. Tomar con abundante agua para evitar molestias digestivas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 236. SÁBILA Y NOPAL PROSA
{
    id: 236,
    code: "7501734412402",
    name: "SÁBILA Y NOPAL PROSA",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/SABILA-Y-NOPAL-PROSA.avif",
    shortDesc: "Combinación de hoja de sábila en polvo y penca de nopal en polvo. Dos plantas tradicionales para el bienestar digestivo y metabólico.",
    ingredients: "Hoja de Sábila en polvo (Aloe vera, L.), Penca de Nopal en polvo (Opuntia ficus indica).",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos, con un vaso abundante de agua.",
    benefits: [
        "Bienestar digestivo: fibra y polisacáridos para el tránsito intestinal",
        "Equilibrio metabólico: el nopal es reconocido por su enfoque en la glucosa y lípidos",
        "Hidratación celular: compuestos de la sábila",
        "Sinergia botánica: combinación de sábila y nopal"
    ],
    contraindications: "No especificado. Tomar con abundante agua para evitar molestias digestivas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 237. AJO 150 CAPS PROSA
{
    id: 237,
    code: "7501734410200",
    name: "AJO 150 CAPS PROSA",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/AJO-PROSA.avif",
    shortDesc: "Bulbo de ajo deshidratado en polvo 100% puro en cápsulas de 500 mg. Rico en compuestos sulfurados (alicina), vitaminas y minerales.",
    ingredients: "Bulbo de Ajo deshidratado en polvo (Allium sativum, L.) 100% puro.",
    serving: "2 cápsulas, 3 veces al día (6 cápsulas al día)",
    timing: "Antes de los alimentos",
    intakeInstructions: "Tomar 2 cápsulas, 3 veces al día (6 cápsulas al día), antes de los alimentos. En personas con sensibilidad gástrica, acompañar con alimentos sólidos.",
    benefits: [
        "Bienestar cardiovascular: reconocido por su enfoque en la salud del corazón",
        "Función metabólica: compuestos bioactivos que contribuyen al equilibrio metabólico",
        "Perfil antioxidante: vitamina C y compuestos sulfurados",
        "Sin excipientes: 100% polvo de ajo puro"
    ],
    contraindications: "El ajo en ayunas o en grandes dosis puede causar ligeras molestias gástricas.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 238. COMPLEJO B MULTIVITAMINICO YPENZA
{
    id: 238,
    code: "7502214015403",
    name: "COMPLEJO B MULTIVITAMINICO YPENZA",
    category: "metabolismo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/COMPLEJO-B-YPENZA.jpg",
    shortDesc: "Complejo de vitaminas B (B1, B2, B6, B12) y magnesio en tabletas de 500 mg. Apoya el metabolismo energético y la función nerviosa.",
    ingredients: "Vitamina B1 (Tiamina) 324 µg, Vitamina B2 (Riboflavina) 500 µg, Vitamina B6 (Piridoxina) 412 µg, Vitamina B12 (Cobalamina) 1.3 µg, Magnesio 40 mg, Celulosa Microcristalina.",
    serving: "1 tableta al día",
    timing: "Preferentemente con alimentos",
    intakeInstructions: "Tomar 1 tableta al día, preferentemente con alimentos.",
    benefits: [
        "Metabolismo energético: vitaminas B y magnesio",
        "Función nerviosa: tiamina (B1), B6 y B12",
        "Salud celular: riboflavina (B2) y magnesio",
        "Sinergia nutricional: combinación de vitaminas B y magnesio",
        "Fácil administración: tableta de 500 mg con dosis única diaria"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 239. CREMA FACIAL NUTRITIVA DE BAYAS DE GOJI
{
    id: 239,
    code: "7503021404787",
    name: "CREMA FACIAL NUTRITIVA DE BAYAS DE GOJI",
    category: "piel",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/BAYAS-DE-GOJI.jpg",
    shortDesc: "Crema facial con FPS 45, bayas de goji, aceite de argán, ácido hialurónico, colágeno, aloe vera, avena y aguacate. Nutrición profunda y protección solar.",
    ingredients: "Bayas de Goji, Aceite de Argán, Extracto de Aloe Vera, Extracto de Avena, Extracto de Aguacate, Ácido Hialurónico, Colágeno, Filtros Solares (Benzofenona 3, Octil Metoxi cinamato, Octil Salicilato), base cosmética c.b.p.",
    serving: "Aplicación tópica según necesidad",
    timing: "Mañana y noche",
    intakeInstructions: "Aplicar diariamente por la mañana y por la noche sobre el rostro y el cuello, siempre sobre la piel limpia y seca. Untar con suaves masajes circulares para favorecer la absorción. Uso externo exclusivamente.",
    benefits: [
        "Nutrición profunda: aceites y extractos que aportan nutrientes esenciales",
        "Protección solar: FPS 45 previene el envejecimiento prematuro",
        "Hidratación duradera: ácido hialurónico y aloe vera",
        "Antioxidantes naturales: bayas de goji y vitamina E",
        "Regeneración: colágeno y aceite de argán"
    ],
    contraindications: "Uso externo exclusivamente. Evitar el contacto con los ojos. En caso de irritación, suspender su uso. Realizar prueba en una pequeña zona de la piel si se tiene piel sensible.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 240. ACEITE DE OLIVA DEMOGRASS 60 CAPS
{
    id: 240,
    code: "7502214019647",
    name: "ACEITE DE OLIVA DEMOGRASS 60 CAPS",
    category: "clinico",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/ACEITA-DE-OLIVA.webp",
    shortDesc: "Aceite de oliva 100% puro en perlas de 1.4 g. Alto contenido de ácidos grasos monoinsaturados (72.8 g/100 g) para la salud cardiovascular.",
    ingredients: "Aceite de Oliva (Olea europaea) 100% puro. Cápsula blanda de gelatina.",
    serving: "1 perla al día",
    timing: "Con alimentos",
    intakeInstructions: "Tomar 1 perla de Aceite de Oliva al día. No exceder la porción máxima recomendada.",
    benefits: [
        "Salud cardiovascular: ácidos grasos monoinsaturados",
        "Protección antioxidante: polifenoles y vitamina E",
        "Bienestar general: componente clave de la dieta mediterránea",
        "Fácil administración: presentación en perlas"
    ],
    contraindications: "No especificado",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 241. LEVADURA DE CERVEZA 300g PRONAT
{
    id: 241,
    code: "7501062910113",
    name: "LEVADURA DE CERVEZA 300g PRONAT",
    category: "nutricional",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/LEVADURA-CERVEZA-300-G-PRONAT.webp",
    shortDesc: "Levadura de cerveza desecada y desamargada 100% pura en polvo. Rica en proteínas (39 g/100 g), fibra (22 g/100 g) y vitaminas del complejo B.",
    ingredients: "Levadura de Cerveza desecada y desamargada 100% pura (Saccharomyces cerevisiae). Puede contener Soya.",
    serving: "1 cucharada (8 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 cucharada (8 g) a su líquido favorito (agua, jugo, leche, té), o espolvorear sobre sopas, frutas o verduras.",
    benefits: [
        "Energía y vitalidad: vitaminas del complejo B",
        "Salud digestiva: fibra dietética",
        "Función nerviosa: tiamina (B1) y otras vitaminas B",
        "Sin aditivos artificiales: libre de colorantes, conservadores y saborizantes",
        "Versátil: fácil de incorporar a bebidas y comidas"
    ],
    contraindications: "Puede contener Soya.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 242. PREBIAN
{
    id: 242,
    code: "7500464128416",
    name: "PREBIAN",
    category: "digestivo",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/PREBIAN.jpg",
    shortDesc: "Fibras prebióticas solubles (oligofructosa y fructanos de achicoria) 100% puras. Inodoro, insípido, sin gluten, vegano y bajo índice glucémico.",
    ingredients: "Oligofructosa, Fructanos de Achicoria.",
    serving: "1 a 2 cucharadas (7.5 g a 15 g)",
    timing: "Cualquier momento del día",
    intakeInstructions: "Agregar 1 o 2 cucharadas (7.5 g a 15 g) de Prebian a bebidas o alimentos. No usar en bebidas carbonatadas. Sugerencias: té, café, agua natural, fruta, cereal, smoothies, repostería y jugos.",
    benefits: [
        "Salud digestiva: promueve el crecimiento de bacterias benéficas",
        "Saciedad y control de peso: fibra soluble",
        "Equilibrio glucémico: no aporta azúcares",
        "Versatilidad: inodoro e insípido, no altera el sabor",
        "100% fibra dietética: 7.5 g de fibra por porción"
    ],
    contraindications: "No usar en bebidas carbonatadas (puede generar gas o efervescencia excesiva).",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 243. PULMOBRON MIEL
{
    id: 243,
    code: "7506022802583",
    name: "PULMOBRON MIEL",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/PULMOBRON.webp",
    shortDesc: "Jarabe natural con miel, propóleo y 14 extractos vegetales (sauco, gordolobo, equinácea, eucalipto, tomillo, romero, menta, etc.). Para el bienestar respiratorio.",
    ingredients: "Agua, Jarabe de Frutas (Fructuosa), Glucosa, Propóleo, Sauco, Gordolobo (Hoja, Flor, Raíz), Cebolla Morada, Equinácea, Limón Deshidratado, Ajo, Eucalipto, Bugambilia Flor, Malva Silvestre, Tomillo Semilla, Romero y Menta.",
    serving: "Adultos: 1 cucharada sopera (10 ml). Niños: 1 cucharadita cafetera (5 ml).",
    timing: "Cualquier momento del día",
    intakeInstructions: "Adultos: Tomar 1 cucharada sopera (10 ml) como suplemento alimenticio. Niños: Tomar 1 cucharadita cafetera (5 ml). Puede tomarse con té de preferencia.",
    benefits: [
        "Bienestar respiratorio: sauco, gordolobo, eucalipto, tomillo y menta",
        "Apoyo inmunológico: propóleo y equinácea",
        "Bienestar digestivo: ajo, cebolla morada y malva",
        "Fórmula natural: 100% natural con miel"
    ],
    contraindications: "No consumir en menores de 3 años ni en mujeres embarazadas. Puede cristalizarse; calentar al baño maría para recuperar su estado original.",
    foodInteractions: "No especificado",
    interactions: "No especificado"
},

// 244. SUKUNAI KIROS BLUE
{
    id: 244,
    code: "7508304644010",
    name: "SUKUNAI KIROS BLUE",
    category: "inmune",
    image: "https://investigacioncbg.com/wp-content/uploads/2026/08/SUKUNAIKIROSBLEU.webp",
    shortDesc: "Combinación de Hongo Chaga, Hongo Reishi, L-Carnitina y Probióticos. Para el apoyo al sistema inmunológico, el metabolismo energético y la salud digestiva.",
    ingredients: "Hongo Chaga (Inonotus obliquus), Hongo Reishi (Ganoderma lucidum), L-Carnitina, Probióticos (mezcla de cepas), Celulosa microcristalina, Estearato de magnesio, Dióxido de silicio.",
    serving: "1 cápsula al día",
    timing: "Por la mañana o por la noche",
    intakeInstructions: "Tomar 1 cápsula al día por la mañana o por la noche, con un vaso de agua. No exceder la porción indicada.",
    benefits: [
        "Apoyo al sistema inmunológico mediante hongos adaptógenos",
        "Aporte de L-Carnitina para el metabolismo energético",
        "Probióticos como apoyo digestivo complementario",
        "Fórmula de apoyo general para personas activas"
    ],
    contraindications: "No consumir durante el embarazo o lactancia sin autorización profesional. Consultar si se toman anticoagulantes, inmunosupresores o medicamentos de uso crónico.",
    foodInteractions: "No especificado",
    interactions: "Revisar tratamientos inmunosupresores, anticoagulantes y medicamentos de uso crónico antes de consumir."
},
];
