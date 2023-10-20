document.getElementById('exiter').addEventListener('click', () => {
    document.getElementsByClassName('timer-background')[0].className = 'timer-background inactive';
    document.getElementsByClassName('timer-opener-background')[0].className = 'timer-opener-background active';
});
document.getElementById('timer-opener').addEventListener('click', () => {
    document.getElementsByClassName('timer-background')[0].className = 'timer-background active';
    document.getElementsByClassName('timer-opener-background')[0].className = 'timer-opener-background inactive';
});



window.addEventListener('scroll', (e) => {
    document.getElementsByClassName('main')[0].style = 'margin-top: -' + (window.pageYOffset / 2 + 100) + 'px';
})







const startDate = moment('2023-10-15 19:00:00');

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

    document.getElementsByClassName('timer__counter')[0].innerText = (elapsedYears == 0 ? '' : elapsedYears + year) + (elapsedMonths == 0 ? '' : elapsedMonths + month) + (elapsedDays + day) + (elapsedHours + hour) + (elapsedMinutes + minute) + (elapsedSeconds + second);
}, 1000)
