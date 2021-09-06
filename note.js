let timetable = [
	["Ниче, отдыхай"],

	["Украинский Язык",
	"Украинская Литература",
	"Искусство",
	"История Украины",
	"Физкультура",
	"Физика",
	"Физика"],

	["Математика",
	"Математика",
	"Украинский Язык",
	"Украинский Язык",
	"Англ / Франц",
	"География"],

	["-",
	"-",
	"-",
	"-",
	"-",
	"-",
	"-"],

	["Зарубежная Литература",
	"Физика",
	"Украинский Язык",
	"Украинская Литература",
	"Англ / Франц",
	"Англ / Франц",
	"Физкультура"],

	["Химия",
	"Громадська Освiта",
	"Громадська Освiта",
	"Англ / Франц",
	"Англ / Франц",
	"Математика",
	"География"],

	["Ниче, отдыхай"]
];

setTimeout(() => { $('#note').animate({opacity: 1}, animateTimeMS) }, animateTimeMS);

let lc = window.localStorage;

// Build the note

let tdCount = 0;
let btnCount = 0;

for(let i = 1; i < timetable.length - 1; i++) {
	let nTr = document.createElement('tr');
	let nP = document.createElement('p');
	nP.innerText = weekDays[i];
	$('table').eq(0).append(nTr);
	nTr.appendChild(nP);

	for(let j = 0; j < timetable[i].length; j++) {
		let nTd = document.createElement('td');
		let nInp = document.createElement('input');
		let nBtnIsDone = document.createElement('button');
		let nBtnInfo = document.createElement('button');
		nTd.id = 'td-' + tdCount;
		nInp.setAttribute('placeholder', timetable[i][j]);
		nInp.setAttribute('value', lc.getItem('note-value-' + tdCount) == null ? '' : lc.getItem('note-value-' + tdCount));
		nBtnIsDone.id = 'btn-' + btnCount;
		nBtnIsDone.style = "width: 12.5px; height: 12.5px; background-color: #" + (lc.getItem('note-button-' + tdCount) == '1' ? '0f0' : 'f00') + "; border: none; border-radius: 100%";
		nBtnInfo.id = 'btnInfo-' + btnCount;
		nBtnInfo.innerText = 'i';
		nBtnInfo.className = 'infoButton';

		nTr.appendChild(nTd);
		nTd.appendChild(nInp);
		nTd.appendChild(nBtnIsDone);

		tdCount++;
		btnCount++;
	}
}
let nTr = document.createElement('tr');
nTr.innerHTML= '<p></p>';
$('table').eq(0).append(nTr);

let currentTime = new Date();
let currentMonth = currentTime.getMonth() + 1;

for(let i = 0; i < 5; i++) {
	let nextTime = currentTime.getDate() - (currentTime.getDay() - weekDays.indexOf($('tr').eq(i).text()));
	$('p').eq(i).text($('tr').eq(i).text() + ' ∙ ' + (nextTime.toString().length > 1 ? nextTime : '0' + nextTime) + '.' + (currentMonth.toString().length > 1 ? currentMonth : '0' + currentMonth) + '.' + currentTime.getFullYear());
}

for(let i = 0; i < btnCount; i++) {
	//document.getElementById('btnInfo-' + i).onclick = function() {
	//	alert(timetable);
	//}
	document.getElementById('btn-' + i).onclick = function() {
			turnButton(i);
	}
}
function turnButton(buttonID) {
	lc.setItem('note-button-' + buttonID, (lc.getItem('note-button-' + buttonID) == '1' ? '0' : '1'));
}


// System of data saving

function checkValues() {
	for(let i = 0; i < tdCount; i++) {
		if(document.getElementById('td-' + i).children[0].value.length != 0) {
			lc.setItem('note-value-' + i, document.getElementById('td-' + i).children[0].value);
		}
		else lc.removeItem('note-value-' + i);
		document.getElementById('btn-' + i).style.backgroundColor = (lc.getItem('note-button-' + i) == '1' ? '#0f0' : '#f00');
		if(lc.getItem('note-button-' + i) == '0') lc.removeItem('note-button-' + i);
	}
}


setInterval(checkValues, 10);
