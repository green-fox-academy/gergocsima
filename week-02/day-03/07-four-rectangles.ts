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
//Function - Draw rectangle
ctx.fillStyle = 'green';
function drawRectangle(x: number, y: number) {
    ctx.fillRect(x + (sideLengthA * 2 + 10), y-sideLengthB, sideLengthA, sideLengthB);
}

drawRectangle(10,20);
/*for (let i: number = rectangleNr-1; i >= 0; i--) {
    sideLengthA=sideLengthA+(sideLengthA*i);
    drawRectangle(20+(30*i),40);
}

