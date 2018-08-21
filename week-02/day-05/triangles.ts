'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidt: number = canvas.width;
let canvasHeight: number = canvas.height;

let sideLength: number = 40;
let triangleSide: number = 100;
let numbersOfTriangles: number = 5;
let sizeRatio: number = 1.75;
let xY: number = 0;
let desiredColour: string = 'cyan';
let addedColour = [desiredColour];
let triangleHeight: = Math.sqrt(3 / 2) * triangleSide;
//let startPoint: number = 0;
let startX: number = canvasWidt / 2;
let startY: number = (canvasHeight / 2) - triangleHeight / 2;
let numberOfTriangleLines: number = 2;


function drawTriangle(x: number) {
    for (let i: number = 1; i < numberOfTriangleLines; i++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY;
        ctx.strokeStyle = addedColour;
        ctx.lineTo(startX + triangleSide / 2, triangleHeight + startY);
        ctx.lineTo(startX - triangleSide / 2, startY + triangleHeight);
        ctx.lineTo(startX, startY);
        ctx.stroke();
        ctx.closePath();
   }
}

drawTriangle(triangleSide); 
