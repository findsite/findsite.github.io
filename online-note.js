$('#choose-list').css('height', window.innerHeight - $('header').innerHeight());

for(let i = 0; i < 2; i++) {
	$('#choose-list li').eq(i).animate({opacity: 1}, animateTimeMS);
}