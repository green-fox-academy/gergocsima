'use strict';
import { test } from 'tape';
import { Sharpie } from './sharpie';
//test = require('tape');

test('Sharpie should have a color', (test) => {
  let first: Sharpie = new Sharpie('blue', 1.01);
  test.notEqual( '', first.colOR(), 'should have a name longer than zero'); 
  test.end();
})

test('Sharpie widt number pair', (test) => {
  let second: Sharpie = new Sharpie('yellow',10,100);
  test.notEqual( '', second.colOR(), 'should bark longer than zero'); 
  test.end();
})