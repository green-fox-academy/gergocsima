// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let givenString: string = 'XXXyxxxzzggsjavdvxv';
//console.log(givenString.indexOf('x',givenString.length));
// console.log(givenString.replace('x','y'));

function xToY(text: string): string {
  if (text.indexOf('x')== -1) {
    return text;
  }
  else {
    text = text.replace('x', 'y');
    return xToY(text);
  }
}
console.log(xToY(givenString));