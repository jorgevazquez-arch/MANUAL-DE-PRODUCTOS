(function () {
    'use strict';

    const MIN_SECONDARY_PRODUCTS = 3;
    const $ = (selector) => document.querySelector(selector);

    function duplicateValues(values) {
        const counts = new Map();
        values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
        return [...counts.entries()].filter(([, count]) => count > 1).map(([value]) => value);
    }

    function addResult(results, name, passed, detail, level) {
        results.push({
            name,
            passed,
            detail,
            level: level || (passed ? 'ok' : 'error')
        });
    }

    function collectGuideStats(guides) {
        return guides.map((guide) => {
            const principal = Array.isArray(guide.comboPrincipal) ? guide.comboPrincipal : [];
            const secondary = Array.isArray(guide.comboSecundario) ? guide.comboSecundario : [];
            return {
                id: guide.id,
                principal,
                secondary,
                references: principal.concat(secondary)
            };
        });
    }

    function runValidation() {
        const results = [];
        const products = window.manualData && Array.isArray(window.manualData.productos)
            ? window.manualData.productos
            : [];
        const guides = window.manualData && Array.isArray(window.manualData.padecimientos)
            ? window.manualData.padecimientos
            : [];

        const productIds = products.map((product) => product.id).filter((id) => Number.isInteger(id));
        const productIdSet = new Set(productIds);
        const guideIds = guides.map((guide) => guide.id).filter(Boolean);
        const guideStats = collectGuideStats(guides);
        const references = guideStats.flatMap((guide) => guide.references);
        const referenceIds = references.map((reference) => reference.id).filter((id) => Number.isInteger(id));
        const missingIds = [...new Set(referenceIds.filter((id) => !productIdSet.has(id)))];
        const servingEntries = guideStats.flatMap((guide) => guide.references.map((reference) => String(reference.serving || '').trim()));
        const servingsWithoutQuantity = servingEntries.filter((serving) => !/\d/.test(serving));
        const duplicateProductIds = duplicateValues(productIds);
        const duplicateGuideIds = duplicateValues(guideIds);
        const emptyPrincipal = guideStats.filter((guide) => guide.principal.length === 0).map((guide) => guide.id);
        const emptySecondary = guideStats.filter((guide) => guide.secondary.length === 0).map((guide) => guide.id);
        const underMinimum = guideStats
            .filter((guide) => guide.secondary.length < MIN_SECONDARY_PRODUCTS)
            .map((guide) => `${guide.id} (${guide.secondary.length})`);

        addResult(results, 'Datos de productos cargados', products.length > 0, `Productos detectados: ${products.length}.`);
        addResult(results, 'Datos de padecimientos cargados', guides.length > 0, `Guías detectadas: ${guides.length}.`);
        addResult(results, 'IDs de productos únicos', duplicateProductIds.length === 0, duplicateProductIds.length === 0 ? 'No hay IDs duplicados.' : `Duplicados: ${duplicateProductIds.join(', ')}.`);
        addResult(results, 'IDs de padecimientos únicos', duplicateGuideIds.length === 0, duplicateGuideIds.length === 0 ? 'No hay claves duplicadas.' : `Duplicados: ${duplicateGuideIds.join(', ')}.`);
        addResult(results, 'Referencias válidas', missingIds.length === 0, missingIds.length === 0 ? `Referencias revisadas: ${referenceIds.length}.` : `Productos inexistentes: ${missingIds.join(', ')}.`);
        addResult(results, 'Porciones con cantidad explícita', servingsWithoutQuantity.length === 0, servingsWithoutQuantity.length === 0 ? `Porciones revisadas: ${servingEntries.length}; todas incluyen una cantidad.` : `Porciones sin cantidad: ${servingsWithoutQuantity.length}.`);
        addResult(results, 'Combo principal no vacío', emptyPrincipal.length === 0, emptyPrincipal.length === 0 ? 'Todas las guías tienen productos principales.' : `Sin productos principales: ${emptyPrincipal.join(', ')}.`);
        addResult(results, `Mínimo de ${MIN_SECONDARY_PRODUCTS} apoyos secundarios`, underMinimum.length === 0, underMinimum.length === 0 ? 'Todas las guías cumplen el mínimo.' : `No cumplen: ${underMinimum.join(', ')}.`);
        addResult(results, 'Combo secundario no vacío', emptySecondary.length === 0, emptySecondary.length === 0 ? 'Todas las guías tienen apoyos secundarios.' : `Sin apoyos secundarios: ${emptySecondary.join(', ')}.`);

        renderResults(results, {
            products: products.length,
            guides: guides.length,
            references: referenceIds.length
        });

        return { results, products, guides, references };
    }

    function renderResults(results, summary) {
        const errors = results.filter((result) => result.level === 'error' || !result.passed);
        const warnings = results.filter((result) => result.level === 'warning');
        const status = $('#overallStatus');
        const icon = $('#statusIcon');
        const title = $('#statusTitle');
        const message = $('#statusMessage');
        const list = $('#checkList');

        $('#productCount').textContent = summary.products;
        $('#guideCount').textContent = summary.guides;
        $('#referenceCount').textContent = summary.references;
        $('#errorCount').textContent = errors.length;
        list.replaceChildren();

        results.forEach((result) => {
            const item = document.createElement('li');
            item.className = `check-item ${result.level}`;

            const symbol = document.createElement('span');
            symbol.className = 'check-symbol';
            symbol.textContent = result.level === 'error' || !result.passed ? '✕' : result.level === 'warning' ? '!' : '✓';

            const content = document.createElement('span');
            const name = document.createElement('span');
            name.className = 'check-name';
            name.textContent = result.name;
            const detail = document.createElement('span');
            detail.className = 'check-detail';
            detail.textContent = result.detail;
            content.append(name, detail);
            item.append(symbol, content);
            list.append(item);
        });

        status.classList.toggle('fail', errors.length > 0);
        icon.textContent = errors.length > 0 ? '⚠️' : '✓';
        title.textContent = errors.length > 0 ? 'Se encontraron errores' : 'Validación correcta';
        message.textContent = errors.length > 0
            ? `${errors.length} comprobación(es) requiere(n) atención.`
            : warnings.length > 0
                ? `Validación correcta con ${warnings.length} aviso(s).`
                : 'El manual cumple las reglas configuradas.';
        $('#validationMeta').textContent = `Última revisión: ${new Date().toLocaleString('es-MX')}. Mínimo de apoyos secundarios: ${MIN_SECONDARY_PRODUCTS}.`;
    }

    function init() {
        $('#runValidation').addEventListener('click', runValidation);
        window.runManualValidation = runValidation;
        runValidation();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
