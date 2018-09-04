import { Animal } from "./animal";

export class Bird extends Animal {
  constructor(name: string, isDangerous: boolean) {
    super(name, isDangerous)
  }
  breed(): string {
    return 'Birds laying eggs in nests.'
  }
  getName(): string {
    return `${this.name}`;
  }
  isDangerouss() {
    return `${this.isDangerous}`
  }
}