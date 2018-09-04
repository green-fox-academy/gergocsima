export class Aircraft {
  protected type: string;
  protected ammoAmount: number;
  protected baseDamage: number;
  protected status: boolean;
  protected maxAmmo: number;
  protected damage: number

  constructor(ammoAmount: number, baseDamage: number, type: string, status: boolean, maxAmmo: number) {
    this.type = type;
    this.ammoAmount = ammoAmount;
    this.baseDamage = baseDamage;
    this.status = status;
    this.maxAmmo = maxAmmo;
    this.damage = baseDamage * ammoAmount;
  }
  fight(aircraft: Aircraft) {
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