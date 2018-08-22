class Domino implements Comparable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}

export {Domino};