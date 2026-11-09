// Motor compartido de búsqueda. No interpreta coincidencias como indicaciones de uso.
(() => {
    const normalize = value => String(value ?? '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .replace(/([a-z])(\d)/g, '$1 $2').replace(/(\d)([a-z])/g, '$1 $2')
        .replace(/[^a-z0-9]+/g, ' ').trim();
    const ignored = new Set(['de', 'del', 'en', 'el', 'la', 'los', 'las', 'y', 'o', 'al', 'con', 'para']);
    const terms = value => normalize(value).split(' ').filter(word => word && !ignored.has(word));
    const matches = (value, query) => {
        const words = terms(query);
        const text = normalize(value).split(' ');
        return words.length > 0 && words.every(word => text.some(token =>
            token === word || (word.length >= 3 && token.startsWith(word))));
    };
    const productNameMatches = (product, query) => [product.name, ...(product.searchAliases || [])]
        .some(name => matches(name, query));
    const guideNameMatches = (guide, query) => [guide.name, ...(guide.searchAliases || [])]
        .some(name => matches(name, query));
    const getGuides = (guides, products, query) => {
        if (!terms(query).length || /^\d+$/.test(normalize(query))) return [];
        if (products.some(product => productNameMatches(product, query))) return [];
        const named = guides.filter(guide => guideNameMatches(guide, query));
        if (named.length) return named;
        // Conserva la equivalencia entre articulación, articular y articulaciones.
        const symptomText = value => normalize(value).replace(/\barticul\w*/g, 'articul');
        return guides.filter(guide => (guide.symptoms || [])
            .some(symptom => matches(symptomText(symptom), symptomText(query))));
    };
    const fields = [
        ['shortDesc', 'Descripción'], ['ingredients', 'Ingredientes'],
        ['benefitSummary', 'Beneficios'], ['benefits', 'Beneficios'],
        ['contraindications', 'Contraindicaciones'], ['interactions', 'Interacciones'],
        ['foodInteractions', 'Interacciones con Alimentos'], ['choiceNote', 'Diferencia de fórmula']
    ];
    const searchProducts = (products, guides, query, filter = 'all') => {
        const term = normalize(query);
        if (!term) return products.filter(product => filter === 'all' || product.category === filter)
            .map(product => ({ ...product, matchField: null }));
        const selectedGuides = getGuides(guides, products, query);
        const relatedIds = new Set(selectedGuides.flatMap(guide =>
            [...(guide.comboPrincipal || []), ...(guide.comboSecundario || [])].map(item => item.id)));
        const barcode = /^\d{6,}$/.test(term);
        return products.flatMap(product => {
            let matchField = null;
            if (/^\d+$/.test(term) && String(product.code || '').includes(term)) matchField = 'Código de Barras';
            else if (!barcode) {
                if (productNameMatches(product, query)) matchField = 'Nombre';
                else {
                    const field = fields.find(([key]) => {
                        const value = product[key];
                        return matches(Array.isArray(value) ? value.join(' ') : value || '', query);
                    });
                    if (field) matchField = field[1];
                }
                if (!matchField && relatedIds.has(product.id)) matchField = 'Guía relacionada · consulta interna';
            }
            return matchField ? [{ ...product, matchField }] : [];
        }).sort((a, b) => Number(b.matchField === 'Nombre') - Number(a.matchField === 'Nombre')
            || a.name.localeCompare(b.name, 'es'));
    };
    window.manualSearch = { normalize, matches, productNameMatches, guideNameMatches, getGuides, searchProducts };
})();
