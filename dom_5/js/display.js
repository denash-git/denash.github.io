function PrintDisplay() {
  money.__proto__= Pocket();
  var Display = [
    {
      line1: "Выберите напиток",
      line2: "или внесите наличные",
      line3: ""
    },
    {
      line1: "Вы внесли сумму: " + money,     // +сумма из кошелька
      line2: "Выберите напиток",
      line3: ""
    },
    {
      line1: "Вы выбрали напиток: ",
      line2: "Внесите сумму: ",         //+ цена напитка
      line3: ""
    },
    {
      line1: "Вы выбрали напиток: ",
      line2: "Цена напитка: ",
      line3: "Итого внесено: "
    },
    {
      line1: "Подождите пожалуйста",
      line2: "Цена напитка: ",
      line3: "Итого внесено: "
    },
  ];

    this.Print = function (number) {
      document.getElementById('line1').textContent = Display[number].line1;
      document.getElementById('line2').textContent = Display[number].line2;
      document.getElementById('line3').textContent = Display[number].line3;
    }
}
