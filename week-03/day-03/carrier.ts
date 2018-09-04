import { Aircraft } from "./aircraft";

export class Carrier {
  name: string;
  flights: Aircraft[];
  ammoStoraged: number;
  healthPoint: number;
  ammoRemains: number;
  allDamage: number;

  constructor(name: string, ammoStoraged: number = 2000, healthPoint: number = 1200) {
    this.name = name;
    this.ammoStoraged = ammoStoraged;
    this.healthPoint = healthPoint;
    this.ammoRemains = ammoStoraged;
    this.allDamage = 0;
    this.flights = [];
  }

  add(aircrafToAdd: Aircraft): void {
    this.flights.push(aircrafToAdd);
  }
  fill() {
    if (this.ammoRemains > this.ammoStoraged * 0.25) {
      this.flights.forEach((elem) => elem.refill(this.ammoRemains))
    } else if (this.ammoRemains < this.ammoStoraged * 0.25) {
      for (let i: number = 0; i < this.flights.length; i++) {
        if (this.flights[i].isPriority() === true) {
          this.flights[i].refill(this.ammoRemains);
        }
      }
    }
    else if (this.ammoStoraged === 0) {
      return 'The ship is empty...!'
    }
  }
  fight(carrier: Carrier): any {
    while (this.ammoStoraged > 0) {
      carrier.flights.forEach((elem) => carrier.allDamage + elem.fight());
    }
    carrier.healthPoint -= carrier.allDamage
    if (carrier.healthPoint <= 0) {
      return `${carrier.name} : It's dead Jim`
    }
  }
  getStatus(): string {
    return `HP: ${this.healthPoint}, Aircraft count ${this.flights.length}, Ammo Storage: ${this.ammoStoraged}, Total damage: ${this.allDamage}\n ${this.flights.map((elem) => '\n' + elem.getStatus())}`;
  }
}