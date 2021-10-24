$(document).ready(function() {
	var x = document.getElementById("simple_audio");
	x.play()

	try {
		$('main').ripples({
			resolution: 1500,
			dropRadius: 15, //px
			perturbance: 0.05,
			strength: 1,
		});
	}

	catch (e) {
		$('.error').show().text(e);
	}

	setInterval(function() {
		var $el = $('main');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 15;
		var strength = 0.004 + Math.random() * 0.004;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);


});
