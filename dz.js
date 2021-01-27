let storage = window.localStorage;

let timetable = [
	"",
	"Литература",
	"Французский",
	"История украины",
	"Алгебра",
	"Химия",

	"Физкультура",
	"Французский",
	"Физика",
	"География",
	"Физика",

	"Украинская литература",
	"Геометрия",
	"Английский язык",
	"Французский язык",
	"Английский язык",

	"Всемирная история",
	"Русский язык",
	"Химия",
	"Французский",
	"Геометрия",

	"Физика",
	"Биология",
	"Французский язык",
	"Русский язык",
	"Биология",

	"Алгебра",
	"Информатика",
	"История украины",
	"Литература",
	"Украинский язык",

	"Искусство",
	"Украинский язык",
	"Труд",
	"Украинская литература",
	"Физкультура",
];

for(let i = 1; i <= 35; i++) {
	storage.setItem(i + 'inp', (storage.getItem(i + 'inp') == undefined ? "" : storage.getItem(i + 'inp')));
	document.getElementById(i + "-inp").value = storage.getItem(i + 'inp');
	document.getElementById(i + "-inp").placeholder = timetable[i];
}






function save() {
	for(let i = 1; i <= 35; i++) {
		storage.setItem(i + 'inp', document.getElementById(i + "-inp").value);

		if(document.getElementById(i + "-inp").value != "" && !document.getElementById(i + "info")) {

			let lesson = document.createElement("p");
			lesson.className = 'info';
			lesson.id = i + 'info';
			lesson.onclick = function() { alert(timetable[i]) };
			lesson.innerHTML = 'i';

			document.getElementById(i + "-td").appendChild(lesson);
		}
		else if(document.getElementById(i + "-inp").value == "" && document.getElementById(i + "info")) {
			document.getElementById(i + "info").remove();
		}
	}
}

setInterval(save, 1);
