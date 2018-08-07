'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
console.log(example);

let stringToReplace ="dishwasher";
let stringToInsert ="galaxy";
let nwestring = example.replace(stringToReplace,stringToInsert);
console.log(nwestring);
console.log(example.replace(stringToReplace,stringToInsert));
export = example;

var re = /dishwasher/gi; 
var str = "In a dishwasher far far away.";
var newstr = str.replace(re, "galaxy"); 
console.log(newstr)