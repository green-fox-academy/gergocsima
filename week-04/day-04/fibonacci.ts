// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests that covers all types of input (like in the previous workshop exercise)

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 

// let fibonacciNr: number []= [0,1];
// let input: number;
// let x: number;

// function fibonacciMax ( input : number ) {
//   for(let i: number = 0,j = 1,k = 0; k < input-1 ; i = j , j = x ,k++ ){
//       x = i+j;
//       fibonacciNr.push(x);
//   }
//   console.log(fibonacciNr);
// }

//fibonacciMax(10);

export function fibonacciRec(n) : any{
  if (n === 0 || n === 1){
    return n;
  }else{
    return (fibonacciRec(n-2) + fibonacciRec(n-1));
  }
 }


 export let numberPair = fibonacciRec(2);
export let inputEmptyList = fibonacciRec([]);
export let oneElement = fibonacciRec([4]);
export let multyplyElements = fibonacciRec([1,2,3,4,5]);
export let testNull = fibonacciRec(null);
export let testStringu = fibonacciRec('valami');
 