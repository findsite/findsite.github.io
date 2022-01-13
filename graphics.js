$('.formula').height(window.innerHeight);

$('.go-to-graphic').css('margin-top', window.innerHeight / 1.15);


let shown = true;

function showSolve(act) {
	if(act == 'hide' && shown) {
		$('.go-to-graphic').animate({paddingBottom: (window.innerHeight / 10), marginTop: window.innerHeight / 1.15 + window.innerHeight / 10});
		$('.go-to-graphic').delay(150).animate({paddingBottom: '1.25%', marginTop: window.innerHeight / 0.9});
		setTimeout("$('.go-to-graphic').css('opacity', 0)", 1000);
		
		shown = false;
	}
	else if(act == 'show' && !shown) {
		$('.go-to-graphic').css('opacity', 1);
		$('.go-to-graphic').animate({paddingBottom: (window.innerHeight / 10), marginTop: window.innerHeight / 1.15 + window.innerHeight / 10});
		$('.go-to-graphic').delay(50).animate({paddingBottom: '1.25%', marginTop: window.innerHeight / 1.15});
		shown = true;
	}
}


document.getElementsByClassName('go-to-graphic')[0].onclick = function() {
	build($('.f').val());
	$('html, body').animate({scrollTop: window.innerHeight + 'px'}, 500);
}
