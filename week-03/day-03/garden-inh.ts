import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

export class Garden {
  garden: Plant[];
  constructor() {
    this.garden = [];
  }
  addPlant(plant: Plant): any {
    return this.garden.push(plant);
  }

  watering(waterToAdd: number) {
    console.log(`Watering with ${waterToAdd}:`)
    let numberToWater = this.garden.filter((elem) => elem.needsWater === true).length;
    this.garden.forEach((elem) => {
      elem.needsWater === true ? (elem.waterLevel += (waterToAdd / numberToWater) * elem.absorption) : elem.waterLevel;
    })
    return this.garden.forEach((elem) => elem.getStatus());
  }
}