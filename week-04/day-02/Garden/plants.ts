import { Flower } from './flower'
import { Tree } from './tree'
export class Plants{
  plants: [];

  constructor (plants: any) {
    this.plants = plants
  }
plant(Flowers: Flower) {
  this.plants.push(Flower);
}
}

let plants: Pants = new Plants()