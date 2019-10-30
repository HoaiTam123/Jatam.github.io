$(function(){
	$('.ndmotkhoi').slideUp();
	// click vào h3
	$('.motkhoi h3').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi').slideUp();
		$(this).next('.ndmotkhoi').toggle();
		$(this).toggleClass('xanh');
	});
});