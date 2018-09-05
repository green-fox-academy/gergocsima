import { Aircraft } from "./aircraft";
import { F16 } from './f16';
import { F35 } from './f35';

export class Carrier {
  name: string;
  flights: Aircraft[];
  ammoStoraged: number;
  healthPoint: number;
  ammoRemains = 0;
  startHealth: number;
  allDamage = 0;


  constructor(name: string, ammoStoraged: number = 2000, healthPoint: number = 1200) {
    this.name = name;
    this.ammoStoraged = ammoStoraged;
    this.healthPoint = healthPoint;
    this.flights = [];


  }

  add(aircrafToAdd: Aircraft): void {
    this.flights.push(aircrafToAdd);
  }
  fill() {
    let sumAmmo: number = 0;
    for (let i: number = 0; i < this.flights.length; i++) {
      this.flights[i].refill(this.ammoStoraged);
    }
    for (let j: number = 0; j < this.flights.length; j++) {
      sumAmmo += this.flights[j].currentAmmo;
      this.ammoStoraged -= sumAmmo;
    }
    if (this.ammoStoraged < sumAmmo) {
      for (let i: number = 0; i < this.flights.length; i++) {
        if (this.flights[i].isPriority() === true) {
          this.flights[i].refill(this.ammoStoraged);
        }
      }
    }
  }
  fight(carrier: Carrier): string {

    this.flights.forEach((elem) => this.allDamage += elem.fight());

    carrier.healthPoint -= this.allDamage;

    if (carrier.healthPoint <= 0) {
      return `${carrier.name} : It's dead Jim`
    }
    else {
      return `${carrier.name}: Current status: ${carrier.healthPoint}`
    }
  }
  getStatus(): void {

    this.flights.forEach((elem) => console.log(elem.getStatus()))
    console.log(`HP:${this.healthPoint}, Aircraft count ${this.flights.length}, Ammo Storage: ${this.ammoStoraged}, Total damage: ${this.allDamage} \n)`);
  }
}