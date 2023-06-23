$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__ani').each(function () {
            if (sct + $(window).innerHeight() - 100 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.notic_menu .menu_list li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.notic_menu .con_list .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.news_slide').slick({
        arrows: false,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });

    $('.main_news .arrows .left').on('click', function () {
        $('.news_slide').slick('slickPrev');
    });
    $('.main_news .arrows .right').on('click', function () {
        $('.news_slide').slick('slickNext');
    });

    $('.sns_menu .menu_list li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.sns_menu .con_list .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });

    $('.family_site .clic').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });
});