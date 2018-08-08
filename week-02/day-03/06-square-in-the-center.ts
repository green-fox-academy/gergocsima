'use strict';
export{}

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.
//Canvas size

let sideLength: number = 100;
let x: number =0;
let y: number =0;

// Draw a colored square
ctx.fillStyle = 'green';
ctx.fillRect(x, y, sideLength, sideLength);