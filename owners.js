document.getElementsByTagName('header')[0].style.height = (window.innerHeight / 8.5) + 'px';

let coef = 0.25;
if(window.innerWidth < 1080) coef = 0.1;

for(let i = 0; i < 3; i++) {
	document.getElementsByTagName('ul')[0].style = 'padding-top: ' + window.innerHeight * coef + 'px';
}