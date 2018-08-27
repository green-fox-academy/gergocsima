'use strict'
import { converter, finalResult } from './converter';
import { test } from 'tape';

test('converter1', (test) => {
  let money: number = 2;
  test.equal(converter(money),'two');
  console.log(converter(money));
  test.end();
})

test('converter2', (test) => {
  let money: number = 5;
  test.equal(converter(money),'five');
  console.log(converter(money));
  test.end();
})

test('converter3', (test) => {
  let money: number = 15;
  test.equal(converter(money),'fifteen');
  console.log(converter(money));
  test.end();
})
test('converter4', (test) => {
  let money: number = 23;
  test.equal(converter(money),'twenty-three');
  console.log(converter(money));
  test.end();
})
test('converter5', (test) => {
  let money: number = 30;
  test.equal(converter(money),'thirty');
  console.log(converter(money));
  test.end();
})
test('converter6', (test) => {
  let money: number = 20;
  test.equal(converter(money),'twenty');
  console.log(converter(money));
  test.end();
})

test('converter7', (test) => {
  let money: number = 0;
  test.equal(converter(money),'zero');
  console.log(converter(money));
  test.end();
})
test('converter8', (test) => {
  let money: number = 329;
  test.equal(converter(money),'three hundred twenty-nine');
  console.log(converter(money));
  test.end();
})
test('converter9', (test) => {
  let money: number = 4317;
  test.equal(converter(money),'four thousand three hundred seventeen');
  console.log(converter(money));
  test.end();
})

test('converter9', (test) => {
  let money: number = 4347;
  test.equal(converter(money),'four thousand three hundred fourty-seven');
  console.log(converter(money));
  test.end();
})

test('converter10', (test) => {
  let money: number = 4347;
  test.equal(finalResult(money),'4347.00 $ (four thousand three hundred fourty-seven)');
  console.log(converter(money));
  console.log(finalResult(money));
  test.end();
})

test('converter10', (test) => {
  let money: number = 4347.30;
  test.equal(finalResult(money),'4347.30 $ (four thousand three hundred fourty-seven 30/100)');
  console.log(converter(money));
  console.log(finalResult(money));
  test.end();
})