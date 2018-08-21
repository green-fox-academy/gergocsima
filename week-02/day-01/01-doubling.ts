export { }

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123;
let multiplier: number = 2;
function calculatDouble(baseNum: number, multiplier: number) {
    var multiplication = baseNum * multiplier;
    console.log(multiplication);
}

calculatDouble(baseNum, multiplier);
