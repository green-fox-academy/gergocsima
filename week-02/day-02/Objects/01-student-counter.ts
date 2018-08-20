'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


let list = ['Paul', 'Mark', 'Olaf'];
let candiesNum: number = 0;
function candieLogger (list) {
for (let i: number = 0; i < students.length; i++) {
  if (list.indexOf(students[i].name) != -1) {
    console.log(students[i].name, students[i].candies)
    candiesNum = candiesNum + students[i].candies;
  } else {
    // console.log('No valid name in the list');
  }
}
return candiesNum;
}

console.log(candieLogger(list));

let yearsNum: number = 0;
function yearsLog(list) {
  for (let i: number = 0; i < students.length; i++) {
    if (list.indexOf((students[i].name)) != -1 && students[i].candies <5){
        yearsNum = yearsNum + students[i].age;
      } else {
        //console.log('less then 5 candies guy');
      }
    } /* else {
      // console.log('No valid name in the list');
    } */
    return yearsNum;
  }

console.log(yearsLog(list));