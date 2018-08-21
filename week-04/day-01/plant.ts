export class Flower {
  color: string;
  type: string;
  water: number;
waterUtilization:number;
  constructor(color:string, type: string, water?: number, waterUtilization?: number){
    this.color=color;
    if (type == 'flower' || type == 'tree') {
      this.type=type;
    } else {
      throw new Error ('This is not a garden element');
    }
    if (this.type = 'tree') {
      this.waterUtilization=0.4;
    } else {
      this.waterUtilization=0.75;
 }
 this.water=water*waterUtilization
  }
  watering(waterAmount) {

  }
}