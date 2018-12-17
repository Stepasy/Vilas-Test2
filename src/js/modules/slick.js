$(document).ready(function(){
    $('.slick').slick({
        vertical: true,
        slidesToShow: 1,
        infinite: true,
        verticalSwiping: true,
        accessibility: false,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
    });
});