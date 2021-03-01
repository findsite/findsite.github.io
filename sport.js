let storage = window.localStorage;


let ec = 0;

function writeOldExercises() {
	let nP = document.createElement('p');
	nP.id = 'header';
	nP.innerHTML = 'Расписание на день';

	let nHr = document.createElement('hr');

	let nDiv = document.createElement('div');
	nDiv.id = 'exercise-list';

	let nUl = document.createElement('ul');
	nUl.id = 'list';

	let nBtns = document.createElement('div');
	nBtns.id = 'btns'

	document.getElementById('container').appendChild(nP);
	document.getElementById('container').appendChild(nHr);
	document.getElementById('container').appendChild(nDiv);
	document.getElementById(nDiv.id).appendChild(nUl);
	document.getElementById(nDiv.id).appendChild(nBtns);

	let nBtn1 = document.createElement('button');
	nBtn1.className = 'exercise-btn';
	nBtn1.innerHTML = 'Добавить упражнение';
	nBtn1.onclick = function() {
		newExercise();
	}

	let nBtn2 = document.createElement('button');
	nBtn2.className = 'exercise-btn';
	nBtn2.innerHTML = 'Сохранить';
	nBtn2.onclick = function() {
		save();
	}

	let nBtn3 = document.createElement('button');
	nBtn3.className = 'exercise-btn';
	nBtn3.innerHTML = 'Начать тренировку';
	nBtn3.onclick = function() {
		start();
	}

	document.getElementById('btns').appendChild(nBtn1);
	document.getElementById('btns').appendChild(nBtn2);
	document.getElementById('btns').appendChild(nBtn3);

	if(storage.getItem('ec') > 0) {
		let n = storage.getItem('ec');
		for(let i = 0; i < n; i++) {
			newExercise();
		}
	}
}

writeOldExercises();


function newExercise() {
	let nLi = document.createElement('li');
	nLi.id = ec;


	let nInp1 = document.createElement('input');
	nInp1.id = 'dc' + ec;
	nInp1.className = 'description';
	nInp1.placeholder = 'Название упражнения';
	nInp1.value = storage.getItem('dc' + ec)

	let nInp2 = document.createElement('input');
	nInp2.id = 'ic' + ec;
	nInp2.className = 'iteration-count';
	nInp2.placeholder = 'Количество подходов';
	nInp2.value = storage.getItem('ic' + ec);
	nInp2.type = 'number';

	let nInp3 = document.createElement('input');
	nInp3.id = 'tm' + ec;
	nInp3.className = 'time';
	nInp3.placeholder = 'Время отдыха';
	nInp3.value = storage.getItem('tm' + ec);
	nInp3.type = 'number';

	let nBtn = document.createElement('button');
	nBtn.className = 'delete-btn';
	nBtn.innerHTML = 'x';
	nBtn.onclick = function() {
		ec--;
		storage.setItem('dc' + Number(nLi.id), '');
		storage.setItem('ic' + Number(nLi.id), '');
		storage.setItem('tm' + Number(nLi.id), '');

		for(let i = Number(nLi.id) + 1; i <= ec; i++) {
			document.getElementById(i).id = i - 1;

			document.getElementById('dc' + i).id = 'dc' + (i - 1);
			document.getElementById('ic' + i).id = 'ic' + (i - 1);
			document.getElementById('tm' + i).id = 'tm' + (i - 1);
		}
		document.getElementById(nLi.id).remove();

		console.log('Удаление элемента с айди - ' + nLi.id);
		console.log('Новое количество элементов - ' + storage.getItem('ec'));
	}


	document.getElementById('list').appendChild(nLi);
	document.getElementById(nLi.id).appendChild(nInp1);
	document.getElementById(nLi.id).appendChild(nInp2);
	document.getElementById(nLi.id).appendChild(nInp3);
	document.getElementById(nLi.id).appendChild(nBtn);

	ec++;
	console.log('Новое количество элементов - ' + storage.getItem('ec'));
}

function save() {
	for(let i = 0; i < ec; i++) {
		console.log('Сохранение элемента с айди - ' + i);

		storage.setItem('ec', ec);

		storage.setItem('dc' + i, document.getElementById('dc' + i).value);
		storage.setItem('ic' + i, document.getElementById('ic' + i).value);
		storage.setItem('tm' + i, document.getElementById('tm' + i).value);
	}
}











function start() {
	let canStart = true;
	for(let i = 0; i < ec; i++) {
		if(document.getElementById('dc' + i).value == '' || document.getElementById('ic' + i).value == '' || document.getElementById('tm' + i).value == '') {
			canStart = false;
		}
	}


	if(canStart) {
		document.getElementById('exercise-list').remove();		

		startExercise();
	}
	else {
		alert('Чтобы начать тренировку, Вам необходимо заполнить все поля!');
	}
}




let doneExercises = 0;
let doneApproach = 0;

function startExercise() {
	window.navigator.vibrate(500);

	if(doneApproach == storage.getItem('ic' + doneExercises)) {
		doneApproach = 0;
		doneExercises++;
	}
	if(doneExercises == ec) {
		writeOldExercises();

		document.getElementById('box').remove();
	}


	document.getElementById('box') ? document.getElementById('box').remove() : false;
	let nBox = document.createElement('div');
	nBox.id = 'box';
	document.getElementById('container').appendChild(nBox);



	document.getElementById('header').innerHTML = 'Упражнение №' + (doneExercises + 1);

	let nName = document.createElement('p');
	nName.className = 'exercise-name';
	nName.innerHTML = storage.getItem('dc' + doneExercises) + (' (подход ' + (doneApproach + 1) + '/' + storage.getItem('ic' + doneExercises) + ')');

	let nBtn = document.createElement('button');
	nBtn.className = 'exercise-btn';
	nBtn.innerHTML = 'Отдых';
	nBtn.onclick = function() { startTimer(storage.getItem('tm' + doneExercises)) };

	document.getElementById('box').appendChild(nName);
	document.getElementById('box').appendChild(nBtn);

	doneApproach++;
}

function startTimer(time) {
	document.getElementById('box').remove();
	let nBox = document.createElement('div');
	nBox.id = 'box';
	document.getElementById('container').appendChild(nBox);



	let nTime = document.createElement('p');
	nTime.className = 'timer';
	document.getElementById('box').appendChild(nTime);

	let sec = 0;
	let min = time;
	function updateTimer() {
		if(sec < 0) {
			sec = 59;
			min--;
		}

		nTime.innerHTML = min + ':' + (sec < 10 ? '0' : '') + sec;

		min == 0 && sec == 0 ? startExercise() : setTimeout(updateTimer, 1, --sec);
	}

	updateTimer(time);
}