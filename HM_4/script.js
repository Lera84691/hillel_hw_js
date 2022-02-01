//1.Вывести на страницу в одну строку через запятую числа от 10 до 20 
// Как убрать последнюю запятую в ответе?
let a = 10;
let num = '';
while (a <= 20) {
  num += a + ', ';
  a++
}
num += a
console.log(num);


//2.Вывести квадраты чисел от 10 до 20

for (let b = 10; b < 21; b++) {
  console.log("Квадрат " + b + " = " + b * b);
}


//3.Вывести таблицу умножения на 7
let d = 7
for (let c = 1; c <= 9; c++) {
  console.log(d + "*" + c + "=" + (d * c));
}


//4.Найти сумму всех целых чисел от 1 до 15
let sum = 0;
for (let e = 1; e <= 15; e++) {
  sum += e;
}
console.log(sum);


//5. Найти произведение всех целых чисел от 15 до 35

let mult = 1;
for (let f = 15; f <= 35; f++) {
  mult *= f;
}
console.log(mult);


//6.Найти среднее арифметическое всех целых чисел от 1 до 500
let average = 0;
let g = 500;
for (g = 1; g <= 500; g++) {
  average += g;
}
console.log(average / 500);


//7. Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80
var h = 0;
for (var i = 30; i <= 80; i++) {
  if (i % 2 == 0)
    h += i;
}
console.log(h)


//8. Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3
let k = 200;
for (let j = 100; j < k; j++) {
  if (j % 3 === 0)
    console.log(j);
}

//9. Дано натуральное число. Найти и вывести на страницу все его делители. l m n
//- oпределить количество его четных делителей
//- найти сумму его четных делителей
const n = 200;
let even = 0;
let total = 0;

for (let divisor = 2; divisor <= n / 2; divisor++) {
  if (n % divisor === 0) {
    if (divisor % 2 == 0) {
      total++;
      even += divisor;
    }
  }
}

console.log(even);
console.log(total);


//10.Напечатать полную таблицу умножения от 1 до 10
let result = ' x   ';

function buff(val) {
  let buff = '';
  let pad = 4 - val;
  while (pad-- > 0)
    buff += ' ';
  return buff;
}

for (var p = 0; p < 11; p++) {
  for (var q = 0; q < 11; q++) {
    if (p == 0 && q > 0) {
      result += '[' + q + ']' + buff((q + '').length + 2);
    }
    else if (q == 0 && p > 0) {
      result += '[' + p + ']';
    }
    else if (p > 0 && q > 0) {
      result += buff((p * q + '').length) + p * q;
    }
  }
  result += '\n'
}
console.log(result)


//11.Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число. Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.
let r = Math.floor(Math.random() * 11);
console.log(r);
while (true) {
  let s = +prompt("Я загадал число между 0 и 10. Сможешь угадать?");
  if (!s) {
    alert("Приходи играть еще");
    break;
  } if (isNaN(r)) {
    alert("Ошибка ввода");
  } else if (s < r) {
    alert("Твое число меньше того, что я загадал.");
  } else if (s > r) {
    alert("Твое число больше загаданного мной");
  } else {
    alert("Ух ты! Ты угадал мое число!");
    break;
  }
}


//12. Запросить у пользователя число, которое будет высотой вершины прямоугольного треугольника. Вывести треугольник построчно через console.log
let t = 0;
let trian = "";
height = +prompt('Введите число, которое будет высотой вершины треугольника');

while (t < height) {
  for (let u = 0; u < t + 1; u++) trian += "*";
  console.log(trian);
  t++;
} 



