$(document).ready(function(){

    $('.burger').click(function(Event) {
        $(this).toggleClass('active');
        $('.header__list').toggleClass('active');
    });

    let headerH = $('.header').innerHeight();
    let headerTop = $('.header__top');
    let scrollOffset = 0;

    $(window).on('scroll', function(){

        scrollOffset = $(this).scrollTop();

        if(scrollOffset >= headerH) {
            headerTop.addClass('fixed');
        } else {
            headerTop.removeClass('fixed')
        }
    });


});

