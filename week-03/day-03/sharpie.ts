export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  use(): number {
    return this.inkAmount--;

  }
}



let sharpieThe: Sharpie = new Sharpie('yellow', 100);
//console.log(sharpieThe);
sharpieThe.use();
//console.log(sharpieThe);
let sharpieA: Sharpie = new Sharpie('green', 10);
//console.log(sharpieA);
sharpieA.use();
//console.log(sharpieA);
let sharpieB: Sharpie = new Sharpie('blue', 20);
//console.log(sharpieB);
sharpieB.use();
//console.log(sharpieB);
let sharpieC: Sharpie = new Sharpie('red', 30);
console.log(sharpieC);
sharpieC.use();
//console.log(sharpieC);
