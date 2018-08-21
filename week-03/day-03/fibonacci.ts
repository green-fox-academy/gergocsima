'use strict';
//void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;


ctx.arc(x, y, radius, startAngle, endAngle);