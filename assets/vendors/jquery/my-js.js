$document.ready(function(){
	$(window).scroll(function() {
		$(‘logo’).toggleClass(className = “scroll-logo”, state = $(this).scrollTop > 30);
	});
});
