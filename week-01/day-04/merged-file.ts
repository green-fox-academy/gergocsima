'use strict';

// Modify this program to greet you instead of the World!
console.log('Hello, Gergo!');'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as an integer
// Your height in meters as a float
// Whether you are married or not as a boolean

let name1: string = 'Gergo';
console.log(name1);
let age: number = 34;
console.log(age);
let height: number = 1.81;
console.log(height + 'm');
let married: boolean = true;
console.log(married);'use strict';

let a01: number = 3;
// make it bigger by 10
a01 = a01 + 3;
console.log(a01);

let b01: number = 100;
// make it smaller by 7
b01 = b01 - 7;
console.log(b01);

let c01: number = 44;
// double c's value
c01 = c01 * 2;
console.log(c01);

let d01: number = 125;
// divide d's value by 5
d01 = d01 / 5;
console.log(d01);

let e01: number = 8;
// what's the cube of e's value?
e01 = e01 ** 3;
console.log(e01);

let f1: number = 123;
let f2: number = 345;
let f1f2relation: boolean = f1 > f2;
console.log(f1f2relation);
// tell if f1 is bigger than f2 (as a boolean)
let g1: number = 350;
let g2: number = 200;
let g1g2relation:  boolean = g2*2 > g1;
console.log(f1f2relation);
// tell if the double of g2 is bigger than g1 (pras a boolean)
let h: number = 1357988018575474;
let KnowDivisor:  boolean = (h%11 == 0);
console.log( h%11)
console.log(KnowDivisor);
// tell if h has 11 as a divisor (as a boolean)
let i1: number = 10;
let i2: number = 3;
let KnowHigher:  boolean = (i2**3>i1 && i1>i2**2);
console.log(KnowHigher);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let j: number = 1521;
console.log('KnowThreeDivider ' +j/5)
console.log('KnowThreeDivider ' +j/3)
let KnowThreeAsDivider: boolean = (j%3 == 0);
console.log(KnowThreeAsDivider);
let KnowFiveAsDivider: boolean = (j%5 == 0);
console.log(KnowFiveAsDivider);
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
let k1: string = k;
for ( let i: number = 0; i < 5; i ++) {
    k +=k1;
}
console.log(k);

console.log(k1+k1+k1+k1);

// fill the k variable with its content 4 times
console.log(k);'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 10;
let sideB: number = 5;
let sideC: number = 20;

let SurfaceArea: number = 2*((sideA*sideB)+(sideA*sideC)+(sideB*sideC));
console.log('Surface Area: '+ SurfaceArea);

let Volume: number = sideA*sideB*sideC;
console.log('Volume: ' +Volume);'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let secondsPerDay: number =(24*60**2);
console.log('Seconds per day: ', secondsPerDay,'sec' );
let remainingSecond: number = secondsPerDay - ((currentHours*60**2)+(currentMinutes*60)+(currentSeconds));
console.log('Remaining second from a day: ', remainingSecond, 'sec');'use strict';
export{}

let a: number = 24;
let out: number = 0;
if (a%2 ===0 ) {
    out++;
    }
    console.log(out)
// if a-01 is even increment out by one


let b: number = 13;
let out2: string = '';

if ( b > 10 && b<20) {
    out2 = 'Sweet!';
}
else if (b>20) {
    out2 = 'More!';
}
else  {
    out2 = 'Less!';
}
console.log(out2);
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;
if (credits >= 50 && !isBonus) {
    c=c-2;
}
else if (credits < 50 && !isBonus ){
    c=c-1; 
}
else if (isBonus){
    c=c;
}
// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
console.log(c);


// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
let d: number =  8;
let time: number = 120;
let out3: string = '';

if (d%4==0 && time <200) {
    out3 = 'check';
} 
else if (time > 200) {
    out3 = 'Time out'
}

else {
    out3 = 'Run Forest Run!';
}
console.log(out3);
// Modify this program to console.log Humpty Dumpty riddle correctly
console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');// Greet 3 of your classmates with this program, in three separate lines like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!

console.log('Hello, Jani!');
console.log('Hello Mark!');
console.log('Hello Bandi!');

// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87

console.log('Gergo');
console.log('34');
console.log('1.83');

// Create a program that prints a few operations on two numbers: 22 and 13
// Print the result of 13 added to 22
// Print the result of 13 substracted from 22
// Print the result of 22 multiplied by 13
// Print the result of 22 divided by 13 (as a decimal fraction)
// Print the reminder of 22 divided by 13// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87

console.log('Gergo');
console.log('34');
console.log('1.83');// Create a program that prints a few operations on two numbers: 22 and 13
// Print the result of 13 added to 22
// Print the result of 13 substracted from 22
// Print the result of 22 multiplied by 13
// Print the result of 22 divided by 13 (as a decimal fraction)
// Print the reminder of 22 divided by 13


console.log( 22+13);
console.log(22-13);
console.log(22/13);
console.log(22%13);
console.log(22*13); // An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

console.log( 6 * 5 * 17 );
console.log( (( 5 * 6 ) / 52 )*100 +'%' );let favoriteNumber: number = 8;
console.log('My favorite number is:' + favoriteNumber );

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8''use strict';

// Swap the values of these variables
let a1: number = 123;
let b1: number = 526;
[a1, b1] = [b1, a1]
console.log(a1);
console.log(b1); 'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;
console.log('BMI: ' + (massInKg/ heightInM**2));

// Print the Body mass index (BMI) based on these values