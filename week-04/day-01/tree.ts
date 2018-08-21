export class Tree {
  protected type: string;
  protected color: string;
  protected waterUtilization: number;
  
  constructor(color: string) {
    this.type = 'tree';
    this.color = color;
    this.waterUtilization = 0.75;

  }
}

let tree1: Tree = new Tree('red');
console.log(tree1);