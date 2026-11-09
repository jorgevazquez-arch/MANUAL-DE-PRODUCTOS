const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const context = vm.createContext({ window: {} });
for (const file of ['data/productos.js', 'data/padecimientos.js', 'js/search.js', 'data/asesoria.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
}
const { productos, padecimientos } = context.window.manualData;
const search = context.window.manualSearch;
const find = (query, filter) => search.searchProducts(productos, padecimientos, query, filter);

test('todos los productos se encuentran por su nombre y sus alias', () => {
    for (const product of productos) {
        for (const query of [product.name, ...(product.searchAliases || [])]) {
            assert(find(query).some(result => result.id === product.id && result.matchField === 'Nombre'), query);
        }
    }
});
test('todas las guías y alias se reconocen sin acentos ni mayúsculas', () => {
    for (const guide of padecimientos) {
        for (const query of [guide.name, ...(guide.searchAliases || [])]) {
            assert(search.guideNameMatches(guide, search.normalize(query)), query);
        }
    }
});
test('vitamina C conserva las fichas correctas y prioriza nombres', () => {
    const results = find('vitamina C');
    assert(results.some(product => product.id === 108 && product.matchField === 'Nombre'));
    assert.equal(search.getGuides(padecimientos, productos, 'vitamina C').length, 0);
    let secondary = false;
    for (const product of results) {
        if (product.matchField !== 'Nombre') secondary = true;
        else assert.equal(secondary, false);
    }
});
test('acentos, espacios, signos y orden de palabras no pierden resultados', () => {
    const ids = query => Array.from(find(query), product => product.id).sort((a, b) => a - b);
    for (const query of [' VITÁMINA   C ', 'vitamina-c', 'vitamina + c', 'C vitamina']) {
        assert.deepEqual(ids(query), ids('vitamina c'), query);
    }
    assert(find('magnesio citrato').some(product => product.name.includes('CITRATO DE MAGNESIO')));
    assert(find('omega 3').length > 0);
});
test('letras y números cortos no coinciden dentro de otras palabras', () => {
    assert.equal(search.matches('vitamina calcio', 'vitamina c'), false);
    assert.equal(search.matches('vitamina D3', 'vitamina d'), true);
    assert.equal(search.matches('vitamina B12 500mg', 'b-12 500 mg'), true);
    assert.equal(search.matches('omega 369', 'omega 3'), false);
    assert.equal(search.matches('vitamina C-1000', 'vitamina c'), true);
    assert.equal(search.matches('colágeno hidrolizado', 'colag hidr'), true);
});
test('una guía no elimina coincidencias directas de productos', () => {
    const products = [{ id: 1, name: 'A', ingredients: 'gastritis' }, { id: 2, name: 'B' }];
    const guides = [{ name: 'Gastritis', comboPrincipal: [{ id: 2 }], comboSecundario: [] }];
    const results = search.searchProducts(products, guides, 'gastritis');
    assert.deepEqual(Array.from(results, product => product.id), [1, 2]);
    assert.equal(results[0].matchField, 'Ingredientes');
});
test('síntomas y guías devuelven sus productos relacionados', () => {
    for (const query of ['gastritis', 'no puedo dormir', 'dolor articular']) {
        const guides = search.getGuides(padecimientos, productos, query);
        assert(guides.length > 0, query);
        const ids = new Set(find(query).map(product => product.id));
        for (const guide of guides) {
            for (const item of [...guide.comboPrincipal, ...guide.comboSecundario]) {
                if (productos.some(product => product.id === item.id)) assert(ids.has(item.id), query);
            }
        }
    }
});
test('códigos completos y parciales encuentran todos los productos registrados', () => {
    for (const product of productos.filter(product => product.code)) {
        assert(find(String(product.code)).some(result => result.id === product.id), product.name);
        assert(find(String(product.code).slice(0, 6)).some(result => result.id === product.id), product.name);
    }
    assert.equal(find('999999999999999999').length, 0);
});
test('la búsqueda global ignora la categoría y al borrar se restaura el filtro', () => {
    assert(find('vitamina c', 'laxantes').some(product => product.id === 108));
    assert(find('', 'digestivo').every(product => product.category === 'digestivo'));
    assert.equal(find('').length, productos.length);
});
test('texto desconocido, signos y caracteres especiales son seguros', () => {
    assert.equal(find('zzzzsinresultado').length, 0);
    for (const query of ['[', '.*', '<script>', 'de con para', '🧪']) assert.doesNotThrow(() => find(query));
    assert.equal(find('de con para').length, 0);
    assert.equal(find(' + - ').length, productos.length);
});
