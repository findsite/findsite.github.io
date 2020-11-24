window.onload = function() {
	let a;
	for(let i = 0; i < 5; i++) {
		a = document.getElementById(imgs[i]);
		a.style = "opacity:1";
	}
};

let _elements = [ "firstli", "secondli", "thirdli", "fourthli", "fifthli" ];
let imgs = [ "fimg", "simg", "timg", "ffimg", "fffimg" ];
let textes = [ "fp", "sp", "tp", "ffp", "fffp" ];
let nuls = [ "finfo", "sinfo", "tinfo", "ffinfo", "fffinfo" ];
let lis = [ "fli", "sli", "tli", "ffli", "fffli" ];
let click = 0;

function breakChoose(choose) {
	click++;
	let elem = document.getElementById(_elements[choose]);
	if(click == 1) {
		elem.style = "animation: breakChoose 2.5s forwards";
		breakAnotherChoose(choose);
		breakImg(choose);
		changeP(choose);
		setNewUl(choose);
	}
	else if(click == 2) {
		click = 0;
		elem.style = "animation: breakChoose-rev 2.5s forwards";
		breakAnotherChooserev(choose);
		changePrev(choose);
		setNewUlrev(choose);
		breakImgrev(choose);
	}
}


function breakImg(y) {
	let img = document.getElementById(imgs[y]);
	img.style = "animation: img .5s forwards";
}
function changeP(y) {
	let _text = document.getElementById(textes[y]);
	_text.style = "animation: text .5s forwards";
}
function setNewUl(y) {
	let nnuls = document.getElementById(nuls[y]);
	nnuls.style = "animation: nuls 2s .5s forwards";
}
function breakAnotherChoose(y) {
	let elem;
	for(let i = 0; i < 5; i++) {
		if(i == y) {
			continue;
		}
		else {
			elem = document.getElementById(_elements[i]);
			elem.style = "animation: breakAnotherChoose 1.5s forwards";
		}
	}
}

function breakImgrev(y) {
	let img = document.getElementById(imgs[y]);
	img.style = "animation: img-rev 1s .5s forwards";
}
function changePrev(y) {
	let _text = document.getElementById(textes[y]);
	_text.style = "animation: text-rev .5s forwards";
}
function setNewUlrev(y) {
	let nnuls = document.getElementById(nuls[y]);
	nnuls.style = "animation: nuls-rev .5s forwards";
}
function breakAnotherChooserev(y) {
	let elem;
	for(let i = 0; i < 5; i++) {
		if(i == y) {
			continue;
		}
		else {
			elem = document.getElementById(_elements[i]);
			elem.style = "animation: breakAnotherChoose-rev 1.5s forwards";
		}
	}
}