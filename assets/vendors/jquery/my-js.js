$(document).ready(function(){
  $(window).scroll(function(){
   if ($(window).scrollTop() > 30) {
    $("#logo").css('color', 'black');
    } else {
    $("#logo").css('color', 'white')}
    });
});

$(document).ready(function(){
  $(window).scroll(function(){
   if ($(window).scrollTop() > 30) and window.matchMedia("(max-width: 991.98px)") {
    $("#navbarSupportedContent").css('background', 'black');
    } else {
    $("#navbarSupportedContent").css('color', 'white')}
    });
});


$(document).ready(function(){
  $(window).scroll(function(){
   if ($(window).scrollTop() > 30) {
    $("#logo").css('color', 'black');
    } else {
    $("#logo").css('color', 'white')}
    });
});

function screen() {
  var small_screen = window.matchMedia("(max-height:400px) and (max-width: 150px)");
  var small_med_screen = window.matchMedia("(max-height:500px) and (max-width: 250px)");
  var med_screen = window.matchMedia("(max-height:450px) and (max-width:400px)");
  var med_large_screen = window.matchMedia("(max-height:550px) and (max-width:500px)");
  var large_screen = window.matchMedia("(min-height:600px) and (min-width:600px)");

  if (small_screen.matches) {
    $("#index-container").css("top", "20vh");
  } else if (small_med_screen.matches) {
    $("#index-container").css("top", "30vh");
  } else if (med_screen.matches) {
    $("#index-container").css("top", "40vh");
  } else if (med_large_screen.matches) {
    $("#index-container").css("top", "60vh");
  } else if (large_screen.matches) {
    $("#index-container").css("top", "70vh");
  }
}

$(window).resize(screen); // Add event listener
screen(); // Call function on page load


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
