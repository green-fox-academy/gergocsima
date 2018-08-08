'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let add: string = 'always takes longer than';
let find: string = 'It';
//simple replace do the job

let newSentence = quote.replace(find,add);
console.log(newSentence);