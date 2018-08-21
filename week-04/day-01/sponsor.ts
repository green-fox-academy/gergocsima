// Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// company: name of the company
// hiredStudents: number of students hired
// method:
// introduce(): "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
// hire(): increase hiredStudents by 1
// getGoal(): prints out "Hire brilliant junior software developers."
// The Sponsor class has the following constructors:

// Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
// Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0
'use strict';
export class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;
constructor(name: string, age: number, gender: string,company:string,hiredStudents:number) {
  this.name = name;
  this.age = age;
  this.gender=gender;
  this.company=company;
  this.hiredStudents=hiredStudents;
}
introduce() {
  console.log('Hi,I\'m '+this.name+', a '+this.age+' year old '+this.gender+'who represents '+this.company+' and hired '+this.hiredStudents+' students so far.');
}
getGoal(){
  console.log('Hire brilliant junior software developers.');
}
hire(){
  console.log(this.hiredStudents+1);
}
}
let Sponsor1: Sponsor = new Sponsor('Jane Doe',30,'female','Google',0);
Sponsor1.introduce();
Sponsor1.getGoal();
Sponsor1.hire();