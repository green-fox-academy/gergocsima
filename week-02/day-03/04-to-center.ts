'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number = 100;
let y: number = 10;
let width: number = 600;
let heigth: number = 400;
let repetition: number = 3;

function lineDrawing(x, y) {
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(width / 2, heigth/2);
    ctx.stroke();
    ctx.closePath();
}

    for (let i: number = repetition-1; i >= 0; i--) {
    lineDrawing(x + (25 * i), y + (40 * i));
}


/*ctx.clearRect(0, 0, width, heigth);
for (let i: number = repetition+1; i >= 0; i--) {
    ctx.clearRect(0, 0, width, heigth);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 0);
    ctx.lineTo(width / 2, heigth / 2);
    ctx.stroke();
    ctx.clip();
    /*ctx.moveTo(0, 0);
    ctx.closePath();*/

}
