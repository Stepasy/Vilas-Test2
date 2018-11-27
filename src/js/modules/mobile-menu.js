$(document).ready(function() {
    $(".menu").click(function() {
        $(".navbar").slideToggle(1);
        $(".fa-minus-circle").slideToggle(1);
        $(".fa-plus-circle").slideToggle(1);
    });
});