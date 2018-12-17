$(document).ready(function(){
    $('.slick').slick({
        vertical: true,
        slidesToShow: 1,
        verticalSwiping: true,
        slidesToScroll: 1,
        infinite: false,
        accessibility: false,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
    });
});