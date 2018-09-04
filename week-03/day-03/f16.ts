import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor() {
    super('F16', 8, 30)
    // constructor(ammoAmount: number = 0, baseDamage: number = 30, type: string = 'F16', status: boolean = false, maxAmmo: number = 8) {
    //   super(ammoAmount, baseDamage, type, status, maxAmmo)

  }
}