'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let lineNumber: number = 14;
let startX: number = canvasWidth / lineNumber;
let endY: number = canvasHeight / lineNumber;
let startY: number = 0;
// colour of your choice

let desiredColour1: string = 'cyan';
let addedColour1 = [desiredColour1];
let desiredColour2: string = 'orange';
let addedColour2 = [desiredColour2];

//draw lines one side
function drawLine(lineNumber) {
    for (let i: number = 1; i < lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour1;
        ctx.moveTo(startX * i, startY);
        ctx.lineTo(canvasWidth, endY * i);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = addedColour2;
        ctx.moveTo(0, (canvasHeight / lineNumber)*i);
        ctx.lineTo(canvasWidth/lineNumber*i, canvasHeight);
        ctx.stroke();
        ctx.closePath();
    }
}
drawLine(lineNumber);

/*function drawLine(lineNumber) {
    for (let i: number = 1; i < lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour1;
        ctx.moveTo(0, (canvasHeight / lineNumber)*i);
        ctx.lineTo(canvasWidth/lineNumber*i, canvasHeight);
        ctx.stroke();
        ctx.closePath();
    }
}
drawLine(lineNumber);