var coffee = [
  {
    name: "Американо",
    price: 29,
    defoltSugar: 3
  },
  {
    name: "Эспрессо",
    price: 50,
    defoltSugar: 4
  },
  {
    name: "Капучино",
    price: 36,
    defoltSugar: 2
  },
  {
    name: "Латте",
    price: 39,
    defoltSugar: 3
  },
  {
    name: "Мокко",
    price: 42,
    defoltSugar: 2
  },
  {
    name: "Гляссе",
    price: 45,
    defoltSugar: 5
  },
  {
    name: "Лунго",
    price: 64,
    defoltSugar: 5
  },
  {
    name: "Чай черный",
    price: 15,
    defoltSugar: 2
  },
  {
    name: "Вода",
    price: 5,
    defoltSugar: 0
  },
];

var cash = [
    {
      coin: 1,
    },
    {
      coin: 2,
    },
    {
      coin: 5,
    },
    {
      coin: 10,
    },
    {
      coin: 50,
    },
    {
      coin: 100,
    },
    {
      coin: 500,
    },
  ];

function Mashine() {
    var money = 0;          // внесено на депозит кофе
    var delivery = 0;      // сдача
    var idDrink = "false";   // id выбранного кофе
    var priceDrink = 0;    // цена напитка
    var nameDrink = "";     // наименование напитка
    var offMoney = true;    // on/off кошелька
    var sugar = 0;           //сахар

  //получаем количество депозита
  this.getMoney = function () {
    return money;
  }

  // добавление на депозит
  this.setMoney = function (give) {
    if (offMoney == true) {
      money = +money + +give;
    }
    console.log(money)
    this.display()
  }

  //изменение сахара
  this.changeSugar = function (btn) {
    if (idDrink != "false") {
      
      if (btn == "max") {
        sugar = sugar + 1;
      };
      if (btn == "min") {
        sugar = sugar - 1;
      };
      line2 = "Сахар: " + sugar + " ложек :-)";
      print();
    }
  }
  // логика сообщений пользователю
  this.display = function() {
    if (money == 0 && idDrink == "false") {
      line1 = "Мы приветствуем Вас !";
      line2 = "выберите напиток или";
      line3 = "внесите наличные";
    }
    if (money != 0 && idDrink == "false") {
      line1 = "Вы внесли сумму: " + money + " руб.";
      line2 = "выберите напиток ....";
      line3 = "";
    }
    if (money == 0 && idDrink != "false") {
      line1 = "Вы выбрали напиток: " + nameDrink;
      line2 = "цена напитка: " + priceDrink + " руб.";
      line3 = "внесите наличные";
    }
    if (money != 0 && idDrink != "false" && money < priceDrink) {
      line1 = "Вы выбрали напиток: " + nameDrink;
      line2 = "цена напитка: " + priceDrink + " руб.";
      line3 = "осталось внести: " + (priceDrink - money) + " руб."; 
    }
    if (money >= priceDrink && idDrink != "false") {
      setTimeout(function() {
        line1 = "Ваш напиток готов ! ";
        line2 = "";
        line3 = "ждём Вас еще ... ";
        print();
      }, 5000);
        line1 = "Ваш напиток готовиться ! ";
        line2 = "Ваша сдача: " + (money - priceDrink) + " руб.";
        line3 = "минуточку ... ";
        money = 0;
        idDrink = "false";
    }
    print();

  }

  // вывод подг. текста на экран
  function print () {
    document.getElementById('line1').textContent = line1;
    document.getElementById('line2').textContent = line2;
    document.getElementById('line3').textContent = line3;
  }

  // выводим список купюр
  this.renderCash = function () {
    container = document.getElementById("pocket");
    container.innerHTML ="";
    for (var i = 0; i < cash.length; i++) {
      container.innerHTML += (
        `<li class="MoneyItem" data-name=${cash[i].coin}>
        ${cash[i].coin} &#8381;
        </li>`
      )
    }

  }
  
  //позиция напитка в массиве, если выбран, цена и имя
  this.idDrink = function (give) {
    console.log(give)
    idDrink = give;
    priceDrink = coffee[give].price;
    nameDrink = coffee[give].name;
    sugar = coffee[give].defoltSugar
    this.display()
  }

  // форм списка кофе
  this.renderList = function () {  
    container = document.getElementById("coffeebutton");
    container.innerHTML ="";
    for (var i = 0; i < coffee.length; i++) {
      container.innerHTML += (
        `<li class="CoffeeItem" data-name=${i}><span>${coffee[i].price} &#8381;</span>
            ${coffee[i].name}</li>`
      )
    }

  }
}
