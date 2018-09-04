
class Station {
  gasAmount: number;
  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }
  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;

  }
}

export class Car {
  gasAmount: number;
  capacity: number;
  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}


let petrol1: Station = new Station(1000);
let car1: Car = new Car();
petrol1.refill(car1);
console.log(car1);


// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100