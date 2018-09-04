import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {

  constructor(ammoAmount: number = 0, baseDamage: number = 30, type: string = 'F16', status: boolean = false, maxAmmo: number = 8) {
    super(ammoAmount, baseDamage, type, status, maxAmmo)

  }
  fight() {
    if (this.ammoAmount != 0) {
      return this.damage;
    }
    this.ammoAmount = 0;

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