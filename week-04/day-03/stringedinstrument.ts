import { Instrument } from "./instrument";

export abstract class StringedInstrument extends  Instrument {
  numberOfStrings: number;

  constructor(numberOfStrings: number) {
    super(name)
    this.numberOfStrings=numberOfStrings;
  }
  sound() {
    console.log(this.numberOfStrings);
  }
}