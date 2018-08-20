// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`
export{}
let typo: string = 'Chinchill';

function appendAFunc (input:string) {
    input=input+'a';
/*    console.log(input);
}
appendAFunc(typo);*/
return input;
}
console.log(appendAFunc(typo));