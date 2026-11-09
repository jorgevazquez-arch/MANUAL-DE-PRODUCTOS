// Marca confirmada por nombre/etiqueta del catálogo y tienda El Girasol.
// Fuentes y criterio: reportes/revision-contenido-2026-11-09.md.
// No deducir la marca por el dominio de una imagen o el código de barras.
(() => {
    const { productos, padecimientos } = window.manualData;
    const zennaturaIds = new Set([
        2, 3, 4, 5, 6, 10, 13, 16, 18, 20, 21, 23, 26, 27, 28,
        29, 30, 32, 33, 36, 39, 41, 45, 47, 49, 50, 51, 52, 53, 54,
        55, 58, 60, 61, 62, 63, 67, 68, 70, 72, 74, 75, 79, 80, 82,
        85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 100, 101,
        102, 103, 104, 105, 106, 107, 109, 113, 114, 116, 117, 118, 119, 122, 123,
        125, 126, 127, 128, 129, 130, 131, 132, 136, 137, 138, 139, 141, 145, 148,
        149, 150, 151, 152, 153, 154, 157, 163, 166, 169, 170, 171, 172, 173, 174,
        175, 176, 177, 180, 181, 182, 184, 227, 228, 246, 269, 270, 271, 272
    ]);
    productos.forEach(product => {
        if (zennaturaIds.has(product.id)) product.brand = 'Zennatura';
    });
    const byId = new Map(productos.map(product => [product.id, product]));
    const priority = item => byId.get(item.id)?.brand === 'Zennatura' ? 0 : 1;
    padecimientos.forEach(guide => {
        // Conservar el papel de cada opción y sus condiciones de uso.
        // La preferencia de marca no convierte un apoyo adicional en principal.
        for (const key of ['comboPrincipal', 'comboSecundario']) {
            guide[key].sort((a, b) => priority(a) - priority(b));
        }
    });
})();
