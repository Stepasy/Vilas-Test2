$(document).ready(function() {
  $(".menu").click(function() {
      $(".navbar").slideToggle();
      $(".fa-minus-circle").slideToggle(1);
      $(".fa-plus-circle").slideToggle(1);
  });
});