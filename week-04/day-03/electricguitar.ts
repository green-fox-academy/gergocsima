import { StringedInstrument } from "./stringedinstrument";

export class ElectricGuitar extends StringedInstrument{
  voice: string;
  constructor() {
    super(6);
    this.voice= 'Twang';
  }
}