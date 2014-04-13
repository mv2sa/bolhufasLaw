$(document).ready(function() {
	$('#h-mobileButton').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
	});

	$('#globalBackToTop a').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.backToTop();
	});

	$('#cu-mapParking').click(function(event) {
		event.preventDefault();
		var map = $('#cu-map');
		if(map.hasClass('cu-normalMap')) {
			map.replaceWith('<iframe id="cu-map" class="cu-parkingMap" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD0gaXs9dAemZB7wXh-QWblUhK1tleHb0g&q=parking+near+420+3rd+street+suite+200,Oakland,CA,USA&zoom=15&center=37.796571,-122.275254"></iframe>');
			$('#cu-mapParking').text('Back to normal view?');
		} else {
			map.replaceWith('<iframe id="cu-map" class="cu-normalMap" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD0gaXs9dAemZB7wXh-QWblUhK1tleHb0g&q=420+3rd+street+suite+200,Oakland,CA,USA&zoom=11"></iframe>');
			$('#cu-mapParking').text('Looking for parking?');
		}
	});

	GLOBALCONTROLS.setPageWidth();

	$(window).resize(function(){
		GLOBALCONTROLS.setPageWidth();
	});

	$(window).scroll(function() {
		GLOBALCONTROLS.getPageScroll();
	});
	
});

var GLOBALCONTROLS = {
	pageWidth : window.innerWidth || document.documentElement.clientWidth,
	pageScroll : 0,
	isDesktop : false,
	mobileScrollUp : false,
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
			if (GLOBALCONTROLS.mobileScrollUp === true) {
				GLOBALCONTROLS.mobileToTop(0);
			}
		} else {
			GLOBALCONTROLS.isDesktop = false;
		}
		if (tempHolder !== GLOBALCONTROLS.isDesktop && GLOBALCONTROLS.isDesktop === true) {
			$('.JQueryClear').attr('style', ' ').removeClass('active');
		}
	},
	getPageScroll : function() {
	    var scrollTop = 0;
	    if (typeof(window.pageYOffset) === 'number') {
	        scrollTop = window.pageYOffset;
	        if ((scrollTop > 50 && GLOBALCONTROLS.pageScroll > scrollTop) && 
	        (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === false)) {
	        	GLOBALCONTROLS.mobileToTop(1);
	        } else if ((scrollTop > 50 && GLOBALCONTROLS.pageScroll < scrollTop) && 
	        (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === true)) {
	        	GLOBALCONTROLS.mobileToTop(0);
	        } else if (scrollTop <= 50 && (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === true)) {
	        	GLOBALCONTROLS.mobileToTop(0);
	        }
	    }
	    $('#globalBackToTop').css('top', scrollTop + 5);
	    GLOBALCONTROLS.pageScroll = scrollTop;
	},
	mobileToTop : function (state) {
		if (state === 1) {
			$('#globalBackToTop').fadeIn();
			GLOBALCONTROLS.mobileScrollUp = true;
		} else if (state === 0) {
			$('#globalBackToTop').fadeOut();
			GLOBALCONTROLS.mobileScrollUp = false;
		}
	},
	backToTop : function() {
		$("html, body").animate({
		      scrollTop: 0
		 },500, "swing");
	}
};