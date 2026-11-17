// Apoyo editorial para capacitación. No modifica porciones ni beneficios.
(() => {
    const { productos, padecimientos } = window.manualData;
    const choiceNotes = {
        270: "Cúrcuma & Jengibre en cápsulas: dúo tradicional básico para tomar 1 cápsula antes de cada comida fuerte y evitar llenura o reflujo biliar.",
        266: "Tlanchalagua Prosa: 5 plantas mexicanas en 150 cápsulas para eliminar retención de líquidos en el bajo vientre y apoyar la quema de grasa.",
        255: "Pro Propóleo y Menta (30 g): perlas masticables que se deshacen en la boca liberando propóleo y mentol; alivio balsámico portátil para calmar carraspera, tos seca y garganta rasposa en cualquier momento.",
        254: "Yumel Tasay Inka en gotas (30 ml): extracto hidroalcohólico de corteza de Guatteria gaumeri para diluir en agua; orientada a la fluidez biliar y pesadez en el cuadrante derecho.",
        246: "L-Glutamine + NAG en polvo sabor frambuesa-limón: 2 g de L-glutamina, NAG, zinc carnosina y aloe vera. El producto más potente para regenerar la barrera intestinal y estomacal.",
        243: "Pulmobron Miel (220 ml): jarabe herbolario intensivo con 14 ingredientes activos (ajo, cebolla morada, propóleo, equinácea y 9 plantas); la fórmula más completa para despejar flemas y tos rebelde.",
        242: "Prebian (polvo soluble): fructanos de achicoria y oligofructosa pura. Prebiótico de referencia para alimentar bacterias benéficas, ablandar heces y regular las idas al baño.",
        236: "Sábila y Nopal Prosa (150 cápsulas): opción práctica y económica en pastillas para llevar en el bolso y evitar agruras y pesadez al comer fuera.",
        235: "Nopal Prosa: 150 cápsulas de nopal 100% puro; fuente de fibra económica para atrapar grasas y controlar glucosa tras las comidas.",
        233: "Dieters Drink (120 capletas): combinación de sen con malva protectora; la opción en capletas para quienes buscan la fuerza depurativa del sen pero con mucílagos que suavizan cólicos y facilitan el vaciado.",
        231: "Tónico Indio Tzapotlatena: extracto hidroalcohólico concentrado de plantas amargas; tomar 1 copita para asentar el estómago tras comidas copiosas.",
        226: "Carsyl Green Jarabe (80 ml): fórmula líquida con boldo, cardo mariano, diente de león y marrubio. Para personas que prefieren no tragar cápsulas o desean tomarlo directo antes de comidas pesadas.",
        222: "Piñalinaza (500 g): polvo de linaza canadiense con piña, naranja, toronja y nopal; la fibra más sabrosa para añadir al licuado y regularizar el colon.",
        221: "Sukunai Kiros Max: cápsulas con mango africano, lecitina y enzimas; para personas que buscan quemar grasa y mejorar la digestión simultáneamente.",
        201: "Cuatecomate Jarabe (1 L): tradicional jarabe mexicano de pulpa de cuatecomate con bugambilia y gordolobo; presentación rendidora para tos añeja, fumadores y personas con debilidad bronquial.",
        200: "D Master: 7 plantas en cápsulas (linaza, nopal, piña, té verde, malva); digestivo completo para tomar 1 cápsula al día y mantener vientre plano.",
        198: "Pulpa pura de aloe vera con vitamina C de Prosa: básico para proteger la mucosa gástrica contra irritantes y favorecer una evacuación natural y suave.",
        197: "Té Piñalim Plus con aguaje: infusión nocturna depurativa; su función es combatir el tránsito lento y apoyar la silueta y balance hormonal femenino.",
        190: "Demograss LX+: fórmula digestiva con ciruela pasa, linaza y piña; pensada específicamente para combatir el estreñimiento pertinaz.",
        188: "Extracto de Propóleo Abagreen (60 ml): propóleo líquido concentrado con gotero; desinfecta y cicatriza la garganta irritada, aftas y amígdalas inflamadas. Tomar directo, en agua tibia o gárgaras.",
        189: "Té Jounkins Lax: infusión de cenizo, toronjil y pasiflora; su función es calmar el colon irritable y el estreñimiento derivado de tensión nerviosa o estrés.",
        179: "Bacao Green Jarabe (240 ml): jarabe con aceite de hígado de bacalao, propóleo y vitaminas A y D; reconstituyente pulmonar ideal para niños y adultos propensos a enfermarse en invierno.",
        176: "Té Manzanilla orgánica: infusión suave sin cafeína; su función es relajar cólicos, retortijones digestivos y calmar el estómago nervioso.",
        173: "Té Hoja Sen (30 sobres): infusión tradicional de hoja de sen puro; estimulante herbal de rescate para estreñimiento puntual de varios días. Tomar 1 taza caliente por la noche; uso máximo de 7 días seguidos.",
        164: "Aloe Vera, Nopal y Cuachalalate (1 L): copita líquida para tomar antes de los alimentos o antes de dormir si hay reflujo nocturno y agruras.",
        156: "Honig Abangreen Ajo Negro (240 ml): jarabe expectorante reforzado con ajo negro y orégano; para catarros fuertes, pecho apretado y tos persistente que requiere mayor fuerza antibacteriana.",
        155: "Honig Abangreen Limón (240 ml): jarabe clásico de miel con propóleo y 9 extractos botánicos (gordolobo, eucalipto, saúco, malva); el expectorante familiar de cabecera para tos y garganta irritada.",
        151: "Zen Greens 200 g: bebida verde con 3 fibras, enzimas digestivas, probióticos y 14 superalimentos. Para tomar por la mañana para desinflamar el vientre y llenarse de energía.",
        148: "Hierba del Sapo (To Adzen): 1.5 g de polvo puro por porción; planta de referencia en México para apoyar el metabolismo de triglicéridos, colesterol y bilis.",
        146: "Té Piñalim infusión: té depurativo nocturno con piña, linaza y 3 tés; su función es estimular la evacuación completa por la mañana y desinflamar el vientre.",
        144: "Similaxol (50 tabletas): laxante estimulante intensivo de 100 mg; formulado para estreñimiento severo y rebelde de varios días. Tomar 1 tableta por la noche con bastante agua; suspender en cuanto se logre evacuar.",
        140: "Sábila con Nopal y Cuachalalate (1 L, sin aloína): la fórmula líquida mexicana más completa para cicatrizar y amortiguar el ácido en gastritis intensa.",
        133: "Prohiman: linaza, malva, raíz de lima y omegas 3-6-9. Enfoque en lubricación intestinal y evacuación suave sin provocar cólicos ni irritar el colon.",
        115: "Yumel Simila en gotas (30 ml): tintura madre de Guatteria gaumeri. Enfoque tradicional específico en la función de la vesícula biliar para acompañar la digestión de grasas; tomar en agua antes de comer.",
        85: "Zinc L-carnosina (50 mg, aporta 15 mg de zinc) con jengibre e inulina. El suplemento clínico ideal para proteger y cicatrizar la mucosa gástrica en gastritis crónica o estómago muy sensible.",
        81: "Jengibre puro (1000 mg por porción): la mejor opción natural para calmar náuseas, mareos por viaje, digestiones lentas y espasmos estomacales.",
        77: "Hercampuri puro en polvo (1500 mg por porción). Planta andina amarga de uso tradicional para estimular la bilis y depurar grasa en el hígado; no usar en cólico biliar agudo.",
        76: "Green LX (50 tabletas): laxante botánico suave a base de frutas (ciruela, tamarindo, papaya, sábila y manzana). La mejor opción para quienes buscan regularidad natural sin cólicos ni químicos irritantes.",
        75: "Gojizen Max: combina superfrutas (goji y mango africano) con enzimas digestivas y vitaminas; para quemar grasa con aporte antioxidante.",
        69: "Gentilax (50 tabletas): laxante estimulante clásico en tabletas (60 mg); tomar 1 a 2 tabletas antes de acostarse para aliviar estreñimiento ocasional de 2 a 3 días. Uso de rescate puntual (no continuo).",
        67: "Fungone (60 cápsulas): complejo de 7 hongos adaptógenos (Reishi, Maitake, Chaga, Shiitake, Cordyceps, Turkey Tail y Melena de León); el blindaje con beta-glucanos para elevar defensas y vitalidad física.",
        66: "Flor-Essence (500 ml): fórmula líquida tradicional de 8 plantas depurativas (bardana, acedera, olmo, cardo santo); tomar a sorbos en agua tibia para desintoxicación profunda y drenaje celular.",
        63: "Fenogreco en polvo (1500 mg): rico en fibra de galactomanano que tapiza el estómago contra el ardor y ayuda a modular la absorción de azúcar tras comer.",
        61: "Equinácea y Vitamina C (90 cápsulas): dúo herbolario de rescate rápido para cortar resfriados a tiempo, activar glóbulos blancos y aliviar molestias de garganta ante los primeros síntomas.",
        60: "Endis: complejo multienzimático completo (papaína, bromelina, lipasa, amilasa, pancreatina); el mejor producto para comidas que caen pesadas.",
        59: "DT Green: cápsulas con papaya, malva y espirulina; opción verde ligera para personas que buscan desinflamar y digerir mejor sin estimulantes fuertes.",
        57: "Demograss Plus: versión reforzada con diente de león, zarzaparrilla y tés; mayor apoyo depurativo para personas con retención de líquidos.",
        56: "Demograss Clásico: fórmula botánica para iniciar control de peso; combina linaza, nopal y bromelina para activar el tránsito y deshinchar.",
        49: "Clorofila líquida concentrada con menta, hierbabuena y matcha. Para agua de uso diario; desodoriza desde el interior, refresca el aliento y calma la acidez.",
        43: "Carsyl Green cápsulas (nueva fórmula): cardo mariano (250 mg) y diente de león (300 mg) con rábano negro (250 mg) y betabel (150 mg). Primera opción en cápsulas para hígado sobrecargado, boca amarga matutina y digestión pesada de grasas.",
        28: "Jugo bebible de aloe vera con sabor tropical. Pensado para personas que no toleran el sabor neutro de la sábila y quieren tomarla a diario en ayunas para gastritis o reflujo.",
        27: "Jugo bebible de aloe vera con arándano rojo y vitamina C. Diseñado para quienes buscan confort estomacal y al mismo tiempo proteger las vías urinarias.",
        13: "Cúrcuma pura en polvo (1000 mg por porción). El digestivo vegetal de uso tradicional para estimular la bilis, evitar pesadez y gases tras comer.",
        12: "Cúrcuma, Jengibre y Moringa: trío antiinflamatorio para digestión ligera y aporte de antioxidantes y vitalidad limpia.",
        9: "Cuachalalate y tepezcohuite en cápsulas (750 mg de cada corteza). Remedio tradicional mexicano por excelencia para calmar el fuego, quemazón y molestias por gastritis.",
        2: "Coconut + Oregano Oil: aceite de coco virgen con orégano concentrado al 70% de carvacrol y ácido láurico. Antimicrobiano natural ante disbiosis, Candida o fermentación excesiva.",
        267: "Ginseng rojo en ampolletas de 10 ml, con 2400 mg de raíz declarados por ampolla. La miel y el agua son acompañantes de la preparación. Enfoque en vitalidad y cansancio de uso tradicional; comparar forma de preparación y ginsenósidos antes de equipararlo a extractos.",
        98: "Melena de león 500 mg, L-treonato de magnesio 450 mg y quinoa 50 mg por 2 cápsulas. Distinguir extracto de cuerpo fructífero o micelio y grado de estandarización antes de comparar estudios. La quinoa es un componente minoritario.",
        87: "Tirosina 350 mg, arándano azul 100 mg y vitamina C 50 mg por cápsula. Enfoque en aporte para exigencia mental y cuidado antioxidante. Las dosis del ensayo en frío fueron muy superiores; no atribuir ese resultado a esta cápsula.",
        70: "Ajo, ginkgo, lecitina de soya, vitamina C y resveratrol. Enfoque cognitivo, circulatorio y antioxidante. Porción de 3 cápsulas; 30 porciones por envase y 30 días de rendimiento con una porción diaria.",
        58: "Cansancio asociado al estrés como enfoque principal: rhodiola 450 mg y citrato con aproximadamente 70 mg de magnesio elemental por porción; polen 50 mg como complemento minoritario. La rhodiola no debe describirse como sedante.",
        68: "GABA con B5, B12, zinc y selenio: orientación a relajación con apoyo nutricional. La ficha declara 1200 mg de GABA por 2 cápsulas; no equiparar esa cantidad con las de ensayos de otras preparaciones ni prometer mayor efecto por más miligramos.",
        257: "Tiamina Jarabe GN+Vida (340 ml): complejo B líquido con espinaca y ácido glutámico; excelente para abrir el apetito, combatir el desgano y recuperar vitalidad en niños y adultos mayores.",
        256: "Pasiflora como único ingrediente vegetal activo, en perlas con 3 g de sacarosa por porción. Uso tradicional para calma y descanso; la ficha no declara la cantidad de extracto de pasiflora.",
        218: "Aporta 100 mg de 5-HTP por cápsula de 500 mg; el resto corresponde al excipiente. Enfoque en descanso y formación de serotonina. Revisar medicamentos antes de combinarlo con triptófano u otras fórmulas con 5-HTP.",
        170: "Té Abangreen (30 sobres): infusión caliente tradicional mexicana con bugambilia, gordolobo, eucalipto, saúco y tejocote; para tomar bien caliente con miel antes de dormir y abrir el pecho.",
        169: "Infusión de uso tradicional para calma y descanso. La ficha enumera nueve plantas aunque el nombre comercial diga 7 azahares; conservar la composición declarada y distinguirla de extractos o cápsulas.",
        150: "Calma y transición al descanso con triptófano, teanina y azahar; la vitamina D3 es un aporte nutricional complementario. Contiene 300 mg de triptófano y 100 mg de teanina por cápsula.",
        1: 'Cloruro en polvo: permite preparar una bebida y medir la porción.',
        3: 'Colágeno con vitamina C y biotina; se distingue de las fórmulas de colágeno solo.',
        7: 'Creatina monohidratada en polvo, sin combinarla con una fórmula multivitamínica.',
        8: 'Creatina en polvo de 500 g; comparar por gramos de creatina por porción.',
        16: "Aceite de Orégano Zennatura (19.5 ml): orégano puro con aceite de oliva en gotas; potente antibiótico y antiviral natural para tomar diluido en agua o hacer gárgaras ante molestias de garganta e infecciones.",
        18: 'Combina colágeno, ácido hialurónico y omega 3; revisar duplicados si ya toma estos ingredientes.',
        19: 'CLA como posible complemento para objetivos de grasa corporal con alimentación y ejercicio; distinguir grasa, peso y mantenimiento muscular.',
        21: 'Ajo negro con moringa y vitaminas B: combina aporte vegetal antioxidante y apoyo al aprovechamiento de los alimentos.',
        22: "Ajo Negro con Propóleo (90 cápsulas): combina el poder antibiótico del propóleo con antioxidantes del ajo negro sin dejar mal aliento ni repetir; excelente escudo diario para cambios de clima.",
        23: 'Ajo negro como ingrediente central para cuidado cardiovascular y antioxidante; las vitaminas C y B6 se declaran en cantidades pequeñas.',
        24: 'Proteína de huevo: alternativa a las proteínas de leche y vegetales.',
        25: 'Espirulina en polvo para añadir a preparaciones, frente a la opción en cápsulas.',
        26: 'Espirulina en cápsulas para quien prefiere evitar el sabor del polvo.',
        32: "Raíz de ashwagandha en polvo como único ingrediente: 500 mg por cápsula, envase con 120 cápsulas. Porción: 1 cápsula al día; rendimiento: 120 días. Comparar con ASHWAGANDHA de 60 cápsulas, que combina 995 mg de raíz y 5 mg de extracto de pimienta negra por cápsula.",
        33: "60 cápsulas vegetales: cada porción de 1 cápsula (1 g) aporta 995 mg de raíz de ashwagandha y 5 mg de extracto de pimienta negra. La pimienta negra aporta piperina, sin cantidad pura declarada. Distinguirla de ROOT de 120 cápsulas de 500 mg con raíz sola.",
        35: 'Proteína de res con creatina y taurina: la ficha declara 7600 mg de creatina por porción; verificar etiqueta y no sumar creatina sin revisar el total.',
        36: 'Berberina con zinc; la tabla vigente del catálogo usa una porción de 2 cápsulas.',
        46: 'Citrato en polvo con colágeno: opción para quien prefiere una bebida a las cápsulas.',
        50: 'Cloruro en cápsulas con otros nutrientes; alternativa al cloruro en polvo.',
        52: 'Dos inositoles en cápsulas y arándano; comparar con la mezcla en polvo de proporción 40:1.',
        53: 'Myo y D-chiro inositol en polvo, proporción 40:1; permite preparar una bebida.',
        55: "D3 1000 UI + Vitamina C & Equinácea (30 cápsulas): la tríada preventiva de cabecera; une vitamina D3 para huesos y defensas, vitamina C antioxidante y equinácea para cambios bruscos de temperatura.",
        64: 'Proteína vegetal con inositoles y otros ingredientes, frente a una proteína sencilla.',
        79: 'Myo-inositol en cápsulas, sin la combinación con D-chiro. El nombre comercial dice «Powder».',
        82: 'Omega 3 de krill con astaxantina; fuente distinta a los aceites de pescado.',
        88: 'Maca negra en polvo para mezclar, frente a las opciones en cápsulas.',
        90: 'Combina maca amarilla, roja y negra en una misma fórmula.',
        91: 'Blend de citrato, gluconato y óxido para aporte general de magnesio; comparar el magnesio elemental, no solo el peso de las sales.',
        92: 'Malato de magnesio con vitamina B6; comparar su composición con citrato o bisglicinato.',
        93: 'Fórmula AM: citrato y bisglicinato con B6 para músculos y actividad diaria; la inulina es secundaria y no es un estimulante.',
        94: "Preparación para el descanso nocturno: magnesio con L-teanina, glicina, manzanilla y 5-HTP. La ficha declara 150 mg de magnesio elemental por porción de 3 cápsulas; distinguirlo del peso de las sales y del nombre comercial.",
        96: 'Aporta proteína y una cantidad importante de calorías; distinto de una proteína sola.',
        101: 'Ubiquinol: una forma de coenzima Q10, en una base de aceite.',
        102: 'El extracto de cúrcuma se incluye por su posible ayuda con dolor y rigidez articular; también contiene colágeno tipo II y boswellia.',
        104: "Vinagre de Manzana en cápsulas (900 mg) con cúrcuma, jengibre y canela. Para tomar antes de comidas fuertes; activa la acidez digestiva sin dañar los dientes ni la garganta.",
        108: "Vitamina C-1000 NOW (100 cápsulas): megadosis de 1,000 mg potenciada con bioflavonoides cítricos y rutina para una absorción y duración prolongada en el cuerpo; el antioxidante celular definitivo.",
        109: 'Combina vitamina D3, K2, magnesio y zinc en una sola fórmula.',
        111: 'Proteína de suero sabor choconuez; comparar la proteína por porción con otras opciones.',
        112: 'Aislado de suero con una fórmula sencilla, para combinar con otras preparaciones.',
        113: 'Aislado de suero: la ficha declara 29 g de proteína por porción de 34 g.',
        120: 'Omega 3 de salmón con vitamina E; comparar EPA y DHA por porción diaria.',
        122: 'Aceite de salmón en cápsulas; comparar EPA y DHA, no solo los mg de aceite.',
        123: 'Aceite de pescado EPAX; la ficha declara 900 mg de EPA y 600 mg de DHA por porción.',
        124: "On-C-Len (60 tabletas): fórmula antioxidante celular profunda con reishi, shiitake, guanábana, té verde y diente de león; para soporte nutricional avanzado en personas con alto desgaste celular.",
        125: 'Péptidos de colágeno bovino solo, frente a mezclas con vitaminas o ácido hialurónico.',
        127: "Pétalos de Rosa con Vit C (90 cápsulas): combina vitamina C, zinc quelado y extractos de rosa y naranja; enfoque doble para embellecer la piel, estimular colágeno y blindar las defensas.",
        126: 'Colágeno con ácido hialurónico; se distingue del colágeno de un solo ingrediente.',
        129: "Probióticos 60 billones de UFC con 3 cepas e inulina. La opción de referencia para repoblar la flora tras antibióticos, aliviar distensión abdominal y mejorar la digestión diaria.",
        130: "Probióticos 60 billones Mujeres: combina probióticos con arándano rojo y vitamina C para cuidar a la par la microbiota intestinal y el bienestar urinario e íntimo.",
        131: "Megadosis de 100 billones de UFC con 7 cepas probióticas e inulina. Diseñada para disbiosis severa, síndrome de intestino irritable o máxima potencia repobladora.",
        134: 'Proteína de chícharo y arroz con probióticos, sabor cacao.',
        135: 'Proteína de chícharo y arroz con probióticos, sabor vainilla.',
        136: 'Coenzima Q10 con vitamina B6 y baya dorada; distinta de la fórmula de ubiquinol.',
        141: "Sdomachus 1,000 mg con cardamomo, jengibre, angélica, sábila y fibra de agave azul. La mejor opción en cápsulas para digestión pesadísima con gases atrapados y acidez simultánea.",
        149: "L-treonato de magnesio 288 mg y vitamina C 137.06 mg por 2 cápsulas. El peso de L-treonato no equivale a magnesio elemental. La vitamina D figura como 0.01 mcg; confirmar esa unidad. No equiparar esta cantidad de treonato a los gramos diarios usados en otros ensayos.",
        153: "Zinc Zennatura (90 cápsulas): 20 mg de zinc elemental puro por cápsula; el mineral esencial para madurar glóbulos blancos, acelerar la curación de resfriados y frenar la caída del cabello.",
        152: "Zinc con Ginger (90 cápsulas): 20 mg de zinc elemental combinados con 400 mg de raíz de jengibre; protege las defensas, piel y cabello garantizando una digestión suave y sin náuseas.",
        154: 'Calcio en cápsulas con vitamina D3; distinto de las mezclas en polvo con probióticos.',
        158: 'Proteína vegetal sabor cacao con probióticos; comparar proteína por porción.',
        163: "Ashwagandha, teanina y magnesio para estrés y relajación. La ficha contiene cantidades y porciones incompatibles entre sí; confirmar composición y número de cápsulas con la etiqueta vigente antes de indicar una dosis o comparar aportes.",
        166: 'Vitamina D3 de 5000 UI por cápsula: requiere revisar el aporte total y la indicación individual.',
        171: 'Té de árnica mexicana Heterotheca inuloides: confirmar las indicaciones para beberlo; no trasladar los usos de una pomada.',
        172: "Té Cuachalalate en infusión: pura corteza troceada para tomar caliente tras la comida; su función específica es apagar el ardor gástrico, reflujo y acidez.",
        174: "Té Jengibre Canela: infusión diurna con té verde y cafeína natural; su función es acelerar el metabolismo, activar la digestión a media mañana y frenar antojos dulces.",
        175: "Té Jengibre y Cúrcuma: infusión caliente digestiva sin cafeína; su función es aliviar la pesadez inmediata, estimular la bilis y expulsar gases tras comidas copiosas.",
        178: "Quercetin (60 cápsulas): 1,000 mg de quercetina pura por porción; el flavonoide maestro para calmar alergias respiratorias (estornudos, picazón de ojos) y desinflamar vías bronquiales.",
        180: 'Inositol puro en polvo; un solo ingrediente para mezclar con bebidas.',
        181: 'Bisglicinato con inulina; la ficha declara el aporte de magnesio elemental por porción.',
        184: "Zenmun (60 cápsulas): fórmula de choque estacional con saúco, equinácea, ajo negro, zinc y vitaminas C y D3; el escudo completo para cortar resfriados y proteger a la familia en invierno.",
        185: "Astrágalo (30 cápsulas): extracto de raíz de Astragalus membranaceus (320 mg); tónico milenario para personas que se enferman seguido del pecho o garganta y sufren de fatiga continua.",
        186: "Calostro Bovino (30 cápsulas): calostro liofilizado en cápsulas fáciles de tomar; ideal para elevar defensas basales, regenerar la barrera intestinal y recuperar fuerza física.",
        187: "Células Madre (30 cápsulas): calostro bovino con espirulina, hongo reishi, astrágalo y fo-ti; revitalizante celular para adultos mayores, personas convalecientes o con defensas bajas.",
        191: 'Creatina combinada con minerales y vitaminas, sabor limón; no equivale a creatina sola.',
        202: "Super Colostrum NOW (90 cápsulas): potente fórmula que une 1,000 mg de calostro con arabinogalactano de alerce, hoja de olivo y astrágalo; máxima protección celular para personas con defensas muy vulnerables.",
        206: 'Combina aceite de pescado, sacha inchi y linaza; mezcla fuentes marinas y vegetales.',
        208: "Cápsulas de Aceite de Orégano (65 cápsulas): orégano orgánico en cápsulas fáciles de tragar; para quienes buscan la fuerza antimicrobiana del orégano para defensas o cándida sin el sabor fuerte ni picor en la boca.",
        209: 'Creatina con minerales y vitaminas en sabor Pink; alternativa de sabor de esta fórmula.',
        207: 'Melatonina con L-triptófano y rhodiola: enfoque principal en conciliación del sueño. La rhodiola acompaña el cansancio asociado al estrés y no debe describirse como sedante.',
        212: "Gluconato de Zinc Pronacen (90 tabletas): sal orgánica de gluconato de zinc de fácil absorción en prácticas tabletas; 3 meses de protección continua para vías respiratorias, piel limpia y uñas fuertes.",
        216: 'Combina orégano y coco en cápsulas, frente a las fórmulas de orégano solo.',
        219: 'Proteína vegetal con enzimas; alternativa al suero de leche.',
        220: 'Proteína de suero con L-carnitina; revisar la porción de una o dos medidas.',
        224: "Aceite de Orégano Gotas Ore (20 ml): máxima concentración garantizada al 80% de carvacrol; el antimicrobiano más potente en gotas para cortar infecciones de garganta, vías respiratorias y reforzar defensas.",
        227: 'Citrato en cápsulas: opción de fórmula sencilla, frente al citrato en polvo con colágeno.',
        228: 'Glicinato con brócoli para músculos y nervios dentro de una rutina de relajación; confirmar magnesio elemental y distinguirlo del PM.',
        240: 'Aceite de oliva en perlas: confirmar tipo de aceite y cantidad por perla antes de compararlo con su consumo en alimentos.',
        229: "Omega Infantil Pronat (gomitas): aceite de salmón con vitamina E en gomitas masticables; la forma más fácil de dar omega 3 a niños desde 6 años para concentración escolar y vista sin sabor a pescado.",
        244: "Sukunai Kiros Blue (30 cápsulas): combina hongos Chaga y Reishi con probióticos y L-carnitina; para personas que buscan reforzar defensas desde la flora intestinal y activar su metabolismo.",
        245: 'Combina vitaminas D3 y K2; alternativa a una presentación de vitamina D sola.',
        247: 'Gomitas infantiles con vitaminas y minerales, sabores fresa y piña.',
        248: "Forti Q Ositos: gomitas multivitamínicas sin azúcar con ácido glutámico, zinc, calcio y omega 3; para niños inapetentes, que se cansan rápido en la escuela o requieren apoyo para el estirón.",
        249: 'Multivitamínico infantil líquido con calcio, para quien prefiere evitar gomitas.',
        250: 'Hierro con vitaminas en formato líquido; se distingue de un multivitamínico sin enfoque en hierro.',
        251: "Colostrum Powder (120 g): la dosis más alta de calostro (4,000 mg) con 20% de IgG activa garantizada; polvo soluble para tomar en ayunas, reparar colon inflamado y blindar el sistema inmune.",
        261: "Ácido Glutámico, Ácido Fólico y Tiamina (10 ampolletas): el tónico bebible más concentrado con lecitina, complejo B y hierro; para estudiantes en exámenes y profesionistas con fatiga mental extrema.",
        262: 'Calcio en polvo con probióticos e inulina; combina aporte mineral y enfoque digestivo.',
        263: 'Plata coloidal: no presentar como alternativa nutricional con beneficios demostrados.',
        265: "Zeolita: mineral natural clinoptilolita microporosa; actúa como imán para atrapar toxinas y amonio en el lumen intestinal.",
        271: "Calma y cuidado de la memoria: albizia 300 mg, bacopa en polvo 200 mg, teanina 100 mg y 42 mg de magnesio elemental por 2 cápsulas. La bacopa es polvo de partes aéreas, diferente de los extractos estandarizados de ensayos de memoria. Comparar con Albizia + Rhodiola, orientada a cansancio por estrés.",
        272: "Calma y vitalidad diurna: albizia 300 mg, rhodiola 200 mg, teanina 100 mg y 42 mg de magnesio elemental por 2 cápsulas. Distinguir el extracto 1:1 de albizia y la rhodiola al 3% de salidrósidos de preparaciones usadas en otros estudios.",
        274: "Extracto Líquido de Guanábana con Vitamina C (1 L): hojas de Annona muricata con 60 mg de vitamina C en botella bebible de 1 Litro; tónico herbal refrescante para protección celular y defensas.",
    };

    // Families identify alternatives to compare, not equivalent doses or a quality ranking.
    const alternativeFamilies = [
        [1, 46, 50, 91, 92, 93, 94, 149, 163, 181, 227, 228],
        [32, 33, 163], [82, 120, 122, 123, 206, 229],
        [3, 18, 125, 126], [52, 53, 79, 180], [129, 130, 131],
        [7, 8, 191, 209], [24, 35, 64, 111, 112, 113, 134, 135, 158, 219, 220],
        [154, 262], [55, 109, 166, 245], [101, 136], [25, 26],
        [186, 202, 251], [16, 208, 216, 224], [247, 248, 249],
        [88, 89, 90], [152, 153, 212], [108, 127], [43, 226],
        [78, 168], [125, 102], [271, 272], [155, 156, 243],
        [48, 49], [27, 28, 140, 164, 198], [14, 15]
    ];
    // Explicit pairs only. A shared guide alone never establishes complementarity.
    // Proteínas sin creatina declarada: no extender a proteína de res (35),
    // cuya ficha ya declara creatina, ni a mezclas con otros activos.
    const sportProteinIds = [111, 112, 113, 134, 135, 158];
    const complementPairs = [
        ...[7, 8].flatMap(id => sportProteinIds.map(proteinId => [id, proteinId])),
        [125, 108]
    ];
    const clinicalReviewGuides = new Set([
        'cancer_apoyo', 'cirrosis', 'enfermedad_renal', 'enfermedad_renal_diagnosticada',
        'epilepsia', 'parkinson', 'hipotiroidismo', 'hipertiroidismo',
        'asma_diagnosticada', 'epoc_diagnosticada', 'enfermedad_inflamatoria_intestinal'
    ]);
    padecimientos.forEach(guide => {
        if (clinicalReviewGuides.has(guide.id)) {
            guide.safetyNote = 'Antes de recomendar, el profesional que atiende a la persona debe revisar la fórmula, sus medicamentos y cómo están sus riñones y su hígado. Elegir el apoyo según sus necesidades de alimentación, sin armar un paquete solo por el nombre de la enfermedad.';
        } else if (['diabetes_tipo2', 'resistencia_insulina', 'somp'].includes(guide.id)) {
            guide.safetyNote = 'Elegir una opción según la necesidad, sin juntar por rutina berberina, canela con cromo e inositoles. Revisar los medicamentos y el control del azúcar en sangre antes de añadir un suplemento.';
        } else if (['ansiedad', 'insomnio', 'depresion_apoyo'].includes(guide.id)) {
            guide.safetyNote = 'Elegir una fórmula para calma o descanso, sin juntar varias por rutina. Magnesium PM y triptófano con teanina repiten ingredientes. Si la persona toma antidepresivos, medicamentos para dormir u otros tratamientos, revisar la combinación con su médico o farmacéutico.';
        }
    });
    // Ampliar formatos de proteína solo en guías deportivas existentes.
    // Son alternativas entre sí; no se propone consumir varias proteínas.
    ['fuerza_hipertrofia', 'resistencia_deportiva', 'recuperacion_deportiva'].forEach(id => {
        const guide = padecimientos.find(item => item.id === id);
        if (!guide) return;
        const existing = new Set([...guide.comboPrincipal, ...guide.comboSecundario].map(item => item.id));
        sportProteinIds.filter(productId => !existing.has(productId)).forEach(productId => {
            guide.comboSecundario.push({
                id: productId,
                usage: 'Elegir una fuente de proteína si la alimentación no cubre el objetivo individual. Revisar alergias y tolerancia; consultar antes si hay enfermedad renal o hepática. Seguir la etiqueta vigente.',
                rationale: 'Alternativa de fuente, sabor o presentación a la proteína de esta guía. No es un suplemento adicional obligatorio ni implica tomar varias proteínas juntas.'
            });
        });
    });
    const aliases = {
        indigestion: ['indigestión', 'dispepsia', 'empacho', 'mala digestión', 'digestión lenta', 'digestión pesada', 'pesadez después de comer', 'me cayó pesada la comida', 'llenura después de comer'],
        resistencia_insulina: ['prediabetes', 'pre diabetes', 'resistencia a la insulina', 'glucosa elevada'],
        diabetes_tipo2: ['diabetes tipo 2', 'diabetes tipo ii', 'diabetes 2'],
        somp: ['sop', 'ovario poliquistico', 'ovarios poliquisticos', 'sindrome de ovario poliquistico'],
        intestino_irritable: ['colon irritable', 'sii'],
        erge_acidez: ['reflujo', 'agruras', 'acidez', 'erge'],
        estrenimiento_cronico: ['estrenimiento', 'dificultad para evacuar'],
        colesterol_trigliceridos: ['colesterol alto', 'trigliceridos altos'],
        hipertension: ['presion alta', 'hipertension'],
        menopausia: ['bochornos', 'sofocos', 'climaterio'],
        insomnio: ['insomnio', 'no puedo dormir', 'despertares nocturnos'],
        deficiencia_magnesio: ['falta de magnesio', 'magnesio bajo'],
        deficiencia_vitamina_d: ['falta de vitamina d', 'vitamina d baja', 'déficit de vitamina d']
    };
    const guideMatches = (guide, query) => window.manualSearch.guideNameMatches(guide, query);
    padecimientos.forEach(guide => { guide.searchAliases = aliases[guide.id] || []; });
    productos.forEach(product => {
        product.searchAliases = product.id === 93 ? ['magnesium dual am', 'magnesio dual am']
            : product.id === 94 ? ['magnesium dual pm', 'magnesio dual pm']
                : product.id === 32 ? ['ashwagandha root'] : [];
        product.choiceNote = choiceNotes[product.id] || `${product.benefitSummary || 'Complemento de la alimentación'}. Presentación: ${product.packageContent || 'consultar etiqueta'}.`;
        product.alternativeProductIds = [...new Set(alternativeFamilies.filter(family => family.includes(product.id)).flat())].filter(id => id !== product.id);
        product.complementaryProductIds = complementPairs.filter(pair => pair.includes(product.id)).flat().filter(id => id !== product.id);
        product.comparisonTip = alternativeFamilies[0].includes(product.id)
            ? 'Para comparar magnesios, revisar el aporte de magnesio elemental, no solo los mg del compuesto o el nombre comercial.'
            : alternativeFamilies[2].includes(product.id)
                ? 'Para comparar omegas, revisar EPA y DHA por porción diaria. Los mg de aceite no equivalen a los mg de EPA y DHA.'
                : alternativeFamilies[1].includes(product.id)
                    ? 'Para comparar ashwagandhas, revisar extracto, polvo de raíz, porción y otros ingredientes; los mg por sí solos no indican equivalencia.'
                    : 'Comparar composición, porción, formato y perfil del cliente.';
    });
    window.manualAdvisor = {
        guideMatches,
        getProductGuideMatches(productId, query) {
            return padecimientos.filter(guide => guideMatches(guide, query)
                && [...(guide.comboPrincipal || []), ...(guide.comboSecundario || [])].some(item => item.id === productId));
        },
        getRelationship(product, other) {
            if (product.alternativeProductIds.includes(other.id)) return 'alternative';
            return product.complementaryProductIds.includes(other.id) ? 'complement' : 'related';
        },
        getPracticalUsage(product) {
            const foodInstructions = /no indica|no detalla/i.test(product.foodInteractions || '') ? '' : product.foodInteractions || '';
            const source = `${product.intakeInstructions || ''} ${product.timing || ''} ${foodInstructions}`;
            const external = /tópic|uso externo/i.test(`${product.serving} ${product.intakeInstructions}`);
            let food = 'La ficha no especifica si debe ser con o sin alimentos.';
            if (/con o sin alimentos/i.test(source)) food = 'Con o sin alimentos, según la ficha.';
            else if (/con alimentos[^.]*gras|comida[^.]*(?:gras|aguacate)|con grasas|desayuno rico en grasas/i.test(source)) food = 'Con una comida que incluya algo de grasa, según la ficha.';
            else if (/con alimentos|acompañad[oa]s? de alimentos|junto con alimentos|después de (?:los alimentos|comer)/i.test(source)) food = 'Con alimentos o después de comer, según la ficha.';
            else if (/ayunas|estómago vacío/i.test(source)) food = 'En ayunas, según la ficha.';
            const distribution = /repart|divid|\bveces\b|\btomas\b|1 con el desayuno y 1 con la cena|antes del desayuno y.*antes de la comida/i;
            const split = (product.intakeInstructions || '').split(/(?<=[.!?])\s+/).filter(sentence => distribution.test(sentence)).join(' ')
                || (distribution.test(product.serving || '') ? product.serving : '');
            return [
                [external ? 'Aplicación' : 'Porción', product.serving || 'Consultar la etiqueta vigente.'],
                ['Momento indicado', product.timing || 'La ficha no señala un horario fijo.'],
                ...(!external ? [['Con alimentos', food], ['Distribución de tomas', split || 'La ficha no detalla un reparto adicional de la porción.']] : [])
            ];
        }
    };
})();
