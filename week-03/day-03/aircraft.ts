export class Aircraft {
  protected type: string;
  protected ammoAmount: number;
  protected baseDamage: number;
  protected status: boolean;
  protected maxAmmo: number;
  protected damage: number
  protected ammoStorage: number;

  constructor(type: string, maxAmmo: number, baseDamage: number) {
    this.type = type;
    this.ammoAmount = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }
  fight(): number {
    if (this.ammoAmount != 0) {
      return this.damage;
    }
    this.ammoAmount = 0;

  }
  refill(ammoInShip: number): number {
    if (ammoInShip < this.maxAmmo) {
      this.ammoAmount = ammoInShip
    }
    else {
      this.ammoAmount = this.maxAmmo
    }
    return ammoInShip - this.ammoAmount;
  }

  getType(): string {
    return `${this.type}`

  }
  getStatus(): string {
    return `Type: ${this.type},Ammo:${this.ammoAmount}, Base Damage: ${this.baseDamage}, All damage: ${this.baseDamage * this.ammoAmount}`;
  }
  isPriority(): boolean {
    if (this.type === "F35") {
      return true
    } else {
      return false
    }
  }
}