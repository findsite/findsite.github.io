let date = new Date();
let days = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
]

$('.day_of_week').text(days[date.getDay()])



let timetable_time = [
	[[9, 0], [9, 30]],
	[[9, 40], [10, 10]],
	[[10, 20], [10, 50]],
	[[11, 0], [11, 30]],
	[[11, 45], [12, 15]],
	[[12, 25], [12, 55]],
	[[13, 5], [13, 35]],
	[[1, 50], [2, 20]]
]
let timetable_lessons = [
	// Понедельник
	[
		'Физкультура',
		'Физкультура',
		'География',
		'Зарубежная Литература',
		'Украинский Язык',
		'Укринская Литература',
		'История Украины',
		'Искусство'
	],
	// Вторник
	[
		'Физика',
		'Физика | Математика',
		'Математика | Физика',
		'Математика',
		'Химия',
		'русский Язык',
		'Всемирная История',
		'Математика (доп.)'
	],
	// Среда
	[
		'Биология',
		'Биология',
		'Математика',
		'Математика',
		'Информатика | Английский Язык',
		'Информатика | Английский Язык',
		'Английский Язык | Информатика',
		'Английский Язык | Информатика',
		'Алгоритмика'
	],
	// Четверг
	[
		'Биология',
		'Биология',
		'Финансовая Грамотность',
		'Физика',
		'Физика',
		'Обществознание (громадянка)',
		'Химия',
		'Украинский Язык',
		'Украинская Литература'
	],
	// Пятница
	[
		'Информатика | ИКТ',
		'Информатика | ИКТ',
		'ИКТ | Информатика',
		'ИКТ | Информатика',
		'Математика',
		'Математика | Английский Язык',
		'Английский Язык | Математика',
		'Математика',
		'Защита Украины (на фронте)',
	]
]



function convert_to_time(num) {
	return num.toString().length == 2 ? num : ('0' + num);
}
function is_lesson_now(h, m, s) {
	h = parseInt(h)
	m = parseInt(m)
	sum_time = ((h * 60 * 60) + m * 60) + s
	for(let i = 0; i < timetable_time.length; i++) {
		sum_start_lesson = ((timetable_time[i][0][0] * 60 * 60) + timetable_time[i][0][1] * 60);
		sum_end_lesson = ((timetable_time[i][1][0] * 60 * 60) + timetable_time[i][1][1] * 60);

		if(sum_time >= sum_start_lesson && sum_time <= sum_end_lesson) {
			$('.main_info .lesson_duration .start').text(convert_to_time(timetable_time[i][0][0]) + ':' + convert_to_time(timetable_time[i][0][1]))
			$('.main_info .lesson_duration .current_time').text(convert_to_time(h) + ':' + convert_to_time(m))
			$('.main_info .lesson_duration .end').text(convert_to_time(timetable_time[i][1][0]) + ':' + convert_to_time(timetable_time[i][1][1]))
			if($('.main_info .lesson').text() == 'Chill') {
				$('.main_info .lesson').animate({marginBottom: '5%', opacity: '0'})
				setTimeout(() => {
					$('.main_info .lesson').text(timetable_lessons[date.getDay() - 1][i])

				}, 500)
				$('.main_info .lesson').delay(50).animate({marginBottom: '0', opacity: '1'})
			}
			if($('.main_info .lesson_duration').css('opacity') == '0') {
				$('.main_info .lesson_duration').animate({marginBottom: '5%', opacity: '1'})
			}
			
			sum = 100 - ((sum_end_lesson - sum_time) / 1800 * 100)
			console.log(sum)

			if(sum > 100) {
				sum = 100
			}
			if(sum < 30) {
				sum = 30;
			}
			console.log(sum + '%, ', sum_end_lesson, sum_time)

			$('.bg_animations').text('@keyframes move_bg {\n\t0% {\n\t\tbackground-position: ' + $('.main_info').css('background-position-x') + '\n\t}\n\t100% {\n\t\tbackground-position: ' + sum + '%\n\t}\n}');				
			$('.main_info').css('animation', 'none');
			$('.main_info').css('animation', 'move_bg 1s forwards');
			return;
		}
		if(i + 1 == timetable_time.length) {
			$('.main_info .lesson').text('Chill')
			if($('.main_info').css('background-position-x') != '0px') {
				$('.bg_animations').text('@keyframes move_bg_back {\n\t0% {\n\t\tbackground-position: 100%\n\t}\n\t100% {\n\t\tbackground-position: 0\n\t}\n}');
				$('.main_info').css('animation', 'move_bg_back 1s forwards');
			}
			$('main_info .lesson_duration').animate({marginBottom: '0', opacity: '1'})
		}
	}
}
is_lesson_now(date.getHours(), date.getMinutes())
setInterval(() => {
	date = new Date()
	is_lesson_now(date.getHours(), date.getMinutes(), date.getSeconds())
}, 1000)
