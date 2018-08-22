import { StringedInstrument } from "./stringedinstrument";

export class BassGuitar extends StringedInstrument {
  voice: string;
  constructor(name: string,numberOfStrings: number = 4) {
    super()
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Duum-duum-duum';
  }
  sound(){
    return this.voice;
  }
  play(): void {
    super.play()
  }
}