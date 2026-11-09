# Revisión del contenido para capacitación interna

Fecha: 9 de noviembre de 2026.

Se revisaron individualmente los 271 productos: descripción, frase de repaso, beneficios e ingredientes registrados. Tres subagentes repartieron el catálogo en bloques sin solaparse. Una segunda lectura independiente comprobó la coherencia del resultado integrado. También se revisaron las 75 guías, sus descripciones y las razones de recomendación de sus productos.

## Criterio de redacción

- Explicar primero para qué puede servir el producto, con palabras cotidianas.
- Mantener términos básicos como vitaminas, músculos, digestión, descanso y defensas; explicar la función sin mecanismos complejos.
- Conservar beneficios claros y consistentes con los ingredientes. Quitar promesas que la información disponible no permite atribuir a la fórmula.
- Diferenciar un beneficio nutricional, un uso tradicional y una característica práctica de presentación.
- No inventar cantidades ni corregir una fórmula a partir de otra presentación parecida. Las discrepancias se registran para revisar la etiqueta vigente.

Los archivos `revision-productos-1.json`, `revision-productos-2.json` y `revision-productos-3.json` registran todos los IDs revisados y cada campo ajustado. Las listas de beneficios que ya eran claras y coherentes se conservaron. `revision-guias-descripciones.json` contiene las 75 descripciones simplificadas.

Resultado: 271 descripciones, 87 frases de repaso y 119 listas de beneficios ajustadas. Las 487 razones originales de recomendación se revisaron y reformularon; están registradas en `revision-guias-razones.json`.

## Prioridad de Zennatura

Se identifican explícitamente los productos Zennatura en `data/marcas.js`. Cada grupo de opciones de las guías muestra primero los productos propios y los identifica por su marca. Se conserva la función de cada opción: una fórmula adicional no se convierte automáticamente en principal solo por su marca.

La guía de vitamina D presenta primero D3 1000 UI con vitamina C y equinácea de Zennatura y después la alternativa NOW. La preferencia comercial se explica sin atribuir superioridad a la mezcla ni confundir el peso de la cápsula con su cantidad de vitamina D.

En control de peso, PROBITY pasa a opciones principales y Demograss Premier a adicionales. En tos seca, la infusión Abangreen pasa a principales como opción de hidratación y confort, y las gotas de propóleo a adicionales. Se trasladan los objetos completos, con sus porciones y condiciones de uso. Las demás guías conservan sus grupos y ordenan primero Zennatura dentro de ellos.

La identificación usa nombres explícitos, coincidencia de código con la tienda oficial o lectura de la etiqueta. No se deduce la marca por el servidor donde se aloja una fotografía. `revision-marcas.json` conserva la auditoría adicional por código, las fuentes y los casos de identidad ambigua.

Fuentes de referencia para marca: [catálogo El Girasol](https://cbelgirasol.com.mx/collections/all), [tienda Zennatura](https://www.zennatura.mx/), [línea Nueva Generación](https://zennatura.mx/nueva-generacion/). Los enlaces por producto y el criterio de coincidencia están en el reporte JSON.

## Discrepancias que necesitan etiqueta vigente

La revisión es exhaustiva en redacción y coherencia con los datos disponibles; no confirma que todas las cantidades históricas del catálogo sean correctas.

| Producto | Pendiente detectado |
| --- | --- |
| 30 ARTMUUB / 50 Cloruro | Cantidades de vitamina D con unidades que necesitan confirmación. |
| 34 Astaxantina | Confirmar la cantidad declarada del ingrediente. |
| 86 Leucaps | Mismo código, pero la tienda indica betacaroteno y el catálogo luteína/zeaxantina. Se retiraron beneficios específicos de esos ingredientes hasta aclararlo. |
| 104 Vinagre | El código corresponde a una presentación diferente de la mezcla registrada. Se retiraron beneficios específicos de la mezcla hasta confirmar etiqueta. |
| 110 Vitamina E Green Life | Nombre comercial y cantidades de la ficha no coinciden. No se clasifica como Zennatura. |
| 112 Whey Harder | Porcentajes de proteína distintos; no se asegura ausencia de lactosa. |
| 131 Probióticos | El total de microorganismos declarado y el nombre necesitan cotejo. |
| 132 Probity | Diferencias entre cantidades del nombre, tienda y porción. |
| 168 HPR Pros Green | La fórmula y el código del catálogo no corresponden al producto Zennatura de nombre parecido; no se le asigna esa marca. |
| 227 Citrato de magnesio | Cantidad por cápsula y porción con discrepancias. |
| 231 Tónico Indio | Declara Aristolochia; confirmar composición y seguridad antes de recomendar. |

También se corrigieron atribuciones de ingredientes no declarados, por ejemplo miel en 201/243, vitamina E en 239 y enzimas en 221. Los productos 69/144 declaran fenolftaleína: se identifica la necesidad de revisar su fórmula y seguridad. Plata coloidal y zeolita no se presentan como productos con beneficios de consumo demostrados o eliminación probada de metales.

Los hallazgos y sus fuentes están detallados en los reportes de cada bloque. Referencias puntuales: [NTP: fenolftaleína](https://ntp.niehs.nih.gov/sites/default/files/ntp/roc/content/profiles/phenolphthalein.pdf), [NCI: ácidos aristolóquicos](https://www.cancer.gov/about-cancer/causes-prevention/risk/substances/aristolochic-acids), [NCCIH: plata coloidal](https://www.nccih.nih.gov/health/colloidal-silver-what-you-need-to-know).

## Validación

- Cobertura de los 271 productos sin IDs repetidos u omitidos.
- Comparación estructural de ingredientes, porciones y precauciones con la versión anterior.
- Referencias de todas las guías y orden de marca, incluida vitamina D.
- Regresión de búsqueda y apertura de fichas.
- Navegador Chromium en escritorio de 1440 × 1000 y móvil de 390 × 844: vitamina C, déficit de vitamina D, prioridad Zennatura, apertura de fichas y NUYO sin atribución de cognición.

Pruebas automatizadas: `node --test tests/search.cjs tests/content.cjs`.
