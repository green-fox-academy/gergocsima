'use strict';
import { PersonGFA } from './gfa01'

export class StudentGFA extends PersonGFA {
previousOrganization: string;
skippedDays: number;

constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string ='The school of life',skippedDays: number) {
super(name, age, gender)  
this.previousOrganization=previousOrganization;
this.skippedDays=0;
}
getGoal() {
  console.log(`My goal is: Be a junior software developer.`)
}
introduce(){
  console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
}
skipDays(numberOfDays){
  console.log(this.skippedDays+numberOfDays);
}
}

// skippedDays: the number of days skipped from the course
// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course
// methods:
// getGoal(): prints out "My goal is: Be a junior software developer."
// introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
// skipDays(numberOfDays): increases skippedDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

