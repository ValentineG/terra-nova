/* --- Логіка кнопки "Вгору" --- */
(function($) {
    "use strict";
    $(document).ready(function() {
        // Показуємо/ховаємо кнопку при завантаженні та скролі
        var toggleScrollButton = function() {
            if ($(window).scrollTop() > 100) {
                $(".hfe-scroll-to-top-wrap").fadeIn(300);
            } else {
                $(".hfe-scroll-to-top-wrap").fadeOut(300);
            }
        };

        $(window).on('scroll', toggleScrollButton);
        toggleScrollButton(); // Запускаємо один раз при старті

        // Плавний скрол вгору
        $(".hfe-scroll-to-top-wrap").on("click", function() {
            $("html, body").animate({ scrollTop: 0 }, 300);
            return false;
        });
    });
})(jQuery);

jQuery(document).ready(function($) {
    // Обробник кліку на заголовок акордеона
    $('.elementor-accordion-item .elementor-tab-title').on('click', function() {
        var $item = $(this).closest('.elementor-accordion-item');
        var $content = $(this).next('.elementor-tab-content');

        // Якщо цей пункт вже відкритий — закриваємо його
        if ($item.hasClass('elementor-active')) {
            $item.removeClass('elementor-active');
            $content.slideUp(300);
            $(this).attr('aria-expanded', 'false');
        } else {
            // Закриваємо всі інші відкриті пункти (якщо хочете режим "один відкритий")
            $(this).closest('.elementor-accordion').find('.elementor-accordion-item').removeClass('elementor-active');
            $(this).closest('.elementor-accordion').find('.elementor-tab-content').slideUp(300);

            // Відкриваємо поточний
            $item.addClass('elementor-active');
            $content.slideDown(300);
            $(this).attr('aria-expanded', 'true');
        }
    });
});

// Tooltips for the map
jQuery(document).ready(function($) {
    // Шукаємо всі маркери на карті
    $('.opal-image-hotspots-main-icons').each(function() {
        var contentSelector = $(this).attr('data-tooltip-content');
        var $tooltipContent = $(contentSelector).clone().show(); // Беремо контент з прихованого блоку

        $(this).tooltipster({
            content: $tooltipContent,
            contentCloning: true,
            interactive: true,
            animation: 'fade',
            delay: 100,
            theme: 'tooltipster-light', // або ваша тема
            trigger: 'click', // поява по кліку
            maxWidth: 325,
            side: 'top'
        });
    });
});