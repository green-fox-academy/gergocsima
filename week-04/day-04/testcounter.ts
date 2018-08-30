'use strict';

let inputString = 'ez egy érdekesz szám az Avalon Emerson mixben';
/* console.log('splitted '+string1.split(''));
console.log('sort added '+string1.split('').sort());
console.log('join added '+string1.split('').sort().join(''));
console.log('charat : '+sortedString1.charAt(0));
console.log('last indexOf a '+sortedString1.lastIndexOf('a'));
console.log('sorted: '+sortedString1.slice(0,10));
console.log(sortedString1.slice(0, sortedString1.lastIndexOf(sortedString1.charAt(0)) + 1 )); */

function makeComperable (input: string): string {
  let doNotCountString: string = ' \'"\|+!%/=()[]$ß¤<>#&@{},?;.:-_*0123456789';
  let output: string = input.toLowerCase().split('').sort().filter( (letter) => doNotCountString.indexOf(letter) == -1 ).join('');
  return output;
}
//console.log('just letters from:'+makeComperable(string1));

//just letters - toLowerCase - split- sort -filter out characters in doNotCountIn ->JOIN: 
//got: aaabdeeeeeeegiklmmmnnnoorrsssvxyzzzzáé
//lenght of sentence time : same letters from the begining sliced into a new array, till the last index of the  first letter in the sentence
// counter to follow the proccess and push the letters into the final dictionary
//while the remaining sorted letters stay in the process




//console.log(sortedString);
//console.log(sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));
//console.log(counter.push(letters[1].length))
//console.log(sortedString.substr(sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));
function countLetters (inputString: string) {
  let sortedString= makeComperable(inputString);
  let letters: any [] = [];
  let counter: any [] = [];
  let dictionary = {};
  for(let i: number = 0; i < sortedString.length + 4; i++) {
    letters.push(sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));
    counter.push(letters[i].length);
    sortedString = sortedString.substr(sortedString.lastIndexOf(sortedString.charAt(0)) + 1 );
  }

  letters.forEach((letters, i) => dictionary[letters] = counter[i]);

  //console.log(counter);
  //console.log(letters);
  
  return dictionary;
  
}
countLetters(inputString);
console.log(countLetters(inputString));

//console.log(countLetters(string1));



//let sortedString = inputString.split('').sort().join('');