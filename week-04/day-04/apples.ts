'use strict'

export class Apple {
  name: string;
  constructor(name) {
    this.name = name;
  }
  getApple(){
  return 'apple';
  }
}

let apple1 : Apple = new Apple ('alma');
apple1.getApple();
console.log(apple1.getApple());