/*

How does it work:
function "decide" gets an example. Split it by spaces, then function "procedure"
returns an array of indexes of signs of example in wich procedure it will solve
two neighbor of each sign

F.e.:

2 + 3 * 3

for first, program will make an array of indexes, wich operations should be done for first (*, /)
actList = [1, 0], because first we make an multiplication, and only then sum:

2 + 9

then sum a gotten numbers:

11

*/




let alf = 'abcdefghijklmnopqrstuvwxyzйцукенгшщзфывапролдячсмить';
function isPower(s) {
	return false;
}
function isSign(s) {
	return s == '+' || s == '-' || s == '/' || s == '*' || isPower(s);
}
function isLetter(s) {
	return alf.indexOf(s.toLowerCase()) != -1;
}
function isBaket(s) {
	return s == '(' || s == ')';
}
function decompile(v, x) {

	let newValue = '';
	for(let i = 0; i < v.length; i++) if(v[i] != ' ') newValue += v[i];

	v = newValue;
	newValue = '';

	for(let i = 0; i < v.length; i++) {
		if(isSign(v[i])) newValue += ' ' + v[i] + ' ';
		else if(isLetter(v[i])) {
			if(isSign(v[i - 1]) || i == 0) newValue += x;
			else newValue += ' * ' + x;
		}
		else if(isBaket(v[i])) {
			if(v[i] == '(') {
				console.log(v, newValue, v[i], newValue[i]);
				if(isSign(v[i - 1]) || i == 0) newValue += '( ';
				else newValue += ' * ( ';
			}
			else newValue += ' )';
		}
		else newValue += v[i];
	}

	newValue = newValue.split(' ');
	if(newValue[0] == '') newValue[0] = '0';
	return newValue;

}

function procedure(exp) {
	let retList = [];

	let ind;
	while(exp.indexOf('*') != -1 || exp.indexOf('/') != -1) {
		if(exp.indexOf('*') != -1 && exp.indexOf('/') == -1) ind = exp.indexOf('*');
		else if(exp.indexOf('*') == -1 && exp.indexOf('/') != -1) ind = exp.indexOf('/');
		else if(exp.indexOf('*') != -1 && exp.indexOf('/') != -1) ind = exp.indexOf('*') < exp.indexOf('/') ? exp.indexOf('*') : exp.indexOf('/');

		retList.push(ind);
		exp.splice(ind, 1)
	}

	while(true) {
		ind = exp.indexOf('+');
		if(ind == -1) break;

		retList.push(ind);
		exp.splice(ind, 1);
	}
	while(true) {
		ind = exp.indexOf('-');
		if(ind == -1) break;

		retList.push(ind);
		exp.splice(ind, 1);
	}

	return retList;
}

function getRes(sign, n1, n2) {
	if(sign == '*')
        return n1 * n2;
    if(sign == '/')
        return n1 / n2;
    if(sign == '+')
        return n1 + n2;
    if(sign == '-')
        return n1 - n2;
}

function inversMinus(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] == '-') {
			arr[i] = '+';
			arr[i + 1] = (parseInt(arr[i + 1]) * - 1);
		}
	}
	return arr;
}

function isThereSign(arr) {
	return (arr.indexOf('+') != -1 || arr.indexOf('-') != -1 || arr.indexOf('/') != -1 || arr.indexOf('*') != -1);
}

function decide(v, x) {
	x = (Math.round(x * 100) / 100);
	let val = decompile(v, x);

	while(val.indexOf('(') != -1) {
		let valueInside = new Array();

		let i = val.indexOf('(');
		val.splice(i, 1);
		while(val[i] != ')') {
			valueInside += val[i];
			val.splice(i, 1);
		}
		val[i] = decide(valueInside);
	}

	actList = procedure(decompile(v, x));
	v = inversMinus(val);

	let result;
	while(isThereSign(v)) {

		i = actList[0];

		result = getRes(v[i], parseFloat(v[i - 1]), parseFloat(v[i + 1]));

		v[i] = result;
		v.splice(i + 1, 1);
		v.splice(i - 1, 1);

		actList.splice(0, 1);
		for(let j = 0; j < actList.length; j++)
			if(actList[j] >= i) actList[j]--;
		
	}

	return v[0];

}
