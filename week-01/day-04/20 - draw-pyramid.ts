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

/*let space: string = '----';used for visualization
let star: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    console.log(space, star);
    space = space.slice(0, -1)
    star += '**'
}
*/
console.log('SOLUTION 01:Pyramid drawing wit simple predefined characters using .slice');
let spaceSt: string = '    '; // 4 pcs of spaces used for declare string
let starSt: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    console.log(spaceSt, starSt);
    spaceSt = spaceSt.slice(0, -1);
    starSt += '**'
}
console.log('______________________________');

/* console.log('SOLUTION 02: solution with while');

let times: number = 4;
let repeatedString1: string = '---';
let repeatedString2: string = '';


while (times > 0) {
    for (let i: number = 0; i < times; i++) {
        repeatedString1 = repeatedString1.slice(0, -1);
    }
    repeatedString2 += '*';
    console.log(repeatedString1, repeatedString2);
    times--;
}

 */