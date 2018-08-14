// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let input: number = 0;

function divider(x: number) {
  try {
    if (x === 0) {
      return 'fail'
    }
    let result = 10 / x;
    return result;

  } catch (err) {
    console.log(err);
  }
}

console.log(divider(input));