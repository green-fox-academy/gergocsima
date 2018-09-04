export class Pirate {
  name: string;
  alcLevel: number;
  status: boolean;
  constructor(name?: string, alcLevel: number = 0, status: boolean = true) {
    this.name = name;
    this.alcLevel = alcLevel;
    this.status = status;
  }
  drinSomeRum() {
    if (this.status == true) {
      return this.alcLevel++;
    } else {
      return `${this.name}:I'am dead mate...!`
    }
  }
  howsItGoingMate() {
    if (this.alcLevel <= 4) {
      return `${this.name}: Pour me anudder!`;
    } else {
      this.alcLevel = 0;
      return `${this.name}:Arghh, I'ma Pirate. How d'ya d'ink its goin?`
    }
  }
  die() {
    if (this.status == true) {
      this.status = false;
      return `${this.name}: OOOohh I am deeead....`
    }
  }
  brawl(piaretOpp: Pirate) {
    let chance: number = Math.floor(Math.random() * 3);
    if (piaretOpp.status != false && chance === 1) {
      piaretOpp.die();
      return `${piaretOpp.name} died`
    } else if (piaretOpp.status != false && chance === 2) {
      this.die();
      return `${this.name} died`
    } else {
      this.alcLevel = 4;
      piaretOpp.alcLevel = 4;
      return `${this.name} and ${piaretOpp.name} We both passed outh mate...`
    }
  }
}

// let laci: Pirate = new Pirate('Laci');
// let bela: Pirate = new Pirate('Bela', 3);
// let jozso: Pirate = new Pirate('Jozso', 2);
// console.log(laci.alcLevel);
// laci.drinSomeRum();
// laci.drinSomeRum();
// console.log(laci.howsItGoingMate());
// console.log(laci.alcLevel);
// jozso.die();
// console.log(laci.drinSomeRum());
// console.log(laci.brawl(bela));

// And... if you get that far...

// Add a parrot.