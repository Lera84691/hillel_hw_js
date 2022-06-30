document.body.appendChild(createLayout());

const buttonContainer = document.querySelector(".button-div");
const spanCounter = document.querySelector(".counter");
const ol = document.querySelector("ol");

let maxPage;

(function getMaxPage() {
    sendRequest(1, (res) => {
        maxPage = res.info.pages;
    })
})()

isAvailableButton(0);


buttonContainer.addEventListener("click", handler);


function handler(e) {
    const target = e.target;
    if (target.classList.contains("next-button")) nextButton();
    if (target.classList.contains("prev-button")) prevButton();
}


function nextButton() {
    spanCounter.textContent++;
    isAvailableButton(Number(spanCounter.textContent));
    sendRequest(spanCounter.textContent, (res) => createLi(res))
}

function prevButton() {
    spanCounter.textContent--;
    isAvailableButton(Number(spanCounter.textContent));
    sendRequest(spanCounter.textContent, (res) => createLi(res))
}

function isAvailableButton(counter) {
    const nextbtn = document.querySelector(".next-button");
    const prevbtn = document.querySelector(".prev-button");
    prevbtn.disabled = false;
    nextbtn.disabled = false;
    prevbtn.classList.remove("btn-light");
    nextbtn.classList.remove("btn-light");
    if (counter <= 1) {
        prevbtn.disabled = true;
        prevbtn.classList.add("btn-success");
    }
    if (counter >= maxPage) {
        nextbtn.disabled = true;
        nextbtn.classList.add("btn-success");
    };
}


function createLi(res) {
    ol.textContent = "";
    ol.setAttribute("start", (Number(spanCounter.textContent) * 10 - 9));
    res.results.forEach(el => {
        const li = document.createElement("li");
        li.classList.add("li-item");
        li.textContent = el.name;
        ol.appendChild(li);
    });
}


function sendRequest(page, callback) {
    const xhr = new XMLHttpRequest();
    let requestUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    xhr.open("GET", requestUrl);
    xhr.addEventListener("load", (e) => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data);
        };
    })
    xhr.send();
}
function buttonContainerFn() {
    spanCounter.textContent++;
    sendRequestFetch(spanCounter.textContent)
        .then(res => {
            createLi(res)
            if (!res.info.next) {
                disabledBtn()
                delFlex(ol)
            }
        })
        .catch(err => new Error(err));
}

function sendRequestFetch(id) {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then(response => {
            if (response.status === 200) {
                buttonContainer.textContent = "Загружаю";
                buttonContainer.disabled = true;
                return response.json()
            }
            Promise.reject(response)
        })
        .catch(err => reject(err))
        .finally(() => {
            buttonContainer.textContent = "Data";
            buttonContainer.disabled = false;
        })
}

function createLayout() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const ol = document.createElement("ol");
    ol.classList.add("ol");

    const p = document.createElement("p");
    p.textContent = "Страница: ";

    const span = document.createElement("span");
    span.classList.add("counter");
    span.textContent = 0;
    p.appendChild(span);


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-div");

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-button", "btn-success");

    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.classList.add("prev-button", "btn-success");

    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    wrapper.appendChild(ol);
    wrapper.appendChild(p);
    wrapper.appendChild(buttonContainer);

    return wrapper;
}