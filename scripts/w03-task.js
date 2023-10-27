/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;

}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){

    let subtractNum1 = Number(document.querySelector('#subtract1').value);
    let subtractNum2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNum1, subtractNum2);
}
 document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2 );
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */

function divide(number1, number2){
    return number1 / number2;
}

const divideNumbers =function(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').innerHTML = numbersArray.join(',');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = oddNumbers.join(',');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(',');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray.join(',');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
