import { Reptile } from "./reptile";
import { Mammal } from "./mammal";
import { Bird } from "./bird";
import { Fish } from "./fish";
import { Animal } from './animal';

let reptile = new Reptile("Crocodile", true);
let mammal = new Mammal("Koala", true);
let bird = new Bird("Parrot", false);
let fish = new Fish('Scalare', true);


console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + bird.isDangerouss());
console.log("A " + fish.getName() + " is breeding by " + fish.breed() + fish.isDangerouss());
