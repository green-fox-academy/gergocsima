import { Flower } from './flower' //replaced
import { Tree } from './tree'
export class G extends Plants {
  watering: number;
  wateramount:number;

  constructor (wateramount: number,watering?: number) {
    super();
    this.wateramount=wateramount;
    this.watering=0;
  }
watering(waterAdded: number) {
  this.wateramount=Plant

}
}