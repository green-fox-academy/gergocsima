function anagramma(input1: string, input2: string): boolean {
  if (((input1.toLowerCase().split('').sort().filter(letter => [' ', '!', '.', ',', "'", '"', '?'].indexOf(letter) == -1)).join()) ==
    (input2.toLowerCase().split('').sort().filter(letter => [' ', '!', '.', ',', "'", '"', '?'].indexOf(letter) == -1)).join()) {
  return true;
} else {
  return false }
}
let input1: string = 'waz';
let input2: string ='zaw';
console.log((input1.toLowerCase().split('').sort().filter(letter => [' ', '!', '.', ',', "'", '"', '?'].indexOf(letter) == -1)).join());
console.log((input2.toLowerCase().split('').sort().filter(letter => [' ', '!', '.', ',', "'", '"', '?'].indexOf(letter) == -1)).join());
anagramma(input1,input2);
console.log(anagramma(input1,input2));
