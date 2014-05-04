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
		var other = $('#cu-otherSubjectWrapper');
		var selected = $(this).val();
		if(selected === 'other' && CONTACTUS.otherSubject === false) {
			CONTACTUS.otherSubject = true;
			other.fadeIn().css('display', 'block');
		} else if (selected !== 'other' && CONTACTUS.otherSubject === true) {
			CONTACTUS.otherSubject = false;
			other.fadeOut();
		}
	});

	Recaptcha.create('6Lfk9PISAAAAAN7fgg4hoAcjuTHcD2QN0Fnmeddt', 'cu-recaptcha', {
			theme: 'clean'
		}
	);

	$('#cu-reset').click(function(event) {
		event.preventDefault();
		$('#cu-emailForm')[0].reset();
	});

	$("#cu-emailForm").validate({
		debug : true,
		errorElement : 'p',
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
			},
			recaptcha_response_field : {
				required : true
			}
		},
		messages : {
			name : {
				required : 'Hello, we think you might have forgotten to tell us your name.'
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
			},
			recaptcha_response_field : {
				required : 'Looks like you forgot to enter the captcha, we need to know you are actually human.'
			}
		},
  		submitHandler: function(form) {
  			var name, email, subject, message, recaptchaResponse, recaptchaChallenge, json;
  			name = $(form).find('#cu-formName').val();
  			email = $(form).find('#cu-formEmail').val();
  			if(CONTACTUS.otherSubject) {
  				subject = $(form).find('#cu-otherSubject').val();
  			} else {
  				subject = $(form).find('#cu-formDrop').val();
  			}
  			message = $(form).find('#cu-formMessage').val();
  			recaptchaResponse = $(form).find('#recaptcha_response_field').val();
  			recaptchaChallenge = $(form).find('#recaptcha_challenge_field').val();
  			json = {
  				'name' : name,
  				'email' : email,
  				'subject' : subject,
  				'message' : message,
  				'recaptcha_response_field' : recaptchaResponse,
  				'recaptcha_challenge_field' : recaptchaChallenge
  			};
            $.ajax({
	            type: 'post',
	            url: 'api/email.php',
	            data: json,
	            dataType: 'json',
	            success: function(msg){
	            	if(msg.code === 0) {
	            		$('#cu-serverSide').html(msg.message).css('display', 'block');
	            	} else if(msg.code === 2) {
	            		$('#cu-serverSide').html(msg.message).css('display', 'block');
	            		Recaptcha.reload();
	            	} else {
	            		$('#cu-emailForm > fieldset > .form').fadeOut(function() {
	            			$('#cu-emailForm > fieldset > .success').fadeIn();
	            		});
	            	}
		        },
		        error: function(jqXHR, textStatus, errorThrown){
		            console.log(jqXHR);
		            console.log(textStatus);
		            console.log(errorThrown);
		        }
  			});
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