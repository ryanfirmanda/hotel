//For popout to right
$('.popout-right').on('show.bs.dropdown', function () {
	$('.window-button>.icon-popout-right').removeClass('glyphicon glyphicon-align-justify');
	$('.window-button>.icon-popout-right').addClass('animated rotateIn glyphicon-remove');
	$('.dropdown-link-right').addClass('animated bounceIn');
})
$('.popout-right').on('hide.bs.dropdown', function () {
	$('.window-button>.icon-popout-right').removeClass('animated rotateIn glyphicon-remove');
	$('.dropdown-link-right').removeClass('animated bounceIn');
	$('.window-button>.icon-popout-right').addClass('animated bounceIn glyphicon-align-justify');
})

