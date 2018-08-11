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


/*for (let i: number = 0; i <= lineCount; i++) {
    //cycle for side lenght in this case lineCount
    if (i = 1) {
        // first side creation no spaces needed
        for (let j: number = 0; j <= lineCount - 1; j++) {
            // bricks increasing as lineCount
            brick = brick + '%';
        }
        console.log('1stline', brick, );
    }
    else {
        //for (let k: number = 0; k <= lineCount - 2; k++) { // inside and wall elements line number -2
        //    if (k = 1) {
        for (let l: number = 0; l <= lineCount - 5; l++) {  // increasing space if lineCount increased
            space = space + ' ';
        }
        console.log(brick.slice(0, 1), space, brick.slice(0, 1));
        //k++;
    }
}*/

for (let k: number = 0; k <= lineCount - 1; k++) {
    // bricks increasing as lineCount
    brick = brick + '%';
}
console.log(brick);
for (let l: number = 0; l <= lineCount - 5; l++) {  // increasing space if lineCount increased
    space = space + ' ';
}
for (let m: number = 0; m < lineCount - 2; m++) {
    console.log(brick.slice(0, 1), space, brick.slice(0, 1));
}
brick = brick.slice(0, 1);
for (let n: number = 0; n <= lineCount - 2; n++) {
    // bricks increasing as lineCount
    brick = brick + '%';
}
console.log(brick);