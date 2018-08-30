import { Reservationy } from "./reservatony";

class Reservation implements Reservationy {
  dow: string []= ['MON','TUE','WED','THU','FRI','SUN','SAT']
  letterAndNumbers: string[]=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','x','y']
  bookingCode: string ='';
  constructor() {
    
  }

  getDowBooking(){
    return this.dow[Math.floor(Math.random()*this.dow.length)];
  }
  getCodeBooking(){
    for ( let i: number = 0; i<=8; i++) {
      this.bookingCode.concat(this.letterAndNumbers[Math.floor(Math.random()*this.letterAndNumbers.length)]);
  } return this.bookingCode;
}
}
let reservation1: Reservation = new Reservation();
console.log(reservation1);
