
setTimeout( () => { $('ul').eq(0).animate({ opacity: 1 }, animateTimeMS) }, animateTimeMS); 




let lessonNames = [
	'Математика',
	'Украинский Язык',
	'Украинская Литература',
	'Английский Язык',
	'Физика',
	'Химия',
	'Биология и Экология',
	'География',
	'Громадянська Освіта',
	'Всемирная История',
	'История Украины',
	'Искусство',
]


let rowCount = -1;

for(let i = 0; i < lessonNames.length; i++) {
	if(i % 2 == 0) {
		$('#books-list').append('<ul class="books-block"></ul>');
		rowCount++;
	}
	let nLi = document.createElement('li')
	let nImg = document.createElement('img')
	let nP = document.createElement('p')
	nImg.src = lessonNames[i] + '.png';
	nP.innerText = lessonNames[i];
	nLi.onclick = function() {
		setBook(lessonNames[i] + '.pdf');
	}

	$('#books-list ul').eq(rowCount).append(nLi);
	nLi.append(nImg);
	nLi.append(nP);
}

function setBook(link) {
	$('#books-list').css('margin', '0');
	$('#books-list ul').remove();
	$('#books-list').append('<iframe src="' + link + '" width="' + window.innerWidth + '" height="' + (window.innerHeight - $('header').innerHeight()) + '" autoplay="allow"></iframe>')
}