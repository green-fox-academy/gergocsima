import { Animal } from "./animal";

export class Mammal extends Animal {


  constructor(name: string, isDangerous: boolean) {
    super(name, isDangerous)
  }
  breed(): string {
    return 'Mammals give birth to their infants.'
  }
  getName(): string {
    return `${this.name}`;
  }
  isDangerouss() {
    return `${this.isDangerous}`
  }
}