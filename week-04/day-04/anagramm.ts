let charactersToRemove = [' ', '!', '.', ',', "'", '"', '?'];
let input1: string = 'waz';
let input2: string ='zaw';

export function anagramma(input1: string, input2: string): boolean {
  return (((input1.toLowerCase().split('').sort().filter(letter => charactersToRemove.indexOf(letter) == -1)).join()) ==
    (input2.toLowerCase().split('').sort().filter(letter => charactersToRemove.indexOf(letter) == -1)).join())
}

console.log(anagramma(input1,input2));
