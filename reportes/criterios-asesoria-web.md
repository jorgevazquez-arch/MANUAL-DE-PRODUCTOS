# Criterios de consulta rápida para asesores

## Lenguaje de búsqueda

Los nombres de padecimientos y sus sinónimos sirven para localizar guías internas existentes. «Prediabetes», «resistencia a la insulina» o «diabetes tipo 2» no se añaden como beneficios del suplemento. Cuando un producto aparece por su vínculo con una guía, la tarjeta lo identifica como «Guía relacionada · consulta interna».

Los alias se definen por guía en `data/asesoria.js`. No se agregan relaciones clínicas nuevas a productos que no estaban incluidos en la guía. Los resultados derivados de una guía no vuelven a ampliar la búsqueda hacia otras guías por asociación indirecta.

## Diferencia entre fórmulas

Cada producto recibe `choiceNote`, una línea visible en su ficha, tarjeta y comparador. Las familias principales tienen notas específicas de composición o presentación. El resto utiliza su enfoque de repaso y contenido del envase como referencia básica, sin inventar una superioridad sobre otros productos.

- Magnesios: distinguir forma, combinación y formato. No confundir el peso del compuesto con magnesio elemental. [Referencia: NIH ODS, magnesio](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/).
- Omegas: comparar EPA y DHA por porción diaria, no solo el peso de aceite.
- Ashwagandhas: distinguir extracto, polvo de raíz e ingredientes adicionales. No equiparar fórmulas únicamente por sus mg.
- Evitar «más potente», «mejor absorción», «mayor aporte» o «fórmula avanzada» sin datos comparables que lo respalden.

## Cómo tomarlo

La ficha muestra porción, momento indicado, relación con alimentos y distribución de tomas. Se reutilizan los datos registrados del producto. No se inventa una hora óptima ni se autoriza dividir la porción si la ficha no lo detalla. Las indicaciones completas siguen visibles.

Las guías utilizan la porción del catálogo como referencia y conservan las condiciones de uso de la guía junto con las instrucciones del catálogo. La pauta individual indicada por el profesional prevalece; las instrucciones generales no deben ocultar restricciones clínicas. Si existe discrepancia de cantidades, verificar la etiqueta y la pauta antes de recomendar.

## Relaciones entre productos

- **Alternativas para comparar:** familias explícitas de composición o uso parecido; no significan dosis equivalentes ni sustituciones automáticas. Se muestran también cuando no existe una guía relacionada.
- **Complementos por valorar:** pares explícitos con aportes distintos, visibles en un apartado independiente y en una guía si ambos productos ya aparecen en ella. Los pares iniciales son creatina con proteína y colágeno solo con vitamina C. No implican necesidad de tomar ambos ni una sinergia clínica demostrada. [Referencia nutricional deportiva: NIH ODS](https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/), [referencia sobre vitamina C: NIH ODS](https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/).
- **Otras opciones de la guía:** relación temática, con combinación no evaluada. Compartir guía o categoría no basta para etiquetar una pareja como sinergia.

Las familias, pares y notas se mantienen en `data/asesoria.js`. Una coincidencia como alternativa tiene prioridad sobre la marca de complemento. Antes de combinar se revisan ingredientes repetidos, porciones, interacciones y circunstancias del cliente.
