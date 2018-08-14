// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');
const charEncoding = 'utf-8';

let fileNameSource: string = 'copyfile12.txt';
let fileNameDest: string = 'destfil.txt';

/* function readFromFile(j: string, k: string) {
  try {
    return fs.readFileSync(fileNameSource, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null
  }
} */


function fileCopy(x: string, y: string): void {
  let result: boolean = true;
  try {
    return fs.copyFileSync(fileNameSource, fileNameDest);
    console.log(result);
  } catch (e) {
    result = false;
  } finally {
    console.log(result);
  }

}
fileCopy(fileNameSource, fileNameDest);
