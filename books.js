
setTimeout( () => { $('ul').eq(0).animate({ opacity: 1 }, animateTimeMS) }, animateTimeMS); 



let books = [
	'https://drive.google.com/file/d/1Nr_1-GGD4MX5msIm9uWb3t_3nVqueNId/preview',
	'https://drive.google.com/file/d/1wwdpuhk6Ags0a8Gegr3mpG-In2SIlJSN/preview',
]
let lessonNames = [
	'Алгебра',
	'Геометрия'
]
let previewURL = [
	'https://cdn.discordapp.com/attachments/602251277879214080/872102662341017680/unknown.png',
	'https://cdn.discordapp.com/attachments/602251277879214080/872240042054131783/unknown.png'
]


let rowCount = -1;

for(let i = 0; i < books.length; i++) {
	if(i % 2 == 0) {
		$('#books-list').append('<ul class="books-block"></ul>');
		rowCount++;
	}
	let nLi = document.createElement('li')
	let nImg = document.createElement('img')
	let nP = document.createElement('p')
	nImg.src = previewURL[i];
	nP.innerText = lessonNames[i];
	nLi.onclick = function() {
		setBook(books[i]);
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