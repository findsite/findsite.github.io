window.onload = function() {
let hhr = document.getElementById("hhr");
	hhr.style = "animation: animhhr 1s forwards .15s";
let htheader = document.getElementById("htheader");
	htheader.style = "animation: animhtheader .8s forwards 1115ms";
let dq = document.getElementById("html" );
let dw = document.getElementById("header" );
let de = document.getElementById("hhr" );
let dr = document.getElementById("htheader" );
let dt = document.getElementById("pheader" );
let dy = document.getElementById("rhr" );
let dz = document.getElementById("horazdelu");
let dao = document.getElementById("staso");
let dat = document.getElementById("stast");
    	dat.href = "dhimia.html";
    	dao.href = "dguitar.html";
	dq.style = "animation: adhtml 0s forwards";
	dw.style = "animation: adheader 0s forwards";
	de.style = "animation: adhhr 0s forwards";
	dr.style = "animation: adhtheader 0s forwards";
    dt.style = "animation: adpheader 0s forwards";
	dy.style = "animation: adrhr 0s forwards";	
	dz.style = "animation: adhorazdel 0s forwards";
}

function setStandartProperty(){
	let hhr = document.getElementById("hhr");
	hhr.style.width = "85%";
	let htheader = document.getElementById("htheader");
	htheader.style.opacity = "1";
}

function error(){
      alert("Данный сайт находится в разработке");
}
function errorr(){
	  alert("Данный раздел находится в разработке");
}

let check = 0;
function darkover(){
let dq = document.getElementById("html" );
let dw = document.getElementById("header" );
let de = document.getElementById("hhr" );
let dr = document.getElementById("htheader" );
let dt = document.getElementById("pheader" );
let dy = document.getElementById("rhr" );
let dz = document.getElementById("horazdelu");
let dao = document.getElementById("staso");
let dat = document.getElementById("stast");
    dat.href = "dguitar.html";
    dao.href = "dhimia.html";
	dq.style = "animation: adhtml .3s forwards";
	dw.style = "animation: adheader .3s forwards";
	de.style = "animation: adhhr .3s forwards";
	dr.style = "animation: adhtheader .3s forwards";
    dt.style = "animation: adpheader .3s forwards";
	dy.style = "animation: adrhr .3s forwards";	
	dz.style = "animation: adhorazdel .3s forwards";
	setStandartProperty();
}

function darkout(){
if(check == 0){
let dq = document.getElementById("html" );
let dw = document.getElementById("header" );
let de = document.getElementById("hhr" );
let dr = document.getElementById("htheader" );
let dt = document.getElementById("pheader" );
let dy = document.getElementById("rhr" );
let dz = document.getElementById("horazdelu");
	dq.style = "animation: adhtmlrev .3s forwards";
	dw.style = "animation: adheaderrev .3s forwards";
	de.style = "animation: adhhrrev .3s forwards";
	dr.style = "animation: adhtheaderrev .3s forwards";
    dt.style = "animation: adpheaderrev .3s forwards";
	dy.style = "animation: adrhrrev .3s forwards";	
	dz.style = "animation: adhorazdelrev .3s forwards";
	setStandartProperty();
}
}

function lightover(){
let dq = document.getElementById("html" );
let dw = document.getElementById("header" );
let de = document.getElementById("hhr" );
let dr = document.getElementById("htheader" );
let dt = document.getElementById("pheader" );
let dy = document.getElementById("rhr" );
let dz = document.getElementById("horazdelu");
	dq.style = "animation: adhtmlrev .3s forwards";
	dw.style = "animation: adheaderrev .3s forwards";
	de.style = "animation: adhhrrev .3s forwards";
	dr.style = "animation: adhtheaderrev .3s forwards";
    dt.style = "animation: adpheaderrev .3s forwards";
	dy.style = "animation: adrhrrev .3s forwards";	
	dz.style = "animation: adhorazdelrev .3s forwards";	
	setStandartProperty();
}

function lightout(){
if(check == 1) {
let dq = document.getElementById("html" );
let dw = document.getElementById("header" );
let de = document.getElementById("hhr" );
let dr = document.getElementById("htheader" );
let dt = document.getElementById("pheader" );
let dy = document.getElementById("rhr" );
let dz = document.getElementById("horazdelu");
	dq.style = "animation: adhtml .3s forwards";
	dw.style = "animation: adheader .3s forwards";
	de.style = "animation: adhhr .3s forwards";
	dr.style = "animation: adhtheader .3s forwards";
    dt.style = "animation: adpheader .3s forwards";
	dy.style = "animation: adrhr .3s forwards";	
	dz.style = "animation: adhorazdel .3s forwards";	
	setStandartProperty();
}
}
function descrone(x){
	if(x == 1){
		let descro = document.getElementById("descrone");
		descro.style = "animation: descr .5s forwards";
	}
	if (x == 2){
		let descrt = document.getElementById("descrtwo");
		descrt.style = "animation: descr .5s forwards";
	}
	if (x == 3) {
		let descrth = document.getElementById("descrthree");
		descrth.style = "animation: descr .5s forwards";
	}
}
function descrzero(x){
	if(x == 1){
		let descro = document.getElementById("descrone");
		descro.style = "animation: descrrevers .5s forwards";
	}
	if (x == 2){
		let descrt = document.getElementById("descrtwo");
		descrt.style = "animation: descrrevers .5s forwards";
	}
	if (x == 3) {
		let descrth = document.getElementById("descrthree");
		descrth.style = "animation: descrrevers .5s forwards";
	}
}
