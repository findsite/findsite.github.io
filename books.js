
setTimeout( () => { $('ul').eq(0).animate({ opacity: 1 }, animateTimeMS) }, animateTimeMS); 




let lessonNames = [
	'Математика',
	'Украинский Язык',
	'Украинская Литература',
	'Зарубежная Литература',
	'Английский Язык',
	'Физика',
	'Химия',
	'Биология и Экология',
	'География',
	'Громадянська Освіта',
	'Всемирная История',
	'История Украины',
	'Искусство',
];
let URLs = [
	'https://drive.google.com/file/d/1nxJHpdEI_J1PVLRf6p9qrbVqPPaU79IW/preview',
	'https://drive.google.com/file/d/1h7NnkroAb9MDzdZOUVNaysyFIFzyWp_5/preview',
	'https://drive.google.com/file/d/1CMJdbvX92LGUzHDpxJLSIv7TYo6SvuPI/preview',
	'https://drive.google.com/file/d/1TmswLGMEZ4c7Cc82DqEICmD6bBB_dZUn/preview',
	'https://drive.google.com/file/d/14bfqYLk9PkFlfpKqIO07hg9DnrT-8lZ4/preview',
	'https://drive.google.com/file/d/1dXa-WbduGXW3IZQnaNYYLuJDW-IRIUPE/preview',
	'https://drive.google.com/file/d/1yybnxtPx689f09_CTtDzL0saTND25jN_/preview',
	'https://drive.google.com/file/d/1bLbj9Mv7T-vTZTsix4uumS1XiTpyv4Yj/preview',
	'https://drive.google.com/file/d/1S3GBrjq-Usrmvw--FHerMOvWeP27uiiH/preview',
	'https://drive.google.com/file/d/1K36CggQCGF-NBX1u4hh8XaYoDnJNe_ls/preview',
	'https://drive.google.com/file/d/1UYSR4QcGSoGLs88fqlcCxD_VfJnb9RCL/preview',
	'https://drive.google.com/file/d/1_Vc5WQqCCsPJ2t_y_QRtbf45n-Q6SA6W/preview',
	'https://drive.google.com/file/d/1VBIN660RK5VFs77P-1MHt-8DNG-lAJu_/preview',
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
		setBook(URLs[i]);
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
