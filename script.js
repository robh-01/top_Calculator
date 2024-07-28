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

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if(display.textContent == '0'){
            display.textContent = '';
        }
        display.textContent += buttons[i].textContent;
    })
}

for(let i = 0; i<operation.length;i++) {
    operation[i].addEventListener('click', function(){
        firstNumber = +display.textContent;
        operator = operation[i].textContent;
        display.textContent = '';
    })
}

equals.addEventListener('click', function(){
    if(firstNumber){
        if(operator){
            display.textContent = operate(firstNumber, +display.textContent, operator);
        }
    }
})

clear.addEventListener('click', function(){
    display.textContent = '0';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})