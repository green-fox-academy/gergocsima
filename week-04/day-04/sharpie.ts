// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), 
//inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmountż

export class Sharpie {
  protected color: string;
  protected width: number;
  protected inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color =color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
    use() : number {
      return this.inkAmount-1
    }
    colOR(): any {
      return this.color;
    }
    inkVol(): any {
      return this.inkAmount;
    }
    wide(): any {
      return this.width;
}

export let numberPair = new Sharpie(1,2);
export let inputEmptyList = new Sharpie([1],2);
export let oneElement = new Sharpie([4]);
export let multyplyElements = new Sharpie([1,2,3,4,5]);
export let testNull = new Sharpie(null);
export let testStringu = new Sharpie('valami');