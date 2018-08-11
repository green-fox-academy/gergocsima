'use strict';

let lineCount: number = 10;

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

let brick: string = '';
let space: string = '';

// bricks increasing as lineCount - first line
for (let k: number = 0; k <= lineCount - 1; k++) {
    brick = brick + '%';
}
console.log(brick);
// increasing space if lineCount increased
for (let l: number = 0; l <= lineCount - 5; l++) {
    space = space + ' ';
}
for (let m: number = 0; m < lineCount - 2; m++) {
    console.log(brick.slice(0, 1), space, brick.slice(0, 1));
}
// bricks increasing as lineCount - last line
brick = brick.slice(0, 1); //reset the state of the bricks
for (let n: number = 0; n <= lineCount - 2; n++) {

    brick = brick + '%';
}
console.log(brick);