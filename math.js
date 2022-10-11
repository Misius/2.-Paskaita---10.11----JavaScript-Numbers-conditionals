'use strict';
console.log('maths.js');

let num1 = 11.55485892;
let num2 = 24;
let num3 = 5;

// math.round()
let rounded = Math.round(num1);
console.log('rounded', rounded);

let fixed = num1.toFixed(num1);
console.log('toFixed', fixed);

let sqauredRoot = Math.sqrt(num2)
console.log('Squared root', sqauredRoot);

let something = Math.pow(num3, 7)
console.log('something', something);

// Random
console.log('Math.random()', Math.random());
console.log('Math.random()', Math.random());

let random1to10 = Math.trunc(Math.random() * 10) + 1;
console.log('Random 1 to 10', random1to10);