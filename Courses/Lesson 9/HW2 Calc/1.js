let operand1 = "";
let operand2 = "";
let operator;
function updateDisplay(newValue) {
    let currentDisplayValue = document.getElementsByClassName("display")[0].innerHTML;
    currentDisplayValue = currentDisplayValue + newValue;
    document.getElementsByClassName("display")[0].innerHTML = currentDisplayValue;
}
function updateDisplayOperator(newOperator) {
    let currentDisplayValue = document.getElementsByClassName("display")[0].innerHTML;
    let newDisplayValue = currentDisplayValue.substring(0, currentDisplayValue.length - 1) + newOperator;
    document.getElementsByClassName("display")[0].innerHTML = newDisplayValue;
}

function setDisplay(value) {
    document.getElementsByClassName("display")[0].innerHTML = value;
}
function numberButtonClicked(event) {

    if (operator) {
        if (operand2.length < 8) {
            updateDisplay(event.value);
            operand2 += event.value;
        }
    }
    else {
        if (operand1.length < 8) {
            updateDisplay(event.value);
            operand1 += event.value;
        }
    }
}
function operatorClicked(event) {
    if (operand1) {
        if (operator) {
            updateDisplayOperator(event.value);
        }
        else {
            updateDisplay(event.value);
        }
        operator = event.value;
    }
}
function calculateResult() {
    switch (operator) {
        case "+":
            return parseInt(operand1) + parseInt(operand2);
        case "-":
            return parseInt(operand1) - parseInt(operand2);
        case "÷":
            return parseInt(operand1) / parseInt(operand2);
        case "×":
            return parseInt(operand1) * parseInt(operand2);
    }
}
function equalButtonClicked(event) {
    let result = calculateResult();
    setDisplay(result);
}
function clearDisplayClicked(event) {
    setDisplay("");
    clearState();
}
function clearState() {
    operand1 = "";
    operand2 = "";
    operator = "";
}

console.log();