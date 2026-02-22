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

// Building Plan Tabs
jQuery(document).ready(function($) {
    // Обробник кліку на заголовок табу
    $('.elementor-tabs-wrapper .elementor-tab-title').on('click', function() {
        var $tabsWrapper = $(this).closest('.elementor-tabs');
        var tabIndex = $(this).attr('data-tab'); // Отримуємо номер табу (1, 2, 3...)

        // 1. Знімаємо активний клас з усіх кнопок і ставимо на натиснуту
        $tabsWrapper.find('.elementor-tab-title').removeClass('elementor-active');
        $(this).addClass('elementor-active');

        // 2. Ховаємо весь контент і показуємо той, що відповідає індексу
        $tabsWrapper.find('.elementor-tab-content').removeClass('elementor-active').hide();

        // Знаходимо контент за індексом і плавно показуємо
        $tabsWrapper.find('.elementor-tab-content[data-tab="' + tabIndex + '"]')
            .addClass('elementor-active')
            .fadeIn(400);
    });

    // Ініціалізація: показуємо перший таб при завантаженні, якщо нічого не вибрано
    if (!$('.elementor-tabs-wrapper .elementor-tab-title.elementor-active').length) {
        $('.elementor-tabs-wrapper .elementor-tab-title[data-tab="1"]').click();
    }
});

// Gallery
jQuery(document).ready(function($) {
    // Ініціалізація лайтбоксу для галереї
    $('.gallery-lightbox').magnificPopup({
        delegate: 'a', // елемент, на який клікаємо
        type: 'image',
        gallery: {
            enabled: true, // дозволяємо гортання
            navigateByImgClick: true,
            preload: [0,1],
            tCounter: '<span class="mfp-counter">%curr% з %total%</span>' // лічильник
        },
        image: {
            tError: '<a href="%url%">Зображення</a> не вдалося завантажити.',
        },
        mainClass: 'mfp-zoom-in', // анімація появи (якщо підтримується темою)
        removalDelay: 300,
        closeOnContentClick: true,
        closeBtnInside: false // кнопка закриття зовні (зазвичай хрестик зверху праворуч)
    });
});

// Rev Slider loading

jQuery(document).ready(function($) {
    var checkRevSlider = setInterval(function() {
        // Перевіряємо, чи з'явився внутрішній контейнер слайдера (це ознака ініціалізації)
        if ($('#rev_slider_3_1').hasClass('revslider-initialised') || $('.tp-revslider-mainul').length) {
            $('#rev_slider_3_1_wrapper').addClass('revslider-initialised');
            clearInterval(checkRevSlider);
        }
    }, 100); // Перевіряємо кожні 100мс
});

// Slick slider for Infra section on Main
jQuery(document).ready(function($) {
    $('.neighborhood-slick').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,        // Було 2.5 — тепер 3 цілих слайди
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom'),
        nextArrow: $('.slick-next-custom'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2    // Було 2.1 — тепер рівно 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,   // Було 1.2 — тепер 1 на весь екран
                    centerMode: false  // Переконайтеся, що вимкнено, щоб не було "обрізків"
                }
            }
        ]
    });
});

// Слайдер для розділу "Our Apartments"
jQuery(document).ready(function($) {
    $('.apartments-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Кнопки не потрібні за вашою умовою
        dots: false,
        draggable: true, // Дозволяє "свайпати" мишкою
        swipe: true,     // Дозволяє свайпати на тачскрінах
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// VIEW Location section slider
jQuery(document).ready(function($) {
    var $viewsSlider = $('.views-slick');

    $viewsSlider.slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        fade: true, // Плавне зникнення замість прокрутки
        cssEase: 'linear',
        arrows: true,
        prevArrow: $('.view-prev-btn'),
        nextArrow: $('.view-next-btn')
    });

    // Оновлення тексту в білому блоці при зміні слайда
    $viewsSlider.on('afterChange', function(event, slick, currentSlide) {
        var directions = ['East', 'West', 'North', 'South'];
        $('.view-direction-text').text(directions[currentSlide]);
    });
});