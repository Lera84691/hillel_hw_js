const first = 10;
const second = 20;
let more = (first > second ?first + " is bigger":second + " is bigger");
console.log (more) 

let numb = 358;
let solution = numb % 10;
numb /= 10;
numb = Math.floor(numb);
console.log(solution);

if (solution % 2 === 0) console.log("even")
else console.log("not even")
 
      
const userName = prompt("Укажите своё имя")
console.log (userName)
const userAge = +prompt("Укажите свой возраст");
console.log (userAge)
const questionAlcohol = confirm("Алкоголь употребляем?");

if (!questionAlcohol)console.log ("Так держать");  
else if (userAge < 18 && userAge) console.log ("Ты что?! Маме расскажу!");
else if (userAge >= 18 && userAge <= 40) console.log ("Только водку с пивом не мешай...");
else if (userAge > 40) console.log ("Не злоупотребляйте");
      