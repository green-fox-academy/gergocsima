// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`
//

let magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]); //using 2 variables

let startIndex=2;
let numberOfElementsToRemove = 1;
let removedElemets =magicNumbers.splice(startIndex,numberOfElementsToRemove);
console.log(removedElemets);

