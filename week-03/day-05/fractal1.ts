export{};
'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let centerX: number = canvasWidth/2;
let centerY: number = canvasHeight/2;
let raD: number =Math.PI/180;
let R: number = 100;
let endAngle: number = 2*Math.PI;



ctx.beginPath();
ctx.arc(500, 500, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.fillRect(10, 10, 100, 100);