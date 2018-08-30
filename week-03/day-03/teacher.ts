import { Student } from "./student";

// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()
export class Teacher{
  name : string;

constructor(name:string) {
  this.name = name;
}
  public teach() {
    Student.learn();
  }
  
  
  public answer() {

  }
}

