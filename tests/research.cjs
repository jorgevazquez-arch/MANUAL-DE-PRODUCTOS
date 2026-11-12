const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const context = vm.createContext({ window: {} });
vm.runInContext(read('data/productos.js'), context);
const products = context.window.manualData.productos;
const app = read('js/app.js');
const helpers = app.slice(app.indexOf('        function escapeGuideAttribute('), app.indexOf('        function renderGuideRationaleIcon('));
vm.runInContext(helpers, context);
const render = context.renderProductSources;

test('la nota de ON-C-LEN distingue los hallazgos experimentales y enlaza los estudios', () => {
    const product = products.find(product => product.id === 124);
    assert.match(product.researchNote.text, /modelos experimentales/);
    assert.match(product.researchNote.text, /extractos específicos/);
    assert.match(product.researchNote.text, /ingredientes con preparaciones y concentraciones definidas/);
    assert.match(product.researchNote.text, /revisión del oncólogo/);
    const experimental = product.benefits.find(benefit => /apoptosis/.test(benefit));
    assert.match(experimental, /modelos experimentales/);
    assert.match(experimental, /extractos específicos/);
    assert.match(experimental, /revisión del oncólogo/);
    const html = render(product);
    for (const source of product.researchNote.sources) {
        assert(html.includes(source.url));
        assert(html.includes(source.title));
    }
    assert.equal(render(products.find(product => product.id === 6)), '');
});

test('los puntos y fuentes se actualizan al cambiar de producto sin arrastrar contenido', () => {
    const elements = {
        modalBenefits: { innerHTML: '' },
        modalBenefitSummary: { textContent: '', hidden: true },
        modalBenefitSources: { hidden: true, innerHTML: '' }
    };
    context.document = { getElementById: id => elements[id] };
    const start = app.indexOf("            const benefitsList = document.getElementById('modalBenefits');");
    const end = app.indexOf("            document.getElementById('modalContra')", start);
    const update = product => {
        context.p = product;
        vm.runInContext(`{${app.slice(start, end)}}`, context);
    };
    update(products.find(product => product.id === 124));
    assert.equal(elements.modalBenefitSources.hidden, false);
    assert.match(elements.modalBenefitSources.innerHTML, /27564258/);
    assert.match(elements.modalBenefits.innerHTML, /<li>Investigación de sus ingredientes: en modelos experimentales/);
    assert(!/<p|<h[1-6]/.test(elements.modalBenefits.innerHTML));
    update(products.find(product => product.id === 6));
    assert.equal(elements.modalBenefitSources.hidden, true);
    assert.equal(elements.modalBenefitSources.innerHTML, '');
    assert(!/apoptosis|modelos experimentales/.test(elements.modalBenefits.innerHTML));
});

test('la nota escapa el contenido y descarta enlaces que no usan HTTPS', () => {
    const html = render({ researchNote: {
        focus: '<img src=x onerror=alert(2)>',
        text: '<img src=x onerror=alert(1)>',
        sources: [
            { title: '<script>bad</script>', url: 'https://example.com/?q=" onclick="bad' },
            { title: 'Enlace inseguro', url: 'javascript:alert(1)' }
        ]
    } });
    assert(!html.includes('<img'));
    assert(!html.includes('<script>'));
    assert(!html.includes('javascript:'));
    assert(!html.includes('" onclick="'));
    assert(html.includes('&lt;script&gt;'));
    assert(!/<p|<h[1-6]/.test(html));
    assert(html.includes('rel="noopener noreferrer"'));
});

test('la prueba conserva el enfoque y las cantidades de cada fórmula', () => {
    const pilot = JSON.parse(read('reportes/prueba-fundamento-2026-11-12.json'));
    assert.equal(pilot.changes.length, 9);
    assert.equal(new Set(pilot.changes.map(change => change.id)).size, 9);
    assert.equal(new Set(pilot.changes.map(change => change.researchNote.text)).size, 9);
    for (const change of pilot.changes) {
        const product = products.find(product => product.id === change.id);
        assert(product, String(change.id));
        for (const [field, value] of Object.entries(change.catalogSnapshot)) {
            assert.equal(product[field], value, `${product.id}: ${field} requiere revisión del fundamento`);
        }
        assert.equal(JSON.stringify(product.researchNote), JSON.stringify(change.researchNote));
        assert(!/canceros|anticancer|apoptosis/i.test(product.researchNote.text), product.name);
        const html = render(product);
        assert(!html.includes(product.researchNote.text), product.name);
        for (const source of product.researchNote.sources) assert(html.includes(source.url), product.name);
    }
    assert.match(products.find(product => product.id === 13).researchNote.focus, /digestión/);
    assert.match(products.find(product => product.id === 54).researchNote.focus, /articulaciones/);
    assert.match(products.find(product => product.id === 93).researchNote.focus, /día/);
    assert.match(products.find(product => product.id === 94).researchNote.focus, /nocturno/);
    const technical = JSON.parse(read('reportes/redaccion-positiva-fundamento-2026-11-12.json'));
    assert.match(technical.changes.find(change => change.id === 228).previousNote.text, /no equivalen a 250 mg del mineral puro/);
});

test('los diez productos integran el contenido en beneficios sin un bloque adicional', () => {
    const report = JSON.parse(read('reportes/beneficios-integrados-2026-11-12.json'));
    assert.equal(report.changes.length, 10);
    for (const change of report.changes) {
        const product = products.find(product => product.id === change.id);
        assert.equal(JSON.stringify(product.benefits), JSON.stringify(change.benefits), product.name);
        assert(product.benefits.length >= 2, product.name);
    }
    const html = read('index.html');
    assert(html.includes('id="modalBenefitSources"'));
    assert(!/modalResearchWrap|modalResearchTitle|modalResearchContent/.test(html));
    assert(!/Fundamento e investigación de los ingredientes/.test(app + html));
});

test('los bloques explican beneficios y conservan las fuentes y la revisión técnica', () => {
    const report = JSON.parse(read('reportes/redaccion-positiva-fundamento-2026-11-12.json'));
    assert.equal(report.changes.length, 10);
    const negativeReview = /placebo|no hay evidencia|no demuestran|no mostró ventaja|sin superioridad|no equivalen|no permite equiparar/i;
    for (const change of report.changes) {
        const product = products.find(product => product.id === change.id);
        assert.equal(JSON.stringify(product.researchNote), JSON.stringify(change.researchNote), product.name);
        const visible = [product.researchNote.text, ...product.researchNote.sources.map(source => source.title)].join(' ');
        assert(!negativeReview.test(visible), product.name);
        assert.equal(JSON.stringify(product.researchNote.sources.map(source => source.url)), JSON.stringify(change.previousNote.sources.map(source => source.url)), product.name);
        assert(change.previousNote.text, product.name);
    }
    const oncology = products.find(product => product.id === 124);
    assert.match(oncology.interactions, /no iniciar este suplemento sin revisión del oncólogo/);
    assert(!/ON-C-LEN (mata|elimina|destruye) (?:las )?células cancerosas/i.test(oncology.researchNote.text));
});
