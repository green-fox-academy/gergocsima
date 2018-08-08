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

let spaceSt: string = '    '; // 4 pcs of spaces used for declare string
let starSt: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    console.log(spaceSt, starSt);
    spaceSt = spaceSt.slice(0, -1);
    starSt += '**';
}