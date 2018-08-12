// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:any =["Arthur","Boe","Chloe"];
abc= [abc[2],abc[1],abc[0]];
console.log(abc);