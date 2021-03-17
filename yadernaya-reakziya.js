window.onload = function() {
	allow("b");
}

let elements = [
	"H",
	"He",
	"Li",
	"Be",
	"B",
	"C",
	"N",
	"O",
	"F",
	"Ne",
	"Na",
	"Mg",
	"Al",
	"Si",
	"P",
	"S",
	"Cl",
	"Ar",
	"K",
	"Ca",
	"Sc",
	"Ti",
	"V",
	"Cr",
	"Mn",
	"Fe",
	"Co",
	"Ni",
	"Cu",
	"Zn",
	"Ga",
	"Ge",
	"As",
	"Se",
	"Br",
	"Kr",
	"Rb",
	"Sr",
	"Y",
	"Zr",
	"Nb",
	"Mo",
	"Tc",
	"Ru",
	"Rh",
	"Pd",
	"Ag",
	"Cd",
	"In",
	"Sn",
	"Sb",
	"Te",
	"I",
	"Xe",
	"Cs",
	"Ba",
	"La*",
	"","","","","","","","","","","","","","",
	"Hf",
	"Ta",
	"W",
	"Re",
	"Os",
	"Ir",
	"Pt",
	"Au",
	"Hg",
	"Tl",
	"Pb",
	"Bi",
	"Po",
	"At",
	"Rn",
	"Fr",
	"Ra",
	"Ac**",
	"","","","","","","","","","","","","","",
	"Rf",
	"Db",
	"Sg",
	"Bh",
	"Hs",
	"Mt",
	"Ds",
	"Rg",
	"Cn",
	"",
	"Fl",
	"",
	"Lv",
	"Uuo",
	"penis"
];
let mass = [
	1,4,7,9,11,12,14,16,19,20,23,24,27,28,31,32,35,40,39,40,45,48,51,53,55,56,59,59,64,66,70,73,75,79,80,84,85,88,89,91,93,96,98,101,103,106,108,112,115,119,122,128,127,131,133,137,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178,181,184,186,190,192,195,197,201,204,207,209,210,210,222,223,226,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,267,268,271,270,269,278,281,282,285,0,289,0,293,0,294
];
let num = [
];
for(let i in elements) {
	num[i] = Number(i) + 1;
}

let type;
let canDecay = false;
let currentElement = {
	E_name: "",
	E_mass: 0,
	E_num: 0
};
let decayElement = {
	E_name: "",
	E_mass: 0,
	E_num: 0
};



function checkValue() {
	if(document.getElementById("element").value != "") {
		for(let i in elements) {
			if((document.getElementById("element").value).toLowerCase() == elements[i].toLowerCase()) {
				setValue(i);
				break;
			}
			document.getElementById("elem-to-decay").innerHTML = "Элемент не найден";
			document.getElementById("p-decay").innerHTML = "";
		}
	}
	else {
		document.getElementById("elem-to-decay").innerHTML = "";
		document.getElementById("p-decay").innerHTML = "";
	}
}
function setValue(element) {
	document.getElementById("elem-to-decay").innerHTML = "<sub>" + mass[element] + "</sub><br/><span style='padding-left: 4vh;'>" + elements[element] + "</span><br/><sup>" + num[element] + "</sup>"; 
	
	currentElement.E_name = elements[element];
	currentElement.E_mass = mass[element];
	currentElement.E_num = num[element];

	decay(type);
}

setInterval(checkValue, 1);

function allow(Type) {
	if(document.getElementById("element").value != "") {
		type = Type;
		canDecay = true;
	}
}


function decay() {
	if(canDecay == true) {
		if(elements[currentElement.E_num - (type == 'a' ? 3 : 0)] != undefined) {
			if(type == 'a') {
				decayElement.E_name = elements[currentElement.E_num - 3];
				decayElement.E_mass = currentElement.E_mass - 4;
				decayElement.E_num = currentElement.E_num - 2;
			}
			else {
				decayElement.E_name = elements[currentElement.E_num];
				decayElement.E_mass = currentElement.E_mass;
				decayElement.E_num = currentElement.E_num + 1;
			}

			writeDecayElement();
			currentElement = decayElement;
		}
		else {
			document.getElementById("elem-to-decay").innerHTML = "Распад этого типа невозможен для этого элемента";
			document.getElementById("p-decay").innerHTML = "";
		}
	}
	if(document.getElementById("element").value == "") {
		document.getElementById("p-decay").innerHTML = "";
	}
}
function writeDecayElement() {
	document.getElementById("p-decay").innerHTML = "<sub style='padding-left:" + (type == 'a' ? 1.8 : 5) + "vh'>" + decayElement.E_mass + "<span style='padding-left:" + (type == 'a' ? 7 : 8) + "vh'>" + (type == "a" ? 4 : 0) + "</span></sub><br/><span style='padding-left: 2vh; font-family: sans-serif'>→</span><span style='padding-left: 3vh'>" + decayElement.E_name + " +<span style='padding-left: 3vh'>" + (type == "a" ? "He" : "e") + "</span></span><br/><sup style='padding-left:" + (type == 'a' ? 2 : 5) + "vh'>" + decayElement.E_num + "<span style='padding-left:" + (type == 'a' ? 6.5 : 7) + "vh'>" + (type == 'a' ? 2 : -1) + "</sup>";
}


// Language

let lang = getLang();

document.getElementById('head').innerHTML = lang.yadernaya_reakziya[0];
document.getElementById('element').placeholder = lang.yadernaya_reakziya[1];
document.getElementById('ar').innerHTML = lang.yadernaya_reakziya[2];
document.getElementById('br').innerHTML = lang.yadernaya_reakziya[3];



