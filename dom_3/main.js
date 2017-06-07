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
function getRandom() {
  return Math.floor(Math.random() * (58459 - 23478)) + 23478;
}

// ф. вывода таблицы на экран
function display() {
  container.innerHTML ='';
	container.innerHTML += "<caption>супер таблица</caption><tr><th>Наименование</th><th>Цена старая</th><th>Цена новая</th><th>Адрес</th><tr>";
	for(var i = 0; i < companies.length; i++) {
    container.innerHTML += '<tr>' + '<td>' + companies[i].name + '</td>' + '<td>' + companies[i].price + '</td>' + '<td>' + companies[i].newprice + '</td>' + '<td>' + companies[i].adress + '</td>' + '<tr>';
}
}

//ф. переопределения цен на компании по курсу рандом
function render() {
	for(var i = 0; i < companies.length; i++) {
    companies[i].price = companies[i].newprice
    companies[i].newprice = getRandom();
	}
}

document.getElementById('add').addEventListener('click', function() {
	companies.push({
		name: name1.value,
		price: 0,
    newprice: price.value,
    adress: adresss.value
	});
	display();
});

function summary() {
	profitPrice = Math.min.apply(Math, companies.map(function(item) {
		return item.newprice;
	}));
  container.innerHTML += "минимальная цена: " + profitPrice;
  profitPrice = Math.max.apply(Math, companies.map(function(item) {
		return item.newprice;
	}));
  container.innerHTML += "</br >максимальная цена: " + profitPrice;
	console.log(profitPrice);
}

document.getElementById('profit').addEventListener('click', function () {
  render();
  display();
  summary();
})

document.getElementById('upbutton').addEventListener('click', function () {
  companies.sort(function (a, b) {
  if (a.newprice > b.newprice) {
    return 1;
  }
  if (a.newprice < b.newprice) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});
  display()
  summary()
})

document.getElementById('downbutton').addEventListener('click', function () {
  companies.sort(function (a, b) {
  if (a.newprice > b.newprice) {
    return 1;
  }
  if (a.newprice < b.newprice) {
    return -1;
  }
  return 0;
});
  companies.reverse()
  display()
  summary()
})
