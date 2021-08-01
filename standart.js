let weekDays = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота'
];

let animateTimeMS = 300;

$('html').eq(0).animate({backgroundColor: "#151515"}, animateTimeMS);
$('#container').css('height', window.innerHeight);

let time = new Date();
let month = time.getMonth() + 1;

$('header span').eq(0).text(time.getDate() + '.' + (month.length > 1 ? '' : '0') + month + '.' + time.getFullYear() + ' ' + weekDays[time.getDay()]);




function slidePage(link) {
	$('html').eq(0).animate({backgroundColor: "#000"}, animateTimeMS);
	for(let i = 0; i < 2; i++) {
		$('#choose-list li').eq(i).animate({opacity: 0}, animateTimeMS);
	}


	setTimeout(() => { window.location.href = link }, animateTimeMS);
}