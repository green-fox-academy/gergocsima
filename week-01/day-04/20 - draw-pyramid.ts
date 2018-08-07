'use strict';
export { }

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
// helper for me - Version1

let space: string = '----';
let star: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    console.log(space, star);
    space = space.slice(0, -1)
    star += '**'
}
//-to generate the desired one with .slice
let space2: string = '    '; /* 4 pcs of spaces, shame:((*/
let star2: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    console.log(space2, star2);
    space2 = space2.slice(0, -1)
    star2 += '**'
}

//2nd solution with while

let times: number = 4;
let repeatedString1: string = '';
let repeatedString2: string = '*';

for (let j: number = 0; j < times; j++) {

    while (times > 1) {
        repeatedString1 += '-';
        times--;
        repeatedString2 += '*'
        times--;
    }
    console.log(repeatedString1 + repeatedString2);
}

let spacesign: string = 'l'
let sign: string = 'o';

for (let w: number = 0; w < lineCount; w++) {
    console.log(spacesign)
    spacesign = spacesign + 'l';
}

//next solution:
let repeatationNR: number = 5;
let characterToPrint: string = '';
let characterOther: string = '';
for (let i: number = repeatationNR; i <= 0; i--) {
    for (let j: number = 0; j>=repeatationNR;j++)
    {
    characterToPrint = characterToPrint + 'b';
    console.log(characterToPrint);
}
}