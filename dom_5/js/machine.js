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
    name: "Ристретто",
    price: 79,
    defoltSugar: 6
  },
  {
    name: "Мокачино",
    price: 56,
    defoltSugar: 4
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

function Mashine() {
  this.Drink = "";
  this.CoffeeList = coffee;
  this.RenderList = function () {
    var a = this.CoffeeList;
    container = document.getElementById("coffeebutton");
    for (var i = 0; i < a.length; i++) {
      container.innerHTML += (
        `<li value=${a[i].price} class="CoffeeItem" data-name=${a[i].name}>
        ${a[i].name}
        </li>`
      )
    }

  }
}
