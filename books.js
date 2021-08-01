let books = [
	'https://drive.google.com/file/d/1Nr_1-GGD4MX5msIm9uWb3t_3nVqueNId/preview',
]
let lessonNames = [
	'Алгебра',
]


let rowCount = -1;

for(let i = 0; i < books.length; i++) {
	if(i % 3 == 0) {
		$('#books-list').append('<ul></ul>');
		rowCount++;
	}
	let nLi = document.createElement('li')
	let nP = document.createElement('p')
	nP.innerText = lessonNames[i];
	nLi.onclick = function() {
		setBook(books[i]);
	}

	$('#books-list ul').eq(rowCount).append(nLi);
	nLi.append(nP);
}

function setBook(link) {
	$('#books-list ul').remove();
	$('#books-list').append('<iframe src="' + link + '" width="' + window.innerWidth + '" height="' + (window.innerHeight - $('header').innerHeight()) + '"></iframe>')
}