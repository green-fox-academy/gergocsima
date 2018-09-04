import { Animal } from "./animal";

export class Reptile extends Animal {


  constructor(name: string, isDangerous: boolean) {
    super(name, isDangerous)
  }
  breed(): string {
    return 'Reptles laying eggs in nest or into the soil.'

  }
  getName(): string {
    return `${this.name}`;
  }
  isDangerouss() {
    return `${this.isDangerous}`
  }
}