'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let sentenceOne : string = " My todo:";
let sentenceTwo : string = " - Download games";
let sentenceThree : string = " - Diablo";
let sentenceFour : string = " - Download games";
let todoText: string = ' - Buy milk\n';

console.log('My todo:\n',todoText,sentenceTwo+'\n',sentenceFour+'\n','\t'+sentenceThree);