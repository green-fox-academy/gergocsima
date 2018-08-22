export abstract class Animal {
  name : string;
  yearOfBirth: number;
  isHungry:boolean;
  isSleepy:boolean;
  isDangerous: boolean;

  constructor(name:string,yearOfBirth: number, isHungry: boolean, isDangerous:boolean) {
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.isHungry=false;
    this.isDangerous=false;
  }
  abstarct eat(): void;

  }
}