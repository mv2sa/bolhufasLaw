$(document).ready(function() {

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

	$('#cu-emailForm').on('change', '#cu-formDrop', function(event) {
		var other = $('#cu-otherSubject');
		var selected = $(this).val();
		if(selected === 'other' && CONTACTUS.otherSubject === false) {
			CONTACTUS.otherSubject = true;
			other.fadeIn().css('display', 'block');
		} else if (selected !== 'other' && CONTACTUS.otherSubject === true) {
			CONTACTUS.otherSubject = false;
			other.fadeOut();
		}
	});

	$('#cu-reset').click(function(event) {
		event.preventDefault();
		$('#cu-emailForm')[0].reset();
	});

	$("#cu-emailForm").validate({
		debug : true,
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			subject : {
				dropDown : true
			},
			writeSubject : {
				required : {
					depends : function(element) {
						return CONTACTUS.otherSubject;
					}
				},
				minlength: 5
			},
			message : {
				required : true,
				minlength: 10
			}
		},
		messages : {
			name : {
				required : 'Hello, we think you might have forgot to tell us your name.'
			},
			email : {
				required : 'We noticed that the email address is blank, it is important for us to reach back to you.',
				email : 'Your email address seen to be invalid, could you double check that?'
			},
			subject : {
				dropDown : 'A subject for your email is very important so we can better serve you.'
			},
			writeSubject : {
				required : 'A subject for your email is very important so we can better serve you.',
				minlength : 'Your subject is very short, a longer subject will help us understand you better (minimum of 5 characters)'
			},
			message : {
				required : 'Your message seen to be missing, we would love to hear what you have to say.',
				minlength : 'Your message is very short, could you tell us more? (minimum of 10 characters)'
			}
		},
  		submitHandler: function(form) {
  			alert('here');
    		form.submit();
  		}
 	});
	
});

var CONTACTUS = {
	otherSubject : false
};

$.validator.addMethod("dropDown", function(value, element) {
	if(value !== $(element).children(":first").attr("value")) {
		return true;
	} else {
		return false;
	}
}, "Please select an option from the drop down");