'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
function putSaturn (list:any) {
list.push('Saturn');
console.log('\"'+planetList.join('\"\,"')+'\"');
}
putSaturn(planetList);
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"
export = putSaturn;

// onsole.log(planetList.join("\",\""));