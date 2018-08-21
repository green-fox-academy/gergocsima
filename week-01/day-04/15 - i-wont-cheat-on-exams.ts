'use strict';
export {}

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"
let stringToRepeat: string = ' "I won\'t cheat on the exam!"';
let times: number = 100;

  for (let j: number = 0; j < 100; j++) {
    console.log(/*j+' -'+*/stringToRepeat); // Prints the numbers from 0 to 99
  }