const ORANGE = "#ff981a";
const GREEN = "#dce1c3";
let dimensions = 16;
let currentColor = ORANGE;
let rainbowMode = false;

const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const eraser = document.querySelector(".btn-eraser");
const rainbow = document.querySelector(".btn-rainbow");

const sliderValue = document.querySelector(".size-value");
const slider = document.querySelector(".size-slider");

const colorPicker = document.querySelector(".color-picker");

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
    rainbowMode = false;
    currentColor = GREEN;
} );



colorPicker.addEventListener('input', () => {
    rainbowMode = false;
   const pickedColor = colorPicker.value;
   currentColor = pickedColor;
   changeColor();
})

rainbow.addEventListener('click', () => {
    rainbowMode = true;
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
        i.style.backgroundColor = GREEN;
    })
}

function getDimensions() {
     let inputValue = document.querySelector(".size-slider").value;
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
    else if (rainbowMode === false) {
        e.target.style.backgroundColor = currentColor;
    } else {
        const colorR = Math.floor(Math.random() * 256);
        const colorG = Math.floor(Math.random() * 256);
        const colorB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
    }
}



