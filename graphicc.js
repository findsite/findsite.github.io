/*

How does it work:

the program gets a formula wich had been input by user, then by loop
it replace all 'x' on variable 'i' from loop, and with function 'decide'
from 'calculator.js' gets an value of 'y' (value 'x' = i)

F.e.:
y = 2x + 3

the program split it like:
2 * x + 3

then first it solve:

i = -3
2 * -3 + 3 = -3
we get a dots (-3; -3)

i = -2
2 * -2 + 3 = -1
we get a dots (-2; -1)

i = -1
2 * - 1 + 3 = 1
we get a dots (-1; 1)

...


function 'drawDot' draw a dots using a width and height of screen


*/




function build(v) {
	if($('#svg')) $('#svg').remove();

	let bgSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	$(bgSvg).innerWidth(window.innerWidth);
	$(bgSvg).innerHeight(window.innerHeight);
	bgSvg.id = 'svg';
	
	linesCount = 40;

	countX = Math.floor(linesCount);
	countY = Math.floor(countX * (window.innerHeight / window.innerWidth))
	if(countY % 2 != 0) countY++;

	drawBgField(countX, countY);

	function drawBgField(countOfX, countOfY) {
		for(let i = 0; i < countOfX; i++) {
			let nLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			$(nLine).attr('x1', (window.innerWidth / countOfX * i));
			$(nLine).attr('y1', 0);
			$(nLine).attr('x2', (window.innerWidth / countOfX * i));
			$(nLine).attr('y2', window.innerHeight);
			$(nLine).attr('stroke', i == countOfX / 2 ? 'black' : 'gainsboro');
			$(nLine).attr('stroke-width', i == countOfX / 2 ? '1px' : '.5px');
			$(bgSvg).append(nLine);
		}
		for(let i = 0; i < countOfY; i++) {
			let nLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			$(nLine).attr('x1', 0);
			$(nLine).attr('y1', window.innerHeight / countOfY * i);
			$(nLine).attr('x2', window.innerWidth);
			$(nLine).attr('y2', window.innerHeight / countOfY * i);
			$(nLine).attr('stroke', i == countOfY / 2 ? 'black' : 'gainsboro');
			$(nLine).attr('stroke-width', i == countOfY / 2 ? '1px' : '.5px');
			$(bgSvg).append(nLine);
		}
	}


	function drawDot(x, y, dotRadius) {
		let newDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		$(newDot).attr('cx', parseFloat(window.innerWidth / 2 + (window.innerWidth / countX * x)));
		$(newDot).attr('cy', parseFloat(window.innerHeight / 2 + (window.innerHeight / countY * y * -1)));
		$(newDot).attr('r', dotRadius);
		$(newDot).attr('fill', 'black');

		$(bgSvg).append(newDot);
	}

	function drawGraphic() {
		let x, y;
		for(let i = -20.0; i < 20.0; i) {
			x = Math.round(i * 100) / 100;
			y = decide(v, x);
			console.log('me', x, y);
			drawDot(x, y, (i == 0.0 || (Math.round(x * 1000) / 1000) == 0.0 ? 3 : 1.5));

			i += 0.01;

			if(x > $('#svg').innerWidth() || y > $('#svg').innerHeight()) break;
		}
	}

	drawGraphic();

	$('.graphic').append(bgSvg);

}
