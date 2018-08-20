// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];


let missingItems: any = ['Croissant', 'Ice cream'];

function sweets(list: any): any {
  let exclusions = list.filter(x => typeof x !== "string");
  for (let i: number = 0; i < exclusions.length; i++) {
    let exchange: number = list.indexOf(exclusions[i]);
    list.splice(exchange, 1, missingItems[i]);
  }
  console.log(list.toString());
}
sweets(shopItems);
export = sweets;
