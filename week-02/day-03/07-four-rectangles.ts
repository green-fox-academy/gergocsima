'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

//variables
let rectangleNr: number = 4;
let sideLengthA: number = 10;

//calculators
let sideLengthB: number = sideLengthA * 1.2;


for (let r: number =0;r<= rectangleNr;r++) {
    ctx.fillStyle='rgb('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ')';
//    ctx.fillStyle='blue';
    ctx.fillRect(rectangleNr*(10+r*3),(rectangleNr+1)*(10*(r+3)),rectangleNr*(10*r),rectangleNr*(10/r));
}
//Function - Draw rectangle
/*
function drawRectangle(x: number, y: number) {
    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * x) + ',' + Math.floor(255 - 42.5 * y) + ',0)';
ctx.fillRect(x*10,y*20,x,y)
    //    ctx.fillRect(x + (sideLengthA * 2 + 10), y - sideLengthB, sideLengthA, sideLengthB);
ctx.fillRect(x + (sideLengthA * 2 + 10), y - sideLengthB, sideLengthA+sideLengthA, sideLengthA+sideLengthB);
}
for (let i: number = 0; i < rectangleNr; i++) {
    drawRectangle(rectangleNr,sideLengthA);
    rectangleNr=
}
/* for (let i: number = 0; i < rectangleNr; i++) {
    drawRectangle(20 + (40 * i), 40);
    sideLengthA = sideLengthA + (sideLengthA * (i + 5));
}
 */