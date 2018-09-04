import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {

  constructor(ammoAmount: number = 0, baseDamage: number = 50, type: string = 'F35', status: boolean = true, maxAmmo: number = 12) {
    super(ammoAmount, baseDamage, type, status, maxAmmo)
  }
  fight() {


  }
  refill() {

  }
  getType() {

  }
  getStatus() {

  }
  isPriority() {

  }
}
