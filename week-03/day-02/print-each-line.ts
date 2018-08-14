// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict';
declare function require(path: string): any;
export { };

const charEncoding = 'utf-8';
const fs = require('fs');
function readLines(x: string) {
  try {
    return fs.readFileSync(x, charEncoding);
  } catch (error) {
console.log('Unable to read file:'+x)
  }
}
console.log(readLines('my-fil.txt'));

