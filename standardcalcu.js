// Elements
let display = document.getElementById("display");
let formula = document.getElementById("formula");

let firstNumber = null;
let operator = null;
let waitingForSecond = false;
let justCalculated = false;

// Map operator to display symbols
const displayOperator = {
    '+': '+',
    '-': '−',
    '*': '×',
    '/': '÷'
};

// Append numbers
function append(value) {
    if (justCalculated) {
        display.value = value;
        formula.textContent = "";
        justCalculated = false;
        waitingForSecond = false;
    } else if (waitingForSecond) {
        display.value = value;
        waitingForSecond = false;
    } else {
        display.value = display.value === "0" ? value : display.value + value;
    }
}

// Set operator
function setOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(display.value);
        formula.textContent = firstNumber + displayOperator[op];
    } else if (!waitingForSecond) {
        firstNumber = operate(firstNumber, parseFloat(display.value), operator);
        display.value = firstNumber;
        formula.textContent = firstNumber + displayOperator[op];
    } else {
        // change operator without changing number
        formula.textContent = firstNumber + displayOperator[op];
    }
    operator = op;
    waitingForSecond = true;
    justCalculated = false;
}

// Calculate
function calculate() {
    if (operator !== null && firstNumber !== null) {
        let secondNumber = parseFloat(display.value);
        let result = operate(firstNumber, secondNumber, operator);
        formula.textContent = firstNumber + displayOperator[operator] + secondNumber + "=";
        display.value = result;
        firstNumber = result;
        operator = null;
        waitingForSecond = false;
        justCalculated = true;
    }
}

// Clear all
function clearAll() {
    display.value = "0";
    formula.textContent = "";
    firstNumber = null;
    operator = null;
    waitingForSecond = false;
    justCalculated = false;
}

// Operation logic
function operate(num1, num2, op) {
    switch(op){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error";
        default: return num2;
    }
}