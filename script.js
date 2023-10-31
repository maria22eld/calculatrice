
let displayValue = "0";

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementsByClassName('row').textContent = displayValue;
}