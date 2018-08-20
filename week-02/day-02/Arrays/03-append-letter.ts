'use strict';
export { };
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
let aToAdd: string = 'a';
function appendA(list2: any) {
    let output = list2.map(x => x + aToAdd);

    console.log(output);
}
appendA(far);
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'


function appendB(list1: any) {
    list1.forEach(element => {
        console.log(element + aToAdd);
})}
appendB(far);

export = appendA;

function appendC(list: any) {
    list = list.join(aToAdd+',');
    console.log(list+aToAdd);
}
appendC(far);
