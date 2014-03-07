$(document).ready(function() {

	$('#h-mobileButton').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
	});
	
});

var GLOBALCONTROLS = {

	mobileMenu : function() {

		if(Modernizr.csstransitions === false) {
			if($('#h-mainMenu').hasClass('active')) {
				$('#h-mainMenu').removeClass('active');
				$('#h-mainMenu').slideDown();
			} else {
				$('#h-mainMenu').addClass('active');
				$('#h-mainMenu').slideUp();
			}

		} else {
			if($('#h-mainMenu').hasClass('active')) {
				$('#h-mainMenu').removeClass('active');
			} else {
				$('#h-mainMenu').addClass('active');
			}
		}

	}

};