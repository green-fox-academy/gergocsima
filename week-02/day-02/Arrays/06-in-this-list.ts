'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let listToCheck: number[] = [4, 8, 12, 16,17];
let result = true;
function checkNums(array) {
  if (result == true) {
  for ( let i: number = 0;i<listToCheck.length;i++) {
    result =array.includes(listToCheck[i]);
  }
} else {
  result = false;
}
return result;
}
console.log(checkNums(listOfNumbers));

export = checkNums;