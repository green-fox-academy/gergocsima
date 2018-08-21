'use strict';
export{}

let a: number = 3;
// make it bigger by 10
console.log('make ',a,' bigger by 10 ',a+10);

let b: number = 100;
// make it smaller by 7
console.log('make ',b,' smaller by 7', b-7);

let c: number = 44;
// double c's value
console.log('double ',c,' value',c*2);

let d: number = 125;
// divide d's value by 5
console.log('divide ',d, 'value by 5', d/5);

let e: number = 8;
// what's the cube of e's value?
console.log('cube of ',e,' value',e**3);

let f1: number = 123;
let f2: number = 345;
let f1f2relation: boolean = f1>f2 
console.log('if ',f1,'is bigger than',f2, '(as a boolean) ',f1f2relation)

// tell if f1 is bigger than f2 (as a boolean)
let g1: number = 350;
let g2: number = 200;
let g1g2rel: boolean = g2*2>g1
console.log('if the double of',g2,' is bigger than', g1,':',g1g2rel)
// tell if the double of g2 is bigger than g1 (pras a boolean)
let h: number = 1357988018575474;
let divisorexist: boolean = (h%11) == 0;
console.log('remainder of division:',h%11);
console.log('if ',h,' has 11 as a divisor ',divisorexist);
// tell if h has 11 as a divisor (as a boolean)
let i1: number = 10;
let i2: number = 3;
let relation: boolean =i1 < (i2**3) && i1 > (i2**2);
console.log('if ',i1,' is higher than ',i2,' squared and smaller than ',i2,' cubed', relation);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let j: number = 1521;
let info: boolean = j%3==0 || j%5==0; 
console.log('if ',j,' is dividable by 3 or 5',info);
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log('Apple 5 times',k,k,k,k,k);