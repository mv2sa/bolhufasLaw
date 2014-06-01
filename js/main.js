// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


var email1 = 'mailto:natalia@',
	email2 = 'santannalaw.com';
$(document).ready(function() {
	$('#h-mobileButton').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
	});
	$('.email').attr('href', email1 + email2);
	$('#globalBackToTop a').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.backToTop();
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
		var element = $('#h-mainMenu');
		if(Modernizr.csstransitions === false) {
			if(element.hasClass('active')) {
				element.removeClass('active');
				element.slideUp();
			} else {
				element.addClass('active');
				element.slideDown();
			}
		} else {
			if(element.hasClass('active')) {
				element.removeClass('active');
			} else {
				element.addClass('active');
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
		$("body,html").animate({
		      scrollTop: 0
		 },500, "swing");
	}
};