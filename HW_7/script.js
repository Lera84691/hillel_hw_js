// 1.Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.
//а. isSymbolPresentInString("abc","a") // true
//b. isSymbolPresentInString("abc","e") // false

let str1 = "abc";
let symbol1 = "a"


function isString(str1) {
  return typeof str1 === "string";
}

function isSymbolPresentInString(str1, symbol1) {
  if (!isString(str1)) return false;
  for (let i = 0; i < str1.length; i++) {
      if (str1[i] === symbol1) return true; 
  }

  return false;
}
console.log(isSymbolPresentInString("abc", "a")); // true
console.log(isSymbolPresentInString("abc", "e")); // false

// 2.Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден.
//а. getSymbolIndex("hello lol","h") // 0
//b. getSymbolIndex("hello lol","l") // 2
//c. getSymbolIndex("hello lol","v") // -1

let str2 = "hello lol";
let symbol2 = "h";

function getSymbolIndex(str2, symbol2) {
  if (!isString(str2)) return console.error("NOT_STRING");
  for (let i = 0; i < str2.length; i++) {
      if (str2[i] === symbol2) return i; 
  }

  return -1;
}

console.log(getSymbolIndex("hello lol", "h")); // 0
console.log(getSymbolIndex("hello lol", "l")); // 2
console.log(getSymbolIndex("hello lol", "v")); // -1

// 3.Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе.
//а. getNumberOfEven(223344) // 4
//b. getNumberOfEven(111) // 0

function getNumberOfEven(n) {
  let num = 0;
  while (n) {
    num += n % 2 === 0;
    n = Math.floor(n / 10);
  }
  return num;
};

console.log(getNumberOfEven(223344)); // 4
console.log(getNumberOfEven(111)); // 0

// 4.Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 

//forEach
const fruits = [
    'apples',
    'bananas',
    'oranges',
    'oranges',
    'apples',
    'kiwi',
    'kiwi',
    'apples',
  ];
  const fruitsUnique = {};
  fruits.forEach((fruit) => {
    fruitsUnique[fruit] = true;
  });
  const newFruits = Object.keys(fruitsUnique);

//map
const names = ['Вася', 'Петя', 'Маша'];
const sayHi = names.map((name) => {
  return `${name} привет!`;
});
console.log(sayHi);
// Array(3) [ "Вася привет!", "Петя привет!", "Маша привет!" ]

//filter
const age = [18, 22, 24, 30, 43];
const ageFilter = age.filter((res) => {
  return res > 22;
});
console.log(ageFilter);
// Array(3) [ 24, 30, 43 ]

//some
const numbers = [20, 16, 11, 13, 15];
const overTwenty = numbers.some((number) => {
  return number > 20;
});
console.log(overTwenty);
// false

//every 
const students = [
  { name: 'Alex', age: 17 },
  { name: 'Stas', age: 18 },
  { name: 'Mike', age: 22 },
  { name: 'Den', age: 20 },
];
const overEighteen = students.every((student) => {
  return student.age > 18;
});
console.log(overEighteen);
// false
