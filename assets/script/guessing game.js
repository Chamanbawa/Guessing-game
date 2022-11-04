'use strict';
/*

JavaScript Basics
Preet

Basic interaction
*/


function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const form = select('form');
const numberOne = select('.number-one');
const numberTwo = select('.number-two');
const btn = select('.get-result');
const output = select('.output p');
const reset = select('.reset');
const ending = select('.ending');


function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input))
        return true;

        return false;
}

function again() {
    reset.classList.add('is-visible');
}

let count = 4;


function randm() {
    const num = Math.floor(Math.random() * 50 + 1);
    return num;
}

let b = randm();
onEvent('click', btn, function () {

    let a = numberOne.value;
    let c = 50;
    
    if (isNumber(a)) {
        if (count < 1) {
            again();
            ending.innerText = `Please restart the Game`;
            output.innerText = `The number was ${b}`;
            output.innerText = ` ${result}`;

            count = 4;
        } else if (a > c || a < 1) {
            output.innerText = `Choose between ${b}1 - 50 ${count}`;
            count = 4;
        } else if ((a == b)) {
            count = 1;
            output.innerText = `Congratulations You won: `;
            numberOne.value = '';
            again();
        } else if (a < b) {
            output.innerText = `Your number is smaller: ${b}You have ${count} chances`;
        } else if (a > b) {
            output.innerText = `Your number is greater: ${b}You have ${count} chances `;

        }
        count--;
    }
    else {
        output.innerText = 'Enter a valid number:';
    }

});

onEvent('click', reset, function () {
    randm();
    output.innerText = '';
    numberOne.value = '';
    ending.innerText = '';
    count = 4;
    reset.classList.remove('is-visible');

});;