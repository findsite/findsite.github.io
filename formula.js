let check = 0;
function formula() {
	 let m = "Название вещества - ";
	 let f = "\nФормула вещества - ";
	 let k = "\nКислотный остаток - ";
	 let os = "\nОстаток - ";
	 let ot = "\nОстаток отсутствует";
	 let o = "\n\nОписание: \n";
     let x = prompt("Введите ниже нужную формулу, её название, кислотный остаток или отличительную характеристику: ").toLowerCase();
     if (x == "") {
		 check = 1;
         alert("Пожалуйста, введите что-то.");	
     }
	 if (x == "8д" || x == "8 д" || x == "8-д" || x == "8 - д" || x == "8- д" || x == "8 -д") {
		 check = 1;
		 alert("НУ И КАКОЙ ГЕНИЙ ДОДУМАЛСЯ ВПИСАТЬ СЮДА 8Д?");
	 }
	 if (x == "станислив" || x == "колобок") {
	     check = 1;
		 alert("нажми на пчелу");
	 }
	 if (x == "стас" || x == "стасик" || x == "станислав") {
	     check = 1;
		 alert("ОТЧИСЛЕН");
	 }
	 if (x == "ярик") {
	     check = 1;
		 alert("а вы знаете что мира курит?");
	 }
	 if (x == "плоскость") {
	     check = 1;
		 alert("шутки стасика");
	 }
	 if (x == "морук") {
	     check = 1;
		 alert("*молчание*"); 
	 }
	 if (x == "мира") {
	     check = 1;
		 alert("айкос");
	 }
	 if (x == "айкос") {
	     check = 1;
		 alert("мира");
	 }
     if (x == "hf" || x == "фтороводород" || x == "плавиковая кислота" || x == "фторид" || x == "разъедает стекло") {
		 check = 1;
	     alert(m+"Фтороводород / плавиковая кислота (токсичная)"+f+"HF (гидроген, фтор)"+k+"фторид (F-)"+o+"Кислота средней силы, разъедает стекло. Безцветная жидкость, имеет вкус уксуса и резкий запах.");
	 }
	 if (x == "hcl" || x == "хлороводород" || x == "соляная кислота" || x == "хлорид" || x == "получение хлоридов") {
		 check = 1;
	     alert(m+"Хловодород / Соляная кислота (ядовитая)"+f+"HCl (гидроген, хлор)"+k+"Хлорид (Cl-)"+o+"Устойчивый газ. Используется для получения хлоридов, для травления металлов, очистки поверхности сосудов, скважин от карбонатов, обработки руд.");
	 }
	 if (x == "hbr" || x == "бромоводород" || x == "бромид" || x == "приготовление бромидов") {
	     check = 1;
		 alert(m+"Бромоводород (токсичный)"+f+"HBr (гидроген, бром)"+k+"Бромид (Br-)"+o+"Устойчивый ядовитый газ, безцветный и с резким запахом. Применяют для приготовления бромидов, синтеза различных органических бромпроизводных и для реактивного ионного травления.");
	 }
	 if (x == "hi" || x == "йодоводород" || x == "иодоводород" || x == "йодид" || x == "сильно дымит на воздухе") {
	     check 	= 1;
		 alert(m+"Иодоводород (удушливый)"+f+"HI (гидроген, иод)"+k+"Йодид (I-)"+o+"Безцветный удушливый газ, сильно дымит на воздухе");
	 }
	 if (x == "h2s" || x == "сероводород" || x == "сульфид" || x == "запах тухлых яиц" || x == "сладковатый вкус") {
	     check = 1;
		 alert(m+"Сероводород (огнеопасный, токсичный)"+f+"H₂S (гидроген (x2), сульфур"+k+"Сульфид"+o+"Имеет неприятный запах тухлых яиц, но приятный сладковатый вкус. Выделенный в организме сероводород производится в небольших количествах клетками млекопитающих и выполняет ряд важных биологических функций, в том числе сигнальную.");
	 }
	 if (x == "hcn" || x ==	"циановодородная кислота" || x == "cn-" || x == "цианид" || x == "синильная кислота" || x == "цианистоводородная кислота") {
	     check = 1;
		 alert(m+"Циаоноводородная кислота (ядовитая)"+f+"HCN (гидроген, карбон, нитроген)"+k+"Цианид"+o+"Безцветная и очень летучая жидкость.");
	 }
	 if (x == "c2h5oh" || x == "спирт" || x == "этиловый спирт" || x == "водка" || x == "формула водки" || x == "батя любит" || x == "стасик любит") {
	     check = 1;
		 alert(m+"Этиловый спирт (водка)"+f+"C2H5OH (карбон (x2), гидроген (x5), оксиген, гидроген)"+ot+o+"Крепкий алкогольный напиток. Используется для обеззараживания ран. Жидкое прозрачное вещество, имеющее спиртовой запах и вкус.");
	 }
	 if (x == "o2" || x == "кислород" || x == "воздух") {
	     check = 1;
		 alert(m+"Кислород (воздух)"+f+"O2 (оксиген (x2))"+os+"Углекислый газ (CO2 (карбон, оксиген (x2)))"+o+"Основной источник энергии живых организмов.");
	 }
	 if (x == "h2o" || x == "вода") {
	     check = 1;
		 alert(m+"Вода (питьевая)"+f+"H2O (гидроген (x2), оксиген)"+ot+o+"Жидкое вещество прозрачного цвета. Используется праткически во всех сферах промышленности и необходимо для поддержания жизни в организмах.");
	 }
	 if (x == "co2" || x == "углекислый газ" || x == "остаток воздуха") {
	     check = 1;
		 alert(m+"Углекислый газ"+f+"CO2 (карбон, оксиген (x2))"+k+"Сам по себе является остатком"+o+"Обработанный альвеолами кислород.");
	 }
	 if (x == "hcl" || x == "соль" || x == "пищевая соль" || x == "соль пищевая" || x == "поваренная соль" || x == "соль поваренная") {
	     check = 1;
		 alert(m+"Соль (пищевая)"+f+"HCl (гидроген, хлор)"+ot+o+"Является немаловажным продуктом питания.");
	 }
	 if (x == "(c8h8)·(c4h6)·(c3h3n)" || x == "(c8h8)(c4h6)(c3h3n)" || x == "пластик" || x == "формула пластика" || x == "пластмасса" || x == "формула пластмассы") {
	     check = 1;
		 alert(m+"пластмасса"+f+"(C8H8)(C4H6)(C3H3N) (карбон (x8), гидроген (x8) · карбон (x4), гидроген (x6) · карбон (x3), гидроген (x3), нитроген)"+ot+o+"Один из основных материалов. Ценится благодаря своему соотношению цена-качество.");
	 }
	 if (x == "c4h6o5" || x == "яблоко" || x == "яблочная кислота" || x == "кислота яблока" || x == "формула яблока" || x == "малат" || x == "двухосновная оксикарбоновая кислота") {
		 check = 1;
	     alert(m+"Двухосновная оксикарбоновая кислота (яблочная кислота)"+f+"C4H6O5 (карбон (x4), гидроген (x6), оксиген (x5))"+ot+o+"Находится в зрелых яблоках, винограде, цитрусовых и применяется как натуральная пищевая добавка.");
	 }
	 if (x == "co" || x == "угарный газ" || x == "пердеж стасика") {
		 check = 1;
	     alert(m+"Угарный газ"+f+"CO (кабон, оксиген)"+ot+o+"Удушливый газ. Образуется в результате скопления большого количества дыма от огня.");
	 }
	 if (x == "sio2" || x == "стекло" || x == "формула стекла" ) {
		 check = 1;
	     alert(m+"Стекло"+f+"SiO2 (силиций, оксиген (x2))"+ot+o+"Получается в результате плавления кремнёземистого сырья высокой чистоты. Широко используется в промышленности и в быту.");
	 }
	 if (x == "песок" || x == "песчанник" || x == "говно на лопате") {
		 check = 1;
	     alert(m+"Песок"+f+"SiO2 (силиций, оксиген (x2))"+ot+o+"Рыхлая горная порода. Широко применяется в строительсте и в создании строительных материалов.");
	 }
	 if (x == "привет" || x == "прив" || x == "хай") {
		 check = 1;
	     alert("привет, гы))");
	 }
	 if (x == "naoh" || x == "гидроксид натрия" || x == "формула гидроксида натрия" || x == "самая распространённая щелочь" || x == "самая распространенная щёлочь" || x == "самая распространённая щёлочь" || x == "самая распространенная щелочь") {
		 check = 1;
	     alert(m+"Гидроксид натрия"+f+"NaOH (натрий, оксиген, гидроген)"+ot+o+"Является самой распространённой щёлочью. Едкий натрий применяется во множестве отраслей промышленности и для бытовых нужд.");
	 }
	 if (x == "сережа" || x == "гей" || x == "педик" || x == "артем" || x == "артём") {
		 check = 1;
	     alert("сережа гей");
	 }
	 if (x == "" || x == "" || x == "") {
		 check = 1;
	     alert(m+""+f+""+k+""+o+"");
	 }
	 if (x == "" || x == "" || x == "") {
		 check = 1;
	     alert(m+""+f+""+k+""+o+"");
	 } 
         if (check != 1) {
			 alert("Вещества с данной формулой ("+x+") не существует либо её ещё не добавили. проверьте правильность написания и повторите попытку. \nЕсли Вы проверили, но всё-равно выводится данное уведомление, пожалуйста, свяжитесь с нами - vova.pecherscky@gmail.com");
			 formula();
		 }	 
}