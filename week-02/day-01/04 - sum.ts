// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
export{}
var givenNumber: number = 10;

function sum(givenNumber:number) {
    let summ: number = 0;
    for(let i: number = 0; i<=givenNumber;i++) {
        summ=summ+i;
        /*console.log(summ);*/
}
/*console.log(summ);
}
sum(givenNumber);*/
return summ;
}

console.log(sum(givenNumber));