'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


let cooX: number = 10;
let cooY: number = 40;
let repNr: number = 3;
let lineLength: number = 50;


//function for drawing line with predefined length and starting coordinates

function drawLine(k: number, l: number) {
    ctx.strokeStyle = "mediumspringgreen";
    ctx.beginPath();
    ctx.moveTo(k, l);
    ctx.lineTo(k + lineLength, l);
    ctx.stroke();
    ctx.closePath();
}
for (let i: number = repNr-1; i >= 0; i--) {
    drawLine(cooX + (i * 10), cooY+(i*20))
}

