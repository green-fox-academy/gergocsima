import { Aircraft } from './aircraft'
import { F35 } from './f35'
import { F16 } from './f16'


let f16: F16 = new F16()
console.log(f16);
let f35: F16 = new F35()
console.log(f35);

console.log('status: ' + f16.getStatus());
console.log('status: ' + f35.getStatus());
console.log('type: ' + f16.getType());
console.log('type: ' + f35.getType());
console.log('refill: ' + f16.refill(300));
console.log('refill: ' + f35.refill(100));
console.log('status: ' + f16.getStatus());
console.log('status: ' + f35.getStatus());