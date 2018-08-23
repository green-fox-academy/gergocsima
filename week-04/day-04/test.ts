'use strict'
import { Apple } from './apples';
import { test } from 'tape';

test('apple test', (test) => {
  let apple2: Apple = new Apple('apple');
  test.equal('apple', apple2.getApple(), 'should be apple');
  test.end();

}
)