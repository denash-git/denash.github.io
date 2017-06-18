//создание машины
var newMashine = new Mashine();

// форм лист наличных
newMashine.renderCash();

// форм лист кофе
newMashine.renderList();

// приглашение
newMashine.display();

// внесение денег
function cashup() {
var choiceMoney = document.getElementsByClassName('MoneyItem');
for (var i = 0; i < choiceMoney.length; i++) {
  choiceMoney[i].addEventListener('click', function(e) {
    newMashine.setMoney(+e.target.dataset.name);
   })
};	
}
cashup();

// выбор напитка
function listUp(){
	var choiceDrink = document.getElementsByClassName('CoffeeItem');
for (var i = 0; i < choiceDrink.length; i++) {
  choiceDrink[i].addEventListener('click', function(e) {
    newMashine.idDrink(+e.target.dataset.name);		//запомнинаем напиток, позиция в массиве
    console.log(+e.target.dataset.name)
  })
};
}
listUp();

//событие добавления напитка вручную
var dn = document.getElementById('drink-name');
var dp = document.getElementById('drink-price');
document.getElementById('drink-add').addEventListener('click', function() {
	if (dn.value == "" || dp.value == 0) {
		alert ("Введите пожалуйста все значения !");
	} else {
			coffee.push({
			name: dn.value,
    		price: dp.value,
    		defoltSugar: 3
			});
		};
		var newMashine = new Mashine();
		newMashine.renderList();
		listUp();
});

//событие добавления купюры вручную
var сurr = document.getElementById('curr');
document.getElementById('curr-add').addEventListener('click', function() {
	if (curr.value > 101 || curr.value == 0) {
		alert ("Введите пожалуйста корректное значение !   от 1 до 100");
	} else {
			cash.push({
			coin: curr.value,
			});
		};
		var newMashine = new Mashine();
		newMashine.renderCash();
		cashup();
});

// изменение сахара
document.getElementById('btn+').addEventListener('click', function () {
	newMashine.changeSugar("max");
	console.log ("max");
})
document.getElementById('btn-').addEventListener('click', function () {
	newMashine.changeSugar("min");
	console.log ("min");
})

