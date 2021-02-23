let storage = window.localStorage;

let timetable = [
	"Литература",
	"Физкультура",
	"Украинская литература",
	"Всемирная история",
	"Физика",
	"Алгебра",
	"Искусство",

	"Французский язык",
	"Французский язык",
	"Геометрия",
	"Русский язык",
	"Биология",
	"Информатика",
	"Украинский язык",

	"История украины",
	"Физика",
	"Английский язык",
	"Химия",
	"Французский язык",
	"История украины",
	"Труд",

	"Алгебра",
	"География",
	"Французский язык",
	"Французский язык",
	"Русский язык",
	"Литература",
	"Украинская литература",

	"Химия",
	"Физика",
	"Английский язык",
	"Геометрия",
	"Биология",
	"Украинский язык",
	"Физкультура",
];
let days = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница"
];


let lesson = 0;
for(let i = 0; i < 5; i++) {

	let nTr = document.createElement('tr');
	nTr.id = 'day-' + i;
	nTr.className = 'day-week';

	nP = document.createElement('p');
	nP.innerHTML = days[i];
	nP.className = 'header';
	if(i == 0) {
		nP.style = 'border-radius: 25px 25px 0 0';
	}
	
	document.getElementById("lessons").appendChild(nTr);
	document.getElementById(nTr.id).appendChild(nP);

	for(let j = 0; j < 7; j++) {

		let nTd = document.createElement('td');
		nTd.id = 'td-' + lesson;

		let nInp = document.createElement('input');
		nInp.placeholder = timetable[lesson];
		nInp.value = storage.getItem(lesson) ? storage.getItem(lesson) : "";
		nInp.id = 'lesson-' + lesson;

		document.getElementById(nTr.id).appendChild(nTd);
		document.getElementById(nTd.id).appendChild(nInp);

		lesson++;

	}

}

function update() {
	for(let i in timetable) {
		storage.setItem(i, document.getElementById('lesson-' + i).value);

		if(document.getElementById('lesson-' + i).value != '' && !document.getElementById('info-' + i)) {

			let nDone = document.createElement('div');
			nDone.id = 'is-done-' + i;
			nDone.className = 'is-done';
			nDone.style = 'background-color: #' + (storage.getItem('is-done-' + i) == 'true' ? '0f0' : 'f00');
			nDone.onclick = function() {nDone.style = 'background-color: #0f0'; storage.setItem('is-done-' + i, 'true') };

			let nInfo = document.createElement('div');
			nInfo.id = 'info-' + i;
			nInfo.className = 'lesson-info';
			nInfo.onclick = function() { alert(timetable[i]) };

			document.getElementById('td-' + i).appendChild(nDone);
			document.getElementById('td-' + i).appendChild(nInfo);

		}
		else if(document.getElementById('lesson-' + i).value == '' && document.getElementById('info-' + i)) {
			document.getElementById('info-' + i).remove();
			document.getElementById('is-done-' + i).remove(); 

			storage.setItem('is-done-' + i, 'false');
		}
	}
}

setInterval(update, 1);
