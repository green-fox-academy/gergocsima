'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

//parameter given

let size: number = 100;

//function drawing square

/*function squareDrawing(x: number) {
    //    random color generator
    ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, x, x);
}


for (let i: number = 0; i < 3; i++) {
    squareDrawing(size);
    size = size - 10;
}
*/


function squareDrawing(x: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
        size = size - (size/3);
    }
}
squareDrawing(size);
