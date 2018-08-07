'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
console.log(example);

let stringToReplace: string = /diswasher/gi;
let stringToInsert: string = 'galaxy';
var nwestring: string = example.replace(stringToReplace,'galaxy');
console.log(nwestring);
export = example;

var re = /dishwasher/gi; 
var str = "In a dishwasher far far away.";
var newstr = str.replace(re, "galaxy"); 
console.log(newstr)