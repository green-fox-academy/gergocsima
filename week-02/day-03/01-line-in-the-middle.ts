'use strict';
export{}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

//let canvasHeight: number = 400; //x coordinate
//let canvasWidth: number = 600; //y coordinate

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(canvas.width/2,0);
ctx.lineTo(canvas.width/2,canvas.height);
ctx.stroke();
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0,canvas.height/2);
ctx.lineTo(canvas.width,canvas.height/2);
ctx.closePath();
ctx.stroke();
