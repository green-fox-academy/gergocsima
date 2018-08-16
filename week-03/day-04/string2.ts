// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let givenStringNew: string = 'nsxakb kcbíjbxjcbXCXXUAIHID';
let targetLetter = /x/gi;
function removeX(text: string): string {
  if (text.indexOf('x') == -1) {
    return text;
  } else {
    text = text.replace(targetLetter,'');
    return removeX(text);
  }
}

console.log(removeX(givenStringNew));