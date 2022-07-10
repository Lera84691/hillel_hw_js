document.body.appendChild(createEl("div", "wrapper"));
const wrapper = document.querySelector(".wrapper");
document.body.appendChild(createEl("button","am-pm-control"));
const btn = document.querySelector(".am-pm-control");
btn.innerHTML = "Change time format";

let timeFormat = false;

btn.addEventListener("click", () => {
    timeFormat = !timeFormat;
});

setInterval(() => {
  creationClock(createTimeObj(timeFormat), wrapper);
}, 1000);

function createTimeObj(timeFormat, date = new Date()) {
  const h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  let ampm = h >= 12 ? 'PM' : 'AM';
  let ampmHours = h % 12;
  ampmHours = ampmHours ? ampmHours : 12;

  if (timeFormat) {
    return [ampmHours, m, s, ampm];
  }

  return [h, m, s];
}

function creationClock(dateObject, el) {
  el.textContent = "";

  let clockString = dateObject.map((element) => {
    return `${element}`;
  });

  el.innerHTML = clockString.join(":");
}

function createEl(type, _class) {
  const el = document.createElement(type);
  el.classList.add(_class);
  return el;
}
