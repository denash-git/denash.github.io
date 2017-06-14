function Pocket() {
  this.money = 0;     //внесено на депозит кофе
  Pocket.__proto__.money = function(){
    return this.money
  }

  var cash = [
    {
      coin: 1,
      curr: "рубль"
    },
    {
      coin: 2,
      curr: "рубля"
    },
    {
      coin: 5,
      curr: "рублей"
    },
    {
      coin: 10,
      curr: "рублей"
    },
    {
      coin: 50,
      curr: "рублей"
    },
    {
      coin: 100,
      curr: "рублей"
    },
    {
      coin: 500,
      curr: "рублей"
    },
    {
      coin: 1000,
      curr: "рублей"
    },
    {
      coin: 5000,
      curr: "рублей"
    }
  ];
  this.delivery = 0;      //свойство сдача
  this.RenderCash = function () {
    container = document.getElementById("pocket");
    for (var i = 0; i < cash.length; i++) {
      container.innerHTML += (
        `<li class="MoneyItem" data-name=${cash[i].coin}>
        ${cash[i].coin} &#8381;
        </li>`
      )
    }

  }
}
