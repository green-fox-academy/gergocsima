import { Animal } from "./animal";
calss Farm {
  private animals: Animal[];
  private freeSlots: number;

  constructor(){
    this.animals = [];
    this.freeSlots = 10;
  }
  breed() {
    if (this.freeSlots > 0) {
      let myAnimal: Animal = new Animal();
      this.animals.push(myAnimal);
      this.freeSlots--;
    }
  }
  slaughter() {
    let index: number = 0;
    for (let i: number = 0; i < this.animals.lenght; i++) {
      let leastHungry: Animal = this.animals[index];
      let currentAnimal: Animal = this.animals[i];
      if (currentAnimal.getHungry() < leastHungry.getHungry())
        index = i;
    }
  }
  this.animals.splice(index, 1);
  this.freeSlots++;
}
