$('#svg').innerHeight(window.innerHeight);
$('#svg').innerWidth(window.innerWidth);

let sHeight = $('.solution').innerHeight();
$('.solution').css('margin-top', window.innerHeight - (sHeight * 2));
$('.solution').css('margin-left', window.innerWidth / 2 - ($('.solution').innerWidth() / 2));

$('.solution').css('animation', 'text-show .5s .1s forwards');

document.getElementsByClassName('solution')[0].onclick = function() {
	sHeight *= 2;
	$('.solution').animate({width: window.innerWidth - 6, height: window.innerHeight, borderRadius: 0, marginLeft: 0, marginTop: window.innerHeight - (sHeight * 2)}, 750);
	$('.solution p').css('animation', 'text-hide .1s forwards');
	$('.solution').css('padding', '0');
	$('.solution p').css('padding-left', '5%');
	$('.solution').css('padding-top', '5%');
	$('.solution').css('padding-bottom', '5%');
	$('.solution').css('font-size', '1.5em');
	setInterval(() => { 
		$('#svg').css('margin-top', window.pageYOffset / 2);
	}, 1);

	document.getElementsByClassName('solution')[0].onclick = function() {}

	setTimeout(() => {
		start();
		$('.solution').css('height', 'auto');
		$('.solution p').css('animation', 'text-show .5s forwards');
	}, 800);

}


let coefs = [];

coefs[0] = parseInt(window.localStorage.formulaA);
coefs[1] = parseInt(window.localStorage.formulaB);
coefs[2] = parseInt(window.localStorage.formulaC);

let a = (-coefs[1]) / (2 * coefs[0]);
let linesCount = Math.abs(coefs[0] * (a * a) + (coefs[1] * a) + coefs[2]) * 3;
while(linesCount < 20) linesCount *= 1.5;

let linesCountY = Math.floor(linesCount);
let linesCountX = Math.floor(linesCount * (window.innerWidth / window.innerHeight));

if(linesCountX % 2 != 0) linesCountX++;
if(linesCountY % 2 != 0) linesCountY++;


for(let i = 0; i < linesCountX; i++) {
	let nLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	$(nLine).attr('x1', ($('#svg').innerWidth() / linesCountX * i));
	$(nLine).attr('y1', 0);
	$(nLine).attr('x2', ($('#svg').innerWidth() / linesCountX * i));
	$(nLine).attr('y2', $('#svg').innerHeight());
	$(nLine).attr('stroke', i == linesCountX / 2 ? 'white' : 'gray');
	$(nLine).attr('stroke-width', i == linesCountX / 2 ? '1px' : '.5px');
	$('#svg').append(nLine);
}
for(let i = 0; i < linesCountY; i++) {
	let nLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	$(nLine).attr('x1', 0);
	$(nLine).attr('y1', $('#svg').innerHeight() / linesCountY * i);
	$(nLine).attr('x2', $('#svg').innerWidth());
	$(nLine).attr('y2', $('#svg').innerHeight() / linesCountY * i);
	$(nLine).attr('stroke', i == linesCountY / 2 ? 'white' : 'gray');
	$(nLine).attr('stroke-width', i == linesCountY / 2 ? '1px' : '.5px');
	$('#svg').append(nLine);
}


function drawDot(x, y, dotRadius) {
	x = ($('#svg').innerWidth() / 2) + ($('#svg').innerWidth() / linesCountX * x);
	y = ($('#svg').innerHeight() / 2) - ($('#svg').innerHeight() / linesCountY * y);

	let nCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	$(nCircle).attr('cx', x);
	$(nCircle).attr('cy', y);
	$(nCircle).attr('r', dotRadius);
	$(nCircle).attr('fill', 'white');

	$('#svg').append(nCircle);
}



for(let i = -2.5; i < 4.5; i += 0.01) {
	let x = i;
	let y = ((coefs[0] * (i * i)) + (i * coefs[1]) + coefs[2]);

	drawDot(x, y, 1.5);
}


function addNum(x, y, pos) {
	let tx = ($('#svg').innerWidth() / 2) + (pos == 'x' ? ($('#svg').innerWidth() / linesCountX * x) + 5 : 4);
	let ty = ($('#svg').innerHeight() / 2) - (pos == 'y' ? ($('#svg').innerHeight() / linesCountY * y) + 5 : (coefs[0] > 0 ? -17.5 : 4));

	console.log(x, y, pos);

	let nText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	$(nText).attr('x', tx);
	$(nText).attr('y', ty);
	$(nText).text(pos == 'x' ? x : y);
	$(nText).attr('fill', 'white')
	
	$('#svg').append(nText);
}

let d = Math.sqrt(coefs[1] * coefs[1] - (4 * coefs[0] * coefs[2]));

let x1 = (-coefs[1] + d) / (2 * coefs[0]);
let x2 = (-coefs[1] - d) / (2 * coefs[0]);

if(x1 % 1 == 0 || x1 % 1 == 0.5) addNum(x1, 0, 'x');
if(x2 % 1 == 0 || x2 % 2 == 0.5) addNum(x2, 0, 'x');
drawDot(x1, 0, 3.5);
drawDot(x2, 0, 3.5);


let x0 = -coefs[1] / (2 * coefs[0]);
let y0 = ((coefs[0] * (x0 * x0)) + (coefs[1] * x0) + coefs[2]);

if(x0 % 1 == 0 || x0 % 1 == 0.5) addNum(x0, 0, 'x');
if(y0 % 1 == 0 || y0 % 1 == 0.5) addNum(0, y0, 'y');