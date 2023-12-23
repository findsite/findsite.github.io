let button_allow = true;

function getCurrentSeconds() {
		date = new Date();
		let time = 0;
		time += date.getDate() * 24 * 60 * 60;
		time += date.getHours() * 60 * 60;
		time += date.getMinutes() * 60;
		time += date.getSeconds();
		return time;
}
function disableSmoke() {
	document.getElementsByClassName('controller')[0].className = 'controller active';
	document.getElementsByClassName('controller__last-time')[0].className = 'controller__last-time active';
	document.getElementsByClassName('controller__smoked')[0].className = 'controller__smoked active';
	button_allow = false;
}
function enableSmoke() {
	document.getElementsByClassName('controller')[0].className = 'controller';
	document.getElementsByClassName('controller__last-time')[0].className = 'controller__last-time';
	document.getElementsByClassName('controller__smoked')[0].className = 'controller__smoked';
	button_allow = true;
	localStorage.setItem('lastsmoke', '0');
}

const smoked = document.getElementsByClassName('controller__smoked')[0];
smoked.addEventListener('click', () => {
	if(button_allow) {
		disableSmoke();
		localStorage.setItem('lastsmoke', (getCurrentSeconds() + 1800));
	}
});

setInterval(() => {
	let lastsmoke = localStorage.getItem('lastsmoke');
	console.log(getCurrentSeconds(), lastsmoke)
	if(getCurrentSeconds() <= lastsmoke && lastsmoke != '0') {
		disableSmoke();
		let timeLeft = Math.round((lastsmoke - getCurrentSeconds()) / 60);
		document.getElementsByClassName('controller__timer')[0].textContent = timeLeft + ' мин.';
	}
	else {
		enableSmoke();
		document.getElementsByClassName('controller__timer')[0].textContent = 'Можно курить';
	}
}, 1000);
