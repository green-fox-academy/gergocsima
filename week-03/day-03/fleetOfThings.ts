//import { Thing } from "./things";
import { Fleet } from "./fleet";
import { Thing } from "./things";

let fleet: Fleet = new Fleet();


let milk: Thing = new Thing('Get milk');
let obstacles: Thing = new Thing('Remove obstacles');
let standUp: Thing = new Thing('Stand Up');
let lunch: Thing = new Thing('Eat lunch');

console.log(standUp.complete());
lunch.complete();

console.log(fleet.print());
/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */