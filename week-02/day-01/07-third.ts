// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`
//

var magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]); //using 2 variables

var startIndex=2;
var numberOfElementsToRemove = 1;
var removedElemets =magicNumbers.splice(startIndex,numberOfElementsToRemove);
console.log(removedElemets);

