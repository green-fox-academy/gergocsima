export function anagrammChecker(string1: string, string2: string): boolean {
  return compareStrings(string1) === compareStrings(string2);
}
export function compareStrings (text: string): string {
  let doNotUse: any = /[^a-zA-Z]/;
  return text.toLowerCase().split('').sort().filter(elem =>  elem === doNotUse).join('');
}


