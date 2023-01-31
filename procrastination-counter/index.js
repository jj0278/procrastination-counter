let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    if (count < 3) {
        countEl.style.color = "darkgreen";
    } else if (count < 5) {
        countEl.style.color = "#BB3E03";
    } else {
        countEl.style.color = "darkred";
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
        if (count < 3) {
            countEl.style.color = "darkgreen";
        } else if (count < 4) {
            countEl.style.color = "#BB3E03";
        } else {
            countEl.style.color = "darkred";
        }
    countEl.textContent = 0
    count = 0
    countEl.style.color = "black"
}

