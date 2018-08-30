//"The Meaning of Life" -> "The fine game of nil"
//"The Great British Weather" -> "Harsh, bitter, wet heritage."
// import { test } from 'tape';

const test = require ('tape')
import { anagramChecker } from './anagramm';
declare function require(path: string): any;


test('Is it true?', (t) => {
  t.equal(anagramChecker("The Meaning of Life","The fine game of nil"),true);
  t.equal(anagramChecker("The Great British Weather","Harsh, bitter, wet heritage."),true);
  t.end();
});