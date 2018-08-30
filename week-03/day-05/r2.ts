'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.height;
let canvasHeight: number = canvas.height;
let rad = Math.PI / 180;
let radiusBig = canvasHeight / 2;
let radiusSmall = radiusBig / 2.15;
let xToAdd = radiusBig - (2 * radiusSmall);
let endAngle = 2 * Math.PI;
let verticalMovex = ((radiusSmall + xToAdd) * (radiusSmall + xToAdd)) - (radiusSmall * radiusSmall);

ctx.save();

ctx.beginPath();
ctx.strokeStyle = 'cyan';
ctx.translate(canvasWidth / 2, canvasHeight / 2);
ctx.arc(0, 0, radiusBig, 0 * rad, endAngle);
ctx.closePath();
ctx.stroke();
ctx.moveTo(canvasWidth / 2, radiusSmall);
ctx.restore();

ctx.beginPath();
ctx.translate(canvasWidth / 2, canvasHeight / 2);
ctx.strokeStyle = 'red';
ctx.arc(0, -(radiusSmall+xToAdd), radiusSmall, 0 * rad, endAngle);
ctx.closePath();
ctx.stroke();
ctx.restore();

ctx.beginPath();
ctx.translate(0, 0);
ctx.strokeStyle = 'green';
ctx.arc(radiusSmall,radiusSmall-(xToAdd*1.5), radiusSmall, 0 * rad, endAngle);
ctx.closePath();
ctx.stroke();
ctx.restore();