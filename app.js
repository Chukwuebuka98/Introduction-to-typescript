"use strict";
const output = document.getElementById('console');
const button = document.querySelector("button");
function add(n1, n2) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error("Incorrect input!");
    // }
    return n1 + n2;
}
const number1 = 5;
const number2 = 5;
const result = add(number1, number2);
console.log(result);
output.innerText = result;
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log(result);
});
