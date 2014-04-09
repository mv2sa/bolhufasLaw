$(document).ready(function() {

	$('#h-mobileButton').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
	});

	$('#cu-mapParking').click(function(event) {

		event.preventDefault();
		var el = $('#cu-map');
		if(el.hasClass('cu-normalMap')) {
			el.replaceWith('<iframe id="cu-map" class="cu-parkingMap" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD0gaXs9dAemZB7wXh-QWblUhK1tleHb0g&q=parking+near+420+3rd+street+suite+200,Oakland,CA,USA&zoom=15&center=37.796571,-122.275254"></iframe>');
			$('#cu-mapParking').text('Back to normal view?');
		} else {
			el.replaceWith('<iframe id="cu-map" class="cu-normalMap" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD0gaXs9dAemZB7wXh-QWblUhK1tleHb0g&q=420+3rd+street+suite+200,Oakland,CA,USA&zoom=11"></iframe>');
			$('#cu-mapParking').text('Looking for parking?');
		}

	});

	$(window).resize(function(){
		GLOBALCONTROLS.setPageWidth();
	});
	
});

var GLOBALCONTROLS = {

	pageWidth : window.innerWidth || document.documentElement.clientWidth,
	isDesktop : false,
	mobileMenu : function() {
		if(Modernizr.csstransitions === false) {
			if($('#h-mainMenu').hasClass('active')) {
				$('#h-mainMenu').removeClass('active');
				$('#h-mainMenu').slideUp();
			} else {
				$('#h-mainMenu').addClass('active');
				$('#h-mainMenu').slideDown();
			}
		} else {
			if($('#h-mainMenu').hasClass('active')) {
				$('#h-mainMenu').removeClass('active');
			} else {
				$('#h-mainMenu').addClass('active');
			}
		}
	},
	setPageWidth : function() {
		var tempHolder;
		tempHolder = GLOBALCONTROLS.isDesktop;
		GLOBALCONTROLS.pageWidth = window.innerWidth || document.documentElement.clientWidth;
		if (GLOBALCONTROLS.pageWidth > 767) {
			GLOBALCONTROLS.isDesktop = true;
		} else {
			GLOBALCONTROLS.isDesktop = false;
		}
		if (tempHolder !== GLOBALCONTROLS.isDesktop && GLOBALCONTROLS.isDesktop === true) {
			$('.JQueryClear').attr('style', ' ').removeClass('active');
		}
	}

};