window.addEventListener('scroll', (e) => {
    document.getElementsByClassName('main')[0].style = 'margin-top: -' + (window.pageYOffset / 2 + 100) + 'px';
})







const startDate = moment('2022-12-13 5:49:00');

let currentDate = moment();

let elapsedYears = currentDate.diff(startDate, 'years');
let elapsedMonths = currentDate.diff(startDate, 'months') % 12;
let elapsedDays = currentDate.diff(startDate, 'days') % 30;
let elapsedHours = currentDate.diff(startDate, 'hours') % 24;
let elapsedMinutes = currentDate.diff(startDate, 'minutes') % 60;
let elapsedSeconds = currentDate.diff(startDate, 'seconds') % 60;

function russian_multiples(value, cond1, cond2, cond3) {
    let output;
    if(value.toString()[value.toString().length - 1] === '1' && value !== 11) {
        output = cond1;
    } else if((value.toString()[value.toString().length - 1] === '2' && value !== 12) || (value.toString()[value.toString().length - 1] === '3' && value !== 13) || (value.toString()[value.toString().length - 1] === '4' && value !== 14)) {
        output = cond2;
    } else {
        output = cond3;
    }
    return ' ' + output + ' ';
}

setInterval(() => {
    currentDate = moment();

    elapsedYears = currentDate.diff(startDate, 'years');
    elapsedMonths = currentDate.diff(startDate, 'months') % 12;
    elapsedDays = currentDate.diff(startDate, 'days') % 30;
    elapsedHours = currentDate.diff(startDate, 'hours') % 24;
    elapsedMinutes = currentDate.diff(startDate, 'minutes') % 60;
    elapsedSeconds = currentDate.diff(startDate, 'seconds') % 60;

    let year = russian_multiples(elapsedYears, 'год', 'года', 'лет')
    let month = russian_multiples(elapsedMonths, 'месяц', 'месяца', 'месяцев')
    let day = russian_multiples(elapsedDays, 'день', 'дня', 'дней')
    let hour = russian_multiples(elapsedHours, 'час', 'часа', 'часов')
    let minute = russian_multiples(elapsedMinutes, 'минута', 'минуты', 'минут')
    let second = russian_multiples(elapsedSeconds, 'секунда', 'секунды', 'секунд')

    document.getElementsByClassName('timer')[0].innerText = (elapsedYears == 0 ? '' : elapsedYears + year) + (elapsedMonths == 0 ? '' : elapsedMonths + month) + (elapsedDays + day) + (elapsedHours + hour) + (elapsedMinutes + minute) + (elapsedSeconds + second);
}, 1000)



let names = ['Кета', 'Павсайз', 'Пивниз', 'Павсизи', 'Павсайзи', 'Возьмимя']
let descrs = ['Ебаная', 'Трамадольная', 'Шлюховитая', 'Обрыганни', 'Глупи', 'Свинорылая', 'Собакорылая', 'Побитая', 'Проебавшаяся', 'Избитая', 'Кривая', 'Целлюлитная']
let titles = ['Сволочь', 'Падла', 'Шлюха', 'Проститутка', 'Шаболда', 'Шваль', 'Шмара', 'Дурбецало', 'Свинья', 'Кабыла', 'Жиробасина', 'Мамонтиха', 'Обрыганка', 'Сосалка', 'Животное', 'Бараниха', 'Мелочь', 'Маугли']
function generatePanch() {
    let panch = names[Math.floor(Math.random() * names.length)] + ' ' + descrs[Math.floor(Math.random() * descrs.length)].toLowerCase() + ' ' + titles[Math.floor(Math.random() * titles.length)].toLowerCase()
    document.getElementsByClassName('for-keta__text')[0].innerText = panch;
}

let n_names = ['Катя', 'Кета', 'Урхкалинина', 'Кеточка', 'Кэта']
let shy_words = ['Любимая', 'Дорогая', 'Ненаглядная', 'Солнышко', 'Солнце', 'Любими', 'Красиви', 'Бести']
function generateVomit() {
    let vomit = n_names[Math.floor(Math.random() * n_names.length)] + ' ' + shy_words[Math.floor(Math.random() * shy_words.length)].toLowerCase()
    document.getElementsByClassName('for-keta__text')[0].innerText = vomit;
}
