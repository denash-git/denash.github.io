var newPocket = new Pocket();  //создание кошелька
var NewMashine = new Mashine(); //создание машины
var newDisplay = new PrintDisplay(); //создание дисплея



// формируется лист наличных
newPocket.RenderCash();

// внесение денег
var ChoiceMoney = document.getElementsByClassName('MoneyItem');
for (var i = 0; i < ChoiceMoney.length; i++) {
  ChoiceMoney[i].addEventListener('click', function(e) {
    newPocket.money = +newPocket.money + +e.target.dataset.name;
    console.log(newPocket.money);
    console.log(newDisplay.Print(1));
  })
};

// форм Лист кофе
NewMashine.RenderList();

// выбор напитка
var ChoiceDrink = document.getElementsByClassName('CoffeeItem');
for (var i = 0; i < ChoiceDrink.length; i++) {
  ChoiceDrink[i].addEventListener('click', function(e) {
    NewMashine.Drink = e.target.dataset.name;
    console.log(NewMashine.Drink);
  })
}

