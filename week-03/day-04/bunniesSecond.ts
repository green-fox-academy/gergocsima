// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
export { }

let oddears: number = 0;
let nonodd: number = 0;
let earNumber: number = oddears + nonodd;

function countEars(bunnyNumber: number) {
  if (bunnyNumber == 0) {
    return 0;
  }
  else if (bunnyNumber % 2 !== 0) {
    return 2 + countEars(bunnyNumber - 1);
  } else {
    return 3 + countEars(bunnyNumber - 1);
}
}
console.log(countEars(3));