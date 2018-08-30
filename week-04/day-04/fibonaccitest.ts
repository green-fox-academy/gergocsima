import { test } from 'tape';
import { fibonacciRec } from './fibonacci';
import { inputEmptyList, oneElement, multyplyElements, testNull, testStringu, numberPair } from './fibonacci';


test('Fibonacci function should return the desired fibonacci number', (t) => {
  const actual = fibonacciRec(3);
  const expected = 2;
  t.equal(actual, expected, `It has to be ${expected} cause this the ${actual}th fibonacci number!`);
  t.end();
  test.notEqual((inputEmptyList.fibonacciRec(), 'Test sum method with empty list'));
  test.notEqual((oneElement.fibonacciRec(), [3], 'Test one element'));
  test.notEqual((multyplyElements.fibonacciRec(), [2, 5, 6, 3], 'Test multi element'));
  test.notEqual((testNull.fibonacciRec(), null, 'Test null element'));
  test.notEqual((testStringu.fibonacciRec(), 'jaj', 'Test string element'));
  test.notEqual((numberPair.fibonacciRec, 20, 13, 'Test two numbers element'));
  test.end();

})