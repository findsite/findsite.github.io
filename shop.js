let lc = window.localStorage;

setInterval( () => { $('#shop-header-info').css('height', (window.innerHeight + 1)) }, 1);
$("html, body").animate({ scrollTop: lc.getItem('lastPos') }, 0);
$("html, body").animate({ scrollTop: (lc.getItem('scroll') == 'down' ? window.innerHeight + 2 : "0px") });

window.onload = function() { 
    if(lc.getItem('category')) {
        chooseCategory(lc.getItem('category'));
    }
}

$('.scroll-down').css('margin-top', (window.innerHeight - (window.innerHeight / 10)));
$('.scroll-down').css('margin-left', (window.innerWidth / 2 - ($('.scroll-down').innerHeight() / 2)));
$('.scroll-down').click(() => {
    $("html, body").animate({ scrollTop: window.innerHeight + 1 }, 500);
})


// Cube's animations

const names = [
    'Качество',
    'Надёжность',
    'Без предоплаты',
    'Наверное'
];
let name = 1;

function changeText() {
    name == 3 ? name = 0 : name++;

    $('#cube').css('animation', 'dark-light 1s');
    setTimeout(() => {
        $('#text').text(names[name])
        setTimeout(() => {
            $('#cube').css('animation', '')
        }, 500);
    }, 500);
}

setInterval(changeText, 2000);


// Show header

let canHide = false;

function checkPosition() {
    if(window.pageYOffset >= window.innerHeight + 1) {
        $('header').css('animation', 'show .5s forwards');
        $('#header').css('animation', 'showHeader .5s .5s forwards');
        canHide = true;
    }
    else if(window.pageYOffset <= window.innerHeight + 1 && canHide) {
        $('header').css('animation', 'hide .5s forwards');
        $('#header').css('animation', 'hideHeader .5s .5s forwards');
        if($('#categories-list').css('opacity') != 0) { $('#categories-list').click() }
    }
}

setInterval(checkPosition, 1);

// Product animations

for(let i = 0; i < document.getElementsByClassName('product').length; i++) {
    document.getElementsByClassName('product')[i].onmouseover = function() { onOver(i) };
    document.getElementsByClassName('product')[i].onmouseout = function() { onOut(i) };
}

function onOver(index) {
    $('.product').eq(index).css('animation', 'upB .25s forwards');
    $('.product hr').eq(index).css('animation', 'upH .25s forwards');
    $('.product .price').eq(index).css('animation', 'upP .25s forwards');
}
function onOut(index) {
    $('.product').eq(index).css('animation', 'downB .25s forwards');
    $('.product hr').eq(index).css('animation', 'downH .25s forwards');
    $('.product .price').eq(index).css('animation', 'downP .25s forwards');
}

// Categories opener

for(let i = 0; i < $('#categories-list li').length; i++) {
    $('#categories-list li').eq(i).attr('onmouseover', ('hoverOnCategory('+i+')'));
    $('#categories-list li').eq(i).attr('onmouseout', ('hoverOnCategory('+i+', "out")'));
}

$('#categories').click(function() {
    let type = $('#categories-list').css('opacity') == 0 ? '' : '-rev';

    $('#categories-list').css('animation', ('category-list-bg' + type + ' .75s forwards'));
    $('#categories-list li').css('animation', ('category-list-text' + type + ' .75s forwards'));
});

function hoverOnCategory(index, type = 'in') {
    $('#categories-list li').eq(index).css('background-color', (type == 'in' ? '#131315' : 'rgba(0,0,0,0)'));
    $('#categories-list li p').eq(index).css('color', (type == 'in' ? '#fff' : '#000'))
    $('#categories-list hr').eq(index).css('animation', ('category-list-hr' + (type == 'in' ? '' : '-rev') + ' .2s forwards'));
}




function chooseCategory(category) {

    function removeCategories(exception) {
        $("html, body").animate({ scrollTop: window.innerHeight + 2 });

        let kt = document.getElementsByClassName('category');

        for(let i = 0; i < kt.length; i++) if(kt[i].id != exception) kt[i].remove();

        if(kt.length == 0) {
            lc.setItem('category', exception);
            lc.setItem('scroll', 'down');
            lc.setItem('lastPos', window.pageYOffset);
            window.location.href = 'file:///C:/Users/Comp/Desktop/%D0%A1%D0%B0%D0%B9%D1%82%D1%8B/man%20tgx%20test/index.html';
        }
        else {
            lc.removeItem('category');
            lc.removeItem('scroll');
        }
    }

    if(category != 'all') removeCategories(category);
    else {
        lc.setItem('scroll', 'down');
        lc.setItem('lastPos', window.pageYOffset);
        window.location.href = 'file:///C:/Users/Comp/Desktop/%D0%A1%D0%B0%D0%B9%D1%82%D1%8B/man%20tgx%20test/index.html';
    }

}