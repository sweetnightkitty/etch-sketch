const dimensions = 16;
const container = document.querySelector(".container");


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

appendRow();

const units = document.querySelectorAll(".unit");
units.forEach(function(i) {
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = "#ff981a";
    })
})

const reset = document.querySelector(".btn-reset");

reset.addEventListener('click', () => {
    const units = document.querySelectorAll(".unit");
    units.forEach(function(i) {
        i.style.backgroundColor = "";
    })
})

