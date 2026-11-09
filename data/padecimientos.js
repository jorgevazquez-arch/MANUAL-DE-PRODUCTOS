
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
        description: "La ansiedad y el estrés pueden causar preocupación, tensión y dificultad para descansar. Las opciones de esta guía buscan acompañar la relajación y el descanso, según lo que necesite cada persona.",
        symptoms: ['Preocupación excesiva y pensamientos recurrentes', 'Tensión muscular', 'Irritabilidad', 'Dificultad para concentrarse', 'Palpitaciones', 'Problemas para dormir'],
        comboPrincipal: [
            { id: 163, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ashwagandha y teanina para acompañar la relajación, con magnesio para el buen funcionamiento de los nervios." },
            { id: 68, serving: '2-3 cápsulas', usage: 'Tomar esta porción repartidas durante el día. Con alimentos.', rationale: "Se utiliza como complemento de una rutina de calma; su beneficio al tomarlo puede variar." }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: "La ashwagandha puede acompañar la respuesta al estrés cotidiano." },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "Magnesio con plantas para acompañar la relajación antes de dormir." },
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos. Preferentemente antes de dormir.', rationale: "Teanina, azahar y triptófano para acompañar calma y descanso; puede causar somnolencia." },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Se estudia para el bienestar mental; no se ha confirmado que esta fórmula trate ansiedad." },
            { id: 271, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana o al mediodía con alimentos. Consultar antes si toma antidepresivos o sedantes.', rationale: "Albizia, bacopa y teanina para acompañar calma y concentración. Los beneficios de esta fórmula completa aún no se han confirmado en estudios con personas." }
        ],
        lifestyleTips: ['Practicar técnicas de respiración profunda.', 'Limitar el consumo de cafeína y estimulantes.', 'Realizar ejercicio físico regularmente.', 'Consumir infusiones calmantes como TÉ 7 AZAHARES o TÉ MANZANILLA.']
    },
    {
        id: 'fatiga_burnout',
        name: 'Fatiga Crónica y Burnout',
        emoji: '⚡',
        color: 'purple',
        description: "El estrés prolongado puede dejar a la persona agotada física y mentalmente. El apoyo se centra en descansar mejor, recuperar hábitos de alimentación y valorar qué nutrientes o fórmulas pueden acompañar su bienestar.",
        symptoms: ['Cansancio extremo que no mejora con el descanso', 'Dificultad para concentrarse o "niebla mental"', 'Irritabilidad o cambios de humor', 'Problemas para dormir a pesar del cansancio', 'Pérdida de motivación o interés'],
        comboPrincipal: [
            { id: 58, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La rhodiola se utiliza para acompañar estrés y cansancio; la respuesta varía según la persona." },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La ashwagandha puede acompañar la relajación y el descanso durante etapas de estrés." },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La melena de león se estudia como complemento del cuidado de memoria y concentración." }
        ],
        comboSecundario: [
            { id: 109, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos grasos.', rationale: "La vitamina D y el magnesio apoyan músculos y huesos; valorar si hay una necesidad nutricional." },
            { id: 5, serving: '3 cápsulas', usage: 'Tomar esta porción por la mañana con alimentos.', rationale: "Las vitaminas B ayudan a aprovechar la energía de los alimentos." },
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El NAD participa en el uso de energía y el resveratrol contiene antioxidantes; no se ha demostrado que esta mezcla resuelva el agotamiento." },
            { id: 181, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya músculos y nervios y ayuda a reducir el cansancio cuando falta este mineral." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en la producción de energía del cuerpo; no se ha demostrado que esta fórmula trate el agotamiento." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "El cromo participa en el aprovechamiento de nutrientes; no prometer que esta mezcla resuelve el agotamiento." },
            { id: 272, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana o al mediodía con alimentos; evitarla cerca de la hora de dormir. Consultar antes si toma antidepresivos o antihipertensivos.', rationale: "Rhodiola y teanina para acompañar estrés y cansancio mental. Los estudios de otros extractos no confirman el mismo beneficio de esta fórmula." }
        ],
        lifestyleTips: ['Priorizar el descanso y el sueño de calidad.', 'Establecer límites claros entre el trabajo y la vida personal.', 'Incorporar técnicas de relajación como meditación, yoga o mindfulness.', 'Mantener una dieta rica en nutrientes.']
    },
    {
        id: 'insomnio',
        name: 'Insomnio y Despertares Nocturnos',
        emoji: '🌙',
        color: 'purple',
        description: "Dormir mal puede significar tardar en conciliar el sueño, despertar varias veces o levantarse sin descanso. Las opciones buscan acompañar la relajación y la rutina nocturna; conviene identificar primero qué está afectando el sueño.",
        symptoms: ['Dificultad para conciliar el sueño', 'Despertarse varias veces en la noche', 'Despertar muy temprano y no poder volver a dormir', 'Sensación de no haber descansado'],
        comboPrincipal: [
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción 1h antes de dormir.', rationale: "Magnesio con teanina, manzanilla y otros ingredientes para acompañar la relajación antes de dormir." },
            { id: 68, serving: '2 cápsulas', usage: 'Tomar esta porción 1h antes de dormir. Con alimentos.', rationale: "Se utiliza como complemento de una rutina de calma; su efecto sobre el sueño puede variar." },
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción 1h antes de dormir. Con alimentos.', rationale: "Triptófano con teanina y azahar para acompañar la relajación y el descanso." }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción con la cena.', rationale: "La ashwagandha puede acompañar la relajación en etapas de estrés." },
            { id: 163, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ashwagandha y teanina para acompañar la calma, con magnesio para los nervios." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: "Las vitaminas B apoyan los nervios; no funcionan como producto para dormir." }
        ],
        lifestyleTips: ['Evitar pantallas (luz azul) al menos 1 hora antes de dormir.', 'Mantener un horario de sueño regular.', 'Tomar una infusión relajante como TÉ 7 AZAHARES o TÉ MANZANILLA.']
    },
    {
        id: 'memoria_enfoque',
        name: 'Memoria y Enfoque Mental',
        emoji: '🧠',
        color: 'purple',
        description: "El descanso, la alimentación y el estrés influyen en la atención y la memoria. Esta guía reúne opciones de apoyo nutricional para el trabajo mental, sin prometer una mejora de memoria en todas las personas.",
        symptoms: ['Dificultad para recordar información', 'Niebla mental o falta de claridad', 'Problemas para concentrarse en tareas', 'Olvidos frecuentes'],
        comboPrincipal: [
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya los nervios. No se ha confirmado que la cantidad y mezcla de esta presentación mejoren la memoria." },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La melena de león se estudia para memoria y concentración; no afirmar que genera o regenera neuronas." },
            { id: 70, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ginkgo como apoyo a memoria y concentración, con resultados variables; revisar medicamentos y riesgo de sangrado." }
        ],
        comboSecundario: [
            { id: 82, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Aporta DHA, una grasa omega 3 importante para el cerebro." },
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, preferentemente por la mañana.', rationale: "La tirosina participa en procesos relacionados con atención; no garantiza mejorar la concentración." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en la producción de energía, sin beneficio específico demostrado de esta fórmula para memoria." },
            { id: 271, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana o al mediodía con alimentos. Consultar antes si toma antidepresivos o sedantes.', rationale: "Bacopa y teanina para acompañar memoria y concentración. Los extractos estudiados son diferentes de esta fórmula." },
            { id: 272, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana o al mediodía con alimentos; evitarla cerca de la hora de dormir. Consultar antes si toma antidepresivos o antihipertensivos.', rationale: "Rhodiola y teanina para acompañar estrés y cansancio mental; la mejora de concentración con esta mezcla no está confirmada." }
        ],
        lifestyleTips: ['Realizar ejercicios mentales (crucigramas, aprender algo nuevo).', 'Dormir lo suficiente para la consolidación de la memoria.', 'Dieta rica en Omega 3 y antioxidantes.']
    },
    {
        id: 'migrana',
        name: 'Migraña (Apoyo Nutricional)',
        emoji: '🤕',
        color: 'purple',
        description: "La migraña puede causar dolor de cabeza repetido, náusea y molestia con la luz o el ruido. Algunas opciones nutricionales pueden complementar el plan indicado para prevenir episodios; no son un alivio inmediato para una crisis.",
        symptoms: ['Dolor de cabeza pulsátil, usualmente en un lado', 'Sensibilidad a la luz (fotofobia) y al sonido (fonofobia)', 'Náuseas o vómitos', 'Aura visual (destellos de luz, puntos ciegos)'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya músculos y nervios. El uso para migraña se valora según cantidad e indicación profesional." },
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya los nervios; no se ha demostrado que esta fórmula prevenga o alivie las crisis de migraña." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Las vitaminas B ayudan a aprovechar energía; su presencia no equivale a las cantidades estudiadas para migraña." }
        ],
        comboSecundario: [
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en la producción de energía; valorar como complemento sin prometer alivio de una crisis." },
            { id: 70, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El ginkgo se utiliza para memoria y circulación; no tiene un beneficio establecido para tratar migraña." },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para complementar alimentación y cuidado del corazón; no se presenta como tratamiento de migraña." }
        ],
        lifestyleTips: ['Identificar y evitar desencadenantes (alimentos, luz, olores).', 'Mantener horarios regulares de sueño y comidas.', 'Hidratación adecuada.']
    },
    {
        id: 'fibromialgia',
        name: 'Fibromialgia',
        emoji: '💪',
        color: 'purple',
        description: "La fibromialgia puede causar dolor en distintas partes del cuerpo, cansancio y sueño poco reparador. El apoyo nutricional acompaña el cuidado del descanso, la alimentación y el movimiento que indique el profesional.",
        symptoms: ['Dolor muscular y articular generalizado', 'Fatiga crónica que no mejora con el descanso', 'Problemas de sueño (insomnio, sueño no reparador)', 'Niebla mental ("fibro fog")', 'Sensibilidad al tacto'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya músculos y ayuda con el cansancio cuando falta; no es tratamiento específico de fibromialgia." },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en la producción de energía; el beneficio de esta fórmula sobre fibromialgia no está confirmado." },
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: "Ingredientes para el cuidado articular; no sustituyen el manejo del dolor de fibromialgia." }
        ],
        comboSecundario: [
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "Puede acompañar relajación y descanso; evitar sumar otras fórmulas para dormir sin revisión." },
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El ácido alfa lipoico participa en el cuidado de las células; valorar su utilidad para dolor con el profesional." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Las vitaminas B ayudan a aprovechar la energía de los alimentos." }
        ],
        lifestyleTips: ['Realizar ejercicio de bajo impacto como caminar, nadar o yoga.', 'Practicar técnicas de manejo del estrés.', 'Mantener una rutina de sueño regular.', 'Utilizar FIX UZEN para masajear los puntos de dolor.']
    },
    {
        id: 'ciatica',
        name: 'Dolor de Ciática',
        emoji: '🦵',
        color: 'yellow',
        description: "La ciática es un dolor que puede bajar desde la espalda o el glúteo hacia una pierna por irritación de un nervio. Las opciones de apoyo pueden acompañar el bienestar muscular, pero es necesario conocer la causa del dolor.",
        symptoms: ['Dolor punzante que se irradia desde la espalda baja hacia una pierna', 'Hormigueo o entumecimiento en la pierna o pie', 'Debilidad muscular', 'Dolor que empeora al sentarse'],
        comboPrincipal: [
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya los músculos; no libera un nervio comprimido ni corrige la causa de ciática." },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Cúrcuma y vitamina C para el cuidado de las células; no se ha establecido que esta fórmula reduzca presión sobre el nervio." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Las vitaminas B apoyan los nervios, sin prometer regenerarlos." }
        ],
        comboSecundario: [
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Puede valorarse como complemento ante molestias de los nervios; no corrige su compresión." },
            { id: 91, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio complementa el cuidado muscular y de los nervios." },
            { id: 167, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje y confort local. Debilidad, pérdida de sensibilidad o problemas para controlar orina o evacuación requieren atención médica." }
        ],
        lifestyleTips: ['Realizar estiramientos específicos para el piramidal y la espalda baja.', 'Evitar estar sentado por períodos prolongados.', 'Aplicar calor en la zona lumbar.', 'Masajear la zona con FIX UZEN.']
    },
    {
        id: 'depresion_apoyo',
        name: 'Apoyo en Depresión y Bajo Ánimo',
        emoji: '😔',
        color: 'purple',
        description: "La depresión puede afectar el ánimo, el interés por las actividades, el sueño y la energía. La alimentación y el descanso forman parte del cuidado; cualquier suplemento debe revisarse junto con el tratamiento que ya recibe la persona.",
        symptoms: ['Tristeza persistente', 'Pérdida de interés o placer en actividades', 'Cambios en el apetito o el sueño', 'Falta de energía'],
        comboPrincipal: [
            { id: 150, serving: '1-2 cápsulas', usage: 'Tomar esta porción por la tarde/noche. Con alimentos.', rationale: "Triptófano, teanina y azahar para acompañar el descanso. Revisar antes de usar con antidepresivos; no sustituye su tratamiento." },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para complementar alimentación y cuidado del cerebro; no sustituye el tratamiento del ánimo." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Vitamina D de dosis alta solo con necesidad identificada y seguimiento profesional." }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ashwagandha para acompañar estrés cotidiano; revisar medicamentos y no usar como tratamiento de depresión." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas B para nervios y aprovechamiento de energía cuando la alimentación no cubre necesidades." },
            { id: 94, serving: '2 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "Fórmula para acompañar relajación y descanso. Revisar antidepresivos y otros productos para dormir." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en producción de energía; no se ha demostrado que esta fórmula trate depresión." }
        ],
        lifestyleTips: ['Buscar apoyo psicoterapéutico.', 'Exponerse a la luz solar diariamente.', 'Mantener una rutina y establecer metas pequeñas.']
    },
    {
        id: 'quistes_miomas',
        name: 'Quistes Ováricos y Miomas (Apoyo)',
        emoji: '🩷',
        color: 'pink',
        description: "Los quistes de ovario y los miomas son problemas diferentes y necesitan revisión ginecológica. Las opciones de esta guía ofrecen apoyo nutricional general; no se presentan como productos para eliminar quistes o miomas.",
        symptoms: ['Periodos abundantes o dolorosos', 'Presión o dolor pélvico', 'Necesidad de orinar con frecuencia', 'Dolor durante las relaciones sexuales'],
        comboPrincipal: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Inositoles para valorar si también hay ovario poliquístico; no eliminan quistes ni miomas." },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La cúrcuma contiene antioxidantes; no se ha demostrado que esta fórmula reduzca miomas." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Vitamina D de dosis alta para una falta documentada; no se presenta para reducir miomas." }
        ],
        comboSecundario: [
            { id: 43, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional digestivo; no se ha demostrado que eliminen hormonas o toxinas del cuerpo." },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para complementar alimentación, sin prometer reducción de quistes o miomas." },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La ashwagandha puede acompañar la respuesta al estrés cotidiano." },
            { id: 180, serving: '5 g', usage: 'Tomar esta porción al día disuelto en agua. Con alimentos.', rationale: "Inositol en polvo como alternativa a cápsulas; elegir una presentación y revisar si existe una necesidad específica." }
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
        description: "La gastritis es la irritación del interior del estómago y una úlcera es una herida en esa zona. El apoyo busca acompañar el bienestar digestivo, mientras el profesional identifica y trata la causa.",
        symptoms: ['Ardor o dolor en la boca del estómago', 'Sensación de vacío que mejora al comer', 'Acidez y reflujo', 'Náuseas o indigestión'],
        comboPrincipal: [
            { id: 246, serving: '1 scoop (6 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: "Glutamina y zinc L-carnosina para el cuidado de la capa que recubre el estómago; no sustituye tratar la úlcera." },
            { id: 9, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cuachalalate y tepezcohuite de uso tradicional digestivo; no prometer que cicatrizan úlceras." },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción en ayunas.', rationale: "Sábila de uso tradicional digestivo; suspender si aumentan las molestias." }
        ],
        comboSecundario: [
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Alternativa para el cuidado del estómago. El producto 246 ya contiene zinc L-carnosina: no sumar ambos por rutina." },
            { id: 141, serving: '2 cápsulas', usage: 'Tomar esta porción con alimentos.', rationale: "Jengibre, cardamomo y otras plantas de uso tradicional para confort digestivo." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Apoyo digestivo durante o después del tratamiento indicado. No elimina H. pylori ni reemplaza antibióticos." }
        ],
        lifestyleTips: ['Evitar alimentos irritantes como picante, café, alcohol y fritos.', 'Realizar comidas más pequeñas y frecuentes.', 'Manejar el estrés.', 'Consumir infusiones con Toronjil como TÉ JOUNKINS LAX para apoyar la relajación.']
    },
    {
        id: 'enfermedad_inflamatoria_intestinal',
        name: 'Enfermedad Inflamatoria Intestinal Diagnosticada (Crohn y Colitis Ulcerosa)',
        emoji: '🩺',
        color: 'green',
        description: "La enfermedad de Crohn y la colitis ulcerosa causan inflamación del intestino y requieren tratamiento especializado. Aquí se muestran opciones para cubrir necesidades de alimentación identificadas; no deben confundirse con el intestino irritable.",
        symptomsTitle: 'Datos a identificar y derivar:',
        protocolTitle: 'Opciones de apoyo nutricional supervisado:',
        symptoms: ['Diarrea persistente o nocturna', 'Sangre o moco en las heces', 'Urgencia para evacuar', 'Dolor abdominal acompañado de pérdida de peso', 'Fatiga, anemia o deficiencias nutricionales', 'Diagnóstico confirmado de Crohn o colitis ulcerosa'],
        comboPrincipal: [
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar una vez al día, después del ejercicio o entre comidas, únicamente cuando el gastroenterólogo o nutriólogo haya calculado que la alimentación no cubre la proteína necesaria.', rationale: "Proteína si falta en la alimentación. La cantidad depende de síntomas, nutrición y salud de riñones e hígado." },
            { id: 225, serving: '1 pastilla', usage: 'Masticar o disolver completamente en la boca una vez al día, solo cuando exista deficiencia, afectación del íleon, resección intestinal o indicación profesional.', rationale: "B12 si existe una falta o dificultad para absorberla. Revisar análisis y antecedentes de cirugía antes de recomendar." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar una vez al día con alimentos que contengan grasas, únicamente si un profesional confirma insuficiencia y define el seguimiento mediante análisis.', rationale: "Vitamina D de dosis alta para falta documentada; necesita seguimiento y no debe mantenerse sin revisión." }
        ],
        comboSecundario: [
            { id: 246, serving: '1/2-1 scoop (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar solo según tolerancia, con alimentos y durante una etapa estable. Evitar durante un brote activo, ante estenosis o si la inulina aumenta dolor, gases o diarrea.', rationale: "Apoyo nutricional según tolerancia. No trata inflamación de Crohn o colitis; su fibra puede aumentar gases y molestias." },
            { id: 131, serving: '1 cápsula', usage: 'Tomar una vez al día con alimentos únicamente si el gastroenterólogo considera apropiadas sus cepas y concentración para el caso concreto.', rationale: "El beneficio depende de las bacterias y de la enfermedad. No añadir automáticamente durante una crisis." },
            { id: 151, serving: '1/2 medida (3 g)', usage: 'Tomar una vez al día por la mañana e incrementar únicamente con autorización profesional, durante remisión estable y sin estenosis. No iniciar al mismo tiempo que el producto 246.', rationale: "Fibra solo si se tolera. Evitar si hay estrechamiento, obstrucción o inflamación intestinal intensa." }
        ],
        lifestyleTips: ['Mantener el tratamiento prescrito y las revisiones con gastroenterología; no suspender medicamentos cuando mejoren los síntomas.', 'Solicitar valoración de hierro, ferritina, B12, folato, vitamina D, peso y estado nutricional según el plan clínico.', 'Durante un brote, ajustar fibra, textura y alimentación con el equipo tratante en lugar de iniciar varios suplementos.', 'Buscar atención ante sangrado abundante, fiebre, dolor intenso, distensión con vómito, deshidratación o pérdida rápida de peso.', 'No combinar de inicio varias fibras, prebióticos o probióticos; introducir una sola opción y registrar tolerancia.']
    },
    {
        id: 'erge_acidez',
        name: 'Reflujo Gastroesofágico y Acidez (ERGE)',
        emoji: '🔥',
        color: 'green',
        description: "El reflujo ocurre cuando el contenido del estómago sube y provoca ardor o irritación. Esta guía reúne opciones de bienestar digestivo para valorar según la causa y el tratamiento de la persona.",
        symptoms: ['Sensación de ardor o fuego en el pecho (pirosis)', 'Regurgitación ácida o sabor amargo en la garganta', 'Tos seca crónica o ronquera', 'Sensación de un nudo en la garganta', 'Indigestión, eructos o pesadez estomacal'],
        comboPrincipal: [
            { id: 9, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: "Plantas de uso tradicional digestivo; no prometer reparación del esófago ni alivio comprobado del reflujo." },
            { id: 164, serving: '2 cucharadas', usage: 'Tomar esta porción en ayunas y antes de dormir.', rationale: "Sábila, nopal y cuachalalate de uso tradicional digestivo; suspender si aumenta acidez." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción por las mañanas. Con alimentos.', rationale: "Probióticos para equilibrio intestinal; no corrigen por sí mismos el reflujo." }
        ],
        comboSecundario: [
            { id: 246, serving: '1 scoop (6 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: "Glutamina y zinc L-carnosina para cuidado digestivo; no se ha confirmado que esta mezcla repare daño por reflujo." },
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Alternativa al 246 para cuidado del estómago; no sumar ambos por rutina." },
            { id: 66, serving: '1 onza', usage: 'Tomar esta porción diluida en agua tibia antes de dormir.', rationale: "Mezcla de plantas de uso tradicional; no se ha establecido que mejore el reflujo." }
        ],
        lifestyleTips: ['Evitar acostarse inmediatamente después de comer.', 'Elevar la cabecera de la cama unos 15 cm.', 'Masticar los alimentos lentamente.', 'Evitar desencadenantes como café en ayunas, chocolate, menta.']
    },
    {
        id: 'higado_graso',
        name: 'Hígado Graso (No alcohólico)',
        emoji: '🌿',
        color: 'green',
        description: "El hígado graso necesita revisión médica y cambios de alimentación, actividad física y peso cuando corresponda. Los productos pueden acompañar necesidades nutricionales, sin reemplazar esos cuidados.",
        symptoms: ['Generalmente asintomático', 'Fatiga o cansancio crónico', 'Molestia en la parte superior derecha del abdomen', 'Abdomen abultado'],
        comboPrincipal: [
            { id: 145, serving: '2 cápsulas (1.3 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: "La colina ayuda a utilizar grasas y al funcionamiento del hígado; no elimina por sí sola grasa acumulada." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para cuidado del corazón y triglicéridos; no sustituye el tratamiento de hígado graso." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La NAC ayuda a formar glutatión, que participa en el cuidado de las células." }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cúrcuma para cuidado de las células. Revisar anticoagulantes; evitar con piedras u obstrucción de vesícula sin autorización profesional." },
            { id: 43, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día con alimentos.', rationale: "Plantas de uso tradicional digestivo; no es un limpiador ni tratamiento del hígado graso." },
            { id: 77, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día antes de las comidas principales, según la ficha técnica.', rationale: "Hercampuri de uso tradicional digestivo. Evitar con problemas de vesícula; no elimina grasa del hígado." }
        ],
        lifestyleTips: ['Eliminar bebidas azucaradas y reducir alimentos ultraprocesados.', 'Realizar actividad física regular y buscar una reducción de peso gradual cuando corresponda.', 'Controlar glucosa, presión y lípidos con seguimiento profesional.', 'Evitar recomendar múltiples productos herbales a la vez.']
    },
    {
        id: 'cirrosis',
        name: 'Apoyo en Cirrosis Hepática',
        emoji: '🌿',
        color: 'green',
        description: "La cirrosis es un daño avanzado del hígado. La alimentación y cualquier suplemento deben ajustarse con el especialista; esta guía sirve para revisar opciones, no para armar un paquete general.",
        symptoms: ['Fatiga, náuseas, pérdida de apetito', 'Ictericia (coloración amarilla de piel y ojos)', 'Hinchazón en piernas y abdomen (ascitis)'],
        comboPrincipal: [
            { id: 111, serving: '1 scoop (35 g)', usage: 'Tomar esta porción únicamente con autorización del médico o nutriólogo. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: "Proteína si hay pérdida de peso o músculo. El médico o nutriólogo define cantidad según hígado, riñones y alimentación." },
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos, únicamente con autorización del hepatólogo.', rationale: "La colina apoya el uso de grasas; no repara daño de cirrosis ni reemplaza tratamiento." },
            { id: 116, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día únicamente con autorización del hepatólogo. Con alimentos.', rationale: "NAC para cuidado de las células. Revisar medicamentos, sangrado, úlcera y estado del paciente antes de usar." }
        ],
        comboSecundario: [
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción al día únicamente con autorización profesional y revisión de coagulación y medicamentos. Con un desayuno que contenga grasas.', rationale: "Omega 3 solo si el profesional lo considera adecuado; revisar riesgo de sangrado." },
            { id: 43, serving: '2 cápsulas (1 g)', usage: 'Tomar esta porción al día únicamente con autorización expresa del hepatólogo. Con alimentos.', rationale: "Cardo mariano y otras plantas. Evitar con enfermedad grave del hígado u obstrucción de vesícula sin supervisión; no regenera hígado." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si el hepatólogo la autoriza. Con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no trata cirrosis y necesita revisión profesional." }
        ],
        lifestyleTips: ['Derivar siempre al médico o hepatólogo antes de recomendar cualquier suplemento.', 'Eliminar completamente el alcohol.', 'No restringir proteína ni sodio de forma improvisada; el plan depende del estado nutricional, ascitis, medicamentos y resultados de laboratorio.', 'Buscar atención urgente ante vómito con sangre, confusión, somnolencia marcada, abdomen muy distendido o color amarillo intenso.']
    },
    {
        id: 'piedras_vesicula',
        name: 'Colelitiasis (Piedras en la Vesícula)',
        emoji: '🌿',
        color: 'green',
        description: "Las piedras en la vesícula pueden causar dolor y necesitar atención médica. Antes de recomendar plantas o productos para la digestión, hay que confirmar que sean adecuados: algunos pueden empeorar las molestias.",
        symptoms: ['Dolor repentino e intenso en la parte superior derecha del abdomen', 'Dolor que se irradia a la espalda o al hombro derecho', 'Náuseas o vómitos'],
        comboPrincipal: [
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos, solo después de valoración profesional.', duration: 'No establecida para colelitiasis; reevaluar antes de continuar.', durationSource: 'Guías clínicas de colelitiasis (PMID: 37452855)', durationSourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/37452855/', rationale: "La colina ayuda a utilizar grasas; no disuelve piedras ni evita una obstrucción." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para bienestar digestivo; no eliminan piedras de vesícula." },
            { id: 60, serving: '2 cápsulas', usage: 'Tomar esta porción antes de las comidas, solo si el profesional confirma que son apropiadas.', rationale: "Enzimas para digerir alimentos. No usar con inflamación del páncreas, úlcera activa o alergia a ingredientes." }
        ],
        comboSecundario: [
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día según tolerancia. En ayunas o entre comidas.', rationale: "Sábila como complemento de bienestar digestivo; no limpia vesícula ni elimina piedras." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día únicamente si el profesional lo autoriza. Con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento nutricional; no trata piedras y requiere revisar riesgo de sangrado." },
            { id: 115, serving: '20 gotas', usage: 'Diluir en ¼ de vaso con agua natural y tomar 3 veces al día antes de los alimentos, únicamente después de valoración médica.', rationale: "Preparación tradicional sin beneficio demostrado para disolver piedras. Evitar con dolor, fiebre, piel amarilla, vómitos o posible obstrucción y buscar atención." }
        ],
        lifestyleTips: ['Derivar a valoración médica si existen síntomas.', 'Evitar comidas que desencadenen ataques mientras se recibe valoración.', 'No intentar disolver o expulsar cálculos con suplementos.', 'Buscar atención urgente ante dolor que dura varias horas, fiebre, vómitos o color amarillo en piel u ojos.']
    },
    {
        id: 'candida',
        name: 'Candidiasis Diagnosticada (Apoyo Complementario)',
        emoji: '🛡️',
        color: 'green',
        description: "La candidiasis es una infección por hongos que necesita confirmación y tratamiento según la zona afectada. Las opciones de apoyo digestivo no reemplazan ese tratamiento ni permiten diagnosticar la infección por síntomas generales.",
        symptoms: ['Placas o lesiones compatibles con candidiasis', 'Infecciones recurrentes confirmadas', 'Picazón, ardor o secreción según el sitio afectado', 'Molestias digestivas inespecíficas'],
        comboPrincipal: [
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para equilibrio intestinal durante o después del tratamiento indicado." },
            { id: 2, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Orégano solo como complemento según valoración; puede irritar aparato digestivo y no sustituye medicamento contra hongos." },
            { id: 67, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Mezcla de hongos como complemento nutricional. No trata candidiasis; revisar medicamentos para defensas, anticoagulantes y enfermedades autoinmunes." }
        ],
        comboSecundario: [
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ajo negro como complemento nutricional; no trata candidiasis." },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Alternativa al 129: elegir uno. No asegura beneficio en todos los tipos de candidiasis ni sustituye tratamiento." },
            { id: 224, serving: '4 gotas', usage: 'Tomar esta porción diluida, 2 veces al día con alimentos.', rationale: "Alternativa en gotas al 2: elegir una. Resultados de laboratorio no demuestran que trate candidiasis en personas." },
            { id: 16, serving: '15 gotas', usage: 'Tomar esta porción diluida con alimentos como alternativa a las demás presentaciones de orégano.', rationale: "Orégano líquido como alternativa; no sumar con productos 2, 208, 216 o 224." },
            { id: 208, serving: '1 cápsula', usage: 'Tomar esta porción con alimentos como alternativa a las demás presentaciones de orégano.', rationale: "Orégano en cápsulas como alternativa; elegir una presentación sin prometer tratamiento de candidiasis." },
            { id: 216, serving: '1 cápsula', usage: 'Tomar esta porción con alimentos como alternativa a las demás presentaciones de orégano.', rationale: "Orégano y coco como alternativa; no sumar con productos 2, 208 o 224." }
        ],
        lifestyleTips: ['Confirmar el diagnóstico con un profesional de la salud.', 'Seguir el tratamiento antifúngico indicado cuando corresponda.', 'Mantener una alimentación equilibrada sin prometer que eliminar azúcar erradica por sí sola la infección.', 'No combinar varias presentaciones de aceite de orégano.']
    },
    {
        id: 'estrenimiento_cronico',
        name: 'Estreñimiento Crónico',
        emoji: '🚽',
        color: 'green',
        description: "El estreñimiento puede causar evacuaciones poco frecuentes, heces duras o esfuerzo al ir al baño. El apoyo comienza con fibra, agua y movimiento, y se elige una opción según la causa y el tiempo que lleva el problema.",
        symptoms: ['Evacuaciones poco frecuentes (menos de 3 veces por semana)', 'Heces duras, secas o en forma de "bolitas"', 'Esfuerzo excesivo o dolor al evacuar', 'Sensación de evacuación incompleta', 'Hinchazón abdominal, gases y malestar general'],
        comboPrincipal: [
            { id: 151, serving: '1/2-1 medida (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Disolver en 250-300 ml de agua y tomar en ayunas o con el desayuno, preferentemente por la mañana.', rationale: "La fibra puede favorecer regularidad. Introducir poco a poco para evitar gases o hinchazón." },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para equilibrio intestinal; una cantidad mayor no garantiza mejor resultado." },
            { id: 140, serving: '30 ml', usage: 'Tomar esta porción antes de cada alimento, según las indicaciones del producto.', rationale: "Sábila sin aloína, nopal y cuachalalate para bienestar digestivo tradicional; no es laxante estimulante." }
        ],
        comboSecundario: [
            { id: 76, serving: '1 tableta', usage: 'Tomar esta porción al día con alimentos y suficiente agua.', rationale: "Plantas de uso tradicional para acompañar evacuación. Elegir como alternativa sin sumar otros laxantes." },
            { id: 46, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día únicamente con orientación profesional por su aporte de 500 mg de magnesio elemental. Con alimentos.', rationale: "El magnesio puede facilitar evacuar al atraer agua al intestino; revisar especialmente si hay enfermedad renal." },
            { id: 173, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza por la noche, solo como rescate ocasional.', duration: 'Máximo 7 días consecutivos; uso ocasional.', durationSource: 'Ficha técnica del producto', rationale: "Sen para evacuar en estreñimiento ocasional. Reservar para uso breve y no sumar otros laxantes." }
        ],
        lifestyleTips: ['Mantener una hidratación adecuada, especialmente al aumentar el consumo de fibra.', 'Establecer una rutina para ir al baño.', 'Usar un banco o escalón bajo los pies al evacuar.', 'Aumentar gradualmente el consumo de fibra soluble.', 'Mantener actividad física regular.', 'Consultar a un profesional de la salud si el estreñimiento persiste o aparece sangre en las heces, pérdida de peso, anemia, vómitos o dolor abdominal intenso.']
    },

    // ================================================================
    //  🔴 ROJO: Salud Cardiovascular y Clínica
    // ================================================================
    {
        id: 'hipertension',
        name: 'Hipertensión Arterial Diagnosticada (Apoyo Cardiometabólico)',
        emoji: '🩺',
        color: 'red',
        description: "La presión alta suele no dar síntomas y se confirma con mediciones. La alimentación, el movimiento y el tratamiento indicado son la base; el apoyo nutricional debe elegirse revisando los medicamentos que ya toma la persona.",
        symptomsTitle: 'Datos a identificar:',
        protocolTitle: 'Opciones complementarias; no combinar automáticamente:',
        symptoms: ['Lecturas elevadas repetidas con técnica correcta', 'Diagnóstico médico de hipertensión', 'Uso actual de antihipertensivos o diuréticos', 'Enfermedad renal, diabetes o antecedentes cardiovasculares', 'Generalmente no causa síntomas'],
        comboPrincipal: [
            { id: 181, serving: '4 cápsulas', usage: 'Tomar una vez al día con alimentos, solo después de revisar función renal, medicamentos y el consumo total de magnesio con un profesional.', rationale: "Magnesio para músculos y nervios. No sustituye medicamentos de presión; puede causar diarrea o acumularse con enfermedad renal." },
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar una vez al día con un desayuno que contenga grasas y revisar anticoagulantes, antiagregantes y riesgo de sangrado.', rationale: "Omega 3 para cuidado del corazón; no equivale a medicamento ni garantiza controlar presión." },
            { id: 23, serving: '3 cápsulas (1.5 g)', usage: 'Tomar una vez al día con alimentos y vigilar la presión, la tolerancia digestiva y posibles interacciones con anticoagulantes o antihipertensivos.', rationale: "Ajo negro para cuidado del corazón. No sumar fórmulas con ajo ni reducir medicamentos por cuenta propia." }
        ],
        comboSecundario: [
            { id: 128, serving: '3 cápsulas (2.05 g)', usage: 'Tomar una vez al día con alimentos únicamente con autorización clínica, después de revisar potasio en sangre, función renal y medicamentos.', rationale: "Potasio solo cuando se indica. Puede ser peligroso con enfermedad renal, potasio alto y algunos medicamentos para presión o eliminar líquidos." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas, únicamente como apoyo complementario con autorización del cardiólogo.', rationale: "Coenzima Q10 para producción de energía; revisar tratamiento actual sin prometer controlar presión." },
            { id: 136, serving: '1 cápsula (500 mg)', usage: 'Tomar una vez al día con alimentos que contengan grasas, únicamente como apoyo complementario acordado con el profesional.', rationale: "Coenzima Q10 como complemento nutricional; no es medicamento para bajar presión." },
            { id: 10, serving: '3 cápsulas', usage: 'Tomar una vez al día con alimentos solo después de revisar todos sus botánicos y medicamentos. Elegir esta fórmula o el ajo negro, no ambas de rutina.', rationale: "Mezcla con ajo y otras plantas. Revisar medicamentos y tolerancia antes de elegirla como alternativa." }
        ],
        lifestyleTips: ['Medir la presión sentado, después de reposar, con brazalete adecuado y registrar varias lecturas.', 'Mantener el tratamiento prescrito; nunca suspenderlo o ajustar la dosis por una lectura aislada o por empezar un suplemento.', 'Priorizar un patrón tipo DASH, reducir sodio de alimentos procesados, hacer actividad física regular y moderar alcohol.', 'Revisar apnea del sueño, peso, diabetes, función renal y otros factores con el equipo de salud.', 'Una presión de 180/120 mmHg o más acompañada de dolor de pecho, falta de aire, déficit neurológico, confusión o alteración visual requiere atención urgente.']
    },
    {
        id: 'varices_circulacion',
        name: 'Várices y Mala Circulación',
        emoji: '🦵',
        color: 'red',
        description: "Cuando la sangre tiene dificultad para regresar desde las piernas al corazón, pueden aparecer várices, pesadez e hinchazón. Las opciones de esta guía acompañan el confort de las piernas y los cuidados indicados para la circulación.",
        symptoms: ['Sensación de pesadez, cansancio o dolor en las piernas', 'Venas visibles, abultadas y retorcidas', 'Hinchazón (edema) en los tobillos', 'Calambres nocturnos en las piernas', 'Picazón o cambios de color en la piel'],
        comboPrincipal: [
            { id: 44, serving: '2 cápsulas (800 mg)', usage: 'Tomar esta porción al día; confirmar con el especialista que el extracto esté estandarizado. Antes de las comidas.', rationale: "Para confort de piernas cuando hay problema de venas evaluado. Usar extractos adecuados; no recomendar semillas crudas." },
            { id: 182, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje y confort de piernas pesadas; no aplicar en piel lastimada." },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La vitamina C ayuda a formar colágeno para mantener tejidos." }
        ],
        comboSecundario: [
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ajo negro como alternativa nutricional; revisar anticoagulantes y sangrado." },
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para cuidado del corazón; no elimina várices ni adelgaza sangre." },
            { id: 138, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Resveratrol para cuidado de las células; revisar medicamentos." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula trate várices." },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje y confort como alternativa al 182; elegir uno solo." }
        ],
        lifestyleTips: ['Elevar las piernas por encima del nivel del corazón.', 'Usar medias de compresión graduada.', 'Caminar a paso ligero a diario.', 'Evitar ropa excesivamente ajustada.']
    },
    {
        id: 'enfermedad_renal',
        name: 'Bienestar Urinario (Sin Enfermedad Renal Diagnosticada)',
        emoji: '❤️',
        color: 'red',
        description: "Esta guía reúne opciones de bienestar urinario para personas sin enfermedad del riñón diagnosticada. Infecciones, piedras y daño del riñón son problemas distintos y requieren una valoración específica.",
        symptoms: ['Antecedentes de molestias urinarias', 'Orina turbia o con olor fuerte', 'Infecciones recurrentes previamente evaluadas', 'Necesidad de revisar hábitos de hidratación'],
        comboPrincipal: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Arándano para ayudar a prevenir algunas infecciones urinarias repetidas; no trata infección activa." },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos y solo si no existe enfermedad renal o cardíaca.', rationale: "Plantas de uso tradicional urinario. Revisar hidratación y medicamentos para eliminar líquidos, presión o litio." },
            { id: 148, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Hierba del sapo de uso tradicional urinario. No disuelve piedras; evitar con enfermedad renal, presión baja o medicamentos para eliminar líquidos." }
        ],
        comboSecundario: [
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Sábila para bienestar digestivo e hidratación general; no trata riñones." },
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día según tolerancia. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: "Fibra para bienestar digestivo; no limpia ni cambia la acidez de los riñones." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para bienestar digestivo; no tratan enfermedades renales ni sustituyen valoración médica." }
        ],
        lifestyleTips: ['Mantener una hidratación adecuada con agua natural.', 'Reducir el consumo de sodio (sal).', 'Evitar el uso excesivo de antiinflamatorios no esteroideos (AINEs).']
    },
    {
        id: 'enfermedad_renal_diagnosticada',
        name: 'Enfermedad Renal Diagnosticada (Apoyo Supervisado)',
        emoji: '🩺',
        color: 'red',
        description: "Cuando los riñones no funcionan bien, cambia la forma en que el cuerpo maneja líquidos, minerales y medicamentos. El especialista del riñón debe revisar cada suplemento antes de usarlo.",
        symptoms: ['Diagnóstico previo de enfermedad renal', 'Cambios en filtración glomerular o creatinina', 'Proteína o albúmina en orina', 'Hinchazón, presión elevada o fatiga evaluadas médicamente'],
        comboPrincipal: [
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción al día únicamente con autorización del nefrólogo y revisión de anticoagulantes. Con un desayuno que contenga grasas.', rationale: "Omega 3 para cuidado del corazón solo si se indica; no recupera funcionamiento del riñón." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día únicamente si el nefrólogo la autoriza. Con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no recupera funcionamiento del riñón." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, si el profesional la autoriza.', rationale: "Probióticos para bienestar digestivo. Evitar con defensas muy bajas; no limpian riñones." }
        ],
        comboSecundario: [
            { id: 111, serving: '1 scoop (35 g)', usage: 'Tomar esta porción únicamente con autorización del médico o nutriólogo renal. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: "Proteína solo si el plan la requiere. La cantidad depende del estado renal, diálisis y alimentación." },
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día únicamente si existe indicación urinaria adicional y el profesional lo aprueba. Con alimentos.', rationale: "Arándano para prevención urinaria según valoración. Revisar piedras de oxalato o uso de warfarina." },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día solo si el nefrólogo autoriza la cantidad de líquidos. En ayunas o entre comidas.', rationale: "Sábila para bienestar digestivo. Ajustar líquidos al plan renal; no trata riñones." }
        ],
        lifestyleTips: ['No recomendar potasio, magnesio, creatina, diuréticos herbales ni productos detox sin autorización del nefrólogo.', 'Individualizar proteína, sodio, potasio, fósforo y líquidos.', 'Evitar AINEs salvo indicación médica.', 'Buscar atención ante disminución marcada de orina, falta de aire, confusión, dolor de pecho o edema rápidamente progresivo.']
    },
    {
        id: 'calculos_renales',
        name: 'Cálculos Renales (Prevención Según el Tipo de Piedra)',
        emoji: '💧',
        color: 'red',
        description: "Las piedras del riñón pueden tener distintas composiciones y no todas se previenen de la misma manera. La elección de apoyo depende de los análisis y del tipo de piedra; ningún producto sirve para disolverlas todas.",
        symptoms: ['Dolor intenso en espalda, costado o abdomen bajo', 'Sangre en la orina', 'Náuseas o vómitos', 'Antecedentes de expulsión o diagnóstico por imagen'],
        comboPrincipal: [
            { id: 213, serving: '1 tableta', usage: 'Tomar esta porción antes de cada alimento principal (3 tabletas al día).', rationale: "Plantas de uso tradicional urinario. Elegir esta fórmula o YUMEL, no ambas; no disuelve piedras. Revisar riñones, hidratación y medicamentos." },
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente después de identificar el tipo de cálculo y con autorización profesional. Con alimentos.', rationale: "Para ciertos tipos de piedras cuando se indica. Antes se revisan riñones, potasio y medicamentos." },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, según la ficha y con revisión profesional.', rationale: "Plantas de uso tradicional; no disuelven piedras. Evitar con enfermedad renal o cardíaca y revisar medicamentos antes de sumar otra fórmula urinaria." },
            { id: 28, serving: '100 ml', usage: 'Tomar esta porción al día como parte de la ingesta de líquidos, según tolerancia. En ayunas o entre comidas.', rationale: "Sábila como aporte de líquido; no modifica piedras ni sustituye agua." }
        ],
        comboSecundario: [
            { id: 177, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza de infusión al día según tolerancia y las indicaciones del empaque. Después de las comidas.', rationale: "Infusión de uso tradicional urinario. Revisar antes de sumar cápsulas con las mismas plantas para no duplicarlas." },
            { id: 148, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: "Hierba del sapo tradicional; no rompe ni disuelve piedras. Evitar con enfermedad renal, presión baja o alteraciones de minerales." },
            { id: 115, serving: '20 gotas', usage: 'Diluir en ¼ de vaso con agua natural y tomar 3 veces al día antes de los alimentos, solo después de identificar el tipo de cálculo y recibir valoración profesional.', rationale: "Alternativa a CHA-HA STONE, que ya contiene yumel. No se ha demostrado que esta presentación disuelva, expulse o prevenga piedras." }
        ],
        lifestyleTips: ['Priorizar agua natural en la cantidad recomendada por el profesional.', 'No restringir calcio alimentario ni alcalinizar la orina sin conocer el tipo de cálculo.', 'Reducir sodio y ajustar oxalato, purinas o proteína únicamente según el diagnóstico.', 'Buscar atención urgente ante fiebre, escalofríos, ausencia de orina, vómitos persistentes o dolor incontrolable.']
    },
    {
        id: 'infecciones_urinarias',
        name: 'Infecciones de las Vías Urinarias Recurrentes (Apoyo Preventivo)',
        emoji: '🚽',
        color: 'red',
        description: "Esta guía se enfoca en apoyo preventivo para personas con infecciones urinarias repetidas que ya fueron evaluadas. Si hay ardor, fiebre, sangre o dolor de espalda, primero se necesita atención para descartar una infección activa.",
        symptoms: ['Necesidad fuerte y constante de orinar', 'Sensación de ardor o dolor al orinar (disuria)', 'Orina turbia, oscura o con olor fuerte', 'Sangre en la orina', 'Dolor pélvico o presión en la parte baja del abdomen'],
        comboPrincipal: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Arándano para ayudar a prevenir algunas infecciones urinarias repetidas; no elimina infección existente." },
            { id: 130, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para bienestar intestinal. No se ha establecido que esta mezcla prevenga o trate infecciones vaginales o urinarias." }
        ],
        comboSecundario: [
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Vitamina C para complementar alimentación; no aumentar cantidad para tratar infección urinaria." },
            { id: 22, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ajo negro y propóleo como complemento; no es antibiótico ni sustituye tratamiento." },
            { id: 61, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C para defensas; la mezcla no trata infección urinaria." },
            { id: 27, serving: '90 ml', usage: 'Tomar esta porción al día. En ayunas o antes de la primera comida.', rationale: "Sábila y arándano como aporte de líquido. No equivale a arándano con cantidades verificadas ni se suma por rutina al 6." }
        ],
        lifestyleTips: ['Mantener hidratación adecuada.', 'Orinar después de mantener relaciones sexuales.', 'Evitar duchas vaginales y productos irritantes.', 'Solicitar atención médica ante síntomas activos, y de urgencia si hay fiebre, escalofríos, vómitos o dolor en la espalda o costado.']
    },
    {
        id: 'inflamacion_edema',
        name: 'Inflamación y Retención de Líquidos (Edema)',
        emoji: '💧',
        color: 'red',
        description: "La hinchazón por acumulación de líquidos puede deberse a la circulación, a medicamentos o a una enfermedad. Primero se identifica la causa; después se valora qué cuidados y productos son adecuados.",
        symptoms: ['Hinchazón en piernas, tobillos o manos', 'Sensación de pesadez o piel tirante', 'Aumento de peso repentino por retención de agua', 'Rigidez matutina en articulaciones o dedos', 'Marca visible al presionar la piel (fóvea)'],
        comboPrincipal: [
            { id: 44, serving: '2 cápsulas (800 mg)', usage: 'Tomar esta porción al día; confirmar con el especialista que el extracto esté estandarizado. Antes de las comidas.', rationale: "Para confort de piernas solo si la hinchazón se debe a un problema de venas ya evaluado." },
            { id: 182, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje y pesadez de piernas; no aplicar en piel lastimada." }
        ],
        comboSecundario: [
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente con orientación profesional y análisis de potasio y función renal. Con alimentos.', rationale: "Potasio solo para indicaciones concretas; no por rutina para eliminar líquidos." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para complementar alimentación; no trata directamente retención de líquidos." },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel como alternativa al 182; no usar en piel lastimada ni sumar ambos por rutina." },
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 como alternativa al 123, no para combinar; no trata retención de líquidos." }
        ],
        lifestyleTips: ['Reducir el exceso de sodio y alimentos ultraprocesados.', 'Elevar las piernas cuando la causa sea venosa y moverlas con frecuencia.', 'No aumentar ni restringir líquidos sin conocer la causa.', 'Buscar atención urgente ante falta de aire, dolor de pecho, edema de una sola pierna o aumento rápido de peso.']
    },
    {
        id: 'artritis_reumatoide',
        name: 'Artritis Reumatoide (Enfermedad Autoinmune Articular)',
        emoji: '💪',
        color: 'yellow',
        description: "En la artritis reumatoide, las defensas del cuerpo dañan las articulaciones y causan dolor e hinchazón. Las opciones nutricionales acompañan el cuidado articular y el tratamiento indicado por reumatología.",
        symptoms: ['Dolor e hinchazón en múltiples articulaciones (simétrico)', 'Rigidez matutina prolongada (> 1 hora)', 'Fatiga y malestar general', 'Nódulos reumatoides bajo la piel'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: "Complemento del cuidado articular; no sustituye medicamentos que controlan enfermedad." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 como complemento; revisar anticoagulantes y sangrado." }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cúrcuma como alternativa al 102; no sumar por rutina porque se repite ingrediente y pueden aumentar interacciones." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "NAC para formar glutatión y complementar cuidado de las células." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si la porción es apropiada para sus niveles y tratamiento. Con alimentos que contengan grasas.', rationale: "Vitamina D de dosis alta solo si hay falta o indicación profesional." },
            { id: 129, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para bienestar digestivo; no se ha demostrado que esta mezcla controle artritis." }
        ],
        lifestyleTips: ['Mantener seguimiento con reumatología y no suspender el tratamiento indicado.', 'Realizar actividad física de bajo impacto y fisioterapia según tolerancia.', 'Seguir una alimentación equilibrada; eliminar gluten o lácteos solo si existe diagnóstico o intolerancia individual.', 'Revisar anticoagulantes antes de combinar omega-3, cúrcuma u otros productos con efecto sobre sangrado.']
    },
    {
        id: 'acido_urico',
        name: 'Ácido Úrico Elevado (Gota)',
        emoji: '🔥',
        color: 'orange',
        description: "La gota puede causar dolor e hinchazón intensos en una articulación por acumulación de cristales de ácido úrico. El apoyo nutricional se elige con el profesional y no reemplaza el tratamiento de un ataque.",
        symptoms: ['Dolor intenso y repentino en una articulación (a menudo el dedo gordo del pie)', 'Hinchazón y enrojecimiento', 'Sensibilidad extrema al tacto'],
        comboPrincipal: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, fuera de un ataque agudo y con revisión profesional.', rationale: "Cúrcuma para cuidado de las células; no sustituye tratar un ataque de gota." }
        ],
        comboSecundario: [
            { id: 47, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción al día únicamente cuando un profesional lo indique después de evaluar orina, función renal y medicamentos. Con alimentos.', rationale: "Potasio para indicaciones urinarias concretas; no baja por sí solo ácido úrico en sangre." },
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día según tolerancia. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: "Fibra para complementar alimentación; no trata gota ni cambia la acidez de todo el cuerpo." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos, si el profesional lo considera apropiado.', rationale: "Omega 3 como complemento; no trata ataque de gota ni baja por sí solo ácido úrico." },
            { id: 178, serving: '1 cápsula (aprox. 500 mg)', usage: 'Tomar esta porción al día con alimentos.', rationale: "Quercetina estudiada para ácido úrico con resultados iniciales; no se ha demostrado que prevenga o trate ataques de gota." },
            { id: 108, serving: '1 cápsula (1000 mg)', usage: 'Tomar esta porción al día con alimentos, solo tras descartar antecedente de cálculos o enfermedad renal.', rationale: "Vitamina C estudiada para ácido úrico con cambios pequeños. Esta presentación no equivale a la cantidad estudiada; necesita revisión y no sustituye medicamentos." }
        ],
        lifestyleTips: ['Limitar vísceras, porciones frecuentes de carne roja, ciertos mariscos, cerveza, destilados y bebidas azucaradas con fructosa.', 'Mantener hidratación regular, salvo que exista una restricción de líquidos indicada por cardiología o nefrología.', 'Evitar ayunos prolongados y pérdidas de peso rápidas; buscar una reducción gradual si hay sobrepeso.', 'Durante un ataque agudo no masajear la articulación ni intentar sustituir el tratamiento prescrito con suplementos.']
    },
    {
        id: 'resistencia_insulina',
        name: 'Resistencia a la Insulina y Pre-diabetes',
        emoji: '🩸',
        color: 'orange',
        description: "Cuando el cuerpo aprovecha con dificultad la insulina, el azúcar en sangre puede subir. Alimentación, actividad física y seguimiento son la base; se elige una opción de apoyo revisando los análisis y medicamentos.",
        symptoms: ['Aumento de peso, especialmente alrededor del abdomen', 'Apetito excesivo por carbohidratos o dulces', 'Oscurecimiento de la piel en cuello o axilas', 'Cansancio después de comer', 'Dificultad para perder peso'],
        comboPrincipal: [
            { id: 36, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: "Berberina como alternativa para manejo de glucosa con revisión de medicamentos; no sumar automáticamente otras fórmulas para bajar azúcar." },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Canela y cromo para aprovechamiento de nutrientes. Revisar glucosa, riñones, hígado y medicamentos." },
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Inositoles como alternativa si también hay ovario poliquístico; revisar tratamiento para glucosa." }
        ],
        comboSecundario: [
            { id: 122, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para cuidado del corazón; no se presenta como producto para bajar azúcar." },
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cuidado de las células con valoración si hay molestias de los nervios; no reemplaza control de glucosa." },
            { id: 103, serving: '15 ml', usage: 'Tomar esta porción diluida en agua antes de una comida, según tolerancia.', rationale: "Vinagre como alimento para dar sabor. Evitar si irrita estómago y vigilar glucosa con medicamentos." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula corrija resistencia a la insulina." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos. Revisar interacciones con antidiabéticos.', rationale: "El cromo participa en uso de nutrientes. Revisar medicamentos para glucosa; no garantiza corregir resistencia a la insulina." }
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
        description: "La diabetes tipo 2 necesita control del azúcar en sangre y seguimiento médico. Los productos se valoran como opciones de apoyo nutricional según la necesidad de la persona, sin sumarlos todos ni cambiar sus medicamentos.",
        symptoms: ['Sed excesiva y boca seca', 'Micción frecuente, incluso por la noche', 'Fatiga marcada después de las comidas', 'Visión borrosa', 'Cicatrización lenta de heridas', 'Hormigueo u hormigueo en manos o pies'],
        comboPrincipal: [
            { id: 36, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos, según la ficha del producto.', rationale: "Berberina como alternativa complementaria. Puede aumentar efecto de medicamentos para diabetes; necesita revisión y vigilancia del azúcar." },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Canela y cromo como alternativa. Vigilar azúcar y revisar riñones, hígado y medicamentos." },
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Inositoles como alternativa sobre todo si también hay ovario poliquístico; no reemplazan tratamiento de diabetes." }
        ],
        comboSecundario: [
            { id: 17, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Para valorar como complemento ante molestias de los nervios; no reemplaza control del azúcar." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para cuidado del corazón y triglicéridos; revisar anticoagulantes." },
            { id: 103, serving: '15 ml', usage: 'Tomar esta porción diluida en agua antes de una comida, según tolerancia.', rationale: "Vinagre como alimento para dar sabor. Evitar si irrita estómago y vigilar azúcar si toma medicamentos." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no sustituye tratamiento ni seguimiento de diabetes." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos. Revisar interacciones con antidiabéticos.', rationale: "El cromo participa en aprovechamiento de nutrientes; revisar medicamentos y glucosa antes de incorporar la mezcla." }
        ],
        lifestyleTips: ['Priorizar alimentos de bajo índice glucémico y ricos en fibra.', 'Distribuir las comidas en porciones más pequeñas y frecuentes.', 'Realizar actividad física regular, especialmente caminar después de comer.', 'Dar seguimiento a los niveles de glucosa con supervisión médica.']
    },
    {
        id: 'sobrepeso_metabolico',
        name: 'Sobrepeso y Síndrome Metabólico',
        emoji: '⚖️',
        color: 'orange',
        description: "El exceso de grasa abdominal puede acompañarse de presión, azúcar o grasas en sangre elevadas. Los productos apoyan necesidades concretas dentro de un plan de alimentación, movimiento y seguimiento; no aseguran bajar de peso.",
        symptoms: ['Acumulación de grasa principalmente en el abdomen', 'Fatiga después de comidas altas en carbohidratos', 'Antojos frecuentes de azúcar o harinas', 'Dificultad para bajar de peso a pesar de la dieta', 'Presión arterial en el límite alto'],
        comboPrincipal: [
            { id: 84, serving: '2 cápsulas (1.5 g)', usage: 'Tomar esta porción antes del desayuno y repetir antes de la comida (4 cápsulas al día); seguir estrictamente la etiqueta y no combinar con otras fuentes concentradas de cafeína.', rationale: "Cafeína y guaraná para estar alerta. Evitar con presión alta, enfermedad cardíaca o sensibilidad a estimulantes; no garantiza perder grasa." },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Canela y cromo para aprovechamiento de nutrientes; revisar glucosa, riñones, hígado y medicamentos." },
            { id: 165, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día por la mañana.', rationale: "Bebida con antioxidantes que puede tomarse sin azúcar; no garantiza pérdida de peso." }
        ],
        comboSecundario: [
            { id: 95, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Mezcla para acompañar alimentación y ejercicio; no se ha confirmado que reduzca apetito o peso por sí sola." },
            { id: 25, serving: '10 g (2 cucharadas)', usage: 'Tomar esta porción al día. En ayunas o con alimentos.', rationale: "Espirulina para complementar alimentación, sin presentarla como adelgazante." },
            { id: 146, serving: '1 sobre (3 g) por taza', usage: 'Preparar cada taza con 1 sobre (3 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día. Preferentemente por la noche.', rationale: "Infusión para variar bebidas sin añadir azúcar; no es tratamiento para bajar peso." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cromo, fibra y plantas para complementar alimentación; no garantiza perder peso ni corregir síndrome metabólico." }
        ],
        lifestyleTips: ['Priorizar proteína en cada comida para mayor saciedad.', 'Reducir azúcares refinados y harinas procesadas.', 'Incorporar entrenamiento de fuerza para mejorar la composición corporal.', 'Dormir al menos 7-8 horas, ya que la falta de sueño altera el apetito y el metabolismo.', 'Ver también la guía "Control de Peso" para fórmulas comerciales adicionales (Demograss, Goji Trim, D Master, etc.).']
    },
    {
        id: 'colesterol_trigliceridos',
        name: 'Colesterol y Triglicéridos Elevados',
        emoji: '🫀',
        color: 'orange',
        description: "El colesterol y los triglicéridos son grasas de la sangre que se revisan con análisis. El apoyo se elige según cuál esté elevado, junto con alimentación, actividad física y el tratamiento indicado.",
        symptoms: ['Generalmente no presenta síntomas y se detecta en análisis de sangre', 'Fatiga o pesadez, especialmente en casos con hígado graso asociado', 'En casos avanzados, depósitos de grasa bajo la piel (xantomas)', 'Antecedentes familiares de enfermedad cardiovascular'],
        comboPrincipal: [
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 para alimentación y cuidado del corazón; no equivale a medicamento para triglicéridos altos." },
            { id: 23, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ajo negro para cuidado del corazón; revisar medicamentos para sangrado, presión y glucosa." }
        ],
        comboSecundario: [
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas. Especialmente recomendado si se toman estatinas.', rationale: "Coenzima Q10 para cuidado de las células. Consultar si hay dolor muscular con estatinas; no garantiza resolverlo ni justifica suspenderlas." },
            { id: 136, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Coenzima Q10 como complemento. Consultar por molestias musculares al usar estatinas, sin suspenderlas." },
            { id: 115, serving: '20 gotas', usage: 'Diluir en ¼ de vaso con agua natural y tomar 3 veces al día antes de los alimentos, con revisión médica y seguimiento del perfil de lípidos.', rationale: "Preparación tradicional sin beneficio confirmado para bajar colesterol o triglicéridos. No sustituye medicamentos ni análisis; no sumar con berberina por rutina." },
            { id: 145, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La colina ayuda a utilizar grasas; no reemplaza tratamiento de colesterol o triglicéridos altos." },
            { id: 36, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día con alimentos.', rationale: "Berberina como alternativa complementaria. La ficha declara 1000 mg por dos cápsulas; revisar conveniencia y medicamentos para glucosa, presión o sangrado." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "El cromo participa en aprovechamiento de nutrientes; la mezcla no sustituye tratamiento de colesterol o triglicéridos." }
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
        description: "El cansancio persistente que empeora después del esfuerzo necesita valoración. El apoyo busca cubrir necesidades de alimentación y acompañar el descanso, ajustando las actividades a la energía disponible.",
        symptoms: ['Fatiga severa que dura más de 6 meses y no mejora con el descanso', 'Malestar post-esfuerzo', 'Sueño no reparador', 'Dificultades de memoria o concentración ("niebla mental")'],
        comboPrincipal: [
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El NAD participa en procesos de energía; no se ha demostrado que esta mezcla trate síndrome de fatiga crónica." },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en producción de energía; no garantiza resolver la fatiga." },
            { id: 92, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio ayuda a aprovechar energía y al funcionamiento muscular, especialmente si falta." }
        ],
        comboSecundario: [
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La ashwagandha puede acompañar la respuesta al estrés cotidiano." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Las vitaminas B ayudan a aprovechar energía de los alimentos." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La NAC ayuda a formar glutatión para cuidado de las células; no se ha confirmado que esta fórmula resuelva fatiga crónica." },
            { id: 29, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "El cromo participa en uso de nutrientes; no se presenta como tratamiento del cansancio crónico." }
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
        description: "La caída de cabello puede relacionarse con estrés, cambios hormonales o falta de ciertos nutrientes. Primero se identifica la causa; el apoyo nutricional busca acompañar el cuidado del cabello cuando existe una necesidad.",
        symptoms: ['Pérdida de densidad en toda la cabeza', 'Cabello más fino y quebradizo', 'Caída excesiva al cepillar o lavar'],
        comboPrincipal: [
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: "Colágeno para alimentación y cuidado de tejidos; no se ha demostrado que esta presentación frene caída del cabello." },
            { id: 62, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Biotina y selenio para mantenimiento del cabello, sobre todo si existe una falta nutricional." },
            { id: 107, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas y minerales para complementar alimentación y cuidado del cabello." }
        ],
        comboSecundario: [
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional femenino; no se ha establecido que esta fórmula corrija hormonas o detenga caída del cabello." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El zinc ayuda al mantenimiento del cabello cuando se cubren necesidades del mineral." },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Complemento con hierro y nutrientes; revisar si hay una falta antes de atribuir caída del cabello a alimentación." }
        ],
        lifestyleTips: ['Asegurar un consumo adecuado de proteína y hierro.', 'Masajear el cuero cabelludo.', 'Evitar peinados muy tirantes y el uso excesivo de calor.']
    },
    {
        id: 'caida_cabello_masc',
        name: 'Caída de Cabello (Masculina)',
        emoji: '👨',
        color: 'pink',
        description: "La caída de cabello en hombres suele estar relacionada con la herencia y la respuesta del cabello a las hormonas. Los nutrientes pueden acompañar su cuidado, pero no garantizan que vuelva a crecer.",
        symptoms: ['Retroceso de la línea del cabello (entradas)', 'Pérdida de cabello en la coronilla', 'Cabello progresivamente más fino'],
        comboPrincipal: [
            { id: 106, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc y plantas para cuidado masculino; no se ha establecido que esta mezcla detenga caída del cabello." },
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: "Colágeno como complemento; no se ha demostrado que esta presentación fortalezca o regenere folículos." },
            { id: 78, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc y plantas para cuidado masculino; no prometer bloqueo de hormonas relacionadas con caída del cabello." }
        ],
        comboSecundario: [
            { id: 143, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Complemento nutricional masculino; no se ha demostrado que elevar testosterona trate caída del cabello." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El zinc apoya mantenimiento del cabello si hay necesidad nutricional; no es un bloqueador hormonal." },
            { id: 105, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas y minerales como complemento; no sustituye estudiar la causa de caída del cabello." }
        ],
        lifestyleTips: ['Considerar el uso de minoxidil tópico como complemento.', 'Dieta baja en azúcar para reducir la inflamación.', 'Manejar el estrés.']
    },
    {
        id: 'disfuncion_libido',
        name: 'Disfunción Eréctil y Baja Libido Masculina',
        emoji: '🌶️',
        color: 'pink',
        description: "Los cambios en el deseo sexual o la dificultad para mantener una erección pueden tener causas físicas, emocionales o relacionadas con medicamentos. Las opciones buscan acompañar el bienestar y la vitalidad después de revisar la causa.",
        symptoms: ['Incapacidad para lograr o mantener una erección firme', 'Pérdida de interés o deseo en el sexo', 'Cansancio crónico y falta de vitalidad', 'Bajo rendimiento o pérdida de fuerza'],
        comboPrincipal: [
            { id: 88, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Maca de uso tradicional para vitalidad y bienestar sexual; su respuesta varía." },
            { id: 83, serving: '3 cápsulas (3 g)', usage: 'Tomar esta porción antes del entrenamiento.', rationale: "La arginina participa en circulación, pero no garantiza mejorar erección. Revisar medicamentos para corazón y presión." },
            { id: 106, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: "Zinc y plantas para cuidado masculino; no se ha demostrado que esta mezcla eleve testosterona." }
        ],
        comboSecundario: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción diaria. Con alimentos.', rationale: "El zinc apoya función reproductiva normal; no garantiza elevar testosterona ni mejorar erección." },
            { id: 33, serving: '2 cápsulas', usage: 'Tomar esta porción por la tarde/noche. Con alimentos.', rationale: "La ashwagandha puede acompañar la respuesta al estrés cotidiano." },
            { id: 143, serving: '1 cápsula', usage: 'Tomar esta porción diaria. Con alimentos.', rationale: "Plantas de uso tradicional para vitalidad masculina, sin garantizar mejoría sexual." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no tiene beneficio establecido para tratar problemas de erección." }
        ],
        lifestyleTips: ['Realizar entrenamiento de fuerza (pesas) y rutinas HIIT.', 'Controlar el peso y evitar el exceso de grasa abdominal.', 'Priorizar el descanso profundo (7-8 horas).', 'Reducir el consumo de alcohol y manejar el estrés.']
    },
    {
        id: 'prostata',
        name: 'Salud Prostática',
        emoji: '🚹',
        color: 'pink',
        description: "El crecimiento de la próstata puede dificultar la salida de la orina. Las opciones de apoyo al bienestar masculino se valoran después de una revisión, especialmente si hay dolor, sangre o dificultad importante para orinar.",
        symptoms: ['Necesidad de orinar con frecuencia, especialmente de noche', 'Dificultad para comenzar a orinar', 'Flujo de orina débil o interrumpido', 'Goteo al final de la micción'],
        comboPrincipal: [
            { id: 168, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Pygeum, licopeno y zinc para complementar bienestar de la próstata." },
            { id: 78, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Semilla de calabaza, ciruelo africano y zinc para cuidado masculino; no garantiza reducir tamaño de próstata." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El zinc apoya función reproductiva normal; no trata por sí solo problemas de próstata." }
        ],
        comboSecundario: [
            { id: 6, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El arándano puede ayudar a prevenir algunas infecciones urinarias repetidas; no trata molestias por próstata ni infección activa." },
            { id: 139, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional urinario; no sustituyen revisar dificultad o dolor al orinar." },
            { id: 123, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento; no se ha establecido que esta fórmula trate inflamación de próstata." }
        ],
        lifestyleTips: ['Reducir la ingesta de líquidos antes de dormir.', 'Limitar cafeína y alcohol.', 'Incluir semillas de calabaza en la dieta.']
    },
    {
        id: 'menopausia',
        name: 'Menopausia y Climaterio',
        emoji: '🩷',
        color: 'pink',
        description: "Los cambios hormonales de la menopausia pueden acompañarse de bochornos, sueño irregular y cambios de ánimo. Se elige el apoyo según la molestia principal y los antecedentes de cada mujer.",
        symptoms: ['Bochornos y sudores nocturnos', 'Insomnio y cambios de humor', 'Sequedad vaginal', 'Pérdida de densidad ósea'],
        comboPrincipal: [
            { id: 80, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Las isoflavonas pueden acompañar manejo de bochornos en algunas mujeres; la respuesta varía y requiere revisar antecedentes." },
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional femenino, sin prometer equilibrio hormonal o mejoría del deseo sexual." },
            { id: 94, serving: '2-3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "Fórmula para relajación y descanso, no como tratamiento de menopausia." }
        ],
        comboSecundario: [
            { id: 137, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Shatavari y schisandra de uso tradicional para bienestar y vitalidad femenina." },
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: "Colágeno para alimentación y cuidado de piel; el cuidado de huesos también depende de calcio, vitamina D y ejercicio." },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La ashwagandha puede acompañar la respuesta al estrés cotidiano." },
            { id: 273, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Cohosh negro e isoflavonas para valorar como apoyo a molestias de esta etapa; revisar antecedentes y salud del hígado." }
        ],
        lifestyleTips: ['Vestir en capas para manejar los bochornos.', 'Realizar ejercicio de fuerza para la salud ósea.', 'Incluir soya y linaza en la dieta.']
    },
    {
        id: 'irregularidad_menstrual',
        name: 'Irregularidad Menstrual y SPM',
        emoji: '🩷',
        color: 'pink',
        description: "Los cambios del ciclo y las molestias antes de la menstruación pueden tener distintas causas. La guía ofrece opciones de apoyo al bienestar femenino, después de revisar qué está provocando las molestias.",
        symptoms: ['Ciclos muy largos, cortos o ausentes', 'Cólicos dolorosos', 'Hinchazón, sensibilidad en los senos', 'Irritabilidad o tristeza premenstrual'],
        comboPrincipal: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Inositoles para valorar si hay ovario poliquístico; no toda irregularidad menstrual tiene esa causa." },
            { id: 20, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional femenino; no se ha confirmado que esta fórmula equilibre hormonas o regularice ciclo." },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ashwagandha para acompañar estrés; no corrige por sí sola irregularidad menstrual." }
        ],
        comboSecundario: [
            { id: 94, serving: '2 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "Puede acompañar relajación y descanso; no se ha establecido que esta mezcla quite cólicos." },
            { id: 123, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para complementar alimentación; no regulariza por sí solo el ciclo." },
            { id: 107, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas y minerales para complementar alimentación de la mujer." }
        ],
        lifestyleTips: ['Llevar un registro del ciclo menstrual.', 'Reducir cafeína y sal antes del periodo.', 'Aumentar el consumo de magnesio.']
    },
    {
        id: 'hipotiroidismo',
        name: 'Hipotiroidismo (Apoyo Funcional)',
        emoji: '🟣',
        color: 'purple',
        description: "Cuando la tiroides trabaja menos de lo necesario, pueden aparecer cansancio, frío y otros cambios. El apoyo nutricional se revisa junto con el tratamiento; no todos necesitan los mismos minerales o plantas.",
        symptoms: ['Fatiga, aumento de peso inexplicable', 'Sensibilidad al frío', 'Piel seca, caída de cabello', 'Estreñimiento, niebla mental'],
        comboPrincipal: [
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: "La tirosina participa en formación de hormonas tiroideas, pero tomarla no sustituye hormona recetada ni garantiza mejorar enfermedad." },
            { id: 32, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La ashwagandha puede modificar actividad de tiroides; no recomendar por rutina y revisar tratamiento con el médico." },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Espirulina con nutrientes. La ficha no asegura aporte de yodo; no usar para corregirlo por cuenta propia." }
        ],
        comboSecundario: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc si hay una falta nutricional; no sustituye tratamiento de tiroides." },
            { id: 142, serving: '1 tableta', usage: 'Tomar esta porción al día, únicamente con seguimiento profesional.', rationale: "Selenio para funcionamiento de tiroides; complementar solo si corresponde y evitar exceso." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas B para aprovechar energía; no sustituyen tratamiento de tiroides." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "La coenzima Q10 participa en producción de energía; no se ha demostrado que esta fórmula compense hipotiroidismo." }
        ],
        lifestyleTips: ['Evitar el consumo excesivo de vegetales crudos crucíferos.', 'Asegurar un buen aporte de yodo, selenio y zinc.', 'Consultar al médico para tratamiento hormonal.']
    },
    {
        id: 'hipertiroidismo',
        name: 'Hipertiroidismo (Apoyo sintomático bajo control médico)',
        emoji: '🟣',
        color: 'purple',
        description: "Cuando la tiroides trabaja de más, puede causar palpitaciones, nerviosismo y pérdida de peso. Las opciones de esta guía solo se valoran con el especialista que lleva el tratamiento.",
        symptoms: ['Pérdida de peso involuntaria, nerviosismo, ansiedad', 'Palpitaciones, temblores', 'Intolerancia al calor, sudoración excesiva'],
        comboPrincipal: [
            { id: 150, serving: '1 cápsula', usage: 'Tomar esta porción al día. Preferentemente antes de dormir.', rationale: "Teanina y azahar para acompañar relajación; revisar tratamiento actual y no usar para controlar tiroides." },
            { id: 94, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Preferentemente antes de dormir.', rationale: "Fórmula para relajación y descanso con revisión de medicamentos; no controla actividad de tiroides." },
            { id: 68, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Complemento de una rutina de calma; el beneficio varía y no trata tiroides." }
        ],
        comboSecundario: [
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "NAD y resveratrol para cuidado de las células; no se ha demostrado que esta mezcla mejore hipertiroidismo." },
            { id: 4, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas B si hay necesidad nutricional; no reducen actividad de tiroides." },
            { id: 61, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C para defensas y cuidado celular; revisar plantas si hay enfermedad autoinmune de tiroides." }
        ],
        lifestyleTips: ['Evitar estimulantes como la cafeína.', 'Practicar técnicas de relajación.', 'Mantener una dieta rica en antioxidantes.', 'Seguir control médico y revisión endocrinológica.']
    },

    // ================================================================
    //  🔵 AZUL: Sistema Inmune y Respiratorio
    // ================================================================
    {
        id: 'alergias_respiratorias',
        name: 'Alergias Respiratorias',
        emoji: '🛡️',
        color: 'blue',
        description: "Las alergias pueden causar estornudos, escurrimiento, comezón y congestión al entrar en contacto con polvo, polen u otros desencadenantes. Las opciones de apoyo buscan acompañar el confort respiratorio según el caso.",
        symptoms: ['Estornudos, picazón en nariz y ojos', 'Congestión o secreción nasal', 'Ojos llorosos y rojos', 'Tos seca'],
        comboPrincipal: [
            { id: 178, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Quercetina para cuidado de las células; no se ha confirmado que esta fórmula funcione como medicamento para alergia." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "NAC para moco espeso cuando el profesional la considera adecuada; no trata causa alérgica." },
            { id: 61, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C para defensas; no se presenta como medicamento para quitar alergia." }
        ],
        comboSecundario: [
            { id: 185, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Astrágalo de uso tradicional; no se ha establecido que esta presentación controle alergia." },
            { id: 188, serving: '20 gotas', usage: 'Tomar esta porción al día. Puede tomarse con o sin alimentos.', rationale: "Mentol y propóleo para frescura y confort de garganta; evitar con alergia a productos de abeja." },
            { id: 184, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día como preventivo. Con alimentos.', rationale: "Vitaminas C y D y zinc para defensas; no se ha establecido que esta mezcla controle alergia." },
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Preparar esta porción en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día, preferentemente después de una comida, según la ficha técnica.', rationale: "Infusión caliente de plantas de uso tradicional respiratorio para confort de garganta." },
            { id: 155, serving: '12 ml (1 cucharada)', usage: 'Tomar esta porción cada 4 horas. Puede tomarse con o sin alimentos.', rationale: "Miel y mentol para suavidad y frescura de garganta; revisar alergia al propóleo y azúcar." }
        ],
        lifestyleTips: ['Usar purificadores de aire en casa.', 'Lavar la ropa de cama con agua caliente.', 'Mantener las ventanas cerradas en días de alto polen.']
    },
    {
        id: 'defensas_bajas',
        name: 'Inmunosupresión (Defensas Bajas)',
        emoji: '🛡️',
        color: 'blue',
        description: "La alimentación, el descanso y algunas enfermedades influyen en las defensas. Esta guía ayuda a elegir nutrientes para su funcionamiento normal; una persona con defensas bajas por una enfermedad necesita revisión profesional.",
        symptoms: ['Infecciones frecuentes (gripes, resfriados)', 'Heridas que tardan en sanar', 'Fatiga constante', 'Aftas bucales recurrentes'],
        comboPrincipal: [
            { id: 187, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Calostro y plantas sin beneficio demostrado para generar células madre o corregir defensas bajas. Necesita revisión médica si hay inmunosupresión." },
            { id: 184, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas C y D y zinc para defensas. Revisar medicamentos y plantas si hay inmunosupresión; no sustituye manejo médico." },
            { id: 186, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Calostro como complemento nutricional; no se ha demostrado que esta presentación corrija inmunosupresión." }
        ],
        comboSecundario: [
            { id: 185, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Astrágalo de uso tradicional para valorar con el médico; puede interferir con medicamentos que reducen defensas." },
            { id: 188, serving: '20 gotas', usage: 'Tomar esta porción al día. Puede tomarse con o sin alimentos.', rationale: "Propóleo y mentol para confort de garganta; no ofrece recuperación rápida demostrada de defensas." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Vitamina D para defensas; esta dosis alta requiere necesidad identificada y seguimiento." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc para funcionamiento de defensas, especialmente si alimentación no cubre necesidades." },
            { id: 202, serving: '2 cápsulas', usage: 'Tomar esta porción al día con el estómago vacío.', rationale: "Calostro con plantas como alternativa al 186; elegir uno y revisar con el médico si hay defensas bajas." },
            { id: 244, serving: '1 cápsula', usage: 'Tomar esta porción al día, por la mañana o por la noche.', rationale: "Hongos y probióticos como complemento; evitar sumar mezclas y revisar seguridad si hay inmunosupresión." }
        ],
        lifestyleTips: ['Dormir 7-8 horas diarias.', 'Aumentar el consumo de frutas y verduras ricas en Vitamina C.', 'Reducir el estrés crónico.', 'Otros apoyos inmunológicos de la tienda: CAFÉ CON MORINGA, MORINGA ORGÁNICA, AJO NEGRO + MORINGA, CUATECOMATE y HONIG ABAGREEN VERDE/ROJO.']
    },
    {
        id: 'resfriado_comun',
        name: 'Resfriado Común y Malestar Estacional',
        emoji: '🤧',
        color: 'blue',
        description: "El resfriado suele mejorar con descanso, líquidos y tiempo. Las opciones de esta guía acompañan el confort de garganta y las necesidades de alimentación mientras la persona se recupera.",
        symptoms: ['Congestión o secreción nasal', 'Estornudos y garganta irritada', 'Tos leve', 'Malestar general sin dificultad respiratoria'],
        comboPrincipal: [
            { id: 55, serving: '1 cápsula', usage: 'Tomar esta porción al día por la mañana, con alimentos que contengan grasas.', rationale: "Vitaminas C y D para defensas; el beneficio de equinácea en resfriado es variable." },
            { id: 152, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Zinc para defensas con jengibre de uso tradicional digestivo; elegir una fórmula de zinc." },
            { id: 243, serving: '10 ml', usage: 'Tomar esta porción durante el día o acompañada de té, según la ficha técnica.', rationale: "Miel y plantas para suavizar garganta y acompañar tos; no dar miel a menores de un año." }
        ],
        comboSecundario: [
            { id: 61, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Alternativa al 55 para defensas; no duplicar ambas mezclas." },
            { id: 212, serving: '1 tableta', usage: 'Tomar esta porción al día con alimentos.', rationale: "Otra presentación de zinc como alternativa al 152; elegir una sola." },
            { id: 155, serving: '12 ml', usage: 'Tomar esta porción con o sin alimentos según la frecuencia indicada en la ficha técnica.', rationale: "Miel y mentol para suavidad y frescura de garganta como alternativa líquida." }
        ],
        lifestyleTips: ['Descansar y mantener una buena hidratación.', 'Usar solución salina nasal y humidificación limpia.', 'Evitar antibióticos para un resfriado viral.', 'Distinguir síntomas compatibles con influenza o COVID-19 cuando circulen estos virus.']
    },
    {
        id: 'tos_irritacion_garganta',
        name: 'Tos Seca e Irritación de Garganta',
        emoji: '🗣️',
        color: 'blue',
        description: "La tos seca puede aparecer por irritación, aire seco, reflujo o después de una infección. Se elige una opción para humectar y dar confort a la garganta, sin perder de vista la causa.",
        symptoms: ['Cosquilleo o ardor en la garganta', 'Tos sin flema', 'Ronquera o necesidad frecuente de aclarar la garganta', 'Molestia que empeora por la noche o al hablar'],
        comboPrincipal: [
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Tomar esta porción después de una comida, preparada como infusión.', rationale: "Infusión caliente para aportar líquido y confort de garganta." },
            { id: 243, serving: '10 ml', usage: 'Tomar esta porción durante el día o acompañada de té, según la ficha técnica.', rationale: "La miel puede suavizar garganta; las plantas complementan su uso tradicional respiratorio." },
            { id: 155, serving: '12 ml', usage: 'Tomar esta porción con o sin alimentos según la frecuencia indicada en la ficha técnica.', rationale: "Otra opción con miel y propóleo para suavizar garganta; elegir un solo jarabe de miel." }
        ],
        comboSecundario: [
            { id: 188, serving: '20 gotas (1 ml)', usage: 'Tomar esta porción al día, directa o diluida.', rationale: "Propóleo y mentol para confort de garganta; evitar con alergia a productos de abeja." },
            { id: 179, serving: '15 ml', usage: 'Tomar esta porción con o sin alimentos según la ficha técnica.', rationale: "Jarabe de uso tradicional respiratorio como alternativa líquida; no sumar varios jarabes." },
            { id: 22, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ajo negro y propóleo como complemento; una tos persistente necesita revisión." }
        ],
        lifestyleTips: ['Beber líquidos y evitar humo, aerosoles y aire muy seco.', 'No dar miel a menores de un año.', 'Observar si la tos se relaciona con reflujo, alergias o medicamentos.', 'Evitar hablar en exceso cuando existe ronquera.']
    },
    {
        id: 'tos_flema_congestion',
        name: 'Tos con Flema y Congestión Bronquial',
        emoji: '🫁',
        color: 'blue',
        description: "La tos con flema ayuda a sacar el moco de las vías respiratorias. Las opciones acompañan la hidratación, el confort y la salida de secreciones; la causa se revisa si persiste o empeora.",
        symptoms: ['Tos con expectoración', 'Sensación de moco espeso o difícil de expulsar', 'Congestión en el pecho', 'Ruidos respiratorios asociados a secreciones'],
        comboPrincipal: [
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "La NAC puede ayudar a hacer menos espeso el moco cuando el profesional la considera adecuada." },
            { id: 201, serving: '10 ml', usage: 'Tomar esta porción después de los alimentos.', rationale: "Plantas tradicionales para confort respiratorio. Contiene alcohol y no es apropiado para niños." },
            { id: 243, serving: '10 ml', usage: 'Tomar esta porción durante el día o acompañada de té, según la ficha técnica.', rationale: "La miel ayuda a suavizar garganta; elegir como alternativa para acompañar tos." }
        ],
        comboSecundario: [
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Tomar esta porción después de una comida, preparada como infusión.', rationale: "Infusión caliente que aporta líquido y puede dar confort de garganta." },
            { id: 156, serving: '20 ml', usage: 'Tomar esta porción con o sin alimentos según la frecuencia indicada en la ficha técnica.', rationale: "Miel y propóleo como alternativa líquida para garganta; tomar en cuenta azúcar." },
            { id: 179, serving: '15 ml', usage: 'Tomar esta porción con o sin alimentos según la ficha técnica.', rationale: "Jarabe de uso tradicional respiratorio como alternativa; elegir uno solo." }
        ],
        lifestyleTips: ['Mantener hidratación suficiente para facilitar la movilización del moco.', 'Evitar tabaco, vapeo y humo de leña.', 'No suprimir automáticamente una tos productiva.', 'Vigilar cambios importantes en cantidad, color u olor de la flema.']
    },
    {
        id: 'congestion_nasal_sinusal',
        name: 'Congestión Nasal y Presión Sinusal',
        emoji: '👃',
        color: 'blue',
        description: "La nariz tapada y la presión en la cara pueden aparecer con alergias o resfriados. El apoyo se enfoca en hidratación y manejo de secreciones según las molestias de la persona.",
        symptoms: ['Nariz tapada o secreción espesa', 'Presión en frente, mejillas o alrededor de los ojos', 'Goteo hacia la garganta', 'Disminución temporal del olfato'],
        comboPrincipal: [
            { id: 178, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Quercetina como complemento; no se ha confirmado que esta fórmula alivie alergia o destape nariz." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "NAC para moco espeso; no quita por sí sola causa de congestión." },
            { id: 201, serving: '10 ml', usage: 'Tomar esta porción después de los alimentos.', rationale: "Plantas tradicionales para confort respiratorio; revisar edad, alcohol y medicamentos." }
        ],
        comboSecundario: [
            { id: 170, serving: '1 sobre (2 g) por taza', usage: 'Tomar esta porción después de una comida, preparada como infusión.', rationale: "Una infusión caliente aporta líquido y puede dar confort de garganta." },
            { id: 188, serving: '20 gotas (1 ml)', usage: 'Tomar esta porción al día, directa o diluida.', rationale: "Mentol y propóleo para frescura y confort; evitar con alergia a productos de abeja." },
            { id: 243, serving: '10 ml', usage: 'Tomar esta porción durante el día o acompañada de té, según la ficha técnica.', rationale: "La miel ayuda a suavizar garganta irritada por goteo nasal; no destapa nariz de inmediato." }
        ],
        lifestyleTips: ['Usar lavado nasal únicamente con solución salina y agua segura.', 'Mantener una hidratación adecuada.', 'Evitar humo y alérgenos identificados.', 'No usar aceites esenciales directamente dentro de la nariz.']
    },
    {
        id: 'convalecencia_respiratoria',
        name: 'Convalecencia Después de Infección Respiratoria',
        emoji: '🌱',
        color: 'blue',
        description: "Después de una enfermedad respiratoria pueden quedar cansancio y poco apetito. Las opciones nutricionales ayudan a cubrir lo que falta en la alimentación mientras se retoman el descanso y las actividades poco a poco.",
        symptoms: ['Cansancio posterior a la infección', 'Apetito reducido', 'Debilidad o baja tolerancia a la actividad', 'Sensación de recuperación lenta sin síntomas agudos graves'],
        comboPrincipal: [
            { id: 202, serving: '2 cápsulas', usage: 'Tomar esta porción al día con el estómago vacío.', rationale: "Calostro y plantas como complemento según valoración; no se ha confirmado que aceleren recuperación." },
            { id: 244, serving: '1 cápsula', usage: 'Tomar esta porción al día, por la mañana o por la noche.', rationale: "Hongos y probióticos para bienestar digestivo y alimentación; no garantizan recuperar defensas." },
            { id: 100, serving: '3 cápsulas', usage: 'Distribuir esta porción durante el día, antes de las comidas.', rationale: "Moringa para incorporar compuestos vegetales y complementar alimentación variada." }
        ],
        comboSecundario: [
            { id: 21, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Ajo negro y moringa como alternativa para alimentación y cuidado de las células." },
            { id: 38, serving: '1 sobre (20 g)', usage: 'Preparar esta porción según la ficha técnica y consumir preferentemente durante la mañana.', rationale: "Café con plantas como bebida opcional si tolera cafeína; no sustituye descanso." },
            { id: 40, serving: '1 sobre (4.5 g)', usage: 'Preparar esta porción por la mañana según la ficha técnica.', rationale: "Otra bebida con café y hongos como alternativa al 38; elegir una opción con cafeína." }
        ],
        lifestyleTips: ['Retomar la actividad física gradualmente.', 'Priorizar sueño, hidratación, proteína y alimentos variados.', 'Evitar depender de cafeína cuando existe insomnio o palpitaciones.', 'Diferenciar convalecencia de fiebre nueva o empeoramiento respiratorio.']
    },
    {
        id: 'asma_diagnosticada',
        name: 'Asma Diagnosticada (Apoyo Nutricional, No de Rescate)',
        emoji: '🫁',
        color: 'blue',
        description: "El asma necesita un plan de control e inhaladores cuando se indican. El apoyo nutricional puede cubrir necesidades de la persona, pero ningún producto de esta guía reemplaza su inhalador.",
        symptoms: ['Sibilancias recurrentes', 'Opresión en el pecho', 'Tos nocturna o con ejercicio', 'Episodios de falta de aire con desencadenantes definidos'],
        comboPrincipal: [
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento; no controla una crisis ni sustituye inhaladores." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas sólo cuando exista insuficiencia de vitamina D.', rationale: "Vitamina D de dosis alta para falta documentada; no sirve como rescate de una crisis." },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche únicamente cuando el aporte de magnesio sea apropiado.', rationale: "Fórmula con magnesio solo si hay necesidad nutricional; no abre vías respiratorias durante crisis." }
        ],
        comboSecundario: [
            { id: 178, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Quercetina como complemento sin beneficio establecido para controlar asma." },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos sólo si la dieta no cubre la vitamina C necesaria.', rationale: "Vitamina C para necesidad nutricional; no abre vías respiratorias." },
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos sólo cuando existan secreciones espesas y sea bien tolerada.', rationale: "NAC para moco espeso solo según valoración; no sustituye inhalador ni se usa como rescate." }
        ],
        lifestyleTips: ['Conservar disponible el inhalador de rescate indicado.', 'Identificar desencadenantes como humo, polvo, ejercicio o alérgenos.', 'Revisar periódicamente la técnica del inhalador.', 'No usar suplementos para intentar detener una crisis.']
    },
    {
        id: 'epoc_diagnosticada',
        name: 'EPOC Diagnosticada (Apoyo Nutricional)',
        emoji: '🫁',
        color: 'blue',
        description: "La EPOC es una enfermedad del pulmón que dificulta respirar y requiere atención continua. El apoyo se centra en alimentación, cuidado de los músculos y manejo de secreciones, según lo que autorice el equipo tratante.",
        symptoms: ['Falta de aire persistente al esfuerzo', 'Tos crónica con o sin flema', 'Menor tolerancia a la actividad', 'Pérdida de peso o masa muscular en algunos casos'],
        comboPrincipal: [
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos cuando predominen secreciones espesas.', rationale: "La NAC puede ayudar con moco espeso; su conveniencia depende de síntomas y tratamiento actual." },
            { id: 113, serving: '34 g (1 scoop)', usage: 'Tomar esta porción entre comidas cuando la alimentación no cubra la meta de proteína.', rationale: "Proteína para completar alimentación y conservar músculos." },
            { id: 123, serving: '3 cápsulas', usage: 'Tomar esta porción al día con un desayuno que contenga grasas.', rationale: "Omega 3 para complementar alimentación y cuidado del corazón." }
        ],
        comboSecundario: [
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas sólo ante insuficiencia documentada.', rationale: "Vitamina D de dosis alta para falta identificada; no mejora automáticamente funcionamiento de pulmones." },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche sólo cuando el aporte de magnesio sea apropiado.', rationale: "Fórmula con magnesio si hay necesidad; revisar tolerancia, medicamentos y riñones." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con una comida que contenga grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado beneficio específico de esta fórmula para respirar mejor." }
        ],
        lifestyleTips: ['Evitar completamente tabaco, vapeo y humo de leña.', 'Mantener rehabilitación pulmonar y actividad adaptada.', 'Asegurar suficiente proteína y energía si existe pérdida de peso.', 'Mantener al día las medidas preventivas y el tratamiento inhalado indicado.']
    },

    // ================================================================
    //  🟡 AMARILLO: Sistema Locomotor y Deportivo
    // ================================================================
    {
        id: 'desgaste_articular',
        name: 'Desgaste Articular y Artrosis',
        emoji: '💪',
        color: 'yellow',
        description: "El desgaste de las articulaciones puede causar dolor, rigidez y dificultad para moverse. Las opciones buscan acompañar el cuidado articular, junto con movimiento adaptado y el seguimiento que corresponda.",
        symptoms: ['Dolor en las articulaciones durante o después del movimiento', 'Rigidez matutina', 'Pérdida de flexibilidad', 'Sonido de "crujido" al mover la articulación'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: "Mezcla para acompañar confort articular y movilidad; elegir según tolerancia y medicamentos." },
            { id: 30, serving: '30 g', usage: 'Tomar esta porción al día. En ayunas o como reemplazo de comida.', rationale: "Proteína, vitaminas y omega 3 como complemento; verificar en envase unidad de vitamina D antes de recomendar." },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día con comidas.', rationale: "Cúrcuma para cuidado de las células y valorar como apoyo al confort articular." }
        ],
        comboSecundario: [
            { id: 125, serving: '10 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: "Colágeno para alimentación y cuidado articular; no regenera cartílago por sí solo." },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Colágeno y ácido hialurónico para complementar cuidado de piel y articulaciones." },
            { id: 31, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Glucosamina, condroitina y MSM para cuidado articular; no prometer reparación de cartílago." },
            { id: 157, serving: '1 cápsula', usage: 'Tomar esta porción al día. Después de las comidas.', rationale: "Glucosamina, cúrcuma y nutrientes para complementar cuidado de articulaciones, huesos y músculos." },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje y confort local; no sustituye valorar causa del dolor ni cuidado de articulación." }
        ],
        lifestyleTips: ['Mantener un peso saludable.', 'Ejercicios de bajo impacto como natación o ciclismo.', 'Aplicar calor o frío para aliviar el dolor.', 'Consumir TÉ JENGIBRE Y CÚRCUMA.', 'Aplicar FIX UZEN.', 'Otras opciones articulares de la tienda: CARTÍLAGO PRONAT y MOROIZY / MOROIZY GEL.']
    },
    {
        id: 'osteoporosis',
        name: 'Osteoporosis y Salud Ósea',
        emoji: '💪',
        color: 'yellow',
        description: "La osteoporosis hace que los huesos sean más frágiles y se rompan con mayor facilidad. El apoyo nutricional busca cubrir las necesidades de calcio, vitamina D y proteína junto con el plan indicado.",
        symptoms: ['Generalmente asintomático hasta una fractura por fragilidad', 'Pérdida de estatura', 'Postura encorvada', 'Dolor de espalda'],
        comboPrincipal: [
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Vitamina D para absorber calcio; esta dosis alta requiere valoración y seguimiento." },
            { id: 125, serving: '10-20 g', usage: 'Tomar esta porción al día, en ayunas o entre comidas.', rationale: "Colágeno como complemento; no sustituye calcio, vitamina D ni tratamiento de osteoporosis." },
            { id: 154, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Calcio con vitamina D3 para huesos y dientes; revisar calcio de toda la dieta." }
        ],
        comboSecundario: [
            { id: 46, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Magnesio si se necesita; revisar riñones y cantidad antes de recomendar." },
            { id: 91, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Mezcla de magnesio como complemento; no equivale a tratamiento de osteoporosis." },
            { id: 126, serving: '11 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Colágeno con ácido hialurónico como alternativa al 125; no sumar ambos por rutina." },
            { id: 110, serving: '1 perla', usage: 'Tomar esta porción al día. Durante la comida principal.', rationale: "Vitamina E para cuidado de las células; no se ha demostrado que esta presentación prevenga fracturas." }
        ],
        lifestyleTips: ['Ejercicios de impacto o con peso (caminar, pesas).', 'Dieta rica en calcio (verdes, sardinas).', 'Evitar el tabaquismo y el exceso de alcohol.']
    },
    {
        id: 'sarcopenia_fragilidad',
        name: 'Sarcopenia y Fragilidad en Personas Mayores (Apoyo Supervisado)',
        emoji: '🧓',
        color: 'yellow',
        description: "Con la edad, la falta de actividad o algunas enfermedades se pueden perder músculo y fuerza. La alimentación suficiente y el ejercicio adaptado son la base; los productos ayudan a cubrir necesidades concretas de proteína y otros nutrientes.",
        symptomsTitle: 'Datos a identificar y derivar:',
        protocolTitle: 'Opciones de apoyo nutricional individualizado:',
        symptoms: ['Pérdida visible de masa o peso involuntario', 'Dificultad para levantarse de una silla o subir escaleras', 'Marcha más lenta o debilidad de agarre', 'Caídas frecuentes o temor a caer', 'Baja ingesta, falta de apetito o dificultad para tragar', 'Pérdida funcional después de hospitalización o reposo prolongado'],
        comboPrincipal: [
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar una vez al día después del ejercicio o entre comidas, únicamente si el nutriólogo determina que la alimentación no cubre la meta individual de proteína.', rationale: "Proteína para completar alimentación y conservar músculo. La cantidad se adapta a cada persona y no sustituye comidas completas." },
            { id: 7, serving: '5 g', usage: 'Tomar una vez al día de forma constante; en días de entrenamiento puede usarse después de la sesión y en días de descanso con una comida.', rationale: "Creatina para acompañar ejercicio de fuerza y cuidado muscular. Revisar riñones e hidratación antes de usar." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar una vez al día con alimentos que contengan grasas, solo si existe insuficiencia documentada y un profesional define el seguimiento.', rationale: "Vitamina D de dosis alta para falta identificada; no genera músculo por sí sola y necesita seguimiento." }
        ],
        comboSecundario: [
            { id: 154, serving: '2 cápsulas', usage: 'Tomar una vez al día con alimentos únicamente cuando el plan nutricional identifique ingesta insuficiente de calcio o riesgo óseo.', rationale: "Calcio y vitamina D para huesos. Revisar calcio total, riñones y medicamentos; no trata directamente pérdida de músculo." },
            { id: 225, serving: '1 pastilla', usage: 'Masticar o disolver completamente en la boca una vez al día, solo ante deficiencia, dieta vegetal estricta, malabsorción o indicación profesional.', rationale: "B12 si hay falta documentada. No asumir que todo cansancio o debilidad de una persona mayor se deba a esta vitamina." },
            { id: 159, serving: '3 cápsulas', usage: 'Tomar una cápsula antes de cada comida principal únicamente cuando la evaluación dietética muestre una ingesta insuficiente o restrictiva.', rationale: "Vitaminas y minerales si alimentación no cubre necesidades; no sustituyen proteína, comida suficiente, ejercicio ni revisar pérdida de peso." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas, únicamente si el profesional lo autoriza.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula recupere músculo perdido." }
        ],
        lifestyleTips: ['Realizar entrenamiento de fuerza adaptado y supervisado de forma regular, además de ejercicios de equilibrio.', 'Distribuir alimentos con proteína a lo largo del día; el nutriólogo debe calcular la cantidad total, especialmente en enfermedad renal o hepática.', 'Evaluar pérdida de peso, dentición, deglución, depresión, medicamentos y otras causas de baja ingesta.', 'No combinar varias proteínas, creatinas o multivitamínicos: elegir una opción según dieta, tolerancia y objetivo.', 'Una caída con lesión, debilidad de aparición reciente, dificultad para tragar o pérdida rápida de peso requiere valoración médica.']
    },
    {
        id: 'fuerza_hipertrofia',
        name: 'Fuerza, Potencia e Hipertrofia (Objetivo Deportivo)',
        emoji: '🏋️',
        color: 'yellow',
        description: "Para ganar fuerza y músculo importan el entrenamiento constante, comer suficiente y descansar. La proteína y la creatina pueden ayudar según la dieta y el objetivo; no hace falta tomar todos los productos de la guía.",
        symptomsTitle: 'Objetivo y contexto:',
        protocolTitle: 'Opciones de suplementación; elegir según necesidad:',
        symptoms: ['Mejorar fuerza o potencia con entrenamiento estructurado', 'Aumentar masa muscular con sobrecarga progresiva', 'Cubrir una brecha real de proteína en la alimentación', 'Mantener rendimiento en series o esfuerzos repetidos', 'Contar con descanso y consumo energético adecuados'],
        comboPrincipal: [
            { id: 7, serving: '5 g', usage: 'Tomar una vez al día de forma constante, incluidos los días de descanso. En días de entrenamiento puede usarse después de la sesión, de acuerdo con la ficha.', rationale: "La creatina puede mejorar fuerza y esfuerzos repetidos con entrenamiento. Elegir una presentación; no necesita alternarse por ciclos." },
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar una vez al día después del entrenamiento o entre comidas únicamente cuando la dieta no cubra la proteína necesaria.', rationale: "Proteína para completar meta diaria y apoyar músculos; no exige tomarla dentro de un plazo exacto después de entrenar." },
            { id: 83, serving: '3 cápsulas (3 g)', usage: 'Tomar antes de la actividad física según la ficha técnica y suspender si causa mareo, malestar gastrointestinal o disminución excesiva de la presión.', rationale: "Arginina y ornitina antes de entrenar, con beneficio variable. Revisar medicamentos para corazón o presión y productos similares." }
        ],
        comboSecundario: [
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar una vez al día con un desayuno que contenga grasas y revisar anticoagulantes o riesgo de sangrado.', rationale: "Omega 3 como complemento; no sustituye proteína, creatina o entrenamiento ni garantiza más músculo." },
            { id: 92, serving: '2 cápsulas', usage: 'Tomar una vez al día con alimentos solamente si la alimentación o la valoración profesional indican una ingesta insuficiente de magnesio.', rationale: "Magnesio si hay necesidad nutricional; no garantiza más fuerza cuando ya se cubren necesidades." },
            { id: 159, serving: '3 cápsulas', usage: 'Tomar una cápsula antes de cada comida principal únicamente si existe dieta restrictiva, ingesta insuficiente o una necesidad identificada.', rationale: "Vitaminas y minerales para faltantes de alimentación; no mejoran automáticamente rendimiento." }
        ],
        lifestyleTips: ['Elegir una sola creatina: Birdman, Nano Fear o Refresher.', 'Elegir una sola proteína según dieta y tolerancia: WPI 90, whey, vegetal, huevo o ISOFEAR.', 'BEEF FEAR ya combina proteína y creatina; si se elige, no añadir otra creatina.', 'La proteína total diaria y la constancia del entrenamiento importan más que una ventana rígida postentrenamiento.', 'Dolor torácico, desmayo, palpitaciones nuevas, falta de aire desproporcionada u orina oscura requieren suspender el ejercicio y buscar atención.']
    },
    {
        id: 'resistencia_deportiva',
        name: 'Resistencia y Sesiones Prolongadas (Apoyo Deportivo)',
        emoji: '🚴',
        color: 'yellow',
        description: "En sesiones largas o con mucho calor es importante reponer agua, sales y energía. Cada opción tiene una función: hidratación, aporte de energía o recuperación; se elige según la duración del ejercicio y la alimentación.",
        symptomsTitle: 'Objetivo y contexto:',
        protocolTitle: 'Opciones de hidratación, combustible y recuperación:',
        symptoms: ['Entrenamientos intensos de más de 60-70 minutos', 'Competencias o sesiones en clima caluroso', 'Dos sesiones el mismo día o recuperación corta', 'Necesidad de reponer energía después del esfuerzo', 'Sudoración elevada o cambios importantes de peso durante la sesión'],
        comboPrincipal: [
            { id: 191, serving: '1 cucharada medidora (10 g)', usage: 'Disolver en 500 ml de agua y tomar antes o durante el entrenamiento, según la ficha. Elegir esta presentación o Refresher Pink, nunca ambas.', rationale: "Creatina y minerales para complementar hidratación. No aporta azúcar ni energía: el ejercicio prolongado puede necesitar alimentos o bebidas con carbohidratos." },
            { id: 96, serving: '1 medida (245 g)', usage: 'Diluir en 500-700 ml de agua o leche y tomar antes o después del entrenamiento, según la ficha. Por su alta densidad energética, ajustar su inclusión a la meta calórica y a la tolerancia digestiva.', rationale: "Carbohidratos y proteína para reponer energía después de esfuerzo alto o sumar calorías; no es bebida para hidratar durante competencia." },
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar después del entrenamiento o entre comidas cuando la dieta no cubra la proteína; no utilizar como sustituto de los carbohidratos durante la sesión.', rationale: "Proteína para conservar y recuperar músculos; no sustituye agua ni energía durante ejercicio prolongado." }
        ],
        comboSecundario: [
            { id: 97, serving: '2.5 g (1 cucharada)', usage: 'Preparar una vez al día por la mañana o antes de una sesión temprana, evitando su uso tarde si altera el sueño.', rationale: "La cafeína natural del matcha ayuda a estar alerta. Como no se indica cuánto contiene, no garantiza un efecto concreto en rendimiento." },
            { id: 92, serving: '2 cápsulas', usage: 'Tomar una vez al día con alimentos únicamente si existe ingesta insuficiente o deficiencia identificada; no usar como reposición inmediata del sudor.', rationale: "Magnesio si hay necesidad; no evita todos los calambres ni sustituye agua, sal y energía durante ejercicio." },
            { id: 159, serving: '3 cápsulas', usage: 'Tomar una cápsula antes de cada comida principal solo cuando una dieta restrictiva o la evaluación nutricional muestre una brecha de micronutrientes.', rationale: "Vitaminas y minerales para faltantes de dieta; no dan energía inmediata ni mejoran por sí solos resistencia." }
        ],
        lifestyleTips: ['Para ejercicio prolongado, ajustar carbohidratos y líquidos a la duración, intensidad, clima y tasa de sudoración; CREATINA REFRESHER aporta electrolitos sin carbohidratos y MASS FEAR aporta una carga alta de carbohidratos para antes o después, no para beber durante la sesión.', 'Beber de acuerdo con sed, clima, duración y tasa de sudoración; beber agua en exceso también puede causar hiponatremia.', 'Probar cualquier estrategia durante el entrenamiento antes de usarla en competencia.', 'Creatina Refresher Lemon (522 mg de sodio, 170 mg de potasio y 61 mg de magnesio) y Pink (523 mg de sodio, 174.5 mg de potasio y 61 mg de magnesio) son variantes de sabor, no productos para combinar.', 'Confusión, colapso por calor, vómito persistente, cefalea intensa o aumento de peso durante una prueba prolongada requieren suspender y buscar atención.']
    },
    {
        id: 'recuperacion_deportiva',
        name: 'Recuperación Entre Sesiones (Apoyo Deportivo)',
        emoji: '🔄',
        color: 'yellow',
        description: "Después del ejercicio, el cuerpo necesita agua, alimentos suficientes, proteína y descanso. Las opciones de esta guía ayudan a cubrir esas necesidades según el esfuerzo realizado; no están destinadas a tratar lesiones.",
        symptomsTitle: 'Objetivo y contexto:',
        protocolTitle: 'Opciones de apoyo; seleccionar solo las necesarias:',
        symptoms: ['Poco tiempo entre dos sesiones o competencias', 'Dificultad para cubrir energía o proteína con alimentos', 'Dolor muscular esperado después de una carga nueva', 'Disminución transitoria del rendimiento por fatiga acumulada', 'Necesidad de revisar sueño, hidratación y programación del entrenamiento'],
        comboPrincipal: [
            { id: 113, serving: '1 scoop (34 g)', usage: 'Tomar después del entrenamiento o entre comidas cuando la alimentación no alcance la meta individual de proteína.', rationale: "Proteína para apoyar recuperación y mantenimiento muscular; no elimina siempre dolor ni exige plazo exacto para tomarla." },
            { id: 96, serving: '1 medida (245 g)', usage: 'Diluir en 500-700 ml de agua o leche y tomar antes o después del entrenamiento cuando exista una necesidad energética alta, considerando la meta calórica y la tolerancia digestiva.', rationale: "Carbohidratos y proteína para reponer energía y sumar calorías si se necesitan; incluir ese aporte en alimentación diaria." },
            { id: 123, serving: '3 cápsulas (3 g)', usage: 'Tomar una vez al día con un desayuno que contenga grasas, revisando anticoagulantes y riesgo de sangrado.', rationale: "Omega 3 como complemento opcional; los resultados para molestias musculares varían y no garantiza acelerar recuperación." }
        ],
        comboSecundario: [
            { id: 125, serving: '10 g', usage: 'Tomar una vez al día en ayunas o entre comidas, como opción para tejido conectivo y no como sustituto de una proteína completa.', rationale: "Colágeno para cuidado de tendones y otros tejidos. No equivale a proteína completa para desarrollar músculo." },
            { id: 92, serving: '2 cápsulas', usage: 'Tomar una vez al día con alimentos solo cuando exista ingesta insuficiente o deficiencia identificada.', rationale: "Magnesio para necesidad nutricional; no es recuperador universal ni previene todos los calambres." },
            { id: 71, serving: '5 g', usage: 'Tomar después del entrenamiento o antes de dormir según la ficha, únicamente como opción secundaria y después de cubrir energía y proteína.', rationale: "Glutamina como complemento sin beneficio confirmado para rendimiento, crecimiento muscular o dolor después de entrenar en personas bien alimentadas." }
        ],
        lifestyleTips: ['Priorizar comidas con carbohidratos y proteína, hidratación individualizada y al menos 7-9 horas de sueño.', 'Ajustar volumen e intensidad si el rendimiento disminuye varios días; más suplementos no corrigen una carga mal programada.', 'Elegir una sola proteína; las variantes de whey, vegetal, huevo o beef son alternativas según dieta y tolerancia.', 'Dolor localizado intenso, inflamación marcada, incapacidad para apoyar, debilidad extrema u orina oscura no son DOMS normales y requieren valoración.', 'En deportistas sujetos a controles antidopaje, preferir productos con certificación independiente del lote.']
    },
    {
        id: 'neuropatia_periferica',
        name: 'Neuropatía Periférica',
        emoji: '⚡',
        color: 'purple',
        description: "El daño de los nervios puede causar hormigueo, ardor, dolor o pérdida de sensibilidad. El apoyo nutricional depende de la causa, como diabetes o falta de vitaminas, y se elige junto con el tratamiento indicado.",
        symptoms: ['Entumecimiento, hormigueo o sensación de "alfileres y agujas"', 'Dolor punzante, ardoroso o eléctrico', 'Sensibilidad extrema al tacto', 'Debilidad muscular', 'Falta de coordinación'],
        comboPrincipal: [
            { id: 17, serving: '1-2 cápsulas', usage: 'Tomar esta porción diariamente, con alimentos.', rationale: "Ácido alfa lipoico para valorar ante molestias de los nervios; no regenera nervios ni sustituye tratar causa." },
            { id: 5, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas B para nervios si hay necesidad nutricional; no prometer reparación del daño." },
            { id: 120, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Omega 3 con grasas importantes para cerebro y nervios, sin garantizar reparación de lesiones." }
        ],
        comboSecundario: [
            { id: 92, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya funcionamiento normal de nervios y músculos." },
            { id: 12, serving: '1 cápsula', usage: 'Tomar esta porción dos veces al día. Con alimentos que contengan grasas.', rationale: "Cúrcuma, jengibre y moringa para alimentación y cuidado de las células." },
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción diarias. Con alimentos.', rationale: "La melena de león se estudia para bienestar mental; no se ha confirmado que esta fórmula regenere nervios." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula repare daño de nervios." }
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
        description: "Durante el tratamiento del cáncer pueden cambiar el apetito, la energía y las necesidades de alimentación. El equipo de oncología debe autorizar cualquier suplemento y revisar su combinación con el tratamiento antes de recomendarlo.",
        symptoms: ['Fatiga extrema por quimio/radioterapia', 'Bajas defensas', 'Pérdida de masa muscular', 'Inflamación sistémica'],
        comboPrincipal: [
            { id: 187, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Calostro y plantas sin beneficio demostrado para cáncer. Contiene fo-ti y necesita revisión del equipo tratante por posibles problemas del hígado e interacciones." },
            { id: 124, serving: '2 tabletas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Hongos y plantas sin beneficio demostrado para tratar cáncer; revisar todos los ingredientes con equipo tratante." },
            { id: 54, serving: '3-6 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Cúrcuma como complemento solo con aprobación del equipo tratante; puede interferir con medicamentos y no trata cáncer." },
            { id: 66, serving: '56 ml', usage: 'Considerar únicamente con autorización expresa del oncólogo. Seguir la ficha técnica y no usar durante quimioterapia o radioterapia sin revisión de posibles interacciones.', rationale: "Plantas de uso tradicional sin beneficio específico confirmado durante tratamiento de cáncer; necesitan revisión del equipo tratante." }
        ],
        comboSecundario: [
            { id: 185, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Astrágalo de uso tradicional sin beneficio confirmado de esta presentación durante tratamiento de cáncer. Revisar interacciones." },
            { id: 186, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Calostro como complemento nutricional, sin beneficio confirmado para recuperar defensas o reparar tejidos durante tratamiento de cáncer." },
            { id: 98, serving: '2-4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "No se ha demostrado que esta fórmula evite daño a nervios por tratamiento de cáncer. Revisar con equipo tratante antes de usar." },
            { id: 101, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "No se ha demostrado que esta fórmula evite daño al corazón por tratamiento de cáncer. Revisar con equipo tratante antes de usar." },
            { id: 111, serving: '1-2 scoops', usage: 'Tomar esta porción al día. Dentro de los 45 minutos posteriores al entrenamiento.', rationale: "Proteína para completar alimentación si hay pérdida muscular; nutrición debe definir cantidad según necesidades y tolerancia." },
            { id: 142, serving: '1 tableta', usage: 'Considerar únicamente después de la quimioterapia y con autorización del oncólogo, especialmente si existe deficiencia documentada. No iniciar durante quimioterapia, radioterapia o tratamiento de mantenimiento sin indicación expresa.', rationale: "Selenio solo con falta identificada e indicación del equipo tratante. No se recomienda por rutina ni se ha demostrado que trate cáncer o evite su regreso." }
        ],
        lifestyleTips: ['Mantener una dieta antiinflamatoria rica en vegetales y grasas saludables.', 'Priorizar el descanso y el manejo del estrés.', 'Comunicación constante con el equipo médico.']
    },
    {
        id: 'psoriasis_vitiligo',
        name: 'Psoriasis y Vitiligo (Apoyo Autoinmune)',
        emoji: '🛡️',
        color: 'gray',
        description: "La psoriasis y el vitiligo son problemas distintos de la piel y necesitan atención dermatológica. El apoyo nutricional acompaña necesidades individuales; no se presenta como una forma de curar las lesiones o recuperar el color de la piel.",
        symptoms: ['Placas rojas con escamas (Psoriasis)', 'Pérdida de pigmento en la piel (Vitiligo)', 'Picazón o ardor en las lesiones'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: "Mezcla para cuidado articular; no se ha demostrado que esta fórmula controle psoriasis o vitiligo." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "La vitamina D apoya defensas; dosis alta solo con necesidad identificada y seguimiento." },
            { id: 123, serving: '2-3 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento nutricional; no reemplaza tratamiento de piel." }
        ],
        comboSecundario: [
            { id: 54, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Cúrcuma como alternativa al 102 sin duplicar ingredientes; no se ha confirmado beneficio de esta fórmula para estas enfermedades de piel." },
            { id: 129, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Probióticos para equilibrio intestinal; no se ha establecido que esta mezcla controle enfermedad de piel." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El zinc contribuye al mantenimiento normal de piel si se cubren necesidades." }
        ],
        lifestyleTips: ['Exposición solar moderada y controlada.', 'Manejo del estrés.', 'Evitar lesiones en la piel (efecto Koebner).']
    },
    {
        id: 'acne_espinillas',
        name: 'Acné y Espinillas',
        emoji: '🧡',
        color: 'gray',
        description: "El acné puede causar espinillas, puntos negros y lesiones inflamadas. El apoyo nutricional acompaña el cuidado de la piel y la atención dermatológica según la intensidad del problema.",
        symptoms: ['Puntos negros, espinillas, pústulas', 'Piel grasa', 'Lesiones inflamatorias y dolorosas', 'Acné en mandíbula (sugiere causa hormonal)'],
        comboPrincipal: [
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc para cuidado de piel; no garantiza quitar acné ni sustituye revisar causa." },
            { id: 48, serving: '15 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Clorofila para preparar una bebida; no se ha demostrado que tomarla trate acné." },
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Probióticos para equilibrio intestinal; no se ha confirmado beneficio de esta mezcla para acné." }
        ],
        comboSecundario: [
            { id: 52, serving: '4 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Inositoles para valorar si hay ovario poliquístico; no todo acné tiene esa causa ni se corrige con esta fórmula." },
            { id: 43, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional digestivo; no se ha demostrado que eliminen toxinas o mejoren acné." },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Espirulina con vitaminas y minerales para complementar alimentación y cuidado de las células." }
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
        description: "El síndrome de ovario poliquístico puede afectar el ciclo, la piel, la ovulación y el manejo del azúcar en sangre. Las opciones de apoyo se eligen según las necesidades de cada mujer y su seguimiento ginecológico.",
        symptoms: ['Ciclos menstruales irregulares o ausentes', 'Dificultad para bajar de peso', 'Acné y exceso de vello facial/corporal', 'Caída de cabello con patrón masculino', 'Resistencia a la insulina', 'Dificultad para lograr un embarazo'],
        comboPrincipal: [
            { id: 53, serving: '1 medida (4 g)', usage: 'Tomar esta porción al día disuelta en agua. En ayunas o entre comidas.', rationale: "Inositoles como alternativa para valorar en ovario poliquístico; el beneficio sobre ciclo y glucosa varía y no es tratamiento universal." },
            { id: 36, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: "Berberina como alternativa complementaria para glucosa; revisar medicamentos y vigilar azúcar." },
            { id: 109, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Vitamina D, magnesio, K2 y zinc para una necesidad nutricional; no asumir que toda persona tiene falta ni prometer equilibrio hormonal." }
        ],
        comboSecundario: [
            { id: 116, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La NAC se estudia en ovario poliquístico; no garantiza mejorar ovulación y requiere valorar tratamiento actual." },
            { id: 41, serving: '2 cápsulas', usage: 'Tomar esta porción con alimentos.', rationale: "Canela y cromo como alternativa; revisar medicamentos y glucosa sin sumar fórmulas por rutina." },
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Probióticos para equilibrio intestinal; no se ha confirmado que esta mezcla regule hormonas." }
        ],
        lifestyleTips: ['Priorizar ejercicio de fuerza y cardiovascular, que mejora la sensibilidad a la insulina.', 'Elegir alimentos de bajo índice glucémico y evitar azúcares refinados.', 'Manejar el estrés, ya que el cortisol elevado empeora la resistencia a la insulina.', 'Dar seguimiento con un especialista en endocrinología o ginecología, ya que este suplemento es de apoyo y no sustituye tratamiento médico.']
    },
    {
        id: 'urticaria',
        name: 'Urticaria',
        emoji: '🌡️',
        color: 'gray',
        description: "La urticaria causa ronchas y comezón, a veces relacionadas con alimentos, medicamentos u otros desencadenantes. Primero se identifica la causa y se sigue el tratamiento indicado; los suplementos solo se valoran como apoyo individual.",
        symptoms: ['Ronchas rojas o pálidas elevadas (habones)', 'Comezón intensa', 'Ardor o sensación de piel caliente', 'Hinchazón (angioedema) en casos más severos', 'Lesiones que aparecen y desaparecen en horas'],
        comboPrincipal: [
            { id: 178, serving: '1 cápsula', usage: 'Tomar esta porción al día entre comidas.', rationale: "Quercetina para cuidado de las células; no se ha demostrado que esta fórmula sustituya medicamento para urticaria." },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C para alimentación y defensas; no aumentar cantidad para quitar ronchas." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Zinc para piel y defensas; no controla por sí solo urticaria." }
        ],
        comboSecundario: [
            { id: 129, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Probióticos para bienestar intestinal; no se ha establecido que esta mezcla quite urticaria." },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento; no alivia de inmediato ronchas." },
            { id: 48, serving: '15 ml', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Clorofila para preparar bebida; no se ha demostrado que limpie cuerpo o quite urticaria." }
        ],
        lifestyleTips: ['Identificar y evitar el desencadenante (alimento, medicamento, calor, estrés).', 'Evitar alimentos altos en histamina (embutidos, quesos añejados, alcohol, fermentados) si la urticaria es crónica.', 'Usar ropa holgada y evitar el agua muy caliente.', 'Acudir con un alergólogo si los episodios son frecuentes o severos, sobre todo si hay hinchazón en cara o garganta (urgencia médica).']
    },
    {
        id: 'espolon_fascitis',
        name: 'Espolón Calcáneo y Fascitis Plantar',
        emoji: '🦶',
        color: 'yellow',
        description: "La fascitis plantar causa dolor en el talón o la planta del pie, especialmente al dar los primeros pasos. El apoyo al cuidado de los tejidos acompaña el calzado adecuado, los ejercicios y la atención que corresponda.",
        symptoms: ['Dolor punzante en el talón, especialmente con los primeros pasos al despertar', 'Dolor que mejora con el movimiento y empeora tras estar mucho tiempo de pie', 'Rigidez en la planta del pie', 'Molestia al subir escaleras'],
        comboPrincipal: [
            { id: 102, serving: '2 cápsulas (1 g)', usage: 'Tomar 1 cápsula con el desayuno y 1 con la cena, según la ficha técnica.', rationale: "Mezcla para cuidado articular; no elimina espolón ni se ha confirmado que trate fascitis." },
            { id: 125, serving: '10 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Colágeno para alimentación y tejidos; no garantiza reparar planta del pie." },
            { id: 167, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina en la zona afectada 2-3 veces al día.', rationale: "Gel para masaje, frescura y confort local; no corrige causa del dolor." }
        ],
        comboSecundario: [
            { id: 31, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Glucosamina, condroitina y MSM para cuidado articular; no garantiza resolver fascitis." },
            { id: 94, serving: '3 cápsulas', usage: 'Tomar esta porción por la noche.', rationale: "El magnesio apoya músculos y la mezcla acompaña descanso; no corrige por sí sola causa del dolor de pie." },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 como complemento, sin prometer que quite dolor del espolón." }
        ],
        lifestyleTips: ['Estirar la fascia plantar y el tendón de Aquiles por las mañanas antes de dar el primer paso.', 'Usar calzado con buen soporte de arco y evitar andar descalzo en superficies duras.', 'Aplicar hielo local 10-15 min después de estar mucho tiempo de pie.', 'Bajar de peso si hay sobrepeso, ya que reduce la carga sobre el talón.']
    },
    {
        id: 'tdah',
        name: 'TDAH (Trastorno por Déficit de Atención e Hiperactividad)',
        emoji: '🎯',
        color: 'purple',
        description: "El TDAH puede dificultar la atención, el control de impulsos y la organización. Las opciones nutricionales se valoran según la alimentación y las necesidades de la persona, junto con su plan de atención.",
        symptoms: ['Dificultad para mantener la atención en tareas', 'Impulsividad', 'Hiperactividad o inquietud constante', 'Dificultad para organizarse y terminar tareas', 'Olvidos frecuentes en la vida diaria'],
        comboPrincipal: [
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya nervios; no se ha confirmado que esta fórmula mejore atención o trate TDAH." },
            { id: 82, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Aporta DHA, una grasa importante para cerebro; no sustituye tratamiento de TDAH." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Zinc como complemento si hay necesidad; no asumir que toda persona con TDAH tiene falta." }
        ],
        comboSecundario: [
            { id: 87, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción una vez al día con alimentos, preferentemente por la mañana.', rationale: "La tirosina participa en procesos relacionados con atención; esta fórmula no tiene beneficio establecido para tratar TDAH." },
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: "Vitaminas B para nervios y aprovechamiento de energía si hay necesidad nutricional." },
            { id: 120, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Otra presentación de omega 3 como alternativa al krill; elegir una sin duplicar por rutina." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula mejore atención en TDAH." }
        ],
        lifestyleTips: ['Mantener horarios y rutinas estructuradas y predecibles.', 'Reducir el consumo de azúcares refinados y colorantes artificiales.', 'Favorecer el ejercicio físico regular, que mejora la atención y el estado de ánimo.', 'Este protocolo es un apoyo nutricional complementario; el diagnóstico y tratamiento del TDAH deben ser guiados por un especialista.']
    },
    {
        id: 'intestino_irritable',
        name: 'Síndrome de Intestino Irritable (SII)',
        emoji: '🌀',
        color: 'green',
        description: "El intestino irritable puede causar dolor, gases y cambios entre diarrea y estreñimiento. Las opciones de apoyo se eligen según la molestia principal y la tolerancia a los alimentos.",
        symptoms: ['Dolor o cólico abdominal que mejora al evacuar', 'Distensión e hinchazón abdominal', 'Diarrea, estreñimiento o alternancia entre ambos', 'Moco en las heces', 'Síntomas que empeoran con el estrés o ciertos alimentos'],
        comboPrincipal: [
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Probióticos para equilibrio intestinal. El resultado depende de bacterias y persona; confirmar cantidad del envase." },
            { id: 246, serving: '1/2-1 scoop (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar con alimentos.', rationale: "Apoyo nutricional digestivo según tolerancia. Su inulina puede producir gases; introducir poco a poco y suspender si aumentan molestias." },
            { id: 60, serving: '1-2 cápsulas', usage: 'Tomar esta porción con las comidas.', rationale: "Enzimas que ayudan a descomponer alimentos; no se ha confirmado que esta mezcla quite todos los síntomas de intestino irritable." }
        ],
        comboSecundario: [
            { id: 151, serving: '1 medida (6 g)', usage: 'Tomar esta porción al día. En ayunas o con el desayuno. Preferentemente por la mañana.', rationale: "Fibra para regularidad; empezar poco a poco y ajustar si aumenta gases o hinchazón." },
            { id: 176, serving: '1 sobre (2 g) por taza', usage: 'Preparar cada taza con 1 sobre (2 g) en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza después de las comidas. Preferentemente por la noche.', rationale: "Manzanilla de uso tradicional para confort digestivo y una pausa de relajación." },
            { id: 81, serving: '1-2 cápsulas', usage: 'Tomar esta porción antes de comer.', rationale: "Jengibre para acompañar manejo de náusea y de uso tradicional digestivo; respuesta variable." }
        ],
        lifestyleTips: ['Identificar y llevar un diario de alimentos que disparan los síntomas (frecuentemente lácteos, gluten, alimentos altos en FODMAP).', 'Comer despacio y en porciones moderadas.', 'Practicar técnicas de manejo del estrés, ya que el eje intestino-cerebro es bidireccional.', 'Consultar a un gastroenterólogo para descartar otras causas antes de autodiagnosticarse.']
    },
    {
        id: 'celulitis',
        name: 'Celulitis (Piel de Naranja)',
        emoji: '🍊',
        color: 'gray',
        description: "La celulitis es un cambio frecuente en la textura de la piel. El cuidado puede incluir actividad física, alimentación y masaje; los productos de apoyo no garantizan eliminarla.",
        symptoms: ['Piel con apariencia de hoyuelos ("piel de naranja")', 'Mayor visibilidad en glúteos, muslos y abdomen', 'Sensación de piel menos firme', 'Puede acompañarse de retención de líquidos'],
        comboPrincipal: [
            { id: 126, serving: '11 g (1 cuchara)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Colágeno y ácido hialurónico para cuidado e hidratación de piel; no se ha confirmado que elimine celulitis." },
            { id: 183, serving: 'Una aplicación (capa fina)', usage: 'Aplicar una capa fina con masaje 2 veces al día.', rationale: "Gel para acompañar masaje de piel; no elimina celulitis ni cambia por sí solo causa." },
            { id: 165, serving: '1 sobre (2 g) por taza', usage: 'Preparar esta porción en 200 ml de agua caliente durante 3-5 minutos. Tomar 1 taza al día, preferentemente por la mañana, según la ficha técnica.', rationale: "Té verde con antioxidantes y cafeína; no garantiza quemar grasa o reducir celulitis." }
        ],
        comboSecundario: [
            { id: 104, serving: '3 cápsulas (1.5 g)', usage: 'Tomar esta porción una vez al día con alimentos, según la ficha técnica.', rationale: "Vinagre en cápsulas con datos de fórmula pendientes de confirmar. Revisar la etiqueta antes de recomendar; no atribuirle beneficios para la celulitis." },
            { id: 215, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "La carnitina participa en uso de grasas como energía; tomarla no garantiza perder grasa ni eliminar celulitis." },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Colágeno y ácido hialurónico para cuidado de piel, sin prometer eliminar celulitis." }
        ],
        lifestyleTips: ['Realizar ejercicio de fuerza para tonificar y mejorar la estructura del tejido.', 'Hidratarse adecuadamente y reducir el consumo de sodio para disminuir la retención de líquidos.', 'Cepillado en seco o masaje para estimular la circulación local.', 'Evitar el sedentarismo prolongado (estar sentado o de pie por periodos largos sin moverse).']
    },
    {
        id: 'epilepsia',
        name: 'Epilepsia (Apoyo Nutricional)',
        emoji: '⚡',
        color: 'purple',
        description: "La epilepsia causa crisis que necesitan tratamiento y seguimiento neurológico. Cualquier apoyo nutricional debe revisarse con el especialista para evitar que interfiera con los medicamentos.",
        symptoms: ['Crisis convulsivas recurrentes', 'Episodios de ausencia o desconexión breve', 'Confusión temporal tras una crisis', 'Movimientos espasmódicos incontrolables'],
        comboPrincipal: [
            { id: 181, serving: '2 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Magnesio para nervios si hay necesidad; revisar con el médico interacciones con medicamentos para convulsiones." },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para alimentación y cerebro; no controla convulsiones." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Vitamina D de dosis alta con falta identificada, que puede aparecer con algunos tratamientos; requiere seguimiento." }
        ],
        comboSecundario: [
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción por la mañana. Con alimentos.', rationale: "Vitaminas B para nervios y aprovechamiento de energía; no sustituyen medicamentos para convulsiones." },
            { id: 116, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "NAC para formar glutatión y cuidado de las células; no se ha establecido que esta fórmula controle convulsiones." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos únicamente si el neurólogo lo autoriza.', rationale: "Coenzima Q10 como complemento; revisar siempre medicamentos para convulsiones antes de usar." }
        ],
        lifestyleTips: ['Dormir horarios regulares y evitar la privación de sueño, un desencadenante frecuente de crisis.', 'Evitar el consumo de alcohol y manejar el estrés.', 'Nunca suspender ni modificar la medicación anticonvulsiva sin indicación médica.', 'Todo suplemento debe ser revisado previamente con el neurólogo tratante por el riesgo de interacciones con los medicamentos.']
    },
    {
        id: 'anemia',
        name: 'Anemia (Apoyo Nutricional)',
        emoji: '🩸',
        color: 'red',
        description: "La anemia puede causar cansancio, palidez y falta de aire. El hierro y algunas vitaminas ayudan cuando existe una falta confirmada; primero se identifica la causa para elegir el apoyo adecuado.",
        symptoms: ['Cansancio y debilidad', 'Piel pálida', 'Dificultad para respirar con esfuerzos leves', 'Mareo o dolor de cabeza', 'Manos y pies fríos', 'Uñas quebradizas'],
        comboPrincipal: [
            { id: 225, serving: '1 tableta', usage: 'Tomar esta porción sublingual al día. Puede tomarse en cualquier momento del día.', rationale: "La B12 ayuda a formar sangre cuando falta. Presentación y cantidad dependen de causa; algunas personas necesitan otra vía." },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día junto con la comida principal.', rationale: "La vitamina C ayuda a absorber hierro de alimentos vegetales; no sustituye tratamiento de una falta de hierro." },
            { id: 26, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Complemento con hierro y nutrientes; no equivale por sí solo a tratar anemia ni sustituye una fuente verificada de B12." }
        ],
        comboSecundario: [
            { id: 4, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Ácido fólico y B12 para formar sangre; primero identificar qué nutriente falta." },
            { id: 205, serving: '2 tabletas', usage: 'Tomar esta porción al día. Antes de cada comida.', rationale: "Levadura para complementar alimentación; la ficha no confirma cantidades de hierro o vitaminas para tratar anemia." },
            { id: 153, serving: '1 cápsula', usage: 'Tomar esta porción al día solo si existe deficiencia o indicación profesional. Con alimentos.', rationale: "Zinc si hay falta identificada; no sustituye averiguar si anemia es por hierro, B12, sangrado u otra causa." }
        ],
        lifestyleTips: ['Consumir alimentos ricos en hierro (carnes rojas, leguminosas, verduras de hoja verde) junto con fuentes de vitamina C.', 'Evitar el café y el té junto con las comidas principales, ya que reducen la absorción de hierro.', 'Es fundamental que un médico identifique la causa de la anemia (esta tienda no cuenta con un suplemento de hierro dedicado); si se requiere hierro, debe indicarse y dosificarse profesionalmente.']
    },
    {
        id: 'parkinson',
        name: 'Parkinson (Apoyo Nutricional)',
        emoji: '🧠',
        color: 'gray',
        description: "El Parkinson afecta el movimiento y necesita seguimiento neurológico. El apoyo nutricional se enfoca en las necesidades de alimentación de la persona y debe revisarse junto con sus medicamentos.",
        symptoms: ['Temblor en reposo', 'Rigidez muscular', 'Lentitud de movimientos (bradicinesia)', 'Problemas de equilibrio y postura', 'Cambios en la escritura y el habla'],
        comboPrincipal: [
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula frene Parkinson." },
            { id: 117, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "NAD y resveratrol como complemento; no se ha demostrado que esta mezcla prolongue vida de neuronas o frene enfermedad." },
            { id: 72, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C y glutatión para cuidado de las células; no sustituyen tratamiento de Parkinson." }
        ],
        comboSecundario: [
            { id: 98, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Melena de león en estudio para bienestar mental; no se ha confirmado que esta fórmula regenere neuronas o mejore Parkinson." },
            { id: 123, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con un desayuno que contenga grasas.', rationale: "Omega 3 para alimentación y cerebro; no frena por sí solo enfermedad." },
            { id: 149, serving: '2 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "El magnesio apoya nervios; no se ha establecido que esta fórmula mejore memoria en Parkinson." }
        ],
        lifestyleTips: ['El ejercicio regular (incluyendo equilibrio y fuerza) ha mostrado ser una de las intervenciones más importantes para la calidad de vida.', 'Fisioterapia y terapia ocupacional como parte del manejo integral.', 'Mantener una dieta rica en antioxidantes (frutas y verduras de colores variados).', 'Este protocolo es únicamente de apoyo; el seguimiento debe ser siempre con el neurólogo tratante.']
    },
    {
        id: 'intestino_permeable',
        name: 'Intestino Permeable (Síndrome de Intestino Permeable)',
        emoji: '🛡️',
        color: 'green',
        description: "Algunas enfermedades pueden alterar la barrera que protege el interior del intestino. Esta guía ofrece apoyo digestivo general después de revisar la causa; los síntomas por sí solos no confirman un problema de esa barrera.",
        symptoms: ['Fatiga crónica', 'Problemas digestivos (hinchazón, gases, diarrea)', 'Alergias e intolerancias alimentarias', 'Dolores articulares', 'Niebla mental', 'Erupciones cutáneas (eczema, acné)'],
        comboPrincipal: [
            { id: 246, serving: '1/2-1 scoop (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar con alimentos.', rationale: "Glutamina y zinc L-carnosina para cuidado digestivo. Su inulina puede producir gases; introducir poco a poco según tolerancia." },
            { id: 131, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos.', rationale: "Probióticos para equilibrio intestinal; elegir una presentación sin sumar mezclas de alta concentración." }
        ],
        comboSecundario: [
            { id: 151, serving: '1/2-1 medida (3-6 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Tomar en ayunas o con el desayuno, preferentemente por la mañana.', rationale: "Fibra como alternativa gradual. No sumar de inicio al 246 si las fibras producen gases o molestias." },
            { id: 85, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Zinc L-carnosina como alternativa al 246; no duplicar ambos por rutina." },
            { id: 9, serving: '3 cápsulas', usage: 'Tomar esta porción al día con alimentos.', rationale: "Plantas de uso tradicional digestivo; no prometer reparación o cicatrización del intestino." },
            { id: 242, serving: '1/2-1 cucharada (aprox. 3.75-7.5 g)', usage: 'Iniciar con la cantidad mínima una vez al día y aumentar gradualmente hasta la cantidad máxima según tolerancia. Puede tomarse en cualquier momento del día.', rationale: "Fibra como alternativa, no para sumar de inicio a otras mezclas con inulina. No se ha confirmado que repare intestino; reducir o suspender con más gases, dolor o hinchazón." }
        ],
        lifestyleTips: ['No retirar gluten o lácteos de forma general: primero descartar enfermedad celíaca, alergia u otra causa con un profesional.', 'Llevar un registro de alimentos y síntomas para identificar desencadenantes reales sin dietas excesivamente restrictivas.', 'Introducir fibra, prebóticos y fermentados de forma gradual; reducirlos si aumentan dolor, gases o distensión.', 'Priorizar sueño regular, actividad física tolerada y manejo del estrés.', 'Buscar valoración ante pérdida de peso involuntaria, anemia, sangre en heces, fiebre, diarrea nocturna o dolor persistente.']
    },
    {
        id: 'control_peso',
        name: 'Control de Peso',
        emoji: '⚖️',
        color: 'orange',
        description: "Esta guía reúne opciones para acompañar un plan de control de peso. La elección depende de la alimentación, la actividad, los medicamentos y el objetivo; ninguna fórmula asegura bajar de peso por sí sola.",
        symptoms: ['Dificultad para bajar de peso con dieta y ejercicio', 'Retención de líquidos', 'Digestión lenta o estreñimiento asociado', 'Necesidad de apoyo para controlar el apetito'],
        comboPrincipal: [
            { id: 132, serving: '1 cápsula (750 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas y enzimas para complementar cuidado digestivo; no garantiza pérdida de peso." },
            { id: 59, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas de uso tradicional digestivo; no se ha demostrado que eliminen toxinas o produzcan pérdida de grasa." },
            { id: 199, serving: '1-2 cápsulas', usage: 'Tomar esta porción al día. Después de las comidas. Preferentemente por la mañana.', rationale: "Plantas de uso tradicional urinario y digestivo; eliminar líquido no equivale a perder grasa." }
        ],
        comboSecundario: [
            { id: 196, serving: '1 cápsula', usage: 'Tomar esta porción al día. En ayunas.', rationale: "Plantas para acompañar alimentación y ejercicio; no se ha confirmado que esta fórmula reduzca peso por sí sola." },
            { id: 56, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. En ayunas.', rationale: "Otra mezcla de plantas como alternativa; no se ha confirmado que esta fórmula reduzca peso por sí sola." },
            { id: 76, serving: '1 tableta (300 mg)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Plantas para evacuación cuando corresponde; evacuar más no equivale a perder grasa ni se deben sumar laxantes." },
            { id: 42, serving: '1 cápsula (500 mg)', usage: 'Tomar esta porción al día. Antes de las comidas.', rationale: "Caralluma usada tradicionalmente para apetito; el beneficio varía y no garantiza bajar de peso." }
        ],
        lifestyleTips: ['Estas fórmulas son un apoyo complementario; el resultado depende principalmente de la dieta y actividad física.', 'No combinar varias fórmulas laxantes/depurativas al mismo tiempo para evitar molestias digestivas.', 'Otras variantes disponibles en tienda: DEMOGRASS PLUS, DEMOGRASS LX+, GOJI TRIM, GOJIZEN MAX, SUKUNAI KIROS MAX, PIÑALINAZA, DYNEEM, BPASS, XIMO, TÉ PIÑALIM / TÉ PIÑALIM PLUS y CAFÉ CON MORINGA.', 'Si hay alguna condición médica (hipertensión, diabetes, embarazo), consultar antes de usar fórmulas termogénicas o diuréticas.']
    },
    {
        id: 'piel_antienvejecimiento',
        name: 'Piel y Antienvejecimiento',
        emoji: '✨',
        color: 'gray',
        description: "Con el tiempo, la piel puede perder firmeza y sentirse más seca. Las opciones buscan acompañar su nutrición y cuidado, junto con protección solar, hidratación y buenos hábitos.",
        symptoms: ['Piel flácida o con menor firmeza', 'Arrugas y líneas de expresión', 'Piel opaca o deshidratada', 'Uñas y cabello débiles'],
        comboPrincipal: [
            { id: 3, serving: '10 g (1 cucharada)', usage: 'Tomar esta porción al día. En ayunas o entre comidas.', rationale: "Colágeno con vitamina C y biotina para complementar cuidado de piel y cabello." },
            { id: 34, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos que contengan grasas.', rationale: "Astaxantina para cuidado de las células; no sustituye protección solar ni garantiza evitar envejecimiento de piel." },
            { id: 110, serving: '1 perla', usage: 'Tomar esta porción al día. Durante la comida principal.', rationale: "Vitamina E para cuidado de las células; no asumir cantidad alta por nombre comercial." }
        ],
        comboSecundario: [
            { id: 62, serving: '3 cápsulas', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitaminas, minerales y nutrientes para complementar cuidado de piel y cabello." },
            { id: 18, serving: '15 g (1 cuchara)', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Colágeno y ácido hialurónico para cuidado e hidratación de piel." },
            { id: 108, serving: '1 cápsula', usage: 'Tomar esta porción al día. Con alimentos.', rationale: "Vitamina C para formar colágeno y mantener piel y otros tejidos." },
            { id: 101, serving: '1 cápsula', usage: 'Tomar esta porción al día con alimentos que contengan grasas.', rationale: "Coenzima Q10 para cuidado de las células; no se ha demostrado que esta fórmula retrase envejecimiento." }
        ],
        lifestyleTips: ['Usar protector solar diario, el principal factor de envejecimiento prematuro evitable.', 'Mantener buena hidratación con agua simple.', 'Dormir bien, ya que la piel se regenera principalmente durante el sueño.', 'Antes de recomendar LEUCAPS, confirmar su etiqueta: el catálogo y la tienda registran ingredientes distintos.']
    },
    {
        id: 'post_cirugia_bariatrica',
        name: 'Después de Cirugía Bariátrica (Seguimiento Nutricional)',
        emoji: '🩺',
        color: 'gray',
        description: "Después de una cirugía para bajar de peso puede ser difícil cubrir la proteína, el hierro y algunas vitaminas o minerales. Los productos se eligen con el equipo que da seguimiento a la cirugía y complementan su plan de alimentación.",
        symptomsTitle: 'Situaciones que requieren revisar el plan:',
        symptoms: ['Manga gástrica o bypass con seguimiento nutricional pendiente', 'Ingesta de proteína menor que la meta fijada por nutrición', 'Cansancio, palidez, hormigueo o debilidad nuevos', 'Vómitos frecuentes o dificultad para tolerar alimentos y suplementos', 'Análisis con deficiencia de hierro, vitamina B12, vitamina D o calcio'],
        comboPrincipal: [
            { id: 225, serving: '1 pastilla', usage: 'Usar según la pauta del equipo bariátrico; masticar o disolver completamente. La vía y frecuencia de B12 pueden cambiar según el procedimiento y los análisis.', rationale: "B12 cuando el plan la indica. Ajustar cantidad y presentación; algunas personas necesitan otra vía." },
            { id: 113, serving: '1 scoop (34 g)', usage: 'Mezclar y tomar entre comidas solo si la alimentación no cubre la meta de proteína y el equipo tratante autoriza suplementos de suero.', rationale: "Proteína según plan de recuperación, sin sustituir comidas ni adelantar texturas indicadas." },
            { id: 262, serving: '15 g', usage: 'Preparar con agua a temperatura ambiente según la ficha; usar solo si el equipo bariátrico confirma tolerancia y el aporte de calcio elemental en la etiqueta.', rationale: "Calcio con proteína. La ficha no aclara cuánto calcio aprovechable aporta; confirmar envase antes de comparar o sumar otro calcio." }
        ],
        comboSecundario: [
            { id: 154, serving: '2 cápsulas', usage: 'Usar solo si el plan requiere calcio adicional; confirmar el aporte elemental y separar su toma del hierro según el equipo tratante.', rationale: "Calcio con vitamina D como alternativa a otras fuentes; no sumar por rutina." },
            { id: 166, serving: '1 cápsula', usage: 'Tomar con alimentos únicamente si el profesional indica esta concentración y programa control de vitamina D y calcio.', rationale: "Vitamina D de dosis alta: frecuencia y duración según análisis y plan profesional." },
            { id: 250, serving: '10 ml por toma', usage: 'Seguir la frecuencia indicada por el equipo bariátrico; la ficha general propone dos tomas al día. Confirmar que el hierro aportado cubra la pauta individual y separarlo del calcio.', rationale: "Tónico con hierro cuya cantidad puede no alcanzar para corregir una falta tras cirugía. Revisar hierro real del envase y análisis." }
        ],
        lifestyleTips: ['Mantener seguimiento de por vida con el equipo bariátrico y solicitar los análisis indicados para el procedimiento.', 'No reemplazar el multivitamínico bariátrico prescrito por un producto general del catálogo.', 'Separar calcio e hierro según la pauta profesional y comparar siempre cantidades elementales, no solo el peso de la sal.', 'Vómitos persistentes, debilidad marcada, hormigueo nuevo o incapacidad para ingerir líquidos requieren valoración pronta; los vómitos prolongados elevan el riesgo de falta de tiamina.', 'Elegir una fuente de proteína y una de calcio de acuerdo con tolerancia, alergia a la leche y metas individuales.'],
        advisorQuestions: ['¿Qué cirugía se realizó y hace cuánto tiempo?', '¿Qué esquema de vitaminas y minerales indicó el equipo bariátrico?', '¿Hay resultados recientes de hemograma, ferritina, vitamina B12, 25(OH)D y calcio?', '¿Cuánta proteína y líquido logra consumir y ha tenido vómitos o intolerancia?', '¿Toma hierro, calcio u otros suplementos que puedan duplicarse con los productos del catálogo?']
    },
    {
        id: 'deficiencia_magnesio',
        name: 'Deficiencia de Magnesio (Evaluación y Apoyo)',
        emoji: '🧩',
        color: 'orange',
        description: "El magnesio ayuda al trabajo de los músculos, los nervios y al uso de la energía. Si falta, se revisan la causa y la cantidad que aporta cada fórmula; cansancio o calambres por sí solos no confirman esa falta.",
        symptomsTitle: 'Datos para valorar la posible deficiencia:',
        symptoms: ['Pérdidas digestivas prolongadas o problemas de absorción', 'Uso prolongado de diuréticos o inhibidores de la bomba de protones', 'Ingesta muy baja o alimentación restrictiva', 'Debilidad, hormigueo o contracciones musculares persistentes', 'Alteraciones de potasio o calcio detectadas en análisis'],
        comboPrincipal: [
            { id: 92, serving: '2 cápsulas', usage: 'Tomar con alimentos solo si la valoración indica suplementación; contabilizar 200 mg de magnesio elemental y revisar otros productos con magnesio.', rationale: "Magnesio para músculos y nervios, con 200 mg aprovechables por porción según ficha. Corregir una falta requiere decidir cantidad individual." },
            { id: 50, serving: '2 cápsulas', usage: 'Tomar con alimentos solo si se confirma que esta presentación es adecuada; revisar la etiqueta física antes de usarla.', rationale: "Aporta 240 mg de magnesio aprovechable por porción. Confirmar unidad de vitamina D porque la ficha es inconsistente." }
        ],
        comboSecundario: [
            { id: 91, serving: '1 cápsula', usage: 'Tomar con alimentos solo después de confirmar en la etiqueta cuánto magnesio elemental aporta.', rationale: "Magnesio como complemento. El peso de las sales no indica cuánto magnesio aprovechable aporta." },
            { id: 227, serving: '1 cápsula', usage: 'Tomar con alimentos según la ficha, siempre que el profesional confirme el aporte elemental y la dosis necesaria.', rationale: "Magnesio en cápsulas; confirmar aporte real, que no equivale al peso de citrato escrito en ficha." },
            { id: 228, serving: '1 cápsula', usage: 'Tomar preferentemente por la noche según la ficha, solo tras revisar el aporte elemental en el envase.', rationale: "Magnesio en forma de glicinato; la ficha no aclara aporte aprovechable para calcular una corrección." },
            { id: 181, serving: '4 cápsulas', usage: 'Usar únicamente si un profesional indica esta porción y vigila función renal, tolerancia y magnesio total de otros suplementos.', rationale: "Aporta 400 mg de magnesio aprovechable por porción; puede causar diarrea y supera cantidad suplementaria habitual sin supervisión. Revisar antes de recomendar." }
        ],
        lifestyleTips: ['Priorizar legumbres, frutos secos, semillas y verduras de hoja como fuentes alimentarias de magnesio.', 'Comparar magnesio elemental entre presentaciones y no combinar varias fórmulas por rutina.', 'Consultar antes de suplementar si existe enfermedad renal o uso de diuréticos, antibióticos o bisfosfonatos; algunos medicamentos deben separarse del magnesio.', 'La diarrea, las náuseas y el dolor abdominal pueden indicar mala tolerancia o exceso de suplemento.', 'Calambres persistentes, palpitaciones, debilidad importante o desmayos requieren valoración de otras causas.'],
        advisorQuestions: ['¿Existe una valoración médica o análisis que sugiera falta de magnesio?', '¿Hay enfermedad renal, diarrea prolongada o problemas de absorción?', '¿Toma diuréticos, omeprazol u otros protectores gástricos, antibióticos o bisfosfonatos?', '¿Qué otras fórmulas con magnesio consume y cuánto magnesio elemental aportan?', '¿Presenta palpitaciones, debilidad intensa o calambres que necesiten valoración?']
    },
    {
        id: 'dismenorrea',
        name: 'Dolor Menstrual (Dismenorrea)',
        emoji: '🌸',
        color: 'pink',
        minimumUniqueProducts: 4,
        description: "Los cólicos menstruales pueden mejorar con calor local y el manejo indicado para el dolor. Las opciones nutricionales son un apoyo complementario; el dolor nuevo, muy fuerte o que empeora necesita revisión.",
        symptoms: ['Cólicos en bajo vientre durante la menstruación', 'Dolor que puede irradiarse hacia espalda o muslos', 'Náusea o malestar digestivo coincidente con el periodo', 'Ausentismo o limitación de actividades por dolor', 'Dolor que aumenta con los meses o aparece fuera del periodo'],
        comboPrincipal: [
            { id: 81, serving: '2 cápsulas', usage: 'Tomar con alimentos según la ficha solo si no hay contraindicaciones y después de revisar anticoagulantes, gastritis o embarazo.', rationale: "Jengibre estudiado como apoyo a cólicos; los resultados no garantizan igual beneficio de esta presentación." }
        ],
        comboSecundario: [
            { id: 123, serving: '3 cápsulas', usage: 'Tomar con el desayuno según la ficha, solo tras revisar alergia al pescado y medicamentos que aumentan el sangrado.', rationale: "Omega 3 como complemento opcional; beneficio para cólicos variable y sin alivio inmediato garantizado." },
            { id: 92, serving: '2 cápsulas', usage: 'Tomar con alimentos solo si existe ingesta insuficiente o indicación profesional; revisar enfermedad renal y otros suplementos de magnesio.', rationale: "Magnesio para músculos y nervios si se necesita; sin beneficio suficiente para ser tratamiento principal de cólicos." },
            { id: 54, serving: '3 cápsulas', usage: 'Tomar con alimentos únicamente después de revisar anticoagulantes, trastornos de coagulación y problemas biliares.', rationale: "Cúrcuma con resultados iniciales variables; esta mezcla no se ha confirmado para aliviar cólicos." }
        ],
        lifestyleTips: ['Usar calor local y registrar intensidad, duración y relación del dolor con el ciclo.', 'Consultar sobre analgésicos antiinflamatorios y otras opciones habituales si el dolor limita actividades.', 'Buscar valoración si el dolor empieza por primera vez después de años de ciclos sin dolor, empeora, aparece fuera del periodo o se acompaña de sangrado abundante.', 'No sumar jengibre, cúrcuma y omega-3 sin revisar riesgo de sangrado y medicamentos.', 'Distinguir esta guía del síndrome premenstrual, que suele empezar antes del sangrado y puede incluir síntomas físicos y emocionales.'],
        advisorQuestions: ['¿Desde cuándo hay dolor y ocurre solo durante la menstruación?', '¿El dolor empeora, incapacita o aparece fuera del periodo?', '¿Hay sangrado muy abundante, fiebre, dolor durante relaciones sexuales o posibilidad de embarazo?', '¿Qué analgésicos, anticonceptivos o tratamientos indicó ginecología?', '¿Toma anticoagulantes o tiene gastritis, enfermedad biliar o alergia al pescado?']
    },
    {
        id: 'diarrea_antibioticos',
        name: 'Diarrea Asociada a Antibióticos (Evaluación y Apoyo)',
        emoji: '🦠',
        color: 'green',
        minimumSecondaryProducts: 1,
        minimumUniqueProducts: 2,
        description: "La diarrea durante o después de tomar antibióticos necesita revisión y cuidado de la hidratación. Algunos probióticos se estudian para prevenirla, pero el beneficio depende del tipo de microorganismos que contiene cada producto.",
        symptomsTitle: 'Datos que requieren evaluación:',
        symptoms: ['Antibiótico en curso o terminado recientemente', 'Heces sueltas repetidas o diarrea acuosa', 'Dolor abdominal, náusea o pérdida de apetito', 'Fiebre, sangre en heces o signos de deshidratación', 'Antecedente de infección por C. difficile o ingreso hospitalario reciente'],
        comboPrincipal: [
            { id: 129, serving: '1 cápsula', usage: 'Considerar con alimentos solo si el profesional confirma que la cepa y el contexto clínico justifican usarlo; seguir el antibiótico como fue indicado.', rationale: "Probióticos como apoyo durante tratamiento; la ficha no permite asegurar que esta mezcla prevenga diarrea o infección por C. difficile." }
        ],
        comboSecundario: [
            { id: 131, serving: '1 cápsula', usage: 'Considerar con alimentos únicamente tras revisar las cepas y cantidades en el envase y descartar inmunosupresión o enfermedad grave.', rationale: "Alternativa al 129. Confirmar cantidad del envase porque la ficha suma cantidades inconsistentes; no coincide claramente con mezclas estudiadas." }
        ],
        lifestyleTips: ['Contactar al profesional si aparece diarrea durante o después de un antibiótico; no suspenderlo ni cambiarlo por cuenta propia.', 'Mantener líquidos y seguir indicaciones sobre sales de rehidratación si hay pérdidas importantes.', 'Fiebre, dolor abdominal intenso, sangre en heces, deshidratación o diarrea persistente requieren valoración pronta.', 'No recomendar probióticos por rutina a personas inmunodeprimidas, gravemente enfermas o con alto riesgo de infección sin autorización médica.', 'No presentar estos probióticos como tratamiento de una infección por C. difficile confirmada.'],
        advisorQuestions: ['¿Qué antibiótico toma, desde cuándo y para qué infección?', '¿Cuántas evacuaciones líquidas tiene al día y cuándo comenzaron?', '¿Hay fiebre, dolor intenso, sangre en heces o señales de deshidratación?', '¿Existe inmunosupresión, enfermedad grave o antecedente de C. difficile?', '¿Un profesional ha indicado o descartado un probiótico de cepa específica?']
    },
    {
        id: 'deficiencia_vitamina_d',
        name: 'Deficiencia de Vitamina D (Evaluación y Apoyo)',
        emoji: '☀️',
        color: 'orange',
        primaryOptionsLabel: 'Primero Zennatura: opciones de D3 1000 UI',
        minimumUniqueProducts: 4,
        description: "La vitamina D ayuda a absorber el calcio y a cuidar huesos y músculos. Se valora primero la opción Zennatura adecuada y se elige una sola fórmula según la cantidad indicada, los análisis y los otros suplementos que ya toma la persona.",
        symptomsTitle: 'Factores de riesgo y señales para consultar:',
        symptoms: ['Malabsorción, cirugía bariátrica o dieta con muy poca vitamina D', 'Fragilidad ósea, fracturas o dolor óseo persistente', 'Debilidad muscular sin causa clara', 'Uso de medicamentos que alteran la absorción o metabolismo de vitamina D', 'Resultado de 25(OH)D bajo interpretado por un profesional'],
        comboPrincipal: [
            { id: 55, serving: '1 cápsula', usage: 'Valorar primero esta opción Zennatura y tomarla con alimentos si la cantidad y la fórmula son adecuadas; revisar alergia a equinácea y medicamentos que disminuyen las defensas.', rationale: "Primera opción Zennatura si la fórmula es adecuada. La D3 ayuda a absorber calcio y cuidar huesos y músculos; la vitamina C complementa el apoyo a las defensas." },
            { id: 245, serving: '1 cápsula', usage: 'Elegir esta presentación con el profesional y tomarla con una comida que contenga grasas; consultar antes si usa warfarina.', rationale: "Vitamina D3 de 1000 UI con K2 para huesos. La K2 no siempre es necesaria y puede interferir con warfarina y similares." }
        ],
        comboSecundario: [
            { id: 109, serving: '1 cápsula', usage: 'Tomar con alimentos que contengan grasas según la ficha solo si la combinación y sus cantidades encajan en el plan indicado.', rationale: "Vitamina D3 de 400 UI con magnesio, K2 y zinc para huesos y músculos. Revisar si ya usa estos nutrientes o anticoagulantes." },
            { id: 154, serving: '2 cápsulas', usage: 'Tomar con alimentos únicamente si también se indicó calcio; confirmar cuánto calcio elemental aporta y evitar duplicarlo.', rationale: "Calcio con vitamina D3 de 400 UI para huesos. Añadir calcio solo si alimentación y valoración indican necesidad." },
            { id: 166, serving: '1 cápsula', usage: 'Usar solo si el profesional prescribe esta concentración y define duración y seguimiento de 25(OH)D y calcio.', rationale: "Vitamina D3 de 5000 UI para necesidad identificada; frecuencia y duración requieren valoración y seguimiento." }
        ],
        lifestyleTips: ['No solicitar análisis de 25(OH)D de rutina a toda persona sana; valorar pruebas según riesgo e indicación clínica.', 'Revisar alimentos con vitamina D y fortificados; la exposición solar debe seguir medidas de protección de la piel.', 'Priorizar Zennatura cuando su fórmula sea adecuada; NOW es otra opción de D3 1000 UI. Elegir una sola y contar la vitamina D de todos los suplementos.', 'Consultar antes si hay cálculos renales, calcio alto, enfermedad renal, sarcoidosis o uso de diuréticos tiazídicos.', 'No usar dosis altas durante meses sin seguimiento; el exceso puede elevar el calcio y dañar riñones.'],
        advisorQuestions: ['¿Existe un resultado de 25(OH)D y por qué se solicitó?', '¿Hay cirugía bariátrica, malabsorción, fracturas o problemas óseos?', '¿Qué vitamina D y calcio obtiene ya de alimentos, medicamentos y suplementos?', '¿Usa warfarina, tiazidas, corticoides u orlistat?', '¿Tiene cálculos renales, calcio elevado, enfermedad renal o sarcoidosis?']
    }
];
