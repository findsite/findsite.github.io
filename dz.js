let storage = window.localStorage;

for(let i = 1; i <= 40; i++) {
	storage.setItem(i + 'inp', (storage.getItem(i + 'inp') == undefined ? "" : storage.getItem(i + 'inp')));
	document.getElementById(i + "-inp").value = storage.getItem(i + 'inp');
}






function save() {
	for(let i = 1; i <= 40; i++) {
		storage.setItem(i + 'inp', document.getElementById(i + "-inp").value);
	}
	console.log(document.getElementById(1 + "-inp").value);
}

setInterval(save, 100);