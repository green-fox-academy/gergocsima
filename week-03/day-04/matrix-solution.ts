export{};

let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]
//let x: number[][]=[[]];

function isSymmetric(matrix: number[][]): boolean {
  let rowNumber: number = matrix.length;
  for (let row: number = 0; row < rowNumber; row++) {
    let colNumber: number = matrix[row].length;
    for (let col: number = 0; col < colNumber; col++) {
      if (matrix[row][col] !== matrix[col][row]) {
        return false;
      }
    } return true
  }
}
isSymmetric(symmetricMatrix);

console.log(isSymmetric(symmetricMatrix)); // should print out true