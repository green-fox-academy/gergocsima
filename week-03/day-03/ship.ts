import { Pirate } from "./pirate";

class Ship {
  captain: Pirate;
  ship: Pirate[]
  nameOfTheShip: string;
  crewnumberRandom: number;

  constructor(nameOfTheShip: string) {
    this.nameOfTheShip = nameOfTheShip
    this.ship = [];
    this.captain = new Pirate();
    this.crewnumberRandom = Math.floor(Math.random() * 100);
  }
  fillShip(): void {
    let captain = new Pirate('Captain Jack');
    this.ship.push(captain);
    for (let i: number = 0; i < this.crewnumberRandom; i++) {
      this.ship.push(new Pirate('pirate'))
    }
  }
  getInfo(): string {
    let crewLiving: number = 0;
    for (let i: number = 0; i < this.ship.length; i++) {
      if (this.ship[i].status === true) {
        crewLiving++;
      }
    }
    return `The ${this.nameOfTheShip} under the command of ${this.ship[0].name}, consist of ${this.crewnumberRandom}, with functioning ${crewLiving} pirates the other ${this.crewnumberRandom - crewLiving + 1} are dead.\n The captain consumed ${this.captain.alcLevel} rum and he is ${this.captain.howsItGoingMate()}`
  }
  battle(otherShip: Ship) {

  }
}

let pirateship1: Ship = new Ship('Mongooose');
let pirateship2: Ship = new Ship('Cobra');
pirateship1.fillShip();
//console.log(pirateship1);
console.log(pirateship1.getInfo());