'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
let canvasWidt: number = canvas.width;
let canvasHeight: number = canvas.height;
let size: number = 20;
let numbersOfSquares: number = 5;
let sizeRatio: number = 0.75;
/*
function squareDrawing(x: number) {
    for (let i: number = 0; i < numbersOfSquares; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(0 + (i * size), 0 + (i * size), size, size);
        size = size + ((i++) * sizeRatio);
        console.log(sizeRatio);
    }
}
squareDrawing(size);*/

function squareDrawing(x: number) {
    for (let i: number = 1; i < numbersOfSquares; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(size,size, size, size);
        //size = size + ((i++) * sizeRatio);
    }
}
squareDrawing(size);