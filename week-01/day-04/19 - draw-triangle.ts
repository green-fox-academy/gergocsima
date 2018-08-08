'use strict';
export { }


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
//Triangle without empty line in the first place:
console.log('Triangle without empty line in the first place:')
let lineCount: number = 4;
let repeatThis: string = '';
for (let i: number = 1; i <= lineCount; i++) {
  repeatThis += '*';
  console.log(repeatThis);

}
//with empty line in first place:
console.log('empty line in first place if needed:')
let lineCount2: number = 4;
let repeatThis2: string = '';
for (let i: number = 0; i <= lineCount2; i++) {
  console.log(repeatThis2);
  repeatThis2 += '*';
}


//handling string with variables
console.log('handling string with variables:')
let repeatNr: number = 4;
let star: string = '';
for (let i: number = 0; i < repeatNr; i++) {
  star = star + '*';
  console.log(star);
}

//third solutions
console.log('using while:')
let lineCounter: number = 4;
let starVersionThird: string = '*';
while (lineCounter > 0) {
  console.log(starVersionThird);
  starVersionThird += '*';
  lineCounter--;
}