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
	[[13, 45], [14, 15]]
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
		'Физика',
		'Математика',
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
		'Английский Язык',
		'Английский Язык',
		'Алгоритмика',
		'Алгоритмика',
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
		'Информатика',
		'Информатика',
		'ИКТ',
		'ИКТ',
		'Математика',
		'Английский Язык',
		'Английский Язык',
		'Математика',
		'Защита Украины (на фронте)',
	]
]
let timetable_links = [
	[ // Понедельник
		'https://teams.microsoft.com/l/team/19%3akSF7fxFzgW1VcsCJmYrq3q-VV2ZYRCJPpCAHeiQPsUo1%40thread.tacv2/conversations?groupId=27bf1201-e7d1-4d4d-ba82-d82b57646084&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3akSF7fxFzgW1VcsCJmYrq3q-VV2ZYRCJPpCAHeiQPsUo1%40thread.tacv2/conversations?groupId=27bf1201-e7d1-4d4d-ba82-d82b57646084&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3asL0SAgVgOtvp-fLLzAIrPMpqc07F_Z6pybI1yKldF301%40thread.tacv2/conversations?groupId=0137e524-72fd-4010-b470-fb17ce818c09&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3a5C_3aBNvJWJeVAW74xHjhR9pwisyv8LaYn88EFoHgCI1%40thread.tacv2/conversations?groupId=12e58529-3437-45da-8243-17848751b034&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3avHHtCkmoYOjkYtnCVAs7GoOBGVBlE2JbE45__A4fYW01%40thread.tacv2/conversations?groupId=1559edb7-7ed1-43d3-9d7f-f28dbbfb57f3&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3as81trCmeaE3galpvhdR1YwMaK6XiAxYCaUbZZQ1Dfyw1%40thread.tacv2/conversations?groupId=b0564786-179c-4a81-9535-79402ea0c0fe&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3acJZTj4f7iCnKAwFtKsEgVrwrDdz6qS43ofBev_C_j641%40thread.tacv2/conversations?groupId=fd241f53-1198-45d6-b091-4a74ad6d3187&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3a77nkAVy2QjlYnaOY36XlB3bN4nG3jPScPQrk-YtcqbE1%40thread.tacv2/conversations?groupId=0a8b7fe8-47fa-43d7-a7be-8b09b55ab03f&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
	],
	[ // Вторник
		'https://teams.microsoft.com/l/team/19%3ayt_GLrhbY9t3aBP9Gpnil-glXfPlS87vChRgDmW4ACA1%40thread.tacv2/conversations?groupId=62b663eb-7be4-47d2-ae1b-ca2d56a7460f&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3ayt_GLrhbY9t3aBP9Gpnil-glXfPlS87vChRgDmW4ACA1%40thread.tacv2/conversations?groupId=62b663eb-7be4-47d2-ae1b-ca2d56a7460f&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3akElolpPmTrveyob_uGqaozLd5dUQn13m0AYyMw2sFb41%40thread.tacv2/conversations?groupId=13c03ce7-38a7-49e3-abae-b272a9b58890&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aZK69wL_UlZOpfBhWZVxN2Ka4rNHIkX-c_y3oWJwCNZE1%40thread.tacv2/conversations?groupId=7e9378bd-f9c4-4ec7-968f-55f44700083e&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3acJZTj4f7iCnKAwFtKsEgVrwrDdz6qS43ofBev_C_j641%40thread.tacv2/conversations?groupId=fd241f53-1198-45d6-b091-4a74ad6d3187&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aDKmecXM-CXtfzUTbG4hHZmguNTk1jtlDJBUVdf-SIB81%40thread.tacv2/conversations?groupId=cf18fdee-1527-4fe5-bff8-88e5ac023cea&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
	],
	[ // Среда
		'https://teams.microsoft.com/l/team/19%3aCJefwBR_Tq6aCY__6bu0KmzcvnLg7lskCy1g6jJbHeA1%40thread.tacv2/conversations?groupId=979de613-be75-43a0-b982-c4b8a2cbef40&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aCJefwBR_Tq6aCY__6bu0KmzcvnLg7lskCy1g6jJbHeA1%40thread.tacv2/conversations?groupId=979de613-be75-43a0-b982-c4b8a2cbef40&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aJqKR_nYvvU72aj2EgyLJYHCjfHnovdFt7EjAsmqnqvs1%40thread.tacv2/conversations?groupId=7f89220c-282b-4b6b-b222-9fe4a1686e71&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aJqKR_nYvvU72aj2EgyLJYHCjfHnovdFt7EjAsmqnqvs1%40thread.tacv2/conversations?groupId=7f89220c-282b-4b6b-b222-9fe4a1686e71&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3a7ZDlTdr9gQtmxMZDz1lqlDHw-q5SIz_uSwBa7IEyXBo1%40thread.tacv2/conversations?groupId=c38ddb06-289e-4031-92d4-72c02671b4e8&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3a7ZDlTdr9gQtmxMZDz1lqlDHw-q5SIz_uSwBa7IEyXBo1%40thread.tacv2/conversations?groupId=c38ddb06-289e-4031-92d4-72c02671b4e8&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
	],
	[ // Четверг
		'https://teams.microsoft.com/l/team/19%3aCJefwBR_Tq6aCY__6bu0KmzcvnLg7lskCy1g6jJbHeA1%40thread.tacv2/conversations?groupId=979de613-be75-43a0-b982-c4b8a2cbef40&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aCJefwBR_Tq6aCY__6bu0KmzcvnLg7lskCy1g6jJbHeA1%40thread.tacv2/conversations?groupId=979de613-be75-43a0-b982-c4b8a2cbef40&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aUiZ6_V2K2lX75-CrFOCtkkZUTK-ADvl65eHGomLXvMI1%40thread.tacv2/conversations?groupId=3b85682b-08ea-4172-bf15-16ae70e0d82a&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3ayt_GLrhbY9t3aBP9Gpnil-glXfPlS87vChRgDmW4ACA1%40thread.tacv2/conversations?groupId=62b663eb-7be4-47d2-ae1b-ca2d56a7460f&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3ayt_GLrhbY9t3aBP9Gpnil-glXfPlS87vChRgDmW4ACA1%40thread.tacv2/conversations?groupId=62b663eb-7be4-47d2-ae1b-ca2d56a7460f&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3acJZTj4f7iCnKAwFtKsEgVrwrDdz6qS43ofBev_C_j641%40thread.tacv2/conversations?groupId=fd241f53-1198-45d6-b091-4a74ad6d3187&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3akElolpPmTrveyob_uGqaozLd5dUQn13m0AYyMw2sFb41%40thread.tacv2/conversations?groupId=13c03ce7-38a7-49e3-abae-b272a9b58890&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3avHHtCkmoYOjkYtnCVAs7GoOBGVBlE2JbE45__A4fYW01%40thread.tacv2/conversations?groupId=1559edb7-7ed1-43d3-9d7f-f28dbbfb57f3&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3as81trCmeaE3galpvhdR1YwMaK6XiAxYCaUbZZQ1Dfyw1%40thread.tacv2/conversations?groupId=b0564786-179c-4a81-9535-79402ea0c0fe&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
	],
	[ // Пятница
		'https://teams.microsoft.com/l/team/19%3azYfTyShC_9blr0uO0N5p6igttceiHX5vm4h3nqYmnGg1%40thread.tacv2/conversations?groupId=d07db8f5-d4e6-4307-a7bf-7e153c1fe744&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3azYfTyShC_9blr0uO0N5p6igttceiHX5vm4h3nqYmnGg1%40thread.tacv2/conversations?groupId=d07db8f5-d4e6-4307-a7bf-7e153c1fe744&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aKHQ1GkZlGsyJbi6i8oREVtjANc3I5xbSiponWEdgujE1%40thread.tacv2/conversations?groupId=efa06871-3490-49c9-8fbc-32b449c276fb&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aKHQ1GkZlGsyJbi6i8oREVtjANc3I5xbSiponWEdgujE1%40thread.tacv2/conversations?groupId=efa06871-3490-49c9-8fbc-32b449c276fb&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aOgrcChu4KcNa9ZVnlnmM5v-6g1J6kgO-CEN0y17FKSs1%40thread.tacv2/conversations?groupId=93de9fdc-cbc8-4574-8094-5fe62e21b6bc&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aJqKR_nYvvU72aj2EgyLJYHCjfHnovdFt7EjAsmqnqvs1%40thread.tacv2/conversations?groupId=7f89220c-282b-4b6b-b222-9fe4a1686e71&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aJqKR_nYvvU72aj2EgyLJYHCjfHnovdFt7EjAsmqnqvs1%40thread.tacv2/conversations?groupId=7f89220c-282b-4b6b-b222-9fe4a1686e71&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
		'https://teams.microsoft.com/l/team/19%3aFEvnynPnDPU7l1PDC5d70F9lPQsM96nmQuZDf7q5wGw1%40thread.tacv2/conversations?groupId=54bfeb7c-90c1-4b24-ab14-f17fadde0e0a&tenantId=09f3cf29-092e-4041-9835-0897526aa46d',
	],
]



function convert_to_time(num) {
	return num.toString().length == 2 ? num : ('0' + num);
}
function is_lesson_now(h, m, s) {
	sum_time = ((h * 60 * 60) + m * 60) + s
	for(let i = 0; i < timetable_time.length; i++) {
		sum_start_lesson = ((timetable_time[i][0][0] * 60 * 60) + timetable_time[i][0][1] * 60);
		sum_end_lesson = ((timetable_time[i][1][0] * 60 * 60) + timetable_time[i][1][1] * 60);

		if(sum_time >= sum_start_lesson && sum_time <= sum_end_lesson) {
			$('.main_info').attr('href', timetable_links[date.getDay() - 1][i])
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
