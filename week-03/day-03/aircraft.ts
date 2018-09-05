export class Aircraft {
  protected type: string;
  public currentAmmo: number;
  public baseDamage: number;
  protected status: boolean;
  public maxAmmo: number;
  protected ammoStorage: number;

  constructor(type: string, maxAmmo: number, baseDamage: number) {
    this.type = type;
    this.currentAmmo = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }
  fight(): number {
    let damage: number = this.baseDamage * this.currentAmmo;
    return damage;
  }
  refill(ammoStorage: number): number {
    if (ammoStorage <= this.maxAmmo) {
      this.currentAmmo += ammoStorage;
      return ammoStorage - this.currentAmmo;
    }
    else {
      this.currentAmmo = this.maxAmmo;
    }
    return this.currentAmmo;
  }

  getType(): string {
    return `${this.type}`

  }
  getStatus(): string {
    return `Type: ${this.type},Ammo:${this.currentAmmo}, Base Damage: ${this.baseDamage}, All damage: ${this.baseDamage * this.currentAmmo}`;
  }
  isPriority(): boolean {
    if (this.type === "F35") {
      return true
    } else {
      return false
    }
  }
}