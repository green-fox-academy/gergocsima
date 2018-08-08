'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let newSentence: string = '';
let sentenceLength: number = reversed.length; // this number used for reduce the letters from the length to the front of the reversed text
console.log('The number of characters in the reversed sentence:',sentenceLength);
function reverseString(reversed) {
    for (let i: number = sentenceLength; i >= 0; i--) {
        newSentence = newSentence + reversed.substr(i, 1);
    }
    console.log(newSentence);
}
reverseString(reversed);

export = reversed;