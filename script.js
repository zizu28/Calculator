const add = (a, b) => a + b
const substract = (a, b) => a - b
const divide = (a, b) => {
    if(b !== 0)
        return a / b
}
const multiply = (a, b) => a * b
let firstNumber
let secondNumber
let operator
const operate = (firstNumber,operator,secondNumber) => {
    if(operator === '+') return add(firstNumber,secondNumber)
    if(operator === '-') return substract(firstNumber,secondNumber)
    if(operator === '*') return multiply(firstNumber,secondNumber)
    if(operator === '/') return divide(firstNumber,secondNumber)
}