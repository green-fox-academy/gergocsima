import { Domino } from "./domino_new";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}
let dominoes = initializeDominoes();
function snakeDominoes(domin): any {
  let snaked: any[] = [];
  snaked.push(dominoes[0]);
  for (let i: number = 0; i < domin.length; i++) {
    for (let j: number = 1; j < domin.length; j++) {
      if (snaked[i].values[1] === domin[j].values[0]) {
        snaked.push(domin[j])
      }
    }
  }
  return snaked;
}




print(dominoes);
console.log(dominoes.length);
console.log(snakeDominoes(dominoes));
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
//snakeDominoes(dominoes);
  //snakeDominoes(dominoes);
