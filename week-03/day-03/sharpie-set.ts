import { Sharpie } from "./sharpie";

'use strict';


class SharpieSet {
  sharpieList: Sharpie[];
  constructor() {
    this.sharpieList = [];
  }
  addSharpie(sharp: Sharpie): void {
    this.sharpieList.push(sharp)
  }
  countUsable(): number {
    let countUsable: number = 0;
    for (let i: number = 0; i < this.sharpieList.length; i++) {
      if (this.sharpieList[i].inkAmount > 0) {
        countUsable++;
      } return countUsable;
    }
  }
  removeTrash(): void {
    for (let j: number = 0; j < this.sharpieList.length; j++) {
      if (this.sharpieList[j].inkAmount === 0) {
        this.sharpieList.splice(j, 1)
      }
    }
  }
}



let sharpiList = new SharpieSet;
sharpiList.addSharpie(new Sharpie('yellow', 100));
sharpiList.addSharpie(new Sharpie('green', 0, 0));
sharpiList.addSharpie(new Sharpie('blue', 10, 0));
sharpiList.addSharpie(new Sharpie('red', 30, 0));
//console.log('sharpielist' + sharpiList);
//console.log(sharpiList.countUsable());
//console.log(sharpiList);
sharpiList.removeTrash();
//console.log(sharpiList);


