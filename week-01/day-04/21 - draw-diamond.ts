'use strict';

let lineCount: number = 9;

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
//let k: number = 0;
//let i: number = 0;
//let j: number = 0;

console.log(spaceSt.length)
if (lineCount > 7) {
    for (let l: number = 0; l <= lineCount - 7; l++) {
        spaceSt += ' ';
    }
}
for (let i: number = 0; i <= lineCount; i++) {
    for (let k: number = 0; k < lineCount - Math.floor(lineCount / 2); k++) {
        console.log(spaceSt, starSt);
        spaceSt = spaceSt.slice(0, -1);
        starSt += '**';
        i++;
        //console.log(i,k,Math.floor(lineCount / 2) + 1);
    }
    for (let j: number = 0; j < Math.floor(lineCount / 2) + 2; j++) {
        console.log(spaceSt, starSt);
        spaceSt += ' ';
        starSt = starSt.slice(0, -2);
        i++;
        //console.log(i,j,Math.floor(lineCount / 2) + 2);
    }
}


//for (let k: number = 0; k < lineCount; k++) {
//     let k: number = 1;
// for (let i: number = 0; i <= Math.floor(lineCount / 2); i++) {
//     console.log(spaceSt, starSt);
//     spaceSt = spaceSt.slice(0, -1);
//     starSt += '**';
// }
// for (let j: number = 0; j <= Math.floor(lineCount / 2); j++) {
//     starSt = starSt.slice(0, -2);
//     spaceSt += '-';
//     console.log(spaceSt, starSt);
// }
// console.log(k);