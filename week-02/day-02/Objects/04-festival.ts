'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

let enter: any = [];
function securityCheck(list: any) {
  for (let i: number = 0; i < list.lenght; i++) {
    if (list[i].guns != 0) {
      watchlist.push(list[i]);
    }
  }
  for (let k: number = 0; k < list.lenght; k++) {
    if (list[k].alcohol > 0) {
      securityAlcoholLoot = securityAlcoholLoot + list[k].alcohol;
      //console.log(list[i].alcohol);
      list[k].alcohol = 0;
      enter.push(list[k]);
      //return securityAlcoholLoot;
    }
    else {
      enter.push(list[k]);
    }
  }
  console.log(enter);
  //console.log('enter '+enter);
  //console.log('has gun '+watchlist);
  //onsole.log('Amount of alcohol confiscated :'+securityAlcoholLoot)
}
/* console.log(queue[0].guns);
console.log(queue[0].guns !=0);
console.log(watchlist);
watchlist.push(queue[0]);
console.log(watchlist);
console.log(queue[1].alcohol);
queue[1].alcohol=0;
console.log(queue[1].alcohol);
console.log(enter);
enter.push(queue[1]);
console.log(enter); */

securityCheck(queue);
console.log(securityCheck(queue));
