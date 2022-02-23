// 1.Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает объект со всеми свойствами. В данном задании используйте for ... in для работы со свойствами объектов.

function copy(origin) {
  let target = {};
  for (let key in origin) {
    target[key] = origin[key];
  }
  return target;
};

const origin = {
  name: "Дім Ґуччі",
  autor: "Сара Ґей Форден",
  year: 2021,
  edition: "Фабула",
  pages: 400,
};

console.log(copy(origin));

// 2.Напишите функцию, принимающую и сравнивающую два объекта. Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false. Функция должна учитывать, что количество свойств в двух объектах может отличаться.

function isEqual(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }
  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];

    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  brand: "Mazda",
  model: "CX-5",
  engine: "2.0 SKYACTIV-G 145",
  fuel: "бензи",
  "Engine capacity": 1998,
  "Maximum speed": 197,
  "Acceleration time": 9.3,
};

const obj2 = {
  brand: "Toyota",
  model: "RAV4",
  engine: "2.0 Valvematic",
  "Engine capacity": 1987,
  "Maximum speed": 180,
  "Acceleration time": 10.2,
};

console.log(objectsAreSame(obj1, obj2));


// 3.Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква. Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз. Функция не должна использовать console.log, а должна вернуть объект с данными.

function calc(str) {
  let result = {};
  for (const letter of str) {
    const count = result[letter] === undefined ? 0 : result[letter];
    result[letter] = count + 1;
  }
  return result;
}
const answer = calc("aabbccc");
console.log(answer);

// или 

function calc(str) {
  result = {};
  for (const letter of str) {
    if (result[letter] !== undefined) {
      const count = result[letter];
      result[letter] = count + 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

const r = calc("aabbccc");
console.log(r);

