import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  sound() {
  }
  play(): void{
    console.log(`${this.name}, a ${this.numberOfStrings} that goes ${this.sound()}`)
  }
}