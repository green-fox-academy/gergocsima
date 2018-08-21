// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
declare function require(path: string): any;
export { };

const fs = require('fs');
const charEncoding = 'utf-8';

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToAFile(fileName: string, data: any): void {
  fs.appendFileSync(fileName, '\n'+data);
}
let data: string = 'This is the 2nd sentence what i would like to put there';
let fileName: string = 'my-file.txt';
writeToAFile(fileName,data);