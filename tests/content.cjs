const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = vm.createContext({ window: {} });
for (const file of ['data/productos.js', 'data/padecimientos.js', 'js/search.js', 'data/asesoria.js', 'data/marcas.js']) {
    vm.runInContext(read(file), context);
}
const { productos, padecimientos } = context.window.manualData;

test('la revisión cubre cada producto una sola vez y conserva los textos revisados', () => {
    const reports = [1, 2, 3].map(n => JSON.parse(read(`reportes/revision-productos-${n}.json`)));
    const reviewed = reports.flatMap(report => report.reviewedIds);
    assert.equal(reviewed.length, productos.length);
    assert.equal(new Set(reviewed).size, productos.length);
    const edits = new Map(reports.flatMap(report => report.changes).map(product => [product.id, product]));
    for (const product of productos) {
        assert(reviewed.includes(product.id), product.name);
        for (const field of ['shortDesc', 'benefitSummary', 'benefits']) {
            if (edits.get(product.id)?.[field] !== undefined) {
                assert.equal(JSON.stringify(product[field]), JSON.stringify(edits.get(product.id)[field]), `${product.id}: ${field}`);
            }
        }
    }
});

test('todas las guías conservan referencias válidas y opciones sin duplicar', () => {
    const ids = new Set(productos.map(product => product.id));
    assert.equal(ids.size, productos.length);
    const descriptions = JSON.parse(read('reportes/revision-guias-descripciones.json'));
    assert.equal(Object.keys(descriptions).length, padecimientos.length);
    for (const guide of padecimientos) {
        assert.equal(guide.description, descriptions[guide.id]);
        const items = [...guide.comboPrincipal, ...guide.comboSecundario];
        assert.equal(new Set(items.map(item => item.id)).size, items.length, guide.id);
        for (const item of items) {
            assert(ids.has(item.id), `${guide.id}: ${item.id}`);
            assert((item.serving || productos.find(product => product.id === item.id).serving) && item.usage && item.rationale, `${guide.id}: ${item.id}`);
        }
    }
});

test('Zennatura aparece primero en cada grupo sin clasificar Green Life o NOW como propios', () => {
    const byId = new Map(productos.map(product => [product.id, product]));
    for (const id of [108, 110, 168, 193, 202, 225, 245]) assert.notEqual(byId.get(id).brand, 'Zennatura', String(id));
    for (const guide of padecimientos) {
        for (const group of [guide.comboPrincipal, guide.comboSecundario]) {
            let otherBrand = false;
            for (const item of group) {
                if (byId.get(item.id).brand !== 'Zennatura') otherBrand = true;
                else assert.equal(otherBrand, false, `${guide.id}: ${item.id}`);
            }
        }
    }
    assert.equal(padecimientos.find(guide => guide.id === 'deficiencia_vitamina_d').comboPrincipal[0].id, 55);
    assert.equal(padecimientos.find(guide => guide.id === 'control_peso').comboPrincipal[0].id, 132);
    assert.equal(padecimientos.find(guide => guide.id === 'tos_irritacion_garganta').comboPrincipal[0].id, 170);
});

test('cada recomendación original tiene una razón revisada en la guía y grupo correctos', () => {
    const report = JSON.parse(read('reportes/revision-guias-razones.json'));
    assert.equal(new Set(report.reviewedGuideIds).size, padecimientos.length);
    const keys = report.changes.map(change => `${change.guideId}|${change.group}|${change.productId}`);
    assert.equal(new Set(keys).size, keys.length);
    for (const change of report.changes) {
        const guide = padecimientos.find(guide => guide.id === change.guideId);
        assert(guide && report.reviewedGuideIds.includes(guide.id), change.guideId);
        const item = guide[change.group].find(item => item.id === change.productId);
        assert(item, `${change.guideId}: ${change.productId}`);
        assert.equal(item.rationale, change.rationale);
        assert(!/\p{L}\?\p{L}/u.test(item.rationale), `${change.guideId}: acentos dañados`);
    }
    const raw = vm.createContext({ window: {} });
    vm.runInContext(read('data/padecimientos.js'), raw);
    const count = raw.window.manualData.padecimientos.reduce((sum, guide) => sum + guide.comboPrincipal.length + guide.comboSecundario.length, 0);
    assert.equal(keys.length, count);
});

test('las descripciones y beneficios usan lenguaje cotidiano y NUYO conserva su enfoque articular', () => {
    const complex = /\b(?:biodisponibilidad|mitocondrial|neurotransmisores|neuroplasticidad|ergogénico|homeostasis|coadyuvante)\b/i;
    for (const product of productos) {
        for (const text of [product.shortDesc, product.benefitSummary, ...product.benefits]) {
            assert(text && !complex.test(text), `${product.id}: ${text}`);
            assert(!/\p{L}\?\p{L}/u.test(text), `${product.id}: texto con acentos dañados`);
        }
    }
    const nuyo = productos.find(product => product.id === 157);
    assert(!/cognici|cognitiv/i.test([nuyo.shortDesc, nuyo.benefitSummary, ...nuyo.benefits].join(' ')));
});

test('vinagre de sidra conserva la presentación de 90 cápsulas con su código y mezcla propios', () => {
    const product = productos.find(product => product.id === 104);
    assert.equal(product.code, '7503026253090');
    assert.equal(product.packageContent, '90 cápsulas');
    assert.equal(product.serving, '3 cápsulas (1.5 g)');
    for (const ingredient of ['cúrcuma', 'jengibre', 'canela', 'pimienta negra']) {
        assert(product.ingredients.includes(ingredient), ingredient);
    }
});

test('la página carga los datos de marcas después del catálogo y antes de la aplicación', () => {
    const html = read('index.html');
    const scripts = Array.from(html.matchAll(/<script src="(\.\/[^"]+)"/g), match => match[1].split('?')[0]);
    for (const script of scripts) assert(fs.existsSync(path.join(root, script)), script);
    assert(scripts.indexOf('./data/marcas.js') > scripts.indexOf('./data/padecimientos.js'));
    assert(scripts.indexOf('./data/marcas.js') > scripts.indexOf('./data/asesoria.js'));
    assert(scripts.indexOf('./data/marcas.js') < scripts.indexOf('./js/app.js'));
});
