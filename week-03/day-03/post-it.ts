'use strict';
class PostIt {

  //field
  public backgroundColor: string;
  public textOnIt: string;
  public textColor: string;
  //constructor
  constructor(backgroundColor: string, textOnIt: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.textOnIt = textOnIt;
    this.textColor = textColor;
  }
  //function
  printIt(): void {
    console.log(this.backgroundColor + ' with ' + this.textColor + ' text ' + this.textOnIt);
  }
}

let PostIt1: PostIt = new PostIt('orange', 'idea1', 'blue');
let PostIt2: PostIt = new PostIt('pink', 'Awesome', 'black');
let PostIt3: PostIt = new PostIt('yellow', 'Superb!', 'green');
PostIt1.printIt();
PostIt2.printIt();
PostIt3.printIt();
