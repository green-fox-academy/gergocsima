export{}
'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let list = ['Paul', 'Mark', 'Sean'];
let ownerList = [];
function candieLogger (list) {
for (let i: number = 0; i < students.length; i++) {
  if (list.indexOf(students[i].name) != -1 && students[i].candies > 4) {
    //console.log(students[i].name, students[i].candies)
    ownerList = ownerList + students[i].name;
  } else {
    // console.log('No valid name in the list');
  }
}
return ownerList;
}

console.log(candieLogger(list));

let candiesNum: number = 0;
let whoHas = [];
function yearsLog(list) {
  for (let i: number = 0; i < students.length; i++) {
    if (list.indexOf((students[i].name)) != -1){
        candiesNum = candiesNum + students[i].candies;
        whoHas.push(students[i].name);
      } else {
        //console.log('less then 5 candies guy');
      }
    } /* else {
      // console.log('No valid name in the list');
    } */
    let avarage = candiesNum/whoHas.length;
    return candiesNum+'_'+avarage;
  }

console.log(yearsLog(list));