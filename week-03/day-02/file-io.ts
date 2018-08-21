'use strict';



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
  fs.writeFileSync(fileName, data);
}

function countChar(char: string): number {
  let result: number = 0;
  const fileContent: string = readFromFile('hello.txt');
  if (fileContent !== null) {
    fileContent.split('\r\n').forEach(e => {
      e.split('').forEach(elem => {
        if(elem === char) {
          result ++;
        }
      })
    });
    writeToAFile('result.txt', result);
    return result;
  }
}

console.log(countChar('a'));