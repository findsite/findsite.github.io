$('header').css('height', window.innerHeight);
$('header').css('animation', 'bgHeaderTransStart 1s 3s forwards');
$('header p').css('animation', 'pTransStart 1.5s .5s forwards');
$('html').css('animation', 'bgTransStart 1.5s .5s forwards');

setTimeout( () => { 
					$('.container').css('position', 'relative');
					$('.container').css('opacity', '1');
					$('header').css('border-width', '0 0 1.5px 0');
					$('header').animate({ height: (window.innerHeight / 8.5)
				  }, 1000) }, 2000);