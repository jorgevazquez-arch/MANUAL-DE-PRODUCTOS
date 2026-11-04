# Revisión de seguridad y ventas cruzadas — 22 de octubre de 2026

## Alcance y límites

Inventario de las 75 guías y 271 productos, integridad de referencias, búsqueda de seis ingredientes repetidos y revisión dirigida de problemas prioritarios. La matriz CSV registra todas las guías; no certifica seguridad ni eficacia. Falta contrastar etiquetas físicas, cantidades elementales, extractos, medicamentos y evidencia de cada fórmula. Los cruces históricos no se consideran aprobados por aparecer en el manual.

Ejecutar `node reportes/auditar-cruces.cjs` para regenerar `revision-cruces-por-padecimiento.csv`. Las coincidencias por texto sirven para priorizar revisión; pueden omitir sinónimos y no calculan dosis acumuladas.

## Cambios aplicados

- La guía conserva sus restricciones de uso junto con la referencia del catálogo. Antes, las instrucciones generales del producto podían ocultar la condición clínica de la guía.
- Se sustituyó «Paquete principal» por «Opciones para valorar» en vista previa y PDF; se agregó un aviso por guía en web y PDF.
- Se señalaron 11 guías complejas para revisión profesional previa. Se añadieron precauciones específicas en glucosa, ansiedad, insomnio y apoyo en depresión.
- Se ampliaron los cruces explícitos de 5 a 13 pares: creatinas simples 7 y 8 con proteínas 111, 112, 113, 134, 135 y 158; se conserva colágeno 125 con vitamina C 108. Son aportes diferentes que pueden valorarse, no una demostración de superioridad de la pareja ni una autorización universal.
- En fuerza, resistencia y recuperación deportiva se añadieron cinco alternativas de proteína por guía. Elegir según objetivo de ingesta, alergias, tolerancia y etiqueta; no sumar todas.
- No se incluyó la proteína de res 35 en los pares con creatina: la ficha declara 7600 mg de creatina. Ese dato requiere verificación del envase.

## Hallazgos que todavía requieren corrección clínica

| Prioridad | Hallazgo | Criterio para continuar |
| --- | --- | --- |
| Alta | Cáncer: productos como «Células madre», ON-C-LEN, botánicos y antioxidantes figuran como opciones. | No promover como apoyo oncológico sin revisión del equipo tratante. Revisar y retirar afirmaciones terapéuticas sin respaldo de la fórmula. |
| Alta | Enfermedad renal: hay botánicos, aloe y proteína en guías históricas. | No ampliar cruces; individualizar proteína, potasio, fósforo y líquidos. |
| Alta | Hipotiroidismo incluye ashwagandha y tirosina. | Revisar pertinencia y tratamientos tiroideos; la ashwagandha tiene precauciones en enfermedad tiroidea. |
| Alta | Insomnio y ansiedad reúnen 5-HTP, triptófano, teanina y otras fórmulas de calma. | Revisar duplicados, sedación y medicamentos; no construir un paquete con todas. |
| Alta | Diabetes y resistencia a la insulina reúnen varios ingredientes estudiados para glucosa. | No asumir que sumar produce más beneficio; revisar tratamiento, efectos adversos y seguimiento. |
| Alta | Varias guías incluyen D3 de 5000 UI. | Supera el límite superior habitual de 4000 UI/día en adultos; una pauta terapéutica necesita indicación y seguimiento. No duplicar con multivitamínicos o calcio con D. |
| Media | Algunas justificaciones atribuyen efectos clínicos o mecanismos concluyentes a fórmulas sin documentación específica. | Reescribir por guía con evidencia humana, concentración y limitaciones. No inferir eficacia del producto por un ingrediente. |
| Media | Familias de alternativas agrupan fórmulas simples, mezclas e infantiles. | Separar edad, propósito, composición y dosis antes de sugerir sustitución. Una alternativa comercial no equivale a una sustitución clínica. |

## Regla para ampliar el catálogo

Preferir alternativas de formato y composición frente a acumular suplementos. Para un complemento adicional, documentar necesidad distinta, ingrediente y cantidad por porción, duplicados, precauciones, compatibilidad con medicamentos y fuente. Si falta esa información, registrar el candidato como pendiente, sin publicarlo como combinación segura. No es obligatorio incluir todos los productos en una guía.

## Fuentes consultadas

- [NIH ODS: ejercicio y rendimiento deportivo](https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/): proteína y creatina; los resultados de ingredientes no validan cualquier mezcla comercial.
- [NIH ODS: vitamina D](https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/): aportes totales, límite superior y toxicidad.
- [NCCIH: diabetes y suplementos](https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements-what-you-need-to-know): evidencia limitada, efectos adversos y tratamiento.
- [NCCIH: ashwagandha](https://www.nccih.nih.gov/health/ashwagandha): precauciones tiroideas e interacciones.
- [NCI: interacciones con tratamiento del cáncer](https://www.cancer.gov/about-cancer/treatment/cam/patient/dietary-interactions-pdq): revisión de suplementos y tratamientos oncológicos.
- [NIDDK: alimentación y enfermedad renal](https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease): necesidades individuales de nutrientes.
- [NCCIH: seguridad de productos complementarios](https://www.nccih.nih.gov/health/safety): evaluar cada producto y sus interacciones.
