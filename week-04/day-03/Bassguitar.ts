import { StringedInstrument } from "./stringedinstrument";

export class BassGuitar extends StringedInstrument {
  voice: string;
  constructor(voice?: string) {
    super(4)
    this.voice = 'Duum-duum-duum';
  }
}
let bassg1: BassGuitar = new BassGuitar();
console.log(bassg1);