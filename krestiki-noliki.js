let pos = new Array("#FIRs", "#SECs", "#THRs", "#FOUs", "#FIVs", "#SIXs", "#SEVs", "#EIGs", "#NINs");
let posn = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
let turnN = new Array("ноликов", "крестиков");

let count;
let win = 0;
let Turn = Math.round(Math.random() * 1);

function setTurn(turn) {
	$(function() {
		$("#turn").text("Ход " + turnN[turn]);
	});
	if(turn > 1 && turn != 5) {
		$(function() {
			$("#turn").text("Победа " + turnN[turn - 3]);
			$("#subturn").text("для перезапуска игры нажмите сюда");
		});
	}
	else if(turn == 5) {
		$(function() {
			$("#turn").text("Ничья");
			$("#subturn").text("для перезапуска игры нажмите сюда");
		});
	}
}
function toggleTurn() {
	Turn++;
	if(Turn == 2) {
		Turn = 0;
	}
}

setTurn(Turn);

function setPos(i) {
	if(win == 0) {
		if(posn[i] == 0) {
			$(function() {
				if(Turn == 0) {
					$(pos[i]).text('X');
					posn[i] = 1;
					setTurn(0);
					if(posn[0] == 1 && posn[4] == 1 && posn[8] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[0] == 1 && posn[1] == 1 && posn[2] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[3] == 1 && posn[4] == 1 && posn[5] == 1) {
						setTurn(4);
					} 
					else if(posn[6] == 1 && posn[7] == 1 && posn[8] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[0] == 1 && posn[3] == 1 && posn[6] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[1] == 1 && posn[4] == 1 && posn[7] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[2] == 1 && posn[5] == 1 && posn[8] == 1) {
						setTurn(4);
						win = 1;
					}
					else if(posn[2] == 1 && posn[4] == 1 && posn[6] == 1) {
						setTurn(4);
						win = 1;
					}
				}
				else {
					$(pos[i]).text('O');
					posn[i] = 2;
					setTurn(1);
					if(posn[0] == 2 && posn[4] == 2 && posn[8] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[0] == 2 && posn[1] == 2 && posn[2] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[3] == 2 && posn[4] == 2 && posn[5] == 2) {
						setTurn(3);
						win = 1;
					} 
					else if(posn[6] == 2 && posn[7] == 2 && posn[8] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[0] == 2 && posn[3] == 2 && posn[6] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[1] == 2 && posn[4] == 2 && posn[7] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[2] == 2 && posn[5] == 2 && posn[8] == 2) {
						setTurn(3);
						win = 1;
					}
					else if(posn[2] == 2 && posn[4] == 2 && posn[6] == 2) {
						setTurn(3);
						win = 1;
					}
				}
			});
			count = 0;
			toggleTurn();
 		}
	}
	for(let i = 0; i < posn.length; i++) {
		if(posn[i] != 0) {
			count++;
		}
	}
	if(count == posn.length) {
		win = 5;
		setTurn(5);
		$(function() {
			$("#turn").text("Ничья");
			$("#subturn").text("для перезапуска игры нажмите сюда");
		});
	}
}

function resetPos() {
	if(win != 0) {
		$(function() {
			for(let i = 0; i < pos.length; i++) {
				posn[i] = 0;
				$(pos[i]).text('');
			}
			$("#subturn").text('');
		});
		Turn = Math.round(Math.random() * 1);
		setTurn(Turn);
		win = 0;
	}
}