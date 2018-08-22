var budget,
		nameShop,
		time,
		price,
		employers;


function start() {
	budget = prompt("Ваш бюджет на месяц?");

	while (isNaN(budget) || budget == "" || budget == null){
		budget = prompt("Ваш бюджет?");
	}

	nameShop = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

//start();

var mainList = {
		budget,
		nameShop, 
		shopGoods: [],
		employers:{},
		openShop: true,
		discount: true
};
 
 function chooseGoods(){
		for (var i = 0; i < 3; i++) {
			var a = prompt("Какой тип товаров будем продавать?");
			
			if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				alert("Товар введите!");
				console.log('Была ошибка');
				i--;
				}
 }
}
//chooseGoods();

function workTime(time){
	if (time < 0){
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20){
		console.log('Время работать');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа!');
	}
}

//workTime(18);

function dayBudget(){
	console.log('Бюджет за 1 день: '+Math.floor(budget/30));
}

//dayBudget();

function giveDiscount() {
	var price = prompt("Цена");
	var priceDiscount;

	while (isNaN(price) || price == "" || price == null){
		price = prompt("Цена?");
	}
	if (mainList.discount === true) {
		priceDiscount = Math.ceil((price*0.8)*100)/100;
		console.log('Цены со скидкой: '+ priceDiscount + ' евро');
	} else {
		console.log('Цена товара без скидки: '+ price + ' евро');
	}
}

//giveDiscount();

function inviteEmployers () {
	for(let a = 0; a < 4; a++) {
 		let person = prompt('Введите имя нового сотрудника:');
		mainList.employers[a + 1] = person;
}
	for(var n = 0; n < mainList.employers.length; n++){
   mainList.employers[n] = ( n + 1 ) + '.' + mainList.employers[n];
}
	console.log(mainList.employers);
	}

inviteEmployers();
//console.log('Бюджет за 1 день: '+Math.floor(budget/30));
console.log(mainList);