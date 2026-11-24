        const { productos, padecimientos } = window.manualData;
        let activeManualTab = 'productos';
        let matchingSearchProductIds = new Set();
        let directSearchProductIds = new Set();
        function getSearchGuides(query) {
            return window.manualSearch.getGuides(padecimientos, productos, query);
        }
        const reducedManualMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const manualEntranceAnimations = new Map();

        function getManualHeaderOffset() {
            if (document.body.classList.contains('native-preview')) return (document.getElementById('mainCentralHeader')?.offsetHeight || 0) + 20;
            if (window.matchMedia('(min-width: 1024px)').matches) return 0;
            return document.getElementById('mainCentralHeader')?.offsetHeight || 0;
        }

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
            const searching = normalizeGuideSearch(searchInput.value) !== '';
            const guideFirst = getSearchGuides(searchInput.value).length > 0;
            const guideSection = document.getElementById('padecimientosGuideWeb');
            const productSection = document.getElementById('productsCatalog');
            if (guideFirst) productSection.before(guideSection);
            else productSection.after(guideSection);
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
                ? `${guideCount} guías relacionadas · ${matchingSearchProductIds.size} productos`
                : '';
            document.getElementById('guideSearchContext').hidden = !searching
                || !guideFirst;
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
            'digestivo': { emoji: '🌿', name: 'Función Digestiva y Hepática' },
            'laxantes': { emoji: '🚽', name: 'Laxantes' },
            'inmune': { emoji: '🛡️', name: 'Inmune' },
            'nervioso': { emoji: '🧠', name: 'Nervioso' },
            'metabolismo': { emoji: '🔥', name: 'Metabolismo' },
            'hormonal': { emoji: '🩷', name: 'Hormonal' },
            'piel': { emoji: '✨', name: 'Piel / Ojos' },
            'locomotor': { emoji: '💪', name: 'Locomotor' },
                'nutricional': { emoji: '🍎', name: 'Nutricional' },
            'clinico': { emoji: '❤️', name: 'Clínico' },
            'deportivo': { emoji: '🏋️', name: 'Deportivo' },
            'otros': { emoji: '🗂️', name: 'Otros productos' }
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
            'digestivo': "Productos cuyo enfoque principal es el estómago, el intestino, la vesícula y el hígado: enzimas, probióticos, fibras, protectores gástricos y extractos botánicos depurativos. Las fórmulas dirigidas principalmente al estreñimiento están en Laxantes.",
            'laxantes': "Productos cuya ficha se enfoca principalmente en facilitar la evacuación o aliviar el estreñimiento. Revisar la forma y el tiempo de uso indicados para cada fórmula.",
            'inmune': "Fórmulas cuya ficha se enfoca principalmente en las defensas o el confort de las vías respiratorias. La categoría ayuda a ubicarlas; cada ficha explica sus beneficios y límites.",
            'nervioso': "Productos enfocados en relajación, descanso, atención, memoria o funcionamiento de los nervios, según su ficha.",
            'metabolismo': "Fórmulas enfocadas en energía, aprovechamiento del azúcar o control de peso. Incluye complejos B para energía y minerales de uso general cuando no tienen un enfoque más específico.",
            'hormonal': "Productos con un enfoque específico de bienestar femenino o masculino: menopausia, ciclo menstrual, próstata, deseo sexual o salud reproductiva.",
            'piel': "Productos para el cuidado de piel, cabello, uñas u ojos. Incluye cosméticos y geles cuya función principal es el cuidado de la piel.",
            'locomotor': "Productos enfocados en huesos, articulaciones, músculos y movimiento. Incluye calcio, vitaminas para huesos, fórmulas articulares y productos de masaje muscular según su ficha.",
            'clinico': "Productos cuya ficha se enfoca en el cuidado del corazón, la circulación, el hígado o las vías urinarias. La elección depende de la fórmula y las necesidades de la persona.",
            'nutricional': "Alimentos, bebidas, multivitamínicos y otros aportes nutricionales de uso general. Incluye antioxidantes cuando la ficha no los dirige principalmente a un órgano o función específica.",
            'deportivo': "Productos dirigidos principalmente al entrenamiento y la recuperación: proteínas, creatina y otras fórmulas deportivas, según su ficha.",
            'otros': "Productos que no corresponden a las categorías de apoyo nutricional o por sistema. Consultar su ficha antes de explicar su función."
        };

        const categoryOrderPdf = { // Títulos actualizados para SECCIÓN 3
            'metabolismo': '3.1. Bienestar Metabólico y Control de Peso',
            'clinico': '3.2. Salud Cardiovascular, Hepática y Urinaria',
            'digestivo': '3.3. Función Digestiva y Hepática',
            'laxantes': '3.4. Laxantes y Regularidad Intestinal',
            'locomotor': '3.5. Salud Articular y Ósea',
            'inmune': '3.6. Defensas Naturales y Salud Respiratoria',
            'nervioso': '3.7. Sistema Nervioso y Sueño',
            'hormonal': '3.8. Salud Hormonal',
            'piel': '3.9. Cuidado de la Piel y Ojos',
            'deportivo': '3.10. Suplementos Deportivos',
            'nutricional': '3.11. Apoyo Nutricional General',
            'otros': '3.12. Otros Productos',
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
                        button.classList.remove('active');
                    });
                    const allGuidesButton = document.querySelector('#padColorLegend .pad-color-btn[data-color-filter="all"]');
                    if (allGuidesButton) allGuidesButton.classList.add('active');
                    renderProducts('all', '');
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
                const yOffset = -getManualHeaderOffset() - 20;
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
            const serving = String(product?.serving || item?.serving || '').trim();
            const timing = String(item?.timing || product?.timing || '').trim();
            if (serving && timing && !serving.toLowerCase().includes(timing.toLowerCase())) {
                return `${serving} · ${timing}`;
            }
            return serving || 'Consultar la ficha técnica.';
        }

        function getGuideUsage(item, product) {
            return String(item?.rationale || product?.benefitSummary || '').trim();
        }

        function escapeGuideAttribute(value) {
            return String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        function renderProductSources(product) {
            const sources = (product?.researchNote?.sources || []).filter(source => /^https:\/\//i.test(source.url || ''));
            return sources.length ? `
                <ul class="mt-3 space-y-2 text-xs" aria-label="Fuentes consultadas">${sources.map(source => `
                    <li><a class="underline" href="${escapeGuideAttribute(source.url)}" target="_blank" rel="noopener noreferrer">${escapeGuideAttribute(source.title || source.label || "Fuente científica")}</a></li>
                `).join('')}</ul>` : '';
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
                            <span class="section-title">
                                <span aria-hidden="true">🎯</span> Guía de Apoyo Nutricional
                            </span>
                            <span class="block text-gray-600 mt-2 max-w-2xl mx-auto">Consulta protocolos y suplementos de apoyo por padecimiento, síntoma o ingrediente.</span>
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
                    <div class="mb-6 rounded-xl border border-amber-200/90 bg-amber-50/70 px-4 py-2.5 text-xs text-amber-900 leading-relaxed">
                        <strong class="font-bold">Prioriza Zennatura:</strong> recomienda primero sus fórmulas cuando se ajusten a la necesidad; usa otras marcas como alternativas según presentación.
                    </div>
                    <p id="padColorEmptyMsg" class="hidden text-center text-gray-500 italic mb-6">No hay padecimientos registrados para este color.</p>
                    <div class="pad-modules-grid grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            `;

            // Catálogo anatómico y visual de sistemas para las tarjetas de módulos
            const guideAnatomyData = {
                purple: {
                    organs: 'Cerebro · Eje Neuronal · Neurotransmisores · Sueño',
                    desc: 'Regulación del estado de ánimo, neuroprotección, equilibrio del estrés y descanso reparador.',
                    accent: '#9333ea',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Sistema Nervioso - Cerebro y sinapsis">
                        <defs>
                            <linearGradient id="anat-purp-base" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9333ea"/>
                                <stop offset="1" stop-color="#581c87"/>
                            </linearGradient>
                            <linearGradient id="anat-purp-glow" x1="18" y1="14" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#f3e8ff"/>
                                <stop offset="1" stop-color="#c084fc"/>
                            </linearGradient>
                            <filter id="anat-glow-p" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                            </filter>
                        </defs>
                        <path d="M32 12c-7.5 0-14 4.5-16.5 11-2.5 6.5-1 14 3.5 19 1.5 1.7 2 3.8 1.5 6-.8 3.5 1 6.5 4 8 2 1 4.5 1 7 .5.8 2.5 3 4.5 5.5 4.5s4.7-2 5.5-4.5c2.5.5 5 0 7-.5 3-1.5 4.8-4.5 4-8-.5-2.2 0-4.3 1.5-6 4.5-5 6-12.5 3.5-19C56 16.5 49.5 12 42 12c-3.1 0-6.1 1-8.5 2.8-2.4-1.8-5.4-2.8-8.5-2.8z" fill="url(#anat-purp-base)" opacity="0.95"/>
                        <path d="M32 14v16m0 4v16" stroke="url(#anat-purp-glow)" stroke-width="2.5" stroke-linecap="round"/>
                        <path d="M22 20c-3 2.5-4 7-2 11m-2 7c2 2.5 6 3 9 1.5M42 20c3 2.5 4 7 2 11m2 7c-2 2.5-6 3-9 1.5M26 28c3 1.5 4 4.5 3 8m9-8c-3 1.5-4 4.5-3 8" stroke="url(#anat-purp-glow)" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="32" cy="30" r="3" fill="#ffffff" filter="url(#anat-glow-p)"/>
                        <circle cx="21" cy="24" r="2" fill="#e9d5ff"/>
                        <circle cx="43" cy="24" r="2" fill="#e9d5ff"/>
                        <circle cx="25" cy="40" r="1.8" fill="#e9d5ff"/>
                        <circle cx="39" cy="40" r="1.8" fill="#e9d5ff"/>
                        <path d="M21 24l11 6 11-6m-21 16l10-10 10 10" stroke="#f5d0fe" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.8"/>
                    </svg>`
                },
                green: {
                    organs: 'Estómago · Hígado · Vesícula · Microbiota Intestinal',
                    desc: 'Confort gástrico, digestión enzimática, depuración hepática y flora intestinal saludable.',
                    accent: '#059669',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Sistema Digestivo - Estómago e hígado">
                        <defs>
                            <linearGradient id="anat-grn-liver" x1="16" y1="14" x2="42" y2="34" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#059669"/>
                                <stop offset="1" stop-color="#064e3b"/>
                            </linearGradient>
                            <linearGradient id="anat-grn-stomach" x1="26" y1="20" x2="52" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#10b981"/>
                                <stop offset="1" stop-color="#047857"/>
                            </linearGradient>
                            <linearGradient id="anat-grn-glow" x1="20" y1="20" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#a7f3d0"/>
                                <stop offset="1" stop-color="#34d399"/>
                            </linearGradient>
                        </defs>
                        <path d="M14 24c0-5 5-9 12-10 8-1.2 16 1 18 5 2.5 5 1 12-4 15-6 3.5-15 4-21 1-3.5-1.8-5-6-5-11z" fill="url(#anat-grn-liver)" opacity="0.95"/>
                        <ellipse cx="28" cy="34" rx="4" ry="2.8" transform="rotate(-20 28 34)" fill="#34d399"/>
                        <path d="M33 22c0-4 3-7 5-8 3-1.5 5 0 5 3 0 2-1 4-1 6 3 2 8 6 9 12s-2 11-7 14c-6 3.5-14 2-18-2-3-3-3-8 0-12 2-2.5 5-4 7-6v-7z" fill="url(#anat-grn-stomach)" opacity="0.95"/>
                        <path d="M37 28c3 2 5 6 4 10s-4 7-8 8m6-12c2 2 3 5 2 8" stroke="url(#anat-grn-glow)" stroke-width="2" stroke-linecap="round"/>
                        <path d="M26 48c-3 0-5 2-5 4 0 3 3 5 7 5 5 0 8-2 8-5s-3-4-7-4zm9 2c3 0 6 2 6 4s-3 4-7 4" stroke="#6ee7b7" stroke-width="2.2" stroke-linecap="round"/>
                        <circle cx="24" cy="52" r="1.5" fill="#ecfdf5"/>
                        <circle cx="38" cy="53" r="1.5" fill="#ecfdf5"/>
                        <circle cx="31" cy="49" r="1.2" fill="#a7f3d0"/>
                    </svg>`
                },
                orange: {
                    organs: 'Páncreas · Regulación de Azúcar · Tiroides · Energía Celular',
                    desc: 'Sensibilidad a la insulina, modulación de glucosa postprandial y vitalidad celular.',
                    accent: '#ea580c',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Metabolismo - Páncreas y glucosa">
                        <defs>
                            <linearGradient id="anat-org-panc" x1="12" y1="20" x2="52" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#f97316"/>
                                <stop offset="1" stop-color="#c2410c"/>
                            </linearGradient>
                            <linearGradient id="anat-org-energy" x1="20" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fef08a"/>
                                <stop offset="1" stop-color="#fb923c"/>
                            </linearGradient>
                        </defs>
                        <path d="M20 18c-5 0-9 4-9 9v10c0 5 4 9 9 9h5" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
                        <path d="M22 24c4-3 9-2 11 0l16 8c4 2 5 6 3 9-2 3-6 4-10 2l-15-7c-3-1.5-5 0-7 2-3 3-8 2-9-2s1-8 6-10l5-2z" fill="url(#anat-org-panc)" opacity="0.95"/>
                        <path d="M19 33c3-1 8 0 12 2l14 7m-18-8l3-3m5 5l2-3m5 5l2-3" stroke="url(#anat-org-energy)" stroke-width="1.8" stroke-linecap="round"/>
                        <polygon points="46,14 52,17.5 52,24.5 46,28 40,24.5 40,17.5" stroke="#facc15" stroke-width="2" fill="#fef3c7" fill-opacity="0.25"/>
                        <circle cx="46" cy="21" r="2.5" fill="#fef08a"/>
                        <path d="M46 10v2m0 18v2m-8-11h2m12 0h2" stroke="#fde047" stroke-width="1.5" stroke-linecap="round"/>
                        <circle cx="16" cy="27" r="1.5" fill="#ffedd5"/>
                        <circle cx="28" cy="30" r="1.5" fill="#ffedd5"/>
                    </svg>`
                },
                pink: {
                    organs: 'Sistema Endocrino · Salud Prostática · Ciclo Femenino',
                    desc: 'Balance hormonal en cada etapa vital, bienestar prostático, vitalidad y armonía reproductiva.',
                    accent: '#db2777',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Salud Hormonal - Sistema endocrino">
                        <defs>
                            <linearGradient id="anat-pnk-base" x1="14" y1="12" x2="50" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ec4899"/>
                                <stop offset="1" stop-color="#9d174d"/>
                            </linearGradient>
                            <linearGradient id="anat-pnk-glow" x1="20" y1="16" x2="44" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fdf2f8"/>
                                <stop offset="1" stop-color="#f472b6"/>
                            </linearGradient>
                        </defs>
                        <path d="M32 10c7 3 14 3 20 1 0 16 2 31-20 43C10 42 12 27 12 11c6 2 13 2 20-1z" fill="url(#anat-pnk-base)" opacity="0.9"/>
                        <circle cx="32" cy="26" r="9" stroke="url(#anat-pnk-glow)" stroke-width="2.5" fill="#fce7f3" fill-opacity="0.2"/>
                        <circle cx="32" cy="26" r="3" fill="#ffffff"/>
                        <path d="M32 35v11m-4-4h8" stroke="url(#anat-pnk-glow)" stroke-width="2.5" stroke-linecap="round"/>
                        <path d="M38 20l7-7m0 0h-5m5 0v5" stroke="url(#anat-pnk-glow)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22c-2 2-3 5-2 8m22-8c2 2 3 5 2 8" stroke="#fbcfe8" stroke-width="1.8" stroke-linecap="round"/>
                        <circle cx="32" cy="17" r="1.5" fill="#ffffff"/>
                    </svg>`
                },
                red: {
                    organs: 'Corazón · Red Aórtica · Circulación Periférica · Presión',
                    desc: 'Fuerza contráctil, elasticidad vascular, perfil lipídico y oxigenación tisular continua.',
                    accent: '#dc2626',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Salud Cardiovascular - Corazón y circulación">
                        <defs>
                            <linearGradient id="anat-red-heart" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ef4444"/>
                                <stop offset="1" stop-color="#991b1b"/>
                            </linearGradient>
                            <linearGradient id="anat-red-vessels" x1="20" y1="8" x2="44" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fca5a5"/>
                                <stop offset="1" stop-color="#f87171"/>
                            </linearGradient>
                        </defs>
                        <path d="M28 16c0-6 4-8 8-8s8 2 8 8v4h-6v-4c0-2-1-3-2-3s-2 1-2 3v4h-6v-4z" fill="#f87171"/>
                        <path d="M33 8V5m4 3V5m4 4V6" stroke="#fecaca" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22 14v8h6v-8h-6zm24 4v5h-6v-5h6z" fill="#dc2626"/>
                        <path d="M32 20c-7-5-16-1-17 7-1 7 4 14 9 19l8 9 8-9c5-5 10-12 9-19-1-8-10-12-17-7z" fill="url(#anat-red-heart)" opacity="0.95"/>
                        <path d="M31 24c1 4 0 9-3 13l-4 6m8-14c2 3 5 7 4 11m-3-7l3 2m-8 2l-2 2" stroke="url(#anat-red-vessels)" stroke-width="1.8" stroke-linecap="round"/>
                        <path d="M16 35h5l2-4 3 8 3-6 2 2h5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
                    </svg>`
                },
                blue: {
                    organs: 'Pulmones · Árbol Bronquial · Vías Aéreas · Defensas Inmunes',
                    desc: 'Capacidad respiratoria, oxigenación celular y barrera inmunitaria frente a agentes externos.',
                    accent: '#2563eb',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Sistema Respiratorio e Inmune - Pulmones y defensas">
                        <defs>
                            <linearGradient id="anat-blu-lungs" x1="14" y1="14" x2="50" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3b82f6"/>
                                <stop offset="1" stop-color="#1e3a8a"/>
                            </linearGradient>
                            <linearGradient id="anat-blu-glow" x1="22" y1="12" x2="42" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#dbeafe"/>
                                <stop offset="1" stop-color="#93c5fd"/>
                            </linearGradient>
                        </defs>
                        <path d="M32 6c8 4 16 4 23 1 0 20 2 35-23 49C7 42 9 27 9 7c7 3 15 3 23-1z" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="3 2" fill="#eff6ff" fill-opacity="0.12"/>
                        <path d="M32 10v12" stroke="url(#anat-blu-glow)" stroke-width="3.5" stroke-linecap="round"/>
                        <path d="M30 13h4m-4 3h4m-4 3h4" stroke="#1d4ed8" stroke-width="1.2"/>
                        <path d="M30 22c-3-2-7-2-10 1-5 4-7 12-5 19 1.5 5 6 8 11 7 2-.5 4-3 4-6V22z" fill="url(#anat-blu-lungs)" opacity="0.92"/>
                        <path d="M34 22c3-2 7-2 10 1 5 4 7 12 5 19-1.5 5-6 8-11 7-2-.5-4-3-4-6V22z" fill="url(#anat-blu-lungs)" opacity="0.92"/>
                        <path d="M32 22l-6 6m0 0l-4 4m4-4l-1 5m7-11l6 6m0 0l4 4m-4-4l1 5" stroke="url(#anat-blu-glow)" stroke-width="1.8" stroke-linecap="round"/>
                        <circle cx="19" cy="36" r="1.8" fill="#ffffff"/>
                        <circle cx="45" cy="36" r="1.8" fill="#ffffff"/>
                        <circle cx="24" cy="42" r="1.5" fill="#bfdbfe"/>
                        <circle cx="40" cy="42" r="1.5" fill="#bfdbfe"/>
                    </svg>`
                },
                yellow: {
                    organs: 'Huesos · Articulaciones · Columna Vertebral · Cartílago',
                    desc: 'Movilidad articular sin fricción, densidad mineral ósea, cartílago y fuerza muscular.',
                    accent: '#ca8a04',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Sistema Locomotor - Articulación y hueso">
                        <defs>
                            <linearGradient id="anat-yel-bone" x1="16" y1="10" x2="48" y2="54" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#eab308"/>
                                <stop offset="1" stop-color="#a16207"/>
                            </linearGradient>
                            <linearGradient id="anat-yel-joint" x1="22" y1="20" x2="42" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fef08a"/>
                                <stop offset="1" stop-color="#facc15"/>
                            </linearGradient>
                        </defs>
                        <path d="M32 10v12m-6-12c2 1 4 3 4 5v7c0 3-3 6-5 7-2 1-3 3-2 5 1 2 4 3 7 2 2-.5 4-2 4-5v-4h0c0 3 2 4.5 4 5 3 1 6 0 7-2 1-2 0-4-2-5-2-1-5-4-5-7v-7c0-2 2-4 4-5" stroke="url(#anat-yel-bone)" stroke-width="3" stroke-linecap="round"/>
                        <ellipse cx="32" cy="34" rx="11" ry="3.5" fill="#fef9c3" stroke="url(#anat-yel-joint)" stroke-width="2"/>
                        <path d="M22 37c2 2 6 4 10 4s8-2 10-4v7c0 3-2 6-4 8v6h-12v-6c-2-2-4-5-4-8v-7z" fill="url(#anat-yel-bone)" opacity="0.9"/>
                        <path d="M14 22c2-2 4-2 6 0m-6 8c2-2 4-2 6 0m-6 8c2-2 4-2 6 0" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
                        <path d="M50 22c-2-2-4-2-6 0m6 8c-2-2-4-2-6 0m6 8c-2-2-4-2-6 0" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="32" cy="34" r="2" fill="#ffffff"/>
                        <circle cx="26" cy="34" r="1.5" fill="#fef08a"/>
                        <circle cx="38" cy="34" r="1.5" fill="#fef08a"/>
                    </svg>`
                },
                gray: {
                    organs: 'Genoma y ADN · Microambiente Celular · Homeostasis Integral',
                    desc: 'Estrategias multifactoriales para condiciones crónicas, modulación inflamatoria y homeostasis.',
                    accent: '#475569',
                    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Condiciones Complejas - Célula y ADN">
                        <defs>
                            <linearGradient id="anat-gry-dna" x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#64748b"/>
                                <stop offset="1" stop-color="#334155"/>
                            </linearGradient>
                            <linearGradient id="anat-gry-glow" x1="20" y1="14" x2="44" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#f8fafc"/>
                                <stop offset="1" stop-color="#94a3b8"/>
                            </linearGradient>
                        </defs>
                        <circle cx="32" cy="32" r="23" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" fill="#f1f5f9" fill-opacity="0.15"/>
                        <path d="M22 14c4 4 16 8 20 18s-16 14-20 18" stroke="url(#anat-gry-dna)" stroke-width="2.5" stroke-linecap="round"/>
                        <path d="M42 14c-4 4-16 8-20 18s16 14 20 18" stroke="url(#anat-gry-glow)" stroke-width="2.5" stroke-linecap="round"/>
                        <line x1="24" y1="18" x2="40" y2="18" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
                        <line x1="27" y1="24" x2="37" y2="24" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
                        <circle cx="32" cy="32" r="3" fill="#ffffff"/>
                        <line x1="27" y1="40" x2="37" y2="40" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
                        <line x1="24" y1="46" x2="40" y2="46" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
                        <circle cx="16" cy="28" r="2" fill="#94a3b8"/>
                        <circle cx="48" cy="36" r="2" fill="#94a3b8"/>
                        <circle cx="32" cy="11" r="1.5" fill="#e2e8f0"/>
                        <circle cx="32" cy="53" r="1.5" fill="#e2e8f0"/>
                    </svg>`
                }
            };

            // Agrupar padecimientos por clasificación (color)
            guideColorGroups.forEach(group => {
                const groupPads = padecimientos.filter(pad => pad.color === group.key);
                if (groupPads.length === 0) return;

                const anatomy = guideAnatomyData[group.key] || {
                    organs: 'Apoyo Orgánico Especializado',
                    desc: 'Protocolos de apoyo nutricional específico para este sistema biológico.',
                    accent: '#475569',
                    svg: ''
                };

                html += `
                    <details class="pad-classification-group pad-module-card group/module" data-classification="${group.key}">
                        <summary class="pad-module-summary">
                            <div class="pad-module-header-main">
                                <div class="pad-module-anatomy-badge" aria-hidden="true">
                                    ${anatomy.svg}
                                </div>
                                <div class="pad-module-info">
                                    <div class="pad-module-scope-row">
                                        <span class="pad-module-scope-tag">
                                            <span class="pad-module-scope-dot"></span>
                                            <span class="pad-module-scope-text">${anatomy.organs}</span>
                                        </span>
                                    </div>
                                    <h3 class="pad-module-title">${group.name}</h3>
                                    <p class="pad-module-desc">${anatomy.desc}</p>
                                </div>
                            </div>
                            <div class="pad-module-meta-actions">
                                <span class="pad-module-count-badge">
                                    <span class="pad-module-count-number">${groupPads.length}</span> ${groupPads.length === 1 ? 'protocolo' : 'protocolos'}
                                </span>
                                <span class="section-toggle pad-module-toggle-btn">
                                    <span class="group-open/module:hidden">Ver protocolos</span>
                                    <span class="hidden group-open/module:inline">Ocultar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-open/module:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </summary>
                        <div class="padecimiento-grid p-3 sm:p-5 md:p-6">
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
                
                const searchTerms = `${pad.name} ${(pad.searchAliases || []).join(' ')} ${pad.description} ${pad.symptoms.join(' ')} ${pad.comboPrincipal.map(item => productos.find(p => p.id === item.id)?.name || '').join(' ')} ${pad.comboSecundario.map(item => productos.find(p => p.id === item.id)?.name || '').join(' ')}`.toLowerCase();

                html += `
                    <details id="padecimiento-${pad.id}" data-color="${pad.color}" data-search-terms="${escapeGuideAttribute(searchTerms)}" class="group padecimiento-card padecimiento-editorial bg-white rounded-2xl shadow-sm transition-all duration-300 open:shadow-lg scroll-mt-24">
                        <summary class="padecimiento-summary p-6 cursor-pointer list-none flex justify-between items-center">
                            <span class="padecimiento-editorial-kicker"><span aria-hidden="true">${guideGroup.emoji}</span> ${guideGroup.name}</span>
                            <h3 class="padecimiento-title${titleLengthClass} text-2xl font-extrabold text-gray-800 flex items-center gap-3">${pad.emoji} ${pad.name}</h3>
                            <p class="padecimiento-card-description">${pad.description}</p>
                            <span class="padecimiento-editorial-preview preview-count-${Math.min(pad.comboPrincipal.length, 4)}">
                                <span class="padecimiento-editorial-preview-title">${pad.primaryOptionsLabel || 'Opciones para valorar'}</span>
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

                html += `
                                </div>`;

                // Combo Principal
                html += `
                                <div class="padecimiento-combos">
                                    <div class="padecimiento-combo-principal">
                                        <span class="padecimiento-editorial-eyebrow">${pad.primaryOptionsLabel ? 'Elegir una opción' : 'Lo esencial'}</span>
                                        <h4>${pad.primaryOptionsLabel || 'Opciones principales para elegir'}</h4>
                                        <ul class="padecimiento-editorial-product-list">`;
                pad.comboPrincipal.forEach(item => {
                    const product = productos.find(p => p.id === item.id);
                    if (!product) return;
                    const serving = getGuideServing(item, product);
                    html += `
                                            <li>
                                                <button type="button" class="padecimiento-editorial-product-card" data-guide-preview-product="${product.id}" aria-label="Abrir ficha de ${escapeGuideAttribute(product.name)}">
                                                    <span class="padecimiento-editorial-product-left">
                                                        ${renderGuideProductImage(product)}
                                                        <span class="padecimiento-editorial-product-info">
                                                            <span class="padecimiento-editorial-product-name">${product.name}</span>
                                                            ${product.brand === 'Zennatura' ? '<span class="padecimiento-editorial-product-meta"><strong>Zennatura</strong></span>' : ''}
                                                            <span class="padecimiento-editorial-product-meta"><strong>Porción sugerida:</strong> ${serving}</span>
                                                            <span class="padecimiento-editorial-product-meta padecimiento-editorial-product-function"><strong>Función en este padecimiento:</strong> ${escapeGuideAttribute(item.rationale)}</span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </li>`;
                });
                html += `
                                        </ul>
                                    </div>`;

                // Combo Secundario
                html += `
                                    <div class="padecimiento-combo-secundario">
                                        <span class="padecimiento-editorial-eyebrow">Opciones adicionales</span>
                                        <h4>Otras opciones de la guía</h4>
                                        <ul class="padecimiento-editorial-product-list secondary">`;
                pad.comboSecundario.forEach(item => {
                    const product = productos.find(p => p.id === item.id);
                    if (!product) return;
                    const serving = getGuideServing(item, product);
                    html += `
                                            <li>
                                                <button type="button" class="padecimiento-editorial-product-card" data-guide-preview-product="${product.id}" aria-label="Abrir ficha de ${escapeGuideAttribute(product.name)}">
                                                    <span class="padecimiento-editorial-product-left">
                                                        ${renderGuideProductImage(product)}
                                                        <span class="padecimiento-editorial-product-info">
                                                            <span class="padecimiento-editorial-product-name">${product.name}</span>
                                                            ${product.brand === 'Zennatura' ? '<span class="padecimiento-editorial-product-meta"><strong>Zennatura</strong></span>' : ''}
                                                            <span class="padecimiento-editorial-product-meta"><strong>Porción sugerida:</strong> ${serving}</span>
                                                            <span class="padecimiento-editorial-product-meta padecimiento-editorial-product-function"><strong>Función en este padecimiento:</strong> ${escapeGuideAttribute(item.rationale)}</span>
                                                        </span>
                                                    </span>
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
            const matchedGuides = new Set(getSearchGuides(searchTerm).map(guide => `padecimiento-${guide.id}`));
            const activeColorButton = document.querySelector('#padColorLegend .pad-color-btn.active');
            const activeColor = searchTerm ? 'all' : (activeColorButton ? activeColorButton.dataset.colorFilter : 'all');
            const relatedGuideIds = new Set(searchTerm ? padecimientos.filter(pad =>
                [...pad.comboPrincipal, ...pad.comboSecundario].some(product => directSearchProductIds.has(product.id))
            ).map(pad => `padecimiento-${pad.id}`) : []);

            // Limpiar resaltados anteriores
            const allDescriptions = document.querySelectorAll('.padecimiento-description');
            allDescriptions.forEach(desc => {
                desc.innerHTML = desc.dataset.originalText;
            });

            const items = document.querySelectorAll('#padecimientosGuideWeb details[data-color]');
            let visibleCount = 0;

            items.forEach(item => {
                const pad = padecimientos.find(guide => `padecimiento-${guide.id}` === item.id);
                const itemColor = item.dataset.color;

                const matchesSearch = matchedGuides.size ? matchedGuides.has(item.id)
                    : searchTerm === '' || (pad && [pad.name, ...(pad.searchAliases || [])].some(value => window.manualSearch.matches(value, searchTerm))) || relatedGuideIds.has(item.id);
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
            return window.manualSearch.normalize(value);
        }

        function goToMatchingPadecimiento(searchValue, forceFirstMatch = false) {
            const term = normalizeGuideSearch(searchValue);
            if (term.length < 3) return false;

            const matches = padecimientos.filter(pad => {
                const matches = getSearchGuides(term).some(guide => guide.id === pad.id);
                const element = document.getElementById(`padecimiento-${pad.id}`);
                return matches && element && element.style.display !== 'none';
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
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
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
                                     <th class="border p-2 text-left font-semibold text-gray-700">Función en la Guía</th>
                                 </tr>
                            </thead>
                            <tbody>
                                <tr><td colspan="3" class="pt-2 font-bold text-girasol-green-800">${pad.primaryOptionsLabel || 'Opciones para valorar'}</td></tr>
                                 ${pad.comboPrincipal.map(item => {
                                     const p = productos.find(prod => prod.id === item.id);
                                     return p ? `<tr><td class="border p-2"><div class="padecimiento-pdf-product">${renderGuideProductImage(p, 'w-10 h-10')}<span>${p.name}</span></div></td><td class="border p-2">${getGuideServing(item, p)}</td><td class="border p-2">${escapeGuideAttribute(item.rationale || p.benefitSummary || '')}</td></tr>` : '';
                                 }).join('')}
                                 ${pad.comboSecundario.length > 0 ? `
                                <tr><td colspan="3" class="pt-2 font-bold text-girasol-green-800">Apoyo Adicional</td></tr>
                                 ${pad.comboSecundario.map(item => {
                                     const p = productos.find(prod => prod.id === item.id);
                                     return p ? `<tr><td class="border p-2"><div class="padecimiento-pdf-product">${renderGuideProductImage(p, 'w-10 h-10')}<span>${p.name}</span></div></td><td class="border p-2">${getGuideServing(item, p)}</td><td class="border p-2">${escapeGuideAttribute(item.rationale || p.benefitSummary || '')}</td></tr>` : '';
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
            
            const results = window.manualSearch.searchProducts(productos, padecimientos, search, filter);
            matchingSearchProductIds = new Set(searchTerm ? results.map(product => product.id) : []);
            directSearchProductIds = new Set(searchTerm ? results.filter(product => product.matchField !== 'Guía relacionada · consulta interna').map(product => product.id) : []);
            // Mostrar primero los nombres buscados y después otras coincidencias.
            results.sort((a, b) => Number(b.matchField === 'Nombre') - Number(a.matchField === 'Nombre')
                || a.name.localeCompare(b.name, 'es'));

            if (results.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400 font-medium">No encontramos ningún suplemento con esos criterios. 🧐</div>`;
                resultCount.textContent = '0 resultados';
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
                        <div class="native-card-heading flex items-center gap-4 mb-4">
                            <div class="native-card-image w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                                <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/475569?text=${encodeURIComponent(p.name)}'">
                            </div>
                            <div class="native-card-copy flex-1">
                        <h4 class="text-lg font-black text-girasol-green-900 leading-tight">${p.name}</h4>
                        <p class="native-card-presentation">${escapeGuideAttribute(p.packageContent || '')}</p>
                        <p class="text-xs font-bold uppercase tracking-wider mt-1" style="color:${catA}">${categoryIcons[p.category]?.name || p.category}</p>
                            </div>
                            <svg class="native-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
                        </div>
                        <p class="native-card-description text-sm text-gray-700 font-normal mb-3 flex-1 line-clamp-2 leading-relaxed">${p.shortDesc}</p>
                        <div class="native-card-actions mt-auto pt-2.5 border-t border-gray-100/90">
                            <div class="flex items-center justify-between gap-2">
                                <details data-card-control class="advisor-card-tip group/tip flex-1">
                                    <summary class="cursor-pointer list-none select-none inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100/80 active:bg-emerald-200/60 border border-emerald-200/90 rounded-full px-2.5 py-1 transition-all">
                                        <span aria-hidden="true">💡</span>
                                        <span class="group-open/tip:hidden">Tip de mostrador</span>
                                        <span class="hidden group-open/tip:inline">Ocultar tip</span>
                                        <svg class="w-3.5 h-3.5 text-emerald-600 transition-transform duration-200 group-open/tip:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                        </svg>
                                    </summary>
                                    <div class="advisor-card-tip-content mt-2 p-2.5 bg-amber-50/95 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed shadow-sm font-normal">
                                        <strong class="block text-amber-900 font-bold mb-1">💡 Recomendación clave:</strong>
                                        ${escapeGuideAttribute(p.choiceNote)}
                                    </div>
                                </details>
                                <label data-card-control class="gl-checkbox flex-shrink-0 self-start mt-0.5">
                                    <input type="checkbox" class="gl-checkbox__input compare-checkbox" data-id="${p.id}" ${compareList.includes(p.id) ? 'checked' : ''} onchange="toggleCompare(${p.id}, this.checked)">
                                    <span class="gl-checkbox__box" aria-hidden="true">
                                        <svg class="gl-checkbox__check" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8.25 6.35 11.5 13 4.75" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="gl-checkbox__label text-xs">Comparar</span>
                                </label>
                            </div>
                        </div>
                        ${matchBadge}
                    </div>
                `;
            }).join('');

            initRevealObserver();

            resultCount.textContent = `Mostrando ${results.length} de ${productos.length} suplementos`;
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
            if (syncProducts) selectManualTab('productos');

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
            const searchTerm = normalizeGuideSearch(rawValue);
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            clearSearchBtn.classList.toggle('hidden', searchTerm === '');

            // Si un escáner terminó de "teclear" un código de barras completo,
            // abrir la ficha del producto directamente.
            const longerBarcode = productos.some(product => String(product.code || '').startsWith(rawValue.trim())
                && String(product.code || '').length > rawValue.trim().length);
            if (!longerBarcode && procesarPosibleCodigoBarras(rawValue)) {
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
                    const headerHeight = getManualHeaderOffset();
                    const target = getSearchGuides(this.value).length
                        ? document.getElementById('padecimientosGuideWeb') : productsCatalog;
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
            document.querySelectorAll('#padColorLegend .pad-color-btn.active').forEach(b => b.classList.remove('active'));
            const allPadecimientosBtn = document.querySelector('#padColorLegend .pad-color-btn[data-color-filter="all"]');
            if (allPadecimientosBtn) {
                allPadecimientosBtn.classList.add('active');
            }

            // Actualizar la vista
            setActiveCategory('all', { syncProducts: false });
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
                                    <p class="text-sm text-gray-700 leading-relaxed mt-1">${p.shortDesc}</p>
                                </div>
                            </div>

                            <!-- BLOQUE DE BENEFICIOS (Caja de color) -->
                            <div class="bg-emerald-50/70 p-4 rounded-xl mb-4">
                                <h5 class="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2">Beneficios Clave</h5>
                                <ul class="space-y-1.5">
                                    ${(p.benefits || []).map(b => `
                                        <li class="flex items-start gap-2">
                                            <span class="text-emerald-500 mt-0.5">✔️</span>
                                            <span class="text-sm text-gray-800 leading-snug">${escapeGuideAttribute(b)}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                                ${renderProductSources(p)}
                            </div>

                            <!-- FICHA DE ESPECIFICACIONES (Lista limpia) -->
                            <div class="text-sm text-gray-800 space-y-2 mb-4">
                                <div class="flex flex-col">
                                    <span class="font-bold text-gray-500 uppercase tracking-wider text-xs">Ingredientes:</span>
                                    <span class="text-gray-700 leading-relaxed">${p.ingredients || 'No especificado.'}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-bold text-gray-500 uppercase tracking-wider text-xs">Porción y Uso:</span>
                                    <span class="text-gray-700 leading-relaxed">${p.serving || 'No especificado.'} ${p.timing ? `(${p.timing})` : ''} ${p.intakeInstructions ? `- ${p.intakeInstructions}` : ''}</span>
                                </div>
                            </div>

                            <!-- ZONA DE ALERTAS (Caja de color sutil) -->
                            <div class="mt-auto bg-red-50/60 p-4 rounded-xl text-sm space-y-2">
                                <div class="flex flex-col">
                                    <span class="font-bold text-red-700 uppercase tracking-wider text-xs">Contraindicaciones:</span>
                                    <span class="text-red-800/90 leading-relaxed">${p.contraindications || 'No especificadas.'}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-bold text-red-700 uppercase tracking-wider text-xs">Interacciones:</span>
                                    <span class="text-red-800/90 leading-relaxed">
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

            const categoryOrder = categoryOrderPdf;

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

        function getProductosRelacionadosPorGuia(pad, productId) {
            const selected = productos.find(product => product.id === productId);
            const principales = (pad.comboPrincipal || []).map(item => ({ ...item, tipo: 'Principal' }));
            const adicionales = (pad.comboSecundario || []).map(item => ({ ...item, tipo: 'Apoyo adicional' }));

            return [...principales, ...adicionales]
                .filter(item => item.id !== productId)
                .map(item => ({ ...item, producto: productos.find(product => product.id === item.id) }))
                .filter(item => item.producto)
                .map(item => ({ ...item, relationship: window.manualAdvisor.getRelationship(selected, item.producto) }));
        }

        function renderSinergiaProducto(item) {
            const product = item.producto;
            const label = { alternative: 'Alternativa a comparar', complement: 'Complemento por valorar', related: 'Otra opción de esta guía' }[item.relationship] || 'Otra opción de esta guía';
            const rationale = escapeGuideAttribute(product.choiceNote || label);
            const rawNote = (product.choiceNote || product.shortDesc || '').replace(/^[^:]+:\s*/, '');
            const shortNote = rawNote.split(/(?<=[.!?])\s+/)[0] || rawNote;
            return `
                <button type="button" onclick="openModal(${product.id})" title="${rationale}"
                    class="text-left flex items-center gap-2 rounded-xl border border-indigo-100 bg-white p-2 hover:border-indigo-300 hover:shadow-sm transition-all">
                    <span class="guide-synergy-product-photo">${renderGuideProductImage(product)}</span>
                    <span class="min-w-0 flex-1">
                        <span class="block text-xs font-bold leading-tight text-gray-800">${product.name}</span>
                        <span class="block mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">${label}</span>
                        <span class="advisor-relation-description">${escapeGuideAttribute(shortNote)}</span>
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

        function parseYieldNumber(value) {
            const raw = String(value ?? '').trim();
            if (/^\d{1,3},\d{3}$/.test(raw)) return Number(raw.replace(',', ''));
            return Number(raw.replace(',', '.'));
        }

        function getYieldAmount(text, type) {
            const units = type === 'count'
                ? 'cápsulas?|caps(?:ules?)?|softgels?|perlas?|gomitas?|gummies?|tabletas?|tablets?|capletas?|pastillas?|tabs|comprimidos|sobres?|bolsitas?|sachets?|sticks?|ampolletas?|ampollas?'
                : type === 'weight' ? 'kg|kilogramos?|gr|gramos?|g'
                    : 'ml|mililitros?|litros?|l';
            const match = String(text || '').match(new RegExp(
                '(\\d+(?:[.,]\\d+)?)(?:\\s*(?:a|o|hasta|[-–])\\s*(\\d+(?:[.,]\\d+)?))?\\s*(' + units + ')\\b', 'i'));
            if (!match) return null;
            const unit = match[3].toLowerCase();
            const factor = /^(kg|kilogramos?)$/.test(unit) ? 1000
                : /^(l|litros?)$/.test(unit) ? 1000 : 1;
            return {
                min: parseYieldNumber(match[1]) * factor,
                max: parseYieldNumber(match[2] || match[1]) * factor,
                label: match[0],
                end: match.index + match[0].length,
                index: match.index
            };
        }

        function getYieldFrequency(text) {
            const words = { una: 1, un: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6 };
            const number = '(\\d+|una|un|dos|tres|cuatro|cinco|seis)';
            const value = (word) => words[word.toLowerCase()] || Number(word);
            const range = String(text || '').match(new RegExp(
                number + '(?:\\s*(?:a|o|hasta|[-–])\\s*' + number + ')?\\s*(?:veces|tomas|porciones)\\s*(?:(?:al|por)\\s*día|\\/\\s*día|diarias?)', 'i'));
            if (range) return { min: value(range[1]), max: value(range[2] || range[1]), label: range[0] };
            const upTo = String(text || '').match(new RegExp('hasta\\s*' + number + '\\s*veces', 'i'));
            if (upTo) return { min: 1, max: value(upTo[1]), label: upTo[0] };
            const hours = String(text || '').match(/cada\s*(\d+)\s*horas/i);
            if (hours) return { min: 24 / Number(hours[1]), max: 24 / Number(hours[1]), label: hours[0] + ' durante 24 horas' };
            if (/cada tercer día/i.test(text)) return { min: 1 / 3, max: 1 / 3, label: 'cada tercer día' };
            if (/cada (?:comida|alimento)|desayuno,\s*comida y cena/i.test(text)) {
                return { min: 3, max: 3, label: '3 comidas al día' };
            }
            if (/(?:al|por)\s*día|diariamente/i.test(text)) return { min: 1, max: 1, label: '1 vez al día' };
            return null;
        }

        function getYieldReferenceText(text) {
            // Keep one population at a time: never combine an adult dose with a child's frequency.
            let reference = String(text || '');
            const adults = reference.search(/\badultos\b/i);
            if (adults >= 0) reference = reference.slice(adults);
            return reference.split(/(?:\.\s*|;\s*)(?=(?:niños|niñas|jóvenes|adultos deportistas|adultos no deportistas)\b)/i)[0];
        }

        function getProductYield(product) {
            const explicit = product.yieldInfo;
            if (Number(explicit?.durationDays) > 0) {
                return { value: formatYieldDays(Number(explicit.durationDays)), note: explicit.note || 'Calculado con el contenido y el consumo diario registrados.' };
            }
            if (Number(explicit?.servingsPerContainer) > 0 && Number(explicit?.servingsPerDay) > 0) {
                return {
                    value: formatYieldDays(Number(explicit.servingsPerContainer) / Number(explicit.servingsPerDay)),
                    note: explicit.note || 'Contenido en porciones dividido entre las porciones indicadas al día.'
                };
            }

            const serving = getYieldReferenceText(product.serving);
            const directions = getYieldReferenceText(product.intakeInstructions);
            const timing = String(product.timing || '');
            if (/tópic|uso externo|cocinar|freír|hornear/i.test(serving + ' ' + directions)) {
                return { value: 'Variable según uso', note: 'La cantidad usada en cada aplicación o preparación no está definida.' };
            }

            const source = product.packageContent || product.name || '';
            let type = 'count';
            let container = getYieldAmount(source, type);
            if (!container) { type = 'weight'; container = getYieldAmount(source, type); }
            if (!container) { type = 'volume'; container = getYieldAmount(source, type); }
            // Pounds are a weight, never litres.
            if (/(\d+(?:[.,]\d+)?)\s*lbs?\b/i.test(source)
                && (!container || source.search(/\d+(?:[.,]\d+)?\s*lbs?\b/i) < container.index)) {
                const pounds = source.match(/(\d+(?:[.,]\d+)?)\s*lbs?\b/i);
                type = 'weight';
                container = { min: parseYieldNumber(pounds[1]) * 453.59237, label: pounds[0] };
            }
            if (!container || !(container.min > 0)) {
                return { value: 'Falta contenido del envase', note: 'Se necesita la cantidad total para dividirla entre el consumo diario.' };
            }

            const servingDose = getYieldAmount(serving, type);
            const directionDose = getYieldAmount(directions, type);
            // Explicit totals override per-intake quantities, including parenthesized daily totals.
            const dailyTotal = (text) => {
                const unitText = type === 'count'
                    ? '(?:cápsulas?|caps(?:ules?)?|softgels?|perlas?|gomitas?|gummies?|tabletas?|capletas?|pastillas?|sobres?|bolsitas?|ampolletas?|ampollas?)'
                    : type === 'weight' ? '(?:kg|gr|gramos?|g)' : '(?:ml|mililitros?|litros?|l)';
                const direct = String(text || '').match(new RegExp(
                    '(\\d+(?:[.,]\\d+)?(?:\\s*(?:a|o|[-–])\\s*\\d+(?:[.,]\\d+)?)?)\\s*' + unitText + '\\s*(?:(?:al|por)\\s*día|diari[oa]s?)', 'i'));
                return direct ? getYieldAmount(direct[0], type) : null;
            };
            const servingFrequency = getYieldFrequency(serving);
            let total = dailyTotal(serving) || (!servingFrequency ? dailyTotal(directions) : null);
            let frequency = null;
            let assumed = false;
            let dose = null;
            if (!total) {
                dose = servingDose || (/gotas?/i.test(serving) && type === 'volume' ? null : directionDose);
                if (!dose) {
                    const drops = /\bgotas?\b/i.test(serving);
                    return {
                        value: drops ? 'Falta equivalencia de gotas' : 'Falta equivalencia de la porción',
                        note: drops
                            ? 'La porción está en gotas y el envase en ml; se necesita la equivalencia del proveedor para calcular la duración.'
                            : 'La porción registrada no se puede convertir a la unidad del envase.'
                    };
                }
                // A serving in ml or grams is preferable to the water used to dilute it.
                const measureRange = type === 'weight' && serving.match(/(\d+)\s*(?:a|o|[-–])\s*(\d+)\s*medidas?\s*\([^)]*cada una/i);
                if (measureRange) dose = { ...dose, min: dose.min * Number(measureRange[1]), max: dose.max * Number(measureRange[2]) };
                const directionFrequency = getYieldFrequency(directions);
                frequency = servingFrequency && servingFrequency.label !== '1 vez al día'
                    ? servingFrequency : directionFrequency || servingFrequency || getYieldFrequency(timing);
                if (/\bhasta\s+\d+\s*veces/i.test(serving + ' ' + directions) && frequency) {
                    frequency.min = 1;
                    frequency.label = '1 a ' + frequency.max + ' veces al día';
                }
                if (!frequency && /por la noche|antes de acostarse/i.test(serving + ' ' + directions + ' ' + timing)) {
                    frequency = { min: 1, max: 1, label: '1 toma por noche' };
                }
                assumed = !frequency;
                frequency ||= { min: 1, max: 1, label: '1 porción al día' };
                total = { min: dose.min * frequency.min, max: dose.max * frequency.max, label: dose.label };
            }
            if (!(total.min > 0) || !(total.max > 0)) {
                return { value: 'Falta consumo diario', note: 'Se necesita la cantidad que se consume al día para calcular la duración.' };
            }
            const minDays = container.min / total.max;
            const maxDays = container.min / total.min;
            const number = (value) => Number(value.toFixed(1)).toLocaleString('es-MX', { maximumFractionDigits: 1 });
            let unit = type === 'count' ? container.label.replace(/^\d+(?:[.,]\d+)?\s*/, '') : type === 'weight' ? 'g' : 'ml';
            if (type === 'count' && total.min === 1 && total.max === 1) unit = unit.replace(/s$/, '');
            const dailyLabel = total.min === total.max ? number(total.min) : number(total.min) + ' a ' + number(total.max);
            const population = (serving.match(/^([^:]+):/) || directions.match(/^([^:]+):/))?.[1];
            const populationNote = population && /adultos|niños|niñas|jóvenes/i.test(population)
                ? ' Referencia: ' + population + '.' : '';
            return {
                value: Math.abs(maxDays - minDays) < 0.001
                    ? formatYieldDays(minDays)
                    : number(minDays) + ' a ' + number(maxDays) + ' días',
                note: container.label + ' ÷ ' + dailyLabel + ' ' + unit + ' al día.'
                    + (frequency && dose ? ' Porción: ' + dose.label + '; ' + frequency.label + '.' : '')
                    + populationNote
                    + (assumed ? ' Estimado a 1 porción diaria; la frecuencia no está indicada.' : '')
            };
        }

        function formatYieldDays(days) {
            const number = (value) => Number(value.toFixed(1)).toLocaleString('es-MX', { maximumFractionDigits: 1 });
            const dayLabel = number(days);
            if (days < 30) return dayLabel + (days === 1 ? ' día' : ' días');
            const months = days / 30;
            return dayLabel + ' días (' + number(months) + (months === 1 ? ' mes' : ' meses') + ')';
        }

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
            document.getElementById('modalChoiceNote').textContent = p.choiceNote;
            document.getElementById('modalIngredients').textContent = p.ingredients || 'No especificado';
            document.getElementById('modalServing').textContent = p.serving || 'No especificado';
            document.getElementById('modalPackageContent').textContent = p.packageContent || 'No especificado';
            const productYield = getProductYield(p);
            document.getElementById('modalYield').textContent = productYield.value;
            document.getElementById('modalYieldNote').textContent = productYield.note;

            const nutritionWrap = document.getElementById('modalNutritionWrap');
            const nutritionFacts = p.nutritionFacts;
            const nutritionBody = document.getElementById('modalNutritionBody');
            nutritionBody.replaceChildren();
            if (nutritionFacts) {
                document.getElementById('modalNutritionServing').textContent = `Tamaño de la porción: ${nutritionFacts.servingSize || 'No especificado'} · Porciones por envase: ${nutritionFacts.servingsPerContainer || 'No especificado'}`;
                (nutritionFacts.rows || []).forEach((fact) => {
                    const row = document.createElement('tr');
                    [fact.nutrient, fact.perServing, fact.per100g].forEach((value) => {
                        const cell = document.createElement('td');
                        cell.textContent = value || '—';
                        row.appendChild(cell);
                    });
                    nutritionBody.appendChild(row);
                });
                const nutritionNote = document.getElementById('modalNutritionNote');
                nutritionNote.textContent = nutritionFacts.note || '';
                nutritionNote.hidden = !nutritionFacts.note;
                nutritionWrap.classList.remove('hidden');
            } else {
                nutritionWrap.classList.add('hidden');
            }

            // Nuevos campos
            document.getElementById('modalTiming').textContent = p.timing || 'Según lo indicado en la porción sugerida.';
            const intakeInstructions = (p.intakeInstructions || '').trim();
            document.getElementById('modalIntakeInstructions').textContent = intakeInstructions;
            document.getElementById('modalIntakeGuide').hidden = !intakeInstructions;
            document.getElementById('modalFoodInter').textContent = p.foodInteractions || 'La ficha no indica precauciones específicas con alimentos.';

            const benefitsList = document.getElementById('modalBenefits');
            const benefitSummary = document.getElementById('modalBenefitSummary');
            benefitSummary.textContent = p.benefitSummary ? `Para recordarlo: ${p.benefitSummary}` : '';
            benefitSummary.hidden = !p.benefitSummary;
            benefitsList.innerHTML = p.benefits ? p.benefits.map(b => `<li>${escapeGuideAttribute(b)}</li>`).join('') : '<li>No especificado</li>';

            const benefitSources = document.getElementById('modalBenefitSources');
            const sourceLinks = renderProductSources(p);
            benefitSources.hidden = !sourceLinks;
            benefitSources.innerHTML = sourceLinks;

            document.getElementById('modalContra').textContent = p.contraindications || 'No especificado';
            document.getElementById('modalInter').textContent = p.interactions || 'La ficha no detalla combinaciones con medicamentos. Si el cliente toma alguno, consultar con su médico o farmacéutico antes de recomendarlo.';

            // Guías de padecimiento relacionadas (para el asesor en punto de venta)
            const padWrap = document.getElementById('modalPadecimientosWrap');
            const padContainer = document.getElementById('modalPadecimientos');
            const relacionados = getPadecimientosRelacionados(p.id);
            const alternatives = p.alternativeProductIds.map(id => productos.find(product => product.id === id)).filter(Boolean);
            const possibleComplements = p.complementaryProductIds
                .filter(id => !p.alternativeProductIds.includes(id))
                .map(id => productos.find(product => product.id === id)).filter(Boolean);
            document.getElementById('modalProductAlternatives').innerHTML = alternatives.length ? `
                <details class="advisor-alternatives">
                    <summary>Alternativas para comparar (${alternatives.length})</summary>
                    <p>${escapeGuideAttribute(p.comparisonTip)} Son opciones distintas, no equivalentes en dosis ni una indicación para tomarlas juntas.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${alternatives.map(producto => renderSinergiaProducto({ producto, relationship: 'alternative' })).join('')}</div>
                </details>` : '';
            document.getElementById('modalProductComplements').innerHTML = possibleComplements.length ? `
                <details class="advisor-alternatives">
                    <summary>Complementos posibles (${possibleComplements.length})</summary>
                    <p>Aportan algo distinto. Valorar si se necesita ese aporte y revisar porciones, ingredientes repetidos e interacciones antes de combinar; no significa que la pareja tenga un efecto superior demostrado.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${possibleComplements.map(producto => renderSinergiaProducto({ producto, relationship: 'complement' })).join('')}</div>
                </details>` : '';
            if (relacionados.length > 0 || alternatives.length > 0 || possibleComplements.length > 0) {
                padContainer.innerHTML = relacionados.map((pad, idx) => {
                    const related = getProductosRelacionadosPorGuia(pad, p.id);
                    const complements = related.filter(item => item.relationship === 'complement');
                    const others = related.filter(item => item.relationship === 'related');
                    const renderGroup = (title, items) => items.length ? `<h5 class="advisor-relation-title text-xs font-bold uppercase tracking-wider text-indigo-900 mt-2 mb-1.5">${title} (${items.length})</h5><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${items.map(renderSinergiaProducto).join('')}</div>` : '';
                    const selectedRole = (pad.comboPrincipal || []).some(item => item.id === p.id) ? 'Opción de la guía' : 'Opción adicional';
                    const isOpen = relacionados.length === 1 || idx === 0;
                    return `
                        <details class="advisor-guide-accordion advisor-alternatives rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3 mb-2" ${isOpen ? 'open' : ''}>
                            <summary class="cursor-pointer flex flex-wrap items-center justify-between gap-2 select-none">
                                <span class="text-sm font-bold text-indigo-800 flex items-center gap-1.5">
                                    <span>${pad.emoji || '🎯'}</span><span>${pad.name}</span>
                                    <span class="text-xs font-normal text-indigo-600/80">(${related.length} opciones)</span>
                                </span>
                                <span class="rounded-full bg-white border border-indigo-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-600">${selectedRole}</span>
                            </summary>
                            <div class="mt-2.5 pt-2 border-t border-indigo-100/70">
                                <div class="flex items-center justify-between gap-2 mb-2">
                                    <span class="text-[11px] text-gray-500">Guía de apoyo nutricional</span>
                                    <button type="button" onclick="closeModalFn(); document.getElementById('padecimientosGuideWeb').scrollIntoView({behavior:'smooth'}); setTimeout(() => scrollToPadecimiento('${pad.id}'), 400);"
                                        class="text-[11px] font-semibold text-indigo-700 hover:underline inline-flex items-center gap-1">
                                        Ver protocolo completo ↗
                                    </button>
                                </div>
                                ${renderGroup('Complementos posibles', complements)}
                                ${renderGroup('Otras opciones de la guía', others)}
                                ${!complements.length && !others.length ? '<p class="advisor-guide-context text-xs text-gray-500 italic mt-1">Las opciones similares están en «Alternativas para comparar».</p>' : ''}
                            </div>
                        </details>`;
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
                    kicker: 'Indicaciones',
                    title: 'Modo de consumo',
                    rows: [
                        { label: 'Horario', compact: true, get: (product) => escapeGuideAttribute(product.timing || '-') },
                        { label: 'Modo de uso', get: (product) => escapeGuideAttribute(product.intakeInstructions || '-') }
                    ]
                },
                {
                    kicker: 'Para elegir',
                    title: 'Fórmula y beneficios',
                    rows: [
                        { label: 'Qué aporta', get: (product) => product.shortDesc || '-' },
                        { label: 'Beneficios clave', get: (product) => {
                            const benefits = product.benefits?.length
                                ? `<ul class="compare-benefits">${product.benefits.map((benefit) => `<li>${escapeGuideAttribute(benefit)}</li>`).join('')}</ul>`
                                : '';
                            return benefits + renderProductSources(product) || '-';
                        } },
                        { label: 'Ingredientes', get: (product) => product.ingredients || '-' },
                        { label: 'Lo que lo distingue', get: (product) => escapeGuideAttribute(product.choiceNote || '-') }
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

            let html = `<div class="compare-matrix" data-count="${items.length}" style="--compare-count:${items.length}">`;
            html += '<div class="compare-summary" role="group" aria-label="Resumen de productos">';
            items.forEach((product) => {
                const categoryInfo = categoryIcons[product.category] || { emoji: '🌿', name: product.category || 'Producto' };
                const { value, note } = getProductYield(product);
                html += `<article class="compare-product-head" data-category="${escapeGuideAttribute(product.category)}">
                    <span class="compare-product-category"><span aria-hidden="true">${categoryInfo.emoji}</span>${categoryInfo.name}</span>
                    <span class="compare-product-image"><img src="${escapeGuideAttribute(product.image)}" alt="" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/475569?text=IMG';"></span>
                    <h4>${escapeGuideAttribute(product.name)}</h4>
                    <div class="compare-product-summary">
                        <dl>
                            <div class="compare-yield">
                                <dt>Rendimiento estimado</dt>
                                <dd class="compare-yield-value">${escapeGuideAttribute(value)}</dd>
                            </div>
                            <div><dt>Envase</dt><dd>${escapeGuideAttribute(product.packageContent || '—')}</dd></div>
                            <div><dt>Porción</dt><dd>${escapeGuideAttribute(product.serving || '—')}</dd></div>
                        </dl>
                        <small class="compare-yield-note">${escapeGuideAttribute(note)}</small>
                    </div>
                </article>`;
            });
            html += '</div>';
            html += `<div class="compare-products-row" aria-hidden="true">
                <div class="compare-products-label">${items.length} productos</div>
                ${items.map((product) => `<span class="compare-sticky-name">${escapeGuideAttribute(product.name)}</span>`).join('')}
            </div>`;

            sections.forEach((section) => {
                html += `<section class="compare-section">
                    <header class="compare-section-heading"><span>${section.kicker}</span><h4>${section.title}</h4></header>`;
                section.rows.forEach((row) => {
                    html += `<div class="compare-row${row.compact ? ' compare-row-compact' : ''}"><h5 class="compare-row-label">${row.label}</h5>`;
                    items.forEach((product) => {
                        const value = row.get(product);
                        const emptyClass = value === '-' ? ' is-empty' : '';
                        html += `<div class="compare-value${emptyClass}">
                            <span class="compare-mobile-product">${escapeGuideAttribute(product.name)}</span>
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

        const themeToggle = document.getElementById('themeToggle');
        function updateThemeToggle(isDark) {
            document.documentElement.classList.toggle('dark-mode', isDark);
            document.body.classList.toggle('dark-mode', isDark);
            themeToggle?.setAttribute('aria-pressed', String(isDark));
            themeToggle?.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
            themeToggle?.setAttribute('title', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        }
        updateThemeToggle(document.documentElement.classList.contains('dark-mode'));
        themeToggle?.addEventListener('click', () => {
            const isDark = !document.documentElement.classList.contains('dark-mode');
            updateThemeToggle(isDark);
            try { localStorage.setItem('manual-theme', isDark ? 'dark' : 'light'); } catch (_) { /* El tema queda activo durante esta visita. */ }
        });

        // Selector de tamaño de fuente para asesores (A / A+ / A++)
        const fontScaleOpts = document.querySelectorAll('.font-size-opt');
        function applyFontScale(scale) {
            document.documentElement.classList.remove('text-size-lg', 'text-size-xl');
            if (scale === 'lg') document.documentElement.classList.add('text-size-lg');
            else if (scale === 'xl') document.documentElement.classList.add('text-size-xl');
            fontScaleOpts.forEach(btn => btn.classList.toggle('active', btn.dataset.scale === scale));
            try { localStorage.setItem('manual-font-scale', scale); } catch (_) { /* Soporte en navegación restringida */ }
        }
        let currentScale = 'normal';
        try { currentScale = localStorage.getItem('manual-font-scale') || 'normal'; } catch (_) {}
        applyFontScale(currentScale);
        fontScaleOpts.forEach(btn => {
            btn.addEventListener('click', () => applyFontScale(btn.dataset.scale));
        });

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
