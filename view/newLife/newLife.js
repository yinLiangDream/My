$(function () {
	var $container = $('#masonry');
	$container.imagesLoaded(function () {
		$container.masonry({
			itemSelector: '.box',
			gutter: 20,
			isAnimated: true
		});
		$container.on('click', '.box', function () {
			event.preventDefault();
			/* Act on the event */
			$(this).toggleClass('gigante');
			$container.masonry('layout');
		});
	});
});
