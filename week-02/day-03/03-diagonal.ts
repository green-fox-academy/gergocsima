'use strict';
export{}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

//draw diagonal

//let width: number = 600;
//let heigth: number = 400;
let diagonalNumber: number = 0;

ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(canvas.width,canvas.height);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(canvas.width,0);
ctx.strokeStyle = "green";
ctx.lineTo(0,canvas.height);
ctx.stroke();
ctx.closePath();