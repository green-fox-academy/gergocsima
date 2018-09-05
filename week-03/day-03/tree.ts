import { Plant } from "./plant";

export class Tree extends Plant {

  constructor(color: string) {
    super(color)
    this.color = color;
    this.absorption = 0.4;
    this.waterLevel = 0;
    this.needsWater = true;
  }
  getStatus() {
    if (this.waterLevel < 5) {
      this.needsWater = true;
      return `The ${this.color} Tree needs water.`;
    } else {
      this.needsWater = false;
      return `The ${this.color} Tree doesn't need water`;
    }
  }
}