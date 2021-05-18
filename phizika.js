for(let i = 0; i < $('.slide').length; i++) {
	$('.slide').eq(i).css('height', window.innerHeight + 2);
	document.getElementsByClassName('slide')[i].onclick = function() { 
		$('#input').val(' ');
	}
}

let count = 0;

function checkValue() {
	if($('#input').val() == ' ') {
		count++;
		$('#input').val('');
		if($('.slide').length > Number($('#counter').text())) $('#counter').text(Number($('#counter').text()) + 1);
		$('html, body').animate({ scrollTop: window.innerHeight * count + 2 * count });
	}
}

setInterval(()=>{checkValue()}, 1);
