import { Reservationy } from "./reservationy";

class Reservation implements Reservationy {
  DOW: string;
  reservationCode: string


  constructor() {
    this.reservationCode = this.getCodeBooking();
    this.DOW = this.getDowBooking();
  }

  getDowBooking(): any {
    try {
      let daysOfTheWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      return daysOfTheWeek[Math.floor(Math.random() * daysOfTheWeek.length)];
    }
    catch (err) {
      throw new Error("Method not implemented.");
    }
  }
  getCodeBooking(): any {
    try {
      let argsToUse: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      let codeOfBook: string = '';
      for (let i: number = 0; i <= 8; i++) {
        codeOfBook += argsToUse[Math.floor(Math.random() * argsToUse.length)];
      }
      return codeOfBook;
    } catch{
      throw new Error("Method not implemented.");

    }
  }
  printCode() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);

  }
}


let reservation1: Reservation = new Reservation();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
reservation1.printCode();
// console.log(`Booking# ${this.getCodeBooking} for ${this.getDowBooking}`);

// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)


// Booking# 1WBA3OMU for THU
// Booking# 0V5OH7VS for WED
// Booking# CV6QOAJO for MON
// Booking# 03GHEJMV for SAT
// Booking# M5JFB32I for THU
// Booking# W30PF0E0 for SAT
// Booking# S0R70GMN for SAT
// Booking# 3E032B3C for WED
// Booking# OD27E36J for SAT
// Booking# 4MEU0657 for MON