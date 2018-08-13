// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:any =["Arthur","Boe","Chloe"];
abc= [abc[2],abc[1],abc[0]];
console.log(abc);

let abcTest:any =["Arthur","Boe","Chloe"];
let reversed = abcTest.reverse();
console.log(reversed);
//console.log(abc.copyWithin(0,1,2))