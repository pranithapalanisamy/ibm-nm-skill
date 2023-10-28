

$(function () {
	'use strict';
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	$(window).on('load', function() {
		$(".preloader .spinner").fadeOut(function(){
			$('.preloader').fadeOut();
			$('body').addClass('ready');
		});
	});


	if (width > 720) {
		window.sr = ScrollReveal();
		sr.reveal('.animated');
	}

	
	if($('#home-section').length) {
		google.maps.event.addDomListener(window, 'load', initMap);
	}

});
