export class Pirate {
  name: string;
  alcLevel: number;
  status: boolean;
  constructor(naem: string, alcLevel: number = 0, status: boolean = false) {
    this.name = name;
    this.alcLevel = alcLevel;
    this.status = status;
  }
  drinSomeRum() {
    if (this.status == false) {
      return this.alcLevel++;
    } else {
      return `I'am dead mate...!`
    }
  }
  howsItGoingMate() {
    if (this.alcLevel <= 4) {
      return "Pour me anudder!";
    } else {
      this.alcLevel = 0;
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?"

    }
  }
  die() {
    if (this.status == false) {
      return true
    }
  }
  brawl(piaretOpp: Pirate) {
    if (this.status != true && piaretOpp.status != true) {
      let chance = Math.floor(Math.random() * 3)
      if (chance = 1) {
        piaretOpp.die()
      } else if (chance = 2) {
        this.die()
      } else {
        this.alcLevel = 4;
        piaretOpp.alcLevel = 4;
      }
    }
  }
}
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate,
// in which case, DrinkSomeRum, etc. just result in he's dead.
// - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 
//1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.