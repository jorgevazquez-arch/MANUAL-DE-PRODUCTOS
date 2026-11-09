const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = vm.createContext({ window: {} });
vm.runInContext(read('data/productos.js'), context);
const { productos } = context.window.manualData;
const reports = [1, 2, 3].map(n => JSON.parse(read(`reportes/revision-clasificacion-${n}.json`)));
const reviews = reports.flatMap(report => report.reviews);
const summary = JSON.parse(read('reportes/resumen-clasificacion-2026-11-09.json'));

test('cada producto tiene una sola clasificación revisada con razón y evidencia', () => {
    const reviewedIds = reports.flatMap(report => report.reviewedIds);
    assert.equal(reviewedIds.length, productos.length);
    assert.equal(new Set(reviewedIds).size, productos.length);
    assert.equal(reviews.length, productos.length);
    assert.equal(new Set(reviews.map(review => review.id)).size, productos.length);
    for (const product of productos) {
        const review = reviews.find(review => review.id === product.id);
        assert(review, product.name);
        assert.equal(review.name, product.name);
        assert.equal(product.category, review.to, product.name);
        assert.equal(review.status, review.from === review.to ? 'keep' : 'change');
        assert(review.reason && review.evidence.length, product.name);
        assert(['high', 'medium', 'low'].includes(review.confidence));
    }
});

test('todas las categorías están accesibles en filtros, fichas e impresión', () => {
    const html = read('index.html');
    const app = read('js/app.js');
    const filters = new Set(Array.from(html.matchAll(/<button[^>]*data-filter="([^"]+)"/g), match => match[1]));
    const object = name => {
        const match = app.match(new RegExp(`const ${name} = (\\{[\\s\\S]*?\\n\\s*\\});`));
        assert(match, name);
        return vm.runInNewContext(`(${match[1]})`);
    };
    const icons = object('categoryIcons');
    const descriptions = object('categoryDescriptions');
    const pdf = object('categoryOrderPdf');
    for (const product of productos) {
        assert(filters.has(product.category), product.name);
        assert(icons[product.category]?.name, product.name);
        assert(descriptions[product.category], product.name);
        assert(pdf[product.category], product.name);
    }
    assert(app.includes('const categoryOrder = categoryOrderPdf;'));
    assert.equal(productos.find(product => product.id === 113).category, 'deportivo');
    assert.equal(productos.find(product => product.id === 104).category, 'digestivo');
    for (const id of [109, 154, 166, 230, 245, 262]) assert.equal(productos.find(product => product.id === id).category, 'locomotor');
    assert.equal(productos.find(product => product.id === 263).category, 'otros');
});

test('el resumen conserva el conteo y distingue las fichas originales de las vigentes', () => {
    const counts = productos.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    assert.deepEqual(counts, summary.after);
    assert.equal(summary.totalProducts, productos.length);
    assert.equal(summary.changed, reviews.filter(review => review.status === 'change').length);
    assert.equal(summary.changed + summary.kept, productos.length);
    const fromOriginal = new Set(summary.sourceDocuments.flatMap(document => document.productIds));
    assert.equal(fromOriginal.size, summary.originalHtmlProducts);
    assert.equal(fromOriginal.size + summary.catalogOnlyProductIds.length, productos.length);
    for (const document of summary.sourceDocuments) {
        assert(/\.html$/i.test(document.file));
        assert(/^[a-f0-9]{64}$/.test(document.sha256));
    }
    for (const id of summary.catalogOnlyProductIds) {
        assert(!fromOriginal.has(id));
        assert.equal(reviews.find(review => review.id === id).status, 'keep');
    }
});
