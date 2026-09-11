        const { productos, padecimientos } = window.manualData;
        let activeManualTab = 'productos';
        let matchingSearchProductIds = new Set();
        const reducedManualMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const manualEntranceAnimations = new Map();

        function animateManualEntrance(element, distance = 10) {
            if (!element) return;
            manualEntranceAnimations.get(element)?.cancel();
            if (reducedManualMotion.matches || typeof element.animate !== 'function') return;
            const animation = element.animate([
                { opacity: 0, transform: `translateY(${distance}px)` },
                { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 300, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
            manualEntranceAnimations.set(element, animation);
            const cleanup = () => {
                if (manualEntranceAnimations.get(element) === animation) manualEntranceAnimations.delete(element);
            };
            animation.onfinish = cleanup;
            animation.oncancel = cleanup;
        }

        reducedManualMotion.addEventListener('change', () => {
            if (reducedManualMotion.matches) {
                manualEntranceAnimations.forEach(animation => animation.cancel());
                manualEntranceAnimations.clear();
            }
        });
        const manualTabSections = {
            productos: ['productsCatalog'],
            guias: ['padecimientosGuideWeb'],
            recursos: ['introWeb', 'guiaLenguajeWeb', 'arteDeVenderWeb', 'guiaRapidaWeb', 'faqWeb', 'anexo']
        };

        function updateManualView() {
            const searching = searchInput.value.trim() !== '';
            Object.entries(manualTabSections).forEach(([tab, ids]) => {
                const visible = searching ? tab !== 'recursos' : tab === activeManualTab;
                ids.forEach(id => {
                    const section = document.getElementById(id);
                    if (!section) return;
                    const wasHidden = section.classList.contains('manual-view-hidden');
                    section.classList.toggle('manual-view-hidden', !visible);
                    if (!visible) manualEntranceAnimations.get(section)?.cancel();
                    if (visible && wasHidden) animateManualEntrance(section);
                });
            });
            document.getElementById('filterContainer').classList.toggle('manual-view-hidden', searching || activeManualTab !== 'productos');
            document.getElementById('padColorLegend')?.classList.toggle('manual-view-hidden', searching || activeManualTab !== 'guias');
            document.querySelectorAll('#padColorLegend .pad-color-btn').forEach(button => {
                button.setAttribute('aria-pressed', String(button.classList.contains('active')));
            });
            document.querySelectorAll('[data-nav-target]').forEach(button => {
                const selected = !searching && button.dataset.navTarget === activeManualTab;
                button.classList.toggle('active', selected);
                button.setAttribute('aria-selected', String(selected));
            });
            if (searching || activeManualTab === 'productos') productsCatalog.open = true;
            const guideCatalog = document.getElementById('padecimientosCatalog');
            if (guideCatalog && (searching || activeManualTab === 'guias')) guideCatalog.open = true;
            const guideCount = [...document.querySelectorAll('.padecimiento-card')].filter(card => card.style.display !== 'none').length;
            document.getElementById('globalSearchStatus').textContent = searching
                ? `${matchingSearchProductIds.size} productos · ${guideCount} guías relacionadas`
                : '';
        }

        function selectManualTab(tab) {
            activeManualTab = tab;
            if (searchInput.value.trim()) clearSearchBtn.click();
            updateManualView();
        }

        // ============================================================
        //  COMPARADOR DE PRODUCTOS
        //  El estado vive en app.js para conservar la selección mientras
        //  se filtra o se busca dentro del catálogo.
        // ============================================================
        let compareList = [];
        window.compareList = compareList;
        const MAX_COMPARE = 3;

        // ============================================================
        //  ANIMACIÓN DE ENTRADA (scroll-reveal) para tarjetas
        // ============================================================
        let revealObserver = null;
        function initRevealObserver() {
            if (!('IntersectionObserver' in window)) {
                document.querySelectorAll('.reveal').forEach((element) => element.classList.add('in-view'));
                return;
            }

            if (!revealObserver) {
                revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            }

            document.querySelectorAll('.reveal:not(.in-view)').forEach((element) => revealObserver.observe(element));
        }

        const categoryIcons = {
            'all': { emoji: '🛍️', name: 'Todos los productos' },
            'digestivo': { emoji: '🌿', name: 'Digestivo' },
            'laxantes': { emoji: '🚽', name: 'Laxantes' },
            'inmune': { emoji: '🛡️', name: 'Inmune' },
            'nervioso': { emoji: '🧠', name: 'Nervioso' },
            'metabolismo': { emoji: '🔥', name: 'Metabolismo' },
            'hormonal': { emoji: '🩷', name: 'Hormonal' },
            'piel': { emoji: '✨', name: 'Piel / Ojos' },
            'locomotor': { emoji: '💪', name: 'Locomotor' },
                'nutricional': { emoji: '🍎', name: 'Nutricional' },
            'clinico': { emoji: '❤️', name: 'Clínico' },
            'deportivo': { emoji: '🏋️', name: 'Deportivo' }
        };

        const guideColorGroups = [
            { key: 'purple', emoji: '🟣', name: 'Sistema Nervioso y Hormonal' },
            { key: 'green', emoji: '🟢', name: 'Sistema Digestivo y Hepático' },
            { key: 'orange', emoji: '🟠', name: 'Metabolismo y Glucosa' },
            { key: 'pink', emoji: '🩷', name: 'Salud Masculina y Femenina' },
            { key: 'red', emoji: '🔴', name: 'Salud Cardiovascular y Clínica' },
            { key: 'blue', emoji: '🔵', name: 'Sistema Inmune y Respiratorio' },
            { key: 'yellow', emoji: '🟡', name: 'Sistema Locomotor y Deportivo' },
            { key: 'gray', emoji: '⚪', name: 'Condiciones Complejas' }
        ];

        const categoryDescriptions = {
            'digestivo': "Esta sección es el corazón del bienestar. Incluye todo lo necesario para una digestión óptima: enzimas para descomponer alimentos, probióticos para equilibrar la flora, fibras para regular el tránsito y botánicos para reparar y desinflamar la mucosa gástrica (gastritis, colitis). También abarca el soporte hepático y biliar, crucial para el metabolismo de las grasas.",
            'laxantes': "Esta sección se especializa en productos para el alivio del estreñimiento ocasional. Incluye laxantes estimulantes y fórmulas botánicas que promueven la regularidad intestinal. Su recomendación debe ser cuidadosa y para uso a corto plazo, educando al cliente sobre la importancia de no generar dependencia.",
            'inmune': "Aquí se encuentran los 'soldados' y 'armas' del sistema de defensa. Incluye desde vitaminas y minerales clave (Vitamina D, C, Zinc) hasta potentes botánicos (Equinácea, Ajo) y hongos medicinales que modulan la respuesta inmune. El objetivo es prevenir infecciones, acortar su duración y calmar respuestas autoinmunes.",
            'nervioso': "El centro de control del cuerpo. Esta categoría se enfoca en nutrir y equilibrar el sistema nervioso. Encontrarás nootrópicos para mejorar la memoria y el enfoque, adaptógenos para combatir el estrés, y fórmulas específicas para calmar la ansiedad y promover un sueño profundo y reparador.",
            'metabolismo': "El motor del cuerpo. Estos productos están diseñados para optimizar la forma en que el cuerpo produce y utiliza la energía. Aquí se encuentran las vitaminas del Complejo B, que son las 'chispas' de la producción de energía. También se enfoca en mejorar la sensibilidad a la insulina (clave en prediabetes y SOP), apoyar el control de peso, activar la quema de grasa y potenciar la energía a nivel celular (mitocondrias).",
            'hormonal': "La orquesta química del cuerpo. Esta sección contiene suplementos para equilibrar las hormonas masculinas y femeninas. Aborda desde el soporte para la menopausia y el síndrome premenstrual, hasta la optimización de la testosterona, la libido y la vitalidad en general, usando adaptógenos y fito-hormonas.",
            'piel': "La belleza y protección desde adentro. Aquí se agrupan fórmulas con potentes antioxidantes para combatir el envejecimiento, colágeno para la firmeza, y nutrientes específicos para la hidratación de la piel y la protección de los ojos contra el daño solar y la luz azul.",
            'locomotor': "El chasis y la suspensión del cuerpo. Esta categoría se centra en la salud de huesos, articulaciones, músculos y cartílago. Incluye 'bloques de construcción' como el colágeno y la glucosamina, y potentes antiinflamatorios naturales como la cúrcuma para aliviar el dolor y mejorar la movilidad.",
            'clinico': "Protocolos de alta especialidad. Esta sección agrupa suplementos con un impacto profundo en la fisiología, orientados al soporte cardiovascular (presión, colesterol), hepático (hígado graso) y renal. Su recomendación requiere un conocimiento más avanzado y una comprensión clara de las condiciones del cliente.",
            'nutricional': "Los 'superalimentos' y la base nutricional. A diferencia de otras categorías que tratan condiciones, esta agrupa productos que ofrecen una alta densidad de nutrientes en su forma natural. Son para enriquecer la dieta, aportar energía, vitaminas, minerales y antioxidantes para el bienestar general. Aquí se encuentran la Miel y la Espirulina.",
            'deportivo': "Optimización del rendimiento físico. Productos diseñados para atletas y personas activas. Incluye proteínas para la construcción muscular, creatina para la fuerza, pre-entrenos para la energía y suplementos para acelerar la recuperación, reducir el dolor muscular y prevenir lesiones."
        };

        const categoryOrderPdf = { // Títulos actualizados para SECCIÓN 3
            'metabolismo': '3.1. Bienestar Metabólico y Control de Peso',
            'clinico': '3.2. Salud Cardiovascular, Hepática y Urinaria',
            'digestivo': '3.3. Bienestar Digestivo',
            'laxantes': '3.4. Laxantes y Regularidad Intestinal',
            'locomotor': '3.5. Salud Articular y Ósea',
            'inmune': '3.6. Defensas Naturales y Salud Respiratoria',
            'nervioso': '3.7. Sistema Nervioso y Sueño',
            'hormonal': '3.8. Salud Hormonal',
            'piel': '3.9. Cuidado de la Piel y Ojos',
            'deportivo': '3.10. Suplementos Deportivos',
            'nutricional': '3.11. Apoyo Nutricional General',
        };

        function populateSideMenuFilters() {
            const filterLinks = document.querySelectorAll('.filter-link');
            filterLinks.forEach(link => {
                const filter = link.dataset.filter;
                if (categoryIcons[filter]) {
                    link.innerHTML = `
                        <span class="flex items-center gap-2.5 min-w-0">
                            <span class="w-5 text-center text-sm flex-shrink-0" aria-hidden="true">${categoryIcons[filter].emoji}</span>
                            <span class="truncate">${categoryIcons[filter].name}</span>
                        </span>`;
                }
            });

            const guideList = document.getElementById('sidebarGuideList');
            if (guideList) {
                const dotColorMap = {
                    purple: 'bg-purple-500',
                    green: 'bg-emerald-500',
                    orange: 'bg-orange-500',
                    pink: 'bg-pink-500',
                    red: 'bg-rose-500',
                    blue: 'bg-blue-500',
                    yellow: 'bg-amber-400',
                    gray: 'bg-slate-400'
                };

                guideList.innerHTML = guideColorGroups
                    .map(group => {
                        const groupGuides = padecimientos
                            .filter(pad => pad.color === group.key)
                            .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
                        if (!groupGuides.length) return '';

                        const dotClass = dotColorMap[group.key] || 'bg-emerald-500';

                        return `
                            <details class="sidebar-guide-group" data-guide-color="${group.key}">
                                <summary class="sidebar-guide-summary">
                                    <span class="sidebar-guide-group-name">
                                        <span class="sidebar-guide-dot ${dotClass}" aria-hidden="true"></span>
                                        <span class="truncate">${group.name}</span>
                                    </span>
                                    <svg class="sidebar-apple-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/>
                                    </svg>
                                </summary>
                                <div class="sidebar-guide-group-list">
                                    ${groupGuides.map(pad => `
                                        <a href="#padecimiento-${escapeGuideAttribute(pad.id)}" data-sidebar-guide="${escapeGuideAttribute(pad.id)}" class="sidebar-guide-item">
                                            <span class="text-xs flex-shrink-0" aria-hidden="true">${pad.emoji || '🎯'}</span>
                                            <span class="truncate">${pad.name}</span>
                                        </a>`).join('')}
                                </div>
                            </details>`;
                    })
                    .join('');

                guideList.addEventListener('click', event => {
                    const link = event.target.closest('[data-sidebar-guide]');
                    if (!link) return;
                    event.preventDefault();

                    // Marcar guía activa visualmente
                    guideList.querySelectorAll('a').forEach(a => a.classList.remove('is-active-guide'));
                    link.classList.add('is-active-guide');

                    searchInput.value = '';
                    clearSearchBtn.classList.add('hidden');
                    document.querySelectorAll('#padColorLegend .pad-color-btn').forEach(button => {
                        button.classList.remove('active', 'ring-2', 'ring-offset-1', 'ring-gray-800');
                    });
                    const allGuidesButton = document.querySelector('#padColorLegend .pad-color-btn[data-color-filter="all"]');
                    if (allGuidesButton) allGuidesButton.classList.add('active', 'ring-2', 'ring-offset-1', 'ring-gray-800');
                    filterPadecimientos();
                    scrollToPadecimiento(link.dataset.sidebarGuide);

                    // En móvil, cerrar el sidebar para mostrar el resultado
                    if (!desktopSidebarQuery.matches && document.body.classList.contains('sidebar-mobile-open')) {
                        closeMobileSidebar();
                    }
                });
            }
        }

        function updateCategoryDescription(categoryKey) {
            const displayContainer = document.getElementById('activeCategoryDescription');
            if (!displayContainer) return;

            if (categoryKey === 'all' || !categoryDescriptions[categoryKey]) {
                displayContainer.innerHTML = '';
                displayContainer.style.display = 'none';
            } else {
                const categoryInfo = categoryIcons[categoryKey];
                const description = categoryDescriptions[categoryKey];
                
                displayContainer.innerHTML = `
                    <div class="bg-white rounded-3xl p-6 shadow-sm transition-all duration-300">
                        <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-3">${categoryInfo.emoji} ${categoryInfo.name}</h2>
                        <p class="text-sm text-gray-600 leading-relaxed">${description}</p>
                    </div>
                `;
                displayContainer.style.display = 'block';
            }
        }

        // ================================================================
        //  LÓGICA PARA RENDERIZAR SECCIONES ADICIONALES EN LA WEB
        // ================================================================
        function renderIntroWeb() {
            const container = document.getElementById('introWeb');
            const source = document.getElementById('seccion1_intro');
            if (!container || !source) return;

            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = source.innerHTML;
            contentDiv.querySelector('h1').remove();

            container.innerHTML = `
                <details class="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 open:shadow-lg open:border-girasol-green-300 scroll-mt-24">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-t-2xl">
                        <h2 class="text-2xl md:text-3xl font-black text-girasol-green-900 flex items-center gap-3">
                            <span>⭐</span> Introducción para el Asesor
                        </h2>
                        <span class="group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <div class="p-6 md:p-8 border-t border-gray-200">
                        <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            ${contentDiv.innerHTML}
                        </div>
                    </div>
                </details>
            `;
        }

        function renderArteDeVenderWeb() {
            const container = document.getElementById('arteDeVenderWeb');
            const source = document.getElementById('arte_de_vender_content');
            if (!container || !source) return;
            
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = source.innerHTML;
            contentDiv.querySelector('h2').remove();

            container.innerHTML = `
                <details class="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 open:shadow-lg open:border-girasol-green-300 scroll-mt-24">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-t-2xl">
                        <h2 class="text-2xl md:text-3xl font-black text-girasol-green-900 flex items-center gap-3">
                            <span>💡</span> El Arte de Vender Suplementos
                        </h2>
                        <span class="group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <div class="p-6 md:p-8 border-t border-gray-200">
                        <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            ${contentDiv.innerHTML}
                        </div>
                    </div>
                </details>
            `;
            const table = container.querySelector('table');
            if (table) {
                table.classList.add('w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-600', 'mt-6');
                table.querySelector('thead').classList.add('text-xs', 'text-gray-700', 'uppercase', 'bg-gray-100');
                table.querySelectorAll('th').forEach(th => th.classList.add('px-6', 'py-3', 'border', 'border-gray-200'));
                table.querySelectorAll('td').forEach(td => td.classList.add('px-6', 'py-4', 'border', 'border-gray-200'));
            }
        }

        function renderGuiaLenguajeWeb() {
            const container = document.getElementById('guiaLenguajeWeb');
            const source = document.getElementById('guia_lenguaje_content');
            if (!container || !source) return;

            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = source.innerHTML;
            contentDiv.querySelector('h2').remove();

            container.innerHTML = `
                <details class="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 open:shadow-lg open:border-girasol-green-300 scroll-mt-24">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-t-2xl">
                        <h2 class="text-2xl md:text-3xl font-black text-girasol-green-900 flex items-center gap-3">
                            <span>📜</span> Guía de Lenguaje (COFEPRIS)
                        </h2>
                        <span class="group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <div class="p-6 md:p-8 border-t border-gray-200">
                        <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            ${contentDiv.innerHTML}
                        </div>
                    </div>
                </details>
            `;
            const table = container.querySelector('table');
            if (table) {
                table.classList.add('w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-600', 'mt-6');
                table.querySelector('thead').classList.add('text-xs', 'text-gray-700', 'uppercase', 'bg-gray-100');
                table.querySelectorAll('th').forEach(th => th.classList.add('px-6', 'py-3', 'border', 'border-gray-200'));
                table.querySelectorAll('td').forEach(td => td.classList.add('px-6', 'py-4', 'border', 'border-gray-200'));
            }
        }

        function renderGuiaRapidaWeb() {
            const container = document.getElementById('guiaRapidaWeb');
            const source = document.getElementById('guia_rapida_content');
            if (!container || !source) return;

            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = source.innerHTML;
            contentDiv.querySelector('h2').remove();

            container.innerHTML = `
                <details class="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 open:shadow-lg open:border-girasol-green-300 scroll-mt-24">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-t-2xl">
                        <h2 class="text-2xl md:text-3xl font-black text-girasol-green-900 flex items-center gap-3">
                            <span>🚀</span> Guía de Venta Rápida (Cheat Sheet)
                        </h2>
                        <span class="group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <div class="p-6 md:p-8 border-t border-gray-200">
                        <div class="space-y-12 max-w-5xl mx-auto text-gray-700 leading-relaxed">
                            ${contentDiv.innerHTML}
                        </div>
                    </div>
                </details>
            `;
            container.querySelectorAll('table').forEach(table => {
                table.classList.add('w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-600');
                table.querySelector('thead').classList.add('text-xs', 'text-gray-700', 'uppercase', 'bg-gray-100');
                table.querySelectorAll('th').forEach(th => th.classList.add('px-6', 'py-3', 'border', 'border-gray-200'));
                table.querySelectorAll('td').forEach(td => td.classList.add('px-6', 'py-4', 'border', 'border-gray-200'));
            });
        }

        function renderFaqWeb() {
            const container = document.getElementById('faqWeb');
            const source = document.getElementById('seccion5_faq');
            if (!container || !source) return;

            const sourceContent = source.cloneNode(true);
            const items = Array.from(sourceContent.querySelectorAll('div > div'));

            let innerHtml = `<div class="max-w-3xl mx-auto space-y-4">`;

            items.forEach(item => {
                const question = item.querySelector('h3').textContent.replace(/^\d+\.\d+\.\s*Sobre (el|la)\s\w+:\s*/, '').replace('¿', '').replace('?', '');
                const answer = item.querySelector('p').innerHTML;
                innerHtml += `
                    <details class="group bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-300 hover:border-natura-200">
                        <summary class="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                            ${question}
                            <span class="group-open:rotate-180 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <div class="text-gray-600 mt-3 text-sm leading-relaxed">${answer}</div>
                    </details>
                `;
            });

            innerHtml += `</div>`;
            
            container.innerHTML = `
                <details class="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 open:shadow-lg open:border-girasol-green-300 scroll-mt-24">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-t-2xl">
                        <h2 class="text-2xl md:text-3xl font-black text-girasol-green-900 flex items-center gap-3">
                            <span>❓</span> Preguntas Frecuentes de Clientes
                        </h2>
                        <span class="group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <div class="p-6 md:p-8 border-t border-gray-200">
                        <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-center mb-8">${sourceContent.querySelector('p.italic').textContent}</p>
                        ${innerHtml}
                    </div>
                </details>
            `;
        }

        function renderAnexosPdf() {
            const anexoContainer = document.createElement('section');
            anexoContainer.id = 'seccion6_anexos';
            anexoContainer.className = 'hidden print:block';
            anexoContainer.style.pageBreakBefore = 'always';

            // Clone the content to avoid removing it from the web view
            const interactionsContent = document.getElementById('interactions_guide_web').cloneNode(true);
            const glosarioSource = document.querySelector('#glosarioContainer .hidden');
            const glosarioContent = glosarioSource ? glosarioSource.cloneNode(true) : document.createElement('div');

            anexoContainer.innerHTML = `
                <h1 class="text-4xl font-black text-girasol-green-900 mb-8 border-b-4 border-girasol-yellow-500 pb-4">SECCIÓN 6: ANEXOS</h1>
                
                <div class="mb-12">
                    ${interactionsContent.innerHTML}
                </div>

                <div class="mb-12" style="page-break-before: always;">
                    ${glosarioContent.innerHTML}
                </div>

                <div class="mb-12">
                    <h2 class="text-2xl font-bold text-girasol-green-800 mb-3">Advertencias Generales (COFEPRIS)</h2>
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg text-sm">
                        <p class="font-bold">⚠️ AVISO IMPORTANTE</p>
                        <div class="mt-2 space-y-1">
                            <p>ESTE PRODUCTO NO ES UN MEDICAMENTO. SU CONSUMO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO CONSUME.</p>
                            <p>CONSULTE A SU MÉDICO ANTES DE INICIAR CUALQUIER SUPLEMENTACIÓN, ESPECIALMENTE SI ESTÁ EMBARAZADA, EN LACTANCIA, O BAJO TRATAMIENTO MÉDICO.</p>
                            <p>ESTOS PRODUCTOS NO ESTÁN DESTINADOS A DIAGNOSTICAR, TRATAR, CURAR O PREVENIR NINGUNA ENFERMEDAD.</p>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(anexoContainer);
        }

        function scrollToPadecimiento(padecimientoId) {
            selectManualTab('guias');
            const guide = document.getElementById('padecimientosCatalog');
            if (guide) guide.open = true;

            const element = document.getElementById(`padecimiento-${padecimientoId}`);
            if (element) {
                // Abrir el grupo de clasificación padre si existe
                const classificationGroup = element.closest('.pad-classification-group');
                if (classificationGroup) classificationGroup.open = true;

                // Abrir si es acordeón
                if (element.tagName === 'DETAILS') {
                    element.open = true;
                }

                // Smooth scroll con offset para que no quede pegado al top
                const yOffset = -(document.getElementById('mainCentralHeader')?.offsetHeight || 0) - 20;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });

                // Animación de resaltado suave (glow pulse)
                element.classList.add('scroll-highlight');
                setTimeout(() => {
                    element.classList.remove('scroll-highlight');
                }, 2200);
            }
        }

        // ================================================================
        //  LÓGICA PARA RENDERIZAR LA GUÍA DE PADECIMIENTOS
        // ================================================================
        function getGuideServing(item, product) {
            const serving = String(item?.serving || '').trim();
            return serving || String(product?.serving || 'Porción no especificada').trim();
        }

        function getGuideUsage(item, product) {
            const guideUsage = String(item?.usage || '').trim();
            const legacyTiming = String(item?.timing || '').trim();
            const productTiming = String(product?.timing || '').trim();
            return guideUsage || legacyTiming || productTiming || 'Consultar la ficha técnica.';
        }

        function escapeGuideAttribute(value) {
            return String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        function renderGuideRationaleIcon(item, product) {
            const rationale = escapeGuideAttribute(item?.rationale || 'Ver motivo de la recomendación.');
            const productName = escapeGuideAttribute(product?.name || 'este producto');

            return `
                <span class="guide-rationale-icon tooltip" title="${rationale}" tabindex="0" aria-label="Motivo de recomendación para ${productName}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 18h4.5M10 21h4M12 3a6 6 0 00-3.9 10.56c.9.77 1.4 1.66 1.55 2.44h4.7c.15-.78.65-1.67 1.55-2.44A6 6 0 0012 3z" />
                        <path stroke-linecap="round" d="M12 1v1M4.93 4.93l.7.7M2 12h1M19 12h1M18.37 5.63l.7-.7" />
                    </svg>
                </span>`;
        }

        function renderGuideProductImage(product, sizeClass = 'w-14 h-14') {
            const productName = escapeGuideAttribute(product?.name || 'Producto');
            const imageUrl = escapeGuideAttribute(product?.image || '');
            return `<span class="guide-product-image ${sizeClass}" aria-hidden="true"><img src="${imageUrl}" alt="" onerror="this.onerror=null; this.src='https://placehold.co/112x112/e2e8f0/475569?text=IMG';" title="${productName}"></span>`;
        }

        function getAdvisorQuestions(pad) {
            const customQuestions = Array.isArray(pad.advisorQuestions)
                ? pad.advisorQuestions.map(question => String(question || '').trim()).filter(Boolean)
                : [];
            const characteristicSymptoms = (pad.symptoms || []).slice(0, 3);
            const generatedQuestions = [
                `¿Cuál de las molestias asociadas con ${pad.name} es la que más le afecta y en qué momento suele aparecer?`,
                ...characteristicSymptoms.map(symptom => `En cuanto a ${String(symptom).replace(/[.!?]+$/g, '').toLowerCase()}, ¿con qué frecuencia ocurre y qué tan intensa es?`),
                '¿Qué situaciones, alimentos, horarios o actividades hacen que estas molestias aparezcan, empeoren o mejoren?'
            ];

            return [...customQuestions, ...generatedQuestions]
                .filter((question, index, questions) => questions.indexOf(question) === index)
                .slice(0, 5);
        }

        function renderPadecimientosWeb() {
            const container = document.getElementById('padecimientosGuideWeb');
            if (!container) return;

            let html = `
                <details id="padecimientosCatalog" open class="group/guide bg-white border border-gray-200 rounded-3xl shadow-sm transition-all duration-300 open:shadow-lg open:border-girasol-green-300 overflow-hidden">
                    <summary class="p-8 md:p-10 cursor-pointer list-none transition-colors hover:bg-blue-50/40">
                        <span class="block text-center">
                        <span class="section-eyebrow">Guía de Protocolos</span>
                            <span class="section-title">
                                <span aria-hidden="true">🎯</span> Guía de Apoyo Nutricional
                            </span>
                            <span class="block text-gray-600 mt-4 max-w-3xl mx-auto">Utiliza el buscador principal para filtrar por padecimiento, síntoma o suplemento. Haz clic en un padecimiento para desplegar la información y en un suplemento para ver su ficha técnica.</span>
                            <span class="section-toggle">
                                <span class="group-open/guide:hidden">Mostrar padecimientos</span>
                                <span class="hidden group-open/guide:inline">Ocultar padecimientos</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-open/guide:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                    </summary>
                    <div class="p-4 sm:p-6 md:p-10 border-t-2 border-gray-200">
                    <div class="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                        <strong class="block mb-1">Importante: son opciones, no seis productos para tomar juntos.</strong>
                        Los productos principales y adicionales permiten elegir una recomendación individualizada. No deben sumarse automáticamente; revisa las notas de cada producto y evita duplicar ingredientes o mecanismos.
                    </div>
                    <p id="padColorEmptyMsg" class="hidden text-center text-gray-500 italic mb-6">No hay padecimientos registrados para este color.</p>
                    <div class="space-y-4">
            `;

            // Agrupar padecimientos por clasificación (color)
            guideColorGroups.forEach(group => {
                const groupPads = padecimientos.filter(pad => pad.color === group.key);
                if (groupPads.length === 0) return;

                // Colores de fondo/borde por grupo
                const groupColors = {
                    purple: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-800', hoverBg: 'hover:bg-purple-100/60' },
                    green: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-800', hoverBg: 'hover:bg-emerald-100/60' },
                    orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800', hoverBg: 'hover:bg-orange-100/60' },
                    pink: { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-800', hoverBg: 'hover:bg-pink-100/60' },
                    red: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800', hoverBg: 'hover:bg-red-100/60' },
                    blue: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-800', hoverBg: 'hover:bg-blue-100/60' },
                    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-800', hoverBg: 'hover:bg-yellow-100/60' },
                    gray: { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-800', hoverBg: 'hover:bg-gray-100/60' }
                };
                const gc = groupColors[group.key] || groupColors.gray;

                html += `
                    <details class="pad-classification-group rounded-2xl ${gc.bg} overflow-hidden transition-all duration-300 open:shadow-md shadow-sm" data-classification="${group.key}">
                        <summary class="p-5 md:p-6 cursor-pointer list-none flex items-center justify-between ${gc.hoverBg} transition-colors">
                            <span class="flex items-center gap-3">
                                <span class="text-2xl" aria-hidden="true">${group.emoji}</span>
                                <span>
                                    <span class="block text-lg md:text-xl font-black ${gc.text}">${group.name}</span>
                                    <span class="block text-xs text-gray-500 font-medium mt-0.5">${groupPads.length} padecimiento${groupPads.length !== 1 ? 's' : ''}</span>
                                </span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180" style="transition: transform 0.3s;" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </summary>
                        <div class="p-3 md:p-5 space-y-4">
                `;

                groupPads.forEach(pad => {
                const colorClass = `border-${pad.color}-500`;
                const guideGroup = group;
                const titleLengthClass = pad.name.length > 52
                    ? ' padecimiento-title-very-long'
                    : (pad.name.length > 32 ? ' padecimiento-title-long' : '');
                const editorialPreview = pad.comboPrincipal.map(item => {
                    const product = productos.find(prod => prod.id === item.id);
                    return product ? `
                        <button type="button" class="padecimiento-editorial-preview-item" data-guide-preview-product="${product.id}" aria-label="Abrir ficha de ${escapeGuideAttribute(product.name)}">
                            ${renderGuideProductImage(product, 'w-20 h-20')}
                            <span>${product.name}</span>
                        </button>` : '';
                }).join('');
                
                const searchTerms = `${pad.name} ${pad.description} ${pad.symptoms.join(' ')} ${pad.comboPrincipal.map(item => productos.find(p => p.id === item.id)?.name || '').join(' ')} ${pad.comboSecundario.map(item => productos.find(p => p.id === item.id)?.name || '').join(' ')}`.toLowerCase();

                html += `
                    <details id="padecimiento-${pad.id}" data-color="${pad.color}" data-search-terms="${escapeGuideAttribute(searchTerms)}" class="group padecimiento-card padecimiento-editorial bg-white rounded-2xl shadow-sm transition-all duration-300 open:shadow-lg scroll-mt-24">
                        <summary class="padecimiento-summary p-6 cursor-pointer list-none flex justify-between items-center">
                            <span class="padecimiento-editorial-kicker"><span aria-hidden="true">${guideGroup.emoji}</span> ${guideGroup.name}</span>
                            <h3 class="padecimiento-title${titleLengthClass} text-2xl font-extrabold text-gray-800 flex items-center gap-3">${pad.emoji} ${pad.name}</h3>
                            <span class="padecimiento-editorial-preview preview-count-${Math.min(pad.comboPrincipal.length, 4)}">
                                <span class="padecimiento-editorial-preview-title">Paquete principal</span>
                                <span class="padecimiento-editorial-preview-products">${editorialPreview}</span>
                            </span>
                            <span class="padecimiento-toggle group-open:rotate-180 transition-transform duration-300">
                                <span class="padecimiento-toggle-closed">Explorar guía</span><span class="padecimiento-toggle-open">Ocultar guía</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <div class="padecimiento-body p-6 border-t border-gray-200">
                            <div class="padecimiento-overview">
                                <span class="padecimiento-editorial-eyebrow">Comprender el padecimiento</span><h4>Qué está ocurriendo</h4>
                                <p class="padecimiento-description text-sm text-gray-500 italic mb-4" data-original-text="${escapeGuideAttribute(pad.description)}">${pad.description}</p>
                            </div>
                            
                            <div class="padecimiento-layout grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="padecimiento-assessment">
                                    <div class="padecimiento-symptoms">
                                        <span class="padecimiento-editorial-eyebrow">Señales de conversación</span>
                                        <h4 class="padecimiento-symptoms-title font-bold text-gray-700 mb-2">${pad.symptomsTitle || 'Síntomas a Identificar:'}</h4>
                                     <ul class="padecimiento-symptoms-list list-disc list-inside text-sm text-gray-600 space-y-1.5 pl-2">
                                         ${pad.symptoms.map((s, index) => `<li><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${s}</li>`).join('')}
                                     </ul>
                                    </div>`;

                // Preguntas del asesor
                const advisorQuestions = getAdvisorQuestions(pad);
                html += `
                                    <div class="padecimiento-advisor-questions">
                                        <span class="padecimiento-editorial-eyebrow">Para investigar</span>
                                        <h4 class="padecimiento-advisor-questions-title">Preguntas del Asesor</h4>
                                        <ol class="padecimiento-advisor-questions-list" role="list">
                                            ${advisorQuestions.map((q, index) => `<li><span class="advisor-question-number" aria-hidden="true">${index + 1}</span><span class="advisor-question-text">${q}</span></li>`).join('')}
                                        </ol>
                                    </div>`;
                html += `
                                </div>`;

                // Combo Principal
                html += `
                                <div class="padecimiento-combos">
                                    <div class="padecimiento-combo-principal">
                                        <span class="padecimiento-editorial-eyebrow">Lo esencial</span>
                                        <h4>Combo Principal</h4>
                                        <ul class="padecimiento-editorial-product-list">`;
                pad.comboPrincipal.forEach(item => {
                    const product = productos.find(p => p.id === item.id);
                    if (!product) return;
                    const serving = getGuideServing(item, product);
                    const usage = getGuideUsage(item, product);
                    html += `
                                            <li>
                                                <button type="button" class="padecimiento-editorial-product-card" data-guide-preview-product="${product.id}" aria-label="Abrir ficha de ${escapeGuideAttribute(product.name)}">
                                                    <span class="padecimiento-editorial-product-left">
                                                        ${renderGuideProductImage(product)}
                                                        <span class="padecimiento-editorial-product-info">
                                                            <span class="padecimiento-editorial-product-name">${product.name}</span>
                                                            <span class="padecimiento-editorial-product-meta"><strong>Porción:</strong> ${serving}</span>
                                                            <span class="padecimiento-editorial-product-meta"><strong>Uso:</strong> ${usage}</span>
                                                            ${item.timing ? `<span class="padecimiento-editorial-product-meta"><strong>Momento:</strong> ${item.timing}</span>` : ''}
                                                        </span>
                                                    </span>
                                                    ${renderGuideRationaleIcon(item, product)}
                                                </button>
                                            </li>`;
                });
                html += `
                                        </ul>
                                    </div>`;

                // Combo Secundario
                html += `
                                    <div class="padecimiento-combo-secundario">
                                        <span class="padecimiento-editorial-eyebrow">Potenciadores</span>
                                        <h4>Apoyos Secundarios</h4>
                                        <ul class="padecimiento-editorial-product-list secondary">`;
                pad.comboSecundario.forEach(item => {
                    const product = productos.find(p => p.id === item.id);
                    if (!product) return;
                    const serving = getGuideServing(item, product);
                    const usage = getGuideUsage(item, product);
                    html += `
                                            <li>
                                                <button type="button" class="padecimiento-editorial-product-card" data-guide-preview-product="${product.id}" aria-label="Abrir ficha de ${escapeGuideAttribute(product.name)}">
                                                    <span class="padecimiento-editorial-product-left">
                                                        ${renderGuideProductImage(product)}
                                                        <span class="padecimiento-editorial-product-info">
                                                            <span class="padecimiento-editorial-product-name">${product.name}</span>
                                                            <span class="padecimiento-editorial-product-meta"><strong>Porción:</strong> ${serving}</span>
                                                            <span class="padecimiento-editorial-product-meta"><strong>Uso:</strong> ${usage}</span>
                                                            ${item.timing ? `<span class="padecimiento-editorial-product-meta"><strong>Momento:</strong> ${item.timing}</span>` : ''}
                                                        </span>
                                                    </span>
                                                    ${renderGuideRationaleIcon(item, product)}
                                                </button>
                                            </li>`;
                });
                html += `
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                `;
                });

                // Cerrar el grupo de clasificación
                html += `
                        </div>
                    </details>
                `;
            });

            html += `</div></div></details>`;
            container.innerHTML = html;

            container.addEventListener('click', event => {
                const previewProduct = event.target.closest('[data-guide-preview-product]');
                if (!previewProduct) return;
                event.preventDefault();
                event.stopPropagation();
                openModal(Number(previewProduct.dataset.guidePreviewProduct));
            });

            // Activar filtrado por color una vez que el HTML ya está en el DOM
            setupPadecimientosColorFilter();
        }

        // Nueva función para filtrar padecimientos por texto y color
        function filterPadecimientos() {
            const searchTerm = normalizeGuideSearch(document.getElementById('searchInput').value);
            const activeColorButton = document.querySelector('#padColorLegend .pad-color-btn.active');
            const activeColor = searchTerm ? 'all' : (activeColorButton ? activeColorButton.dataset.colorFilter : 'all');
            const relatedGuideIds = new Set(searchTerm ? padecimientos.filter(pad =>
                [...pad.comboPrincipal, ...pad.comboSecundario].some(product => matchingSearchProductIds.has(product.id))
            ).map(pad => `padecimiento-${pad.id}`) : []);

            // Limpiar resaltados anteriores
            const allDescriptions = document.querySelectorAll('.padecimiento-description');
            allDescriptions.forEach(desc => {
                desc.innerHTML = desc.dataset.originalText;
            });

            const items = document.querySelectorAll('#padecimientosGuideWeb details[data-color]');
            let visibleCount = 0;

            items.forEach(item => {
                const itemSearchTerms = normalizeGuideSearch(item.dataset.searchTerms);
                const itemColor = item.dataset.color;

                const matchesSearch = searchTerm === '' || itemSearchTerms.includes(searchTerm) || relatedGuideIds.has(item.id);
                const matchesColor = activeColor === 'all' || itemColor === activeColor;

                if (matchesSearch && matchesColor) {
                    item.style.display = '';
                    visibleCount++;
                    // Si hay un término de búsqueda activo, abre el acordeón.
                    if (searchTerm !== '') {
                        item.setAttribute('open', '');
                        // Resaltar el término en la descripción
                        const descriptionP = item.querySelector('.padecimiento-description');
                        if (descriptionP) {
                            const originalText = descriptionP.dataset.originalText;
                            const regex = new RegExp(searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
                            const highlightedText = originalText.replace(regex, '<mark>$&</mark>');
                            descriptionP.innerHTML = highlightedText;
                        }
                    }
                } else {
                    item.style.display = 'none';
                    item.removeAttribute('open'); // Cierra los que se ocultan
                }
            });

            // Si se borra la búsqueda, cierra todos los acordeones.
            if (searchTerm === '') {
                items.forEach(item => item.removeAttribute('open'));
            }

            // Actualizar visibilidad de grupos de clasificación
            document.querySelectorAll('.pad-classification-group').forEach(group => {
                const childPads = group.querySelectorAll('details[data-color]');
                const hasVisible = Array.from(childPads).some(p => p.style.display !== 'none');
                group.style.display = hasVisible ? '' : 'none';
                // Si hay búsqueda activa, abrir los grupos con coincidencias
                if (searchTerm !== '' && hasVisible) {
                    group.open = true;
                } else if (searchTerm === '') {
                    group.removeAttribute('open');
                }
                // Si hay filtro de color activo, abrir ese grupo
                if (activeColor !== 'all' && group.dataset.classification === activeColor) {
                    group.open = true;
                }
            });

            const emptyMsg = document.getElementById('padColorEmptyMsg');
            if (emptyMsg) emptyMsg.classList.toggle('hidden', visibleCount > 0);
        }

        function normalizeGuideSearch(value) {
            return String(value || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        }

        function goToMatchingPadecimiento(searchValue, forceFirstMatch = false) {
            const term = normalizeGuideSearch(searchValue);
            if (term.length < 3) return false;

            const matches = padecimientos.filter(pad => {
                const searchable = normalizeGuideSearch(`${pad.name} ${pad.description} ${(pad.symptoms || []).join(' ')}`);
                const element = document.getElementById(`padecimiento-${pad.id}`);
                return searchable.includes(term) && element && element.style.display !== 'none';
            });

            const exactNameMatch = matches.find(pad => normalizeGuideSearch(pad.name) === term);
            const startsWithNameMatch = matches.find(pad => normalizeGuideSearch(pad.name).startsWith(term));
            const destination = exactNameMatch || (matches.length === 1 ? matches[0] : (forceFirstMatch ? startsWithNameMatch || matches[0] : null));
            if (!destination) return false;

            setProductsPanelOpen(false);
            scrollToPadecimiento(destination.id);
            return true;
        }

        // Filtra las tarjetas de padecimientos según el color seleccionado en la leyenda
        function setupPadecimientosColorFilter() {
            const buttons = document.querySelectorAll('#padColorLegend .pad-color-btn');
            const items = document.querySelectorAll('#padecimientosGuideWeb details[data-color]');
            const emptyMsg = document.getElementById('padColorEmptyMsg');
            if (!buttons.length) return;

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const color = btn.dataset.colorFilter;

                    // Estado visual del botón activo
                    buttons.forEach(b => b.classList.remove('active', 'ring-2', 'ring-offset-1', 'ring-gray-800'));
                    btn.classList.add('active', 'ring-2', 'ring-offset-1', 'ring-gray-800');
                    buttons.forEach(button => button.setAttribute('aria-pressed', String(button === btn)));
                    document.getElementById('padecimientosCatalog').open = true;

                    filterPadecimientos(); // Llama a la función de filtrado combinada
                });
            });
        }
        
        // (Se eliminó una función scrollToPadecimiento duplicada/vacía que
        // sobrescribía a la funcional definida arriba y rompía los enlaces
        // de "Guías de Padecimiento Relacionadas" en la ficha del producto.)

        function renderProductChip(productId) {
            const p = productos.find(prod => prod.id === productId);
            if (!p) return '';
            return `
                <a href="#" onclick="openModal(${p.id}); return false;" class="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all border border-gray-200">
                    <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center p-1">
                        <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='https://placehold.co/100x100/e2e8f0/475569?text=IMG'">
                    </div>
                    <div>
                        <p class="font-bold text-natura-800 text-sm leading-tight">${p.name}</p>
                        <p class="text-xs text-gray-500 line-clamp-1">${p.shortDesc}</p>
                    </div>
                </a>`;
        }

        // ================================================================
        //  LÓGICA PARA RENDERIZAR LA GUÍA DE PADECIMIENTOS (PDF)
        // ================================================================
        function renderPadecimientosPdf() {
            const container = document.getElementById('padecimientosGuidePdf');
            if (!container) return;

            let html = `
                <h1 class="text-4xl font-black text-girasol-green-900 mb-8 border-b-4 border-girasol-yellow-500 pb-4">SECCIÓN 4: GUÍA DE APOYO POR PADECIMIENTO</h1>
                <div class="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                    <strong>Importante:</strong> los productos de cada guía son opciones para individualizar la recomendación; no se indica tomarlos todos juntos. Evitar duplicar ingredientes o mecanismos.
                </div>`;

            padecimientos.forEach(pad => {
                html += `
                    <section class="padecimiento-pdf-item">
                         <h2 class="padecimiento-pdf-title">${pad.emoji} ${pad.name}</h2>
                         <p class="padecimiento-pdf-desc">${pad.description}</p>
                        <table class="w-full border-collapse mb-4">
                            <thead>
                                <tr class="bg-gray-50">
                                     <th class="border p-2 text-left font-semibold text-gray-700">Suplemento</th>
                                     <th class="border p-2 text-left font-semibold text-gray-700">Porción Sugerida</th>
                                     <th class="border p-2 text-left font-semibold text-gray-700">Modo de Uso</th>
                                 </tr>
                            </thead>
                            <tbody>
                                <tr><td colspan="3" class="pt-2 font-bold text-girasol-green-800">Paquete Principal</td></tr>
                                 ${pad.comboPrincipal.map(item => {
                                     const p = productos.find(prod => prod.id === item.id);
                                     return p ? `<tr><td class="border p-2"><div class="padecimiento-pdf-product">${renderGuideProductImage(p, 'w-10 h-10')}<span>${p.name}</span></div></td><td class="border p-2">${getGuideServing(item, p)}</td><td class="border p-2">${getGuideUsage(item, p)}</td></tr>` : '';
                                 }).join('')}
                                 ${pad.comboSecundario.length > 0 ? `
                                <tr><td colspan="3" class="pt-2 font-bold text-girasol-green-800">Apoyo Adicional</td></tr>
                                 ${pad.comboSecundario.map(item => {
                                     const p = productos.find(prod => prod.id === item.id);
                                     return p ? `<tr><td class="border p-2"><div class="padecimiento-pdf-product">${renderGuideProductImage(p, 'w-10 h-10')}<span>${p.name}</span></div></td><td class="border p-2">${getGuideServing(item, p)}</td><td class="border p-2">${getGuideUsage(item, p)}</td></tr>` : '';
                                 }).join('')}` : ''}
                            </tbody>
                        </table>
                    </section>
                `;
            });

            container.innerHTML = html;
        }
        // ================================================================
        //  LÓGICA PARA RENDERIZAR EL GLOSARIO
        // ================================================================
        function renderGlosario() {
            const glosarioData = [
                { term: 'Adaptógeno', definition: 'Sustancia de origen vegetal que ayuda al cuerpo a adaptarse al estrés físico y mental, ejerciendo un efecto normalizador. Ejemplos: Ashwagandha, Maca, Rhodiola.' },
                { term: 'Antioxidante', definition: 'Sustancia que neutraliza los radicales libres, protegiendo a las células del daño oxidativo. Ejemplos: Vitamina C, Ubiquinol, Astaxantina.' },
                { term: 'BCAA (Aminoácidos de Cadena Ramificada)', definition: 'Leucina, isoleucina y valina. Son tres aminoácidos esenciales cruciales para la síntesis de proteínas, la recuperación muscular y la reducción de la fatiga durante el ejercicio.' },
                { term: 'Biodisponibilidad', definition: 'Porcentaje de un nutriente o suplemento que el cuerpo puede absorber y utilizar. Es un factor clave para la efectividad.' },
                { term: 'Carvacrol', definition: 'El principal compuesto activo del Aceite de Orégano, conocido por sus potentes propiedades antimicrobianas y antioxidantes.' },
                { term: 'Curcuminoides', definition: 'Compuestos activos de la Cúrcuma, responsables de sus potentes efectos antiinflamatorios. La piperina se añade para aumentar su absorción.' },
                { term: 'DHT (Dihidrotestosterona)', definition: 'Andrógeno potente derivado de la testosterona. Es el principal responsable de la alopecia androgénica (calvicie de patrón masculino) al miniaturizar el folículo piloso.' },
                { term: 'Fitoestrógenos', definition: 'Compuestos de origen vegetal con una estructura similar al estrógeno humano. Pueden modular la actividad estrogénica, ayudando en síntomas de menopausia o desbalances. Ejemplo: Isoflavonas de soya.' },
                { term: 'Fitonutrientes', definition: 'Compuestos naturales presentes en las plantas que contribuyen al bienestar general.' },
                { term: 'Glutatión', definition: 'Considerado el "antioxidante maestro" del cuerpo. Es crucial para la desintoxicación del hígado y la protección celular contra el estrés oxidativo. El NAC es su precursor directo.' },
                { term: 'Hidrolizado (Proteína)', definition: 'Proteína que ha sido "predigerida" enzimáticamente en péptidos más pequeños. Esto permite una absorción casi instantánea, ideal para la recuperación post-entreno.' },
                { term: 'L-Teanina', definition: 'Aminoácido que se encuentra en el té verde. Promueve un estado de "alerta relajada" al aumentar las ondas cerebrales alfa, reduciendo el estrés sin causar somnolencia.' },
                { term: 'Lipotrópico', definition: 'Compuesto que ayuda a prevenir la acumulación de grasa en el hígado y promueve su metabolismo. La Colina es el más importante.' },
                { term: 'Macronutrientes', definition: 'Nutrientes que el cuerpo necesita en grandes cantidades: proteínas, carbohidratos y grasas.' },
                { term: 'Micronutrientes', definition: 'Nutrientes que el cuerpo necesita en pequeñas cantidades: vitaminas y minerales.' },
                { term: 'NAD+ (Nicotinamida adenina dinucleótido)', definition: 'Coenzima esencial para el metabolismo energético y la reparación del ADN. Sus niveles disminuyen con la edad, y precursores como el NMN buscan restaurarlos.' },
                { term: 'Nootrópico', definition: 'Compuesto que mejora la función cognitiva, como la memoria, el enfoque y la motivación. Ejemplos: Melena de León, L-Teanina, Treonato de Magnesio.' },
                { term: 'Piperina', definition: 'El compuesto activo de la pimienta negra. Se añade a los suplementos (especialmente a la cúrcuma) para aumentar drásticamente la biodisponibilidad de otros compuestos.' },
                { term: 'Prebióticos', definition: 'Sustancias no digeribles (fibra) que sirven de alimento para los probióticos, promoviendo su crecimiento. Ejemplo: Inulina de agave.' },
                { term: 'Probióticos', definition: 'Microorganismos vivos que, administrados en cantidades adecuadas, confieren un beneficio a la salud del huésped, principalmente equilibrando la flora intestinal.' },
                { term: 'Quelación', definition: 'Proceso de unir una molécula de mineral (ej. Magnesio) a un aminoácido (ej. Glicina). Esto mejora drásticamente su absorción y biodisponibilidad.' },
                { term: 'Sinergia', definition: 'El efecto combinado de dos o más suplementos que es mayor que la suma de sus efectos individuales. Ejemplo: Vitamina D3 + K2 + Magnesio.' },
                { term: 'Suplemento alimenticio', definition: 'Producto que complementa la ingesta de nutrientes en la dieta diaria.' },
                { term: 'Termogénico', definition: 'Sustancia que aumenta la producción de calor en el cuerpo (termogénesis), lo que a su vez incrementa el gasto de energía (calorías). Ejemplo: Cafeína, Pimienta de Cayena.' },
                { term: 'UC-II®', definition: 'Forma patentada de colágeno tipo II no desnaturalizado. Funciona "reeducando" al sistema inmune para que no ataque el cartílago, siendo clave en artritis reumatoide.' },
                { term: 'Withanólidos', definition: 'Los compuestos activos de la Ashwagandha, responsables de sus efectos adaptogénicos, reductores del estrés y moduladores del cortisol.' }
            ].sort((a, b) => a.term.localeCompare(b.term)); // Ordenar alfabéticamente

            const container = document.getElementById('glosarioContainer'); // Para la web
            if (!container) return;

            let html = `
                <h3 class="text-2xl font-black text-gray-800 bg-gray-100 p-3 rounded-xl border-l-8 border-girasol-yellow-500 mt-12 scroll-mt-24">Glosario de Términos y Activos Clave</h3>
                <p class="text-sm text-gray-600 my-6">Entender estos conceptos es fundamental para una recomendación precisa y profesional.</p>
                
                <!-- Versión para Web -->
                <div class="space-y-4 no-print">
                    ${glosarioData.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <h5 class="font-bold text-natura-800">${item.term}</h5>
                            <p class="text-sm text-gray-600 mt-1">${item.definition}</p>
                        </div>
                    `).join('')}
                </div>

                <!-- Versión para PDF -->
                <div class="hidden">
                    <h2 class="text-2xl font-bold text-girasol-green-800 mb-3">Glosario de Términos</h2>
                    <p class="text-sm text-gray-600 my-4">Entender estos conceptos es fundamental para una recomendación precisa y profesional.</p>

                    <table id="glosarioPdfTable" class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 p-2 text-left font-bold w-1/4">Término</th>
                                <th class="border border-gray-300 p-2 text-left font-bold w-3/4">Definición</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${glosarioData.map(item => `
                                <tr>
                                    <td class="border border-gray-300 p-2 font-semibold align-top">${item.term}</td>
                                    <td class="border border-gray-300 p-2 align-top">${item.definition}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            container.innerHTML = html;

            // Inyectar solo la tabla en la sección de Anexos del PDF
            const pdfGlosarioContainer = document.getElementById('glosario_pdf_container');
            if(pdfGlosarioContainer) {
                pdfGlosarioContainer.innerHTML = container.querySelector('.hidden').innerHTML;
            }
        }

        // ================================================================
        //  LÓGICA DE RENDERIZADO (la misma que antes, pero adaptada al DOM)
        // ================================================================

        const grid = document.getElementById('productGrid');
        const searchInput = document.getElementById('searchInput');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const resultCount = document.getElementById('resultCount');
        const modal = document.getElementById('productModal');
        const modalSheet = modal.querySelector('.product-sheet');
        let productModalTrigger = null;
        const productsCatalog = document.getElementById('productsCatalog');
        const productsCatalogSummary = document.getElementById('productsCatalogSummary');
        const manualSidebar = document.getElementById('manualSidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebarBackdrop = document.getElementById('sidebarBackdrop');
        const desktopSidebarQuery = window.matchMedia('(min-width: 1024px)');
        const sidebarPrimarySections = [...document.querySelectorAll('details[name="sidebar-primary-navigation"]')];

        function readSidebarPreference() {
            try {
                return window.localStorage.getItem('manualSidebarCollapsed') === 'true';
            } catch (error) {
                return false;
            }
        }

        function saveSidebarPreference(isCollapsed) {
            try {
                window.localStorage.setItem('manualSidebarCollapsed', String(isCollapsed));
            } catch (error) {
                // El menú sigue funcionando aunque el navegador bloquee localStorage.
            }
        }

        function updateSidebarControls() {
            if (!sidebarToggle) return;
            const isDesktop = desktopSidebarQuery.matches;
            const isOpen = isDesktop
                ? !document.body.classList.contains('sidebar-collapsed')
                : document.body.classList.contains('sidebar-mobile-open');

            sidebarToggle.setAttribute('aria-expanded', String(isOpen));
            sidebarToggle.title = isOpen ? 'Ocultar menú' : 'Mostrar menú';
            sidebarToggle.classList.toggle('is-open', isOpen);
        }

        function closeMobileSidebar() {
            document.body.classList.remove('sidebar-mobile-open');
            updateSidebarControls();
        }

        function toggleSidebar() {
            if (desktopSidebarQuery.matches) {
                const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
                saveSidebarPreference(isCollapsed);
            } else {
                document.body.classList.toggle('sidebar-mobile-open');
            }
            updateSidebarControls();
        }

        if (manualSidebar && sidebarToggle && sidebarBackdrop) {
            if (readSidebarPreference()) document.body.classList.add('sidebar-collapsed');
            sidebarPrimarySections.forEach(section => {
                section.addEventListener('toggle', () => {
                    if (!section.open) return;
                    sidebarPrimarySections.forEach(otherSection => {
                        if (otherSection !== section) otherSection.open = false;
                    });
                });
            });
            sidebarToggle.addEventListener('click', toggleSidebar);
            sidebarBackdrop.addEventListener('click', closeMobileSidebar);
            manualSidebar.addEventListener('click', event => {
                if (!desktopSidebarQuery.matches && event.target.closest('a')) closeMobileSidebar();
            });
            desktopSidebarQuery.addEventListener('change', () => {
                document.body.classList.remove('sidebar-mobile-open');
                updateSidebarControls();
            });
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && document.body.classList.contains('sidebar-mobile-open')) {
                    closeMobileSidebar();
                    sidebarToggle.focus();
                }
            });
            updateSidebarControls();
        }

        function setProductsPanelOpen(isOpen) {
            productsCatalog.open = isOpen;
        }

        function renderProducts(filter = 'all', search = '') {
            // Liberar las tarjetas anteriores al regenerar los resultados.
            revealObserver?.disconnect();
            const searchTerm = normalizeGuideSearch(search);
            if (searchTerm) filter = 'all';
            
            let results = [];

            if (searchTerm === '') {
                results = productos
                    .filter(p => filter === 'all' || p.category === filter)
                    .map(p => ({ ...p, matchField: null }));
            } else {
                results = productos
                    .map(p => {
                        let matchField = null;
                        if (p.code && normalizeGuideSearch(p.code).includes(searchTerm)) {
                            matchField = 'Código de Barras';
                        } else if (normalizeGuideSearch(p.name).includes(searchTerm)) {
                            matchField = 'Nombre';
                        } else if (p.shortDesc && normalizeGuideSearch(p.shortDesc).includes(searchTerm)) {
                            matchField = 'Descripción';
                        } else if (p.ingredients && normalizeGuideSearch(p.ingredients).includes(searchTerm)) {
                            matchField = 'Ingredientes';
                        } else if (p.benefits && p.benefits.some(b => normalizeGuideSearch(b).includes(searchTerm))) {
                            matchField = 'Beneficios';
                        } else if (p.contraindications && normalizeGuideSearch(p.contraindications).includes(searchTerm)) {
                            matchField = 'Contraindicaciones';
                        } else if (p.interactions && normalizeGuideSearch(p.interactions).includes(searchTerm)) {
                            matchField = 'Interacciones';
                        } else if (p.foodInteractions && normalizeGuideSearch(p.foodInteractions).includes(searchTerm)) {
                            matchField = 'Interacciones con Alimentos';
                        }

                        if (matchField) {
                            const matchCat = filter === 'all' || p.category === filter;
                            if (matchCat) {
                                return { ...p, matchField };
                            }
                        }
                        return null;
                    })
                    .filter(p => p !== null);
            }

            matchingSearchProductIds = new Set(searchTerm ? results.map(product => product.id) : []);
            // Ordenar alfabéticamente los resultados
            results.sort((a, b) => a.name.localeCompare(b.name));

            if (results.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400 font-medium">No encontramos ningún suplemento con esos criterios. 🧐</div>`;
                resultCount.textContent = '0 resultados';
                productsCatalogSummary.textContent = 'Sin productos con los filtros actuales';
                return;
            }

            grid.innerHTML = results.map((p, i) => {
                const matchBadge = p.matchField 
                    ? `<span class="text-[10px] bg-girasol-100 text-girasol-900 px-2 py-0.5 rounded-full mt-2 self-start font-semibold">Coincidencia en: ${p.matchField}</span>` 
                    : '';

                const catColors = {
                    digestivo: ['#16a34a', '#86efac'],
                    metabolismo: ['#ea580c', '#fdba74'],
                    nervioso: ['#7c3aed', '#c4b5fd'],
                    inmune: ['#2563eb', '#93c5fd'],
                    hormonal: ['#db2777', '#f9a8d4'],
                    locomotor: ['#ca8a04', '#fde047'],
                    nutricional: ['#059669', '#6ee7b7']
                };
                const [catA, catB] = catColors[p.category] || ['#16a34a', '#86efac'];
                const delay = (i % 3) * 0.035;

                return `
                    <div class="product-card reveal bg-white overflow-hidden flex flex-col h-full p-4" data-product-card data-product-id="${p.id}" role="button" tabindex="0" aria-label="Abrir ficha técnica de ${escapeGuideAttribute(p.name)}" style="--cat-a:${catA}; --cat-b:${catB}; animation-delay:${delay}s;">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                                <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/475569?text=${encodeURIComponent(p.name)}'">
                            </div>
                            <div class="flex-1">
                        <h4 class="text-lg font-black text-girasol-green-900 leading-tight">${p.name}</h4>
                        <p class="text-[10px] font-bold uppercase tracking-wider mt-1" style="color:${catA}">${p.category}</p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-600 mb-3 flex-1 line-clamp-3">${p.shortDesc}</p>
                <div class="flex items-center justify-end mt-auto">
                            <label data-card-control class="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer select-none">
                                <input type="checkbox" class="compare-checkbox w-4 h-4 accent-girasol-green-600" data-id="${p.id}" ${compareList.includes(p.id) ? 'checked' : ''} onchange="toggleCompare(${p.id}, this.checked)">
                                Comparar
                            </label>
                        </div>
                        ${matchBadge}
                    </div>
                `;
            }).join('');

            initRevealObserver();

            resultCount.textContent = `Mostrando ${results.length} de ${productos.length} suplementos`;
            productsCatalogSummary.textContent = `${results.length} de ${productos.length} productos visibles`;
        }

        // Enlaces del menú lateral
        grid.addEventListener('click', event => {
            if (event.target.closest('[data-card-control]')) return;
            const card = event.target.closest('[data-product-card]');
            if (card) openModal(Number(card.dataset.productId));
        });

        grid.addEventListener('keydown', event => {
            if (event.target.closest('[data-card-control]')) return;
            if (event.target.matches('[data-product-card]') && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                openModal(Number(event.target.dataset.productId));
            }
        });

        function setActiveCategory(filter, options = {}) {
            const { scroll = false, syncProducts = true } = options;

            // Actualizar enlaces en el sidebar
            document.querySelectorAll('.filter-link').forEach(link => {
                const isActive = link.dataset.filter === filter;
                link.classList.toggle('active', isActive);
            });

            // Actualizar botones en el hero
            document.querySelectorAll('.filter-btn').forEach(btn => {
                const isActive = btn.dataset.filter === filter;
                btn.classList.toggle('active', isActive);
                btn.classList.toggle('bg-white/30', isActive);
                btn.classList.toggle('bg-white/10', !isActive);
            });

            if (syncProducts) {
                setProductsPanelOpen(true);
                renderProducts(filter, searchInput.value);
                filterPadecimientos();
                updateCategoryDescription(filter);
            }

            if (scroll) {
                const target = document.getElementById('activeCategoryDescription') || document.getElementById('productsCatalog');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            // En móvil, cerrar el menú lateral tras seleccionar
            if (!desktopSidebarQuery.matches && document.body.classList.contains('sidebar-mobile-open')) {
                closeMobileSidebar();
            }
        }

        document.querySelectorAll('.filter-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                setActiveCategory(this.dataset.filter, { scroll: true });
            });
        });

        // Buscador (texto, padecimiento, síntoma o código de barras)
        searchInput.addEventListener('input', function() {
            const rawValue = this.value;
            const searchTerm = rawValue.toLowerCase().trim();
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            clearSearchBtn.classList.toggle('hidden', searchTerm === '');

            // Si un escáner terminó de "teclear" un código de barras completo,
            // abrir la ficha del producto directamente.
            if (procesarPosibleCodigoBarras(rawValue)) {
                this.value = '';
                clearSearchBtn.classList.add('hidden');
                renderProducts(activeFilter, '');
                filterPadecimientos();
                updateManualView();
                return;
            }

            renderProducts(activeFilter, searchTerm);
            filterPadecimientos();

            updateManualView();
        });

        // Respaldo: si el escáner envía "Enter" al terminar de leer el código.
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                if (procesarPosibleCodigoBarras(this.value)) {
                    e.preventDefault();
                    this.value = '';
                    clearSearchBtn.classList.add('hidden');
                    renderProducts(document.querySelector('.filter-btn.active')?.dataset.filter || 'all', '');
                    filterPadecimientos();
                    updateManualView();
                } else if (this.value.trim()) {
                    e.preventDefault();
                    const headerHeight = document.getElementById('mainCentralHeader')?.offsetHeight || 0;
                    const target = matchingSearchProductIds.size ? productsCatalog : document.getElementById('padecimientosGuideWeb');
                    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerHeight - 20, behavior: 'smooth' });
                }
            }
        });

        // Botón para limpiar búsqueda
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            this.classList.add('hidden');
            
            // Resetear filtros de productos
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                b.classList.add('bg-white/10');
            });
            const allProductsBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allProductsBtn) {
                allProductsBtn.classList.add('active');
                allProductsBtn.classList.remove('bg-white/10');
            }
            
            // Resetear filtros de padecimientos
            document.querySelectorAll('#padColorLegend .pad-color-btn.active').forEach(b => b.classList.remove('active', 'ring-2', 'ring-offset-1', 'ring-gray-800'));
            const allPadecimientosBtn = document.querySelector('#padColorLegend .pad-color-btn[data-color-filter="all"]');
            if (allPadecimientosBtn) {
                allPadecimientosBtn.classList.add('active', 'ring-2', 'ring-offset-1', 'ring-gray-800');
            }

            // Actualizar la vista
            updateCategoryDescription('all');
            renderProducts('all', '');
            filterPadecimientos();

            updateManualView();
        });

        function renderPdfSections() {
            const container = document.getElementById('printProductSections');
            if (!container) return;

            let html = `<h1 class="text-4xl font-black text-natura-900 mb-8 border-b-4 border-girasol-500 pb-4">SECCIÓN 3: GUÍA DE APOYO NUTRICIONAL POR SISTEMA</h1>`;

            for (const catKey in categoryOrderPdf) {
                const categoryName = categoryOrderPdf[catKey];
                const productsInCategory = productos.filter(p => p.category === catKey);

                if (productsInCategory.length > 0) {
                    html += `<section class="product-category-section">`;
                    html += `<h2 class="text-3xl font-black text-girasol-green-800 mb-2 border-b-4 border-girasol-yellow-500 pb-3">${categoryName}</h2>`;
                    const description = categoryDescriptions[catKey] || '';
                    html += `<p class="text-sm text-gray-600 mb-6 italic">${description}</p>`;
                    html += `<div class="print-grid">`;
                    
                    productsInCategory.sort((a, b) => a.name.localeCompare(b.name));

                    // NUEVO DISEÑO DE TARJETA ESTILO REVISTA/MOODBOARD
                    html += productsInCategory.map(p => `
                        <div class="product-card-magazine">
                            <!-- CABECERA: Imagen y Título -->
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-28 h-28 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                                    <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/475569?text=${encodeURIComponent(p.name)}'">
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-xl font-black text-girasol-green-900 leading-tight">${p.name}</h4>
                                    <p class="text-xs text-gray-500 leading-snug mt-1">${p.shortDesc}</p>
                                </div>
                            </div>

                            <!-- BLOQUE DE BENEFICIOS (Caja de color) -->
                            <div class="bg-emerald-50/70 p-4 rounded-xl mb-4">
                                <h5 class="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">Beneficios Clave</h5>
                                <ul class="space-y-1.5">
                                    ${(p.benefits || []).map(b => `
                                        <li class="flex items-start gap-2">
                                            <span class="text-emerald-500 mt-0.5">✔️</span>
                                            <span class="text-xs text-gray-700 leading-tight">${b}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- FICHA DE ESPECIFICACIONES (Lista limpia) -->
                            <div class="text-xs text-gray-800 space-y-2 mb-4">
                                <div class="flex flex-col">
                                    <span class="font-bold text-gray-500 uppercase tracking-wider text-[10px]">Ingredientes:</span>
                                    <span class="text-gray-700 leading-snug">${p.ingredients || 'No especificado.'}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-bold text-gray-500 uppercase tracking-wider text-[10px]">Porción y Uso:</span>
                                    <span class="text-gray-700 leading-snug">${p.serving || 'No especificado.'} ${p.timing ? `(${p.timing})` : ''} ${p.intakeInstructions ? `- ${p.intakeInstructions}` : ''}</span>
                                </div>
                            </div>

                            <!-- ZONA DE ALERTAS (Caja de color sutil) -->
                            <div class="mt-auto bg-red-50/60 p-4 rounded-xl text-xs space-y-2">
                                <div class="flex flex-col">
                                    <span class="font-bold text-red-700 uppercase tracking-wider text-[10px]">Contraindicaciones:</span>
                                    <span class="text-red-800/90 leading-snug">${p.contraindications || 'No especificadas.'}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-bold text-red-700 uppercase tracking-wider text-[10px]">Interacciones:</span>
                                    <span class="text-red-800/90 leading-snug">
                                        ${p.interactions || 'No especificadas.'} 
                                        ${p.foodInteractions && p.foodInteractions !== 'No significativas.' ? `(Alimentos: ${p.foodInteractions})` : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('');
                    html += `</div></section>`;
                }
            }
            container.innerHTML = html;
        }

        function renderIndex() {
            const indexContainer = document.getElementById('pdf-index');
            if (!indexContainer) return;

            let indexHTML = `<h1 class="text-4xl font-black text-girasol-green-900 mb-8 border-b-4 border-girasol-yellow-500 pb-4">Índice General del Manual</h1>`;
            
            // Main sections
            indexHTML += `
                <h2 class="text-2xl font-bold text-girasol-green-800 mb-4 mt-6">Contenido Principal</h2>
                <ol class="list-decimal list-inside space-y-2 text-lg text-gray-800 font-semibold mb-10">
                    <li>Introducción para el Asesor</li>
                    <li>Protocolos de Venta</li>
                    <li>Guía de Apoyo Nutricional por Sistema</li>
                    <li>Guía de Apoyo por Padecimiento</li>
                    <li>Preguntas Frecuentes de Clientes</li>
                    <li>Anexos (Glosario y Referencias)</li>
                </ol>
            `;

            // Group products by category
            const categories = productos.reduce((acc, product) => {
                const cat = product.category;
                if (!acc[cat]) {
                    acc[cat] = [];
                }
                acc[cat].push(product.name);
                return acc;
            }, {});

            const categoryOrder = {
                'metabolismo': '3.1. Bienestar Metabólico y Control de Peso',
                'clinico': '3.2. Salud Cardiovascular, Hepática y Urinaria',
                'digestivo': '3.3. Bienestar Digestivo',
                'laxantes': '3.4. Laxantes y Regularidad Intestinal',
                'locomotor': '3.5. Salud Articular y Ósea',
                'inmune': '3.6. Defensas Naturales y Salud Respiratoria',
                'nervioso': '3.7. Sistema Nervioso y Sueño',
                'hormonal': '3.8. Salud Hormonal',
                'piel': '3.9. Cuidado de la Piel y Ojos',
                'deportivo': '3.10. Suplementos Deportivos',
                'nutricional': '3.11. Apoyo Nutricional General',
            };

            indexHTML += `<h2 class="text-2xl font-bold text-girasol-green-800 mb-4 mt-10 border-t pt-6">Índice de Suplementos por Categoría</h2>`;
            indexHTML += `<div class="columns-2 gap-8">`;

            for (const catKey in categoryOrder) {
                if (categories[catKey]) {
                    indexHTML += `<div class="mb-6 break-inside-avoid"><h3 class="text-xl font-bold text-girasol-green-800 mb-3">${categoryOrder[catKey]}</h3><ul class="space-y-1 text-sm text-gray-700">${categories[catKey].sort().map(name => `<li>${name}</li>`).join('')}</ul></div>`;
                }
            }
            indexHTML += `</div>`;
            indexContainer.innerHTML = indexHTML;
        }

        // Abrir modal
        // ================================================================
        //  BÚSQUEDA POR CÓDIGO DE BARRAS (escáner del punto de venta)
        // ================================================================
        function buscarProductoPorCodigo(codigo) {
            const clean = String(codigo).trim();
            if (!clean) return null;
            return productos.find(p => p.code && String(p.code).trim() === clean) || null;
        }

        // Devuelve la lista de padecimientos (guías) donde este producto
        // aparece dentro del combo principal o secundario.
        function getPadecimientosRelacionados(productId) {
            return padecimientos.filter(pad => {
                const enPrincipal = (pad.comboPrincipal || []).some(item => item.id === productId);
                const enSecundario = (pad.comboSecundario || []).some(item => item.id === productId);
                return enPrincipal || enSecundario;
            });
        }

        function getSinergiasPorPadecimiento(pad, productId) {
            const principales = (pad.comboPrincipal || []).map(item => ({ ...item, tipo: 'Principal' }));
            const adicionales = (pad.comboSecundario || []).map(item => ({ ...item, tipo: 'Apoyo adicional' }));

            return [...principales, ...adicionales]
                .filter(item => item.id !== productId)
                .map(item => ({ ...item, producto: productos.find(product => product.id === item.id) }))
                .filter(item => item.producto);
        }

        function renderSinergiaProducto(item) {
            const product = item.producto;
            const rationale = escapeGuideAttribute(item.rationale || `Complementa el protocolo de esta guía como ${item.tipo.toLowerCase()}.`);
            return `
                <button type="button" onclick="openModal(${product.id})" title="${rationale}"
                    class="text-left flex items-center gap-2 rounded-xl border border-indigo-100 bg-white p-2 hover:border-indigo-300 hover:shadow-sm transition-all">
                    <span class="guide-synergy-product-photo">${renderGuideProductImage(product)}</span>
                    <span class="min-w-0">
                        <span class="block text-xs font-bold leading-tight text-gray-800">${product.name}</span>
                        <span class="block mt-0.5 text-[10px] font-semibold uppercase tracking-wide ${item.tipo === 'Principal' ? 'text-girasol-green-700' : 'text-blue-700'}">${item.tipo}</span>
                    </span>
                </button>`;
        }

        // Intenta interpretar lo que se escribió/escaneó en el buscador
        // principal como un código de barras. Si hay coincidencia exacta,
        // abre la ficha del producto directamente (ideal para escáneres).
        function procesarPosibleCodigoBarras(valor) {
            const val = valor.trim();
            if (!/^\d{6,14}$/.test(val)) return false; // no parece un código
            const producto = buscarProductoPorCodigo(val);
            if (producto) {
                openModal(producto.id);
                return true;
            }
            return false;
        }

        // ================================================================
        //  CAPTURA GLOBAL DEL ESCÁNER (funciona aunque el buscador
        //  no tenga el foco — la pistola es un teclado y escribe donde
        //  sea que esté el foco; si no hay ningún campo enfocado, esos
        //  caracteres no llegaban a ningún lado. Este listener los
        //  intercepta directamente a nivel de documento).
        // ================================================================
        let __scanBuffer = '';
        let __scanLastTime = 0;

        document.addEventListener('keydown', function(e) {
            const active = document.activeElement;
            const isEditable = active && (
                active.tagName === 'INPUT' ||
                active.tagName === 'TEXTAREA' ||
                active.isContentEditable
            );
            // Si el asesor está escribiendo dentro de un campo (como el buscador),
            // dejamos que ese campo maneje su propia lógica (ya cubierto arriba).
            if (isEditable) {
                __scanBuffer = '';
                return;
            }

            const now = Date.now();
            // Un escaneo llega en milisegundos; si pasa más de 300ms entre
            // teclas, asumimos que es un nuevo intento y reiniciamos el buffer.
            if (now - __scanLastTime > 300) {
                __scanBuffer = '';
            }
            __scanLastTime = now;

            if (e.key === 'Enter') {
                if (__scanBuffer) {
                    e.preventDefault();
                    procesarPosibleCodigoBarras(__scanBuffer);
                }
                __scanBuffer = '';
                return;
            }

            if (/^\d$/.test(e.key)) {
                __scanBuffer += e.key;
            }
        });

        function openModal(id) {
            const p = productos.find(prod => prod.id === id);
            if (!p) return;

            if (modal.getAttribute('aria-hidden') === 'true') {
                productModalTrigger = document.activeElement;
            }
            modal.dataset.category = p.category || '';
            modalSheet.scrollTop = 0;
            document.getElementById('modalName').textContent = p.name;
            document.getElementById('modalImage').src = p.image;
            document.getElementById('modalImage').alt = p.name;
            document.getElementById('modalImage').onerror = function() { this.src = 'https://placehold.co/200x200/e2e8f0/475569?text=' + encodeURIComponent(p.name); };
            document.getElementById('modalCategory').textContent = (categoryIcons[p.category]?.name || p.category).toUpperCase();
            document.getElementById('modalDescription').textContent = p.shortDesc;
            document.getElementById('modalIngredients').textContent = p.ingredients || 'No especificado';
            document.getElementById('modalServing').textContent = p.serving || 'No especificado';

            // Nuevos campos
            document.getElementById('modalTiming').textContent = p.timing || 'Según lo indicado en la porción sugerida.';
            document.getElementById('modalIntakeInstructions').textContent = p.intakeInstructions || 'Seguir las indicaciones del empaque.';
            document.getElementById('modalFoodInter').textContent = p.foodInteractions || 'No se han reportado interacciones significativas con alimentos. Tomar preferentemente con comidas para mejor tolerancia, a menos que se indique lo contrario.';

            const benefitsList = document.getElementById('modalBenefits');
            benefitsList.innerHTML = p.benefits ? p.benefits.map(b => `<li>${b}</li>`).join('') : '<li>No especificado</li>';

            document.getElementById('modalContra').textContent = p.contraindications || 'No especificado';
            document.getElementById('modalInter').textContent = p.interactions || 'No especificado';

            // Guías de padecimiento relacionadas (para el asesor en punto de venta)
            const padWrap = document.getElementById('modalPadecimientosWrap');
            const padContainer = document.getElementById('modalPadecimientos');
            const relacionados = getPadecimientosRelacionados(p.id);
            if (relacionados.length > 0) {
                padContainer.innerHTML = relacionados.map(pad => {
                    const sinergias = getSinergiasPorPadecimiento(pad, p.id);
                    const selectedRole = (pad.comboPrincipal || []).some(item => item.id === p.id) ? 'Producto principal' : 'Apoyo adicional';
                    return `
                        <section class="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3">
                            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <button type="button" onclick="closeModalFn(); document.getElementById('padecimientosGuideWeb').scrollIntoView({behavior:'smooth'}); setTimeout(() => scrollToPadecimiento('${pad.id}'), 400);"
                                    class="text-left text-sm font-bold text-indigo-800 hover:underline flex items-center gap-1.5">
                                    <span>${pad.emoji || '🎯'}</span><span>${pad.name}</span>
                                </button>
                                <span class="rounded-full bg-white border border-indigo-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-600">${selectedRole}</span>
                            </div>
                            <p class="text-[11px] font-semibold text-gray-600 mb-2">Productos que hacen sinergia en esta guía:</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                ${sinergias.map(renderSinergiaProducto).join('')}
                            </div>
                        </section>`;
                }).join('');
                padWrap.classList.remove('hidden');
            } else {
                padContainer.innerHTML = '';
                padWrap.classList.add('hidden');
            }

            modal.inert = false;
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalSheet.classList.remove('scale-95');
            document.body.style.overflow = 'hidden';
            window.requestAnimationFrame(() => closeModal.focus({ preventScroll: true }));
        }

        function closeModalFn() {
            const wasOpen = modal.getAttribute('aria-hidden') === 'false';
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.inert = true;
            modal.setAttribute('aria-hidden', 'true');
            modalSheet.classList.add('scale-95');
            document.body.style.overflow = 'auto';
            if (wasOpen && productModalTrigger && typeof productModalTrigger.focus === 'function' && document.contains(productModalTrigger)) {
                productModalTrigger.focus({ preventScroll: true });
            }
        }

        // ============================================================
        //  COMPARADOR DE PRODUCTOS - lógica de UI
        // ============================================================
        const compareBar = document.getElementById('compareBar');
        const compareCount = document.getElementById('compareCount');
        const compareViewBtn = document.getElementById('compareViewBtn');
        const compareClearBtn = document.getElementById('compareClearBtn');
        const compareModal = document.getElementById('compareModal');
        const closeCompareModal = document.getElementById('closeCompareModal');
        const compareTableWrap = document.getElementById('compareTableWrap');
        const comparePanel = compareModal.querySelector('.compare-sheet');
        const compareToolbar = compareModal.querySelector('.compare-sheet-toolbar');
        let compareModalTrigger = null;

        function syncCompareStickyOffset() {
            comparePanel.style.setProperty('--compare-toolbar-height', `${compareToolbar.offsetHeight}px`);
        }

        function updateCompareBar() {
            const count = compareList.length;
            const wasHidden = compareBar.classList.contains('hidden');
            compareCount.textContent = count === 0 ? '0 seleccionados' : `${count} de ${MAX_COMPARE} seleccionados`;
            compareBar.classList.toggle('hidden', count === 0);

            // Sincronizar badge del menú lateral
            const sidebarCompareBadge = document.getElementById('sidebarCompareBadge');
            const sidebarCompareCount = document.getElementById('sidebarCompareCount');
            if (sidebarCompareBadge && sidebarCompareCount) {
                sidebarCompareCount.textContent = count;
                sidebarCompareBadge.classList.toggle('hidden', count === 0);
                sidebarCompareBadge.classList.toggle('flex', count > 0);
            }

            if (count > 0 && wasHidden) {
                compareBar.classList.remove('pop-in');
                void compareBar.offsetWidth;
                compareBar.classList.add('pop-in');
            }

            compareViewBtn.disabled = count < 2;
        }

        window.toggleCompare = function (id, checked) {
            if (checked) {
                if (compareList.length >= MAX_COMPARE) {
                    alert(`Solo puedes comparar hasta ${MAX_COMPARE} productos a la vez. Quita uno para agregar otro.`);
                    const checkbox = document.querySelector(`.compare-checkbox[data-id="${id}"]`);
                    if (checkbox) checkbox.checked = false;
                    return;
                }

                if (!compareList.includes(id)) compareList.push(id);
            } else {
                compareList = compareList.filter((productId) => productId !== id);
            }

            window.compareList = compareList;
            updateCompareBar();
        };

        function clearCompareSelection() {
            compareList = [];
            window.compareList = compareList;
            document.querySelectorAll('.compare-checkbox').forEach((checkbox) => { checkbox.checked = false; });
            updateCompareBar();
        }

        function openCompareModal() {
            const items = compareList.map((id) => productos.find((product) => product.id === id)).filter(Boolean);
            if (items.length < 2) return;

            const sections = [
                {
                    kicker: 'Para decidir',
                    title: 'Información práctica',
                    rows: [
                        { label: 'Qué aporta', get: (product) => product.shortDesc || '-' },
                        { label: 'Beneficios clave', get: (product) => product.benefits && product.benefits.length
                            ? `<ul class="compare-benefits">${product.benefits.map((benefit) => `<li>${benefit}</li>`).join('')}</ul>`
                            : '-' },
                        { label: 'Ingredientes', get: (product) => product.ingredients || '-' },
                        { label: 'Porción sugerida', get: (product) => product.serving || '-' },
                        { label: 'Horario', get: (product) => product.timing || '-' },
                        { label: 'Modo de uso', get: (product) => product.intakeInstructions || '-' }
                    ]
                },
                {
                    kicker: 'Antes de recomendar',
                    title: 'Precauciones',
                    rows: [
                        { label: 'Contraindicaciones', get: (product) => product.contraindications || '-' },
                        { label: 'Interacciones con medicamentos', get: (product) => product.interactions || '-' },
                        { label: 'Interacciones con alimentos', get: (product) => product.foodInteractions || '-' }
                    ]
                }
            ];

            let html = `<div class="compare-matrix" style="--compare-count:${items.length}">`;
            html += `<div class="compare-products-row">
                <div class="compare-products-label"><span>Comparando</span><strong>${items.length} productos</strong></div>`;
            items.forEach((product) => {
                const categoryInfo = categoryIcons[product.category] || { emoji: '🌿', name: product.category || 'Producto' };
                html += `<article class="compare-product-head" data-category="${escapeGuideAttribute(product.category)}">
                    <span class="compare-product-category"><span aria-hidden="true">${categoryInfo.emoji}</span>${categoryInfo.name}</span>
                    <span class="compare-product-image"><img src="${escapeGuideAttribute(product.image)}" alt="${escapeGuideAttribute(product.name)}" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/475569?text=IMG';"></span>
                    <h4>${product.name}</h4>
                </article>`;
            });
            html += '</div>';

            sections.forEach((section) => {
                html += `<section class="compare-section">
                    <header class="compare-section-heading"><span>${section.kicker}</span><h4>${section.title}</h4></header>`;
                section.rows.forEach((row) => {
                    html += `<div class="compare-row"><h5 class="compare-row-label">${row.label}</h5>`;
                    items.forEach((product) => {
                        const value = row.get(product);
                        const emptyClass = value === '-' ? ' is-empty' : '';
                        html += `<div class="compare-value${emptyClass}">
                            <span class="compare-mobile-product">${product.name}</span>
                            <div>${value}</div>
                        </div>`;
                    });
                    html += '</div>';
                });
                html += '</section>';
            });
            html += '</div>';

            compareTableWrap.innerHTML = html;
            compareModalTrigger = compareViewBtn;
            comparePanel.scrollTop = 0;
            compareModal.inert = false;
            compareModal.setAttribute('aria-hidden', 'false');
            compareModal.classList.remove('opacity-0', 'pointer-events-none');
            comparePanel.classList.remove('scale-95');
            document.body.style.overflow = 'hidden';
            syncCompareStickyOffset();
            requestAnimationFrame(() => {
                syncCompareStickyOffset();
                closeCompareModal.focus({ preventScroll: true });
            });
        }

        function closeCompareModalFn() {
            if (compareModal.getAttribute('aria-hidden') === 'true') return;
            compareModal.classList.add('opacity-0', 'pointer-events-none');
            comparePanel.classList.add('scale-95');
            compareModal.setAttribute('aria-hidden', 'true');
            compareModal.inert = true;
            document.body.style.overflow = '';
            if (compareModalTrigger && document.contains(compareModalTrigger)) {
                compareModalTrigger.focus({ preventScroll: true });
            }
        }

        compareViewBtn.addEventListener('click', openCompareModal);
        compareClearBtn.addEventListener('click', clearCompareSelection);
        closeCompareModal.addEventListener('click', closeCompareModalFn);
        window.addEventListener('resize', () => {
            if (compareModal.getAttribute('aria-hidden') === 'false') syncCompareStickyOffset();
        });
        compareModal.addEventListener('click', (event) => {
            if (event.target === compareModal) closeCompareModalFn();
        });
        document.addEventListener('keydown', (event) => {
            if (compareModal.getAttribute('aria-hidden') === 'true') return;
            if (event.key === 'Escape') {
                closeCompareModalFn();
                return;
            }
            if (event.key !== 'Tab') return;

            const focusable = [...compareModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
                .filter(element => !element.disabled && element.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        // Eventos
        const closeModal = document.getElementById('closeModal');
        closeModal.addEventListener('click', closeModalFn);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModalFn();
                return;
            }
            if (e.key !== 'Tab' || modal.getAttribute('aria-hidden') === 'true') return;

            const focusable = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
                .filter(element => !element.disabled && element.offsetParent !== null);
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // Filtros por botones
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setActiveCategory(this.dataset.filter, { scroll: false });
            });
        });

        document.querySelector('[data-action="print"]')?.addEventListener('click', () => window.print());

        function initSidebarInteractiveFeatures() {
            // La apertura sigue siendo nativa; solo se anima su contenido visible.
            document.getElementById('manualMain').addEventListener('click', event => {
                if (event.defaultPrevented || event.target.closest('button, a, input, select, textarea')) return;
                const summary = event.target.closest('summary');
                const details = summary?.parentElement;
                if (!details?.matches('#productsCatalog, #padecimientosCatalog, .pad-classification-group, .padecimiento-card')) return;
                requestAnimationFrame(() => {
                    const content = summary.nextElementSibling;
                    if (details.open && content) animateManualEntrance(content, 6);
                    else if (content) manualEntranceAnimations.get(content)?.cancel();
                });
            });
            const buttons = [...document.querySelectorAll('[data-nav-target]')];
            buttons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    selectManualTab(button.dataset.navTarget);
                    window.scrollTo({ top: 0, behavior: reducedManualMotion.matches ? 'instant' : 'smooth' });
                });
                button.addEventListener('keydown', event => {
                    const movement = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
                    if (!movement && event.key !== 'Home' && event.key !== 'End') return;
                    event.preventDefault();
                    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
                        : (index + movement + buttons.length) % buttons.length;
                    buttons[next].focus();
                    buttons[next].click();
                });
            });
            updateManualView();
        }

        // Inicializar
        populateSideMenuFilters();
        setActiveCategory('all', { syncProducts: false });
        renderProducts('all', '');
        updateCategoryDescription('all');
        renderPadecimientosWeb();
        renderIntroWeb();
        renderGuiaLenguajeWeb();
        renderArteDeVenderWeb();
        renderGuiaRapidaWeb();
        renderIndex();
        renderPdfSections();
        renderPadecimientosPdf();
        renderFaqWeb();
        renderGlosario();
        renderAnexosPdf();
        updateCompareBar();
        initSidebarInteractiveFeatures();

        // Exponer modal al global
        window.openModal = openModal;
