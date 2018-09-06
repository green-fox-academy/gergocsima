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
// function snakeDominoes(domin): any {
//   for (let i: number = 0; domin.length != 0; i++) {
//     let snaked: any[] = [];
//     snaked.push(domin[0]);
//     if (domin[i].values[1] === snaked[i].values[0]) {
//       snaked.push(domin[i])
//     }
//   }
//   return domin;
// }
Domino.prototype = {
  get Domino() {
    return this.valueA + ',' + this.valueB;
  },
  set Domino
}




let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
//snakeDominoes(dominoes);
print(dominoes)
//snakeDominoes(dominoes);
get dominoes.values { }
