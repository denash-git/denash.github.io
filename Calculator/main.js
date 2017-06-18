var x = y = ""; // x, y - накапливаемые числа для расчета
var key = ""; // key- оператор расчета, хранит предидущий выбор оператора
var flag = 0; // флаг необходимости предрасчета

// ф. вывода результата нажатия кнопок
function display(){
  document.getElementById('answer').textContent = x + key + y;
}

// ф. формирования числа х до нажатия кн. операции, после нажатия формируется y
function assign(number) {
  if (key == "") {
    x = x + number;
    console.log(x, y)
  } else {
    y = y + number;
    console.log(x, y);
  }
  display();
}

// ф. вычисления предрезультата, сохраняется в x
function resume() {
    if (key == " + ") {x = +x + +y};
    if (key == " - ") {x = +x - +y};
    if (key == " / ") {x = +x / +y};
    if (key == " * ") {x = +x * +y};
    y=""; //y- обнуляется для формирования следующего числа
}

//нажата кнопка +
document.getElementById('plus').addEventListener('click', function() {
console.log(flag, x, y, key)
  if (flag == 1) { //если оператор уже нажимался, выполнить расчет
    resume();
  } else { //иначе, необходимо вычислить при следующем выборе любого оператора
  flag = 1;
}
  key = " + " //какой очередной оператор нужно выполнить
  console.log(flag, x, y, key);
  display();
})

//кнопка обнуления, сбрасываем все по дефолту, на экран выводим 0
document.getElementById('reset').addEventListener('click', function() {
  key=x=y= "";
  flag = 0
  console.log(flag, x, y, key);
  document.getElementById('answer').textContent = 0;
})

//запросили резултат
document.getElementById('result').addEventListener('click', function() {
  if (x != "" && y != "" && key !="") { //проверяем данные для расчета
    resume(); //есть? вычисляем
    console.log(flag, x, y, key);
    display();
  }
})

document.getElementById('minus').addEventListener('click', function() {
console.log(flag, x, y, key)
  if (flag == 1) {
    resume();
  } else {
  flag = 1;
}
  key = " - ";
  console.log(flag, x, y, key);
  display();
})

document.getElementById('umn').addEventListener('click', function() {
console.log(flag, x, y, key)
  if (flag == 1) {
    resume();
  } else {
  flag = 1;
}
  key = " * ";
  console.log(flag, x, y, key);
  display();
})

document.getElementById('del').addEventListener('click', function() {
console.log(flag, x, y, key)
  if (flag == 1) {
    resume();
  } else {
  flag = 1;
}
  key = " / ";
  console.log(flag, x, y, key);
  display();
})

document.getElementById('7').addEventListener('click', function() {
  assign(7);
})
document.getElementById('8').addEventListener('click', function() {
  assign(8);
})
document.getElementById('9').addEventListener('click', function() {
  assign(9);
})
document.getElementById('4').addEventListener('click', function() {
  assign(4);
})
document.getElementById('5').addEventListener('click', function() {
  assign(5);
})
document.getElementById('6').addEventListener('click', function() {
  assign(6);
})
document.getElementById('1').addEventListener('click', function() {
  assign(1);
})
document.getElementById('2').addEventListener('click', function() {
  assign(2);
})
document.getElementById('3').addEventListener('click', function() {
  assign(3);
})
document.getElementById('0').addEventListener('click', function() {
  assign(0);
})
