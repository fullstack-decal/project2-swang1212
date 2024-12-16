const buttons = document.querySelector('.calc-rows')
const display = document.querySelector('.result-screen')
const calc = document.querySelector('.calc')

let operation = '';
let prevNum = 0;
let secondNum = 0;

buttons.addEventListener('click', event => {
    const button = event.target

    // number
    if(button.classList.contains('number')) {
        if(display.innerText === "0") {
            display.innerText = button.innerText
        } else if(calc.dataset.previousKeyType == 'operator') {
            display.innerText = button.innerText
        } else {
            display.innerText += button.innerText
        }
        calc.dataset.previousKeyType = 'number';
    }

    // operator

    if(button.classList.contains('operator')) {
        calc.dataset.previousKeyType = 'operator';
        if(button.innerText === '+') {
            operation = 'add'
        } else if(button.innerText === '-') {
            operation = 'subtract'
        } else if(button.innerText === 'x') {
            operation = 'multiply'
        } else if(button.innerText === '÷') {
            operation = 'divide'
        }
        prevNum = parseInt(display.innerText)
        console.log(operation)
        console.log(prevNum, typeof(prevNum))

    }
    console.log(prevNum)


    // function
    if(button.classList.contains('equals')) {
        calc.dataset.previousKeyType = 'equals';
        secondNum = parseInt(display.innerText)
        console.log(operation, secondNum, typeof(secondNum), prevNum, typeof(prevNum))
        if(operation == 'add') {
            display.innerText = secondNum + prevNum
        } else if(operation == 'subtract') {
            display.innerText = prevNum - secondNum
        } else if(operation == 'multiply') {
            display.innerText = secondNum * prevNum
        } else if(operation == 'divide') {
            display.innerText = prevNum / secondNum
        }
    }

    if(button.classList.contains('clear')) {
        display.innerText = 0;
    }

    const deletedLast = display.innerHTML.substring(0, display.innerText.length - 1)

    if(button.classList.contains('delete')) {
        display.innerHTML = deletedLast
    }
})
