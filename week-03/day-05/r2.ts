'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let centerX: number = canvasWidth / 2;
let centerY: number = canvasHeight / 2;
let rad: number = Math.PI / 180;
let radius: number = canvasHeight / 2;
let recursionFactor: number = 0;

// colour of your choice

let desiredColour1: string = 'cyan';
let addedColour1 = [desiredColour1];
let desiredColour2: string = 'orange';
let addedColour2 = [desiredColour2];

/* ctx.beginPath();
ctx.strokeStyle = desiredColour2;
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.stroke(); */


function drawCircle(x: number, y: number, z: number) {
    ctx.beginPath();
    ctx.strokeStyle = desiredColour2;
    ctx.arc(x, y, z, 0, Math.PI * 2);
    ctx.stroke();
}

/* 
for (let i: number = 0; i <= canvasWidth; i++) {
    drawCircle(centerX, centerY-radius/4*i, radius/4*i);

} */


drawCircle(centerX,centerY,radius);
drawCircle(centerX,centerY-radius/2,radius/4);
/* 
function loopCircle(num: number) {
        drawCircle(centerX, centerY, num)
}
loopCircle(radius); */

