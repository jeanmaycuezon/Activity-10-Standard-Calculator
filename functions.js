function ClearInput() 
{
    document.getElementById("display").value = "";
    document.getElementById("display").focus();
}
function appendToDisplay(value)
{
    var display = document.getElementById('display');
    var currentValue = display.value;
    //
    if ("+-*/".includes(currentValue[currentValue.length - 1]) && "+-*/".includes(value)) {
        display.value = currentValue.slice(0, -1) + value;
    } else {
        //
        display.value += value;
    }

    display.focus();
}

function calculate() 
{
    var display = document.getElementById('display');
    var inputExpression = display.value;

    try {
        var result = eval(inputExpression);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result.toLocaleString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function showAppInfo() 
{
    alert('Standard Calculator V1.0');
}

function handleKeyPress(event) 
{
    var display = document.getElementById('display');
    var currentValue = display.value;
    //
    if (event.keyCode === 13) {
        //
        calculate();
    } else {
        //
        var pressedKey = String.fromCharCode(event.keyCode);
        if ("+-*/".includes(pressedKey)) {
            //
            if ("+-*/".includes(currentValue[currentValue.length - 1])) {
                //
                event.preventDefault();
            }
        }
    }
}