'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
let canvasWidt: number = canvas.width;
let canvasHeight: number = canvas.height;
let sideLength: number = 40;
let stepSize: number = 40;
let numbersOfSquares: number = 5;
let sizeRatio: number = 1.75;
let xY: number = 0;

function squareDrawing(x: number) {
    for (let i: number = 0; i < numbersOfSquares; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(xY, xY, sideLength, sideLength);
        xY = xY+sideLength;
        sideLength = sideLength * sizeRatio;
    }
}
squareDrawing(sideLength);