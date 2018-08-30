'use strict';

let inputString = 'ez egy érdekesz szám az Avalon Emerson mixben';

function makeComperable (input: string): string {
  let doNotCountString: string = ' \'"\|+!%/=()[]$ß¤<>#&@{},?;.:-_*0123456789';
  let output: string = input.toLowerCase().split('').sort().filter( (letter) => doNotCountString.indexOf(letter) == -1 ).join('');
  return output;
}

export function countLetters (inputString: string) {
  let checkString= makeComperable(inputString);
  let letters: any [] = [];
  let counter: any [] = [];
  let dictionary = {};
  for(let i: number = 0; i < checkString.length + 4; i++) {
    letters.push(checkString.slice(0, checkString.lastIndexOf(checkString.charAt(0)) + 1 ));
    counter.push(letters[i].length);
    checkString = checkString.substr(checkString.lastIndexOf(checkString.charAt(0)) + 1 );
  }

  letters.forEach((letters, i) => dictionary[letters] = counter[i]);
  
  return dictionary;
  
}
countLetters(inputString);
console.log(countLetters(inputString));
