$(function() {
	// Language
	
	let lang = getLang();
	
	$('#header').text(lang[0]);
	$('#triangleName').attr('placeholder', lang[1]);
	$('#start').text(lang[2]);

	
	
	$('#start').click(function() { ($('#katet1').val() != '' && $('#katet2').val() != '' && $('#hypoten').val() != '') ? start() : alert(lang[3]) });
	
	

	function findUnknownSide(returnType) {
		if($('#katet1').val() % 1 != 0) {
			return (returnType == 'value' ? [0, 2] : 'Katet1');
		}
		if($('#katet2').val() % 1 != 0) {
			return (returnType == 'value' ? [2, 1] : 'Katet2');
		}
		if($('hypoten').val() % 1 != 0) {
			return (returnType == 'value' ? [0, 1] : 'Hypoten'); 
		}
	}

	function radical(num, t = true) {
		for(let i = num; i > 1; i--) {
			if(i * i == num) {
				return i;
			}
		}
		return t ? radicalDecay(num) : -1;
	}
	function radicalDecay(num) {
		for(let i = num - 1; i > 1; i--) {
			if(Math.pow(radical(num / i, false), 2) * i == num) {
				return radical(num / i) + '√' + i;
			}
		}
		return '√' + num;
	}

	function start() {
		
		let x = {
			value: findUnknownSide('value'),
			type: findUnknownSide('type')
		}
		//console.log(x, xType);

		let solution = $('#solution');
		let text = '';

		solution.css('opacity', '1');

		let sides = [
			$('#triangleName').val()[0] != undefined ? $('#triangleName').val()[0].toString() : 'A', // Первый катет
			$('#triangleName').val()[1] != undefined ? $('#triangleName').val()[1].toString() : 'B', // Второй катет
			$('#triangleName').val()[2] != undefined ? $('#triangleName').val()[2].toString() : 'C', // Гипотенуза
		];
		//console.log(sides);

		let s1 = document.getElementById('a') ? document.getElementById('a') : document.createElement('p');
		s1.innerHTML = sides[0];
		s1.className = 'letter';
		s1.id = 'a';

		let s2 = document.getElementById('b') ? document.getElementById('b') : document.createElement('p');
		s2.innerHTML = sides[1];
		s2.className = 'letter';
		s2.id = 'b';
		
		let s3 = document.getElementById('c') ? document.getElementById('c') : document.createElement('p');
		s3.innerHTML = sides[2];
		s3.className = 'letter';
		s3.id = 'c';

		$('#triangle').append(s1, s2, s3);

		let k = '<sup>2</sup>';

		text += sides[0] + sides[1] + k + ' = ' + sides[0] + sides[2] + k + ' + ' + sides[1] + sides[2] + k;

		if(x.type == 'Katet1') {
			text += '<br/>' + sides[x.value[0]] + sides[x.value[1]] + k + ' = ';
			text += sides[0] + sides[1] + k + ' - ' + sides[1] + sides[2] + k + ' = ' + Math.pow($('#hypoten').val(), 2) + ' - ' + Math.pow($('#katet2').val(), 2) + ' = ' + (Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet2').val(), 2)) + '<br/>';
			if(Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet2').val(), 2) <= 0) {
				text += '<br/>' + lang[4];
			}
			else {
				text += sides[x.value[0]] + sides[x.value[1]] + ' = ' + radical(Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet2').val(), 2)) + ' (см.)';
			}

		}
		if(x.type == 'Katet2') {
			text += '<br/>' + sides[x.value[0]] + sides[x.value[1]] + k + ' = ';
			text += sides[0] + sides[1] + k + ' - ' + sides[0] + sides[2] + k + ' = ' + Math.pow($('#hypoten').val(), 2) + ' - ' + Math.pow($('#katet1').val(), 2) + ' = ' + (Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet1').val(), 2)) + '<br/>';
			if(Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet1').val(), 2) <= 0) {
				text += '<br/>' + lang[4];
			}
			else {
				text += sides[x.value[0]] + sides[x.value[1]] + ' = ' + radical(Math.pow($('#hypoten').val(), 2) - Math.pow($('#katet1').val(), 2)) + ' (см.)';
			}

		}
		if(x.type == 'Hypoten') {
			text += ' = ' + Math.pow($('#katet1').val(), 2) + ' + ' + Math.pow($('#katet2').val(), 2) + ' = ' + (Math.pow($('#katet1').val(), 2) + Math.pow($('#katet2').val(), 2)) + '<br/>';
			if(Math.pow($('#katet1').val(), 2) + Math.pow($('#katet2').val(), 2) <= 0) {
				text += '<br/>' + lang[4];
			}
			else {
				text += sides[x.value[0]] + sides[x.value[1]] + ' = ' + radical(Math.pow($('#katet1').val(), 2) + Math.pow($('#katet2').val(), 2)) + ' (см.)';
			}

		}

		solution.html(text);
	}
});
