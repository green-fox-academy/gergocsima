import { Thing } from "./things";
import { Fleet } from "./fleet";

let fleet = new Fleet();



/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */


let Thing1 :Thing = new Thing('Get milk');
let Thing2: Thing = new Thing('Remove the obstacles');
let Thing3 : Thing = new Thing('Stand up');
let Thing4: Thing = new Thing('Eat lunch');
fleet.add(Thing1);
fleet.add(Thing2);
fleet.add(Thing3);
fleet.add(Thing4);
Thing3.complete();
Thing4.complete();
fleet.printIt();

