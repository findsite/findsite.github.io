// Initialisation massives

let ids = [
	"html",
	"header",
	"h-header",
	"d-header",
	"hr-header",
	"g-header",
	"hr-group",
	"lang"
];

// Take from localStorage previous theme (if it is)

let storage = window.localStorage;

let theme = storage.getItem('theme') == undefined ? 0 : storage.getItem('theme');
storage.setItem('theme', theme);

console.log(storage.getItem('theme'));

setTheme(theme);

window.onload = function() {
	document.getElementById(ids[4]).style = "animation: hr-header-window-onload 1s .3s forwards ease-in-out; border-color: #"  + (storage.getItem('theme') == undefined ? "4277e0" : (storage.getItem('theme') == 0 ? "4277e0" : "fff"));
	document.getElementById(ids[2]).style = "opacity: 0; animation: h-header-window-onload 1s 1.3s forwards; color: #" + (storage.getItem('theme') == undefined ? "4277e0" : (storage.getItem('theme') == 0 ? "4277e0" : "faa"));
}

// Functions that change the theme

function changeTheme(type) {
	if(type != storage.getItem('theme')) {
		let t = type == 0 ? "" : "-rev";
		storage.setItem('theme', type);

		for(let i in ids) {
			document.getElementById(ids[i]).style = "animation: " + ids[i] + t + " 1s forwards";
		}
	}
}
function setTheme(type) {
	let t = type == 0 ? "" : "-rev";

	for(let i in ids) {
			document.getElementById(ids[i]).style = "animation: " + ids[i] + t + " 0s forwards";
	}
}

// Animations for the names of the sections

function text_in(group) {
	document.getElementById("group-" + group).style = "animation: sectionIn .4s forwards";
}
function text_out(group) {
	document.getElementById("group-" + group).style = "animation: sectionOut .5s";
}


// Language
let lang = getLang();
lang = lang.index;


document.getElementById('d-header').innerHTML = lang[0];
document.getElementById('g-header').innerHTML = lang[1];
document.getElementById('group-phizika').innerHTML = lang[2];
document.getElementById('group-himia').innerHTML = lang[3];
document.getElementById('group-math').innerHTML = lang[4];

$('#lang').click(function() { window.location.href="https://findsite.github.io" });
