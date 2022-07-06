document.body.appendChild(createEl("div", "wrapper"))
const wrapper = document.querySelector(".wrapper");


setInterval(() => {
    creationClock(createTimeObj(),wrapper)
}, 1000);

function createTimeObj(date = new Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return `${h}  ${m}  ${s}`;
}


function creationClock(dateString,el) {
    el.textContent = "";

    const [ hour, colon ,minutes, colon2 ,seconds ] = dateString.split(" ");

    const arr = [[hour,"hour"],[colon, "colon"],[minutes, "minutes"],[colon2,"colon"],[seconds, "seconds"]].map(item => {
        const el = createEl("div", item[1]);
        el.textContent = item[0] === "" ? ":" : addZero(item[0]);

        return el;
    })

    arr.forEach(item => el.appendChild(item));

    function addZero(i){
        return i > 9 ? i : [0] + i;
    }
} 

function createEl(type, _class){
    const el =  document.createElement(type);
    el.classList.add(_class);
    return el;
}