'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDrawing(f:number, g:number) {
  ctx.strokeStyle = "cyan";
  ctx.beginPath();
  ctx.moveTo(f, g);
  ctx.lineTo(canvas.width / 2, canvas.height/2);
  ctx.stroke();
  ctx.closePath();
}

lineDrawing(100,101);