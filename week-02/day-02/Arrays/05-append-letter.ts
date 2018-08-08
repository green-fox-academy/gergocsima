'use strict';
export { };
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
let aToAdd: string = 'a';
function appendA() {
    let output = far.map(x => x + aToAdd);

    console.log(output);
}
appendA();
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'


function appendB() {
    far.forEach(element => {
        console.log(element + aToAdd);
})}
appendB();

export = appendA;