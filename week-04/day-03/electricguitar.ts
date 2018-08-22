import { StringedInstrument } from "./stringedinstrument";

export class ElectricGuitar extends StringedInstrument {
  voice: string;
  constructor(numberOfStrings: number = 6) {
    super()
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Twang';
  }
  sound(): string{
    return this.voice;
  }
  play(): void{
    super.play();
  }
}