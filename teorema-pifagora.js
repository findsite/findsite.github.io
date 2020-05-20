let lines = new Array("fr-line", "sc-line", "tr-line", "fu-line", "fv-line", "sx-line", "sv-line", "eg-line", "nn-line", "tn-line", "el-line", "tw-line", "tn-line", "fn-line", "sn-line", "en-line");   
function setCoef() {
		let a = prompt("Введите длину гипотенузы (неизвестную сторону обозначте за 0):");
		let b = prompt("Введите длину одного катета (неизвестную сторону обозначте за 0):");
		let c = prompt("Введите длину третьего катета (неизвестную сторону обозначте за 0):");
    let sqr = "²";
	let no_radical = "Корня нет. Число не подходит по смыслу задачи (длина стороны не может быть отрицательной либо равной 0)";
    let sign = new Array(" = ", " + ", " - ");
        document.getElementById(lines[0]).innerHTML = "<br/>AB"+sqr+sign[0]+"BC"+sqr+sign[1]+"AC"+sqr+"<br/><br/>";
    a *= a;
    b *= b;
    c *= c;
    let i, radical = 0;
	let bpc = b + c;
			document.getElementById(lines[1]).innerHTML = "AB"+sqr+sign[0]+b+sign[1]+c+sign[0]+bpc+"<br/>"+"AB"+sign[0];
		for(i = 0; i < 15000; i++) {
			if(i*i == b+c) {
				radical = i;
				break;
			}
		}  
    if(b+c > 0) {		
		if(radical > 0) {
				document.getElementById(lines[2]).innerHTML = radical;
		}
		else {
				document.getElementById(lines[2]).innerHTML = "√"+bpc;
		}
	}
	else {
		document.getElementById(lines[1]).innerHTML = no_radical;
	}
	let amc = a - c;
        document.getElementById(lines[4]).innerHTML = "<br/><br/>BC"+sqr+sign[0]+a+sign[2]+c+sign[0]+amc+"<br/>BC"+sign[0];
    if(a-c > 0) {
        radical = 0;
        for(i = 0; i < 1000; i++) {
            if(i*i == a-c) {
               radical = i;
               break; 
            }
        }
        if(radical > 0) {
                document.getElementById(lines[5]).innerHTML = radical;
        }
        else {
                document.getElementById(lines[5]).innerHTML = "√"+amc;
        }
    }
    else {
            document.getElementById(lines[5]).innerHTML = no_radical;
    }
        document.getElementById(lines[6]).innerHTML = "<br/><br/>";
	let amb = a - b;
        document.getElementById(lines[7]).innerHTML = "AC"+sqr+sign[0]+a+sign[2]+b+sign[0]+amb+"<br/>AC"+sign[0];
    if(a-b > 0) {
        radical = 0;
        for(i = 0; i < 1000; i++) {
            if(i*i == a-b) {
               radical = i;
               break; 
            }
        }
        if(radical > 0) {
                document.getElementById(lines[8]).innerHTML = radical;
        }
        else {
                document.getElementById(lines[8]).innerHTML = "√"+amb;
        }
    }
    else {
            document.getElementById(lines[8]).innerHTML = no_radical;
    }
}
function resetCoef() {
	let j = 0;
	do {
		document.getElementById(lines[j]).innerHTML = ' ';
		j = j + 1;
	} while(j < 16);
}
