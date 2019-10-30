$(function() {
	// hàm click: $('ten củaphan tu duoc click')
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop:$('.chapter1').offset().top}, 400)
		/* Act on the event */
	});
	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		// easing là thu vien gia tốc jquery
		$("html, body").animate({ scrollTop:$('.chapter2').offset().top}, 400,'easeInOutCubic')
		/* Act on the event */
	});
	$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop:$('.chapter3').offset().top}, 400)
		/* Act on the event */
	});
	$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop:$('.chapter4').offset().top}, 400)
		/* Act on the event */
	});
	$('.nutlentren').on('click', function(event) {
		event.preventDefault();
		console.log('len tren')
		$("html,body").animate({ scrollTop: 0}, 400)
		return false;
	});
});