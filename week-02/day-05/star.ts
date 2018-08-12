'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let scaleDownRation: number = 2;
let positioning: number =200;
let canvasWidth: number = canvas.width / scaleDownRation;
let canvasHeight: number = canvas.height / scaleDownRation;
let lineNumber: number = 20;
let startY: number = 0+positioning;
let startX: number = canvasWidth / lineNumber;
let endY: number = canvasHeight / lineNumber;
// colour of your choice

let desiredColour1: string = 'cyan';
let addedColour1 = [desiredColour1];
let desiredColour2: string = 'orange';
let addedColour2 = [desiredColour2];

//draw lines into left corner
function drawLine(lineNumber) {
    for (let i: number = 1; i < lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour1;
        ctx.moveTo(startX * i, startY);
        ctx.lineTo(canvasWidth, endY * i+positioning);
        ctx.stroke();
        ctx.closePath();

    }
}
drawLine(lineNumber);
