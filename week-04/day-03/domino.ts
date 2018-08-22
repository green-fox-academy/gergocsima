class Domino implements Comparable {
  compareTo(other: Comparable): number {
    dominoes.sort(function (a: Domino , b: Domino): number {
      return a.compareTo(b);;
  }
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}

export {Domino};