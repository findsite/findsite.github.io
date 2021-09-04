console.clear();
console.log('Code By S⅄? MrKidics');
console.log('Join S⅄? Clan for getting the latest versions of Myagar hack client');
$('p').eq(6).text('Updated by S⅄? MrKidics');

let style = document.createElement('style');
style.innerText = '.swal2-container { opacity: 0 }';
document.head.appendChild(style);









// Rainbow Feeder


let inp = document.createElement('input');
inp.id = 'rainbowFeeder';
inp.style = 'opacity: 0; height: 1px';
$('#div_lb').append(inp);

setInterval(changeColor, 100);

let c = 0;
let rainbow = false;

let nBut = document.createElement('button');
nBut.className = 'play';
nBut.innerHTML = 'Rainbow Off';
nBut.style = 'background-color: #a733af; border-color: #87118f; box-shadow: 0 3px #87118f';
nBut.onclick = function() {
    rainbow = !rainbow;
    $('.play').eq(1).text('Rainbow ' + (rainbow ? 'On' : 'Off'));
}
document.getElementsByClassName('clearfix')[2].appendChild(nBut);

let colors = [];
for(let i = 1; i < document.getElementById('purchasedfeeds').getElementsByClassName('color-item').length; i++) {
	colors.push(parseColor(document.getElementById('purchasedfeeds').getElementsByClassName('color-item')[i].style.background).hex)
}
function parseColor(col){
	var arr=[];
	col.replace(/[\d+.]+/g,function(v){arr.push(parseFloat(v))});
	return {hex:"#"+arr.slice(0,3).map(toHex).join(""),opacity:arr.length==4?arr[3]:1}
}
function toHex(int){
	var hex = int.toString(16);
	return (hex.length == 1 ? "0" + hex : hex)
}

function changeColor() {
    if(rainbow) {
	    updateFeedColor(colors[c]);
        $('.swal2-container').css('opacity', '0');
	    c == colors.length - 1 ? c = 0: c++;
    }
}
