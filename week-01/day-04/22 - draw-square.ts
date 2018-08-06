'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
// %%%%%% 6
// %----% 2-4
// %----% 2-4
// %----% 2-4
// %----% 2-4
// %%%%%% 6

/*let space: string = '----';
let star: string = '%';

for (let i: number = 0; i < lineCount; i++) {
    if (i = 1) {
        star;
        lineCount;

    }
    console.log(space, star);
    space = space.slice(0, -1)
    star += '%%'
} 

*/
let repeatNr: number = 5;
let star: string = '';
for (let i: number = 0; i <=repeatNr;i++)
{
    star=star+'b';
console.log(star);
}