const ORANGE = "#ff981a";
let dimensions = 16;
let units;

const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const eraser = document.querySelector("btn-eraser");
const color = document.querySelector("btn-color");

const sliderValue = document.querySelector(".size-value");
const slider = document.querySelector("input");




appendRow();
units.forEach((unit) => changeColor(unit, ORANGE));

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



reset.addEventListener('click', resetColor);

slider.addEventListener('input', () => {
    resetColor();
    getDimensions();
    sliderValue.textContent = `${dimensions} x ${dimensions}`;
    emptyGame();
    appendRow();
    units.forEach((unit) => changeColor(unit, ORANGE));
})

eraser.addEventListener('click', )


function resetColor() {
    const units = document.querySelectorAll(".unit");
    units.forEach(function(i) {
        i.style.backgroundColor = "";
    })
}

function changeColor(unit, color) {
    unit.addEventListener('mouseover', () => {
        unit.style.backgroundColor = color;
    })
}

function getDimensions() {
     let inputValue = document.querySelector("input").value;
     dimensions = inputValue;
}

function emptyGame() {
    container.innerHTML = "";
}
