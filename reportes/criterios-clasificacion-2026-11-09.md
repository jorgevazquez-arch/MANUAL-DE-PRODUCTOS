# Clasificación primaria de productos

Fecha: 9 de noviembre de 2026. Revisión individual de los 271 productos, repartida entre tres agentes.

La categoría se elige por el enfoque principal de la ficha: descripción, composición, público y forma de uso. No se decide por un ingrediente secundario, la marca, la cantidad del envase, una dosis alta o la aparición del producto en una guía de padecimiento. La clasificación organiza el catálogo; no demuestra eficacia ni seguridad.

## Categorías

| Clave | Criterio |
| --- | --- |
| digestivo | Estómago, intestino, digestión, probióticos, enzimas y plantas con ese enfoque principal. |
| laxantes | Evacuación o estreñimiento como propósito principal de la fórmula. No basta que contenga fibra. |
| inmune | Defensas o confort respiratorio como enfoque principal declarado. |
| nervioso | Descanso, relajación, atención, memoria o cuidado específico de nervios. |
| metabolismo | Energía, aprovechamiento del azúcar, control de peso y minerales generales para varias funciones. |
| hormonal | Bienestar femenino o masculino específico: ciclo, menopausia, próstata, deseo sexual o reproducción. No basta que un multivitamínico diga «para mujeres». |
| piel | Piel, cabello, uñas u ojos. Incluye cosméticos y geles si ese es el enfoque principal; no todos los tópicos. |
| locomotor | Huesos, articulaciones, músculos y movimiento. Las fórmulas óseas no pasan a Clínico por concentración alta. |
| clinico | Corazón, circulación, hígado o vías urinarias como enfoque principal. No es una categoría general para cualquier producto con precauciones. |
| nutricional | Alimentos, bebidas, aporte nutricional o multivitamínico general y antioxidantes sin órgano o función específica predominante. |
| deportivo | Entrenamiento, rendimiento o recuperación como público y propósito principales; no basta la marca deportiva. |
| otros | Productos que no encajan como apoyo nutricional o por sistema. Se evita asignarles un beneficio para hacerlos encajar. |

## Casos con varias funciones

- Magnesios generales para energía, músculos y nervios: Metabolismo. Si la fórmula está dirigida a sueño o calma, Nervioso; si se dirige a huesos o articulaciones, Locomotor.
- Complejo B energético general: Metabolismo. Una mezcla con vitaminas B dirigida específicamente a atención o nervios puede pertenecer a Nervioso.
- Antioxidantes generales: Nutricional. Si la ficha prioriza energía o un órgano, se sigue ese enfoque.
- Las fórmulas parecidas no se igualan automáticamente: se revisan por separado ingredientes, presentación y público.
- En usos mixtos se registra confianza media y se explica la decisión. Si falta una ficha fuente, se identifica expresamente la limitación y se utiliza la ficha vigente del catálogo, sin inventar una fuente externa.

## Evidencia y alcance

Se consultaron las fichas HTML originales de la carpeta proporcionada por el usuario, `GUIAS WEB HTML`, además de las fichas vigentes de `data/productos.js`. El archivo `cruce-fichas-productos.csv` sirve como índice, pero se comprueba la identidad de cada documento antes de usarlo. Una coincidencia de nombre no sustituye la comprobación de contenido.

Los reportes `revision-clasificacion-1.json`, `revision-clasificacion-2.json` y `revision-clasificacion-3.json` contienen una decisión por producto: categoría anterior y final, razón, evidencia y confianza. Se mantienen las decisiones correctas. Los cambios de clasificación no alteran ingredientes, porciones, beneficios ni precauciones.
