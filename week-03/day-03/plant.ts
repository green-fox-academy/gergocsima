export class Plant {
  color: string;
  absorption: number;
  waterLevel: number;
  needsWater: boolean;

  constructor(color: string) {
    this.color = color;
  }
}