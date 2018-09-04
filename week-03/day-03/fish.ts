import { Animal } from "./animal";

export class Fish extends Animal {

  constructor(name: string, isDangerous: boolean) {
    super(name, isDangerous)
  }
  breed(): string {
    return 'Fishes spawning in water mostly and hetching eggs.';
  }
  getName(): string {
    return `${this.name}`;
  }
  isDangerouss() {
    return `${this.isDangerous}`
  }
}

