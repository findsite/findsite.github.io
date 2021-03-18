const Title = 'Физика';
//!!!



document.title = Title;

let lang = getLang();


let bricks = {
	names: [lang.phizika[0]],
	imgURLS: ['https://cdn.discordapp.com/attachments/521767712792379414/801907297600405504/96668c8bbbb6bc70.jpg'],
	links: ['yadernaya-reakziya.html'],
	opacity: ['1']
}

if(bricks.names.length % 2 != 0) {
	bricks.names.push(bricks.names[0]);
	bricks.imgURLS.push(bricks.imgURLS[0]);
	bricks.links.push('yadernaya-reakziya.html');
	bricks.opacity.push(0);
}


let block = document.getElementById('bricks-list');

for(let i in bricks.names) {
	if(Number(i) % 2 == 0 && i != 0) {
		let nBlock = document.createElement('ul');
		nBlock.className = 'b-l';

		let br = document.createElement('br');

		document.getElementById('container').appendChild(br);
		document.getElementById('container').appendChild(nBlock);

		block = nBlock;
	}

	let nBrick = document.createElement('li');
	nBrick.id = i;
	nBrick.className = (bricks.opacity[i] == 1 ? 'brick' : 'brick invis');

	let nHref = document.createElement('a');
	nHref.href = bricks.links[i];

	let nP = document.createElement('p');
	nP.innerHTML = bricks.names[i];

	let nImg = document.createElement('img');
	nImg.src = bricks.imgURLS[i];

	block.appendChild(nBrick);
	nBrick.appendChild(nHref);
	nHref.appendChild(nP);
	nHref.appendChild(nImg);
}



let Storage = window.localStorage;

let theme = Storage.getItem('theme') != undefined ? Storage.getItem('theme') : 0;

if(theme != 0) {
	document.getElementById('html').style = 'background-color: #111';
	document.getElementById('header').style = 'background-color: #333; border-color: #333 #333 #444 #333';
	document.getElementById('home').src = 'https://cdn.discordapp.com/attachments/521767712792379414/691641762963259481/13.jpg';
	document.getElementById('findsite').src = 'https://cdn.discordapp.com/attachments/521767712792379414/691640002202959942/findsitesmall.jpg';
}

