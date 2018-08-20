// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.
'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');
const charEncoding = 'utf-8';

let path: string='';//describes the location of the file
let word:string ='dogz™catZ';//that will be written to the file as lines
let numberAdded: number =5;//how many lines the file should have

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToAFile(fileName: string, word: any, numberAdded: number): void {
for (let i:number =0;i<numberAdded;i++) {
  fs.appendFileSync(fileName, word+'\n');
}
}

let fileName: string = 'my-file.tx';
writeToAFile(fileName,word,numberAdded);