import { Garden } from './garden';
import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

let garden: Garden = new Garden();
let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');
let tree1: Tree = new Tree('purple');
let tree2: Tree = new Tree('orange');

garden.addFlower(flower1);
garden.addFlower(flower2);
garden.addTree(tree1);
garden.addTree(tree2);
garden.addTree(new Tree('purple'));
garden.addTree(new Tree('orange'));
console.log(flower1.getStatus());
console.log(flower2.getStatus());
console.log(tree1.getStatus());
console.log(tree2.getStatus());
garden.watering(40);
garden.watering(70);


//add plant list
garden.addPlant(new Flower)