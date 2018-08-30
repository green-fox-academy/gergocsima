'use strict';

let string1 = 'ez egy érdekesz szám az Avalon Emerson mixben';
console.log('spli1 '+string1.split(''));
console.log('spli1 '+string1.split('').sort());
console.log('spli1 '+string1.split('').sort().join(''));



function countLetters (inputString: string) {
  let letters: any [] = [];
  let counter: any [] = [];
  let dictionary = {};
  let sortedString = inputString.split('').sort().join('');
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

//console.log(countLetters(string1));



let sortedString = string1.split('').sort().join('');
