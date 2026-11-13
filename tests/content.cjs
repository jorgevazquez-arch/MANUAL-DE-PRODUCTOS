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
const corrections = JSON.parse(read('reportes/correcciones-artmuub-inositol-2026-11-10.json'));

test('la revisión cubre cada producto una sola vez y conserva los textos revisados', () => {
    const reports = [1, 2, 3].map(n => JSON.parse(read(`reportes/revision-productos-${n}.json`)));
    const reviewed = reports.flatMap(report => report.reviewedIds);
    assert.equal(reviewed.length, productos.length);
    assert.equal(new Set(reviewed).size, productos.length);
    const edits = new Map(reports.flatMap(report => report.changes).map(product => [product.id, product]));
    const integral = JSON.parse(read('reportes/revision-beneficios-integrales-2026-11-10.json'));
    assert.equal(integral.reviewedIds.length, productos.length);
    assert.equal(new Set(integral.reviewedIds).size, productos.length);
    assert.equal(integral.changes.length, productos.length);
    assert.equal(new Set(integral.changes.map(change => change.id)).size, productos.length);
    for (const change of integral.changes) {
        const product = productos.find(product => product.id === change.id);
        assert(product && integral.reviewedIds.includes(change.id), String(change.id));
        // Si cambia una fórmula, sus beneficios necesitan una nueva revisión.
        const corrected = corrections.productChanges.find(item => item.id === change.id);
        assert.equal(product.ingredients, corrected?.ingredients || change.ingredients, `${change.id}: fórmula sin revisar`);
        edits.set(change.id, { ...edits.get(change.id), ...change });
    }
    for (const change of corrections.productChanges) edits.set(change.id, { ...edits.get(change.id), ...change });
    for (const product of productos) {
        assert(reviewed.includes(product.id), product.name);
        for (const field of ['shortDesc', 'benefitSummary', 'benefits']) {
            if (edits.get(product.id)?.[field] !== undefined) {
                assert.equal(JSON.stringify(product[field]), JSON.stringify(edits.get(product.id)[field]), `${product.id}: ${field}`);
            }
        }
    }
});

test('los beneficios integran los ingredientes antes omitidos y explican sus aportes', () => {
    const cases = [
        [2, ['coco', 'ácido láurico', 'orégano', 'carvacrol']],
        [3, ['colágeno', 'vitamina C', 'biotina']],
        [5, ['B1', 'B2', 'B5', 'B6', 'B9', 'B12', 'biotina', 'blueberry', 'cranberry', 'ginseng', 'vitamina A', 'vitamina D']],
        [18, ['colágeno', 'arándano', 'aloe vera', 'omega 3', 'ácido hialurónico', 'vitamina E']],
        [29, ['hesperidina', 'inulina', 'Gynostemma', 'ácido clorogénico', 'ácido alfa lipoico', 'Bifidobacterium lactis', 'zinc', 'cromo']],
        [55, ['vitaminas C y D3', 'equinácea']],
        [94, ['bisglicinato', 'citrato', 'glicina', 'L-teanina', 'manzanilla', '5-HTP', 'B6', 'inulina']],
        [104, ['vinagre', 'cúrcuma', 'jengibre', 'canela', 'pimienta negra']],
        [134, ['chícharo', 'arroz', 'BCAA', 'probióticos', 'cacao']],
        [135, ['chícharo', 'arroz', 'BCAA', 'probióticos', 'vainilla', 'stevia']],
        [151, ['inulina', 'FOS', 'acacia', 'espinaca', 'apio', 'pepino', 'nopal', 'piña', 'alfalfa', 'té verde', 'aloe vera', 'cúrcuma', 'jengibre', 'alcachofa', 'guaraná', 'clorofila', 'pimienta negra', 'bromelina', 'papaína', 'enzimas vegetales', 'Lactobacillus rhamnosus GG', 'Bifidobacterium bifidum']],
        [157, ['MSM', 'glucosamina', 'cúrcuma', 'nogal', 'vitamina C', 'calcio', 'magnesio', 'B2', 'B6', 'zinc', 'hierro', 'potasio', 'B12', 'fósforo']],
        [158, ['chícharo', 'arroz', 'leucina', 'isoleucina', 'valina', 'Lactobacillus acidophilus', 'Bifidobacterium bifidum', 'cocoa', 'cacao', 'sal rosa', 'stevia']],
        [246, ['inulina', 'L-glutamina', 'NAG', 'aloe vera', 'zinc L-carnosina', 'D3', 'frambuesa', 'ácido cítrico', 'esteviol']],
        [271, ['Albizia', 'Bacopa', 'L-teanina', 'magnesio', 'gelatina', 'agua']],
        [272, ['Albizia', 'Rhodiola', 'L-teanina', 'magnesio']]
    ];
    for (const [id, ingredients] of cases) {
        const text = productos.find(product => product.id === id).benefits.join(' ').toLowerCase();
        for (const ingredient of ingredients) assert(text.includes(ingredient.toLowerCase()), `${id}: falta ${ingredient}`);
    }
    assert.match(productos.find(p => p.id === 3).benefits.join(' '), /ayuda a formar el colágeno/);
    assert.match(productos.find(p => p.id === 1).benefits.join(' '), /pequeñas cantidades/);
    const ashwagandha = productos.find(p => p.id === 33);
    assert.match(ashwagandha.shortDesc, /celulosa microcristalina y el estearato magnésico dan forma a la tableta/);
    assert(!/celulosa|estearato/i.test(ashwagandha.benefits.join(' ')));
    assert.match(productos.find(p => p.id === 272).ingredients, /Excipientes: gelatina y agua purificada/);
    assert.match(productos.find(p => p.id === 263).benefits.join(' '), /evitar su consumo por vía oral/i);
});

test('los beneficios explican su uso sin comentarios técnicos sobre evidencia', () => {
    const technical = /evidencia|demostr|demuestr|en estudio|estudiad|relacionad[oa]s? con sustancias|sin garantizar|sin asegurar|no hay base suficiente|enfoque metabólico/i;
    for (const product of productos) {
        for (const benefit of product.benefits) {
            assert(!technical.test(benefit), `${product.id}: ${benefit}`);
            assert(!/[,;]\.|\.{2,}/.test(benefit), `${product.id}: puntuación dañada`);
        }
    }
    assert.match(productos.find(p => p.id === 150).benefits.join(' '), /relajarse y prepararse para dormir/);
    assert.match(productos.find(p => p.id === 272).benefits.join(' '), /cansancio en días de estrés/);
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
        const corrected = corrections.guideChanges.find(item => item.guideId === change.guideId && item.group === change.group && item.productId === change.productId);
        assert.equal(item.rationale, corrected?.rationale || change.rationale);
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
