/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

export class Animal {
  hungerValue: number = 0;
  thirstValue: number = 0;

  constructor (hungerValue: number, thirstValue: number) {
    this.hungerValue = hungerValue;
    this.thirstValue = thirstValue;
  }
  eat(){
    this.thirstValue-1;
  }
  drink(){
    this.hungerValue-1;
  }
  play(){
    this.hungerValue++
    this.thirstValue++;
  }
getHungry(){
return  this.hungerValue;
}
}

let Animal: Animal = new Animal()