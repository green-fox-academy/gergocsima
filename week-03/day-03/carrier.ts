import { Aircraft } from "./aircraft";

export class Carrier {
  name: string;
  flights: Aircraft[];
  ammoStoraged: number;
  healthPoint: number;
  ammoRemains: number;
  startHealth: number;


  constructor(name: string, ammoStoraged: number = 2000, healthPoint: number = 1200) {
    this.name = name;
    this.ammoStoraged = ammoStoraged;
    this.healthPoint = healthPoint;
    this.ammoRemains = ammoStoraged;
    this.flights = [];
    this.startHealth = healthPoint;

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
  fight(carrier: Carrier): string {
    let allDamage: number = 0;
    this.flights.forEach(elem => allDamage += elem.fight());
    carrier.healthPoint -= allDamage;
    if (carrier.healthPoint <= 0) {
      return `${carrier.name} : It's dead Jim`
    }
    else {
      return `${carrier.name}: Current status: ${carrier.healthPoint}`
    }
  }
  getStatus(): string {
    let totalPotentialDamage: number = 0;
    this.flights.forEach(elem => totalPotentialDamage += elem.getDamage());
    return `HP: ${this.healthPoint}, Aircraft count ${this.flights.length}, Ammo Storage: ${this.ammoStoraged}, Total damage: ${totalPotentialDamage} \n ${this.flights.map((elem) => '\n' + elem.getStatus())} `;
  }
}