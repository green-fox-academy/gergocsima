import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  tree: Tree[]
  flower: Flower[];
  constructor() {
    this.flower = [];
    this.tree = [];
  }
  addFlower(flowerAdd: Flower): any {
    return this.flower.push(flowerAdd);
  }
  addTree(addTree: Tree): any {
    return this.tree.push(addTree)
  }
  watering(waterToAdd: number) {
    console.log(`Watering with ${waterToAdd}:`)
    let flowerToWater: number = (this.flower.filter((elem) => elem.waterLevel < 5)).length;
    let treeToWater: number = (this.flower.filter((elem) => elem.waterLevel < 10)).length;
    for (let i: number = 0; i < this.flower.length; i++) {
      if (this.flower[i].waterLevel < 5 || this.tree[i].waterLevel < 10) {
        this.flower[i].waterLevel += waterToAdd / (flowerToWater + treeToWater) * this.flower[i].absorption;
        this.tree[i].waterLevel += waterToAdd / (flowerToWater + treeToWater) * this.tree[i].absorption;
      }
    } return this.flower.forEach((elem) => console.log(elem.getStatus())) + '\n' + this.tree.forEach((elem) => console.log(elem.getStatus()));
  }
}