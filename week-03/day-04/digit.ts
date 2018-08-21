// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let digitOfNumber: number = 0;
let sum: number = 0;


function digitAdder(n: number) {
  if ((n % 10) == 0) {
    return 0;
  } else {
    return digitAdder((Math.floor(n - n % 10)) / 10) + (n % 10);
  }
}
console.log(digitAdder(1234));