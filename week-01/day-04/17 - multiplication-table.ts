'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

//used this variables to test if the script works good, otherwise they do not needed
let limiter: number = 10;
let starter: number = 1;
for (let j: number = starter; j <= limiter; j++) {
    console.log(j + " * " + number + " = " + j * number);
}
//less code written, shorter
let l: number = 15
for (let k: number = 1; k <= 10; k++)
    console.log(k + '*' + l + '=' + k * l);
