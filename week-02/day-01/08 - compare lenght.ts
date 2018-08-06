// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

var firstList = [1, 2, 3];
var secpondList = [4, 5];
if (firstList.length>secpondList.length) {
    console.log('firstList is bigger');
}
else if (firstList.length<secpondList.length){
    console.log("secondlist is bigger");
}
else {
    console.log('The two list contains the same number of elements.');
}