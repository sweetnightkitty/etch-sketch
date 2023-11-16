let dimensions = 16;
const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const eraser = document.querySelector("btn-eraser");
const color = document.querySelector("btn-color");

const sizeValue = document.querySelector(".size-value");
const sizeSlider = document.querySelector("input");


appendRow();

//.units does not exist in DOM until AFTER appendRow() is called.
const units = document.querySelectorAll(".unit");


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
}




units.forEach(function(i) {
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = "#ff981a";
    })
})




reset.addEventListener('click', () => {
    const units = document.querySelectorAll(".unit");
    units.forEach(function(i) {
        i.style.backgroundColor = "";
    })
})
/*
eraser.addEventListener('click', () => {
    //eraser unit by unit
})

color.addEventListener('click', () => {
    //change units color
})
*/
sizeSlider.addEventListener('input', () => {
    let inputValue = document.querySelector("input").value;
    sizeValue.textContent = `${inputValue} x ${inputValue}`;
})


