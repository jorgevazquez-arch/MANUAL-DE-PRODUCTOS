// Inventario editorial reproducible; no evalúa seguridad clínica de una pareja.
const fs = require('node:fs');
const path = require('node:path');
global.window = {};
for (const file of ['productos', 'padecimientos', 'asesoria']) require(`../data/${file}.js`);
const { productos, padecimientos } = window.manualData;
const rows = [['Guía', 'ID', 'Productos en guía', 'Pares complementarios explícitos', 'Duplicados para revisar', 'Aviso', 'Estado clínico']];
const errors = [];
const ids = new Set(productos.map(p => p.id));
if (ids.size !== productos.length) errors.push('IDs de producto repetidos');
for (const guide of padecimientos) {
    const entries = [...guide.comboPrincipal, ...guide.comboSecundario];
    const selected = new Set(entries.map(item => item.id));
    if (selected.size !== entries.length) errors.push(`Producto repetido en ${guide.id}`);
    for (const id of selected) if (!ids.has(id)) errors.push(`Referencia inexistente ${guide.id}: ${id}`);
    const products = productos.filter(p => selected.has(p.id));
    const pairs = products.flatMap(p => p.complementaryProductIds
        .filter(id => selected.has(id) && id > p.id).map(id => `${p.id} + ${id}`));
    const duplicates = [
        ['magnesio', /magnesi/i], ['vitamina D', /vitamina d|\bD3\b/i],
        ['creatina', /creatina/i], ['teanina', /teanina/i],
        ['zinc', /zinc/i], ['ashwagandha', /ashwagand|ashwaganda/i]
    ].flatMap(([label, pattern]) => {
        const matches = products.filter(p => pattern.test(p.ingredients || ''));
        return matches.length > 1 ? [`${label}: ${matches.map(p => p.id).join('/')}`] : [];
    });
    rows.push([guide.name, guide.id, products.map(p => `${p.id}: ${p.name}`).join(' | '), pairs.join(' | ') || 'Ninguno validado en la matriz', duplicates.join(' | ') || 'Sin coincidencias en las 6 reglas; no demuestra ausencia de riesgo', guide.safetyNote || 'Revisión general de medicamentos, condiciones y duplicados', 'Pendiente de revisión clínica de fórmulas y combinaciones']);
}
if (errors.length) throw new Error(errors.join('\n'));
const quote = value => `"${String(value).replaceAll('"', '""')}"`;
fs.writeFileSync(path.join(__dirname, 'revision-cruces-por-padecimiento.csv'), '\ufeff' + rows.map(row => row.map(quote).join(',')).join('\r\n'), 'utf8');
console.log(`${productos.length} productos; ${padecimientos.length} guías; referencias válidas y sin duplicados internos.`);
console.log('Matriz generada. Las coincidencias de ingredientes son alertas editoriales, no un dictamen clínico.');
