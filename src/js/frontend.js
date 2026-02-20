(function($) {
    "use strict";
    $(function() {
        // Мега-меню на всю ширину екрана
        $('.main-navigation .has-mega-menu.has-stretchwidth').hover(function() {
            let $body = $('body'),
                pleft = $(this).offset().left,
                bodyleft = $body.offset().left;

            $('.mega-stretchwidth', this).css({
                left: -pleft + bodyleft,
                width: $body.width()
            });
        });

        // Мега-меню на ширину контейнера
        $('.main-navigation .has-mega-menu.has-containerwidth').hover(function() {
            let $parent = $(this).closest('.container, .elementor-container, .col-full, .header-container'),
                pleft = $parent.offset().left + parseInt($parent.css('padding-left')),
                cleft = $(this).offset().left;

            $('.mega-containerwidth', this).css({
                left: pleft - cleft,
                width: $parent.width()
            });
        });

        // Кастомна ширина підменю
        $('.main-navigation .has-mega-menu').has('ul.custom-subwidth').hover(function() {
            let pleft = parseFloat($(this).children('a').css('padding-left')),
                $oleft = $(this).offset().left + pleft,
                $itemwidth = parseInt($(this).children('.custom-subwidth').css('width')),
                $bodywidth = $('body').width();
            let $offset = $oleft + $itemwidth - $bodywidth;

            if ($offset >= 0) {
                $('.mega-menu.custom-subwidth', this).css({
                    left: -$offset + pleft
                });
            } else {
                $('.mega-menu.custom-subwidth', this).css({
                    left: pleft
                });
            }
        });
    });
})(jQuery);