import { Animal } from "./animal";

class Fram {
  animalsOfFarm: Animal[]
  availableSlots: number;
  constructor(availableSlots: number) {
    this.animalsOfFarm = [];
    this.availableSlots = availableSlots;
  }
  remainingSlots() {
    return this.availableSlots - this.animalsOfFarm.length
  }
  breed(animaladd: Animal) {
    this.animalsOfFarm.push(animaladd);
  }
  slaughter(): any {
    this.animalsOfFarm.sort((a, b) => {
      return b.hunger - a.hunger
    })
    this.animalsOfFarm.splice(0, 1);
  }
}
// let minHunger: number = 0;
// for (let i: number = 0; i < this.animalsOfFarm.length; i++) {
//   if (this.animalsOfFarm[i].hunger < this.animalsOfFarm[0].hunger) {
//     minHunger = this.animalsOfFarm[i].hunger
//   }
// }
// let remains: any[]
// for (let j: number = 0; j < this.animalsOfFarm.length; j++) {
//   if (this.animalsOfFarm[j].hunger != minHunger) {
//     remains.push(this.animalsOfFarm[j]);
//   }
// }
// console.log(remains);
//}}




// Reuse your Animal class
//   Create a Farm class
//   it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

let myFarm: Fram = new Fram(20)
myFarm.breed(new Animal(10, 10));
myFarm.breed(new Animal(10, 100));
myFarm.breed(new Animal(40, 10));
myFarm.breed(new Animal(10, 20));
myFarm.breed(new Animal(12, 10));
myFarm.breed(new Animal(100, 10));
myFarm.breed(new Animal(1, 10));

//console.log(myFarm);
//console.log(myFarm.remainingSlots());
console.log('eeez' + myFarm.slaughter());
//console.log(myFarm);