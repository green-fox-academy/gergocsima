import { Aircraft } from './aircraft'
import { F35 } from './f35'
import { F16 } from './f16'
import { Carrier } from './carrier';


let f16: F16 = new F16()
//console.log(f16);
let f35: F16 = new F35()
//console.log(f35);

// console.log('status: ' + f16.getStatus());
// console.log('status: ' + f35.getStatus());
// console.log('type: ' + f16.getType());
// console.log('type: ' + f35.getType());
// console.log('refill: ' + f16.refill(300));
// console.log('refill: ' + f35.refill(100));
// console.log('status: ' + f16.getStatus());
// console.log('status: ' + f35.getStatus());

let carrier1: Carrier = new Carrier('Tutaj01');
let carrier2: Carrier = new Carrier('Csónak02');
//console.log(carrier1);
//console.log(carrier2);
carrier1.add(new F16());
carrier1.add(new F16());
carrier1.add(new F16());
carrier1.add(new F35());
carrier1.add(new F16());
carrier2.add(new F35());
carrier2.add(new F16());
carrier2.add(new F35());
carrier2.add(new F16());
carrier2.add(new F35());
//console.log(carrier1);

// // console.log(carrier1.getStatus());
// // console.log(carrier2.getStatus());
carrier1.fill();
carrier2.fill();
carrier1.getStatus();
carrier2.getStatus()
carrier1.fight(carrier2);
carrier2.fight(carrier1);
carrier1.getStatus();
carrier2.getStatus()
// // console.log(carrier1.getStatus());
// // console.log(carrier2.getStatus());
// // console.log(carrier1.fight(carrier2));
// console.log(carrier2.getStatus());
// console.log(carrier1.fill());
// console.log(carrier2.fight(carrier1));
// console.log(carrier2.getStatus());
// // console.log(carrier1.fight(carrier2));
// // console.log(carrier2.fight(carrier1));
// // console.log(carrier1.fight(carrier2));