for(let i = 0; i < $('.slide').length; i++) {
	$('.slide').eq(i).css('height', window.innerHeight + 2);
	document.getElementsByClassName('slide')[i].onclick = function() { 
		let currentNumber = Number($('#counter').text());
		if($('.slide').length > currentNumber) $('#counter').text(Number($('#counter').text()) + 1);

		$('html, body').animate({ scrollTop: (window.innerHeight * (i + 1) + 2 * (i + 1)) });
	}
}