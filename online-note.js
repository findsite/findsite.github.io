$('#choose-list').css('height', window.innerHeight - $('header').innerHeight());

for(let i = 0; i < 2; i++) {
	document.getElementsByTagName('li')[i].onmouseover = function() {
		$('img').eq(i).css('animation', 'li-out .6s forwards');
		$('p').eq(i).css('animation', 'li-p-out .6s forwards');
	}
	document.getElementsByTagName('li')[i].onmouseout = function() {
		$('img').eq(i).css('animation', 'li-in .4s forwards');
		$('p').eq(i).css('animation', 'li-p-in .6s forwards');
	}
}

for(let i = 0; i < 2; i++) {
	$('#choose-list li').eq(i).animate({opacity: 1}, animateTimeMS);
}