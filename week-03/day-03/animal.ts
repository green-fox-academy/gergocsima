export abstract class Animal {

  menu: string;
  weight: number;


  constructor(public name: string, public isDangerous: boolean) {
    this.name = name;
    this.isDangerous = isDangerous;

  }
  breed() {
    return `${this.breed}`
  }
  getName() {
    return `${this.name}`
  }
  isDangerouss() {
    return `${this.isDangerous}`
  }
}