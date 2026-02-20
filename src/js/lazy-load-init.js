/**
 * 1. Налаштування для зовнішньої бібліотеки lazyload.min.js
 */
window.lazyLoadOptions = {
    elements_selector: "img[data-lazy-src],.rocket-lazyload",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function(element) {
        if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
            if (element.classList.contains("lazyloaded")) {
                if (typeof window.jQuery != "undefined" && jQuery.fn.fitVids) {
                    jQuery(element).parent().fitVids();
                }
            }
        }
    }
};

/**
 * 2. Ініціалізація спостерігача (Observer)
 */
const initLazyLoad = () => {
    // Ініціалізація MutationObserver для нових зображень (динамічний контент)
    window.addEventListener('LazyLoad::Initialized', function(e) {
        var lazyLoadInstance = e.detail.instance;
        if (window.MutationObserver) {
            var observer = new MutationObserver(function(mutations) {
                var updateNeeded = false;
                mutations.forEach(function(mutation) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        if (node.nodeType !== 1) continue; // пропускаємо текстові вузли
                        if (node.tagName === 'IMG' || node.tagName === 'IFRAME' || node.getElementsByClassName('rocket-lazyload').length > 0) {
                            updateNeeded = true;
                        }
                    }
                });
                if (updateNeeded) lazyLoadInstance.update();
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }, false);

    // Ініціалізація фонів Elementor (IntersectionObserver)
    const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('e-lazyloaded');
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });

    lazyloadBackgrounds.forEach((bg) => lazyloadBackgroundObserver.observe(bg));
};

/**
 * 3. Запуск після завантаження DOM
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoad);
} else {
    initLazyLoad();
}

// Додатковий тригер для специфічних подій Elementor
document.addEventListener('elementor/lazyload/observe', initLazyLoad);