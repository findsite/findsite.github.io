if(window.innerWidth <= 628) {
	$('body').empty()
	$('body').append('К сожалению, пока что мы не поддерживаем мобильные устройства :(<br/>Попробуйте открыть сайт через компьютер либо ноутбок.<br/>Также вы можете попробовать перевернуть ваше устройство в горизонтальное положение и перезапустить сайт.')
	console.log('eys')
}







document.getElementsByTagName('img')[0].style.height = window.innerHeight + 'px';
document.getElementsByClassName('main')[0].style.height = window.innerHeight + 'px';



let text = 'byMrKidics' // Не ну выебнуться ж надо
	
function rebuildText(openedLetters) {
	newWord = '';
	for(let i = 0; i < text.length; i++) {
		newWord += openedLetters.indexOf(i) != -1 ? text[i] : '_'
	}
document.getElementsByClassName('bykidix')[0].innerText = newWord;
}


let openedLetters = []
let newLetter

let greetTextInterval = setInterval(() => {
	if(openedLetters.length == text.length - 1) clearInterval(greetTextInterval)
	do {
		newLetter = Math.floor(Math.random() * text.length)
	} while(openedLetters.indexOf(newLetter) != -1)

	openedLetters.push(newLetter)
	rebuildText(openedLetters)
}, 200);


// бля я даун надо было сразу жквери подключать а не ебаться
setTimeout(() => {
	$('.greeting').animate({paddingBottom: '10%', opacity: '0'}, 250)
	setTimeout(() => {
		$('.greeting').remove();
		$('.main-bg').css('animation', 'blur-bg 1s forwards')
		start(5)
		$('.toshka-sosatb').delay(250).animate({opacity: 1}, 250)
	}, 250)
}, 250 * (text.length + 2));



let word_len
for(let i = 0; i < document.getElementsByClassName('word-length').length; i++) {
	console.log(i)
	document.getElementsByClassName('word-length')[i].onclick = function(self) {
		word_len = parseInt(document.getElementsByClassName('word-length')[i].innerText);
		start(word_len);
	}
}




function start(w) {
	$('.word').empty()

	for(let i = 0; i < w; i++) {
		let newInp = document.createElement('input')
		$(newInp).attr('maxlength', 1)
		newInp.className = i
		newInp.oninput = function() {
			change_aviable_words_list()
		}
		$('.word').append(newInp);
	}

	words = all_words[w - 5]
	
	function change_aviable_words_list() {
		$('.aviable-words').empty()

		current_list = []
		for(let i = 0; i < words.length; i++) {
			thisWord = true
			for(let j = 0; j < w; j++) {
				if(words[i][j] != $('.' + j).val() && $('.' + j).val() != '') 
					thisWord = false
			}
			if(thisWord) {
				$('.aviable-words').text($('.aviable-words').text() + ' ' + words[i])
			}
		}
	}	
	change_aviable_words_list()
}