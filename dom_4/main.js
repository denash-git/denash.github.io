//Массив Объектов
var companies = [
	{
		name: "Компания 1",
		price: 52353,
    newprice: 58965,
    adress: "Chelny, Vostok  d 6"
	},
	{
		name: "Компания 2",
		price: 53540,
    newprice: 78151,
    adress: "Moskva, Krasnaja d 78"
	},
	{
		name: "Компания 3",
		price: 102352,
    newprice: 29654,
    adress: "Voronez, Severny d 1"

	},
  {
		name: "Компания 4",
		price: 23576,
    newprice: 269851,
    adress: "Izevsk, Lenina d 7"
	},
  {
		name: "Компания 5",
		price: 67540,
    newprice: 56987,
    adress: "Yljanovsk, Lenina 98"
	},
];

var container = document.getElementById('list');
var name1 = document.getElementById('company-name'); //введенные значения на форме
var price = document.getElementById('company-price'); //введенные значения на форме
var adresss = document.getElementById('company-adress');   //введенные значения на форме
var profitPrice = 0;
var profitButton = document.getElementById('profit');


//Случайное число целое
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//объект ООП
function company(a, b) {
	this.name = "Компания " + a
	this.price = getRandom(25639, 70158);
	this.newprice = getRandom(25639, 70158);
	this.adress = "Адрес " + b;
	}


// ф. вывода таблицы на экран
function display() {
  container.innerHTML ='';
	for(var i = 0; i < companies.length; i++) {
    container.innerHTML += '<tr>' + '<td>' + companies[i].name + '</td>' + '<td>' + companies[i].price + '</td>' + '<td>' + companies[i].newprice + '</td>' + '<td>' + companies[i].adress + '</td>' + '</tr>';
}
summary()
}

//ф. переопределения цен на компании по курсу рандом
function render() {
	for(var i = 0; i < companies.length; i++) {
    companies[i].price = companies[i].newprice;
    companies[i].newprice = getRandom(12593, 59876);
	}
}

// добаляем в массив несколько компаний, макс 7

var look = getRandom(3, 7);
do {
	var stake = companies.length;
	stake++;
	var temp = new company(stake, look);
	companies.push(temp);
	look--
} while (0 < look);

//первоначальный вывод таблицы
display();

//событие добавления компании вручную
document.getElementById('add').addEventListener('click', function() {
	if (name1.value == "" || price.value == 0 || adresss.value == "") {
		alert ("Введите пожалуйста все значения !");
	} else {
		companies.push({
			name: name1.value,
			price: 0,
	    newprice: price.value,
	    adress: adresss.value
	});
}
display();
});

//ф. определения мин и макс по новой цене
function summary() {
	profitPrice = Math.min.apply(Math, companies.map(function(item) {
		return item.newprice;
	}));
  container.innerHTML += "</br>Минимальная новая цена:  " + profitPrice;
  profitPrice = Math.max.apply(Math, companies.map(function(item) {
		return item.newprice;
	}));
  container.innerHTML += "</br>Максимальная новая цена:  " + profitPrice;
}

//нажали обновить курс
document.getElementById('profit').addEventListener('click', function () {
  render();
  display();
})

document.getElementById('t$new').addEventListener('click', function () {
  companies.sort(function (a, b) {
  if (a.newprice > b.newprice) {
    return 1;
  }
  if (a.newprice < b.newprice) {
    return -1;
  }
  return 0;
});
  display()
})

document.getElementById('t$old').addEventListener('click', function () {
  companies.sort(function (a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
});
  display();
})

document.getElementById('tname').addEventListener('click', function () {
	companies.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
  display();
})

document.getElementById('tadr').addEventListener('click', function () {
	companies.sort(function (a, b) {
  if (a.adress > b.adress) {
    return 1;
  }
  if (a.adress < b.adress) {
    return -1;
  }
  return 0;
});
  display();
})
