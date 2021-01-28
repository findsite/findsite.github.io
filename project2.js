let click = 0;

let imgs = ["https://cdn.discordapp.com/attachments/521767712792379414/783960076071206912/download.jpg",
			"https://cdn.discordapp.com/attachments/521767712792379414/783960268316475403/download.jpg",
			"https://cdn.discordapp.com/attachments/521767712792379414/783960417776041984/images.jpg",
			"https://cdn.discordapp.com/attachments/521767712792379414/783960559523332096/images.jpg",
			"https://cdn.discordapp.com/attachments/521767712792379414/780884994297167882/3553d87f7c27b79f517c6891b55ed994.png"];
let ps = ["Значення металургії у світовому господарстві. Для виготовлення машин і різноманітного обладнання, транспортних засобів, домашньої побутової техніки, у будівництві та медицині використовуються чорні та кольорові метали, які є продукцією світової металургії. Найпоширенішими з них у світовому виробництві є алюміній та залізо. Хоча сучасні досягнення науки дають можливість замінити одні ма теріали іншими, дешевшими, з кращими властивостями, але сталь і досі лишається головним конструкційним матеріалом. Під впливом науково-технічного прогресу зростає значення кольорової ме­ талургії світу. Якщо у першій половині XX ст. переважало виплавлення важ­ких металів (міді, свинцю, цинку, олова), то згодом на перші позиції вийшли легкі метали (алюміній, титан, магній), нарощується виробництво рідкісних (ітрій, лютецій, лантан) і штучних (технецій, америцій, кюрій) металів. Кіль­кість розвинутих країн, що мають кольорову металургію, зростає, оскільки вона забезпечує необхідними матеріалами точне машинобудування. У краї­нах, що розвиваються, переважають старі та екологічно «брудні» галузі.",
		  "Чорна металургія. Одним із давніх виробництв світового господарства є чорна металургія. Вона завжди характеризувалася високим рівнем концен трації виробництва. Так, на початку ХХ ст. чорна металургія розвивалася лише у кількох країнах світу. Понад 4 /5 світового виплавлення сталі тоді давали лише 5 країн: США, Німеччина, Велика Британія, Бельгія та Люк сембург. Протягом останніх 100 років виробництво чавуну і сталі значно збільшилося, а розміщення суттєво змінилося: підприємства поширилися спершу у високорозвинутих країнах, а після Другої світової війни й у ряді країн, що розвиваються, які багаті на високоякісні руди чорних металів. Тоді основним чинником розміщення підприємств був сировинний.",
		  "У наш час чорна металургія розвинута далеко не в усіх регіонах світу. Так, її практично немає в більшості країн Африки, Близького та Серед­ нього Сходу, Центральної Америки. Натомість на Топ-20 країн припадає понад 90% усього світового виробництва сталі. Нові заводи у розвинутих країнах тепер орієнтуються у своєму розміщенні на транспортний чинник та відповідно імпортну сировину. Їх спеціалізацією стало виробництво на основі новітніх технологій високоякісної сталі та складних видів прокату. У країнах, що розвиваються, підприємства чорної металургії переважно й донині розміщуються біля басейнів видобутку сировини: залізних та мар­ганцевих руд, коксівного вугілля. У наш час чорна металургія характеризується циклічністю зміни попиту на її продукцію, світовим надвиробництвом та високими ризи­ками. Виходячи із співвідношення ризику та прибутковості інвестицій, частка металургії у промисловості розвинутих країн постійно зменшу­ється, поступаючись місцем високо­ технологічним галузям.",
		  "Собвственно, компании: ArcelorMittal, S.A. ArcelorMittal — найбільша металургійна компанія світу, на кінець 2008 року контролювала 10% світового ринку сталі. Зареєстрована у Люксембурзі, має представництва в 60 країнах світу.",
		  "Спасибо за внимание!!!!!!!!!!!!!!!!!!!!!!!!"];


window.onload = function() {
	document.getElementById("imgr").src = imgs[click];
	document.getElementById("pr").innerHTML = ps[click];
}

function changeInfo() {
	click++;
	document.getElementById("imgr").src = imgs[click];
	document.getElementById("pr").innerHTML = ps[click];

	if(click == ps.length-1) {
		click = -1;
	}
}