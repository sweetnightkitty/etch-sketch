let dimensions = 16;
let units;
const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const eraser = document.querySelector("btn-eraser");
const color = document.querySelector("btn-color");

const sizeValue = document.querySelector(".size-value");
const sizeSlider = document.querySelector("input");


appendRow();

//.units does not exist in DOM until AFTER appendRow() is called.




function makeRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < dimensions; i++) {
        const unit = document.createElement("div");
        unit.classList.add("unit");

        row.appendChild(unit);
    }

    return row;
}

function appendRow() {
    for (let i = 0; i < dimensions; i++) {
        const row = makeRow();
        container.appendChild(row);
    };
    units = document.querySelectorAll(".unit");
}


units.forEach((unit) => changeColor(unit));



reset.addEventListener('click', resetColor);



sizeSlider.addEventListener('input', () => {
    resetColor();
    getDimensions();
    sizeValue.textContent = `${dimensions} x ${dimensions}`;
    emptyGame();
    appendRow();
    units.forEach((unit) => changeColor(unit));

})


function resetColor() {
    const units = document.querySelectorAll(".unit");
    units.forEach(function(i) {
        i.style.backgroundColor = "";
    })
}

function changeColor(unit) {
    unit.addEventListener('mouseover', () => {
        unit.style.backgroundColor = "#ff981a";
    })
}

function getDimensions() {
     let inputValue = document.querySelector("input").value;
     dimensions = inputValue;
}

function emptyGame() {
    container.innerHTML = "";
}
