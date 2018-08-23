import { test } from 'tape';
import * as firsttest from './firsttest';

test('add 2 numbers', t => {
  const actual = firsttest.addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test subNum()', t => {
  t.equal(firsttest.subNum(2, 1), 1);
  t.end();
})