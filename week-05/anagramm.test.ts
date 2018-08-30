'use strict'
import { anagrammChecker } from './anagramm';
import { test } from 'tape';
import { compareStrings} from './anagramm'

test('anagramm1', (test) => {
  let string1: string = 'almaa';
  let string2: string = 'abba';
  test.equal(anagrammChecker(string1, string2), false);
  test.end();

}
)

test('anagramm2', (test) => {
  let string1: string = 'baba';
  let string2: string = 'abba';
  test.equal(anagrammChecker(string1, string2), true);
  test.end();

}
)
test('anagramm3', (test) => {
  let string1: string = 'baba';
  let string2: string = 'ab ba';
  test.equal(anagrammChecker(string1, string2), true);
  test.end();

}
)

test('anagramm4', (test) => {
  let string1: string = 'Baba';
  let string2: string = 'ab ba';
  test.equal(anagrammChecker(string1, string2), true);
  test.end();

}
)
test('anagramm5', (test) => {
  let string1: string = 'Baba';
  let string2: string = 'ab ba 1';
  console.log(compareStrings(string1))
  test.equal(anagrammChecker(string1, string2), true);
  test.end();

}
)