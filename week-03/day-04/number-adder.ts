// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let sum: number = 0;
function numberAdder(n: number) {
  if ((n-1) == 0) {
    //console.log(n)
    return 1;
  }else {
    return n+numberAdder(n-1);
  }
}
console.log(numberAdder(3));