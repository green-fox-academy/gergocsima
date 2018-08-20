'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
let numberOfInterest: number = 7;
function containsSeven(list: any) {
  if (list.indexOf(numberOfInterest) != -1) {
    return 'Hooray';
  } else {
    return 'Noooooo';
  }
}
// containsSeven(numbers);
console.log(containsSeven(numbers));

function containsSeven2(list: any) {
  if (list.includes(numberOfInterest)){
    return 'Hooray';
  } else {
    return 'Noooooo';
  }
}
// containsSeven(numbers);
console.log(containsSeven2(numbers));










export = containsSeven;