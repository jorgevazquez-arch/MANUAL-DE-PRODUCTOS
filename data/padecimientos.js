
window.manualData = window.manualData || {};
window.manualData.padecimientos = [
    // ================================================================
    //  🟣 PÚRPURA: Sistema Nervioso y Hormonal
    // ================================================================
    {
        id: 'ansiedad',
        name: 'Ansiedad y Estrés Crónico',
        emoji: '🧠',
        color: 'purple',
        description: 'La ansiedad es una respuesta de "lucha o huida" que se ha quedado atascada. El sistema nervioso simpático ("acelerador") está hiperactivo, y el sistema parasimpático ("freno") no puede contrarrestarlo. Esto se debe a un exceso de neurotransmisores excitatorios y una deficiencia de los inhibidores (como GABA). El protocolo se enfoca en calmar el "acelerador" (regulando el cortisol) y potenciar el "freno" (aumentando los niveles de GABA y relajando el sistema nervioso).',
        symptoms: ['Preocupación excesiva y pensamientos recurrentes', 'Tensión muscular', 'Irritabilidad', 'Dificultad para concentrarse', 'Palpitaciones', 'Problemas para dormir'],
        comboPrincipal: [
            { id: 163, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Fórmula 3-en-1 que combina Ashwagandha para regular el cortisol, L-Teanina para la calma mental y Magnesio para relajar el sistema nervioso.' },
            { id: 68, serving: '2-3 cápsulas', usage: 'Tomar esta porción repartidas durante el día. Con alimentos.', rationale: 'El GABA es el principal neurotransmisor inhibidor que "apaga" la mente acelerada.' }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: 'Ashwagandha para regular el cortisol.' },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Fórmula nocturna para el sueño.' },
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos. Preferentemente antes de dormir.', rationale: 'L-Teanina para calma sin somnolencia.' },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Melena de León con efectos ansiolíticos.' }
        ],
        lifestyleTips: ['Practicar técnicas de respiración profunda.', 'Limitar el consumo de cafeína y estimulantes.', 'Realizar ejercicio físico regularmente.', 'Consumir infusiones calmantes como TÉ 7 AZAHARES (ID 169) o TÉ MANZANILLA (ID 176).']
    },
    {
        id: 'fatiga_burnout',
        name: 'Fatiga Crónica y Burnout',
        emoji: '⚡',
        color: 'purple',
        description: 'El burnout es un estado de agotamiento físico, mental y emocional causado por estrés crónico. Fisiológicamente, se asocia con una desregulación del eje HPA (el sistema de respuesta al estrés), resultando en patrones anormales de cortisol y una función mitocondrial deficiente.',
        symptoms: ['Cansancio extremo que no mejora con el descanso', 'Dificultad para concentrarse o "niebla mental"', 'Irritabilidad o cambios de humor', 'Problemas para dormir a pesar del cansancio', 'Pérdida de motivación o interés'],
        comboPrincipal: [
            { id: 58, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Rhodiola Rosea es un adaptógeno clave para combatir la fatiga.' },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ashwagandha para regular el cortisol y mejorar el sueño.' },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Melena de León apoya la función cognitiva.' }
        ],
        comboSecundario: [
            { id: 109, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos grasos.', rationale: 'Vitamina D3 esencial para la energía.' },
            { id: 5, serving: '3 cápsulas', usage: 'Tomar esta porción por la mañana con alimentos.', rationale: 'Complejo B y Ginseng para el metabolismo energético.' },
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAD+ y Resveratrol para la energía mitocondrial.' },
            { id: 181, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'El Magnesio Bisglicinato (alta biodisponibilidad) contribuye a la reducción del cansancio y la fatiga, y apoya la función muscular y nerviosa.' }
        ],
        lifestyleTips: ['Priorizar el descanso y el sueño de calidad.', 'Establecer límites claros entre el trabajo y la vida personal.', 'Incorporar técnicas de relajación como meditación, yoga o mindfulness.', 'Mantener una dieta rica en nutrientes.']
    },
    {
        id: 'insomnio',
        name: 'Insomnio y Despertares Nocturnos',
        emoji: '🌙',
        color: 'purple',
        description: 'El sueño es un baile entre el sistema nervioso simpático ("acelerador") y el parasimpático ("freno"). El insomnio ocurre cuando el acelerador (impulsado por cortisol y estrés) se queda atascado, y el freno (que depende de neurotransmisores como GABA y serotonina) no tiene suficiente fuerza.',
        symptoms: ['Dificultad para conciliar el sueño', 'Despertarse varias veces en la noche', 'Despertar muy temprano y no poder volver a dormir', 'Sensación de no haber descansado'],
        comboPrincipal: [
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción 1h antes de dormir.', rationale: 'Glicinato de Magnesio relaja el sistema nervioso central.' },
            { id: 68, serving: '2 cápsulas', usage: 'Tomar esta porción 1h antes de dormir. Con alimentos.', rationale: 'GABA ayuda a "apagar" los pensamientos rumiantes.' },
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción 1h antes de dormir. Con alimentos.', rationale: 'Triptófano precursor de serotonina y melatonina.' }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción con la cena.', rationale: 'Ashwagandha reduce el cortisol nocturno.' },
            { id: 163, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Combina Ashwagandha, L-Teanina y Magnesio.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: 'Vitaminas B para la producción de neurotransmisores.' }
        ],
        lifestyleTips: ['Evitar pantallas (luz azul) al menos 1 hora antes de dormir.', 'Mantener un horario de sueño regular.', 'Tomar una infusión relajante como TÉ 7 AZAHARES (ID 169) o TÉ MANZANILLA (ID 176).']
    },
    {
        id: 'memoria_enfoque',
        name: 'Memoria y Enfoque Mental',
        emoji: '🧠',
        color: 'purple',
        description: 'Un rendimiento cognitivo óptimo depende de tres factores: 1) La capacidad del cerebro para formar nuevas conexiones (neuroplasticidad), 2) la producción de energía en las células cerebrales (función mitocondrial), y 3) la correcta comunicación entre neuronas (neurotransmisores).',
        symptoms: ['Dificultad para recordar información', 'Niebla mental o falta de claridad', 'Problemas para concentrarse en tareas', 'Olvidos frecuentes'],
        comboPrincipal: [
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Treonato de Magnesio mejora la plasticidad sináptica y la memoria.' },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Melena de León estimula el Factor de Crecimiento Nervioso (NGF).' },
            { id: 70, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ginkgo Biloba aumenta el flujo sanguíneo cerebral.' }
        ],
        comboSecundario: [
            { id: 82, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'DHA del Krill Oil para la estructura cerebral.' },
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, preferentemente por la mañana.', rationale: 'L-Tirosina precursora de dopamina.' },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Ubiquinol recarga la energía de las mitocondrias neuronales.' }
        ],
        lifestyleTips: ['Realizar ejercicios mentales (crucigramas, aprender algo nuevo).', 'Dormir lo suficiente para la consolidación de la memoria.', 'Dieta rica en Omega 3 y antioxidantes.']
    },
    {
        id: 'migrana',
        name: 'Migraña (Apoyo Nutricional)',
        emoji: '🤕',
        color: 'purple',
        description: 'Trastorno neurológico recurrente caracterizado por cefaleas pulsátiles, a menudo acompañadas de náuseas, fotofobia y aura. El enfoque es estabilizar la función mitocondrial, reducir la neuroinflamación y modular los neurotransmisores.',
        symptoms: ['Dolor de cabeza pulsátil, usualmente en un lado', 'Sensibilidad a la luz (fotofobia) y al sonido (fonofobia)', 'Náuseas o vómitos', 'Aura visual (destellos de luz, puntos ciegos)'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Magnesio Malato para la función mitocondrial.' },
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Treonato de Magnesio reduce la hiperexcitabilidad neuronal.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Riboflavina (B2) y ácido fólico para el metabolismo energético cerebral.' }
        ],
        comboSecundario: [
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Coenzima Q10 reduce el estrés oxidativo.' },
            { id: 70, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ginkgo Biloba mejora la microcirculación cerebral.' },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 reduce la neuroinflamación.' }
        ],
        lifestyleTips: ['Identificar y evitar desencadenantes (alimentos, luz, olores).', 'Mantener horarios regulares de sueño y comidas.', 'Hidratación adecuada.']
    },
    {
        id: 'fibromialgia',
        name: 'Fibromialgia',
        emoji: '💪',
        color: 'purple',
        description: 'La fibromialgia es una condición de dolor crónico generalizado, fatiga y sensibilidad, a menudo ligada a una "sensibilización central" del sistema nervioso.',
        symptoms: ['Dolor muscular y articular generalizado', 'Fatiga crónica que no mejora con el descanso', 'Problemas de sueño (insomnio, sueño no reparador)', 'Niebla mental ("fibro fog")', 'Sensibilidad al tacto'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Magnesio Malato para el dolor muscular y la fatiga.' },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Ubiquinol para la producción de energía en mitocondrias.' },
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: 'Curcumina y Boswellia como potentes antiinflamatorios.' }
        ],
        comboSecundario: [
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Mejora la calidad del sueño.' },
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ácido Alfa Lipoico para el dolor neuropático.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo B para la producción de energía.' }
        ],
        lifestyleTips: ['Realizar ejercicio de bajo impacto como caminar, nadar o yoga.', 'Practicar técnicas de manejo del estrés.', 'Mantener una rutina de sueño regular.', 'Utilizar FIX UZEN (ID 167) para masajear los puntos de dolor.']
    },
    {
        id: 'ciatica',
        name: 'Dolor de Ciática',
        emoji: '🦵',
        color: 'yellow',
        description: 'El dolor ciático es un dolor neuropático, causado por la compresión o inflamación del nervio ciático, a menudo por una hernia de disco o por la contracción de un músculo (piramidal).',
        symptoms: ['Dolor punzante que se irradia desde la espalda baja hacia una pierna', 'Hormigueo o entumecimiento en la pierna o pie', 'Debilidad muscular', 'Dolor que empeora al sentarse'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Magnesio Malato para relajar los músculos que comprimen el nervio.' },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Curcumina reduce la inflamación de la raíz nerviosa.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo B para nutrir y regenerar la vaina de mielina.' }
        ],
        comboSecundario: [
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ácido Alfa Lipoico para el dolor neuropático.' },
            { id: 91, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Aporte general de magnesio para la relajación muscular.' },
            { id: 167, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'FIX UZEN como apoyo tópico para aliviar temporalmente la tensión y el dolor local; no sustituye la valoración si hay debilidad, pérdida de sensibilidad o alteración de esfínteres.' }
        ],
        lifestyleTips: ['Realizar estiramientos específicos para el piramidal y la espalda baja.', 'Evitar estar sentado por períodos prolongados.', 'Aplicar calor en la zona lumbar.', 'Masajear la zona con FIX UZEN (ID 167).']
    },
    {
        id: 'depresion_apoyo',
        name: 'Apoyo en Depresión y Bajo Ánimo',
        emoji: '😔',
        color: 'purple',
        description: 'La depresión es una condición compleja que involucra desbalances de neurotransmisores (como la serotonina) y, cada vez más reconocido, un estado de inflamación crónica en el cerebro (neuroinflamación).',
        symptoms: ['Tristeza persistente', 'Pérdida de interés o placer en actividades', 'Cambios en el apetito o el sueño', 'Falta de energía'],
        comboPrincipal: [
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción por la tarde/noche. Con alimentos.', rationale: 'Triptófano precursor de serotonina.' },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 (EPA) para reducir la neuroinflamación.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 para optimizar los niveles.' }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha modula el eje del estrés.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitaminas B para la síntesis de neurotransmisores.' },
            { id: 94, serving: '2 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Magnesio con efecto calmante.' }
        ],
        lifestyleTips: ['Buscar apoyo psicoterapéutico.', 'Exponerse a la luz solar diariamente.', 'Mantener una rutina y establecer metas pequeñas.']
    },
    {
        id: 'quistes_miomas',
        name: 'Quistes Ováricos y Miomas (Apoyo)',
        emoji: '🩷',
        color: 'pink',
        description: 'Tanto los quistes ováricos funcionales como los miomas uterinos suelen estar asociados a un estado de "dominancia estrogénica", donde hay un exceso de estrógeno en relación con la progesterona.',
        symptoms: ['Periodos abundantes o dolorosos', 'Presión o dolor pélvico', 'Necesidad de orinar con frecuencia', 'Dolor durante las relaciones sexuales'],
        comboPrincipal: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Inositol para equilibrar el eje hormonal y mejorar la sensibilidad a la insulina.' },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Curcumina como antiinflamatorio que inhibe el crecimiento de células de miomas.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D con efecto antiproliferativo.' }
        ],
        comboSecundario: [
            { id: 43, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Apoyo a la desintoxicación hepática.' },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Reduce la inflamación pélvica.' },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Regula el estrés.' },
            { id: 180, serving: '5 g', usage: 'Tomar esta porción al día disuelto en agua. Con alimentos.', rationale: 'Presentación en polvo 100% pura de Inositol, alternativa para quienes prefieren dosificar en bebida en lugar de cápsulas.' }
        ],
        lifestyleTips: ['Dieta rica en fibra para eliminar el exceso de estrógenos.', 'Evitar plásticos y otros disruptores endocrinos.', 'Mantener un peso saludable.']
    },

    // ================================================================
    //  🟢 VERDE: Sistema Digestivo y Hepático
    // ================================================================
    {
        id: 'gastritis_ulcera',
        name: 'Gastritis y Úlcera Gástrica',
        emoji: '🌿',
        color: 'green',
        description: 'La gastritis es la inflamación de la mucosa del estómago, mientras que la úlcera es una herida abierta en esa misma mucosa. Ambas condiciones se benefician de un enfoque doble: 1) Proteger la zona dañada del ácido gástrico para permitir que sane, y 2) Aportar compuestos que activamente desinflamen y promuevan la cicatrización.',
        symptoms: ['Ardor o dolor en la boca del estómago', 'Sensación de vacío que mejora al comer', 'Acidez y reflujo', 'Náuseas o indigestión'],
        comboPrincipal: [
            { id: 246, serving: '1 scoop (6 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Fórmula completa con L-Glutamina para la reparación de la mucosa gástrica, Zinc L-carnosina que se adhiere al tejido ulcerado, NAG para la formación de mucina protectora, Aloe vera para calmar la inflamación y Vitamina D3 para la integridad epitelial.' },
            { id: 9, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Cuachalalate y Tepezcohuite forman una capa protectora.' },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción en ayunas.', rationale: 'Aloe Vera recubre y calma la mucosa gástrica.' }
        ],
        comboSecundario: [
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc L-Carnosine es una alternativa específica de apoyo a la mucosa gástrica. Como L-GLUTAMINE + NAG ya contiene Zinc L-carnosina, no deben combinarse de rutina sin orientación profesional.' },
            { id: 141, serving: '2 cápsulas', usage: 'Tomar esta porción con alimentos.', rationale: 'Fórmula de apoyo digestivo.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo de la microbiota durante o después de un tratamiento indicado. No erradican H. pylori ni sustituyen los antibióticos.' }
        ],
        lifestyleTips: ['Evitar alimentos irritantes como picante, café, alcohol y fritos.', 'Realizar comidas más pequeñas y frecuentes.', 'Manejar el estrés.', 'Consumir infusiones con Toronjil como TÉ JOUNKINS LAX (ID 189) para apoyar la relajación.']
    },
    {
        id: 'colitis',
        name: 'Colitis (Apoyo Complementario)',
        emoji: '🌿',
        color: 'green',
        description: 'La palabra colitis describe inflamación del colon y no es equivalente al Síndrome de Intestino Irritable. Antes de recomendar suplementos se debe conocer la causa y confirmar el diagnóstico; esta guía ofrece únicamente apoyo nutricional complementario.',
        symptoms: ['Dolor abdominal tipo cólico', 'Hinchazón y gases', 'Alternancia entre diarrea y estreñimiento', 'Moco en las heces'],
        comboPrincipal: [
            { id: 246, serving: '1 scoop (6 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'L-Glutamina como combustible para los enterocitos, NAG para reconstruir la capa de mucina, Zinc L-carnosina para fortalecer la barrera intestinal, Aloe vera para reducir la inflamación y regular el tránsito, e Inulina como prebiótico para la microbiota.' },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo complementario de la microbiota, según tolerancia individual.' },
            { id: 9, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Botánicos de uso tradicional para el bienestar digestivo, sin sustituir el tratamiento de la causa de la colitis.' }
        ],
        comboSecundario: [
            { id: 151, serving: '1/2-1 medida (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar en ayunas o con el desayuno, preferentemente por la mañana.', rationale: 'Fibra prebiótica como alternativa gradual. No combinar inicialmente con L-GLUTAMINE + NAG si existe sensibilidad a inulina o fermentación.' },
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc L-Carnosine como alternativa de apoyo a la mucosa; evitar duplicarlo con el producto 246 sin orientación profesional.' },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción en ayunas.', rationale: 'Aloe Vera calma y desinflama el tracto digestivo.' },
        ],
        lifestyleTips: ['Identificar y evitar alimentos detonantes (lácteos, gluten, etc.).', 'Manejar el estrés.', 'Comer despacio y masticar bien los alimentos.', 'Consumir infusiones relajantes como TÉ JOUNKINS LAX (ID 189) por su contenido de Toronjil.']
    },
    {
        id: 'erge_acidez',
        name: 'Reflujo Gastroesofágico y Acidez (ERGE)',
        emoji: '🔥',
        color: 'green',
        description: 'El reflujo ácido ocurre cuando el contenido del estómago regresa al esófago, causando ardor e irritación. Frecuentemente se asocia a digestiones lentas, disbiosis o estrés crónico, más que a un exceso de ácido.',
        symptoms: ['Sensación de ardor o fuego en el pecho (pirosis)', 'Regurgitación ácida o sabor amargo en la garganta', 'Tos seca crónica o ronquera', 'Sensación de un nudo en la garganta', 'Indigestión, eructos o pesadez estomacal'],
        comboPrincipal: [
            { id: 9, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: 'Cuachalalate y Tepezcohuite cicatrizan la mucosa.' },
            { id: 164, serving: '2 cucharadas', usage: 'Tomar esta porción en ayunas y antes de dormir.', rationale: 'Aloe Vera con Nopal y Cuachalalate recubre el tracto digestivo.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción por las mañanas. Con alimentos.', rationale: 'Probióticos equilibran el microbioma.' }
        ],
        comboSecundario: [
            { id: 246, serving: '1 scoop (6 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'La L-Glutamina y el Zinc L-carnosina ayudan a reparar el esófago y la mucosa gástrica dañados por el reflujo, el NAG fortalece la capa protectora de mucina, y el Aloe vera calma la inflamación.' },
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc L-Carnosine como alternativa al producto 246 para apoyo de la mucosa. No combinar ambos de rutina.' },
            { id: 66, serving: '1 onza', usage: 'Tomar esta porción diluida en agua tibia antes de dormir.', rationale: 'Flor-Essence como calmante digestivo.' }
        ],
        lifestyleTips: ['Evitar acostarse inmediatamente después de comer.', 'Elevar la cabecera de la cama unos 15 cm.', 'Masticar los alimentos lentamente.', 'Evitar desencadenantes como café en ayunas, chocolate, menta.']
    },
    {
        id: 'higado_graso',
        name: 'Hígado Graso (No alcohólico)',
        emoji: '🌿',
        color: 'green',
        description: 'El hígado graso asociado a disfunción metabólica requiere valoración médica y se aborda principalmente mediante alimentación, actividad física, control de peso y tratamiento de diabetes o lípidos cuando corresponda. Los suplementos son únicamente complementarios.',
        symptoms: ['Generalmente asintomático', 'Fatiga o cansancio crónico', 'Molestia en la parte superior derecha del abdomen', 'Abdomen abultado'],
        comboPrincipal: [
            { id: 145, serving: '2 cápsulas (1.3 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Colina y lecitina como apoyo nutricional al metabolismo normal de las grasas, sin afirmar que eliminan la grasa hepática.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo al perfil de triglicéridos. No sustituye el control médico de la enfermedad hepática.' },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'NAC como precursor de glutatión y apoyo antioxidante complementario.' }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Curcumina como apoyo antioxidante; requiere precaución con anticoagulantes y no debe usarse ante cálculos u obstrucción biliar sin autorización profesional.' },
            { id: 43, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Fórmula botánica de apoyo general, evitando presentarla como producto detox o tratamiento del hígado graso.' },
            { id: 77, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día antes de las comidas principales, según la ficha técnica.', rationale: 'Hercampuri de uso tradicional digestivo. Evitar ante enfermedad u obstrucción de la vesícula y no presentarlo como tratamiento para eliminar grasa hepática.' }
        ],
        lifestyleTips: ['Eliminar bebidas azucaradas y reducir alimentos ultraprocesados.', 'Realizar actividad física regular y buscar una reducción de peso gradual cuando corresponda.', 'Controlar glucosa, presión y lípidos con seguimiento profesional.', 'Evitar recomendar múltiples productos herbales a la vez.']
    },
    {
        id: 'cirrosis',
        name: 'Apoyo en Cirrosis Hepática',
        emoji: '🌿',
        color: 'green',
        description: 'La cirrosis es una enfermedad hepática avanzada que requiere seguimiento médico y nutricional individualizado. No existe un combo de suplementos de venta libre apropiado para todos los pacientes y cualquier producto debe ser autorizado por el hepatólogo.',
        symptoms: ['Fatiga, náuseas, pérdida de apetito', 'Ictericia (coloración amarilla de piel y ojos)', 'Hinchazón en piernas y abdomen (ascitis)'],
        comboPrincipal: [
            { id: 111, serving: '1 scoop (35 g)', usage: 'Tomar esta porción únicamente con autorización del médico o nutriólogo. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: 'Proteína de suero como opción de apoyo cuando existe desnutrición o pérdida muscular. El asesor puede recomendar el producto, pero el médico o nutriólogo debe definir la cantidad total y la pauta individual según función hepática, renal y estado nutricional.' },
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos, únicamente con autorización del hepatólogo.', rationale: 'Colina y lecitina como apoyo nutricional al metabolismo normal de grasas; no revierten fibrosis ni sustituyen el tratamiento de la cirrosis.' },
            { id: 116, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día únicamente con autorización del hepatólogo. Con alimentos.', rationale: 'NAC como precursor de glutatión y apoyo antioxidante. Revisar medicamentos, sangrado, úlcera y estado clínico antes de utilizarlo.' }
        ],
        comboSecundario: [
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción al día únicamente con autorización profesional y revisión de coagulación y medicamentos. Con un desayuno que contenga grasas.', rationale: 'Omega-3 como apoyo nutricional cuando el profesional lo considere apropiado; no trata la cirrosis y puede aumentar el riesgo de sangrado.' },
            { id: 43, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día únicamente con autorización expresa del hepatólogo. Con alimentos.', rationale: 'Fórmula botánica con cardo mariano. Está contraindicada en enfermedad hepática grave u obstrucción biliar sin supervisión y no debe venderse como regenerador del hígado.' },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si el hepatólogo la autoriza. Con alimentos que contengan grasas.', rationale: 'Ubiquinol como apoyo de energía celular y cardiovascular; no trata la cirrosis ni sustituye el seguimiento hepático.' }
        ],
        lifestyleTips: ['Derivar siempre al médico o hepatólogo antes de recomendar cualquier suplemento.', 'Eliminar completamente el alcohol.', 'No restringir proteína ni sodio de forma improvisada; el plan depende del estado nutricional, ascitis, medicamentos y resultados de laboratorio.', 'Buscar atención urgente ante vómito con sangre, confusión, somnolencia marcada, abdomen muy distendido o color amarillo intenso.']
    },
    {
        id: 'piedras_vesicula',
        name: 'Colelitiasis (Piedras en la Vesícula)',
        emoji: '🌿',
        color: 'green',
        description: 'La colelitiasis es la presencia de cálculos en la vesícula. Los productos que estimulan la contracción vesicular o el flujo de bilis pueden provocar dolor o complicaciones si existe obstrucción; por ello no se recomienda un combo comercial sin valoración médica.',
        symptoms: ['Dolor repentino e intenso en la parte superior derecha del abdomen', 'Dolor que se irradia a la espalda o al hombro derecho', 'Náuseas o vómitos'],
        comboPrincipal: [
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos, solo después de valoración profesional.', duration: 'No establecida para colelitiasis; reevaluar antes de continuar.', durationSource: 'Guías clínicas de colelitiasis (PMID: 37452855)', durationSourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/37452855/', rationale: 'Lecitina y colina como apoyo nutricional al metabolismo de grasas. No disuelven cálculos ni evitan una obstrucción.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo al bienestar digestivo general; no actúan sobre los cálculos biliares.' },
            { id: 60, serving: '2 cápsulas', usage: 'Tomar esta porción antes de las comidas, solo si el profesional confirma que son apropiadas.', rationale: 'Enzimas digestivas para molestias relacionadas con la digestión de alimentos. No usar ante pancreatitis, úlcera activa o alergia a sus componentes.' }
        ],
        comboSecundario: [
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día según tolerancia. En ayunas o entre comidas.', rationale: 'Bebida de aloe para hidratación y bienestar digestivo, sin afirmar que limpia la vesícula o elimina piedras.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día únicamente si el profesional lo autoriza. Con un desayuno que contenga grasas.', rationale: 'Omega-3 como apoyo nutricional general, no como tratamiento de colelitiasis y con revisión del riesgo de sangrado.' },
            { id: 172, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día según tolerancia y autorización profesional. Después de las comidas.', rationale: 'Té de cuachalalate como apoyo digestivo tradicional; no estimula ni limpia la vesícula y no sustituye la valoración de cálculos.' }
        ],
        lifestyleTips: ['Derivar a valoración médica si existen síntomas.', 'Evitar comidas que desencadenen ataques mientras se recibe valoración.', 'No intentar disolver o expulsar cálculos con suplementos.', 'Buscar atención urgente ante dolor que dura varias horas, fiebre, vómitos o color amarillo en piel u ojos.']
    },
    {
        id: 'candida',
        name: 'Candidiasis Diagnosticada (Apoyo Complementario)',
        emoji: '🛡️',
        color: 'green',
        description: 'La candidiasis requiere confirmar el sitio y tipo de infección. Los síntomas digestivos inespecíficos no demuestran por sí solos un sobrecrecimiento intestinal y los suplementos no sustituyen el antifúngico indicado por un profesional.',
        symptoms: ['Placas o lesiones compatibles con candidiasis', 'Infecciones recurrentes confirmadas', 'Picazón, ardor o secreción según el sitio afectado', 'Molestias digestivas inespecíficas'],
        comboPrincipal: [
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo complementario de la microbiota durante o después del tratamiento indicado.' },
            { id: 2, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Aceite de orégano de uso complementario únicamente con orientación profesional; no sustituye un antifúngico y puede irritar el tracto digestivo.' },
            { id: 67, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Mezcla de hongos como apoyo nutricional general. El nombre comercial no implica actividad antifúngica clínica y no sustituye el tratamiento indicado; revisar inmunosupresores, anticoagulantes y enfermedades autoinmunes.' }
        ],
        comboSecundario: [
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ajo negro como apoyo nutricional general, sin presentarlo como tratamiento antifúngico.' },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probiótico alternativo al producto 129. Elegir una sola presentación; la evidencia como coadyuvante se concentra en candidiasis oral y no permite generalizar a todos los tipos de candidiasis.' },
            { id: 224, serving: '4 gotas', usage: 'Tomar esta porción diluida, 2 veces al día con alimentos.', rationale: 'Presentación líquida alternativa al producto 2, no para combinar con él. La actividad antifúngica del orégano se sustenta principalmente en estudios de laboratorio y no reemplaza el tratamiento indicado.' }
        ],
        lifestyleTips: ['Confirmar el diagnóstico con un profesional de la salud.', 'Seguir el tratamiento antifúngico indicado cuando corresponda.', 'Mantener una alimentación equilibrada sin prometer que eliminar azúcar erradica por sí sola la infección.', 'No combinar varias presentaciones de aceite de orégano.']
    },
    {
        id: 'estrenimiento_cronico',
        name: 'Estreñimiento Crónico',
        emoji: '🚽',
        color: 'green',
        description: 'Dificultad o baja frecuencia en las evacuaciones intestinales, a menudo causado por falta de fibra, hidratación, sedentarismo o una motilidad intestinal lenta.',
        symptoms: ['Evacuaciones poco frecuentes (menos de 3 veces por semana)', 'Heces duras, secas o en forma de "bolitas"', 'Esfuerzo excesivo o dolor al evacuar', 'Sensación de evacuación incompleta', 'Hinchazón abdominal, gases y malestar general'],
        comboPrincipal: [
            { id: 151, serving: '1/2-1 medida (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Disolver en 250-300 ml de agua y tomar en ayunas o con el desayuno, preferentemente por la mañana.', rationale: 'Zen Greens aporta inulina, FOS y fibra de acacia para aumentar la fibra diaria y favorecer la regularidad. Debe introducirse gradualmente para evitar gases o distensión.' },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos de alta concentración para apoyar el equilibrio de la microbiota intestinal como complemento de la fibra prebiótica.' },
            { id: 140, serving: '30 ml', usage: 'Tomar esta porción antes de cada alimento, según las indicaciones del producto.', rationale: 'Sábila sin aloína, nopal y cuachalalate como apoyo para el bienestar digestivo. No actúa como laxante estimulante.' }
        ],
        comboSecundario: [
            { id: 76, serving: '1 tableta', usage: 'Tomar esta porción al día con alimentos y suficiente agua.', rationale: 'Green LX combina ciruela pasa, tamarindo, papaya, sábila y manzana para apoyar el tránsito intestinal. Utilizar como alternativa botánica, no junto con otros laxantes.' },
            { id: 46, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día únicamente con orientación profesional por su aporte de 500 mg de magnesio elemental. Con alimentos.', rationale: 'El magnesio puede atraer agua hacia el intestino y facilitar la evacuación, pero esta presentación requiere precaución, especialmente en personas con enfermedad renal.' },
            { id: 173, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza por la noche, solo como rescate ocasional.', duration: 'Máximo 7 días consecutivos; uso ocasional.', durationSource: 'Ficha técnica del producto', rationale: 'El sen estimula la motilidad intestinal. Reservar para casos ocasionales cuando la fibra, la hidratación y las medidas de mantenimiento no sean suficientes. Las opciones secundarias son alternativas y no deben consumirse conjuntamente.' }
        ],
        lifestyleTips: ['Mantener una hidratación adecuada, especialmente al aumentar el consumo de fibra.', 'Establecer una rutina para ir al baño.', 'Usar un banco o escalón bajo los pies al evacuar.', 'Aumentar gradualmente el consumo de fibra soluble.', 'Mantener actividad física regular.', 'Consultar a un profesional de la salud si el estreñimiento persiste o aparece sangre en las heces, pérdida de peso, anemia, vómitos o dolor abdominal intenso.']
    },

    // ================================================================
    //  🔴 ROJO: Salud Cardiovascular y Clínica
    // ================================================================
    {
        id: 'cardiovascular',
        name: 'Salud Cardiovascular',
        emoji: '❤️',
        color: 'red',
        description: 'Guía general de apoyo cardiovascular. La presión arterial, el colesterol, los triglicéridos y los síntomas al esfuerzo requieren evaluación individual; los productos aquí mostrados son alternativas complementarias y no sustituyen medicamentos.',
        symptoms: ['Presión arterial elevada', 'Colesterol o triglicéridos altos', 'Mala circulación', 'Fatiga al esfuerzo'],
        comboPrincipal: [
            { id: 10, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Fórmula botánica de apoyo cardiovascular; revisar anticoagulantes, antidiabéticos y antihipertensivos.' },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con una comida que contenga grasa.', rationale: 'Ubiquinol como apoyo antioxidante y de energía celular, especialmente útil para valorar con el profesional si se usan estatinas.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Aporta 900 mg de EPA y 600 mg de DHA por porción como apoyo al consumo de omega-3. No equivale al omega-3 de prescripción para hipertrigliceridemia.' }
        ],
        comboSecundario: [
            { id: 128, serving: '3 cápsulas (2.05 g)', usage: 'Tomar esta porción al día únicamente con orientación profesional y revisión de función renal y medicamentos. Con alimentos.', rationale: 'Potasio y magnesio para el equilibrio electrolítico. Evitar con enfermedad renal, potasio elevado, inhibidores de la ECA, ARA II o diuréticos ahorradores de potasio.' },
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ajo negro como alternativa botánica; no combinar de rutina con CUORE y revisar anticoagulantes o antihipertensivos.' },
            { id: 82, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Krill Oil como alternativa a OMEGA NORDIC, no para sumar ambos aceites de forma automática.' }
        ],
        lifestyleTips: ['Realizar actividad cardiovascular moderada.', 'Aumentar el consumo de vegetales de hoja verde y pescado.', 'Limitar grasas trans y azúcares.']
    },
    {
        id: 'varices_circulacion',
        name: 'Várices y Mala Circulación',
        emoji: '🦵',
        color: 'red',
        description: 'Condición en la cual las venas pierden elasticidad y las válvulas fallan, dificultando el retorno de la sangre desde las extremidades hacia el corazón.',
        symptoms: ['Sensación de pesadez, cansancio o dolor en las piernas', 'Venas visibles, abultadas y retorcidas', 'Hinchazón (edema) en los tobillos', 'Calambres nocturnos en las piernas', 'Picazón o cambios de color en la piel'],
        comboPrincipal: [
            { id: 44, serving: '2 cápsulas (800 mg)', usage: 'Tomar esta porción al día; confirmar con el especialista que el extracto esté estandarizado. Antes de las comidas.', rationale: 'Castaño de Indias como apoyo a síntomas de insuficiencia venosa. No usar semilla o extractos no estandarizados.' },
            { id: 182, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel tópico como complemento para sensación de pesadez, sin aplicar sobre piel lesionada.' },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitamina C como apoyo nutricional a la síntesis normal de colágeno.' }
        ],
        comboSecundario: [
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ajo negro como alternativa oral, revisando anticoagulantes y riesgo de sangrado.' },
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo cardiovascular general; no presentarlo como producto que adelgaza la sangre.' },
            { id: 138, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Resveratrol como apoyo antioxidante, revisando medicamentos.' },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel refrescante como alternativa al gel 182; no es necesario utilizar ambos.' }
        ],
        lifestyleTips: ['Elevar las piernas por encima del nivel del corazón.', 'Usar medias de compresión graduada.', 'Caminar a paso ligero a diario.', 'Evitar ropa excesivamente ajustada.']
    },
    {
        id: 'enfermedad_renal',
        name: 'Bienestar Urinario (Sin Enfermedad Renal Diagnosticada)',
        emoji: '❤️',
        color: 'red',
        description: 'Guía de bienestar urinario para adultos sin enfermedad renal diagnosticada. Enfermedad renal, cálculos e infecciones son problemas diferentes y requieren valoración, análisis y tratamiento específicos.',
        symptoms: ['Antecedentes de molestias urinarias', 'Orina turbia o con olor fuerte', 'Infecciones recurrentes previamente evaluadas', 'Necesidad de revisar hábitos de hidratación'],
        comboPrincipal: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Arándano como apoyo preventivo del tracto urinario; no trata una infección activa.' },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos y solo si no existe enfermedad renal o cardíaca.', rationale: 'Botánicos de uso tradicional urinario. Revisar diuréticos, litio, antihipertensivos y estado de hidratación.' },
            { id: 148, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Hierba del Sapo de uso tradicional. No afirmar que disuelve cálculos y evitar ante enfermedad renal, hipotensión o tratamiento diurético.' }
        ],
        comboSecundario: [
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Bebida de aloe como apoyo general de hidratación y bienestar digestivo, no como tratamiento renal.' },
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día según tolerancia. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: 'Fibra prebiótica para bienestar digestivo general; no alcaliniza ni desintoxica los riñones.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo digestivo general; no tratan enfermedad renal ni sustituyen la valoración urológica.' }
        ],
        lifestyleTips: ['Mantener una hidratación adecuada con agua natural.', 'Reducir el consumo de sodio (sal).', 'Evitar el uso excesivo de antiinflamatorios no esteroideos (AINEs).']
    },
    {
        id: 'enfermedad_renal_diagnosticada',
        name: 'Enfermedad Renal Diagnosticada (Apoyo Supervisado)',
        emoji: '🩺',
        color: 'red',
        description: 'La enfermedad renal modifica la eliminación de líquidos, minerales y medicamentos. Todos los productos deben ser autorizados por el nefrólogo después de revisar filtración glomerular, potasio, fósforo, presión arterial y tratamiento actual.',
        symptoms: ['Diagnóstico previo de enfermedad renal', 'Cambios en filtración glomerular o creatinina', 'Proteína o albúmina en orina', 'Hinchazón, presión elevada o fatiga evaluadas médicamente'],
        comboPrincipal: [
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción al día únicamente con autorización del nefrólogo y revisión de anticoagulantes. Con un desayuno que contenga grasas.', rationale: 'Omega-3 como apoyo nutricional cardiovascular cuando el profesional lo considere apropiado. No mejora por sí solo la filtración renal.' },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día únicamente si el nefrólogo la autoriza. Con alimentos que contengan grasas.', rationale: 'Ubiquinol como apoyo de energía celular y salud cardiovascular; no es un tratamiento para recuperar la función renal.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, si el profesional la autoriza.', rationale: 'Probióticos como apoyo digestivo general. Evitar ante inmunosupresión grave y no presentarlos como desintoxicantes renales.' }
        ],
        comboSecundario: [
            { id: 111, serving: '1 scoop (35 g)', usage: 'Tomar esta porción únicamente con autorización del médico o nutriólogo renal. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: 'Proteína de suero únicamente cuando el plan nutricional determine que se necesita. La cantidad de proteína cambia según etapa renal, diálisis y estado nutricional.' },
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día únicamente si existe indicación urinaria adicional y el profesional lo aprueba. Con alimentos.', rationale: 'Cranberry para apoyo preventivo de vías urinarias; evitar o revisar especialmente si hay antecedentes de cálculos de oxalato o uso de warfarina.' },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día solo si el nefrólogo autoriza la cantidad de líquidos. En ayunas o entre comidas.', rationale: 'Aloe como bebida de bienestar digestivo; la cantidad de líquidos en enfermedad renal debe individualizarse y no se presenta como tratamiento renal.' }
        ],
        lifestyleTips: ['No recomendar potasio, magnesio, creatina, diuréticos herbales ni productos detox sin autorización del nefrólogo.', 'Individualizar proteína, sodio, potasio, fósforo y líquidos.', 'Evitar AINEs salvo indicación médica.', 'Buscar atención ante disminución marcada de orina, falta de aire, confusión, dolor de pecho o edema rápidamente progresivo.']
    },
    {
        id: 'calculos_renales',
        name: 'Cálculos Renales (Prevención Según el Tipo de Piedra)',
        emoji: '💧',
        color: 'red',
        description: 'Los cálculos pueden ser de calcio, ácido úrico, estruvita o cistina. La prevención cambia según el tipo de piedra y los resultados de sangre y orina; ningún producto debe presentarse como capaz de disolver todos los cálculos.',
        symptoms: ['Dolor intenso en espalda, costado o abdomen bajo', 'Sangre en la orina', 'Náuseas o vómitos', 'Antecedentes de expulsión o diagnóstico por imagen'],
        comboPrincipal: [
            { id: 213, serving: '1 tableta', usage: 'Tomar esta porción antes de cada alimento principal (3 tabletas al día).', rationale: 'Fórmula herbal con Chanca Piedra, Yumel, Cola de Caballo, Perejil, Hierba del Sapo, Cardo Mariano y Taray para apoyo tradicional del sistema urinario. Puede complementar otras fórmulas del protocolo respetando las porciones del empaque; no afirmar que disuelve todos los cálculos y revisar hidratación, función renal y medicamentos.' },
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente después de identificar el tipo de cálculo y con autorización profesional. Con alimentos.', rationale: 'Citrato de potasio puede ser útil en determinados cálculos y alteraciones del citrato urinario. Requiere revisar función renal, potasio y medicamentos.' },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, según la ficha y con revisión profesional.', rationale: 'RINICHI como fórmula botánica urinaria tradicional que puede complementar CHA-HA STONE. No disuelve piedras y debe evitarse ante enfermedad renal, cardíaca o uso de diuréticos, litio o ciertos antihipertensivos.' },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día como parte de la ingesta de líquidos, según tolerancia. En ayunas o entre comidas.', rationale: 'Bebida de aloe como apoyo de hidratación general; no modifica el tipo de cálculo ni sustituye el consumo de agua.' }
        ],
        comboSecundario: [
            { id: 177, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza de infusión al día según tolerancia y las indicaciones del empaque. Después de las comidas.', rationale: 'Té RINICHI como complemento líquido del protocolo; puede combinarse con las fórmulas en cápsulas respetando porciones, hidratación y tolerancia.' },
            { id: 148, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: 'Hierba del Sapo de uso tradicional como complemento de CHA-HA STONE y RINICHI. No afirmar que fragmenta o disuelve cálculos; evitar ante enfermedad renal, hipotensión o desequilibrios electrolíticos.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo digestivo general durante cambios de alimentación; no actúan sobre el cálculo.' }
        ],
        lifestyleTips: ['Priorizar agua natural en la cantidad recomendada por el profesional.', 'No restringir calcio alimentario ni alcalinizar la orina sin conocer el tipo de cálculo.', 'Reducir sodio y ajustar oxalato, purinas o proteína únicamente según el diagnóstico.', 'Buscar atención urgente ante fiebre, escalofríos, ausencia de orina, vómitos persistentes o dolor incontrolable.']
    },
    {
        id: 'infecciones_urinarias',
        name: 'Infecciones de las Vías Urinarias Recurrentes (Apoyo Preventivo)',
        emoji: '🚽',
        color: 'red',
        description: 'Esta guía es únicamente preventiva para personas con infecciones urinarias recurrentes ya evaluadas. Ardor, urgencia, sangre, fiebre o dolor lumbar requieren valoración; los suplementos no tratan una infección activa.',
        symptoms: ['Necesidad fuerte y constante de orinar', 'Sensación de ardor o dolor al orinar (disuria)', 'Orina turbia, oscura o con olor fuerte', 'Sangre en la orina', 'Dolor pélvico o presión en la parte baja del abdomen'],
        comboPrincipal: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Cranberry como apoyo preventivo para reducir la adherencia bacteriana; no elimina una infección existente.' },
            { id: 130, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos específicos para apoyar el equilibrio de la microbiota vaginal como estrategia complementaria; la utilidad depende de las cepas y no está demostrada para tratar una infección activa.' }
        ],
        comboSecundario: [
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Vitamina C como apoyo nutricional general; no debe aumentarse para tratar una fase aguda ni presentarse como acidificante terapéutico.' },
            { id: 22, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ajo negro con propóleo como apoyo general, sin denominarlo antibiótico natural ni sustituir el tratamiento indicado.' },
            { id: 61, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Equinácea y vitamina C como apoyo general de defensas, no como tratamiento de la infección urinaria.' },
            { id: 27, serving: '90 ml', usage: 'Tomar esta porción al día. En ayunas o antes de la primera comida.', rationale: 'Bebida de aloe y arándano como alternativa de apoyo e hidratación. Al no declarar contenido de proantocianidinas, no debe considerarse equivalente al cranberry estandarizado ni combinarse de rutina con el producto 6.' }
        ],
        lifestyleTips: ['Mantener hidratación adecuada.', 'Orinar después de mantener relaciones sexuales.', 'Evitar duchas vaginales y productos irritantes.', 'Solicitar atención médica ante síntomas activos, y de urgencia si hay fiebre, escalofríos, vómitos o dolor en la espalda o costado.']
    },
    {
        id: 'inflamacion_edema',
        name: 'Inflamación y Retención de Líquidos (Edema)',
        emoji: '💧',
        color: 'red',
        description: 'El edema puede deberse a insuficiencia venosa, medicamentos o enfermedades cardíacas, renales o hepáticas. Antes de recomendar diuréticos o electrolitos debe identificarse la causa, especialmente si es nuevo, unilateral o se acompaña de falta de aire.',
        symptoms: ['Hinchazón en piernas, tobillos o manos', 'Sensación de pesadez o piel tirante', 'Aumento de peso repentino por retención de agua', 'Rigidez matutina en articulaciones o dedos', 'Marca visible al presionar la piel (fóvea)'],
        comboPrincipal: [
            { id: 44, serving: '2 cápsulas (800 mg)', usage: 'Tomar esta porción al día; confirmar con el especialista que el extracto esté estandarizado. Antes de las comidas.', rationale: 'Castaño de Indias únicamente cuando el edema se relaciona con insuficiencia venosa ya evaluada.' },
            { id: 182, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel tópico para sensación de pesadez asociada a mala circulación venosa, sin aplicar sobre piel lesionada.' }
        ],
        comboSecundario: [
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente con orientación profesional y análisis de potasio y función renal. Con alimentos.', rationale: 'Citrato de potasio para indicaciones específicas; no debe utilizarse de rutina para eliminar líquidos.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo nutricional general, no como tratamiento directo del edema.' },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel refrescante como alternativa tópica al producto 182; no aplicar sobre piel lesionada ni usar ambos geles de forma rutinaria.' },
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 de menor concentración como alternativa al producto 123, no para combinar con él. Es apoyo cardiovascular general y no reduce directamente el edema.' }
        ],
        lifestyleTips: ['Reducir el exceso de sodio y alimentos ultraprocesados.', 'Elevar las piernas cuando la causa sea venosa y moverlas con frecuencia.', 'No aumentar ni restringir líquidos sin conocer la causa.', 'Buscar atención urgente ante falta de aire, dolor de pecho, edema de una sola pierna o aumento rápido de peso.']
    },
    {
        id: 'artritis_reumatoide',
        name: 'Artritis Reumatoide (Enfermedad Autoinmune Articular)',
        emoji: '💪',
        color: 'yellow',
        description: 'Enfermedad autoinmune en la que el sistema inmunológico ataca el tejido sinovial de las articulaciones, causando inflamación crónica, dolor y deformidad.',
        symptoms: ['Dolor e hinchazón en múltiples articulaciones (simétrico)', 'Rigidez matutina prolongada (> 1 hora)', 'Fatiga y malestar general', 'Nódulos reumatoides bajo la piel'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: 'UC-II®, Boswellia y cúrcuma como apoyo complementario para articulaciones. No sustituye los fármacos modificadores de la enfermedad.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo nutricional complementario, revisando anticoagulantes y riesgo de sangrado.' }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Curcumina como alternativa al producto 102, no para combinarlos de rutina por duplicación de cúrcuma y posible aumento de interacciones.' },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC precursor de glutatión para reducir el estrés oxidativo.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si la porción es apropiada para sus niveles y tratamiento. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 como apoyo nutricional cuando existe insuficiencia o indicación profesional.' },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo digestivo general, sin afirmar que controlan la enfermedad autoinmune.' }
        ],
        lifestyleTips: ['Mantener seguimiento con reumatología y no suspender el tratamiento indicado.', 'Realizar actividad física de bajo impacto y fisioterapia según tolerancia.', 'Seguir una alimentación equilibrada; eliminar gluten o lácteos solo si existe diagnóstico o intolerancia individual.', 'Revisar anticoagulantes antes de combinar omega-3, cúrcuma u otros productos con efecto sobre sangrado.']
    },
    {
        id: 'acido_urico',
        name: 'Ácido Úrico Elevado (Gota)',
        emoji: '🔥',
        color: 'orange',
        description: 'La gota ocurre cuando cristales de urato se depositan en una articulación. Requiere confirmar el diagnóstico y medir ácido úrico; los suplementos no sustituyen el tratamiento del ataque ni los medicamentos reductores de urato cuando están indicados.',
        symptoms: ['Dolor intenso y repentino en una articulación (a menudo el dedo gordo del pie)', 'Hinchazón y enrojecimiento', 'Sensibilidad extrema al tacto'],
        comboPrincipal: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, fuera de un ataque agudo y con revisión profesional.', rationale: 'Curcumina como apoyo antioxidante general; no debe utilizarse para sustituir el tratamiento de un ataque de gota.' }
        ],
        comboSecundario: [
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente cuando un profesional lo indique después de evaluar orina, función renal y medicamentos. Con alimentos.', rationale: 'Citrato de potasio para indicaciones urinarias específicas; no reduce por sí solo el ácido úrico sanguíneo.' },
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día según tolerancia. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: 'Fibra prebiótica como apoyo a una alimentación saludable, sin afirmar que alcaliniza el cuerpo o trata la gota.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, si el profesional lo considera apropiado.', rationale: 'Omega-3 como apoyo nutricional antiinflamatorio general; no sustituye el tratamiento del ataque de gota ni reduce por sí solo el ácido úrico.' },
            { id: 178, serving: '1 cápsula (aprox. 500 mg)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Quercetina como opción complementaria: un ensayo pequeño de cuatro semanas observó una reducción modesta del urato en hombres con valores altos, pero no demuestra prevención ni tratamiento de ataques de gota.' },
            { id: 108, serving: '1 cápsula (1000 mg)', usage: 'Tomar esta porción al día con alimentos, solo tras descartar antecedente de cálculos o enfermedad renal.', rationale: 'Vitamina C como alternativa complementaria con efecto modesto sobre el urato en algunos ensayos. La presentación aporta más que los 500 mg estudiados y requiere revisión profesional; no sustituye fármacos reductores de urato.' }
        ],
        lifestyleTips: ['Limitar vísceras, porciones frecuentes de carne roja, ciertos mariscos, cerveza, destilados y bebidas azucaradas con fructosa.', 'Mantener hidratación regular, salvo que exista una restricción de líquidos indicada por cardiología o nefrología.', 'Evitar ayunos prolongados y pérdidas de peso rápidas; buscar una reducción gradual si hay sobrepeso.', 'Durante un ataque agudo no masajear la articulación ni intentar sustituir el tratamiento prescrito con suplementos.']
    },
    {
        id: 'resistencia_insulina',
        name: 'Resistencia a la Insulina y Pre-diabetes',
        emoji: '🩸',
        color: 'orange',
        description: 'La resistencia a la insulina y la prediabetes se confirman mediante evaluación clínica y análisis. Los productos mostrados son alternativas, no un combo para tomar completo, y deben revisarse si se utilizan medicamentos que reducen la glucosa.',
        symptoms: ['Aumento de peso, especialmente alrededor del abdomen', 'Apetito excesivo por carbohidratos o dulces', 'Oscurecimiento de la piel en cuello o axilas', 'Cansancio después de comer', 'Dificultad para perder peso'],
        comboPrincipal: [
            { id: 36, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: 'Berberina como alternativa complementaria para el metabolismo de la glucosa; revisar antidiabéticos y no combinar automáticamente con otros productos hipoglucemiantes.' },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Canela y cromo como alternativa de apoyo; vigilar glucosa y revisar enfermedad renal, hepática y medicamentos.' },
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Myo y D-Chiro Inositol como alternativa especialmente pertinente cuando también existe SOMP; revisar tratamientos que modifican la glucosa.' }
        ],
        comboSecundario: [
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo nutricional cardiovascular general, no como producto para bajar directamente la glucosa.' },
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ácido alfa lipoico como apoyo antioxidante, especialmente si existe neuropatía; no sustituye el control de glucosa.' },
            { id: 103, serving: '15 ml', usage: 'Tomar esta porción diluida en agua antes de una comida, según tolerancia.', rationale: 'Vinagre de manzana como opción alimentaria complementaria; evitar en gastritis, úlcera o reflujo y vigilar glucosa con medicamentos.' }
        ],
        lifestyleTips: ['Priorizar alimentos ricos en fibra y reducir bebidas azucaradas.', 'Hacer ejercicio aeróbico y de fuerza de forma regular.', 'Caminar después de las comidas cuando sea posible.', 'No indicar ayuno intermitente automáticamente; debe individualizarse según medicamentos, embarazo, edad y antecedentes.']
    },

    // ================================================================
    //  🟠 NARANJA: Metabolismo y Glucosa
    // ================================================================
    {
        id: 'diabetes_tipo2',
        name: 'Diabetes Tipo 2 (Apoyo Nutricional)',
        emoji: '🩺',
        color: 'orange',
        description: 'La diabetes tipo 2 requiere seguimiento médico, control de glucosa y tratamiento individualizado. Los productos mostrados son alternativas complementarias, no deben tomarse todos juntos y nunca sustituyen medicamentos.',
        symptoms: ['Sed excesiva y boca seca', 'Micción frecuente, incluso por la noche', 'Fatiga marcada después de las comidas', 'Visión borrosa', 'Cicatrización lenta de heridas', 'Hormigueo u hormigueo en manos o pies'],
        comboPrincipal: [
            { id: 36, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: 'Berberina como alternativa complementaria. Puede potenciar antidiabéticos y requiere revisión profesional y monitoreo de glucosa.' },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Canela y cromo como alternativa complementaria, con vigilancia de glucosa y revisión de función renal, hepática y medicamentos.' },
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Myo y D-Chiro Inositol como alternativa, particularmente si coexiste SOMP; no reemplaza el tratamiento de la diabetes.' }
        ],
        comboSecundario: [
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ácido alfa lipoico como apoyo complementario principalmente cuando existe neuropatía; no sustituye el control glucémico.' },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega-3 como apoyo al perfil de triglicéridos, revisando anticoagulantes.' },
            { id: 103, serving: '15 ml', usage: 'Tomar esta porción diluida en agua antes de una comida, según tolerancia.', rationale: 'Vinagre de manzana como opción alimentaria complementaria; evitar en gastritis, úlcera o reflujo y vigilar glucosa si se usan antidiabéticos.' }
        ],
        lifestyleTips: ['Priorizar alimentos de bajo índice glucémico y ricos en fibra.', 'Distribuir las comidas en porciones más pequeñas y frecuentes.', 'Realizar actividad física regular, especialmente caminar después de comer.', 'Dar seguimiento a los niveles de glucosa con supervisión médica.']
    },
    {
        id: 'sobrepeso_metabolico',
        name: 'Sobrepeso y Síndrome Metabólico',
        emoji: '⚖️',
        color: 'orange',
        description: 'El síndrome metabólico combina grasa abdominal, alteraciones de glucosa, presión y lípidos. El manejo se basa en alimentación, actividad física, sueño y tratamiento médico de cada factor; los productos son complementarios y no garantizan pérdida de peso.',
        symptoms: ['Acumulación de grasa principalmente en el abdomen', 'Fatiga después de comidas altas en carbohidratos', 'Antojos frecuentes de azúcar o harinas', 'Dificultad para bajar de peso a pesar de la dieta', 'Presión arterial en el límite alto'],
        comboPrincipal: [
            { id: 84, serving: '2 cápsulas (1.5 g)', usage: 'Tomar esta porción antes del desayuno y repetir antes de la comida (4 cápsulas al día); seguir estrictamente la etiqueta y no combinar con otras fuentes concentradas de cafeína.', rationale: 'Fórmula estimulante con L-carnitina, guaraná y cafeína. Evitar en hipertensión, enfermedad cardíaca o sensibilidad a estimulantes; no presentarla como quemador de grasa garantizado.' },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Canela y cromo como alternativa de apoyo metabólico, revisando glucosa, función renal o hepática y medicamentos.' },
            { id: 165, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día por la mañana.', rationale: 'Té verde como bebida sin azúcar y fuente de catequinas; su efecto sobre el peso es modesto.' }
        ],
        comboSecundario: [
            { id: 95, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Producto de apoyo comercial para control de peso, sin sustituir un plan alimentario ni prometer supresión clínicamente demostrada del apetito.' },
            { id: 25, serving: '10 g (2 cucharadas)', usage: 'Tomar esta porción al día. En ayunas o con alimentos.', rationale: 'Espirulina como complemento nutricional, no como producto adelgazante.' },
            { id: 146, serving: '1 sobre (3 g) por taza', usage: 'Preparar cada taza con 1 sobre (3 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día. Preferentemente por la noche.', rationale: 'Infusión sin azúcar como alternativa de bebida; no presentarla como tratamiento para bajar de peso.' }
        ],
        lifestyleTips: ['Priorizar proteína en cada comida para mayor saciedad.', 'Reducir azúcares refinados y harinas procesadas.', 'Incorporar entrenamiento de fuerza para mejorar la composición corporal.', 'Dormir al menos 7-8 horas, ya que la falta de sueño altera el apetito y el metabolismo.', 'Ver también la guía "Control de Peso" para fórmulas comerciales adicionales (Demograss, Goji Trim, D Master, etc.).']
    },
    {
        id: 'colesterol_trigliceridos',
        name: 'Colesterol y Triglicéridos Elevados',
        emoji: '🫀',
        color: 'orange',
        description: 'El colesterol LDL y los triglicéridos son alteraciones distintas y requieren análisis, cálculo de riesgo cardiovascular y seguimiento. Los suplementos son complementarios y no sustituyen estatinas, fibratos u omega-3 de prescripción cuando están indicados.',
        symptoms: ['Generalmente no presenta síntomas y se detecta en análisis de sangre', 'Fatiga o pesadez, especialmente en casos con hígado graso asociado', 'En casos avanzados, depósitos de grasa bajo la piel (xantomas)', 'Antecedentes familiares de enfermedad cardiovascular'],
        comboPrincipal: [
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Aporta 1.5 g de EPA+DHA como apoyo al consumo de omega-3. No equivale a la dosis de un medicamento de prescripción para triglicéridos altos.' },
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ajo negro como apoyo cardiovascular general; revisar anticoagulantes, antihipertensivos y antidiabéticos.' }
        ],
        comboSecundario: [
            { id: 136, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Coenzima Q10 como apoyo de energía celular; puede valorarse si existen síntomas musculares asociados a estatinas, sin suspenderlas.' },
            { id: 13, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Cúrcuma como apoyo antioxidante general, no como producto para bajar directamente LDL o triglicéridos.' },
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Lecitina y colina como apoyo nutricional al metabolismo de grasas; no sustituye el tratamiento de la dislipidemia.' },
            { id: 36, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Berberina como alternativa complementaria: los metaanálisis muestran reducciones modestas de LDL y triglicéridos, generalmente con 900-1500 mg al día. Esta presentación aporta una dosis menor; revisar interacciones con antidiabéticos, antihipertensivos, anticoagulantes y otros medicamentos.' }
        ],
        lifestyleTips: ['Reducir el consumo de grasas trans y azúcares refinados.', 'Aumentar el consumo de fibra soluble (avena, leguminosas, chía).', 'Realizar ejercicio cardiovascular de forma regular.', 'Dar seguimiento con análisis de sangre periódicos.']
    },

    // ================================================================
    //  🟣 PÚRPURA: Sistema Nervioso y Hormonal (cont.)
    // ================================================================
    {
        id: 'fatiga_cronica',
        name: 'Síndrome de Fatiga Crónica (SFC/EM)',
        emoji: '⚡',
        color: 'purple',
        description: 'Trastorno complejo caracterizado por fatiga extrema que empeora con el esfuerzo, acompañada de problemas cognitivos, dolor y sueño no reparador. Se asocia a disfunción mitocondrial y estrés oxidativo.',
        symptoms: ['Fatiga severa que dura más de 6 meses y no mejora con el descanso', 'Malestar post-esfuerzo', 'Sueño no reparador', 'Dificultades de memoria o concentración ("niebla mental")'],
        comboPrincipal: [
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAD+ para mejorar la producción de energía celular.' },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Coenzima Q10 activa para soporte mitocondrial.' },
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Malato clave en el ciclo de Krebs.' }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha regula el cortisol.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitaminas B como cofactores energéticos.' },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC aumenta el glutatión para combatir el estrés oxidativo.' }
        ],
        lifestyleTips: ['Gestión de la energía (pacing).', 'Sueño reparador.', 'Dieta antiinflamatoria y baja en carbohidratos refinados.']
    },

    // ================================================================
    //  🩷 ROSA: Salud Masculina y Femenina
    // ================================================================
    {
        id: 'caida_cabello_fem',
        name: 'Caída de Cabello (Femenina)',
        emoji: '👩',
        color: 'pink',
        description: 'La caída de cabello en mujeres (efluvio telógeno) suele ser multifactorial. Puede deberse a deficiencias nutricionales (falta de "ladrillos" como hierro, zinc, colágeno), desbalances hormonales (SOP, postparto, menopausia) o estrés crónico.',
        symptoms: ['Pérdida de densidad en toda la cabeza', 'Cabello más fino y quebradizo', 'Caída excesiva al cepillar o lavar'],
        comboPrincipal: [
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: 'Colágeno para la matriz estructural del folículo piloso.' },
            { id: 62, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo multivitamínico con Biotina y Selenio.' },
            { id: 107, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula específica para mujer con Colágeno y Maca.' }
        ],
        comboSecundario: [
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Aguaje con fitoestrógenos para desbalances androgénicos.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc clave para el ciclo folicular.' },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Espirulina rica en hierro y aminoácidos.' }
        ],
        lifestyleTips: ['Asegurar un consumo adecuado de proteína y hierro.', 'Masajear el cuero cabelludo.', 'Evitar peinados muy tirantes y el uso excesivo de calor.']
    },
    {
        id: 'caida_cabello_masc',
        name: 'Caída de Cabello (Masculina)',
        emoji: '👨',
        color: 'pink',
        description: 'La alopecia androgénica es causada por una sensibilidad genética a la hormona DHT (dihidrotestosterona). La enzima 5-alfa-reductasa convierte la testosterona en DHT, que miniaturiza los folículos pilosos.',
        symptoms: ['Retroceso de la línea del cabello (entradas)', 'Pérdida de cabello en la coronilla', 'Cabello progresivamente más fino'],
        comboPrincipal: [
            { id: 106, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ciruelo Africano y Semilla de Calabaza inhiben la 5-alfa-reductasa.' },
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: 'Colágeno para anclar y fortalecer los folículos.' },
            { id: 78, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Semilla de Calabaza, Zinc y Selenio para inhibir la DHT.' }
        ],
        comboSecundario: [
            { id: 143, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Optimiza los niveles de testosterona libre.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc como inhibidor de la 5-alfa-reductasa.' },
            { id: 105, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo de nutrientes para fortalecer el cabello.' }
        ],
        lifestyleTips: ['Considerar el uso de minoxidil tópico como complemento.', 'Dieta baja en azúcar para reducir la inflamación.', 'Manejar el estrés.']
    },
    {
        id: 'disfuncion_libido',
        name: 'Disfunción Eréctil y Baja Libido Masculina',
        emoji: '🌶️',
        color: 'pink',
        description: 'Dificultad para lograr o mantener una erección y/o una marcada disminución del deseo sexual. Puede originarse por factores circulatorios (falta de óxido nítrico), hormonales (baja testosterona), estrés o deficiencias nutricionales.',
        symptoms: ['Incapacidad para lograr o mantener una erección firme', 'Pérdida de interés o deseo en el sexo', 'Cansancio crónico y falta de vitalidad', 'Bajo rendimiento o pérdida de fuerza'],
        comboPrincipal: [
            { id: 88, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Maca Negra aumenta la libido y la energía sexual.' },
            { id: 83, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción antes del entrenamiento.', rationale: 'L-Arginina precursora del óxido nítrico.' },
            { id: 106, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: 'Vita Rx Testo apoya la producción de testosterona.' }
        ],
        comboSecundario: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción diaria. Con alimentos.', rationale: 'Zinc esencial para la producción de testosterona.' },
            { id: 33, serving: '2 cápsulas', usage: 'Tomar esta porción por la tarde/noche. Con alimentos.', rationale: 'Ashwagandha reduce el cortisol.' },
            { id: 143, serving: '1 cápsula', usage: 'Tomar esta porción diaria. Con alimentos.', rationale: 'Shilajit y Tongkat Ali potencian la vitalidad.' }
        ],
        lifestyleTips: ['Realizar entrenamiento de fuerza (pesas) y rutinas HIIT.', 'Controlar el peso y evitar el exceso de grasa abdominal.', 'Priorizar el descanso profundo (7-8 horas).', 'Reducir el consumo de alcohol y manejar el estrés.']
    },
    {
        id: 'prostata',
        name: 'Salud Prostática',
        emoji: '🚹',
        color: 'pink',
        description: 'La Hiperplasia Prostática Benigna (HPB) es el agrandamiento de la próstata, una glándula con forma de "dona" que rodea la uretra. Al crecer, "aprieta" la uretra y dificulta el vaciado de la vejiga.',
        symptoms: ['Necesidad de orinar con frecuencia, especialmente de noche', 'Dificultad para comenzar a orinar', 'Flujo de orina débil o interrumpido', 'Goteo al final de la micción'],
        comboPrincipal: [
            { id: 168, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula con Pygeum, licopeno y zinc para el bienestar prostático.' },
            { id: 78, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Semilla de Calabaza y Ciruelo Africano inhiben la 5-alfa-reductasa.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc crucial para la salud prostática.' }
        ],
        comboSecundario: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Previene infecciones urinarias.' },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Efecto diurético y antiinflamatorio.' },
            { id: 123, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 reduce la inflamación prostática.' }
        ],
        lifestyleTips: ['Reducir la ingesta de líquidos antes de dormir.', 'Limitar cafeína y alcohol.', 'Incluir semillas de calabaza en la dieta.']
    },
    {
        id: 'menopausia',
        name: 'Menopausia y Climaterio',
        emoji: '🩷',
        color: 'pink',
        description: 'La menopausia es el cese de la función ovárica, lo que provoca una caída drástica en la producción de estrógenos. Esta caída es la responsable de los síntomas como bochornos, insomnio y cambios de humor.',
        symptoms: ['Bochornos y sudores nocturnos', 'Insomnio y cambios de humor', 'Sequedad vaginal', 'Pérdida de densidad ósea'],
        comboPrincipal: [
            { id: 80, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Isoflavonas de Soya para aliviar los bochornos.' },
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Aguaje y Maca mejoran la libido y la energía.' },
            { id: 94, serving: '2-3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Magnesio para el insomnio y la ansiedad.' }
        ],
        comboSecundario: [
            { id: 137, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Shatavari como tónico femenino.' },
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: 'Colágeno para la piel y los huesos.' },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha regula el cortisol.' }
        ],
        lifestyleTips: ['Vestir en capas para manejar los bochornos.', 'Realizar ejercicio de fuerza para la salud ósea.', 'Incluir soya y linaza en la dieta.']
    },
    {
        id: 'irregularidad_menstrual',
        name: 'Irregularidad Menstrual y SPM',
        emoji: '🩷',
        color: 'pink',
        description: 'El ciclo menstrual es una danza delicada entre estrógeno y progesterona. El Síndrome Premenstrual (SPM) y la irregularidad a menudo ocurren por un desbalance, comúnmente un exceso relativo de estrógeno o una deficiencia de progesterona.',
        symptoms: ['Ciclos muy largos, cortos o ausentes', 'Cólicos dolorosos', 'Hinchazón, sensibilidad en los senos', 'Irritabilidad o tristeza premenstrual'],
        comboPrincipal: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Myo-Inositol para regular el ciclo menstrual.' },
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Aguaje y Maca para equilibrar el eje hormonal.' },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha regula el cortisol.' }
        ],
        comboSecundario: [
            { id: 94, serving: '2 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Magnesio para los cólicos y la irritabilidad.' },
            { id: 123, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 reduce la inflamación.' },
            { id: 107, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Multivitamínico completo para la mujer.' }
        ],
        lifestyleTips: ['Llevar un registro del ciclo menstrual.', 'Reducir cafeína y sal antes del periodo.', 'Aumentar el consumo de magnesio.']
    },
    {
        id: 'hipotiroidismo',
        name: 'Hipotiroidismo (Apoyo Funcional)',
        emoji: '🟣',
        color: 'purple',
        description: 'La tiroides es el "termostato" del cuerpo, regulando el metabolismo. En el hipotiroidismo, este termostato está bajo. La tiroides produce principalmente una hormona inactiva (T4), que debe convertirse en la forma activa (T3).',
        symptoms: ['Fatiga, aumento de peso inexplicable', 'Sensibilidad al frío', 'Piel seca, caída de cabello', 'Estreñimiento, niebla mental'],
        comboPrincipal: [
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: 'L-Tirosina precursora de hormonas tiroideas.' },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha mejora la función tiroidea.' },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Espirulina como fuente natural de yodo.' }
        ],
        comboSecundario: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc para convertir T4 en T3.' },
            { id: 142, serving: '1 cápsula', usage: 'Tomar esta porción al día.', rationale: 'Selenio cofactor para la deiodinasa.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitaminas B para el metabolismo energético.' }
        ],
        lifestyleTips: ['Evitar el consumo excesivo de vegetales crudos crucíferos.', 'Asegurar un buen aporte de yodo, selenio y zinc.', 'Consultar al médico para tratamiento hormonal.']
    },
    {
        id: 'hipertiroidismo',
        name: 'Hipertiroidismo (Apoyo Calmante)',
        emoji: '🟣',
        color: 'purple',
        description: 'En el hipertiroidismo, el "termostato" del cuerpo está atascado en "alto", creando un estado hipermetabólico que acelera todo el sistema y causa un gran estrés oxidativo.',
        symptoms: ['Pérdida de peso involuntaria, nerviosismo, ansiedad', 'Palpitaciones, temblores', 'Intolerancia al calor, sudoración excesiva'],
        comboPrincipal: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ashwagandha modula la respuesta al estrés.' },
            { id: 94, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Preferentemente antes de dormir.', rationale: 'Magnesio calma la hiperexcitabilidad neuromuscular.' },
            { id: 68, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'GABA contrarresta la ansiedad.' }
        ],
        comboSecundario: [
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos. Preferentemente antes de dormir.', rationale: 'L-Teanina induce calma sin sedación.' },
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAD+ apoya la función mitocondrial.' },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitaminas B para el estado hipermetabólico.' }
        ],
        lifestyleTips: ['Evitar estimulantes como la cafeína.', 'Practicar técnicas de relajación.', 'Dieta rica en antioxidantes.']
    },

    // ================================================================
    //  🔵 AZUL: Sistema Inmune y Respiratorio
    // ================================================================
    {
        id: 'alergias_respiratorias',
        name: 'Alergias Respiratorias',
        emoji: '🛡️',
        color: 'blue',
        description: 'En las alergias, el sistema inmune confunde una sustancia inofensiva (como el polen) con un invasor. Esto provoca que unas células llamadas mastocitos liberen una cascada de histamina, causando los síntomas típicos.',
        symptoms: ['Estornudos, picazón en nariz y ojos', 'Congestión o secreción nasal', 'Ojos llorosos y rojos', 'Tos seca'],
        comboPrincipal: [
            { id: 178, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'La Quercetina estabiliza los mastocitos y reduce la liberación de histamina (efecto "antihistamínico natural").' },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC como mucolítico para aliviar la congestión.' },
            { id: 61, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitamina C como antihistamínico natural.' }
        ],
        comboSecundario: [
            { id: 185, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'El Astrágalo modula la respuesta inmune, ayudando a equilibrar la reacción alérgica a largo plazo.' },
            { id: 188, serving: '20 gotas', usage: 'Tomar esta porción al día. Puede tomarse con o sin alimentos.', rationale: 'El propóleo y la equinácea ofrecen un apoyo rápido para el confort respiratorio y las defensas.' },
            { id: 184, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día como preventivo. Con alimentos.', rationale: 'Modula la respuesta inmune gracias a la Vitamina D3, Zinc y Saúco, ayudando a equilibrar la reacción alérgica.' },
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Preparar esta porción en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día, preferentemente después de una comida, según la ficha técnica.', rationale: 'Infusión con eucalipto y gordolobo.' },
            { id: 155, serving: '12 ml (1 cucharada)', usage: 'Tomar esta porción cada 4 horas. Puede tomarse con o sin alimentos.', rationale: 'Mezcla de extractos botánicos y miel.' }
        ],
        lifestyleTips: ['Usar purificadores de aire en casa.', 'Lavar la ropa de cama con agua caliente.', 'Mantener las ventanas cerradas en días de alto polen.']
    },
    {
        id: 'defensas_bajas',
        name: 'Inmunosupresión (Defensas Bajas)',
        emoji: '🛡️',
        color: 'blue',
        description: 'El sistema inmune es un ejército complejo que necesita nutrientes específicos para funcionar. La inmunosupresión ocurre cuando este ejército está debilitado por deficiencias nutricionales, estrés crónico o enfermedad.',
        symptoms: ['Infecciones frecuentes (gripes, resfriados)', 'Heridas que tardan en sanar', 'Fatiga constante', 'Aftas bucales recurrentes'],
        comboPrincipal: [
            { id: 187, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula integral con Calostro, Astrágalo y Reishi para una respuesta inmune robusta y regeneración celular.' },
            { id: 184, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula integral con Saúco, Equinácea, Ajo Negro, Vitamina C, D3 y Zinc para una respuesta inmune completa.' },
            { id: 186, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fuente natural de inmunoglobulinas y factores de crecimiento para fortalecer las defensas.' }
        ],
        comboSecundario: [
            { id: 185, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Adaptógeno que modula y fortalece la respuesta inmunológica.' },
            { id: 188, serving: '20 gotas', usage: 'Tomar esta porción al día. Puede tomarse con o sin alimentos.', rationale: 'Propóleo y Equinácea en formato líquido para un apoyo rápido y directo.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 como modulador clave del sistema inmune.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc para la función de los linfocitos T.' }
        ],
        lifestyleTips: ['Dormir 7-8 horas diarias.', 'Aumentar el consumo de frutas y verduras ricas en Vitamina C.', 'Reducir el estrés crónico.', 'Otros apoyos inmunológicos de la tienda: CAFÉ CON MORINGA (ID 38), MORINGA ORGÁNICA (ID 100), AJO NEGRO + MORINGA (ID 21), CUATECOMATE (ID 201) y HONIG ABAGREEN VERDE/ROJO (ID 155/156).']
    },
    {
        id: 'respiratorio',
        name: 'Afecciones Respiratorias (EPOC, Bronquitis, Asma)',
        emoji: '🛡️',
        color: 'blue',
        description: 'En muchas afecciones respiratorias, el problema es doble: una infección (viral o bacteriana) y una producción excesiva de moco espeso que obstruye las vías.',
        symptoms: ['Tos con flema', 'Dificultad para respirar o sibilancias', 'Presión en el pecho', 'Congestión'],
        comboPrincipal: [
            { id: 188, serving: '20 gotas', usage: 'Tomar esta porción al día. Puede tomarse con o sin alimentos.', rationale: 'Extracto líquido con Propóleo, Equinácea y Mentol para un alivio rápido y apoyo inmune directo.' },
            { id: 184, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día, con alimentos.', rationale: 'Fórmula completa con acción antiviral (Saúco), inmunoestimulante (Equinácea) y antimicrobiana (Ajo Negro).' },
            { id: 116, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC como mucolítico para romper el moco.' },
            { id: 16, serving: '15 gotas', usage: 'Tomar esta porción diluida, 2-3 veces al día. Con alimentos.', rationale: 'Carvacrol contra bacterias y virus respiratorios.' }
        ],
        comboSecundario: [
            { id: 185, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'El Astrágalo como adaptógeno apoya la vitalidad y la función inmune durante la convalecencia.' },
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Preparar esta porción en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día, preferentemente después de una comida, según la ficha técnica.', rationale: 'Infusión con eucalipto, gordolobo y propóleo.' },
            { id: 155, serving: '1 cucharada', usage: 'Tomar esta porción cada 4 horas. Puede tomarse con o sin alimentos.', rationale: 'Fórmula líquida con miel y propóleo.' },
            { id: 156, serving: '1-2 vasos dosificadores', usage: 'Tomar esta porción cada 4 horas. Puede tomarse con o sin alimentos.', rationale: 'Reforzado con Ajo Negro.' },
            { id: 179, serving: '15 ml', usage: 'Tomar esta porción, 3 veces al día. Puede tomarse con o sin alimentos.', rationale: 'Jarabe tradicional con aceite de hígado de bacalao (vitaminas A y D) y extractos de eucalipto, saúco y gordolobo, de uso familiar para el apoyo respiratorio.' }
        ],
        lifestyleTips: ['Usar un humidificador.', 'Beber líquidos calientes como té de jengibre.', 'Evitar la exposición a humo y otros irritantes.']
    },

    // ================================================================
    //  🟡 AMARILLO: Sistema Locomotor y Deportivo
    // ================================================================
    {
        id: 'desgaste_articular',
        name: 'Desgaste Articular y Artrosis',
        emoji: '💪',
        color: 'yellow',
        description: 'La artrosis es un proceso degenerativo donde el cartílago (la "almohadilla" que amortigua las articulaciones) se desgasta, causando dolor, rigidez e inflamación.',
        symptoms: ['Dolor en las articulaciones durante o después del movimiento', 'Rigidez matutina', 'Pérdida de flexibilidad', 'Sonido de "crujido" al mover la articulación'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: 'UC-II® y Boswellia reducen la inflamación articular.' },
            { id: 30, serving: '30 g', usage: 'Tomar esta porción al día. En ayunas o como reemplazo de comida.', rationale: 'Base nutricional con Omega-3 y antioxidantes.' },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con comidas.', rationale: 'Curcumina como potente antiinflamatorio.' }
        ],
        comboSecundario: [
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: 'Colágeno hidrolizado para el cartílago.' },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ácido Hialurónico para la lubricación articular.' },
            { id: 31, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Glucosamina/Condroitina/MSM para la reparación.' },
            { id: 157, serving: '1 cápsula', usage: 'Tomar esta porción al día. Después de las comidas.', rationale: 'Fórmula integral con Glucosamina y Cúrcuma.' },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel con salicilato de metilo (efecto rubefaciente) y Centella Asiática para alivio local del dolor articular, como complemento del apoyo oral.' }
        ],
        lifestyleTips: ['Mantener un peso saludable.', 'Ejercicios de bajo impacto como natación o ciclismo.', 'Aplicar calor o frío para aliviar el dolor.', 'Consumir TÉ JENGIBRE Y CÚRCUMA (ID 175).', 'Aplicar FIX UZEN (ID 167).', 'Otras opciones articulares de la tienda: CARTÍLAGO PRONAT (ID 204) y MOROIZY / MOROIZY GEL (ID 51/182).']
    },
    {
        id: 'osteoporosis',
        name: 'Osteoporosis y Salud Ósea',
        emoji: '💪',
        color: 'yellow',
        description: 'El hueso no es una roca inerte, sino un tejido vivo en constante remodelación, con células que construyen (osteoblastos) y otras que destruyen (osteoclastos). La osteoporosis ocurre cuando la destrucción supera a la construcción.',
        symptoms: ['Generalmente asintomático hasta una fractura por fragilidad', 'Pérdida de estatura', 'Postura encorvada', 'Dolor de espalda'],
        comboPrincipal: [
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 para la absorción de calcio.' },
            { id: 125, serving: '10-20 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: 'Colágeno para la matriz orgánica del hueso.' },
            { id: 154, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula con Calcio, Magnesio y D3.' }
        ],
        comboSecundario: [
            { id: 46, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Citrato de Magnesio biodisponible.' },
            { id: 91, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Mezcla de magnesios.' },
            { id: 126, serving: '11 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Colágeno con ácido hialurónico.' },
            { id: 110, serving: '1 perla', usage: 'Tomar esta porción al día. Durante la comida principal.', rationale: 'Vitamina E como antioxidante.' }
        ],
        lifestyleTips: ['Ejercicios de impacto o con peso (caminar, pesas).', 'Dieta rica en calcio (verdes, sardinas).', 'Evitar el tabaquismo y el exceso de alcohol.']
    },
    {
        id: 'recuperacion_deportiva',
        name: 'Recuperación y Rendimiento Deportivo',
        emoji: '🏋️',
        color: 'yellow',
        description: 'El crecimiento muscular no ocurre durante el entrenamiento, sino durante la recuperación. El ejercicio intenso causa micro-desgarros y agota las reservas de energía (glucógeno).',
        symptoms: ['Dolor muscular post-entrenamiento (DOMS)', 'Fatiga y disminución del rendimiento', 'Sensación de no recuperarse entre sesiones', 'Calambres o rigidez muscular'],
        comboPrincipal: [
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar esta porción después del entrenamiento, con alimentos.', rationale: 'Aislado de suero de rápida absorción.' },
            { id: 158, serving: '1 medida (39.5 g)', usage: 'Tomar esta porción después del entrenamiento.', rationale: 'Proteína vegana con 30g de proteína y BCAAs.' },
            { id: 7, serving: '5 g', usage: 'Tomar esta porción al día, después del entrenamiento.', rationale: 'Creatina satura los músculos de fosfocreatina.' },
            { id: 71, serving: '5-10 g', usage: 'Tomar esta porción después del entrenamiento o antes de dormir.', rationale: 'Glutamina reduce el dolor muscular (DOMS).' }
        ],
        comboSecundario: [
            { id: 83, serving: '3 cápsulas', usage: 'Tomar esta porción antes de entrenar.', rationale: 'Arginina mejora el flujo sanguíneo.' },
            { id: 92, serving: '2 cápsulas', usage: 'Tomar esta porción por la noche. Con alimentos.', rationale: 'Magnesio Malato previene calambres.' },
            { id: 123, serving: '3 softgels', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 reduce la inflamación.' },
            { id: 159, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Antes de cada alimento.', rationale: 'Multivitamínico para atletas.' }
        ],
        lifestyleTips: ['Consumir proteína y creatina dentro de los 45 minutos post-entreno.', 'Hidratación adecuada.', 'Dormir al menos 7-8 horas.', 'Otras proteínas y creatinas de la tienda (elegir según objetivo/sabor): WHEY HARDER (ID 112), WHEY CHOCONUEZ NANOFEAR (ID 111), MASS FEAR (ID 96, ganador de peso), BEEF FEAR (ID 35), ALBÚMINA PROWINNER (ID 24), VEGI PROTEIN NANO FEAR (ID 219), ISOFEAR (ID 220), PROTEÍNA VEGANA HABITS cacao/vainilla (ID 134/135), CREATINA NANO FEAR (ID 8), CREATINA REFRESHER (ID 191/209), CLA (ID 19) y L-CARNITINA/L-LISINA PROWINNER (ID 215/217).']
    },
    {
        id: 'neuropatia_periferica',
        name: 'Neuropatía Periférica',
        emoji: '⚡',
        color: 'purple',
        description: 'Daño a los nervios periféricos (común en diabetes prolongada, deficiencias vitamínicas o toxicidad), que interrumpe la correcta transmisión de señales de dolor y sensibilidad.',
        symptoms: ['Entumecimiento, hormigueo o sensación de "alfileres y agujas"', 'Dolor punzante, ardoroso o eléctrico', 'Sensibilidad extrema al tacto', 'Debilidad muscular', 'Falta de coordinación'],
        comboPrincipal: [
            { id: 17, serving: '1-2 cápsulas', usage: 'Tomar esta porción diariamente, con alimentos.', rationale: 'Ácido Alfa Lipoico para reducir el daño nervioso.' },
            { id: 5, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo B para la regeneración de la mielina.' },
            { id: 120, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Omega 3 para la salud de las membranas nerviosas.' }
        ],
        comboSecundario: [
            { id: 92, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Magnesio Malato mejora la conducción nerviosa.' },
            { id: 12, serving: '1 cápsula', usage: 'Tomar esta porción dos veces al día. Con alimentos que contengan grasas.', rationale: 'Cúrcuma, Jengibre y Moringa como antiinflamatorios.' },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción diarias. Con alimentos.', rationale: 'Melena de León estimula el Factor de Crecimiento Nervioso.' }
        ],
        lifestyleTips: ['Control estricto de glucosa en caso de diabetes.', 'Revisar los pies diariamente.', 'Masajear las extremidades suavemente.', 'Evitar el alcohol por completo.']
    },

    // ================================================================
    //  ⚪ GRIS: Condiciones Complejas
    // ================================================================
    {
        id: 'cancer_apoyo',
        name: 'Apoyo Coadyuvante en Cáncer',
        emoji: '🛡️',
        color: 'gray',
        description: 'Este protocolo NO trata el cáncer. Su objetivo es ser un apoyo coadyuvante para mejorar la calidad de vida del paciente durante los tratamientos convencionales (quimio/radioterapia). Se enfoca en: 1) Modular el sistema inmune, 2) Reducir la inflamación sistémica, 3) Proteger las células sanas, y 4) Combatir la fatiga. **Es IMPRESCINDIBLE contar con la aprobación del oncólogo tratante.**',
        symptoms: ['Fatiga extrema por quimio/radioterapia', 'Bajas defensas', 'Pérdida de masa muscular', 'Inflamación sistémica'],
        comboPrincipal: [
            { id: 187, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Fórmula integral con Calostro, Astrágalo y Reishi para modular la respuesta inmune y apoyar la vitalidad.' },
            { id: 124, serving: '2 tabletas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Guanábana, Reishi y Shiitake con actividad inmunomoduladora.' },
            { id: 54, serving: '3-6 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Curcumina reduce la inflamación sistémica.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 como potente modulador inmune.' }
        ],
        comboSecundario: [
            { id: 185, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'El Astrágalo es un adaptógeno clásico para fortalecer el sistema inmune durante tratamientos.' },
            { id: 186, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'El Calostro aporta inmunoglobulinas y factores de crecimiento para mantener las defensas y la integridad de los tejidos.' },
            { id: 98, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Melena de León protege de la neurotoxicidad.' },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Ubiquinol protege el corazón de la cardiotoxicidad.' },
            { id: 111, serving: '1-2 scoops', usage: 'Tomar esta porción al día. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: 'Proteína hidrolizada para combatir la sarcopenia.' }
        ],
        lifestyleTips: ['Mantener una dieta antiinflamatoria rica en vegetales y grasas saludables.', 'Priorizar el descanso y el manejo del estrés.', 'Comunicación constante con el equipo médico.']
    },
    {
        id: 'psoriasis_vitiligo',
        name: 'Psoriasis y Vitiligo (Apoyo Autoinmune)',
        emoji: '🛡️',
        color: 'gray',
        description: 'Tanto la psoriasis como el vitiligo son enfermedades autoinmunes donde el sistema inmune ataca por error a las células de la piel (queratinocitos en la psoriasis, melanocitos en el vitiligo).',
        symptoms: ['Placas rojas con escamas (Psoriasis)', 'Pérdida de pigmento en la piel (Vitiligo)', 'Picazón o ardor en las lesiones'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: 'Cúrcuma y Boswellia como potentes antiinflamatorios.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Vitamina D3 como inmunomodulador.' },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 reduce la inflamación sistémica.' }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Dosis más altas de Curcumina.' },
            { id: 129, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probióticos para equilibrar la microbiota.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc para la salud de la piel.' }
        ],
        lifestyleTips: ['Exposición solar moderada y controlada.', 'Manejo del estrés.', 'Evitar lesiones en la piel (efecto Koebner).']
    },
    {
        id: 'acne_espinillas',
        name: 'Acné y Espinillas',
        emoji: '🧡',
        color: 'gray',
        description: 'El acné es una enfermedad inflamatoria del folículo piloso. Se produce por una combinación de cuatro factores: 1) Exceso de producción de sebo, 2) Taponamiento del folículo, 3) Sobrecrecimiento de la bacteria P. acnes, y 4) Inflamación.',
        symptoms: ['Puntos negros, espinillas, pústulas', 'Piel grasa', 'Lesiones inflamatorias y dolorosas', 'Acné en mandíbula (sugiere causa hormonal)'],
        comboPrincipal: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc reduce la producción de sebo y la inflamación.' },
            { id: 48, serving: '15 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Clorofila con propiedades antiinflamatorias.' },
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probióticos para el eje intestino-piel.' }
        ],
        comboSecundario: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Inositol si el acné es de origen hormonal.' },
            { id: 43, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Apoyo detox general.' },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Espirulina con antioxidantes.' }
        ],
        lifestyleTips: ['Limpieza facial suave.', 'Evitar tocarse la cara.', 'Reducir el consumo de lácteos y alimentos de alto índice glucémico.']
    },

    // ================================================================
    //  🩷 NUEVAS GUÍAS AGREGADAS
    // ================================================================
    {
        id: 'somp',
        name: 'SOMP - Síndrome Ovárico Metabólico Poliendocrino (antes SOP)',
        emoji: '🌸',
        color: 'pink',
        description: 'El SOMP (antes conocido como Síndrome de Ovario Poliquístico o SOP) es un trastorno hormonal y metabólico que afecta la ovulación, el metabolismo de la glucosa y los niveles de andrógenos. Su nombre cambió porque no todas las pacientes desarrollan quistes visibles, y porque la condición impacta mucho más que la fertilidad: también influye en el peso, la piel, la energía y la salud mental. La resistencia a la insulina es uno de los factores centrales, por lo que el protocolo se enfoca en mejorar la sensibilidad a la insulina y regular el equilibrio hormonal.',
        symptoms: ['Ciclos menstruales irregulares o ausentes', 'Dificultad para bajar de peso', 'Acné y exceso de vello facial/corporal', 'Caída de cabello con patrón masculino', 'Resistencia a la insulina', 'Dificultad para lograr un embarazo'],
        comboPrincipal: [
            { id: 53, serving: '1 medida (4 g)', usage: 'Tomar esta porción al día disuelta en agua. En ayunas o entre comidas.', rationale: 'Myo-inositol y D-Chiro-inositol en proporción 40:1, el estándar de apoyo nutricional para mejorar la sensibilidad a la insulina y regular la ovulación.' },
            { id: 36, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: 'Berberina ayuda a mejorar el metabolismo de la glucosa y la resistencia a la insulina.' },
            { id: 109, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Vitamina D3, magnesio, K2 y zinc, frecuentemente deficientes en SOMP y necesarios para el equilibrio hormonal.' }
        ],
        comboSecundario: [
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC (N-Acetilcisteína) con evidencia de apoyo a la función ovulatoria y sensibilidad a la insulina.' },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción con alimentos.', rationale: 'Canela y cromo para el control de glucosa en sangre.' },
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probióticos para apoyar el eje intestino-hormonas.' }
        ],
        lifestyleTips: ['Priorizar ejercicio de fuerza y cardiovascular, que mejora la sensibilidad a la insulina.', 'Elegir alimentos de bajo índice glucémico y evitar azúcares refinados.', 'Manejar el estrés, ya que el cortisol elevado empeora la resistencia a la insulina.', 'Dar seguimiento con un especialista en endocrinología o ginecología, ya que este suplemento es de apoyo y no sustituye tratamiento médico.']
    },
    {
        id: 'urticaria',
        name: 'Urticaria',
        emoji: '🌡️',
        color: 'gray',
        description: 'La urticaria es una reacción de la piel caracterizada por ronchas rojas, elevadas y con comezón, causada por la liberación de histamina desde los mastocitos. Puede ser aguda (por alergia a un alimento, medicamento o picadura) o crónica (de causa a menudo desconocida, relacionada con el sistema inmune). El protocolo se enfoca en estabilizar la respuesta de histamina y calmar la inflamación de la piel.',
        symptoms: ['Ronchas rojas o pálidas elevadas (habones)', 'Comezón intensa', 'Ardor o sensación de piel caliente', 'Hinchazón (angioedema) en casos más severos', 'Lesiones que aparecen y desaparecen en horas'],
        comboPrincipal: [
            { id: 178, serving: '1 cápsula', usage: 'Tomar esta porción al día entre comidas.', rationale: 'La quercetina es un flavonoide con acción estabilizadora de mastocitos, considerado un "antihistamínico natural".' },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitamina C en dosis altas ayuda a degradar la histamina circulante.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Zinc para modular la respuesta inmune y apoyar la reparación de la piel.' }
        ],
        comboSecundario: [
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probióticos para equilibrar la microbiota, relacionada con la tolerancia inmune.' },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 para reducir la inflamación general.' },
            { id: 48, serving: '15 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Clorofila líquida con propiedades antiinflamatorias y depurativas.' }
        ],
        lifestyleTips: ['Identificar y evitar el desencadenante (alimento, medicamento, calor, estrés).', 'Evitar alimentos altos en histamina (embutidos, quesos añejados, alcohol, fermentados) si la urticaria es crónica.', 'Usar ropa holgada y evitar el agua muy caliente.', 'Acudir con un alergólogo si los episodios son frecuentes o severos, sobre todo si hay hinchazón en cara o garganta (urgencia médica).']
    },
    {
        id: 'espolon_fascitis',
        name: 'Espolón Calcáneo y Fascitis Plantar',
        emoji: '🦶',
        color: 'yellow',
        description: 'La fascitis plantar es la inflamación del tejido grueso (fascia) que conecta el talón con los dedos del pie, y es la causa más común del dolor de talón; el espolón calcáneo es un depósito de calcio que puede formarse como consecuencia de esta inflamación crónica. El protocolo combina antiinflamatorios naturales con nutrientes que apoyan la reparación del tejido conectivo.',
        symptoms: ['Dolor punzante en el talón, especialmente con los primeros pasos al despertar', 'Dolor que mejora con el movimiento y empeora tras estar mucho tiempo de pie', 'Rigidez en la planta del pie', 'Molestia al subir escaleras'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: 'Colágeno tipo II no desnaturalizado (UC-II®) con Boswellia y cúrcuma, para apoyar el tejido conectivo y reducir la inflamación.' },
            { id: 125, serving: '10 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Péptidos de colágeno hidrolizado, materia prima para la reparación de la fascia y los tejidos blandos.' },
            { id: 167, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: 'Gel tópico con árnica, glucosamina y mentol para alivio local del dolor e inflamación.' }
        ],
        comboSecundario: [
            { id: 31, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Glucosamina, condroitina y MSM para el soporte articular y del tejido conectivo.' },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: 'Magnesio para relajar la musculatura de la pantorrilla y el pie.' },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 como antiinflamatorio general.' }
        ],
        lifestyleTips: ['Estirar la fascia plantar y el tendón de Aquiles por las mañanas antes de dar el primer paso.', 'Usar calzado con buen soporte de arco y evitar andar descalzo en superficies duras.', 'Aplicar hielo local 10-15 min después de estar mucho tiempo de pie.', 'Bajar de peso si hay sobrepeso, ya que reduce la carga sobre el talón.']
    },
    {
        id: 'tdah',
        name: 'TDAH (Trastorno por Déficit de Atención e Hiperactividad)',
        emoji: '🎯',
        color: 'purple',
        description: 'El TDAH se relaciona con un desequilibrio en neurotransmisores clave como la dopamina y la noradrenalina, que regulan la atención, el control de impulsos y la actividad motora. Existe evidencia de que los ácidos grasos omega-3, el magnesio y el zinc apoyan la función cognitiva y pueden complementar el manejo integral de este trastorno.',
        symptoms: ['Dificultad para mantener la atención en tareas', 'Impulsividad', 'Hiperactividad o inquietud constante', 'Dificultad para organizarse y terminar tareas', 'Olvidos frecuentes en la vida diaria'],
        comboPrincipal: [
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Treonato de magnesio, con mayor capacidad de cruzar la barrera hematoencefálica, apoya la plasticidad sináptica y la concentración.' },
            { id: 82, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Krill Oil aporta DHA y EPA, fundamentales para la estructura y función de las neuronas.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'El zinc participa en la regulación de la dopamina y suele encontrarse deficiente en niños y adultos con TDAH.' }
        ],
        comboSecundario: [
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, preferentemente por la mañana.', rationale: 'L-Tirosina, precursora de dopamina y noradrenalina, para apoyar la atención.' },
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: 'Complejo B para el metabolismo energético neuronal.' },
            { id: 120, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Omega-3 adicional (EPA/DHA) para apoyo cognitivo.' }
        ],
        lifestyleTips: ['Mantener horarios y rutinas estructuradas y predecibles.', 'Reducir el consumo de azúcares refinados y colorantes artificiales.', 'Favorecer el ejercicio físico regular, que mejora la atención y el estado de ánimo.', 'Este protocolo es un apoyo nutricional complementario; el diagnóstico y tratamiento del TDAH deben ser guiados por un especialista.']
    },
    {
        id: 'intestino_irritable',
        name: 'Síndrome de Intestino Irritable (SII)',
        emoji: '🌀',
        color: 'green',
        description: 'El Síndrome de Intestino Irritable es un trastorno funcional del eje intestino-cerebro que causa dolor abdominal asociado a cambios en el hábito intestinal (diarrea, estreñimiento o ambos alternados), sin que existan lesiones visibles en el intestino. Se relaciona con hipersensibilidad visceral, alteraciones en la microbiota y sensibilidad al estrés. El protocolo busca calmar la mucosa intestinal, reequilibrar la microbiota y mejorar la digestión.',
        symptoms: ['Dolor o cólico abdominal que mejora al evacuar', 'Distensión e hinchazón abdominal', 'Diarrea, estreñimiento o alternancia entre ambos', 'Moco en las heces', 'Síntomas que empeoran con el estrés o ciertos alimentos'],
        comboPrincipal: [
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probióticos de alta concentración (100 billones UFC, 7 cepas) para reequilibrar la microbiota intestinal.' },
            { id: 246, serving: '1/2-1 scoop (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar con alimentos.', rationale: 'Fórmula con L-Glutamina, NAG y Zinc L-carnosina para apoyar la integridad de la mucosa intestinal. La Inulina aporta fibra prebiótica, por lo que debe introducirse gradualmente en personas sensibles a la fermentación.' },
            { id: 60, serving: '1-2 cápsulas', usage: 'Tomar esta porción con las comidas.', rationale: 'Complejo enzimático (papaína, bromelina, amilasa, lipasa) para mejorar la digestión y reducir la fermentación intestinal.' }
        ],
        comboSecundario: [
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: 'Fibra prebiótica de Zen Greens para regular el tránsito, introducir gradualmente según tolerancia.' },
            { id: 176, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza después de las comidas. Preferentemente por la noche.', rationale: 'Té de manzanilla con efecto antiespasmódico y calmante digestivo.' },
            { id: 81, serving: '1-2 cápsulas', usage: 'Tomar esta porción antes de comer.', rationale: 'Jengibre para reducir náusea, distensión y mejorar el vaciamiento gástrico.' }
        ],
        lifestyleTips: ['Identificar y llevar un diario de alimentos que disparan los síntomas (frecuentemente lácteos, gluten, alimentos altos en FODMAP).', 'Comer despacio y en porciones moderadas.', 'Practicar técnicas de manejo del estrés, ya que el eje intestino-cerebro es bidireccional.', 'Consultar a un gastroenterólogo para descartar otras causas antes de autodiagnosticarse.']
    },
    {
        id: 'celulitis',
        name: 'Celulitis (Piel de Naranja)',
        emoji: '🍊',
        color: 'gray',
        description: 'La celulitis es un cambio en la textura de la piel causado por la forma en que la grasa subcutánea empuja contra el tejido conectivo, muchas veces influenciado por factores hormonales, circulatorios y de retención de líquidos. El protocolo se enfoca en fortalecer el tejido conectivo, mejorar la microcirculación y apoyar el drenaje de líquidos.',
        symptoms: ['Piel con apariencia de hoyuelos ("piel de naranja")', 'Mayor visibilidad en glúteos, muslos y abdomen', 'Sensación de piel menos firme', 'Puede acompañarse de retención de líquidos'],
        comboPrincipal: [
            { id: 126, serving: '11 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Péptidos de colágeno con ácido hialurónico para fortalecer el tejido conectivo y mejorar la firmeza de la piel.' },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina con masaje 2 veces al día.', rationale: 'Gel corporal con castaño de indias, hamamelis y centella asiática para mejorar la microcirculación local.' },
            { id: 165, serving: '1 sobre (2 g) por taza', usage: 'Preparar esta porción en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día, preferentemente por la mañana, según la ficha técnica.', rationale: 'Té verde, con efecto termogénico y antioxidante que apoya el metabolismo de grasas.' }
        ],
        comboSecundario: [
            { id: 104, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: 'Vinagre de sidra de manzana para apoyo metabólico.' },
            { id: 215, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'L-Carnitina para el metabolismo energético de las grasas.' },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Colágeno con ácido hialurónico, omega-3 y arándano para la salud integral de la piel.' }
        ],
        lifestyleTips: ['Realizar ejercicio de fuerza para tonificar y mejorar la estructura del tejido.', 'Hidratarse adecuadamente y reducir el consumo de sodio para disminuir la retención de líquidos.', 'Cepillado en seco o masaje para estimular la circulación local.', 'Evitar el sedentarismo prolongado (estar sentado o de pie por periodos largos sin moverse).']
    },
    {
        id: 'epilepsia',
        name: 'Epilepsia (Apoyo Nutricional)',
        emoji: '⚡',
        color: 'purple',
        description: 'La epilepsia es un trastorno neurológico caracterizado por crisis recurrentes debidas a una actividad eléctrica anormal en el cerebro. El manejo médico con anticonvulsivos es indispensable y este protocolo es únicamente un apoyo nutricional general para la salud neurológica, nunca un sustituto del tratamiento. Se enfoca en nutrientes con papel documentado en la excitabilidad neuronal y la salud mitocondrial.',
        symptoms: ['Crisis convulsivas recurrentes', 'Episodios de ausencia o desconexión breve', 'Confusión temporal tras una crisis', 'Movimientos espasmódicos incontrolables'],
        comboPrincipal: [
            { id: 181, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Magnesio bisglicinato, mineral que participa en la regulación de la excitabilidad neuronal (consultar a su médico por posible interacción con algunos anticonvulsivos).' },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 (EPA/DHA) para apoyar la salud de las membranas neuronales.' },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Vitamina D3, frecuentemente deficiente en personas bajo tratamiento anticonvulsivo prolongado.' }
        ],
        comboSecundario: [
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: 'Complejo B para el metabolismo energético neuronal.' },
            { id: 116, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAC como precursor de glutatión, el principal antioxidante cerebral.' },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos únicamente si el neurólogo lo autoriza.', rationale: 'Ubiquinol como apoyo de energía celular; revisar siempre interacciones con anticonvulsivos.' }
        ],
        lifestyleTips: ['Dormir horarios regulares y evitar la privación de sueño, un desencadenante frecuente de crisis.', 'Evitar el consumo de alcohol y manejar el estrés.', 'Nunca suspender ni modificar la medicación anticonvulsiva sin indicación médica.', 'Todo suplemento debe ser revisado previamente con el neurólogo tratante por el riesgo de interacciones con los medicamentos.']
    },
    {
        id: 'anemia',
        name: 'Anemia (Apoyo Nutricional)',
        emoji: '🩸',
        color: 'red',
        description: 'La anemia ocurre cuando el cuerpo no tiene suficientes glóbulos rojos sanos para transportar oxígeno de forma adecuada, frecuentemente por deficiencia de hierro, vitamina B12 o ácido fólico. Este protocolo aporta nutrientes que participan en la formación de glóbulos rojos y mejoran la absorción de hierro; es importante identificar y tratar la causa de fondo con un médico, especialmente si se requiere suplementación de hierro.',
        symptoms: ['Cansancio y debilidad', 'Piel pálida', 'Dificultad para respirar con esfuerzos leves', 'Mareo o dolor de cabeza', 'Manos y pies fríos', 'Uñas quebradizas'],
        comboPrincipal: [
            { id: 225, serving: '1 tableta', usage: 'Tomar esta porción sublingual al día. Puede tomarse en cualquier momento del día.', rationale: 'Vitamina B12 en alta dosis, esencial para la formación de glóbulos rojos, especialmente relevante en anemia perniciosa o por dietas vegetarianas/veganas.' },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día junto con la comida principal.', rationale: 'Vitamina C mejora significativamente la absorción del hierro de los alimentos.' },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Espirulina, fuente natural de hierro, proteína y vitaminas del complejo B.' }
        ],
        comboSecundario: [
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Complejo B con ácido fólico, necesario para la producción de glóbulos rojos.' },
            { id: 205, serving: '2 tabletas', usage: 'Tomar esta porción al día. Antes de cada comida.', rationale: 'Levadura de cerveza, rica en proteína, fósforo y vitaminas del complejo B.' },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si existe deficiencia o indicación profesional. Con alimentos.', rationale: 'Zinc como apoyo nutricional cuando existe insuficiencia documentada; no sustituye identificar si la anemia es por hierro, B12, folato, sangrado u otra causa.' }
        ],
        lifestyleTips: ['Consumir alimentos ricos en hierro (carnes rojas, leguminosas, verduras de hoja verde) junto con fuentes de vitamina C.', 'Evitar el café y el té junto con las comidas principales, ya que reducen la absorción de hierro.', 'Es fundamental que un médico identifique la causa de la anemia (esta tienda no cuenta con un suplemento de hierro dedicado); si se requiere hierro, debe indicarse y dosificarse profesionalmente.']
    },
    {
        id: 'parkinson',
        name: 'Parkinson (Apoyo Nutricional)',
        emoji: '🧠',
        color: 'gray',
        description: 'La enfermedad de Parkinson es un trastorno neurodegenerativo progresivo asociado a la pérdida de neuronas productoras de dopamina y a estrés oxidativo mitocondrial. Este protocolo es un apoyo nutricional complementario al tratamiento neurológico, enfocado en nutrientes con papel documentado en la función mitocondrial y la protección antioxidante del sistema nervioso.',
        symptoms: ['Temblor en reposo', 'Rigidez muscular', 'Lentitud de movimientos (bradicinesia)', 'Problemas de equilibrio y postura', 'Cambios en la escritura y el habla'],
        comboPrincipal: [
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Ubiquinol (CoQ10 activo), estudiado por su papel en la función mitocondrial neuronal.' },
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'NAD+ y resveratrol para apoyar la energía celular y la longevidad neuronal.' },
            { id: 72, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Glutatión, el principal antioxidante celular, para la protección frente al estrés oxidativo.' }
        ],
        comboSecundario: [
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Melena de León para apoyar el factor de crecimiento nervioso (NGF).' },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: 'Omega-3 para la salud de las membranas neuronales.' },
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Treonato de magnesio para la función cognitiva.' }
        ],
        lifestyleTips: ['El ejercicio regular (incluyendo equilibrio y fuerza) ha mostrado ser una de las intervenciones más importantes para la calidad de vida.', 'Fisioterapia y terapia ocupacional como parte del manejo integral.', 'Mantener una dieta rica en antioxidantes (frutas y verduras de colores variados).', 'Este protocolo es únicamente de apoyo; el seguimiento debe ser siempre con el neurólogo tratante.']
    },
    {
        id: 'intestino_permeable',
        name: 'Intestino Permeable (Síndrome de Intestino Permeable)',
        emoji: '🛡️',
        color: 'green',
        description: 'La permeabilidad intestinal puede alterarse en algunas enfermedades, pero "síndrome de intestino permeable" no debe utilizarse como diagnóstico independiente basado únicamente en síntomas. Esta guía ofrece apoyo digestivo general después de descartar causas médicas.',
        symptoms: ['Fatiga crónica', 'Problemas digestivos (hinchazón, gases, diarrea)', 'Alergias e intolerancias alimentarias', 'Dolores articulares', 'Niebla mental', 'Erupciones cutáneas (eczema, acné)'],
        comboPrincipal: [
            { id: 246, serving: '1/2-1 scoop (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar con alimentos.', rationale: 'L-Glutamina, NAG y Zinc L-carnosina como apoyo nutricional a la mucosa; la inulina debe introducirse gradualmente si produce gases o distensión.' },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Probióticos como apoyo complementario de la microbiota. No es necesario combinar dos probióticos de alta concentración.' }
        ],
        comboSecundario: [
            { id: 151, serving: '1/2-1 medida (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar en ayunas o con el desayuno, preferentemente por la mañana.', rationale: 'Zen Greens como alternativa prebiótica gradual, no para combinar inicialmente con L-GLUTAMINE + NAG si existe sensibilidad a fibras fermentables.' },
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Zinc L-Carnosine como alternativa específica al producto 246. No duplicar ambas fuentes de zinc L-carnosina de rutina.' },
            { id: 9, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: 'Botánicos de uso tradicional como apoyo digestivo, sin prometer reparación o cicatrización clínica.' },
            { id: 242, serving: '1/2-1 cucharada (aprox. 3.75-7.5 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Puede tomarse en cualquier momento del día.', rationale: 'Prebian como alternativa de fibra prebiótica, no para sumarlo de inicio a Zen Greens o a otros productos con inulina. La evidencia sobre mejoría directa de la permeabilidad intestinal es inconsistente; suspender o reducir si aumenta gases, dolor o distensión.' }
        ],
        lifestyleTips: ['No retirar gluten o lácteos de forma general: primero descartar enfermedad celíaca, alergia u otra causa con un profesional.', 'Llevar un registro de alimentos y síntomas para identificar desencadenantes reales sin dietas excesivamente restrictivas.', 'Introducir fibra, prebóticos y fermentados de forma gradual; reducirlos si aumentan dolor, gases o distensión.', 'Priorizar sueño regular, actividad física tolerada y manejo del estrés.', 'Buscar valoración ante pérdida de peso involuntaria, anemia, sangre en heces, fiebre, diarrea nocturna o dolor persistente.']
    },
    {
        id: 'control_peso',
        name: 'Control de Peso',
        emoji: '⚖️',
        color: 'orange',
        description: 'Guía de referencia para las fórmulas comerciales de control de peso de la tienda (mezclas de fibra, plantas depurativas y termogénicos). A diferencia de la guía de "Sobrepeso y Síndrome Metabólico" (enfocada en resistencia a la insulina), esta guía agrupa las fórmulas todo-en-uno pensadas para acompañar una dieta de reducción de peso.',
        symptoms: ['Dificultad para bajar de peso con dieta y ejercicio', 'Retención de líquidos', 'Digestión lenta o estreñimiento asociado', 'Necesidad de apoyo para controlar el apetito'],
        comboPrincipal: [
            { id: 196, serving: '1 cápsula', usage: 'Tomar esta porción al día. En ayunas.', rationale: 'Demograss Premier combina 10 botánicos (matake, cayena, cúrcuma, espirulina, arándano) como fórmula integral de control de peso.' },
            { id: 59, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'DT Green combina té, papaya, toronja, malva y espirulina para apoyo depurativo y digestivo.' },
            { id: 199, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Después de las comidas. Preferentemente por la mañana.', rationale: 'D Master Platinum con gayuba, té verde, uva y jamaica para apoyo diurético y metabólico.' }
        ],
        comboSecundario: [
            { id: 56, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. En ayunas.', rationale: 'Demograss Clásico, la fórmula original con 9 ingredientes de fibra.' },
            { id: 76, serving: '1 tableta (300 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Green LX con ciruela, tamarindo y sábila para apoyar el tránsito intestinal.' },
            { id: 132, serving: '1 cápsula (750 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Probity con acetil L-carnitina y té verde para apoyo metabólico.' },
            { id: 42, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Antes de las comidas.', rationale: 'Caralluma fimbriata, tradicionalmente usada para el control del apetito.' }
        ],
        lifestyleTips: ['Estas fórmulas son un apoyo complementario; el resultado depende principalmente de la dieta y actividad física.', 'No combinar varias fórmulas laxantes/depurativas al mismo tiempo para evitar molestias digestivas.', 'Otras variantes disponibles en tienda: DEMOGRASS PLUS (ID 57), DEMOGRASS LX+ (ID 190), GOJI TRIM (ID 73), GOJIZEN MAX (ID 75), SUKUNAI KIROS MAX (ID 221), PIÑALINAZA (ID 222), DYNEEM (ID 195), BPASS (ID 37), XIMO (ID 114), TÉ PIÑALIM / TÉ PIÑALIM PLUS (ID 146/197) y CAFÉ CON MORINGA (ID 38).', 'Si hay alguna condición médica (hipertensión, diabetes, embarazo), consultar antes de usar fórmulas termogénicas o diuréticas.']
    },
    {
        id: 'piel_antienvejecimiento',
        name: 'Piel y Antienvejecimiento',
        emoji: '✨',
        color: 'gray',
        description: 'Con la edad y la exposición solar, la piel pierde colágeno y capacidad antioxidante, lo que se traduce en flacidez, arrugas y pérdida de firmeza. Este protocolo se enfoca en aportar la materia prima para regenerar el colágeno y proteger la piel del daño oxidativo.',
        symptoms: ['Piel flácida o con menor firmeza', 'Arrugas y líneas de expresión', 'Piel opaca o deshidratada', 'Uñas y cabello débiles'],
        comboPrincipal: [
            { id: 3, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: 'Colágeno hidrolizado con vitamina C y biotina, materia prima para la piel, cabello y uñas.' },
            { id: 34, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: 'Astaxantina, uno de los antioxidantes más potentes conocidos, protege la piel del fotoenvejecimiento.' },
            { id: 110, serving: '1 perla', usage: 'Tomar esta porción al día. Durante la comida principal.', rationale: 'Vitamina E en alta concentración para la protección antioxidante de la piel.' }
        ],
        comboSecundario: [
            { id: 62, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Eveaux combina colágeno, queratina, vitaminas y minerales para el cuidado integral de piel, cabello y uñas.' },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Ácido hialurónico con colágeno para la hidratación profunda de la piel.' },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: 'Vitamina C, cofactor esencial para la síntesis de colágeno.' }
        ],
        lifestyleTips: ['Usar protector solar diario, el principal factor de envejecimiento prematuro evitable.', 'Mantener buena hidratación con agua simple.', 'Dormir bien, ya que la piel se regenera principalmente durante el sueño.', 'LEUCAPS (ID 86), rico en luteína y zeaxantina, también aporta antioxidantes para la piel.']
    }
];
