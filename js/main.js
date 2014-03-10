$(document).ready(function() {

	//bug on table calculations in chrome... rudimentary fix
	setInterval("$('body').addClass('ready')", 150);

	$('#h-mobileButton').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
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