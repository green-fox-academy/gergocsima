// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
export { }

function printParamsFirst (...inputs:any[]) {
    for (var i = 0; i < inputs.length; i++) {
console.log(inputs[i]); 

}
console.log(inputs); //printinh after each other without brackets
}
printParamsFirst( 1,2,'df',345); //printing brackets and numbers, text in one line
