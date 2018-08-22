import { StringedInstrument } from "./stringedinstrument";

export class Violin extends StringedInstrument {
  voice: string;
  constructor(numberOfStrings: number = 4) {
    super()
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Screech';
  }
  sound(){
    return this.voice;
  }
  play() :void{
    super.play();
  }
}