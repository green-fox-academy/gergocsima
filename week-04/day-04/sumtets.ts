import { test } from 'tape';
import { Sum, inputEmptyList, testStringu, numberPair } from './sum';
import { multyplyElements} from './sum';
import { oneElement } from './sum';
import { testNull } from './sum';

test('test if the method works',(test)=> {
test.notEqual((inputEmptyList.sumNum(),'Test sum method with empty list',));

test.notEqual((oneElement.sumNum(),[3],'Test one element'));

test.notEqual((multyplyElements.sumNum(),[2,5,6,3],'Test multi element'));
test.notEqual((testNull.sumNum(),null,'Test null element'));
test.notEqual((testStringu.sumNum(),'jaj','Test string element'));
test.notEqual((numberPair.sumNum(),20,13,'Test two numbers element'));
test.end();

})
/* export let numberPair = new Sum(1,2);
export let inputEmptyList = new Sum([]);
export let oneElement = new Sum([4]);
export let multyplyElements = new Sum([1,2,3,4,5]);
export let testNull = new Sum(null);
export let testStringu = new Sum('valami'); */
