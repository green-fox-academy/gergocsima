// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let letsStarThis: string = 'jshafgudgfpfhhIUHGOUZT IU';
let adjecentChar: string = '*';
let newText: string = '';

function starIt(text: string) {
  if (newText.length / 2 == text.length) {
    return newText;
  } else {
    newText = text.slice(i, i + 1) + adjecentChar;
    return starIt(text);
  }
}

console.log(starIt(letsStarThis));