const userName = prompt("Как тебя зовут?");
const userYear = prompt("Какого ты года рождения?");
alert(userName + " " + ("2022" - userYear)); 

const a = Number(prompt("length"));
console.log(a);
const b = Number(prompt("width"));
console.log(b);
const c = Number(prompt("heigt"));
console.log(c);
const sum = a + b + c;
console.log(sum);
a % 2 === 0 ? console.log("a is even") : null;
b % 2 === 0 ? console.log("b is even") : null;
c % 2 === 0 ? console.log("c is even") : null;

const average = (a + b + c) / 3;
console.log(average);

let n = 24869;
let n1 = n % 10;
n /= 10;
n = Math.floor(n);
let n2 = n % 10;
n /= 10;
n = Math.floor(n);
let n3 = n % 10;
n /= 10;
n = Math.floor(n);
let n4 = n % 10;
n /= 10;
n = Math.floor(n);
let n5 = n % 10;
n /= 10;
n = Math.floor(n);
console.log(n5 + " " + n4 + " " + n3 + " " + n2 + " " + n1);