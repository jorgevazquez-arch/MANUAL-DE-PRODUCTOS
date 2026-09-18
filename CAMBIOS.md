# Cambios del manual de El Girasol

Actualizado al 18 de septiembre de 2026.

Resumen de los cambios publicados desde la primera versión del 16 de julio de 2026. Los ajustes repetidos se agrupan para facilitar la lectura. Las primeras actualizaciones tienen mensajes genéricos en GitHub, por lo que se resumen sin atribuirles detalles que no quedaron documentados.

## Navegación y búsqueda

- Se mejoró la navegación del manual y se incorporaron secciones plegables.
- Se trabajó con un menú lateral retráctil; posteriormente se sustituyó por los botones centrales actuales.
- Productos, Guías por Padecimiento y Recursos ahora funcionan como pestañas independientes: cada una muestra solamente su sección.
- El buscador quedó centrado y disponible en las tres pestañas.
- La búsqueda muestra productos y guías relacionadas, incluidos los padecimientos que tienen esos productos enlazados.
- La búsqueda de texto reconoce coincidencias con o sin acentos.
- Al limpiar la búsqueda se vuelve a la pestaña que se estaba consultando.
- Se incorporó la búsqueda por código de barras para los productos que tienen código registrado.
- Se mejoraron los accesos a las guías desde las fichas de producto.
- Los filtros de las guías se trasladaron al encabezado “Catálogo de Alta Especialidad”, con el mismo formato redondeado que las clasificaciones de suplementos.
- Los filtros del encabezado cambian según la pestaña: clasificaciones de suplementos en Productos y colores en Guías.

## Catálogo y fichas de productos

- Se agregaron productos y se actualizaron nombres, imágenes y datos de las fichas en distintas entregas.
- El catálogo contiene 269 productos.
- Se agregaron ALBIZIA + BACOPA y ALBIZIA + RHODIOLA con sus composiciones, indicaciones de uso y precauciones. Sus fichas de origen no incluyen código de barras.
- Se renovó el diseño de las tarjetas y las fichas técnicas.
- Se ajustó el tamaño de las imágenes dentro de las fichas.
- Se habilitó la apertura de la ficha al hacer clic en toda la tarjeta del producto.
- Se retiró el texto “Ver ficha técnica” de las tarjetas.
- Las fichas muestran las guías relacionadas y otros productos enlazados a esas guías, con sus imágenes.
- Se incorporó el comparador de productos y después se renovó su diseño visual.

## Guías por padecimiento

- Se ampliaron y actualizaron las guías hasta llegar a 75 padecimientos.
- Se organizaron por clasificaciones de colores, con grupos plegables y cantidad de padecimientos por grupo.
- Se incorporaron imágenes de los productos recomendados y accesos a sus fichas.
- Se actualizaron las porciones, los modos de uso y los momentos de consumo de las recomendaciones.
- Se revisaron guías deportivas y la información de productos como YUMEL.
- Se agregaron preguntas enfocadas en cada padecimiento y se redujeron a cinco por guía.
- Se probó un diseño editorial en la guía de insomnio y después se aplicó a todas las guías.
- Se identificó el paquete principal con un título sobre las imágenes.
- Se simplificaron los recuadros y la jerarquía visual para facilitar la consulta.
- Se retiraron los IDs de productos de los consejos clave.
- Se ajustó el diseño para tabletas y teléfonos.
- Se incorporó la apertura y el cierre de las guías mediante clic, con transiciones visuales.

## Presentación y funcionamiento

- Se actualizó el logotipo de El Girasol.
- Se conservaron los cambios visuales recuperados del rediseño y se reparó la carga del manual.
- Se eliminaron estructuras duplicadas y se protegieron las referencias a controles del antiguo panel lateral que ya no existían.
- Se corrigieron imágenes de respaldo y se evitó que sus errores provocaran intentos de carga repetidos.
- Se eliminó el pequeño recuadro vacío sobre el título del catálogo.
- Se separaron el diseño, la lógica y los datos en archivos para facilitar el mantenimiento.
- Se incorporaron herramientas de validación; actualmente se ejecutan localmente antes de publicar.
- La validación local confirma 269 productos, 75 guías y 486 referencias válidas de productos dentro de las guías.

## Fechas principales

### 18 de septiembre de 2026

- Se incorporaron ALBIZIA + BACOPA y ALBIZIA + RHODIOLA al catálogo en la categoría del sistema nervioso.
- Se sincronizaron 19 recomendaciones adicionales de las guías y se versionó la carga de los datos para que el navegador solicite los archivos actualizados.
- Se añadió ALBIZIA + BACOPA como opción adicional en Ansiedad y Estrés Crónico y Memoria y Enfoque Mental; ALBIZIA + RHODIOLA, en Fatiga Crónica y Burnout y Memoria y Enfoque Mental. Las recomendaciones indican el alcance limitado de la evidencia de las fórmulas completas.
- Se crearon cinco guías: seguimiento nutricional después de cirugía bariátrica, deficiencia de magnesio, dolor menstrual, diarrea asociada a antibióticos y deficiencia de vitamina D.
- Se ajustó la redacción de la guía de vitamina D para centrar el uso de la presentación concentrada en una pauta y seguimiento individuales.
- Se añadió la D3 de 1000 UI de Zennatura como alternativa a la D3 + K2 de NOW en la guía de vitamina D. Ambas aportan la misma cantidad de D3; la guía pide elegir una sola presentación y revisar la pertinencia de sus ingredientes adicionales.
- Las guías con pocas opciones pertinentes conservan mínimos propios de referencias para evitar recomendaciones de relleno. Se señalaron las dosis altas, las cantidades elementales no declaradas y las fórmulas probióticas sin equivalencia clínica comprobada.
- Referencias para estas guías: [ASMBS](https://asmbs.org/wp-content/uploads/2017/06/ASMBS-Nutritional-Guidelines-2016-Update.pdf), [NIH sobre magnesio](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/), [NIH sobre vitamina D](https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/), [ACOG sobre dolor menstrual](https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods), [AGA sobre probióticos](https://gastro.org/clinical-guidance/role-of-probiotics-in-the-management-of-gastrointestinal-disorders/) y [CDC sobre C. difficile](https://www.cdc.gov/c-diff/about/index.html).

### Ajustes visuales posteriores del 10 de septiembre

- Menú compacto que expande el nombre al pasar el cursor o usar el teclado; la pestaña activa conserva el texto y en celular se muestran todos los títulos.
- Botones sin bordes, en gris neutro y con acentos suaves del logo al seleccionarlos.
- Encabezado más pequeño con buscador centrado, fondo salvia y filtros discretos.
- Fondo gris cálido y presentación coordinada de las secciones de productos y guías.
- Transiciones breves al cambiar de pestaña, abrir guías y mostrar productos, respetando la preferencia de movimiento reducido.
- Conservación del diseño editorial de las guías abiertas, incluido el panel oscuro del paquete principal.
- Combos ordenados en tarjetas con imágenes alineadas, nombres resaltados y datos de uso separados.
- Títulos, imágenes y espacios más compactos, sin ocultar información.
- Cinco preguntas del asesor organizadas en un recuadro oscuro, con numeración y separadores.

### Historial de entregas

- **16 de julio de 2026:** primera publicación del manual.
- **20 de julio al 20 de agosto:** actualizaciones sucesivas del archivo principal; se normalizó el nombre a `index.html` y el 27 de julio se publicó una entrega de cinco productos nuevos.
- **21 de agosto:** separación del manual en archivos, incorporación del comparador y las validaciones, y mejoras de navegación.
- **22 de agosto:** actualización de guías, porciones y modos de uso.
- **25 de agosto:** actualización de guías deportivas, YUMEL e interfaz.
- **26 de agosto:** imágenes y relaciones entre productos y guías.
- **1 de septiembre:** renovación de fichas, diseño editorial de guías, cinco preguntas por guía, simplificación visual y nuevo diseño del comparador.
- **3 de septiembre:** actualización del logotipo.
- **10 de septiembre:** publicación del diseño reparado, catálogo actualizado, pestañas independientes, búsqueda global y filtros de guías en el encabezado.

El detalle técnico de cada entrega está disponible en el [historial completo de GitHub](https://github.com/jorgevazquez-arch/MANUAL-DE-PRODUCTOS/commits/main/).
