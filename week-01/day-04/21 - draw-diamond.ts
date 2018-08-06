'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let spaces: string = '---------------';
let stars: string = '*';
let stars2: string = '***********';
for (let i: number = 0; i < lineCount / 2; i++) {
    console.log(spaces, stars);
    spaces = spaces.slice(0, -1);
    stars += '**'

}
for (let j: number = 0; j < (lineCount / 2 + 1); j++) {
    stars2 = stars2.slice(0, -2);
    console.log(spaces, stars2);
    spaces += '-';


}
//version 2
let spaces2: string = '               ';
let stars4: string = '*';
let stars3: string = '***********';
for (let i: number = 0; i < lineCount / 2; i++) {
    console.log(spaces2, stars4);
    spaces2 = spaces2.slice(0, -1);
    stars4 += '**'

}
for (let j: number = 0; j < (lineCount / 2 + 1); j++) {
    stars3 = stars3.slice(0, -2);
    console.log(spaces2, stars3);
    spaces2 += ' ';


}