'use strict';

let a: number = 24;
let out: number = 0;
//console.log('a % 2 == 0',a % 2 == 0)
//console.log('a % 2 === 0',a % 2 === 0)
if (a % 2 == 0) {
    console.log('if ' + a + ' is even increment ' + out, ' by one :', (out + 1));
}
else {
    console.log('-the number is not even-')
}
// if a is even increment out by one


let b: number = 13;
let out2: string = '';


// if b is between 10 and 20 set out2 to "Sweet!"
if (10 < b && b < 20) {
    out2 = 'Sweet!'
}
// if less than 10 set out2 to "Less!",
else if (b < 10) {
    out2 = 'Less!'
}
else if (b > 20) {
    out2 = 'More!'
}

// if more than 20 set out2 to "More!"
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = true;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
if (credits >= 50 && !isBonus) {
    c = c - 2
}
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
else if (credits < 50 && !isBonus) {
    c--
}
else if (isBonus) {
    c = c
}
    // if is_bonus is true c should remain the same

console.log(c);

let d: number = 8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"

if (d%4==0 && time<=200) {
    out3 = 'check'
}
// if time is more than 200
else if (time > 200) {
    out3 = 'Time out!'
}
else  {
    out3 = 'Run Forest Run!'
}
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
console.log(out3);