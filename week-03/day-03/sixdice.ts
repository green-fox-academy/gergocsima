import { DiceSet } from "./diceset";

let diceSet = new DiceSet();
diceSet.roll();
diceSet.getCurrent();
/*console.log("------------------");
diceSet.reroll();
diceSet.getCurrent();
console.log("------------------");
diceSet.getCurrent(5);
diceSet.reroll();
diceSet.getCurrent();
console.log("------------------");
diceSet.reroll(4);
diceSet.getCurrent();

console.log(diceSet);
console.log(diceSet.dices); */

let interestOfNumber: number = 6;
let temp = [];
let reRolled: boolean = true;
// console.log(numOfDices);

for (let k: number = 0; k <= 6; k++) {
  let result: boolean = 
  while (reRolled != false) {
    for (let i: number = 0; i < diceSet.dices.length; i++) {
      if (diceSet.dices[i] !== interestOfNumber) {
        diceSet.reroll(i);
        result = true;
      } else {
        temp.push(i);
        result = false;
      }
    }
  }
  console.log(temp);
}

console.log(diceSet.dices.length);
console.log(diceSet.dices);