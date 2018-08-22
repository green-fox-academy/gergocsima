import { Animal} './animal'

export class Zoo extends Animal {
  private animals: Animal[];
  private name: string;
  private yearOfFounding: number;

  constructor ( name: string;yearOfFounding: number) {
    this,name = name;
    this.yearOfFounding=yearOfFounding;
    this.animals = [];

  }
}