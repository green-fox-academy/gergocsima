'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 7; // number could increased decreased
let brick: string = '%';
let space: string = ' ';
let lineA: string = '';
let lineB: string = '';


for (let i: number = 0; i < lineCount / 2; i++) {
    lineA = lineA + space + brick;

    //line = line + brick + space;
    //console.log(line);
} //console.log(lineA);
for (let k: number = 0; k < lineCount / 2; k++) {
    lineB = lineB + brick + space;

    //line = line + brick + space;
    //console.log(line);
} //console.log(lineB);
//cyle make lineCount numbers of line size chessTable
for (let j: number = 0; j <= lineCount - 1; j++) {
    if (j % 2 == 0) {
        console.log(lineB);
    } else { console.log(lineA); }
}

