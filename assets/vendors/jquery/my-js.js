$(document).ready(function(){
  $(window).scroll(function(){
   if ($(window).scrollTop() > 30) {
    $("#logo").css('color', 'black');
    } else {
    $("#logo").css('color', 'white')}
    });
});
