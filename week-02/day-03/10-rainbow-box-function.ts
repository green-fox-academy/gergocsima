'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//parameters given
let desiredColour: string = 'blue'; // the colour of your choice
let size: number = 25; // due to the canvas size best wit this maximum parameter

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let addedColour =[desiredColour];
let ratioCanvas: number = canvasWidth / canvasHeight;
let middlePointX: number = canvasWidth / 2;
let middlePointY: number = canvasHeight / 2;
let rainbowColours: string[] = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

//function for drawing square with two parameters


function squareDrawing(y: string) {
    rainbowColours=rainbowColours.concat(addedColour);
    for (let i: number = 0; i < (rainbowColours.length + 1); i++) {
        ctx.fillStyle = rainbowColours[((i + 1) + rainbowColours.indexOf(y)) % rainbowColours.length];
        ctx.fillRect((middlePointX - (size / 2) * (rainbowColours.length - i)), middlePointY - ((size / 2) * (rainbowColours.length - i)), (rainbowColours.length - i) * size, (rainbowColours.length - i) * size);
    }
}
squareDrawing(desiredColour);