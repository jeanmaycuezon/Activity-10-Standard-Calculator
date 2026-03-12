let currentInput = "";
let operator = "";
let firstNumber = "";

function append(number){
    if(currentInput === "0"){
        currentInput = number;
    }else{
        currentInput += number;
    }

    document.getElementById("display").value = currentInput;
}

function setOperator(op){
    firstNumber = currentInput;
    operator = op;
    currentInput = "";

    document.getElementById("formula").innerText = firstNumber + " " + op;
}

function calculate(){

    let secondNumber = currentInput;
    let result = 0;

    if(operator === "+"){
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }

    if(operator === "-"){
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    }

    if(operator === "*"){
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    if(operator === "/"){
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    document.getElementById("formula").innerText =
        firstNumber + " " + operator + " " + secondNumber + " =";

    document.getElementById("display").value = result;

    currentInput = result;
}

function clearAll(){
    currentInput = "";
    operator = "";
    firstNumber = "";

    document.getElementById("display").value = "0";
    document.getElementById("formula").innerText = "";
}