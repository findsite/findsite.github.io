$(function() {

	$('#sqr-add').click(function() {
		$('#formula').val($('#formula').val() + '²');
	});

	$('#start').click(function() { $('#formula').val() != '' ? start() : alert('Введите формулу') });


	// Language

	let lang = getLang();
	lang = lang.trehchlen;

	$('#formula').attr('placeholder', lang[0]);
	$('#start').text(lang[1]);













	function signOf(num) {
		return (num >= 0 ? ' + ' : ' - ');
	}
	function toPos(num) {
		return Math.sqrt(Math.pow(num, 2));
	}
	function tryToDivide(a, b, c = a, r = 'value') {
		let num = 0;
		for(let i = Math.max(a, b, c); i > -Math.max(a, b, c); i--) {
			if(a % i == 0 && b % i == 0 && c % i == 0 && i != 1 && i != -1) {
				num = i;
				break;
			}
		}
		return (num != 0 ? (r == 'isCan' ? true : num) : false);
	}
	function radical(num) {
		for(let i = num; i >= 0; i--) {
			if(i * i == num) {
				return i;
			}
		}

		return -1;

	}
	function radicalDecay(rad) {
		console.log(rad);
		for(let i = rad - 1; i > 1; i--) {
			if(Math.pow(radical(rad / i), 2) * i == rad) {
				return (radical(rad / i) + '√' + i);
			}
			
		}
		return -1;
	}
	function countNumbersAfterDot(num) {
		let numString = num.toString();

		numString = numString.split('');
		numString = numString.splice(numString.indexOf('.') + 1, numString.length);

		return numString.length;
	}
	function isDividible(num, div) {
		return countNumbersAfterDot(num / div) < 2 ? true : false;
	}


	function faction(nom, den) {
		return '<div class="faction"> <div class="fc">' + nom + '</div> <br/> <div>' + den + '</div> </div>';
	}



	function start() {
		!document.getElementById('solution') ? $('#container').append('<div id="solution"></div>') : false;

		let f = $('#formula').val();

		const block = $('#solution');
		let text = '';

		// Remove spaces
		f = f.split('');
		while(f.includes(' ')) {
			f.splice(f.indexOf(' '), 1);
		}
		f = f.join('');

		// Get coefficients
		let coefs = getCoefficients(f);
		if(coefs.length < 3) {
			coefs.unshift(1 * (f[0] == '-' ? -1 : 1));
		}
		if(coefs.length < 3) {
			coefs.splice(1, 0, 1 * (f[2] == '-' || f[3] == '-' ? -1 : 1));
		}
		let oldCoefs = new Array;
		oldCoefs = oldCoefs.concat(coefs)



		text += (f[0] == '-' ? '-' : '') + (Math.pow(coefs[0],2) == 1 ? '' : toPos(coefs[0])) + 'x²' + signOf(coefs[1]) + (Math.pow(coefs[1],2) == 1 ? '' : toPos(coefs[1])) + 'x' + signOf(coefs[2]) + toPos(coefs[2]) + ' = 0<br/>';

		if(Math.pow(coefs[1],2) - 4 * coefs[0] * coefs[2] >= 0) {

			if(f[0] == '-') {
				text += '<br/>' + lang[2] + '<br/>';

				coefs[0] *= -1;
				coefs[1] *= -1;
				coefs[2] *= -1;

				text += (Math.pow(coefs[0],2) == 1 ? '' : coefs[0]) + 'x²' + signOf(coefs[1]) + (Math.pow(coefs[1],2) == 1 ? '' : toPos(coefs[1])) + 'x' + signOf(coefs[2]) + toPos(coefs[2]) + ' = 0<br/>';
			}
			if(tryToDivide(coefs[0], coefs[1], coefs[2], 'isCan')) {
				let divide = tryToDivide(coefs[0], coefs[1], coefs[2], 'getValue');
				text += '<br/>' + lang[3] + ' ' + divide + ':<br/>';

				coefs[0] /= divide;
				coefs[1] /= divide;
				coefs[2] /= divide;

				text += (Math.pow(coefs[0],2) == 1 ? '' : coefs[0]) + 'x²' + signOf(coefs[1]) + (Math.pow(coefs[1],2) == 1 ? '' : toPos(coefs[1])) + 'x' + signOf(coefs[2]) + toPos(coefs[2]) + ' = 0<br/>';
			}

			let rad = {
				x1: (((coefs[1] * -1) + Math.sqrt(coefs[1] * coefs[1] - (4 * coefs[0] * coefs[2]))) / (coefs[0] * 2)),
				x2: (((coefs[1] * -1) - Math.sqrt(coefs[1] * coefs[1] - (4 * coefs[0] * coefs[2]))) / (coefs[0] * 2))
			}

			text += "<p>";
			if(coefs[0] == 1 && (rad.x1 % 1 == 0 && rad.x2 % 1 == 0)) {
				text += '<br/><br/>' + lang[4] + '<br/><br/>';
				text += 'x<sub>1</sub> + x<sub>2</sub> = ' + (coefs[1] * -1) + '<br/>';
				text += 'x<sub>1</sub> ⋅ x<sub>2</sub> = ' + coefs[2] + '<br/>';
				text += 'x<sub>1</sub> = ' + rad.x1 + '<br/>';
				text += 'x<sub>2</sub> = ' + rad.x2 + '<br/></p>';

			}
			else {
				text += '<br/><br/>' + lang[5] + '<br/><br/>';
				text += 'D = b<sup>2</sup> - 4ac = ' + Math.pow(coefs[1], 2) + signOf(-4 * coefs[0] * coefs[2]) + toPos(-4 * coefs[0] * coefs[2]) + ' = ' + (Math.pow(coefs[1],2) - (4 * coefs[0] * coefs[2])) + '<br/>';
				
				let D = (Math.pow(coefs[1],2) - (4 * coefs[0] * coefs[2]));
				text += '√D = ' + (radical(D) != -1 ? radical(D) : (radicalDecay(D) != -1 ? '√' + D + ' = ' + radicalDecay(D) : ' √' + D)) +'<br/>';
				D = (radical(D) != -1 ? radical(D) : (radicalDecay(D) != -1 ? radicalDecay(D) : '√' + D));

				text += faction('', ' x<sub> 1</sub> = ') + faction('-b + √D', '2a') + ' = ';
				text += faction((-coefs[1] + ' + ' + D), (coefs[0] * 2));
				rad.x1 = faction((-coefs[1] + ' + ' + D), (coefs[0] * 2));

				if(D[0] % 1 != 0) {
					if(D % 1 != 0) {
						if(tryToDivide(coefs[0] * 2, -coefs[1], coefs[0], 'isCan')) {
							if(coefs[0] * 2 > -coefs[1]) {
								let div = tryToDivide(coefs[0] * 2, -coefs[1]);

								text += ' = ' + faction(-coefs[1] / div + ' + ' + D, coefs[0] * 2 / div);
								rad.x1 = faction(-coefs[1] / div + ' + ' + D, coefs[0] * 2 / div);
							}
							else {
								let div = tryToDivide(-coefs[1], coefs[0] * 2);

								text += ' = ' + (-coefs[1] / div) + ' + ' + D;
								rad.x1 = (-coefs[1] / div) + ' + ' + D;
							}
						}	

					}
					else {
						let cd = -coefs[1] + D;
						text += ' = ' + faction(cd, coefs[0] * 2);
						if(toPos(cd) >= coefs[0] * 2) {
							if(tryToDivide(cd, coefs[0] * 2, cd, 'isCan')) {
								let div = tryToDivide(cd, coefs[0] * 2);

								if(coefs[0] * 2 / div == 1) {
									text += ' = ' + cd / div;
									rad.x1 = cd / div;
								}
								else {
									text += ' = ' + faction(cd / div, coefs[0] * 2 / div);
									rad.x1 = faction(cd / div, coefs[0] * 2 / div);
								}
							}
						}
						else {
							if(tryToDivide(coefs[0] * 2, cd, coefs[0] * 2, 'isCan')) {
								let div = tryToDivide(coefs[0] * 2, cd);

								text += ' = ' + faction(cd / div, coefs[0] * 2 / div);
								rad.x1 = faction(cd / div, coefs[0] * 2 / div);

								if(isDividible(cd / div, coefs[0] * 2 / div)) {
									text += ' = ' + (cd / div) / (coefs[0] * 2 / div);
									rad.x1 = (cd / div) / (coefs[0] * 2 / div);
								}
							}
						}
					}
				}
				text += '<br/>';
				text += faction('', ' x<sub> 2</sub> = ') + faction('-b - √D', '2a') + ' = ';
				text += faction((-coefs[1] + ' - ' + D), (coefs[0] * 2));
				rad.x2 = faction((-coefs[1] + ' - ' + D), (coefs[0] * 2));

				if(D[0] % 1 != 0) {
						if(D % 1 != 0) {
							if(tryToDivide(coefs[0] * 2, -coefs[1], coefs[0], 'isCan')) {
								if(coefs[0] * 2 > -coefs[1]) {
									let div = tryToDivide(coefs[0] * 2, -coefs[1]);

									text += ' = ' + faction(-coefs[1] / div + ' - ' + D, coefs[0] * 2 / div);
									rad.x2 = faction(-coefs[1] / div + ' - ' + D, coefs[0] * 2 / div);
								}
								else {
									let div = tryToDivide(-coefs[1], coefs[0] * 2);

									text += ' = ' + (-coefs[1] / div) + ' - ' + D;
									rad.x2 = (-coefs[1] / div) + ' - ' + D;
								}
							}	

						}
						else {
							let cd = -coefs[1] - D;
							text += ' = ' + faction(cd, coefs[0] * 2);
							rad.x2 = faction(cd, coefs[0] * 2);

							if(toPos(cd) >= coefs[0] * 2) {
								if(tryToDivide(cd, coefs[0] * 2, cd, 'isCan')) {
									let div = tryToDivide(cd, coefs[0] * 2);

									if(coefs[0] * 2 / div == 1) {
										text += ' = ' + cd / div;
										rad.x2 = cd / div;
									}
									else {
										text += ' = ' + faction(cd / div, coefs[0] * 2 / div);
										rad.x2 = faction(cd / div, coefs[0] * 2 / div);
									}
								}
							}
							else {
								if(tryToDivide(coefs[0] * 2, cd, coefs[0] * 2, 'isCan')) {
									let div = tryToDivide(coefs[0] * 2, cd);

									text += ' = ' + faction(cd / div, coefs[0] * 2 / div);
									rad.x2 = faction(cd / div, coefs[0] * 2 / div);

									if(isDividible(cd / div, coefs[0] * 2 / div)) {
										text += ' = ' + (cd / div) / (coefs[0] * 2 / div);
										rad.x2 = (cd / div) / (coefs[0] * 2 / div);
									}
								}
							}
						}
					}
				}

			text += "</p><br/><br/>";

			coefs = oldCoefs;

			text += lang[6] + '<br/>'
			text += (f[0] == '-' ? '-' : '') + (Math.pow(coefs[0],2) == 1 ? '' : toPos(coefs[0])) + 'x²' + signOf(coefs[1]) + (Math.pow(coefs[1],2) == 1 ? '' : toPos(coefs[1])) + 'x' + signOf(coefs[2]) + toPos(coefs[2]) + ' = ';
			text += coefs[0] + '(x' + signOf(-rad.x1) + (rad.x1  === Number(rad.x1) ? toPos(rad.x1) : rad.x1) + ')(x' + signOf(-rad.x2) + (rad.x2 === Number(rad.x2) ? toPos(rad.x2) : rad.x2) + ')'; 
		}
		else {
			text += lang[7];
		}
		

		block.html(text);
		console.log(coefs)
	}

	// Function that gets an coefficients of the formula
	function getCoefficients(f) {
		return f.match(/(-?\d+(\.\d+)?)/g).map(n => +n);
	}


// Пиздец я заебался уже
// Сука неделю на єту хуету потратил
// Это кто-то вообще читает?
// кнш сука все это будут читать всем же интересно что находится в конце джаваскирпт кода

});
