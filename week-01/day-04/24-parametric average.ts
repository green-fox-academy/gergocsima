'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let yourNumber: number=10;
let sum: number =0;
let randomNr: number = 0;
randomNr=Math.random();
for (let i: number;i<=yourNumber;i++) {
randomNr=Math.random();
sum=sum+randomNr;
}
let avarageValue: number=sum/yourNumber;

console.log('The summariyed value of the random numbers: ',sum)
console.log('The avarage value of the ',yourNumber,'randomized numbers: ',sum/yourNumber,avarageValue)
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

} */