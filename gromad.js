$('div').css('height', window.innerHeight);

console.log(window.innerHeight);

let colors = [
				'#A34898',
				'#555',
				'#38B5A6',
				'#B5902F',
				'#6F20AA',
				'#000'
]												

for(let i = 0; i < document.getElementsByTagName('div').length; i++) {
				$('div').eq(i).click(function() {
								$("html, body").animate({ scrollTop: window.innerHeight * (i + 1) }, 750);
				});
				$('div').eq(i).css('background-color', colors[i]);				
				console.log(i);
}
