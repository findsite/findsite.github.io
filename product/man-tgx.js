setInterval(() => {
	$('.img').css('margin-top', window.pageYOffset / 2);
});

$('.img img').css('height', window.innerHeight / 2);
$('.img').css('padding-top', $('header').innerHeight());
$('.container').css('margin-top', ($('header').innerHeight() + $('.img').innerHeight() - 125));