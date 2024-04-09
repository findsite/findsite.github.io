let lc = localStorage;
let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let date = new Date();
let dateWeek = date.getDay();
dateWeek = (dateWeek - 1 < 0 ? 6 : dateWeek - 1);

function createDivs(isActive, t) {
	let newTask = document.createElement('div');
	newTask.className = isActive;
	let newTaskTime = document.createElement('div');
	newTaskTime.className = 'task__time';
	let newTaskTimeP = document.createElement('p');
	if (t != '') {
		newTaskTimeP.innerText = t[0];
	}
	else {
		newTaskTimeP.innerText = '00:00';
	}
	newTaskTime.appendChild(newTaskTimeP);
	let newTaskTask = document.createElement('div');
	newTaskTask.className = 'task__task';
	let newTaskTaskP = document.createElement('p');
	if (t != '') {
		newTaskTaskP.innerText = t[1];
	}
	else {
		newTaskTaskP.innerText = 'Here will be your task';
	}
	newTaskTask.append(newTaskTaskP);

	newTask.appendChild(newTaskTime);
	newTask.appendChild(newTaskTask);

	return newTask;
}
function createInputs(t) {
	let newTask = document.createElement('div');
	newTask.className = 'task';
	let newTaskTime = document.createElement('input');
	newTaskTime.className = 'task__time';
	if (t != '') {
		newTaskTime.setAttribute('value', t[0]);
	}
	else {
		newTaskTime.setAttribute('placeholder', 'Time');
	}
	let newTaskTask = document.createElement('input');
	newTaskTask.className = 'task__task';
	if (t != '') {
		newTaskTask.setAttribute('value', t[1]);
	}
	else {
		newTaskTask.setAttribute('placeholder', 'Task');
	}

	newTask.append(newTaskTime);
	newTask.append(newTaskTask);

	console.log(t);

	return newTask;
}

function add_tasks(dateWeek, elementType) {
	let tasks = new Array();
	let day = days[dateWeek];
	console.log(dateWeek, day)
	let currentTasks = lc.getItem(day).split('/');
	currentTasks.forEach(function(task) {
		let t = task.split('|');

		// Checking is active current task
		tt = t[0].split(':');
		currentTaskTime = (parseInt(tt[0]) * 60 * 60) + (parseInt(tt[1]) * 60);
		date = new Date();
		let currentTime = (date.getHours() * 60 * 60) + (date.getMinutes() * 60);
		let isActive = currentTaskTime < currentTime ? 'task inactive' : 'task';

		let newTask = document.createElement
		console.log(isActive, currentTaskTime, currentTime);
		if(elementType == 'div') {
			document.getElementsByClassName('task-list')[0].appendChild(createDivs(isActive, t))
		}
		else if(elementType == 'input') {
			document.getElementsByClassName('task-list')[0].appendChild(createInputs(t))
		}
	});
}

function buildTasks() {

	// Adding an 'active' class to current day of week

	document.getElementsByClassName('day')[dateWeek].className = 'day active';



	// Checking if user uses app for the first time and add reqiurements if it is
	if (lc.getItem('mon') == undefined) {
		days.forEach(function(d) {
			lc.setItem(d, '');
		})
	}

	// Making button that links to page to edit tasks also pass parameter which contains which day exactly does user edit
	for(let i = 0; i < 7; i++) {
		document.getElementsByClassName('day')[i].addEventListener('click', function() {
			lc.setItem('editingTask', days[i]);
		})
	}

	// Adding a list of tasks to main screen
	add_tasks(dateWeek, 'div');
}

function saveTasks() {
	let savingString = '';
	let currentTime = document.getElementsByClassName('task__time');
	let currentTask = document.getElementsByClassName('task__task');
	for(let i = 0; i < currentTime.length; i++) {
		if(currentTime[i].value != '' && currentTask[i].value != '') {
			savingString += currentTime[i].value + '|' + currentTask[i].value;
			if (i + 1 != currentTime.length) {
				savingString += '/';
			}
		}
	}
	console.log(savingString[savingString.length - 1]);
	if(savingString[savingString.length - 1] == '/') {
		savingString = savingString.slice(0, -1)
	}
	lc.setItem(lc.getItem('editingTask'), savingString);
	console.log(savingString);
}
function editTasks() {
	let daysOfWeek = {
		'mon': 'Monday',
		'tue': 'Tuesday',
		'wed': 'Wednesday',
		'thu': 'Thursday',
		'fri': 'Friday',
		'sat': 'Saturday',
		'sun': 'Sunday'
	};
	document.getElementsByClassName('editing-day')[0].innerText = daysOfWeek[lc.getItem('editingTask')];
	add_tasks(days.indexOf(lc.getItem('editingTask')), 'input');

	document.getElementsByClassName('controller__save-button')[0].addEventListener('click', function() {
		saveTasks();
	});

	document.getElementsByClassName('controller__add-button')[0].addEventListener('click', function() {
		element = document.getElementsByClassName('task-list')[0];
		while(element.firstChild) {
			element.removeChild(element.firstChild);
		}
		lc.setItem(lc.getItem('editingTask'), lc.getItem(lc.getItem('editingTask')) + '/|');
		add_tasks(days.indexOf(lc.getItem('editingTask')), 'input');
		console.log(lc.getItem('editingTask'));
		saveTasks();
	})
}