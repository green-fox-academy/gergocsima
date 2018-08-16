// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let sum: number = 0;
function numberAdder(n: number) {
  if (n >= 0) {
    //console.log(n)
    sum += n;
    numberAdder(n - 1);
    return sum;
  }
}
console.log(numberAdder(3));