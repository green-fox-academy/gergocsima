// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
declare function require(path: string): any;
export { };

const charEncoding = 'utf-8';
const fs = require('fs');
let fileName: string = 'countline.txt';

function readLines(x: string) {
  try {
    let sentences: string= fs.readFileSync(x, charEncoding);
    return sentences.split('\n').length
  } catch (error) {
return ('Zero:'+x);
  }
}
console.log(readLines(fileName));

