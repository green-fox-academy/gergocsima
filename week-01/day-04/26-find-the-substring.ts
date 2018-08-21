'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
/* function substr(str: string, keyword: string) : number {
  return -1;
}
 */

let str: string = "this is what I'm searching in";
let keyword: string = "dog";

/* //  Example
console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
console.log(substr("this is what I'm searching in", "not"));
// should print: `-1`
 */

function substr(x: string, y: string): number {
    let i: number=(x.indexOf(y));
    console.log(i);
    return -1;
  }
substr(str, keyword);