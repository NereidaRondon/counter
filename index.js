let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let showTotal = document.getElementById("total-el");
let count = 0;
let countsArray = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function save() {
    countsArray.push(count);
    const initialValue = 0;
    
    let total = countsArray.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue);
    
    showTotal.innerHTML = total;
    
    let countStr = count + ", ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    countsArray = [];
    total = 0;
    showTotal.innerHTML = total;
    saveEl.textContent = "Saved Counts: ";
}