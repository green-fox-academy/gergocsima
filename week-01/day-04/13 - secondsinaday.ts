'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let secondsPerDay: number =(24*60**2);
console.log('Seconds per day: ', secondsPerDay,'sec' );
let remainingSecond: number = secondsPerDay - ((currentHours*60**2)+(currentMinutes*60)+(currentSeconds));
console.log('Remaining second from a day: ', remainingSecond, 'sec');