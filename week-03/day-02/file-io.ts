'use strict';

export{};
const charEncoding='utf-8';
const fs = require('fs');
function readFromFile (fileName: string):string {
  try {
    return fs.readFileSync(fileName,charEncoding);
  }catch (e) {
    console.log(e.message);
    return null;
  }
}

console.log(readFromFile('hell.txt'));