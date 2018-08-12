// -  Create a function called `factorio`
//    that returns it's input's factorial

export { }
let inputNr: number = 5;
function factorio(inputNr: number) {
    let summ: number = 1;
    for (let i: number = inputNr; i >0; i--) {
        summ = summ * i;
        /*console.log(summ);*/
    }
    return summ;
}

console.log('The factorial of ',inputNr,'is :',factorio(inputNr));

