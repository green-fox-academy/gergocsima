'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
function matchMaking (string1,string2)
{
let newArray: string[] = [];
for (let i: number = 0; i <Math.min(string1.length,string2.length);i++) {
    newArray.push(string1[i],string2[i]);
}
console.log(newArray);
}
matchMaking(girls,boys);
//makingMatches(girls, boys);
//export = makingMatches;