import { Animal } from "./animal_main";

export class Reptile extends Animal{
  constructor(breed: string = 'laying eggs') {
    super()
    this.name = 'Crocodile'
    this.breed = 'laying eggs'
  }
  breed(){
    console.log(${})
  }
}