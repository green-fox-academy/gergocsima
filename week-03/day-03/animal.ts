export class Animal {
  protected hungerValue: number = 0;
  protected thirstValue: number = 0;

  constructor(hungerValue: number = 50, thirstValue: number = 50) {
    this.hungerValue = hungerValue;
    this.thirstValue = thirstValue;
  }
  eat() {
    return this.thirstValue--;
  }
  drink() {
    return this.hungerValue--;
  }
  play() {
    return this.hungerValue++ , this.thirstValue++;
  }
  getHungry() {
    return this.hungerValue;
  }
}

let Animal1: Animal = new Animal();
Animal1.eat();
Animal1.drink();

console.log(Animal1);