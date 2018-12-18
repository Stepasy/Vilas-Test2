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
    let maxHeight = -1;
    $('.slick-slide').each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }      
    });
    $('.slick-slide').each(function() {
        if ($(this).height() < maxHeight) {
    $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
    }
});
});