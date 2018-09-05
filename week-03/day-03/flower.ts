import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color)
    this.color = color;
    this.absorption = 0.75;
    this.waterLevel = 0;
    this.needsWater = true;
  }
  getStatus() {
    if (this.waterLevel < 5) {
      this.needsWater = true;
      console.log(`The ${this.color} Flower needs water.`);
    } else {
      this.needsWater = false;
      console.log(`The ${this.color} Flower doesn't need water`);
    }
  }
}
