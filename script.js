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
    if (operation == '/') return divide(num1, num2);
}


const buttons = document.querySelectorAll('.buttons .number');
const display = document.querySelector('.display');
const operation = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals-to');
const clear = document.querySelector('.all-clear');
const negate = document.querySelector('.sign-negation');
const percent = document.querySelector('.percent');
const backspace = document.querySelector('.backspace');

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
        if (buttons[i].textContent == '.' && display.textContent.includes('.')) {
            return;
        }
        if (firstNumber && operator) {
            if (!secondNumber && secondNumber != 0) {
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
        else {
            firstNumber = operate(firstNumber, secondNumber, operator);
            operator = operation[i].textContent;
            display.textContent = Number.isInteger(firstNumber) ? firstNumber : parseFloat(firstNumber.toFixed(3));
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

negate.addEventListener('click', function () {
    resetButtonOpacity();
    let negativeTemp = +display.textContent;
    negativeTemp = 0 - negativeTemp;
    display.textContent = negativeTemp;
    if (firstNumber && operator) {
        secondNumber = +display.textContent;
    }
})

percent.addEventListener('click', function () {
    resetButtonOpacity();
    display.textContent /= 100;
    firstNumber = display.textContent;
    secondNumber = undefined;
    operator = undefined;
})

backspace.addEventListener('click', function () {
    resetButtonOpacity();
    display.textContent = display.textContent.substring(0, (display.textContent.length) - 1);
    if (firstNumber && operator) {
        secondNumber = +display.textContent;
    }
})

//keyboard functionality

// document.addEventListener('keydown', (e) => {
//     let clickEvent = new Event('click');
//     for (let i = 0; i < buttons.length; i++) {
//         if (e.key == buttons[i].textContent) {
//             buttons[i].dispatchEvent(clickEvent);
//         }
//     }
//     for (let i = 0; i < operation.length; i++) {
//         if (e.key == operation[i].textContent) {
//             buttons[i].dispatchEvent(clickEvent);
//         }
//     }
// })