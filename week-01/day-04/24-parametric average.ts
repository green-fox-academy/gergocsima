'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let yourNumber: number = 2;
let sum: number = 0;
let min: number = 0;
let max: number = 10;
let randomNr: number = 0;
//randomNr = Math.random();
//console.log('randomNr',randomNr);
//console.log('sum',sum);


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

for (let i: number=0; i < yourNumber; i++) {
    randomNr=getRandomInt(max);
    //console.log('random number generated',randomNr);
    sum = sum + randomNr;
    //console.log('summofnumbers',sum);
}

console.log('The summarized value of the random numbers: ', sum);
console.log('The avarage value of the ', yourNumber, 'randomized numbers: ', sum / yourNumber);
/* {Math.random(
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
      console.log(getRandomInt(3));
      // expected output: 0, 1 or 2
      
      console.log(getRandomInt(1));
      // expected output: 0
      
      console.log(Math.random());
      // expected output: a number between 0 and 1
      
)

}*/