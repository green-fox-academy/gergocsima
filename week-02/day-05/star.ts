'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let scaleDownRation: number = 2;
let positioning: number =200;
let canvasWidth: number = canvas.width / scaleDownRation;
let canvasHeight: number = canvas.height / scaleDownRation;
let lineNumber: number = 14;
let startY: number = 0+positioning;
let startX: number = canvasWidth / lineNumber;
let endY: number = canvasHeight / lineNumber;
// colour of your choice

let desiredColour1: string = 'cyan';
let addedColour1 = [desiredColour1];
let desiredColour2: string = 'orange';
let addedColour2 = [desiredColour2];
let desiredColour3: string = 'cyan';
let addedColour3 = [desiredColour3];
let desiredColour4: string = 'orange';
let addedColour4 = [desiredColour4];

//3rd quarter of the star
function drawLine3rdQ(lineNumber) {
    for (let i: number = 1; i <= lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour1;
        ctx.moveTo(startX * i, startY);
        ctx.lineTo(canvasWidth, endY * i+positioning);
        ctx.stroke();
        ctx.closePath();

    }
}
drawLine3rdQ(lineNumber);

//3rd quarter of the star
function drawLine4thQ(lineNumber) {
    for (let i: number = 1; i <= lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour1;
        ctx.moveTo(startX * i, startY);
        ctx.lineTo(canvasWidth, positioning-endY * i);
        ctx.stroke();
        ctx.closePath();

    }
}
drawLine4thQ(lineNumber);


//2nd quarter of the star
function drawLine2ndQ(lineNumber) {
    for (let i: number = 1; i <= lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour2;
        ctx.moveTo(2*canvasWidth-startX*i, startY);
        ctx.lineTo(canvasWidth, positioning-endY *i);
        ctx.stroke();
        ctx.closePath();

    }
}
drawLine2ndQ(lineNumber);

//2nd quarter of the star
function drawLine1stQ(lineNumber) {
    for (let i: number = 1; i <= lineNumber; i++) {
        ctx.beginPath();
        ctx.strokeStyle = addedColour2;
        ctx.moveTo(canvasWidth, endY * i+positioning);
        ctx.lineTo(2*canvasWidth-startX*i, startY);
        ctx.stroke();
        ctx.closePath();

    }
}
drawLine1stQ(lineNumber);
