$(document).ready(function(){
	$('.contentPart p').hide();
	// Content P Hide

	// Content P Toggle
	$('.contentPart #Cp').click(function(){
		$('.contentPart p').slideToggle(500);
	});

});