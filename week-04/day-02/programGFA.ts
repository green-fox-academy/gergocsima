import { StudentGFA } from "./gfa02";
import { MentorGFA } from "./gfa03";
import { PersonGFA } from "./gfa01";
import { SponsorGFA } from "./gfa04";
import { Cohort } from "./gfa05";

let people = [];
let mark = new PersonGFA('Mark', 46, 'male');
people.push(mark);
let jane = new PersonGFA();
people.push(jane);
let john = new StudentGFA('John Doe', 20, 'male','BME');
people.push(john);
let student = new StudentGFA();
people.push(student);

let gandhi = new MentorGFA('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new MentorGFA();
people.push(mentor);

let elon = new SponsorGFA('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
let sponsor = new SponsorGFA();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
 elon.hire();
}

for (let i = 0; i < 4; i++) {
 sponsor.hire();
}

for (let person of people) {
 person.introduce();
 person.getGoal();
}

let awesome: Cohort= new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();