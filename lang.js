function setLang(lang) {
	window.localStorage.lang = lang;
}


let RU = {
	index: [
		'Крупный и развивающийся проект, который предоставляет Вам спектр сайтов на различную тематику',
		'Разделы',
		'Физика',
		'Химия',
		'Математика'
	],

	phizika: [
		'Ядерные реакции'
	],
	yadernaya_reakziya: [
		'Распад элемента',
		'Хим. элемент',
		'Альфа-распад',
		'Бета-распад',
	],

	himia: [
		'Химические элементы',
		'Таблица Менделеева'
	],
	chemistryfindelem: [
		'Данный сайт даёт Вам возможность быстро получить информацию о любом химическом элементе',
		'По названию',
		'По порядковому номеру',
		'По О.А.М',
	],
	tablitzha_mendeleeva: [
		'Перед вами представлена таблица Менделеева. Вы можете просто нажать на нужный вам элемент и получить информацию о нём:',
	],

	math: [
		'Трёхчлен',
		'Теорема Пифагора',
	],
	trehchlen: [
		'Введите формулу',
		'Решить',
		'Умножим коэффициенты на ',
		'Разделим коэффициенты на ',
		"Так как коэффициент 'a' = 1, решаем через теорему Виета:",
		'Решаем через дискриминант:',
		'Разложение на линейные множители:',
		'Уравнение не имеет корней.'
	],
	teorema_pifagora: [
		"Введите длины известных сторон (неизвестную обозначте за 'x')",
		'Название треуг. (АВС)',
		'Найти неизвестную сторону',
		'Заполните необходимые поля',
		'Длина не может быть меньше либо равной нулю, соотвественно треугольник с введёнными сторонами не может существовать.'
	]
}
let UK = {
	index: [
		'Великий проект, який надає Вам спектр сайтів на різну тематику',
		'Розділи',
		'Фізика',
		'Хімія',
		'Математика'
	],


	phizika: [
		'Ядерні реакції'
	],
	yadernaya_reakziya: [
		'Розпад елемента',
		'Хим. елемент',
		'Альфа-розпад',
		'Бета-розпад',
	],

	himia: [
		'Химичні елементи',
		'Таблиця Менделеєва'
	],
	chemistryfindelem: [
		'Даний сайт дає Вам можливість швидко отримати інформацію про будь-який хімічний елемент',
		'За назвою',
		'За порядковим номером',
		'За В.А.М',
	],
	tablitzha_mendeleeva: [
		'Перед вами представлена таблиця Менделєєва. Ви можете просто натиснути на потрібний вам елемент і отримати інформацію про нього:',
	],

	math: [
		'Тричлен',
		'Теорема Піфагора',
	],
	trehchlen: [
		'Введіть формулу',
		"Розв'язати",
		'Помножимо коефіцієнти на ',
		'Розділимо коефіцієнти на ',
		"Так як коефіцієнт 'a' = 1, розв\'язуємо через теорему Вієта:",
		'Розв\'язуемо через дискрминант:',
		'Розклад на лінійні множники:',
		'Рівняння не має коренів.'
	],
	teorema_pifagora: [
		"Введіть дліни стрін трикутника (невідому сторону обозначте за 'x')",
		'Назва трикут. (АВС)',
		'Знайти невідому сторону',
		'Заповните усі необхідні сторони',
		'Длина не може бути меньшою або рівною нулю, тому трикутник з введенними сторонами не може їснувати.'
	]
}



function getLang() {
	return (window.localStorage.lang == 'RU' ? RU : UK);
}
