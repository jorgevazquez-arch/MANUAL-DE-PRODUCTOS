// Apoyo editorial para capacitación. No modifica porciones ni beneficios.
(() => {
    const { productos, padecimientos } = window.manualData;
    const choiceNotes = {
        58: "Cansancio asociado al estrés como enfoque principal: rhodiola 450 mg y citrato con aproximadamente 70 mg de magnesio elemental por porción; polen 50 mg como complemento minoritario. La rhodiola no debe describirse como sedante.",
        68: "GABA con B5, B12, zinc y selenio: orientación a relajación con apoyo nutricional. La ficha declara 1200 mg de GABA por 2 cápsulas; no equiparar esa cantidad con las de ensayos de otras preparaciones ni prometer mayor efecto por más miligramos.",
        256: "Pasiflora como único ingrediente vegetal activo, en perlas con 3 g de sacarosa por porción. Uso tradicional para calma y descanso; la ficha no declara la cantidad de extracto de pasiflora.",
        218: "Aporta 100 mg de 5-HTP por cápsula de 500 mg; el resto corresponde al excipiente. Enfoque en descanso y formación de serotonina. Revisar medicamentos antes de combinarlo con triptófano u otras fórmulas con 5-HTP.",
        169: "Infusión de uso tradicional para calma y descanso. La ficha enumera nueve plantas aunque el nombre comercial diga 7 azahares; conservar la composición declarada y distinguirla de extractos o cápsulas.",
        150: "Calma y transición al descanso con triptófano, teanina y azahar; la vitamina D3 es un aporte nutricional complementario. Contiene 300 mg de triptófano y 100 mg de teanina por cápsula.",
        1: 'Cloruro en polvo: permite preparar una bebida y medir la porción.',
        3: 'Colágeno con vitamina C y biotina; se distingue de las fórmulas de colágeno solo.',
        7: 'Creatina monohidratada en polvo, sin combinarla con una fórmula multivitamínica.',
        8: 'Creatina en polvo de 500 g; comparar por gramos de creatina por porción.',
        16: 'Orégano líquido: alternativa a las cápsulas, con una porción medida en ml.',
        18: 'Combina colágeno, ácido hialurónico y omega 3; revisar duplicados si ya toma estos ingredientes.',
        19: 'CLA como posible complemento para objetivos de grasa corporal con alimentación y ejercicio; distinguir grasa, peso y mantenimiento muscular.',
        21: 'Ajo negro con moringa y vitaminas B: combina aporte vegetal antioxidante y apoyo al aprovechamiento de los alimentos.',
        23: 'Ajo negro como ingrediente central para cuidado cardiovascular y antioxidante; las vitaminas C y B6 se declaran en cantidades pequeñas.',
        24: 'Proteína de huevo: alternativa a las proteínas de leche y vegetales.',
        25: 'Espirulina en polvo para añadir a preparaciones, frente a la opción en cápsulas.',
        26: 'Espirulina en cápsulas para quien prefiere evitar el sabor del polvo.',
        32: "Raíz de ashwagandha en polvo como único ingrediente: 500 mg por cápsula, envase con 120 cápsulas. Comparar con la ashwagandha en tabletas, que contiene extracto. La cantidad de cápsulas al día debe tomarse de la etiqueta vigente.",
        33: "Extracto de raíz en tabletas: 500 mg al 5%, equivalentes a 25 mg de withanólidos declarados por tableta. La celulosa y el estearato magnésico son excipientes. El enfoque coincide con ROOT; cambia la preparación y la presentación.",
        35: 'Proteína de res con creatina y taurina: la ficha declara 7600 mg de creatina por porción; verificar etiqueta y no sumar creatina sin revisar el total.',
        36: 'Berberina con zinc; la tabla vigente del catálogo usa una porción de 2 cápsulas.',
        46: 'Citrato en polvo con colágeno: opción para quien prefiere una bebida a las cápsulas.',
        50: 'Cloruro en cápsulas con otros nutrientes; alternativa al cloruro en polvo.',
        52: 'Dos inositoles en cápsulas y arándano; comparar con la mezcla en polvo de proporción 40:1.',
        53: 'Myo y D-chiro inositol en polvo, proporción 40:1; permite preparar una bebida.',
        55: 'Vitamina D combinada con vitamina C y equinácea; enfoque distinto al de una fórmula de D sola.',
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
        104: '90 cápsulas: vinagre con cúrcuma, jengibre, canela y pimienta negra. Porción de 3 cápsulas según la ficha.',
        109: 'Combina vitamina D3, K2, magnesio y zinc en una sola fórmula.',
        111: 'Proteína de suero sabor choconuez; comparar la proteína por porción con otras opciones.',
        112: 'Aislado de suero con una fórmula sencilla, para combinar con otras preparaciones.',
        113: 'Aislado de suero: la ficha declara 29 g de proteína por porción de 34 g.',
        120: 'Omega 3 de salmón con vitamina E; comparar EPA y DHA por porción diaria.',
        122: 'Aceite de salmón en cápsulas; comparar EPA y DHA, no solo los mg de aceite.',
        123: 'Aceite de pescado EPAX; la ficha declara 900 mg de EPA y 600 mg de DHA por porción.',
        125: 'Péptidos de colágeno bovino solo, frente a mezclas con vitaminas o ácido hialurónico.',
        126: 'Colágeno con ácido hialurónico; se distingue del colágeno de un solo ingrediente.',
        129: 'Mezcla probiótica con inulina; comparar tipos de bacterias, porción y conservación.',
        130: 'Probióticos con vitamina C y arándano; añade ingredientes al enfoque digestivo.',
        131: 'Mezcla de varios tipos de bacterias. Revisar la tabla vigente antes de comparar cantidades.',
        134: 'Proteína de chícharo y arroz con probióticos, sabor cacao.',
        135: 'Proteína de chícharo y arroz con probióticos, sabor vainilla.',
        136: 'Coenzima Q10 con vitamina B6 y baya dorada; distinta de la fórmula de ubiquinol.',
        141: 'Sábila, cardamomo, jengibre y colpachi para bienestar digestivo; distinguir gases y pesadez de gastritis y colitis.',
        149: 'Magnesio en forma de treonato con vitaminas; enfoque de bienestar mental.',
        154: 'Calcio en cápsulas con vitamina D3; distinto de las mezclas en polvo con probióticos.',
        158: 'Proteína vegetal sabor cacao con probióticos; comparar proteína por porción.',
        163: "Ashwagandha, teanina y magnesio para estrés y relajación. La ficha contiene cantidades y porciones incompatibles entre sí; confirmar composición y número de cápsulas con la etiqueta vigente antes de indicar una dosis o comparar aportes.",
        166: 'Vitamina D3 de 5000 UI por cápsula: requiere revisar el aporte total y la indicación individual.',
        171: 'Té de árnica mexicana Heterotheca inuloides: confirmar las indicaciones para beberlo; no trasladar los usos de una pomada.',
        172: 'Cuachalalate de uso tradicional para molestias del estómago; distinguir gastritis, gases y colitis en la asesoría.',
        174: 'Jengibre y canela con té verde: bienestar digestivo, antioxidantes y posible aporte de cafeína.',
        175: 'Jengibre y cúrcuma en infusión: enfoque en pesadez y gases después de comer; distinto de curcumina concentrada.',
        180: 'Inositol puro en polvo; un solo ingrediente para mezclar con bebidas.',
        181: 'Bisglicinato con inulina; la ficha declara el aporte de magnesio elemental por porción.',
        186: 'Calostro en cápsulas; comparar contenido y porción frente al polvo.',
        191: 'Creatina combinada con minerales y vitaminas, sabor limón; no equivale a creatina sola.',
        202: 'Calostro en cápsulas de la línea NOW; comparar la porción con otras presentaciones.',
        206: 'Combina aceite de pescado, sacha inchi y linaza; mezcla fuentes marinas y vegetales.',
        208: 'Aceite de orégano en cápsulas, frente a la presentación líquida en gotas.',
        209: 'Creatina con minerales y vitaminas en sabor Pink; alternativa de sabor de esta fórmula.',
        207: 'Melatonina con L-triptófano y rhodiola: enfoque principal en conciliación del sueño. La rhodiola acompaña el cansancio asociado al estrés y no debe describirse como sedante.',
        216: 'Combina orégano y coco en cápsulas, frente a las fórmulas de orégano solo.',
        219: 'Proteína vegetal con enzimas; alternativa al suero de leche.',
        220: 'Proteína de suero con L-carnitina; revisar la porción de una o dos medidas.',
        224: 'Orégano en gotas: permite medir la cantidad con gotero; no convertir gotas a ml sin equivalencia.',
        227: 'Citrato en cápsulas: opción de fórmula sencilla, frente al citrato en polvo con colágeno.',
        228: 'Glicinato con brócoli para músculos y nervios dentro de una rutina de relajación; confirmar magnesio elemental y distinguirlo del PM.',
        240: 'Aceite de oliva en perlas: confirmar tipo de aceite y cantidad por perla antes de compararlo con su consumo en alimentos.',
        229: 'Omega en gomitas: formato infantil según la edad indicada, distinto de cápsulas para adultos.',
        245: 'Combina vitaminas D3 y K2; alternativa a una presentación de vitamina D sola.',
        247: 'Gomitas infantiles con vitaminas y minerales, sabores fresa y piña.',
        248: 'Gomitas infantiles con ácido glutámico, vitaminas y minerales, sabores fresa y zarzamora.',
        249: 'Multivitamínico infantil líquido con calcio, para quien prefiere evitar gomitas.',
        250: 'Hierro con vitaminas en formato líquido; se distingue de un multivitamínico sin enfoque en hierro.',
        251: 'Calostro en polvo: se mezcla en frío, frente a las opciones en cápsulas.',
        262: 'Calcio en polvo con probióticos e inulina; combina aporte mineral y enfoque digestivo.',
        263: 'Plata coloidal: no presentar como alternativa nutricional con beneficios demostrados.',
        265: 'Zeolita: revisar evidencia y seguridad; evitar presentarla como un desintoxicante probado.',
        271: 'Albizia + bacopa + teanina y magnesio; su enfoque es calma con atención y memoria.',
        272: "Calma y vitalidad diurna: albizia 300 mg, rhodiola 200 mg, teanina 100 mg y 42 mg de magnesio elemental por 2 cápsulas. Distinguir el extracto 1:1 de albizia y la rhodiola al 3% de salidrósidos de preparaciones usadas en otros estudios.",
        274: 'Extracto de hojas de guanábana con vitamina C en presentación líquida de 1 L.'
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
