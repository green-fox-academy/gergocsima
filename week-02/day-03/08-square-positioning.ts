'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

//given variables
let xCoo: number = 30;
let yCoo: number = 10;

//function for drawing squares

function squareDrawing(x: number, y: number) {
    ctx.fillStyle = 'cyan';
    ctx.fillRect(x, y, 50, 50);
}

// Loop for using function to create squares
for (let i: number = 0; i < 3; i++) {
    //squareDrawing(xCoo+(xCoo*i), yCoo+(yCoo*i)); //squares overlap happen
    squareDrawing(xCoo+(50*i), yCoo+(50*i);
}

