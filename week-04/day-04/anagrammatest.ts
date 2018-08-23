import {test} from 'tape';
import { anagramma } from './anagramm'

test('Anagram function should return true', (t) => {
 const actual = anagramma('was', 'saw');
 const expected = true;
 t.equal( actual, expected, 'It has to be true cause this is anagram!');
 t.end();
})