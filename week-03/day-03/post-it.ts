class PostIt {
  backgroundcolor: string;
  textOnIt: string;
  textColor: string;
  constructor(backgroundcolor: string, textOnIt: string, textColor: string) {
    this.backgroundcolor = backgroundcolor;
    this.textOnIt = textOnIt;
    this.textColor = textColor;
  }
}

let postItOne: PostIt = new PostIt('orange', 'Idea 1', 'blue');
console.log(postItOne);
let postItTwo: PostIt = new PostIt('Superb', 'Awesome', 'black');
console.log(postItTwo);
let postItThree: PostIt = new PostIt('yellow', 'superb', 'green');
console.log(postItThree);