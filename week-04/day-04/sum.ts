export class Sum {
protected a: any;
protected b: any;
constructor (a?: any, b?: any) {
  this.a = a;
  this.b = b;
}
sumNum (a?: any, b?: any): any {
  return (a+b);
}
}

let sum1: Sum = new Sum(1,2);
console.log(sum1.sumNum(1,2));

export let numberPair = new Sum(1,2);
export let inputEmptyList = new Sum([]);
export let oneElement = new Sum([4]);
export let multyplyElements = new Sum([1,2,3,4,5]);
export let testNull = new Sum(null);
export let testStringu = new Sum('valami');
/* test your method with an empyt list
with a list with one element in it
with multiple elements in it
with a null
with a string */