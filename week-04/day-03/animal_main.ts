export abstract class Animal {
 
  name : string;
  age: number;
  isHungry:boolean;
  isSleepy:boolean;
  isDangerous: boolean;
 
  abstract getName()
  abstract breed()
}