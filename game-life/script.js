let game = {
	enabled: false,
	new_life: [3],
	continue_life: [2, 3],
	generation: 0
}

count_of_rows = 20;
count_of_columns = Math.floor(window.innerWidth / (window.innerHeight / count_of_rows));
console.log(count_of_rows, count_of_columns)

matrx = []
for(let i = 0; i < count_of_rows; i++) {
	matrx[i] = []
	for(let j = 0; j < count_of_columns; j++) {
		matrx[i][j] = 0;
	}
}

function draw_field(matrx, first_start = false) {
	if(!first_start) {
		document.getElementsByClassName('field')[0].remove()
		let new_field = document.createElement('table');
		new_field.className = 'field';
		document.getElementsByClassName('container')[0].appendChild(new_field);
	}
	for(let i = 0; i < count_of_rows; i++) {
		let new_row = document.createElement('tr');
		for(let j = 0; j < count_of_columns; j++) {
			let new_cell = document.createElement('td');
			new_cell.style.height = (window.innerHeight / 20) + 'px';
			new_cell.style.width = (window.innerHeight / 20) + 'px';
			new_cell.style.backgroundColor = matrx[i][j] ? '#000' : "#fff";
			new_cell.onclick = function() {
				update_matrix(i, j)
			}
			new_row.appendChild(new_cell);
		}
		document.getElementsByClassName('field')[0].appendChild(new_row);
	}
}

function update_matrix(i, j) {
	matrx[i][j] = matrx[i][j] == 0 ? 1 : 0;
	draw_field(matrx);
	if(matrx[i][j] == 1) write_new_info(('Новая жизнь (' + i + '; ' + j + ')'))
	else write_new_info(('Клетка умерла (' + i + '; ' + j + ')'))
}
function update_periodicity() {
	game.periodicity
}

draw_field(matrx, true)


function start() {
	let game_interval = setInterval(() => {
		if(game.enabled) {
			neighbor_matrx = []
			for(let i = 0; i < count_of_rows; i++) {
				neighbor_matrx[i] = []
				for(let j = 0; j < count_of_columns;  j++) {
					neighbor_matrx[i][j] = get_count_of_neighbors(matrx, i, j)
				}
			}
			for(let i = 0; i < count_of_rows; i++) {
				for(let j = 0; j < count_of_columns; j++) {
					let count_of_neighbors = neighbor_matrx[i][j]
					if(matrx[i][j] == 0) {
						new_life = false;
						for(let i = 0; i < game.new_life.length; i++) {
							if(count_of_neighbors == game.new_life[i]) {
								new_life = true;
							}
						}
						if(new_life) {
							update_matrix(i, j)
						}
					}
					else {
						continue_life = false;
						for(let i = 0; i < game.continue_life.length; i++) {
							if(count_of_neighbors == game.continue_life[i]) {
								continue_life = true;
								break;
							}
						}
						if(!continue_life) {
							update_matrix(i, j)
						}
					}
				}
			}
			game.generation += 1;
		}
		else {
			clearInterval(game_interval)
		}
	}, document.getElementsByClassName('info__game-speed')[0].value)
}

function get_count_of_neighbors(matrix, i, j) {
	let num = 0;
	if(i + 1 < count_of_rows) {
		if(matrx[i + 1][j] == 1) num++;
	}
	if(j + 1 < count_of_columns) {
		if(matrx[i][j + 1] == 1) num++;
	}
	if(i + 1 < count_of_rows && j + 1 < count_of_columns) {
		if(matrx[i + 1][j + 1] == 1) num++;
	}
	if(i > 0) {
		if(matrx[i - 1][j] == 1) num++;
	}
	if(i > 0 && j > 0) {
		if(matrx[i - 1][j - 1] == 1) num++;
	}
	if(i > 0 && j + 1 < count_of_columns) {
		if(matrx[i - 1][j + 1] == 1) num++;
	}
	if(j > 0) {
		if(matrx[i][j - 1] == 1) num++;	
	}
	if(i + 1 < count_of_rows && j > 0) {
		if(matrx[i + 1][j - 1] == 1) num++;
	}
	return num;
}

function write_new_info(message) {
	new_message = document.createElement('p');
	date = new Date()
	new_message.innerHTML = "<i>" + date.getHours() + ':' + date.getMinutes() + ':' + date.getUTCSeconds() + "</i>: " + message + ' (Поколение: ' + game.generation + ')';
	new_message.className = 'messages__message';
	document.getElementsByClassName('messages')[0].appendChild(new_message);
}



let switcher_pos = 1;
document.getElementsByClassName('switcher')[0].onclick = function() {
	if(switcher_pos == 1) {
		document.getElementsByClassName('switcher__start')[0].className = 'switcher__start disabled';
		document.getElementsByClassName('switcher__pause')[0].className = 'switcher__pause enabled';
		switcher_pos = 0;
		game.enabled = true;
		start()
	}
	else {
		document.getElementsByClassName('switcher__start')[0].className = 'switcher__start enabled';
		document.getElementsByClassName('switcher__pause')[0].className = 'switcher__pause disabled';
		switcher_pos = 1;
		game.enabled = false;
	}
}
