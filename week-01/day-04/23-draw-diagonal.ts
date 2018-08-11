'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let brick: string = '';
let space: string = '';


// bricks increasing as lineCount
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
// bricks increasing as lineCount
brick = brick.slice(0, 1); //reset the state of the bricks
for (let n: number = 0; n <= lineCount - 2; n++) {

    brick = brick + '%';
}
console.log(brick);

/* for (let i: number = 0; i <= lineCount; i++) {
    if (i < lineCount || i > 0) {
        for (let l: number = 0; l <= lineCount - 5; l++) {  // increasing space if lineCount increased
            space = space + ' ';
        }
        console.log(brick.slice(0, 1), space, brick.slice(0, 1));

    }}
 */