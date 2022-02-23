function createUl() {
  const element = document.createElement("ul");
  element.className = "list";

  return element;
}


function createLi(value) {
  const element = document.createElement("li");
  element.className = "list-item";
  element.innerText = value;

  return element;
}

function generateList(values) {
  const list = createUl();
  for (let i = 0; i < values.length; i++) {
    if (Array.isArray(values[i])) {
      const li = generateList(values[i]);
      list.appendChild(li);
    } else {
      const li = createLi(values[i]);
      list.appendChild(li);
    }
  } return list;
}

document.body.appendChild(generateList([1, 2, 3]));
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3])); 