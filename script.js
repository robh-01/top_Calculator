function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber, operator, secondNumber;

function operate(num1, num2, operation) {
    if (operation == '+') return add(num1, num2);
    if (operation == '-') return subtract(num1, num2);
    if (operation == 'x') return multiply(num1, num2);
    if (operation == '÷') return divide(num1, num2);
}


const buttons = document.querySelectorAll('.buttons .number');
const display = document.querySelector('.display');
const operation = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals-to');
const clear = document.querySelector('.all-clear');

function resetButtonOpacity() {
    for (let i = 0; i < operation.length; i++) {
        operation[i].style.opacity = '1';
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        resetButtonOpacity();
        if (display.textContent == '0' && buttons[i].textContent != '.') {
            display.textContent = '';
        }
        else if (display.textContent == '0' && buttons[i].textContent == '.') {
            display.textContent = '0';
        }
        if (firstNumber && operator) {
            if (!secondNumber) {
                display.textContent = '';
            }
            display.textContent += buttons[i].textContent;
            secondNumber = +display.textContent;
        }
        else {
            display.textContent += buttons[i].textContent;
        }
    })
}

for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener('click', function () {
        operation[i].style.opacity = 0.5;
        if (!secondNumber) {
            firstNumber = +display.textContent;
            operator = operation[i].textContent;
        }
        if (secondNumber) {
            firstNumber = Number.isInteger(operate(firstNumber, secondNumber, operator)) ? operate(firstNumber, secondNumber, operator) : operate(firstNumber, secondNumber, operator).toFixed(3);
            operator = operation[i].textContent;
            display.textContent = firstNumber;
            secondNumber = undefined;
        }
    })
}


equals.addEventListener('click', function () {
    if (firstNumber && operator) {
        display.textContent = Number.isInteger(operate(firstNumber, secondNumber, operator)) ? operate(firstNumber, secondNumber, operator) : operate(firstNumber, secondNumber, operator).toFixed(3);
        firstNumber = +display.textContent;
        secondNumber = undefined;
        operator = undefined;
    }
}
)

clear.addEventListener('click', function () {
    resetButtonOpacity();
    display.textContent = '0';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})