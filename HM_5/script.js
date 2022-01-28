function circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}
let c = new circle(4);
console.log('Area', c.area().toFixed(2));
console.log('Perimeter', c.perimeter().toFixed(2));


function average(first, second) {
  return (first + second) / 2;
}
console.log("Average", average(6, 9));


function calc(a, b, action) {
  switch (String(action)) {
    case "+":
      return +a + +b;
    case "-":
      return +a - +b;
    case "*":
      return +a * +b;
    case "/":
      return +a / +b;
    case "%":
      return +a % +b;
    case "^":
      return +a ^ +b;
    default:
      console.log("try again");
      break;
  }
};

console.log(calc(8, 3, "+"));
console.log(calc(8, 3, "-"));
console.log(calc(8, 3, "*"));
console.log(calc(8, 3, "/"));
console.log(calc(8, 3, "%"));
console.log(calc(8, 3, "^"));
console.log(calc(8, 3, "0"));
