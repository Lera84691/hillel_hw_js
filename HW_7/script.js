 // 1.Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.
//а. isSymbolPresentInString("abc","a") // true
//b. isSymbolPresentInString("abc","e") // false

let str1 = "abc";
let symbol1 = "a"

function isSymbolPresentInString(str1, symbol1) {
    return !!~str1.indexOf(symbol1);
};

function isSymbolPresentInString(str1, symbol1) {
    for (var i = 0; i < str1.length; i++)
        if (str1.charAt(i) == symbol1) return true;
    return false;
};

console.log(isSymbolPresentInString("abc", "a")); // true
console.log(isSymbolPresentInString("abc", "e")); // false

// 2.Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден.
//а. getSymbolIndex("hello lol","h") // 0
//b. getSymbolIndex("hello lol","l") // 2
//c. getSymbolIndex("hello lol","v") // -1

let str2 = "hello lol";
let symbol2 = "h";

function getSymbolIndex(str2, symbol2) {
    return str2.indexOf(symbol2);
};

function getSymbolIndex(str2, symbol2) {
    for (var i = 0; i < str2.length; i++) if (str2.charAt(i) == symbol2) return i;
    return -1;
};

console.log(getSymbolIndex("hello lol", "h")); // 0
console.log(getSymbolIndex("hello lol", "l")); // 2
console.log(getSymbolIndex("hello lol", "v")); // -1

// 3.Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе.
//а. getNumberOfEven(223344) // 4
//b. getNumberOfEven(111) // 0

let current = "223344";
let count = 0;

function getNumberOfEven(n) {
    return n.toString().split('').reduce(function (count, current) {
        if (!(+current % 2)) count++;
        return count;
    }, 0);
};

function getNumberOfEven(n) {
    n = n.toString();
    let count = 0;
    for (var i = 0; i < n.length; i++) if (!(n.charAt(i) % 2)) count++;
    return count;
};

console.log(getNumberOfEven(223344)); // 4
console.log(getNumberOfEven(111)); // 0

// 4.Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 

//forEach
Array.prototype.customForEach = function(cb){
  for(let i = 0; i < this.length; i++){
      cb(this[i], i, arr)
  }
}

//map
Array.prototype.customMap = function(cb){
  let newArr = [];
  const arr = this;
  for(let i = 0; i < arr.length; i++){
      newArr.push(cb(arr[i],i,arr));
  }
  return newArr;
}

//filter
Array.prototype.customFilter = function(cb){
  let newArr = [];
  const arr = this;
  debugger;
  for(let i = 0; i < arr.length; i++){
      if(cb(arr[i],i,arr)){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

//some
Array.prototype.customSome = function(cb){
  const arr = this;
  for(let i = 0; i < arr.length; i++){
      if(cb(arr[i],i,arr)){
          return true
      }
  }
  return false;
}

//every
Array.prototype.customEvery = function(cb){
  const arr = this;
  for(let i = 0; i < arr.length; i++){
      if(!cb(arr[i],i,arr)){
          return false
      }
  }
  return true;
}