import { StudentGFA } from "./gfa02";
import { MentorGFA } from "./gfa03"

// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out "The name cohort has students.size students and mentors.size mentors."
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists

export class Cohort{
  name: string;
  students: StudentGFA[];
  mentors: MentorGFA[];

  constructor(name:string,){
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(Student:StudentGFA) {
    this.students.push(Student);
  }
  addMentor(Mentor: MentorGFA){
  this.mentors.push(Mentor);
  }
 info() {
  console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}
