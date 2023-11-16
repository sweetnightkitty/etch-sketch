const ORANGE = "#ff981a";
const GREEN = "#dce1c3";
let dimensions = 16;
let currentColor = ORANGE;

const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const eraser = document.querySelector(".btn-eraser");
const color = document.querySelector(".btn-color");

const sliderValue = document.querySelector(".size-value");
const slider = document.querySelector("input");

appendRow();






reset.addEventListener('click', resetColor);

slider.addEventListener('input', () => {
    resetColor();
    getDimensions();
    sliderValue.textContent = `${dimensions} x ${dimensions}`;
    emptyGame();
    currentColor = ORANGE;
    appendRow();
})

eraser.addEventListener('click', () => {
    currentColor = GREEN;
} );

color.addEventListener('click', () => {
    currentColor = ORANGE;
})



function makeRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < dimensions; i++) {
        const unit = document.createElement("div");
        unit.classList.add("unit");
        unit.addEventListener('mouseover', changeColor)
        unit.addEventListener('mousedown', changeColor)
        row.appendChild(unit);
    }

    return row;
}

function appendRow() {
    for (let i = 0; i < dimensions; i++) {
        const row = makeRow();
        container.appendChild(row);
    };
}




function resetColor() {
    let units = document.querySelectorAll(".unit");
    units.forEach(function(i) {
        i.style.backgroundColor = "";
    })
}



function getDimensions() {
     let inputValue = document.querySelector("input").value;
     dimensions = inputValue;
}

function emptyGame() {
    container.innerHTML = "";
}







let mouseDown = false;
document.body.addEventListener('mousedown', () => {
    mouseDown = true;
})
document.body.addEventListener('mouseup', () => {
    mouseDown = false;
})


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else {
        e.target.style.backgroundColor = currentColor;
    }
}