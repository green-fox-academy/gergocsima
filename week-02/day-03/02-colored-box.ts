'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.
let sideA: number = 100;
let sideB: number = 200;
let placeToDrawX: number = 60; // x coordinate of the start point
let placeToDrawY: number = 100; // y coordinate of the start point

ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "red";
ctx.moveTo(placeToDrawX, placeToDrawY);
ctx.lineTo(placeToDrawX + sideA, placeToDrawY);
ctx.stroke();
ctx.closePath();

ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "blue";
ctx.moveTo(placeToDrawX + sideA, placeToDrawY);
ctx.lineTo(placeToDrawX + sideA, placeToDrawY + sideB);
ctx.stroke();
ctx.closePath();

ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "green";
ctx.moveTo(placeToDrawX, placeToDrawY + sideB);
ctx.lineTo(placeToDrawX + sideA, placeToDrawY + sideB);
ctx.stroke();
ctx.closePath();


ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "orange";
ctx.moveTo(placeToDrawX, placeToDrawY);
ctx.lineTo(placeToDrawX, placeToDrawY + sideB);
ctx.stroke();
ctx.closePath();
/*
//SHORTER PROGRAM
let sideC: number = 10;
let sideD: number = 200;
let placeToDrawX: number = 30; // x coordinate of the start point
let placeToDrawY: number = 10; // y coordinate of the start point

ctx.beginPath(); // define the place where to start to draw the rectangle
ctx.strokeStyle = "red";
ctx.moveTo(placeToDrawX, placeToDrawY);
ctx.lineTo(placeToDrawX + sideC, placeToDrawY);
//ctx.stroke();

// define the place where to start to draw the rectangle
ctx.strokeStyle = "blue";
ctx.lineTo(placeToDrawX + sideC, placeToDrawY + sideD);
ctx.stroke();

// define the place where to start to draw the rectangle
ctx.strokeStyle = "green";
ctx.lineTo(placeToDrawX, placeToDrawY + sideD);
ctx.stroke();


// define the place where to start to draw the rectangle
ctx.strokeStyle = "orange";
ctx.lineTo(placeToDrawX, placeToDrawY);
ctx.stroke();
ctx.closePath();