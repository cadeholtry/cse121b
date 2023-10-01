/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
let product = (factor1, factor2) => factor1 * factor2;
let multiplyNumbers = () => document.querySelector('#product').value = product(Number(document.querySelector('#factor1').value),Number(document.querySelector('#factor2').value));
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.querySelector('#year').textContent = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter((number) => {
    switch (number % 2) {
        case 1:
            return number;
            default:
                break;
    }
});
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter((number) => {
    switch (number % 2) {
        case 0:
            return number;
            default:
                break;
    }
});
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((total, number) => total + number);
/* Output Multiplied by 2 Array */
let multiplyBy2 = numbersArray.map((number) => 2 * number);
document.querySelector("#multiplied").innerHTML = multiplyBy2;
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multiplyBy2.reduce((total, number) => total + number);