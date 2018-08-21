export class Flower {
  protected type: string;
  protected color: string;
  protected waterUtilization: number;
  
  constructor(color: string) {
    this.type = 'flower';
    this.color = color;
    this.waterUtilization = 0.75;

  }
}

let flower1: Flower = new Flower('red');
console.log(flower1);