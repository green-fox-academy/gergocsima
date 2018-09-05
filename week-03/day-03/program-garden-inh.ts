import { Garden } from './garden-inh';
import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

let garden: Garden = new Garden();
let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');
let tree1: Tree = new Tree('purple');
let tree2: Tree = new Tree('orange');

garden.addPlant(flower1);
garden.addPlant(flower2);
garden.addPlant(tree1);
garden.addPlant(tree2);
//garden.addPlant(new Tree('purple'));
//garden.addPlant(new Tree('orange'));
// console.log(flower1.getStatus());
// console.log(flower2.getStatus());
// console.log(tree1.getStatus());
// console.log(tree2.getStatus());
garden.watering(40);
garden.watering(70);

//console.log(garden);
//add plant list
